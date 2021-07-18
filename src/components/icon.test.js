import common from "styles/common.module.scss";
import { render, screen } from "@testing-library/react";
import Icon from "components/icon";

test("renders large icon", () => {
  render(<Icon data-testid="icon" size="lg" />);
  const icon = screen.getByTestId("icon");
  expect(icon).toBeInTheDocument();
  expect.toHaveStyle(`width: ${common.lg}px`);
  expect.toHaveStyle(`height: ${common.lg}px`);
  expect.toHaveStyle(`padding: ${common.lgpad}px`);
});

test("renders default icon", () => {
  render(<Icon data-testid="icon" />);
  const icon = screen.getByTestId("icon");
  expect(icon).toBeInTheDocument();
  expect.toHaveStyle(`width: ${common.md}px`);
  expect.toHaveStyle(`height: ${common.md}px`);
  expect.toHaveStyle(`padding: ${common.mdpad}px`);
});

test("renders small icon", () => {
  render(<Icon data-testid="icon" size="sm" />);
  const icon = screen.getByTestId("icon");
  expect(icon).toBeInTheDocument();
  expect.toHaveStyle(`width: ${common.sm}px`);
  expect.toHaveStyle(`height: ${common.sm}px`);
  expect.toHaveStyle(`padding: ${common.smpad}px`);
});
