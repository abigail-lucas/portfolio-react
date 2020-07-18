import React from 'react';

const links = {
  github: 'https://github.com/abigail-lucas',
  linkedin: 'https://www.linkedin.com/in/abigail-lucas-6377bb1b1/',
  codwars: 'https://www.codewars.com/users/abigail-lucas',
};

const Social = () => {
  return (
    <div className="social-links">
      <a target="_blank" href={links.github}>
        <i className="fab fa-github"></i>
      </a>
      <a target="_blank" href={links.linkedin}>
        <i className="fab fa-linkedin"></i>
      </a>
      <a target="_blank" href={links.codwars}>
        <span
          className="iconify"
          data-icon="simple-icons:codewars"
          data-inline="false"
        ></span>
      </a>
    </div>
  );
};

export default Social;
