import React from 'react';

import axios from 'axios';

export default class Projects extends React.Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/austinkrueger/repos`).then(res => {
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
      <div className="project-container">
        {project_list.slice(0, 3).map(project => (
          <div className="card-row" id={project.id}>
            <div className="card-description">
              <h3>{project.name}</h3>
              <p>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.full_name}
                </a>
              </p>
              <p>{project.description}</p>
              <h5>Language Used: {project.language || 'N/A'}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
