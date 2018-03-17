import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

/**
 * Single container component
 * 
 * @module Container
 */
class Container extends Component {

  // State of the component, link data with the template
  state = {
    container: {}
  };

  /**
   * Method which get the container related to the given id.
   * Add it to the state.
   *
   * @method getContainer
   */
  getContainer() {
    axios.get("http://163.172.12.162:27001/containers/" + this.props.match.params.contId)
    .then((response) => {
      const newState = Object.assign({}, this.state, {
        container : response.data.data
      });
      this.setState(newState);
    })
  }

  /**
   * Method which get the container when the
   * component is mounted
   *
   * @method componentDidMount
   */
  componentDidMount() {
    this.getContainer();
  }

  /**
   * Method which displays the container informations.
   * Refresh the container every 15 seconds.
   *
   * @method render
   * @return {JSX} container template
   */
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