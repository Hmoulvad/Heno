import app from "app/index.ts";
import { assertEquals } from "std/assert";

Deno.test("GET / should return 200", async () => {
  const res = await app.request("http://localhost/api");
  assertEquals(res.status, 200);
});
