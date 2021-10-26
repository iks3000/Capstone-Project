import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inner from "./pages/Inner";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inner" component={Inner} />
      </Switch>
    </Router>
  );
}

export default App;
