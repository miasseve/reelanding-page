"use client";

import { useEffect } from "react";
import { useSanityContent } from "./SanityProvider";

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

function loadFontLink(fontKey, weights) {
  const fontUrlName = fontUrlMap[fontKey];
  if (!fontUrlName) return;

  const weightStr = (weights || ["400", "500", "600", "700"]).join(";");
  const url = `https://fonts.googleapis.com/css2?family=${fontUrlName}:wght@${weightStr}&display=swap`;

  const id = "sanity-font-site";
  const existing = document.getElementById(id);
  if (existing && existing.href === url) return;
  if (existing) existing.remove();

  const link = document.createElement("link");
  link.id = id;
  link.rel = "stylesheet";
  link.href = url;
  document.head.appendChild(link);
}

function applyStyles(family) {
  let el = document.getElementById("sanity-font-styles");
  if (!el) {
    el = document.createElement("style");
    el.id = "sanity-font-styles";
    document.head.appendChild(el);
  }
  el.textContent = `html, body { font-family: ${family}, sans-serif !important; }\n* { font-family: inherit; }\n`;
}

function cleanup() {
  ["sanity-font-site", "sanity-font-styles"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });
}

export default function FontLoader() {
  const { settings } = useSanityContent();

  useEffect(() => {
    const siteFont = settings.font;
    const isDefault = !siteFont || siteFont === "Space_Grotesk";

    if (isDefault) {
      cleanup();
      return;
    }

    loadFontLink(siteFont, settings.fontWeights);
    applyStyles(fontFamilyMap[siteFont]);

    return cleanup;
  }, [settings.font, settings.fontWeights]);

  return null;
}
