import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jonathanjethro.com"),
  alternates: {
    canonical: "https://jonathanjethro.com",
  },
  title: "Jonathan Jethro - Computer Science Student",
  description:
    "Jonathan Jethro is a Computer Science Student",
  keywords:
    "Jonathan Jethro, Computer Science Student",
  openGraph: {
    locale: "en_US",
    siteName: "Jonathan Jethro",
    type: "website",
    title: "Jonathan Jethro",
    description:
      "Jonathan Jethro is a Computer Science Student.",
    url: "https://jonathanjethro.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Jethro",
  },
};  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
