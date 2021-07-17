import styled from "styled-components";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";
import arrowBack from "assets/icons/arrow_back.svg";
import arrowForward from "assets/icons/arrow_forward.svg";
import { Icon } from "components/icon";
import React, { useState } from "react";

const starSize = 30;

const Wrapper = styled.div.attrs(props => ({
  width: props.expanded ? "300px" : "80px"
}))`
  width: ${props => props.width};
  box-shadow: ${boxshadow.right};
  transition: width 0.4s;
`;

const Top = styled.div`
  background: ${colors.sunset};
  width: 100%;
  height: 200px;
`;

const Bottom = styled.div`
  background: ${colors.pathway};
  width: 100%;
  height: calc(100vh - 200px);
  position: relative;
`;

const Star = styled.div.attrs(props => ({
  deg: props.expanded ? 135 : 45
}))`
  height: ${starSize}px;
  width: ${starSize}px;

  border-radius: 2px;
  background-color: ${colors.white};
  box-shadow: ${boxshadow.illuminate};

  position: absolute;
  top: -${starSize / 2}px;
  left: calc(50% - ${starSize / 2}px);

  transform: rotate(${props => props.deg}deg);
  transition: transform 0.4s;
`;

const Toggle = styled(Icon).attrs(props => ({
  src: props.expanded ? arrowBack : arrowForward,
  size: props.size
}))`
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  filter: invert(1);
`;

function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Wrapper expanded={expanded}>
      <Top />
      <Bottom>
        <Star expanded={expanded} />
        <Toggle
          expanded={expanded}
          size="lg"
          onClick={() => setExpanded(!expanded)}
        />
      </Bottom>
    </Wrapper>
  );
}

export default Sidebar;
