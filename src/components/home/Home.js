import React, { Component } from 'react';

/**
 * Home component
 *
 * @module Home
 */
class Home extends Component {

  /**
   * Method rendering the home template
   *
   * @method render
   * @return {JSX} home template
   */
  render() {
    return (
        <p className="App-intro">
          A React test to the docker supervision of the Tiramisu WoW Server
        </p>
    );
  }
}

export default Home;