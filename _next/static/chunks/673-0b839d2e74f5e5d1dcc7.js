(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{14:function(e,t,n){"use strict";n.d(t,{L:function(){return ce},Kq:function(){return W},AK:function(){return be},eh:function(){return J},Hf:function(){return he},xf:function(){return ae},LK:function(){return ue},zK:function(){return $},nR:function(){return se}});var r=n(178),o=n.n(r),a=n(7294),i=n.t(a,2),u=n(3935);"undefined"!==typeof window&&a.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let c=new Map,s=new Set;function l(){if("undefined"===typeof window)return;let e=t=>{let n=c.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),c.delete(t.target)),0===c.size)){for(let e of s)e();s.clear()}};document.body.addEventListener("transitionrun",(t=>{let n=c.get(t.target);n||(n=new Set,c.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?l():document.addEventListener("DOMContentLoaded",l));"undefined"!==typeof window&&window.visualViewport;new Map;function f(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function d(){return f(/^Mac/)}function p(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const v=a.createContext(null);v.displayName="PressResponderContext";let h=null,b=new Set,y=!1,m=!1;function Z(e,t){for(let n of b)n(e,t)}function g(e){m=!0,function(e){return!(e.metaKey||!d()&&e.altKey||e.ctrlKey)}(e)&&(h="keyboard",Z("keyboard",e))}function j(e){h="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(m=!0,Z("pointer",e))}function w(e){p(e)&&(m=!0,h="virtual")}function A(e){e.target!==window&&e.target!==document&&(m||(h="virtual",Z("virtual",e)),m=!1)}function L(){m=!1}function Q(){if("undefined"===typeof window||y)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){m=!0,e.apply(this,arguments)},document.addEventListener("keydown",g,!0),document.addEventListener("keyup",g,!0),document.addEventListener("click",w,!0),window.addEventListener("focus",A,!0),window.addEventListener("blur",L,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",j,!0),document.addEventListener("pointermove",j,!0),document.addEventListener("pointerup",j,!0)):(document.addEventListener("mousedown",j,!0),document.addEventListener("mousemove",j,!0),document.addEventListener("mouseup",j,!0)),y=!0}"undefined"!==typeof document&&("loading"!==document.readyState?Q():document.addEventListener("DOMContentLoaded",Q));new Set;const x=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];x.join(":not([hidden]),");x.push('[tabindex]:not([tabindex="-1"]):not([disabled])');x.join(':not([hidden]):not([tabindex="-1"]),');function I(){return(I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function O(e){return null!=e}function S(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++){var u=i[a];u in e&&(t[u]=e[u])}return t}function z(e){for(var t={},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=Object.keys(e);a<i.length;a++){var u=i[a];r.includes(u)||(t[u]=e[u])}return t}function C(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0!==t.length)return function(e){for(var n,r=e,o=E(t);!(n=o()).done;){r=(0,n.value)(r)}return r}}var M="undefined"!==typeof window,V=Symbol("NONE"),k=M?a.useLayoutEffect:a.useEffect;function Y(e,t,n){return Array.isArray(n)?a.createElement.apply(a,[e,t].concat(n)):n||"children"in t?a.createElement(e,t,n):a.createElement(e,t)}function _(e){for(var t=I({},e),n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];for(var a=0,i=r;a<i.length;a++)for(var u=i[a],c=0,s=Object.keys(u);c<s.length;c++){var l=s[c];t[l]=D(l,t[l],u[l])}return t}function H(e,t){e&&("function"===typeof e?e(t):Object.isFrozen(e)||(e.current=t))}function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n,r=E(t);!(n=r()).done;){H(n.value,e)}}}function D(e,t,n){return t===V||n===V?null:null==t?n:null==n?t:"className"===e?o()(t,n):"style"===e?I({},t,n):"ref"===e?R(t,n):typeof t!==typeof n?n:e.startsWith("on")&&"function"===typeof t?function(){var e;return"function"===typeof t&&(e=t.apply(void 0,arguments)),"function"===typeof n&&(e=n.apply(void 0,arguments)),e}:n}function N(e,t,n,r){var o=t.children,a=T(t,["children"]),i=K(o,null!=n&&n);return Y(e,I({ref:r},a),i)}function U(e,t){var n=e.as,r=e.hasGap;return N(null!=n?n:"div",T(e,["as","hasGap"]),r,t)}var F=(0,a.forwardRef)(U),B=function(e){return(0,a.forwardRef)((function(t,n){var r=t.hasGap,o=T(t,["hasGap"]);return N(e,o,r,n)}))},W=Object.assign(F,{div:B("div"),a:B("a"),button:B("button"),h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6"),label:B("label"),form:B("form"),section:B("section"),head:B("head"),main:B("main"),nav:B("nav")});function $(e,t,n){if(null==e)return!1;var r=e[t];return null!=r&&(!0===r?n===t:!1!==r&&(Array.isArray(r)?r.includes(n):"string"===typeof r?r===n:void 0!==r[n]&&!1!==r[n]))}function K(e,t){var n=t?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?a.createElement.apply(i,["div",{className:n}].concat(e)):(0,a.createElement)("div",{className:n},e):null}function q(e,t,n,r){var o=ne(e),i=te(n,o.props);if("render"===o.type)return o.render(i,t);var u=t;"as"===o.type&&o.as&&(t===W?i.as=o.as:u=o.as);var c=i.children;o.wrapChildren&&(c=o.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:a.createElement.apply(a,[a.Fragment,{}].concat(e)):e}(c))),r&&(c=K(c,!0));var s=Y(u,i,c);return o.wrap&&(s=o.wrap(s)),s}var G=new Map;function J(e,t){null==t&&(t={});var n=t["data-plasmic-name"],r=t["data-plasmic-root"],o=t["data-plasmic-for-node"];delete t["data-plasmic-name"],delete t["data-plasmic-root"],delete t["data-plasmic-for-node"];for(var a=arguments.length,i=new Array(a>2?a-2:0),u=2;u<a;u++)i[u-2]=arguments[u];var c=X.apply(void 0,[e,t].concat(i));if(n&&G.set(n,c),r){var s,l=o?null!=(s=G.get(o))?s:null:c;return G.clear(),l}return c}function X(e,t){var n,r=t["data-plasmic-override"],o=t["data-plasmic-wrap-flex-child"],a=null!=(n=t["data-plasmic-trigger-props"])?n:[];delete t["data-plasmic-override"],delete t["data-plasmic-wrap-flex-child"],delete t["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return q(r,e,_.apply(void 0,[t,0===u.length?{}:{children:1===u.length?u[0]:u}].concat(a)),o)}var ee=Symbol("UNSET");function te(e,t){if(!t)return e;for(var n=I({},e),r=0,o=Object.keys(t);r<o.length;r++){var a=o[r],i=e[a],u=t[a];u===ee?delete n[a]:(null!=u||"className"===a||"style"===a||a.startsWith("on")&&"function"===typeof i||(u=V),n[a]=D(a,i,u))}return n}function ne(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||a.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?I({},e,{props:e.props||{},type:"as"}):"render"in e?I({},e,{type:"render"}):"props"in e?I({},e,{props:e.props||{},type:"default"}):(t=Object.keys(e),n=["wrap","wrapChildren"],t.every((function(e){return n.includes(e)}))?I({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var t,n;throw new Error("Unexpected override: "+e)}function re(e,t){for(var n={},r=0,o=Array.from(new Set([].concat(Object.keys(e),Object.keys(t))));r<o.length;r++){var a=o[r];n[a]=oe(e[a],t[a])}return n}function oe(e,t){var n,r;if(!e)return t;if(!t)return e;var o=ne(e),a=ne(t),i=C.apply(void 0,[o.wrap,a.wrap].filter(O)),u=C.apply(void 0,[o.wrapChildren,a.wrapChildren].filter(O)),c=te(null!=(n=o.props)?n:{},a.props);if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};var s=null!=(r="as"===a.type?a.as:void 0)?r:"as"===o.type?o.as:void 0;return I({props:c,wrap:i,wrapChildren:u},s?{as:s}:{})}function ae(e,t){var n,r,o,a,i,u,c,s,l=t.name,f=t.descendantNames,d=t.internalVariantPropNames,p=t.internalArgPropNames,v=["variants","args","overrides"],h=(a=z.apply(void 0,[S.apply(void 0,[e].concat(d))].concat(v)),i=null!=(n=e.variants)?n:{},I({},a,i)),b=(u=z.apply(void 0,[S.apply(void 0,[e].concat(p))].concat(v)),c=null!=(r=e.args)?r:{},I({},u,c)),y=re(z.apply(void 0,[S.apply(void 0,[e].concat(f))].concat(p,d,v)),null!=(o=e.overrides)?o:{}),m=z.apply(void 0,[e,"variants","args","overrides"].concat(f,d,p));Object.keys(m).length>0&&(y=re(y,((s={})[l]={props:m},s)));return{variants:h,args:b,overrides:y}}var ie={};function ue(e){return Object.entries(e).filter((function(e){var t=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===t})).forEach((function(t){var n=t[0];e[n]=void 0,ie[n]})),e}function ce(e){if("nextjs"===e.platform&&e.href){var t=["href","replace","scroll","shallow","passHref","prefetch","locale"];return a.createElement(e.component,S.apply(void 0,[e].concat(t)),a.createElement("a",Object.assign({},z.apply(void 0,[e,"component","platform"].concat(t)))))}return"gatsby"===e.platform&&(n=e.href,/^\/(?!\/)/.test(n))?a.createElement(e.component,I({},z(e,"component","platform","href"),{to:e.href})):a.createElement("a",Object.assign({},z(e,"component","platform")));var n}function se(e){var t=e.as,n=e.defaultContents,r=e.value,o=T(e,["as","defaultContents","value"]),i=void 0===r?n:r;if(!i||Array.isArray(i)&&0===i.length)return null;var u=le(i);return u&&(i=(0,a.createElement)("div",{className:"__wab_slot-string-wrapper"},u)),0===Object.keys(o).filter((function(e){return!!o[e]})).length?(0,a.createElement)(a.Fragment,null,i):(0,a.createElement)(t||"div",_({className:"__wab_slot"},o),i)}function le(e){return(0,a.isValidElement)(e)&&e.type===a.Fragment?le(e.props.children):"string"===typeof e?e:Array.isArray(e)&&1===e.length&&"string"===typeof e[0]?e[0]:void 0}var fe=[],de={};function pe(){return M?Object.entries(de).filter((function(e){var t=e[1];return window.matchMedia(t).matches})).map((function(e){return e[0]})):[]}var ve=void 0;function he(e,t){return Object.assign(de,t),function(){var t=(0,a.useState)()[1],n=(0,a.useRef)(ve||[]);return k((function(){var e=function(){ve&&n.current.join("")!==ve.join("")&&(n.current=ve,t({}))};return fe.push(e),void 0===ve&&(ve=pe()),e(),function(){fe.splice(fe.indexOf(e),1)}}),[]),e?ve||[]:ve?ve[ve.length-1]:void 0}}M&&window.addEventListener("resize",(function(){var e=pe();ve&&e.join("")===ve.join("")||(ve=e,u.unstable_batchedUpdates((function(){return fe.forEach((function(e){return e()}))})))}));var be=o()},178:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},110:function(e,t,n){"use strict";n.d(t,{ih:function(){return ue},ZP:function(){return se}});var r=n(7294),o=n(4276),a=n(6502),i=n(4729),u=n(5552),c=n(2837),s=n(5224),l=n(1321),f=n(6668),d=n(6461),p=n(5087),v=n(3172),h=n(6852),b=n(535),y=n(8509),m=n(1347),Z=n(6235),g=n(9517),j=n(6955),w=n(5016),A=n(4015),L=n(6794),Q=n(1302),x=n(3445),I=n(2338),T=n(6225),P=n(7342),E=n(1187),O=n(3867),S=n(9073),z=n(2365),C=n(750),M=n(8735),V=n(7915),k=n(5226),Y=n(9268),_=n(924),H=n(3979),R=n(655),D=n(4124),N=n(2095),U=n(1936),F=n(5189),B=n(5120),W=n(1175),$=n(8745),K=n(2482),q=n(1132),G=n(6735),J=n(7907),X=n(9688),ee=n(520),te=n(2577);const ne={Home:o.ZP,Header:a.ZP,Footer:i.ZP,Section:u.ZP,FeatureCard:c.ZP,TopSection:s.ZP,HomeCta:l.ZP,IconLink:f.ZP,LinkButton:d.ZP,Testimonial:p.ZP,Avatar:v.ZP,BaseCard:h.ZP,Plan:b.ZP,Bullet:y.ZP,Faq:m.ZP,MenuButton:Z.ZP,WhitepaperModal:g.ZP,TopSection2:j.ZP,TopSection3:w.ZP,TopSection4:A.ZP,TopSection5:L.ZP,TopSection6:Q.ZP,Whitepaper:x.ZP,TwitterIconIcon:I.Z,GithubIconIcon:T.Z,FacebookIconIcon:P.Z,FacebookLogoIcon:E.Z,LogoIcon:O.Z,SphereIcon:S.Z,QuoteDashesIcon:z.Z,TinderLogoIcon:C.Z,AirbnbLogoIcon:M.Z,HubspotLogoIcon:V.Z,AmazonLogoIcon:k.Z,SwapIcon:Y.Z,SlotIcon:_.Z,CycleIcon:H.Z,HammerIcon:R.Z,PencilIcon:D.Z,LightningIcon:N.Z,RightArrowIcon:U.Z,Done24Pxsvg2Icon:F.Z,TridogesvgIcon:B.Z,TrendingUpsvgIcon:W.Z,DonutChartLinesvgIcon:$.Z,MenusvgIcon:K.Z,ClosesvgIcon:q.Z,MetamasksvgIcon:G.Z,UniswapUniLogosvgIcon:J.Z,RocketsvgIcon:X.Z},re={Screen:{component:ee.wd,isContext:!Boolean("ScreenVariantProvider")},Name:{component:te.Z,isContext:!Boolean("")}},oe={Home:{uhjxjVT6QbAZLostZzQbnY:o.ZP},Header:{uhjxjVT6QbAZLostZzQbnY:a.ZP},Footer:{uhjxjVT6QbAZLostZzQbnY:i.ZP},Section:{uhjxjVT6QbAZLostZzQbnY:u.ZP},FeatureCard:{uhjxjVT6QbAZLostZzQbnY:c.ZP},TopSection:{uhjxjVT6QbAZLostZzQbnY:s.ZP},HomeCta:{uhjxjVT6QbAZLostZzQbnY:l.ZP},IconLink:{uhjxjVT6QbAZLostZzQbnY:f.ZP},LinkButton:{uhjxjVT6QbAZLostZzQbnY:d.ZP},Testimonial:{uhjxjVT6QbAZLostZzQbnY:p.ZP},Avatar:{uhjxjVT6QbAZLostZzQbnY:v.ZP},BaseCard:{uhjxjVT6QbAZLostZzQbnY:h.ZP},Plan:{uhjxjVT6QbAZLostZzQbnY:b.ZP},Bullet:{uhjxjVT6QbAZLostZzQbnY:y.ZP},Faq:{uhjxjVT6QbAZLostZzQbnY:m.ZP},MenuButton:{uhjxjVT6QbAZLostZzQbnY:Z.ZP},WhitepaperModal:{uhjxjVT6QbAZLostZzQbnY:g.ZP},TopSection2:{uhjxjVT6QbAZLostZzQbnY:j.ZP},TopSection3:{uhjxjVT6QbAZLostZzQbnY:w.ZP},TopSection4:{uhjxjVT6QbAZLostZzQbnY:A.ZP},TopSection5:{uhjxjVT6QbAZLostZzQbnY:L.ZP},TopSection6:{uhjxjVT6QbAZLostZzQbnY:Q.ZP},Whitepaper:{uhjxjVT6QbAZLostZzQbnY:x.ZP},TwitterIconIcon:{uhjxjVT6QbAZLostZzQbnY:I.Z},GithubIconIcon:{uhjxjVT6QbAZLostZzQbnY:T.Z},FacebookIconIcon:{uhjxjVT6QbAZLostZzQbnY:P.Z},FacebookLogoIcon:{uhjxjVT6QbAZLostZzQbnY:E.Z},LogoIcon:{uhjxjVT6QbAZLostZzQbnY:O.Z},SphereIcon:{uhjxjVT6QbAZLostZzQbnY:S.Z},QuoteDashesIcon:{uhjxjVT6QbAZLostZzQbnY:z.Z},TinderLogoIcon:{uhjxjVT6QbAZLostZzQbnY:C.Z},AirbnbLogoIcon:{uhjxjVT6QbAZLostZzQbnY:M.Z},HubspotLogoIcon:{uhjxjVT6QbAZLostZzQbnY:V.Z},AmazonLogoIcon:{uhjxjVT6QbAZLostZzQbnY:k.Z},SwapIcon:{uhjxjVT6QbAZLostZzQbnY:Y.Z},SlotIcon:{uhjxjVT6QbAZLostZzQbnY:_.Z},CycleIcon:{uhjxjVT6QbAZLostZzQbnY:H.Z},HammerIcon:{uhjxjVT6QbAZLostZzQbnY:R.Z},PencilIcon:{uhjxjVT6QbAZLostZzQbnY:D.Z},LightningIcon:{uhjxjVT6QbAZLostZzQbnY:N.Z},RightArrowIcon:{uhjxjVT6QbAZLostZzQbnY:U.Z},Done24Pxsvg2Icon:{uhjxjVT6QbAZLostZzQbnY:F.Z},TridogesvgIcon:{uhjxjVT6QbAZLostZzQbnY:B.Z},TrendingUpsvgIcon:{uhjxjVT6QbAZLostZzQbnY:W.Z},DonutChartLinesvgIcon:{uhjxjVT6QbAZLostZzQbnY:$.Z},MenusvgIcon:{uhjxjVT6QbAZLostZzQbnY:K.Z},ClosesvgIcon:{uhjxjVT6QbAZLostZzQbnY:q.Z},MetamasksvgIcon:{uhjxjVT6QbAZLostZzQbnY:G.Z},UniswapUniLogosvgIcon:{uhjxjVT6QbAZLostZzQbnY:J.Z},RocketsvgIcon:{uhjxjVT6QbAZLostZzQbnY:X.Z}},ae={Screen:{uhjxjVT6QbAZLostZzQbnY:{component:ee.wd,isContext:!Boolean(void 0)}},Name:{uhjxjVT6QbAZLostZzQbnY:{component:te.Z,isContext:!Boolean(void 0)}}},ie={"/":{name:"Home",projectId:"uhjxjVT6QbAZLostZzQbnY"},"/whitepaper":{name:"Whitepaper",projectId:"uhjxjVT6QbAZLostZzQbnY"}};function ue(e){return Array.isArray(e)&&(e=e.join("/")),e.startsWith("/")||(e="/"+e),ie[e]}function ce(e,t,n){const o=Object.entries(n||{}).map((([e,n])=>{if(re[e]){const{component:t,isContext:r}=re[e];return[r?t.Provider:t,n]}if(!ae[e])throw new Error(`The provider ${e} could not be found.`);if(!ae[e][t])throw new Error(`The provider ${e} requires a valid projectId. Passed: ${t}. Options: ${Object.keys(ae[e])}`);const{component:r,isContext:o}=ae[e][t];return[o?r.Provider:r,n]}));return o.length?o.reduce(((e,[t,n])=>r.createElement(t,{value:n},e)),e):e}function se({projectId:e,component:t,componentProps:n={},providerProps:o={}}){const a=function(e,t){if(ne[t])return ne[t];if(!oe[t])throw new Error(`The component ${t} could not be found.`);if(!oe[t][e])throw new Error(`The component ${t} requires a valid projectId. Passed: ${e}. Options: ${Object.keys(oe[t])}`);return oe[t][e]}(e,t);return ce(r.createElement(a,n),e,o)}},6071:function(e,t,n){"use strict";var r=n(3848),o=n(9448);t.default=void 0;var a=o(n(7294)),i=n(1689),u=n(2441),c=n(5749),s={};function l(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,u.useRouter)(),o=n&&n.asPath||"/",f=a.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],u=n[1];return{href:a,as:e.as?(0,i.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var Z=a.Children.only(v),g=Z&&"object"===typeof Z&&Z.ref,j=(0,c.useIntersection)({rootMargin:"200px"}),w=r(j,2),A=w[0],L=w[1],Q=a.default.useCallback((function(e){A(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,A]);(0,a.useEffect)((function(){var e=L&&t&&(0,i.isLocalURL)(d),r="undefined"!==typeof m?m:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,L,m,t,n]);var x={ref:Q,onClick:function(e){Z.props&&"function"===typeof Z.props.onClick&&Z.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:c,scroll:u}))}(e,n,d,p,h,b,y,m)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(Z.props&&"function"===typeof Z.props.onMouseEnter&&Z.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===Z.type&&!("href"in Z.props)){var I="undefined"!==typeof m?m:n&&n.locale,T=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(p,I,n&&n.locales,n&&n.domainLocales);x.href=T||(0,i.addBasePath)((0,i.addLocale)(p,I,n&&n.defaultLocale))}return a.default.cloneElement(Z,x)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,i=r.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),a=n(8391),i="undefined"!==typeof IntersectionObserver;var u=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},a=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},7947:function(e,t,n){"use strict";var r=n(1682);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(617))&&a.__esModule?a:{default:a},c=n(3367),s=n(4287),l=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var v=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?a=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,s=v.length;c<s;c++){var l=v[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&i||!d.has(f)?(d.add(f),r[l]=d):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var u=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return u["data-href"]=u.href,u.href=void 0,u["data-optimized-fonts"]=!0,i.default.cloneElement(e,u)}return i.default.cloneElement(e,{key:a})}))}function b(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(u.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}b.rewind=function(){};var y=b;t.default=y},617:function(e,t,n){"use strict";var r=n(3115),o=n(2553),a=n(2012),i=(n(450),n(9807)),u=n(7690),c=n(9828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},3179:function(){},9008:function(e,t,n){e.exports=n(7947)},1664:function(e,t,n){e.exports=n(6071)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},8347:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},1385:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),o=n(7381),a=n(3585),i=n(5725);e.exports=function(e){return r(e)||o(e)||a(e)||i()}}}]);