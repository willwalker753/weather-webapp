!function(t){function e(e){for(var n,r,o=e[0],u=e[1],l=0,a=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&a.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);a.length;)a.shift()()}function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(t){var e=[];o[t]?e.push(o[t]):0!==o[t]&&{2:1,3:1}[t]&&e.push(o[t]=new Promise((function(e,r){for(var i=({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"a9877",3:"8aeee"}[t]+".css",u=n.p+i,l=document.getElementsByTagName("link"),a=0;a<l.length;a++){var c=(f=l[a]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(c===i||c===u))return e()}var s=document.getElementsByTagName("style");for(a=0;a<s.length;a++){var f;if((c=(f=s[a]).getAttribute("data-href"))===i||c===u)return e()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css";_.onerror=_.onload=function(n){if(_.onerror=_.onload=null,"load"===n.type)e();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||u,a=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=i,a.request=l,delete o[t],_.parentNode.removeChild(_),r(a)}},_.href=u,document.head.appendChild(_)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=u);var l,a=document.createElement("script");a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.src=function(t){return n.p+""+({2:"route-about",3:"route-home"}[t]||t)+".chunk."+{2:"f1574",3:"0ab1f"}[t]+".esm.js"}(t);var c=new Error;l=function(e){a.onerror=a.onload=null,clearTimeout(s);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}i[t]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:a})}),12e4);a.onerror=a.onload=l,document.head.appendChild(a)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/weather-webapp/",n.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var a=0;a<u.length;a++)e(u[a]);var c=l;n(n.s="mdyV")}({QfWi:function(t,e,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},r.apply(this,arguments)}function o(t){function e(){var t=c(b.location.hash.substr(1)),e=t.pathname,n=t.search,r=t.hash,o=k.state||{};return[o.idx,y({pathname:void 0===e?"/":e,search:void 0===n?"":n,hash:void 0===r?"":r,state:o.usr||null,key:o.key||"default"})]}function n(){if(C)S.call(C),C=null;else{var t=_.Pop,n=e(),r=n[0];if(S.length){if(null!=r){var o=w-r;o&&(C={action:t,location:n[1],retry:function(){d(-1*o)}},d(o))}}else h(t)}}function o(t){return function(){var t=document.querySelector("base"),e="";if(t&&t.getAttribute("href")){var n=b.location.href,r=n.indexOf("#");e=-1===r?n:n.slice(0,r)}return e}()+"#"+("string"==typeof t?t:a(t))}function s(t,e){return void 0===e&&(e=null),y(r({pathname:P.pathname,hash:"",search:""},"string"==typeof t?c(t):t,{state:e,key:l()}))}function f(t,e){return[{usr:t.state,key:t.key,idx:e},o(t)]}function p(t,e,n){return!S.length||(S.call({action:t,location:e,retry:n}),!1)}function h(t){O=t;var n=e();w=n[0],j.call({action:O,location:P=n[1]})}function d(t){k.go(t)}void 0===t&&(t={});var v=t.window,b=void 0===v?document.defaultView:v,k=b.history,C=null;b.addEventListener(g,n),b.addEventListener("hashchange",(function(){a(e()[1])!==a(P)&&n()}));var O=_.Pop,x=e(),w=x[0],P=x[1],j=u(),S=u();null==w&&k.replaceState(r({},k.state,{idx:w=0}),"");var A={get action(){return O},get location(){return P},createHref:o,push:function t(e,n){var r=_.Push,o=s(e,n);if(p(r,o,(function(){t(e,n)}))){var i=f(o,w+1),u=i[0],l=i[1];try{k.pushState(u,"",l)}catch(t){b.location.assign(l)}h(r)}},replace:function t(e,n){var r=_.Replace,o=s(e,n);if(p(r,o,(function(){t(e,n)}))){var i=f(o,w);k.replaceState(i[0],"",i[1]),h(r)}},go:d,back:function(){d(-1)},forward:function(){d(1)},listen:function(t){return j.push(t)},block:function(t){var e=S.push(t);return 1===S.length&&b.addEventListener(m,i),function(){e(),S.length||b.removeEventListener(m,i)}}};return A}function i(t){t.preventDefault(),t.returnValue=""}function u(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter((function(t){return t!==e}))}},call:function(e){t.forEach((function(t){return t&&t(e)}))}}}function l(){return Math.random().toString(36).substr(2,8)}function a(t){var e=t.pathname,n=void 0===e?"/":e,r=t.search,o=void 0===r?"":r,i=t.hash,u=void 0===i?"":i;return o&&"?"!==o&&(n+="?"===o.charAt(0)?o:"?"+o),u&&"#"!==u&&(n+="#"===u.charAt(0)?u:"#"+u),n}function c(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function s(t,e){if("string"==typeof t.type)return null;const n=t.__;if(!n)return;let r=n.__k;if(r){Array.isArray(r)||(r=[r]);let e=r.indexOf(t);-1===e&&(e=r.length);for(let t=e;t--;){const e=r[t],n=e&&e.__e||s(e,!0);if(n)return n}}return e?void 0:s(n)}function f(t){function e(){p.Component.call(this),n||(this.componentWillMount=()=>{t((t=>{n=t&&t.default||t,this.setState({})}))},this.shouldComponentUpdate=()=>null!=n),this.render=t=>{if(n)return Object(p.h)(n,t);const e=s(this.__v),r=e&&e.nextSibling||(this.__P||this._parentDom).firstChild;return r&&Object(p.h)(r.localName,{dangerouslySetInnerHTML:x})}}let n;return e.preload=t,(e.prototype=new p.Component).constructor=e,e}n.r(e);var _,p=n("hosL"),h=n("Y3FI"),d=n("ox/y"),v=n.n(d);!function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"}(_||(_={}));var y=function(t){return t},m="beforeunload",g="popstate";var b="/preact-boilerplate",k="header__OVZyn",C="active__r+Z6z";var O=()=>Object(p.h)("header",{class:k},Object(p.h)("h1",null,"Preact Boilerplate"),Object(p.h)("nav",null,Object(p.h)(d.Link,{activeClassName:C,href:`${b}/`},"Home"),Object(p.h)(d.Link,{activeClassName:C,href:`${b}/about`},"About")));const x={};var w=f((function(t){n.e(3).then(function(){var e=n("+1Jk");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)})),P=f((function(t){n.e(2).then(function(){var e=n("ZbNB");"function"==typeof t&&t(e)}.bind(null,n)).catch(n.oe)}));e.default=()=>Object(p.h)("div",{id:"app"},Object(p.h)(v.a,null,(()=>{var t,e;if(null!==(t=window)&&void 0!==t&&null!==(e=t.location)&&void 0!==e&&e.hash.startsWith(`#${b}`)){const t=window.location.hash.replace("#","");window.history.pushState(null,null,t)}return null})),Object(p.h)(O,null),Object(p.h)(h.Router,{history:o()},Object(p.h)(P,{path:`${b}/about`}),Object(p.h)(w,{default:!0})))},Y3FI:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t,e,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=t.match(o),u={};if(i&&i[1])for(var a=i[1].split("&"),c=0;c<a.length;c++){var s=a[c].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}t=l(t.replace(o,"")),e=l(e||"");for(var f=Math.max(t.length,e.length),_=0;_<f;_++)if(e[_]&&":"===e[_].charAt(0)){var p=e[_].replace(/(^:|[+*?]+$)/g,""),h=(e[_].match(/[+*?]+$/)||y)[0]||"",d=~h.indexOf("+"),v=~h.indexOf("*"),m=t[_]||"";if(!m&&!v&&(h.indexOf("?")<0||d)){r=!1;break}if(u[p]=decodeURIComponent(m),d||v){u[p]=t.slice(_).map(decodeURIComponent).join("/");break}}else if(e[_]!==t[_]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(t,e){return t.rank<e.rank?1:t.rank>e.rank?-1:t.index-e.index}function u(t,e){return t.index=e,t.rank=function(t){return t.props.default?0:(e=t.props.path,l(e).map(a).join(""));var e}(t),t.props}function l(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function a(t){return":"==t.charAt(0)?1+"*+?".indexOf(t.charAt(t.length-1))||4:5}function c(){var t;return""+((t=m&&m.location?m.location:m&&m.getCurrentLocation?m.getCurrentLocation():"undefined"!=typeof location?location:k).pathname||"")+(t.search||"")}function s(t,e){return void 0===e&&(e=!1),"string"!=typeof t&&t.url&&(e=t.replace,t=t.url),function(t){for(var e=g.length;e--;)if(g[e].canRoute(t))return!0;return!1}(t)&&function(t,e){void 0===e&&(e="push"),m&&m[e]?m[e](t):"undefined"!=typeof history&&history[e+"State"]&&history[e+"State"](null,null,t)}(t,e?"replace":"push"),f(t)}function f(t){for(var e=!1,n=0;n<g.length;n++)!0===g[n].routeTo(t)&&(e=!0);for(var r=b.length;r--;)b[r](t);return e}function _(t){if(t&&t.getAttribute){var e=t.getAttribute("href"),n=t.getAttribute("target");if(e&&e.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(e)}}function p(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button))return _(t.currentTarget||t.target||this),h(t)}function h(t){return t&&(t.stopImmediatePropagation&&t.stopImmediatePropagation(),t.stopPropagation&&t.stopPropagation(),t.preventDefault()),!1}function d(t){if(!(t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||0!==t.button)){var e=t.target;do{if("A"===String(e.nodeName).toUpperCase()&&e.getAttribute("href")){if(e.hasAttribute("native"))return;if(_(e))return h(t)}}while(e=e.parentNode)}}n.r(e),n.d(e,"subscribers",(function(){return b})),n.d(e,"getCurrentUrl",(function(){return c})),n.d(e,"route",(function(){return s})),n.d(e,"Router",(function(){return O})),n.d(e,"Route",(function(){return w})),n.d(e,"Link",(function(){return x})),n.d(e,"exec",(function(){return o}));var v=n("hosL"),y={},m=null,g=[],b=[],k={},C=!1,O=function(t){function e(e){t.call(this,e),e.history&&(m=e.history),this.state={url:e.url||c()},C||("function"==typeof addEventListener&&(m||addEventListener("popstate",(function(){f(c())})),addEventListener("click",d)),C=!0)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.shouldComponentUpdate=function(t){return!0!==t.static||(t.url!==this.props.url||t.onChange!==this.props.onChange)},e.prototype.canRoute=function(t){var e=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(e,t,!1).length>0},e.prototype.routeTo=function(t){this.setState({url:t});var e=this.canRoute(t);return this.updating||this.forceUpdate(),e},e.prototype.componentWillMount=function(){g.push(this),this.updating=!0},e.prototype.componentDidMount=function(){var t=this;m&&(this.unlisten=m.listen((function(e){t.routeTo(""+(e.pathname||"")+(e.search||""))}))),this.updating=!1},e.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),g.splice(g.indexOf(this),1)},e.prototype.componentWillUpdate=function(){this.updating=!0},e.prototype.componentDidUpdate=function(){this.updating=!1},e.prototype.getMatchingChildren=function(t,e,n){return t.filter(u).sort(i).map((function(t){var i=o(e,t.props.path,t.props);if(i){if(!1!==n){var u={url:e,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(t,u)}return t}})).filter(Boolean)},e.prototype.render=function(t,e){var n=t.children,r=t.onChange,o=e.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},e}(v.Component),x=function(t){return Object(v.createElement)("a",r({onClick:p},t))},w=function(t){return Object(v.createElement)(t.component,t)};O.subscribers=b,O.getCurrentUrl=c,O.route=s,O.Router=O,O.Route=w,O.Link=x,O.exec=o,e.default=O},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function i(t,e,n){var r,o,i,l={};for(i in e)"key"==i?r=e[i]:"ref"==i?o=e[i]:l[i]=e[i];if(arguments.length>2&&(l.children=arguments.length>3?U.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(i in t.defaultProps)void 0===l[i]&&(l[i]=t.defaultProps[i]);return u(t,l,r,o,null)}function u(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++M:o};return null==o&&null!=T.vnode&&T.vnode(i),i}function l(){return{current:null}}function a(t){return t.children}function c(t,e){this.props=t,this.context=e}function s(t,e){if(null==e)return t.__?s(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?s(t):null}function f(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return f(t)}}function _(t){(!t.__d&&(t.__d=!0)&&D.push(t)&&!p.__r++||N!==T.debounceRendering)&&((N=T.debounceRendering)||setTimeout)(p)}function p(){for(var t;p.__r=D.length;)t=D.sort((function(t,e){return t.__v.__b-e.__v.__b})),D=[],t.some((function(t){var e,n,o,i,u,l;t.__d&&(u=(i=(e=t).__v).__e,(l=e.__P)&&(n=[],(o=r({},i)).__v=i.__v+1,C(l,i,o,e.__n,void 0!==l.ownerSVGElement,null!=i.__h?[u]:null,n,null==u?s(i):u,i.__h),O(n,i),i.__e!=u&&f(i)))}))}function h(t,e,n,r,o,i,l,c,f,_){var p,h,v,m,g,b,k,O=r&&r.__k||$,x=O.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(m=n.__k[p]=null==(m=e[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(a,{children:m},null,null,null):m.__b>0?u(m.type,m.props,m.key,m.ref?m.ref:null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=O[p])||v&&m.key==v.key&&m.type===v.type)O[p]=void 0;else for(h=0;h<x;h++){if((v=O[h])&&m.key==v.key&&m.type===v.type){O[h]=void 0;break}v=null}C(t,m,v=v||I,o,i,l,c,f,_),g=m.__e,(h=m.ref)&&v.ref!=h&&(k||(k=[]),v.ref&&k.push(v.ref,null,m),k.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),"function"==typeof m.type&&m.__k===v.__k?m.__d=f=d(m,f,t):f=y(t,m,v,O,g,f),"function"==typeof n.type&&(n.__d=f)):f&&v.__e==f&&f.parentNode!=t&&(f=s(v))}for(n.__e=b,p=x;p--;)null!=O[p]&&P(O[p],O[p]);if(k)for(p=0;p<k.length;p++)w(k[p],k[++p],k[++p])}function d(t,e,n){for(var r,o=t.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=t,e="function"==typeof r.type?d(r,e,n):y(n,r,r,o,r.__e,e));return e}function v(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){v(t,e)})):e.push(t)),e}function y(t,e,n,r,o,i){var u,l,a;if(void 0!==e.__d)u=e.__d,e.__d=void 0;else if(null==n||o!=i||null==o.parentNode)t:if(null==i||i.parentNode!==t)t.appendChild(o),u=null;else{for(l=i,a=0;(l=l.nextSibling)&&a<r.length;a+=1)if(l==o)break t;t.insertBefore(o,i),u=i}return void 0!==u?u:o.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||H.test(e)?n:n+"px"}function g(t,e,n,r,o){var i;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||m(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])i=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r||t.addEventListener(e,i?k:b,i):t.removeEventListener(e,i?k:b,i);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null==n||!1===n&&-1==e.indexOf("-")?t.removeAttribute(e):t.setAttribute(e,n))}}function b(t){this.l[t.type+!1](T.event?T.event(t):t)}function k(t){this.l[t.type+!0](T.event?T.event(t):t)}function C(t,e,n,o,i,u,l,s,f){var _,p,d,v,y,m,g,b,k,C,O,w,P,S,A,E=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(f=n.__h,s=e.__e=n.__e,e.__h=null,u=[s]),(_=T.__b)&&_(e);try{t:if("function"==typeof E){if(b=e.props,k=(_=E.contextType)&&o[_.__c],C=_?k?k.props.value:_.__:o,n.__c?g=(p=e.__c=n.__c).__=p.__E:("prototype"in E&&E.prototype.render?e.__c=p=new E(b,C):(e.__c=p=new c(b,C),p.constructor=E,p.render=j),k&&k.sub(p),p.props=b,p.state||(p.state={}),p.context=C,p.__n=o,d=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,E.getDerivedStateFromProps(b,p.__s))),v=p.props,y=p.state,d)null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==E.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,C)||e.__v===n.__v){for(p.props=b,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),O=0;O<p._sb.length;O++)p.__h.push(p._sb[O]);p._sb=[],p.__h.length&&l.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,C),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,y,m)}))}if(p.context=C,p.props=b,p.__v=e,p.__P=t,w=T.__r,P=0,"prototype"in E&&E.prototype.render){for(p.state=p.__s,p.__d=!1,w&&w(e),_=p.render(p.props,p.state,p.context),S=0;S<p._sb.length;S++)p.__h.push(p._sb[S]);p._sb=[]}else do{p.__d=!1,w&&w(e),_=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++P<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),d||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),A=null!=_&&_.type===a&&null==_.key?_.props.children:_,h(t,Array.isArray(A)?A:[A],e,n,o,i,u,l,s,f),p.base=e.__e,e.__h=null,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=x(n.__e,e,n,o,i,u,l,f);(_=T.diffed)&&_(e)}catch(t){e.__v=null,(f||null!=u)&&(e.__e=s,e.__h=!!f,u[u.indexOf(s)]=null),T.__e(t,e,n)}}function O(t,e){T.__c&&T.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){T.__e(t,e.__v)}}))}function x(t,e,n,r,i,u,l,a){var c,f,_,p=n.props,d=e.props,v=e.type,y=0;if("svg"===v&&(i=!0),null!=u)for(;y<u.length;y++)if((c=u[y])&&"setAttribute"in c==!!v&&(v?c.localName===v:3===c.nodeType)){t=c,u[y]=null;break}if(null==t){if(null===v)return document.createTextNode(d);t=i?document.createElementNS("http://www.w3.org/2000/svg",v):document.createElement(v,d.is&&d),u=null,a=!1}if(null===v)p===d||a&&t.data===d||(t.data=d);else{if(u=u&&U.call(t.childNodes),f=(p=n.props||I).dangerouslySetInnerHTML,_=d.dangerouslySetInnerHTML,!a){if(null!=u)for(p={},y=0;y<t.attributes.length;y++)p[t.attributes[y].name]=t.attributes[y].value;(_||f)&&(_&&(f&&_.__html==f.__html||_.__html===t.innerHTML)||(t.innerHTML=_&&_.__html||""))}if(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||g(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||g(t,i,e[i],n[i],r)}(t,d,p,i,a),_)e.__k=[];else if(y=e.props.children,h(t,Array.isArray(y)?y:[y],e,n,r,i&&"foreignObject"!==v,u,l,u?u[0]:n.__k&&s(n,0),a),null!=u)for(y=u.length;y--;)null!=u[y]&&o(u[y]);a||("value"in d&&void 0!==(y=d.value)&&(y!==t.value||"progress"===v&&!y||"option"===v&&y!==p.value)&&g(t,"value",y,p.value,!1),"checked"in d&&void 0!==(y=d.checked)&&y!==t.checked&&g(t,"checked",y,p.checked,!1))}return t}function w(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){T.__e(t,n)}}function P(t,e,n){var r,i;if(T.unmount&&T.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||w(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){T.__e(t,e)}r.base=r.__P=null,t.__c=void 0}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&P(r[i],e,n||"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__=t.__e=t.__d=void 0}function j(t,e,n){return this.constructor(t,n)}function S(t,e,n){var r,o,u;T.__&&T.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,u=[],C(e,t=(!r&&n||e).__k=i(a,null,[t]),o||I,I,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?U.call(e.childNodes):null,u,!r&&n?n:o?o.__e:e.firstChild,r),O(u,t)}function A(t,e){S(t,e,A)}function E(t,e,n){var o,i,l,a=r({},t.props);for(l in e)"key"==l?o=e[l]:"ref"==l?i=e[l]:a[l]=e[l];return arguments.length>2&&(a.children=arguments.length>3?U.call(arguments,2):n),u(t.type,a,o||t.key,i||t.ref,null)}function L(t,e){var n={__c:e="__cC"+W++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(_)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"Component",(function(){return c})),n.d(e,"Fragment",(function(){return a})),n.d(e,"cloneElement",(function(){return E})),n.d(e,"createContext",(function(){return L})),n.d(e,"createElement",(function(){return i})),n.d(e,"createRef",(function(){return l})),n.d(e,"h",(function(){return i})),n.d(e,"hydrate",(function(){return A})),n.d(e,"isValidElement",(function(){return R})),n.d(e,"options",(function(){return T})),n.d(e,"render",(function(){return S})),n.d(e,"toChildArray",(function(){return v}));var U,T,M,R,D,N,W,I={},$=[],H=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;U=$.slice,T={__e:function(t,e,n,r){for(var o,i,u;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(t)),u=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),u=o.__d),u)return o.__E=o}catch(e){t=e}throw t}},M=0,R=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this._sb.push(e),_(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},c.prototype.render=a,D=[],p.__r=0,W=0},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,l=t=>t&&t.default?t.default:t,a=t=>"/"===t[t.length-1]?t:t+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(a(n.p)+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let t=document.getElementById("preact_root")||document.body.firstElementChild,e=()=>{let e=l(n("QfWi")),r={};const u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(r=JSON.parse(decodeURI(u.innerHTML)).preRenderData||r);const c={preRenderData:r};r.url&&a(r.url);i(o(e,{CLI_DATA:c}),document.body,t)};0,e()}},"ox/y":function(t,e,n){"use strict";function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}Object.defineProperty(e,"__esModule",{value:!0}),e.Link=e.Match=void 0;var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n("hosL"),u=n("Y3FI"),l=e.Match=function(t){function e(){for(var e,n,o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return e=n=r(this,t.call.apply(t,[this].concat(i))),n.update=function(t){n.nextUrl=t,n.setState({})},r(n,e)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){u.subscribers.push(this.update)},e.prototype.componentWillUnmount=function(){u.subscribers.splice(u.subscribers.indexOf(this.update)>>>0,1)},e.prototype.render=function(t){var e=this.nextUrl||(0,u.getCurrentUrl)(),n=e.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:e,path:n,matches:!1!==(0,u.exec)(n,t.path,{})})},e}(i.Component),a=function(t){var e=t.activeClassName,n=t.path,r=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(t,["activeClassName","path"]);return(0,i.h)(l,{path:n||r.href},(function(t){return(0,i.h)(u.Link,o({},r,{class:[r.class||r.className,t.matches&&e].filter(Boolean).join(" ")}))}))};e.Link=a,e.default=l,l.Link=a}});
//# sourceMappingURL=bundle.9ebe7.esm.js.map