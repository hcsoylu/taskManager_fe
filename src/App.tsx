import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="bg-blue-200 mx-auto min-h-screen py-5 ">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/edit/:id" component={EditPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
