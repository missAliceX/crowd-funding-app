import styled from "styled-components";
import common from "styles/common.module.scss";

const Icon = styled.img.attrs(props => {
  const size = {
    lg: common.lg,
    md: common.md,
    sm: common.sm
  }[props.size];
  const padding = {
    lg: common.lgpad,
    md: common.mdpad,
    sm: common.smpad
  }[props.size];
  return {
    width: `${size}px`,
    height: `${size}px`,
    padding: `${padding}px`,
    role: "icon",
    "data-testid": props["data-testid"]
  };
})`
  padding: ${props => props.padding};
`;

export default Icon;
