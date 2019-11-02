import React from "react"
import qfScreenshots from "../images/qfScreenshots.png"
import snScreenshots from "../images/snScreenshots.png"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <body className="body">
    {/* Introduction */}
    <div className="introduction" >
      <div className="w-container">
        <h1 className="header">Pedro Molina</h1>
        <div className="description">iOS Developer and Graphic Designer with years of experience in visual and interaction design.
    </div>
      </div>
    </div>
    {/* Spacer */}
    <div className="layout-spacer-top"></div>

    {/* App Projects */}
    <div id="Projects" className="projects">
      <div className="project w-container">
        <div className="projectimagebg">
          <a href="" className="projectimage w-inline-block">
            <img src={qfScreenshots}></img>
          </a>
        </div>
        <div className="projectinfo">
          <div className="projecttitle">Quick Formula</div>
          <div className="projectdates">Aug 2017 - Present</div>
          <div className="projectdescription">Quick Formula calculates math and science formulas. Uses a segmented control to separate math and science formulas. Quick Formula is built entirely in Swift and the UI is created programmatically with no interface builder.</div>
          <div className="link projects">VIEW CASE STUDY</div>
        </div>
      </div>
    </div>

    <div id="Projects" className="projects">
      <div className="project w-container">
        <div className="projectimagebg">
          <a href="" className="projectimage w-inline-block">
            <img src={snScreenshots}></img>
          </a>
        </div>
        <div className="projectinfo">
          <div className="projecttitle">Stock Notify</div>
          <div className="projectdates">Aug 2017 - Present</div>
          <div className="projectdescription">Sends a push notification when a stock reaches a price that the user specified. The user can favorite stocks which uses Core Data to persist the data. The user interface is built all programmatically.</div>
          <a className="link projects" href="/works"> View Case</a>
        </div>
      </div>
    </div>

    {/* <SEO title="Home" /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </body>


)

export default IndexPage
