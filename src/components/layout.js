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
        <div id="Footer" class="footer">
          <div class="w-container">

            <div id="Contact" class="contact">
              <div class="container-2 w-container">
                <div class="layout-spacer-bottom">
                </div>
                <div class="header contact">Let's keep in touch</div>
                <div class="w-row"><div class="column w-col">
                  <h4 class="heading-4">Email</h4><div class="div-block">
                    <a href="mailto:contact@molinapedro.com" class="link contacts">contact@molinapedro.com</a>
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* Spacer */}
            <div style={{ marginBottom: `6rem` }}> </div>
            <p class="footer-text"> © {new Date().getFullYear()} Created by Pedro Molina</p>
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
