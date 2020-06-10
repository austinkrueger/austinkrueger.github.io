import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className='footer-container'>
        <footer className='footer'>
          <p>
            &copy;2020 All Rights Reserved. Questions, Comments, Book
            suggestions?{' '}
            <a href='mailto:akruegr@gmail.com' className='highlight'>
              Send me an email!
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
