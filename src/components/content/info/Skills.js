import React from 'react';

const Skills = () => {
  return (
    <div className="skill-container">
      <ul className="skills-list">
        <li className="skill-header">Front End</li>
        <li className="skill-item">
          <div>HTML / CSS</div>
          <div>4 years</div>
        </li>
        <li className="skill-item">
          <div>JavaScript</div>
          <div>4 years</div>
        </li>
        <li className="skill-item">
          <div>React</div>
          <div>1 years</div>
        </li>
        <li className="skill-item">
          <div>Other Libraries</div>
          <div>2 years</div>
        </li>

        <li className="skill-header">Backend End</li>
        <li className="skill-item">
          <div>Python</div>
          <div>4 years</div>
        </li>
        <li className="skill-item">
          <div>Django</div>
          <div>4 years</div>
        </li>
        <li className="skill-item">
          <div>Database Design</div>
          <div>3 years</div>
        </li>

        <li className="skill-header">Other</li>
        <li className="skill-item">
          <div>UI/UX Design</div>
          <div>~</div>
        </li>
        <li className="skill-item">
          <div>Project Management</div>
          <div>~</div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
