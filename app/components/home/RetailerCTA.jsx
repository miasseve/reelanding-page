"use client";

import { useSanityContent, t } from "../SanityProvider";

const RetailerCTA = () => {
  const { homeContent } = useSanityContent();

  return (
    <section
      id="problem"
      className="py-[80px] sm:py-[120px] md:py-[160px] px-[16px] sm:px-[24px] text-center flex items-center justify-center"
    >
      <div className="max-w-[896px] mx-auto">
        <h2 className="text-[36px] sm:text-[52px] md:text-[64px] leading-[1.12] text-[#1a1a1a] font-bold">
          {t(homeContent, "retailerHeadingLead", "Fits into the way")}
          <br />
          {t(homeContent, "retailerHeadingMid", "your team")}{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(90deg, #f87ac9, #f40e0e)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            {t(homeContent, "retailerHeadingAccent", "already works.")}
          </span>
        </h2>

        <div className="pt-[18px]">
          <p className="text-[20px] sm:text-[24px] md:text-[28px] text-[#434343] leading-[1.5]">
            {t(
              homeContent,
              "retailerBody",
              "Turn a 20 minute task into a 1 minute step, without hours of training or change."
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default RetailerCTA;
