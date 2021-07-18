import { render, screen, fireEvent } from "@testing-library/react";
import Input from "components/input";

test("renders inline input", () => {
  render(<Input data-testid="input" value="" inline />);

  const input = screen.getByTestId("input");
  expect(input).toBeInTheDocument();
  expect.toHaveStyle(`display: inline-block`);
});

test("renders full width input", () => {
  render(<Input data-testid="input" value="" />);

  const input = screen.getByTestId("input");
  expect(input).toBeInTheDocument();
  expect.toHaveStyle(`display: block`);
});

test("change input to show and hide delete icon", () => {
  render(<Input data-testid="input" value="" />);

  const deleteIcon = screen.getByTestId("input-delete");
  expect(deleteIcon).toBeInTheDocument();
  expect.toHaveAttribute("visibility", "hidden");

  const input = screen.getByTestId("input");
  fireEvent.change(input, {
    target: { value: "this is some example" }
  });
  expect.toHaveAttribute("visibility", "visible");

  fireEvent.change(input, {
    target: { value: "" }
  });
  expect.toHaveAttribute("visibility", "hidden");
});
