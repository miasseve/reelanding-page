"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSanityContent, t } from "./SanityProvider";

const PINK = "#FF2E7E";

const solutions = [
  { label: "Ree", href: "https://re-e.dk/" },
  { label: "2hand2go Web", href: "/#web" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Get Started Free", href: "https://re-e.dk/try/add-product" },
];

const whoWeHelp = [
  { label: "Electronics stores", href: "#" },
  { label: "Fashion and vintage", href: "#" },
  { label: "Beauty and sports", href: "#" },
  { label: "Consignment shops", href: "#" },
  { label: "All unique products", href: "#" },
];

const more = [
  { label: "FAQ", href: "/#faq" },
  { label: "Book a call", href: "contact" },
  { label: "Contact", href: "contact" },
  { label: "Privacy Policy", href: "https://re-e.dk/privacy-policy" },
];

const ColumnLink = ({ item, onClick }) => {
  const isExternal = item.href.startsWith("http");
  const isContact = item.href === "contact";
  const className =
    "text-[14px] leading-[1.5] transition-opacity hover:opacity-80 cursor-pointer";
  const style = { color: PINK };

  if (isContact) {
    return (
      <span
        className={className}
        style={style}
        onClick={() =>
          window.dispatchEvent(new CustomEvent("open-contact"))
        }
      >
        {item.label}
      </span>
    );
  }

  if (isExternal) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {item.label}
      </a>
    );
  }
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={className}
      style={style}
    >
      {item.label}
    </Link>
  );
};

const Column = ({ heading, items, scrollToHash }) => (
  <div>
    <p className="text-white font-bold text-[13px] tracking-[0.22em] uppercase mb-5">
      {heading}
    </p>
    <div className="flex flex-col gap-[12px]">
      {items.map((item) => (
        <ColumnLink
          key={item.label}
          item={item}
          onClick={
            item.href.startsWith("/#")
              ? (e) => scrollToHash(e, item.href.slice(2))
              : undefined
          }
        />
      ))}
    </div>
  </div>
);

const Footer = () => {
  const { sharedContent } = useSanityContent();
  const pathname = usePathname();

  const footerEmail = t(sharedContent, "footerEmail", "mia@le-stores.com");

  const scrollToHash = (e, hash) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/Icons/shirts.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay so the photo reads as a textured backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 bg-black/80"
      />

      <div className="relative z-10 px-[24px] sm:px-[40px] lg:px-[64px] pt-[60px] sm:pt-[80px] pb-[28px]">
        <div className="max-w-[1240px] mx-auto">
          {/* Top grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-[56px] pb-[40px]">
            {/* Brand column */}
            <div>
              <div className="inline-block  rounded-[10px] px-[14px] py-[10px]">
                <img
                  src="/Icons/2hand2go_logo.png"
                  alt="2hand2go"
                  className="h-[36px] w-auto max-w-[180px] object-contain"
                />
              </div>
              <p className="text-white/75 text-[14px] leading-[1.6] mt-5">
                {t(
                  sharedContent,
                  "footerDescription",
                  "All-in-one listing tool and ready-built online store for B2B secondhand stores. 1 photo. Everything automatic. Physical and online always in sync. No developer. No manual work."
                )}
              </p>
              <a
                href={`mailto:${footerEmail}`}
                className="inline-block text-[14px] mt-5 hover:opacity-80 transition-opacity"
                style={{ color: PINK }}
              >
                {footerEmail}
              </a>
            </div>

            <Column heading="Solutions" items={solutions} scrollToHash={scrollToHash} />
            <Column heading="Who We Help" items={whoWeHelp} scrollToHash={scrollToHash} />
            <Column heading="More" items={more} scrollToHash={scrollToHash} />
          </div>

          <div className="w-full h-px bg-white/10" />

          {/* Long paragraph */}
          <p className="text-white/55 text-[13px] leading-[1.7] mt-8 max-w-[1200px]">
            {t(
              sharedContent,
              "footerLongDescription",
              "2hand2go is the all-in-one listing automation and ready-built webstore platform for B2B physical secondhand stores selling unique products. One photo automatically generates a complete product listing with AI-written description, brand recognition, pricing suggestion, and barcode label, and publishes it simultaneously to the store's online store, Instagram, Vinted, and other connected channels. Physical store inventory and online store inventory synchronise automatically and in real time no developer required, no manual updates. The 2hand2go Web online store is delivered in 3 days, already integrated with Ree, at a fraction of the cost of custom development. 2hand2go works for all secondhand and unique product categories including electronics, fashion and vintage clothing, beauty and cosmetics end-of-stock, sports equipment, kids and toys, jewellery and watches, photography equipment, interior design and furniture, antiques and collectibles, books, records, and mixed-inventory B2B resale operations. In-store onboarding available in the Copenhagen region. Remote onboarding via 15-minute video call available worldwide. Contact: mia@le-stores.com."
            )}
          </p>

          <div className="w-full h-px bg-white/10 mt-10" />

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6">
            <p className="text-white/55 text-[13px]">
              &copy;{" "}
              {t(
                sharedContent,
                "footerCopyright",
                "2026 2hand2go. All rights reserved."
              )}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://re-e.dk/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/55 text-[13px] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/55 text-[13px] hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
