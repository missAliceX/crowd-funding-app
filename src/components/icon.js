import styled from "styled-components";

const Icon = styled.img.attrs(props => {
  const size = {
    lg: 50,
    md: 30,
    sm: 20
  }[props.size];
  const padding = {
    lg: 15,
    md: 10,
    sm: 5
  }[props.size];
  return {
    width: `${size}px`,
    height: `${size}px`,
    padding: `${padding}px`
  };
})`
  padding: ${props => props.padding};
`;

export { Icon };
