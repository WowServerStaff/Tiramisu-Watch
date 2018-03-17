import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Container extends Component {
  state = {
    container: {}
  };

  getContainer() {
    axios.get("http://163.172.12.162:27001/containers/" + this.props.match.params.contId)
    .then((response) => {
      const newState = Object.assign({}, this.state, {
        container : response.data.data
      });
      this.setState(newState);
    })
  }

  componentDidMount() {
    this.getContainer();
  }

  render() {
    setTimeout(() => {
      this.getContainer()
    }, 15000);
    return (
      <div>
        <p>{this.state.container.name}</p>
     	  <Link to={`/logs/${this.state.container.id}`}>Logs</Link>
      </div>
    );
  }
}

export default Container;