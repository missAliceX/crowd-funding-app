import styled from "styled-components";
import colors from "styles/colors.module.scss";
import common from "styles/common.module.scss";
import Page from "components/page";
import Input from "components/input";

const paddingWidth = 1;

const Content = styled.div`
  width: calc(100% - 6em);
  max-width: 800px;
  background: ${colors.white};
  color: ${colors.ink};
  margin: 2em auto;
  border-radius: ${common.borderradius};
  padding: ${paddingWidth}em;
`;

function ProjectProposalPage() {
  return (
    <Page>
      <Content>
        <div className="lg center">Create Project Propsal</div>
        <Input placeholder="name your project" label="Project Name" />
        <Input
          width={`100% - ${2 * paddingWidth}em`}
          placeholder="enter your tagline"
          label="Tagline"
          description="This is the one liner that will get people to check out your project."
        />
      </Content>
    </Page>
  );
}

export default ProjectProposalPage;
