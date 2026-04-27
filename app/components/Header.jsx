"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactSlider from "./ContactSlider";
import { useSanityContent } from "./SanityProvider";

const NAV_ITEMS = [
  {
    title: "Solutions",
    isDropdown: true,
    submenuHeading: "Built for Secondhand Businesses",
    col1: [
      {
        title: "2hand2go List",
        desc: "One picture. One ready-to-sell product. Stock synced automatically.",
        href: "https://re-e.dk/",
      },
    ],
    col2: [
      {
        title: "2hand2go Web",
        desc: "Launch your webstore in 3 days. White-label. No developer brief.",
        href: "/web",
      },
    ],
  },
  { title: "How it works", href: "/#process", isDropdown: false },
  { title: "Pricing", href: "/pricing", isDropdown: false },
  { title: "FAQ", href: "/#faq", isDropdown: false },
];

const CTA_TEXT = "Contact Us";

const Header = () => {
  const { logoUrl, images, settings } = useSanityContent();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const navItems = settings?.navItems?.length > 0 ? settings.navItems : NAV_ITEMS;
  const ctaText = CTA_TEXT;

  const scrollToHash = (e, hash) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = useCallback(
    (index) => setOpenDropdown((prev) => (prev === index ? null : index)),
    [],
  );

  const toggleMobileDropdown = useCallback(
    (index) =>
      setMobileOpenDropdown((prev) => (prev === index ? null : index)),
    [],
  );

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

  // Listen for global "open-contact" event from any component's ButtonLink
  useEffect(() => {
    const open = () => setContactOpen(true);
    window.addEventListener("open-contact", open);
    return () => window.removeEventListener("open-contact", open);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Resolve href: anchor links scroll, external links open new tab, rest use Next Link
  const renderLink = (item, extraOnClick, isMobile = false) => {
    const isAnchor = item.href?.startsWith("#");
    const isExternal = item.href?.startsWith("http");
    const hash = isAnchor ? item.href.slice(1) : null;

    const innerContent = (
      <>
        <p
          className={`text-white font-semibold ${isMobile ? "text-[14px] mb-[2px]" : "text-[15px] mb-[4px]"} group-hover:text-purple-400 transition-colors`}
        >
          {item.title}
        </p>
        {item.desc && (
          <p className="text-gray-400 text-[12px] leading-[1.5]">
            {item.desc}
          </p>
        )}
      </>
    );

    const sharedClass = "group block no-underline";

    if (isExternal) {
      return (
        <a
          key={item.title}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={sharedClass}
          onClick={extraOnClick}
        >
          {innerContent}
        </a>
      );
    }

    if (isAnchor) {
      return (
        <a
          key={item.title}
          href={item.href}
          className={sharedClass}
          onClick={(e) => {
            scrollToHash(e, hash);
            extraOnClick?.(e);
          }}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <Link
        key={item.title}
        href={item.href || "#"}
        className={sharedClass}
        onClick={extraOnClick}
      >
        {innerContent}
      </Link>
    );
  };

  // Render the dropdown panel for a given nav item
  const renderDropdownPanel = (nav) => {
    const col1 = nav.col1 || [];
    const col2 = nav.col2 || [];
    const heading = nav.submenuHeading || "";
    const imgSrc =
      nav.dropdownImageUrl ||
      images["header-secondhand"]?.src ||
      "/Icons/pink_bag.avif";
    const imgAlt =
      nav.dropdownImageAlt ||
      images["header-secondhand"]?.alt ||
      "Fashion";

    return (
      <div className="absolute top-full !left-[130px] -translate-x-1/2 mt-[12px] w-[860px] bg-[#111111] rounded-[20px] shadow-[0px_8px_40px_rgba(0,0,0,0.35)] p-[32px] z-50 flex gap-[40px]">
        {/* Left image */}
        <div className="relative w-[280px] h-[340px] flex-shrink-0 rounded-[16px] overflow-hidden">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col gap-[20px]">
          {heading && (
            <p className="text-white font-bold text-[20px] tracking-[0.12em] uppercase leading-[1.3]">
              {heading}
            </p>
          )}

          <div className="flex gap-[32px]">
            {col1.length > 0 && (
              <div className="flex flex-col gap-[20px] flex-1">
                {col1.map((item) =>
                  renderLink(item, (e) => {
                    e?.stopPropagation();
                    setOpenDropdown(null);
                  }),
                )}
              </div>
            )}
            {col2.length > 0 && (
              <div className="flex flex-col gap-[20px] flex-1">
                {col2.map((item) =>
                  renderLink(item, (e) => {
                    e?.stopPropagation();
                    setOpenDropdown(null);
                  }),
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Render mobile dropdown content for a given nav item
  const renderMobileDropdown = (nav) => {
    const allItems = [...(nav.col1 || []), ...(nav.col2 || [])];
    const heading = nav.submenuHeading || "";

    return (
      <div className="bg-[#1a1a1a] rounded-[12px] p-[16px] flex flex-col gap-[16px]">
        {heading && (
          <p className="text-white font-bold text-[11px] tracking-[0.12em] uppercase pb-[4px] border-b border-white/10">
            {heading}
          </p>
        )}
        {allItems.map((item) =>
          renderLink(
            item,
            () => {
              setMobileOpenDropdown(null);
              setMenuOpen(false);
            },
            true,
          ),
        )}
      </div>
    );
  };

  return (
    <>
      <header
        className={`bg-white fixed top-0 left-0 right-0 z-[997] shadow-[0px_1px_8px_rgba(0,0,0,0.06)] transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container">
          <nav className="w-full px-[32px] py-[12px] flex items-center justify-between">
            {/* Logo */}
            <Link href="/">
              <img
                src={logoUrl}
                alt="2hand2go"
                className="h-[34px] w-auto max-w-[160px] object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <ul
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-[40px] text-gray-800 font-medium text-[16px]"
            >
              {navItems.map((nav, index) =>
                nav.isDropdown ? (
                  <li
                    key={nav.title}
                    className="list-none cursor-pointer hover:text-black flex items-center gap-[4px] relative"
                    onClick={() => toggleDropdown(index)}
                  >
                    {nav.title}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-[16px] h-[16px] transition-transform duration-200 ${
                        openDropdown === index ? "rotate-180" : ""
                      }`}
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

                    {openDropdown === index && renderDropdownPanel(nav)}
                  </li>
                ) : (
                  <li
                    key={nav.title}
                    className="cursor-pointer hover:text-black"
                  >
                    <Link
                      href={nav.href || "#"}
                      onClick={(e) => {
                        const hash = nav.href?.includes("#")
                          ? nav.href.split("#")[1]
                          : null;
                        if (hash) scrollToHash(e, hash);
                      }}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ),
              )}
            </ul>

            {/* Desktop CTA */}
            <button
              onClick={() => setContactOpen(true)}
              className="hidden lg:block gradient-btn text-white px-[20px] py-[8px] rounded-full font-medium transition text-[16px] cursor-pointer"
            >
              {ctaText}
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-[44px] h-[44px] cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] w-[24px] bg-gray-800 transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[24px] bg-gray-800 transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[24px] bg-gray-800 transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </nav>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="lg:hidden px-[32px] pb-[20px] flex flex-col gap-[16px] text-gray-800 font-medium text-[16px]">
              {navItems.map((nav, index) =>
                nav.isDropdown ? (
                  <li
                    key={nav.title}
                    className="list-none cursor-pointer hover:text-black"
                  >
                    <div
                      className="flex items-center gap-[4px]"
                      onClick={() => toggleMobileDropdown(index)}
                    >
                      {nav.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-[16px] h-[16px] transition-transform duration-200 ${
                          mobileOpenDropdown === index ? "rotate-180" : ""
                        }`}
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
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        mobileOpenDropdown === index
                          ? "max-h-[calc(100vh-120px)] opacity-100 mt-[12px]"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {renderMobileDropdown(nav)}
                    </div>
                  </li>
                ) : (
                  <li
                    key={nav.title}
                    className="list-none cursor-pointer hover:text-black"
                  >
                    <Link
                      href={nav.href || "#"}
                      onClick={(e) => {
                        const hash = nav.href?.includes("#")
                          ? nav.href.split("#")[1]
                          : null;
                        if (hash) scrollToHash(e, hash);
                        setMenuOpen(false);
                      }}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ),
              )}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  setContactOpen(true);
                }}
                className="gradient-btn text-white px-[20px] py-[8px] rounded-full font-medium transition w-fit cursor-pointer"
              >
                {ctaText}
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
