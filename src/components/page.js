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
`;

// Page takes up the entire screen and contains a navbar and content box
function Page(props) {
  return (
    <Wrapper role="page" data-testid={props["data-testid"]}>
      <Navbar data-testid={`${props["data-testid"]}-navbar`} />
      <Content>{props.children}</Content>
    </Wrapper>
  );
}

export default Page;
