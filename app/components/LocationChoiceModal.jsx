"use client";

import { useEffect, useState } from "react";
import { X, MapPin, Phone } from "lucide-react";

const LocationChoiceModal = ({ isOpen, onClose, onSelect }) => {
  // Unmount completely on close so the (otherwise invisible) option buttons
  // can't intercept clicks on mobile. On open, mount with `entered = false`,
  // then flip to true on the next animation frame for the enter transition.
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[1000] transition-opacity duration-200 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 pointer-events-none">
        <div
          className={`bg-white rounded-[18px] p-[28px] sm:p-[36px] max-w-[480px] w-full shadow-[0_20px_60px_rgba(0,0,0,0.25)] pointer-events-auto relative transition-all duration-200 ${
            entered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-[14px] right-[14px] w-[32px] h-[32px] rounded-full flex items-center justify-center text-[#6a6a6a] hover:bg-[#F5F5F5] transition"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="text-center mb-[24px]">
            <div className="inline-flex w-[56px] h-[56px] rounded-full bg-[#fde8ed] items-center justify-center mb-[14px]">
              <MapPin size={26} className="text-[#c41e3a]" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#1a1a1a] mb-[8px]">
              Where is your store?
            </h3>
            <p className="text-[14px] text-[#666666] leading-[1.5]">
              This decides whether Mia visits in person or we run a call.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-[10px]">
            <button
              type="button"
              onClick={() => onSelect("copenhagen")}
              className="text-left p-[16px] sm:p-[18px] rounded-[12px] border border-[#E0E0E0] hover:border-[#c41e3a] hover:bg-[#fdf6f7] transition"
            >
              <div className="flex items-center gap-[14px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#fde8ed] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#c41e3a]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[15px] text-[#1a1a1a] mb-[2px]">
                    Copenhagen
                  </div>
                  <div className="text-[13px] text-[#666666] leading-[1.4]">
                    Mia visits your store 2 hours, real products
                  </div>
                </div>
              </div>
            </button>
            <button
              type="button"
              onClick={() => onSelect("elsewhere")}
              className="text-left p-[16px] sm:p-[18px] rounded-[12px] border border-[#E0E0E0] hover:border-[#c41e3a] hover:bg-[#fdf6f7] transition"
            >
              <div className="flex items-center gap-[14px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#fde8ed] flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-[#c41e3a]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-[15px] text-[#1a1a1a] mb-[2px]">
                    Elsewhere
                  </div>
                  <div className="text-[13px] text-[#666666] leading-[1.4]">
                    1-hour call I handle your batch live on screen
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationChoiceModal;
