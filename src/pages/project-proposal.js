import styled from "styled-components";
import colors from "styles/colors.module.scss";
import common from "styles/common.module.scss";
import Page from "components/page";
import Input from "components/input";

const Box = styled.div`
  width: calc(100% - 4em);
  background: ${colors.white};
  color: ${colors.ink};
  margin: 2em;
  border-radius: ${common.borderradius};
`;

const Content = styled.div`
  padding: 1em;
`;

function ProjectProposalPage() {
  return (
    <Page>
      <Box>
        <Content>
          <div className="lg center">Create Project Propsal</div>
          <Input
            value="lifepath.ai"
            label="Project Name"
            description="This is the name of your project"
          />
        </Content>
      </Box>
    </Page>
  );
}

export default ProjectProposalPage;
