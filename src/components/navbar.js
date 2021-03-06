import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";

const Wrapper = styled.div`
  /* sets the size of the navbar */
  width: ${common.navbarwidth}px;
  height: 100vh;

  /* styling it a little bit */
  box-shadow: ${boxshadow.right};

  /* when the screen is small, make it appear in the bottom */
  @media only screen and (max-width: ${common.screensize}) {
    width: 100%;
    height: ${common.navbarwidth}px;
    position: fixed;
    bottom: 0;
  }
`;

// Top is the sunset part of the navbar
const Top = styled.div`
  background: ${colors.sunset};
  width: 100%;
  height: 25vh;

  /* only when the screen is small */
  @media only screen and (max-width: ${common.screensize}) {
    width: 25%;
    height: ${common.navbarwidth}px;
    position: absolute;
  }
`;

// Bottom is the pathway part of the navbar
const Bottom = styled.div`
  background: ${colors.pathway};
  width: 100%;
  height: 75vh;
  position: relative;

  /* only when the screen is small */
  @media only screen and (max-width: ${common.screensize}) {
    width: 75vh;
    height: ${common.navbarwidth}px;
    left: 25%;
  }
`;

// Star is the diamond between the sunset and pathway, representing the sun
const Star = styled.div`
  /* sets the size of the star */
  height: ${common.navbarstar}px;
  width: ${common.navbarstar}px;

  /* styling it a little bit */
  border-radius: ${common.borderradius};
  background-color: ${colors.white};
  box-shadow: ${boxshadow.illuminate};

  /* places the star in the top-center of the pathway */
  position: absolute;
  top: -${common.navbarstar / 2}px;
  left: calc(50% - ${common.navbarstar / 2}px);
  transform: rotate(45deg);

  /* only when the screen is small */
  @media only screen and (max-width: ${common.screensize}) {
    top: ${(common.navbarwidth - common.navbarstar) / 2}px;
    left: -${common.navbarstar / 2}px;
    transform: rotate(-45deg);
  }
`;

// Navbar is a navbar that can open and close
function Navbar(props) {
  return (
    <Wrapper id={props.id} data-testid={props.id}>
      <Top />
      <Bottom>
        <Star />
      </Bottom>
    </Wrapper>
  );
}

export default Navbar;
