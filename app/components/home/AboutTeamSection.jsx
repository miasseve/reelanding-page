"use client";

import { useSanityContent, t } from "../SanityProvider";

const PINK = "#FF2E7E";

const DEFAULT_PARAGRAPHS = [
  "2hand2go was created around a simple belief: better consumption choices should not be difficult.",
  "The secondhand market already has the products. Beautiful, useful, high-quality items are already here. The problem is that they are often too hard to find, too slow to upload, and too complicated for stores to sell across several channels.",
  "We believe that prolonging the life of a product is one of the most practical ways to change consumption. But for secondhand to become a real first choice for consumers, it has to be as easy to buy as new.",
  "That is the mission behind 2hand2go.",
  "We help professional secondhand stores turn one product photo into a ready-to-sell item, with product information, labels, stock sync, consignor management, online listing, and a webstore working together in one place.",
  "Instead of asking stores to find separate tools, connect different providers, and manage several systems, we give them one simple setup designed for the reality of unique products.",
  "Our role is to make omnichannel secondhand selling easier, faster, and more accessible.",
  "Because when secondhand becomes easier to sell, it becomes easier to buy.",
  "And when it becomes easier to buy, it can become the first choice.",
];

const AboutTeamSection = () => {
  const { images, homeContent } = useSanityContent();

  const teamImg =
    images["about-team-photo"] || {
      src: "/Icons/team-photo.png",
      alt: "The 2hand2go team gathered on the steps outside the office",
    };

  // Use CMS paragraphs when present, otherwise fall back to the defaults.
  const cmsParagraphs = (homeContent?.aboutParagraphs || [])
    .map((p) => p?.text?.trim())
    .filter(Boolean);
  const paragraphs = cmsParagraphs.length ? cmsParagraphs : DEFAULT_PARAGRAPHS;

  return (
    <section
      id="about"
      className="scroll-mt-[80px] bg-white px-4 sm:px-6 py-[60px] sm:py-[80px] md:py-[40px]"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Centered ABOUT TEAM badge */}
        <div className="flex justify-center mb-[40px] sm:mb-[56px]">
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-[5px] rounded-full"
            style={{
              backgroundColor: "rgba(255,46,126,0.12)",
              color: PINK,
            }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full"
              style={{ backgroundColor: PINK }}
            />
            {t(homeContent, "aboutBadge", "ABOUT TEAM")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left column — team photo */}
          <div className="w-full overflow-hidden rounded-[18px]">
            <img
              src={teamImg.src}
              alt={teamImg.alt}
              className="w-full h-full object-cover md:sticky md:top-[100px]"
            />
          </div>

          {/* Right column — story */}
          <div className="text-left">
            <h2
              className="text-[#1a1a1a] text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-playfair)", fontWeight: 700 }}
            >
              {t(homeContent, "aboutHeading", "Who we are")}
            </h2>

            <div className="space-y-5">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[#3a3a3a] text-[16px] sm:text-[17px] leading-[1.65]"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
