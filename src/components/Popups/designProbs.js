import React from 'react';
import caseStyle from "../Modules/provision.module.css"

// Problem: Pic are diffent sizes
function DesignProb({ title, pic, picClass ,arrayQ }) {

  return (
    <div className={caseStyle.mainContainr}>
      <div className={caseStyle.leftDPImg}>
        <img className={picClass} src={pic}></img>
      </div>

      <div className={caseStyle.rigtDPtext}>
        <div className={caseStyle.titleProb}>{title}</div>
        <div className={caseStyle.sidewayrightCon}>
          <div className={caseStyle.numcirlrigt}>1</div>
          <div className={caseStyle.textDPrigt}>{arrayQ[0]}</div>
        </div>

        {arrayQ.slice(1).map(function (value, i) {
          return <div className={caseStyle.sidewayrightCBOTTOM}>
            <div className={caseStyle.numcirlrigt}>{(i + 1)+1}</div>
            <div className={caseStyle.textDPrigt}>{value}</div>
          </div>
        })}
      </div>
    </div>
  )
}
export default DesignProb