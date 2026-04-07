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
  Nunito: "Nunito",
  Nunito_Sans: "Nunito+Sans",
  Work_Sans: "Work+Sans",
  Rubik: "Rubik",
  Karla: "Karla",
  Manrope: "Manrope",
  Plus_Jakarta_Sans: "Plus+Jakarta+Sans",
  Figtree: "Figtree",
  Lexend: "Lexend",
  Urbanist: "Urbanist",
  Archivo: "Archivo",
  Cabin: "Cabin",
  Barlow: "Barlow",
  Source_Sans_3: "Source+Sans+3",
  Josefin_Sans: "Josefin+Sans",
  Quicksand: "Quicksand",
  Mulish: "Mulish",
  Libre_Franklin: "Libre+Franklin",
  Albert_Sans: "Albert+Sans",
Merriweather: "Merriweather",
  Lora: "Lora",
  PT_Serif: "PT+Serif",
  Crimson_Text: "Crimson+Text",
  EB_Garamond: "EB+Garamond",
  Cormorant_Garamond: "Cormorant+Garamond",
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
  Nunito: "'Nunito'",
  Nunito_Sans: "'Nunito Sans'",
  Work_Sans: "'Work Sans'",
  Rubik: "'Rubik'",
  Karla: "'Karla'",
  Manrope: "'Manrope'",
  Plus_Jakarta_Sans: "'Plus Jakarta Sans'",
  Figtree: "'Figtree'",
  Lexend: "'Lexend'",
  Urbanist: "'Urbanist'",
  Archivo: "'Archivo'",
  Cabin: "'Cabin'",
  Barlow: "'Barlow'",
  Source_Sans_3: "'Source Sans 3'",
  Josefin_Sans: "'Josefin Sans'",
  Quicksand: "'Quicksand'",
  Mulish: "'Mulish'",
  Libre_Franklin: "'Libre Franklin'",
  Albert_Sans: "'Albert Sans'",
Merriweather: "'Merriweather'",
  Lora: "'Lora'",
  PT_Serif: "'PT Serif'",
  Crimson_Text: "'Crimson Text'",
  EB_Garamond: "'EB Garamond'",
  Cormorant_Garamond: "'Cormorant Garamond'",
};

// Determine the page key from pathname
function getPageKey(pathname) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/pricing")) return "pricing";
  return null;
}

function loadFontLink(id, fontKey, weights) {
  const fontUrlName = fontUrlMap[fontKey];
  if (!fontUrlName) return;

  const weightStr = (weights || ["400", "500", "600", "700"]).join(";");
  const url = `https://fonts.googleapis.com/css2?family=${fontUrlName}:wght@${weightStr}&display=swap`;

  const existing = document.getElementById(id);
  // Skip if already loading the same URL
  if (existing && existing.href === url) return;
  if (existing) existing.remove();

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

function applyStyles(siteFamily, pageFamily) {
  let el = document.getElementById("sanity-font-styles");
  if (!el) {
    el = document.createElement("style");
    el.id = "sanity-font-styles";
    document.head.appendChild(el);
  }

  let css = "";

  // Site-wide font for header & footer (data-site-chrome attribute)
  if (siteFamily) {
    css += `[data-site-chrome] { font-family: ${siteFamily}, sans-serif !important; }\n`;
    css += `[data-site-chrome] * { font-family: inherit; }\n`;
  }

  // Page-specific font for main content only
  if (pageFamily) {
    css += `main { font-family: ${pageFamily}, sans-serif; }\n`;
  } else if (siteFamily) {
    // No page override — main also gets the site font
    css += `main { font-family: ${siteFamily}, sans-serif; }\n`;
  }

  el.textContent = css;
}

function cleanup() {
  ["sanity-font-site", "sanity-font-page", "sanity-font-styles"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) el.remove();
    }
  );
}

export default function FontLoader() {
  const { settings, pageFonts } = useSanityContent();
  const pathname = usePathname();

  useEffect(() => {
    const siteFont = settings.font;
    const siteWeights = settings.fontWeights;
    const isDefaultSiteFont = !siteFont || siteFont === "Space_Grotesk";

    const pageKey = getPageKey(pathname);
    const pageFont = pageKey && pageFonts[pageKey];
    const pageFontKey = pageFont ? pageFont.font : null;
    const pageFontWeights = pageFont ? pageFont.fontWeights : null;
    const isDefaultPageFont = !pageFontKey || pageFontKey === "Space_Grotesk";

    // If both are default, nothing to do
    if (isDefaultSiteFont && isDefaultPageFont) {
      cleanup();
      return;
    }

    // Load site font (for header/footer)
    const siteFamily = isDefaultSiteFont ? null : fontFamilyMap[siteFont];
    if (!isDefaultSiteFont) {
      loadFontLink("sanity-font-site", siteFont, siteWeights);
    }

    // Load page font (for main content)
    if (!isDefaultPageFont && pageFontKey !== siteFont) {
      loadFontLink("sanity-font-page", pageFontKey, pageFontWeights);
    }

    const pageFamily = isDefaultPageFont ? null : fontFamilyMap[pageFontKey];

    applyStyles(siteFamily, pageFamily);

    return cleanup;
  }, [settings.font, settings.fontWeights, pageFonts, pathname]);

  return null;
}
