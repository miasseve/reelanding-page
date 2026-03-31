"use client";

import { createContext, useContext } from "react";
import {
  defaultSiteSettings,
  defaultHeroVideo,
  defaultImages,
} from "../../sanity/lib/defaults";

const SanityContext = createContext({
  settings: defaultSiteSettings,
  logoUrl: "/Icons/reelogo.png",
  video: defaultHeroVideo,
  images: defaultImages,
  pageFonts: {},
  ready: false,
});

export function useSanityContent() {
  return useContext(SanityContext);
}

// Receives pre-fetched data from the server layout — no client-side API calls
export default function SanityProvider({ data, children }) {
  const value = data || {
    settings: defaultSiteSettings,
    logoUrl: "/Icons/reelogo.png",
    video: defaultHeroVideo,
    images: defaultImages,
    pageFonts: {},
    ready: true,
  };

  return (
    <SanityContext.Provider value={value}>
      {children}
    </SanityContext.Provider>
  );
}
