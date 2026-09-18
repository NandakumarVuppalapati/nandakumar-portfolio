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
// instead of at the Hero. Root cause: the browser's own scroll restoration
// (history.scrollRestoration = "auto", the default) replays whatever scrollY
// this tab last had for this page — so if you'd scrolled down to Contact
// before hitting refresh, or reopened a tab the browser kept alive in the
// background, it snaps straight back to that old position. ScrollManager
// (a React component) also turns this off, but a useEffect only runs after
// hydration — by then the browser has usually already applied its
// restoration for this load, so disabling it there was closing the door
// after the scroll jump already happened. Doing it here, in a
// beforeInteractive script, runs before the browser gets to restore
// anything on this very load, not just future ones.
const SCROLL_RESTORATION_SCRIPT = `
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
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
