import React from 'react';

export default class Blogs extends React.Component {
  state = {
    blogs: [],
  };

  render() {
    return (
      <div className="blog-row">
        <div className="blog-description">
          Nothing here yet! Check back soon{' '}
          <span role="img" aria-label="toothy smile emoji">
            😁
          </span>
        </div>
      </div>
    );
  }
}
