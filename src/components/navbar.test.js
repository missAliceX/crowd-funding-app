import common from "styles/common.module.scss";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "components/navbar";

test("render navbar", () => {
  render(<Navbar data-testid="navbar" />);

  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
  expect(navbar).toHaveStyle(`width: ${common.navbarwidth}`);
});
