import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(ctx => {
  ctx.response.body = "Hello World!";
});

await app.listen("127.0.0.1:4000");
console.log("server on port 4000");
