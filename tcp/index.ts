const listener = Deno.listen({ port: 3000 });

console.log("Listening on localhost:3000");

for await (const conn of listener) {
  console.log(conn);
  Deno.copy(conn, conn);
}
