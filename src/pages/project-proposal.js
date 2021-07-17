import styled from "styled-components";
import colors from "styles/colors.module.scss";
import common from "styles/common.module.scss";
import Page from "components/page";
import Input from "components/input";

const Content = styled.div`
  width: calc(100% - 6em);
  max-width: 800px;
  background: ${colors.white};
  border-radius: ${common.borderradius};
  color: ${colors.ink};
  margin: 2em auto;
  padding: 1em;

  @media only screen and (max-width: ${common.screensize}) {
    width: calc(100% - 2em);
    padding: 1em;
    margin: 0;
    height: calc(100vh - 2em);
    overflow-y: auto;
  }
`;

function ProjectProposalPage() {
  return (
    <Page>
      <Content>
        <div className="lg center">Create Project Proposal</div>
        <Input
          data-testid="project-name"
          inline
          placeholder="name your project"
          label="Project Name"
        />
        <Input
          data-testid="tagline"
          placeholder="enter your tagline"
          label="Tagline"
          description="This is the one liner that will get people to check out your project."
        />
      </Content>
    </Page>
  );
}

export default ProjectProposalPage;
