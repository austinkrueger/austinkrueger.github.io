import React from 'react';
import './App.scss';

function App() {
  return (
    <section className='main-content'>
      <h2 className='main-tag'>
        Hi, I'm <span className='name'>Austin Krueger</span>, my portfolio has
        moved to a different castle, but you can still find a couple projects
        like my{' '}
        <a
          className='highlight-link'
          href='https://austinkrueger.github.io/css-grid-vis'
          rel='noopener noreferrer'
          target='_blank'>
          CSS Grid Visualizer
        </a>{' '}
        or
        <a
          className='highlight-link'
          href='https://austinkrueger.github.io/learning-jasmine'
          rel='noopener noreferrer'
          target='_blank'>
          Card Data Randomizer
        </a>{' '}
        here.
      </h2>
      <h3 className='main-contact'>
        Feel free to send me an email if you'd like to get in touch{' '}
        <a
          className='highlight-link'
          href='mailto:akruegr@gmail.com'
          rel='noopener noreferrer'
          target='_blank'>
          akruegr@gmail.com
        </a>
        <br />
        Otherwise, check out my new site{' '}
        <a
          className='highlight-link'
          href='https://austinkrueger.dev'
          rel='noopener noreferrer'
          target='_blank'>
          austinkrueger.dev
        </a>
      </h3>
    </section>
  );
}

export default App;
