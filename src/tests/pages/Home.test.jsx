import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages/Home";

describe("Example of fire Events", () => {
  it("check if button is visible on screen", () => {
    render(<Home />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeVisible();
  });

  it("click on button", async () => {
    render(<Home />);
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    await waitFor(() => {
      expect(buttonElement).not.toBeVisible();
    });
  });
});
