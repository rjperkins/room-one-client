import React from 'react';
import 'bulma';
import './NavBar.css'
// import logo from './Room1logo.jpeg'

export default function NavBar () {

  return (
    <nav className="navbar has-background-warning is-fixed-top" role="navigation" aria-label="main navigation">

      <a className="navbar-brand" href="/">
        <div>
          <label
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            htmlFor="nav-toggle-state"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </label>
        </div>
      </a>
      <input type="checkbox" id="nav-toggle-state" />

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
            <p className="navbar-item" style={{ cursor: 'default' }}>
              RADIO
            </p>
            <div className="navbar-dropdown">
              <a className="navbar-item" href="/radio/dnb">
                DRUM AND BASS
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="/radio/electronic">
                ELECTRONIC
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="/radio/hip-hop" >
                HIP HOP
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="/radio/chillstep" >
                CHILLSTEP
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="/radio/dubstep">
                DUBSTEP
              </a>
            </div>
          </div>
          <a className="navbar-item" href="/record-label">
            RECORD LABEL
          </a>
          <a className="navbar-item" href="/djs">
            DJS
          </a>
          <a className="navbar-item" href="/events">
            EVENTS
          </a>
          <a className="navbar-item" href="http://room1merch.com/">
            SHOP
          </a>
          {/* <a className="navbar-item" href="/about">
            About
          </a>
          <a className="navbar-item" href="/team">
            Meet The Team
          </a> */}
        </div>

      </div>
    </nav>
  )
}
