import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import BigPopup from "../components/Popups/bigpopup"
import ImagePopup from "../components/Popups/popup"
// Images
import provImage from "../images/provisions-imgs/provDisplayImage.png"
// import dribblepic from "../images/githubLogo.png"
// import linkedin from "../images/linkedinLogo.png"
import dribblepic from "../images/dribble.svg"
import linkedin from "../images/linkedin.svg"
import farrierImage from "../images/farrier-imgs/farrier.png"

const IndexPage = () => (
  <Layout>
    <body className="body">
      {/* Spacer */}
      <div style={{ marginBottom: `2rem` }}> </div>

      {/* Introduction */}
      <div className="introduction" >
        <div className="w-container">
          <h1 className="header">UI/UX Designer</h1>
          <div className="description">Experience using data-driven insights and user-centered approach to make designs <br></br>that fulfill needs</div>
          <div className="icons">
            <div><a href="https://www.linkedin.com/in/pedro-molina-465441165/" target="_blank" rel="noopener noreferrer"><img className="imgPic" src={linkedin} alt="Linkedin"></img></a></div>
            <div><a href="https://www.behance.net/pedromolina22" target="_blank" rel="noopener noreferrer"><img className="imgPic" src={dribblepic} alt="Behance"></img></a></div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ paddingBottom: 20 }}> </div>
      {/* Line */}
      <div className="layout-spacer-top"></div>

      {/* App Projects */}
      <div id="Projects" className="projects">
        <div className="project pw-holder">
          <div className="projectimagebg">
            <img className="projectimage w-inline-block" src={farrierImage} alt="Farrier Business"></img>
          </div>
          <div className="projectinfo">
            <div className="projecttitle">Farrier Business</div>
            <div className="projectdates">Sep 2023 - Oct 2023</div>
            <div className="projectdescription">Business website. Includes header, <br></br>nav bar, hero, services, about us, <br></br>social proof, contact form, CTA, <br></br>and footer.<br></br></div>
            {/* <Link to="/provisionscase" className="linkcasestudy">View Case Study</Link> */}
          </div>
        </div>
      </div>

      <div className="spaceingBetweenProjects"> </div>


      <div id="Projects" className="projects">
        <div className="project pw-holder">
          <div className="projectimagebg">
            <img className="projectimage w-inline-block" src={provImage} alt="+provisions"></img>
          </div>
          <div className="projectinfo">
            <div className="projecttitle">+provisions</div>
            <div className="projectdates">Oct 2022 - Mar 2023</div>
            <div className="projectdescription">Ecommerce surplus food. In charge <br></br>of redesigning app, conducting user research, and creating prototype <br></br>to demonstrate swipe feature.</div>
            <Link to="/provisionscase" className="linkcasestudy">View Case Study</Link>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: `100px` }}> </div>

      {/* <div id="Projects" className="projects">
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
      </div> */}
      <SEO title="Pedro Molina • UI/UX Designer" />
    </body>

    {/* Spacer */}
    <div style={{ marginBottom: `2rem` }}> </div>
  </Layout>
)

export default IndexPage
