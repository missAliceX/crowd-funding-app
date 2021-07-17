import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";
import React, { useState } from "react";

const paddingWidth = 0.1;

const Wrapper = styled.div`
  width: 100%;
  border-radius: ${common.borderradius};
  > * {
    margin: 0.1em 0;
  }
  margin: 0.5em;
`;

const InputField = styled.input`
  display: ${props => props.display};
  border: none;
  border-left: ${common.accentwidth} solid
    ${props => (props.filled ? colors.dream : colors.wind)};
  :focus {
    border-left: ${common.accentwidth} solid ${colors.dream};
  }
  background-color: ${colors.paper};
  box-shadow: ${boxshadow.down};
  padding: ${paddingWidth}em 0.5em;
  width: ${props =>
    `calc(${props.width} - ${2 * paddingWidth}em - ${common.accentwidth})`};
`;

function Input(props) {
  const [value, setValue] = useState(props.value || "");

  return (
    <Wrapper>
      <div className="sm">{props.label}</div>
      <div className="sm light">{props.description}</div>
      <InputField
        width={props.width}
        filled={value !== ""}
        className="md"
        value={value}
        placeholder={props.placeholder}
        display={props.display || "inline-block"}
        onChange={e => setValue(e.target.value)}
      />
    </Wrapper>
  );
}

export default Input;
