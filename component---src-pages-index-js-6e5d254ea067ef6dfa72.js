(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4o71":function(e,t,o){e.exports=o.p+"static/farrier-3a7eff9a0e1b99664d52f11ae7e08ff6.png"},R1EF:function(e,t,o){e.exports=o.p+"static/dribble-840aad1912753564e392923f57352f0a.svg"},"RSb/":function(e,t,o){e.exports=o.p+"static/provDisplayImage-f25040c79eda135571bf271525f81334.png"},RXBc:function(e,t,o){"use strict";o.r(t);var r=o("q1tI"),n=o.n(r),a=o("Bl7J"),i=o("vrFN"),s=o("Wbzz");o("V+eJ"),o("KKXr"),o("XfO3"),o("HEwt"),o("a1Th"),o("h7Nl"),o("Btvt"),o("rE2o"),o("ioFf"),o("rGqo"),o("LK8F"),o("/SS/"),o("hHhE"),o("91GP"),o("HAE/");function l(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e}).apply(this,arguments)}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,t,o,r,n){var a=n.offsetX,i=n.offsetY,s=r?8:0,l=o.split(" "),c=e.top+e.height/2,p=e.left+e.width/2,u=t.height,f=t.width,d=c-u/2,m=p-f/2,g="",h="0%",v="0%";switch(l[0]){case"top":d-=u/2+e.height/2+s,g="rotate(45deg)",h="100%",v="50%";break;case"bottom":d+=u/2+e.height/2+s,g="rotate(225deg)",v="50%";break;case"left":m-=f/2+e.width/2+s,g=" rotate(-45deg)",v="100%",h="50%";break;case"right":m+=f/2+e.width/2+s,g="rotate(135deg)",h="50%"}switch(l[1]){case"top":d=e.top,h="".concat(e.height/2,"px");break;case"bottom":d=e.top-u+e.height,h="".concat(u-e.height/2,"px");break;case"left":m=e.left,v="".concat(e.width/2,"px");break;case"right":m=e.left-f+e.width,v="".concat(f-e.width/2,"px")}return{top:d="top"===l[0]?d-i:d+i,left:m="left"===l[0]?m-a:m+a,transform:g,arrowLeft:v,arrowTop:h}}var h={popupContent:{tooltip:{position:"absolute",zIndex:"2",width:"200px",background:"rgb(255, 255, 255)",border:"1px solid rgb(187, 187, 187)",boxShadow:"rgba(0, 0, 0, 0.2) 0px 1px 3px",padding:"5px"},modal:{position:"relative",background:"rgb(255, 255, 255)",width:"50%",margin:"auto",border:"1px solid rgb(187, 187, 187)",padding:"5px"}},popupArrow:{height:"10px",width:"10px",position:"absolute",background:"rgb(255, 255, 255)",transform:"rotate(45deg)",margin:"-5px",zIndex:"-1",boxShadow:"rgba(0, 0, 0, 0.2) 1px 1px 1px"},overlay:{tooltip:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0"},modal:{position:"fixed",top:"0",bottom:"0",left:"0",right:"0",background:"rgba(0, 0, 0,0.5)",display:"flex",zIndex:"999"}}},v=["top left","top center","top right","right top","right center","right bottom","bottom left","bottom center","bottom right","left top","left center","left bottom","center center"],b=function(e){function t(e){var o,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=u(t).call(this,e),o=!a||"object"!=typeof a&&"function"!=typeof a?d(r):a,c(d(o),"repositionOnResize",(function(){o.setPosition()})),c(d(o),"onEscape",(function(e){"Escape"===e.key&&o.closePopup()})),c(d(o),"lockScroll",(function(){var e=o.props.lockScroll;o.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="hidden")})),c(d(o),"resetScroll",(function(){var e=o.props.lockScroll;o.state.modal&&e&&(document.getElementsByTagName("body")[0].style.overflow="auto")})),c(d(o),"togglePopup",(function(e){e.persist(),o.state.isOpen?o.closePopup(e):o.openPopup(e)})),c(d(o),"openPopup",(function(e){var t=o.props,r=t.disabled,n=t.onOpen;o.state.isOpen||r||(n(e),o.setState({isOpen:!0},(function(){o.setPosition(),o.lockScroll()})))})),c(d(o),"closePopup",(function(e){var t=o.props.onClose;o.state.isOpen&&(t(e),o.setState({isOpen:!1},(function(){o.resetScroll()})))})),c(d(o),"onMouseEnter",(function(){clearTimeout(o.timeOut);var e=o.props.mouseEnterDelay;o.timeOut=setTimeout((function(){return o.openPopup()}),e)})),c(d(o),"onMouseLeave",(function(){clearTimeout(o.timeOut);var e=o.props.mouseLeaveDelay;o.timeOut=setTimeout((function(){return o.closePopup()}),e)})),c(d(o),"getTooltipBoundary",(function(){var e=o.props.keepTooltipInside,t={top:0,left:0,width:window.innerWidth,height:window.innerHeight};"string"==typeof e&&(t=document.querySelector(e).getBoundingClientRect());return t})),c(d(o),"setPosition",(function(){var e=o.state,t=e.modal,r=e.isOpen;if(!t&&r){var n=o.props,a=n.arrow,i=n.position,s=n.offsetX,l=n.offsetY,c=n.keepTooltipInside,p=n.arrowStyle,u=n.className,f=o.HelperEl.getBoundingClientRect(),d=o.TriggerEl.getBoundingClientRect(),h=o.ContentEl.getBoundingClientRect(),b=o.getTooltipBoundary(),E=Array.isArray(i)?i:[i];(c||Array.isArray(i))&&(E=[].concat(m(E),v));var y=function(e,t,o,r,n,a){for(var i,s=n.offsetX,l=n.offsetY,c=0;c<o.length;){var p={top:(i=g(e,t,o[c],r,{offsetX:s,offsetY:l})).top,left:i.left,width:t.width,height:t.height};if(!(p.top<=a.top||p.left<=a.left||p.top+p.height>=a.top+a.height||p.left+p.width>=a.left+a.width))break;c++}return i}(d,h,E,a,{offsetX:s,offsetY:l},b);o.ContentEl.style.top="".concat(y.top-f.top,"px"),o.ContentEl.style.left="".concat(y.left-f.left,"px"),a&&(o.ArrowEl.style.transform=y.transform,o.ArrowEl.style["-ms-transform"]=y.transform,o.ArrowEl.style["-webkit-transform"]=y.transform,o.ArrowEl.style.top=p.top||y.arrowTop,o.ArrowEl.style.left=p.left||y.arrowLeft,o.ArrowEl.classList.add("popup-arrow"),""!==u&&o.ArrowEl.classList.add("".concat(u,"-arrow"))),"static"!==window.getComputedStyle(o.TriggerEl,null).getPropertyValue("position")&&""!==window.getComputedStyle(o.TriggerEl,null).getPropertyValue("position")||(o.TriggerEl.style.position="relative")}})),c(d(o),"addWarperAction",(function(){var e=o.props,t=e.contentStyle,r=e.className,n=e.on,a=o.state.modal,i=a?h.popupContent.modal:h.popupContent.tooltip,s={className:"popup-content ".concat(""!==r?"".concat(r,"-content"):""),style:Object.assign({},i,t),ref:o.setContentRef,onClick:function(e){e.stopPropagation()}};return!a&&n.indexOf("hover")>=0&&(s.onMouseEnter=o.onMouseEnter,s.onMouseLeave=o.onMouseLeave),s})),c(d(o),"renderTrigger",(function(){for(var e={key:"T",ref:o.setTriggerRef},t=o.props,r=t.on,a=t.trigger,i=o.state.isOpen,s=Array.isArray(r)?r:[r],l=0,c=s.length;l<c;l++)switch(s[l]){case"click":e.onClick=o.togglePopup;break;case"hover":e.onMouseEnter=o.onMouseEnter,e.onMouseLeave=o.onMouseLeave;break;case"focus":e.onFocus=o.onMouseEnter}return"function"==typeof a?!!a&&n.a.cloneElement(a(i),e):!!a&&n.a.cloneElement(a,e)})),c(d(o),"renderContent",(function(){var e=o.props,t=e.arrow,r=e.arrowStyle,a=e.children,i=o.state,s=i.modal,l=i.isOpen;return n.a.createElement("div",p({},o.addWarperAction(),{key:"C"}),t&&!s&&n.a.createElement("div",{ref:o.setArrowRef,style:Object.assign({},h.popupArrow,r)}),"function"==typeof a?a(o.closePopup,l):a)})),o.setTriggerRef=function(e){return o.TriggerEl=e},o.setContentRef=function(e){return o.ContentEl=e},o.setArrowRef=function(e){return o.ArrowEl=e},o.setHelperRef=function(e){return o.HelperEl=e},o.timeOut=0;var i=e.open,s=e.modal,l=e.defaultOpen,f=e.trigger;return o.state={isOpen:i||l,modal:!!s||!f},o}var o,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),o=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.closeOnEscape,o=e.defaultOpen,r=e.repositionOnResize;o&&this.setPosition(),t&&window.addEventListener("keyup",this.onEscape),r&&window.addEventListener("resize",this.repositionOnResize)}},{key:"componentDidUpdate",value:function(e){var t=this.props,o=t.open,r=t.disabled,n=this.state.isOpen;e.open!==o&&(o?this.openPopup():this.closePopup(void 0,!0)),e.disabled!==r&&r&&n&&this.closePopup()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeOut);var e=this.props,t=e.closeOnEscape,o=e.repositionOnResize;t&&window.removeEventListener("keyup",this.onEscape),o&&window.removeEventListener("resize",this.repositionOnResize),this.resetScroll()}},{key:"render",value:function(){var e=this.props,t=e.overlayStyle,o=e.closeOnDocumentClick,r=e.className,a=e.on,i=(e.trigger,this.state),s=i.modal,l=i.isOpen,c=l&&!(a.indexOf("hover")>=0),p=s?h.overlay.modal:h.overlay.tooltip;return[this.renderTrigger(),l&&n.a.createElement("div",{key:"H",style:{position:"absolute",top:"0px",left:"0px"},ref:this.setHelperRef}),c&&n.a.createElement("div",{key:"O",className:"popup-overlay ".concat(""!==r?"".concat(r,"-overlay"):""),style:Object.assign({},p,t),onClick:o?this.closePopup:void 0},s&&this.renderContent()),l&&!s&&this.renderContent()]}}])&&l(o.prototype,r),a&&l(o,a),t}(n.a.PureComponent);c(b,"defaultProps",{trigger:null,onOpen:function(){},onClose:function(){},defaultOpen:!1,open:!1,disabled:!1,closeOnDocumentClick:!0,repositionOnResize:!0,closeOnEscape:!0,on:["click"],contentStyle:{},arrowStyle:{},overlayStyle:{},className:"",position:"bottom center",modal:!1,lockScroll:!1,arrow:!0,offsetX:0,offsetY:0,mouseEnterDelay:100,mouseLeaveDelay:100,keepTooltipInside:!1});var E=o("RSb/"),y=o.n(E),w=o("R1EF"),O=o.n(w),k=o("p54K"),x=o.n(k),N=o("4o71"),P=o.n(N);t.default=function(){return n.a.createElement(a.a,null,n.a.createElement("body",{className:"body"},n.a.createElement("div",{style:{marginBottom:"2rem"}}," "),n.a.createElement("div",{className:"introduction"},n.a.createElement("div",{className:"w-container"},n.a.createElement("h1",{className:"header"},"UI/UX Designer"),n.a.createElement("div",{className:"description"},"Experience using data-driven insights and user-centered approach to make designs ",n.a.createElement("br",null),"that fulfill needs"),n.a.createElement("div",{className:"icons"},n.a.createElement("div",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/pedro-molina-465441165/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"imgPic",src:x.a,alt:"Linkedin"}))),n.a.createElement("div",null,n.a.createElement("a",{href:"https://www.behance.net/pedromolina22",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{className:"imgPic",src:O.a,alt:"Behance"})))))),n.a.createElement("div",{style:{paddingBottom:20}}," "),n.a.createElement("div",{className:"layout-spacer-top"}),n.a.createElement("div",{id:"Projects",className:"projects"},n.a.createElement("div",{className:"project pw-holder"},n.a.createElement("div",{className:"projectimagebg"},n.a.createElement("img",{className:"projectimage w-inline-block",src:P.a,alt:"Farrier Business"})),n.a.createElement("div",{className:"projectinfo"},n.a.createElement("div",{className:"projecttitle"},"Farrier Business"),n.a.createElement("div",{className:"projectdates"},"Sep 2023 - Oct 2023"),n.a.createElement("div",{className:"projectdescription"},"Business website. Includes header, ",n.a.createElement("br",null),"nav bar, hero, services, about us, ",n.a.createElement("br",null),"social proof, contact form, CTA, ",n.a.createElement("br",null),"and footer.",n.a.createElement("br",null))))),n.a.createElement("div",{style:{marginBottom:"180px"}}," "),n.a.createElement("div",{id:"Projects",className:"projects"},n.a.createElement("div",{className:"project pw-holder"},n.a.createElement("div",{className:"projectimagebg"},n.a.createElement("img",{className:"projectimage w-inline-block",src:y.a,alt:"+provisions"})),n.a.createElement("div",{className:"projectinfo"},n.a.createElement("div",{className:"projecttitle"},"+provisions"),n.a.createElement("div",{className:"projectdates"},"Oct 2022 - Mar 2023"),n.a.createElement("div",{className:"projectdescription"},"Ecommerce surplus food. In charge ",n.a.createElement("br",null),"of redesigning app, conducting user research, and creating prototype ",n.a.createElement("br",null),"to demonstrate swipe feature."),n.a.createElement(s.Link,{to:"/provisionscase",className:"linkcasestudy"},"View Case Study")))),n.a.createElement("div",{style:{marginBottom:"100px"}}," "),n.a.createElement(i.a,{title:"Pedro Molina • UI/UX Designer"})),n.a.createElement("div",{style:{marginBottom:"2rem"}}," "))}},p54K:function(e,t,o){e.exports=o.p+"static/linkedin-f4acf7992feb9bf04f2987a07264ca28.svg"}}]);
//# sourceMappingURL=component---src-pages-index-js-6e5d254ea067ef6dfa72.js.map