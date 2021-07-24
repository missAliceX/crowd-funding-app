import common from "styles/common.module.scss";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "components/page";

test("renders page", () => {
  render(<Page id="page">something</Page>);

  const page = screen.getByTestId("page");
  expect(page).toBeInTheDocument();
  const content = screen.getByText("something");
  expect(content).toBeInTheDocument();
  const navbar = screen.getByTestId("page-navbar");
  expect(navbar).toBeInTheDocument();
  expect(navbar).toHaveStyle(`width: ${common.navbarwidth}`);
});
