import React from 'react';
import Popup from 'reactjs-popup';

const contentStyle = {
  width: "95%",
  minWidth: "350px",
  maxWidth: "960px"
};

function DemoPopup({ title, url, triggerElement }) {
  return (
    <Popup contentStyle={contentStyle} trigger={triggerElement} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}> &times; </a>
          <div className="header">{title}</div>
          <div className="content">

            <div className="ifrane-container">
              <iframe width="560" height="315" src={url + "?vq=hd1080&autoplay=1&modestbranding=1&showinfo=0&rel=0"} frameborder="0"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
                allow="accelerometer; autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>
            </div>

          </div>
        </div>
      )}
    </Popup>
  )
}
export default DemoPopup


