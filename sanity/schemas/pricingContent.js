import { defineType, defineField } from "sanity";

const d = (defaultText) => `Default: "${defaultText}" — Clear field to restore default.`;

export default defineType({
  name: "pricingContent",
  title: "Pricing Section Content",
  type: "document",
  groups: [
    { name: "header", title: "Section Header" },
    { name: "list", title: "2hand2list Plans" },
    { name: "web", title: "2hand2web Plans" },
  ],
  initialValue: {
    pricingHeading: "Choose the plan that fits",
    pricingSubheading: "Simple pricing. Cancel anytime. No hidden fees.",
    listTabLabel: "2hand2list",
    webTabLabel: "2hand2web",
    ctaUrl: "https://re-e.dk/try/subscription-plan",

    listPlans: [
      {
        _type: "object",
        eyebrow: "PER PRODUCT",
        title: "Pay as you go",
        description: "No monthly commitment. Perfect for trying the platform.",
        price: "10",
        priceSuffix: "DKK",
        priceNote: "per product · no monthly fees",
        ctaLabel: "Start",
        ctaStyle: "outline",
        popular: false,
        features: ["AI listing generation", "Barcode label", "One channel publish"],
      },
      {
        _type: "object",
        eyebrow: "UP TO 2 USERS",
        title: "Basic",
        description: "Up to 300 products per month. The sweet spot for growing stores.",
        price: "390",
        priceSuffix: "DKK",
        priceNote: "per month",
        ctaLabel: "Get Basic",
        ctaStyle: "filled",
        popular: true,
        features: [
          "Entire product catalogue",
          "Barcodes with one swipe",
          "Designed staff workflow",
          "Safe payment processing",
        ],
      },
      {
        _type: "object",
        eyebrow: "UP TO 5 USERS",
        title: "Pro",
        description:
          "Up to 1,000 products per month. For established multi-channel operations.",
        price: "1,990",
        priceSuffix: "DKK",
        priceNote: "per month",
        ctaLabel: "Get Pro",
        ctaStyle: "filled",
        popular: false,
        features: [
          "Ready listing across channels",
          "Automatic stock sync",
          "Connect via API to your systems",
          "Priority support",
        ],
      },
    ],

    webHeadingLead: "Your webstore ready in",
    webHeadingAccent: "3 days",
    webDescription:
      "Already have a webstore? Connect it to 2hand2list and it'll handle the workflow synchronisation automatically.",

    webBrandedEyebrow: "WEBSTORE",
    webBrandedTitle: "Your branded online store",
    webBrandedSub: "5 users · 300 products/month",
    webBrandedStandardTag: "STANDARD",
    webBrandedStandardSub: "Pay monthly, low upfront",
    webBrandedStandardPrice: "4,800",
    webBrandedStandardSuffix: "DKK / month",
    webBrandedStandardNote: "+ 4% per transaction",
    webBrandedCustomTag: "CUSTOM BUILD",
    webBrandedCustomSub: "Pay once, zero fees forever",
    webBrandedCustomPrice: "35,000",
    webBrandedCustomSuffix: "DKK / once",
    webBrandedCustomNote: "Zero transaction fees",
    webBrandedFeatures: [
      "Basic webstore with your logo",
      "Runs automatically with 2hand2list",
      "No developers needed — ready in 3 days",
    ],

    webConnectPlans: [
      {
        _type: "object",
        tag: "BASIC",
        sub: "2 users · 300 products / month",
        price: "3,200",
        suffix: "DKK",
        note: "per month",
        features: ["Core listing workflow", "Auto-sync with your webstore"],
      },
      {
        _type: "object",
        tag: "PRO",
        sub: "5 users · 1,000 products / month",
        price: "6,000",
        suffix: "DKK",
        note: "one-time",
        features: [
          "Everything in Basic",
          "Scale to 1,000 products/month",
          "Priority support",
        ],
      },
    ],
  },

  fields: [
    // ── Section Header ──
    defineField({
      name: "pricingHeading",
      title: "Section Heading",
      type: "string",
      group: "header",
      description: d("Choose the plan that fits"),
    }),
    defineField({
      name: "pricingSubheading",
      title: "Sub-heading",
      type: "string",
      group: "header",
      description: d("Simple pricing. Cancel anytime. No hidden fees."),
    }),
    defineField({
      name: "listTabLabel",
      title: "List Tab Label",
      type: "string",
      group: "header",
      description: d("2hand2list"),
    }),
    defineField({
      name: "webTabLabel",
      title: "Web Tab Label",
      type: "string",
      group: "header",
      description: d("2hand2web"),
    }),
    defineField({
      name: "ctaUrl",
      title: "CTA URL (where every plan button goes)",
      type: "url",
      group: "header",
      description: d("https://re-e.dk/try/subscription-plan"),
    }),

    // ── 2hand2list Plans ──
    defineField({
      name: "listPlans",
      title: "Plans",
      type: "array",
      group: "list",
      description: "Three plan cards for the 2hand2list tab.",
      of: [
        {
          type: "object",
          fields: [
            { name: "eyebrow", title: "Eyebrow (e.g. UP TO 2 USERS)", type: "string" },
            { name: "title", title: "Plan Title", type: "string" },
            { name: "description", title: "Description", type: "text", rows: 2 },
            { name: "price", title: "Price (number text)", type: "string" },
            { name: "priceSuffix", title: "Price Suffix (e.g. DKK)", type: "string" },
            { name: "priceNote", title: "Price Note (small line under price)", type: "string" },
            { name: "ctaLabel", title: "CTA Button Label", type: "string" },
            {
              name: "ctaStyle",
              title: "CTA Style",
              type: "string",
              options: { list: ["filled", "outline"], layout: "radio" },
            },
            { name: "popular", title: "Mark as Popular?", type: "boolean" },
            { name: "features", title: "Features", type: "array", of: [{ type: "string" }] },
          ],
          preview: { select: { title: "title", subtitle: "eyebrow" } },
        },
      ],
    }),

    // ── 2hand2web ──
    defineField({
      name: "webHeadingLead",
      title: "Web Heading — Lead",
      type: "string",
      group: "web",
      description: d("Your webstore ready in"),
    }),
    defineField({
      name: "webHeadingAccent",
      title: "Web Heading — Accent (underlined, pink)",
      type: "string",
      group: "web",
      description: d("3 days"),
    }),
    defineField({
      name: "webDescription",
      title: "Web Description",
      type: "text",
      group: "web",
      rows: 3,
      description: d(
        "Already have a webstore? Connect it to 2hand2list and it'll handle the workflow synchronisation automatically."
      ),
    }),

    // ── Branded Webstore card ──
    defineField({
      name: "webBrandedEyebrow",
      title: "Branded Card — Eyebrow",
      type: "string",
      group: "web",
      description: d("WEBSTORE"),
    }),
    defineField({
      name: "webBrandedTitle",
      title: "Branded Card — Title",
      type: "string",
      group: "web",
      description: d("Your branded online store"),
    }),
    defineField({
      name: "webBrandedSub",
      title: "Branded Card — Sub-line",
      type: "string",
      group: "web",
      description: d("5 users · 300 products/month"),
    }),

    defineField({
      name: "webBrandedStandardTag",
      title: "STANDARD — Tag",
      type: "string",
      group: "web",
      description: d("STANDARD"),
    }),
    defineField({
      name: "webBrandedStandardSub",
      title: "STANDARD — Sub-line",
      type: "string",
      group: "web",
      description: d("Pay monthly, low upfront"),
    }),
    defineField({
      name: "webBrandedStandardPrice",
      title: "STANDARD — Price",
      type: "string",
      group: "web",
      description: d("4,800"),
    }),
    defineField({
      name: "webBrandedStandardSuffix",
      title: "STANDARD — Suffix",
      type: "string",
      group: "web",
      description: d("DKK / month"),
    }),
    defineField({
      name: "webBrandedStandardNote",
      title: "STANDARD — Note",
      type: "string",
      group: "web",
      description: d("+ 4% per transaction"),
    }),

    defineField({
      name: "webBrandedCustomTag",
      title: "CUSTOM BUILD — Tag",
      type: "string",
      group: "web",
      description: d("CUSTOM BUILD"),
    }),
    defineField({
      name: "webBrandedCustomSub",
      title: "CUSTOM BUILD — Sub-line",
      type: "string",
      group: "web",
      description: d("Pay once, zero fees forever"),
    }),
    defineField({
      name: "webBrandedCustomPrice",
      title: "CUSTOM BUILD — Price",
      type: "string",
      group: "web",
      description: d("35,000"),
    }),
    defineField({
      name: "webBrandedCustomSuffix",
      title: "CUSTOM BUILD — Suffix",
      type: "string",
      group: "web",
      description: d("DKK / once"),
    }),
    defineField({
      name: "webBrandedCustomNote",
      title: "CUSTOM BUILD — Note",
      type: "string",
      group: "web",
      description: d("Zero transaction fees"),
    }),

    defineField({
      name: "webBrandedFeatures",
      title: "Branded Card — Features",
      type: "array",
      group: "web",
      of: [{ type: "string" }],
      description: "Feature list under the Branded Card.",
    }),

    // ── Connect Plans (BASIC + PRO) ──
    defineField({
      name: "webConnectPlans",
      title: "Connect-your-webstore Plans (BASIC + PRO)",
      type: "array",
      group: "web",
      description: "Two stacked cards in the right column of the web tab.",
      of: [
        {
          type: "object",
          fields: [
            { name: "tag", title: "Tag (BASIC / PRO)", type: "string" },
            { name: "sub", title: "Sub-line", type: "string" },
            { name: "price", title: "Price", type: "string" },
            { name: "suffix", title: "Suffix (DKK)", type: "string" },
            { name: "note", title: "Note (per month / one-time)", type: "string" },
            { name: "features", title: "Features", type: "array", of: [{ type: "string" }] },
          ],
          preview: { select: { title: "tag", subtitle: "price" } },
        },
      ],
    }),
  ],

  preview: {
    prepare() {
      return { title: "Pricing Section Content" };
    },
  },
});
