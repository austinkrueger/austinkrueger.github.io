import React from 'react';
import headshot from '../images/IMG_0009.jpg';
import Nav from './Nav';
import '../styles/Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header-content'>
        <img src={headshot} alt='nice headshot' className='img-element' />
        <Nav />
      </header>
    );
  }
}
