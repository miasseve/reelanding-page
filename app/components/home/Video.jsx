"use client";
import { motion } from "framer-motion";
import { useSanityContent } from "../SanityProvider";
import ButtonLink from "../ButtonLink";

// Polaroid + tilted-tablet composition that sits where the hero video used to be.
// The video block lives in ./HeroVideoBlock.jsx, available for reuse elsewhere.
const HeroMediaShowcase = ({ variant = "desktop" }) => {
  const isMobile = variant === "mobile";

  return (
    <div
      className={
        isMobile
          ? "relative w-full h-[360px] sm:h-[440px] mx-auto"
          : "relative w-[760px] h-[700px] max-w-full mx-auto"
      }
    >
      {/* Polaroid photo — drops down with a bounce */}
      <motion.div
        className={`absolute top-0 left-0 ${
          isMobile ? "w-[66%]" : "w-[74%]"
        }`}
        initial={{ y: -380, opacity: 0, rotate: -3 }}
        animate={{ y: 0, opacity: 1, rotate: -3 }}
        transition={{
          type: "spring",
          stiffness: 110,
          damping: 9,
          mass: 1.1,
          delay: 0.15,
        }}
      >
        {/* Silvery ambient halo (outer, wider) */}
        <div
          aria-hidden
          className="absolute -inset-x-[12%] -bottom-[40px] -top-[24px] rounded-[40%] blur-3xl pointer-events-none"
          style={{ backgroundColor: "rgba(235,238,245,0.28)" }}
        />
        {/* Dark contact shadow (tight, directly under card) */}
        <div
          aria-hidden
          className="absolute left-[12%] right-[10%] -bottom-[10px] h-[26px] rounded-[50%] blur-xl pointer-events-none"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        />

        <div
          className="relative bg-white p-[12px] sm:p-[18px] pb-[44px] sm:pb-[60px] shadow-[0_40px_70px_-14px_rgba(0,0,0,0.7),0_22px_38px_-10px_rgba(0,0,0,0.5)]"
          style={{
            borderRadius: "2px",
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.04) 100%)",
          }}
        >
          {/* Beige washi tape */}
          <div
            aria-hidden
            className="absolute -top-[16px] left-1/2 -translate-x-1/2 w-[110px] sm:w-[150px] h-[30px] sm:h-[38px] rotate-[-4deg] shadow-[0_3px_6px_rgba(0,0,0,0.22)]"
            style={{
              backgroundColor: "#d9c8a9",
              backgroundImage:
                "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 30%, rgba(0,0,0,0.08) 100%)",
              opacity: 0.94,
            }}
          />
          <div className="group relative w-full aspect-square overflow-hidden">
            <img
              src="/Icons/walking_girl.jpg"
              alt="Walking on the street"
              className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </motion.div>

      {/* Tablet with product page — slides in from the right with overshoot */}
      <motion.div
        className={`absolute right-0 ${
          isMobile ? "w-[76%] bottom-[20px]" : "w-[78%] bottom-[30px]"
        }`}
        initial={{ x: 480, opacity: 0, rotate: -12 }}
        animate={{ x: 0, opacity: 1, rotate: -12 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 11,
          mass: 1,
          delay: 0.45,
        }}
      >
        {/* Silvery ambient halo (outer, wider) */}
        <div
          aria-hidden
          className="absolute -inset-x-[10%] -bottom-[44px] -top-[20px] rounded-[40%] blur-3xl pointer-events-none"
          style={{ backgroundColor: "rgba(235,238,245,0.32)" }}
        />
        {/* Dark contact shadow (tight, directly under card) */}
        <div
          aria-hidden
          className="absolute left-[10%] right-[10%] -bottom-[14px] h-[32px] rounded-[50%] blur-xl pointer-events-none"
          style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
        />

        <div className="relative bg-black rounded-[30px] p-[12px] sm:p-[16px] shadow-[0_48px_80px_-16px_rgba(0,0,0,0.78),0_24px_44px_-12px_rgba(0,0,0,0.55)]">
          {/* Power button (top edge) */}
          <span
            aria-hidden
            className="absolute -top-[3px] right-[24%] w-[48px] h-[4px] bg-[#1a1a1a] rounded-t-[2px]"
          />
          {/* Volume rocker (right edge) */}
          <span
            aria-hidden
            className="absolute top-[24%] -right-[3px] w-[4px] h-[64px] bg-[#1a1a1a] rounded-r-[2px]"
          />
          {/* Camera dot */}
          <span
            aria-hidden
            className="absolute left-[12px] sm:left-[16px] top-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#2a2a2a] z-10"
          />
          <div className="group relative overflow-hidden rounded-[20px] bg-white">
            <img
              src="/Icons/product_Des.png"
              alt="Product detail page"
              className="block w-full h-auto transition-transform duration-[600ms] ease-out group-hover:scale-110"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const DEFAULT_HEADLINE_LEAD = "From one photo to";
const DEFAULT_HEADLINE_TAIL = "selling everywhere.";
const DEFAULT_SUBHEADLINE =
  "2hand2go turns a single photo into a complete, priced listing, live on your own branded webshop and every channel you sell on. The omnichannel move mainstream retail made a decade ago, built for one of a kind stock.";
const DEFAULT_CTA_PRIMARY = "Try it free";
const DEFAULT_CTA_SECONDARY = "Book Mia";

const ArrowRightIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
);

const CalendarPlusIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="16" y1="3" x2="16" y2="7" />
    <line x1="12" y1="13" x2="12" y2="18" />
    <line x1="9.5" y1="15.5" x2="14.5" y2="15.5" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

// Headline lead — the photo is clipped INSIDE the letters (background-clip: text)
// rather than painted behind them. Defaults to the sky photo; Sanity can override.
const HeadlineLead = ({ text, imageUrl }) => {
  const image = imageUrl || "/Icons/hand_ice.png";
  return (
    <span
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        fontFamily: "var(--font-bricolage)",
        fontWeight: 900,
        fontSize: "75px",
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      {text}
    </span>
  );
};

const HeroCopy = ({
  variant,
  headlineLead,
  headlineTail,
  headlineImageUrl,
  heroBody,
  ctaPrimary,
  ctaSecondary,
  instagramUrl,
  facebookUrl,
  onBookMia,
}) => {
  const isDesktop = variant === "desktop";
  return (
    <>
      <h1
        className={
          isDesktop
            ? "font-extrabold text-[clamp(34px,4.8vw,58px)] leading-[1.05] mb-[clamp(18px,2.5vw,26px)] text-white"
            : "font-extrabold text-[36px] leading-[1.08] mb-5 text-white"
        }
      >
        <HeadlineLead text={headlineLead} imageUrl={headlineImageUrl} />{" "}
        <span
          style={{
            fontFamily: "var(--font-instrument-serif)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "75px",
            lineHeight: 1,
            color: "#FF2E7E",
          }}
        >
          {headlineTail}
        </span>
      </h1>

      <p
        className={
          isDesktop
            ? "text-[clamp(17px,1.5vw,22px)] leading-[1.55] text-white/95 max-w-[560px] mb-[clamp(16px,2.2vw,22px)]"
            : "text-[18px] leading-[1.5] text-white/95 mb-5"
        }
        style={{ fontFamily: "var(--font-bricolage)", fontWeight: 500 }}
      >
        {heroBody}
      </p>

      <div
        className={
          isDesktop
            ? "flex flex-wrap gap-[14px] mb-[clamp(20px,2.5vw,28px)]"
            : "flex flex-wrap gap-[12px] mb-6"
        }
      >
        <ButtonLink href="https://re-e.dk/try/add-product">
          <button
            className="inline-flex items-center gap-[10px] py-[14px] pl-[24px] pr-[22px] rounded-[12px] text-white text-[15px] leading-[18px] font-semibold cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:brightness-110 transition"
            style={{ backgroundColor: "#FF2E7E" }}
          >
            <span>{ctaPrimary}</span>
            <ArrowRightIcon size={18} />
          </button>
        </ButtonLink>
        <button
          type="button"
          onClick={onBookMia}
          className="inline-flex items-center gap-[10px] py-[14px] pl-[20px] pr-[24px] rounded-[12px] text-white text-[15px] leading-[18px] font-semibold cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:brightness-110 transition"
          style={{ backgroundColor: "#c41e3a" }}
        >
          <CalendarPlusIcon size={18} />
          <span>{ctaSecondary}</span>
        </button>
      </div>

      <div
        className={
          isDesktop
            ? "inline-flex items-center gap-[10px] bg-[#f7eddf] rounded-full pl-[4px] pr-[16px] py-[4px] mb-[clamp(16px,2.4vw,22px)] w-fit shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
            : "inline-flex items-center gap-[10px] bg-[#f7eddf] rounded-full pl-[4px] pr-[14px] py-[4px] mb-[18px] w-fit shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
        }
      >
        <div className="w-[26px] h-[26px] rounded-full bg-[#1a1a1a] flex items-center justify-center text-white font-bold text-[13px] shrink-0">
          R
        </div>
        <span
          className="text-[12px] sm:text-[13px] text-[#3a3a3a] font-medium"
          style={{ fontFamily: "var(--font-bricolage)", fontWeight: 500 }}
        >
          Powered by Ree — 2hand2go&rsquo;s listing engine
        </span>
      </div>

      <p
        className={
          isDesktop
            ? "flex items-center gap-[10px] text-[15px] text-white/85 mb-[clamp(20px,2.8vw,28px)]"
            : "flex items-center gap-[10px] text-[14px] text-white/85 mb-6"
        }
        style={{ fontFamily: "var(--font-bricolage)", fontWeight: 500 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF2E7E"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="4 12 10 18 20 6" />
        </svg>
        Free for your first 25 items. No card required.
      </p>

      <div>
        <p
          className={
            isDesktop
              ? "text-[13px] font-semibold tracking-[0.15em] uppercase text-white mb-[10px]"
              : "text-[14px] font-semibold tracking-[0.15em] uppercase text-white mb-[12px]"
          }
        >
          Let&apos;s Connect
        </p>
        <div className="flex items-center gap-[12px]">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-black transition-colors"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-black transition-colors"
          >
            <FacebookIcon size={18} />
          </a>
        </div>
      </div>
    </>
  );
};

const Video = () => {
  const { video } = useSanityContent();

  const headlineLead = video.heroHeadlineLead?.trim() || DEFAULT_HEADLINE_LEAD;
  const headlineTail = video.heroHeadlineTail?.trim() || DEFAULT_HEADLINE_TAIL;
  const headlineImageUrl = video.heroHeadlineImageUrl || null;
  const heroBody = video.heroSubheadline?.trim() || DEFAULT_SUBHEADLINE;
  const ctaPrimary = video.heroCtaPrimary?.trim() || DEFAULT_CTA_PRIMARY;
  const ctaSecondary = video.heroCtaSecondary?.trim() || DEFAULT_CTA_SECONDARY;

  const instagramUrl = video.instagramUrl || "#";
  const facebookUrl = video.facebookUrl || "#";

  const heroCopyProps = {
    headlineLead,
    headlineTail,
    headlineImageUrl,
    heroBody,
    ctaPrimary,
    ctaSecondary,
    instagramUrl,
    facebookUrl,
    onBookMia: () =>
      window.dispatchEvent(new CustomEvent("open-contact")),
  };

  return (
    <>
      <section
        className="relative w-full lg:min-h-[700px] overflow-hidden"
        style={{
          backgroundImage: "url('/Icons/girl-newpaper.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient overlay sits above the photo and below the content */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #2a0a35 0%, #6b1f2a 35%, #7a3548 70%, #1a121f 100%)",
            opacity: 0.92,
            mixBlendMode: "multiply",
          }}
        />

        {/* Mobile + landscape phone layout: media on top, hero content below */}
        <div className="relative z-10 lg:hidden flex flex-col min-h-[calc(105svh+56px)] -mt-[56px]">
          <div className="px-4 pt-[72px] pb-2 shrink-0">
            <HeroMediaShowcase variant="mobile" />
          </div>

          <div className="flex-1 flex flex-col justify-center px-6 py-8">
            <HeroCopy variant="mobile" {...heroCopyProps} />
          </div>
        </div>

        {/* Desktop layout: hero content left, media right */}
        <div className="relative z-10 hidden lg:flex max-w-[1240px] mx-auto px-4 py-[clamp(48px,8vw,80px)] flex-row items-start gap-8">
          <div className="flex-1 flex flex-col justify-center z-10">
            <HeroCopy variant="desktop" {...heroCopyProps} />
          </div>

          <div className="flex-1 relative z-10 w-full max-w-[650px] flex items-center justify-center">
            <HeroMediaShowcase variant="desktop" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Video;
