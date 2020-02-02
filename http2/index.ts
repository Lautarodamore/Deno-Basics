import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./routes/index.ts";

const app = new Application();

app.use((ctx, next) => {
  console.log(ctx.request.method, ctx.request.url);
  next();
});

app.use(router.routes());

await app.listen("127.0.0.1:4000");
console.log("server on port 4000");
