import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../home/Home";
import Containers from "../containers/Containers";
import Container from "../containers/container/Container";
import Logs from "../logs/Logs";

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/containers" component={Containers}/>
          <Route path="/logs/:contId" component={Logs}/>
          <Route path="/containers/:contId" component={Container}/>
        </Switch>
      </main>
    );
  }
}

export default Main;