import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const toggleMenu = () => {
  const navs = document.querySelector(".nav-links")
  navs.classList.toggle("open")
}

const closeMenu = () => {
  const navs = document.querySelector(".nav-links")
  navs.classList.remove("open")
}

const Navbar = ({ menuLinks }) => (
  <div>
    <nav className="navbar">
      <div className="nav-top">
        <div className="nav-brand" onClick={closeMenu}>
          <Link to="/">Home</Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="hamburger-lines"></div>
          <div className="hamburger-lines"></div>
          <div className="hamburger-lines"></div>
        </div>
      </div>

      <div className="nav-links">
        <ul>
          {menuLinks.map(link => (
            <li key={link.name} className="nav-link" onClick={toggleMenu}>
              <Link to={`/${link.link}`}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </div>
)

Navbar.propTypes = {
  menuLinks: PropTypes.arrayOf(PropTypes.object),
}

Navbar.defaultProps = {
  menuLinks: [],
}

export default Navbar
