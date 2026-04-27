"use client";

import { useEffect, useRef } from "react";
import { useSanityContent } from "../SanityProvider";

const defaultSlides = [
  {
    id: 1,
    title: "Time loss you can't measure",
    desc: "Minutes per product add up to whole days each month. You feel the overload, but you can't see where the hours go.",
    img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&q=80",
  },
  {
    id: 2,
    title: "No time to learn new systems",
    desc: "Every new tool promises to help but steals a week of setup. You need something that fits your current routine.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&q=80",
  },
  {
    id: 3,
    title: "Manual listing is too slow for unique items",
    desc: "Every secondhand product is one-of-a-kind. Writing titles, descriptions, and prices one by one kills your pipeline.",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
  },
  {
    id: 4,
    title: "Physical and online stock out of sync",
    desc: "Selling the same item twice. Customers arriving for something already gone. Manual updates that are always behind.",
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80",
  },
  {
    id: 5,
    title: "Admin kills your margin",
    desc: "Consignor splits, payments, reconciliation — the invisible work eats the profit on every sale.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
];

const PhoneCard = ({ slide }) => (
 <div className="flex-shrink-0 min-h-[470px] w-[280px] sm:w-[320px] bg-gradient-to-b from-[#0B0220] via-[#2A0F4F] to-[#3B0A3A] rounded-[20px]">
  
  {/* Image Section */}
  <div className="rounded-tl-[16px] rounded-tr-[16px] overflow-hidden w-full h-[320px]">
    <img
      src={slide.img}
      alt={slide.title}
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content Section */}
  <div className="pt-[14px] pb-[12px] px-[12px] text-center">
    <h3
      className="text-[16px] sm:text-[18px] min-h-[44px] font-medium leading-[20px]"
      style={{
        background: "linear-gradient(90deg, #FFB088, #FF6B9D)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {slide.title}
    </h3>
    <p className="text-[14px] leading-[20px] text-white pt-2">
      {slide.desc}
    </p>
  </div>

</div>
);

const ProblemCarousel = () => {
  const { images } = useSanityContent();
  const scrollRef = useRef(null);

  const { homeContent } = useSanityContent();

  // Merge Sanity text + images into slides
  const slides = defaultSlides.map((slide, idx) => {
    const key = `carousel-${idx + 1}`;
    const sanityImg = images[key];
    const sanityText = homeContent?.problems?.[idx];
    return {
      ...slide,
      title: sanityText?.title || slide.title,
      desc: sanityText?.desc || slide.desc,
      img: sanityImg?.src || slide.img,
    };
  });

  useEffect(() => {
    const container = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-[80px] overflow-hidden">
      <div ref={scrollRef} className="flex gap-[16px] sm:gap-[24px] px-[16px] sm:px-[40px] overflow-x-hidden overflow-y-hidden">
        {[...slides, ...slides].map((slide, index) => (
          <PhoneCard key={index} slide={slide} />
        ))}
      </div>
    </section>
  );
};

export default ProblemCarousel;
