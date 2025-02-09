import { client } from "./utlis";

const VideoSchema = {
  name: "videoContent",
  title: "Video Content",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title of the video.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      description: "Upload the thumbnail image for the video.",
      options: {
        hotspot: true, // Allows image cropping
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      description: "Number of views for the video.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "unitOfViews",
      title: "Unit of views",
      type: "string",
      description:
        "The unit of measurement views (e.g., 'M' for millions, 'K' for thousands).",
      options: {
        list: ["K", "K+", "M+", "M", "B", "B+"], // Dropdown for predefined units
      },
    },
    {
      name: "likes",
      title: "Likes",
      type: "number",
      description: "Number of likes for the video.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "unitOfLikes",
      title: "Unit of likes",
      type: "string",
      description:
        "The unit of measurement likes (e.g., 'M' for millions, 'K' for thousands).",
      options: {
        list: ["K", "K+", "M+", "M", "B", "B+"], // Dropdown for predefined units
      },
    },
    {
      name: "shares",
      title: "Shares",
      type: "number",
      description: "Number of shares for the video.",
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: "unitOfShares",
      title: "Unit of shares",
      type: "string",
      description:
        "The unit of measurement shares (e.g., 'M' for millions, 'K' for thousands).",
      options: {
        list: ["K", "K+", "M+", "M", "B", "B+"], // Dropdown for predefined units
      },
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "The URL of the video.",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          uri: {
            (arg0: { allowRelative: boolean; scheme: string[] }): any;
            new (): any;
          };
        };
      }) =>
        Rule.required().uri({
          allowRelative: true,
          scheme: ["http", "https"],
        }),
    },
  ],
  validation: (Rule: {
    custom: (
      arg0: (
        _: any,
        context: any
      ) => Promise<
        true | "You can only create up to 4 video content documents."
      >
    ) => any;
  }) =>
    Rule.custom(async (_, context) => {
      const { getClient } = context; // Destructure `getClient` from context
      const client = getClient({ apiVersion: "2023-05-01" }); // Initialize the Sanity client

      // Query to count the number of `videoContent` documents
      const query = `count(*[_type == "videoContent"])`;
      const count = await client.fetch(query);

      // Define the maximum allowed number of documents
      const maxDocuments = 4;

      // If the count exceeds the limit, return an error message
      if (count >= maxDocuments) {
        return `You can only create up to ${maxDocuments} video content documents.`;
      }

      // If the count is within the limit, validation passes
      return true;
    }),
};

const AboutSchema = {
  name: "aboutContent",
  title: "About Content",
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description about you.",
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          max: { (arg0: number): any; new (): any };
        };
      }) => Rule.required().max(500),
    },
  ],
};

export default AboutSchema;

export { VideoSchema };
