(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/uDJ":function(e,t,o){"use strict";var n=o("q1tI"),r=o.n(n);o("V+eJ"),o("KKXr"),o("XfO3"),o("HEwt"),o("a1Th"),o("h7Nl"),o("Btvt"),o("rE2o"),o("ioFf"),o("rGqo"),o("LK8F"),o("/SS/"),o("hHhE"),o("91GP"),o("HAE/");function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function f(e,t,o,n,r){var i=r.offsetX,a=r.offsetY,s=n?8:0,l=o.split(" "),p=e.top+e.height/2,c=e.left+e.width/2,u=t.height,f=t.width,d=p-u/2,g=c-f/2,h="",m="0%",y="0%";switch(l[0]){case"top":d-=u/2+e.height/2+s,h="rotate(45deg)",m="100%",y="50%";break;case"bottom":d+=u/2+e.height/2+s,h="rotate(225deg)",y="50%";break;case"left":g-=f/2+e.width/2+s,h=" rotate(-45deg)",y="100%",m="50%";break;case"right":g+=f/2+e.width/2+s,h="rotate(135deg)",m="50%"}switch(l[1]){case"top":d=e.top,m="".concat(e.height/2,"px");break;case"bottom":d=e.top-u+e.height,m="".concat(u-e.height/2,"px");break;case"left":g=e.left,y="".concat(e.width/2,"px");break;case"right":g=e.left-f+e.width,y="".concat(f-e.width/2,"px")}return{top:d="top"===l[0]?d-a:d+a,left:g="left"===l[0]?g-i:g+i,transform:h,arrowLeft:y,arrowTop:m}}var d={popupContent:{tooltip:{position:"absolute",zIndex:"2",width:"200px",background:"rgb(255, 255, 255)",border:"1px solid rgb(187, 187, 187)",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 3px",padding:"5px"},modal:{position:"relative",background:"rgb(255, 255, 255)",width:"50%",margin:"auto",border:"1px solid rgb(187, 187, 187)",padding:"5px"}},popupArrow:{height:"10px",width:"10px",position:"absolute",background:"rgb(255, 255, 255)",transform:"rotate(45deg)",margin:"-5px",zIndex:"-1",boxShadow:"rgba(0, 0, 0, 0.2) 1px 1px 1px"},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0"},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",background:"rgba(0, 0, 0,0.5)",display:"flex",zIndex:"999"}}},g=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom","center center"],h=function(e){function t(e){var o,n,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,i=l(t).call(this,e),o=!i||"object"!=typeof i&&"function"!=typeof i?c(n):i,a(c(o),"repositionOnResize",(function(){o.setPosition()})),a(c(o),"onEscape",(function(e){"Escape"===e.key&&o.closePopup()})),a(c(o),"lockScroll",(function(){var e=o.props.lockScroll;o.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="hidden")})),a(c(o),"resetScroll",(function(){var e=o.props.lockScroll;o.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="auto")})),a(c(o),"togglePopup",(function(e){e.persist(),o.state.isOpen?o.closePopup(e):o.openPopup(e)})),a(c(o),"openPopup",(function(e){var t=o.props,n=t.disabled,r=t.onOpen;o.state.isOpen||n||(r(e),o.setState({isOpen:!0},(function(){o.setPosition(),o.lockScroll()})))})),a(c(o),"closePopup",(function(e){var t=o.props.onClose;o.state.isOpen&&(t(e),o.setState({isOpen:!1},(function(){o.resetScroll()})))})),a(c(o),"onMouseEnter",(function(){clearTimeout(o.timeOut);var e=o.props.mouseEnterDelay;o.timeOut=setTimeout((function(){return o.openPopup()}),e)})),a(c(o),"onMouseLeave",(function(){clearTimeout(o.timeOut);var e=o.props.mouseLeaveDelay;o.timeOut=setTimeout((function(){return o.closePopup()}),e)})),a(c(o),"getTooltipBoundary",(function(){var e=o.props.keepTooltipInside,t={top:0,left:0,width:window.innerWidth,height:window.innerHeight};"string"==typeof e&&(t=document.querySelector(e).getBoundingClientRect());return t})),a(c(o),"setPosition",(function(){var e=o.state,t=e.modal,n=e.isOpen;if(!t&&n){var r=o.props,i=r.arrow,a=r.position,s=r.offsetX,l=r.offsetY,p=r.keepTooltipInside,c=r.arrowStyle,d=r.className,h=o.HelperEl.getBoundingClientRect(),m=o.TriggerEl.getBoundingClientRect(),y=o.ContentEl.getBoundingClientRect(),w=o.getTooltipBoundary(),v=Array.isArray(a)?a:[a];(p||Array.isArray(a))&&(v=[].concat(u(v),g));var b=function(e,t,o,n,r,i){for(var a,s=r.offsetX,l=r.offsetY,p=0;p<o.length;){var c={top:(a=f(e,t,o[p],n,{offsetX:s,offsetY:l})).top,left:a.left,width:t.width,height:t.height};if(!(c.top<=i.top||c.left<=i.left||c.top+c.height>=i.top+i.height||c.left+c.width>=i.left+i.width))break;p++}return a}(m,y,v,i,{offsetX:s,offsetY:l},w);o.ContentEl.style.top="".concat(b.top-h.top,"px"),o.ContentEl.style.left="".concat(b.left-h.left,"px"),i&&(o.ArrowEl.style.transform=b.transform,o.ArrowEl.style["-ms-transform"]=b.transform,o.ArrowEl.style["-webkit-transform"]=b.transform,o.ArrowEl.style.top=c.top||b.arrowTop,o.ArrowEl.style.left=c.left||b.arrowLeft,o.ArrowEl.classList.add("popup-arrow"),""!==d&&o.ArrowEl.classList.add("".concat(d,"-arrow"))),"static"!==window.getComputedStyle(o.TriggerEl,null).getPropertyValue("position")&&""!==window.getComputedStyle(o.TriggerEl,null).getPropertyValue("position")||(o.TriggerEl.style.position="relative")}})),a(c(o),"addWarperAction",(function(){var e=o.props,t=e.contentStyle,n=e.className,r=e.on,i=o.state.modal,a=i?d.popupContent.modal:d.popupContent.tooltip,s={className:"popup-content ".concat(""!==n?"".concat(n,"-content"):""),style:Object.assign({},a,t),ref:o.setContentRef,onClick:function(e){e.stopPropagation()}};return!i&&r.indexOf("hover")>=0&&(s.onMouseEnter=o.onMouseEnter,s.onMouseLeave=o.onMouseLeave),s})),a(c(o),"renderTrigger",(function(){for(var e={key:"T",ref:o.setTriggerRef},t=o.props,n=t.on,i=t.trigger,a=o.state.isOpen,s=Array.isArray(n)?n:[n],l=0,p=s.length;l<p;l++)switch(s[l]){case"click":e.onClick=o.togglePopup;break;case"hover":e.onMouseEnter=o.onMouseEnter,e.onMouseLeave=o.onMouseLeave;break;case"focus":e.onFocus=o.onMouseEnter}return"function"==typeof i?!!i&&r.a.cloneElement(i(a),e):!!i&&r.a.cloneElement(i,e)})),a(c(o),"renderContent",(function(){var e=o.props,t=e.arrow,n=e.arrowStyle,i=e.children,a=o.state,l=a.modal,p=a.isOpen;return r.a.createElement("div",s({},o.addWarperAction(),{key:"C"}),t&&!l&&r.a.createElement("div",{ref:o.setArrowRef,style:Object.assign({},d.popupArrow,n)}),"function"==typeof i?i(o.closePopup,p):i)})),o.setTriggerRef=function(e){return o.TriggerEl=e},o.setContentRef=function(e){return o.ContentEl=e},o.setArrowRef=function(e){return o.ArrowEl=e},o.setHelperRef=function(e){return o.HelperEl=e},o.timeOut=0;var p=e.open,h=e.modal,m=e.defaultOpen,y=e.trigger;return o.state={isOpen:p||m,modal:!!h||!y},o}var o,n,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),o=t,(n=[{key:"componentDidMount",value:function(){var e=this.props,t=e.closeOnEscape,o=e.defaultOpen,n=e.repositionOnResize;o&&this.setPosition(),t&&window.addEventListener("keyup",this.onEscape),n&&window.addEventListener("resize",this.repositionOnResize)}},{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.open,n=t.disabled,r=this.state.isOpen;e.open!==o&&(o?this.openPopup():this.closePopup(void 0,!0)),e.disabled!==n&&n&&r&&this.closePopup()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOut);var e=this.props,t=e.closeOnEscape,o=e.repositionOnResize;t&&window.removeEventListener("keyup",this.onEscape),o&&window.removeEventListener("resize",this.repositionOnResize),this.resetScroll()}},{key:"render",value:function(){var e=this.props,t=e.overlayStyle,o=e.closeOnDocumentClick,n=e.className,i=e.on,a=(e.trigger,this.state),s=a.modal,l=a.isOpen,p=l&&!(i.indexOf("hover")>=0),c=s?d.overlay.modal:d.overlay.tooltip;return[this.renderTrigger(),l&&r.a.createElement("div",{key:"H",style:{position:"absolute",top:"0px",left:"0px"},ref:this.setHelperRef}),p&&r.a.createElement("div",{key:"O",className:"popup-overlay ".concat(""!==n?"".concat(n,"-overlay"):""),style:Object.assign({},c,t),onClick:o?this.closePopup:void 0},s&&this.renderContent()),l&&!s&&this.renderContent()]}}])&&i(o.prototype,n),h&&i(o,h),t}(r.a.PureComponent);a(h,"defaultProps",{trigger:null,onOpen:function(){},onClose:function(){},defaultOpen:!1,open:!1,disabled:!1,closeOnDocumentClick:!0,repositionOnResize:!0,closeOnEscape:!0,on:["click"],contentStyle:{},arrowStyle:{},overlayStyle:{},className:"",position:"bottom center",modal:!1,lockScroll:!1,arrow:!0,offsetX:0,offsetY:0,mouseEnterDelay:100,mouseLeaveDelay:100,keepTooltipInside:!1});var m=h,y={width:"60%",minWidth:"350px",maxWidth:"960px"};t.a=function(e){var t=e.title,o=e.popimage,n=e.triggerElement;return r.a.createElement(m,{contentStyle:y,trigger:n,modal:!0},(function(e){return r.a.createElement("div",{className:"modal"},r.a.createElement("a",{className:"close",onClick:e}," × "),r.a.createElement("div",{className:"header"},t),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:o}))))}))}}}]);
//# sourceMappingURL=737856d3feadee9150d6422973f2a9ffff224d23-49c788f806c944b5019c.js.map