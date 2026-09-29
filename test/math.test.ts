import { test, expect } from "@jest/globals";
import { add, multiply} from "../src/utils/math";

test("addition de 2 + 3 = 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("Multiplication de 2 * 3 = 6", () => {
  expect(multiply(2,3)).toBe(6);
})