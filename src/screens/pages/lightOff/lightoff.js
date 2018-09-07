import React, { Component } from 'react';
// import onBulb from '../../../c.webp';
import '../../../App.css';

class LightOn extends Component {
  constructor(props) {
    super(props)
    this.state = {
          counter: 0
        }
    }
  render() {
    const {x} = this.props;
        return (
        <div className="App">
        <button type="button" onClick={x}> click Me! </button>
        </div>
    );
  }
}

export default LightOn;
