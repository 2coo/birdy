import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/LandingPages/Home/Home";

import "assets/scss/material-kit-react.scss?v=1.4.0";

const app = (
  <BrowserRouter>
    <Switch>
      <Route path="/contact" render={() => <div>contact</div>} />
      <Route path="/news" render={() => <div>news</div>} />
      <Route path="/schools" render={() => <div>schools</div>} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
