"use client";
import { useState, useRef } from "react";
import { useSanityContent } from "../SanityProvider";

const Video = () => {
  const { video } = useSanityContent();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitEnterFullscreen) el.webkitEnterFullscreen();
  };

  const gradientFrom = video.gradientFrom || "#7C3AED";
  const gradientTo = video.gradientTo || "#EC4899";
  const heroTitle = video.heroTitle || "We'd love to hear from you.";
  const heroText =
    video.heroText ||
    "Share your thoughts, questions, or suggestions on how we can further promote diversity, equity, and inclusivity.";
  const heroButtonText = video.heroButtonText || "Join Us";
  const instagramUrl = video.instagramUrl || "#";
  const facebookUrl = video.facebookUrl || "#";

  const desktopSrc = video.videoUrl;
  const mobileSrc = video.mobileVideoUrl || video.videoUrl;

  return (
    <section
      className="relative w-full sm:min-h-[600px] lg:min-h-[700px] overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      {/* Mobile layout: video on top, text below */}
      <div className="sm:hidden flex flex-col h-[calc(105svh+56px)] -mt-[56px]">
        <div className="relative w-full aspect-[9/5] shrink-0 mt-[56px]">
          {!videoLoaded && (
            <div className="absolute inset-0 z-10 bg-black/20 flex items-center justify-center">
              <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </div>
          )}
          <video
            ref={videoRef}
            key={mobileSrc}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoLoaded(true)}
            src={mobileSrc}
          />
          {/* Tap overlay to trigger fullscreen */}
          <button
            onClick={handleFullscreen}
            className="absolute inset-0 z-10 cursor-pointer"
            aria-label="Play fullscreen"
          />
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 py-8 text-white">
          <h1 className="font-bold text-[44px] leading-[1.1] mb-6">
            {heroTitle}
          </h1>
          <p className="text-[20px] leading-[1.55] text-white/80 mb-10">
            {heroText}
          </p>
          <button className="w-full border-2 border-white py-[18px] rounded-full text-white text-[20px] font-medium cursor-pointer hover:bg-white/10 transition-colors">
            {heroButtonText}
          </button>

          <div className="mt-12">
            <p className="text-[15px] font-semibold tracking-[0.15em] uppercase mb-[14px]">
              Let’s Connect
            </p>
            <div className="flex items-center gap-[16px]">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[46px] h-[46px] flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-[46px] h-[46px] flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout: text left, video right */}
      <div className="hidden sm:flex max-w-[1240px] mx-auto px-4 py-[clamp(48px,8vw,80px)] flex-row items-center gap-8">
        <div className="flex-1 flex flex-col justify-center text-white z-10">
          <h1 className="font-bold text-[clamp(32px,5vw,56px)] leading-[1.1] mb-[clamp(16px,2.5vw,24px)]">
            {heroTitle}
          </h1>

          <p className="text-[clamp(15px,1.3vw,18px)] leading-[1.65] text-white/85 max-w-[500px] mb-[clamp(24px,3.5vw,40px)]">
            {heroText}
          </p>

          <div>
            <button className="border-2 border-white py-[14px] px-[40px] rounded-full text-white text-[clamp(15px,1.1vw,17px)] font-medium cursor-pointer hover:bg-white/10 transition-colors">
              {heroButtonText}
            </button>
          </div>

          <div className="mt-[clamp(40px,6vw,80px)]">
            <p className="text-[13px] font-semibold tracking-[0.15em] uppercase mb-[12px]">
              Let’s Connect
            </p>

            <div className="flex items-center gap-[14px]">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
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
              key={desktopSrc}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                videoLoaded ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
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
