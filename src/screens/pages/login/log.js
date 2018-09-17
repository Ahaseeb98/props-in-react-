import React, { Component } from 'react';
import fire from '../../../config/fire';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    const x = e.target.value;
    //  = x;
    this.setState({ [e.target.name]: e.target.value });

    console.log(x)
    console.log(this.state.password)
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
       <div className="logCont">
                <h1> Log In </h1>

       <TextField
          id="loginemail"
          label="Email..."
          name="email"
          placeholder="Email..."
          value={this.state.email}
          margin="normal"
          onChange={this.handleChange}
        />
        <br />
        <TextField
          id="loginPassword"
          label="Password..."
          name="password"
          placeholder="Password..."
          value={this.state.password}
          margin="normal"
          type="password"
          onChange={this.handleChange}
        />
                <br />
                <br />
                <br />
                <br />

                <Button type="submit" onClick={this.login} variant="contained" size="medium" color="primary">
                                    Sign In
                </Button>
                <span> or </span>
                <Button type="submit" onClick={this.signup} variant="contained" size="medium" color="secondary">
                                    Sign Up
                </Button>
      </div>
    );
  }
}

export default Login;
