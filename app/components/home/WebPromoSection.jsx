"use client";

const PINK = "#FF2E7E";

const PROOF_STATS = [
  {
    value: "95%",
    label: "Less time per item, from 20 minutes to under 1",
    highlight: true,
  },
  {
    value: "+30%",
    label: "Revenue growth over the period",
    highlight: true,
  },
  {
    value: "1,200+",
    label: "Unique items listed and synced online",
  },
  {
    value: "3 days",
    label: "From sign-up to a live branded webshop",
  },
];

const WebPromoSection = () => (
  <section
    id="web"
    className="scroll-mt-[80px] bg-black px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[100px]"
  >
    <div className="max-w-[1100px] mx-auto">
      {/* Centered PROOF pill */}
      <div className="flex justify-center mb-[40px] sm:mb-[56px]">
        <span
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-[5px] rounded-full"
          style={{
            backgroundColor: "rgba(255,46,126,0.12)",
            color: PINK,
          }}
        >
          <span
            className="w-[6px] h-[6px] rounded-full"
            style={{ backgroundColor: PINK }}
          />
          PROOF
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left column — story */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-[36px] sm:text-[44px] md:text-[52px] font-bold leading-[1.08]">
            Built inside a real secondhand store.
          </h2>

          <p className="text-white/70 text-[15px] sm:text-[16px] mt-5 max-w-[520px] mx-auto md:mx-0 leading-[1.6]">
            2hand2go started in Le Stores, an independent pre-loved shop in
            Copenhagen. The tools were built to solve the founder&apos;s own
            problem: too much good stock, never enough hours to get it listed
            and online.
          </p>

          <blockquote
            className="border-l-[3px] pl-5 mt-7 max-w-[520px] mx-auto md:mx-0 text-left"
            style={{ borderColor: PINK }}
          >
            <p
              className="text-white/85 text-[16px] sm:text-[18px] italic leading-[1.55]"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
            >
              We built these tools because we needed them ourselves. Now we
              share them with secondhand stores that want to grow without
              burning out.
            </p>
          </blockquote>

          <p className="text-white text-[14px] sm:text-[15px] mt-4 text-left md:text-left max-w-[520px] mx-auto md:mx-0">
            <span className="font-bold">Mia</span>
            <span className="text-white/55"> · Founder, 2hand2go</span>
          </p>
        </div>

        {/* Right column — stats card */}
        <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="text-white/55 text-[11px] tracking-[0.18em] font-semibold uppercase mb-6">
            FIRST 6 MONTHS ON 2HAND2GO
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            {PROOF_STATS.map((s) => (
              <div key={s.value}>
                <div
                  className="text-[36px] sm:text-[42px] font-bold leading-none"
                  style={{ color: s.highlight ? PINK : "#ffffff" }}
                >
                  {s.value}
                </div>
                <div className="text-white/60 text-[13px] sm:text-[14px] mt-2 leading-[1.45]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default WebPromoSection;
