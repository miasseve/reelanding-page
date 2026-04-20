import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { colorInput } from "@sanity/color-input";
import { schemaTypes } from "./sanity/schemas";

// Singletons — only one document of each type
const singletonTypes = [
  "siteSettings",
  "heroVideo",
  "homeContent",
  "pricingContent",
  "sharedContent",
];

const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      // ── Site-wide ──
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings"),
        ),
      S.listItem()
        .title("Hero Section")
        .id("heroVideo")
        .child(
          S.document()
            .schemaType("heroVideo")
            .documentId("heroVideo")
            .title("Hero Section"),
        ),
      S.listItem()
        .title("Footer Content")
        .id("sharedContent")
        .child(
          S.document()
            .schemaType("sharedContent")
            .documentId("sharedContent")
            .title("Footer Content"),
        ),

      S.divider(),

      // ── Page Content ──
      S.listItem()
        .title("Home Page Content")
        .id("homeContent")
        .child(
          S.document()
            .schemaType("homeContent")
            .documentId("homeContent")
            .title("Home Page Content"),
        ),
      S.listItem()
        .title("Pricing Page Content")
        .id("pricingContent")
        .child(
          S.document()
            .schemaType("pricingContent")
            .documentId("pricingContent")
            .title("Pricing Page Content"),
        ),

      S.divider(),

      // ── Media ──
      S.documentTypeListItem("pageImages").title("Page Images"),
    ]);

export default defineConfig({
  name: "ree-cms",
  title: "2hand2go Content Manager",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",

  plugins: [structureTool({ structure }), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !singletonTypes.includes(schemaType),
      ),
  },

  document: {
    actions: (input, context) => {
      if (singletonTypes.includes(context.schemaType)) {
        return input.filter(
          ({ action }) =>
            action && !["unpublish", "delete", "duplicate"].includes(action),
        );
      }
      return input;
    },
  },
});
