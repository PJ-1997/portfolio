import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import DesignProb from "../components/Popups/designProbs"
import caseStyle from "../components/Modules/provision.module.css"
import { Link } from "gatsby"

import provis from "../images/provisions-imgs/provis.jpg"
import oldpics from "../images/provisions-imgs/oldpics.jpg"
import newpics from "../images/provisions-imgs/newpics.jpg"
import inspir from "../images/provisions-imgs/inspir.jpg"
import layout from "../images/provisions-imgs/layout.jpg"
import competitors from "../images/provisions-imgs/competitors.jpg"
import survey from "../images/provisions-imgs/survey.jpg"
import persona from "../images/provisions-imgs/persona.jpg"
import dataSurvey from "../images/provisions-imgs/dataSurvey.jpg"
import lofiPaper from "../images/provisions-imgs/lofipaper.jpg"
import cirl1 from "../images/provisions-imgs/1Circle.png"
import cirl2 from "../images/provisions-imgs/2Circle.png"
import cirl3 from "../images/provisions-imgs/3Circle.png"

// Problems / Soulutions
import pic1 from "../images/provisions-imgs/problempics/pic1.png"
import pic2 from "../images/provisions-imgs/problempics/pic2.jpg"
import pic3 from "../images/provisions-imgs/problempics/pic3.png"
import pic4 from "../images/provisions-imgs/problempics/pic4.jpg"
import pic5 from "../images/provisions-imgs/problempics/pic5.png"
import pic6 from "../images/provisions-imgs/problempics/pic6.jpg"


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
            <p className={caseStyle.overviewText}>6 Months</p>
          </div>
          <div>
            <h1 className={caseStyle.overviewTitle}>My Role</h1>
            <p className={caseStyle.overviewText}>UI/UX, Product Design</p>
          </div>
          <div>
            <h1 className={caseStyle.overviewTitle}>Involvement</h1>
            <p className={caseStyle.overviewText3names}>Aaron Aguirre (Founder) <br></br> George Garcia (Engineer)<br></br>Pedro Molina</p>
          </div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Summary</h1>
            <p className={caseStyle.overviewdescription}>My role as a UI/UX designer was to redesign the company’s mockups. And to conduct user research to find out impression of the mockups. <br></br>To know which parts of the design to prioritize on based on user feedback. I also developed a high-fidelity prototype to demonstrate <br></br>how the user places an order.</p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Challenge</h1>
            <p className={caseStyle.overviewdescription}>The goal was to have high fidelity wireframes and a prototype of the app before a specific deadline. In time for an accelerator program. Another challenge was differentiating the design of the app from other surplus food apps on the market. We want the app to stand out from the crowd.</p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Solution</h1>
            <p className={caseStyle.overviewdescription}>We decided to pursue a dark theme and incorporate color to make the design pop out from the competition. I also used Figma to collaborate and get feedback on the design in real time. The target user for the app are young adults looking to save some money on their next meal.</p>
          </div>
        </div>
      </section>
      <div className={caseStyle.layoutspacertop}></div>

      {/* Starting Out / Inspiration */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Research</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Original Design</h1>
            <p className={caseStyle.overviewdescription}>I asked the founder questions regarding the vision and design inspiration for the app. The main feature of the app is the swipe card mechanic which allows the user to swipe through different food options. The original design was inspired by Figma’s website with its use of color and bold font.</p>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.figmacontrainer}>
            <img src={oldpics} alt="Old Pics"></img>
            <p className={caseStyle.imgdescriptextCenter}>Company's Mockups</p>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Conducting a <br></br>Survey</h1>
            <p className={caseStyle.overviewdescription}>I chose to run a survey through Google Forms to find out impressions about the original design. I also asked the participants' age to find out which demographic I need to design for. Due to the time constraint, <br></br>I surveyed 31 participants through Slack and LinkedIn.</p>
          </div>

          <div className={caseStyle.flexSideImageContainer}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <img className={caseStyle.styleguideImg} src={survey} alt="Survey"></img>
              <p className={caseStyle.imgdescriptext}>Survey</p>
            </div>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Who is the User?</h1>
            <p className={caseStyle.overviewdescription}>From the survey, participants were mid 20s to early 30s. We could infer that the users are Millennials, and the design must appeal to that demographic. Millennials are used to getting necessary information instantly. I want to make sure the app is easy to use and requires little thinking from the user.</p>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.figmacontrainer}>
            <img src={persona} alt="Persona"></img>
            <p className={caseStyle.imgdescriptextCenter}>Persona</p>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Differentiation from Competition</h1>
            <p className={caseStyle.overviewdescription}>I then created a Figma file and invited the founder of the app to show him some design inspiration for the app. The image that stood out the most was this. The way the pink and orange contrasted with the dark background made the items pop.</p>
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
      <div className={caseStyle.layoutspacertop}></div>

      {/* New Design */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Design</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        <div className={caseStyle.flexcontaineroverviewfirst}>
          <h1 className={caseStyle.flextitleoverview}>Why the switch to <br></br>dark theme?</h1>
          <p className={caseStyle.overviewdescription}>The main reason for the switch was to stand out from the competition. <br></br>I surveyed participants on their impression on the theme choice. And participants responded positively with the neon dark theme. Other surplus food apps in the market are light theme with one main primary color.</p>
        </div>

        {/* Center Big Image */}
        <div className={caseStyle.figmacontrainer}>
          <img src={competitors} alt="Competitors"></img>
          <p className={caseStyle.imgdescriptextCenter}>Competitors</p>
        </div>

        <div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Findings from <br></br>Research</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.overviewdescription}>From the survey, the most amount of feedback came from the swipe screen and placing an order. Participants wanted the price of the food item shown in the swipe screen. The swipe feature wasn’t clear to the participants. Others wanted to know how far they must drive to pick up their order.</p>
              <p className={caseStyle.overviewdescription}>After purchasing the order, participants felt lost. They wanted to know where to pick up their order and show directions to the restaurant. Others felt placing an order can done in one screen instead of two.</p>
            </div>
          </div>

          <div className={caseStyle.flexSideImageContainer}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <img className={caseStyle.styleguideImg} src={dataSurvey} alt="Data Survey"></img>
              <p className={caseStyle.imgdescriptext}>Survey Data</p>
            </div>
          </div>
          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Low Fidelity<br></br> Wireframes</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.overviewdescription}>Sketched lofi wireframes based on feedback from the survey. Also changed the design to a tab bar layout, recommended by Apple’s Human Interface Guidelines. </p>
            </div>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.figmacontrainer}>
            <img src={lofiPaper} alt="Low Pics"></img>
            <p className={caseStyle.imgdescriptextCenter}>Low Fidelity Screens</p>
          </div>

          <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>High Fidelity<br></br> Wireframes</h1>
            <div className={caseStyle.flexTextContainer}>
              <p className={caseStyle.overviewdescription}>Designed hifi wireframes to get impressions of the redesign. The color scheme of the app and tab bar menu received positive impressions.</p>
            </div>
          </div>

          {/* Center Big Image */}
          <div className={caseStyle.hifiPiccontainer}>
            <img src={newpics} alt="New Pics" className={caseStyle.newpicsImage}></img>
            <p className={caseStyle.newpicimgdescription}>High Fidelity Screens</p>
          </div>

          {/* <div className={caseStyle.flexcontaineroverviewfirst}>
            <h1 className={caseStyle.flextitleoverview}>Flow of the App</h1>
            <p className={caseStyle.overviewdescription}> After competitive analysis, I chose 3 tab bar sections: account, orders, and explore (swipe feature). This is where color came into play and color coded the different sections.</p>
          </div>

          <div className={caseStyle.flexSideImageContainer}>
            <h1 className={caseStyle.flextitleoverview}></h1>
            <div className={caseStyle.flexTextContainer}>
              <img className={caseStyle.styleguideImg} src={layout} alt="Inspiration"></img>
              <p className={caseStyle.imgdescriptext}>Tab Bar Layout</p>
            </div>
          </div> */}

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
      <div className={caseStyle.layoutspacertop}></div>

      {/* Indepth Design Problems */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Design Problems</h1>
          <div className={caseStyle.underlinetitle}></div>
        </div>

        {/* HELLA Images (6) */}
        {/* <DesignProb title="Problem #1: Swipe Screen" pic={pic1} picClass={caseStyle.pic1} arrayQ={["No price indication of the food item","No indication of distance between user and the restaurant", "Swipe feature is not apparent to the user"]}></DesignProb>

        <DesignProb title="Problem #1: Swipe Screen" picClass={caseStyle.pic2} pic={pic2} arrayQ={["No price indication of the food item","No indication of distance between user and the restaurant", "Swipe feature is not apparent to the user"]}></DesignProb> */}

        <div className={caseStyle.mainContainrTop}>
          <div className={caseStyle.leftDPImg}>
            <img className={caseStyle.pic1} src={pic1}></img>
          </div>

          <div className={caseStyle.rigtDPtext}>
            <div className={caseStyle.titleProb}>Problem #1: Swipe Screen</div>
            <div className={caseStyle.sidewayrightCon}>
              <img src={cirl1} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>No price indication of the food item</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl2} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>No indication of distance between user and the restaurant</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl3} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Swipe feature is not apparent to the user</div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className={caseStyle.mainContainr}>
          <div className={caseStyle.leftDPImg}>
            <img className={caseStyle.pic2} src={pic2}></img>
          </div>

          <div className={caseStyle.rigtDPtext}>
            <div className={caseStyle.titleProb}>Solution</div>
            <div className={caseStyle.sidewayrightCon}>
              <img src={cirl1} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Price and regular full price are visible to show the user that they're getting a deal</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl2} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Replaced city name with number of miles between user and restaurant</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl3} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Added buttons to make the action clear. (Checkmark to place order, “X” to move to the next food item)</div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className={caseStyle.mainContainr}>
          <div className={caseStyle.leftDPImg}>
            <img className={caseStyle.pic3} src={pic3}></img>
          </div>

          <div className={caseStyle.rigtDPtext}>
            <div className={caseStyle.titleProb}>Problem #2: Placing an Order</div>
            <div className={caseStyle.sidewayrightCon}>
              <img src={cirl1} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>User must go through 2 screens to place an order</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl2} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>The white space between elements can be condensed to fit more information into a single viewport</div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className={caseStyle.mainContainr}>
          <div className={caseStyle.leftDPImg}>
            <img className={caseStyle.pic4} src={pic4}></img>
          </div>

          <div className={caseStyle.rigtDPtext}>
            <div className={caseStyle.titleProb}>Solution</div>
            <div className={caseStyle.sidewayrightCon}>
              <img src={cirl1} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Condensed information into a single viewport</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl2} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Added a subtotal section to show the cost of the order. From competitive analysis</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl3} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Added “You Saved” phrase at the end to incentivize users to add more to their order. (The more you add to your order, the more you save)</div>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className={caseStyle.mainContainr}>
          <div className={caseStyle.leftDPImg}>
            <img className={caseStyle.pic5} src={pic5}></img>
          </div>

          <div className={caseStyle.rigtDPtext}>
            <div className={caseStyle.titleProb}>Problem #3: After Placing an Order</div>
            <div className={caseStyle.sidewayrightCon}>
              <img src={cirl1} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>No address of the restaurant</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl2} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Unable to input location on external map app</div>
            </div>
          </div>
        </div>
        {/* 6 */}
        <div className={caseStyle.mainContainr}>
          <div className={caseStyle.leftDPImg}>
            <img className={caseStyle.pic6} src={pic6}></img>
          </div>

          <div className={caseStyle.rigtDPtext}>
            <div className={caseStyle.titleProb}>Solution</div>
            <div className={caseStyle.sidewayrightCon}>
              <img src={cirl1} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Address of the restaurant is visible. Also included the distance between user and restaurant</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl2} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Added a button to open in an external map app</div>
            </div>
            <div className={caseStyle.sidewayrightCBOTTOM}>
              <img src={cirl3} className={caseStyle.numcirlrigt}></img>
              <div className={caseStyle.textDPrigt}>Changed the call to action to be more direct. “Pickup” color changed to green to stand out from the text</div>
            </div>
          </div>
        </div>

      </section>
      <div className={caseStyle.layoutspacertop}></div>

      {/* Prototype */}
      <section className={caseStyle.sectionaligncenter}>
        <div className={caseStyle.titlecontainer}>
          <h1 className={caseStyle.titletextUnderGrnLine}>Prototype</h1>
          <h1 className={caseStyle.textProtypeDesecpiton}>Signing Up/In&nbsp;&&nbsp;Placing an Order</h1>
        </div>

        {/* Figma Prototype */}
        {/* <div className={caseStyle.titleFigContainer}>
          <h1 className={caseStyle.textFig}>Figma Prototype</h1>
        </div> */}

        <div className={caseStyle.figmacontrainer}>
          <iframe className={caseStyle.figmaiframe} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F6XlBBCzyYOFj7Sza4k1kb1%2F%252Bprovisions-Prototype%3Fscaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D491%253A3862%26node-id%3D491%253A3862" allowfullscreen></iframe>
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
          <p className={caseStyle.reflectiontext}>This project consisted of time management and collaboration. This is extremely important in bigger companies that want products as fast as possible to turn a profit for the investors. It’s all about investor return and collaborating with people outside of the design loop. And explaining the importance of good design and user experience.</p>
        </div>

      </section>

      <div className="rewind-container">
        <Link className="rewind" to="/">Back to Portfolio</Link>
      </div>

    </body>
    <SEO title="+provisions" />
  </Layout>
)

export default CaseStudy

