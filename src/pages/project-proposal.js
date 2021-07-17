import styled from "styled-components";
import colors from "styles/colors.module.scss";
import common from "styles/common.module.scss";
import Page from "components/page";
import Input from "components/input";

const padding = 1;
const margin = 2;

const Content = styled.div`
  width: calc(100% - 6em);
  max-width: 800px;
  background: ${colors.white};
  border-radius: ${common.borderradius};
  color: ${colors.ink};
  margin: ${margin}em auto;
  padding: ${padding}em;
`;

function ProjectProposalPage() {
  return (
    <Page>
      <Content>
        <div className="lg center">Create Project Propsal</div>
        <Input inline placeholder="name your project" label="Project Name" />
        <Input
          placeholder="enter your tagline"
          label="Tagline"
          description="This is the one liner that will get people to check out your project."
        />
      </Content>
    </Page>
  );
}

export default ProjectProposalPage;
