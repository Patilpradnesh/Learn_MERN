import { NavLink } from "react-router-dom";
import React from "react";


 const Error = () => {
  return (
    <>
      <div id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page Not Found</h4>
          
          <p>
            Oops! It seems like the page you're trying to access doesn't exist.
            if you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>

          <div className="btn-group">
            <a href="/" className="btn">Return Home</a>
            <a href="/service" className="btn">Report problem</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
