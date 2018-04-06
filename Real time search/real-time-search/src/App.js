import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          Here The whole list goes
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
