import { defineType, defineField } from "sanity";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

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
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Hero Section Video",
    }),
    defineField({
      name: "heroVideoFile",
      title: "Desktop Video",
      type: "file",
      options: { accept: "video/mp4,video/webm" },
      description:
        "Desktop video displayed in the hero section (max 10MB, landscape recommended). Compress at handbrake.fr or freeconvert.com before uploading.",
      validation: fileSizeValidation,
    }),
    defineField({
      name: "mobileVideoFile",
      title: "Mobile Video",
      type: "file",
      options: { accept: "video/mp4,video/webm" },
      description:
        "Mobile video displayed in the hero section (max 10MB, 900x500 or 9:5 aspect ratio recommended). Compress at handbrake.fr or freeconvert.com before uploading.",
      validation: fileSizeValidation,
    }),
    defineField({
      name: "gradientFrom",
      title: "Gradient Color (Start)",
      type: "color",
      description: "Start color for background gradient. Default: purple (#7C3AED)",
      options: { disableAlpha: true },
    }),
    defineField({
      name: "gradientTo",
      title: "Gradient Color (End)",
      type: "color",
      description: "End color for background gradient. Default: pink (#EC4899)",
      options: { disableAlpha: true },
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      description: 'Large heading displayed on the left side. Default: "We\'d love to hear from you."',
      initialValue: "We'd love to hear from you.",
    }),
    defineField({
      name: "heroText",
      title: "Hero Text",
      type: "text",
      rows: 3,
      description: "Supporting text below the title.",
      initialValue:
        "Share your thoughts, questions, or suggestions on how we can further promote diversity, equity, and inclusivity.",
    }),
    defineField({
      name: "heroButtonText",
      title: "Button Text",
      type: "string",
      description: 'Text for the CTA button. Default: "Join Us"',
      initialValue: "Contact Us",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram URL",
      type: "url",
      description: "Link to your Instagram page (e.g. https://instagram.com/yourpage)",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook URL",
      type: "url",
      description: "Link to your Facebook page (e.g. https://facebook.com/yourpage)",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
