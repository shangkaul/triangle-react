import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import IsTriangle from "./IsTriangle";
import App from "./App";
import Hypotenuse from "./Hypotenuse";
import Area from "./Area";
import Quiz from "./Quiz";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Quiz}></Route>
        <Route path="/quiz" component={Quiz}></Route>
        <Route path="/hypotenuse" component={Hypotenuse}></Route>
        <Route path="/istriangle" component={IsTriangle}></Route>
        <Route path="/area" component={Area}></Route>
      </Switch>
    </Router>
  </StrictMode>,
  rootElement
);
