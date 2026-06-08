"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const ContactSlider = ({ isOpen, onClose, bookingKind, onBack }) => {
  // Mount fresh on open / unmount on close, so the form is a brand-new DOM
  // subtree each time it opens. That lets Google Translate's observer pick it
  // up and translate it — the same pattern LocationChoiceModal uses. An
  // always-mounted panel isn't re-translated on open and shows English.
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setEntered(false);
      return;
    }
    const id = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    // iOS-safe scroll lock: position:fixed on body actually stops touch scroll
    // on the page behind, which `overflow:hidden` does not.
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    // `important` so this wins over the global `body { top: 0 !important }`
    // used to neutralise the Google Translate banner offset.
    body.style.setProperty("top", `-${scrollY}px`, "important");
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    return () => {
      body.style.position = "";
      body.style.removeProperty("top");
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
        className={`fixed inset-0 bg-black/40 z-[998] transition-opacity duration-300 ${
          entered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed inset-y-0 right-0 w-full max-w-[540px] bg-white z-[999] shadow-[-8px_0px_40px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden transition-transform duration-300 ease-in-out ${
          entered ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-[16px] right-[16px] w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#F5F5F5] transition-colors cursor-pointer z-20"
          aria-label="Close"
        >
          <X size={18} className="text-[#414141]" />
        </button>

        <div className="h-full flex flex-col">
          {bookingKind && (
            <BookingForm
              kind={bookingKind}
              onBack={onBack}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </>
  );
};

/* ─────────────────────────────────────────────────────────────────────────
   BOOK-MIA — booking form for the selected location
   (The "Where is your store?" choice is handled outside, in
   LocationChoiceModal, then this slider opens with the chosen kind.)
   ───────────────────────────────────────────────────────────────────────── */

const BOOKING_CONFIG = {
  copenhagen: {
    title: "2-hour in-store visit.",
    description:
      "Mia works with real items from your floor. Have min 20 products ready.",
    subject: "Book Mia (2-hour in-store visit)",
    locationLabel: "Address / postcode",
    locationPlaceholder: "Nørrebrogade 12, 2200",
    locationField: "address",
    daySectionTitle: "Pick a day",
    timeLabel: "Preferred time",
    times: ["9–11", "11–13", "13–15"],
    notesTitle: "Anything Mia should know?",
    notesPlaceholder: "Setup, questions, specific challenges…",
    submitLabel: "Confirm visit booking →",
  },
  elsewhere: {
    title: "1-hour call.",
    description:
      "You describe your challenges , I handle a real batch of your products live. You see the output while we talk.",
    subject: "Book Mia (1-hour call)",
    locationLabel: "City / country",
    locationPlaceholder: "Aarhus, Denmark",
    locationField: "cityCountry",
    daySectionTitle: "Pick a time slot (EST)",
    timeLabel: "Time",
    times: ["9–10", "11–12", "14–15"],
    notesTitle: "Anything I should know before the call?",
    notesPlaceholder:
      "Team size, current bottleneck, platform helps me prep your batch in advance.",
    submitLabel: "Confirm call booking →",
  },
};

// validations
const validateBooking = ({ data, time, locationField, locationLabel }) => {
  const errors = {};
  const trim = (v) => (v || "").trim();

  if (!trim(data.storename)) errors.storename = "Store name is required";
  else if (trim(data.storename).length < 2)
    errors.storename = "Store name is too short";

  if (trim(data.cvr) && !/^\d{8}$/.test(trim(data.cvr)))
    errors.cvr = "CVR must be exactly 8 digits";

  if (!trim(data[locationField]))
    errors[locationField] = `${locationLabel} is required`;

  if (!trim(data.name)) errors.name = "Full name is required";
  else if (trim(data.name).length < 2)
    errors.name = "Please enter your full name";

  if (trim(data.phone) && trim(data.phone).length < 6)
    errors.phone = "Please enter a valid phone number";

  if (!trim(data.email)) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trim(data.email)))
    errors.email = "Please enter a valid email";

  if (trim(data.products) && !/^[\d~+\-\s]+$/.test(trim(data.products)))
    errors.products = "Use a number, e.g. 50 or ~50";

  if (!trim(data.day)) errors.day = "Please pick a day";
  if (!time) errors.time = "Please pick a time slot";

  return errors;
};

const FieldError = ({ message }) =>
  message ? (
    <p className="text-[12px] text-red-600 mt-[4px]" role="alert">
      {message}
    </p>
  ) : null;

// Lightweight toast: fixed near the top of the viewport, above the slider.
// Auto-dismisses; can be closed manually with the ✕.
const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, toast.duration ?? 4000);
    return () => clearTimeout(t);
  }, [toast, onClose]);

  if (!toast) return null;
  const isError = toast.type === "error";

  return (
    <div
      className="fixed top-[20px] left-1/2 -translate-x-1/2 z-[1100] w-[calc(100%-32px)] max-w-[420px] pointer-events-none"
      role="status"
      aria-live="polite"
    >
      <div
        className={`pointer-events-auto flex items-start gap-[10px] px-[14px] py-[12px] rounded-[10px] border shadow-[0_10px_30px_rgba(0,0,0,0.15)] ${
          isError
            ? "bg-red-50 border-red-200 text-red-800"
            : "bg-green-50 border-green-200 text-green-800"
        }`}
        style={{ animation: "toast-slide-down 200ms ease-out" }}
      >
        <span
          className={`shrink-0 w-[20px] h-[20px] rounded-full flex items-center justify-center text-white text-[12px] font-bold ${
            isError ? "bg-red-500" : "bg-green-500"
          }`}
          aria-hidden
        >
          {isError ? "!" : "✓"}
        </span>
        <div className="flex-1 text-[14px] font-medium leading-[1.45]">
          {toast.message}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss"
          className="shrink-0 opacity-60 hover:opacity-100 transition-opacity text-[16px] leading-none -mt-[2px]"
        >
          ×
        </button>
      </div>
      <style>{`
        @keyframes toast-slide-down {
          from { opacity: 0; transform: translate(-50%, -8px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </div>
  );
};

const BookingForm = ({ kind, onBack, onClose }) => {
  const cfg = BOOKING_CONFIG[kind];
  const [time, setTime] = useState(null);
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (type, message, duration) =>
    setToast({ type, message, duration });

  const baseInputClass =
    "w-full border rounded-[8px] px-[14px] py-[11px] text-[14px] text-[#252525] placeholder-[#AAAAAA] focus:outline-none bg-white";
  const inputClass = (field) =>
    `${baseInputClass} ${
      errors[field]
        ? "border-red-500 focus:border-red-500"
        : "border-[#E0E0E0] focus:border-[#c41e3a]"
    }`;
  const labelClass = "block text-[13px] font-semibold text-[#252525] mb-[6px]";
  const sectionTitleClass =
    "text-[13px] font-bold tracking-[0.12em] uppercase text-[#1a1a1a] mb-[12px]";
  const requiredStar = <span className="text-[#c41e3a] ml-[2px]">*</span>;

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast(null);

    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd);

    // Honeypot — bots fill all visible fields; if this hidden one has a value
    // it's almost certainly a spam submission. Silently pretend success.
    if (data._botField) {
      showToast("success", "Thanks! Mia will be in touch shortly.", 1600);
      setTimeout(onClose, 1800);
      return;
    }

    const validationErrors = validateBooking({
      data,
      time,
      locationField: cfg.locationField,
      locationLabel: cfg.locationLabel,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      showToast(
        "error",
        "Please fill in the highlighted details correctly."
      );
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const summaryLines = [
      `Store: ${data.storename}`,
      `CVR: ${data.cvr || "—"}`,
      `${cfg.locationLabel}: ${data[cfg.locationField] || "—"}`,
      `Website / Instagram: ${data.website || "—"}`,
      `Categories: ${data.categories || "—"}`,
      `Products / week: ${data.products || "—"}`,
      `Preferred day: ${data.day || "—"}`,
      `Preferred time: ${time || "—"}`,
      "",
      `Notes: ${data.notes || "—"}`,
    ];

    const payload = {
      name: data.name,
      storename: data.storename,
      email: data.email,
      phone: data.phone || "",
      cvr: data.cvr || "",
      subject: cfg.subject,
      message: summaryLines.join("\n"),
      _botField: data._botField || "",
    };

    try {
      const res = await fetch("/api/contact-support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (result.status === 200) {
        showToast("success", "Thanks! Mia will be in touch shortly.", 1600);
        setTimeout(onClose, 1800);
      } else {
        // Server returned field-level errors → surface them inline.
        if (result.errors && typeof result.errors === "object") {
          setErrors(result.errors);
        }
        showToast(
          "error",
          result.error || "Something went wrong. Please try again."
        );
      }
    } catch {
      showToast(
        "error",
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toast toast={toast} onClose={() => setToast(null)} />

      <div className="px-[16px] sm:px-[32px] pt-[24px] sm:pt-[28px] pb-[16px] sm:pb-[20px] border-b border-[#F0F0F0] bg-white shrink-0">
        <button
          type="button"
          onClick={onBack}
          className="text-[14px] text-[#666666] hover:text-[#c41e3a] font-medium mb-[12px] flex items-center gap-[4px]"
        >
          ← Back
        </button>
        <div className="p-[14px] rounded-[10px] text-[14px] leading-[1.5] bg-[#fde8ed] text-[#1a1a1a] border border-[#f4c8d2]">
          <strong className="text-[#c41e3a]">{cfg.title}</strong> {cfg.description}
        </div>
      </div>

      <div
        className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-[16px] sm:px-[32px] py-[20px] sm:py-[24px]"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[20px]"
          noValidate
        >
          {/* Honeypot — hidden from real users, attracts bots */}
          <input
            type="text"
            name="_botField"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              opacity: 0,
            }}
          />

          <div>
            <h4 className={sectionTitleClass}>Your store</h4>
            <div className="flex flex-col gap-[12px]">
              <div>
                <label className={labelClass}>
                  Store name{requiredStar}
                </label>
                <input
                  type="text"
                  name="storename"
                  placeholder="The Good Stuff"
                  onChange={() => clearError("storename")}
                  aria-invalid={!!errors.storename}
                  className={inputClass("storename")}
                />
                <FieldError message={errors.storename} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
                <div>
                  <label className={labelClass}>CVR number</label>
                  <input
                    type="text"
                    name="cvr"
                    inputMode="numeric"
                    maxLength={8}
                    placeholder="12345678"
                    onChange={() => clearError("cvr")}
                    aria-invalid={!!errors.cvr}
                    className={inputClass("cvr")}
                  />
                  {errors.cvr ? (
                    <FieldError message={errors.cvr} />
                  ) : (
                    <p className="text-[12px] text-[#666666] mt-[4px]">
                      Used to pre-create your Ree account
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>
                    {cfg.locationLabel}
                    {requiredStar}
                  </label>
                  <input
                    type="text"
                    name={cfg.locationField}
                    placeholder={cfg.locationPlaceholder}
                    onChange={() => clearError(cfg.locationField)}
                    aria-invalid={!!errors[cfg.locationField]}
                    className={inputClass(cfg.locationField)}
                  />
                  <FieldError message={errors[cfg.locationField]} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Website or Instagram</label>
                <input
                  type="text"
                  name="website"
                  placeholder="@yourstore"
                  className={inputClass("website")}
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className={sectionTitleClass}>Contact</h4>
            <div className="flex flex-col gap-[12px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
                <div>
                  <label className={labelClass}>
                    Full name{requiredStar}
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Anna Nielsen"
                    onChange={() => clearError("name")}
                    aria-invalid={!!errors.name}
                    className={inputClass("name")}
                  />
                  <FieldError message={errors.name} />
                </div>
                <div>
                  <label className={labelClass}>Phone / WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+45 …"
                    onChange={() => clearError("phone")}
                    aria-invalid={!!errors.phone}
                    className={inputClass("phone")}
                  />
                  <FieldError message={errors.phone} />
                </div>
              </div>
              <div>
                <label className={labelClass}>
                  Business email{requiredStar}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="anna@yourstore.dk"
                  onChange={() => clearError("email")}
                  aria-invalid={!!errors.email}
                  className={inputClass("email")}
                />
                <FieldError message={errors.email} />
              </div>
            </div>
          </div>

          <div>
            <h4 className={sectionTitleClass}>Operations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
              <div>
                <label className={labelClass}>Categories</label>
                <input
                  type="text"
                  name="categories"
                  placeholder="fashion, kids, home…"
                  className={inputClass("categories")}
                />
              </div>
              <div>
                <label className={labelClass}>Products / week</label>
                <input
                  type="text"
                  name="products"
                  placeholder="~50"
                  onChange={() => clearError("products")}
                  aria-invalid={!!errors.products}
                  className={inputClass("products")}
                />
                <FieldError message={errors.products} />
              </div>
            </div>
          </div>

          <div>
            <h4 className={sectionTitleClass}>{cfg.daySectionTitle}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px]">
              <div>
                <label className={labelClass}>
                  Preferred day{requiredStar}
                </label>
                <select
                  name="day"
                  defaultValue=""
                  onChange={() => clearError("day")}
                  aria-invalid={!!errors.day}
                  className={inputClass("day")}
                >
                  <option value="" disabled>
                    Choose a day
                  </option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                </select>
                <FieldError message={errors.day} />
              </div>
              <div>
                <label className={labelClass}>
                  {cfg.timeLabel}
                  {requiredStar}
                </label>
                <div className="flex gap-[6px]">
                  {cfg.times.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => {
                        setTime(t);
                        clearError("time");
                      }}
                      className={`flex-1 px-[8px] py-[11px] rounded-[8px] border text-[14px] font-medium transition ${
                        time === t
                          ? "border-[#c41e3a] bg-[#fde8ed] text-[#c41e3a]"
                          : errors.time
                            ? "border-red-500 text-[#1a1a1a]"
                            : "border-[#E0E0E0] text-[#1a1a1a] hover:border-[#c41e3a]"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <FieldError message={errors.time} />
              </div>
            </div>
          </div>

          <div>
            <h4 className={sectionTitleClass}>{cfg.notesTitle}</h4>
            <textarea
              name="notes"
              rows={3}
              maxLength={1500}
              placeholder={cfg.notesPlaceholder}
              className={`${inputClass("notes")} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-semibold py-[14px] rounded-[8px] text-[15px] transition-colors disabled:opacity-60 cursor-pointer mt-[4px] shadow-[0_8px_20px_rgba(255,46,126,0.32)] hover:brightness-110"
            style={{ backgroundColor: "#FF2E7E" }}
          >
            {isSubmitting ? "Sending..." : cfg.submitLabel}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactSlider;
