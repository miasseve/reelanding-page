import { defineType, defineField } from "sanity";

const d = (defaultText) => `Default: "${defaultText}" — Clear field to restore default.`;

export default defineType({
  name: "sharedContent",
  title: "Footer Content",
  type: "document",
  initialValue: {
    footerTagline: "Retail Automation Consulting",
    footerDescription: "We automate what slows you down. So you can grow.",
    footerEmail: "hello@agency.io",
    footerCopyright: "2026 REe. All rights reserved.",
    footerBottomText:
      "Retail automation consulting · Fashion · Secondhand · Merchandising · Software engineering",
  },
  fields: [
    defineField({
      name: "footerTagline",
      title: "Tagline",
      type: "string",
      description: d("Retail Automation Consulting"),
    }),
    defineField({
      name: "footerDescription",
      title: "Description",
      type: "string",
      description: d("We automate what slows you down. So you can grow."),
    }),
    defineField({
      name: "footerEmail",
      title: "Email",
      type: "string",
      description: d("hello@agency.io"),
    }),
    defineField({
      name: "footerCopyright",
      title: "Copyright Text",
      type: "string",
      description: d("2026 REe. All rights reserved."),
    }),
    defineField({
      name: "footerBottomText",
      title: "Bottom Text",
      type: "string",
      description: d("Retail automation consulting · Fashion · Secondhand · Merchandising · Software engineering"),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Footer Content" };
    },
  },
});
