import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
// Images
import provImage from "../images/provisions-imgs/provDisplayImage.png"
import caseStyle from "../components/Modules/provision.module.css"
import heroImage from "../images/heroImage.jpg"
import farrierImage from "../images/farrier-imgs/farrier.png"

const IndexPage = () => (
  <Layout>
    <body className="body">
      {/* Spacer */}
      <div style={{ marginBottom: `2rem` }}> </div>

      {/* Introduction */}
      <div className="hero-container">
        <div className="container-heroContent">
          <div className="hero-text">
            <h1>Pedro Molina</h1>
            <p className="hero-description"> I'm a UI/UX Designer. I help companies design effective interfaces based on a
user-centered approach.</p>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Hero Image" />
          </div>
        </div>
      </div>


      {/* <section className={caseStyle.introsection}>
        <div className={caseStyle.divcenter}>
          <div className={caseStyle.lefttextcontainer}>
            <h1 className={caseStyle.toptext}>Pedro Molina </h1>
            <div className={caseStyle.bottomtext}>I'm a UI/UX Designer. I help companies design effective interfaces based on a <br></br> user-centered approach.</div>
          </div>
          <div className={caseStyle.IphonePic}>
            <img className="heroImage" src={heroImage} alt="Stock Notify"></img>
          </div>
        </div>
      </section> */}

      {/* Spacer */}
      {/* <div style={{ paddingBottom: 120 }}> </div> */}
      {/* Line */}
      <div className="layout-spacer-top"></div>

      {/* <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>My Work</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div> */}

      {/* App Projects */}
      <div id="work" className="projects">
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

      {/* <div className="spaceingBetweenProjects"> </div> */}


      <div id="Projects" className="projectsAftertop">
        <div className="project pw-holder">
          <div className="projectimagebg">
            <img className="projectimage w-inline-block" src={provImage} alt="+provisions"></img>
          </div>
          <div className="projectinfo">
            <div className="projecttitle">+provisions</div>
            <div className="projectdates">Oct 2022 - Mar 2023</div>
            <div className="projectdescription">Platform for restaurant owners to sell <br></br> unsold food. In charge of redesigning<br></br> app, conducting user research, and <br></br>creating prototype.</div>
            <Link to="/provisionscase" className="linkcasestudy">View Case Study</Link>
          </div>
        </div>
      </div>
      <div className="layout-spacer-top"></div>

      {/* <div style={{ marginBottom: `100px` }}> </div> */}

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
    {/* <div style={{ marginBottom: `2rem` }}> </div> */}
  </Layout>
)

export default IndexPage
