import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AlertContext from "../context/alert/AlertContext";
const Navbar = () => {
  const location = useLocation();
  let navigate = useNavigate();
  let alert = useContext(AlertContext);
  let { showAlert } = alert;
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login/");
    showAlert("Logged Out successfully", "success");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            iNotebook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname == "/" ? "active" : ""
                  } ${localStorage.getItem("token") ? "" : "d-none"}`}
                  to={`/`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname == "/about/" ? "active" : ""
                  }`}
                  to={`/about/`}
                >
                  About
                </Link>
              </li>
            </ul>
            {localStorage.getItem("token") ? (
              <button className="btn btn-primary mx-2" onClick={handleLogOut}>
                Log Out
              </button>
            ) : (
              <form className="d-flex">
                <Link
                  className="btn btn-primary mx-1"
                  to={"/signup/"}
                  role="button"
                >
                  Sign Up
                </Link>
                <Link className="btn btn-primary " to={"/login/"} role="button">
                  Log in
                </Link>
              </form>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
