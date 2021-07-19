import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";

const starSize = common.sidebarstar;

const Wrapper = styled.div`
  /* sets the size of the sidebar */
  width: ${common.sidebarwidth};
  height: 100vh;

  /* styling it a little bit */
  box-shadow: ${boxshadow.right};
  transition: all ${common.animateduration};
  transition-property: width;
`;

// Top is the sunset part of the sidebar
const Top = styled.div`
  background: ${colors.sunset};
  width: 100%;
  height: 25vh;
`;

// Bottom is the pathway part of the sidebar
const Bottom = styled.div`
  background: ${colors.pathway};
  width: 100%;
  height: 75vh;
  position: relative;
`;

// Star is the diamond between the sunset and pathway, representing the sun
const Star = styled.div`
  /* sets the size of the star */
  height: ${starSize}px;
  width: ${starSize}px;

  /* styling it a little bit */
  border-radius: ${common.borderradius};
  background-color: ${colors.white};
  box-shadow: ${boxshadow.illuminate};

  /* places the star in the top-center of the pathway */
  position: absolute;
  top: -${starSize / 2}px;
  left: calc(50% - ${starSize / 2}px);
  transform: rotate(45deg);
`;

// Sidebar is a sidebar that can open and close
function Sidebar(props) {
  return (
    <Wrapper data-testid={props["data-testid"]} role="sidebar">
      <Top />
      <Bottom>
        <Star />
        {props.children}
      </Bottom>
    </Wrapper>
  );
}

export default Sidebar;
