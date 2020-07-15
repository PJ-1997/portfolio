import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import caseStyle from "../components/Modules/casestudy.module.css"

import rotatoImg from "../images/Rotato.png"
import styleImg from "../images/stocknotify-imgs/styleguide.svg"

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
            <h1 className={caseStyle.overviewTitle}>Team</h1>
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
            <p className={caseStyle.overviewdescription}>The challenge is to create an iOS application which sends notification on stock prices. The user is able to easliy set the notification using the application. sldfsdljf s dfsldkfj sdf sdlfksd fs lsdfjs ldfj ds dlfksdfl f </p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Solution</h1>
            <p className={caseStyle.overviewdescription}>After brainstorming the potential ideas with myself. I set a goal to create a MVP of the application. The application was going to be able to search stock using a stock API. The applcation is also going to favoirte stocks and the user will be able to setup a notification.</p>
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
            <h1 className={caseStyle.flextitleoverview}>User Persona</h1>
            <p className={caseStyle.overviewdescription}>The ideal user is a younger generation just started investing in the stock market.</p>
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
              <p className={caseStyle.titleParagraph}>High Fidelity Prototyping</p>
              <p className={caseStyle.subjectText}>The ideal user is a younger generation just started investing in the stock market.</p>
            </div>

          </div>
        </div>

      </section>


    </body>
    <SEO title="Case Study" />
  </Layout>
)

export default CaseStudy

