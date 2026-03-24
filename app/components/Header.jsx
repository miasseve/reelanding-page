"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactSlider from "./ContactSlider";
import Image from "next/image";

// Secondhand retail dropdown data (current "All retail" content)
const shCol1 = [
  {
    title: "Automated Webstore",
    desc: "Webstore and physical store connected in 1 day",
  },
  {
    title: "Automatic Bulk Labelling",
    desc: "",
  },
  {
    title: "Solutions",
    desc: "Explain your need; We solve your inefficiency by adding an automatic tool for it.",
  },
];
const shCol2 = [
  { title: "Automatic Product Ad", desc: "", href: "#" },
  { title: "Automatic Market-Ready", desc: "", href: "#" },
  { title: "Prices", desc: "", href: "/pricing" },
  { title: "Calculate savings", desc: "", href: "#" },
];
const allShItems = [...shCol1, ...shCol2];

// All retail dropdown data
const arCol1 = [
  {
    title: "Marketplace",
    desc: "Simply dummy text of the printing and typesetting",
  },
  {
    title: "Boutiques",
    desc: "Simply dummy text of the printing and typesetting",
  },
  {
    title: "Enterprise",
    desc: "Simply dummy text of the printing and typesetting",
  },
];
const arCol2 = [
  { title: "Calculator", desc: "Simply dummy text of the printing and typesetting", href: "#" },
  { title: "Pricing", desc: "Simply dummy text of the printing and typesetting", href: "/pricing" },
  { title: "Calculate savings", desc: "", href: "#" },
];
const allArItems = [...arCol1, ...arCol2];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [secondhandOpen, setSecondhandOpen] = useState(false);
  const [retailOpen, setRetailOpen] = useState(false);
  const [mobileSecondhandOpen, setMobileSecondhandOpen] = useState(false);
  const [mobileRetailOpen, setMobileRetailOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const secondhandRef = useRef(null);
  const retailRef = useRef(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const scrollToHash = (e, hash) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 0) {
        setVisible(true);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (secondhandRef.current && !secondhandRef.current.contains(e.target)) {
        setSecondhandOpen(false);
      }
      if (retailRef.current && !retailRef.current.contains(e.target)) {
        setRetailOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`bg-white fixed top-0 left-0 right-0 z-[997] shadow-[0px_1px_8px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-in-out ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container">
          <nav className="w-full px-[32px] py-[12px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/Icons/reelogo.png"
                alt="REe"
                width={120}
                height={34}
                style={{ width: "auto", height: "34px" }}
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-[40px] text-gray-800 font-medium text-[16px]">
              {/* Secondhand retail desktop dropdown */}
              <li
                ref={secondhandRef}
                className="list-none cursor-pointer hover:text-black flex items-center gap-[4px] relative"
                onClick={() => {
                  setSecondhandOpen(!secondhandOpen);
                  setRetailOpen(false);
                }}
              >
                Secondhand retail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-[16px] h-[16px] transition-transform duration-200 ${secondhandOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {secondhandOpen && (
                  <div className="absolute top-full !left-[130px] -translate-x-1/2 mt-[12px] w-[860px] bg-[#111111] rounded-[20px] shadow-[0px_8px_40px_rgba(0,0,0,0.35)] p-[32px] z-50 flex gap-[40px]">
                    {/* Left image */}
                    <div className="relative w-[280px] h-[340px] flex-shrink-0 rounded-[16px] overflow-hidden">
                      <Image
                        src="/Icons/pink_bag.avif"
                        alt="Fashion"
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-[20px]">
                      <p className="text-white font-bold text-[20px] tracking-[0.12em] uppercase leading-[1.3]">
                        Large Volume Unique Product Handling
                      </p>

                      <div className="flex gap-[32px]">
                        {/* Col 1 */}
                        <div className="flex flex-col gap-[20px] flex-1">
                          {shCol1.map((item) => (
                            <a
                              href="#"
                              key={item.title}
                              className="group block no-underline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSecondhandOpen(false);
                              }}
                            >
                              <p className="text-white font-semibold text-[15px] mb-[4px] group-hover:text-purple-400 transition-colors">
                                {item.title}
                              </p>
                              {item.desc && (
                                <p className="text-gray-400 text-[12px] leading-[1.5]">
                                  {item.desc}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>

                        {/* Col 2 */}
                        <div className="flex flex-col gap-[20px] flex-1">
                          {shCol2.map((item) => (
                            <a
                              href={item.href}
                              key={item.title}
                              className="group block no-underline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSecondhandOpen(false);
                              }}
                            >
                              <p className="text-white font-semibold text-[15px] group-hover:text-purple-400 transition-colors">
                                {item.title}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* All retail desktop dropdown */}
              <li
                ref={retailRef}
                className="list-none cursor-pointer hover:text-black flex items-center gap-[4px] relative"
                onClick={() => {
                  setRetailOpen(!retailOpen);
                  setSecondhandOpen(false);
                }}
              >
                All retail
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-[16px] h-[16px] transition-transform duration-200 ${retailOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                {retailOpen && (
                  <div className="absolute top-full !left-[80px] -translate-x-1/2 mt-[12px] w-[860px] bg-[#111111] rounded-[20px] shadow-[0px_8px_40px_rgba(0,0,0,0.35)] p-[32px] z-50 flex gap-[40px]">
                    {/* Left image — leestore */}
                    <div className="relative w-[280px] h-[340px] flex-shrink-0 rounded-[16px] overflow-hidden bg-white">
                      <Image
                        src="/Icons/leestore_img.png"
                        alt="Lestores"
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col gap-[20px]">
                      <div className="flex gap-[32px]">
                        {/* Col 1 */}
                        <div className="flex flex-col gap-[20px] flex-1">
                          {arCol1.map((item) => (
                            <a
                              href="#"
                              key={item.title}
                              className="group block no-underline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setRetailOpen(false);
                              }}
                            >
                              <p className="text-white font-semibold text-[15px] mb-[4px] group-hover:text-purple-400 transition-colors">
                                {item.title}
                              </p>
                              {item.desc && (
                                <p className="text-gray-400 text-[12px] leading-[1.5]">
                                  {item.desc}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>

                        {/* Col 2 */}
                        <div className="flex flex-col gap-[20px] flex-1">
                          {arCol2.map((item) => (
                            <a
                              href={item.href}
                              key={item.title}
                              className="group block no-underline"
                              onClick={(e) => {
                                e.stopPropagation();
                                setRetailOpen(false);
                              }}
                            >
                              <p className="text-white font-semibold text-[15px] mb-[4px] group-hover:text-purple-400 transition-colors">
                                {item.title}
                              </p>
                              {item.desc && (
                                <p className="text-gray-400 text-[12px] leading-[1.5]">
                                  {item.desc}
                                </p>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li className="cursor-pointer hover:text-black">
                <Link href="/#tools" onClick={(e) => scrollToHash(e, "tools")}>Our tools</Link>
              </li>
              <li className="cursor-pointer hover:text-black">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="cursor-pointer hover:text-black">
                <Link href="/#faq" onClick={(e) => scrollToHash(e, "faq")}>FAQ</Link>
              </li>
            </ul>

            {/* Desktop button */}
            <button
              onClick={() => setContactOpen(true)}
              className="hidden md:block gradient-btn text-white px-[20px] py-[8px] rounded-full font-medium transition text-[16px] cursor-pointer"
            >
              Contact Us
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[5px] w-[32px] h-[32px] cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] w-[24px] bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-[2px] w-[24px] bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-[24px] bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </button>
          </nav>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="md:hidden px-[32px] pb-[20px] flex flex-col gap-[16px] text-gray-800 font-medium text-[16px]">
              {/* Secondhand retail mobile */}
              <li className="list-none cursor-pointer hover:text-black">
                <div
                  className="flex items-center gap-[4px]"
                  onClick={() => setMobileSecondhandOpen(!mobileSecondhandOpen)}
                >
                  Secondhand retail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-[16px] h-[16px] transition-transform duration-200 ${mobileSecondhandOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileSecondhandOpen ? "max-h-[400px] opacity-100 mt-[12px]" : "max-h-0 opacity-0"}`}
                >
                  <div className="bg-[#1a1a1a] rounded-[12px] p-[16px] flex flex-col gap-[16px]">
                    <p className="text-white font-bold text-[11px] tracking-[0.12em] uppercase pb-[4px] border-b border-white/10">
                      Large Volume Unique Product Handling
                    </p>
                    {allShItems.map((item) => (
                      <a
                        href="#"
                        key={item.title}
                        className="group block no-underline"
                        onClick={() => setMobileSecondhandOpen(false)}
                      >
                        <p className="text-white font-semibold text-[14px] mb-[2px] group-hover:text-purple-400 transition-colors">
                          {item.title}
                        </p>
                        {item.desc && (
                          <p className="text-gray-400 text-[12px] leading-[1.5]">
                            {item.desc}
                          </p>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              {/* All retail mobile dropdown */}
              <li className="list-none cursor-pointer hover:text-black">
                <div
                  className="flex items-center gap-[4px]"
                  onClick={() => setMobileRetailOpen(!mobileRetailOpen)}
                >
                  All retail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-[16px] h-[16px] transition-transform duration-200 ${mobileRetailOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileRetailOpen ? "max-h-[400px] opacity-100 mt-[12px]" : "max-h-0 opacity-0"}`}
                >
                  <div className="bg-[#1a1a1a] rounded-[12px] p-[16px] flex flex-col gap-[16px]">
                    {allArItems.map((item) => (
                      <a
                        href={item.href || "#"}
                        key={item.title}
                        className="group block no-underline"
                        onClick={() => setMobileRetailOpen(false)}
                      >
                        <p className="text-white font-semibold text-[14px] mb-[2px] group-hover:text-purple-400 transition-colors">
                          {item.title}
                        </p>
                        {item.desc && (
                          <p className="text-gray-400 text-[12px] leading-[1.5]">
                            {item.desc}
                          </p>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </li>

              <li className="list-none cursor-pointer hover:text-black">
                <Link href="/#tools" onClick={(e) => scrollToHash(e, "tools")}>Our tools</Link>
              </li>
              <li className="list-none cursor-pointer hover:text-black">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="list-none cursor-pointer hover:text-black">
                <Link href="/#faq" onClick={(e) => scrollToHash(e, "faq")}>FAQ</Link>
              </li>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setContactOpen(true);
                }}
                className="gradient-btn text-white px-[20px] py-[8px] rounded-full font-medium transition w-fit cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </header>

      <ContactSlider
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
};

export default Header;
