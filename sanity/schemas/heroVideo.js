import { defineType, defineField } from "sanity";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

const d = (defaultText) => `Default: "${defaultText}" — Clear field to restore default.`;

const fileSizeValidation = (Rule) =>
  Rule.custom(async (value, context) => {
    if (!value?.asset?._ref) return true;

    const client = context.getClient({ apiVersion: "2024-01-01" });
    const asset = await client.fetch(
      `*[_id == $id][0]{ size }`,
      { id: value.asset._ref }
    );

    if (asset?.size && asset.size > MAX_FILE_SIZE) {
      const sizeMB = (asset.size / (1024 * 1024)).toFixed(1);
      return `File is ${sizeMB}MB. Maximum allowed is 10MB. Please compress your video at handbrake.fr or freeconvert.com before uploading.`;
    }

    return true;
  });

export default defineType({
  name: "heroVideo",
  title: "Hero Section",
  type: "document",
  groups: [
    { name: "media", title: "Video & Background" },
    { name: "text", title: "Hero Text & Buttons" },
    { name: "social", title: "Social Links" },
  ],
  initialValue: {
    title: "Hero Section",
    heroHeadlineLead: "That photo does nothing",
    heroHeadlineTail: "for you.",
    heroSubheadline:
      "Now it: Automates YOUR webstore, YOUR sales channels, YOUR complete selling workflow.",
    heroListItem1: "webshop that sync automatically",
    heroListItem2: "Automatic workflow",
    heroHighlight: "All in one",
    heroReassurance: "All existing solution in 1 place",
    heroReassuranceSub: "Mia does it in your space",
    heroCtaPrimary: "START for free",
    heroCtaSecondary: "BOOK",
  },
  fields: [
    defineField({
      name: "title",
      title: "Document Title (internal)",
      type: "string",
      group: "media",
      initialValue: "Hero Section",
    }),
    defineField({
      name: "heroVideoFile",
      title: "Desktop Video",
      type: "file",
      group: "media",
      options: { accept: "video/mp4,video/webm" },
      description:
        "Desktop hero video. Max 10MB — compress at handbrake.fr or freeconvert.com before uploading. The site automatically delivers it through Cloudinary's CDN with auto format/quality optimization.",
      validation: fileSizeValidation,
    }),
    defineField({
      name: "mobileVideoFile",
      title: "Mobile Video",
      type: "file",
      group: "media",
      options: { accept: "video/mp4,video/webm" },
      description:
        "Mobile hero video (900x500 or 9:5 recommended). Max 10MB — compress before uploading. The site automatically delivers it through Cloudinary's CDN with auto format/quality optimization.",
      validation: fileSizeValidation,
    }),
    // ── Hero Text & Buttons ──
    defineField({
      name: "heroHeadlineLead",
      title: "Headline — Lead (sits over image)",
      type: "string",
      group: "text",
      description: d("That photo does nothing"),
    }),
    defineField({
      name: "heroHeadlineTail",
      title: "Headline — Tail (italic, after image)",
      type: "string",
      group: "text",
      description: d("for you."),
    }),
    defineField({
      name: "heroHeadlineImage",
      title: "Headline Background Image (behind 'lead' text)",
      type: "image",
      group: "text",
      options: { hotspot: true },
      description:
        "Optional image rendered as the background behind the headline lead text (e.g. the dark photo strip in the design).",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Intro Line",
      type: "text",
      group: "text",
      rows: 2,
      description: d(
        "Now it: Automates YOUR webstore, YOUR sales channels, YOUR complete selling workflow."
      ),
    }),
    defineField({
      name: "heroListItem1",
      title: "List Item 1",
      type: "string",
      group: "text",
      description: d("webshop that sync automatically"),
    }),
    defineField({
      name: "heroListItem2",
      title: "List Item 2",
      type: "string",
      group: "text",
      description: d("Automatic workflow"),
    }),
    defineField({
      name: "heroHighlight",
      title: "Highlight Phrase (e.g. 'All in one')",
      type: "string",
      group: "text",
      description: d("All in one"),
    }),
    defineField({
      name: "heroReassurance",
      title: "Reassurance Title",
      type: "string",
      group: "text",
      description: d("All existing solution in 1 place"),
    }),
    defineField({
      name: "heroReassuranceSub",
      title: "Reassurance Sub-line",
      type: "string",
      group: "text",
      description: d("Mia does it in your store"),
    }),
    defineField({
      name: "heroCtaPrimary",
      title: "Primary Button Text",
      type: "string",
      group: "text",
      description: d("START for free"),
    }),
    defineField({
      name: "heroCtaSecondary",
      title: "Secondary Button Text",
      type: "string",
      group: "text",
      description: d("BOOK"),
    }),

    // ── Social Links ──
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      group: "social",
      description: "Link to your Instagram page (e.g. https://instagram.com/yourpage)",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      group: "social",
      description: "Link to your Facebook page (e.g. https://facebook.com/yourpage)",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
