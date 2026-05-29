"use client";

import { useSanityContent, t } from "../SanityProvider";

const SECTION_BG =
  "radial-gradient(ellipse 65% 45% at 50% 10%, #ffc4d8 0%, #fdd8dc 28%, #fce4e2 55%, #fdedea 80%, #fef6f3 100%)";

const CARD_GRADIENT =
  "linear-gradient(140deg, #3a0820 0%, #6a1244 50%, #c9215e 100%)";

const BORDER_GRADIENT =
  "linear-gradient(135deg, #FF2E7E 0%, #f87ac9 50%, #f40e0e 100%)";

const RetailerCTA = () => {
  const { homeContent } = useSanityContent();

  const scrollToDemo = () => {
    document
      .getElementById("demo-video")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section
      id="problem"
      className="relative py-[80px] sm:py-[120px] md:py-[160px] px-[16px] sm:px-[24px] flex items-center justify-center overflow-hidden"
      style={{ background: SECTION_BG }}
    >
      <div className="max-w-[1100px] mx-auto w-full">
        <div className="max-w-[820px] mx-auto text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-[28px] sm:text-[38px] md:text-[48px] leading-[1.2] text-[#1a1a1a] font-bold">
            {t(
              homeContent,
              "retailerHeadingLead",
              "Mainstream retail went omnichannel a decade ago."
            )}
            <br />
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 700,
                backgroundImage: "linear-gradient(90deg, #f87ac9, #f40e0e)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {t(
                homeContent,
                "retailerHeadingAccent",
                "Secondhand got left behind."
              )}
            </span>
          </h2>

          <div className="pt-[16px]">
            <p className="text-[15px] sm:text-[17px] md:text-[18px] text-[#434343] leading-[1.65]">
              {t(
                homeContent,
                "retailerBody",
                "Not because secondhand stores did not want to sell online, but because every item is one of a kind, and listing unique stock across every channel by hand was too slow to be worth it. That bottleneck is finally gone. Two forces are now squeezing independent stores."
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] sm:gap-[24px] mt-[48px] sm:mt-[64px]">
          {[
            {
              titleKey: "retailerBox1Title",
              titleDefault: "The listing grind",
              bodyKey: "retailerBox1Body",
              bodyDefault:
                "Writing a title, a description and a price for every single item, by hand. It keeps most of your stock offline and caps how much your store can grow, no matter how good your sourcing is.",
            },
            {
              titleKey: "retailerBox2Title",
              titleDefault: "The marketplace apps",
              bodyKey: "retailerBox2Body",
              bodyDefault:
                "Vinted, Depop and the big platforms are capturing the online secondhand customer. Sell only through them and your store becomes a supplier for someone else's storefront — they keep the customer, the data and a cut of every sale.",
            },
          ].map((card) => (
            <div
              key={card.titleKey}
              className="group relative overflow-hidden rounded-[20px] px-[28px] py-[40px] sm:px-[36px] sm:py-[52px] transition-all duration-300 ease-out hover:-translate-y-[6px] shadow-[0_10px_30px_rgba(74,8,32,0.18)] hover:shadow-[0_20px_50px_rgba(201,33,94,0.35)]"
              style={{ background: CARD_GRADIENT }}
            >
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
                }}
              />
              <div className="relative flex flex-col items-center text-center">
                <h3 className="text-[20px] sm:text-[22px] font-bold text-white mb-[14px]">
                  {t(homeContent, card.titleKey, card.titleDefault)}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-white/85 leading-[1.65] max-w-[420px]">
                  {t(homeContent, card.bodyKey, card.bodyDefault)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-[28px] sm:mt-[32px] rounded-[20px] p-[2px] shadow-[0_10px_30px_rgba(244,14,14,0.18)]"
          style={{ background: BORDER_GRADIENT }}
        >
          <div className="rounded-[18px] bg-white px-[28px] sm:px-[40px] py-[24px] sm:py-[32px]">
            <div className="border-l-[3px] border-[#f40e0e] pl-[18px]">
              <p className="text-[14px] sm:text-[16px] text-[#1a1a1a] leading-[1.65]">
                <span className="font-bold">
                  {t(
                    homeContent,
                    "retailerQuoteLead",
                    "2hand2go answers both."
                  )}
                </span>{" "}
                <span className="text-[#434343]">
                  {t(
                    homeContent,
                    "retailerQuoteRest",
                    "It removes the listing work, and it gives you your own omnichannel presence, so you use the marketplaces as channels without depending on them."
                  )}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-[56px] sm:mt-[72px] flex justify-center">
          <button
            type="button"
            onClick={scrollToDemo}
            className="group inline-flex items-center gap-[10px] rounded-full px-[28px] py-[14px] text-[15px] sm:text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(244,14,14,0.25)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(244,14,14,0.4)]"
            style={{ backgroundColor: "#FF2E7E" }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            {t(homeContent, "retailerWatchDemo", "Watch 30 sec demo")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default RetailerCTA;
