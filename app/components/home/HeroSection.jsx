"use client";

import React from "react";
import { useSanityContent, t } from "../SanityProvider";
import ButtonLink from "../ButtonLink";

const DEFAULT_STATS = [
  { value: "95%", label: "less listing time" },
  { value: "+30%", label: "average revenue increase" },
  { value: "1", label: "minute per product" },
];

export default function HeroSection() {
  const { homeContent } = useSanityContent();
  const stats = homeContent?.heroStats?.length > 0 ? homeContent.heroStats : DEFAULT_STATS;

  return (
    <section className="bg-[#f0ebe3] py-[56px] flex flex-col justify-center">
      <div className="w-full max-w-[900px] mx-auto px-[clamp(20px,5vw,48px)] py-[clamp(48px,8vw,96px)] text-center">

        {/* Eyebrow tag */}
        <div className="mb-[clamp(14px,2.5vw,22px)]">
          <span className="inline-flex items-center gap-[8px] text-[clamp(11px,1.4vw,13px)] font-medium tracking-[0.18em] uppercase text-[#252525]">
            <span className="inline-block w-7 h-px bg-[#252525]" />
            {t(homeContent, "heroEyebrow", "2hand2go")}
            <span className="inline-block w-7 h-px bg-[#252525]" />
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-black text-[32px] sm:text-[clamp(36px,4.5vw,54px)] leading-[1.08] tracking-[-0.01em] text-[#252525] mx-auto mb-[clamp(18px,3vw,28px)] max-w-[820px]">
          {t(homeContent, "heroHeadline", "WE AUTOMATE WHAT SLOWS YOU DOWN. SO YOU CAN GROW.")}
        </h1>

        {/* Sub-copy */}
        <p className="text-[clamp(16px,1.25vw,16px)] leading-[1.7] text-[#434343] max-w-[660px] mx-auto mb-[clamp(28px,4.5vw,44px)] font-normal">
          {t(homeContent, "heroSubheadline", "We Build Automations That Fix What's Blocking Your Growth — Even The Problems You Don't See.")}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-[clamp(10px,2vw,16px)] mb-[clamp(36px,6vw,60px)]">
          <ButtonLink href="contact">
            <button className="gradient-btn py-[12px] px-[35px] rounded-[35px] text-white leading-[18px] font-medium cursor-pointer">
              {t(homeContent, "heroCtaPrimary", "Book a free audit →")}
            </button>
          </ButtonLink>
          <ButtonLink href="/#tools">
            <button className="border-[1.5px] border-purple-600 py-[12px] px-[35px] rounded-[35px] text-purple-600 leading-[18px] font-medium cursor-pointer">
              {t(homeContent, "heroCtaSecondary", "How we work")}
            </button>
          </ButtonLink>
        </div>

        {/* Stats */}
        <div className="max-w-[700px] mx-auto">
          <div className="flex items-center gap-[clamp(10px,2vw,20px)] mb-[clamp(20px,3vw,32px)]">
            <div className="flex-1 h-px bg-[#252525]" />
            <span className="font-semibold text-[12px] sm:text-[13px] md:text-[14px] tracking-[0.12em] uppercase text-[#252525] whitespace-nowrap">
              Trusted by secondhand stores
            </span>
            <div className="flex-1 h-px bg-[#252525]" />
          </div>

          <div className="flex justify-center items-stretch">
            {stats.map((s, i) => (
              <React.Fragment key={s.value}>
                <div className="flex-1 min-w-0 text-left px-[clamp(8px,2.5vw,28px)] py-[clamp(8px,1.5vw,12px)]">
                  <div className="font-bold text-[28px] sm:text-[36px] md:text-[42px] leading-[1.1] text-[#252525] mb-1 whitespace-nowrap">
                    {s.value}
                  </div>
                  <div className="text-[14px] sm:text-[15px] md:text-[16px] text-[#434343] leading-[1.4]">
                    {s.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px self-stretch bg-[#252525] my-1 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
