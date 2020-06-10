import React from 'react';
import './App.css';
import Projects from './components/Projects';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <main className='app-container'>
      <Header />
      <Main />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
