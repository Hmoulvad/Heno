import { assertEquals, assertNotEquals } from "std/assert";
import { expect } from "std/expect";
import generateId from "utils/generateId.ts";
import applyConditionalClassAlpine from "utils/alpine/applyConditionalClassAlpine.ts";

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

Deno.test("applyConditionalClassAlpine - condition true", () => {
  const result = applyConditionalClassAlpine({
    className: "test",
    condition: "test === true",
  });
  assertEquals(result, { ":class": "{ 'test': test === true }" });
});

Deno.test("applyConditionalClassAlpine - condition false", () => {
  const result = applyConditionalClassAlpine({
    className: "test",
    condition: "test === false",
  });
  assertEquals(result, { ":class": "{ 'test': test === false }" });
});

Deno.test("applyConditionalClassAlpine - not equal", () => {
  const result = applyConditionalClassAlpine({
    className: "test",
    condition: "test === true",
  });
  assertNotEquals(result, { ":class": "{ 'test': test === false }" });
});
