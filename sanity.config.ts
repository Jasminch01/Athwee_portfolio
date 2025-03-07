import { AboutSchema, latstVideoSchema, VideoSchema } from "@/sanity/schemas/videoSchemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  dataset: "production",
  title: "Athwee",
  apiVersion: "2024-01-01",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: [VideoSchema, AboutSchema, latstVideoSchema],
  },
});

export default config;
