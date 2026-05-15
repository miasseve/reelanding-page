"use client";
import { Fragment, useState, useEffect, useRef } from "react";
import { useSanityContent } from "../SanityProvider";
import ButtonLink from "../ButtonLink";

const ACCENT_LIME = "#ffee24";

const HERO_METRICS = [
  { value: "95 %", label: "Less time listing per product" },
  { value: "+ 30 %", label: "Average revenue potential in 6 months" },
  { value: "× 13", label: "Less work.\n×13 faster" },
];

const PROCESS_CARDS_TOP = [
  { value: "1", unit: "min", label: "PHOTO" },
  { value: "3", unit: "min", label: "DETAILS" },
  { value: "2", unit: "min", label: "PRICING" },
  { value: "2", unit: "min", label: "LABELS" },
];

const PROCESS_CARDS_BOTTOM = [
  { value: "4", unit: "min", label: "WEBSHOP" },
  { value: "3", unit: "min", label: "CHECKS" },
  { value: "5", unit: "min", label: "POSTING" },
];

const ProcessCard = ({ value, unit, label }) => (
  <div
    className="rounded-[12px] flex flex-col items-stretch overflow-hidden shadow-[0_8px_22px_rgba(0,0,0,0.25)] w-[100px] sm:w-[122px] md:w-[136px] h-[124px] sm:h-[146px] md:h-[160px] backdrop-blur-[2px]"
    style={{ backgroundColor: "rgba(170, 40, 80, 0.6)" }}
  >
    <div className="flex-1 flex flex-col items-center justify-center text-white">
      <div className="font-extrabold text-[32px] sm:text-[40px] md:text-[44px] leading-none">
        {value}
      </div>
      <div className="text-[12px] sm:text-[14px] md:text-[15px] opacity-95 mt-[4px]">
        {unit}
      </div>
    </div>
    <div
      className="text-center py-[7px] sm:py-[9px]"
      style={{ backgroundColor: "rgba(105, 18, 45, 0.6)" }}
    >
      <span className="text-[11px] sm:text-[13px] md:text-[14px] font-semibold tracking-[0.14em] uppercase text-white">
        {label}
      </span>
    </div>
  </div>
);

const ProcessCardRow = ({ cards, trailingPlus = false }) => (
  <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6 md:gap-x-6 md:gap-y-8 lg:gap-x-10">
    {cards.map((card, i) => (
      <Fragment key={card.label}>
        <ProcessCard {...card} />
        {(i < cards.length - 1 || trailingPlus) && (
          <span className="text-white font-bold text-[20px] sm:text-[22px] select-none">+</span>
        )}
      </Fragment>
    ))}
  </div>
);

const HeroProofBlock = () => (
  <div className="relative z-10 max-w-[1100px] mx-auto px-4 pb-[clamp(32px,5vw,64px)] pt-2 lg:pt-0">
    <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-[clamp(20px,3vw,32px)]">
      {HERO_METRICS.map((m) => (
        <div key={m.label} className="text-center">
          <div
            className="font-extrabold text-[clamp(20px,2.4vw,28px)] mb-2"
            style={{ color: ACCENT_LIME }}
          >
            {m.value}
          </div>
          <div className="text-white/95 text-[clamp(14px,1.2vw,18px)] leading-snug max-w-[180px] mx-auto whitespace-pre-line">
            {m.label}
          </div>
        </div>
      ))}
    </div>

    <h2
      className="text-center text-[clamp(28px,4.5vw,52px)] leading-[1.1] mb-2 text-white"
      style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
    >
      <span
        className="italic"
        style={{ color: ACCENT_LIME, fontStyle: "italic", fontWeight: 700 }}
      >
        Three minutes
      </span>{" "}
      is how it feels.
    </h2>
    <p
      className="text-center text-white/90 text-[clamp(14px,1.4vw,20px)] mb-[clamp(20px,3vw,32px)]"
      style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
    >
      Twenty minutes is what it costs, when you do this manually
    </p>

    <div className="space-y-6 sm:space-y-8 md:space-y-10">
      <ProcessCardRow cards={PROCESS_CARDS_TOP} trailingPlus />
      <ProcessCardRow cards={PROCESS_CARDS_BOTTOM} />
    </div>

    <div className="flex justify-center mt-[clamp(20px,3vw,32px)]">
      <div
        className="rounded-full px-8 sm:px-10 md:px-12 py-[12px] sm:py-[14px] md:py-[18px] text-white flex items-baseline gap-[12px] sm:gap-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.32)]"
        style={{ backgroundColor: "rgba(130, 28, 60, 0.8)" }}
      >
        <span
          className="text-[32px] sm:text-[40px] md:text-[48px] leading-none"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
        >
          20
        </span>
        <span className="text-[15px] sm:text-[17px] md:text-[19px] text-white/90 font-medium">
          minutes per item
        </span>
      </div>
    </div>
  </div>
);

const DEFAULT_HEADLINE_LEAD = "That photo does nothing";
const DEFAULT_HEADLINE_TAIL = "for you.";
const DEFAULT_SUBHEADLINE =
  "Now it: Automates YOUR webstore, YOUR sales channels, YOUR complete selling workflow.";
const DEFAULT_LIST_ITEM_1 = "webshop that sync automatically";
const DEFAULT_LIST_ITEM_2 = "Automatic workflow";
const DEFAULT_HIGHLIGHT = "All in one";
const DEFAULT_REASSURANCE = "All existing solution in 1 place";
const DEFAULT_REASSURANCE_SUB = "Mia does it in your store";
const DEFAULT_CTA_PRIMARY = "START for free";
const DEFAULT_CTA_SECONDARY = "BOOK";

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
  listItem1,
  listItem2,
  highlight,
  reassurance,
  reassuranceSub,
  ctaPrimary,
  ctaSecondary,
  instagramUrl,
  facebookUrl,
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
        <span style={{ fontWeight: 700 }}>Now it:</span>{" "}
        {heroBody.replace(/^now it[:\s-]*/i, "")}
      </p>

      <ul
        className={
          isDesktop
            ? "mb-[clamp(16px,2.2vw,22px)] space-y-[10px] text-[clamp(17px,1.45vw,21px)] text-white"
            : "mb-5 space-y-[10px] text-[18px] text-white"
        }
        style={{ fontFamily: "var(--font-bricolage)", fontWeight: 500 }}
      >
        {[listItem1, listItem2].map((item) => (
          <li key={item} className="flex items-center gap-[12px]">
            <span
              className="inline-block w-[12px] h-[12px] rounded-full shrink-0"
              style={{ backgroundColor: "#FF5294" }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p
        className={
          isDesktop
            ? "text-[clamp(26px,2.9vw,34px)] mb-[clamp(14px,2vw,20px)]"
            : "text-[26px] mb-4"
        }
        style={{
          fontFamily: "var(--font-bricolage)",
          fontWeight: 800,
          color: "#ffee24",
        }}
      >
        {highlight}
      </p>

      <p
        className={
          isDesktop
            ? "text-[clamp(20px,2vw,26px)] text-white mb-[4px]"
            : "text-[20px] text-white mb-1"
        }
        style={{ fontFamily: "var(--font-bricolage)", fontWeight: 700 }}
      >
        {reassurance}
      </p>
      <p
        className={
          isDesktop
            ? "text-[clamp(15px,1.2vw,18px)] text-white/80 mb-[clamp(20px,2.8vw,28px)]"
            : "text-[15px] text-white/80 mb-6"
        }
        style={{ fontFamily: "var(--font-bricolage)", fontWeight: 400 }}
      >
        {reassuranceSub}
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
            className="py-[12px] px-[34px] rounded-[35px] text-white leading-[18px] font-semibold cursor-pointer"
            style={{ backgroundColor: "#FF2E7E" }}
          >
            {ctaPrimary}
          </button>
        </ButtonLink>
        <ButtonLink href="contact">
          <button
            className="py-[12px] px-[34px] rounded-[35px] text-white leading-[18px] font-semibold cursor-pointer"
            style={{ backgroundColor: "#d8324b" }}
          >
            {ctaSecondary}
          </button>
        </ButtonLink>
      </div>

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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);

  const desktopSrc = video.videoUrl;
  const mobileSrc = video.mobileVideoUrl || video.videoUrl;

  useEffect(() => {
    const tryPlay = (el) => {
      if (!el) return;
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay(mobileVideoRef.current);
    tryPlay(desktopVideoRef.current);
  }, [mobileSrc, desktopSrc]);

  const headlineLead = video.heroHeadlineLead?.trim() || DEFAULT_HEADLINE_LEAD;
  const headlineTail = video.heroHeadlineTail?.trim() || DEFAULT_HEADLINE_TAIL;
  const headlineImageUrl = video.heroHeadlineImageUrl || null;
  const heroBody = video.heroSubheadline?.trim() || DEFAULT_SUBHEADLINE;
  const listItem1 = video.heroListItem1?.trim() || DEFAULT_LIST_ITEM_1;
  const listItem2 = video.heroListItem2?.trim() || DEFAULT_LIST_ITEM_2;
  const highlight = video.heroHighlight?.trim() || DEFAULT_HIGHLIGHT;
  const reassurance = video.heroReassurance?.trim() || DEFAULT_REASSURANCE;
  const reassuranceSub =
    video.heroReassuranceSub?.trim() || DEFAULT_REASSURANCE_SUB;
  const ctaPrimary = video.heroCtaPrimary?.trim() || DEFAULT_CTA_PRIMARY;
  const ctaSecondary = video.heroCtaSecondary?.trim() || DEFAULT_CTA_SECONDARY;

  const instagramUrl = video.instagramUrl || "#";
  const facebookUrl = video.facebookUrl || "#";

  const heroCopyProps = {
    headlineLead,
    headlineTail,
    headlineImageUrl,
    heroBody,
    listItem1,
    listItem2,
    highlight,
    reassurance,
    reassuranceSub,
    ctaPrimary,
    ctaSecondary,
    instagramUrl,
    facebookUrl,
  };

  return (
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
            "radial-gradient(circle at 50% 50%, #451352 0%, #a83c3c 35%, #bf5c74 70%, #332637 100%)",
          opacity: 0.75,
          mixBlendMode: "multiply",
        }}
      />

      {/* Mobile + landscape phone layout: video on top, hero content below */}
      <div className="relative z-10 lg:hidden flex flex-col min-h-[calc(105svh+56px)] -mt-[56px]">
        <div className="relative w-full aspect-[9/5] shrink-0 mt-[56px]">
          {!videoLoaded && (
            <div className="absolute inset-0 z-10 bg-black/20 flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <video
            ref={mobileVideoRef}
            key={mobileSrc}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            src={mobileSrc}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 py-8">
          <HeroCopy variant="mobile" {...heroCopyProps} />
        </div>
      </div>

      {/* Desktop layout: hero content left, video right */}
      <div className="relative z-10 hidden lg:flex max-w-[1240px] mx-auto px-4 py-[clamp(48px,8vw,80px)] flex-row items-start gap-8">
        <div className="flex-1 flex flex-col justify-center z-10">
          <HeroCopy variant="desktop" {...heroCopyProps} />
        </div>

        <div className="flex-1 relative z-10 w-full max-w-[650px]">
          <div className="relative h-[450px] w-[690px] max-w-full rounded-[12px] overflow-hidden shadow-2xl mx-auto">
            {!videoLoaded && (
              <div className="absolute inset-0 z-10 bg-black/20 flex items-center justify-center">
                <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              </div>
            )}
            <video
              ref={desktopVideoRef}
              key={desktopSrc}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setVideoLoaded(true)}
              onCanPlay={() => setVideoLoaded(true)}
              src={desktopSrc}
            />
          </div>
        </div>
      </div>

      <HeroProofBlock />
    </section>
  );
};

export default Video;
