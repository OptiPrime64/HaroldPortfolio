import React from "react";
import "../public/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Aboutme from "./components/Aboutme";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Intro />
        <Aboutme /> */}
        <Switch>
          <Route path="/intro" component={Intro} />
          <Route path="/aboutme" component={Aboutme} />
        </Switch>
      </div>
    </Router>
  );
}

{
  /* <Router>
<div>
  <Header />
  <Intro />
  <Switch>
    <Route path="/aboutme" component={Aboutme} />
  </Switch>
</div>
</Router> */
}
