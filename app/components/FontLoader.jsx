"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSanityContent } from "./SanityProvider";

// Maps font values to Google Fonts URL format
const fontUrlMap = {
  Space_Grotesk: "Space+Grotesk",
  Inter: "Inter",
  Poppins: "Poppins",
  Montserrat: "Montserrat",
  Raleway: "Raleway",
  Open_Sans: "Open+Sans",
  Lato: "Lato",
  Roboto: "Roboto",
  Playfair_Display: "Playfair+Display",
  DM_Sans: "DM+Sans",
  Outfit: "Outfit",
  Sora: "Sora",
};

// Maps font values to CSS font-family names
const fontFamilyMap = {
  Space_Grotesk: "'Space Grotesk'",
  Inter: "'Inter'",
  Poppins: "'Poppins'",
  Montserrat: "'Montserrat'",
  Raleway: "'Raleway'",
  Open_Sans: "'Open Sans'",
  Lato: "'Lato'",
  Roboto: "'Roboto'",
  Playfair_Display: "'Playfair Display'",
  DM_Sans: "'DM Sans'",
  Outfit: "'Outfit'",
  Sora: "'Sora'",
};

// Determine the page key from pathname
function getPageKey(pathname) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/pricing")) return "pricing";
  return null;
}

function loadFont(id, fontKey, weights) {
  const fontUrlName = fontUrlMap[fontKey];
  const fontFamily = fontFamilyMap[fontKey];
  if (!fontUrlName || !fontFamily) return null;

  const weightStr = (weights || ["400", "500", "600", "700"]).join(";");
  const url = `https://fonts.googleapis.com/css2?family=${fontUrlName}:wght@${weightStr}&display=swap`;

  const existing = document.getElementById(id);
  if (existing) existing.remove();

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);

  return fontFamily;
}

export default function FontLoader() {
  const { settings, pageFonts } = useSanityContent();
  const pathname = usePathname();

  useEffect(() => {
    const pageKey = getPageKey(pathname);
    const pageFont = pageKey && pageFonts[pageKey];

    // Determine which font to use: page-specific overrides site-wide
    const activeFont = pageFont ? pageFont.font : settings.font;
    const activeWeights = pageFont ? pageFont.fontWeights : settings.fontWeights;

    // Don't override if using default font (already loaded by Next.js)
    if (!activeFont || activeFont === "Space_Grotesk") {
      // Reset to default
      document.body.style.fontFamily = "";
      const el = document.getElementById("sanity-font");
      if (el) el.remove();
      return;
    }

    const fontFamily = loadFont("sanity-font", activeFont, activeWeights);
    if (fontFamily) {
      document.body.style.fontFamily = `${fontFamily}, sans-serif`;
    }

    return () => {
      const el = document.getElementById("sanity-font");
      if (el) el.remove();
      document.body.style.fontFamily = "";
    };
  }, [settings.font, settings.fontWeights, pageFonts, pathname]);

  return null;
}
