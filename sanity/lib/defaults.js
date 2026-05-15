// Default content values — used as fallback when Sanity data is not available.
// These match the current hardcoded content so the site works identically without Sanity.

export const defaultNavItems = [
  {
    title: "Solutions",
    isDropdown: true,
    submenuHeading: "Built for Secondhand Businesses",
    col1: [
      {
        title: "2hand2go List",
        desc: "One picture. One ready-to-sell product. Stock synced automatically.",
        href: "https://re-e.dk/",
      },
    ],
    col2: [
      {
        title: "2hand2go Web",
        desc: "Launch your webstore in 3 days. White-label. No developer brief.",
        href: "/#web",
      },
    ],
  },
  { title: "Pricing", href: "/#pricing", isDropdown: false },
  { title: "FAQ", href: "/#faq", isDropdown: false },
];

export const defaultSiteSettings = {
  siteName: "2hand2go",
  logo: null, // falls back to /Icons/2hand2go-logo.png
  font: "Space_Grotesk",
  fontWeights: ["300", "400", "500", "600", "700"],
  navItems: defaultNavItems,
};

export const defaultHeroVideo = {
  videoUrl: "https://res.cloudinary.com/dlkgz4a2j/video/upload/q_auto,f_auto/v1777285750/ree_mainvideo_qgejbi.mp4",
  mobileVideoUrl: "https://res.cloudinary.com/dlkgz4a2j/video/upload/q_auto:eco,f_auto,w_900,c_limit/v1777285794/ree_mobileview_oznsf3.mp4",
};

export const defaultImages = {
  "header-secondhand": {
    src: "/Icons/pink_bag.avif",
    alt: "Fashion",
  },
  "carousel-1": {
    src: "/Icons/colouredshirts.png",
    alt: "Coloured shirts",
  },
  "carousel-2": {
    src: "/Icons/personpaper.jpg",
    alt: "Person with paper",
  },
  "carousel-3": {
    src: "/Icons/girls.jpg",
    alt: "Fashion girls",
  },
  "carousel-4": {
    src: "/Icons/Bestie_Staycation.jpg",
    alt: "Friends at a staycation",
  },
  "carousel-5": {
    src: "/Icons/girl-fashion.png",
    alt: "Girl in fashion",
  },
  "carousel-6": {
    src: "/Icons/shirt-tag.jpg",
    alt: "Shirt with paper price tag",
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
