import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';


class App extends Component {
  render() {
    return (
      <div >
        <Navigation />
        <Logo />
      </div>
    );
  }
}

export default App;
