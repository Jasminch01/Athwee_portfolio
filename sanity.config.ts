import { VideoSchema } from "@/sanity/schemas/videoSchemas";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "cvc3rro0",
  dataset: "production",
  title: "Athwee",
  apiVersion: "2024-01-01",
  basePath: "/admin",
  plugins: [deskTool()],
  schema : {
    types : [VideoSchema]
  }
});

export default config;
