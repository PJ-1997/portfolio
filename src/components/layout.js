import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>

        <footer className="footer">
          <div className="footer-content">
            {/* Column 1: Name and Designer */}
            <div className="footer-column">
              <div>
                <h3>Pedro Molina</h3>
                <p>UI/UX Designer</p>
              </div>
            </div>
            {/* Column 2: Sitemap */}
            <div className="footer-column">
              <h3 className="center-align-footer">Sitemap</h3>
              <ul className="center-align-footer">
                <li><a href="/">Home</a></li>
                <li><a href="/provisionscase">+provision case study</a></li>
                {/* <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li> */}
              </ul>
            </div>
            {/* Column 3: Contact with Email */}
            <div className="footer-column">
              <h3 className="right-align-footer">Contact</h3>
              <p className="right-align-footer" >Email: <a className="email-underline" href="mailto:contact@molinapedro.com" >contact@molinapedro.com</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Created in React.js</p>
          </div>
        </footer>
        {/* <div id="contact" className="footer">
          <div className="w-container">

            <div id="Contact" className="contact">
              <div className="container-2 w-container">
                </div>
                <div className="header contact">Let's keep in touch</div>
                <div className="w-row"><div className="column w-col">
                  <h4 className="heading-4">Email</h4><div className="div-block">
                    <a href="mailto:contact@molinapedro.com" className="link contacts">contact@molinapedro.com</a>
                  </div>
                </div>
                </div>
            </div>

            
            <div style={{ marginBottom: `6rem` }}> </div>
            <p className="footer-text"> © {new Date().getFullYear()} Created in React.js</p>
          </div>
        </div> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
