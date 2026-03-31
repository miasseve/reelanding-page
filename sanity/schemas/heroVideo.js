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
  title: "Hero Video",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Hero Section Video",
    }),
    defineField({
      name: "desktopVideo",
      title: "Desktop Video",
      type: "file",
      options: { accept: "video/mp4,video/webm" },
      description:
        "Video for desktop (max 10MB, 1920x1080). Compress at handbrake.fr or freeconvert.com before uploading.",
      validation: fileSizeValidation,
    }),
    defineField({
      name: "mobileVideo",
      title: "Mobile Video",
      type: "file",
      options: { accept: "video/mp4,video/webm" },
      description:
        "Video for mobile (max 10MB, 720x1280). Compress at handbrake.fr or freeconvert.com before uploading.",
      validation: fileSizeValidation,
    }),
    defineField({
      name: "fallbackImage",
      title: "Fallback Image",
      type: "image",
      options: { hotspot: true },
      description: "Shown while video loads or if video fails",
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
