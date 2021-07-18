import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";
import arrowBackURL from "assets/icons/arrow_back.svg";
import arrowForwardURL from "assets/icons/arrow_forward.svg";
import Icon from "components/icon";

const starSize = common.sidebarstar;

const Wrapper = styled.div.attrs(props => ({
  // sets the width of the sidebar depending on whether it's expanded
  width: props.expanded ? common.sidebarwidthexpanded : common.sidebarwidth
}))`
  /* sets the size of the sidebar */
  width: ${props => props.width};
  height: 100vh;

  /* styling it a little bit */
  box-shadow: ${boxshadow.right};
  transition: all ${common.animateduration};
  transition-property: width;

  /* when the screen is small, hide the sidebar completely */
  @media only screen and (max-width: ${common.screensize}) {
    width: 0;
    height: 0;
    overflow: hidden;
  }
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
const Star = styled.div.attrs(props => ({
  // sets the angle of rotation depending on whether it's expanded
  deg: props.expanded ? 135 : 45
}))`
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

  /* apply and animate the rotatation of the star */
  transform: rotate(${props => props.deg}deg);
  transition: transform ${common.animateduration};
`;

// Toggle is the button open and close the sidebar
const Toggle = styled(Icon).attrs(props => ({
  src: props.expanded ? arrowBackURL : arrowForwardURL,
  size: props.size
}))`
  /* places the button at the bottom-right of the sidebar */
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  /* inverts the originially dark colored icon into a light colored icon */
  filter: invert(1);
`;

// Sidebar is a sidebar that can open and close
function Sidebar(props) {
  const { onToggle, expanded } = props;
  return (
    <Wrapper
      data-testid={props["data-testid"]}
      expanded={expanded}
      role="sidebar"
    >
      <Top />
      <Bottom>
        <Star expanded={expanded} />
        <Toggle
          data-testid={`${props["data-testid"]}-toggle`}
          expanded={expanded}
          // makes the icon big and cursor style becomes pointer
          className="clickable"
          size="lg"
          // onClick is triggered when the toggle icon is clicked
          onClick={onToggle}
        />
        {props.children}
      </Bottom>
    </Wrapper>
  );
}

export default Sidebar;
