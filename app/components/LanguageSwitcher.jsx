"use client";

import { useEffect, useRef, useState } from "react";

// Languages offered in the header switcher. English is the page's source
// language; selecting French or Danish runs Google Translate on the page,
// selecting English restores the original copy.
const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "da", label: "Dansk", short: "DA" },
];

// ── Google Translate widget loader ─────────────────────────────────────────
// The widget is loaded once for the whole app, no matter how many switcher
// instances (desktop + mobile) are mounted. We keep the gadget itself hidden
// (see globals.css) and drive it programmatically through its <select>.
let widgetRequested = false;

function ensureGoogleTranslate() {
  if (typeof window === "undefined" || widgetRequested) return;
  widgetRequested = true;

  if (!document.getElementById("google_translate_element")) {
    const host = document.createElement("div");
    host.id = "google_translate_element";
    document.body.appendChild(host);
  }

  window.googleTranslateElementInit = () => {
    /* eslint-disable no-new */
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: LANGUAGES.map((l) => l.code).join(","),
        autoDisplay: false,
      },
      "google_translate_element"
    );
  };

  const script = document.createElement("script");
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(script);
}

// Read the currently active language from the cookie Google Translate sets,
// so the label stays correct after a reload or across instances.
function readActiveLanguage() {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/googtrans=\/[^/]+\/([^;]+)/);
  return match ? match[1] : "en";
}

// Apply a language by driving the hidden Google combo box. The widget loads
// asynchronously, so we retry until the combo exists.
function applyLanguage(code) {
  const trySet = (attempt = 0) => {
    const combo = document.querySelector(".goog-te-combo");
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
      return;
    }
    if (attempt < 50) setTimeout(() => trySet(attempt + 1), 100);
  };
  trySet();
}

const GlobeIcon = ({ size = 16 }) => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const ref = useRef(null);

  // Load the widget and sync the initial label from the cookie.
  useEffect(() => {
    ensureGoogleTranslate();
    setLang(readActiveLanguage());

    // Keep every switcher instance (desktop + mobile) in sync.
    const onChange = (e) => setLang(e.detail);
    window.addEventListener("app-language-change", onChange);

    // Keep the label in sync with the REAL translation state — covers the
    // case where the user reverts to English via Google's own banner
    // ("Show original" / close), which our dropdown can't otherwise detect.
    const poll = setInterval(() => {
      const actual = readActiveLanguage();
      setLang((prev) => (actual !== prev ? actual : prev));
    }, 600);

    return () => {
      window.removeEventListener("app-language-change", onChange);
      clearInterval(poll);
    };
  }, []);

  // Close on outside click.
  useEffect(() => {
    if (!open) return;
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  const select = (code) => {
    setOpen(false);
    if (code === lang) return;
    setLang(code);
    applyLanguage(code);
    window.dispatchEvent(
      new CustomEvent("app-language-change", { detail: code })
    );
  };

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div ref={ref} className="relative notranslate" translate="no">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="h-[38px] flex items-center gap-[6px] px-[12px] rounded-full bg-[#1a1a1a] hover:bg-black text-white transition-colors text-[14px] font-semibold cursor-pointer"
      >
        <GlobeIcon size={16} />
        <span>{current.short}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-[8px] min-w-[150px] rounded-[12px] bg-[#1a1a1a] border border-white/10 shadow-[0_12px_30px_rgba(0,0,0,0.4)] py-[6px] z-[60] overflow-hidden"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                onClick={() => select(l.code)}
                className={`w-full flex items-center justify-between px-[14px] py-[9px] text-[14px] text-left transition-colors hover:bg-white/10 cursor-pointer ${
                  l.code === lang ? "text-[#ff2e7e] font-semibold" : "text-white"
                }`}
              >
                <span>{l.label}</span>
                <span className="text-white/40 text-[12px] font-medium">
                  {l.short}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
