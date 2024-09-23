import { Hono } from "hono";
import { logger } from "hono/logger";

const app = new Hono();
app.use(logger());
app.get("/", (c) => {
  return c.text("Hello Hono!");
});
app.post("/parse-email", async (c) => {
  const body = await c.req.parseBody();
  console.log("Parsing Email", body);

  return c.json({}, 200);
});
export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
