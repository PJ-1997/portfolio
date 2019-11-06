import React from "react"
import qfScreenshots from "../images/qfScreenshots.png"
import snScreenshots from "../images/snScreenshots.png"
import github from "../images/githubLogo.png"
import linkedin from "../images/linkedinLogo.png"
import appStoreBtn from "../images/btn.png"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
  <body className="body">
    {/* Introduction */}
    <div className="introduction" >
      <div className="w-container">
        <h1 className="header">Pedro Molina</h1>
        <div className="description">iOS Developer and Graphic Designer with years of experience in visual and interaction design.</div>
        <div className="icons">
          <div className="iconContainter"><a href="https://www.linkedin.com/in/pedro-molina-465441165/" target="_blank" rel="noopener noreferrer"><img className="imgPic" src={linkedin} alt="Linkedin"></img></a></div>
          <div className="iconContainter"><a href="https://github.com/PJ-1997" target="_blank" rel="noopener noreferrer"><img className="imgPic" src={github} alt="Github"></img></a></div>
        </div>
      </div>
    </div>
    {/* Spacer */}
    <div className="layout-spacer-top"></div>

    {/* App Projects */}
    <div id="Projects" className="projects">
      <div className="project w-container">
        <div className="projectimagebg">
          <img className="projectimage w-inline-block" src={qfScreenshots}></img>
        </div>
        <div className="projectinfo">
          <div className="projecttitle">Quick Formula</div>
          <div className="projectdates">Aug 2017 - Present</div>
          <div className="projectdescription">Quick Formula calculates math and science formulas. Uses a segmented control to separate math and science formulas. Quick Formula is built entirely in Swift and the UI is created programmatically with no interface builder.</div>
          <div><a href="https://apps.apple.com/us/app/quick-formula/id1462553451?ls=1" target="_blank" rel="noopener noreferrer"><img src={appStoreBtn} width="120"></img></a></div>
        </div>
      </div>
    </div>

    <div id="Projects" className="projects">
      <div className="project w-container">
        <div className="projectimagebg">
          <img className="projectimage w-inline-block" src={snScreenshots}></img>
        </div>
        <div className="projectinfo">
          <div className="projecttitle">Stock Notify</div>
          <div className="projectdates">Nov 2018 - Present</div>
          <div className="projectdescription">Sends a push notification when a stock reaches a price that the user specified. The user can favorite stocks which uses Core Data to persist the data. The user interface is built all programmatically.</div>
          {/* <a className="link projects" href="/works"> View Case</a> */}
        </div>
      </div>
    </div>

    {/* <SEO title="Home" /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </body>
  </Layout>
)

export default IndexPage
