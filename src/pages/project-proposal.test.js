import { render, screen, fireEvent } from '@testing-library/react'
import ProjectProposalPage from 'pages/project-proposal'

test('renders title and navbar', () => {
  render(<ProjectProposalPage id='project-proposal-page' />)
  const title = screen.getByText(/create project proposal/i)
  expect(title).toBeInTheDocument()
  const navbar = screen.getByTestId('project-proposal-page-navbar')
  expect(navbar).toBeInTheDocument()
})

test('renders project name', () => {
  render(<ProjectProposalPage id='project-proposal-page' />)
  const label = screen.getByText(/project name/i)
  expect(label).toBeInTheDocument()
  const ele = screen.getByTestId('project-name')
  expect(ele).toBeInTheDocument()
})

test('renders tagline', () => {
  render(<ProjectProposalPage id='project-proposal-page' />)
  const label = screen.getByText(/tagline/i)
  expect(label).toBeInTheDocument()
  const ele = screen.getByTestId('tagline')
  expect(ele).toBeInTheDocument()
})

test('renders problem statements', () => {
  render(<ProjectProposalPage id='project-proposal-page' />)
  const label = screen.getByText(/problem statements/i)
  expect(label).toBeInTheDocument()
  const ele = screen.getByTestId('problems')
  expect(ele).toBeInTheDocument()

  fireEvent.change(screen.getByTestId('problems-add'), {
    target: { value: 'this is some problem' }
  })
  const problem1 = screen.getByTestId('problems-0')
  expect(problem1).toBeInTheDocument()
})

// Implement these tests back in once you are ready
test('renders solutions', () => {})

test('renders tags', () => {})

test('renders cover image url', () => {})

test('renders cover image preview', () => {})

test('sends form data to server on button click', () => {})