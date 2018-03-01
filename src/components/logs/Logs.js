import React, { Component } from "react";
import axios from "axios";

class Logs extends Component {
  state = {
    logs: []
  };

  getLogs() {
  	console.log(this.props);
    axios.get("http://163.172.12.162:27001/logs/" + this.props.match.params.contId)
    .then((response) => {
      const newState = Object.assign({}, this.state, {
        logs : response.data.data
      });
      this.setState(newState);
    })
  }

  componentDidMount() {
    this.getLogs();
  }

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