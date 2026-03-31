// GROQ queries for fetching content from Sanity

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  siteName,
  logo,
  font,
  fontWeights
}`;

// Get the hero video singleton — always fetch, let the client handle fallback
export const HERO_VIDEO_QUERY = `*[_type == "heroVideo"] | order(_updatedAt desc) [0]{
  title,
  "desktopVideoUrl": desktopVideo.asset->url,
  "mobileVideoUrl": mobileVideo.asset->url,
  fallbackImage
}`;

export const PAGE_IMAGES_QUERY = `*[_type == "pageImages"]{
  page,
  section,
  image,
  alt
}`;

// Get images for a specific page
export const PAGE_IMAGES_BY_PAGE_QUERY = `*[_type == "pageImages" && page == $page]{
  section,
  image,
  alt
}`;

// Get a specific section image
export const SECTION_IMAGE_QUERY = `*[_type == "pageImages" && section == $section][0]{
  image,
  alt
}`;

// Get per-page font settings
export const PAGE_FONTS_QUERY = `*[_type == "pageFont"]{
  page,
  font,
  fontWeights
}`;
