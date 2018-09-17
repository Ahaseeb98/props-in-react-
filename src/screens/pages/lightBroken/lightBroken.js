import React, { Component } from 'react';
// import onBulb from '../../../c.webp';
import '../../../App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class LightOn extends Component {
  constructor(props) {
    super(props)
    this.state = {
          counter: 0
        }
    }
  render() {
    console.log(this.props.name)
    return (
        <div className="App">
        <button type="button" onClick={this.props.x}> Reset </button>
        </div>
    );
  }
}

export default LightOn;
