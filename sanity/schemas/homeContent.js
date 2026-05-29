import { defineType, defineField } from "sanity";

// Helper to add "Default: ..." to description
const d = (defaultText) => `Default: "${defaultText}" — Clear field to restore default.`;

export default defineType({
  name: "homeContent",
  title: "Home Page Content",
  type: "document",
  groups: [
    { name: "retailerCta", title: "Retailer CTA" },
    { name: "problems", title: "Problem Carousel" },
    { name: "about", title: "About Team Section" },
    { name: "faq", title: "FAQ Section" },
    { name: "cta", title: "CTA Section" },
  ],
  // Pre-fill ALL fields when the document is first created
  initialValue: {
    retailerBody:
      "Not because secondhand stores did not want to sell online, but because every item is one of a kind, and listing unique stock across every channel by hand was too slow to be worth it. That bottleneck is finally gone. Two forces are now squeezing independent stores.",
    problems: [
      {
        _type: "object",
        title: "Time loss you can't measure",
        desc: "Minutes per product add up to whole days each month. You feel the overload, but you can't see where the hours go.",
      },
      {
        _type: "object",
        title: "No time to learn new systems",
        desc: "Every new tool promises to help but steals a week of setup. You need something that fits your current routine.",
      },
      {
        _type: "object",
        title: "Manual listing is too slow for unique items",
        desc: "Every secondhand product is one of a kind. Writing titles, descriptions, and prices one by one kills your pipeline.",
      },
      {
        _type: "object",
        title: "Physical and online stock out of sync",
        desc: "Selling the same item twice. Customers arriving for something already gone. Manual updates that are always behind.",
      },
      {
        _type: "object",
        title: "Admin kills your margin",
        desc: "Consignor splits, payments, reconciliation — the invisible work eats the profit on every sale.",
      },
    ],
    aboutBadge: "ABOUT US",
    aboutHeading: "Who we are",
    aboutParagraphs: [
      {
        _type: "object",
        text: "2hand2go was created around a simple belief: better consumption choices should not be difficult.",
      },
      {
        _type: "object",
        text: "The secondhand market already has the products. Beautiful, useful, high-quality items are already here. The problem is that they are often too hard to find, too slow to upload, and too complicated for stores to sell across several channels.",
      },
      {
        _type: "object",
        text: "We believe that prolonging the life of a product is one of the most practical ways to change consumption. But for secondhand to become a real first choice for consumers, it has to be as easy to buy as new.",
      },
      {
        _type: "object",
        text: "That is the mission behind 2hand2go.",
      },
      {
        _type: "object",
        text: "We help professional secondhand stores turn one product photo into a ready-to-sell item, with product information, labels, stock sync, consignor management, online listing, and a webstore working together in one place.",
      },
      {
        _type: "object",
        text: "Instead of asking stores to find separate tools, connect different providers, and manage several systems, we give them one simple setup designed for the reality of unique products.",
      },
      {
        _type: "object",
        text: "Our role is to make omnichannel secondhand selling easier, faster, and more accessible.",
      },
      {
        _type: "object",
        text: "Because when secondhand becomes easier to sell, it becomes easier to buy.",
      },
      {
        _type: "object",
        text: "And when it becomes easier to buy, it can become the first choice.",
      },
    ],
    faqHeading: "FAQ",
    faqSubheading: "Common questions answered",
    faqItems: [
      {
        _type: "object",
        question: "WHY USE 2HAND2GO IF WE ALREADY HAVE TOOLS?",
        answer:
          "Most tools solve one problem. 2hand2go connects your listing, stock, channels, and webstore into one flow starting from 1 picture. We don't replace what works in your store. We remove the manual work around it.",
      },
      {
        _type: "object",
        question: "IS THIS ONLY FOR SECONDHAND STORES?",
        answer:
          "Yes. 2hand2go is built specifically for secondhand businesses resale stores, consignment shops, vintage boutiques, and pre-loved specialists.",
      },
      {
        _type: "object",
        question: "DO I NEED TO CHANGE MY TEAM'S ROUTINE?",
        answer:
          "No new habits for your team. You only add the passwords for the channels you want to use and choose your webstore password. Start taking pictures or uploading on List and the rest runs automatically.",
      },
      {
        _type: "object",
        question: "HOW FAST CAN I GO LIVE?",
        answer:
          "List works from day one — we handle your next product batch free so you can see it in your own store. 2hand2go Web launches in 3 days: fully branded, synced, and ready to sell.",
      },
      {
        _type: "object",
        question: "CAN I START WITH JUST LIST OR JUST WEB?",
        answer:
          "Yes. You can start with either solution and add the other later. Most stores use both together for the full 2hand2go setup List gets products shoppable, Web is where they sell.",
      },
      {
        _type: "object",
        question: "WHAT IF MY TEAM ISN'T TECHNICAL?",
        answer:
          "The only manual step is taking or uploading 1 picture. No developer brief, no complex configuration. If your team can send a picture, they can use 2hand2go.",
      },
      {
        _type: "object",
        question: "WHAT'S INCLUDED IN THE PLAN?",
        answer:
          "Your plan covers the full 2hand2go setup: listing automation, channel sync, consignor portal, and automatic payment splits. See the Pricing page for current plans and what each one includes.",
      },
    ],
    ctaHeading:
      "Sell secondhand online, without extra work.",
    ctaContact: "Contact Mia",
    ctaPrimary: "Try with 1 picture",
    ctaSecondary: "Launch your webstore in 3 days",
    ctaQuote:
      "We built these tools because we needed them ourselves. Now we're sharing them with secondhand businesses who want to grow without burning out.",
    ctaQuoteAttribution: "— Founding Team",
    ctaPhone: "+000 000 0000",
    ctaEmail: "mia@le-stores.com",
  },
  fields: [
    // ── Retailer CTA ──
    defineField({
      name: "retailerBody",
      title: "Body Text",
      type: "text",
      group: "retailerCta",
      rows: 2,
      description: d(
        "Not because secondhand stores did not want to sell online, but because every item is one of a kind, and listing unique stock across every channel by hand was too slow to be worth it. That bottleneck is finally gone. Two forces are now squeezing independent stores."
      ),
    }),

    // ── Problem Carousel ──
    defineField({
      name: "problems",
      title: "Problem Slides",
      type: "array",
      group: "problems",
      description: "Remove all items to restore default 5 slides.",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "desc", title: "Description", type: "text", rows: 2 },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),

    // ── About Team Section ──
    defineField({
      name: "aboutBadge",
      title: "Badge Text",
      type: "string",
      group: "about",
      description: d("ABOUT US"),
    }),
    defineField({
      name: "aboutHeading",
      title: "Heading",
      type: "string",
      group: "about",
      description: d("Who we are"),
    }),
    defineField({
      name: "aboutParagraphs",
      title: "Paragraphs",
      type: "array",
      group: "about",
      description: "Remove all items to restore the default story text.",
      of: [
        {
          type: "object",
          fields: [{ name: "text", title: "Paragraph", type: "text", rows: 3 }],
          preview: { select: { title: "text" } },
        },
      ],
    }),

    // ── FAQ Section ──
    defineField({
      name: "faqHeading",
      title: "Heading",
      type: "string",
      group: "faq",
      description: d("FAQ"),
    }),
    defineField({
      name: "faqSubheading",
      title: "Sub-heading",
      type: "string",
      group: "faq",
      description: d("Common questions answered"),
    }),
    defineField({
      name: "faqItems",
      title: "FAQ Items",
      type: "array",
      group: "faq",
      description: "Remove all items to restore default 7 Q&As.",
      of: [
        {
          type: "object",
          fields: [
            { name: "question", title: "Question", type: "string" },
            { name: "answer", title: "Answer", type: "text", rows: 3 },
          ],
          preview: { select: { title: "question" } },
        },
      ],
    }),

    // ── CTA Section ──
    defineField({
      name: "ctaHeading",
      title: "Heading",
      type: "string",
      group: "cta",
      description: d("Sell secondhand online, without extra work."),
    }),
    defineField({
      name: "ctaContact",
      title: "Contact Button Text",
      type: "string",
      group: "cta",
      description: d("Contact Mia"),
    }),
    defineField({
      name: "ctaPrimary",
      title: "Primary Button Text",
      type: "string",
      group: "cta",
      description: d("Try with 1 picture"),
    }),
    defineField({
      name: "ctaSecondary",
      title: "Secondary Button Text",
      type: "string",
      group: "cta",
      description: d("Launch your webstore in 3 days"),
    }),
    defineField({
      name: "ctaQuote",
      title: "Quote",
      type: "text",
      group: "cta",
      rows: 2,
      description: d("We built these tools because we needed them ourselves..."),
    }),
    defineField({
      name: "ctaQuoteAttribution",
      title: "Quote Attribution",
      type: "string",
      group: "cta",
      description: d("— Founding Team"),
    }),
    defineField({
      name: "ctaPhone",
      title: "Phone Number",
      type: "string",
      group: "cta",
      description: d("+000 000 0000"),
    }),
    defineField({
      name: "ctaEmail",
      title: "Email",
      type: "string",
      group: "cta",
      description: d("mia@le-stores.com"),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page Content" };
    },
  },
});
