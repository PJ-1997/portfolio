import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Rotato from "../images/Rotato.png"
import caseStyle from "../components/Modules/casestudy.module.css"

const CaseStudy = () => (
  <Layout>
    <body className="body">

      {/* Hero */}
      <section className={caseStyle.introsection}>
        <div className={caseStyle.divcenter}>
          <div className={caseStyle.lefttextcontainer}>
            <h1 className={caseStyle.toptext}>Stock Notify</h1>
            <div className={caseStyle.bottomtext}>This is the codfdradf dfljdfl dlfkdjfjdfdfdfdf<br></br>dfasdfsdf lsdkjfsdjf</div>
          </div>
          <div className={caseStyle.IphonePic}>
            <img src={Rotato} className={caseStyle.ratioimage}></img>
          </div>
        </div>
      </section>
     
      {/* <div className={caseStyle.layoutspacertop}></div> */}

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
            <p className={caseStyle.overviewdescription}>My role was to create ans application that allows the user to homescreen in teh somoething in vise versa. What I dearm is an application that can be used in the stock market for actual rewards</p>
          </div>
          <div className={caseStyle.flexcontaineroverview}>
            <h1 className={caseStyle.flextitleoverview}>Challenge</h1>
            <p className={caseStyle.overviewdescription}>My role was to create ans application that allows the user to homescreen in teh somoething in vise versa. What I dearm is an application that can be used in the stock market for actual rewards</p>
          </div>
        </div>
      </section>

    </body>

    <SEO title="Case Study" />
  </Layout>
)

export default CaseStudy

