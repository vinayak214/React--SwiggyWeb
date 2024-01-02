import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact US page Test Case", () => {
  test("should load contacUS component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load  Button inside contactUS component", () => {
    // it is alias of test
    render(<Contact />);

    //const button = screen.getByRole("button");
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load  input inside contactUS component", () => {
    render(<Contact />);

    //const button = screen.getByRole("button");
    const inputName = screen.getByPlaceholderText("Name");

    expect(inputName).toBeInTheDocument();
  });

  test("should load  input inside contactUS component", () => {
    render(<Contact />);

    //const button = screen.getByRole("button");
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
