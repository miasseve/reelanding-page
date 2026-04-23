"use client";

import { Camera, Globe, Check } from "lucide-react";
import { useSanityContent, t } from "../SanityProvider";
import ButtonLink from "../ButtonLink";

const LIST_BULLETS = [
  "One picture per product",
  "Ready listing across channels",
  "Automatic stock sync",
  "Connect via API to your systems",
];

const WEB_BULLETS = [
  "Launch in 3 days",
  "White-label branding",
  "Synced with 2hand2go List",
  "No developer brief needed",
];

export default function HelpSection() {
  const { homeContent } = useSanityContent();

  return (
    <section className="bg-[#f0ebe3] py-[48px] sm:py-[64px] md:py-[96px] px-[16px] sm:px-[24px]">
      <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[40px] sm:mb-[56px]">
          <p className="text-[20px] sm:text-[18px] font-medium text-[#252525] mb-[8px]">
            {t(homeContent, "helpLabel", "OUR SOLUTIONS")}
          </p>
          <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold leading-[32px] sm:leading-[38px] md:leading-[43px] gradient-text mb-[16px]">
            {t(homeContent, "helpHeading", "Two solutions. One secondhand workflow.")}
          </h2>
          <p className="text-[15px] sm:text-[16px] md:text-[18px] font-medium leading-[24px] sm:leading-[27px] md:leading-[30px] text-[#434343] max-w-[720px] mx-auto">
            {t(homeContent, "helpDescription", "Use List to get products shoppable. Add Web to sell through your own branded webstore. Use both together for the full 2hand2go setup.")}
          </p>
        </div>

        {/* Two solutions side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] md:gap-[24px]">
          {/* List */}
          <div className="bg-white rounded-[20px] p-[28px] sm:p-[36px] flex flex-col shadow-[0px_0px_5px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0px_8px_24px_rgba(124,58,237,0.25)]">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[15px] bg-purple-500/10 mb-[20px]">
              <Camera size={28} className="text-purple-500" />
            </div>
            <h3 className="text-[22px] sm:text-[26px] font-bold text-[#252525] mb-[8px]">
              2hand2go List
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#434343] leading-[1.6] mb-[20px]">
              Turn 1 picture into a ready product listing. Sell across channels with stock synced automatically.
            </p>
            <ul className="flex flex-col gap-[10px] mb-[24px]">
              {LIST_BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-[10px] text-[14px] sm:text-[15px] text-[#252525]">
                  <Check size={18} className="text-purple-500 flex-shrink-0 mt-[1px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <ButtonLink href="https://re-e.dk/">
                <button className="w-full gradient-btn py-[12px] px-[28px] rounded-[35px] text-white font-medium cursor-pointer text-[15px] sm:text-[16px]">
                  See 2hand2go List
                </button>
              </ButtonLink>
            </div>
          </div>

          {/* Web */}
          <div className="bg-white rounded-[20px] p-[28px] sm:p-[36px] flex flex-col shadow-[0px_0px_5px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0px_8px_24px_rgba(236,72,153,0.25)]">
            <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[15px] bg-pink-500/10 mb-[20px]">
              <Globe size={28} className="text-pink-500" />
            </div>
            <h3 className="text-[22px] sm:text-[26px] font-bold text-[#252525] mb-[8px]">
              2hand2go Web
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#434343] leading-[1.6] mb-[20px]">
              Ready-to-launch webstore built for secondhand. Live in 3 days, fully branded, zero developer brief.
            </p>
            <ul className="flex flex-col gap-[10px] mb-[24px]">
              {WEB_BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-[10px] text-[14px] sm:text-[15px] text-[#252525]">
                  <Check size={18} className="text-pink-500 flex-shrink-0 mt-[1px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <ButtonLink href="/web">
                <button className="w-full gradient-btn py-[12px] px-[28px] rounded-[35px] text-white font-medium cursor-pointer text-[15px] sm:text-[16px]">
                  See 2hand2go Web
                </button>
              </ButtonLink>
            </div>
          </div>
        </div>

        {/* Reassurance line */}
        <div className="mt-[40px] sm:mt-[48px] max-w-[800px] mx-auto">
          <div
            className="border-l-8 border-purple-500 px-[20px] sm:px-[32px] py-[16px] sm:py-[20px] text-gray-600 italic text-[15px] sm:text-[17px] font-medium text-left"
            style={{ background: "linear-gradient(to right, #f5f3ff, #ffffff)" }}
          >
            &quot;{t(homeContent, "helpQuote", "No new habits for your team. You only add the passwords for the channels you want to use and choose your webstore password. Start taking pictures or uploading on List and the rest runs automatically.")}&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
