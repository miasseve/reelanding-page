"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "./client";
import {
  SITE_SETTINGS_QUERY,
  HERO_VIDEO_QUERY,
  PAGE_IMAGES_QUERY,
} from "./queries";
import {
  defaultSiteSettings,
  defaultHeroVideo,
  defaultImages,
} from "./defaults";

// ---------- Site Settings (font, logo) ----------
export function useSiteSettings() {
  const [settings, setSettings] = useState(defaultSiteSettings);

  useEffect(() => {
    client
      .fetch(SITE_SETTINGS_QUERY)
      .then((data) => {
        if (data) {
          setSettings({
            siteName: data.siteName || defaultSiteSettings.siteName,
            logo: data.logo || null,
            font: data.font || defaultSiteSettings.font,
            fontWeights: data.fontWeights || defaultSiteSettings.fontWeights,
          });
        }
      })
      .catch(() => {
        // Sanity not configured yet — use defaults silently
      });
  }, []);

  const logoUrl = settings.logo
    ? urlFor(settings.logo).width(240).url()
    : "/Icons/reelogo.png";

  return { ...settings, logoUrl };
}

// ---------- Hero Video ----------
export function useHeroVideo() {
  const [video, setVideo] = useState(defaultHeroVideo);

  useEffect(() => {
    client
      .fetch(HERO_VIDEO_QUERY)
      .then((data) => {
        if (data) {
          setVideo({
            desktopVideoUrl:
              data.desktopVideoUrl || defaultHeroVideo.desktopVideoUrl,
            mobileVideoUrl:
              data.mobileVideoUrl || defaultHeroVideo.mobileVideoUrl,
            fallbackImage: data.fallbackImage || null,
          });
        }
      })
      .catch(() => {});
  }, []);

  return video;
}

// ---------- Page Images ----------
export function usePageImages() {
  const [images, setImages] = useState(defaultImages);

  useEffect(() => {
    client
      .fetch(PAGE_IMAGES_QUERY)
      .then((data) => {
        if (data && data.length > 0) {
          const merged = { ...defaultImages };
          data.forEach((item) => {
            if (item.section && item.image) {
              merged[item.section] = {
                src: urlFor(item.image).url(),
                alt: item.alt || defaultImages[item.section]?.alt || "",
              };
            }
          });
          setImages(merged);
        }
      })
      .catch(() => {});
  }, []);

  return images;
}

// Helper to get a single image with fallback
export function useImage(section) {
  const images = usePageImages();
  return images[section] || defaultImages[section] || { src: "", alt: "" };
}
