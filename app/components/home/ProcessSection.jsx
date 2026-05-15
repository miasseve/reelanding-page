"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PINK = "#FF2E7E";

const STEPS = [
  {
    step: "STEP 1",
    label: "CREATE & LABEL",
    titleLead: "Listed in seconds,",
    titleAccent: "labelled to perfection.",
    description:
      "Point, shoot, done. From that single image, 2hand2go identifies the brand, writes the description, suggests the price, and prints a ready-to-stick barcode label.",
    bullets: [
      "Generate title and description automatically",
      "Fill in brand, size, colour, material, and condition",
      "Generate a unique SKU for each item for seamless identification and inventory tracking.",
      "Print-ready barcode with size and price visible",
    ],
    image: "/Icons/IMG_7407.PNG",
    palette: "white",
    photoPalette: "pink",
    photoSide: "right",
    textBgImage: "/Icons/voguecover.jpg",
  },
  {
    step: "STEP 2",
    label: "ACCOUNTING & SPLIT PAYMENT",
    titleLead: "Every sale,",
    titleAccent: "split automatically.",
    description:
      "Set the consignor percentage once. Payments split between consignor and store the moment an item sells no spreadsheets, no reconciliation.",
    bullets: [
      "Set the consignor percentage in settings or once per item",
      "Payments split between consignor and store the moment an item sells",
    ],
    image: "/Icons/IMG_7410.PNG",
    palette: "dark",
    photoPalette: "cream",
    photoSide: "left",
    textBgImage: "/Icons/bags.jpg",
  },
  {
    step: "STEP 3",
    label: "CONSIGNOR PARTNERSHIP",
    titleLead: "Each piece,",
    titleAccent: "traced to its owner.",
    description:
      "Every item is linked to the right consignor from the start. Consignors sign in to their own profile to track sales and earnings.",
    bullets: [
      "Every item is linked to the right consignor from the start",
      "Consignors sign in to their own profile to track sales and earnings",
    ],
    image: "/Icons/IMG_7408.PNG",
    palette: "cream",
    photoPalette: "lightPink",
    photoSide: "right",
    textBgImage: "/Icons/girls.jpg",
  },
  {
    step: "STEP 4",
    label: "PRICING",
    titleLead: "Pricing that",
    titleAccent: "learns from your store.",
    description:
      "AI pricing trained on your own sell-through. Activates after 3 months at 1,000 products works patiently until your data is rich enough to be light.",
    bullets: [
      "AI pricing trained on your own running set",
      "Activates after 3 months at 1,000 products",
      "Works patiently until your data is rich enough to be light",
    ],
    image: "/Icons/IMG_7409.PNG",
    palette: "lightPink",
    photoPalette: "dark",
    photoSide: "left",
    textBgImage: "/Icons/Hotel_shoot.jpg",
  },
  {
    step: "STEP 5",
    label: "PUBLISH ON SOCIALS",
    titleLead: "One catalogue.",
    titleAccent: "Every channel.",
    description:
      "Vinted Pro, Instagram and more formatted automatically. Add your channel logins once. Need anotherplatform? Just ask.",
    bullets: [
      "Vinted Pro, Instagram and more formatted automatically",
      "Automatically creates the listing in the right format for each channel",
      "Up to 5 products at once, including carousels",
      "Any additional connection Please Contact us ",
    ],
    image: "/Icons/IMG_7406.PNG",
    palette: "white",
    photoPalette: "pink",
    photoSide: "right",
    textBgImage: "/Icons/tree_car.jpg",
  },
];

// Per-palette overlay opacity (higher = bg image more hidden)
const OVERLAY_OPACITY = {
  white: 0.92,
  cream: 0.9,
  lightPink: 0.88,
  pink: 0.88,
  dark: 0.86,
};

const PALETTES = {
  white: { bg: "#ffffff", text: "#1a1a1a", muted: "#6b7280" },
  cream: { bg: "#f7f2ec", text: "#1a1a1a", muted: "#6b7280" },
  lightPink: { bg: "#FFE3EB", text: "#1a1a1a", muted: "#6b7280" },
  pink: { bg: "#d8345f", text: "#ffffff", muted: "rgba(255,255,255,0.75)" },
  dark: { bg: "#0c0c0c", text: "#ffffff", muted: "rgba(255,255,255,0.6)" },
};

const Arrow = ({ color }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 mt-[5px]"
  >
    <path
      d="M4 12h16m-6-6 6 6-6 6"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const hexToRgb = (hex) => {
  const m = hex.replace("#", "").match(/.{2}/g);
  if (!m) return "0,0,0";
  return m.map((h) => parseInt(h, 16)).join(",");
};

const TextPanel = ({ step, paletteKey }) => {
  const palette = PALETTES[paletteKey];
  const overlayAlpha = OVERLAY_OPACITY[paletteKey] ?? 0.9;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  // Text panel sits opposite the photo — slide in from that side.
  // photoSide === "right"  → text on left  → slide from left (x: -80)
  // photoSide === "left"   → text on right → slide from right (x:  80)
  const fromX = step.photoSide === "right" ? -80 : 80;

  return (
    <div
      ref={ref}
      className="relative flex flex-col justify-center px-6 sm:px-10 md:px-14 py-12 md:py-16 overflow-hidden"
      style={{
        backgroundColor: palette.bg,
        color: palette.text,
        backgroundImage: step.textBgImage ? `url('${step.textBgImage}')` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {step.textBgImage && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundColor: `rgba(${hexToRgb(palette.bg)}, ${overlayAlpha})`,
          }}
        />
      )}
      <motion.div
        initial={{ opacity: 0, x: fromX }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: fromX }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 flex flex-col justify-center"
      >
        <span
          className="text-[12px] tracking-[0.22em] font-bold uppercase"
          style={{ color: palette.text }}
        >
          {step.label}
        </span>
        <h3 className="text-[28px] sm:text-[36px] md:text-[44px] font-bold leading-[1.12] mt-4">
          {step.titleLead}{" "}
          <span
            className="italic"
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              color: PINK,
            }}
          >
            {step.titleAccent}
          </span>
        </h3>
        <p
          className="text-[16px] sm:text-[18px] md:text-[19px] mt-5 leading-[1.6] max-w-[560px]"
          style={{ color: palette.muted }}
        >
          {step.description}
        </p>
        <ul className="mt-6 space-y-[12px]">
          {step.bullets.map((b) => (
            <li
              key={b}
              className="flex gap-3 text-[15px] sm:text-[16px] md:text-[18px] leading-[1.5]"
              style={{ color: palette.muted }}
            >
              <Arrow color={PINK} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const PhotoPanel = ({ step, paletteKey }) => {
  const palette = PALETTES[paletteKey];
  return (
    <div
      className="flex items-center justify-center p-6 sm:p-10 md:p-14 min-h-[320px] md:min-h-[480px] group overflow-hidden"
      style={{ backgroundColor: palette.bg }}
    >
      <div className="relative w-full max-w-[480px] rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] bg-white">
        <img
          src={step.image}
          alt={step.label}
          className="block w-full h-auto max-h-[560px] object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
};

const StepRow = ({ step }) => {
  const textOnLeft = step.photoSide === "right";
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {textOnLeft ? (
        <>
          <TextPanel step={step} paletteKey={step.palette} />
          <PhotoPanel step={step} paletteKey={step.photoPalette} />
        </>
      ) : (
        <>
          <PhotoPanel step={step} paletteKey={step.photoPalette} />
          <TextPanel step={step} paletteKey={step.palette} />
        </>
      )}
    </div>
  );
};

export default function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-[80px]">
      {/* Heading band */}
      <div className="bg-white px-4 sm:px-6 py-[60px] sm:py-[80px] text-center">
        <div className="text-[#6b7280] text-[11px] tracking-[0.2em] font-semibold mb-3">
          HOW IT WORKS
        </div>
        <h2 className="text-[#1a1a1a] font-bold text-[30px] sm:text-[40px] md:text-[48px] leading-[1.12] max-w-[820px] mx-auto">
          Built for the way you actually sell.
        </h2>
        <p className="text-[#6b7280] text-[14px] sm:text-[16px] mt-3 max-w-[640px] mx-auto">
          From the first photo to the final payout every step refined, every
          detail handled.
        </p>
      </div>

      {/* Checkerboard rows */}
      <div>
        {STEPS.map((step) => (
          <StepRow key={step.step} step={step} />
        ))}
      </div>
    </section>
  );
}
