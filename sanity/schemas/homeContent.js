import { defineType, defineField } from "sanity";

// Helper to add "Default: ..." to description
const d = (defaultText) => `Default: "${defaultText}" — Clear field to restore default.`;

export default defineType({
  name: "homeContent",
  title: "Home Page Content",
  type: "document",
  groups: [
    { name: "card", title: "Info Card (below Video)" },
    { name: "retailerCta", title: "Retailer CTA" },
    { name: "problems", title: "Problem Carousel" },
    { name: "process", title: "Process Section" },
    { name: "tools", title: "Tools Section" },
    { name: "help", title: "Who We Help" },
    { name: "team", title: "Team Section" },
    { name: "faq", title: "FAQ Section" },
    { name: "cta", title: "CTA Section" },
  ],
  // Pre-fill ALL fields when the document is first created
  initialValue: {
    // ── Info Card (below Video) ──
    cardEyebrow: "THE 2HAND2GO WORKFLOW",
    cardHeadline: "Zero intake admin. 1 picture = full workflow.",
    cardBody:
      "Expert in unique product handling. We automate your workflow from 1 picture: multichannel listing, synchronisation and admin. Save 13 minutes per item and sell across every channel with one action.",
    cardCtaPrimary: "Start for free",
    cardCtaSecondary: "How it works",
    cardReassurance:
      "We handle your next product batch free, so you can see how fast and simple it is in your own store.",
    cardLongReassurance:
      "No new habits for your team. You only add the passwords for the channels you want to use and choose your webstore password. Start taking pictures or uploading on List and the rest runs automatically.",
    cardStats: [
      { _type: "object", value: "13×", label: "less listing workload" },
      { _type: "object", value: "20×", label: "less work with web listing" },
      { _type: "object", value: "1", label: "picture per product" },
    ],
    retailerHeading:
      "Nothing changes in your store routine. The work just gets faster.",
    retailerBody:
      "No new habits for your team. You only add the passwords for the channels you want to use and choose your webstore password. Start taking pictures or uploading on List and the rest runs automatically.",
    retailerCta: "Book Mia now",
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
        desc: "Every secondhand product is one-of-a-kind. Writing titles, descriptions, and prices one by one kills your pipeline.",
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
    processHeading: "Just take or upload 1 picture. The rest is handled automatically.",
    processSubheading: "From picture to shoppable in one flow.",
    processSteps: [
      {
        _type: "object",
        label: "Step 1",
        title: "Take or upload 1 picture",
        description: "Snap a quick photo of the product. That's your only manual step.",
        deliverable: "Your single action.",
      },
      {
        _type: "object",
        label: "Step 2",
        title: "Get a ready product listing",
        description: "Title, description, category, and price suggestions — generated automatically.",
        deliverable: "Ready to publish.",
      },
      {
        _type: "object",
        label: "Step 3",
        title: "Go live instantly",
        description: "Product is published across your connected channels in one click.",
        deliverable: "Shoppable everywhere.",
      },
      {
        _type: "object",
        label: "Step 4",
        title: "Stay synced automatically",
        description: "Stock updates in real time across every channel. No double-selling.",
        deliverable: "Always accurate.",
      },
      {
        _type: "object",
        label: "Step 5",
        title: "Complete the sale with less admin",
        description: "Payments, consignor splits, and reporting handled in the background.",
        deliverable: "More margin, less work.",
      },
    ],
    processQuote:
      "The customer action is only the picture. Everything else is handled automatically.",
    processCta: "Try with 1 picture",
    toolsLabel: "WHAT CHANGES FOR YOU",
    toolsHeading: "Less manual work. More sold products.",
    toolsSubheading:
      "Reduce your workload by up to 13× on listing and up to 20× when web listing is included.",
    toolCards: [
      {
        _type: "object",
        title: "One picture, shoppable everywhere",
        description:
          "Take or upload 1 picture. The product is shoppable across every channel you use — no extra steps from your team.",
      },
      {
        _type: "object",
        title: "Stock stays in sync automatically",
        description:
          "Physical and online inventory update in real time. No double-selling, no manual updates, no stale listings.",
      },
      {
        _type: "object",
        title: "Consignor handling without the DMs",
        description:
          "Consignors access their own information directly. You stop being the middle person for every status update.",
      },
      {
        _type: "object",
        title: "Split payments run themselves",
        description:
          "Accounting and consignor splits are automatic. Less admin, higher margin, cleaner reporting.",
      },
    ],
    helpLabel: "OUR SOLUTIONS",
    helpHeading: "Two solutions. One secondhand workflow.",
    helpDescription:
      "Use List to get products shoppable. Add Web to sell through your own branded webstore. Use both together for the full 2hand2go setup.",
    helpBody:
      "For secondhand and resale stores, we have ready-made tools that deploy in hours.",
    helpCategories: [
      "Secondhand & vintage stores",
      "Resale boutiques",
      "Consignment stores",
      "Pre-loved specialists",
    ],
    helpQuote:
      "No new habits for your team. You only add the passwords for the channels you want to use and choose your webstore password. Start taking pictures or uploading on List and the rest runs automatically.",
    teamHeading: "Secondhand people. Tech people. One team.",
    teamSubheading:
      "We are secondhand professionals and engineers who built the tools we wished existed.",
    teamExpertise: [
      "Secondhand commerce",
      "Resale operations",
      "E-commerce",
      "Software engineering",
      "Merchandising",
      "Automation",
    ],
    teamQuote:
      "We've spent years on both sides — running secondhand stores and building software. We know what breaks and we know how to fix it.",
    teamQuoteAttribution: "— Founding Team",
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
    ctaPrimary: "Try with 1 picture",
    ctaSecondary: "Launch your webstore in 3 days",
    ctaQuote:
      "We built these tools because we needed them ourselves. Now we're sharing them with secondhand businesses who want to grow without burning out.",
    ctaQuoteAttribution: "— Founding Team",
    ctaPhone: "+000 000 0000",
    ctaEmail: "mia@le-stores.com",
  },
  fields: [
    // ── Info Card (below Video) ──
    defineField({
      name: "cardEyebrow",
      title: "Eyebrow Tag",
      type: "string",
      group: "card",
      description: d("THE 2HAND2GO WORKFLOW"),
    }),
    defineField({
      name: "cardHeadline",
      title: "Headline",
      type: "string",
      group: "card",
      description: d("Zero intake admin. 1 picture = full workflow."),
    }),
    defineField({
      name: "cardBody",
      title: "Body Text",
      type: "text",
      group: "card",
      rows: 3,
      description: d("Expert in unique product handling. We automate your workflow from 1 picture..."),
    }),
    defineField({
      name: "cardCtaPrimary",
      title: "Primary Button Text",
      type: "string",
      group: "card",
      description: d("Start for free"),
    }),
    defineField({
      name: "cardCtaSecondary",
      title: "Secondary Button Text",
      type: "string",
      group: "card",
      description: d("How it works"),
    }),
    defineField({
      name: "cardReassurance",
      title: "Reassurance Line (below buttons)",
      type: "text",
      group: "card",
      rows: 2,
      description: d("We handle your next product batch free..."),
    }),
    defineField({
      name: "cardLongReassurance",
      title: "Long Reassurance Line (bottom)",
      type: "text",
      group: "card",
      rows: 3,
      description: d("No new habits for your team..."),
    }),
    defineField({
      name: "cardStats",
      title: "Stats",
      type: "array",
      group: "card",
      description: "Default: 13× / 20× / 1. Remove all items to restore defaults.",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
    }),

    // ── Retailer CTA ──
    defineField({
      name: "retailerHeading",
      title: "Heading",
      type: "text",
      group: "retailerCta",
      rows: 2,
      description: d("Nothing changes in your store routine. The work just gets faster."),
    }),
    defineField({
      name: "retailerBody",
      title: "Body Text",
      type: "text",
      group: "retailerCta",
      rows: 2,
      description: d("No new habits for your team..."),
    }),
    defineField({
      name: "retailerCta",
      title: "Button Text",
      type: "string",
      group: "retailerCta",
      description: d("Book Mia now"),
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

    // ── Process Section ──
    defineField({
      name: "processHeading",
      title: "Heading",
      type: "string",
      group: "process",
      description: d("From picture to shoppable in one flow."),
    }),
    defineField({
      name: "processSubheading",
      title: "Sub-heading",
      type: "string",
      group: "process",
      description: d("From picture to shoppable in one flow."),
    }),
    defineField({
      name: "processSteps",
      title: "Steps",
      type: "array",
      group: "process",
      description: "Remove all items to restore default 3 steps.",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label (e.g. Step 1)", type: "string" },
            { name: "title", title: "Title", type: "string" },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 2,
            },
            { name: "deliverable", title: "Deliverable", type: "string" },
          ],
          preview: { select: { title: "title", subtitle: "label" } },
        },
      ],
    }),
    defineField({
      name: "processQuote",
      title: "Quote",
      type: "string",
      group: "process",
      description: d(
        "The customer action is only the picture. Everything else is handled automatically."
      ),
    }),
    defineField({
      name: "processCta",
      title: "Button Text",
      type: "string",
      group: "process",
      description: d("Try with 1 picture"),
    }),

    // ── Tools Section ──
    defineField({
      name: "toolsLabel",
      title: "Section Label",
      type: "string",
      group: "tools",
      description: d("WHAT CHANGES FOR YOU"),
    }),
    defineField({
      name: "toolsHeading",
      title: "Heading",
      type: "string",
      group: "tools",
      description: d("Less manual work. More sold products."),
    }),
    defineField({
      name: "toolsSubheading",
      title: "Sub-heading",
      type: "text",
      group: "tools",
      rows: 2,
      description: d("Reduce your workload by up to 13× on listing and up to 20× when web listing is included."),
    }),
    defineField({
      name: "toolCards",
      title: "Tool Cards",
      type: "array",
      group: "tools",
      description: "Remove all items to restore default 4 cards.",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Title", type: "string" },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            },
            {
              name: "image",
              title: "Card Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "learnMoreText",
              title: "Button Text",
              type: "string",
              description: 'Default: "Learn More"',
            },
          ],
          preview: { select: { title: "title", media: "image" } },
        },
      ],
    }),

    // ── Who We Help ──
    defineField({
      name: "helpLabel",
      title: "Section Label",
      type: "string",
      group: "help",
      description: d("OUR SOLUTIONS"),
    }),
    defineField({
      name: "helpHeading",
      title: "Heading",
      type: "string",
      group: "help",
      description: d("Two solutions. One secondhand workflow."),
    }),
    defineField({
      name: "helpDescription",
      title: "Description",
      type: "text",
      group: "help",
      rows: 3,
      description: d("Use List to get products shoppable. Add Web to sell through your own branded webstore..."),
    }),
    defineField({
      name: "helpBody",
      title: "Body Text",
      type: "text",
      group: "help",
      rows: 3,
      description: d("For secondhand and resale stores, we have ready-made tools that deploy in hours."),
    }),
    defineField({
      name: "helpCategories",
      title: "Categories",
      type: "array",
      group: "help",
      description: "Remove all items to restore default 7 categories.",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "helpQuote",
      title: "Quote",
      type: "string",
      group: "help",
      description: d("No new habits for your team..."),
    }),

    // ── Team Section ──
    defineField({
      name: "teamHeading",
      title: "Heading",
      type: "string",
      group: "team",
      description: d("Secondhand people. Tech people. One team."),
    }),
    defineField({
      name: "teamSubheading",
      title: "Sub-heading",
      type: "string",
      group: "team",
      description: d("We are secondhand professionals and engineers who built the tools we wished existed."),
    }),
    defineField({
      name: "teamExpertise",
      title: "Expertise Labels",
      type: "array",
      group: "team",
      description: "Remove all items to restore default 6 labels.",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "teamQuote",
      title: "Quote",
      type: "text",
      group: "team",
      rows: 2,
      description: d("We've spent years on both sides — running secondhand stores and building software..."),
    }),
    defineField({
      name: "teamQuoteAttribution",
      title: "Quote Attribution",
      type: "string",
      group: "team",
      description: d("— Founding Team"),
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
      name: "ctaPrimary",
      title: "Primary Button Text",
      type: "string",
      group: "cta",
      description: d("Book Mia now"),
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
