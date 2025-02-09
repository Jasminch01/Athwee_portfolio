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
