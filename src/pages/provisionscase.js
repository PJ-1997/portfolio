import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import caseStyle from "../components/Modules/provision.module.css"
import { Link } from "gatsby"
import ImagePopup from "../components/Popups/popup"

import provis from "../images/provisions-imgs/provis.png"
import oldpics from "../images/provisions-imgs/oldpics.png"
import newpics from "../images/provisions-imgs/newpics.svg"
import inspir from "../images/provisions-imgs/inspir.jpg"

import initialScreen from "../images/stocknotify-imgs/lofi-notify.png"
import lofiMain from "../images/stocknotify-imgs/lofi-main.png"
import hifiMain from "../images/stocknotify-imgs/hifi-main.png"
import compare from "../images/stocknotify-imgs/compare.png"

import comparePopup from "../images/stocknotify-imgs/popup-images/compare.png"
import lofiPopup from "../images/stocknotify-imgs/popup-images/lofiPopup.png"
import initialPopup from "../images/stocknotify-imgs/popup-images/initialPopup.png"
import hifiPopup from "../images/stocknotify-imgs/popup-images/hifiPopup.png"

const CaseStudy = () => (
  <Layout>
    <body className="body">

      {/* Hero */}
      <section className={caseStyle.introsection}>
        <div className={caseStyle.divcenter}>
          <div className={caseStyle.lefttextcontainer}>
            <h1 className={caseStyle.toptext}>Provisions +</h1>
            <div className={caseStyle.bottomtext}>Sends notifications on stock prices.</div>
          </div>
          <div className={caseStyle.IphonePic}>
            <img src={provis} className={caseStyle.ratioimage} alt="Stock Notify"></img>
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
            <p className={caseStyle.overviewText}>Product Desinger<br></br>iOS Developer </p>
          </div>
          <div>
            <h1 className={caseStyle.overviewTitle}>Involvement</h1>
            <p className={caseStyle.overviewText}>Pedro Molina</p>
          </div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>My Role</h1>
            <p className={caseStyle.overviewdescription}>My role as a Product designer was to conduct research. This involved asking questions such as who are the users and how they currently accomplish the task. I then designed interfaces to improve the task of setting a price notification.</p>
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
      <div className="layout-spacer-top"></div>

      {/* Research Process */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletext}>Research</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Explanation</h1>
            <p className={caseStyle.overviewdescription}>The first step of the design process begins with collecting user data. This includes who are the users, how do they currently accomplish the task, and what do users perceive are problems with their current practices. In this case, I want to find out how do users get up to date with their stock prices.</p>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.figmacontrainer}>
            <img src={oldpics} alt="Old Pics"></img>
            <p className={caseStyle.imgdescriptextCenter}>Original Screens</p>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Differentaion from Competition</h1>
            <p className={caseStyle.overviewdescription}>The current style of the app incorporates a young demographic. A number of images and the image that stood out the most was this. The incorporation of mutilpe color of the dark background made it pop. That is where I had the design as a dark theme with the use of bright color like a neon sign.</p>
          </div>

          <div className={caseStyle.flexSideImageContainer}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <ImagePopup title="Inspiration" popimage={initialPopup}
                triggerElement={<img className={caseStyle.styleguideImg} src={inspir} alt="Inspiration"></img>}></ImagePopup>
              <p className={caseStyle.imgdescriptext}>Inspiration</p>
            </div>
          </div>

        </div>

      </section>
      <div className="layout-spacer-top"></div>

      {/* Prototype */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletext}>Design</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Findings from Research</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.overviewdescription}>From the user data, I constructed a list of features for the Stock Notify application. This includes the ability to search, favorite, and set a price notification.</p>
              <p className={caseStyle.overviewdescription}>The reason I chose to focus on these three features is because these are essential to complete the task of reminding the user on stock prices.</p>
            </div>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.figmacontrainer}>
            <img src={newpics} alt="New Pics"></img>
            <p className={caseStyle.imgdescriptextCenter}>High Fidelity Screens</p>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Prototyping and Iterations</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.titleParagraph}>Lo-Fidelity Prototyping</p>
              <p className={caseStyle.subjectText}>I like to get my ideas on paper before I move into digitally creating the lo-fidelity prototypes.<br></br><br></br>Once I’ve gone through a couple of iterations, I then shared these lo-fidelity prototypes with users to get some feedback. This is an important step to make sure that the design fulfills the users’ need.</p>
              <ImagePopup title="Lo-Fidelity Wireframes" popimage={lofiPopup}
                triggerElement={<img className={caseStyle.styleguideImg} src={lofiMain} alt="styleimg"></img>}></ImagePopup>
              <p className={caseStyle.imgdescriptext}>Lo-Fidelity Wireframes</p>
            </div>
          </div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.titleParagraph}>Evaluating Initial Wireframes</p>
              <p className={caseStyle.subjectText}>The first iteration of the set up notification screen was originally going to incorporate a slide menu showing the user different options which included setting the price notification either higher, lower, or equal than the price that the user typed in.<br></br><br></br> This iteration involved too much interaction from the user. From the user feedback, I aimed to create the notify screen more simple to the user.</p>
              <ImagePopup title="Initial Iteration of Notify Screen" popimage={initialPopup}
                triggerElement={<img className={caseStyle.styleguideImg} src={initialScreen} alt="styleimg"></img>}></ImagePopup>
              <p className={caseStyle.imgdescriptext}>Initial Iteration of Notify Screen</p>
            </div>
          </div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.titleParagraph}>Hi-Fidelity Wireframes</p>
              <p className={caseStyle.subjectText}>I chose to only give the user two options. Either set the price notification	 higher or lower than the inputed price. And I also removed the slide menu so that the options are apparent to the user and not hidden away through a slide menu. This new iteration is simple and improved the task of setting a price notification.</p>
              <ImagePopup title="Comparing Iterations" popimage={comparePopup}
                triggerElement={<img className={caseStyle.styleguideImg} src={compare} alt="styleimg"></img>}></ImagePopup>
              {/* <img className={caseStyle.styleguideImg} src={compare} alt="styleimg"></img> */}
              <p className={caseStyle.imgdescriptext}>Comparing Iterations</p>
              <p className={caseStyle.bottomImageST}>I also chose to color code the type of notification. For example, green is above and red is below. I kept this concept when creating the home screen for the application. The user is able to quickly see what notifications are still active and tell how the notified stock will activate based on the color.</p>
              <ImagePopup title="Hi-Fidelity Wireframes" popimage={hifiPopup}
                triggerElement={<img className={caseStyle.styleguideImg} src={hifiMain} alt="styleimg"></img>}></ImagePopup>

              <p className={caseStyle.imgdescriptext}>Hi-Fidelity Wireframes</p>
            </div>
          </div>

          {/* TODO figma */}
          <div className={caseStyle.titleFigContainer}>
            <h1 className={caseStyle.textFig}>Figma Prototype</h1>
          </div>

          <div className={caseStyle.figmacontrainer}>
            <iframe className={caseStyle.figmaiframe} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Flo16QmS6ty9ePx0u9UEA8v%2FProtoype-SN%3Fnode-id%3D5%253A96%26viewport%3D553%252C225%252C0.2686116397380829%26scaling%3Dscale-down&chrome=DOCUMENTATION" allowfullscreen></iframe>
          </div>

        </div>

      </section>
      <div className="layout-spacer-top"></div>

      {/* Conclusion */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletext}>Reflection</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div className={caseStyle.reflectionContainer}>
          <p className={caseStyle.reflectiontext}>This project involed the use of a variety of data collection techniques to find out the user painpoints. This is important because we want to make sure we develop features that fufills a users' needs. If their is no painpoint or need to fill in the first place, then we do not have a feature</p>
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

