import styled from 'styled-components'
import colors from 'styles/colors.module.scss'
import common from 'styles/common.module.scss'
import Page from 'components/page'
import Input from 'components/input'
import Button from 'components/button'
import InputList from 'components/input-list'
import { handleSubmit } from 'hooks/form'
import { proposeProject } from 'api/projects'

const Form = styled.form`
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
    margin: 1em 0;
  }

  /* when the screen is small, make it take up the whole content box */
  @media only screen and (max-width: ${common.screensize}) {
    width: calc(100% - 4em);
    height: calc(100vh - 2em);
    margin: 0;
    overflow-y: auto;
  }
`

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

function ProjectProposalPage (props) {
  const onSubmit = (data, errs) => {
    // The form has some invalid fields
    if (errs.length > 0) {
      console.error("invalid fields", errs)
      return
    }

    // We will send the data to the server
    proposeProject(data).then(() => {
      console.debug("server received and stored project proposal")
    }).catch((err) => {
      console.error("failed to propose project")
    });
  }

  return (
    <Page id={props.id}>
      <Form
        onSubmit={handleSubmit(onSubmit, {
          'project-name': { validate: 'text' },
          tagline: { validate: 'text' },
          problems: { validate: 'text' },
          solutions: { validate: 'text' }
        })}
      >
        <div className='lg center'>Create Project Proposal</div>
        <div className='sm bold'>Project Name</div>
        <Input id='project-name' inline placeholder='name your project' />
        <div className='sm bold'>Tagline</div>
        <div className='sm italic indent'>
          This is the one liner that will get people to check out your project.
        </div>
        <Input id='tagline' placeholder='enter your tagline' />
        <div className='sm bold'>Problem Statements</div>
        <div className='sm italic indent'>
          Breakdown your problems into bullet points. People can echo these
          problems by clicking on the Me Too button. This will help define the
          scope of your project.
        </div>
        <InputList id='problems' />

        <ButtonsWrapper>
          <Button type='cancel'>Cancel</Button>
          <Button type='submit'>Propose</Button>
        </ButtonsWrapper>
      </Form>
    </Page>
  )
}

export default ProjectProposalPage
