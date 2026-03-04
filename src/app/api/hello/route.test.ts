/**
 * @jest-environment node
 */
import { GET } from "./route";

describe("API hello route", () => {
  it("should return hello world message", async () => {
    const response = await GET();
    const data = await response.json();

    expect(data).toEqual({ message: "Hello World" });
  });
});
