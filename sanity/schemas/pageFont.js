import { defineType, defineField } from "sanity";

const fontList = [
  { title: "Use Site Default", value: "default" },
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
];

const weightList = [
  { title: "Light (300)", value: "300" },
  { title: "Regular (400)", value: "400" },
  { title: "Medium (500)", value: "500" },
  { title: "Semi Bold (600)", value: "600" },
  { title: "Bold (700)", value: "700" },
  { title: "Extra Bold (800)", value: "800" },
  { title: "Black (900)", value: "900" },
];

export default defineType({
  name: "pageFont",
  title: "Page Fonts",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page",
      type: "string",
      description: "Select which page this font applies to",
      options: {
        list: [
          { title: "Home Page", value: "home" },
          { title: "Pricing Page", value: "pricing" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "font",
      title: "Font",
      type: "string",
      description: "Choose a font for this page. Select 'Use Site Default' to inherit from Site Settings.",
      initialValue: "default",
      options: { list: fontList },
    }),
    defineField({
      name: "fontWeights",
      title: "Font Weights",
      type: "array",
      of: [{ type: "string" }],
      description: "Select the font weights to load for this page",
      initialValue: ["300", "400", "500", "600", "700"],
      options: { list: weightList },
    }),
  ],
  preview: {
    select: {
      page: "page",
      font: "font",
    },
    prepare({ page, font }) {
      const pageNames = { home: "Home Page", pricing: "Pricing Page" };
      return {
        title: pageNames[page] || page,
        subtitle: font === "default" ? "Using site default" : font?.replace("_", " "),
      };
    },
  },
});
