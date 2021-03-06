import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import Navbar from "components/navbar";

const Wrapper = styled.div`
  /* makes the page take up the screen */
  height: 100vh;
  width: 100%;
  /* styling it a little bit */
  background: ${colors.pathway};
  color: ${colors.paper};

  /* when the screen is big, place the navbar and content side by side */
  > div {
    display: inline-block;
  }
`;

const Content = styled.div`
  /* makes the content box take up the whole screen */
  height: 100vh;
  width: calc(100% - ${common.navbarwidth}px);
  /* makes the content box scrollable */
  overflow-y: auto;
  overflow-x: hidden;

  /* when the screen is small, make it appear in the bottom */
  @media only screen and (max-width: ${common.screensize}) {
    width: 100%;
    height: calc(100vh - ${common.navbarwidth}px);
  }
`;

// Page takes up the entire screen and contains a navbar and content box
function Page(props) {
  return (
    <Wrapper id={props.id} data-testid={props.id}>
      <Navbar id={`${props.id}-navbar`} />
      <Content>{props.children}</Content>
    </Wrapper>
  );
}

export default Page;
