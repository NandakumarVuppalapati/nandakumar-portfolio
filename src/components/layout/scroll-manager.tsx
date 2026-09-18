"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fixes two related bugs: (1) opening the site fresh sometimes landed
// scrolled down near Selected Systems instead of at the Hero, and (2) using
// the "← SELECTED SYSTEMS" link on a project page to come back felt stuck —
// it would land at some arbitrary scroll offset instead of cleanly at the
// Systems section (or the top).
//
// Root cause: the browser's own scroll-restoration (`history.scrollRestoration
// = "auto"`, the default) tries to re-apply whatever scrollY a previous visit
// to this origin/history entry had. That fights with Next's client-side
// route transitions between "/systems/[slug]" and "/#systems" — the browser
// restores a stale offset instead of Next either resetting to top or
// scrolling to the hash target, which is exactly the "stuck, not landing
// near Hero" symptom.
//
// The fix: take restoration out of the browser's hands entirely and drive it
// ourselves on every route change — scroll to the hash target if the URL has
// one, otherwise straight to the top.
export function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !("scrollRestoration" in window.history)) {
      return;
    }
    window.history.scrollRestoration = "manual";
  }, []);

  useEffect(() => {
    const hash = window.location.hash;

    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    const id = hash.slice(1);
    let attempts = 0;
    let lastTop: number | null = null;
    let stableFrames = 0;
    let frame: number;

    // Don't just scroll to the target the instant it appears in the DOM —
    // on a fresh navigation into the homepage the rest of the page (images,
    // other sections) is often still streaming in below it, so its position
    // keeps moving for a few hundred ms. Scrolling immediately meant this
    // effect kept re-triggering against a moving target, landing as a few
    // visible corrective jumps instead of one clean scroll. Waiting for its
    // position to hold steady across several frames first fixes that.
    const tryScroll = () => {
      const el = document.getElementById(id);
      attempts += 1;

      if (el) {
        const top = el.getBoundingClientRect().top;
        if (lastTop !== null && Math.abs(top - lastTop) < 1) {
          stableFrames += 1;
        } else {
          stableFrames = 0;
        }
        lastTop = top;

        if (stableFrames >= 4 || attempts > 90) {
          el.scrollIntoView({ behavior: "auto", block: "start" });
          return;
        }
      }

      if (attempts < 120) {
        frame = requestAnimationFrame(tryScroll);
      }
    };

    frame = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(frame);
    // Re-run on every route change, including "/systems/x" -> "/#systems".
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
