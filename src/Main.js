import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Containers from "./Containers";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/containers" component={Containers}/>
        </Switch>
      </main>
    );
  }
}

export default Main;