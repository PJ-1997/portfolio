import React from 'react';
import Popup from 'reactjs-popup';

const contentStyle = {
  width: "80%",
  minWidth: "350px",
  maxWidth: "1050px"
};

function BigPopup({ title, popimage, triggerElement }) {
  return (
    <Popup contentStyle={contentStyle} trigger={triggerElement} lockScroll={false} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}> &times; </a>
          <div className="header">{title}</div>
          <div className="content">

            <div className="image-container">
              <img src={popimage}></img>
            </div>

          </div>
        </div>
      )}
    </Popup>
  )
}
export default BigPopup


