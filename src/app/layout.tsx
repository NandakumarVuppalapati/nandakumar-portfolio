import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/layout/navigation";
import { ScrollManager } from "@/components/layout/scroll-manager";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nandakumar Vuppalapati — AI Data Engineer",
  description: "I build data systems that power analytics & AI.",
};

// TEMPORARY: forced dark-only for the hero review pass, ignoring any stored
// preference. Restore the localStorage-aware version before resuming
// multi-theme/light-mode work.
const THEME_INIT_SCRIPT = `
  document.documentElement.setAttribute('data-theme', 'dark');
`;

// Opening or refreshing the site was landing scrolled almost to the bottom
// instead of at the Hero. Root cause #1: the browser's own scroll
// restoration (history.scrollRestoration = "auto", the default) replays
// whatever scrollY this tab last had for this page on a reload. ScrollManager
// (a React component) also turns this off, but a useEffect only runs after
// hydration — by then the browser has usually already applied its
// restoration for this load, so disabling it there was closing the door
// after the scroll jump already happened. Setting it here, in a
// beforeInteractive script, runs before the browser gets to restore
// anything on that load.
//
// That alone didn't fully fix it, because there's a second, different
// mechanism: root cause #2 is the browser's back/forward cache (bfcache) —
// on mobile Safari especially, backgrounding the tab (switching apps,
// letting it sit) and coming back to it, or reopening a recently-used tab,
// doesn't reload the page at all. The browser resumes an exact frozen
// snapshot of it, scroll position included, and does so entirely outside
// the History API — history.scrollRestoration has no effect on it, and no
// React code re-runs (the page isn't re-rendering, it's being thawed as-is),
// so ScrollManager's effects don't fire either. That's the "just opening it"
// case landing scrolled down even with the fix above in place. The
// `pageshow` event is the one signal that DOES fire on a bfcache resume
// (with event.persisted === true) while a normal fresh load reports it as
// false, so this listener is the only hook available to correct it: reset
// to the hash target if the URL has one, otherwise straight to the top.
// Because the resumed page is already painted and visible the instant this
// fires (unlike a fresh load, where the correction happens before the user
// sees anything), the reset uses behavior: 'instant' rather than the CSS
// smooth-scroll every other scroll on this site uses — a ~1s animated
// scroll from wherever it was frozen back up to the top would itself look
// like a bug.
//
// Still reported after both of those shipped, on what sounds like a plain
// fresh open (not a resumed tab) — which points at a third mechanism
// neither of the above touches: iOS Safari can restore a tab's scroll
// position as part of its own session/tab-hibernation restore (e.g. after
// iOS reclaims Safari's memory in the background and relaunches it, or
// after Safari itself was fully closed and reopened), which behaves like a
// real navigation — scrollRestoration and pageshow's `persisted` flag don't
// reliably cover it — and can apply the old scroll position slightly later
// than this script runs, after the page has already painted at the top.
// `correctScroll` below re-asserts the top (or the hash target) a few times
// over the first half-second after load to catch that late correction too,
// on top of the two hooks above.
const SCROLL_RESTORATION_SCRIPT = `
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  function correctScroll() {
    var hash = window.location.hash;
    if (hash) {
      var el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'instant', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }
  window.addEventListener('pageshow', function (event) {
    if (!event.persisted) return;
    correctScroll();
  });
  // Repeated, no-hash-only safety net for the initial load: if there's no
  // hash to honor and the page is still sitting at a nonzero scrollY a
  // moment after load, something outside our control restored it late —
  // pull it back. Left to ScrollManager alone (its hash-target logic is
  // more careful, waiting for layout to stabilize before scrolling), this
  // only ever fires for the plain top-of-page case, so it can't fight that
  // careful hash-scroll with an early instant jump.
  [0, 100, 300, 600].forEach(function (delay) {
    setTimeout(function () {
      if (!window.location.hash && window.scrollY > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    }, delay);
  });
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <Script id="scroll-restoration-init" strategy="beforeInteractive">
          {SCROLL_RESTORATION_SCRIPT}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:rounded-md focus-visible:bg-foreground focus-visible:px-4 focus-visible:py-2 focus-visible:text-sm focus-visible:font-medium focus-visible:text-background"
        >
          Skip to content
        </a>
        <ScrollManager />
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
