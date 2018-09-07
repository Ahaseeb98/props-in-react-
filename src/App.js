import React, { Component } from 'react';
import defaultBulb from './b.jpg';
import onBulb from './c.webp';
import brokenBulb from './a.jpg';
import './App.css';
import LightOff from './screens/pages/lightOff/lightoff';
import LightOn from './screens/pages/lightOn/lightOn';
import LightBroken from './screens/pages/lightBroken/lightBroken';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
          counter: 0
        }
        this.func = this.func.bind(this)
  }
    func() {
      if(this.state.counter !== 2) {
        this.setState({
          counter: this.state.counter + 1
        })
      } 
      else {
        this.setState({
          counter: 0
        })
      }
      
    }
  render() {
    const {counter} = this.state
    const arr = [
       defaultBulb,
          onBulb,
       brokenBulb,
    ]
    return (
        <div className="App">
          <img className="bulb" src={arr[this.state.counter]} />
          {counter === 0 && <LightOff x={this.func}/>}
          {counter === 1 && <LightOn x={this.func}/>}
          {counter === 2 && <LightBroken x={this.func}/>}
        </div>
    );
  }
}

export default App;
