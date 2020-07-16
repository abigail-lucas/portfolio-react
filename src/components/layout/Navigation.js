import React from 'react';
import Sidebar from './Sidebar';

const HideShowSidebar = () => {
  const sidebar = document.getElementById('sidebar');
  const backgroundShadow = document.getElementById('background-shadow');

  if (sidebar.style.width === '0px') {
    sidebar.style.width = '';
    backgroundShadow.style.backgroundColor = '';
    backgroundShadow.style.display = '';
  } else {
    sidebar.style.width = '0px';
    backgroundShadow.style.backgroundColor = 'initial';
    setTimeout(function () {
      backgroundShadow.style.display = 'none';
    }, 250);
  }
};

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="navigation">
        <i className="fas fa-bars nav-icon" onClick={HideShowSidebar}></i>
        <h4 className="nav-header">Abigail Lucas</h4>
      </nav>
      <Sidebar />
    </React.Fragment>
  );
};

export default Navigation;
