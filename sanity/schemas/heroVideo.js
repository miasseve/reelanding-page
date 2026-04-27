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
    heroHeadline: "Sell secondhand online, without extra work.",
    heroSubheadline:
      "From 1 picture, create a ready product listing, sync stock automatically, and sell through your webstore with zero manual work.",
    heroCtaPrimary: "Book Mia now",
    heroCtaSecondary: "Try with 1 picture",
    heroReassurance:
      "We handle your next product batch free, so you can see how fast and simple it is in your own store.",
    heroLongReassurance:
      "No new habits for your team. You only add the passwords for the channels you want to use and choose your webstore password. Start taking pictures or uploading on List and the rest runs automatically.",
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
    defineField({
      name: "gradientFrom",
      title: "Gradient Color (Start)",
      type: "color",
      group: "media",
      description: "Start color for background gradient. Default: purple (#7C3AED)",
      options: { disableAlpha: true },
    }),
    defineField({
      name: "gradientTo",
      title: "Gradient Color (End)",
      type: "color",
      group: "media",
      description: "End color for background gradient. Default: pink (#EC4899)",
      options: { disableAlpha: true },
    }),

    // ── Hero Text & Buttons ──
    defineField({
      name: "heroHeadline",
      title: "Headline",
      type: "string",
      group: "text",
      description: d("Sell secondhand online, without extra work."),
    }),
    defineField({
      name: "heroSubheadline",
      title: "Body Text",
      type: "text",
      group: "text",
      rows: 3,
      description: d(
        "From 1 picture, create a ready product listing, sync stock automatically, and sell through your webstore with zero manual work."
      ),
    }),
    defineField({
      name: "heroCtaPrimary",
      title: "Primary Button Text",
      type: "string",
      group: "text",
      description: d("Book Mia now"),
    }),
    defineField({
      name: "heroCtaSecondary",
      title: "Secondary Button Text",
      type: "string",
      group: "text",
      description: d("Try with 1 picture"),
    }),
    defineField({
      name: "heroReassurance",
      title: "Reassurance Line (below buttons)",
      type: "text",
      group: "text",
      rows: 2,
      description: d(
        "We handle your next product batch free, so you can see how fast and simple it is in your own store."
      ),
    }),
    defineField({
      name: "heroLongReassurance",
      title: "Long Reassurance Line (bottom)",
      type: "text",
      group: "text",
      rows: 3,
      description: d(
        "No new habits for your team. You only add the passwords for the channels you want to use and choose your webstore password. Start taking pictures or uploading on List and the rest runs automatically."
      ),
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
