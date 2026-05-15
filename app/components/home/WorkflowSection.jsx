"use client";

const ACCENT = "#FF5294";
const HEADER_GRADIENT =
  "linear-gradient(135deg, #FF5294 0%, #FF2E7E 100%)";

const BACKEND_STEPS = [
  {
    title: "AI PHOTO RECOGNITION",
    desc: "Brand, category, condition detected",
  },
  {
    title: "AI CONTENT WRITING",
    desc: "Title, description, keywords generated",
  },
  {
    title: "AI PRICING",
    desc: "Market data → smart price suggestion",
  },
  {
    title: "CHANNEL PUBLISH",
    desc: "Vinted, Trendsales, Instagram…",
  },
  {
    title: "EXPOSES DATA API",
    desc: "Structured product feed → consumed by Web",
  },
];

const FRONTEND_STEPS = [
  {
    title: "THEIR OWN BRANDED WEBSTORE",
    desc: "Custom URL, their identity not a shared marketplace",
    tags: ["THEIR URL", "THEIR LOGO", "LIVE IN 3 DAYS"],
  },
  {
    title: "FULL INVENTORY VISIBILITY",
    desc: "Every item listed, sold, or available in one view",
    tags: ["LIVE", "RESERVED", "SOLD"],
  },
  {
    title: "CONSIGNOR MANAGEMENT",
    desc: "Who brought what, sold when, payout split automatic",
  },
  {
    title: "MULTI-CHANNEL STOCK SYNC",
    desc: "Sold in store or on Vinted → removed everywhere instantly",
  },
  {
    title: "SALES PERFORMANCE",
    desc: "What sells, at what price, which channel performs",
  },
];

const CameraIcon = ({ size = 14 }) => (
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
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const StepRow = ({ index, step }) => (
  <li className="flex gap-3 items-start">
    <span
      className="flex-shrink-0 mt-[2px] w-[26px] h-[26px] rounded-full text-white text-[13px] font-bold flex items-center justify-center"
      style={{ backgroundColor: ACCENT }}
    >
      {index + 1}
    </span>
    <div className="flex-1 min-w-0">
      <div className="text-[15px] sm:text-[16px] font-semibold tracking-[0.06em] text-[#1a1a1a]">
        {step.title}
      </div>
      <div className="text-[14px] sm:text-[15px] text-[#6b7280] mt-[4px] leading-[1.5]">
        {step.desc}
      </div>
      {step.tags && (
        <div className="flex flex-wrap gap-[6px] mt-[8px]">
          {step.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] sm:text-[12px] px-[10px] py-[3px] rounded-[4px] bg-[#f3f4f6] text-[#374151] tracking-[0.08em] font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  </li>
);

const ToolCard = ({ tag, title, subtitle, sectionLabel, steps }) => (
  <div className="bg-white rounded-[18px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#f1f1f1] flex flex-col">
    <div className="px-5 sm:px-7 py-5 sm:py-6" style={{ background: HEADER_GRADIENT }}>
      <div className="text-white/95 text-[11px] tracking-[0.18em] font-semibold flex items-center gap-2">
        <span className="w-[6px] h-[6px] rounded-full bg-white" />
        {tag}
      </div>
      <h3 className="text-white font-bold text-[24px] sm:text-[28px] mt-[6px]">
        {title}
      </h3>
      <p className="text-white/90 text-[12px] sm:text-[13px] mt-[2px]">
        {subtitle}
      </p>
    </div>

    <div className="px-5 sm:px-7 pt-4 pb-2 border-b border-[#f1f1f1] bg-[#fafafa]">
      <div className="text-[10px] sm:text-[11px] tracking-[0.18em] font-semibold text-[#6b7280] flex items-center gap-2">
        <span className="w-[5px] h-[5px] rounded-full" style={{ backgroundColor: ACCENT }} />
        {sectionLabel}
      </div>
    </div>

    <ul className="px-5 sm:px-7 py-5 space-y-4 flex-1">
      {steps.map((step, i) => (
        <StepRow key={step.title} index={i} step={step} />
      ))}
    </ul>
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
    {/* Cream wash so the photo only barely shows through */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ backgroundColor: "rgba(250, 240, 230, 0.88)" }}
    />

    <div className="relative z-10 max-w-[1100px] mx-auto">
      <h2 className="text-center text-[34px] sm:text-[48px] md:text-[60px] font-bold leading-[1.1] text-[#1a1a1a]">
        Get up to{" "}
        <span className="italic" style={{ color: ACCENT }}>
          20x
        </span>{" "}
        more time
        <br />
        back
        <br />
        in{" "}
        <span className="italic" style={{ color: ACCENT }}>
          1
        </span>{" "}
        step <span className="italic">GO</span>
      </h2>

      <p className="text-center text-[#6b7280] mt-4 text-[13px] sm:text-[15px]">
        From product listing to live storefront two tools, one effortless flow.
      </p>

      <div className="flex justify-center mt-7 sm:mt-9">
        <div className="bg-[#1a1a1a] text-white rounded-full px-5 sm:px-6 py-[10px] sm:py-[12px] flex items-center gap-2 text-[11px] sm:text-[12px] tracking-[0.14em] font-semibold">
          <CameraIcon />
          1 PHOTO THE ONLY MANUAL STEP
        </div>
      </div>

      <div className="relative mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch">
        <ToolCard
          tag="BACKEND — RUNS AI"
          title="2hand2list"
          subtitle="AI engine · data processing · channel sync"
          sectionLabel="AI-POWERED STEPS"
          steps={BACKEND_STEPS}
        />
        <ToolCard
          tag="FRONTEND — STORE OWNER"
          title="2hand2web"
          subtitle="Their store. Their identity. Their control."
          sectionLabel="WHAT THE STORE OWNER GETS"
          steps={FRONTEND_STEPS}
        />

        <div
          aria-hidden
          className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center pointer-events-none"
        >
          <span
            className="text-[10px] tracking-[0.3em] font-semibold text-[#9ca3af] uppercase rotate-90 whitespace-nowrap bg-white px-3 py-1 rounded-full border border-[#e5e7eb]"
          >
            Web depends on List
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default WorkflowSection;
