import { client, urlFor } from "./client";
import {
  SITE_SETTINGS_QUERY,
  HERO_VIDEO_QUERY,
  PAGE_IMAGES_QUERY,
  PAGE_FONTS_QUERY,
  HOME_CONTENT_QUERY,
  PRICING_CONTENT_QUERY,
  SHARED_CONTENT_QUERY,
} from "./queries";
import {
  defaultSiteSettings,
  defaultHeroVideo,
  defaultImages,
} from "./defaults";

// Server-side function — fetches all Sanity data at once
// Called from server components (layout/page), not from the browser
export async function fetchSanityData() {
  try {
    const [
      settingsData,
      videoData,
      imagesData,
      pageFontsData,
      homeContentData,
      pricingContentData,
      sharedContentData,
    ] = await Promise.all([
      client.fetch(SITE_SETTINGS_QUERY).catch(() => null),
      client.fetch(HERO_VIDEO_QUERY).catch(() => null),
      client.fetch(PAGE_IMAGES_QUERY).catch(() => null),
      client.fetch(PAGE_FONTS_QUERY).catch(() => null),
      client.fetch(HOME_CONTENT_QUERY).catch(() => null),
      client.fetch(PRICING_CONTENT_QUERY).catch(() => null),
      client.fetch(SHARED_CONTENT_QUERY).catch(() => null),
    ]);

    // Process settings
    const settings = settingsData
      ? {
          siteName: settingsData.siteName || defaultSiteSettings.siteName,
          logo: settingsData.logo || null,
          font: settingsData.font || defaultSiteSettings.font,
          fontWeights:
            settingsData.fontWeights || defaultSiteSettings.fontWeights,
        }
      : defaultSiteSettings;

    const logoUrl = settings.logo
      ? urlFor(settings.logo).width(240).url()
      : "/Icons/reelogo.png";

    // Process video
    const video = {
      desktopVideoUrl:
        videoData?.desktopVideoUrl || defaultHeroVideo.desktopVideoUrl,
      mobileVideoUrl:
        videoData?.mobileVideoUrl || defaultHeroVideo.mobileVideoUrl,
      fallbackImage: videoData?.fallbackImage || null,
    };

    // Process images
    const images = { ...defaultImages };
    if (imagesData?.length > 0) {
      imagesData.forEach((item) => {
        if (item.section && item.image) {
          images[item.section] = {
            src: urlFor(item.image).url(),
            alt: item.alt || defaultImages[item.section]?.alt || "",
          };
        }
      });
    }

    // Process page fonts
    const pageFonts = {};
    if (pageFontsData?.length > 0) {
      pageFontsData.forEach((item) => {
        if (item.page && item.font && item.font !== "default") {
          pageFonts[item.page] = {
            font: item.font,
            fontWeights: item.fontWeights || ["400", "500", "600", "700"],
          };
        }
      });
    }

    // Process tool card images
    if (homeContentData?.toolCards) {
      homeContentData.toolCards = homeContentData.toolCards.map((card) => ({
        ...card,
        imageUrl: card.image ? urlFor(card.image).url() : null,
      }));
    }

    return {
      settings,
      logoUrl,
      video,
      images,
      pageFonts,
      homeContent: homeContentData || null,
      pricingContent: pricingContentData || null,
      sharedContent: sharedContentData || null,
      ready: true,
    };
  } catch {
    return {
      settings: defaultSiteSettings,
      logoUrl: "/Icons/reelogo.png",
      video: defaultHeroVideo,
      images: defaultImages,
      pageFonts: {},
      homeContent: null,
      pricingContent: null,
      sharedContent: null,
      ready: true,
    };
  }
}
