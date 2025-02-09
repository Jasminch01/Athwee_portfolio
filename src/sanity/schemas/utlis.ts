import { createClient, groq } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  apiVersion: "2024-01-01",
});

export async function getVideos() {
  const query = groq`
  *[_type == "videoContent"]{
    _id,
    title,
    "thumbnailUrl": thumbnail.asset->url,
    views,
    unitOfViews,
    likes,
    unitOfLikes,
    shares,
    unitOfShares,
    videoUrl
  }
`;

  try {
    const videos = await client.fetch(query);
    return videos; // Return the fetched videos
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw new Error("Failed to fetch videos");
  }
}
export async function getAboutContent() {
  const query = groq`
  *[_type == "aboutContent"]{
  description
  }
`;

  try {
    const aboutContent = await client.fetch(query);
    return aboutContent; // Return the fetched videos
  } catch (error) {
    console.error("Error fetching about content:", error);
    throw new Error("Failed to fetch about content");
  }
}
