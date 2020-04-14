import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DemoPopup from "../components/popup"
import Image from "../components/image"
// Images
import qfpopImage from "../images/qfPopup.jpg"
import snpopImage from "../images/snPopup.jpg"
import qfScreenshots from "../images/qfScreenshots.png"
import snScreenshots from "../images/snScreenshots.png"
import github from "../images/githubLogo.png"
import linkedin from "../images/linkedinLogo.png"
import appStoreBtn from "../images/btn.png"
import youtubeBtn from "../images/youtubeButton.png"

const IndexPage = () => (
  <Layout>
    {/* <div style={{ maxWidth: `300px`}}><Image /></div> */}
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
            <DemoPopup title="Quick Formula" popimage={qfpopImage}
              triggerElement={<img className="projectimage w-inline-block pointer" src={qfScreenshots}></img>}>
            </DemoPopup>
          </div>
          <div className="projectinfo">
            <div className="projecttitle">Quick Formula</div>
            <div className="projectdates">Oct 2017 - Jan 2018</div>
            <div className="projectdescription">Quick Formula calculates math and science formulas. Quick Formula is built entirely in Swift and UI is created programmatically with no interface builder.</div>
            <div><a href="https://apps.apple.com/us/app/quick-formula/id1462553451?ls=1" target="_blank" rel="noopener noreferrer"><img src={appStoreBtn} width="140"></img></a></div>
            <a href=" https://youtu.be/mnsoemOS5Xg" target="_blank" rel="noopener noreferrer"><img src={youtubeBtn} className="youtubeButton"></img></a>
            {/* <DemoPopup title="Quick Formula" popimage={qfpopImage}
              triggerElement={<button className="button"> Demo </button>}>
            </DemoPopup> */}
          </div>
        </div>
      </div>

      <div style={{ marginBottom: `100px` }}> </div>

      <div id="Projects" className="projects">
        <div className="project w-container">
          <div className="projectimagebg">
            <DemoPopup title="Stock Notify" popimage={snpopImage}
              triggerElement={<img className="projectimage w-inline-block pointer" src={snScreenshots}></img>}>
            </DemoPopup>
          </div>
          <div className="projectinfo">
            <div className="projecttitle">Stock Notify</div>
            <div className="projectdates">Nov 2018 - Present</div>
            <div className="projectdescription">Sends notifications on stock prices. The user can favorite stocks which uses Core Data to save favorited stocks. The user interface is built programmatically.</div>
            <a href="https://youtu.be/FQ0yO3F7lbE" target="_blank" rel="noopener noreferrer"><img src={youtubeBtn} className="youtubeButton"></img></a>
            {/* <DemoPopup title="Stock Notify" popimage={snpopImage} triggerElement=
              {<button className="button"> Demo </button>}>
            </DemoPopup> */}
          </div>
        </div>
      </div>
      <SEO title="Pedro Molina" />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </body>

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
    <div style={{ marginBottom: `2rem` }}> </div>
  </Layout>
)

export default IndexPage
