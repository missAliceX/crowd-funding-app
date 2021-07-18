import styled from "styled-components";
import colors from "styles/colors.module.scss";
import common from "styles/common.module.scss";
import Page from "components/page";
import Input from "components/input";
import InputList from "components/input-list";

const Content = styled.div`
  width: calc(100% - 6em);
  max-width: 800px;
  background: ${colors.white};
  border-radius: ${common.borderradius};
  color: ${colors.ink};
  margin: 2em auto;
  padding: 2em;

  @media only screen and (max-width: ${common.screensize}) {
    width: calc(100% - 4em);
    margin: 0;
    height: calc(100vh - 2em);
    overflow-y: auto;
  }

  > div {
    margin: 0.5em 0;
  }
`;

function ProjectProposalPage() {
  return (
    <Page>
      <Content>
        <div className="lg center">Create Project Proposal</div>

        <div className="sm bold">Project Name</div>
        <Input
          id="project-name"
          data-testid="project-name"
          inline
          placeholder="name your project"
        />

        <div className="sm bold">Tagline</div>
        <div className="sm italic indent">
          This is the one liner that will get people to check out your project.
        </div>
        <Input
          id="tagline"
          data-testid="tagline"
          placeholder="enter your tagline"
        />

        <div className="sm bold">Problem Statements</div>
        <div className="sm italic indent">
          Breakdown your problems into bullet points. People can say they also
          have these problems by clicking on the Me Too button. This will help
          define the scope of your project.
        </div>
        <InputList id="problems" data-testid="problems" />
      </Content>
    </Page>
  );
}

export default ProjectProposalPage;
