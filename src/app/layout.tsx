import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seanavc.dev"),
  title: "Seanav Chattopadhyay — Software Engineer",
  description:
    "Software Engineer / ML & Data — building KubeBench, an ML document classifier, and production infrastructure at Mattel. First Class Computer Science, University of Kent.",
  openGraph: {
    title: "Seanav Chattopadhyay — Software Engineer",
    description:
      "Software Engineer / ML & Data — KubeBench, an ML document classifier, and production infrastructure at Mattel.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// Prevents a flash of the wrong theme before hydration.
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || 'dark';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
