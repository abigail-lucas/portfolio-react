import React from 'react';

const projectsList = [
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
      <h2 className="projects-header">Previous Projects</h2>
      <div className="projects-list">
        {projectsList.map((p) => {
          return (
            <div className="project-card">
              <h4>{p.name}</h4>
              <img src={p.image} placeholder={p.imagePlaceholder}></img>
              <p>{p.description}</p>
              {p.icons.map((i) => {
                <i className={i}></i>;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
