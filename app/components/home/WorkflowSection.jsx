"use client";

const ACCENT = "#e91e63";
const ACCENT_LIGHT = "#ff3d7f";
const HEADER_GRADIENT = `linear-gradient(135deg, ${ACCENT_LIGHT} 0%, ${ACCENT} 100%)`;
const CARD_SHADOW = "0 20px 50px -20px rgba(233, 30, 99, 0.25)";
const HEADER_SHADOW = "0 6px 18px -6px rgba(233, 30, 99, 0.35)";

const BACKEND_STEPS = [
  { title: "Recognises the brand, category and condition from the photo" },
  { title: "Writes the title, description and keywords" },
  { title: "Suggests a price from live market data" },
  { title: "Generates a SKU and a print-ready barcode label" },
  { title: "Publishes to every channel you have connected" },
  {
    title: "Consignor management",
    desc: "Commission, admin, link products to owner",
  },
  { title: "Full inventory visibility" },
  { title: "Notification for sold items" },
];

const FRONTEND_STEPS = [
  { title: "Your domain, your logo, your brand, fully your own" },
  { title: "Every item List creates appears here in real time" },
  { title: "Full inventory view: live, reserved and sold" },
  { title: "Built and launched by us, live in 3 days, no developer" },
  { title: "You keep the customer, the data and the margin" },
];

const StepRow = ({ index, step }) => (
  <li className="flex gap-[14px] items-start">
    <span
      className="flex-shrink-0 mt-[3px] w-[22px] h-[22px] rounded-full text-[12px] font-bold flex items-center justify-center border-[1.5px] bg-white"
      style={{ borderColor: ACCENT, color: ACCENT }}
    >
      {index + 1}
    </span>
    <div className="flex-1 min-w-0">
      <div className="text-[15px] sm:text-[16px] font-semibold text-[#1a1a1a] leading-[1.55]">
        {step.title}
      </div>
      {step.desc && (
        <div className="text-[13px] sm:text-[14px] text-[#6b7280] mt-[3px] font-normal leading-[1.55]">
          {step.desc}
        </div>
      )}
    </div>
  </li>
);

const FooterBadge = ({ children }) => (
  <div
    className="flex items-center gap-[10px] px-[14px] py-[12px] rounded-[10px]"
    style={{
      background:
        "linear-gradient(135deg, rgba(255, 61, 127, 0.08), rgba(233, 30, 99, 0.05))",
      border: "1px solid rgba(233, 30, 99, 0.14)",
    }}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ACCENT}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden
    >
      <polyline points="4 12 10 18 20 6" />
    </svg>
    <div className="text-[13px] sm:text-[14px] font-semibold text-[#1a1a1a] leading-[1.4]">
      {children}
    </div>
  </div>
);

const ToolCard = ({ tag, title, description, steps, footer }) => (
  <div
    className="bg-white rounded-[24px] overflow-hidden flex flex-col"
    style={{ boxShadow: CARD_SHADOW }}
  >
    <div
      className="px-6 sm:px-7 py-[14px] sm:py-[18px]"
      style={{
        background: HEADER_GRADIENT,
        boxShadow: HEADER_SHADOW,
      }}
    >
      <div className="text-white text-[11px] tracking-[0.22em] font-bold uppercase flex items-center gap-[8px]">
        <span
          className="w-[8px] h-[8px] rounded-full bg-white"
          style={{ boxShadow: "0 0 10px rgba(255,255,255,0.9)" }}
        />
        {tag}
      </div>
      <h3 className="text-white font-bold text-[22px] sm:text-[26px] mt-[4px] leading-[1.15]">
        {title}
      </h3>
    </div>

    {description && (
      <p className="px-6 sm:px-7 pt-6 text-[14px] sm:text-[15px] text-[#4b5563] leading-[1.6]">
        {description}
      </p>
    )}

    <ul className="px-6 sm:px-7 py-5 space-y-[18px] flex-1">
      {steps.map((step, i) => (
        <StepRow key={step.title} index={i} step={step} />
      ))}
    </ul>

    {footer && <div className="px-6 sm:px-7 pb-6 -mt-1">{footer}</div>}
  </div>
);

const WorkflowSection = () => (
  <section
    className="relative px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[100px] overflow-hidden"
    style={{
      backgroundImage: "url('/Icons/Hotel_shoot.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ backgroundColor: "rgba(250, 240, 230, 0.88)" }}
    />

    <div className="relative z-10 max-w-[1100px] mx-auto">
      <h2
        className="text-center text-[34px] sm:text-[48px] md:text-[60px] leading-[1.1] text-[#1a1a1a]"
        style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
      >
        Two products.{" "}
        <span
          className="italic"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontStyle: "italic",
            color: ACCENT,
          }}
        >
          One flow
        </span>
        <br />
        from photo to{" "}
        <span
          className="italic"
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontStyle: "italic",
            color: ACCENT,
          }}
        >
          sold
        </span>
        .
      </h2>

      <p className="text-center text-[#4b5563] mt-4 text-[16px] sm:text-[18px] max-w-[640px] mx-auto leading-[1.7]">
        Ree does the workflow. Web is your branded Webstore automatically
        powered by Ree. Web can&apos;t be automatic without Ree. Most stores
        use both for optimized experience.
      </p>

      <div className="relative mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        <ToolCard
          tag="Ree THE ENGINE"
          title="List the item"
          description="Photograph an item. Ree handles everything that follows. The only manual step is the photo."
          steps={BACKEND_STEPS}
          footer={
            <FooterBadge>
              Photo in. Live across every channel — no copy-paste.
            </FooterBadge>
          }
        />
        <ToolCard
          tag="THE STOREFRONT"
          title="Sell it on your store"
          description="Your own branded webshop, your URL and your identity not a shared marketplace."
          steps={FRONTEND_STEPS}
          footer={
            <FooterBadge>
              Your store. Your customer. Your data. No middleman.
            </FooterBadge>
          }
        />
      </div>
    </div>
  </section>
);

export default WorkflowSection;
