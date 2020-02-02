import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router
  .get("/", ctx => {
    ctx.response.body = "helloworld";
  })
  .get("/book", ctx => {
    ctx.response.body = [
      {
        title: "Sherlock Holmes",
        author: "Arthur "
      }
    ];
  })
  .get("/todo", async ctx => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const todos = response.json();

    ctx.response.body = todos;
  });

export default router;
