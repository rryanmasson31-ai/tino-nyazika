"use client";

import { useEffect, useRef, useState } from "react";

export function isVideo(src) {
  return /\.(mp4|webm|mov|m4v)$/i.test(src);
}

export function Media({
  src,
  label,
  ratio = "ratio-post",
  caption,
  poster,
  zoomable = false,
}) {
  const video = isVideo(src);
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.muted = false;
      el.play();
      setPlaying(true);
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e) => {
      if (e.key === "Escape") setZoomed(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoomed]);

  return (
    <>
      <figure className="pf-fig">
        <div className={`pf-media ${ratio}`}>
          {video ? (
            <button
              type="button"
              className="pf-video-thumb"
              onClick={toggle}
              aria-label={playing ? `Pause ${label}` : `Play ${label}`}
              aria-pressed={playing}
            >
              <video
                ref={ref}
                className="pf-video"
                src={src}
                poster={poster}
                muted
                playsInline
                loop
                preload="metadata"
                onEnded={() => setPlaying(false)}
              />
              <span
                className={`pf-play ${playing ? "is-playing" : ""}`}
                aria-hidden="true"
              >
                {playing ? "❚❚" : "▶"}
              </span>
            </button>
          ) : zoomable ? (
            <button
              type="button"
              className="pf-image-thumb"
              onClick={() => setZoomed(true)}
              aria-label={`View ${label}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={label} loading="lazy" decoding="async" />
            </button>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={label} loading="lazy" decoding="async" />
          )}
        </div>
        {caption && <figcaption className="pf-caption">{caption}</figcaption>}
      </figure>

      {zoomed && (
        <div
          className="pf-lightbox"
          onClick={() => setZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <button
            type="button"
            className="pf-lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setZoomed(false);
            }}
            aria-label="Close image"
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="pf-lightbox-image"
            src={src}
            alt={label}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}