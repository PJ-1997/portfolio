import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Rotato from "../images/Rotato.png"
import containerStyles from "../components/Modules/casestudy.module.css"

const CaseStudy = () => (
  <Layout>
    <body className="body">

      <section className={containerStyles.introsection}>
        <div className={containerStyles.divcenter}>
          <div className={containerStyles.lefttextcontainer}>
            <h1 className={containerStyles.toptext}>Stock Notify</h1>
            <div className={containerStyles.bottomtext}>This is the codfdradf dfljdfl dlfkdjfjdfdfdfdf<br></br>dfasdfsdf lsdkjfsdjf</div>
          </div>
          <div className={containerStyles.IphonePic}>
            <img src={Rotato} className={containerStyles.ratioimage}></img>
          </div>
        </div>
      </section>

      <div className={containerStyles.layoutspacertop}></div>

      <section className={containerStyles.sectionaligncenter}>
        <div className={containerStyles.titlecontainer}>
          <h1 className={containerStyles.titletext}>Overview</h1>
          <div className={containerStyles.underlinetitle}></div>
        </div>
        
      </section>

    </body>

    <SEO title="Case Study" />
  </Layout>
)

export default CaseStudy

