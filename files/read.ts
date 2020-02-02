const filePath: string = "./text.txt";

let file = await Deno.open(filePath);

await Deno.copy(Deno.stdout, file);
file.close();
