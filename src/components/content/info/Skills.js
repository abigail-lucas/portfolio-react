import React from 'react';

const hardSkills = [
  {
    name: 'Front End',
    items: [
      {
        name: 'HTML / CSS',
        experience: '4 years',
      },
      {
        name: 'JavaScript',
        experience: '4 years',
      },
      {
        name: 'React',
        experience: '1 years',
      },
      {
        name: 'Other Libraries',
        experience: '2 years',
      },
    ],
  },
  {
    name: 'Back End',
    items: [
      {
        name: 'Python',
        experience: '4 years',
      },
      {
        name: 'Django',
        experience: '4 years',
      },
      {
        name: 'Database Design',
        experience: '3 years',
      },
    ],
  },
  {
    name: 'Other Skills',
    items: [
      {
        name: 'UI/UX Design',
        experience: '~',
      },
      {
        name: 'Project Management',
        experience: '~',
      },
    ],
  },
];

const softSkills = [
  {
    name: 'Placeholder',
    experience: '~',
  },
];

const diplomas = [
  {
    name: 'Placeholder',
    experience: '~',
  },
];

const operateList = (event) => {
  const target = event.target.dataset.target;
  const list = document.getElementById(target);
  if (list.classList.contains('flat')) {
    list.classList.remove('flat');
  } else {
    list.classList.add('flat');
  }
};

const Skills = () => {
  return (
    <div className="skill-container">
      <h4
        className="skills-container-header"
        data-target="hard-skills"
        onClick={operateList}
      >
        <span data-target="hard-skills"></span>Hard Skills
      </h4>
      <ul className="skills-list flat" id="hard-skills">
        {hardSkills.map((s) => {
          return (
            <React.Fragment>
              <li className="skill-header">{s.name}</li>
              {s.items.map((i) => {
                return (
                  <li className="skill-item">
                    <div>{i.name}</div>
                    <div>{i.experience}</div>
                  </li>
                );
              })}
            </React.Fragment>
          );
        })}
      </ul>

      <h4
        className="skills-container-header"
        data-target="soft-skills"
        onClick={operateList}
      >
        <span data-target="soft-skills"></span>Soft Skills
      </h4>
      <ul className="skills-list flat" id="soft-skills">
        {softSkills.map((s) => {
          return (
            <li className="skill-item">
              <div>{s.name}</div>
              <div>{s.experience}</div>
            </li>
          );
        })}
      </ul>

      <h4
        className="skills-container-header"
        data-target="diplomas"
        onClick={operateList}
      >
        <span data-target="diplomas"></span>Diplomas
      </h4>
      <ul className="skills-list flat" id="diplomas">
        {diplomas.map((d) => {
          return (
            <li className="skill-item">
              <div>{d.name}</div>
              <div>{d.experience}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Skills;
