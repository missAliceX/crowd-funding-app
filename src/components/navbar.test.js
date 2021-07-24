import common from "styles/common.module.scss";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "components/navbar";

const resizeWindow = (width, height) => {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
};

test("render navbar landscape", () => {
  render(<Navbar id="navbar" />);

  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
  expect(navbar).toHaveStyle(`width: ${common.navbarwidth}`);
});

test("render navbar portrait", () => {
  render(<Navbar id="navbar" />);
  resizeWindow(250, 600);

  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeInTheDocument();
  expect(navbar).toHaveStyle(`width: 250`);
});