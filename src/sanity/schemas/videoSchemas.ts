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
      validation: (Rule: { min: (arg0: number) => any }) => Rule.min(0),
    },
    {
      name: "likes",
      title: "Likes",
      type: "number",
      description: "Number of likes for the video.",
      validation: (Rule: { min: (arg0: number) => any }) => Rule.min(0),
    },
    {
      name: "shares",
      title: "Shares",
      type: "number",
      description: "Number of shares for the video.",
      validation: (Rule: { min: (arg0: number) => any }) => Rule.min(0),
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

export { VideoSchema };
