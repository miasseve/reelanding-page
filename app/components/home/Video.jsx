"use client";

import { useState, useEffect } from "react";
import { useSanityContent } from "../SanityProvider";

const VideoPlayer = ({ src }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="bg-black h-screen relative overflow-hidden">
      {!loaded && (
        <div className="absolute inset-0 z-10 bg-black flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
      <video
        key={src}
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setLoaded(true)}
        src={src}
      />
    </section>
  );
};

const Video = () => {
  const { video } = useSanityContent();
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Don't render until we know the screen size
  if (isMobile === null) {
    return (
      <section className="bg-black h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </section>
    );
  }

  const src = isMobile ? video.mobileVideoUrl : video.desktopVideoUrl;

  return <VideoPlayer key={src} src={src} />;
};

export default Video;
