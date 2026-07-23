import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://studynovaai.com"),
  title: {
    default: "StudyNovaAI – AI-Powered Education Platform",
    template: "%s | StudyNovaAI",
  },
  description:
    "StudyNovaAI is the world's most advanced AI-powered education platform. Generate notes, quizzes, flashcards, summaries and more with the power of AI.",
  keywords: [
    "AI education", "study tools", "AI notes generator", "AI quiz generator",
    "flashcards", "PDF summarizer", "homework helper", "study planner",
    "CGPA calculator", "GPA calculator", "pomodoro timer", "student tools",
    "StudyNovaAI", "AI learning platform",
  ],
  authors: [{ name: "StudyNovaAI Team" }],
  creator: "StudyNovaAI",
  publisher: "StudyNovaAI",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://studynovaai.com",
    siteName: "StudyNovaAI",
    title: "StudyNovaAI – AI-Powered Education Platform",
    description: "Transform your learning with AI. Generate notes, quizzes, flashcards and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "StudyNovaAI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "StudyNovaAI – AI-Powered Education Platform",
    description: "Transform your learning with AI. Generate notes, quizzes, flashcards and more.",
    images: ["/og-image.png"],
    creator: "@StudyNovaAI",
  },
  alternates: { canonical: "https://studynovaai.com" },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#06070f" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('studynova-theme') || 'light';
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-[#06070f] text-slate-900 dark:text-slate-100 antialiased">
        <ThemeProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "var(--card)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "12px 16px",
                fontSize: "14px",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
