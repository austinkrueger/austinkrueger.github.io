import React from 'react';
import './App.css';
import headshot from './IMG_0009.jpg';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
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

function App() {
  return (
    <main className="main-container">
      <header className="header-content">
        <img src={headshot} alt="nice headshot" className="img-element" />
        <h3 className="header-text">Austin Krueger</h3>
      </header>
      <section className="main-content">
        <h1>
          Hi there{' '}
          <span role="img" aria-label="waving emoji">
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
        <p>
          I'm currently working on a few{' '}
          <a
            href="https://www.github.com/austinkrueger"
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            projects
          </a>{' '}
          in order to learn new technologies and sharpen my skills.
        </p>
        <p>
          Outside of technology and the web I enjoy a thrilling book, learning
          about the culinary arts, and watching movies on the big screen.
        </p>
        <div className="icon-card">
          <p>Here are a few of the technologies I am familiar with: </p>
          <div className="tech-row">
            <FontAwesomeIcon icon={faHtml5} className="icon" />
            <FontAwesomeIcon icon={faCss3Alt} className="icon" />
            <FontAwesomeIcon icon={faJs} className="icon" />
            <FontAwesomeIcon icon={faPython} className="icon" />
            <FontAwesomeIcon icon={faAngular} className="icon" />
            <FontAwesomeIcon icon={faReact} className="icon" />
            <FontAwesomeIcon icon={faDocker} className="icon" />
            <FontAwesomeIcon icon={faGit} className="icon" />
            <FontAwesomeIcon icon={faNpm} className="icon" />
            <FontAwesomeIcon icon={faSass} className="icon" />
          </div>
          <p>Lastly, here are a few places you can contact me:</p>
          <div className="contact-row">
            <a
              className="social-icon"
              href="https://www.github.com/austinkrueger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/austin-krueger-425828146/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a
              className="social-icon"
              href="https://www.twitter.com/AustinDevEmoji"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
          </div>
        </div>
      </section>
      <section className="project-content">
        <h1 className="projects-header">
          Projects{' '}
          <span role="img" aria-label="rocketship emoji">
            🚀
          </span>
        </h1>
        <Projects />
        <div className="link-row">
          <a
            href="https://www.github.com/austinkrueger"
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            See eveything I'm working on
          </a>
        </div>
      </section>
      {/* <section className="blog-content">
        <h1 className="blog-header">
          Blogs{' '}
          <span role="img" aria-label="guy behind computer emoji">
            👨🏻‍💻
          </span>
        </h1>
        <Blogs />
        <div className="link-row">
          <a
            href="https://austinkrueger.github.io/blogs"
            className="highlight"
            target="_blank"
            rel="noopener noreferrer"
          >
            See all my blog posts
          </a>
        </div>
      </section> */}
      <footer className="footer">
        <p>
          &copy;2020 All Rights Reserved. Questions, Comments, Book suggestions?{' '}
          <a href="mailto:akruegr@gmail.com" className="highlight">
            Send me an email!
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
