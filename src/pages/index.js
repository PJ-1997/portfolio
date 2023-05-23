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
import dribblepic from "../images/githubLogo.png"
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
          <div className="description">UI/UX designer with experience in creating prototypes and a passion for explaining the importance of good design to non-designers</div>
          <div className="icons">
            <div className="iconContainter"><a href="https://www.linkedin.com/in/pedro-molina-465441165/" target="_blank" rel="noopener noreferrer"><img className="imgPic" src={linkedin} alt="Linkedin"></img></a></div>
            <div className="iconContainter"><a href="https://dribbble.com/pedromolina" target="_blank" rel="noopener noreferrer"><img className="imgPicDribble" src={dribblepic} alt="Dribble"></img></a></div>
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
            <div className="projectdates">Mar 2022 - Sep 2022</div>
            <div className="projectdescription">Surplus food platform for restaurants. <br></br>In charge of redesigning app, conducting user research, and creating prototype <br></br>to demonstrate app’s functionality.</div>
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
            <div className="projectdates">Nov 2020 - Feb 2021</div>
            <div className="projectdescription">Personal project developed in Xcode. <br></br>Sends notifications on stock prices. <br></br>User can search, favorite, and set price notifications.</div>
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
