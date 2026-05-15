"use client";

import { useEffect, useRef } from "react";
import { useSanityContent } from "../SanityProvider";

const defaultSlides = [
  {
    id: 1,
    title: "Time loss you can't measure",
    desc: "Minutes per product add up to whole days each month. You feel the overload, but you can't see where the hours go.",
    img: "/Icons/colouredshirts.png",
  },
  {
    id: 2,
    title: "No time to learn new systems",
    desc: "Every new tool promises to help but steals a week of setup. You need something that fits your current routine.",
    img: "/Icons/personpaper.jpg",
  },
  {
    id: 3,
    title: "Manual listing is too slow for unique items",
    desc: "Every secondhand product is one-of-a-kind. Writing titles, descriptions, and prices one by one kills your pipeline.",
    img: "/Icons/girls.jpg",
  },
  {
    id: 4,
    title: "Physical and online stock out of sync",
    desc: "Selling the same item twice. Customers arriving for something already gone. Manual updates that are always behind.",
    img: "/Icons/Bestie_Staycation.jpg",
  },
  {
    id: 5,
    title: "Admin kills your margin",
    desc: "Consignor splits, payments, reconciliation — the invisible work eats the profit on every sale.",
    img: "/Icons/girl-fashion.png",
  },
  {
    id: 6,
    title: "Labels and tags by hand slow you down",
    desc: "Printing, sticking, re-printing — barcodes and price tags shouldn't be a full-time job on top of everything else.",
    img: "/Icons/shirt-tag.jpg",
  },
];

const PhoneCard = ({ slide }) => (
  <div
    className="flex-shrink-0 min-h-[520px] w-[280px] sm:w-[320px] rounded-[20px] flex flex-col overflow-hidden"
    style={{ background: "linear-gradient(90deg, #f87ac9, #f40e0e)" }}
  >
    {/* Image Section — dominates the card */}
    <div className="w-full h-[360px] overflow-hidden">
      <img
        src={slide.img}
        alt={slide.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content Section */}
    <div className="pt-[16px] pb-[16px] px-[16px] text-center flex flex-col flex-1">
      <h3
        className="text-[19px] sm:text-[21px] leading-[1.2] text-black"
        style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
      >
        {slide.title}
      </h3>
      <p className="text-[15px] sm:text-[16px] leading-[1.45] text-white pt-3">
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
