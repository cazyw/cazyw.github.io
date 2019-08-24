import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Navbar = ({ menuLinks }) => (
  <div>
    <nav>
      <ul style={{ display: "flex", flex: 1 }}>
        {menuLinks.map(link => (
          <li
            key={link.name}
            style={{
              listStyleType: `none`,
              padding: `1rem`,
            }}
          >
            <Link to={link.link}>{link.name}</Link>
          </li>
        ))}
      </ul>
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
