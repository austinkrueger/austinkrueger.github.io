import React from 'react';
import headshot from '../images/IMG_0009.jpg';

export default class Header extends React.Component {
  state = {};

  render() {
    return (
      <div className='header-container'>
        <header className='header-content'>
          <img src={headshot} alt='nice headshot' className='img-element' />
          <h3 className='header-text'>Austin Krueger</h3>
        </header>
      </div>
    );
  }
}
