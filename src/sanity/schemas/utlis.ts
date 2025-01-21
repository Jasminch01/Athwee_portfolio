import { createClient, groq } from "next-sanity";

export async function getVideos() {
  const client = createClient({
    projectId: "cvc3rro0",
    dataset: "production",
    apiVersion: "2024-01-01",
  });

  const query = groq`
  *[_type == "videoContent"]{
    _id,
    title,
    "thumbnailUrl": thumbnail.asset->url,
    views,
    likes,
    shares,
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
