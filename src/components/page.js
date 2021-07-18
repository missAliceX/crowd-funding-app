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
  background: ${colors.abyss};
  color: ${colors.paper};

  /* when the screen is big, place the sidebar and content side by side */
  @media only screen and (min-width: ${common.screensize}) {
    > div {
      display: inline-block;
    }
  }
`;

const Content = styled.div`
  /* makes the content box take up the whole screen */
  height: 100vh;
  width: 100%;
  /* makes the content box scrollable */
  overflow-y: auto;
  overflow-x: hidden;
  /* tween the width of the content box */
  transition: width ${common.animateduration};

  /* when the screen is big, make the content box the page's width minus the sidebar width */
  @media only screen and (min-width: ${common.screensize}) {
    width: calc(100% - ${props => (props.expanded ? 300 : 80)}px);
  }
`;

// Page takes up the entire screen and contains a sidebar and content box
function Page(props) {
  // expanded: indicates whether the sidebar is expanded
  const [expanded, setExpanded] = useState(false);
  return (
    <Wrapper role="page" data-testid={props["data-testid"]}>
      <Sidebar
        data-testid={`${props["data-testid"]}-sidebar`}
        // onToggle is a custom event for the Sidebar to open and close the sidebar
        onToggle={() => {
          setExpanded(!expanded);
        }}
        expanded={expanded}
      />
      <Content expanded={expanded}>{props.children}</Content>
    </Wrapper>
  );
}

export default Page;
