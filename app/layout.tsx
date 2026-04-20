import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "2hand2go",
  description:
    "All-in-one setup for secondhand businesses. Sell online without extra work.",
  icons: {
    icon: "/Icons/2logo.png",
  },
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
