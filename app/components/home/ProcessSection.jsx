"use client";

import { Camera, FileText, Radio, RefreshCw, ShoppingBag } from "lucide-react";
import { useSanityContent, t } from "../SanityProvider";
import ButtonLink from "../ButtonLink";

const DEFAULT_STEPS = [
  {
    label: "Step 1",
    title: "Take or upload 1 picture",
    description: "Snap a quick photo of the product. That's your only manual step.",
    deliverable: "Your single action.",
  },
  {
    label: "Step 2",
    title: "Get a ready product listing",
    description: "Title, description, category, and price suggestions — generated automatically.",
    deliverable: "Ready to publish.",
  },
  {
    label: "Step 3",
    title: "Go live instantly",
    description: "Product is published across your connected channels in one click.",
    deliverable: "Shoppable everywhere.",
  },
  {
    label: "Step 4",
    title: "Stay synced automatically",
    description: "Stock updates in real time across every channel. No double-selling.",
    deliverable: "Always accurate.",
  },
  {
    label: "Step 5",
    title: "Complete the sale with less admin",
    description: "Payments, consignor splits, and reporting handled in the background.",
    deliverable: "More margin, less work.",
  },
];

const ICONS = [
  <Camera key="c" size={25} className="text-purple-500" />,
  <FileText key="f" size={25} className="text-purple-500" />,
  <Radio key="r" size={25} className="text-purple-500" />,
  <RefreshCw key="rf" size={25} className="text-purple-500" />,
  <ShoppingBag key="sb" size={25} className="text-purple-500" />,
];

export default function ProcessSection() {
  const { homeContent } = useSanityContent();
  const steps = homeContent?.processSteps?.length > 0 ? homeContent.processSteps : DEFAULT_STEPS;

  return (
    <section className="bg-white py-[48px] sm:py-[64px] md:py-[96px] px-[16px] sm:px-[24px] lg:mx-[64px] lg:my-[80px]">
      <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[77%] mx-auto text-center">
        <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold leading-[32px] sm:leading-[38px] md:leading-[43px] text-[#252525]">
          {t(homeContent, "processHeading", "From picture to shoppable — in one flow.")}
        </h2>

        <p className="text-[15px] sm:text-[16px] md:text-[18px] font-medium mt-[12px] leading-[24px] sm:leading-[27px] md:leading-[30px] text-[#434343]">
          {t(homeContent, "processSubheading", "Just take or upload 1 picture. The rest is handled automatically.")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 gap-[16px] sm:gap-[20px] mt-[40px] sm:mt-[48px]">
          {steps.map((item, index) => {
            const total = steps.length;
            const smRem = total % 2;
            const lgRem = total % 3;
            const smOffset = smRem === 1 && index === total - 1 ? "sm:col-start-2" : "";
            let lgOffset = "";
            if (lgRem === 1 && index === total - 1) lgOffset = "lg:col-start-3";
            else if (lgRem === 2 && index === total - 2) lgOffset = "lg:col-start-2";
            else if (lgRem === 2 && index === total - 1) lgOffset = "lg:col-start-4";
            return (
            <div
              key={index}
              className={`bg-white flex flex-col w-full rounded-[20px] p-[24px] text-left transition-all duration-300 ease-out shadow-[0px_0px_5px_rgba(0,0,0,0.1)] hover:-translate-y-2 hover:shadow-[0px_8px_24px_rgba(124,58,237,0.25)] active:-translate-y-2 active:shadow-[0px_8px_24px_rgba(124,58,237,0.25)] sm:col-span-2 lg:col-span-2 ${smOffset} ${lgOffset}`}
            >
              <div>
                <div className="w-[60px] h-[60px] flex items-center justify-center rounded-[15px] bg-purple-50 mb-[16px]">
                  {ICONS[index] || ICONS[0]}
                </div>
                <p className="gradient-text text-[16px] font-medium">
                  {item.label || `Step ${index + 1}`}
                </p>
                <h3 className="text-[18px] mt-[8px]">{item.title}</h3>
              </div>
              <div className="mt-[23px]">
                <p className="text-[16px] leading-[18px] text-[#252525] min-h-[70px]">
                  {item.description || item.desc}
                </p>
                <div className="border-t border-[#D9D9D9] mt-[16px] pt-[16px] text-[14px]">
                  <span className="font-semibold">Deliverable:</span>{" "}
                  <span className="text-[#434343]">{item.deliverable}</span>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-[40px] sm:mt-[48px] w-full">
          <div
            className="border-l-8 border-purple-500 px-[20px] sm:px-[32px] py-[16px] sm:py-[20px] text-gray-600 italic text-[16px] sm:text-[18px] font-medium w-full text-left"
            style={{ background: "linear-gradient(to right, #f5f3ff, #ffffff)" }}
          >
            &quot;{t(homeContent, "processQuote", "The customer action is only the picture. Everything else is handled automatically.")}&quot;
          </div>
        </div>

        <ButtonLink href="https://re-e.dk/">
          <button className="mt-[24px] sm:mt-[32px] gradient-btn cursor-pointer text-white px-[24px] sm:px-[32px] py-[12px] rounded-full font-medium transition">
            {t(homeContent, "processCta", "Try with 1 picture")}
          </button>
        </ButtonLink>
      </div>
    </section>
  );
}
