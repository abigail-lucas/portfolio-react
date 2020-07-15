import React, { Component } from 'react';
import Navigation from './components/layout/Navigation';
import Landing from './components/sections/Landing';
import Info from './components/sections/Info';
import History from './components/sections/History';
import './static/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Landing />
        <Info />
        <History />
      </div>
    );
  }
}

export default App;
