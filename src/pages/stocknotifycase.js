import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import caseStyle from "../components/Modules/casestudy.module.css"
import { Link } from "gatsby"

import rotatoImg from "../images/stocknotify-imgs/rotato.png"
import styleImg from "../images/stocknotify-imgs/styleguide.svg"
import lofiNotify from "../images/stocknotify-imgs/lofi-notify.png"

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
      <div className="layout-spacer-top"></div>

      {/* Overview */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletext}>Overview</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div className={caseStyle.gridcontainer}>
          <div>
            <h1 className={caseStyle.overviewTitle}>Duration</h1>
            <p className={caseStyle.overviewText}>4 Months</p>
          </div>
          <div>
            <h1 className={caseStyle.overviewTitle}>Focus</h1>
            <p className={caseStyle.overviewText}>UI/UX Desinger <br></br>iOS Developer </p>
          </div>
          <div>
            <h1 className={caseStyle.overviewTitle}>Involvement</h1>
            <p className={caseStyle.overviewText}>Pedro Molina</p>
          </div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>My Role</h1>
            <p className={caseStyle.overviewdescription}>My role as a UX desinger was to conduct research. Then I worked extensively on user research and user flows in order to cater the application to its primary users. As a developer, I wrote clean code that followed W3C standards to make it easy for future iOS developers to maintain.</p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Challenge</h1>
            <p className={caseStyle.overviewdescription}>The main challenge during developing the screen to setup a notification. The first iteration of the design involved too much interaction too setup a notification. And how should the favorited and the notified stock be display in one screen.</p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Solution</h1>
            <p className={caseStyle.overviewdescription}>After many iterations of the setup notification screen. I decided to only give the user two option in the notify screen. Set up notification higher or lower than typed in price. The application currently has two tab bar items home which shows favorited stocks and notified stock and search screen.</p>
          </div>
        </div>
      </section>
      <div className="layout-spacer-top"></div>

      {/* Research Process */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletext}>Research Process</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Initial Research</h1>
            <p className={caseStyle.overviewdescription}>The first step of the design process begins with collecting user data. This includes who are the users, how do they currently accomplish the task, and what do users perceive are problems with their current practices. These questions can be categorized as one phrase known as the problem space. </p>
          </div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Naturalistic Observation</h1>
            <p className={caseStyle.overviewdescription}>To understand the problem space, we carry out a set of techniques to discover how is the user currently accomplishing the task. In this case, I chose to conduct a naturalistic observation to observe the user with no interaction between me and the user. The goal of this observation was to see how did the user keep themselves notified on price changes in their stocks. The data I found was quite interesting, users would open their respective brokerage application and check the price multiple times throughout day which got me thinking on potential questions to ask during a direct interaction with the user</p>
          </div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>User Interview</h1>
            <p className={caseStyle.overviewdescription}>From the data I gathered from the Naturalistic Observation	 I chose to conduct an interview with the user to furthering clarify the finding from the observation and to have an opportunity to have a one on one discussion. After the discussion, the user checks the price several times a day seeing if the price is right to sell or buy. From the research I gathered I concluded that the Stock Notify application must have the ability to search different stocks and easily set up a price notification.</p>
          </div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>User Persona</h1>
            <p className={caseStyle.overviewdescription}>Now it is time to present what I discovered about the user. In this case, I chose to construct a User Persona to highlight data I collected about the user. </p>
          </div>
        </div>

      </section>
      <div className="layout-spacer-top"></div>

      {/* Design Process */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletext}>Design Process</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Assets</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.overviewdescription}>The ideal user is a younger generation just started investing in the stock market.</p>
              <img className={caseStyle.styleguideImg} src={styleImg} alt="styleimg"></img>
            </div>

          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Prototyping and Iterations</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.titleParagraph}>Lo-Fidelity Prototyping</p>
              <p className={caseStyle.subjectText}>I like to get my ideas on paper before I move into the digitally creating the low fidelity prototypes. <br></br><br></br>I created low fidelity prototypes to verify the design objective. Once I’ve gone through a couple of iterations, I then shared these low fidelity prototypes with user feedback.</p>
              <img className={caseStyle.styleguideImg} src={lofiNotify} alt="styleimg"></img>
              <p className={caseStyle.imgdescriptext}>Initial Iteration of Notify Screen</p>
            </div>
          </div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.titleParagraph}>Evaluating Inital Wireframes</p>
              <p className={caseStyle.subjectText}>The first iteration of the set up notification screen was originally going to incorporate a slide menu showing the user different options which included the less than >, greater than  and equal = sign to setup the condition on the notification. I then created a more simple design giving the user the option without the use of a slide menu. This make the flow of setting up a notification faster and easier on the user.</p>
            </div>
          </div>
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

