import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "REe — Retail Automation Consulting",
  description:
    "We automate what slows you down so you can grow. Retail, fashion, merchandising and software experts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-DK" className={`${spaceGrotesk.variable}`}>
      <body className="font-[family-name:var(--font-space-grotesk)]">
        {children}
      </body>
    </html>
  );
}
