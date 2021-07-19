import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectProposalPage from "pages/project-proposal";
import "index.css";
import "styles/text.scss";

function App() {
  // path="/" is the URL when the app loads, we are choosing to show the ProjectProposalPage component
  return (
    <Router>
      <Route path="/" component={ProjectProposalPage} />
      <Route path="/project/proposal" component={ProjectProposalPage} />
    </Router>
  );
}

export default App;
