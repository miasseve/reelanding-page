"use client";

import { useSanityContent, t } from "../SanityProvider";
import ButtonLink from "../ButtonLink";

const RetailerCTA = () => {
  const { homeContent } = useSanityContent();

  return (
    <section id="problem" className="py-[80px] sm:py-[120px] md:py-[160px] px-[16px] sm:px-[24px] text-center flex items-center justify-center">
      <div className="max-w-[896px] mx-auto">
        <h2 className="text-[26px] sm:text-[30px] md:text-[35px] leading-[1.18] text-[#252525] font-bold">
          {t(homeContent, "retailerHeading", "Most Retailers Lose Time And Money To Manual Work — They Just Don't Know How Much.")}
        </h2>

        <div className="pt-[18px] pb-[34px]">
          <p className="text-[18px] text-[#434343] leading-[25px]">
            {t(homeContent, "retailerBody", "Every hour spent on repetitive tasks is an hour not spent selling and growing.\nMost of this can be automated.")}
          </p>
        </div>

        <ButtonLink href="contact">
          <button className="gradient-btn py-[12px] px-[35px] rounded-[35px] text-white leading-[18px] font-medium cursor-pointer">
            {t(homeContent, "retailerCta", "Get a free audit →")}
          </button>
        </ButtonLink>
      </div>
    </section>
  );
};

export default RetailerCTA;
