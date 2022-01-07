import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import ImagePopup from "../components/Popups/popup"
// Images
import provImage from "../images/provisions-imgs/provDisplayImage.png"
import provisPopImage from "../images/provisions-imgs/provPopImage.jpg"
import snpopImage from "../images/snPopup.png"
import snScreenshots from "../images/snScreenshots.png"
import github from "../images/githubLogo.png"
import linkedin from "../images/linkedinLogo.png"

const IndexPage = () => (
  <Layout>
    <body className="body">
      {/* Spacer */}
      <div style={{ marginBottom: `2rem` }}> </div>

      {/* Introduction */}
      <div className="introduction" >
        <div className="w-container">
          <h1 className="header">Pedro Molina</h1>
          <div className="description">Product designer with experience in creating prototypes and a passion for explaining the importance of good design to non-designers</div>
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
            <ImagePopup title="+provisions" popimage={provisPopImage}
              triggerElement={<img className="projectimage w-inline-block pointer" src={provImage} alt="+provisions"></img>}>
            </ImagePopup>
          </div>
          <div className="projectinfo">
            <div className="projecttitle">+provisions</div>
            <div className="projectdates">Oct 2020 - Present</div>
            <div className="projectdescription">Deals on Surplus food. I was in <br></br>charge of redesigning the app and creating high fidelity wireframes to make the design presentable to potential investors. Created prototype to demonstrate how the app <br></br>functions.</div>
            <Link to="/provisionscase" className="linkcasestudy">View Case Study</Link>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: `100px` }}> </div>

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
            <div className="projectdescription">Personal project that I designed <br></br>and programmed in Xcode. Sends notifications on stock prices. The user can search, favorite, and set price notifications.</div>
            <Link to="/stocknotifycase" className="linkcasestudy">View Case Study</Link>
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
