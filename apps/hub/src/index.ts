import { serve } from "bun";
import { app } from "@/backend";
import html from "@/frontend/index.html";

((port: number) => {
  serve({
    // development: Bun.env.NODE_ENV === "devlopment",
    static: {
      "/": html,
    },
    port,
    fetch: app.fetch,
  });
  console.log(`Server running at http://localhost:${port}`);
})(8000);

process.on("SIGINT", () => {
  console.log("Stopping server...");
  process.exit(0);
});
