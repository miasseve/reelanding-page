"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactSlider from "./ContactSlider";
import LocationChoiceModal from "./LocationChoiceModal";
import { useSanityContent } from "./SanityProvider";

const NAV_ITEMS = [
  { title: "How it works", href: "/#process", isDropdown: false },
  {
    title: "Features",
    isDropdown: true,
    submenuHeading: "2hand2go is powered by Ree",
    col1: [
      {
        title: "Ree",
        desc: "One picture. One ready-to-sell product. Stock synced automatically.",
        href: "https://re-e.dk/",
      },
    ],
    col2: [
      {
        title: "2hand2go Web",
        desc: "Launch your webstore in 3 days. No developer brief.",
        href: "/#web",
      },
    ],
  },
  { title: "Pricing", href: "/#pricing", isDropdown: false },
  { title: "FAQ", href: "/#faq", isDropdown: false },
];

const CTA_TEXT = "Start Free";

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="white">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);


const Header = () => {
  const { images, video } = useSanityContent();
  const instagramUrl = video?.instagramUrl || "#";
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const [choiceOpen, setChoiceOpen] = useState(false);
  const [bookingKind, setBookingKind] = useState(null);
  const [visible, setVisible] = useState(true);
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const navItems = NAV_ITEMS;
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

  // Listen for global "open-contact" event from any component (Footer link,
  // ButtonLink with href="contact", Video's Book Mia button, etc.). All such
  // triggers now open the Book Mia choice modal.
  useEffect(() => {
    const open = () => {
      setBookingKind(null);
      setChoiceOpen(true);
    };
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
        className={`bg-[#0d0810] fixed top-0 left-0 right-0 z-[997] shadow-[0px_1px_12px_rgba(0,0,0,0.5)] transition-transform duration-300 ease-in-out ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container">
          <nav className="w-full pl-[32px] pr-[12px] py-[12px] flex items-center justify-between">
            {/* Logo + tagline */}
            <Link href="/" className="flex flex-col leading-none">
              <img
                src="/Icons/2hand2go_logo.png"
                alt="2hand2go"
                className="h-[28px] sm:h-[32px] w-auto max-w-[170px] object-contain"
              />
              <span className="text-white text-[8px] sm:text-[9px] tracking-[0.18em] mt-[4px] font-medium">
                AUTOMATION FOR SECONDHAND RETAIL
              </span>
            </Link>

            {/* Desktop nav */}
            <ul
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-[40px] text-[#ff2e7e] font-semibold text-[16px]"
            >
              {navItems.map((nav, index) =>
                nav.isDropdown ? (
                  <li
                    key={nav.title}
                    className="list-none cursor-pointer hover:text-[#ff7aa6] flex items-center gap-[4px] relative"
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
                    className="cursor-pointer hover:text-[#ff7aa6]"
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

            {/* Desktop CTA + social icons */}
            <div className="hidden lg:flex items-center gap-[10px] lg:-mr-[20px]">
              <a
                href="https://re-e.dk/try/add-product"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff2e7e] hover:bg-[#ff5294] text-white px-[28px] py-[10px] rounded-full font-semibold transition text-[15px] cursor-pointer"
              >
                {ctaText}
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-black transition-colors"
              >
                <InstagramIcon size={18} />
              </a>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-[44px] h-[44px] cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] w-[24px] bg-white transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[24px] bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[24px] bg-white transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </nav>

          {/* Mobile dropdown menu */}
          {menuOpen && (
            <div className="lg:hidden px-[32px] pb-[20px] flex flex-col gap-[16px] text-[#ff2e7e] font-semibold text-[16px]">
              {navItems.map((nav, index) =>
                nav.isDropdown ? (
                  <li
                    key={nav.title}
                    className="list-none cursor-pointer hover:text-[#ff7aa6]"
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
                    className="list-none cursor-pointer hover:text-[#ff7aa6]"
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
              <div className="flex items-center gap-[14px]">
                <a
                  href="https://re-e.dk/try/add-product"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="bg-[#ff2e7e] hover:bg-[#ff5294] text-white px-[28px] py-[10px] rounded-full font-semibold transition w-fit cursor-pointer"
                >
                  {ctaText}
                </a>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#1a1a1a] hover:bg-black transition-colors"
                >
                  <InstagramIcon size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <LocationChoiceModal
        isOpen={choiceOpen}
        onClose={() => setChoiceOpen(false)}
        onSelect={(kind) => {
          setChoiceOpen(false);
          setBookingKind(kind);
        }}
      />

      <ContactSlider
        isOpen={!!bookingKind}
        onClose={() => setBookingKind(null)}
        onBack={() => {
          setBookingKind(null);
          setChoiceOpen(true);
        }}
        bookingKind={bookingKind}
      />
    </>
  );
};

export default Header;
