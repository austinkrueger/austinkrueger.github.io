import React from 'react';

import axios from 'axios';

export default class Projects extends React.Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/austinkrueger/repos`)
      .then((res) => {
        const projects = res.data;
        this.setState({ projects });
      });
  }

  render() {
    const project_list = this.state.projects;
    for (var i = project_list.length - 1; i >= 0; i--) {
      if (project_list[i].name === 'austinkrueger.github.io') {
        project_list.splice(i, 1);
      }
    }
    return (
      <div className='project-container'>
        <section className='project-content'>
          <h1 className='projects-header'>
            Projects{' '}
            <span role='img' aria-label='rocketship emoji'>
              🚀
            </span>
          </h1>
          {project_list.map((project) => (
            <div className='card-row' key={project.id}>
              <div className='card-description'>
                <h3>{project.name}</h3>
                <p>
                  <a
                    href={project.html_url}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {project.full_name}
                  </a>
                </p>
                <p>{project.description}</p>
                <h5>Language Used: {project.language || 'N/A'}</h5>
                {project.homepage && (
                  <p>
                    <a
                      href={project.homepage}
                      target='_blank'
                      rel='noopener noreferrer'>
                      View the demo
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
          <div className='link-row'>
            <a
              href='https://www.github.com/austinkrueger'
              className='highlight'
              target='_blank'
              rel='noopener noreferrer'>
              See eveything I'm working on
            </a>
          </div>
        </section>
      </div>
    );
  }
}
