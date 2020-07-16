import React from 'react';
import Skills from './info/Skills';
import About from './info/About';
import Social from './info/Social';

const Info = () => {
  return (
    <div className="info">
      <div className="flex-item">
        <Skills />
      </div>
      <div className="flex-item">
        <About />
        <Social />
      </div>
    </div>
  );
};

export default Info;
