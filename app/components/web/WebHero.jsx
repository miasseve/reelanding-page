"use client";

import ButtonLink from "../ButtonLink";

export default function WebHero() {
  return (
    <section className="bg-[#f0ebe3] py-[56px] flex flex-col justify-center">
      <div className="w-full max-w-[900px] mx-auto px-[clamp(20px,5vw,48px)] py-[clamp(48px,8vw,96px)] text-center">
        {/* Eyebrow */}
        <div className="mb-[clamp(14px,2.5vw,22px)]">
          <span className="inline-flex items-center gap-[8px] text-[clamp(11px,1.4vw,13px)] font-medium tracking-[0.18em] uppercase text-[#252525]">
            <span className="inline-block w-7 h-px bg-[#252525]" />
            2hand2go Web
            <span className="inline-block w-7 h-px bg-[#252525]" />
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-black text-[32px] sm:text-[clamp(36px,4.5vw,54px)] leading-[1.08] tracking-[-0.01em] text-[#252525] mx-auto mb-[clamp(18px,3vw,28px)] max-w-[820px]">
          Launch your webstore in 3 days.
        </h1>

        {/* Sub-copy */}
        <p className="text-[clamp(16px,1.25vw,16px)] leading-[1.7] text-[#434343] max-w-[660px] mx-auto mb-[clamp(28px,4.5vw,44px)] font-normal">
          Ready-to-launch webstore built for secondhand businesses. Fast deployment,
          white-label, and no need to brief a developer.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-[clamp(10px,2vw,16px)]">
          <ButtonLink href="contact">
            <button className="gradient-btn py-[12px] px-[35px] rounded-[35px] text-white leading-[18px] font-medium cursor-pointer">
              Launch your webstore in 3 days
            </button>
          </ButtonLink>
          <ButtonLink href="https://re-e.dk/">
            <button className="border-[1.5px] border-purple-600 bg-white py-[12px] px-[35px] rounded-[35px] text-purple-600 leading-[18px] font-medium cursor-pointer">
              See 2hand2go List
            </button>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
