import React from 'react';
import '../styles/Intro.scss';

export default class Intro extends React.Component {
  render() {
    return (
      <section className='main-content'>
        <h1 className='main-hello'>
          Hi there{' '}
          <span role='img' aria-label='waving emoji'>
            👋🏻
          </span>
        </h1>
        <h2 className='main-tag'>
          I'm <span className='name'>Austin Krueger</span>, a software engineer
          specializing in creating user-focused experiences and fast APIs.
        </h2>
        <h3 className='main-contact'>
          Let's chat!{' '}
          <a
            className='highlight-link'
            href='mailto:akruegr@gmail.com'
            rel='noopener noreferrer'
            target='_blank'>
            akruegr@gmail.com
          </a>
        </h3>
      </section>
    );
  }
}
