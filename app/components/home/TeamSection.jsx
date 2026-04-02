"use client";

import { ShoppingBag, RefreshCw, ShoppingCart, Code2, LayoutGrid, Users } from "lucide-react";
import { useSanityContent, t } from "../SanityProvider";

const DEFAULT_EXPERTISE = ["Fashion retail", "Secondhand commerce", "E-commerce", "Software engineering", "Merchandising", "Retail consulting"];
const ICONS = [
  <ShoppingBag key="sb" size={20} className="text-purple-500" />,
  <RefreshCw key="rw" size={20} className="text-purple-500" />,
  <ShoppingCart key="sc" size={20} className="text-purple-500" />,
  <Code2 key="c2" size={20} className="text-purple-500" />,
  <LayoutGrid key="lg" size={20} className="text-purple-500" />,
  <Users key="u" size={20} className="text-purple-500" />,
];

const TeamSection = () => {
  const { images, homeContent } = useSanityContent();
  const teamPhoto = images["team-photo"] || { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80", alt: "Team meeting" };
  const expertiseLabels = homeContent?.teamExpertise?.length > 0 ? homeContent.teamExpertise : DEFAULT_EXPERTISE;

  return (
    <section className="py-[48px] sm:py-[96px] lg:py-[160px] px-[16px] sm:px-[40px] md:px-[80px]">
      <div className="max-w-8xl mx-auto">
        <div className="bg-white p-[20px] sm:p-[32px] md:p-[40px]">
          <div className="flex flex-col lg:flex-row gap-[30px] lg:gap-[40px]">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-bold leading-[1.1] sm:leading-[1.1] lg:leading-[43px] text-[#252525]">
                  {t(homeContent, "teamHeading", "Fashion people. Tech people. Retail people. One team.")}
                </h2>
                <p className="text-[15px] sm:text-[16px] lg:text-[18px] font-semibold leading-[22px] sm:leading-[25px] text-[#434343] pt-[12px] sm:pt-[15px]">
                  {t(homeContent, "teamSubheading", "We are retail professionals and engineers who built the tools we wished existed.")}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-[12px] sm:gap-[16px] lg:gap-[20px] pt-[20px] sm:pt-[30px]">
                {expertiseLabels.map((label, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-[6px] sm:gap-[12px] shadow-[0px_0px_5px_rgba(0,0,0,0.1)] rounded-[20px] px-[10px] sm:px-[16px] py-[10px] min-h-[70px] sm:min-h-[80px] lg:min-h-[95px]"
                  >
                    <div className="w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] lg:w-[60px] lg:h-[60px] flex-shrink-0 flex items-center justify-center rounded-[12px] sm:rounded-[15px] bg-purple-50">
                      {ICONS[i] || ICONS[0]}
                    </div>
                    <span className="text-[14px] sm:text-[14px] lg:text-[18px] text-black font-semibold leading-tight min-w-0 break-words">{label}</span>
                  </div>
                ))}
              </div>

              <p className="text-[16px] sm:text-[18px] font-bold leading-[24px] text-black pt-[16px] sm:pt-[20px] pb-[8px] sm:pb-[12px]">Expertise includes:</p>
            </div>

            <div className="w-full lg:w-[48%] flex-shrink-0">
              <img src={teamPhoto.src} alt={teamPhoto.alt} className="w-full h-[220px] sm:h-[280px] lg:h-full object-cover" />
            </div>
          </div>

          <div className="pt-[16px] sm:pt-[20px]">
            <div
              className="border-l-8 border-purple-500 px-[16px] sm:px-[24px] lg:px-[32px] py-[16px] sm:py-[20px] text-gray-600 italic text-[16px] sm:text-[18px] font-medium w-full text-left"
              style={{ background: "linear-gradient(to right, #f5f3ff, #ffffff)" }}
            >
              <p className="text-[17px] sm:text-[20px] lg:text-[20px] font-medium text-[#414141] w-full lg:w-[67%]">
                &quot;{t(homeContent, "teamQuote", "We've spent years on both sides — running retail stores and building software. We know what breaks and we know how to fix it.")}&quot;
              </p>
              <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-black leading-[18px] pt-[10px] sm:pt-[12px]">
                {t(homeContent, "teamQuoteAttribution", "— Founding Team")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
