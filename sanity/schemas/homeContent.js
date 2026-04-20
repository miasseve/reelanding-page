import { defineType, defineField } from "sanity";

// Helper to add "Default: ..." to description
const d = (defaultText) => `Default: "${defaultText}" — Clear field to restore default.`;

export default defineType({
  name: "homeContent",
  title: "Home Page Content",
  type: "document",
  groups: [
    { name: "hero", title: "Hero Section" },
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
    heroEyebrow: "2hand2go",
    heroHeadline: "WE AUTOMATE WHAT SLOWS YOU DOWN. SO YOU CAN GROW.",
    heroSubheadline:
      "We Build Automations That Fix What's Blocking Your Growth — Even The Problems You Don't See.",
    heroStats: [
      { _type: "object", value: "95%", label: "less listing time" },
      { _type: "object", value: "+30%", label: "average revenue increase" },
      { _type: "object", value: "1", label: "minute per product" },
    ],
    heroCtaPrimary: "Book a free audit →",
    heroCtaSecondary: "How we work",
    retailerHeading:
      "Most Retailers Lose Time And Money To Manual Work — They Just Don't Know How Much.",
    retailerBody:
      "Every hour spent on repetitive tasks is an hour not spent selling and growing. Most of this can be automated.",
    retailerCta: "Get a free audit →",
    problems: [
      {
        _type: "object",
        title: "Products sitting unlisted while customers look elsewhere",
        desc: "Every day an item isn't live is a day it can't sell. Manual listing slows your entire revenue cycle.",
      },
      {
        _type: "object",
        title: "Stock out of sync across channels",
        desc: "Selling the same item twice. Customers arriving for something already gone. Manual updates that are always behind.",
      },
      {
        _type: "object",
        title: "Hidden admin crushing your team's capacity",
        desc: "Before we audit a store, we calculate the real cost. It's almost always higher than the owner expects.",
      },
      {
        _type: "object",
        title: "Growth capped by process, not potential",
        desc: "You can't scale what you can't automate. We find the ceiling and remove it.",
      },
      {
        _type: "object",
        title: "Tools that don't talk to each other",
        desc: "Most retailers have tools but they weren't built for your workflow and no one is accountable for the outcome.",
      },
    ],
    processHeading: "We come in. We find it. We fix it.",
    processSubheading: "Four steps. One team. Your operations transformed.",
    processSteps: [
      {
        _type: "object",
        label: "Step 1",
        title: "Audit",
        description:
          "We map manual work and lost time. We show the cost in time and money.",
        deliverable: "Automation opportunity map.",
      },
      {
        _type: "object",
        label: "Step 2",
        title: "Recommend",
        description:
          "We design the right automation setup. Ready tools when possible. Custom builds if needed.",
        deliverable: "Custom roadmap.",
      },
      {
        _type: "object",
        label: "Step 3",
        title: "Build & Deploy",
        description: "We implement everything.",
        deliverable: "Live automations.",
      },
    ],
    processQuote:
      "If we don't hit the agreed target — we return until we do.",
    processCta: "Start with an audit →",
    toolsLabel: "OUR TOOLS",
    toolsHeading: "Ready to deploy. Proven in the field.",
    toolsSubheading:
      "Tools built for secondhand stores. Choose what works best for you.",
    toolCards: [
      {
        _type: "object",
        title: "Automatic Tagging, Barcode & Digital Passport",
        description:
          "Add a product in 1 minute. AI writes description, generates barcode, prints label.",
      },
      {
        _type: "object",
        title: "Physical & E-com AI-synch",
        description:
          "For unique products or large Ref; keep track instantly with AI-synch.",
      },
      {
        _type: "object",
        title: "Custom Development",
        description:
          "When our ready tools don't cover your exact need, we build what does. Our engineering team scopes, builds and delivers custom automations tailored to your workflows, your data and your stack.",
      },
      {
        _type: "object",
        title: "Plugins & Integrations",
        description:
          "Connect POS, ERP, CRM, marketplaces. If connector doesn't exist — we build it.",
      },
    ],
    helpLabel: "WHO WE HELP",
    helpHeading: "Built for secondhand businesses.",
    helpDescription:
      "Whether you run a vintage boutique, a resale store, or a consignment shop — if manual listing is slowing you down, we can fix it.",
    helpBody:
      "For secondhand and resale stores, we have ready-made tools that deploy in hours.",
    helpCategories: [
      "Secondhand & vintage stores",
      "Resale boutiques",
      "Consignment stores",
      "Pre-loved specialists",
    ],
    helpQuote:
      "The online store for store owners who didn't want an online store.",
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
        question: "WHY USE YOU IF WE ALREADY HAVE TOOLS?",
        answer:
          "Most tools solve one problem. We connect everything — your POS, webstore, inventory, and team workflows — into one automated system. We also handle the gaps your current tools leave behind.",
      },
      {
        _type: "object",
        question: "IS THIS ONLY FOR SECONDHAND STORES?",
        answer:
          "Yes. 2hand2go is built specifically for secondhand businesses — resale stores, consignment shops, vintage boutiques, and pre-loved specialists.",
      },
      {
        _type: "object",
        question: "WHAT DOES GUARANTEE MEAN?",
        answer:
          "We agree on a target upfront — for example, 60 hours saved per month. We measure it. If we don't hit it, we keep working until we do. No extra charge.",
      },
      {
        _type: "object",
        question: "HOW FAST DO WE SEE RESULTS?",
        answer:
          "Most clients see measurable time savings within the first two weeks of deployment. Full impact is typically visible within 30-60 days.",
      },
      {
        _type: "object",
        question: "CAN WE START SMALL?",
        answer:
          "Yes. We offer a standalone audit with no commitment to continue. Many clients start with one automation and expand from there.",
      },
      {
        _type: "object",
        question: "WHAT IF MY TEAM ISN'T TECHNICAL?",
        answer:
          "That's exactly who we build for. We handle all implementation and provide hands-on training. Your team just uses the result.",
      },
      {
        _type: "object",
        question: "WHAT DOES THE DAY RATE INCLUDE?",
        answer:
          "Everything: discovery, build, testing, deployment, and documentation. No hidden costs. You know the scope and price before we start.",
      },
    ],
    ctaHeading:
      "Stop doing manually what a machine can do better. Start growing.",
    ctaPrimary: "Book a free audit →",
    ctaSecondary: "Try tool free",
    ctaQuote:
      "We built these tools because we needed them ourselves. Now we're sharing them with retailers who want to grow without burning out.",
    ctaQuoteAttribution: "— Founding Team",
    ctaPhone: "+000 000 0000",
    ctaEmail: "hello@2hand2go.com",
  },
  fields: [
    // ── Hero Section ──
    defineField({
      name: "heroEyebrow",
      title: "Eyebrow Tag",
      type: "string",
      group: "hero",
      description: d("2hand2go"),
    }),
    defineField({
      name: "heroHeadline",
      title: "Headline",
      type: "string",
      group: "hero",
      description: d("WE AUTOMATE WHAT SLOWS YOU DOWN. SO YOU CAN GROW."),
    }),
    defineField({
      name: "heroSubheadline",
      title: "Sub-headline",
      type: "text",
      group: "hero",
      rows: 3,
      description: d(
        "We Build Automations That Fix What's Blocking Your Growth..."
      ),
    }),
    defineField({
      name: "heroStats",
      title: "Stats",
      type: "array",
      group: "hero",
      description: "Default: 95% less listing time, +30% avg revenue, 1 min per product. Remove all items to restore defaults.",
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
    defineField({
      name: "heroCtaPrimary",
      title: "Primary Button Text",
      type: "string",
      group: "hero",
      description: d("Book a free audit →"),
    }),
    defineField({
      name: "heroCtaSecondary",
      title: "Secondary Button Text",
      type: "string",
      group: "hero",
      description: d("How we work"),
    }),

    // ── Retailer CTA ──
    defineField({
      name: "retailerHeading",
      title: "Heading",
      type: "text",
      group: "retailerCta",
      rows: 2,
      description: d("Most Retailers Lose Time And Money To Manual Work..."),
    }),
    defineField({
      name: "retailerBody",
      title: "Body Text",
      type: "text",
      group: "retailerCta",
      rows: 2,
      description: d("Every hour spent on repetitive tasks..."),
    }),
    defineField({
      name: "retailerCta",
      title: "Button Text",
      type: "string",
      group: "retailerCta",
      description: d("Get a free audit →"),
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
      description: d("We come in. We find it. We fix it."),
    }),
    defineField({
      name: "processSubheading",
      title: "Sub-heading",
      type: "string",
      group: "process",
      description: d("Four steps. One team. Your operations transformed."),
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
        "If we don't hit the agreed target — we return until we do."
      ),
    }),
    defineField({
      name: "processCta",
      title: "Button Text",
      type: "string",
      group: "process",
      description: d("Start with an audit →"),
    }),

    // ── Tools Section ──
    defineField({
      name: "toolsLabel",
      title: "Section Label",
      type: "string",
      group: "tools",
      description: d("OUR TOOLS"),
    }),
    defineField({
      name: "toolsHeading",
      title: "Heading",
      type: "string",
      group: "tools",
      description: d("Ready to deploy. Proven in the field."),
    }),
    defineField({
      name: "toolsSubheading",
      title: "Sub-heading",
      type: "text",
      group: "tools",
      rows: 2,
      description: d("Tools built for secondhand stores. Choose what works best for you."),
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
      description: d("WHO WE HELP"),
    }),
    defineField({
      name: "helpHeading",
      title: "Heading",
      type: "string",
      group: "help",
      description: d("Built for secondhand businesses."),
    }),
    defineField({
      name: "helpDescription",
      title: "Description",
      type: "text",
      group: "help",
      rows: 3,
      description: d("Whether you run a vintage boutique..."),
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
      description: d("The online store for store owners who didn't want an online store."),
    }),

    // ── Team Section ──
    defineField({
      name: "teamHeading",
      title: "Heading",
      type: "string",
      group: "team",
      description: d("Fashion people. Tech people. Retail people. One team."),
    }),
    defineField({
      name: "teamSubheading",
      title: "Sub-heading",
      type: "string",
      group: "team",
      description: d("We are retail professionals and engineers who built the tools we wished existed."),
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
      description: d("We've spent years on both sides — running retail stores and building software..."),
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
      description: d("Stop doing manually what a machine can do better. Start growing."),
    }),
    defineField({
      name: "ctaPrimary",
      title: "Primary Button Text",
      type: "string",
      group: "cta",
      description: d("Book a free audit →"),
    }),
    defineField({
      name: "ctaSecondary",
      title: "Secondary Button Text",
      type: "string",
      group: "cta",
      description: d("Try tool free"),
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
      description: d("hello@2hand2go.com"),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page Content" };
    },
  },
});
