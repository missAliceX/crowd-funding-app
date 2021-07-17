import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";
import React, { useState } from "react";

const padding = 0.5;

const Wrapper = styled.div`
  border-radius: ${common.borderradius};
  margin: ${padding}em;
  width: calc(100% - 1em);

  > div {
    margin: 0.5em 0;
  }
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
  padding: 0.1em 0.5em;
  width: ${props => (props.inline ? "" : `calc(100% - ${2 * padding}em)`)};
  max-width: calc(100% - ${2 * padding}em);
  text-overflow: ellipsis;
`;

function Input(props) {
  const [value, setValue] = useState(props.value || "");

  return (
    <Wrapper>
      <div className="sm bold">{props.label}</div>
      <div className="sm italic indent">{props.description}</div>
      <InputField
        filled={value !== ""}
        inline={props.inline}
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
