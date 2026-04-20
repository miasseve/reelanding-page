"use client";

import { createContext, useContext } from "react";
import {
  defaultSiteSettings,
  defaultHeroVideo,
  defaultImages,
} from "../../sanity/lib/defaults";

const SanityContext = createContext({
  settings: defaultSiteSettings,
  logoUrl: "/Icons/2hand2go-logo.png",
  video: defaultHeroVideo,
  images: defaultImages,
  homeContent: null,
  pricingContent: null,
  sharedContent: null,
  ready: false,
});

export function useSanityContent() {
  return useContext(SanityContext);
}

// Helper to get text with fallback
// Usage: t(homeContent, "heroHeadline", "DEFAULT TEXT")
export function t(content, field, fallback) {
  const val = content?.[field];
  if (typeof val === "string") return val.trim() || fallback;
  return val || fallback;
}

export default function SanityProvider({ data, children }) {
  const value = data || {
    settings: defaultSiteSettings,
    logoUrl: "/Icons/2hand2go-logo.png",
    video: defaultHeroVideo,
    images: defaultImages,
    homeContent: null,
    pricingContent: null,
    sharedContent: null,
    ready: true,
  };

  return (
    <SanityContext.Provider value={value}>
      {children}
    </SanityContext.Provider>
  );
}
