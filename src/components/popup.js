import React from 'react';
import Popup from 'reactjs-popup';

function OwnPopup({ title, popimage, triggerElement }) {
  return (
    <Popup trigger={triggerElement} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}> &times; </a>
          <div className="header">{title}</div>
          <div className="content">
            <img src={popimage}></img>
          </div>
        </div>
      )}
    </Popup>
  )
}
export default OwnPopup


