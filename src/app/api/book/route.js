import nodemailer from "nodemailer";
import { google } from "googleapis";

/* ---------- SMTP env ---------- */
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_SECURE = String(process.env.SMTP_SECURE || "false") === "true";
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

const OWNER_EMAIL = process.env.BOOKING_OWNER_EMAIL || "hello@tinonyazika.com";
const FROM_EMAIL = process.env.BOOKING_FROM_EMAIL || SMTP_USER || OWNER_EMAIL;
const FROM_NAME = process.env.BOOKING_FROM_NAME || "Tino Nyazika";

/* ---------- Google env ---------- */
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || "primary";

/* ---------- validation ---------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_LEAD_MS = 60 * 60 * 1000;
const MAX_AHEAD_MS = 90 * 24 * 60 * 60 * 1000;

/* ---------- mailer ---------- */
let mailer;
function getMailer() {
  if (mailer) return mailer;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  mailer = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return mailer;
}

/* ---------- google calendar ---------- */
let calendarClient;
function getCalendar() {
  if (calendarClient) return calendarClient;
  if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) return null;

  const auth = new google.auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
  auth.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });
  calendarClient = google.calendar({ version: "v3", auth });
  return calendarClient;
}

async function createCalendarEvent({ name, email, notes, start, end, timezone }) {
  const calendar = getCalendar();
  if (!calendar) return null;

  const res = await calendar.events.insert({
    calendarId: GOOGLE_CALENDAR_ID,
    conferenceDataVersion: 1,
    sendUpdates: "all",
    requestBody: {
      summary: `Call with ${name}`,
      description: [
        `Booked via tinonyazika.com`,
        "",
        `Name:  ${name}`,
        `Email: ${email}`,
        notes?.trim() ? `\nNotes:\n${notes.trim()}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
      start: { dateTime: start.toISOString(), timeZone: timezone || "UTC" },
      end: { dateTime: end.toISOString(), timeZone: timezone || "UTC" },
      attendees: [{ email }],
      conferenceData: {
        createRequest: {
          requestId: `booking-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: "email", minutes: 60 },
          { method: "popup", minutes: 10 },
        ],
      },
    },
  });

  return {
    eventId: res.data.id,
    htmlLink: res.data.htmlLink,
    meetLink: res.data.hangoutLink || null,
  };
}

/* ---------- helpers ---------- */
function fmt(d, tz) {
  try {
    return d.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
      timeZone: tz || "UTC",
    });
  } catch {
    return d.toUTCString();
  }
}

/* ---------- handler ---------- */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, notes, startISO, timezone, durationMinutes, website } = body || {};

  if (website) return Response.json({ ok: true });

  if (!name || typeof name !== "string" || name.trim().length < 2)
    return Response.json({ error: "Please enter your name." }, { status: 400 });

  if (!email || !EMAIL_RE.test(email))
    return Response.json({ error: "Please enter a valid email." }, { status: 400 });

  if (name.length > 120 || email.length > 200 || (notes && notes.length > 2000))
    return Response.json({ error: "Input too long." }, { status: 400 });

  const start = new Date(startISO);
  if (isNaN(start.getTime()))
    return Response.json({ error: "Invalid time." }, { status: 400 });

  if (start.getTime() < Date.now() + MIN_LEAD_MS)
    return Response.json({ error: "Please pick a time at least 1 hour ahead." }, { status: 400 });

  if (start.getTime() > Date.now() + MAX_AHEAD_MS)
    return Response.json({ error: "Please pick a date within the next 90 days." }, { status: 400 });

  const duration = Math.min(Math.max(Number(durationMinutes) || 30, 15), 120);
  const end = new Date(start.getTime() + duration * 60_000);
  const readable = fmt(start, timezone || "UTC");

  /* ---- 1. Create Google Calendar event + Meet link ---- */
  let calendarInfo = null;
  try {
    calendarInfo = await createCalendarEvent({
      name,
      email,
      notes,
      start,
      end,
      timezone,
    });
  } catch (err) {
    console.error("[book] Google Calendar insert failed:", err?.message || err);
    // Don't block the booking — emails still go out
  }

  const meetLink = calendarInfo?.meetLink || null;

  /* ---- 2. Send emails ---- */
  const transport = getMailer();

  if (!transport) {
    console.log("[book] SMTP not configured — logging booking instead:");
    console.log({ name, email, notes, startISO, timezone, readable, meetLink });
    return Response.json({ ok: true, dev: true, meetLink });
  }

  const ownerSubject = `New booking: ${name} — ${readable}`;
  const ownerLines = [
    "New meeting request from your portfolio site.",
    "",
    `Name:     ${name}`,
    `Email:    ${email}`,
    `When:     ${readable}`,
    `Duration: ${duration} min`,
    `Timezone: ${timezone || "unknown"}`,
  ];
  if (meetLink) ownerLines.push(`Meet:     ${meetLink}`);
  if (calendarInfo?.htmlLink) ownerLines.push(`Calendar: ${calendarInfo.htmlLink}`);
  ownerLines.push("", "Notes:", notes?.trim() || "(none)");

  const ownerText = ownerLines.join("\n");

  const visitorSubject = `Your call with Tino is booked — ${readable}`;
  const visitorLines = [
    `Hi ${name.split(" ")[0]},`,
    "",
    "Thanks for booking. Here are the details:",
    "",
    `   ${readable}`,
    `   ${duration} minutes`,
    "",
  ];
  if (meetLink) {
    visitorLines.push("Join the Google Meet:", `   ${meetLink}`, "");
  } else {
    visitorLines.push("You'll receive a Google Meet link shortly.", "");
  }
  visitorLines.push(
    "A calendar invite is on its way. If anything comes up and you need to",
    "reschedule, just reply to this email.",
    "",
    "— Tino",
    `   ${OWNER_EMAIL}`
  );

  const visitorText = visitorLines.join("\n");

  try {
    await transport.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: OWNER_EMAIL,
      replyTo: email,
      subject: ownerSubject,
      text: ownerText,
    });

    await transport.sendMail({
      from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
      to: email,
      replyTo: OWNER_EMAIL,
      subject: visitorSubject,
      text: visitorText,
    });

    return Response.json({ ok: true, meetLink });
  } catch (err) {
    console.error("[book] SMTP send failed:", err);
    return Response.json(
      { error: "Could not send your booking. Please try again in a moment." },
      { status: 500 }
    );
  }
}