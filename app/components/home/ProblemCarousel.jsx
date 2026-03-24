"use client";

import { useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Products sitting unlisted while customers look elsewhere",
    desc: "Every day an item isn't live is a day it can't sell. Manual listing slows your entire revenue cycle.",
    img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
  },
  {
    id: 2,
    title: "Stock out of sync across channels",
    desc: "Selling the same item twice. Customers arriving for something already gone. Manual updates that are always behind.",
    img: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=600&q=80",
  },
  {
    id: 3,
    title: "Hidden admin crushing your team's capacity",
    desc: "Before we audit a store, we calculate the real cost. It's almost always higher than the owner expects.",
    img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&q=80",
  },
  {
    id: 4,
    title: "Growth capped by process, not potential",
    desc: "You can't scale what you can't automate. We find the ceiling and remove it.",
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80",
  },
  {
    id: 5,
    title: "Tools that don't talk to each other",
    desc: "Most retailers have tools  but they weren't built for your workflow and no one is accountable for the outcome.",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80",
  },
];

const PhoneCard = ({ slide }) => (
 <div className="flex-shrink-0 h-[470px] w-[320px] bg-gradient-to-b from-[#0B0220] via-[#2A0F4F] to-[#3B0A3A] rounded-[20px]">
  
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
    <h3 className="text-[18px] h-[44px] text-white font-medium leading-[20px]">
      {slide.title}
    </h3>
    <p className="text-[14px] leading-[20px] text-white pt-2">
      {slide.desc}
    </p>
  </div>

</div>
);

const ProblemCarousel = () => {
  const scrollRef = useRef(null);

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
      <div ref={scrollRef} className="flex gap-[24px] px-[40px] overflow-x-hidden">
        {[...slides, ...slides].map((slide, index) => (
          <PhoneCard key={index} slide={slide} />
        ))}
      </div>
    </section>
  );
};

export default ProblemCarousel;
