"use client";

const PINK = "#FF2E7E";

const ListMockup = () => (
  <div className="bg-white rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 sm:p-8 w-full max-w-[440px] mx-auto transition-transform duration-300 ease-out hover:scale-[1.03] hover:shadow-[0_28px_60px_rgba(0,0,0,0.12)]">
    <div className="flex justify-center mb-6">
      <div className="inline-flex items-baseline">
        <span
          className="text-[44px] sm:text-[52px] font-black tracking-tight"
          style={{ color: PINK }}
        >
          LIST
        </span>
        <span
          className="text-[28px] sm:text-[32px] font-black text-white px-[10px] py-[2px] rounded-[8px] ml-1 leading-none"
          style={{ backgroundColor: PINK }}
        >
          2GO
        </span>
      </div>
    </div>

    <div className="space-y-3">
      <input
        disabled
        placeholder="Product name…"
        className="w-full border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[14px] bg-white placeholder:text-[#9ca3af]"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          disabled
          placeholder="Price (DKK)"
          className="border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[14px] bg-white placeholder:text-[#9ca3af]"
        />
        <input
          disabled
          placeholder="Category"
          className="border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[14px] bg-white placeholder:text-[#9ca3af]"
        />
      </div>
      <textarea
        disabled
        placeholder="Description…"
        rows={3}
        className="w-full border border-[#e5e7eb] rounded-[10px] px-4 py-3 text-[14px] bg-white placeholder:text-[#9ca3af] resize-none"
      />
      <button
        type="button"
        className="w-full py-3 rounded-[10px] text-white text-[14px] font-semibold"
        style={{ backgroundColor: PINK }}
      >
        Publish listing →
      </button>
    </div>
  </div>
);

const ListPromoSection = () => (
  <section
    className="relative px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[100px] overflow-hidden"
    style={{
      backgroundImage: "url('/Icons/girl-fashion.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Pink wash so the photo only barely shows through */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{ backgroundColor: "rgba(255, 227, 235, 0.88)" }}
    />

    <div className="relative z-10 max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
      <div className="text-center md:text-left">
        <h2
          className="text-[34px] sm:text-[44px] md:text-[56px] leading-[1.08] text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
        >
          Where pictures work.
        </h2>
        <p
          className="text-[26px] sm:text-[32px] md:text-[38px] font-bold mt-3"
          style={{ color: PINK }}
        >
          All in one Solution.
        </p>

        <div className="mt-6 text-[16px] sm:text-[18px] text-[#1a1a1a]">
          <span className="font-extrabold text-[22px] sm:text-[24px]">
            390 DKK
          </span>{" "}
          <span className="text-[#374151]">/month</span>{" "}
          <span className="text-[#6b7280]">— free up to 25 products</span>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-7">
          <a
            href="https://re-e.dk/try/add-product"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-[12px] rounded-full text-white text-[14px] font-semibold"
            style={{ backgroundColor: PINK }}
          >
            Get started free
          </a>
          <a
            href="https://re-e.dk/try/add-product"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-[12px] rounded-full text-[14px] font-semibold bg-white border-[1.5px]"
            style={{ borderColor: PINK, color: PINK }}
          >
            See demo
          </a>
        </div>
      </div>

      <ListMockup />
    </div>
  </section>
);

export default ListPromoSection;
