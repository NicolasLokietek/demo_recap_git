import { test, expect } from "@jest/globals";
import { add, divise } from "../src/utils/math";

test("addition de 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("division de 6 par 2 = 3", () => {
  expect(divise(6, 2)).toBe(3);
});
