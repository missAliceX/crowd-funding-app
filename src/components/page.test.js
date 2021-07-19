import common from "styles/common.module.scss";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "components/page";

test("renders page", () => {
  render(<Page data-testid="page">something</Page>);

  const page = screen.getByTestId("page");
  expect(page).toBeInTheDocument();
  const content = screen.getByText("something");
  expect(content).toBeInTheDocument();
  const sidebar = screen.getByTestId("page-sidebar");
  expect(sidebar).toBeInTheDocument();
  expect(sidebar).toHaveStyle(`width: ${common.sidebarwidth}`);
});
