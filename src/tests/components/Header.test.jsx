import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../../components/Header";

describe("Example of 'test' method and 'it' method", () => {
  test("Render Title Correctly", () => {
    render(<Header />);
    const titleElement = screen.getByText(/My Contacts/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("Render Title Correctly by it method", () => {
    render(<Header />);
    const titleElement = screen.getByText(/My Contacts/i);
    expect(titleElement).toBeInTheDocument();
  });
});

describe("Count Tests", () => {
  it("Check text is plural or not", () => {
    render(<Header total={256} />);
    const totalElement = screen.getByTestId("total-id");
    expect(totalElement.textContent).toBe("256 Contacts");
  });
  it("Check text is singular or not", () => {
    render(<Header total={1} />);
    const totalElement = screen.getByTestId("total-id");
    expect(totalElement.textContent).toBe("1 Contact");
  });
});
