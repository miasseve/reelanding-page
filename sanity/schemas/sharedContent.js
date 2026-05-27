import { defineType, defineField } from "sanity";

const d = (defaultText) => `Default: "${defaultText}" — Clear field to restore default.`;

export default defineType({
  name: "sharedContent",
  title: "Footer Content",
  type: "document",
  initialValue: {
    footerTagline: "Secondhand Automation",
    footerDescription: "We automate what slows you down. So you can grow.",
    footerEmail: "mia@le-stores.com",
    footerCopyright: "2026 2hand2go. All rights reserved.",
    footerBottomText: "2hand2go is powered by Ree",
  },
  fields: [
    defineField({
      name: "footerTagline",
      title: "Tagline",
      type: "string",
      description: d("Secondhand Automation"),
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
      description: d("mia@le-stores.com"),
    }),
    defineField({
      name: "footerCopyright",
      title: "Copyright Text",
      type: "string",
      description: d("2026 2hand2go. All rights reserved."),
    }),
    defineField({
      name: "footerBottomText",
      title: "Bottom Text",
      type: "string",
      description: d("2hand2go is powered by Ree"),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Footer Content" };
    },
  },
});
