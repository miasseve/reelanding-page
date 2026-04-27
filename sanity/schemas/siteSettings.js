import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "2hand2go",
    }),
    defineField({
      name: "logo",
      title: "Site Logo",
      type: "image",
      options: { hotspot: true },
      description: "The main logo displayed in the header and footer",
    }),
    defineField({
      name: "font",
      title: "Primary Font",
      type: "string",
      description: "Google Font name to use across the site",
      initialValue: "Space Grotesk",
      options: {
        list: [
          { title: "Space Grotesk", value: "Space_Grotesk" },
          { title: "Inter", value: "Inter" },
          { title: "Poppins", value: "Poppins" },
          { title: "Montserrat", value: "Montserrat" },
          { title: "Raleway", value: "Raleway" },
          { title: "Open Sans", value: "Open_Sans" },
          { title: "Lato", value: "Lato" },
          { title: "Roboto", value: "Roboto" },
          { title: "Playfair Display", value: "Playfair_Display" },
          { title: "DM Sans", value: "DM_Sans" },
          { title: "Outfit", value: "Outfit" },
          { title: "Sora", value: "Sora" },
          { title: "Nunito", value: "Nunito" },
          { title: "Nunito Sans", value: "Nunito_Sans" },
          { title: "Work Sans", value: "Work_Sans" },
          { title: "Rubik", value: "Rubik" },
          { title: "Karla", value: "Karla" },
          { title: "Manrope", value: "Manrope" },
          { title: "Plus Jakarta Sans", value: "Plus_Jakarta_Sans" },
          { title: "Figtree", value: "Figtree" },
          { title: "Lexend", value: "Lexend" },
          { title: "Urbanist", value: "Urbanist" },
          { title: "Archivo", value: "Archivo" },
          { title: "Cabin", value: "Cabin" },
          { title: "Barlow", value: "Barlow" },
          { title: "Source Sans 3", value: "Source_Sans_3" },
          { title: "Josefin Sans", value: "Josefin_Sans" },
          { title: "Quicksand", value: "Quicksand" },
          { title: "Mulish", value: "Mulish" },
          { title: "Libre Franklin", value: "Libre_Franklin" },
          { title: "Albert Sans", value: "Albert_Sans" },
          { title: "Merriweather", value: "Merriweather" },
          { title: "Lora", value: "Lora" },
          { title: "PT Serif", value: "PT_Serif" },
          { title: "Crimson Text", value: "Crimson_Text" },
          { title: "EB Garamond", value: "EB_Garamond" },
          { title: "Cormorant Garamond", value: "Cormorant_Garamond" },
        ],
      },
    }),
    defineField({
      name: "fontWeights",
      title: "Font Weights",
      type: "array",
      of: [{ type: "string" }],
      description: "Select the font weights to load",
      initialValue: ["300", "400", "500", "600", "700"],
      options: {
        list: [
          { title: "Light (300)", value: "300" },
          { title: "Regular (400)", value: "400" },
          { title: "Medium (500)", value: "500" },
          { title: "Semi Bold (600)", value: "600" },
          { title: "Bold (700)", value: "700" },
          { title: "Extra Bold (800)", value: "800" },
          { title: "Black (900)", value: "900" },
        ],
      },
    }),
    defineField({
      name: "navItems",
      title: "Header Navigation",
      type: "array",
      description:
        "Top-level header menu items. Leave empty to use the built-in defaults.",
      of: [
        {
          type: "object",
          name: "navItem",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "href",
              title: "Link URL",
              type: "string",
              description:
                "e.g. /pricing, /#process, or https://example.com. Leave blank for dropdowns.",
            }),
            defineField({
              name: "isDropdown",
              title: "Is Dropdown?",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "submenuHeading",
              title: "Dropdown Heading",
              type: "string",
              hidden: ({ parent }) => !parent?.isDropdown,
            }),
            defineField({
              name: "col1",
              title: "Dropdown Column 1",
              type: "array",
              hidden: ({ parent }) => !parent?.isDropdown,
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "title", title: "Title", type: "string" }),
                    defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
                    defineField({ name: "href", title: "Link URL", type: "string" }),
                  ],
                  preview: { select: { title: "title", subtitle: "href" } },
                },
              ],
            }),
            defineField({
              name: "col2",
              title: "Dropdown Column 2",
              type: "array",
              hidden: ({ parent }) => !parent?.isDropdown,
              of: [
                {
                  type: "object",
                  fields: [
                    defineField({ name: "title", title: "Title", type: "string" }),
                    defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
                    defineField({ name: "href", title: "Link URL", type: "string" }),
                  ],
                  preview: { select: { title: "title", subtitle: "href" } },
                },
              ],
            }),
          ],
          preview: {
            select: { title: "title", isDropdown: "isDropdown", href: "href" },
            prepare({ title, isDropdown, href }) {
              return {
                title,
                subtitle: isDropdown ? "Dropdown" : href || "—",
              };
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
