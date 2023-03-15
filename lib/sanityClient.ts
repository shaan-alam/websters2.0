import {createClient} from "@sanity/client";

export default createClient({
  projectId: "v1avtq4r",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-07",
});