import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import HalfBackgroundImage from "./components/organism/left-half-background-cover";
import LoginForm from "./components/organism/login-form"
class App extends Component {
  render() {
    return (
        <HalfBackgroundImage footer="Term of use. Privacy policy">
          <LoginForm />
        </HalfBackgroundImage>
    );
  }
}

export default App;
