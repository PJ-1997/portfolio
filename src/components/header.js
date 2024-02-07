import PropTypes from "prop-types"
import React, { useState } from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header">
      <div className="header-left">
        <div className="name">Pedro Molina</div>
        <div className="designation">UI/UX Designer</div>
      </div>
      <div className={`header-right ${isOpen ? 'open' : ''}`}>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
