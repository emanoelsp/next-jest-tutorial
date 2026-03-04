import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  it("should render name correctly", () => {
    render(<Greeting name="Carlos" />);

    expect(
      screen.getByRole("heading", { name: "Hello, Carlos!" }),
    ).toBeInTheDocument();
  });
});
