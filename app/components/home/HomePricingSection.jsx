"use client";

import { useState } from "react";
import { useSanityContent, t } from "../SanityProvider";

const PINK = "#FF2E7E";
const DEFAULT_CTA_URL = "https://re-e.dk/try/subscription-plan";

const DEFAULT_WEB_BRANDED = {
  eyebrow: "WEBSTORE",
  title: "Your branded online store",
  sub: "5 users · 300 products/month",
  standardTag: "STANDARD",
  standardSub: "Pay monthly, low upfront",
  standardPrice: "4,800",
  standardSuffix: "DKK / month",
  standardNote: "+ 4% per transaction",
  customTag: "CUSTOM BUILD",
  customSub: "Pay once, zero fees forever",
  customPrice: "35,000",
  customSuffix: "DKK / once",
  customNote: "Zero transaction fees",
  features: [
    "Basic webstore with your logo",
    "Runs automatically with 2hand2list",
    "No developers needed — ready in 3 days",
  ],
};

const DEFAULT_CONNECT_PLANS = [
  {
    tag: "BASIC",
    sub: "2 users · 300 products / month",
    price: "3,200",
    suffix: "DKK",
    note: "per month",
    features: ["Core listing workflow", "Auto-sync with your webstore"],
  },
  {
    tag: "PRO",
    sub: "5 users · 1,000 products / month",
    price: "6,000",
    suffix: "DKK",
    note: "one-time",
    features: [
      "Everything in Basic",
      "Scale to 1,000 products/month",
      "Priority support",
    ],
  },
];

const LIST_PLANS = [
  {
    eyebrow: "PER PRODUCT",
    title: "Pay as you go",
    description: "No monthly commitment. Perfect for trying the platform.",
    price: "10",
    priceSuffix: "DKK",
    priceNote: "per product · no monthly fees",
    ctaLabel: "Start",
    ctaStyle: "outline",
    features: ["AI listing generation", "Barcode label", "One channel publish"],
    popular: false,
  },
  {
    eyebrow: "UP TO 2 USERS",
    title: "Basic",
    description:
      "Up to 300 products per month. The sweet spot for growing stores.",
    price: "390",
    priceSuffix: "DKK",
    priceNote: "per month",
    ctaLabel: "Get Basic",
    ctaStyle: "filled",
    features: [
      "Entire product catalogue",
      "Barcodes with one swipe",
      "Designed staff workflow",
      "Safe payment processing",
    ],
    popular: true,
  },
  {
    eyebrow: "UP TO 5 USERS",
    title: "Pro",
    description:
      "Up to 1,000 products per month. For established multi-channel operations.",
    price: "1,990",
    priceSuffix: "DKK",
    priceNote: "per month",
    ctaLabel: "Get Pro",
    ctaStyle: "filled",
    features: [
      "Ready listing across channels",
      "Automatic stock sync",
      "Connect via API to your systems",
      "Priority support",
    ],
    popular: false,
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
    className="shrink-0"
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
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-[11px] font-bold tracking-[0.12em] px-3 py-[5px] rounded-full"
          style={{ backgroundColor: PINK }}
        >
          Popular
        </span>
      )}

      <span className="text-[13px] sm:text-[14px] tracking-[0.18em] font-semibold text-[#6b7280]">
        {plan.eyebrow}
      </span>
      <h3 className="text-[28px] sm:text-[32px] font-bold text-[#1a1a1a] mt-2">
        {plan.title}
      </h3>
      <p className="text-[16px] sm:text-[17px] text-[#6b7280] mt-3 leading-[1.55] min-h-[60px]">
        {plan.description}
      </p>

      <div className="mt-6">
        <div className="flex items-baseline gap-2">
          <span
            className="text-[48px] sm:text-[54px] font-bold leading-none"
            style={{ color: PINK }}
          >
            {plan.price}
          </span>
          <span className="text-[16px] sm:text-[17px] font-semibold text-[#374151]">
            {plan.priceSuffix}
          </span>
        </div>
        <p className="text-[14px] sm:text-[15px] text-[#6b7280] mt-2">
          {plan.priceNote}
        </p>
      </div>

      <a
        href={ctaUrl || DEFAULT_CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 w-full block text-center py-[14px] rounded-full text-[16px] sm:text-[17px] font-semibold transition-transform duration-200 hover:scale-[1.02] ${
          isFilled
            ? "text-white"
            : "border-[1.5px] bg-white"
        }`}
        style={
          isFilled
            ? { backgroundColor: PINK }
            : { borderColor: PINK, color: PINK }
        }
      >
        {plan.ctaLabel}
      </a>

      <ul className="mt-7 space-y-[14px]">
        {plan.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-3 text-[15px] sm:text-[16px] text-[#1a1a1a] leading-[1.45]"
          >
            <span className="mt-[4px]">
              <Check />
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ListPanel = ({ plans, ctaUrl }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
    {plans.map((p) => (
      <PlanCard key={p.title} plan={p} ctaUrl={ctaUrl} />
    ))}
  </div>
);

const DarkCheck = () => (
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

const PriceBlock = ({ tag, sub, price, suffix, note }) => (
  <div>
    <div className="flex items-center gap-3 flex-wrap">
      <span
        className="text-[11px] tracking-[0.18em] font-bold uppercase px-3 py-[5px] rounded-full"
        style={{ backgroundColor: "rgba(255,46,126,0.18)", color: PINK }}
      >
        {tag}
      </span>
      <span className="text-white/80 text-[14px]">{sub}</span>
    </div>
    <div className="flex items-baseline gap-2 mt-3">
      <span
        className="text-[40px] sm:text-[44px] font-bold leading-none"
        style={{ color: PINK }}
      >
        {price}
      </span>
      <span className="text-[15px] text-white/85 font-semibold">{suffix}</span>
    </div>
    {note && <p className="text-[13px] text-white/65 mt-2">{note}</p>}
  </div>
);

const ConnectPlanCard = ({ plan }) => (
  <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,46,126,0.18)] hover:border-white/20">
    <span
      className="text-[11px] tracking-[0.2em] font-bold uppercase px-3 py-[5px] rounded-full"
      style={{ backgroundColor: "rgba(255,46,126,0.18)", color: PINK }}
    >
      {plan.tag}
    </span>
    <p className="text-white/75 text-[14px] mt-3">{plan.sub}</p>
    <div className="flex items-baseline gap-2 mt-2">
      <span
        className="text-[40px] sm:text-[44px] font-bold leading-none"
        style={{ color: PINK }}
      >
        {plan.price}
      </span>
      <span className="text-[15px] text-white/85 font-semibold">
        {plan.suffix}
      </span>
    </div>
    <p className="text-[13px] text-white/70 mt-1">{plan.note}</p>

    <ul className="mt-5 space-y-[10px]">
      {plan.features?.map((f) => (
        <li
          key={f}
          className="flex items-start gap-3 text-[14px] text-white/90"
        >
          <DarkCheck />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

const WebPanel = ({
  headingLead,
  headingAccent,
  description,
  branded,
  connectPlans,
}) => (
  <div className="bg-[#0c0c0c] rounded-[20px] p-7 sm:p-10 text-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
    <h3 className="text-[28px] sm:text-[32px] font-bold leading-[1.2]">
      {headingLead}{" "}
      <span
        className="italic underline decoration-[3px] underline-offset-[6px]"
        style={{ color: PINK, fontFamily: "var(--font-playfair)" }}
      >
        {headingAccent}
      </span>
    </h3>
    <p className="text-white/85 text-[15px] sm:text-[16px] mt-4 max-w-[680px] leading-[1.6]">
      {description}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-8">
      {/* LEFT — Your branded online store */}
      <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(255,46,126,0.18)] hover:border-white/20">
        <span
          className="text-[12px] tracking-[0.2em] font-bold uppercase"
          style={{ color: PINK }}
        >
          {branded.eyebrow}
        </span>
        <h4 className="text-[22px] sm:text-[24px] font-bold text-white mt-1">
          {branded.title}
        </h4>
        <p className="text-white/75 text-[14px] mt-1">{branded.sub}</p>

        <div className="h-px bg-white/10 my-6" />

        <PriceBlock
          tag={branded.standardTag}
          sub={branded.standardSub}
          price={branded.standardPrice}
          suffix={branded.standardSuffix}
          note={branded.standardNote}
        />

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-[11px] tracking-[0.22em] font-bold text-white/55">
            OR
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <PriceBlock
          tag={branded.customTag}
          sub={branded.customSub}
          price={branded.customPrice}
          suffix={branded.customSuffix}
          note={branded.customNote}
        />

        <div className="h-px bg-white/10 my-6" />

        <ul className="space-y-[12px]">
          {branded.features?.map((f) => (
            <li
              key={f}
              className="flex items-start gap-3 text-[15px] text-white/90"
            >
              <DarkCheck />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT — Plans column */}
      <div className="flex flex-col gap-5 sm:gap-6">
        {connectPlans.map((plan) => (
          <ConnectPlanCard key={plan.tag} plan={plan} />
        ))}
      </div>
    </div>
  </div>
);

const HomePricingSection = () => {
  const [tab, setTab] = useState("list");
  const { pricingContent } = useSanityContent();

  const heading = t(pricingContent, "pricingHeading", "Choose The Plan That Fits");
  const subheading = t(
    pricingContent,
    "pricingSubheading",
    "Simple pricing. Cancel anytime. No hidden fees."
  );
  const listLabel = t(pricingContent, "listTabLabel", "2hand2list");
  const webLabel = t(pricingContent, "webTabLabel", "2hand2web");
  const ctaUrl = t(pricingContent, "ctaUrl", DEFAULT_CTA_URL);

  const listPlans =
    pricingContent?.listPlans?.length > 0 ? pricingContent.listPlans : LIST_PLANS;

  const branded = {
    eyebrow: t(pricingContent, "webBrandedEyebrow", DEFAULT_WEB_BRANDED.eyebrow),
    title: t(pricingContent, "webBrandedTitle", DEFAULT_WEB_BRANDED.title),
    sub: t(pricingContent, "webBrandedSub", DEFAULT_WEB_BRANDED.sub),
    standardTag: t(pricingContent, "webBrandedStandardTag", DEFAULT_WEB_BRANDED.standardTag),
    standardSub: t(pricingContent, "webBrandedStandardSub", DEFAULT_WEB_BRANDED.standardSub),
    standardPrice: t(pricingContent, "webBrandedStandardPrice", DEFAULT_WEB_BRANDED.standardPrice),
    standardSuffix: t(pricingContent, "webBrandedStandardSuffix", DEFAULT_WEB_BRANDED.standardSuffix),
    standardNote: t(pricingContent, "webBrandedStandardNote", DEFAULT_WEB_BRANDED.standardNote),
    customTag: t(pricingContent, "webBrandedCustomTag", DEFAULT_WEB_BRANDED.customTag),
    customSub: t(pricingContent, "webBrandedCustomSub", DEFAULT_WEB_BRANDED.customSub),
    customPrice: t(pricingContent, "webBrandedCustomPrice", DEFAULT_WEB_BRANDED.customPrice),
    customSuffix: t(pricingContent, "webBrandedCustomSuffix", DEFAULT_WEB_BRANDED.customSuffix),
    customNote: t(pricingContent, "webBrandedCustomNote", DEFAULT_WEB_BRANDED.customNote),
    features:
      pricingContent?.webBrandedFeatures?.length > 0
        ? pricingContent.webBrandedFeatures
        : DEFAULT_WEB_BRANDED.features,
  };

  const connectPlans =
    pricingContent?.webConnectPlans?.length > 0
      ? pricingContent.webConnectPlans
      : DEFAULT_CONNECT_PLANS;

  return (
    <section
      id="pricing"
      className="relative px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[100px] scroll-mt-[80px] overflow-hidden"
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
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <h2 className="text-center font-bold text-[30px] sm:text-[40px] md:text-[48px] leading-[1.12] text-[#1a1a1a]">
          {heading}
        </h2>
        <p className="text-center text-[#6b7280] mt-3 text-[14px] sm:text-[16px]">
          {subheading}
        </p>

        {/* Tabs */}
        <div className="flex justify-center mt-7 sm:mt-9">
          <div className="inline-flex bg-[#f3f4f6] rounded-full p-[4px]">
            <button
              type="button"
              onClick={() => setTab("list")}
              className={`px-5 py-[10px] rounded-full text-[13px] sm:text-[14px] font-semibold transition-colors ${
                tab === "list" ? "text-white" : "text-[#374151]"
              }`}
              style={tab === "list" ? { backgroundColor: PINK } : undefined}
            >
              {listLabel}
            </button>
            <button
              type="button"
              onClick={() => setTab("web")}
              className={`px-5 py-[10px] rounded-full text-[13px] sm:text-[14px] font-semibold transition-colors ${
                tab === "web" ? "text-white" : "text-[#374151]"
              }`}
              style={tab === "web" ? { backgroundColor: PINK } : undefined}
            >
              {webLabel}
            </button>
          </div>
        </div>

        <div className="mt-9 sm:mt-12">
          {tab === "list" ? (
            <ListPanel plans={listPlans} ctaUrl={ctaUrl} />
          ) : (
            <WebPanel
              headingLead={t(
                pricingContent,
                "webHeadingLead",
                "Your webstore ready in"
              )}
              headingAccent={t(pricingContent, "webHeadingAccent", "3 days")}
              description={t(
                pricingContent,
                "webDescription",
                "Already have a webstore? Connect it to 2hand2list and it'll handle the workflow synchronisation automatically."
              )}
              branded={branded}
              connectPlans={connectPlans}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default HomePricingSection;
