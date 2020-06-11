import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPython,
  faAngular,
  faReact,
  faDocker,
  faGit,
  faNpm,
  faSass,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default class About extends React.Component {
  render() {
    return (
      <section className='about-section'>
        <p>
          I'm currently working on a few{' '}
          <a
            href='https://www.github.com/austinkrueger'
            className='highlight'
            target='_blank'
            rel='noopener noreferrer'>
            projects
          </a>{' '}
          in order to learn new technologies and sharpen my skills.
        </p>
        <p>
          Outside of technology and the web I enjoy a thrilling book, learning
          about the culinary arts, and watching movies on the big screen.
        </p>
        <div className='icon-card'>
          <p>Here are a few of the technologies I am familiar with: </p>
          <div className='tech-row'>
            <FontAwesomeIcon icon={faHtml5} className='icon' />
            <FontAwesomeIcon icon={faCss3Alt} className='icon' />
            <FontAwesomeIcon icon={faJs} className='icon' />
            <FontAwesomeIcon icon={faPython} className='icon' />
            <FontAwesomeIcon icon={faAngular} className='icon' />
            <FontAwesomeIcon icon={faReact} className='icon' />
            <FontAwesomeIcon icon={faDocker} className='icon' />
            <FontAwesomeIcon icon={faGit} className='icon' />
            <FontAwesomeIcon icon={faNpm} className='icon' />
            <FontAwesomeIcon icon={faSass} className='icon' />
          </div>
          <p>Lastly, here are a few places you can contact me:</p>
          <div className='contact-row'>
            <a
              className='social-icon'
              href='https://www.github.com/austinkrueger'
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>
            <a
              className='social-icon'
              href='https://www.linkedin.com/in/austin-krueger-425828146/'
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className='icon' />
            </a>
            <a
              className='social-icon'
              href='https://www.twitter.com/AustinDevEmoji'
              target='_blank'
              rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faTwitter} className='icon' />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
