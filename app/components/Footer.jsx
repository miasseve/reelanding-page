"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSanityContent, t } from "./SanityProvider";

const whoWeHelp = [
  "Secondhand & vintage stores",
  "Resale boutiques",
  "Consignment stores",
  "Pre-loved specialists",
];

const ourTools = [
  { label: "Webstore sync", href: "#" },
  { label: "Tagging & barcode", href: "#" },
  { label: "Plugins", href: "#" },
  { label: "Custom development", href: "#" },
];

const company = [
  { label: "How we work", href: "#" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "#" },
  { label: "hello@2hand2go.com", href: "mailto:hello@2hand2go.com", highlight: true },
  { label: "Privacy policy", href: "#" },
];

const Footer = () => {
  const { logoUrl, sharedContent } = useSanityContent();
  const pathname = usePathname();

  const footerEmail = t(sharedContent, "footerEmail", "hello@2hand2go.com");

  // Override the email in company links if changed in Sanity
  const companyLinks = company.map((item) =>
    item.highlight
      ? { ...item, label: footerEmail, href: `mailto:${footerEmail}` }
      : item
  );

  const scrollToHash = (e, hash) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0a0f0a] px-[24px] sm:px-[40px] pt-[48px] pb-[24px]">
      <div className="max-w-[1152px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] sm:gap-[32px] pb-[40px]">
          {/* Logo & tagline */}
          <div>
            <div className="inline-block bg-white rounded-[8px] px-[12px] py-[8px] mb-[16px]">
              <img
                src={logoUrl}
                alt="2hand2go"
                className="h-[34px] w-auto max-w-[160px] object-contain"
              />
            </div>
            <p className="text-[16px] font-bold tracking-[0.05em] uppercase text-white leading-[1.4] mb-[8px]">
              {t(sharedContent, "footerTagline", "Secondhand\nAutomation")}
            </p>
            <p className="text-[14px] text-gray-400 leading-[1.5]">
              {t(sharedContent, "footerDescription", "We automate what slows you down. So you can grow.")}
            </p>
          </div>

          {/* WHO WE HELP */}
          <div>
            <p className="text-[16px] font-bold tracking-[0.12em] uppercase text-white mb-[6px]">
              Who We Help
            </p>
            <div className="flex flex-col gap-[14px]">
              {whoWeHelp.map((item) => (
                <p key={item} className="text-[14px] text-gray-400 leading-[1.4]">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* OUR TOOLS */}
          <div>
            <p className="text-[16px] font-bold tracking-[0.12em] uppercase text-white mb-[6px]">
              Our Tools
            </p>
            <div className="flex flex-col gap-[14px]">
              {ourTools.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={item.href.startsWith("/#") ? (e) => scrollToHash(e, item.href.slice(2)) : undefined}
                  className="text-[14px] text-gray-400 leading-[1.4] hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <p className="text-[16px] font-bold tracking-[0.12em] uppercase text-white mb-[6px]">
              Company
            </p>
            <div className="flex flex-col gap-[14px]">
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={item.href.startsWith("/#") ? (e) => scrollToHash(e, item.href.slice(2)) : undefined}
                  className={`text-[14px] leading-[1.4] hover:text-white transition-colors ${
                    item.highlight
                      ? "bg-clip-text text-transparent font-semibold"
                      : "text-gray-400"
                  }`}
                  style={item.highlight ? { backgroundImage: "linear-gradient(135deg, #a855f7, #ec4899)" } : undefined}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#414C45]" />

        <div className="pt-[20px] text-center">
          <p className="text-[#DFDFDF] text-[14px] leading-[18px]">
            &copy; {t(sharedContent, "footerCopyright", "2026 2hand2go. All rights reserved.")}
          </p>
          <p className="text-[#DFDFDF] text-[14px] leading-[18px]">
            {t(sharedContent, "footerBottomText", "Built for secondhand businesses")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
