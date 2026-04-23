"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSanityContent, t } from "../SanityProvider";

const DEFAULT_FAQS = [
  {
    question: "WHY USE 2HAND2GO IF WE ALREADY HAVE TOOLS?",
    answer: "Most tools solve one problem. 2hand2go connects your listing, stock, channels, and webstore into one flow starting from 1 picture. We don't replace what works in your store. We remove the manual work around it.",
  },
  {
    question: "IS THIS ONLY FOR SECONDHAND STORES?",
    answer: "Yes. 2hand2go is built specifically for secondhand businesses resale stores, consignment shops, vintage boutiques, and pre-loved specialists.",
  },
  {
    question: "DO I NEED TO CHANGE MY TEAM'S ROUTINE?",
    answer: "No new habits for your team. You only add the passwords for the channels you want to use and choose your webstore password. Start taking pictures or uploading on List and the rest runs automatically.",
  },
  {
    question: "HOW FAST CAN I GO LIVE?",
    answer: "List works from day one we handle your next product batch free so you can see it in your own store. 2hand2go Web launches in 3 days: fully branded, synced, and ready to sell.",
  },
  {
    question: "CAN I START WITH JUST LIST OR JUST WEB?",
    answer: "Yes. You can start with either solution and add the other later. Most stores use both together for the full 2hand2go setup List gets products shoppable, Web is where they sell.",
  },
  {
    question: "WHAT IF MY TEAM ISN'T TECHNICAL?",
    answer: "The only manual step is taking or uploading 1 picture. No developer brief, no complex configuration. If your team can send a picture, they can use 2hand2go.",
  },
  {
    question: "WHAT'S INCLUDED IN THE PLAN?",
    answer: "Your plan covers the full 2hand2go setup: listing automation, channel sync, consignor portal, and automatic payment splits. See the Pricing page for current plans and what each one includes.",
  },
];

const FAQSection = () => {
  const { homeContent } = useSanityContent();
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const faqs = homeContent?.faqItems?.length > 0 ? homeContent.faqItems : DEFAULT_FAQS;

  return (
    <section
      id="faq"
      className="py-[64px] sm:py-[80px] px-[16px] sm:px-[24px]"
      style={{ background: "radial-gradient(ellipse at center, #3d0a0a 0%, #1a0404 50%, #0d0101 100%)" }}
    >
      <div className="max-w-[896px] mx-auto">
        <div className="text-center mb-[40px]">
          <h2 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold leading-[1.1] text-white">
            {t(homeContent, "faqHeading", "FAQ")}
          </h2>
          <p className="text-[18px] pt-[12px] font-medium text-white">
            {t(homeContent, "faqSubheading", "Common questions answered")}
          </p>
        </div>

        <div className="flex flex-col gap-[20px]">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-[30px] overflow-hidden cursor-pointer"
              onClick={() => toggle(i)}
            >
              <div className="flex items-center justify-between min-h-[70px] sm:min-h-[90px] px-[16px] sm:px-[24px] md:px-[32px] py-[12px]">
                <span className="text-[#000] font-bold text-[16px] sm:text-[18px] tracking-wide pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <ChevronDown
                    size={32}
                    className="text-[#000] font-bold text-md transition-transform duration-300"
                    style={{ transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </div>
              </div>

              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndex === i ? "500px" : "0px" }}
              >
                <p className="text-[#555] text-md leading-normal font-semibold px-[16px] sm:px-[24px] md:px-[32px] pb-[20px]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
