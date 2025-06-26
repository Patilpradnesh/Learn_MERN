import { NavLink } from "react-router-dom";

export const Error = () => {
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

          <div className="btns">
            <NavLink to="/">Return Home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
