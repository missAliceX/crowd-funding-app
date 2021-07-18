import { render, screen, fireEvent } from "@testing-library/react";
import InputList from "components/input-list";

test("add item", () => {
  render(<InputList id="examples" data-testid="examples" />);
  const ele = screen.getByTestId("examples");
  expect(ele).toBeInTheDocument();

  fireEvent.change(screen.getByTestId("examples-add"), {
    target: { value: "this is some example" }
  });
  const ex0 = screen.getByTestId("examples-0");
  expect(ex0).toBeInTheDocument();
  expect(ex0).toHaveFocus();
  expect(ex0).toHaveValue("this is some example");

  fireEvent.change(screen.getByTestId("examples-add"), {
    target: { value: "this is some other example" }
  });
  const ex1 = screen.getByTestId("examples-1");
  expect(ex1).toBeInTheDocument();
  expect(ex1).toHaveFocus();
  expect(ex1).toHaveValue("this is some other example");
});

test("remove item by empty string", () => {
  render(
    <InputList
      id="examples"
      data-testid="examples"
      items={["example 0", "example 1"]}
    />
  );

  const ex0 = screen.getByTestId("examples-0");
  expect(ex0).toBeInTheDocument();
  const ex1 = screen.getByTestId("examples-1");
  expect(ex1).toBeInTheDocument();

  fireEvent.blur(screen.getByTestId("examples-0"), {
    target: { value: "" }
  });

  const removedEx = screen.queryByTestId("examples-1");
  expect(removedEx).toBeNull();
});

test("remove item by clicking delete", () => {
  render(
    <InputList
      id="examples"
      data-testid="examples"
      items={["example 0", "example 1", "example 2"]}
    />
  );

  const ex0 = screen.getByTestId("examples-0");
  expect(ex0).toBeInTheDocument();
  const ex1 = screen.getByTestId("examples-1");
  expect(ex1).toBeInTheDocument();
  const ex2 = screen.getByTestId("examples-2");
  expect(ex2).toBeInTheDocument();

  fireEvent.click(screen.getByTestId("examples-1-delete"), {});
  const removedEx = screen.queryByTestId("examples-2");
  expect(removedEx).toBeNull();
});
