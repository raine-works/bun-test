import { hc } from "hono/client";

const client = hc<App>("/");
import type { App } from "@/backend";

export const api = client.api;
