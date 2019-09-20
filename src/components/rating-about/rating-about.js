import React from 'react';

const RatingAbout = (props) => {
  return (
    <div className="rating">
      <h3 className="rating-header">Thank You!</h3>
      <div className="rating-form">
        <p className="form-title">
          This is an experimental concept that is still in development.
        </p>
        <p>
          If you want to be a part of the journey and/or create an account to collect feedback<br/><br/>
          <a href="https://bouncer.developerdom.com">Register for one here</a> by signing up and verifying your email.<br/><br/>
          You can also <a href="mailto:d.caponi@gmail.com">drop me a line</a> or follow the project on <a href="https://www.github.com/dcaponi">github</a>
        </p><br/>
        <p>You can now close your browser window</p>
      </div>
    </div>
  );
}

export default RatingAbout;
