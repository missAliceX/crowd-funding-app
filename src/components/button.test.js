import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import { render, screen } from "@testing-library/react";
import Button from "components/button";

test("renders submit button", () => {
    render(<Button id="button" type="submit" />)
    const button = screen.getByTestId("button");
    expect.toHaveStyle(`color: ${colors.paper}`);
    expect.toHaveStyle(`background-color: ${colors.mage}`);
});

test("renders cancel button", () => {
    render(<Button id="button" type="cancel" />)
    const button = screen.getByTestId("button");
    expect.toHaveStyle(`background-color: ${colors.paper}`);
    expect.toHaveStyle(`color: ${colors.ink}`);
});
