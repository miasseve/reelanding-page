import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// Get file URL from Sanity file reference
export function fileUrl(ref) {
  const [, id, extension] = ref.split("-");
  return `https://cdn.sanity.io/files/${
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  }/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
}
