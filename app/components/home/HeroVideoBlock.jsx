"use client";
import { useState, useEffect, useRef } from "react";
import { useSanityContent } from "../SanityProvider";

// Reusable hero video block — extracted from Video.jsx so it can be dropped
// into any section that needs the same look (rounded container, fade-in,
// spinner while loading). Pulls URLs from Sanity via useSanityContent.
const HeroVideoBlock = ({ variant = "desktop", srcOverride }) => {
  const { video } = useSanityContent();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const desktopSrc = video.videoUrl;
  const mobileSrc = video.mobileVideoUrl || video.videoUrl;
  // srcOverride lets a section supply its own clip (e.g. a local /public file)
  // instead of the Sanity hero video.
  const src = srcOverride || (variant === "mobile" ? mobileSrc : desktopSrc);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const p = el.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, [src]);

  if (variant === "mobile") {
    return (
      <div className="relative w-full aspect-[9/5] shrink-0">
        {!videoLoaded && (
          <div className="absolute inset-0 z-10 bg-black/20 flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
        <video
          ref={videoRef}
          key={src}
          className={`w-full h-full object-contain transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          src={src}
        />
      </div>
    );
  }

  return (
    <div className="relative h-[450px] w-[690px] max-w-full rounded-[12px] overflow-hidden shadow-2xl mx-auto">
      {!videoLoaded && (
        <div className="absolute inset-0 z-10 bg-black/20 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      <video
        ref={videoRef}
        key={src}
        className={`w-full h-full object-contain transition-opacity duration-500 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
        onCanPlay={() => setVideoLoaded(true)}
        src={src}
      />
    </div>
  );
};

export default HeroVideoBlock;
