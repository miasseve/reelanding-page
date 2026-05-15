import type { Metadata } from "next";
import {
  Space_Grotesk,
  Playfair_Display,
  Bricolage_Grotesque,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
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
    <html lang="en-DK" className={`${spaceGrotesk.variable} ${playfair.variable} ${bricolage.variable} ${instrumentSerif.variable}`}>
      <body className="font-[family-name:var(--font-space-grotesk)]">
        {children}
      </body>
    </html>
  );
}
