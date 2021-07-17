import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";
import close from "assets/icons/close.svg";
import Icon from "components/icon";
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
  width: 100%;
  text-overflow: ellipsis;
`;

const InputWrapper = styled.div`
  width: ${props =>
    props.inline ? "fit-content" : `calc(100% - ${2 * padding}em)`};
  max-width: calc(100% - ${2 * padding}em - ${common.accentwidth});
  position: relative;
`;

const DeleteIcon = styled(Icon)`
  position: absolute;
  right: -${common.sm}px;
  top: ${common.sm / 2}px;
  visibility: ${props => props.visibility};
`;

function Input(props) {
  const [value, setValue] = useState(props.value || "");

  return (
    <Wrapper role="input" data-testid={props["data-testid"]}>
      <div className="sm bold">{props.label}</div>
      <div className="sm italic indent">{props.description}</div>
      <InputWrapper inline={props.inline}>
        <InputField
          filled={value !== ""}
          className="md"
          value={value}
          placeholder={props.placeholder}
          display={props.display || "inline-block"}
          onChange={e => setValue(e.target.value)}
        />
        <DeleteIcon
          visibility={value !== "" ? "visible" : "hidden"}
          className="sm clickable"
          src={close}
          onClick={props.onDelete || (() => setValue(""))}
        />
      </InputWrapper>
    </Wrapper>
  );
}

export default Input;
