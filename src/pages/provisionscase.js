import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import caseStyle from "../components/Modules/provision.module.css"
import { Link } from "gatsby"
import ImagePopup from "../components/Popups/popup"

import provis from "../images/provisions-imgs/provis.png"
import oldpics from "../images/provisions-imgs/oldpics.png"
import newpics from "../images/provisions-imgs/newpics.svg"
import inspir from "../images/provisions-imgs/inspir.png"
import layout from "../images/provisions-imgs/layout.svg"

// Problems / Soulutions
import prob1 from "../images/provisions-imgs/problempics/prob1.svg"
import solu1 from "../images/provisions-imgs/problempics/solu1.svg"
import prob2 from "../images/provisions-imgs/problempics/prob2.svg"
import solu2 from "../images/provisions-imgs/problempics/solu2.svg"

import lofiMain from "../images/stocknotify-imgs/lofi-main.png"
import lofiPopup from "../images/stocknotify-imgs/popup-images/lofiPopup.png"
import initialPopup from "../images/stocknotify-imgs/popup-images/initialPopup.png"

const CaseStudy = () => (
  <Layout>
    <body className="body">

      {/* Hero */}
      <section className={caseStyle.introsection}>
        <div className={caseStyle.divcenter}>
          <div className={caseStyle.lefttextcontainer}>
            <h1 className={caseStyle.toptext}>Provisions +</h1>
            <div className={caseStyle.bottomtext}>Deals on surplus food, helping to <br></br>prevent food waste</div>
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
            <p className={caseStyle.overviewText}>Product Desinger</p>
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

      {/* Starting Out / Inspiration */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletext}>Research</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Original Design</h1>
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

      {/* New Design */}
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
            <h1 className={caseStyle.flextitleoverview}>Flow of the App</h1>
            <p className={caseStyle.overviewdescription}>The app is organized into a tab which houses the order, explore (swipe screen to place an order) , and account screen. I decided to incorporate color to make it pop between screen and also to differentiate from the competition</p>
          </div>

          <div className={caseStyle.flexSideImageContainer}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <ImagePopup title="Inspiration" popimage={initialPopup}
                triggerElement={<img className={caseStyle.styleguideImg} src={layout} alt="Inspiration"></img>}></ImagePopup>
              <p className={caseStyle.imgdescriptext}>Inspiration</p>
            </div>
          </div>

          {/* <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Prototyping and Iterations</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.titleParagraph}>Lo-Fidelity Prototyping</p>
              <p className={caseStyle.subjectText}>I like to get my ideas on paper before I move into digitally creating the lo-fidelity prototypes.<br></br><br></br>Once I’ve gone through a couple of iterations, I then shared these lo-fidelity prototypes with users to get some feedback. This is an important step to make sure that the design fulfills the users’ need.</p>
              <ImagePopup title="Lo-Fidelity Wireframes" popimage={lofiPopup}
                triggerElement={<img className={caseStyle.styleguideImg} src={lofiMain} alt="styleimg"></img>}></ImagePopup>
              <p className={caseStyle.imgdescriptext}>Lo-Fidelity Wireframes</p>
            </div>
          </div> */}



        </div>
      </section>
      <div className="layout-spacer-top"></div>

      {/* Indepth Design Problems */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletext}>Design Problems</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div className={caseStyle.inDepthPics}>
          <img src={prob1} alt="New Pics"></img>
        </div>

        <div className={caseStyle.inDepthPics}>
          <img src={solu1} alt="New Pics"></img>
        </div>

        <div className={caseStyle.inDepthPics}>
          <img src={prob2} alt="New Pics"></img>
        </div>

        <div className={caseStyle.inDepthPics}>
          <img src={solu2} alt="New Pics"></img>
        </div>

      </section>
      <div className="layout-spacer-top"></div>

      {/* Prototype */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletext}>Prototype</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        {/* Figma Prototype */}
        {/* <div className={caseStyle.titleFigContainer}>
          <h1 className={caseStyle.textFig}>Figma Prototype</h1>
        </div> */}

        <div className={caseStyle.figmacontrainer}>
          <iframe className={caseStyle.figmaiframe} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FzEoPUhZmfDCzKJs89sUn0q%2FPrototype-Provisions-Explore%3Fnode-id%3D491%253A3862%26viewport%3D505%252C279%252C0.08314408361911774%26scaling%3Dscale-down" allowfullscreen></iframe>
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

