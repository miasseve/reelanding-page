"use client";

import { useState } from "react";
import HeroVideoBlock from "./HeroVideoBlock";

const PINK = "#FF2E7E";

const DEMO_VIDEO_URL =
  "https://res.cloudinary.com/dlkgz4a2j/video/upload/q_auto,f_auto/v1779883824/Ree_video_mq4dur.mp4";

const ListPromoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
  <section
    id="demo-video"
    className="relative px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[100px] overflow-hidden lg:min-h-screen lg:flex lg:items-center scroll-mt-[80px]"
    style={{
      backgroundImage: "url('/Icons/girl-fashion.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Pink wash so the photo only barely shows through */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ backgroundColor: "rgba(255, 227, 235, 0.88)" }}
    />

    <div className="relative z-10 w-full max-w-[1240px] mx-auto">
      {/* Centered section heading */}
      <h2
        className="text-center text-[32px] sm:text-[42px] md:text-[54px] leading-[1.1] text-[#1a1a1a] mb-[40px] sm:mb-[56px] md:mb-[72px]"
        style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
      >
        From the first photo
        <br />
        <span
          className="italic"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontStyle: "italic",
            color: PINK,
          }}
        >
          to the final payout.
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="text-center md:text-left">
          <p
            className="text-[12px] sm:text-[13px] tracking-[0.22em] font-bold uppercase"
            style={{ color: PINK }}
          >
            CREATE & LABEL
          </p>
          <h3
            className="text-[28px] sm:text-[36px] md:text-[44px] leading-[1.12] text-[#1a1a1a] mt-3"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
          >
            Listed and labelled in seconds.
          </h3>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] text-[#3a3a3a] mt-6 max-w-[560px] mx-auto md:mx-0">
            Point, shoot, done. From one image, 2hand2go fills in brand, size,
            colour, material and condition, writes the listing, and prints a
            barcode you can stick straight onto the item.
          </p>

          <ul className="mt-7 space-y-[14px] inline-block text-left">
            {[
              "Title and description generated automatically",
              "A unique SKU for every item, tracked across channels",
              "Print-ready label with size and price visible",
            ].map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-[17px] sm:text-[19px] md:text-[20px] text-[#1a1a1a] font-medium leading-[1.5]"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={PINK}
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-[4px]"
                  aria-hidden
                >
                  <polyline points="4 12 10 18 20 6" />
                </svg>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex justify-center md:justify-start">
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="group inline-flex items-center gap-[10px] rounded-full px-[28px] py-[14px] text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(244,14,14,0.25)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(244,14,14,0.4)]"
              style={{ backgroundColor: PINK }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch 30 sec demo
            </button>
          </div>
        </div>

        {/* Reusable video — same look/position as the hero video container */}
        <div className="w-full flex justify-center md:justify-end">
          <HeroVideoBlock variant="desktop" />
        </div>
      </div>
    </div>

    {showVideo && (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-[16px] backdrop-blur-sm"
        onClick={() => setShowVideo(false)}
      >
        <div
          className="relative w-full max-w-[900px]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setShowVideo(false)}
            aria-label="Close video"
            className="absolute -top-[44px] right-0 flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white/15 text-white text-[22px] leading-none transition-colors hover:bg-white/30"
          >
            ×
          </button>
          <video
            className="w-full h-full object-contain rounded-[12px] shadow-2xl"
            autoPlay
            loop
            playsInline
            controls
            preload="metadata"
            src={DEMO_VIDEO_URL}
          />
        </div>
      </div>
    )}
  </section>
  );
};

export default ListPromoSection;
