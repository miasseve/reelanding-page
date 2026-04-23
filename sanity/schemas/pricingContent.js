import { defineType, defineField } from "sanity";

const d = (defaultText) => `Default: "${defaultText}" — Clear field to restore default.`;

export default defineType({
  name: "pricingContent",
  title: "Pricing Page Content",
  type: "document",
  groups: [
    { name: "hero", title: "Pricing Hero" },
    { name: "calculator", title: "Calculator" },
  ],
  initialValue: {
    heroBadge: "Online Presence in 24 Hours",
    heroTitle: "YOUR WAY, YOUR SYSTEM",
    heroSubtitle: "WITH YOUR WEBSTORE",
    heroBody:
      "All product registration, synchronisation, and dev work done for you. No staff needed.",
    calcLabel: "Cost calculator",
    calcHeading: "How much is manual work costing you?",
    calcDescription:
      "Adjust the sliders to match your store. The real cost of manual listing is usually much higher than expected.",
  },
  fields: [
    defineField({
      name: "heroBadge",
      title: "Badge Text",
      type: "string",
      group: "hero",
      description: d("Online Presence in 24 Hours"),
    }),
    defineField({
      name: "heroTitle",
      title: "Title",
      type: "string",
      group: "hero",
      description: d("YOUR WAY, YOUR SYSTEM"),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Subtitle",
      type: "string",
      group: "hero",
      description: d("WITH YOUR WEBSTORE"),
    }),
    defineField({
      name: "heroBody",
      title: "Body Text",
      type: "text",
      group: "hero",
      rows: 2,
      description: d("All product registration, synchronisation, and dev work done for you. No staff needed."),
    }),
    defineField({
      name: "calcLabel",
      title: "Section Label",
      type: "string",
      group: "calculator",
      description: d("Cost calculator"),
    }),
    defineField({
      name: "calcHeading",
      title: "Heading",
      type: "string",
      group: "calculator",
      description: d("How much is manual work costing you?"),
    }),
    defineField({
      name: "calcDescription",
      title: "Description",
      type: "text",
      group: "calculator",
      rows: 2,
      description: d("Adjust the sliders to match your store..."),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Pricing Page Content" };
    },
  },
});
