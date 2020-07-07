import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { red } from "color-name";

const Header = ({ siteTitle }) => (
  <header className="container-3 w-container">
    <div style={{ padding: `1rem 1.0875rem`, }}>
      <Link className="logo">{siteTitle}</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
