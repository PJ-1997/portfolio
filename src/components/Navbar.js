import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';


const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="navbar-content">
        <Link className="navbar-left" to="/">
          <div className="name">Pedro Molina</div>
          <div className="designation">UI/UX Designer</div>
        </Link>
        <div className={`navbar-right ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;