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
export async function getLatestVideos() {
  const query = groq`
  *[_type == "latestVideoContent"]{
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
export async function getTestimonials() {
  const query = groq`
  *[_type == "testimonials"]{
  _id,
  name,
  title,
  feedback,
  "image": image.asset->url
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
export async function getBrands() {
  const query = groq`
  *[_type == "brands"]{
  brand,
  "brandImage": brandImage.asset->url
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
