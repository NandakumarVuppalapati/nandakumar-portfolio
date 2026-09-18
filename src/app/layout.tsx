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
