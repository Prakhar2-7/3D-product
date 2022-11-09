import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand" href="#">
          3-D PRODUCT  SELLER
        </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars" />
            
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/homepage">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              
               <li className="nav-item">
                <NavLink className="nav-link" to="/customizer">
                  Customizer
                </NavLink>
              </li>
              
            </ul>
            {/* Left links */}
            <div className="d-flex align-items-center">
              

                {
                  !loggedIn ?

                  <button type="button" className="btn btn-link px-3 me-2" onClick={() => { setLoggedIn(true) }}>
                    Login
                  </button>
                  :
                  <button className="btn btn-danger" onClick={() => { setLoggedIn(false) }}>
                    <i class="fas fa-sign-out-alt"></i> Logout
                  </button>
                }
              
                <button type="button" className="btn btn-primary me-3">
                Sign up for free
              </button>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  )
}

export default Header