import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

// Custom structure: Site Settings and Hero Video are singletons (only one document each)
const singletonTypes = ["siteSettings", "heroVideo"];

const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      // Site Settings — singleton
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site Settings")
        ),

      // Hero Video — singleton
      S.listItem()
        .title("Hero Video")
        .id("heroVideo")
        .child(
          S.document()
            .schemaType("heroVideo")
            .documentId("heroVideo")
            .title("Hero Video")
        ),

      S.divider(),

      // Page Images — list (multiple documents)
      S.documentTypeListItem("pageImages").title("Page Images"),

      // Page Fonts — list (one per page)
      S.documentTypeListItem("pageFont").title("Page Fonts"),
    ]);

export default defineConfig({
  name: "ree-cms",
  title: "REe Content Manager",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Prevent singletons from appearing in "Create new" menu
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !singletonTypes.includes(schemaType)
      ),
  },

  document: {
    // Prevent singletons from being duplicated or deleted
    actions: (input, context) => {
      if (singletonTypes.includes(context.schemaType)) {
        return input.filter(
          ({ action }) =>
            action && !["unpublish", "delete", "duplicate"].includes(action)
        );
      }
      return input;
    },
  },
});
