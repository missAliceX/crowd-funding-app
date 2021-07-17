import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import boxshadow from "styles/boxshadow.module.scss";
import arrowBack from "assets/icons/arrow_back.svg";
import arrowForward from "assets/icons/arrow_forward.svg";
import Icon from "components/icon";

const starSize = 30;

const Wrapper = styled.div.attrs(props => ({
  width: props.expanded ? "300px" : "80px"
}))`
  width: ${props => props.width};
  height: 100vh;
  box-shadow: ${boxshadow.right};
  transition: all ${common.animateduration};
  transition-property: width;

  @media only screen and (max-width: ${common.screensize}) {
    width: 0;
    height: 0;
    overflow: hidden;
  }
`;

const Top = styled.div`
  background: ${colors.sunset};
  width: 100%;
  height: 25vh;
`;

const Bottom = styled.div`
  background: ${colors.pathway};
  width: 100%;
  height: 75vh;
  position: relative;
`;

const Star = styled.div.attrs(props => ({
  deg: props.expanded ? 135 : 45
}))`
  height: ${starSize}px;
  width: ${starSize}px;

  border-radius: ${common.borderradius};
  background-color: ${colors.white};
  box-shadow: ${boxshadow.illuminate};

  position: absolute;
  top: -${starSize / 2}px;
  left: calc(50% - ${starSize / 2}px);

  transform: rotate(${props => props.deg}deg);
  transition: transform ${common.animateduration};
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

function Sidebar(props) {
  const { expanded, onToggle } = props;
  return (
    <Wrapper
      expanded={expanded}
      role="sidebar"
      data-testid={props["data-testid"]}
    >
      <Top />
      <Bottom>
        <Star expanded={expanded} />
        <Toggle
          className="clickable"
          expanded={expanded}
          size="lg"
          onClick={() => onToggle(!expanded)}
        />
      </Bottom>
    </Wrapper>
  );
}

export default Sidebar;
