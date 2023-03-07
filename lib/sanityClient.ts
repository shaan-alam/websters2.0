import {createClient} from "@sanity/client";

export default createClient({
  projectId: "zshcurl3",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-03-07",
});