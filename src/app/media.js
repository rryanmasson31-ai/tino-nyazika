"use client";

import { useEffect, useState } from "react";

export function isVideo(src) {
  return /\.(mp4|webm|mov|m4v)$/i.test(src);
}

export function Media({ src, label, ratio = "ratio-post", caption, poster }) {
  const video = isVideo(src);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <figure className="pf-fig">
        <div className={`pf-media ${ratio}`}>
          {video ? (
            <button
              type="button"
              className="pf-video-thumb"
              onClick={() => setOpen(true)}
              aria-label={`Play ${label}`}
            >
              <video
                className="pf-video"
                src={`${src}#t=0.5`}
                poster={poster}
                muted
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              <span className="pf-play" aria-hidden="true">▶</span>
            </button>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={label} loading="lazy" decoding="async" />
          )}
        </div>
        {caption && <figcaption className="pf-caption">{caption}</figcaption>}
      </figure>

      {open && (
        <div
          className="pf-lightbox"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <button
            type="button"
            className="pf-lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            aria-label="Close video"
          >
            ✕
          </button>
          <video
            className="pf-lightbox-video"
            src={src}
            controls
            autoPlay
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}