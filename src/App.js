import { BrowserRouter as Router } from "react-router-dom";
import "materialize-css";
import { useRoutes } from "./routes";

function App() {
  return (
    <Routes />
  );
  }

function Routes() {
  const routes = useRoutes(false);
  return (
    <Router>
      <div>{routes}</div>
    </Router>
  );
}

export default App;
