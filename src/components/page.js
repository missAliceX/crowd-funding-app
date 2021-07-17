import styled from "styled-components";
import common from "styles/common.module.scss";
import colors from "styles/colors.module.scss";
import Sidebar from "components/sidebar";
import React, { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: ${colors.abyss};
  color: ${colors.paper};
  > div {
    display: inline-block;
  }
`;

const Content = styled.div`
  height: 100vh;
  width: calc(100% - ${props => (props.expanded ? 300 : 80)}px);
  overflow-y: auto;
  overflow-x: hidden;
  transition: width ${common.animateduration};
`;

function Page(props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Wrapper>
      <Sidebar onToggle={setExpanded} expanded={expanded} />
      <Content expanded={expanded}>{props.children}</Content>
    </Wrapper>
  );
}

export default Page;
