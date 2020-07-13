import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ImagePopup from "../components/Popups/popup"
// import DemoPopup from "../components/Popups/demopopup"
// import Image from "../components/image"
// Images
import qfpopImage from "../images/qfPopup.jpg"
import snpopImage from "../images/snPopup.jpg"
import qfScreenshots from "../images/qfScreenshots.png"
import snScreenshots from "../images/snScreenshots.png"
import github from "../images/githubLogo.png"
import linkedin from "../images/linkedinLogo.png"
// import appStoreBtn from "../images/btn.png"
// import youtubeBtn from "../images/youtubeButton.png"

const IndexPage = () => (
  <Layout>
    <body className="body">
      {/* Spacer */}
      <div style={{ marginBottom: `2rem` }}> </div>

      {/* Introduction */}
      <div className="introduction" >
        <div className="w-container">
          <h1 className="header">Pedro Molina</h1>
          <div className="description">Product Designer with experience in developing applications from the ground up.</div>
          <div className="icons">
            <div className="iconContainter"><a href="https://www.linkedin.com/in/pedro-molina-465441165/" target="_blank" rel="noopener noreferrer"><img className="imgPic" src={linkedin} alt="Linkedin"></img></a></div>
            <div className="iconContainter"><a href="https://github.com/PJ-1997" target="_blank" rel="noopener noreferrer"><img className="imgPic" src={github} alt="Github"></img></a></div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ paddingBottom: 20 }}> </div>
      {/* Line */}
      <div className="layout-spacer-top"></div>

      {/* App Projects */}
      <div id="Projects" className="projects">
        <div className="project w-container">
          <div className="projectimagebg">
            <ImagePopup title="Stock Notify" popimage={snpopImage}
              triggerElement={<img className="projectimage w-inline-block pointer" src={snScreenshots} alt="Stock Notify"></img>}>
            </ImagePopup>
          </div>
          <div className="projectinfo">
            <div className="projecttitle">Stock Notify</div>
            <div className="projectdates">Nov 2018 - Feb 2019</div>
            <div className="projectdescription">Sends notifications on stock prices. The user can favorite stocks to the homescreen and the user interface is also built programmatically.</div>
            <Link to="/stocknotifycase" className="linkcasestudy">View Case Study</Link>
            {/* <div><DemoPopup title="Stock Notify Demo" url="https://www.youtube.com/embed/FQ0yO3F7lbE" triggerElement={<img src={youtubeBtn} className="youtube2"></img>}></DemoPopup></div> */}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: `100px` }}> </div>
      
      <div id="Projects" className="projects">
        <div className="project w-container">
          <div className="projectimagebg">
            <ImagePopup title="Quick Formula" popimage={qfpopImage}
              triggerElement={<img className="projectimage w-inline-block pointer" src={qfScreenshots} alt="Quick Formula"></img>}>
            </ImagePopup>
          </div>
          <div className="projectinfo">
            <div className="projecttitle">Quick Formula</div>
            <div className="projectdates">Oct 2017 - Jan 2018</div>
            <div className="projectdescription">Calculates math and science formulas. The user can favoirte most used formulas to the homescreen. User interface is built programmatically.</div>
            <Link to="/stocknotifycase" className="linkcasestudy">View Case Study</Link>
            {/* <div><DemoPopup title="Quick Formula Demo" url="https://www.youtube.com/embed/mnsoemOS5Xg" triggerElement={<img src={youtubeBtn} className="youtube1"></img>}></DemoPopup></div> */}
            {/* <div><a href="https://apps.apple.com/us/app/quick-formula/id1462553451?ls=1" target="_blank" rel="noopener noreferrer"><img src={appStoreBtn} className="appleBtn" ></img></a></div> */}
          </div>
        </div>
      </div>
      <SEO title="Pedro Molina" />
    </body>

    {/* Spacer */}
    <div style={{ marginBottom: `2rem` }}> </div>
  </Layout>
)

export default IndexPage
