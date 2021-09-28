import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import IsTriangle from "./IsTriangle";
import App from "./App";
import Hypotenuse from "./Hypotenuse";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={IsTriangle}></Route>
        <Route path="/quiz" component={App}></Route>
        <Route path="/hypotenuse" component={Hypotenuse}></Route>
        <Route path="/istriangle" component={IsTriangle}></Route>
        <Route path="/area" component={App}></Route>
      </Switch>
    </Router>
  </StrictMode>,
  rootElement
);
