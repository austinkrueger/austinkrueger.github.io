import React from 'react';
import './App.scss';
// import Projects from './components/Projects';
import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import About from './components/About';

function App() {
  // const d = new Date();
  // const hours = d.getHours();
  // const night = hours >= 19 || hours <= 7; // between 7pm and 7am
  // const body = document.querySelector('body');
  // const toggle = document.getElementById('toggle');
  // const input = document.getElementById('switch');

  // if (night) {
  //   input.checked = true;
  //   body.classList.add('night');
  // }

  // toggle.addEventListener('click', function () {
  //   const isChecked = input.checked;
  //   if (isChecked) {
  //     body.classList.remove('night');
  //   } else {
  //     body.classList.add('night');
  //   }
  // });
  return (
    <main className='app-container'>
      {/* <Switch /> */}
      <Header />
      {/* <About />
      <Projects />
      <Footer /> */}
    </main>
  );
}

export default App;
