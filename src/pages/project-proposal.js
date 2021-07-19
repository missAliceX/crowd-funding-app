import styled from "styled-components";
import colors from "styles/colors.module.scss";
import common from "styles/common.module.scss";
import Page from "components/page";
import Input from "components/input";
import InputList from "components/input-list";

const Form = styled.div`
  /* adjusts the size of the form */
  width: calc(100% - 6em);
  max-width: 800px;
  margin: 2em auto;
  padding: 2em;

  /* styling it a little bit */
  background: ${colors.white};
  border-radius: ${common.borderradius};
  color: ${colors.ink};

  > div {
    margin: 0.5em 0;
  }

  /* when the screen is small, make it take up the whole content box */
  @media only screen and (max-width: ${common.screensize}) {
    width: calc(100% - 4em);
    height: calc(100vh - 2em);
    margin: 0;
    overflow-y: auto;
  }
`;

function ProjectProposalPage() {
  return (
    <Page>
      <Form>
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
          Breakdown your problems into bullet points. People can echo these
          problems by clicking on the Me Too button. This will help define the
          scope of your project.
        </div>
        <InputList id="problems" data-testid="problems" />
      </Form>
    </Page>
  );
}

export default ProjectProposalPage;
