import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { readFileSync } from "fs";
import { join } from "path";
import ejs from "ejs";
import todosRoute from "./routes/todos";

const app = new Hono();

app.use("*", async (c, next) => {
  (c as any).render = (view: string, data?: Record<string, unknown>) => {
    const templete = readFileSync(
      join(process.cwd(), "views", `${view}.ejs`),
      "utf-8",
    );

    const html = ejs.render(templete, data ?? {});
    return c.html(html);
  };

  await next();
});

app.use("/public/*", serveStatic({ root: "./" }));

app.route("/", todosRoute);

serve({ fetch: app.fetch, port: 3000 }, () => {
  console.log("サーバー起動中 http://localhost:3000");
});
