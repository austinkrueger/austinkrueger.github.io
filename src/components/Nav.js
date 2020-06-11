import React from 'react';
import '../styles/Nav.scss';

export default class Header extends React.Component {
  render() {
    return (
      <nav className='top-nav'>
        <a className='nav-link' href='#about'>
          About
        </a>
        <a className='nav-link' href='#projects'>
          Projects
        </a>
        <a className='nav-link' href='#contact'>
          Contact
        </a>
      </nav>
    );
  }
}
