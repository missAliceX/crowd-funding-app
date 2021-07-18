import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";
import close from "assets/icons/close.svg";
import Icon from "components/icon";
import React, { useState, useEffect } from "react";

const Wrapper = styled.div`
  width: ${props => (props.inline ? "fit-content" : `calc(100% - 0.5em)`)};
  position: relative;
`;

const InputField = styled.input.attrs(props => {
  return { autoFocus: !props.addAnother };
})`
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
  width: calc(100% - 1em);
  text-overflow: ellipsis;
`;

const DeleteIcon = styled(Icon)`
  position: absolute;
  right: calc(-${common.sm}px + 1.25em);
  top: ${common.sm / 2}px;
  visibility: ${props => props.visibility};
`;

function Input(props) {
  const [value, setValue] = useState(props.value || "");

  useEffect(() => {
    if (props.value) setValue(props.value);
  }, [props.value]);

  return (
    <Wrapper
      inline={props.inline}
      role="input"
      data-testid={props["data-testid"]}
    >
      <InputField
        id={props.id || ""}
        className="md"
        value={value}
        filled={value !== ""}
        placeholder={props.placeholder}
        display={props.display || "inline-block"}
        onChange={e => {
          if (!props.addAnother) {
            setValue(e.target.value);
          }
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        onBlur={props.onBlur}
      />
      <DeleteIcon
        visibility={value !== "" ? "visible" : "hidden"}
        className="sm clickable"
        src={close}
        onClick={props.onDelete || (() => setValue(""))}
      />
    </Wrapper>
  );
}

export default Input;
