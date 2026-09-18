"use client";

import { useCallback, useEffect, useRef, useState } from "react";
// Dark-mode-only for the current production build — ThemeToggle is unused
// but kept in place (not deleted) for whenever multi-theme work resumes.
// import { ThemeToggle } from "@/components/theme/theme-toggle";

// `enabled: false` means the target section isn't built yet, so the link
// renders as inert (visible, unclickable, marked aria-disabled) rather than
// a live link to an anchor that doesn't exist on the page. Flip an entry to
// `true` in the same commit that ships its section.
// Every href is an absolute "/#id", not a bare "#id". A bare hash link only
// ever edits the current page's URL — from a project detail page
// (/systems/[slug]) there is no element with a matching id, so the NV logo
// and every nav item silently did nothing there: no visible error, the menu
// just didn't go anywhere. That's what made the site feel "stuck" once you
// were a level in — there was no working way back to the homepage at all,
// let alone to a specific section of it.
const NAV_LINKS = [
  { href: "/#about", label: "About", enabled: true },
  { href: "/#experience", label: "Experience", enabled: true },
  { href: "/#systems", label: "Systems", enabled: true },
  { href: "/#technology", label: "Stack", enabled: true },
  { href: "/#education", label: "Education", enabled: true },
  { href: "/#contact", label: "Contact", enabled: true },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeAndRestoreFocus = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  // The header is fixed, so once the page scrolls, its content sits behind
  // it unless the bar itself has a background. Below this threshold (still
  // over the Hero) it stays transparent on purpose, cinematic per the design
  // direction; past it, a solid + blurred background prevents scrolled
  // content (headings, body text) from showing through and overlapping it.
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const menuEl = menuRef.current;
    const focusable = menuEl
      ? Array.from(menuEl.querySelectorAll<HTMLElement>("a[href]"))
      : [];
    focusable[0]?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAndRestoreFocus();
        return;
      }

      if (event.key === "Tab" && focusable.length > 0) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeAndRestoreFocus]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`relative z-20 mx-auto grid h-16 max-w-[1600px] grid-cols-3 items-center border-b px-6 transition-colors duration-150 sm:px-8 lg:px-12 xl:px-16 ${
          isOpen || isScrolled
            ? "border-border bg-background/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <a
          href="/#home"
          className="justify-self-start font-mono text-sm tracking-[0.2em] text-foreground transition-colors duration-150 hover:text-accent-cyan"
        >
          NV
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center justify-self-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) =>
            link.enabled ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground-muted transition-colors duration-150 hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.href}
                aria-disabled="true"
                title="Coming soon"
                className="text-sm text-foreground-muted/40"
              >
                {link.label}
              </span>
            ),
          )}
        </nav>

        {/* col-start-3: without this, CSS grid auto-placement skips the
            center <nav> on mobile entirely — display:none removes an
            element from grid layout, it doesn't just make it invisible —
            so this div, third in DOM order but now second among the
            elements actually participating in the grid, gets auto-placed
            into column 2 instead of 3. That's the "hamburger icon sitting
            in the middle, interrupting the hero" bug: it wasn't misaligned
            so much as parked at the end of the middle column instead of
            the right one. Pinning it to column 3 explicitly keeps it there
            regardless of whether the nav item is part of the grid. */}
        <div className="col-start-3 flex items-center justify-self-end gap-4">
          <button
            ref={triggerRef}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              {isOpen ? (
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 6H17M3 10H17M3 14H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="fixed inset-x-0 top-16 bottom-0 z-10 flex flex-col gap-1 overflow-y-auto bg-background px-6 py-8 md:hidden"
        >
          {NAV_LINKS.map((link) =>
            link.enabled ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-border py-4 text-lg text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.href}
                aria-disabled="true"
                title="Coming soon"
                className="border-b border-border py-4 text-lg text-foreground/40"
              >
                {link.label}
              </span>
            ),
          )}
        </div>
      )}
    </header>
  );
}
