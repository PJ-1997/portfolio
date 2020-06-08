import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Rotato from "../images/Rotato.png"

const CaseStudy = () => (
  <Layout>
    <body className="body">

      <section className="introsection">
        <div className="divcenter">

          <div className="lefttext-container">
            <h1 className="toptext">Stock Notify</h1>
            <div className="bottomtext">This is the codfdradf dfljdfl dlfkdjfjdfdfdfdf<br></br>dfasdfsdf lsdkjfsdjf</div>
          </div>

          <div className="IphonePic">
            <img src={Rotato} className="ratioimage" ></img>
          </div>

        </div>
      </section>
    </body>

    <SEO title="Case Study" />
  </Layout>
)

export default CaseStudy

