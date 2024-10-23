import { assertEquals } from "std/assert";
import app from "../app/app.ts";

Deno.test("GET / should return 200", async () => {
  const res = await app.request("http://localhost/api");
  assertEquals(res.status, 200);
});
