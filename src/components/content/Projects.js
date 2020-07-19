import React from 'react';
import PortfolioImg from '../../static/img/portfolio_card_image.png';

const projectsList = [
  {
    name: 'Online Portfolio',
    image: PortfolioImg,
    imagePlaceholder: 'Image',
    description: 'This very portfolio',
    icons: ['fab fa-react', 'fab fa-html5', 'fab fa-sass'],
  },
  {
    name: 'Placeholder',
    image: '',
    imagePlaceholder: 'Image',
    description: 'This is just a placeholder',
    icons: ['fab fa-python', 'fab fa-html5'],
  },
  {
    name: 'Placeholder',
    image: '',
    imagePlaceholder: 'Image',
    description: 'This is just a placeholder',
    icons: ['fab fa-python', 'fab fa-html5'],
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-header">Showcased Projects</h2>
      <div className="projects-list">
        {projectsList.map((p) => {
          return (
            <div className="project-card">
              <h4>{p.name}</h4>
              <div className="img-container">
                <img src={p.image} placeholder={p.imagePlaceholder}></img>
              </div>
              <p>{p.description}</p>
              <div className="project-tech-list">
                {p.icons.map((i) => {
                  return <i className={i}></i>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
