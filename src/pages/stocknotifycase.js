import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import caseStyle from "../components/Modules/casestudy.module.css"
import { Link } from "gatsby"

import rotatoImg from "../images/stocknotify-imgs/rotato.png"

import initialScreen from "../images/stocknotify-imgs/lofi-notify.png"
import lofiMain from "../images/stocknotify-imgs/lofiSN.jpg"
import hifiMain from "../images/stocknotify-imgs/higiSN.jpg"
import compare from "../images/stocknotify-imgs/compare.png"

const CaseStudy = () => (
  <Layout>
    <body className="body">

      {/* Hero */}
      <section className={caseStyle.introsection}>
        <div className={caseStyle.divcenter}>
          <div className={caseStyle.lefttextcontainer}>
            <h1 className={caseStyle.toptext}>Stock Notify</h1>
            <div className={caseStyle.bottomtext}>Sends notifications on stock prices.</div>
          </div>
          <div className={caseStyle.IphonePic}>
            <img src={rotatoImg} className={caseStyle.ratioimage} alt="Stock Notify"></img>
          </div>
        </div>
      </section>
      <div className={caseStyle.layoutspacertop}></div>

      {/* Overview */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Overview</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div className={caseStyle.gridcontainer}>
          <div>
            <h1 className={caseStyle.overviewTitle}>Duration</h1>
            <p className={caseStyle.overviewText}>4 Months</p>
          </div>
          <div>
            <h1 className={caseStyle.overviewTitle}>My Role</h1>
            <p className={caseStyle.overviewText}>Product Design</p>
          </div>
          <div>
            <h1 className={caseStyle.overviewTitle}>Involvement</h1>
            <p className={caseStyle.overviewText}>Pedro Molina</p>
          </div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Summary</h1>
            <p className={caseStyle.overviewdescription}>My role as a UI/UX designer was to conduct research. This involved asking questions such as who are the users and how they currently accomplish the task. I then designed interfaces to improve the task of setting a price notification.</p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Challenge</h1>
            <p className={caseStyle.overviewdescription}>The main challenge occurred when designing the screen which allowed the user to set up a price notification. The initial iteration of the design involved too much interaction to setup a price notification. Which also brought up the question, how should the notified and favorited stocks appear to the user.</p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Solution</h1>
            <p className={caseStyle.overviewdescription}>After multiple iterations of the setup notification screen. I decided to only give the user two options in the notify screen.  Either set a price higher or lower than the current stock price. This small amount of choice makes the process of setting a price notification simple to the user.</p>
          </div>
        </div>
      </section>
      <div className={caseStyle.layoutspacertop}></div>

      {/* Research Process */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Research</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Explanation</h1>
            <p className={caseStyle.overviewdescription}>The first step of the design process begins with collecting user data. This includes who are the users, how do they currently accomplish the task, and what do users perceive are problems with their current practices. In this case, I want to find out how do users get up to date with their stock prices.</p>
          </div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Naturalistic <br></br> Observation</h1>
            <p className={caseStyle.overviewdescription}>To understand the problem space, I set to carry out a set of techniques to discover how is the user currently accomplishing the task. In this case, I chose to conduct a naturalistic observation to observe the user with no interaction between me and the user. The goal of this observation was to see how did the user keep themselves notified on price changes in their stocks. The data I found was quite interesting, users would open their respective brokerage application and check the price multiple times throughout day which got me thinking on potential questions to ask during a direct interaction with the user.</p>
          </div>
          {/* <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>User Persona</h1>
            <p className={caseStyle.overviewdescription}>Now it is time to present what I discovered about the user. In this case, I chose to construct a User Persona to highlight data I collected about the user. </p>
          </div> */}
        </div>

      </section>
      <div className={caseStyle.layoutspacertop}></div>

      {/* Prototype */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Design</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Findings from <br></br>Research</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.overviewdescription}>From the user data, I constructed a list of features for the Stock Notify application. This includes the ability to search, favorite, and set a price notification.</p>
              <p className={caseStyle.overviewdescription}>The reason I chose to focus on these three features is because these are essential to complete the task of reminding the user on stock prices.</p>
              {/* <img className={caseStyle.styleguideImg} src={styleImg} alt="styleimg"></img> */}
            </div>

          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Prototyping and <br></br>Iterations</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.titleParagraph}>Lo-Fidelity Prototyping</p>
              <p className={caseStyle.subjectText}>I like to get my ideas on paper before I move into digitally creating the lo-fidelity prototypes.<br></br><br></br>Once I’ve gone through a couple of iterations, I then shared these lo-fidelity prototypes with users to get some feedback. This is an important step to make sure that the design fulfills the users’ need.</p>
              {/* <img src={lofiMain} alt="styleimg" className={caseStyle.styleguideImg}></img> */}
              {/* <p className={caseStyle.imgdescriptext}>Lo-Fidelity Wireframes</p> */}
            </div>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.hifiPiccontainer}>
            <img src={lofiMain} alt="New Pics" className={caseStyle.newpicsImage}></img>
            <p className={caseStyle.newpicimgdescription}>Low Fidelity Screens</p>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.titleParagraph}>Evaluating Initial Wireframes</p>
              <p className={caseStyle.subjectText}>The first iteration of the set up notification screen was originally going to incorporate a slide menu showing the user different options which included setting the price notification either higher, lower, or equal than the price that the user typed in.<br></br><br></br> This iteration involved too much interaction from the user. From the user feedback, I aimed to create the notify screen more simple to the user.</p>
              <img src={initialScreen} alt="styleimg" className={caseStyle.styleguideImg}></img>
              <p className={caseStyle.imgdescriptext}>Initial Iteration of Notify Screen</p>
            </div>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.titleParagraph}>Design Iteration</p>
              <p className={caseStyle.subjectText}>From the user data, I changed the way how the user sets up a price notification. Either set the price notification higher or lower than the inputted price. Removed the slide menu so that the options are apparent to the user and not hidden away through a slide menu. This new iteration is simple and improved the task of setting a price notification.</p>
              <img src={compare} alt="styleimg" className={caseStyle.styleguideImg}></img>
              <p className={caseStyle.imgdescriptext}>Comparing Iterations</p>
            </div>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>High Fidelity<br></br> Wireframes</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.overviewdescription}>Color coded the type of notification. Red is below and green is above. The user can quickly see what notifications are still active and tell how the notification will activate based on the color.</p>
            </div>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.hifiPiccontainer}>
            <img src={hifiMain} alt="New Pics" className={caseStyle.newpicsImage}></img>
            <p className={caseStyle.newpicimgdescription}>High Fidelity Screens</p>
          </div>
        </div>
      </section>

      <div className={caseStyle.layoutspacertop}></div>

      {/* Conclusion */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Reflection</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div className={caseStyle.reflectionContainer}>
          <p className={caseStyle.reflectiontext}>This project involved the use of a variety of data collection techniques to find out the user pain points. This is important because we want to make sure we develop features that fulfills a users' needs. If there is no pain point or need to fill in the first place, then we do not have a feature</p>
        </div>

      </section>

      <div className="rewind-container">
        <Link className="rewind" to="/">Back to Portfolio</Link>
      </div>

    </body>
    <SEO title="Case Study" />
  </Layout>
)

export default CaseStudy

