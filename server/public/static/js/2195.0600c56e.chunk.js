/*! For license information please see 2195.0600c56e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkparcolintegrity2=self.webpackChunkparcolintegrity2||[]).push([[2195],{28596:function(t,e,n){function o(t){return getComputedStyle(t)}function r(t,e){for(var n in e){var o=e[n];"number"===typeof o&&(o+="px"),t.style[n]=o}return t}function i(t){var e=document.createElement("div");return e.className=t,e}n.r(e);var l="undefined"!==typeof Element&&(Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector);function s(t,e){if(!l)throw new Error("No element matching method supported");return l.call(t,e)}function a(t){t.remove?t.remove():t.parentNode&&t.parentNode.removeChild(t)}function c(t,e){return Array.prototype.filter.call(t.children,(function(t){return s(t,e)}))}var h="ps",u="ps__rtl",p={thumb:function(t){return"ps__thumb-"+t},rail:function(t){return"ps__rail-"+t},consuming:"ps__child--consume"},d={focus:"ps--focus",clicking:"ps--clicking",active:function(t){return"ps--active-"+t},scrolling:function(t){return"ps--scrolling-"+t}},f={x:null,y:null};function v(t,e){var n=t.element.classList,o=d.scrolling(e);n.contains(o)?clearTimeout(f[e]):n.add(o)}function b(t,e){f[e]=setTimeout((function(){return t.isAlive&&t.element.classList.remove(d.scrolling(e))}),t.settings.scrollingThreshold)}var g=function(t){this.element=t,this.handlers={}},m={isEmpty:{configurable:!0}};g.prototype.bind=function(t,e){"undefined"===typeof this.handlers[t]&&(this.handlers[t]=[]),this.handlers[t].push(e),this.element.addEventListener(t,e,!1)},g.prototype.unbind=function(t,e){var n=this;this.handlers[t]=this.handlers[t].filter((function(o){return!(!e||o===e)||(n.element.removeEventListener(t,o,!1),!1)}))},g.prototype.unbindAll=function(){for(var t in this.handlers)this.unbind(t)},m.isEmpty.get=function(){var t=this;return Object.keys(this.handlers).every((function(e){return 0===t.handlers[e].length}))},Object.defineProperties(g.prototype,m);var y=function(){this.eventElements=[]};function Y(t){if("function"===typeof window.CustomEvent)return new CustomEvent(t);var e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,void 0),e}function w(t,e,n,o,r){var i;if(void 0===o&&(o=!0),void 0===r&&(r=!1),"top"===e)i=["contentHeight","containerHeight","scrollTop","y","up","down"];else{if("left"!==e)throw new Error("A proper axis should be provided");i=["contentWidth","containerWidth","scrollLeft","x","left","right"]}!function(t,e,n,o,r){var i=n[0],l=n[1],s=n[2],a=n[3],c=n[4],h=n[5];void 0===o&&(o=!0);void 0===r&&(r=!1);var u=t.element;t.reach[a]=null,u[s]<1&&(t.reach[a]="start");u[s]>t[i]-t[l]-1&&(t.reach[a]="end");e&&(u.dispatchEvent(Y("ps-scroll-"+a)),e<0?u.dispatchEvent(Y("ps-scroll-"+c)):e>0&&u.dispatchEvent(Y("ps-scroll-"+h)),o&&function(t,e){v(t,e),b(t,e)}(t,a));t.reach[a]&&(e||r)&&u.dispatchEvent(Y("ps-"+a+"-reach-"+t.reach[a]))}(t,n,i,o,r)}function X(t){return parseInt(t,10)||0}y.prototype.eventElement=function(t){var e=this.eventElements.filter((function(e){return e.element===t}))[0];return e||(e=new g(t),this.eventElements.push(e)),e},y.prototype.bind=function(t,e,n){this.eventElement(t).bind(e,n)},y.prototype.unbind=function(t,e,n){var o=this.eventElement(t);o.unbind(e,n),o.isEmpty&&this.eventElements.splice(this.eventElements.indexOf(o),1)},y.prototype.unbindAll=function(){this.eventElements.forEach((function(t){return t.unbindAll()})),this.eventElements=[]},y.prototype.once=function(t,e,n){var o=this.eventElement(t);o.bind(e,(function t(r){o.unbind(e,t),n(r)}))};var R={isWebKit:"undefined"!==typeof document&&"WebkitAppearance"in document.documentElement.style,supportsTouch:"undefined"!==typeof window&&("ontouchstart"in window||"maxTouchPoints"in window.navigator&&window.navigator.maxTouchPoints>0||window.DocumentTouch&&document instanceof window.DocumentTouch),supportsIePointer:"undefined"!==typeof navigator&&navigator.msMaxTouchPoints,isChrome:"undefined"!==typeof navigator&&/Chrome/i.test(navigator&&navigator.userAgent)};function S(t){var e=t.element,n=Math.floor(e.scrollTop),o=e.getBoundingClientRect();t.containerWidth=Math.round(o.width),t.containerHeight=Math.round(o.height),t.contentWidth=e.scrollWidth,t.contentHeight=e.scrollHeight,e.contains(t.scrollbarXRail)||(c(e,p.rail("x")).forEach((function(t){return a(t)})),e.appendChild(t.scrollbarXRail)),e.contains(t.scrollbarYRail)||(c(e,p.rail("y")).forEach((function(t){return a(t)})),e.appendChild(t.scrollbarYRail)),!t.settings.suppressScrollX&&t.containerWidth+t.settings.scrollXMarginOffset<t.contentWidth?(t.scrollbarXActive=!0,t.railXWidth=t.containerWidth-t.railXMarginWidth,t.railXRatio=t.containerWidth/t.railXWidth,t.scrollbarXWidth=T(t,X(t.railXWidth*t.containerWidth/t.contentWidth)),t.scrollbarXLeft=X((t.negativeScrollAdjustment+e.scrollLeft)*(t.railXWidth-t.scrollbarXWidth)/(t.contentWidth-t.containerWidth))):t.scrollbarXActive=!1,!t.settings.suppressScrollY&&t.containerHeight+t.settings.scrollYMarginOffset<t.contentHeight?(t.scrollbarYActive=!0,t.railYHeight=t.containerHeight-t.railYMarginHeight,t.railYRatio=t.containerHeight/t.railYHeight,t.scrollbarYHeight=T(t,X(t.railYHeight*t.containerHeight/t.contentHeight)),t.scrollbarYTop=X(n*(t.railYHeight-t.scrollbarYHeight)/(t.contentHeight-t.containerHeight))):t.scrollbarYActive=!1,t.scrollbarXLeft>=t.railXWidth-t.scrollbarXWidth&&(t.scrollbarXLeft=t.railXWidth-t.scrollbarXWidth),t.scrollbarYTop>=t.railYHeight-t.scrollbarYHeight&&(t.scrollbarYTop=t.railYHeight-t.scrollbarYHeight),function(t,e){var n={width:e.railXWidth},o=Math.floor(t.scrollTop);e.isRtl?n.left=e.negativeScrollAdjustment+t.scrollLeft+e.containerWidth-e.contentWidth:n.left=t.scrollLeft;e.isScrollbarXUsingBottom?n.bottom=e.scrollbarXBottom-o:n.top=e.scrollbarXTop+o;r(e.scrollbarXRail,n);var i={top:o,height:e.railYHeight};e.isScrollbarYUsingRight?e.isRtl?i.right=e.contentWidth-(e.negativeScrollAdjustment+t.scrollLeft)-e.scrollbarYRight-e.scrollbarYOuterWidth-9:i.right=e.scrollbarYRight-t.scrollLeft:e.isRtl?i.left=e.negativeScrollAdjustment+t.scrollLeft+2*e.containerWidth-e.contentWidth-e.scrollbarYLeft-e.scrollbarYOuterWidth:i.left=e.scrollbarYLeft+t.scrollLeft;r(e.scrollbarYRail,i),r(e.scrollbarX,{left:e.scrollbarXLeft,width:e.scrollbarXWidth-e.railBorderXWidth}),r(e.scrollbarY,{top:e.scrollbarYTop,height:e.scrollbarYHeight-e.railBorderYWidth})}(e,t),t.scrollbarXActive?e.classList.add(d.active("x")):(e.classList.remove(d.active("x")),t.scrollbarXWidth=0,t.scrollbarXLeft=0,e.scrollLeft=!0===t.isRtl?t.contentWidth:0),t.scrollbarYActive?e.classList.add(d.active("y")):(e.classList.remove(d.active("y")),t.scrollbarYHeight=0,t.scrollbarYTop=0,e.scrollTop=0)}function T(t,e){return t.settings.minScrollbarLength&&(e=Math.max(e,t.settings.minScrollbarLength)),t.settings.maxScrollbarLength&&(e=Math.min(e,t.settings.maxScrollbarLength)),e}function W(t,e){var n=e[0],o=e[1],r=e[2],i=e[3],l=e[4],s=e[5],a=e[6],c=e[7],h=e[8],u=t.element,p=null,f=null,g=null;function m(e){e.touches&&e.touches[0]&&(e[r]=e.touches[0].pageY),u[a]=p+g*(e[r]-f),v(t,c),S(t),e.stopPropagation(),e.type.startsWith("touch")&&e.changedTouches.length>1&&e.preventDefault()}function y(){b(t,c),t[h].classList.remove(d.clicking),t.event.unbind(t.ownerDocument,"mousemove",m)}function Y(e,l){p=u[a],l&&e.touches&&(e[r]=e.touches[0].pageY),f=e[r],g=(t[o]-t[n])/(t[i]-t[s]),l?t.event.bind(t.ownerDocument,"touchmove",m):(t.event.bind(t.ownerDocument,"mousemove",m),t.event.once(t.ownerDocument,"mouseup",y),e.preventDefault()),t[h].classList.add(d.clicking),e.stopPropagation()}t.event.bind(t[l],"mousedown",(function(t){Y(t)})),t.event.bind(t[l],"touchstart",(function(t){Y(t,!0)}))}var E={"click-rail":function(t){t.element,t.event.bind(t.scrollbarY,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarYRail,"mousedown",(function(e){var n=e.pageY-window.pageYOffset-t.scrollbarYRail.getBoundingClientRect().top>t.scrollbarYTop?1:-1;t.element.scrollTop+=n*t.containerHeight,S(t),e.stopPropagation()})),t.event.bind(t.scrollbarX,"mousedown",(function(t){return t.stopPropagation()})),t.event.bind(t.scrollbarXRail,"mousedown",(function(e){var n=e.pageX-window.pageXOffset-t.scrollbarXRail.getBoundingClientRect().left>t.scrollbarXLeft?1:-1;t.element.scrollLeft+=n*t.containerWidth,S(t),e.stopPropagation()}))},"drag-thumb":function(t){W(t,["containerWidth","contentWidth","pageX","railXWidth","scrollbarX","scrollbarXWidth","scrollLeft","x","scrollbarXRail"]),W(t,["containerHeight","contentHeight","pageY","railYHeight","scrollbarY","scrollbarYHeight","scrollTop","y","scrollbarYRail"])},keyboard:function(t){var e=t.element;t.event.bind(t.ownerDocument,"keydown",(function(n){if(!(n.isDefaultPrevented&&n.isDefaultPrevented()||n.defaultPrevented)&&(s(e,":hover")||s(t.scrollbarX,":focus")||s(t.scrollbarY,":focus"))){var o,r=document.activeElement?document.activeElement:t.ownerDocument.activeElement;if(r){if("IFRAME"===r.tagName)r=r.contentDocument.activeElement;else for(;r.shadowRoot;)r=r.shadowRoot.activeElement;if(s(o=r,"input,[contenteditable]")||s(o,"select,[contenteditable]")||s(o,"textarea,[contenteditable]")||s(o,"button,[contenteditable]"))return}var i=0,l=0;switch(n.which){case 37:i=n.metaKey?-t.contentWidth:n.altKey?-t.containerWidth:-30;break;case 38:l=n.metaKey?t.contentHeight:n.altKey?t.containerHeight:30;break;case 39:i=n.metaKey?t.contentWidth:n.altKey?t.containerWidth:30;break;case 40:l=n.metaKey?-t.contentHeight:n.altKey?-t.containerHeight:-30;break;case 32:l=n.shiftKey?t.containerHeight:-t.containerHeight;break;case 33:l=t.containerHeight;break;case 34:l=-t.containerHeight;break;case 36:l=t.contentHeight;break;case 35:l=-t.contentHeight;break;default:return}t.settings.suppressScrollX&&0!==i||t.settings.suppressScrollY&&0!==l||(e.scrollTop-=l,e.scrollLeft+=i,S(t),function(n,o){var r=Math.floor(e.scrollTop);if(0===n){if(!t.scrollbarYActive)return!1;if(0===r&&o>0||r>=t.contentHeight-t.containerHeight&&o<0)return!t.settings.wheelPropagation}var i=e.scrollLeft;if(0===o){if(!t.scrollbarXActive)return!1;if(0===i&&n<0||i>=t.contentWidth-t.containerWidth&&n>0)return!t.settings.wheelPropagation}return!0}(i,l)&&n.preventDefault())}}))},wheel:function(t){var e=t.element;function n(n){var r=function(t){var e=t.deltaX,n=-1*t.deltaY;return"undefined"!==typeof e&&"undefined"!==typeof n||(e=-1*t.wheelDeltaX/6,n=t.wheelDeltaY/6),t.deltaMode&&1===t.deltaMode&&(e*=10,n*=10),e!==e&&n!==n&&(e=0,n=t.wheelDelta),t.shiftKey?[-n,-e]:[e,n]}(n),i=r[0],l=r[1];if(!function(t,n,r){if(!R.isWebKit&&e.querySelector("select:focus"))return!0;if(!e.contains(t))return!1;for(var i=t;i&&i!==e;){if(i.classList.contains(p.consuming))return!0;var l=o(i);if(r&&l.overflowY.match(/(scroll|auto)/)){var s=i.scrollHeight-i.clientHeight;if(s>0&&(i.scrollTop>0&&r<0||i.scrollTop<s&&r>0))return!0}if(n&&l.overflowX.match(/(scroll|auto)/)){var a=i.scrollWidth-i.clientWidth;if(a>0&&(i.scrollLeft>0&&n<0||i.scrollLeft<a&&n>0))return!0}i=i.parentNode}return!1}(n.target,i,l)){var s=!1;t.settings.useBothWheelAxes?t.scrollbarYActive&&!t.scrollbarXActive?(l?e.scrollTop-=l*t.settings.wheelSpeed:e.scrollTop+=i*t.settings.wheelSpeed,s=!0):t.scrollbarXActive&&!t.scrollbarYActive&&(i?e.scrollLeft+=i*t.settings.wheelSpeed:e.scrollLeft-=l*t.settings.wheelSpeed,s=!0):(e.scrollTop-=l*t.settings.wheelSpeed,e.scrollLeft+=i*t.settings.wheelSpeed),S(t),s=s||function(n,o){var r=Math.floor(e.scrollTop),i=0===e.scrollTop,l=r+e.offsetHeight===e.scrollHeight,s=0===e.scrollLeft,a=e.scrollLeft+e.offsetWidth===e.scrollWidth;return!(Math.abs(o)>Math.abs(n)?i||l:s||a)||!t.settings.wheelPropagation}(i,l),s&&!n.ctrlKey&&(n.stopPropagation(),n.preventDefault())}}"undefined"!==typeof window.onwheel?t.event.bind(e,"wheel",n):"undefined"!==typeof window.onmousewheel&&t.event.bind(e,"mousewheel",n)},touch:function(t){if(R.supportsTouch||R.supportsIePointer){var e=t.element,n={},r=0,i={},l=null;R.supportsTouch?(t.event.bind(e,"touchstart",h),t.event.bind(e,"touchmove",u),t.event.bind(e,"touchend",d)):R.supportsIePointer&&(window.PointerEvent?(t.event.bind(e,"pointerdown",h),t.event.bind(e,"pointermove",u),t.event.bind(e,"pointerup",d)):window.MSPointerEvent&&(t.event.bind(e,"MSPointerDown",h),t.event.bind(e,"MSPointerMove",u),t.event.bind(e,"MSPointerUp",d)))}function s(n,o){e.scrollTop-=o,e.scrollLeft-=n,S(t)}function a(t){return t.targetTouches?t.targetTouches[0]:t}function c(t){return(!t.pointerType||"pen"!==t.pointerType||0!==t.buttons)&&(!(!t.targetTouches||1!==t.targetTouches.length)||!(!t.pointerType||"mouse"===t.pointerType||t.pointerType===t.MSPOINTER_TYPE_MOUSE))}function h(t){if(c(t)){var e=a(t);n.pageX=e.pageX,n.pageY=e.pageY,r=(new Date).getTime(),null!==l&&clearInterval(l)}}function u(l){if(c(l)){var h=a(l),u={pageX:h.pageX,pageY:h.pageY},d=u.pageX-n.pageX,f=u.pageY-n.pageY;if(function(t,n,r){if(!e.contains(t))return!1;for(var i=t;i&&i!==e;){if(i.classList.contains(p.consuming))return!0;var l=o(i);if(r&&l.overflowY.match(/(scroll|auto)/)){var s=i.scrollHeight-i.clientHeight;if(s>0&&(i.scrollTop>0&&r<0||i.scrollTop<s&&r>0))return!0}if(n&&l.overflowX.match(/(scroll|auto)/)){var a=i.scrollWidth-i.clientWidth;if(a>0&&(i.scrollLeft>0&&n<0||i.scrollLeft<a&&n>0))return!0}i=i.parentNode}return!1}(l.target,d,f))return;s(d,f),n=u;var v=(new Date).getTime(),b=v-r;b>0&&(i.x=d/b,i.y=f/b,r=v),function(n,o){var r=Math.floor(e.scrollTop),i=e.scrollLeft,l=Math.abs(n),s=Math.abs(o);if(s>l){if(o<0&&r===t.contentHeight-t.containerHeight||o>0&&0===r)return 0===window.scrollY&&o>0&&R.isChrome}else if(l>s&&(n<0&&i===t.contentWidth-t.containerWidth||n>0&&0===i))return!0;return!0}(d,f)&&l.preventDefault()}}function d(){t.settings.swipeEasing&&(clearInterval(l),l=setInterval((function(){t.isInitialized?clearInterval(l):i.x||i.y?Math.abs(i.x)<.01&&Math.abs(i.y)<.01?clearInterval(l):t.element?(s(30*i.x,30*i.y),i.x*=.8,i.y*=.8):clearInterval(l):clearInterval(l)}),10))}}},L=function(t,e){var n=this;if(void 0===e&&(e={}),"string"===typeof t&&(t=document.querySelector(t)),!t||!t.nodeName)throw new Error("no element is specified to initialize PerfectScrollbar");for(var l in this.element=t,t.classList.add(h),this.settings={handlers:["click-rail","drag-thumb","keyboard","wheel","touch"],maxScrollbarLength:null,minScrollbarLength:null,scrollingThreshold:1e3,scrollXMarginOffset:0,scrollYMarginOffset:0,suppressScrollX:!1,suppressScrollY:!1,swipeEasing:!0,useBothWheelAxes:!1,wheelPropagation:!0,wheelSpeed:1},e)this.settings[l]=e[l];this.containerWidth=null,this.containerHeight=null,this.contentWidth=null,this.contentHeight=null;var s=function(){return t.classList.add(d.focus)},a=function(){return t.classList.remove(d.focus)};this.isRtl="rtl"===o(t).direction,!0===this.isRtl&&t.classList.add(u),this.isNegativeScroll=function(){var e,n=t.scrollLeft;return t.scrollLeft=-1,e=t.scrollLeft<0,t.scrollLeft=n,e}(),this.negativeScrollAdjustment=this.isNegativeScroll?t.scrollWidth-t.clientWidth:0,this.event=new y,this.ownerDocument=t.ownerDocument||document,this.scrollbarXRail=i(p.rail("x")),t.appendChild(this.scrollbarXRail),this.scrollbarX=i(p.thumb("x")),this.scrollbarXRail.appendChild(this.scrollbarX),this.scrollbarX.setAttribute("tabindex",0),this.event.bind(this.scrollbarX,"focus",s),this.event.bind(this.scrollbarX,"blur",a),this.scrollbarXActive=null,this.scrollbarXWidth=null,this.scrollbarXLeft=null;var c=o(this.scrollbarXRail);this.scrollbarXBottom=parseInt(c.bottom,10),isNaN(this.scrollbarXBottom)?(this.isScrollbarXUsingBottom=!1,this.scrollbarXTop=X(c.top)):this.isScrollbarXUsingBottom=!0,this.railBorderXWidth=X(c.borderLeftWidth)+X(c.borderRightWidth),r(this.scrollbarXRail,{display:"block"}),this.railXMarginWidth=X(c.marginLeft)+X(c.marginRight),r(this.scrollbarXRail,{display:""}),this.railXWidth=null,this.railXRatio=null,this.scrollbarYRail=i(p.rail("y")),t.appendChild(this.scrollbarYRail),this.scrollbarY=i(p.thumb("y")),this.scrollbarYRail.appendChild(this.scrollbarY),this.scrollbarY.setAttribute("tabindex",0),this.event.bind(this.scrollbarY,"focus",s),this.event.bind(this.scrollbarY,"blur",a),this.scrollbarYActive=null,this.scrollbarYHeight=null,this.scrollbarYTop=null;var f=o(this.scrollbarYRail);this.scrollbarYRight=parseInt(f.right,10),isNaN(this.scrollbarYRight)?(this.isScrollbarYUsingRight=!1,this.scrollbarYLeft=X(f.left)):this.isScrollbarYUsingRight=!0,this.scrollbarYOuterWidth=this.isRtl?function(t){var e=o(t);return X(e.width)+X(e.paddingLeft)+X(e.paddingRight)+X(e.borderLeftWidth)+X(e.borderRightWidth)}(this.scrollbarY):null,this.railBorderYWidth=X(f.borderTopWidth)+X(f.borderBottomWidth),r(this.scrollbarYRail,{display:"block"}),this.railYMarginHeight=X(f.marginTop)+X(f.marginBottom),r(this.scrollbarYRail,{display:""}),this.railYHeight=null,this.railYRatio=null,this.reach={x:t.scrollLeft<=0?"start":t.scrollLeft>=this.contentWidth-this.containerWidth?"end":null,y:t.scrollTop<=0?"start":t.scrollTop>=this.contentHeight-this.containerHeight?"end":null},this.isAlive=!0,this.settings.handlers.forEach((function(t){return E[t](n)})),this.lastScrollTop=Math.floor(t.scrollTop),this.lastScrollLeft=t.scrollLeft,this.event.bind(this.element,"scroll",(function(t){return n.onScroll(t)})),S(this)};L.prototype.update=function(){this.isAlive&&(this.negativeScrollAdjustment=this.isNegativeScroll?this.element.scrollWidth-this.element.clientWidth:0,r(this.scrollbarXRail,{display:"block"}),r(this.scrollbarYRail,{display:"block"}),this.railXMarginWidth=X(o(this.scrollbarXRail).marginLeft)+X(o(this.scrollbarXRail).marginRight),this.railYMarginHeight=X(o(this.scrollbarYRail).marginTop)+X(o(this.scrollbarYRail).marginBottom),r(this.scrollbarXRail,{display:"none"}),r(this.scrollbarYRail,{display:"none"}),S(this),w(this,"top",0,!1,!0),w(this,"left",0,!1,!0),r(this.scrollbarXRail,{display:""}),r(this.scrollbarYRail,{display:""}))},L.prototype.onScroll=function(t){this.isAlive&&(S(this),w(this,"top",this.element.scrollTop-this.lastScrollTop),w(this,"left",this.element.scrollLeft-this.lastScrollLeft),this.lastScrollTop=Math.floor(this.element.scrollTop),this.lastScrollLeft=this.element.scrollLeft)},L.prototype.destroy=function(){this.isAlive&&(this.event.unbindAll(),a(this.scrollbarX),a(this.scrollbarY),a(this.scrollbarXRail),a(this.scrollbarYRail),this.removePsClasses(),this.element=null,this.scrollbarX=null,this.scrollbarY=null,this.scrollbarXRail=null,this.scrollbarYRail=null,this.isAlive=!1)},L.prototype.removePsClasses=function(){this.element.className=this.element.className.split(" ").filter((function(t){return!t.match(/^ps([-_].+|)$/)})).join(" ")},e.default=L},42195:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(74633),i=(o=r)&&o.__esModule?o:{default:o};e.default=i.default,t.exports=e.default},74633:function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(72791),l=c(i),s=n(52007),a=c(n(28596));function c(t){return t&&t.__esModule?t:{default:t}}var h={"ps-scroll-y":"onScrollY","ps-scroll-x":"onScrollX","ps-scroll-up":"onScrollUp","ps-scroll-down":"onScrollDown","ps-scroll-left":"onScrollLeft","ps-scroll-right":"onScrollRight","ps-y-reach-start":"onYReachStart","ps-y-reach-end":"onYReachEnd","ps-x-reach-start":"onXReachStart","ps-x-reach-end":"onXReachEnd"};Object.freeze(h);var u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleRef=n.handleRef.bind(n),n._handlerByEvent={},n}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"componentDidMount",value:function(){this.props.option&&console.warn('react-perfect-scrollbar: the "option" prop has been deprecated in favor of "options"'),this._ps=new a.default(this._container,this.props.options||this.props.option),this._updateEventHook(),this._updateClassName()}},{key:"componentDidUpdate",value:function(t){this._updateEventHook(t),this.updateScroll(),t.className!==this.props.className&&this._updateClassName()}},{key:"componentWillUnmount",value:function(){var t=this;Object.keys(this._handlerByEvent).forEach((function(e){var n=t._handlerByEvent[e];n&&t._container.removeEventListener(e,n,!1)})),this._handlerByEvent={},this._ps.destroy(),this._ps=null}},{key:"_updateEventHook",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(h).forEach((function(n){var o=t.props[h[n]],r=e[h[n]];if(o!==r){if(r){var i=t._handlerByEvent[n];t._container.removeEventListener(n,i,!1),t._handlerByEvent[n]=null}if(o){var l=function(){return o(t._container)};t._container.addEventListener(n,l,!1),t._handlerByEvent[n]=l}}}))}},{key:"_updateClassName",value:function(){var t=this.props.className,e=this._container.className.split(" ").filter((function(t){return t.match(/^ps([-_].+|)$/)})).join(" ");this._container&&(this._container.className="scrollbar-container"+(t?" "+t:"")+(e?" "+e:""))}},{key:"updateScroll",value:function(){this.props.onSync(this._ps)}},{key:"handleRef",value:function(t){this._container=t,this.props.containerRef(t)}},{key:"render",value:function(){var t=this.props,e=(t.className,t.style),n=(t.option,t.options,t.containerRef,t.onScrollY,t.onScrollX,t.onScrollUp,t.onScrollDown,t.onScrollLeft,t.onScrollRight,t.onYReachStart,t.onYReachEnd,t.onXReachStart,t.onXReachEnd,t.component),r=(t.onSync,t.children),i=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}(t,["className","style","option","options","containerRef","onScrollY","onScrollX","onScrollUp","onScrollDown","onScrollLeft","onScrollRight","onYReachStart","onYReachEnd","onXReachStart","onXReachEnd","component","onSync","children"]),s=n;return l.default.createElement(s,o({style:e,ref:this.handleRef},i),r)}}]),e}(i.Component);e.default=u,u.defaultProps={className:"",style:void 0,option:void 0,options:void 0,containerRef:function(){},onScrollY:void 0,onScrollX:void 0,onScrollUp:void 0,onScrollDown:void 0,onScrollLeft:void 0,onScrollRight:void 0,onYReachStart:void 0,onYReachEnd:void 0,onXReachStart:void 0,onXReachEnd:void 0,onSync:function(t){return t.update()},component:"div"},u.propTypes={children:s.PropTypes.node.isRequired,className:s.PropTypes.string,style:s.PropTypes.object,option:s.PropTypes.object,options:s.PropTypes.object,containerRef:s.PropTypes.func,onScrollY:s.PropTypes.func,onScrollX:s.PropTypes.func,onScrollUp:s.PropTypes.func,onScrollDown:s.PropTypes.func,onScrollLeft:s.PropTypes.func,onScrollRight:s.PropTypes.func,onYReachStart:s.PropTypes.func,onYReachEnd:s.PropTypes.func,onXReachStart:s.PropTypes.func,onXReachEnd:s.PropTypes.func,onSync:s.PropTypes.func,component:s.PropTypes.string},t.exports=e.default}}]);
//# sourceMappingURL=2195.0600c56e.chunk.js.map