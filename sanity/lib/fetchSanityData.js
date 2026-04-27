import { client, urlFor } from "./client";
import {
  SITE_SETTINGS_QUERY,
  HERO_VIDEO_QUERY,
  PAGE_IMAGES_QUERY,
  HOME_CONTENT_QUERY,
  PRICING_CONTENT_QUERY,
  SHARED_CONTENT_QUERY,
} from "./queries";
import {
  defaultSiteSettings,
  defaultHeroVideo,
  defaultImages,
} from "./defaults";

// Wrap a public URL in a Cloudinary fetch URL so the asset is delivered through
// Cloudinary's CDN with on-the-fly transcoding (q_auto, f_auto). Requires the
// Cloudinary account to allow fetched URLs from the source domain (cdn.sanity.io).
function toCloudinaryFetchUrl(rawUrl, { mobile = false } = {}) {
  if (!rawUrl) return null;
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return rawUrl;
  const transforms = mobile
    ? "q_auto:eco,f_auto,w_900,c_limit"
    : "q_auto,f_auto";
  return `https://res.cloudinary.com/${cloudName}/video/fetch/${transforms}/${encodeURIComponent(rawUrl)}`;
}

// Server-side function — fetches all Sanity data at once
// Called from server components (layout/page), not from the browser
export async function fetchSanityData() {
  try {
    const [
      settingsData,
      videoData,
      imagesData,
      homeContentData,
      pricingContentData,
      sharedContentData,
    ] = await Promise.all([
      client.fetch(SITE_SETTINGS_QUERY).catch(() => null),
      client.fetch(HERO_VIDEO_QUERY).catch(() => null),
      client.fetch(PAGE_IMAGES_QUERY).catch(() => null),
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
          navItems:
            settingsData.navItems?.length > 0
              ? settingsData.navItems
              : defaultSiteSettings.navItems,
        }
      : defaultSiteSettings;

    const logoUrl = settings.logo
      ? urlFor(settings.logo).height(68).fit("clip").auto("format").url()
      : "/Icons/2hand2go-logo.png";

    // Wrap the Sanity-uploaded asset URL in a Cloudinary fetch URL so the
    // client uploads via Sanity normally and the site delivers through
    // Cloudinary's CDN with auto format/quality transcoding.
    const desktopUrl =
      toCloudinaryFetchUrl(videoData?.heroVideoFileUrl) ||
      defaultHeroVideo.videoUrl;
    const mobileUrl =
      toCloudinaryFetchUrl(videoData?.mobileVideoFileUrl, { mobile: true }) ||
      defaultHeroVideo.mobileVideoUrl;
    const video = {
      videoUrl: desktopUrl,
      mobileVideoUrl: mobileUrl,
      gradientFrom: videoData?.gradientFrom || defaultHeroVideo.gradientFrom,
      gradientTo: videoData?.gradientTo || defaultHeroVideo.gradientTo,
      heroHeadline: videoData?.heroHeadline || null,
      heroSubheadline: videoData?.heroSubheadline || null,
      heroCtaPrimary: videoData?.heroCtaPrimary || null,
      heroCtaSecondary: videoData?.heroCtaSecondary || null,
      heroReassurance: videoData?.heroReassurance || null,
      heroLongReassurance: videoData?.heroLongReassurance || null,
      instagramUrl: videoData?.instagramUrl || null,
      facebookUrl: videoData?.facebookUrl || null,
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
      homeContent: homeContentData || null,
      pricingContent: pricingContentData || null,
      sharedContent: sharedContentData || null,
      ready: true,
    };
  } catch {
    return {
      settings: defaultSiteSettings,
      logoUrl: "/Icons/2hand2go-logo.png",
      video: defaultHeroVideo,
      images: defaultImages,
      homeContent: null,
      pricingContent: null,
      sharedContent: null,
      ready: true,
    };
  }
}
