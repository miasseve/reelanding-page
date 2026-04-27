"use client";
import { useState, useEffect, useRef } from "react";
import { useSanityContent } from "../SanityProvider";
import ButtonLink from "../ButtonLink";

const DEFAULT_HEADLINE = "Sell secondhand online, without extra work.";
const DEFAULT_BODY =
  "From 1 picture, create a ready product listing, sync stock automatically, and sell through your webstore with zero manual work.";
const DEFAULT_REASSURANCE =
  "We handle your next product batch free, so you can see how fast and simple it is in your own store.";
const DEFAULT_LONG_REASSURANCE =
  "No new habits for your team. You only add the passwords for the channels you want to use and choose your webstore password. Start taking pictures or uploading on List and the rest runs automatically.";
const DEFAULT_CTA_PRIMARY = "Book Mia now";
const DEFAULT_CTA_SECONDARY = "Try with 1 picture";

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

const Video = () => {
  const { video } = useSanityContent();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);

  const gradientFrom = video.gradientFrom || "#7C3AED";
  const gradientTo = video.gradientTo || "#EC4899";

  const desktopSrc = video.videoUrl;
  const mobileSrc = video.mobileVideoUrl || video.videoUrl;

  // iOS Safari sometimes ignores autoplay even with muted+playsInline.
  // Manually attempt play() once the video is mounted; swallow promise rejection.
  useEffect(() => {
    const tryPlay = (el) => {
      if (!el) return;
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay(mobileVideoRef.current);
    tryPlay(desktopVideoRef.current);
  }, [mobileSrc, desktopSrc]);

  const heroHeadline = video.heroHeadline?.trim() || DEFAULT_HEADLINE;
  const heroBody = video.heroSubheadline?.trim() || DEFAULT_BODY;
  const heroReassurance = video.heroReassurance?.trim() || DEFAULT_REASSURANCE;
  const heroLongReassurance = video.heroLongReassurance?.trim() || DEFAULT_LONG_REASSURANCE;
  const ctaPrimary = video.heroCtaPrimary?.trim() || DEFAULT_CTA_PRIMARY;
  const ctaSecondary = video.heroCtaSecondary?.trim() || DEFAULT_CTA_SECONDARY;

  const instagramUrl = video.instagramUrl || "#";
  const facebookUrl = video.facebookUrl || "#";

  return (
    <section
      className="relative w-full lg:min-h-[700px] overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      {/* Mobile + landscape phone layout: video on top, hero content below */}
      <div className="lg:hidden flex flex-col min-h-[calc(105svh+56px)] -mt-[56px]">
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

        <div className="flex-1 flex flex-col justify-center px-6 py-8 text-white">
          <h1 className="font-bold text-[36px] leading-[1.1] mb-5">
            {heroHeadline}
          </h1>
          <p className="text-[17px] leading-[1.55] text-white/85 mb-7">
            {heroBody}
          </p>

          <div className="flex flex-wrap gap-3 mb-5">
            <ButtonLink href="contact">
              <button className="gradient-btn py-[12px] px-[35px] rounded-[35px] text-white leading-[18px] font-medium cursor-pointer">
                {ctaPrimary}
              </button>
            </ButtonLink>
            <ButtonLink href="https://re-e.dk/try/add-product">
              <button className="border-[1.5px] border-purple-600 bg-white py-[12px] px-[35px] rounded-[35px] text-purple-600 leading-[18px] font-medium cursor-pointer">
                {ctaSecondary}
              </button>
            </ButtonLink>
          </div>

          <p className="text-[16px] leading-[1.5] text-white/80 italic mb-5">
            {heroReassurance}
          </p>

          <div className="bg-white/10 border border-white/20 rounded-[12px] px-4 py-3 mb-7">
            <p className="text-[16px] leading-[1.6] text-white">
              {heroLongReassurance}
            </p>
          </div>

          {/* Let's Connect */}
          <div>
            <p className="text-[14px] font-semibold tracking-[0.15em] uppercase text-white mb-[12px]">
              Let&apos;s Connect
            </p>
            <div className="flex items-center gap-[12px]">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[44px] h-[44px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout: hero content left, video right */}
      <div className="hidden lg:flex max-w-[1240px] mx-auto px-4 py-[clamp(48px,8vw,80px)] flex-row items-center gap-8">
        <div className="flex-1 flex flex-col justify-center text-white z-10">
          <h1 className="font-bold text-[clamp(32px,5vw,54px)] leading-[1.08] mb-[clamp(16px,2.5vw,22px)]">
            {heroHeadline}
          </h1>

          <p className="text-[clamp(15px,1.3vw,18px)] leading-[1.6] text-white/90 max-w-[520px] mb-[clamp(20px,3vw,30px)]">
            {heroBody}
          </p>

          <div className="flex flex-wrap gap-[12px] mb-[clamp(14px,2vw,20px)]">
            <ButtonLink href="contact">
              <button className="gradient-btn py-[12px] px-[35px] rounded-[35px] text-white leading-[18px] font-medium cursor-pointer">
                {ctaPrimary}
              </button>
            </ButtonLink>
            <ButtonLink href="https://re-e.dk/try/add-product">
              <button className="border-[1.5px] border-purple-600 bg-white py-[12px] px-[35px] rounded-[35px] text-purple-600 leading-[18px] font-medium cursor-pointer">
                {ctaSecondary}
              </button>
            </ButtonLink>
          </div>

          <p className="text-[clamp(12px,1vw,14px)] leading-[1.55] text-white/85 italic max-w-[520px] mb-[clamp(14px,2vw,20px)]">
            {heroReassurance}
          </p>

          <div className="bg-white/10 border border-white/20 rounded-[12px] px-4 py-3 max-w-[540px] mb-[clamp(24px,3vw,36px)]">
            <p className="text-[clamp(12px,1vw,14px)] leading-[1.6] text-white">
              {heroLongReassurance}
            </p>
          </div>

          {/* Let's Connect */}
          <div>
            <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-white mb-[10px]">
              Let&apos;s Connect
            </p>
            <div className="flex items-center gap-[12px]">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>
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
    </section>
  );
};

export default Video;
