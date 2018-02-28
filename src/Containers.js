import React, { Component } from 'react';
import axios from "axios";

class Containers extends Component {
  state = {
    containers: []
  };

  getContainers() {
    axios.get("http://163.172.12.162:27001/containers")
    .then((response) => {
      const newState = Object.assign({}, this.state, {
        containers : response.data.data
      });
      this.setState(newState);
    })
  }

  componentDidMount() {
    this.getContainers();
  }

  render() {
    setTimeout(() => {
      this.getContainers()
    }, 15000);
    return (
      <ul>
        {
          this.state.containers.map((container, index) => {
            return <li key={index}><a href="">{container.name}</a></li>;
          })
        }
      </ul>
    );
  }
}

export default Containers;