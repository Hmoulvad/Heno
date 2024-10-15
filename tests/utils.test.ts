import { assertEquals } from "std/assert";
import { expect } from "std/expect";
import generateId from "utils/generateId.ts";

Deno.test(
  "generateId should return a string that starts with the given prefix",
  () => {
    const prefix = "test";
    const id = generateId(prefix);
    expect(id.startsWith(`${prefix}-`)).toBe(true);
  }
);

Deno.test("generateId should return a unique ID each time it is called", () => {
  const id1 = generateId();
  const id2 = generateId();
  assertEquals(id1 === id2, false);
});
