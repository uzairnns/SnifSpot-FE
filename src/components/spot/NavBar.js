import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const handleLogOut = () => {
    localStorage.removeItem('token')
    props.setLoggedin(false)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">SniffSpot</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {props.loggedin ? (
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <button className="nav-link btn btn-outline-primary me-2" onClick={handleLogOut}>Logout</button>
              </li>
            </ul>
          </div>
          ):(
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary" to="/login">Login</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link btn btn-outline-primary" to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
          )}
          
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
