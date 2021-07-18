import common from "styles/common.module.scss";
import { render, screen, fireEvent } from "@testing-library/react";
import Sidebar from "components/sidebar";

test("toggle sidebar", () => {
  render(<Sidebar data-testid="sidebar" />);

  const sidebar = screen.getByTestId("sidebar");
  expect(sidebar).toBeInTheDocument();
  expect(sidebar).toHaveStyle(`width: ${common.sidebarwidth}`);

  const toggle = screen.getByTestId("sidebar-toggle");
  expect(toggle).toBeInTheDocument();

  fireEvent.click(toggle, {});
  expect(sidebar).toHaveStyle(`width: ${common.sidebarwidthexpanded}`);
});
