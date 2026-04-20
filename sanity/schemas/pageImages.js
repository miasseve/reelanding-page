import { defineType, defineField } from "sanity";

export default defineType({
  name: "pageImages",
  title: "Page Images",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      options: {
        list: [
          { title: "Home Page", value: "home" },
          { title: "Pricing Page", value: "pricing" },
          { title: "Shared (Header/Footer)", value: "shared" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      description: "Which section does this image belong to?",
      options: {
        list: [
          { title: "Header - Secondhand Dropdown", value: "header-secondhand" },
          { title: "Problem Carousel - Slide 1", value: "carousel-1" },
          { title: "Problem Carousel - Slide 2", value: "carousel-2" },
          { title: "Problem Carousel - Slide 3", value: "carousel-3" },
          { title: "Problem Carousel - Slide 4", value: "carousel-4" },
          { title: "Problem Carousel - Slide 5", value: "carousel-5" },

          { title: "Team Section - Team Photo", value: "team-photo" },
          { title: "CTA Section - Founder Photo", value: "cta-founder" },
          { title: "Pricing - Barcode Feature", value: "pricing-barcode" },
          { title: "Pricing - Instagram Feature", value: "pricing-instagram" },
          { title: "Pricing - Webstore Feature", value: "pricing-webstore" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Describe the image for accessibility",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "section",
      subtitle: "page",
      media: "image",
    },
  },
});
