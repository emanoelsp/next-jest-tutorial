import { render, screen, waitFor } from "@testing-library/react";
import User from "./User";
import * as api from "../services/api";

jest.mock("../services/api");

describe("User component", () => {
  it("should show user name after fetch", async () => {
    jest.spyOn(api, "fetchUser").mockResolvedValue({
      name: "Joao",
    });

    render(<User />);

    await waitFor(() => {
      expect(screen.getByText("User: Joao")).toBeInTheDocument();
    });
  });
});
