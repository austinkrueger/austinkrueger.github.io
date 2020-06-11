import React from 'react';
import './App.scss';
import Projects from './components/Projects';
import Header from './components/Header';
import Intro from './components/Intro';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <main className='app-container'>
      <div className='landing-container'>
        <Header />
        <Intro />
      </div>
      {/* <About />
      <Projects />
      <Footer /> */}
    </main>
  );
}

export default App;
