import { VideoSchema } from "@/sanity/schemas/videoSchemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "cvc3rro0", // Replace with your actual project ID
  dataset: "production", // Replace with your dataset name
  title: "Athwee",
  apiVersion: "2024-01-01", // Use the API version you're working with
  basePath: "/admin", // Defines the base path for the Sanity Studio
  plugins: [deskTool()],
  schema : {
    types : [VideoSchema]
  }
});

export default config;
