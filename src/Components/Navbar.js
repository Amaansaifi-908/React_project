/* eslint-disable jsx-a11y/anchor-is-valid */     // this is usw for remove the warniing about href .
import propType from 'prop-types';
import React from 'react';

export default function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid" style={{ color: props.mode === `dark` ? `white` : `#043742` }}>
          <a className="navbar-brand" href="/" style={{ color: props.mode === `dark` ? `white` : `#043742` }}>NewsZilla</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>

              <a className={`form-check form-switch text-${props.mode === `light` ? `dark` : `light`}`}>
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Dark Mode</label></a>
            </ul>


          </div>
        </div>
      </nav>
    </div>
  )

}
Navbar.prototype = {
  title: propType.string.isRequired,
  about: propType.string.isRequired,
  mode: propType.string.isRequired,
  
}