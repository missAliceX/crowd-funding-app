import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import Sidebar from "components/sidebar";
import React, { useState } from "react";

const Wrapper = styled.div`
  /* makes the page take up the screen */
  height: 100vh;
  width: 100%;
  /* styling it a little bit */
  background: ${colors.pathway};
  color: ${colors.paper};

  /* when the screen is big, place the sidebar and content side by side */
  > div {
    display: inline-block;
  }
`;

const Content = styled.div`
  /* makes the content box take up the whole screen */
  height: 100vh;
  width: calc(100% - ${common.sidebarwidth});
  /* makes the content box scrollable */
  overflow-y: auto;
  overflow-x: hidden;
  /* tween the width of the content box */
  transition: width ${common.animateduration};
`;

// Page takes up the entire screen and contains a sidebar and content box
function Page(props) {
  return (
    <Wrapper role="page" data-testid={props["data-testid"]}>
      <Sidebar data-testid={`${props["data-testid"]}-sidebar`} />
      <Content>{props.children}</Content>
    </Wrapper>
  );
}

export default Page;
