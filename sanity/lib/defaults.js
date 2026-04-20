// Default content values — used as fallback when Sanity data is not available.
// These match the current hardcoded content so the site works identically without Sanity.

export const defaultSiteSettings = {
  siteName: "2hand2go",
  logo: null, // falls back to /Icons/2hand2go-logo.png
  font: "Space_Grotesk",
  fontWeights: ["300", "400", "500", "600", "700"],
};

export const defaultHeroVideo = {
videoUrl: "/ree_mainvideo.mp4",
  mobileVideoUrl: "/ree_mainvideo.mp4",
  gradientFrom: "#7C3AED",
  gradientTo: "#EC4899",
  heroTitle: "We'd love to hear from you.",
  heroText:
    "Share your thoughts, questions, or suggestions on how we can further promote diversity, equity, and inclusivity.",
  heroButtonText: "Contact Us",
  instagramUrl: "#",
  facebookUrl: "#",
};

export const defaultImages = {
  "header-secondhand": {
    src: "/Icons/pink_bag.avif",
    alt: "Fashion",
  },
  "carousel-1": {
    src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
    alt: "Products sitting unlisted while customers look elsewhere",
  },
  "carousel-2": {
    src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80",
    alt: "Stock out of sync across channels",
  },
  "carousel-3": {
    src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
    alt: "Hidden admin crushing your team's capacity",
  },
  "carousel-4": {
    src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
    alt: "Growth capped by process, not potential",
  },
  "carousel-5": {
    src: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80",
    alt: "Tools that don't talk to each other",
  },

  "team-photo": {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    alt: "Team meeting",
  },
  "cta-founder": {
    src: "/Icons/mia_sev.png",
    alt: "mia sev",
  },
  "pricing-barcode": {
    src: "/Icons/Barcode_img.png",
    alt: "Product preview",
  },
  "pricing-instagram": {
    src: "/Icons/Instagram_img.png",
    alt: "Product preview",
  },
  "pricing-webstore": {
    src: "/Icons/Webpage_img.png",
    alt: "Product preview",
  },
};
