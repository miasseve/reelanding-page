"use client";

import ButtonLink from "../ButtonLink";

export default function WebCTA() {
  return (
    <section className="py-[40px] sm:py-[56px] px-[16px] sm:px-[24px] md:px-[40px] lg:px-[64px]">
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-white px-[24px] sm:px-[48px] py-[48px] sm:py-[64px] text-center rounded-[20px] shadow-[0px_0px_5px_rgba(0,0,0,0.1)]">
          <h2 className="text-[26px] sm:text-[32px] lg:text-[40px] font-normal text-black leading-[1.1] sm:leading-[1.15] lg:leading-[42px] max-w-[720px] mx-auto">
            Skip the developer brief. Get online in 3 days.
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#434343] mt-[16px] max-w-[560px] mx-auto">
            Talk to us about your store. We&apos;ll set up your webstore and your next
            batch of products — free — so you can see it running in your own brand.
          </p>
          <div className="flex flex-wrap justify-center gap-[12px] sm:gap-[16px] mt-[32px]">
            <ButtonLink href="contact">
              <button className="gradient-btn py-[14px] sm:py-[12px] px-[28px] sm:px-[35px] rounded-[35px] text-white leading-[18px] font-medium cursor-pointer text-[14px] sm:text-[16px]">
                Launch your webstore in 3 days
              </button>
            </ButtonLink>
            <ButtonLink href="/pricing">
              <button className="bg-[#E6E6E6] py-[14px] sm:py-[12px] px-[28px] sm:px-[35px] rounded-[35px] text-[#414141] leading-[18px] font-medium cursor-pointer text-[14px] sm:text-[16px]">
                See pricing
              </button>
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
