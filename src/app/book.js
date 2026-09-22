"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Calendar, Check, Clock } from "lucide-react";

/* ---------- CONFIG ---------- */
const WORK_DAYS = [1, 2, 3, 4, 5]; // Mon–Fri
const WORK_START = 9;              // 9:00
const WORK_END = 17;               // 17:00
const SLOT_MINUTES = 30;
const MEETING_LENGTH_MIN = 30;
const CONTACT_EMAIL = "hello@tinonyazika.com";

/* ---------- helpers ---------- */
function startOfDay(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function sameDay(a, b) {
  return (
    a &&
    b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function monthLabel(year, month) {
  return new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
}

function buildMonthGrid(year, month) {
  const first = new Date(year, month, 1);
  const startIdx = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startIdx; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function buildSlots(date) {
  const out = [];
  const base = startOfDay(date);
  for (let h = WORK_START; h < WORK_END; h++) {
    for (let m = 0; m < 60; m += SLOT_MINUTES) {
      const slot = new Date(base);
      slot.setHours(h, m, 0, 0);
      out.push(slot);
    }
  }
  return out;
}

function fmtTime(d) {
  return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function fmtDayLong(d) {
  return d.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function gcalUrl({ start, end, title, details, location }) {
  const fmt = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${fmt(start)}/${fmt(end)}`,
    details: details || "",
    location: location || "",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function icsDataUrl({ start, end, title, details }) {
  const fmt = (d) => d.toISOString().replace(/[-:]|\.\d{3}/g, "");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Tino Nyazika//Booking//EN",
    "BEGIN:VEVENT",
    `UID:${Date.now()}@tinonyazika.com`,
    `DTSTAMP:${fmt(new Date())}`,
    `DTSTART:${fmt(start)}`,
    `DTEND:${fmt(end)}`,
    `SUMMARY:${title}`,
    `DESCRIPTION:${(details || "").replace(/\n/g, "\\n")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}

/* ---------- component ---------- */
export function Book() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState("pick");
  const [form, setForm] = useState({ name: "", email: "", notes: "", website: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [meetLink, setMeetLink] = useState(null);

  const cells = useMemo(() => buildMonthGrid(view.year, view.month), [view]);
  const slots = useMemo(() => (selectedDate ? buildSlots(selectedDate) : []), [selectedDate]);
  const now = new Date();

  useEffect(() => {
    setSelectedTime(null);
  }, [selectedDate]);

  function prevMonth() {
    setView((v) =>
      v.month === 0 ? { year: v.year - 1, month: 11 } : { year: v.year, month: v.month - 1 }
    );
  }
  function nextMonth() {
    setView((v) =>
      v.month === 11 ? { year: v.year + 1, month: 0 } : { year: v.year, month: v.month + 1 }
    );
  }

  function dayDisabled(d) {
    if (!d) return true;
    if (startOfDay(d) < today) return true;
    if (!WORK_DAYS.includes(d.getDay())) return true;
    return false;
  }

  function slotDisabled(slot) {
    return slot.getTime() < now.getTime() + 2 * 60 * 60 * 1000;
  }

  function pickDate(d) {
    if (dayDisabled(d)) return;
    setSelectedDate(d);
  }

  function pickTime(s) {
    if (slotDisabled(s)) return;
    setSelectedTime(s);
  }

  function continueToForm() {
    if (!selectedTime) return;
    setStep("form");
  }

  function backToPick() {
    setStep("pick");
    setError("");
  }

  async function submit(e) {
    e.preventDefault();
    if (status === "submitting") return;
    if (!form.name.trim() || !form.email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    setError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          notes: form.notes.trim(),
          website: form.website,
          startISO: selectedTime.toISOString(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          durationMinutes: MEETING_LENGTH_MIN,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Booking failed. Please try again.");
      }

      if (data.meetLink) setMeetLink(data.meetLink);
      setStep("done");
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setStatus("idle");
    }
  }

  const endTime = selectedTime
    ? new Date(selectedTime.getTime() + MEETING_LENGTH_MIN * 60_000)
    : null;

  return (
    <section id="book" className="section-tight shell book-section">
      <div className="section-heading compact">
        <p className="section-kicker">Book a call</p>
        <h2 className="title-md">Pick a time that works for you.</h2>
      </div>

      <div className="book-card">
        {step === "pick" && (
          <>
            <div className="book-calendar">
              <div className="book-cal-head">
                <button
                  type="button"
                  className="book-cal-nav"
                  onClick={prevMonth}
                  aria-label="Previous month"
                >
                  <ArrowLeft size={16} />
                </button>
                <span className="book-cal-month">{monthLabel(view.year, view.month)}</span>
                <button
                  type="button"
                  className="book-cal-nav"
                  onClick={nextMonth}
                  aria-label="Next month"
                >
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="book-cal-weekdays">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              <div className="book-cal-grid">
                {cells.map((d, i) => {
                  if (!d) return <span key={i} className="book-cal-empty" />;
                  const isSelected = sameDay(d, selectedDate);
                  const disabled = dayDisabled(d);
                  return (
                    <button
                      type="button"
                      key={i}
                      className={`book-cal-day${isSelected ? " is-selected" : ""}`}
                      disabled={disabled}
                      onClick={() => pickDate(d)}
                    >
                      {d.getDate()}
                    </button>
                  );
                })}
              </div>

              <p className="book-tz">
                <Clock size={13} />
                Times shown in your timezone:{" "}
                <strong>{Intl.DateTimeFormat().resolvedOptions().timeZone}</strong>
              </p>
            </div>

            <div className="book-slots-panel">
              {!selectedDate ? (
                <div className="book-empty">
                  <Calendar size={22} />
                  <strong>Pick a day</strong>
                  <span>Then choose a time that suits you.</span>
                </div>
              ) : (
                <>
                  <div className="book-slots-head">
                    <span className="book-slots-day">{fmtDayLong(selectedDate)}</span>
                    <span className="book-slots-count">
                      {slots.filter((s) => !slotDisabled(s)).length} slots
                    </span>
                  </div>

                  <div className="book-slots">
                    {slots.map((s) => {
                      const disabled = slotDisabled(s);
                      const isSel =
                        sameDay(s, selectedTime) && selectedTime?.getTime() === s.getTime();
                      return (
                        <button
                          type="button"
                          key={s.toISOString()}
                          className={`book-slot${isSel ? " is-selected" : ""}`}
                          disabled={disabled}
                          onClick={() => pickTime(s)}
                        >
                          {fmtTime(s)}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    className="button button-primary book-continue"
                    disabled={!selectedTime}
                    onClick={continueToForm}
                  >
                    Continue
                    <ArrowRight size={15} />
                  </button>
                </>
              )}
            </div>
          </>
        )}

        {step === "form" && (
          <form className="book-form" onSubmit={submit}>
            <button type="button" className="book-back" onClick={backToPick}>
              <ArrowLeft size={14} /> Change time
            </button>

            <div className="book-summary">
              <Calendar size={16} />
              <div>
                <strong>{fmtDayLong(selectedTime)}</strong>
                <span>
                  {fmtTime(selectedTime)} – {fmtTime(endTime)} · {MEETING_LENGTH_MIN} min
                </span>
              </div>
            </div>

            <label className="book-field">
              <span>Your name</span>
              <input
                className="book-input"
                type="text"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                required
                autoComplete="name"
              />
            </label>

            <label className="book-field">
              <span>Email</span>
              <input
                className="book-input"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                required
                autoComplete="email"
              />
            </label>

            <label className="book-field">
              <span>What would you like to talk about? (optional)</span>
              <textarea
                className="book-textarea"
                rows={4}
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
              />
            </label>

            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
              style={{
                position: "absolute",
                left: "-10000px",
                width: 1,
                height: 1,
                opacity: 0,
              }}
            />

            {error && <p className="book-error">{error}</p>}

            <button
              type="submit"
              className="button button-primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Booking…" : "Confirm booking"}
            </button>

            <p className="book-fineprint">
              You&apos;ll get a confirmation email. Need to reschedule? Just reply to it.
            </p>
          </form>
        )}

        {step === "done" && (
          <div className="book-success">
            <span className="book-success-icon" aria-hidden>
              <Check size={26} />
            </span>
            <h3>You&apos;re booked.</h3>
            <p>
              <strong>{fmtDayLong(selectedTime)}</strong> at{" "}
              <strong>{fmtTime(selectedTime)}</strong> ({MEETING_LENGTH_MIN} min). A confirmation
              is on its way to <strong>{form.email}</strong>.
            </p>

            {meetLink && (
              <p className="book-fineprint">
                Google Meet link: <a href={meetLink}>{meetLink}</a>
              </p>
            )}

            <div className="book-success-actions">
              {meetLink && (
                <a
                  className="button button-primary"
                  href={meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Google Meet
                </a>
              )}
              <a
                className="button button-outline"
                href={gcalUrl({
                  start: selectedTime,
                  end: endTime,
                  title: "Meeting with Tino Nyazika",
                  details: form.notes || "Booked via tinonyazika.com",
                  location: meetLink || "",
                })}
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Google Calendar
              </a>
              <a
                className="button button-outline"
                href={icsDataUrl({
                  start: selectedTime,
                  end: endTime,
                  title: "Meeting with Tino Nyazika",
                  details: form.notes || "Booked via tinonyazika.com",
                })}
                download="meeting.ics"
              >
                Download .ics
              </a>
            </div>

            <p className="book-fineprint">
              Questions before then? Email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}