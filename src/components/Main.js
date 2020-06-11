import React from 'react';

export default class Main extends React.Component {
  state = {};

  render() {
    return (
      <section className='main-content'>
        <h1>
          Hi there{' '}
          <span role='img' aria-label='waving emoji'>
            👋🏻
          </span>
        </h1>
        <p>
          My name is Austin, and I'm a full stack web developer with an affinity
          towards front-end technologies.
        </p>
        <p>
          I create front-end experiences and back-end APIs using best practices
          in security and the latest UX trends. I also have some experience with
          deploying scaled applications as well as scaffolding databases.
        </p>
      </section>
    );
  }
}
