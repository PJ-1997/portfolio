import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div className="headerFull">
  <header className="container-3 w-container">
    <div className="headerFull" style={{ padding: `1rem 1.0875rem`, }}>
      <Link className="logo">{siteTitle}</Link>
    </div>
  </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
