import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

/**
 * Containers component, list all the docker containers
 * 
 * @module Containers
 */
class Containers extends Component {

  // State of the component, link data with the template
  state = {
    containers: []
  };

  /**
   * Method which get all the docker containers.
   * Add them to the state.
   *
   * @method getContainers
   */
  getContainers() {
    axios.get("http://163.172.12.162:27001/containers")
    .then((response) => {
      const newState = Object.assign({}, this.state, {
        containers : response.data.data
      });
      this.setState(newState);
    })
  }

  /**
   * Method which get the containers when the
   * component is mounted
   *
   * @method componentDidMount
   */
  componentDidMount() {
    this.getContainers();
  }

  /**
   * Method which displays the docker containers.
   * Refresh the containers every 15 seconds.
   *
   * @method render
   * @return {JSX} containers template
   */
  render() {
    setTimeout(() => {
      this.getContainers()
    }, 15000);
    return (
      <ul>
        {
          this.state.containers.map((container, index) => {
            return <li key={index}><Link to={`/containers/${container.id}`}>{container.name}</Link></li>;
          })
        }
      </ul>
    );
  }
}

export default Containers;
