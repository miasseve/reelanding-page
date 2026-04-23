"use client";

import { Lock, Sparkles } from "lucide-react";

export default function SmartPricingNote() {
  return (
    <section className="pt-[40px] pb-[16px] sm:pt-[56px] sm:pb-[20px] px-[16px] sm:px-[24px] md:px-[40px] lg:px-[64px]">
      <div className="max-w-[900px] mx-auto">
        <div className="relative bg-white rounded-[20px] p-[28px] sm:p-[40px] overflow-hidden shadow-[0px_0px_5px_rgba(0,0,0,0.1)]">
          {/* Lock badge */}
          <div className="absolute top-[20px] right-[20px] inline-flex items-center gap-[6px] bg-gray-100 text-gray-600 px-[12px] py-[6px] rounded-full text-[12px] font-semibold tracking-[0.05em] uppercase">
            <Lock size={13} />
            Locked
          </div>

          {/* Icon */}
          <div className="w-[56px] h-[56px] flex items-center justify-center rounded-[14px] bg-gradient-to-br from-purple-500/15 to-pink-500/15 mb-[16px]">
            <Sparkles size={26} className="text-purple-500" />
          </div>

          {/* Eyebrow */}
          <p className="text-[12px] sm:text-[13px] font-semibold tracking-[0.15em] uppercase text-purple-600 mb-[8px]">
            Smart Pricing Suggestions
          </p>

          {/* Headline */}
          <h3 className="text-[22px] sm:text-[26px] font-bold text-[#252525] leading-[1.2] mb-[12px] max-w-[620px]">
            AI-powered price suggestions for your secondhand products.
          </h3>

          {/* Body */}
          <p className="text-[15px] sm:text-[16px] text-[#434343] leading-[1.6] mb-[24px] max-w-[620px]">
            Once unlocked, Smart Pricing analyses your catalogue and suggests
            optimal prices per item helping you sell faster without guessing.
          </p>

          {/* Unlock requirements */}
          <div className="bg-gray-50 border border-gray-100 rounded-[14px] px-[20px] py-[20px]">
            <p className="text-[12px] sm:text-[13px] font-semibold tracking-[0.12em] uppercase text-gray-500 mb-[14px]">
              Unlocks when you reach
            </p>
            <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[28px] sm:items-center">
              <div className="flex items-center gap-[14px]">
                <div className="w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center rounded-full bg-purple-500 text-white text-[13px] font-bold">
                  300+
                </div>
                <span className="text-[15px] sm:text-[16px] text-[#252525]">
                  <span className="font-bold">Products</span> Listed
                </span>
              </div>
              <div className="hidden sm:flex items-center text-gray-400 text-[14px] font-semibold">
                OR
              </div>
              <div className="flex items-center gap-[14px]">
                <div className="w-[48px] h-[48px] flex-shrink-0 flex items-center justify-center rounded-full bg-pink-500 text-white text-[18px] font-bold">
                  2
                </div>
                <span className="text-[15px] sm:text-[16px] text-[#252525]">
                  <span className="font-bold">Months</span> of Usage
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
