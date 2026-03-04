import { divide, sum } from "./math";

describe("Math utils", () => {
  it("should sum two numbers", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should divide two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  it("should throw error when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
