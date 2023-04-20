import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <div id="Footer" className="footer">
          <div className="w-container">

            <div id="Contact" className="contact">
              <div className="container-2 w-container">
                <div className="layout-spacer-bottom">
                </div>
                <div className="header contact">Let's keep in touch</div>
                <div className="w-row"><div className="column w-col">
                  <h4 className="heading-4">Email</h4><div className="div-block">
                    <a href="mailto:contact@molinapedro.com" className="link contacts">contact@molinapedro.com</a>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div style={{ marginBottom: `6rem` }}> </div>
            <p className="footer-text"> © {new Date().getFullYear()} Created using React.js</p>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout