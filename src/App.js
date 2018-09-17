import React, { Component } from 'react';
import fire from './config/fire'
import Login from './screens/pages/login/log';
import Home from './screens/pages/home/home'
import NavBar from './screens/components/navbar'
import './App.css'
class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
    this.handlelogOut = this.handlelogOut.bind(this);

  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user.email);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  handlelogOut = () => {
    fire.auth().signOut();
  }
  render() {
    return (
        <div className="App">
        <NavBar logOut = {this.handlelogOut} user = {this.state.user}/>
        {!this.state.user ? (<Login />) : (<Home />)}
        </div>
    );
  }
}

export default App;
