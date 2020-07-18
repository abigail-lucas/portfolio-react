import React, { Component } from 'react';
import Navigation from './components/layout/Navigation';
import Landing from './components/content/Landing';
import Info from './components/content/Info';
import Projects from './components/content/Projects';
import History from './components/content/History';

import './static/css/index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Landing />
        <div className="content-container">
          <Info />
        </div>
        <div className="projects-container">
          <Projects />
        </div>
        <History />
      </div>
    );
  }
}

export default App;
