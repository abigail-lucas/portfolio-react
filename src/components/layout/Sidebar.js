import React from 'react';

const Sidebar = () => {
  return (
    <React.Fragment>
      <div className="sidebar" id="sidebar" style={{ width: '0' }}>
        <ul id="sidebar-content">
          <li>woof</li>
          <li>woof</li>
          <li>woof</li>
          <li>woof</li>
        </ul>
      </div>
      <div
        className="background-shadow"
        id="background-shadow"
        style={{ display: 'none', backgroundColor: 'initial' }}
      ></div>
    </React.Fragment>
  );
};

export default Sidebar;
