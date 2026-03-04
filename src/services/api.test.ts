import { fetchUser } from "./api";

describe("API service", () => {
  it("should return the default user", async () => {
    await expect(fetchUser()).resolves.toEqual({ name: "Maria" });
  });
});
