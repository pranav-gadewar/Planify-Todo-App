import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Planify — Organize Your Tasks Efficiently",
    template: "%s | Planify",
  },
  description:
    "Planify is a modern task management app that helps you organize daily tasks, boost productivity, and stay focused.",
  keywords: [
    "todo app",
    "task manager",
    "productivity",
    "planify",
    "nextjs todo",
  ],
  authors: [{ name: "Planify Team" }],
  creator: "Planify",
  metadataBase: new URL("https://planify.app"),
  openGraph: {
    title: "Planify — Task Management Made Simple",
    description:
      "Manage your daily tasks efficiently with Planify.",
    siteName: "Planify",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#111",
              color: "#fff",
              border: "1px solid #333"
            }
          }}
        />
      </body>
    </html>
  );
}