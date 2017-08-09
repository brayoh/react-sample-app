import React, { Component } from 'react';
import MoviesContainer from "./components/MoviesContainer";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>This is a Demo App for a friend</h2>
          </div>
          <div>
              <h2>Movies List</h2>
              <MoviesContainer />
          </div>
      </div>
    );
  }
}

export default App;
