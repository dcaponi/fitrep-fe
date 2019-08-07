import React from 'react';

import './rating-about.css';
const RatingAbout = (props) => {
  return (
    <div className="rating">
      <h3 className="rating-header">Thank You!</h3>
      <div className="rating-form">
        <p className="form-title">
          This is an experimental concept that is still in development.
        </p>
        <p>
          If you want to be a part of the journey or get your own account to collect feedback <a href="mailto:d.caponi@gmail.com">drop me a line </a>
          or follow the project on <a href="https://www.github.com/dcaponi">github</a>
        </p><br/>
        <p>You can now close your browser window</p>
      </div>
    </div>
  );
}

export default RatingAbout;
