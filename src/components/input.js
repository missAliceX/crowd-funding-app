import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";
import React, { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  :active,
  .filled {
    border-radius: ${common.borderradius};
  }
  > * {
    margin: 0.2em;
  }
`;

const InputField = styled.input`
  padding: ${props => props.padding};
  display: ${props => props.display};
  border: none;
  border-left: ${common.accentwidth} solid
    ${props => (props.filled ? colors.dream : colors.wind)};
  background-color: ${colors.paper};
  box-shadow: ${boxshadow.down};
  padding: 0.1em 0.5em;
`;

function Input(props) {
  const [value, setValue] = useState(props.value || "");

  return (
    <Wrapper>
      <div className="sm">{props.label}</div>
      <div className="sm light">{props.description}</div>
      <InputField
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
