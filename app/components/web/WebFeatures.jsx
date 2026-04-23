"use client";

import { Zap, Palette, Link2, Smartphone } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    title: "Live in 3 days",
    desc: "From onboarding to live webstore in three business days — no developer brief needed.",
  },
  {
    icon: Palette,
    title: "White-label branding",
    desc: "Your colors, your domain, your logo. The webstore looks like yours from day one.",
  },
  {
    icon: Link2,
    title: "Synced with 2hand2go List",
    desc: "Products listed once appear here automatically. Stock stays in sync across all channels.",
  },
  {
    icon: Smartphone,
    title: "Built for mobile",
    desc: "Shoppers buy on phones. Your store is fast, clean, and responsive on every device.",
  },
];

export default function WebFeatures() {
  return (
    <section className="bg-white py-[48px] sm:py-[64px] md:py-[96px] px-[16px] sm:px-[24px]">
      <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[1040px] mx-auto text-center">
        <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold leading-[32px] sm:leading-[38px] md:leading-[43px] text-[#252525]">
          A webstore that&apos;s ready when you are.
        </h2>
        <p className="text-[15px] sm:text-[16px] md:text-[18px] font-medium mt-[12px] leading-[24px] sm:leading-[27px] md:leading-[30px] text-[#434343] max-w-[720px] mx-auto">
          Everything you need to start selling online — without the usual 6-month
          project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] mt-[40px] sm:mt-[48px]">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white flex flex-col w-full rounded-[20px] p-[24px] text-left transition-all duration-300 ease-out shadow-[0px_0px_5px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0px_8px_24px_rgba(124,58,237,0.25)]"
              >
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[15px] bg-purple-50 mb-[16px]">
                  <Icon size={25} className="text-purple-500" />
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-semibold">{item.title}</h3>
                <p className="text-[16px] leading-[22px] text-[#252525] mt-[12px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
