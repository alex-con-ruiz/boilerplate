var Q=Object.create;var h=Object.defineProperty;var W=Object.getOwnPropertyDescriptor;var Y=Object.getOwnPropertyNames;var X=Object.getPrototypeOf,Z=Object.prototype.hasOwnProperty;var ee=e=>h(e,"__esModule",{value:!0}),l=(e,r)=>h(e,"name",{value:r,configurable:!0});var j=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var re=(e,r,t,o)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Y(r))!Z.call(e,n)&&(t||n!=="default")&&h(e,n,{get:()=>r[n],enumerable:!(o=W(r,n))||o.enumerable});return e},te=(e,r)=>re(ee(h(e!=null?Q(X(e)):{},"default",!r&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var w=j((ye,P)=>{"use strict";var $=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;function ue(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}l(ue,"toObject");function ie(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var o=Object.getOwnPropertyNames(r).map(function(i){return r[i]});if(o.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(i){n[i]=i}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l(ie,"shouldUseNative");P.exports=ie()?Object.assign:function(e,r){for(var t,o=ue(e),n,i=1;i<arguments.length;i++){t=Object(arguments[i]);for(var c in t)ne.call(t,c)&&(o[c]=t[c]);if($){n=$(t);for(var s=0;s<n.length;s++)oe.call(t,n[s])&&(o[n[s]]=t[n[s]])}}return o}});var H=j(u=>{"use strict";var O=w(),d=60103,R=60106;u.Fragment=60107;u.StrictMode=60108;u.Profiler=60114;var x=60109,q=60110,A=60112;u.Suspense=60113;var I=60115,N=60116;typeof Symbol=="function"&&Symbol.for&&(a=Symbol.for,d=a("react.element"),R=a("react.portal"),u.Fragment=a("react.fragment"),u.StrictMode=a("react.strict_mode"),u.Profiler=a("react.profiler"),x=a("react.provider"),q=a("react.context"),A=a("react.forward_ref"),u.Suspense=a("react.suspense"),I=a("react.memo"),N=a("react.lazy"));var a,U=typeof Symbol=="function"&&Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=U&&e[U]||e["@@iterator"],typeof e=="function"?e:null)}l(se,"y");function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}l(m,"z");var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M={};function v(e,r,t){this.props=e,this.context=r,this.refs=M,this.updater=t||F}l(v,"C");v.prototype.isReactComponent={};v.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")};v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function D(){}l(D,"D");D.prototype=v.prototype;function b(e,r,t){this.props=e,this.context=r,this.refs=M,this.updater=t||F}l(b,"E");var k=b.prototype=new D;k.constructor=b;O(k,v.prototype);k.isPureReactComponent=!0;var S={current:null},L=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0};function T(e,r,t){var o,n={},i=null,c=null;if(r!=null)for(o in r.ref!==void 0&&(c=r.ref),r.key!==void 0&&(i=""+r.key),r)L.call(r,o)&&!B.hasOwnProperty(o)&&(n[o]=r[o]);var s=arguments.length-2;if(s===1)n.children=t;else if(1<s){for(var f=Array(s),p=0;p<s;p++)f[p]=arguments[p+2];n.children=f}if(e&&e.defaultProps)for(o in s=e.defaultProps,s)n[o]===void 0&&(n[o]=s[o]);return{$$typeof:d,type:e,key:i,ref:c,props:n,_owner:S.current}}l(T,"J");function ce(e,r){return{$$typeof:d,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}l(ce,"K");function E(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}l(E,"L");function fe(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}l(fe,"escape");var V=/\/+/g;function C(e,r){return typeof e=="object"&&e!==null&&e.key!=null?fe(""+e.key):r.toString(36)}l(C,"N");function _(e,r,t,o,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case d:case R:c=!0}}if(c)return c=e,n=n(c),e=o===""?"."+C(c,0):o,Array.isArray(n)?(t="",e!=null&&(t=e.replace(V,"$&/")+"/"),_(n,r,t,"",function(p){return p})):n!=null&&(E(n)&&(n=ce(n,t+(!n.key||c&&c.key===n.key?"":(""+n.key).replace(V,"$&/")+"/")+e)),r.push(n)),1;if(c=0,o=o===""?".":o+":",Array.isArray(e))for(var s=0;s<e.length;s++){i=e[s];var f=o+C(i,s);c+=_(i,r,t,f,n)}else if(f=se(e),typeof f=="function")for(e=f.call(e),s=0;!(i=e.next()).done;)i=i.value,f=o+C(i,s++),c+=_(i,r,t,f,n);else if(i==="object")throw r=""+e,Error(m(31,r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}l(_,"O");function g(e,r,t){if(e==null)return e;var o=[],n=0;return _(e,o,"","",function(i){return r.call(t,i,n++)}),o}l(g,"P");function le(e){if(e._status===-1){var r=e._result;r=r(),e._status=0,e._result=r,r.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}l(le,"Q");var z={current:null};function y(){var e=z.current;if(e===null)throw Error(m(321));return e}l(y,"S");var ae={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:O};u.Children={map:g,forEach:function(e,r,t){g(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return g(e,function(){r++}),r},toArray:function(e){return g(e,function(r){return r})||[]},only:function(e){if(!E(e))throw Error(m(143));return e}};u.Component=v;u.PureComponent=b;u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae;u.cloneElement=function(e,r,t){if(e==null)throw Error(m(267,e));var o=O({},e.props),n=e.key,i=e.ref,c=e._owner;if(r!=null){if(r.ref!==void 0&&(i=r.ref,c=S.current),r.key!==void 0&&(n=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(f in r)L.call(r,f)&&!B.hasOwnProperty(f)&&(o[f]=r[f]===void 0&&s!==void 0?s[f]:r[f])}var f=arguments.length-2;if(f===1)o.children=t;else if(1<f){s=Array(f);for(var p=0;p<f;p++)s[p]=arguments[p+2];o.children=s}return{$$typeof:d,type:e.type,key:n,ref:i,props:o,_owner:c}};u.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:q,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:x,_context:e},e.Consumer=e};u.createElement=T;u.createFactory=function(e){var r=T.bind(null,e);return r.type=e,r};u.createRef=function(){return{current:null}};u.forwardRef=function(e){return{$$typeof:A,render:e}};u.isValidElement=E;u.lazy=function(e){return{$$typeof:N,_payload:{_status:-1,_result:e},_init:le}};u.memo=function(e,r){return{$$typeof:I,type:e,compare:r===void 0?null:r}};u.useCallback=function(e,r){return y().useCallback(e,r)};u.useContext=function(e,r){return y().useContext(e,r)};u.useDebugValue=function(){};u.useEffect=function(e,r){return y().useEffect(e,r)};u.useImperativeHandle=function(e,r,t){return y().useImperativeHandle(e,r,t)};u.useLayoutEffect=function(e,r){return y().useLayoutEffect(e,r)};u.useMemo=function(e,r){return y().useMemo(e,r)};u.useReducer=function(e,r,t){return y().useReducer(e,r,t)};u.useRef=function(e){return y().useRef(e)};u.useState=function(e){return y().useState(e)};u.version="17.0.2"});var J=j((ve,G)=>{"use strict";G.exports=H()});var K=te(J(),1);var ge=l(({primary:e=!1,backgroundColor:r=null,size:t="medium",label:o,...n})=>{let i=e?"storybook-button--primary":"storybook-button--secondary";return K.default.createElement("button",{type:"button",className:["storybook-button",`storybook-button--${t}`,i].join(" "),style:r&&{backgroundColor:r},...n},o)},"Button");export{ge as Button};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=index.js.map
