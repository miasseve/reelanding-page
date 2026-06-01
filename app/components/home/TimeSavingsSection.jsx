"use client";

import { useSanityContent, t } from "../SanityProvider";
import ButtonLink from "../ButtonLink";

const PINK = "#FF2E7E";

const ArrowRightIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="13 6 19 12 13 18" />
  </svg>
);

const CalendarPlusIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="8" y1="3" x2="8" y2="7" />
    <line x1="16" y1="3" x2="16" y2="7" />
    <line x1="12" y1="13" x2="12" y2="18" />
    <line x1="9.5" y1="15.5" x2="14.5" y2="15.5" />
  </svg>
);

const PROOF_CARDS = [
  { value: "1m", labelKey: "timeTaskPhoto", labelDefault: "PHOTO" },
  { value: "3m", labelKey: "timeTaskDetails", labelDefault: "DETAILS" },
  { value: "2m", labelKey: "timeTaskPricing", labelDefault: "PRICING" },
  { value: "2m", labelKey: "timeTaskLabels", labelDefault: "LABELS" },
  { value: "4m", labelKey: "timeTaskWebshop", labelDefault: "WEBSHOP" },
  { value: "3m", labelKey: "timeTaskChecks", labelDefault: "CHECKS" },
  { value: "5m", labelKey: "timeTaskPosting", labelDefault: "POSTING" },
];

const ProofCard = ({ value, label, highlight = false, className = "" }) => (
  <div
    className={`rounded-[12px] p-[18px] sm:p-[22px] flex flex-col justify-between min-h-[110px] sm:min-h-[120px] ${
      highlight
        ? "text-white shadow-[0_12px_28px_rgba(255,46,126,0.35)]"
        : "bg-[#171717] border border-white/10 text-white"
    } ${className}`}
    style={highlight ? { backgroundColor: PINK } : undefined}
  >
    <div className="text-[20px] sm:text-[20px] font-bold leading-none">
      {value}
    </div>
    <div
      className={`text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase mt-[14px] ${
        highlight ? "text-white/95" : "text-white/65"
      }`}
    >
      {label}
    </div>
  </div>
);

const TimeSavingsSection = () => {
  const { homeContent } = useSanityContent();

  return (
    <section className="bg-[#0d0810] py-[clamp(56px,8vw,96px)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,80px)] items-center">
        <div>
          <h2
            className="text-white text-[clamp(34px,5vw,58px)] leading-[1.05] mb-[clamp(18px,2.5vw,28px)]"
            style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
          >
            {t(homeContent, "timeHeadingLine1", "Twenty minutes by hand.")}
            <br />
            <span
              style={{
                fontFamily: "var(--font-instrument-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                color: PINK,
              }}
            >
              {t(homeContent, "timeHeadingAccent", "One minute")}
            </span>{" "}
            {t(homeContent, "timeHeadingTrail", "with 2hand2go.")}
          </h2>

          <p
            className="text-white/65 text-[clamp(15px,1.3vw,18px)] leading-[1.6] max-w-[520px] mb-[clamp(28px,4vw,44px)]"
            style={{ fontFamily: "var(--font-bricolage)", fontWeight: 400 }}
          >
            {t(
              homeContent,
              "timeBody",
              "Listing a single unique item the manual way means seven separate jobs. With 2hand2go, you do the first one. The rest runs automatically."
            )}
          </p>

          <div className="flex flex-wrap gap-x-[clamp(40px,5vw,72px)] gap-y-[24px]">
            <div>
              <div className="text-white text-[clamp(32px,4vw,46px)] font-bold leading-none">
                {t(homeContent, "timeStat1Value", "95%")}
              </div>
              <div className="text-white/55 text-[13px] sm:text-[14px] mt-[10px]">
                {t(homeContent, "timeStat1Label", "Less time per listing")}
              </div>
            </div>
            <div>
              <div className="text-white text-[clamp(32px,4vw,46px)] font-bold leading-none">
                {t(homeContent, "timeStat2Value", "20×")}
              </div>
              <div className="text-white/55 text-[13px] sm:text-[14px] mt-[10px]">
                {t(
                  homeContent,
                  "timeStat2Label",
                  "More items live, same hours"
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-[12px] sm:gap-[16px]">
            {PROOF_CARDS.map((c) => (
              <ProofCard
                key={c.labelKey}
                value={c.value}
                label={t(homeContent, c.labelKey, c.labelDefault)}
              />
            ))}
            <ProofCard
              value={t(homeContent, "timeTotalValue", "20m")}
              label={t(homeContent, "timeTotalLabel", "PER ITEM")}
              highlight
              className="col-span-2 lg:col-span-3"
            />
          </div>

          <div className="flex flex-wrap gap-[14px] mt-[clamp(20px,3vw,28px)]">
            <ButtonLink href="https://re-e.dk/try/add-product">
              <button
                className="inline-flex items-center gap-[10px] py-[14px] pl-[24px] pr-[22px] rounded-[12px] text-white text-[15px] leading-[18px] font-semibold cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:brightness-110 transition"
                style={{ backgroundColor: "#FF2E7E" }}
              >
                <span>{t(homeContent, "heroCtaPrimary", "Try it free")}</span>
                <ArrowRightIcon size={18} />
              </button>
            </ButtonLink>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-contact"))
              }
              className="inline-flex items-center gap-[10px] py-[14px] pl-[20px] pr-[24px] rounded-[12px] text-white text-[15px] leading-[18px] font-semibold cursor-pointer shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:brightness-110 transition"
              style={{ backgroundColor: "#f70000" }}
            >
              <CalendarPlusIcon size={18} />
              <span>Book Mia</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimeSavingsSection;
