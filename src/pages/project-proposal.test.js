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

// Add these tests back in once you are ready
// test("renders solutions", () => {
//   render(<ProjectProposalPage id="project-proposal-page" />);
//   const label = screen.getByText(/solutions/i);
//   expect(label).toBeInTheDocument();
//   const ele = screen.getByTestId("solutions");
//   expect(ele).toBeInTheDocument();
// });
//
// test("renders tags", () => {
//   render(<ProjectProposalPage id="project-proposal-page" />);
//   const label = screen.getByText(/tags/i);
//   expect(label).toBeInTheDocument();
//   const ele = screen.getByTestId("tags");
//   expect(ele).toBeInTheDocument();
// });
//
// test("renders cover image url", () => {
//   render(<ProjectProposalPage id="project-proposal-page" />);
//   const label = screen.getByText(/cover image url/i);
//   expect(label).toBeInTheDocument();
//   const ele = screen.getByTestId("cover-image-url");
//   expect(ele).toBeInTheDocument();
// });
//
// test("renders youtube video url", () => {
//   render(<ProjectProposalPage id="project-proposal-page" />);
//   const label = screen.getByText(/youtube video url/i);
//   expect(label).toBeInTheDocument();
//   const ele = screen.getByTestId("youtube-video-url");
//   expect(ele).toBeInTheDocument();
// });
//
// test("collects form data when button is clicked", () => {
// })
