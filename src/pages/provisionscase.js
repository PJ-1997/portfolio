import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import caseStyle from "../components/Modules/provision.module.css"
import { Link } from "gatsby"
import ImagePopup from "../components/Popups/popup"

import provis from "../images/provisions-imgs/provis.jpg"
import oldpics from "../images/provisions-imgs/oldpics.jpg"
import newpics from "../images/provisions-imgs/newpics.jpg"
import inspir from "../images/provisions-imgs/inspir.jpg"
import layout from "../images/provisions-imgs/layout.jpg"

// Problems / Soulutions
import prob1 from "../images/provisions-imgs/problempics/prob1.jpg"
import solu1 from "../images/provisions-imgs/problempics/solu1.jpg"
import prob2 from "../images/provisions-imgs/problempics/prob2.jpg"
import solu2 from "../images/provisions-imgs/problempics/solu2.jpg"
import prob3 from "../images/provisions-imgs/problempics/prob3.jpg"
import solu3 from "../images/provisions-imgs/problempics/solu3.jpg"

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
            <h1 className={caseStyle.toptext}>+provisions</h1>
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
          <h1 className={caseStyle.titletextUnderGrnLine}>Overview</h1>
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
            <p className={caseStyle.overviewdescription}>My role as a Product designer was to redesign the original screens. This involved reconstructing how the user navigates around the app. I also created a prototype of the swipe feature to demonstrate the process of placing an order.</p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Challenge</h1>
            <p className={caseStyle.overviewdescription}>The main challenge was the time constraint. The goal was to have high fidelity wireframes and a prototype of the app before a specific deadline. In time for an accelerator program. Another challenge was differentiating the design of the app from other surplus food apps on the market. We want the app to stand out from the crowd.</p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Solution</h1>
            <p className={caseStyle.overviewdescription}>We decided to pursue a dark theme and incorporate color to make the design popout from the competition. I also used Figma to collaborate and get feedback on the design in real time. The target user for the app are young adults looking to save some money on their next meal.</p>
          </div>
        </div>
      </section>
      <div className="layout-spacer-top"></div>

      {/* Starting Out / Inspiration */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Research</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Original Design</h1>
            <p className={caseStyle.overviewdescription}>The first step is to ask questions about the vision and design inspiration for the app. Upon the initial discussion with the creator of the app, the main feature of the app is the swipe card mechanic which allows the user to swipe through different food options. The original design was inspired by Figma’s website with its use of color and bold font.</p>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.figmacontrainer}>
            <img src={oldpics} alt="Old Pics"></img>
            <p className={caseStyle.imgdescriptextCenter}>Original Screens</p>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Differentiation from Competition</h1>
            <p className={caseStyle.overviewdescription}>I then created a Figma file and invited the creator of the app to show him some design inspiration for the app. I shared images to get an understanding of the design he’s looking for. The images ranged from watercolor to a paper texture design. But the image that stood out the most was this one. The way the pink and orange contrasted with the dark background made the items pop.</p>
          </div>

          <div className={caseStyle.flexSideImageContainer}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <img className={caseStyle.styleguideImg} src={inspir} alt="Inspiration"></img>
              <p className={caseStyle.imgdescriptext}>Inspiration</p>
            </div>
          </div>

        </div>

      </section>
      <div className="layout-spacer-top"></div>

      {/* New Design */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Design</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Findings from <br></br>Research</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.overviewdescription}>I then walked myself into the user journey. Since the user is picking the food up from the restaurant. Having the number of miles between the user and the restaurant is useful information to show how far the restaurant is from the user’s current location.</p>
              <p className={caseStyle.overviewdescription}>This was one of many design improvements I came up with during this phase. In summary, the user journey involved the user to swipe the food item, place order, and open directions. Also having a screen to show current orders.</p>
            </div>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.figmacontrainer}>
            <img src={newpics} alt="New Pics"></img>
            <p className={caseStyle.imgdescriptextCenter}>High Fidelity Screens</p>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Flow of the App</h1>
            <p className={caseStyle.overviewdescription}>The app is tab bar based which is recommended by Apple’s Human Interface Guidelines which allows users to quickly switch into different sections of an app. In this case, I chose 3 sections which include account, orders, and explore (swipe feature). This is where color came into play and color coded the different sections.</p>
          </div>

          <div className={caseStyle.flexSideImageContainer}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <img className={caseStyle.styleguideImg} src={layout} alt="Inspiration"></img>
              <p className={caseStyle.imgdescriptext}>Tab Bar Layout</p>
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
          <h1 className={caseStyle.titletextUnderGrnLine}>Design Problems</h1>
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

        <div className={caseStyle.inDepthPics}>
          <img src={prob3} alt="New Pics"></img>
        </div>

        <div className={caseStyle.inDepthPics}>
          <img src={solu3} alt="New Pics"></img>
        </div>

      </section>
      <div className="layout-spacer-top"></div>

      {/* Prototype */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Prototype</h1>
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
          <h1 className={caseStyle.titletextUnderGrnLine}>Reflection</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div className={caseStyle.reflectionContainer}>
          <p className={caseStyle.reflectiontext}>This project consisted of time management and collaboration with the owner of the startup. This is extremely important in bigger companies that want products as fast as possible to turn a profit for the investors. It’s all about investor return and collaborating with people outside of the design loop. And explaining the importance of good design and user experience.</p>
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

