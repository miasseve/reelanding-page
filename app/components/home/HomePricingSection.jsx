"use client";

import { useSanityContent, t } from "../SanityProvider";

const PINK = "#FF2E7E";
const PINK_SOFT = "#fce7ed";
const DEFAULT_CTA_URL = "https://re-e.dk/try/subscription-plan";

const ENGINE_PLANS = [
  {
    title: "Pay as you go",
    description: "No monthly commitment. For low or seasonal volume.",
    price: "10",
    priceSuffix: "DKK / item",
    features: [
      "AI listing generation",
      "Print-ready barcode labels",
      "Publish to one channel",
    ],
    ctaLabel: "Choose pay as you go",
    ctaStyle: "outline",
    popular: false,
  },
  {
    title: "Basic",
    description:
      "Up to 300 items per month. The sweet spot for growing stores.",
    price: "390",
    priceSuffix: "DKK / month",
    features: [
      "Everything in Pay as you go",
      "Publish across all connected channels",
      "Consignor management and split payments",
      "Up to 2 users",
    ],
    ctaLabel: "Get Basic",
    ctaStyle: "filled",
    popular: true,
    popularLabel: "MOST POPULAR",
  },
  {
    title: "Pro",
    description:
      "Up to 1,000 items per month. For established multi-channel stores.",
    price: "1,990",
    priceSuffix: "DKK / month",
    features: [
      "Everything in Basic",
      "Connect via API to your own systems",
      "Priority support",
      "Up to 5 users",
    ],
    ctaLabel: "Get Pro",
    ctaStyle: "outline",
    popular: false,
  },
];

const WEBSHOP_PLANS = [
  {
    title: "Basic",
    description:
      "Branded storefront, built and launched by our team in 3 days.",
    price: "4,800",
    priceSuffix: "DKK one-time",
    priceRate: "4%",
    priceNote: "per transaction",
    ctaLabel: "Claim your webshop",
    ctaStyle: "filled",
    boxedPrice: true,
  },
  {
    title: "Pro",
    description:
      "Full-featured storefront with advanced integrations and support.",
    price: "35,000",
    priceSuffix: "DKK one-time",
    priceRate: "2%",
    priceNote: "per transaction",
    ctaLabel: "Claim your webshop",
    ctaStyle: "outline",
    boxedPrice: true,
  },
];

const Check = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={PINK}
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 mt-[3px]"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PlanCard = ({ plan, ctaUrl }) => {
  const isFilled = plan.ctaStyle === "filled";
  return (
    <div
      className={`relative bg-white rounded-[18px] p-7 sm:p-8 flex flex-col text-left transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(255,46,126,0.22)] ${
        plan.popular
          ? "border-2 shadow-[0_10px_30px_rgba(255,46,126,0.18)]"
          : "border border-[#e5e7eb] shadow-[0_4px_18px_rgba(0,0,0,0.04)]"
      }`}
      style={plan.popular ? { borderColor: PINK } : undefined}
    >
      {plan.popular && (
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[11px] font-bold tracking-[0.14em] px-3 py-[5px] rounded-full whitespace-nowrap"
          style={{ backgroundColor: PINK }}
        >
          {plan.popularLabel || "MOST POPULAR"}
        </span>
      )}

      <h3
        className="text-[28px] sm:text-[32px] font-bold"
        style={
          plan.boxedPrice
            ? {
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontWeight: 700,
                color: PINK,
              }
            : { color: "#1a1a1a" }
        }
      >
        {plan.title}
      </h3>
      <p className="text-[16px] sm:text-[17px] text-[#6b7280] mt-3 leading-[1.55] min-h-[52px]">
        {plan.description}
      </p>

      {plan.boxedPrice ? (
        <div
          className="mt-6 rounded-[14px] px-5 py-6 text-center"
          style={{ backgroundColor: PINK_SOFT }}
        >
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-[36px] sm:text-[42px] font-bold leading-none text-[#1a1a1a]">
              {plan.price}
            </span>
            <span
              className="text-[15px] sm:text-[16px] font-semibold"
              style={{ color: PINK }}
            >
              {plan.priceSuffix}
            </span>
          </div>
          {plan.priceNote && (
            <p className="text-[15px] sm:text-[16px] text-[#374151] mt-3">
              +{" "}
              <span className="font-bold" style={{ color: PINK }}>
                {plan.priceRate || "2%"}
              </span>{" "}
              {plan.priceNote}
            </p>
          )}
        </div>
      ) : (
        <div className="mt-6">
          <div className="flex items-baseline gap-2">
            <span className="text-[44px] sm:text-[52px] font-bold leading-none text-[#1a1a1a]">
              {plan.price}
            </span>
            <span className="text-[15px] sm:text-[16px] font-semibold text-[#6b7280]">
              {plan.priceSuffix}
            </span>
          </div>
          {plan.priceNote && (
            <p className="text-[13px] sm:text-[14px] text-[#6b7280] mt-2">
              {plan.priceNote}
            </p>
          )}
        </div>
      )}

      {plan.features?.length > 0 && (
        <ul className="mt-7 space-y-[14px] flex-1">
          {plan.features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#374151] leading-[1.45]"
            >
              <Check />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
      {!plan.features?.length && <div className="flex-1" />}

      <a
        href={ctaUrl || DEFAULT_CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 w-full block text-center py-[14px] rounded-full text-[15px] sm:text-[16px] font-semibold transition-transform duration-200 hover:scale-[1.02] ${
          isFilled ? "text-white" : "border-[1.5px] bg-white"
        }`}
        style={
          isFilled
            ? { backgroundColor: PINK }
            : { borderColor: "#d1d5db", color: "#1a1a1a" }
        }
      >
        {plan.ctaLabel}
      </a>
    </div>
  );
};

const HomePricingSection = () => {
  const { pricingContent } = useSanityContent();

  const engineEyebrow = t(pricingContent, "engineEyebrow", "REE");
  const engineHeadingLead = t(
    pricingContent,
    "engineHeadingLead",
    "Resale Ecommerce"
  );
  const engineHeadingAccent = t(
    pricingContent,
    "engineHeadingAccent",
    "Engine."
  );
  const engineSubheading = t(
    pricingContent,
    "engineSubheading",
    "Simple pricing that grows with your store. Free for your first 25 items no card required."
  );

  const addonEyebrow = t(pricingContent, "addonEyebrow", "ADD-ON");
  const addonHeadingLead = t(
    pricingContent,
    "addonHeadingLead",
    "Add your own"
  );
  const addonHeadingAccent = t(
    pricingContent,
    "addonHeadingAccent",
    "webshop."
  );
  const addonSubheading = t(
    pricingContent,
    "addonSubheading",
    "Branded and launched by our team, synced so every item lists automatically. One-time setup, no monthly fee."
  );

  const ctaUrl = t(pricingContent, "ctaUrl", DEFAULT_CTA_URL);

  return (
    <section
      id="pricing"
      className="relative scroll-mt-[80px] overflow-hidden"
      style={{
        backgroundImage: "url('/Icons/view_of_sky.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* White wash so the photo only barely shows through */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: "rgba(255, 248, 246, 0.94)" }}
      />

      <div className="relative z-10">
        {/* Engine pricing */}
        <div className="px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[100px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-[40px] sm:mb-[56px]">
              <p
                className="text-[12px] sm:text-[13px] tracking-[0.22em] font-bold uppercase"
                style={{ color: PINK }}
              >
                {engineEyebrow}
              </p>
              <h2
                className="text-[34px] sm:text-[44px] md:text-[54px] leading-[1.1] text-[#1a1a1a] mt-3"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
              >
                {engineHeadingLead}{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: PINK,
                  }}
                >
                  {engineHeadingAccent}
                </span>
              </h2>
              <p className="text-[#6b7280] text-[15px] sm:text-[17px] mt-4 max-w-[600px] mx-auto leading-[1.55]">
                {engineSubheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {ENGINE_PLANS.map((plan) => (
                <PlanCard key={plan.title} plan={plan} ctaUrl={ctaUrl} />
              ))}
            </div>
          </div>
        </div>

        {/* Webshop add-on */}
        <div className="px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[100px]">
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-[40px] sm:mb-[56px]">
              <p
                className="text-[12px] sm:text-[13px] tracking-[0.22em] font-bold uppercase"
                style={{ color: PINK }}
              >
                {addonEyebrow}
              </p>
              <h2
                className="text-[32px] sm:text-[44px] md:text-[56px] leading-[1.1] text-[#1a1a1a] mt-3"
                style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
              >
                {addonHeadingLead}{" "}
                <span
                  className="italic"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: PINK,
                  }}
                >
                  {addonHeadingAccent}
                </span>
              </h2>
              <p className="text-[#4b5563] text-[15px] sm:text-[17px] mt-4 max-w-[680px] mx-auto leading-[1.55]">
                {addonSubheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {WEBSHOP_PLANS.map((plan) => (
                <PlanCard key={plan.title} plan={plan} ctaUrl={ctaUrl} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePricingSection;
