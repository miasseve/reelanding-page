// GROQ queries for fetching content from Sanity

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0]{
  siteName,
  logo,
  font,
  fontWeights
}`;

// Get the Hero Section singleton — always fetch, let the client handle fallback
export const HERO_VIDEO_QUERY = `*[_type == "heroVideo"] | order(_updatedAt desc) [0]{
  title,
  "videoUrl": heroVideoFile.asset->url,
  "mobileVideoUrl": mobileVideoFile.asset->url,
  "gradientFrom": gradientFrom.hex,
  "gradientTo": gradientTo.hex,
  heroHeadline,
  heroSubheadline,
  heroCtaPrimary,
  heroCtaSecondary,
  heroReassurance,
  heroLongReassurance,
  instagramUrl,
  facebookUrl
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

export const HOME_CONTENT_QUERY = `*[_type == "homeContent"][0]{
  ...,
  toolCards[]{
    ...,
    "imageUrl": image.asset->url
  }
}`;
export const PRICING_CONTENT_QUERY = `*[_type == "pricingContent"][0]`;
export const SHARED_CONTENT_QUERY = `*[_type == "sharedContent"][0]`;
