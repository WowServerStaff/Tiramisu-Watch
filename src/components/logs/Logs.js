import React, { Component } from "react";
import RESTService from "../../services/RESTService";

/**
 * Logs component, get the logs of the specified container
 * 
 * @module Logs
 */
class Logs extends Component {

  // State of the component, link data with the template
  state = {
    logs: []
  };

  // Basic rest service
  service = new RESTService("logs");

  /**
   * Method which get the logs of the container.
   * Add them to the state.
   *
   * @method getLogs
   */
  getLogs() {
    this.service.getById(this.props.match.params.contId)
    .then((response) => {
      const newState = Object.assign({}, this.state, {
        logs : response.data.data
      });
      this.setState(newState);
    })
  }


  /**
   * Method which get the logs when the
   * component is mounted
   *
   * @method componentDidMount
   */
  componentDidMount() {
    this.getLogs();
  }

  /**
   * Method which displays the container logs.
   * Refresh the logs every 15 seconds.
   *
   * @method render
   * @return {JSX} logs template
   */
  render() {
    setTimeout(() => {
      this.getLogs()
    }, 15000);
    return (
     	<p dangerouslySetInnerHTML={{ __html: this.state.logs }}></p>
    );
  }
}

export default Logs;