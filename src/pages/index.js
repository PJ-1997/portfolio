import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="w-container">
      <h1 className="header">Pedro Molina</h1>
      <div className="description">iOS Developer and Graphic Designer with years of experience in visual and interaction design.
    </div>
    </div>

    {/* App Projects */}
    <div id="Projects" className="projects">
      <div className="project w-container">
        <div className="projectimagebg">
          <a href="" className="projectimage w-inline-block"></a>
        </div>
        <div className="projectinfo">
          <div className="projecttitle">Quick Formula</div>
          <div className="projectdates">Aug 2017 - Present</div>
          <div className="projectdescription">Quick Formula calculates math and science formulas. Uses a segmented control to separate math and science formulas. Available in the App Store. Quick Formula is built entirely in Swift and the UI is created programmatically with no interface builder.</div>
          <div className="link projects">VIEW CASE STUDY</div>
        </div>
      </div>
    </div>

    {/* <SEO title="Home" /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
