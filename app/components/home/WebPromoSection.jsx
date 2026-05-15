"use client";

const PINK = "#FF2E7E";

const FEATURES = [
  {
    title: "Done-for-you setup",
    desc: "Your website is configured and launched by our team nothing for you to install.",
  },
  {
    title: "Synced with List 2GO",
    desc: "All your listings automatically appear on your website in real time.",
  },
];

const FeatureCard = ({ title, desc }) => (
  <div
    className="rounded-[14px] border border-white/10 px-5 sm:px-6 py-4 sm:py-5 bg-white/[0.03]"
  >
    <div className="flex items-start gap-3">
      <span
        className="mt-[8px] w-[8px] h-[8px] rounded-full shrink-0"
        style={{ backgroundColor: PINK }}
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-bold text-[16px] sm:text-[18px]">
          {title}
        </h3>
        <p className="text-white/60 text-[13px] sm:text-[14px] mt-1 leading-[1.5]">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

const WebPromoSection = () => (
  <section id="web" className="scroll-mt-[80px] bg-black px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[100px]">
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
      {/* Left column */}
      <div className="text-center md:text-left">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
          <span
            className="text-white text-[11px] font-bold tracking-[0.12em] px-3 py-[5px] rounded-full"
            style={{ backgroundColor: PINK }}
          >
            WEB 2GO
          </span>
          <span className="text-white/45 text-[11px] tracking-[0.18em] font-semibold">
            ALREADY CONNECTED
          </span>
        </div>

        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-[1.08]">
          <span className="text-white">Zero developer.</span>
          <br />
          <span
            style={{
              color: PINK,
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
            }}
          >
            Zero waiting.
          </span>
        </h2>

        <p className="text-white/70 text-[15px] sm:text-[16px] mt-5 max-w-[460px] mx-auto md:mx-0 leading-[1.55]">
          Get a fully built, ready-to-launch website included. No freelancers,
          no delays, no hidden fees.
        </p>

        <div className="mt-7 flex items-baseline justify-center md:justify-start gap-2">
          <span
            className="text-[44px] sm:text-[52px] font-bold leading-none"
            style={{ color: PINK }}
          >
            4800
          </span>
          <span className="text-white/70 text-[15px] sm:text-[16px]">
            DKK one-time
          </span>
        </div>

        <a
          href="https://re-e.dk/try/subscription-plan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-7 px-6 py-[12px] rounded-full text-white font-semibold text-[14px] transition-transform duration-200 hover:scale-[1.03]"
          style={{ backgroundColor: PINK }}
        >
          Claim your website
        </a>
      </div>

      {/* Right column */}
      <div className="space-y-3 sm:space-y-4">
        {FEATURES.map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </div>
  </section>
);

export default WebPromoSection;
