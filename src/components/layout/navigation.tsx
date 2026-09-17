"use client";

import { useCallback, useEffect, useRef, useState } from "react";
// Dark-mode-only for the current production build — ThemeToggle is unused
// but kept in place (not deleted) for whenever multi-theme work resumes.
// import { ThemeToggle } from "@/components/theme/theme-toggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#systems", label: "Systems" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeAndRestoreFocus = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
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
        className={`relative z-20 mx-auto grid h-16 max-w-[1600px] grid-cols-3 items-center px-6 transition-colors duration-150 sm:px-8 lg:px-12 xl:px-16 ${
          isOpen ? "bg-background" : "bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="justify-self-start font-mono text-sm tracking-[0.2em] text-foreground transition-colors duration-150 hover:text-accent-cyan"
        >
          NV
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center justify-self-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-muted transition-colors duration-150 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-4">
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
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="border-b border-border py-4 text-lg text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
