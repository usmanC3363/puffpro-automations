import {
  createClient as baseCreateClient,
  ClientConfig,
  Route,
} from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "../slicemachine.config.json";

export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || sm.repositoryName;

const routes: Route[] = [
  { type: "page", uid: "home", path: "/" },
  { type: "page", path: "/:uid" },
];

export function createClient(config: ClientConfig = {}) {
  const fetchOptions =
    process.env.NODE_ENV === "production"
      ? { cache: "force-cache", next: { tags: ["prismic"] } }
      : { next: { revalidate: 5 } };

  const client = baseCreateClient(sm.apiEndpoint || repositoryName, {
    routes,
    fetchOptions: fetchOptions as any,
    ...config,
  });

  enableAutoPreviews({ client });

  return client;
}
