var e={exports:{}},t={},n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var s=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var s,a,l=o(e),u=1;u<arguments.length;u++){for(var c in s=Object(arguments[u]))r.call(s,c)&&(l[c]=s[c]);if(n){a=n(s);for(var d=0;d<a.length;d++)i.call(s,a[d])&&(l[a[d]]=s[a[d]])}}return l},a=s,l=60103,u=60106;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,d=60110,h=60112;t.Suspense=60113;var f=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var m=Symbol.for;l=m("react.element"),u=m("react.portal"),t.Fragment=m("react.fragment"),t.StrictMode=m("react.strict_mode"),t.Profiler=m("react.profiler"),c=m("react.provider"),d=m("react.context"),h=m("react.forward_ref"),t.Suspense=m("react.suspense"),f=m("react.memo"),p=m("react.lazy")}var g="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||_}function w(){}function C(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||_}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=b.prototype;var k=C.prototype=new w;k.constructor=C,a(k,b.prototype),k.isPureReactComponent=!0;var E={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function T(e,t,n){var r,i={},o=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:l,type:e,key:o,ref:s,props:i,_owner:E.current}}function I(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var P=/\/+/g;function N(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,n,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var s=!1;if(null===e)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case l:case u:s=!0}}if(s)return i=i(s=e),e=""===r?"."+N(s,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(P,"$&/")+"/"),R(i,t,n,"",(function(e){return e}))):null!=i&&(I(i)&&(i=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(P,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var c=r+N(o=e[a],a);s+=R(o,t,n,c,i)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),a=0;!(o=e.next()).done;)s+=R(o=o.value,t,n,c=r+N(o,a++),i);else if("object"===o)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function O(e,t,n){if(null==e)return e;var r=[],i=0;return R(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var M={current:null};function L(){var e=M.current;if(null===e)throw Error(y(321));return e}var A={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!I(e))throw Error(y(143));return e}},t.Component=b,t.PureComponent=C,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var r=a({},e.props),i=e.key,o=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,s=E.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)S.call(t,c)&&!x.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){u=Array(c);for(var d=0;d<c;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:l,type:e.type,key:i,ref:o,props:r,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:d,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=T,t.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:h,render:e}},t.isValidElement=I,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return L().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,n){return L().useReducer(e,t,n)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="17.0.2",e.exports=t;var F=e.exports,z={exports:{}},j={},U={exports:{}},$={};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){var t,n,r,i;if("object"==typeof performance&&"function"==typeof performance.now){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,u=null,c=function(){if(null!==l)try{var t=e.unstable_now();l(!0,t),l=null}catch(n){throw setTimeout(c,0),n}};t=function(e){null!==l?setTimeout(t,0,e):(l=e,setTimeout(c,0))},n=function(e,t){u=setTimeout(e,t)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var d=window.setTimeout,h=window.clearTimeout;if("undefined"!=typeof console){var f=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof f&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var p=!1,m=null,g=-1,y=5,_=0;e.unstable_shouldYield=function(){return e.unstable_now()>=_},i=function(){},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<e?Math.floor(1e3/e):5};var v=new MessageChannel,b=v.port2;v.port1.onmessage=function(){if(null!==m){var t=e.unstable_now();_=t+y;try{m(!0,t)?b.postMessage(null):(p=!1,m=null)}catch(n){throw b.postMessage(null),n}}else p=!1},t=function(e){m=e,p||(p=!0,b.postMessage(null))},n=function(t,n){g=d((function(){t(e.unstable_now())}),n)},r=function(){h(g),g=-1}}function w(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<E(i,t)))break e;e[r]=t,e[n]=i,n=r}}function C(e){return void 0===(e=e[0])?null:e}function k(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var o=2*(r+1)-1,s=e[o],a=o+1,l=e[a];if(void 0!==s&&0>E(s,n))void 0!==l&&0>E(l,s)?(e[r]=l,e[a]=n,r=a):(e[r]=s,e[o]=n,r=o);else{if(!(void 0!==l&&0>E(l,n)))break e;e[r]=l,e[a]=n,r=a}}}return t}return null}function E(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var S=[],x=[],T=1,I=null,P=3,N=!1,R=!1,O=!1;function D(e){for(var t=C(x);null!==t;){if(null===t.callback)k(x);else{if(!(t.startTime<=e))break;k(x),t.sortIndex=t.expirationTime,w(S,t)}t=C(x)}}function M(e){if(O=!1,D(e),!R)if(null!==C(S))R=!0,t(L);else{var r=C(x);null!==r&&n(M,r.startTime-e)}}function L(t,i){R=!1,O&&(O=!1,r()),N=!0;var o=P;try{for(D(i),I=C(S);null!==I&&(!(I.expirationTime>i)||t&&!e.unstable_shouldYield());){var s=I.callback;if("function"==typeof s){I.callback=null,P=I.priorityLevel;var a=s(I.expirationTime<=i);i=e.unstable_now(),"function"==typeof a?I.callback=a:I===C(S)&&k(S),D(i)}else k(S);I=C(S)}if(null!==I)var l=!0;else{var u=C(x);null!==u&&n(M,u.startTime-i),l=!1}return l}finally{I=null,P=o,N=!1}}var A=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){R||N||(R=!0,t(L))},e.unstable_getCurrentPriorityLevel=function(){return P},e.unstable_getFirstCallbackNode=function(){return C(S)},e.unstable_next=function(e){switch(P){case 1:case 2:case 3:var t=3;break;default:t=P}var n=P;P=t;try{return e()}finally{P=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=A,e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=P;P=e;try{return t()}finally{P=n}},e.unstable_scheduleCallback=function(i,o,s){var a=e.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?a+s:a:s=a,i){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return i={id:T++,callback:o,priorityLevel:i,startTime:s,expirationTime:l=s+l,sortIndex:-1},s>a?(i.sortIndex=s,w(x,i),null===C(S)&&i===C(x)&&(O?r():O=!0,n(M,s-a))):(i.sortIndex=l,w(S,i),R||N||(R=!0,t(L))),i},e.unstable_wrapCallback=function(e){var t=P;return function(){var n=P;P=t;try{return e.apply(this,arguments)}finally{P=n}}}}($),U.exports=$;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var q=e.exports,W=s,B=U.exports;function H(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!q)throw Error(H(227));var V=new Set,K={};function Q(e,t){Y(e,t),Y(e+"Capture",t)}function Y(e,t){for(K[e]=t,e=0;e<t.length;e++)V.add(t[e])}var G=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),X=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J=Object.prototype.hasOwnProperty,Z={},ee={};function te(e,t,n,r,i,o,s){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){ne[e]=new te(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];ne[t]=new te(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){ne[e]=new te(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){ne[e]=new te(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){ne[e]=new te(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){ne[e]=new te(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){ne[e]=new te(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){ne[e]=new te(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){ne[e]=new te(e,5,!1,e.toLowerCase(),null,!1,!1)}));var re=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}function oe(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!J.call(ee,e)||!J.call(Z,e)&&(X.test(e)?ee[e]=!0:(Z[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(re,ie);ne[t]=new te(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(re,ie);ne[t]=new te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(re,ie);ne[t]=new te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){ne[e]=new te(e,1,!1,e.toLowerCase(),null,!1,!1)})),ne.xlinkHref=new te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){ne[e]=new te(e,1,!1,e.toLowerCase(),null,!0,!0)}));var se=q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=60103,le=60106,ue=60107,ce=60108,de=60114,he=60109,fe=60110,pe=60112,me=60113,ge=60120,ye=60115,_e=60116,ve=60121,be=60128,we=60129,Ce=60130,ke=60131;if("function"==typeof Symbol&&Symbol.for){var Ee=Symbol.for;ae=Ee("react.element"),le=Ee("react.portal"),ue=Ee("react.fragment"),ce=Ee("react.strict_mode"),de=Ee("react.profiler"),he=Ee("react.provider"),fe=Ee("react.context"),pe=Ee("react.forward_ref"),me=Ee("react.suspense"),ge=Ee("react.suspense_list"),ye=Ee("react.memo"),_e=Ee("react.lazy"),ve=Ee("react.block"),Ee("react.scope"),be=Ee("react.opaque.id"),we=Ee("react.debug_trace_mode"),Ce=Ee("react.offscreen"),ke=Ee("react.legacy_hidden")}var Se,xe="function"==typeof Symbol&&Symbol.iterator;function Te(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=xe&&e[xe]||e["@@iterator"])?e:null}function Ie(e){if(void 0===Se)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||""}return"\n"+Se+e}var Pe=!1;function Ne(e,t){if(!e||Pe)return"";Pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&"string"==typeof l.stack){for(var i=l.stack.split("\n"),o=r.stack.split("\n"),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(1!==s||1!==a)do{if(s--,0>--a||i[s]!==o[a])return"\n"+i[s].replace(" at new "," at ")}while(1<=s&&0<=a);break}}}finally{Pe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ie(e):""}function Re(e){switch(e.tag){case 5:return Ie(e.type);case 16:return Ie("Lazy");case 13:return Ie("Suspense");case 19:return Ie("SuspenseList");case 0:case 2:case 15:return e=Ne(e.type,!1);case 11:return e=Ne(e.type.render,!1);case 22:return e=Ne(e.type._render,!1);case 1:return e=Ne(e.type,!0);default:return""}}function Oe(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ue:return"Fragment";case le:return"Portal";case de:return"Profiler";case ce:return"StrictMode";case me:return"Suspense";case ge:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case fe:return(e.displayName||"Context")+".Consumer";case he:return(e._context.displayName||"Context")+".Provider";case pe:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case ye:return Oe(e.type);case ve:return Oe(e._render);case _e:t=e._payload,e=e._init;try{return Oe(e(t))}catch(n){}}return null}function De(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Me(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Le(e){e._valueTracker||(e._valueTracker=function(e){var t=Me(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ae(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Me(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Fe(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ze(e,t){var n=t.checked;return W({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function je(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=De(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Ue(e,t){null!=(t=t.checked)&&oe(e,"checked",t,!1)}function $e(e,t){Ue(e,t);var n=De(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?We(e,t.type,n):t.hasOwnProperty("defaultValue")&&We(e,t.type,De(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function qe(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function We(e,t,n){"number"===t&&Fe(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Be(e,t){return e=W({children:void 0},t),(t=function(e){var t="";return q.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function He(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+De(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function Ve(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(H(91));return W({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ke(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(H(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(H(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:De(n)}}function Qe(e,t){var n=De(t.value),r=De(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Ye(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var Ge="http://www.w3.org/1999/xhtml",Xe="http://www.w3.org/2000/svg";function Je(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ze(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Je(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var et,tt,nt=(tt=function(e,t){if(e.namespaceURI!==Xe||"innerHTML"in e)e.innerHTML=t;else{for((et=et||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=et.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return tt(e,t)}))}:tt);function rt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var it={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ot=["Webkit","ms","Moz","O"];function st(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||it.hasOwnProperty(e)&&it[e]?(""+t).trim():t+"px"}function at(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=st(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(it).forEach((function(e){ot.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),it[t]=it[e]}))}));var lt=W({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(e,t){if(t){if(lt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(H(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(H(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(H(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(H(62))}}function ct(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function dt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ht=null,ft=null,pt=null;function mt(e){if(e=ji(e)){if("function"!=typeof ht)throw Error(H(280));var t=e.stateNode;t&&(t=$i(t),ht(e.stateNode,e.type,t))}}function gt(e){ft?pt?pt.push(e):pt=[e]:ft=e}function yt(){if(ft){var e=ft,t=pt;if(pt=ft=null,mt(e),t)for(e=0;e<t.length;e++)mt(t[e])}}function _t(e,t){return e(t)}function vt(e,t,n,r,i){return e(t,n,r,i)}function bt(){}var wt=_t,Ct=!1,kt=!1;function Et(){null===ft&&null===pt||(bt(),yt())}function St(e,t){var n=e.stateNode;if(null===n)return null;var r=$i(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(H(231,t,typeof n));return n}var xt=!1;if(G)try{var Tt={};Object.defineProperty(Tt,"passive",{get:function(){xt=!0}}),window.addEventListener("test",Tt,Tt),window.removeEventListener("test",Tt,Tt)}catch(tt){xt=!1}function It(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Pt=!1,Nt=null,Rt=!1,Ot=null,Dt={onError:function(e){Pt=!0,Nt=e}};function Mt(e,t,n,r,i,o,s,a,l){Pt=!1,Nt=null,It.apply(Dt,arguments)}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function At(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ft(e){if(Lt(e)!==e)throw Error(H(188))}function zt(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Lt(e)))throw Error(H(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var o=i.alternate;if(null===o){if(null!==(r=i.return)){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ft(i),e;if(o===r)return Ft(i),t;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(3!==n.tag)throw Error(H(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function jt(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var Ut,$t,qt,Wt,Bt=!1,Ht=[],Vt=null,Kt=null,Qt=null,Yt=new Map,Gt=new Map,Xt=[],Jt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zt(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:i,targetContainers:[r]}}function en(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Yt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gt.delete(t.pointerId)}}function tn(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e=Zt(t,n,r,i,o),null!==t&&(null!==(t=ji(t))&&$t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function nn(e){var t=zi(e.target);if(null!==t){var n=Lt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=At(n)))return e.blockedOn=t,void Wt(e.lanePriority,(function(){B.unstable_runWithPriority(e.priority,(function(){qt(n)}))}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function rn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=jn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ji(n))&&$t(t),e.blockedOn=n,!1;t.shift()}return!0}function on(e,t,n){rn(e)&&n.delete(t)}function sn(){for(Bt=!1;0<Ht.length;){var e=Ht[0];if(null!==e.blockedOn){null!==(e=ji(e.blockedOn))&&Ut(e);break}for(var t=e.targetContainers;0<t.length;){var n=jn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&Ht.shift()}null!==Vt&&rn(Vt)&&(Vt=null),null!==Kt&&rn(Kt)&&(Kt=null),null!==Qt&&rn(Qt)&&(Qt=null),Yt.forEach(on),Gt.forEach(on)}function an(e,t){e.blockedOn===t&&(e.blockedOn=null,Bt||(Bt=!0,B.unstable_scheduleCallback(B.unstable_NormalPriority,sn)))}function ln(e){function t(t){return an(t,e)}if(0<Ht.length){an(Ht[0],e);for(var n=1;n<Ht.length;n++){var r=Ht[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Vt&&an(Vt,e),null!==Kt&&an(Kt,e),null!==Qt&&an(Qt,e),Yt.forEach(t),Gt.forEach(t),n=0;n<Xt.length;n++)(r=Xt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Xt.length&&null===(n=Xt[0]).blockedOn;)nn(n),null===n.blockedOn&&Xt.shift()}function un(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:un("Animation","AnimationEnd"),animationiteration:un("Animation","AnimationIteration"),animationstart:un("Animation","AnimationStart"),transitionend:un("Transition","TransitionEnd")},dn={},hn={};function fn(e){if(dn[e])return dn[e];if(!cn[e])return e;var t,n=cn[e];for(t in n)if(n.hasOwnProperty(t)&&t in hn)return dn[e]=n[t];return e}G&&(hn=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);var pn=fn("animationend"),mn=fn("animationiteration"),gn=fn("animationstart"),yn=fn("transitionend"),_n=new Map,vn=new Map,bn=["abort","abort",pn,"animationEnd",mn,"animationIteration",gn,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",yn,"transitionEnd","waiting","waiting"];function wn(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),vn.set(r,t),_n.set(r,i),Q(i,[r])}}(0,B.unstable_now)();var Cn=8;function kn(e){if(0!=(1&e))return Cn=15,1;if(0!=(2&e))return Cn=14,2;if(0!=(4&e))return Cn=13,4;var t=24&e;return 0!==t?(Cn=12,t):0!=(32&e)?(Cn=11,32):0!==(t=192&e)?(Cn=10,t):0!=(256&e)?(Cn=9,256):0!==(t=3584&e)?(Cn=8,t):0!=(4096&e)?(Cn=7,4096):0!==(t=4186112&e)?(Cn=6,t):0!==(t=62914560&e)?(Cn=5,t):67108864&e?(Cn=4,67108864):0!=(134217728&e)?(Cn=3,134217728):0!==(t=805306368&e)?(Cn=2,t):0!=(1073741824&e)?(Cn=1,1073741824):(Cn=8,e)}function En(e,t){var n=e.pendingLanes;if(0===n)return Cn=0;var r=0,i=0,o=e.expiredLanes,s=e.suspendedLanes,a=e.pingedLanes;if(0!==o)r=o,i=Cn=15;else if(0!==(o=134217727&n)){var l=o&~s;0!==l?(r=kn(l),i=Cn):0!==(a&=o)&&(r=kn(a),i=Cn)}else 0!==(o=n&~s)?(r=kn(o),i=Cn):0!==a&&(r=kn(a),i=Cn);if(0===r)return 0;if(r=n&((0>(r=31-Nn(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0==(t&s)){if(kn(t),i<=Cn)return t;Cn=i}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-Nn(t)),r|=e[n],t&=~i;return r}function Sn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function xn(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Tn(24&~t))?xn(10,t):e;case 10:return 0===(e=Tn(192&~t))?xn(8,t):e;case 8:return 0===(e=Tn(3584&~t))&&(0===(e=Tn(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Tn(805306368&~t))&&(t=268435456),t}throw Error(H(358,e))}function Tn(e){return e&-e}function In(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pn(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-Nn(t)]=n}var Nn=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(Rn(e)/On|0)|0},Rn=Math.log,On=Math.LN2;var Dn=B.unstable_UserBlockingPriority,Mn=B.unstable_runWithPriority,Ln=!0;function An(e,t,n,r){Ct||bt();var i=zn,o=Ct;Ct=!0;try{vt(i,e,t,n,r)}finally{(Ct=o)||Et()}}function Fn(e,t,n,r){Mn(Dn,zn.bind(null,e,t,n,r))}function zn(e,t,n,r){var i;if(Ln)if((i=0==(4&t))&&0<Ht.length&&-1<Jt.indexOf(e))e=Zt(null,e,t,n,r),Ht.push(e);else{var o=jn(e,t,n,r);if(null===o)i&&en(e,r);else{if(i){if(-1<Jt.indexOf(e))return e=Zt(o,e,t,n,r),void Ht.push(e);if(function(e,t,n,r,i){switch(t){case"focusin":return Vt=tn(Vt,e,t,n,r,i),!0;case"dragenter":return Kt=tn(Kt,e,t,n,r,i),!0;case"mouseover":return Qt=tn(Qt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Yt.set(o,tn(Yt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gt.set(o,tn(Gt.get(o)||null,e,t,n,r,i)),!0}return!1}(o,e,t,n,r))return;en(e,r)}yi(e,t,r,null,n)}}}function jn(e,t,n,r){var i=dt(r);if(null!==(i=zi(i))){var o=Lt(i);if(null===o)i=null;else{var s=o.tag;if(13===s){if(null!==(i=At(o)))return i;i=null}else if(3===s){if(o.stateNode.hydrate)return 3===o.tag?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return yi(e,t,r,i,n),null}var Un=null,$n=null,qn=null;function Wn(){if(qn)return qn;var e,t,n=$n,r=n.length,i="value"in Un?Un.value:Un.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var s=r-e;for(t=1;t<=s&&n[r-t]===i[o-t];t++);return qn=i.slice(e,1<t?1-t:void 0)}function Bn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Hn(){return!0}function Vn(){return!1}function Kn(e){function t(t,n,r,i,o){for(var s in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(s)&&(t=e[s],this[s]=t?t(i):i[s]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Hn:Vn,this.isPropagationStopped=Vn,this}return W(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var Qn,Yn,Gn,Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=Kn(Xn),Zn=W({},Xn,{view:0,detail:0}),er=Kn(Zn),tr=W({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gn&&(Gn&&"mousemove"===e.type?(Qn=e.screenX-Gn.screenX,Yn=e.screenY-Gn.screenY):Yn=Qn=0,Gn=e),Qn)},movementY:function(e){return"movementY"in e?e.movementY:Yn}}),nr=Kn(tr),rr=Kn(W({},tr,{dataTransfer:0})),ir=Kn(W({},Zn,{relatedTarget:0})),or=Kn(W({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0})),sr=Kn(W({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),ar=Kn(W({},Xn,{data:0})),lr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ur={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=cr[e])&&!!t[e]}function hr(){return dr}var fr=Kn(W({},Zn,{key:function(e){if(e.key){var t=lr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Bn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?ur[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(e){return"keypress"===e.type?Bn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Bn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),pr=Kn(W({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),mr=Kn(W({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr})),gr=Kn(W({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0})),yr=Kn(W({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),_r=[9,13,27,32],vr=G&&"CompositionEvent"in window,br=null;G&&"documentMode"in document&&(br=document.documentMode);var wr=G&&"TextEvent"in window&&!br,Cr=G&&(!vr||br&&8<br&&11>=br),kr=String.fromCharCode(32),Er=!1;function Sr(e,t){switch(e){case"keyup":return-1!==_r.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Tr=!1;var Ir={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Ir[e.type]:"textarea"===t}function Nr(e,t,n,r){gt(r),0<(t=vi(t,"onChange")).length&&(n=new Jn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Rr=null,Or=null;function Dr(e){di(e,0)}function Mr(e){if(Ae(Ui(e)))return e}function Lr(e,t){if("change"===e)return t}var Ar=!1;if(G){var Fr;if(G){var zr="oninput"in document;if(!zr){var jr=document.createElement("div");jr.setAttribute("oninput","return;"),zr="function"==typeof jr.oninput}Fr=zr}else Fr=!1;Ar=Fr&&(!document.documentMode||9<document.documentMode)}function Ur(){Rr&&(Rr.detachEvent("onpropertychange",$r),Or=Rr=null)}function $r(e){if("value"===e.propertyName&&Mr(Or)){var t=[];if(Nr(t,Or,e,dt(e)),e=Dr,Ct)e(t);else{Ct=!0;try{_t(e,t)}finally{Ct=!1,Et()}}}}function qr(e,t,n){"focusin"===e?(Ur(),Or=n,(Rr=t).attachEvent("onpropertychange",$r)):"focusout"===e&&Ur()}function Wr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Mr(Or)}function Br(e,t){if("click"===e)return Mr(t)}function Hr(e,t){if("input"===e||"change"===e)return Mr(t)}var Vr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Kr=Object.prototype.hasOwnProperty;function Qr(e,t){if(Vr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Kr.call(t,n[r])||!Vr(e[n[r]],t[n[r]]))return!1;return!0}function Yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gr(e,t){var n,r=Yr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Yr(r)}}function Xr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Xr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Jr(){for(var e=window,t=Fe();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Fe((e=t.contentWindow).document)}return t}function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ei=G&&"documentMode"in document&&11>=document.documentMode,ti=null,ni=null,ri=null,ii=!1;function oi(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ii||null==ti||ti!==Fe(r)||("selectionStart"in(r=ti)&&Zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ri&&Qr(ri,r)||(ri=r,0<(r=vi(ni,"onSelect")).length&&(t=new Jn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ti)))}wn("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),wn("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),wn(bn,2);for(var si="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ai=0;ai<si.length;ai++)vn.set(si[ai],0);Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),Q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Q("onBeforeInput",["compositionend","keypress","textInput","paste"]),Q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ui=new Set("cancel close invalid load scroll toggle".split(" ").concat(li));function ci(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,o,s,a,l){if(Mt.apply(this,arguments),Pt){if(!Pt)throw Error(H(198));var u=Nt;Pt=!1,Nt=null,Rt||(Rt=!0,Ot=u)}}(r,t,void 0,e),e.currentTarget=null}function di(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;ci(i,a,u),o=l}else for(s=0;s<r.length;s++){if(l=(a=r[s]).instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;ci(i,a,u),o=l}}}if(Rt)throw e=Ot,Rt=!1,Ot=null,e}function hi(e,t){var n=qi(t),r=e+"__bubble";n.has(r)||(gi(t,e,2,!1),n.add(r))}var fi="_reactListening"+Math.random().toString(36).slice(2);function pi(e){e[fi]||(e[fi]=!0,V.forEach((function(t){ui.has(t)||mi(t,!1,e,null),mi(t,!0,e,null)})))}function mi(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,o=n;if("selectionchange"===e&&9!==n.nodeType&&(o=n.ownerDocument),null!==r&&!t&&ui.has(e)){if("scroll"!==e)return;i|=2,o=r}var s=qi(o),a=e+"__"+(t?"capture":"bubble");s.has(a)||(t&&(i|=4),gi(o,e,i,t),s.add(a))}function gi(e,t,n,r){var i=vn.get(t);switch(void 0===i?2:i){case 0:i=An;break;case 1:i=Fn;break;default:i=zn}n=i.bind(null,t,n,e),i=void 0,!xt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yi(e,t,n,r,i){var o=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var s=r.tag;if(3===s||4===s){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===s)for(s=r.return;null!==s;){var l=s.tag;if((3===l||4===l)&&((l=s.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;s=s.return}for(;null!==a;){if(null===(s=zi(a)))return;if(5===(l=s.tag)||6===l){r=o=s;continue e}a=a.parentNode}}r=r.return}!function(e,t,n){if(kt)return e(t,n);kt=!0;try{wt(e,t,n)}finally{kt=!1,Et()}}((function(){var r=o,i=dt(n),s=[];e:{var a=_n.get(e);if(void 0!==a){var l=Jn,u=e;switch(e){case"keypress":if(0===Bn(n))break e;case"keydown":case"keyup":l=fr;break;case"focusin":u="focus",l=ir;break;case"focusout":u="blur",l=ir;break;case"beforeblur":case"afterblur":l=ir;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=nr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=rr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=mr;break;case pn:case mn:case gn:l=or;break;case yn:l=gr;break;case"scroll":l=er;break;case"wheel":l=yr;break;case"copy":case"cut":case"paste":l=sr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=pr}var c=0!=(4&t),d=!c&&"scroll"===e,h=c?null!==a?a+"Capture":null:a;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==h&&(null!=(m=St(p,h))&&c.push(_i(p,m,f)))),d)break;p=p.return}0<c.length&&(a=new l(a,u,null,n,i),s.push({event:a,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||0!=(16&t)||!(u=n.relatedTarget||n.fromElement)||!zi(u)&&!u[Ai])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?zi(u):null)&&(u!==(d=Lt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=nr,m="onMouseLeave",h="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=pr,m="onPointerLeave",h="onPointerEnter",p="pointer"),d=null==l?a:Ui(l),f=null==u?a:Ui(u),(a=new c(m,p+"leave",l,n,i)).target=d,a.relatedTarget=f,m=null,zi(i)===r&&((c=new c(h,p+"enter",u,n,i)).target=f,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(h=u,p=0,f=c=l;f;f=bi(f))p++;for(f=0,m=h;m;m=bi(m))f++;for(;0<p-f;)c=bi(c),p--;for(;0<f-p;)h=bi(h),f--;for(;p--;){if(c===h||null!==h&&c===h.alternate)break e;c=bi(c),h=bi(h)}c=null}else c=null;null!==l&&wi(s,a,l,c,!1),null!==u&&null!==d&&wi(s,d,u,c,!0)}if("select"===(l=(a=r?Ui(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=Lr;else if(Pr(a))if(Ar)g=Hr;else{g=Wr;var y=qr}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=Br);switch(g&&(g=g(e,r))?Nr(s,g,n,i):(y&&y(e,a,r),"focusout"===e&&(y=a._wrapperState)&&y.controlled&&"number"===a.type&&We(a,"number",a.value)),y=r?Ui(r):window,e){case"focusin":(Pr(y)||"true"===y.contentEditable)&&(ti=y,ni=r,ri=null);break;case"focusout":ri=ni=ti=null;break;case"mousedown":ii=!0;break;case"contextmenu":case"mouseup":case"dragend":ii=!1,oi(s,n,i);break;case"selectionchange":if(ei)break;case"keydown":case"keyup":oi(s,n,i)}var _;if(vr)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Tr?Sr(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(Cr&&"ko"!==n.locale&&(Tr||"onCompositionStart"!==v?"onCompositionEnd"===v&&Tr&&(_=Wn()):($n="value"in(Un=i)?Un.value:Un.textContent,Tr=!0)),0<(y=vi(r,v)).length&&(v=new ar(v,e,null,n,i),s.push({event:v,listeners:y}),_?v.data=_:null!==(_=xr(n))&&(v.data=_))),(_=wr?function(e,t){switch(e){case"compositionend":return xr(t);case"keypress":return 32!==t.which?null:(Er=!0,kr);case"textInput":return(e=t.data)===kr&&Er?null:e;default:return null}}(e,n):function(e,t){if(Tr)return"compositionend"===e||!vr&&Sr(e,t)?(e=Wn(),qn=$n=Un=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cr&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))&&(0<(r=vi(r,"onBeforeInput")).length&&(i=new ar("onBeforeInput","beforeinput",null,n,i),s.push({event:i,listeners:r}),i.data=_))}di(s,t)}))}function _i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=St(e,n))&&r.unshift(_i(e,o,i)),null!=(o=St(e,t))&&r.push(_i(e,o,i))),e=e.return}return r}function bi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function wi(e,t,n,r,i){for(var o=t._reactName,s=[];null!==n&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==u&&(a=u,i?null!=(l=St(n,o))&&s.unshift(_i(n,l,a)):i||null!=(l=St(n,o))&&s.push(_i(n,l,a))),n=n.return}0!==s.length&&e.push({event:t,listeners:s})}function Ci(){}var ki=null,Ei=null;function Si(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function xi(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Ti="function"==typeof setTimeout?setTimeout:void 0,Ii="function"==typeof clearTimeout?clearTimeout:void 0;function Pi(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Ni(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Ri(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Oi=0;var Di=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Di,Li="__reactProps$"+Di,Ai="__reactContainer$"+Di,Fi="__reactEvents$"+Di;function zi(e){var t=e[Mi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ai]||n[Mi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Ri(e);null!==e;){if(n=e[Mi])return n;e=Ri(e)}return t}n=(e=n).parentNode}return null}function ji(e){return!(e=e[Mi]||e[Ai])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Ui(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(H(33))}function $i(e){return e[Li]||null}function qi(e){var t=e[Fi];return void 0===t&&(t=e[Fi]=new Set),t}var Wi=[],Bi=-1;function Hi(e){return{current:e}}function Vi(e){0>Bi||(e.current=Wi[Bi],Wi[Bi]=null,Bi--)}function Ki(e,t){Bi++,Wi[Bi]=e.current,e.current=t}var Qi={},Yi=Hi(Qi),Gi=Hi(!1),Xi=Qi;function Ji(e,t){var n=e.type.contextTypes;if(!n)return Qi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Zi(e){return null!=(e=e.childContextTypes)}function eo(){Vi(Gi),Vi(Yi)}function to(e,t,n){if(Yi.current!==Qi)throw Error(H(168));Ki(Yi,t),Ki(Gi,n)}function no(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in e))throw Error(H(108,Oe(t)||"Unknown",i));return W({},n,r)}function ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qi,Xi=Yi.current,Ki(Yi,e),Ki(Gi,Gi.current),!0}function io(e,t,n){var r=e.stateNode;if(!r)throw Error(H(169));n?(e=no(e,t,Xi),r.__reactInternalMemoizedMergedChildContext=e,Vi(Gi),Vi(Yi),Ki(Yi,e)):Vi(Gi),Ki(Gi,n)}var oo=null,so=null,ao=B.unstable_runWithPriority,lo=B.unstable_scheduleCallback,uo=B.unstable_cancelCallback,co=B.unstable_shouldYield,ho=B.unstable_requestPaint,fo=B.unstable_now,po=B.unstable_getCurrentPriorityLevel,mo=B.unstable_ImmediatePriority,go=B.unstable_UserBlockingPriority,yo=B.unstable_NormalPriority,_o=B.unstable_LowPriority,vo=B.unstable_IdlePriority,bo={},wo=void 0!==ho?ho:function(){},Co=null,ko=null,Eo=!1,So=fo(),xo=1e4>So?fo:function(){return fo()-So};function To(){switch(po()){case mo:return 99;case go:return 98;case yo:return 97;case _o:return 96;case vo:return 95;default:throw Error(H(332))}}function Io(e){switch(e){case 99:return mo;case 98:return go;case 97:return yo;case 96:return _o;case 95:return vo;default:throw Error(H(332))}}function Po(e,t){return e=Io(e),ao(e,t)}function No(e,t,n){return e=Io(e),lo(e,t,n)}function Ro(){if(null!==ko){var e=ko;ko=null,uo(e)}Oo()}function Oo(){if(!Eo&&null!==Co){Eo=!0;var e=0;try{var t=Co;Po(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),Co=null}catch(n){throw null!==Co&&(Co=Co.slice(e+1)),lo(mo,Ro),n}finally{Eo=!1}}}var Do=se.ReactCurrentBatchConfig;function Mo(e,t){if(e&&e.defaultProps){for(var n in t=W({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Lo=Hi(null),Ao=null,Fo=null,zo=null;function jo(){zo=Fo=Ao=null}function Uo(e){var t=Lo.current;Vi(Lo),e.type._context._currentValue=t}function $o(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function qo(e,t){Ao=e,zo=Fo=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(va=!0),e.firstContext=null)}function Wo(e,t){if(zo!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(zo=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Fo){if(null===Ao)throw Error(H(308));Fo=t,Ao.dependencies={lanes:0,firstContext:t,responders:null}}else Fo=Fo.next=t;return e._currentValue}var Bo=!1;function Ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Vo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ko(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qo(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Yo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=s:o=o.next=s,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Go(e,t,n,r){var i=e.updateQueue;Bo=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,u=l.next;l.next=null,null===s?o=u:s.next=u,s=l;var c=e.alternate;if(null!==c){var d=(c=c.updateQueue).lastBaseUpdate;d!==s&&(null===d?c.firstBaseUpdate=u:d.next=u,c.lastBaseUpdate=l)}}if(null!==o){for(d=i.baseState,s=0,c=u=l=null;;){a=o.lane;var h=o.eventTime;if((r&a)===a){null!==c&&(c=c.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var f=e,p=o;switch(a=t,h=n,p.tag){case 1:if("function"==typeof(f=p.payload)){d=f.call(h,d,a);break e}d=f;break e;case 3:f.flags=-4097&f.flags|64;case 0:if(null==(a="function"==typeof(f=p.payload)?f.call(h,d,a):f))break e;d=W({},d,a);break e;case 2:Bo=!0}}null!==o.callback&&(e.flags|=32,null===(a=i.effects)?i.effects=[o]:a.push(o))}else h={eventTime:h,lane:a,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,s|=a;if(null===(o=o.next)){if(null===(a=i.shared.pending))break;o=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,kl|=s,e.lanes=s,e.memoizedState=d}}function Xo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(H(191,i));i.call(r)}}}var Jo=(new q.Component).refs;function Zo(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:W({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var es={isMounted:function(e){return!!(e=e._reactInternals)&&Lt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ql(),i=Yl(e),o=Ko(r,i);o.payload=t,null!=n&&(o.callback=n),Qo(e,o),Gl(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ql(),i=Yl(e),o=Ko(r,i);o.tag=1,o.payload=t,null!=n&&(o.callback=n),Qo(e,o),Gl(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ql(),r=Yl(e),i=Ko(n,r);i.tag=2,null!=t&&(i.callback=t),Qo(e,i),Gl(e,r,n)}};function ts(e,t,n,r,i,o,s){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,s):!t.prototype||!t.prototype.isPureReactComponent||(!Qr(n,r)||!Qr(i,o))}function ns(e,t,n){var r=!1,i=Qi,o=t.contextType;return"object"==typeof o&&null!==o?o=Wo(o):(i=Zi(t)?Xi:Yi.current,o=(r=null!=(r=t.contextTypes))?Ji(e,i):Qi),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=es,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function rs(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&es.enqueueReplaceState(t,t.state,null)}function is(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Jo,Ho(e);var o=t.contextType;"object"==typeof o&&null!==o?i.context=Wo(o):(o=Zi(t)?Xi:Yi.current,i.context=Ji(e,o)),Go(e,n,i,r),i.state=e.memoizedState,"function"==typeof(o=t.getDerivedStateFromProps)&&(Zo(e,t,o,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&es.enqueueReplaceState(i,i.state,null),Go(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4)}var os=Array.isArray;function ss(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===Jo&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(H(284));if(!n._owner)throw Error(H(290,e))}return e}function as(e,t){if("textarea"!==e.type)throw Error(H(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function ls(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Iu(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags=2,n):r:(t.flags=2,n):n}function s(t){return e&&null===t.alternate&&(t.flags=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Ou(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=ss(e,t,n),r.return=e,r):((r=Pu(n.type,n.key,n.props,null,e.mode,r)).ref=ss(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Du(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,o){return null===t||7!==t.tag?((t=Nu(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Ou(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ae:return(n=Pu(t.type,t.key,t.props,null,e.mode,n)).ref=ss(e,null,t),n.return=e,n;case le:return(t=Du(t,e.mode,n)).return=e,t}if(os(t)||Te(t))return(t=Nu(t,e.mode,n,null)).return=e,t;as(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ae:return n.key===i?n.type===ue?c(e,t,n.props.children,r,i):l(e,t,n,r):null;case le:return n.key===i?u(e,t,n,r):null}if(os(n)||Te(n))return null!==i?null:c(e,t,n,r,null);as(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ae:return e=e.get(null===r.key?n:r.key)||null,r.type===ue?c(t,e,r.props.children,i,r.key):l(t,e,r,i);case le:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(os(r)||Te(r))return c(t,e=e.get(n)||null,r,i,null);as(t,r)}return null}return function(a,l,u,c){var p="object"==typeof u&&null!==u&&u.type===ue&&null===u.key;p&&(u=u.props.children);var m="object"==typeof u&&null!==u;if(m)switch(u.$$typeof){case ae:e:{for(m=u.key,p=l;null!==p;){if(p.key===m){switch(p.tag){case 7:if(u.type===ue){n(a,p.sibling),(l=i(p,u.props.children)).return=a,a=l;break e}break;default:if(p.elementType===u.type){n(a,p.sibling),(l=i(p,u.props)).ref=ss(a,p,u),l.return=a,a=l;break e}}n(a,p);break}t(a,p),p=p.sibling}u.type===ue?((l=Nu(u.props.children,a.mode,c,u.key)).return=a,a=l):((c=Pu(u.type,u.key,u.props,null,a.mode,c)).ref=ss(a,l,u),c.return=a,a=c)}return s(a);case le:e:{for(p=u.key;null!==l;){if(l.key===p){if(4===l.tag&&l.stateNode.containerInfo===u.containerInfo&&l.stateNode.implementation===u.implementation){n(a,l.sibling),(l=i(l,u.children||[])).return=a,a=l;break e}n(a,l);break}t(a,l),l=l.sibling}(l=Du(u,a.mode,c)).return=a,a=l}return s(a)}if("string"==typeof u||"number"==typeof u)return u=""+u,null!==l&&6===l.tag?(n(a,l.sibling),(l=i(l,u)).return=a,a=l):(n(a,l),(l=Ou(u,a.mode,c)).return=a,a=l),s(a);if(os(u))return function(i,s,a,l){for(var u=null,c=null,p=s,m=s=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=h(i,p,a[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),s=o(y,s,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===a.length)return n(i,p),u;if(null===p){for(;m<a.length;m++)null!==(p=d(i,a[m],l))&&(s=o(p,s,m),null===c?u=p:c.sibling=p,c=p);return u}for(p=r(i,p);m<a.length;m++)null!==(g=f(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),s=o(g,s,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),u}(a,l,u,c);if(Te(u))return function(i,s,a,l){var u=Te(a);if("function"!=typeof u)throw Error(H(150));if(null==(a=u.call(a)))throw Error(H(151));for(var c=u=null,p=s,m=s=0,g=null,y=a.next();null!==p&&!y.done;m++,y=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var _=h(i,p,y.value,l);if(null===_){null===p&&(p=g);break}e&&p&&null===_.alternate&&t(i,p),s=o(_,s,m),null===c?u=_:c.sibling=_,c=_,p=g}if(y.done)return n(i,p),u;if(null===p){for(;!y.done;m++,y=a.next())null!==(y=d(i,y.value,l))&&(s=o(y,s,m),null===c?u=y:c.sibling=y,c=y);return u}for(p=r(i,p);!y.done;m++,y=a.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),s=o(y,s,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),u}(a,l,u,c);if(m&&as(a,u),void 0===u&&!p)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(H(152,Oe(a.type)||"Component"))}return n(a,l)}}var us=ls(!0),cs=ls(!1),ds={},hs=Hi(ds),fs=Hi(ds),ps=Hi(ds);function ms(e){if(e===ds)throw Error(H(174));return e}function gs(e,t){switch(Ki(ps,t),Ki(fs,e),Ki(hs,ds),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ze(null,"");break;default:t=Ze(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Vi(hs),Ki(hs,t)}function ys(){Vi(hs),Vi(fs),Vi(ps)}function _s(e){ms(ps.current);var t=ms(hs.current),n=Ze(t,e.type);t!==n&&(Ki(fs,e),Ki(hs,n))}function vs(e){fs.current===e&&(Vi(hs),Vi(fs))}var bs=Hi(0);function ws(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cs=null,ks=null,Es=!1;function Ss(e,t){var n=xu(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function xs(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Ts(e){if(Es){var t=ks;if(t){var n=t;if(!xs(e,t)){if(!(t=Ni(n.nextSibling))||!xs(e,t))return e.flags=-1025&e.flags|2,Es=!1,void(Cs=e);Ss(Cs,n)}Cs=e,ks=Ni(t.firstChild)}else e.flags=-1025&e.flags|2,Es=!1,Cs=e}}function Is(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Cs=e}function Ps(e){if(e!==Cs)return!1;if(!Es)return Is(e),Es=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!xi(t,e.memoizedProps))for(t=ks;t;)Ss(e,t),t=Ni(t.nextSibling);if(Is(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(H(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ks=Ni(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ks=null}}else ks=Cs?Ni(e.stateNode.nextSibling):null;return!0}function Ns(){ks=Cs=null,Es=!1}var Rs=[];function Os(){for(var e=0;e<Rs.length;e++)Rs[e]._workInProgressVersionPrimary=null;Rs.length=0}var Ds=se.ReactCurrentDispatcher,Ms=se.ReactCurrentBatchConfig,Ls=0,As=null,Fs=null,zs=null,js=!1,Us=!1;function $s(){throw Error(H(321))}function qs(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Vr(e[n],t[n]))return!1;return!0}function Ws(e,t,n,r,i,o){if(Ls=o,As=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ds.current=null===e||null===e.memoizedState?ma:ga,e=n(r,i),Us){o=0;do{if(Us=!1,!(25>o))throw Error(H(301));o+=1,zs=Fs=null,t.updateQueue=null,Ds.current=ya,e=n(r,i)}while(Us)}if(Ds.current=pa,t=null!==Fs&&null!==Fs.next,Ls=0,zs=Fs=As=null,js=!1,t)throw Error(H(300));return e}function Bs(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===zs?As.memoizedState=zs=e:zs=zs.next=e,zs}function Hs(){if(null===Fs){var e=As.alternate;e=null!==e?e.memoizedState:null}else e=Fs.next;var t=null===zs?As.memoizedState:zs.next;if(null!==t)zs=t,Fs=e;else{if(null===e)throw Error(H(310));e={memoizedState:(Fs=e).memoizedState,baseState:Fs.baseState,baseQueue:Fs.baseQueue,queue:Fs.queue,next:null},null===zs?As.memoizedState=zs=e:zs=zs.next=e}return zs}function Vs(e,t){return"function"==typeof t?t(e):t}function Ks(e){var t=Hs(),n=t.queue;if(null===n)throw Error(H(311));n.lastRenderedReducer=e;var r=Fs,i=r.baseQueue,o=n.pending;if(null!==o){if(null!==i){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var a=s=o=null,l=i;do{var u=l.lane;if((Ls&u)===u)null!==a&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};null===a?(s=a=c,o=r):a=a.next=c,As.lanes|=u,kl|=u}l=l.next}while(null!==l&&l!==i);null===a?o=r:a.next=s,Vr(r,t.memoizedState)||(va=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Qs(e){var t=Hs(),n=t.queue;if(null===n)throw Error(H(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{o=e(o,s.action),s=s.next}while(s!==i);Vr(o,t.memoizedState)||(va=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ys(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(null!==i?e=i===r:(e=e.mutableReadLanes,(e=(Ls&e)===e)&&(t._workInProgressVersionPrimary=r,Rs.push(t))),e)return n(t._source);throw Rs.push(t),Error(H(350))}function Gs(e,t,n,r){var i=ml;if(null===i)throw Error(H(349));var o=t._getVersion,s=o(t._source),a=Ds.current,l=a.useState((function(){return Ys(i,t,n)})),u=l[1],c=l[0];l=zs;var d=e.memoizedState,h=d.refs,f=h.getSnapshot,p=d.source;d=d.subscribe;var m=As;return e.memoizedState={refs:h,source:t,subscribe:r},a.useEffect((function(){h.getSnapshot=n,h.setSnapshot=u;var e=o(t._source);if(!Vr(s,e)){e=n(t._source),Vr(c,e)||(u(e),e=Yl(m),i.mutableReadLanes|=e&i.pendingLanes),e=i.mutableReadLanes,i.entangledLanes|=e;for(var r=i.entanglements,a=e;0<a;){var l=31-Nn(a),d=1<<l;r[l]|=e,a&=~d}}}),[n,t,r]),a.useEffect((function(){return r(t._source,(function(){var e=h.getSnapshot,n=h.setSnapshot;try{n(e(t._source));var r=Yl(m);i.mutableReadLanes|=r&i.pendingLanes}catch(o){n((function(){throw o}))}}))}),[t,r]),Vr(f,n)&&Vr(p,t)&&Vr(d,r)||((e={pending:null,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:c}).dispatch=u=fa.bind(null,As,e),l.queue=e,l.baseQueue=null,c=Ys(i,t,n),l.memoizedState=l.baseState=c),c}function Xs(e,t,n){return Gs(Hs(),e,t,n)}function Js(e){var t=Bs();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Vs,lastRenderedState:e}).dispatch=fa.bind(null,As,e),[t.memoizedState,e]}function Zs(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=As.updateQueue)?(t={lastEffect:null},As.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ea(e){return e={current:e},Bs().memoizedState=e}function ta(){return Hs().memoizedState}function na(e,t,n,r){var i=Bs();As.flags|=e,i.memoizedState=Zs(1|t,n,void 0,void 0===r?null:r)}function ra(e,t,n,r){var i=Hs();r=void 0===r?null:r;var o=void 0;if(null!==Fs){var s=Fs.memoizedState;if(o=s.destroy,null!==r&&qs(r,s.deps))return void Zs(t,n,o,r)}As.flags|=e,i.memoizedState=Zs(1|t,n,o,r)}function ia(e,t){return na(516,4,e,t)}function oa(e,t){return ra(516,4,e,t)}function sa(e,t){return ra(4,2,e,t)}function aa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function la(e,t,n){return n=null!=n?n.concat([e]):null,ra(4,2,aa.bind(null,t,e),n)}function ua(){}function ca(e,t){var n=Hs();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&qs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function da(e,t){var n=Hs();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&qs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ha(e,t){var n=To();Po(98>n?98:n,(function(){e(!0)})),Po(97<n?97:n,(function(){var n=Ms.transition;Ms.transition=1;try{e(!1),t()}finally{Ms.transition=n}}))}function fa(e,t,n){var r=Ql(),i=Yl(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(null===s?o.next=o:(o.next=s.next,s.next=o),t.pending=o,s=e.alternate,e===As||null!==s&&s===As)Us=js=!0;else{if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=s(a,n);if(o.eagerReducer=s,o.eagerState=l,Vr(l,a))return}catch(u){}Gl(e,i,r)}}var pa={readContext:Wo,useCallback:$s,useContext:$s,useEffect:$s,useImperativeHandle:$s,useLayoutEffect:$s,useMemo:$s,useReducer:$s,useRef:$s,useState:$s,useDebugValue:$s,useDeferredValue:$s,useTransition:$s,useMutableSource:$s,useOpaqueIdentifier:$s,unstable_isNewReconciler:!1},ma={readContext:Wo,useCallback:function(e,t){return Bs().memoizedState=[e,void 0===t?null:t],e},useContext:Wo,useEffect:ia,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,na(4,2,aa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return na(4,2,e,t)},useMemo:function(e,t){var n=Bs();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bs();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=fa.bind(null,As,e),[r.memoizedState,e]},useRef:ea,useState:Js,useDebugValue:ua,useDeferredValue:function(e){var t=Js(e),n=t[0],r=t[1];return ia((function(){var t=Ms.transition;Ms.transition=1;try{r(e)}finally{Ms.transition=t}}),[e]),n},useTransition:function(){var e=Js(!1),t=e[0];return ea(e=ha.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,n){var r=Bs();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Gs(r,e,t,n)},useOpaqueIdentifier:function(){if(Es){var e=!1,t=function(e){return{$$typeof:be,toString:e,valueOf:e}}((function(){throw e||(e=!0,n("r:"+(Oi++).toString(36))),Error(H(355))})),n=Js(t)[1];return 0==(2&As.mode)&&(As.flags|=516,Zs(5,(function(){n("r:"+(Oi++).toString(36))}),void 0,null)),t}return Js(t="r:"+(Oi++).toString(36)),t},unstable_isNewReconciler:!1},ga={readContext:Wo,useCallback:ca,useContext:Wo,useEffect:oa,useImperativeHandle:la,useLayoutEffect:sa,useMemo:da,useReducer:Ks,useRef:ta,useState:function(){return Ks(Vs)},useDebugValue:ua,useDeferredValue:function(e){var t=Ks(Vs),n=t[0],r=t[1];return oa((function(){var t=Ms.transition;Ms.transition=1;try{r(e)}finally{Ms.transition=t}}),[e]),n},useTransition:function(){var e=Ks(Vs)[0];return[ta().current,e]},useMutableSource:Xs,useOpaqueIdentifier:function(){return Ks(Vs)[0]},unstable_isNewReconciler:!1},ya={readContext:Wo,useCallback:ca,useContext:Wo,useEffect:oa,useImperativeHandle:la,useLayoutEffect:sa,useMemo:da,useReducer:Qs,useRef:ta,useState:function(){return Qs(Vs)},useDebugValue:ua,useDeferredValue:function(e){var t=Qs(Vs),n=t[0],r=t[1];return oa((function(){var t=Ms.transition;Ms.transition=1;try{r(e)}finally{Ms.transition=t}}),[e]),n},useTransition:function(){var e=Qs(Vs)[0];return[ta().current,e]},useMutableSource:Xs,useOpaqueIdentifier:function(){return Qs(Vs)[0]},unstable_isNewReconciler:!1},_a=se.ReactCurrentOwner,va=!1;function ba(e,t,n,r){t.child=null===e?cs(t,null,n,r):us(t,e.child,n,r)}function wa(e,t,n,r,i){n=n.render;var o=t.ref;return qo(t,i),r=Ws(e,t,n,r,o,i),null===e||va?(t.flags|=1,ba(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,$a(e,t,i))}function Ca(e,t,n,r,i,o){if(null===e){var s=n.type;return"function"!=typeof s||Tu(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Pu(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,ka(e,t,s,r,i,o))}return s=e.child,0==(i&o)&&(i=s.memoizedProps,(n=null!==(n=n.compare)?n:Qr)(i,r)&&e.ref===t.ref)?$a(e,t,o):(t.flags|=1,(e=Iu(s,r)).ref=t.ref,e.return=t,t.child=e)}function ka(e,t,n,r,i,o){if(null!==e&&Qr(e.memoizedProps,r)&&e.ref===t.ref){if(va=!1,0==(o&i))return t.lanes=e.lanes,$a(e,t,o);0!=(16384&e.flags)&&(va=!0)}return xa(e,t,n,r,o)}function Ea(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(0==(4&t.mode))t.memoizedState={baseLanes:0},iu(t,n);else{if(0==(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},iu(t,e),null;t.memoizedState={baseLanes:0},iu(t,null!==o?o.baseLanes:n)}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,iu(t,r);return ba(e,t,i,n),t.child}function Sa(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function xa(e,t,n,r,i){var o=Zi(n)?Xi:Yi.current;return o=Ji(t,o),qo(t,i),n=Ws(e,t,n,r,o,i),null===e||va?(t.flags|=1,ba(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,$a(e,t,i))}function Ta(e,t,n,r,i){if(Zi(n)){var o=!0;ro(t)}else o=!1;if(qo(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),ns(t,n,r),is(t,n,r,i),r=!0;else if(null===e){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;"object"==typeof u&&null!==u?u=Wo(u):u=Ji(t,u=Zi(n)?Xi:Yi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof s.getSnapshotBeforeUpdate;d||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==r||l!==u)&&rs(t,s,r,u),Bo=!1;var h=t.memoizedState;s.state=h,Go(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Gi.current||Bo?("function"==typeof c&&(Zo(t,n,c,r),l=t.memoizedState),(a=Bo||ts(t,n,a,r,h,l,u))?(d||"function"!=typeof s.UNSAFE_componentWillMount&&"function"!=typeof s.componentWillMount||("function"==typeof s.componentWillMount&&s.componentWillMount(),"function"==typeof s.UNSAFE_componentWillMount&&s.UNSAFE_componentWillMount()),"function"==typeof s.componentDidMount&&(t.flags|=4)):("function"==typeof s.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):("function"==typeof s.componentDidMount&&(t.flags|=4),r=!1)}else{s=t.stateNode,Vo(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Mo(t.type,a),s.props=u,d=t.pendingProps,h=s.context,"object"==typeof(l=n.contextType)&&null!==l?l=Wo(l):l=Ji(t,l=Zi(n)?Xi:Yi.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof s.getSnapshotBeforeUpdate)||"function"!=typeof s.UNSAFE_componentWillReceiveProps&&"function"!=typeof s.componentWillReceiveProps||(a!==d||h!==l)&&rs(t,s,r,l),Bo=!1,h=t.memoizedState,s.state=h,Go(t,r,s,i);var p=t.memoizedState;a!==d||h!==p||Gi.current||Bo?("function"==typeof f&&(Zo(t,n,f,r),p=t.memoizedState),(u=Bo||ts(t,n,u,r,h,p,l))?(c||"function"!=typeof s.UNSAFE_componentWillUpdate&&"function"!=typeof s.componentWillUpdate||("function"==typeof s.componentWillUpdate&&s.componentWillUpdate(r,p,l),"function"==typeof s.UNSAFE_componentWillUpdate&&s.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof s.componentDidUpdate&&(t.flags|=4),"function"==typeof s.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=p),s.props=r,s.state=p,s.context=l,r=u):("function"!=typeof s.componentDidUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),"function"!=typeof s.getSnapshotBeforeUpdate||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),r=!1)}return Ia(e,t,n,r,o,i)}function Ia(e,t,n,r,i,o){Sa(e,t);var s=0!=(64&t.flags);if(!r&&!s)return i&&io(t,n,!1),$a(e,t,o);r=t.stateNode,_a.current=t;var a=s&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&s?(t.child=us(t,e.child,null,o),t.child=us(t,null,a,o)):ba(e,t,a,o),t.memoizedState=r.state,i&&io(t,n,!0),t.child}function Pa(e){var t=e.stateNode;t.pendingContext?to(0,t.pendingContext,t.pendingContext!==t.context):t.context&&to(0,t.context,!1),gs(e,t.containerInfo)}var Na,Ra,Oa,Da={dehydrated:null,retryLane:0};function Ma(e,t,n){var r,i=t.pendingProps,o=bs.current,s=!1;return(r=0!=(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&0!=(2&o)),r?(s=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===i.fallback||!0===i.unstable_avoidThisFallback||(o|=1),Ki(bs,1&o),null===e?(void 0!==i.fallback&&Ts(t),e=i.children,o=i.fallback,s?(e=La(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Da,e):"number"==typeof i.unstable_expectedLoadTime?(e=La(t,e,o,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Da,t.lanes=33554432,e):((n=Ru({mode:"visible",children:e},t.mode,n,null)).return=t,t.child=n)):(e.memoizedState,s?(i=Fa(e,t,i.children,i.fallback,n),s=t.child,o=e.child.memoizedState,s.memoizedState=null===o?{baseLanes:n}:{baseLanes:o.baseLanes|n},s.childLanes=e.childLanes&~n,t.memoizedState=Da,i):(n=Aa(e,t,i.children,n),t.memoizedState=null,n))}function La(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},0==(2&i)&&null!==o?(o.childLanes=0,o.pendingProps=t):o=Ru(t,i,0,null),n=Nu(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function Aa(e,t,n,r){var i=e.child;return e=i.sibling,n=Iu(i,{mode:"visible",children:n}),0==(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Fa(e,t,n,r,i){var o=t.mode,s=e.child;e=s.sibling;var a={mode:"hidden",children:n};return 0==(2&o)&&t.child!==s?((n=t.child).childLanes=0,n.pendingProps=a,null!==(s=n.lastEffect)?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null):n=Iu(s,a),null!==e?r=Iu(e,r):(r=Nu(r,o,i,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function za(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),$o(e.return,t)}function ja(e,t,n,r,i,o){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=o)}function Ua(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ba(e,t,r.children,n),0!=(2&(r=bs.current)))r=1&r|2,t.flags|=64;else{if(null!==e&&0!=(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&za(e,n);else if(19===e.tag)za(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ki(bs,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ws(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ja(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ws(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ja(t,!0,n,null,o,t.lastEffect);break;case"together":ja(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function $a(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),kl|=t.lanes,0!=(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error(H(153));if(null!==t.child){for(n=Iu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Iu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}return null}function qa(e,t){if(!Es)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Wa(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Zi(t.type)&&eo(),null;case 3:return ys(),Vi(Gi),Vi(Yi),Os(),(r=t.stateNode).pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(Ps(t)?t.flags|=4:r.hydrate||(t.flags|=256)),null;case 5:vs(t);var i=ms(ps.current);if(n=t.type,null!==e&&null!=t.stateNode)Ra(e,t,n,r),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(null===t.stateNode)throw Error(H(166));return null}if(e=ms(hs.current),Ps(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Mi]=t,r[Li]=o,n){case"dialog":hi("cancel",r),hi("close",r);break;case"iframe":case"object":case"embed":hi("load",r);break;case"video":case"audio":for(e=0;e<li.length;e++)hi(li[e],r);break;case"source":hi("error",r);break;case"img":case"image":case"link":hi("error",r),hi("load",r);break;case"details":hi("toggle",r);break;case"input":je(r,o),hi("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},hi("invalid",r);break;case"textarea":Ke(r,o),hi("invalid",r)}for(var s in ut(n,o),e=null,o)o.hasOwnProperty(s)&&(i=o[s],"children"===s?"string"==typeof i?r.textContent!==i&&(e=["children",i]):"number"==typeof i&&r.textContent!==""+i&&(e=["children",""+i]):K.hasOwnProperty(s)&&null!=i&&"onScroll"===s&&hi("scroll",r));switch(n){case"input":Le(r),qe(r,o,!0);break;case"textarea":Le(r),Ye(r);break;case"select":case"option":break;default:"function"==typeof o.onClick&&(r.onclick=Ci)}r=e,t.updateQueue=r,null!==r&&(t.flags|=4)}else{switch(s=9===i.nodeType?i:i.ownerDocument,e===Ge&&(e=Je(n)),e===Ge?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Mi]=t,e[Li]=r,Na(e,t),t.stateNode=e,s=ct(n,r),n){case"dialog":hi("cancel",e),hi("close",e),i=r;break;case"iframe":case"object":case"embed":hi("load",e),i=r;break;case"video":case"audio":for(i=0;i<li.length;i++)hi(li[i],e);i=r;break;case"source":hi("error",e),i=r;break;case"img":case"image":case"link":hi("error",e),hi("load",e),i=r;break;case"details":hi("toggle",e),i=r;break;case"input":je(e,r),i=ze(e,r),hi("invalid",e);break;case"option":i=Be(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=W({},r,{value:void 0}),hi("invalid",e);break;case"textarea":Ke(e,r),i=Ve(e,r),hi("invalid",e);break;default:i=r}ut(n,i);var a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];"style"===o?at(e,l):"dangerouslySetInnerHTML"===o?null!=(l=l?l.__html:void 0)&&nt(e,l):"children"===o?"string"==typeof l?("textarea"!==n||""!==l)&&rt(e,l):"number"==typeof l&&rt(e,""+l):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(K.hasOwnProperty(o)?null!=l&&"onScroll"===o&&hi("scroll",e):null!=l&&oe(e,o,l,s))}switch(n){case"input":Le(e),qe(e,r,!1);break;case"textarea":Le(e),Ye(e);break;case"option":null!=r.value&&e.setAttribute("value",""+De(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?He(e,!!r.multiple,o,!1):null!=r.defaultValue&&He(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Ci)}Si(n,r)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Oa(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(H(166));n=ms(ps.current),ms(hs.current),Ps(t)?(r=t.stateNode,n=t.memoizedProps,r[Mi]=t,r.nodeValue!==n&&(t.flags|=4)):((r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Mi]=t,t.stateNode=r)}return null;case 13:return Vi(bs),r=t.memoizedState,0!=(64&t.flags)?(t.lanes=n,t):(r=null!==r,n=!1,null===e?void 0!==t.memoizedProps.fallback&&Ps(t):n=null!==e.memoizedState,r&&!n&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&bs.current)?0===bl&&(bl=3):(0!==bl&&3!==bl||(bl=4),null===ml||0==(134217727&kl)&&0==(134217727&El)||eu(ml,yl))),(r||n)&&(t.flags|=4),null);case 4:return ys(),null===e&&pi(t.stateNode.containerInfo),null;case 10:return Uo(t),null;case 17:return Zi(t.type)&&eo(),null;case 19:if(Vi(bs),null===(r=t.memoizedState))return null;if(o=0!=(64&t.flags),null===(s=r.rendering))if(o)qa(r,!1);else{if(0!==bl||null!==e&&0!=(64&e.flags))for(e=t.child;null!==e;){if(null!==(s=ws(e))){for(t.flags|=64,qa(r,!1),null!==(o=s.updateQueue)&&(t.updateQueue=o,t.flags|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ki(bs,1&bs.current|2),t.child}e=e.sibling}null!==r.tail&&xo()>Il&&(t.flags|=64,o=!0,qa(r,!1),t.lanes=33554432)}else{if(!o)if(null!==(e=ws(s))){if(t.flags|=64,o=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),qa(r,!0),null===r.tail&&"hidden"===r.tailMode&&!s.alternate&&!Es)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*xo()-r.renderingStartTime>Il&&1073741824!==n&&(t.flags|=64,o=!0,qa(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=r.last)?n.sibling=s:t.child=s,r.last=s)}return null!==r.tail?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=xo(),n.sibling=null,t=bs.current,Ki(bs,o?1&t|2:1&t),n):null;case 23:case 24:return ou(),null!==e&&null!==e.memoizedState!=(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4),null}throw Error(H(156,t.tag))}function Ba(e){switch(e.tag){case 1:Zi(e.type)&&eo();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(ys(),Vi(Gi),Vi(Yi),Os(),0!=(64&(t=e.flags)))throw Error(H(285));return e.flags=-4097&t|64,e;case 5:return vs(e),null;case 13:return Vi(bs),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return Vi(bs),null;case 4:return ys(),null;case 10:return Uo(e),null;case 23:case 24:return ou(),null;default:return null}}function Ha(e,t){try{var n="",r=t;do{n+=Re(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i}}function Va(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}Na=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ra=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ms(hs.current);var o,s=null;switch(n){case"input":i=ze(e,i),r=ze(e,r),s=[];break;case"option":i=Be(e,i),r=Be(e,r),s=[];break;case"select":i=W({},i,{value:void 0}),r=W({},r,{value:void 0}),s=[];break;case"textarea":i=Ve(e,i),r=Ve(e,r),s=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Ci)}for(u in ut(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(K.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(null!=l||null!=a))if("style"===u)if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(s=s||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(s=s||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(K.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&hi("scroll",e),s||a===l||(s=[])):"object"==typeof l&&null!==l&&l.$$typeof===be?l.toString():(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}},Oa=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ka="function"==typeof WeakMap?WeakMap:Map;function Qa(e,t,n){(n=Ko(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ol||(Ol=!0,Dl=r),Va(0,t)},n}function Ya(e,t,n){(n=Ko(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return Va(0,t),r(i)}}var o=e.stateNode;return null!==o&&"function"==typeof o.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Ml?Ml=new Set([this]):Ml.add(this),Va(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}var Ga="function"==typeof WeakSet?WeakSet:Set;function Xa(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(n){Cu(e,n)}else t.current=null}function Ja(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Mo(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&Pi(t.stateNode.containerInfo));case 5:case 6:case 4:case 17:return}throw Error(H(163))}function Za(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3==(3&e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var i=e;r=i.next,0!=(4&(i=i.tag))&&0!=(1&i)&&(vu(n,e),_u(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Mo(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=n.updateQueue)&&Xo(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Xo(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&Si(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&ln(n)))));case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(H(163))}function el(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)"function"==typeof(r=r.style).setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=null!=i&&i.hasOwnProperty("display")?i.display:null,r.style.display=st("display",i)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function tl(e,t){if(so&&"function"==typeof so.onCommitFiberUnmount)try{so.onCommitFiberUnmount(oo,t)}catch(o){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,void 0!==i)if(0!=(4&r))vu(t,n);else{r=t;try{i()}catch(o){Cu(r,o)}}n=n.next}while(n!==e)}break;case 1:if(Xa(t),"function"==typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){Cu(t,o)}break;case 5:Xa(t);break;case 4:al(e,t)}}function nl(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function rl(e){return 5===e.tag||3===e.tag||4===e.tag}function il(e){e:{for(var t=e.return;null!==t;){if(rl(t))break e;t=t.return}throw Error(H(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error(H(161))}16&n.flags&&(rt(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||rl(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?ol(e,n,t):sl(e,n,t)}function ol(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Ci));else if(4!==r&&null!==(e=e.child))for(ol(e,t,n),e=e.sibling;null!==e;)ol(e,t,n),e=e.sibling}function sl(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(sl(e,t,n),e=e.sibling;null!==e;)sl(e,t,n),e=e.sibling}function al(e,t){for(var n,r,i=t,o=!1;;){if(!o){o=i.return;e:for(;;){if(null===o)throw Error(H(160));switch(n=o.stateNode,o.tag){case 5:r=!1;break e;case 3:case 4:n=n.containerInfo,r=!0;break e}o=o.return}o=!0}if(5===i.tag||6===i.tag){e:for(var s=e,a=i,l=a;;)if(tl(s,l),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else{if(l===a)break e;for(;null===l.sibling;){if(null===l.return||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}r?(s=n,a=i.stateNode,8===s.nodeType?s.parentNode.removeChild(a):s.removeChild(a)):n.removeChild(i.stateNode)}else if(4===i.tag){if(null!==i.child){n=i.stateNode.containerInfo,r=!0,i.child.return=i,i=i.child;continue}}else if(tl(e,i),null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break;for(;null===i.sibling;){if(null===i.return||i.return===t)return;4===(i=i.return).tag&&(o=!1)}i.sibling.return=i.return,i=i.sibling}}function ll(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{3==(3&r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:return;case 5:if(null!=(n=t.stateNode)){r=t.memoizedProps;var i=null!==e?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,null!==o){for(n[Li]=r,"input"===e&&"radio"===r.type&&null!=r.name&&Ue(n,r),ct(e,i),t=ct(e,r),i=0;i<o.length;i+=2){var s=o[i],a=o[i+1];"style"===s?at(n,a):"dangerouslySetInnerHTML"===s?nt(n,a):"children"===s?rt(n,a):oe(n,s,a,t)}switch(e){case"input":$e(n,r);break;case"textarea":Qe(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(o=r.value)?He(n,!!r.multiple,o,!1):e!==!!r.multiple&&(null!=r.defaultValue?He(n,!!r.multiple,r.defaultValue,!0):He(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error(H(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((n=t.stateNode).hydrate&&(n.hydrate=!1,ln(n.containerInfo)));case 12:return;case 13:return null!==t.memoizedState&&(Tl=xo(),el(t.child,!0)),void ul(t);case 19:return void ul(t);case 17:return;case 23:case 24:return void el(t,null!==t.memoizedState)}throw Error(H(163))}function ul(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ga),t.forEach((function(t){var r=Eu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function cl(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var dl=Math.ceil,hl=se.ReactCurrentDispatcher,fl=se.ReactCurrentOwner,pl=0,ml=null,gl=null,yl=0,_l=0,vl=Hi(0),bl=0,wl=null,Cl=0,kl=0,El=0,Sl=0,xl=null,Tl=0,Il=1/0;function Pl(){Il=xo()+500}var Nl,Rl=null,Ol=!1,Dl=null,Ml=null,Ll=!1,Al=null,Fl=90,zl=[],jl=[],Ul=null,$l=0,ql=null,Wl=-1,Bl=0,Hl=0,Vl=null,Kl=!1;function Ql(){return 0!=(48&pl)?xo():-1!==Wl?Wl:Wl=xo()}function Yl(e){if(0==(2&(e=e.mode)))return 1;if(0==(4&e))return 99===To()?1:2;if(0===Bl&&(Bl=Cl),0!==Do.transition){0!==Hl&&(Hl=null!==xl?xl.pendingLanes:0),e=Bl;var t=4186112&~Hl;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=To(),0!=(4&pl)&&98===e?e=xn(12,Bl):e=xn(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),Bl),e}function Gl(e,t,n){if(50<$l)throw $l=0,ql=null,Error(H(185));if(null===(e=Xl(e,t)))return null;Pn(e,t,n),e===ml&&(El|=t,4===bl&&eu(e,yl));var r=To();1===t?0!=(8&pl)&&0==(48&pl)?tu(e):(Jl(e,n),0===pl&&(Pl(),Ro())):(0==(4&pl)||98!==r&&99!==r||(null===Ul?Ul=new Set([e]):Ul.add(e)),Jl(e,n)),xl=e}function Xl(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function Jl(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Nn(s),l=1<<a,u=o[a];if(-1===u){if(0==(l&r)||0!=(l&i)){u=t,kn(l);var c=Cn;o[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=t&&(e.expiredLanes|=l);s&=~l}if(r=En(e,e===ml?yl:0),t=Cn,0===r)null!==n&&(n!==bo&&uo(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==bo&&uo(n)}15===t?(n=tu.bind(null,e),null===Co?(Co=[n],ko=lo(mo,Oo)):Co.push(n),n=bo):14===t?n=No(99,tu.bind(null,e)):n=No(n=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(H(358,e))}}(t),Zl.bind(null,e)),e.callbackPriority=t,e.callbackNode=n}}function Zl(e){if(Wl=-1,Hl=Bl=0,0!=(48&pl))throw Error(H(327));var t=e.callbackNode;if(yu()&&e.callbackNode!==t)return null;var n=En(e,e===ml?yl:0);if(0===n)return null;var r=n,i=pl;pl|=16;var o=lu();for(ml===e&&yl===r||(Pl(),su(e,r));;)try{du();break}catch(Bd){au(e,Bd)}if(jo(),hl.current=o,pl=i,null!==gl?r=0:(ml=null,yl=0,r=bl),0!=(Cl&El))su(e,0);else if(0!==r){if(2===r&&(pl|=64,e.hydrate&&(e.hydrate=!1,Pi(e.containerInfo)),0!==(n=Sn(e))&&(r=uu(e,n))),1===r)throw t=wl,su(e,0),eu(e,n),Jl(e,xo()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(H(345));case 2:pu(e);break;case 3:if(eu(e,n),(62914560&n)===n&&10<(r=Tl+500-xo())){if(0!==En(e,0))break;if(((i=e.suspendedLanes)&n)!==n){Ql(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ti(pu.bind(null,e),r);break}pu(e);break;case 4:if(eu(e,n),(4186112&n)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-Nn(n);o=1<<s,(s=r[s])>i&&(i=s),n&=~o}if(n=i,10<(n=(120>(n=xo()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*dl(n/1960))-n)){e.timeoutHandle=Ti(pu.bind(null,e),n);break}pu(e);break;case 5:pu(e);break;default:throw Error(H(329))}}return Jl(e,xo()),e.callbackNode===t?Zl.bind(null,e):null}function eu(e,t){for(t&=~Sl,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Nn(t),r=1<<n;e[n]=-1,t&=~r}}function tu(e){if(0!=(48&pl))throw Error(H(327));if(yu(),e===ml&&0!=(e.expiredLanes&yl)){var t=yl,n=uu(e,t);0!=(Cl&El)&&(n=uu(e,t=En(e,t)))}else n=uu(e,t=En(e,0));if(0!==e.tag&&2===n&&(pl|=64,e.hydrate&&(e.hydrate=!1,Pi(e.containerInfo)),0!==(t=Sn(e))&&(n=uu(e,t))),1===n)throw n=wl,su(e,0),eu(e,t),Jl(e,xo()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,pu(e),Jl(e,xo()),null}function nu(e,t){var n=pl;pl|=1;try{return e(t)}finally{0===(pl=n)&&(Pl(),Ro())}}function ru(e,t){var n=pl;pl&=-2,pl|=8;try{return e(t)}finally{0===(pl=n)&&(Pl(),Ro())}}function iu(e,t){Ki(vl,_l),_l|=t,Cl|=t}function ou(){_l=vl.current,Vi(vl)}function su(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,Ii(n)),null!==gl)for(n=gl.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&eo();break;case 3:ys(),Vi(Gi),Vi(Yi),Os();break;case 5:vs(r);break;case 4:ys();break;case 13:case 19:Vi(bs);break;case 10:Uo(r);break;case 23:case 24:ou()}n=n.return}ml=e,gl=Iu(e.current,null),yl=_l=Cl=t,bl=0,wl=null,Sl=El=kl=0}function au(e,t){for(;;){var n=gl;try{if(jo(),Ds.current=pa,js){for(var r=As.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}js=!1}if(Ls=0,zs=Fs=As=null,Us=!1,fl.current=null,null===n||null===n.return){bl=1,wl=t,gl=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=yl,a.flags|=2048,a.firstEffect=a.lastEffect=null,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l;if(0==(2&a.mode)){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var d=0!=(1&bs.current),h=s;do{var f;if(f=13===h.tag){var p=h.memoizedState;if(null!==p)f=null!==p.dehydrated;else{var m=h.memoizedProps;f=void 0!==m.fallback&&(!0!==m.unstable_avoidThisFallback||!d)}}if(f){var g=h.updateQueue;if(null===g){var y=new Set;y.add(u),h.updateQueue=y}else g.add(u);if(0==(2&h.mode)){if(h.flags|=64,a.flags|=16384,a.flags&=-2981,1===a.tag)if(null===a.alternate)a.tag=17;else{var _=Ko(-1,1);_.tag=2,Qo(a,_)}a.lanes|=1;break e}l=void 0,a=t;var v=o.pingCache;if(null===v?(v=o.pingCache=new Ka,l=new Set,v.set(u,l)):void 0===(l=v.get(u))&&(l=new Set,v.set(u,l)),!l.has(a)){l.add(a);var b=ku.bind(null,o,u,a);u.then(b,b)}h.flags|=4096,h.lanes=t;break e}h=h.return}while(null!==h);l=Error((Oe(a.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==bl&&(bl=2),l=Ha(l,a),h=s;do{switch(h.tag){case 3:o=l,h.flags|=4096,t&=-t,h.lanes|=t,Yo(h,Qa(0,o,t));break e;case 1:o=l;var w=h.type,C=h.stateNode;if(0==(64&h.flags)&&("function"==typeof w.getDerivedStateFromError||null!==C&&"function"==typeof C.componentDidCatch&&(null===Ml||!Ml.has(C)))){h.flags|=4096,t&=-t,h.lanes|=t,Yo(h,Ya(h,o,t));break e}}h=h.return}while(null!==h)}fu(n)}catch(k){t=k,gl===n&&null!==n&&(gl=n=n.return);continue}break}}function lu(){var e=hl.current;return hl.current=pa,null===e?pa:e}function uu(e,t){var n=pl;pl|=16;var r=lu();for(ml===e&&yl===t||su(e,t);;)try{cu();break}catch(i){au(e,i)}if(jo(),pl=n,hl.current=r,null!==gl)throw Error(H(261));return ml=null,yl=0,bl}function cu(){for(;null!==gl;)hu(gl)}function du(){for(;null!==gl&&!co();)hu(gl)}function hu(e){var t=Nl(e.alternate,e,_l);e.memoizedProps=e.pendingProps,null===t?fu(e):gl=t,fl.current=null}function fu(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(2048&t.flags)){if(null!==(n=Wa(n,t,_l)))return void(gl=n);if(24!==(n=t).tag&&23!==n.tag||null===n.memoizedState||0!=(1073741824&_l)||0==(4&n.mode)){for(var r=0,i=n.child;null!==i;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}null!==e&&0==(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(n=Ba(t)))return n.flags&=2047,void(gl=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(gl=t);gl=t=e}while(null!==t);0===bl&&(bl=5)}function pu(e){var t=To();return Po(99,mu.bind(null,e,t)),null}function mu(e,t){do{yu()}while(null!==Al);if(0!=(48&pl))throw Error(H(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(H(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,a=e.expirationTimes;0<o;){var l=31-Nn(o),u=1<<l;i[l]=0,s[l]=-1,a[l]=-1,o&=~u}if(null!==Ul&&0==(24&r)&&Ul.has(e)&&Ul.delete(e),e===ml&&(gl=ml=null,yl=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(i=pl,pl|=32,fl.current=null,ki=Ln,Zr(s=Jr())){if("selectionStart"in s)a={start:s.selectionStart,end:s.selectionEnd};else e:if(a=(a=s.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&0!==u.rangeCount){a=u.anchorNode,o=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch(S){a=null;break e}var c=0,d=-1,h=-1,f=0,p=0,m=s,g=null;t:for(;;){for(var y;m!==a||0!==o&&3!==m.nodeType||(d=c+o),m!==l||0!==u&&3!==m.nodeType||(h=c+u),3===m.nodeType&&(c+=m.nodeValue.length),null!==(y=m.firstChild);)g=m,m=y;for(;;){if(m===s)break t;if(g===a&&++f===o&&(d=c),g===l&&++p===u&&(h=c),null!==(y=m.nextSibling))break;g=(m=g).parentNode}m=y}a=-1===d||-1===h?null:{start:d,end:h}}else a=null;a=a||{start:0,end:0}}else a=null;Ei={focusedElem:s,selectionRange:a},Ln=!1,Vl=null,Kl=!1,Rl=r;do{try{gu()}catch(S){if(null===Rl)throw Error(H(330));Cu(Rl,S),Rl=Rl.nextEffect}}while(null!==Rl);Vl=null,Rl=r;do{try{for(s=e;null!==Rl;){var _=Rl.flags;if(16&_&&rt(Rl.stateNode,""),128&_){var v=Rl.alternate;if(null!==v){var b=v.ref;null!==b&&("function"==typeof b?b(null):b.current=null)}}switch(1038&_){case 2:il(Rl),Rl.flags&=-3;break;case 6:il(Rl),Rl.flags&=-3,ll(Rl.alternate,Rl);break;case 1024:Rl.flags&=-1025;break;case 1028:Rl.flags&=-1025,ll(Rl.alternate,Rl);break;case 4:ll(Rl.alternate,Rl);break;case 8:al(s,a=Rl);var w=a.alternate;nl(a),null!==w&&nl(w)}Rl=Rl.nextEffect}}catch(S){if(null===Rl)throw Error(H(330));Cu(Rl,S),Rl=Rl.nextEffect}}while(null!==Rl);if(b=Ei,v=Jr(),_=b.focusedElem,s=b.selectionRange,v!==_&&_&&_.ownerDocument&&Xr(_.ownerDocument.documentElement,_)){null!==s&&Zr(_)&&(v=s.start,void 0===(b=s.end)&&(b=v),"selectionStart"in _?(_.selectionStart=v,_.selectionEnd=Math.min(b,_.value.length)):(b=(v=_.ownerDocument||document)&&v.defaultView||window).getSelection&&(b=b.getSelection(),a=_.textContent.length,w=Math.min(s.start,a),s=void 0===s.end?w:Math.min(s.end,a),!b.extend&&w>s&&(a=s,s=w,w=a),a=Gr(_,w),o=Gr(_,s),a&&o&&(1!==b.rangeCount||b.anchorNode!==a.node||b.anchorOffset!==a.offset||b.focusNode!==o.node||b.focusOffset!==o.offset)&&((v=v.createRange()).setStart(a.node,a.offset),b.removeAllRanges(),w>s?(b.addRange(v),b.extend(o.node,o.offset)):(v.setEnd(o.node,o.offset),b.addRange(v))))),v=[];for(b=_;b=b.parentNode;)1===b.nodeType&&v.push({element:b,left:b.scrollLeft,top:b.scrollTop});for("function"==typeof _.focus&&_.focus(),_=0;_<v.length;_++)(b=v[_]).element.scrollLeft=b.left,b.element.scrollTop=b.top}Ln=!!ki,Ei=ki=null,e.current=n,Rl=r;do{try{for(_=e;null!==Rl;){var C=Rl.flags;if(36&C&&Za(_,Rl.alternate,Rl),128&C){v=void 0;var k=Rl.ref;if(null!==k){var E=Rl.stateNode;switch(Rl.tag){case 5:v=E;break;default:v=E}"function"==typeof k?k(v):k.current=v}}Rl=Rl.nextEffect}}catch(S){if(null===Rl)throw Error(H(330));Cu(Rl,S),Rl=Rl.nextEffect}}while(null!==Rl);Rl=null,wo(),pl=i}else e.current=n;if(Ll)Ll=!1,Al=e,Fl=t;else for(Rl=r;null!==Rl;)t=Rl.nextEffect,Rl.nextEffect=null,8&Rl.flags&&((C=Rl).sibling=null,C.stateNode=null),Rl=t;if(0===(r=e.pendingLanes)&&(Ml=null),1===r?e===ql?$l++:($l=0,ql=e):$l=0,n=n.stateNode,so&&"function"==typeof so.onCommitFiberRoot)try{so.onCommitFiberRoot(oo,n,void 0,64==(64&n.current.flags))}catch(S){}if(Jl(e,xo()),Ol)throw Ol=!1,e=Dl,Dl=null,e;return 0!=(8&pl)||Ro(),null}function gu(){for(;null!==Rl;){var e=Rl.alternate;Kl||null===Vl||(0!=(8&Rl.flags)?jt(Rl,Vl)&&(Kl=!0):13===Rl.tag&&cl(e,Rl)&&jt(Rl,Vl)&&(Kl=!0));var t=Rl.flags;0!=(256&t)&&Ja(e,Rl),0==(512&t)||Ll||(Ll=!0,No(97,(function(){return yu(),null}))),Rl=Rl.nextEffect}}function yu(){if(90!==Fl){var e=97<Fl?97:Fl;return Fl=90,Po(e,bu)}return!1}function _u(e,t){zl.push(t,e),Ll||(Ll=!0,No(97,(function(){return yu(),null})))}function vu(e,t){jl.push(t,e),Ll||(Ll=!0,No(97,(function(){return yu(),null})))}function bu(){if(null===Al)return!1;var e=Al;if(Al=null,0!=(48&pl))throw Error(H(331));var t=pl;pl|=32;var n=jl;jl=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],s=i.destroy;if(i.destroy=void 0,"function"==typeof s)try{s()}catch(l){if(null===o)throw Error(H(330));Cu(o,l)}}for(n=zl,zl=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(null===o)throw Error(H(330));Cu(o,l)}}for(a=e.current.firstEffect;null!==a;)e=a.nextEffect,a.nextEffect=null,8&a.flags&&(a.sibling=null,a.stateNode=null),a=e;return pl=t,Ro(),!0}function wu(e,t,n){Qo(e,t=Qa(0,t=Ha(n,t),1)),t=Ql(),null!==(e=Xl(e,1))&&(Pn(e,1,t),Jl(e,t))}function Cu(e,t){if(3===e.tag)wu(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){wu(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Ml||!Ml.has(r))){var i=Ya(n,e=Ha(t,e),1);if(Qo(n,i),i=Ql(),null!==(n=Xl(n,1)))Pn(n,1,i),Jl(n,i);else if("function"==typeof r.componentDidCatch&&(null===Ml||!Ml.has(r)))try{r.componentDidCatch(t,e)}catch(o){}break}}n=n.return}}function ku(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Ql(),e.pingedLanes|=e.suspendedLanes&n,ml===e&&(yl&n)===n&&(4===bl||3===bl&&(62914560&yl)===yl&&500>xo()-Tl?su(e,0):Sl|=n),Jl(e,t)}function Eu(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(0==(2&(t=e.mode))?t=1:0==(4&t)?t=99===To()?1:2:(0===Bl&&(Bl=Cl),0===(t=Tn(62914560&~Bl))&&(t=4194304))),n=Ql(),null!==(e=Xl(e,t))&&(Pn(e,t,n),Jl(e,n))}function Su(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function xu(e,t,n,r){return new Su(e,t,n,r)}function Tu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Iu(e,t){var n=e.alternate;return null===n?((n=xu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pu(e,t,n,r,i,o){var s=2;if(r=e,"function"==typeof e)Tu(e)&&(s=1);else if("string"==typeof e)s=5;else e:switch(e){case ue:return Nu(n.children,i,o,t);case we:s=8,i|=16;break;case ce:s=8,i|=1;break;case de:return(e=xu(12,n,t,8|i)).elementType=de,e.type=de,e.lanes=o,e;case me:return(e=xu(13,n,t,i)).type=me,e.elementType=me,e.lanes=o,e;case ge:return(e=xu(19,n,t,i)).elementType=ge,e.lanes=o,e;case Ce:return Ru(n,i,o,t);case ke:return(e=xu(24,n,t,i)).elementType=ke,e.lanes=o,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case he:s=10;break e;case fe:s=9;break e;case pe:s=11;break e;case ye:s=14;break e;case _e:s=16,r=null;break e;case ve:s=22;break e}throw Error(H(130,null==e?e:typeof e,""))}return(t=xu(s,n,t,i)).elementType=e,t.type=r,t.lanes=o,t}function Nu(e,t,n,r){return(e=xu(7,e,r,t)).lanes=n,e}function Ru(e,t,n,r){return(e=xu(23,e,r,t)).elementType=Ce,e.lanes=n,e}function Ou(e,t,n){return(e=xu(6,e,null,t)).lanes=n,e}function Du(e,t,n){return(t=xu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mu(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=In(0),this.expirationTimes=In(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.mutableSourceEagerHydrationData=null}function Lu(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:le,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Au(e,t,n,r){var i=t.current,o=Ql(),s=Yl(i);e:if(n){t:{if(Lt(n=n._reactInternals)!==n||1!==n.tag)throw Error(H(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Zi(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(null!==a);throw Error(H(171))}if(1===n.tag){var l=n.type;if(Zi(l)){n=no(n,l,a);break e}}n=a}else n=Qi;return null===t.context?t.context=n:t.pendingContext=n,(t=Ko(o,s)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),Qo(i,t),Gl(i,s,o),s}function Fu(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function zu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ju(e,t){zu(e,t),(e=e.alternate)&&zu(e,t)}function Uu(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new Mu(e,t,null!=n&&!0===n.hydrate),t=xu(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,Ho(t),e[Ai]=n.current,pi(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){var i=(t=r[e])._getVersion;i=i(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}function $u(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function qu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o._internalRoot;if("function"==typeof i){var a=i;i=function(){var e=Fu(s);a.call(e)}}Au(t,s,e,i)}else{if(o=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Uu(e,0,t?{hydrate:!0}:void 0)}(n,r),s=o._internalRoot,"function"==typeof i){var l=i;i=function(){var e=Fu(s);l.call(e)}}ru((function(){Au(t,s,e,i)}))}return Fu(s)}function Wu(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!$u(t))throw Error(H(200));return Lu(e,t,null,n)}Nl=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||Gi.current)va=!0;else{if(0==(n&r)){switch(va=!1,t.tag){case 3:Pa(t),Ns();break;case 5:_s(t);break;case 1:Zi(t.type)&&ro(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;Ki(Lo,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!=(n&t.child.childLanes)?Ma(e,t,n):(Ki(bs,1&bs.current),null!==(t=$a(e,t,n))?t.sibling:null);Ki(bs,1&bs.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(64&e.flags)){if(r)return Ua(e,t,n);t.flags|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ki(bs,bs.current),r)break;return null;case 23:case 24:return t.lanes=0,Ea(e,t,n)}return $a(e,t,n)}va=0!=(16384&e.flags)}else va=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Ji(t,Yi.current),qo(t,n),i=Ws(null,t,r,e,i,n),t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zi(r)){var o=!0;ro(t)}else o=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Ho(t);var s=r.getDerivedStateFromProps;"function"==typeof s&&Zo(t,r,s,e),i.updater=es,t.stateNode=i,i._reactInternals=t,is(t,r,e,n),t=Ia(null,t,r,!0,o,n)}else t.tag=0,ba(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=(o=i._init)(i._payload),t.type=i,o=t.tag=function(e){if("function"==typeof e)return Tu(e)?1:0;if(null!=e){if((e=e.$$typeof)===pe)return 11;if(e===ye)return 14}return 2}(i),e=Mo(i,e),o){case 0:t=xa(null,t,i,e,n);break e;case 1:t=Ta(null,t,i,e,n);break e;case 11:t=wa(null,t,i,e,n);break e;case 14:t=Ca(null,t,i,Mo(i.type,e),r,n);break e}throw Error(H(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,xa(e,t,r,i=t.elementType===r?i:Mo(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ta(e,t,r,i=t.elementType===r?i:Mo(r,i),n);case 3:if(Pa(t),r=t.updateQueue,null===e||null===r)throw Error(H(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,Vo(e,t),Go(t,r,null,n),(r=t.memoizedState.element)===i)Ns(),t=$a(e,t,n);else{if((o=(i=t.stateNode).hydrate)&&(ks=Ni(t.stateNode.containerInfo.firstChild),Cs=t,o=Es=!0),o){if(null!=(e=i.mutableSourceEagerHydrationData))for(i=0;i<e.length;i+=2)(o=e[i])._workInProgressVersionPrimary=e[i+1],Rs.push(o);for(n=cs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else ba(e,t,r,n),Ns();t=t.child}return t;case 5:return _s(t),null===e&&Ts(t),r=t.type,i=t.pendingProps,o=null!==e?e.memoizedProps:null,s=i.children,xi(r,i)?s=null:null!==o&&xi(r,o)&&(t.flags|=16),Sa(e,t),ba(e,t,s,n),t.child;case 6:return null===e&&Ts(t),null;case 13:return Ma(e,t,n);case 4:return gs(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=us(t,null,r,n):ba(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wa(e,t,r,i=t.elementType===r?i:Mo(r,i),n);case 7:return ba(e,t,t.pendingProps,n),t.child;case 8:case 12:return ba(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value;var a=t.type._context;if(Ki(Lo,a._currentValue),a._currentValue=o,null!==s)if(a=s.value,0===(o=Vr(a,o)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(a,o):1073741823))){if(s.children===i.children&&!Gi.current){t=$a(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var u=l.firstContext;null!==u;){if(u.context===r&&0!=(u.observedBits&o)){1===a.tag&&((u=Ko(-1,n&-n)).tag=2,Qo(a,u)),a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),$o(a.return,n),l.lanes|=n;break}u=u.next}}else s=10===a.tag&&a.type===t.type?null:a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}ba(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(o=t.pendingProps).children,qo(t,n),r=r(i=Wo(i,o.unstable_observedBits)),t.flags|=1,ba(e,t,r,n),t.child;case 14:return o=Mo(i=t.type,t.pendingProps),Ca(e,t,i,o=Mo(i.type,o),r,n);case 15:return ka(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Mo(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Zi(r)?(e=!0,ro(t)):e=!1,qo(t,n),ns(t,r,i),is(t,r,i,n),Ia(null,t,r,!0,e,n);case 19:return Ua(e,t,n);case 23:case 24:return Ea(e,t,n)}throw Error(H(156,t.tag))},Uu.prototype.render=function(e){Au(e,this._internalRoot,null,null)},Uu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Au(null,e,null,(function(){t[Ai]=null}))},Ut=function(e){13===e.tag&&(Gl(e,4,Ql()),ju(e,4))},$t=function(e){13===e.tag&&(Gl(e,67108864,Ql()),ju(e,67108864))},qt=function(e){if(13===e.tag){var t=Ql(),n=Yl(e);Gl(e,n,t),ju(e,n)}},Wt=function(e,t){return t()},ht=function(e,t,n){switch(t){case"input":if($e(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=$i(r);if(!i)throw Error(H(90));Ae(r),$e(r,i)}}}break;case"textarea":Qe(e,n);break;case"select":null!=(t=n.value)&&He(e,!!n.multiple,t,!1)}},_t=nu,vt=function(e,t,n,r,i){var o=pl;pl|=4;try{return Po(98,e.bind(null,t,n,r,i))}finally{0===(pl=o)&&(Pl(),Ro())}},bt=function(){0==(49&pl)&&(function(){if(null!==Ul){var e=Ul;Ul=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,Jl(e,xo())}))}Ro()}(),yu())},wt=function(e,t){var n=pl;pl|=2;try{return e(t)}finally{0===(pl=n)&&(Pl(),Ro())}};var Bu={Events:[ji,Ui,$i,gt,yt,yu,{current:!1}]},Hu={findFiberByHostInstance:zi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Vu={bundleType:Hu.bundleType,version:Hu.version,rendererPackageName:Hu.rendererPackageName,rendererConfig:Hu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:se.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=zt(e))?null:e.stateNode},findFiberByHostInstance:Hu.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{oo=Ku.inject(Vu),so=Ku}catch(tt){}}j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bu,j.createPortal=Wu,j.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(H(188));throw Error(H(268,Object.keys(e)))}return e=null===(e=zt(t))?null:e.stateNode},j.flushSync=function(e,t){var n=pl;if(0!=(48&n))return e(t);pl|=1;try{if(e)return Po(99,e.bind(null,t))}finally{pl=n,Ro()}},j.hydrate=function(e,t,n){if(!$u(t))throw Error(H(200));return qu(null,e,t,!0,n)},j.render=function(e,t,n){if(!$u(t))throw Error(H(200));return qu(null,e,t,!1,n)},j.unmountComponentAtNode=function(e){if(!$u(e))throw Error(H(40));return!!e._reactRootContainer&&(ru((function(){qu(null,null,e,!1,(function(){e._reactRootContainer=null,e[Ai]=null}))})),!0)},j.unstable_batchedUpdates=nu,j.unstable_createPortal=function(e,t){return Wu(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},j.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$u(n))throw Error(H(200));if(null==e||void 0===e._reactInternals)throw Error(H(38));return qu(e,t,n,!1,r)},j.version="17.0.2",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),z.exports=j;var Qu=z.exports;function Yu(e,t){return(Yu=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Gu(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Yu(e,t)}var Xu={exports:{}};function Ju(){}function Zu(){}Zu.resetWarningCache=Ju;Xu.exports=function(){function e(e,t,n,r,i,o){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Zu,resetWarningCache:Ju};return n.PropTypes=n,n}();var ec=Xu.exports;function tc(){return(tc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function nc(e){return"/"===e.charAt(0)}function rc(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}function ic(e,t){if(!e)throw new Error("Invariant failed")}function oc(e){var t=e.pathname,n=e.search,r=e.hash,i=t||"/";return n&&"?"!==n&&(i+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(i+="#"===r.charAt(0)?r:"#"+r),i}function sc(e,t,n,r){var i;"string"==typeof e?(i=function(e){var t=e||"/",n="",r="",i=t.indexOf("#");-1!==i&&(r=t.substr(i),t=t.substr(0,i));var o=t.indexOf("?");return-1!==o&&(n=t.substr(o),t=t.substr(0,o)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(i=tc({},e)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(o){throw o instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):o}return n&&(i.key=n),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],i=t&&t.split("/")||[],o=e&&nc(e),s=t&&nc(t),a=o||s;if(e&&nc(e)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";if(i.length){var l=i[i.length-1];n="."===l||".."===l||""===l}else n=!1;for(var u=0,c=i.length;c>=0;c--){var d=i[c];"."===d?rc(i,c):".."===d?(rc(i,c),u++):u&&(rc(i,c),u--)}if(!a)for(;u--;u)i.unshift("..");!a||""===i[0]||i[0]&&nc(i[0])||i.unshift("");var h=i.join("/");return n&&"/"!==h.substr(-1)&&(h+="/"),h}(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function ac(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,i){if(null!=e){var o="function"==typeof e?e(t,n):e;"string"==typeof o?"function"==typeof r?r(o,i):i(!0):i(!1!==o)}else i(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}"undefined"==typeof window||!window.document||window.document.createElement;function lc(e,t,n){return Math.min(Math.max(e,t),n)}function uc(e){void 0===e&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,i=void 0===r?["/"]:r,o=t.initialIndex,s=void 0===o?0:o,a=t.keyLength,l=void 0===a?6:a,u=ac();function c(e){tc(g,e),g.length=g.entries.length,u.notifyListeners(g.location,g.action)}function d(){return Math.random().toString(36).substr(2,l)}var h=lc(s,0,i.length-1),f=i.map((function(e){return sc(e,void 0,"string"==typeof e?d():e.key||d())})),p=oc;function m(e){var t=lc(g.index+e,0,g.entries.length-1),r=g.entries[t];u.confirmTransitionTo(r,"POP",n,(function(e){e?c({action:"POP",location:r,index:t}):c()}))}var g={length:f.length,action:"POP",location:f[h],index:h,entries:f,createHref:p,push:function(e,t){var r="PUSH",i=sc(e,t,d(),g.location);u.confirmTransitionTo(i,r,n,(function(e){if(e){var t=g.index+1,n=g.entries.slice(0);n.length>t?n.splice(t,n.length-t,i):n.push(i),c({action:r,location:i,index:t,entries:n})}}))},replace:function(e,t){var r="REPLACE",i=sc(e,t,d(),g.location);u.confirmTransitionTo(i,r,n,(function(e){e&&(g.entries[g.index]=i,c({action:r,location:i}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(e){var t=g.index+e;return t>=0&&t<g.entries.length},block:function(e){return void 0===e&&(e=!1),u.setPrompt(e)},listen:function(e){return u.appendListener(e)}};return g}var cc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function dc(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var hc=F.createContext||function(t,n){var r,i,o,s="__create-react-context-"+((cc[o="__global_unique_id__"]=(cc[o]||0)+1)+"__"),a=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).emitter=dc(t.props.value),t}Gu(t,e);var r=t.prototype;return r.getChildContext=function(){var e;return(e={})[s]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var t,r=this.props.value,i=e.value;((o=r)===(s=i)?0!==o||1/o==1/s:o!=o&&s!=s)?t=0:(t="function"==typeof n?n(r,i):1073741823,0!==(t|=0)&&this.emitter.set(e.value,t))}var o,s},r.render=function(){return this.props.children},t}(e.exports.Component);a.childContextTypes=((r={})[s]=ec.object.isRequired,r);var l=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Gu(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},r.componentDidMount=function(){this.context[s]&&this.context[s].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},r.componentWillUnmount=function(){this.context[s]&&this.context[s].off(this.onUpdate)},r.getValue=function(){return this.context[s]?this.context[s].get():t},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(e.exports.Component);return l.contextTypes=((i={})[s]=ec.object,i),{Provider:a,Consumer:l}},fc={exports:{}},pc=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};fc.exports=Ec,fc.exports.parse=gc,fc.exports.compile=function(e,t){return _c(gc(e,t),t)},fc.exports.tokensToFunction=_c,fc.exports.tokensToRegExp=kc;var mc=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function gc(e,t){for(var n,r=[],i=0,o=0,s="",a=t&&t.delimiter||"/";null!=(n=mc.exec(e));){var l=n[0],u=n[1],c=n.index;if(s+=e.slice(o,c),o=c+l.length,u)s+=u[1];else{var d=e[o],h=n[2],f=n[3],p=n[4],m=n[5],g=n[6],y=n[7];s&&(r.push(s),s="");var _=null!=h&&null!=d&&d!==h,v="+"===g||"*"===g,b="?"===g||"*"===g,w=n[2]||a,C=p||m;r.push({name:f||i++,prefix:h||"",delimiter:w,optional:b,repeat:v,partial:_,asterisk:!!y,pattern:C?bc(C):y?".*":"[^"+vc(w)+"]+?"})}}return o<e.length&&(s+=e.substr(o)),s&&r.push(s),r}function yc(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function _c(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",Cc(t)));return function(t,r){for(var i="",o=t||{},s=(r||{}).pretty?yc:encodeURIComponent,a=0;a<e.length;a++){var l=e[a];if("string"!=typeof l){var u,c=o[l.name];if(null==c){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(pc(c)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(c)+"`");if(0===c.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<c.length;d++){if(u=s(c[d]),!n[a].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(u)+"`");i+=(0===d?l.prefix:l.delimiter)+u}}else{if(u=l.asterisk?encodeURI(c).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):s(c),!n[a].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+u+'"');i+=l.prefix+u}}else i+=l}return i}}function vc(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function bc(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function wc(e,t){return e.keys=t,e}function Cc(e){return e&&e.sensitive?"":"i"}function kc(e,t,n){pc(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,o="",s=0;s<e.length;s++){var a=e[s];if("string"==typeof a)o+=vc(a);else{var l=vc(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+l+u+")*"),o+=u=a.optional?a.partial?l+"("+u+")?":"(?:"+l+"("+u+"))?":l+"("+u+")"}}var c=vc(n.delimiter||"/"),d=o.slice(-c.length)===c;return r||(o=(d?o.slice(0,-c.length):o)+"(?:"+c+"(?=$))?"),o+=i?"$":r&&d?"":"(?="+c+"|$)",wc(new RegExp("^"+o,Cc(n)),t)}function Ec(e,t,n){return pc(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return wc(e,t)}(e,t):pc(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Ec(e[i],t,n).source);return wc(new RegExp("(?:"+r.join("|")+")",Cc(n)),t)}(e,t,n):function(e,t,n){return kc(gc(e,n),t,n)}(e,t,n)}var Sc=fc.exports,xc={},Tc="function"==typeof Symbol&&Symbol.for,Ic=Tc?Symbol.for("react.element"):60103,Pc=Tc?Symbol.for("react.portal"):60106,Nc=Tc?Symbol.for("react.fragment"):60107,Rc=Tc?Symbol.for("react.strict_mode"):60108,Oc=Tc?Symbol.for("react.profiler"):60114,Dc=Tc?Symbol.for("react.provider"):60109,Mc=Tc?Symbol.for("react.context"):60110,Lc=Tc?Symbol.for("react.async_mode"):60111,Ac=Tc?Symbol.for("react.concurrent_mode"):60111,Fc=Tc?Symbol.for("react.forward_ref"):60112,zc=Tc?Symbol.for("react.suspense"):60113,jc=Tc?Symbol.for("react.suspense_list"):60120,Uc=Tc?Symbol.for("react.memo"):60115,$c=Tc?Symbol.for("react.lazy"):60116,qc=Tc?Symbol.for("react.block"):60121,Wc=Tc?Symbol.for("react.fundamental"):60117,Bc=Tc?Symbol.for("react.responder"):60118,Hc=Tc?Symbol.for("react.scope"):60119;function Vc(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case Ic:switch(e=e.type){case Lc:case Ac:case Nc:case Oc:case Rc:case zc:return e;default:switch(e=e&&e.$$typeof){case Mc:case Fc:case $c:case Uc:case Dc:return e;default:return t}}case Pc:return t}}}function Kc(e){return Vc(e)===Ac}function Qc(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}xc.AsyncMode=Lc,xc.ConcurrentMode=Ac,xc.ContextConsumer=Mc,xc.ContextProvider=Dc,xc.Element=Ic,xc.ForwardRef=Fc,xc.Fragment=Nc,xc.Lazy=$c,xc.Memo=Uc,xc.Portal=Pc,xc.Profiler=Oc,xc.StrictMode=Rc,xc.Suspense=zc,xc.isAsyncMode=function(e){return Kc(e)||Vc(e)===Lc},xc.isConcurrentMode=Kc,xc.isContextConsumer=function(e){return Vc(e)===Mc},xc.isContextProvider=function(e){return Vc(e)===Dc},xc.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Ic},xc.isForwardRef=function(e){return Vc(e)===Fc},xc.isFragment=function(e){return Vc(e)===Nc},xc.isLazy=function(e){return Vc(e)===$c},xc.isMemo=function(e){return Vc(e)===Uc},xc.isPortal=function(e){return Vc(e)===Pc},xc.isProfiler=function(e){return Vc(e)===Oc},xc.isStrictMode=function(e){return Vc(e)===Rc},xc.isSuspense=function(e){return Vc(e)===zc},xc.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===Nc||e===Ac||e===Oc||e===Rc||e===zc||e===jc||"object"==typeof e&&null!==e&&(e.$$typeof===$c||e.$$typeof===Uc||e.$$typeof===Dc||e.$$typeof===Mc||e.$$typeof===Fc||e.$$typeof===Wc||e.$$typeof===Bc||e.$$typeof===Hc||e.$$typeof===qc)},xc.typeOf=Vc;var Yc={exports:{}},Gc={},Xc="function"==typeof Symbol&&Symbol.for,Jc=Xc?Symbol.for("react.element"):60103,Zc=Xc?Symbol.for("react.portal"):60106,ed=Xc?Symbol.for("react.fragment"):60107,td=Xc?Symbol.for("react.strict_mode"):60108,nd=Xc?Symbol.for("react.profiler"):60114,rd=Xc?Symbol.for("react.provider"):60109,id=Xc?Symbol.for("react.context"):60110,od=Xc?Symbol.for("react.async_mode"):60111,sd=Xc?Symbol.for("react.concurrent_mode"):60111,ad=Xc?Symbol.for("react.forward_ref"):60112,ld=Xc?Symbol.for("react.suspense"):60113,ud=Xc?Symbol.for("react.suspense_list"):60120,cd=Xc?Symbol.for("react.memo"):60115,dd=Xc?Symbol.for("react.lazy"):60116,hd=Xc?Symbol.for("react.block"):60121,fd=Xc?Symbol.for("react.fundamental"):60117,pd=Xc?Symbol.for("react.responder"):60118,md=Xc?Symbol.for("react.scope"):60119;function gd(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case Jc:switch(e=e.type){case od:case sd:case ed:case nd:case td:case ld:return e;default:switch(e=e&&e.$$typeof){case id:case ad:case dd:case cd:case rd:return e;default:return t}}case Zc:return t}}}function yd(e){return gd(e)===sd}Gc.AsyncMode=od,Gc.ConcurrentMode=sd,Gc.ContextConsumer=id,Gc.ContextProvider=rd,Gc.Element=Jc,Gc.ForwardRef=ad,Gc.Fragment=ed,Gc.Lazy=dd,Gc.Memo=cd,Gc.Portal=Zc,Gc.Profiler=nd,Gc.StrictMode=td,Gc.Suspense=ld,Gc.isAsyncMode=function(e){return yd(e)||gd(e)===od},Gc.isConcurrentMode=yd,Gc.isContextConsumer=function(e){return gd(e)===id},Gc.isContextProvider=function(e){return gd(e)===rd},Gc.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Jc},Gc.isForwardRef=function(e){return gd(e)===ad},Gc.isFragment=function(e){return gd(e)===ed},Gc.isLazy=function(e){return gd(e)===dd},Gc.isMemo=function(e){return gd(e)===cd},Gc.isPortal=function(e){return gd(e)===Zc},Gc.isProfiler=function(e){return gd(e)===nd},Gc.isStrictMode=function(e){return gd(e)===td},Gc.isSuspense=function(e){return gd(e)===ld},Gc.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===ed||e===sd||e===nd||e===td||e===ld||e===ud||"object"==typeof e&&null!==e&&(e.$$typeof===dd||e.$$typeof===cd||e.$$typeof===rd||e.$$typeof===id||e.$$typeof===ad||e.$$typeof===fd||e.$$typeof===pd||e.$$typeof===md||e.$$typeof===hd)},Gc.typeOf=gd,Yc.exports=Gc;var _d=Yc.exports,vd={};vd[_d.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vd[_d.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var bd=function(e){var t=hc();return t.displayName=e,t},wd=bd("Router-History"),Cd=bd("Router"),kd=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}Gu(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return F.createElement(Cd.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},F.createElement(wd.Provider,{children:this.props.children||null,value:this.props.history}))},t}(F.Component),Ed=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=uc(t.props),t}return Gu(t,e),t.prototype.render=function(){return F.createElement(kd,{history:this.history,children:this.props.children})},t}(F.Component);F.Component;var Sd={},xd=0;function Td(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,i=n.exact,o=void 0!==i&&i,s=n.strict,a=void 0!==s&&s,l=n.sensitive,u=void 0!==l&&l;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=Sd[n]||(Sd[n]={});if(r[e])return r[e];var i=[],o={regexp:Sc(e,i,t),keys:i};return xd<1e4&&(r[e]=o,xd++),o}(n,{end:o,strict:a,sensitive:u}),i=r.regexp,s=r.keys,l=i.exec(e);if(!l)return null;var c=l[0],d=l.slice(1),h=e===c;return o&&!h?null:{path:n,url:"/"===n&&""===c?"/":c,isExact:h,params:s.reduce((function(e,t,n){return e[t.name]=d[n],e}),{})}}),null)}var Id=function(e){function t(){return e.apply(this,arguments)||this}return Gu(t,e),t.prototype.render=function(){var e=this;return F.createElement(Cd.Consumer,null,(function(t){t||ic(!1);var n=e.props.location||t.location,r=tc({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?Td(n.pathname,e.props):t.match}),i=e.props,o=i.children,s=i.component,a=i.render;return Array.isArray(o)&&function(e){return 0===F.Children.count(e)}(o)&&(o=null),F.createElement(Cd.Provider,{value:r},r.match?o?"function"==typeof o?o(r):o:s?F.createElement(s,r):a?a(r):null:"function"==typeof o?o(r):null)}))},t}(F.Component);F.Component;var Pd=function(e){function t(){return e.apply(this,arguments)||this}return Gu(t,e),t.prototype.render=function(){var e=this;return F.createElement(Cd.Consumer,null,(function(t){t||ic(!1);var n,r,i=e.props.location||t.location;return F.Children.forEach(e.props.children,(function(e){if(null==r&&F.isValidElement(e)){n=e;var o=e.props.path||e.props.from;r=o?Td(i.pathname,tc({},e.props,{path:o})):t.match}})),r?F.cloneElement(n,{location:i,computedMatch:r}):null}))},t}(F.Component),Nd=F.useContext;function Rd(){var e=Nd(Cd).match;return e?e.params:{}}F.Component,F.Component;var Od=function(e,t){return"function"==typeof e?e(t):e},Dd=function(e,t){return"string"==typeof e?sc(e,null,null,t):e},Md=function(e){return e},Ld=F.forwardRef;void 0===Ld&&(Ld=Md);var Ad=Ld((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,o=Qc(e,["innerRef","navigate","onClick"]),s=o.target,a=tc({},o,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||s&&"_self"!==s||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return a.ref=Md!==Ld&&t||n,F.createElement("a",a)})),Fd=Ld((function(e,t){var n=e.component,r=void 0===n?Ad:n,i=e.replace,o=e.to,s=e.innerRef,a=Qc(e,["component","replace","to","innerRef"]);return F.createElement(Cd.Consumer,null,(function(e){e||ic(!1);var n=e.history,l=Dd(Od(o,e.location),e.location),u=l?n.createHref(l):"",c=tc({},a,{href:u,navigate:function(){var t=Od(o,e.location),r=oc(e.location)===oc(Dd(t));(i||r?n.replace:n.push)(t)}});return Md!==Ld?c.ref=t||s:c.innerRef=s,F.createElement(r,c)}))})),zd=function(e){return e},jd=F.forwardRef;void 0===jd&&(jd=zd),jd((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,o=void 0===i?"active":i,s=e.activeStyle,a=e.className,l=e.exact,u=e.isActive,c=e.location,d=e.sensitive,h=e.strict,f=e.style,p=e.to,m=e.innerRef,g=Qc(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return F.createElement(Cd.Consumer,null,(function(e){e||ic(!1);var n=c||e.location,i=Dd(Od(p,n),n),y=i.pathname,_=y&&y.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),v=_?Td(n.pathname,{path:_,exact:l,sensitive:d,strict:h}):null,b=!!(u?u(v,n):v),w="function"==typeof a?a(b):a,C="function"==typeof f?f(b):f;b&&(w=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(w,o),C=tc({},C,s));var k=tc({"aria-current":b&&r||null,className:w,style:C,to:i},g);return zd!==jd?k.ref=t||m:k.innerRef=m,F.createElement(Fd,k)}))}));var Ud={exports:{}},$d={},qd=e.exports,Wd=60103;if($d.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var Bd=Symbol.for;Wd=Bd("react.element"),$d.Fragment=Bd("react.fragment")}var Hd=qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vd=Object.prototype.hasOwnProperty,Kd={key:!0,ref:!0,__self:!0,__source:!0};function Qd(e,t,n){var r,i={},o=null,s=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(s=t.ref),t)Vd.call(t,r)&&!Kd.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:Wd,type:e,key:o,ref:s,props:i,_owner:Hd.current}}function Yd(t){return e.exports.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},t),e.exports.createElement("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}))}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Gd(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(t){o(t)}}function a(e){try{l(r.throw(e))}catch(t){o(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}l((r=r.apply(e,t||[])).next())}))}function Xd(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}function Jd(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Zd(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=o.next()).done;)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return s}function eh(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$d.jsx=Qd,$d.jsxs=Qd,Ud.exports=$d;const th=!1,nh="${JSCORE_VERSION}",rh=function(e,t){if(!e)throw ih(t)},ih=function(e){return new Error("Firebase Database ("+nh+") INTERNAL ASSERT FAILED: "+e)},oh=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},sh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,u=t>>2,c=(3&t)<<4|s>>4;let d=(15&s)<<2|l>>6,h=63&l;a||(h=64,o||(d=64)),r.push(n[u],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(oh(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const s=i<e.length?n[e.charAt(i)]:64;++i;const a=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==s||null==a)throw Error();const l=t<<2|o>>4;if(r.push(l),64!==s){const e=o<<4&240|s>>2;if(r.push(e),64!==a){const e=s<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ah=function(e){try{return sh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lh(e){return uh(void 0,e)}function uh(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=uh(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ch{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function hh(){return!0===th}function fh(){return"object"==typeof indexedDB}class ph extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ph.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mh.prototype.create)}}class mh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?function(e,t){return e.replace(gh,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`;return new ph(r,s,n)}}const gh=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(e){return JSON.parse(e)}function _h(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=function(e){let t={},n={},r={},i="";try{const o=e.split(".");t=yh(ah(o[0])||""),n=yh(ah(o[1])||""),i=o[2],r=n.d||{},delete n.d}catch(o){}return{header:t,claims:n,data:r,signature:i}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bh(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function wh(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Ch(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function kh(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Eh(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(Sh(n)&&Sh(o)){if(!Eh(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Sh(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let c=0;c<16;c++)n[c]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let c=0;c<16;c++)n[c]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let c=16;c<80;c++){const e=n[c-3]^n[c-8]^n[c-14]^n[c-16];n[c]=4294967295&(e<<1|e>>>31)}let r,i,o=this.chain_[0],s=this.chain_[1],a=this.chain_[2],l=this.chain_[3],u=this.chain_[4];for(let c=0;c<80;c++){c<40?c<20?(r=l^s&(a^l),i=1518500249):(r=s^a^l,i=1859775393):c<60?(r=s&a|l&(s|a),i=2400959708):(r=s^a^l,i=3395469782);const e=(o<<5|o>>>27)+r+u+i+n[c]&4294967295;u=l,l=a,a=4294967295&(s<<30|s>>>2),s=o,o=e}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[r]>>t&255,++n;return e}}function Th(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};function Ph(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(e){return e&&e._delegate?e._delegate:e}var Rh=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Oh=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new ch;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(c){}try{for(var r=Jd(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var o=Zd(i.value,2),s=o[0],a=o[1],l=this.normalizeInstanceIdentifier(s);try{var u=this.getOrInitializeService({instanceIdentifier:l});a.resolve(u)}catch(c){}}}catch(d){t={error:d}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Gd(this,void 0,void 0,(function(){var e;return Xd(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(eh(eh([],Zd(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Zd(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var s=this.getOrInitializeService({instanceIdentifier:o,options:i});try{for(var a=Jd(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var u=Zd(l.value,2),c=u[0],d=u[1];o===this.normalizeInstanceIdentifier(c)&&d.resolve(s)}}catch(h){t={error:h}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return s},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var o=Jd(i),s=o.next();!s.done;s=o.next()){var a=s.value;try{a(e,t)}catch(l){}}}catch(u){n={error:u}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,o),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(s){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dh,Mh,Lh=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Oh(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Mh=Dh||(Dh={}))[Mh.DEBUG=0]="DEBUG",Mh[Mh.VERBOSE=1]="VERBOSE",Mh[Mh.INFO=2]="INFO",Mh[Mh.WARN=3]="WARN",Mh[Mh.ERROR=4]="ERROR",Mh[Mh.SILENT=5]="SILENT";const Ah={debug:Dh.DEBUG,verbose:Dh.VERBOSE,info:Dh.INFO,warn:Dh.WARN,error:Dh.ERROR,silent:Dh.SILENT},Fh=Dh.INFO,zh={[Dh.DEBUG]:"log",[Dh.VERBOSE]:"log",[Dh.INFO]:"info",[Dh.WARN]:"warn",[Dh.ERROR]:"error"},jh=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=zh[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Uh{constructor(e){this.name=e,this._logLevel=Fh,this._logHandler=jh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Dh))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ah[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Dh.DEBUG,...e),this._logHandler(this,Dh.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Dh.VERBOSE,...e),this._logHandler(this,Dh.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Dh.INFO,...e),this._logHandler(this,Dh.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Dh.WARN,...e),this._logHandler(this,Dh.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Dh.ERROR,...e),this._logHandler(this,Dh.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const qh="@firebase/app",Wh=new Uh("@firebase/app"),Bh={[qh]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Hh=new Map,Vh=new Map;function Kh(e,t){try{e.container.addComponent(t)}catch(n){Wh.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Qh(e){const t=e.name;if(Vh.has(t))return Wh.debug(`There were multiple attempts to register component ${t}.`),!1;Vh.set(t,e);for(const n of Hh.values())Kh(n,e);return!0}function Yh(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new mh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xh{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Rh("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gh.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Gh.create("bad-app-name",{appName:String(r)});const i=Hh.get(r);if(i){if(Eh(e,i.options)&&Eh(n,i.config))return i;throw Gh.create("duplicate-app",{appName:r})}const o=new Lh(r);for(const a of Vh.values())o.addComponent(a);const s=new Xh(e,n,o);return Hh.set(r,s),s}function Zh(e="[DEFAULT]"){const t=Hh.get(e);if(!t)throw Gh.create("no-app",{appName:e});return t}function ef(e,t,n){var r;let i=null!==(r=Bh[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const e=[`Unable to register library "${i}" with version "${t}":`];return o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Wh.warn(e.join(" "))}Qh(new Rh(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tf;tf="",Qh(new Rh("platform-logger",(e=>new $h(e)),"PRIVATE")),ef(qh,"0.7.4",tf),ef(qh,"0.7.4","esm2017"),ef("fire-js","");
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let nf="";
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class rf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_h(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:yh(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class of{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return bh(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const sf=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new rf(t)}}catch(t){}return new of},af=sf("localStorage"),lf=sf("sessionStorage"),uf=new Uh("@firebase/database"),cf=function(){let e=1;return function(){return e++}}(),df=function(e){const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const t=i-55296;r++,rh(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(t<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new xh;n.update(t);const r=n.digest();return sh.encodeByteArray(r)},hf=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=hf.apply(null,r):t+="object"==typeof r?_h(r):r,t+=" "}return t};let ff=null,pf=!0;const mf=function(...e){var t,n;if(!0===pf&&(pf=!1,null===ff&&!0===lf.get("logging_enabled")&&(t=!0,rh(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(uf.logLevel=Dh.VERBOSE,ff=uf.log.bind(uf),n&&lf.set("logging_enabled",!0)):"function"==typeof t?ff=t:(ff=null,lf.remove("logging_enabled")))),ff){const t=hf.apply(null,e);ff(t)}},gf=function(e){return function(...t){mf(e,...t)}},yf=function(...e){const t="FIREBASE INTERNAL ERROR: "+hf(...e);uf.error(t)},_f=function(...e){const t=`FIREBASE FATAL ERROR: ${hf(...e)}`;throw uf.error(t),new Error(t)},vf=function(...e){const t="FIREBASE WARNING: "+hf(...e);uf.warn(t)},bf=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},wf="[MIN_NAME]",Cf="[MAX_NAME]",kf=function(e,t){if(e===t)return 0;if(e===wf||t===Cf)return-1;if(t===wf||e===Cf)return 1;{const n=Rf(e),r=Rf(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Ef=function(e,t){return e===t?0:e<t?-1:1},Sf=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+_h(t))},xf=function(e){if("object"!=typeof e||null===e)return _h(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=_h(t[r]),n+=":",n+=xf(e[t[r]]);return n+="}",n},Tf=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function If(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Pf=function(e){rh(!bf(e),"Invalid JSON number");const t=1023;let n,r,i,o,s;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=o+t,i=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(s=52;s;s-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(s=11;s;s-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let u="";for(s=0;s<64;s+=8){let e=parseInt(l.substr(s,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()},Nf=new RegExp("^-?(0*)\\d{1,10}$"),Rf=function(e){if(Nf.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Of=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw vf("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Df=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Mf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){vf(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Lf{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(mf("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',vf(e)}}class Af{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Af.OWNER="owner";
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Ff=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class zf{constructor(e,t,n,r,i=!1,o="",s=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=s,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=af.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&af.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function jf(e,t,n){let r;if(rh("string"==typeof t,"typeof type must == string"),rh("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return If(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Uf{constructor(){this.counters_={}}incrementCounter(e,t=1){bh(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return lh(this.counters_)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const $f={},qf={};function Wf(e){const t=e.toString();return $f[t]||($f[t]=new Uf),$f[t]}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Bf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Of((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hf{constructor(e,t,n,r,i,o,s){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=s,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gf(e),this.stats_=Wf(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),jf(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Bf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vf(((...e)=>{const[t,n,r,i,o]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Ff.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hf.forceAllow_=!0}static forceDisallow(){Hf.forceDisallow_=!0}static isAvailable(){return!!Hf.forceAllow_||!(Hf.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=_h(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=function(e){const t=oh(e);return sh.encodeByteArray(t,!0)}(t),r=Tf(n,1840);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=_h(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Vf{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cf(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Vf.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){mf("frame writing exception"),i.stack&&mf(i.stack),mf(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||mf("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{mf("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Kf=null;"undefined"!=typeof MozWebSocket?Kf=MozWebSocket:"undefined"!=typeof WebSocket&&(Kf=WebSocket);class Qf{constructor(e,t,n,r,i,o,s){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gf(this.connId),this.stats_=Wf(t),this.connURL=Qf.connectionURL_(t,o,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&Ff.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),jf(e,"websocket",i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,af.set("previous_websocket_failure",!0);try{if(hh());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Kf(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Qf.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Kf&&!Qf.forceDisallow_}static previouslyFailed(){return af.isInMemoryStorage||!0===af.get("previous_websocket_failure")}markConnectionHealthy(){af.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=yh(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(rh(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=_h(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Tf(t,16384);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qf.responsesRequiredToBeHealthy=2,Qf.healthyTimeout=3e4;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Yf{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Hf,Qf]}initTransports_(e){const t=Qf&&Qf.isAvailable();let n=t&&!Qf.previouslyFailed();if(e.webSocketOnly&&(t||vf("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Qf];else{const e=this.transports_=[];for(const t of Yf.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Gf{constructor(e,t,n,r,i,o,s,a,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=s,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gf("c:"+this.id+":"),this.transportManager_=new Yf(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Df((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Sf("t",e),n=Sf("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Sf("t",e),n=Sf("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Sf("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?yf("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yf("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&vf("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Df((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Df((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(af.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xf{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jf{constructor(e){this.allowedEvents_=e,this.listeners_={},rh(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){rh(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zf extends Jf{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||dh()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Zf}getInitialEvent(e){return rh("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ep{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function tp(){return new ep("")}function np(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function rp(e){return e.pieces_.length-e.pieceNum_}function ip(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ep(e.pieces_,t)}function op(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function sp(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ap(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ep(t,0)}function lp(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof ep)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ep(n,0)}function up(e){return e.pieceNum_>=e.pieces_.length}function cp(e,t){const n=np(e),r=np(t);if(null===n)return t;if(n===r)return cp(ip(e),ip(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function dp(e,t){if(rp(e)!==rp(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function hp(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(rp(e)>rp(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class fp{constructor(e,t){this.errorPrefix_=t,this.parts_=sp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Ih(this.parts_[n]);pp(this)}}function pp(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+mp(e))}function mp(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gp extends Jf{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new gp}getInitialEvent(e){return rh("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class yp extends Xf{constructor(e,t,n,r,i,o,s,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=s,this.authOverride_=a,this.id=yp.nextPersistentConnectionId_++,this.log_=gf("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!hh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");gp.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Zf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(_h(i)),rh(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new ch,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),rh(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),rh(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const s={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,s),this.connected_&&this.sendListen_(s)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const o=i.d,s=i.s;yp.warnOnListenWarnings_(o,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==s&&this.removeListen_(n,r),e.onComplete&&e.onComplete(s,o))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&bh(e,"w")){const n=wh(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();vf(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=vh(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=vh(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),rh(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};void 0!==i&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const s=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(s):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_h(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):yf("Unrecognized action received from server: "+_h(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){rh(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+yp.nextConnectionId_++,o=this.lastSessionId;let s=!1,a=null;const l=function(){a?a.close():(s=!0,r())},u=function(e){rh(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?mf("getToken() completed but was canceled"):(mf("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=l&&l.token,a=new Gf(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,(e=>{vf(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),o))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&vf(e),l())}}}interrupt(e){mf("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mf("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ch(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>xf(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new ep(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){mf("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){mf("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+nf.replace(/\./g,"-")]=1,dh()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Zf.getInstance().currentlyOnline();return Ch(this.interruptReasons_)&&e}}yp.nextPersistentConnectionId_=0,yp.nextConnectionId_=0;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class _p{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new _p(e,t)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class vp{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new _p(wf,e),r=new _p(wf,t);return 0!==this.compare(n,r)}minPost(){return _p.MIN}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let bp;class wp extends vp{static get __EMPTY_NODE(){return bp}static set __EMPTY_NODE(e){bp=e}compare(e,t){return kf(e.name,t.name)}isDefinedOn(e){throw ih("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return _p.MIN}maxPost(){return new _p(Cf,bp)}makePost(e,t){return rh("string"==typeof e,"KeyIndex indexValue must always be a string."),new _p(e,bp)}toString(){return".key"}}const Cp=new wp;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kp{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)e=this.isReverse_?e.left:e.right;else{if(0===o){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ep{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Ep.RED,this.left=null!=r?r:Sp.EMPTY_NODE,this.right=null!=i?i:Sp.EMPTY_NODE}copy(e,t,n,r,i){return new Ep(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Sp.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Sp.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ep.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ep.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ep.RED=!0,Ep.BLACK=!1;class Sp{constructor(e,t=Sp.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Sp(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ep.BLACK,null,null))}remove(e){return new Sp(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ep.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kp(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new kp(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new kp(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new kp(this.root_,null,this.comparator_,!0,e)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function xp(e,t){return kf(e.name,t.name)}function Tp(e,t){return kf(e,t)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Ip;Sp.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ep(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Pp=function(e){return"number"==typeof e?"number:"+Pf(e):"string:"+e},Np=function(e){if(e.isLeafNode()){const t=e.val();rh("string"==typeof t||"number"==typeof t||"object"==typeof t&&bh(t,".sv"),"Priority must be a string or number.")}else rh(e===Ip||e.isEmpty(),"priority of unexpected type.");rh(e===Ip||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let Rp,Op,Dp;class Mp{constructor(e,t=Mp.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,rh(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Np(this.priorityNode_)}static set __childrenNodeConstructor(e){Rp=e}static get __childrenNodeConstructor(){return Rp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Mp(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Mp.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return up(e)?this:".priority"===np(e)?this.priorityNode_:Mp.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Mp.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=np(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(rh(".priority"!==n||1===rp(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Mp.__childrenNodeConstructor.EMPTY_NODE.updateChild(ip(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pp(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Pf(this.value_):this.value_,this.lazyHash_=df(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Mp.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Mp.__childrenNodeConstructor?-1:(rh(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Mp.VALUE_TYPE_ORDER.indexOf(t),i=Mp.VALUE_TYPE_ORDER.indexOf(n);return rh(r>=0,"Unknown leaf type: "+t),rh(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Mp.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Lp=new class extends vp{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?kf(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return _p.MIN}maxPost(){return new _p(Cf,new Mp("[PRIORITY-POST]",Dp))}makePost(e,t){const n=Op(e);return new _p(t,new Mp("[PRIORITY-POST]",n))}toString(){return".priority"}},Ap=Math.log(2);
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Fp{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ap,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zp=function(e,t,n,r){e.sort(t);const i=function(t,r){const o=r-t;let s,a;if(0===o)return null;if(1===o)return s=e[t],a=n?n(s):s,new Ep(a,s.node,Ep.BLACK,null,null);{const l=parseInt(o/2,10)+t,u=i(t,l),c=i(l+1,r);return s=e[l],a=n?n(s):s,new Ep(a,s.node,Ep.BLACK,u,c)}},o=function(t){let r=null,o=null,s=e.length;const a=function(t,r){const o=s-t,a=s;s-=t;const u=i(o+1,a),c=e[o],d=n?n(c):c;l(new Ep(d,c.node,r,null,u))},l=function(e){r?(r.left=e,r=e):(o=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Ep.BLACK):(a(r,Ep.BLACK),a(r,Ep.RED))}return o}(new Fp(e.length));return new Sp(r||t,o)};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let jp;const Up={};class $p{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return rh(Up&&Lp,"ChildrenNode.ts has not been loaded"),jp=jp||new $p({".priority":Up},{".priority":Lp}),jp}get(e){const t=wh(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Sp?t:null}hasIndex(e){return bh(this.indexSet_,e.toString())}addIndex(e,t){rh(e!==Cp,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(_p.Wrap);let o,s=i.getNext();for(;s;)r=r||e.isDefinedOn(s.node),n.push(s),s=i.getNext();o=r?zp(n,e.getCompare()):Up;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const u=Object.assign({},this.indexes_);return u[a]=o,new $p(u,l)}addToIndexes(e,t){const n=kh(this.indexes_,((n,r)=>{const i=wh(this.indexSet_,r);if(rh(i,"Missing index implementation for "+r),n===Up){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(_p.Wrap);let o=r.getNext();for(;o;)o.name!==e.name&&n.push(o),o=r.getNext();return n.push(e),zp(n,i.getCompare())}return Up}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new _p(e.name,r))),i.insert(e,e.node)}}));return new $p(n,this.indexSet_)}removeFromIndexes(e,t){const n=kh(this.indexes_,(n=>{if(n===Up)return n;{const r=t.get(e.name);return r?n.remove(new _p(e.name,r)):n}}));return new $p(n,this.indexSet_)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let qp;class Wp{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Np(this.priorityNode_),this.children_.isEmpty()&&rh(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return qp||(qp=new Wp(new Sp(Tp),null,$p.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||qp}updatePriority(e){return this.children_.isEmpty()?this:new Wp(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?qp:t}}getChild(e){const t=np(e);return null===t?this:this.getImmediateChild(t).getChild(ip(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(rh(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new _p(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?qp:this.priorityNode_;return new Wp(r,o,i)}}updateChild(e,t){const n=np(e);if(null===n)return t;{rh(".priority"!==np(e)||1===rp(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ip(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Lp,((o,s)=>{t[o]=s.val(e),n++,i&&Wp.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pp(this.getPriority().val())+":"),this.forEachChild(Lp,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":df(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new _p(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new _p(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new _p(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,_p.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,_p.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bp?-1:0}withIndex(e){if(e===Cp||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Wp(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Cp||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Lp),n=t.getIterator(Lp);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Cp?null:this.indexMap_.get(e.toString())}}Wp.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Bp=new class extends Wp{constructor(){super(new Sp(Tp),Wp.EMPTY_NODE,$p.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Wp.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(_p,{MIN:{value:new _p(wf,Wp.EMPTY_NODE)},MAX:{value:new _p(Cf,Bp)}}),wp.__EMPTY_NODE=Wp.EMPTY_NODE,Mp.__childrenNodeConstructor=Wp,Ip=Bp,function(e){Dp=e}(Bp);function Hp(e,t=null){if(null===e)return Wp.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),rh(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Mp(e,Hp(t))}if(e instanceof Array){let n=Wp.EMPTY_NODE;return If(e,((t,r)=>{if(bh(e,t)&&"."!==t.substring(0,1)){const e=Hp(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Hp(t))}{const n=[];let r=!1;if(If(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Hp(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new _p(e,i)))}})),0===n.length)return Wp.EMPTY_NODE;const i=zp(n,xp,(e=>e.name),Tp);if(r){const e=zp(n,Lp.getCompare());return new Wp(i,Hp(t),new $p({".priority":e},{".priority":Lp}))}return new Wp(i,Hp(t),$p.Default)}}!function(e){Op=e}(Hp);
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Vp extends vp{constructor(e){super(),this.indexPath_=e,rh(!up(e)&&".priority"!==np(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?kf(e.name,t.name):i}makePost(e,t){const n=Hp(e),r=Wp.EMPTY_NODE.updateChild(this.indexPath_,n);return new _p(t,r)}maxPost(){const e=Wp.EMPTY_NODE.updateChild(this.indexPath_,Bp);return new _p(Cf,e)}toString(){return sp(this.indexPath_,0).join("/")}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Kp=new class extends vp{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?kf(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return _p.MIN}maxPost(){return _p.MAX}makePost(e,t){const n=Hp(e);return new _p(t,n)}toString(){return".value"}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Yp(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Gp(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Xp{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){rh(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const s=e.getImmediateChild(t);return s.getChild(r).equals(n.getChild(r))&&s.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Yp(t,s)):rh(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):s.isEmpty()?o.trackChildChange(Qp(t,n)):o.trackChildChange(Gp(t,n,s))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Lp,((e,r)=>{t.hasChild(e)||n.trackChildChange(Yp(e,r))})),t.isLeafNode()||t.forEachChild(Lp,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Gp(t,r,i))}else n.trackChildChange(Qp(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Wp.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jp{constructor(e){this.indexedFilter_=new Xp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Jp.getStartPost_(e),this.endPost_=Jp.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,o){return this.matches(new _p(t,n))||(n=Wp.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Wp.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Wp.EMPTY_NODE);const i=this;return t.forEachChild(Lp,((e,t)=>{i.matches(new _p(e,t))||(r=r.updateImmediateChild(e,Wp.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Zp{constructor(e){this.rangedFilter_=new Jp(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new _p(t,n))||(n=Wp.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Wp.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Wp.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,o;if(r=t.withIndex(this.index_),r=r.updatePriority(Wp.EMPTY_NODE),this.reverse_){o=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else o=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let s=0,a=!1;for(;o.hasNext();){const t=o.getNext();!a&&i(e,t)<=0&&(a=!0);a&&s<this.limit_&&i(t,n)<=0?s++:r=r.updateImmediateChild(t.name,Wp.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const s=e;rh(s.numChildren()===this.limit_,"");const a=new _p(t,n),l=this.reverse_?s.getFirstChild(this.index_):s.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(s.hasChild(t)){const e=s.getImmediateChild(t);let c=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=c&&(c.name===t||s.hasChild(c.name));)c=r.getChildAfterChild(this.index_,c,this.reverse_);const d=null==c?1:o(c,a);if(u&&!n.isEmpty()&&d>=0)return null!=i&&i.trackChildChange(Gp(t,n,e)),s.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Yp(t,e));const n=s.updateImmediateChild(t,Wp.EMPTY_NODE);return null!=c&&this.rangedFilter_.matches(c)?(null!=i&&i.trackChildChange(Qp(c.name,c.node)),n.updateImmediateChild(c.name,c.node)):n}}return n.isEmpty()?e:u&&o(l,a)>=0?(null!=i&&(i.trackChildChange(Yp(l.name,l.node)),i.trackChildChange(Qp(t,n))),s.updateImmediateChild(t,n).updateImmediateChild(l.name,Wp.EMPTY_NODE)):e}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class em{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Lp}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return rh(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return rh(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:wf}hasEnd(){return this.endSet_}getIndexEndValue(){return rh(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return rh(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cf}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return rh(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Lp}copy(){const e=new em;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tm(e){const t={};if(e.isDefault())return t;let n;return e.index_===Lp?n="$priority":e.index_===Kp?n="$value":e.index_===Cp?n="$key":(rh(e.index_ instanceof Vp,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=_h(n),e.startSet_&&(t.startAt=_h(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+_h(e.indexStartName_))),e.endSet_&&(t.endAt=_h(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+_h(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function nm(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Lp&&(t.i=e.index_.toString()),t}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rm extends Xf{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=gf("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(rh(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=rm.getListenId_(e,n),s={};this.listens_[o]=s;const a=tm(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),wh(this.listens_,o)===s){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=rm.getListenId_(e,t);delete this.listens_[n]}get(e){const t=tm(e._queryParams),n=e._path.toString(),r=new ch;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+o);const s=new XMLHttpRequest;s.onreadystatechange=()=>{if(n&&4===s.readyState){this.log_("REST Response for "+o+" received. status:",s.status,"response:",s.responseText);let t=null;if(s.status>=200&&s.status<300){try{t=yh(s.responseText)}catch(e){vf("Failed to parse JSON response for "+o+": "+s.responseText)}n(null,t)}else 401!==s.status&&404!==s.status&&vf("Got unsuccessful REST response for "+o+" Status: "+s.status),n(s.status);n=null}},s.open("GET",o,!0),s.send()}))}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class im{constructor(){this.rootNode_=Wp.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function om(){return{value:null,children:new Map}}function sm(e,t,n){if(up(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=np(t);e.children.has(r)||e.children.set(r,om());sm(e.children.get(r),t=ip(t),n)}}function am(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/(e,((e,r)=>{am(r,new ep(t.toString()+"/"+e),n)}))}class lm{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&If(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class um{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lm(e);const n=1e4+2e4*Math.random();Df(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;If(e,((e,r)=>{r>0&&bh(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Df(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var cm,dm;function hm(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/(dm=cm||(cm={}))[dm.OVERWRITE=0]="OVERWRITE",dm[dm.MERGE=1]="MERGE",dm[dm.ACK_USER_WRITE=2]="ACK_USER_WRITE",dm[dm.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class fm{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=cm.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(up(this.path)){if(null!=this.affectedTree.value)return rh(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ep(e));return new fm(tp(),t,this.revert)}}return rh(np(this.path)===e,"operationForChild called for unrelated child."),new fm(ip(this.path),this.affectedTree,this.revert)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class pm{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=cm.OVERWRITE}operationForChild(e){return up(this.path)?new pm(this.source,tp(),this.snap.getImmediateChild(e)):new pm(this.source,ip(this.path),this.snap)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mm{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=cm.MERGE}operationForChild(e){if(up(this.path)){const t=this.children.subtree(new ep(e));return t.isEmpty()?null:t.value?new pm(this.source,tp(),t.value):new mm(this.source,tp(),t)}return rh(np(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new mm(this.source,ip(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gm{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(up(e))return this.isFullyInitialized()&&!this.filtered_;const t=np(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ym{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function _m(e,t,n,r,i,o){const s=r.filter((e=>e.type===n));s.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw ih("Should only compare child_ events.");const r=new _p(t.childName,t.snapshotNode),i=new _p(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/(e,t,n))),s.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function vm(e,t){return{eventCache:e,serverCache:t}}function bm(e,t,n,r){return vm(new gm(t,n,r),e.serverCache)}function wm(e,t,n,r){return vm(e.eventCache,new gm(t,n,r))}function Cm(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function km(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/let Em;class Sm{constructor(e,t=(()=>(Em||(Em=new Sp(Ef)),Em))()){this.value=e,this.children=t}static fromObject(e){let t=new Sm(null);return If(e,((e,n)=>{t=t.set(new ep(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:tp(),value:this.value};if(up(e))return null;{const n=np(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ip(e),t);if(null!=i){return{path:lp(new ep(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(up(e))return this;{const t=np(e),n=this.children.get(t);return null!==n?n.subtree(ip(e)):new Sm(null)}}set(e,t){if(up(e))return new Sm(t,this.children);{const n=np(e),r=(this.children.get(n)||new Sm(null)).set(ip(e),t),i=this.children.insert(n,r);return new Sm(this.value,i)}}remove(e){if(up(e))return this.children.isEmpty()?new Sm(null):new Sm(null,this.children);{const t=np(e),n=this.children.get(t);if(n){const r=n.remove(ip(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Sm(null):new Sm(this.value,i)}return this}}get(e){if(up(e))return this.value;{const t=np(e),n=this.children.get(t);return n?n.get(ip(e)):null}}setTree(e,t){if(up(e))return t;{const n=np(e),r=(this.children.get(n)||new Sm(null)).setTree(ip(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Sm(this.value,i)}}fold(e){return this.fold_(tp(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(lp(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,tp(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(up(e))return null;{const r=np(e),i=this.children.get(r);return i?i.findOnPath_(ip(e),lp(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,tp(),t)}foreachOnPath_(e,t,n){if(up(e))return this;{this.value&&n(t,this.value);const r=np(e),i=this.children.get(r);return i?i.foreachOnPath_(ip(e),lp(t,r),n):new Sm(null)}}foreach(e){this.foreach_(tp(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(lp(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xm{constructor(e){this.writeTree_=e}static empty(){return new xm(new Sm(null))}}function Tm(e,t,n){if(up(t))return new xm(new Sm(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let o=r.value;const s=cp(i,t);return o=o.updateChild(s,n),new xm(e.writeTree_.set(i,o))}{const r=new Sm(n),i=e.writeTree_.setTree(t,r);return new xm(i)}}}function Im(e,t,n){let r=e;return If(n,((e,n)=>{r=Tm(r,lp(t,e),n)})),r}function Pm(e,t){if(up(t))return xm.empty();{const n=e.writeTree_.setTree(t,new Sm(null));return new xm(n)}}function Nm(e,t){return null!=Rm(e,t)}function Rm(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(cp(n.path,t)):null}function Om(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Lp,((e,n)=>{t.push(new _p(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new _p(e,n.value))})),t}function Dm(e,t){if(up(t))return e;{const n=Rm(e,t);return new xm(null!=n?new Sm(n):e.writeTree_.subtree(t))}}function Mm(e){return e.writeTree_.isEmpty()}function Lm(e,t){return Am(tp(),e.writeTree_,t)}function Am(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(rh(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Am(lp(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(lp(e,".priority"),r)),n}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fm(e,t){return Gm(t,e)}function zm(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));rh(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,o=!1,s=e.allWrites.length-1;for(;i&&s>=0;){const t=e.allWrites[s];t.visible&&(s>=n&&jm(t,r.path)?i=!1:hp(r.path,t.path)&&(o=!0)),s--}if(i){if(o)return function(e){e.visibleWrites=$m(e.allWrites,Um,tp()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Pm(e.visibleWrites,r.path);else{If(r.children,(t=>{e.visibleWrites=Pm(e.visibleWrites,lp(r.path,t))}))}return!0}return!1}function jm(e,t){if(e.snap)return hp(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&hp(lp(e.path,n),t))return!0;return!1}function Um(e){return e.visible}function $m(e,t,n){let r=xm.empty();for(let i=0;i<e.length;++i){const o=e[i];if(t(o)){const e=o.path;let t;if(o.snap)hp(n,e)?(t=cp(n,e),r=Tm(r,t,o.snap)):hp(e,n)&&(t=cp(e,n),r=Tm(r,tp(),o.snap.getChild(t)));else{if(!o.children)throw ih("WriteRecord should have .snap or .children");if(hp(n,e))t=cp(n,e),r=Im(r,t,o.children);else if(hp(e,n))if(t=cp(e,n),up(t))r=Im(r,tp(),o.children);else{const e=wh(o.children,np(t));if(e){const n=e.getChild(ip(t));r=Tm(r,tp(),n)}}}}}return r}function qm(e,t,n,r,i){if(r||i){const o=Dm(e.visibleWrites,t);if(!i&&Mm(o))return n;if(i||null!=n||Nm(o,tp())){const o=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(hp(e.path,t)||hp(t,e.path))};return Lm($m(e.allWrites,o,t),n||Wp.EMPTY_NODE)}return null}{const r=Rm(e.visibleWrites,t);if(null!=r)return r;{const r=Dm(e.visibleWrites,t);if(Mm(r))return n;if(null!=n||Nm(r,tp())){return Lm(r,n||Wp.EMPTY_NODE)}return null}}}function Wm(e,t,n,r){return qm(e.writeTree,e.treePath,t,n,r)}function Bm(e,t){return function(e,t,n){let r=Wp.EMPTY_NODE;const i=Rm(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Lp,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Dm(e.visibleWrites,t);return n.forEachChild(Lp,((e,t)=>{const n=Lm(Dm(i,new ep(e)),t);r=r.updateImmediateChild(e,n)})),Om(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Om(Dm(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Hm(e,t,n,r){return function(e,t,n,r,i){rh(r||i,"Either existingEventSnap or existingServerSnap must exist");const o=lp(t,n);if(Nm(e.visibleWrites,o))return null;{const t=Dm(e.visibleWrites,o);return Mm(t)?i.getChild(n):Lm(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Vm(e,t){return function(e,t){return Rm(e.visibleWrites,t)}(e.writeTree,lp(e.treePath,t))}function Km(e,t,n,r,i,o){return function(e,t,n,r,i,o,s){let a;const l=Dm(e.visibleWrites,t),u=Rm(l,tp());if(null!=u)a=u;else{if(null==n)return[];a=Lm(l,n)}if(a=a.withIndex(s),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=s.getCompare(),n=o?a.getReverseIteratorFrom(r,s):a.getIteratorFrom(r,s);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,o)}function Qm(e,t,n){return function(e,t,n,r){const i=lp(t,n),o=Rm(e.visibleWrites,i);if(null!=o)return o;if(r.isCompleteForChild(n))return Lm(Dm(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Ym(e,t){return Gm(lp(e.treePath,t),e.writeTree)}function Gm(e,t){return{treePath:e,writeTree:t}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Xm{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;rh("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),rh(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Gp(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Yp(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Qp(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw ih("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Gp(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jm=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Zm{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new gm(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qm(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:km(this.viewCache_),i=Km(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function eg(e,t,n,r,i){const o=new Xm;let s,a;if(n.type===cm.OVERWRITE){const l=n;l.source.fromUser?s=rg(e,t,l.path,l.snap,r,i,o):(rh(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!up(l.path),s=ng(e,t,l.path,l.snap,r,i,a,o))}else if(n.type===cm.MERGE){const l=n;l.source.fromUser?s=function(e,t,n,r,i,o,s){let a=t;return r.foreach(((r,l)=>{const u=lp(n,r);ig(t,np(u))&&(a=rg(e,a,u,l,i,o,s))})),r.foreach(((r,l)=>{const u=lp(n,r);ig(t,np(u))||(a=rg(e,a,u,l,i,o,s))})),a}(e,t,l.path,l.children,r,i,o):(rh(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),s=sg(e,t,l.path,l.children,r,i,a,o))}else if(n.type===cm.ACK_USER_WRITE){const a=n;s=a.revert?function(e,t,n,r,i,o){let s;if(null!=Vm(r,n))return t;{const a=new Zm(r,t,i),l=t.eventCache.getNode();let u;if(up(n)||".priority"===np(n)){let n;if(t.serverCache.isFullyInitialized())n=Wm(r,km(t));else{const e=t.serverCache.getNode();rh(e instanceof Wp,"serverChildren would be complete if leaf node"),n=Bm(r,e)}n=n,u=e.filter.updateFullNode(l,n,o)}else{const i=np(n);let c=Qm(r,i,t.serverCache);null==c&&t.serverCache.isCompleteForChild(i)&&(c=l.getImmediateChild(i)),u=null!=c?e.filter.updateChild(l,i,c,ip(n),a,o):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,Wp.EMPTY_NODE,ip(n),a,o):l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(s=Wm(r,km(t)),s.isLeafNode()&&(u=e.filter.updateFullNode(u,s,o)))}return s=t.serverCache.isFullyInitialized()||null!=Vm(r,tp()),bm(t,u,s,e.filter.filtersNodes())}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/(e,t,a.path,r,i,o):function(e,t,n,r,i,o,s){if(null!=Vm(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(up(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ng(e,t,n,l.getNode().getChild(n),i,o,a,s);if(up(n)){let r=new Sm(null);return l.getNode().forEachChild(Cp,((e,t)=>{r=r.set(new ep(e),t)})),sg(e,t,n,r,i,o,a,s)}return t}{let u=new Sm(null);return r.foreach(((e,t)=>{const r=lp(n,e);l.isCompleteForPath(r)&&(u=u.set(e,l.getNode().getChild(r)))})),sg(e,t,n,u,i,o,a,s)}}(e,t,a.path,a.affectedTree,r,i,o)}else{if(n.type!==cm.LISTEN_COMPLETE)throw ih("Unknown operation type: "+n.type);s=function(e,t,n,r,i){const o=t.serverCache,s=wm(t,o.getNode(),o.isFullyInitialized()||up(n),o.isFiltered());return tg(e,s,n,r,Jm,i)}(e,t,n.path,r,o)}const l=o.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),o=Cm(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(o)||!r.getNode().getPriority().equals(o.getPriority()))&&n.push({type:"value",snapshotNode:Cm(t)})}}(t,s,l),{viewCache:s,changes:l}}function tg(e,t,n,r,i,o){const s=t.eventCache;if(null!=Vm(r,n))return t;{let a,l;if(up(n))if(rh(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=km(t),i=Bm(r,n instanceof Wp?n:Wp.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,o)}else{const n=Wm(r,km(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const u=np(n);if(".priority"===u){rh(1===rp(n),"Can't have a priority with additional path components");const i=s.getNode();l=t.serverCache.getNode();const o=Hm(r,n,i,l);a=null!=o?e.filter.updatePriority(i,o):s.getNode()}else{const c=ip(n);let d;if(s.isCompleteForChild(u)){l=t.serverCache.getNode();const e=Hm(r,n,s.getNode(),l);d=null!=e?s.getNode().getImmediateChild(u).updateChild(c,e):s.getNode().getImmediateChild(u)}else d=Qm(r,u,t.serverCache);a=null!=d?e.filter.updateChild(s.getNode(),u,d,c,i,o):s.getNode()}}return bm(t,a,s.isFullyInitialized()||up(n),e.filter.filtersNodes())}}function ng(e,t,n,r,i,o,s,a){const l=t.serverCache;let u;const c=s?e.filter:e.filter.getIndexedFilter();if(up(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),e,null)}else{const e=np(n);if(!l.isCompleteForPath(n)&&rp(n)>1)return t;const i=ip(n),o=l.getNode().getImmediateChild(e).updateChild(i,r);u=".priority"===e?c.updatePriority(l.getNode(),o):c.updateChild(l.getNode(),e,o,i,Jm,null)}const d=wm(t,u,l.isFullyInitialized()||up(n),c.filtersNodes());return tg(e,d,n,i,new Zm(i,d,o),a)}function rg(e,t,n,r,i,o,s){const a=t.eventCache;let l,u;const c=new Zm(i,t,o);if(up(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,s),l=bm(t,u,!0,e.filter.filtersNodes());else{const i=np(n);if(".priority"===i)u=e.filter.updatePriority(t.eventCache.getNode(),r),l=bm(t,u,a.isFullyInitialized(),a.isFiltered());else{const o=ip(n),u=a.getNode().getImmediateChild(i);let d;if(up(o))d=r;else{const e=c.getCompleteChild(i);d=null!=e?".priority"===op(o)&&e.getChild(ap(o)).isEmpty()?e:e.updateChild(o,r):Wp.EMPTY_NODE}if(u.equals(d))l=t;else{l=bm(t,e.filter.updateChild(a.getNode(),i,d,o,c,s),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function ig(e,t){return e.eventCache.isCompleteForChild(t)}function og(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function sg(e,t,n,r,i,o,s,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,u=t;l=up(n)?r:new Sm(null).setTree(n,r);const c=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(c.hasChild(n)){const l=og(0,t.serverCache.getNode().getImmediateChild(n),r);u=ng(e,u,new ep(n),l,i,o,s,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!c.hasChild(n)&&!l){const l=og(0,t.serverCache.getNode().getImmediateChild(n),r);u=ng(e,u,new ep(n),l,i,o,s,a)}})),u}class ag{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Xp(n.getIndex()),i=(o=n).loadsAllData()?new Xp(o.getIndex()):o.hasLimit()?new Zp(o):new Jp(o);var o;this.processor_=function(e){return{filter:e}}(i);const s=t.serverCache,a=t.eventCache,l=r.updateFullNode(Wp.EMPTY_NODE,s.getNode(),null),u=i.updateFullNode(Wp.EMPTY_NODE,a.getNode(),null),c=new gm(l,s.isFullyInitialized(),r.filtersNodes()),d=new gm(u,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=vm(d,c),this.eventGenerator_=new ym(this.query_)}get query(){return this.query_}}function lg(e,t){const n=km(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!up(t)&&!n.getImmediateChild(np(t)).isEmpty())?n.getChild(t):null}function ug(e,t,n,r){t.type===cm.MERGE&&null!==t.source.queryId&&(rh(km(e.viewCache_),"We should always have a full cache before handling merges"),rh(Cm(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,o=eg(e.processor_,i,t,n,r);var s,a;return s=e.processor_,a=o.viewCache,rh(a.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),rh(a.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed"),rh(o.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,function(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],o=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&o.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),_m(e,i,"child_removed",t,r,n),_m(e,i,"child_added",t,r,n),_m(e,i,"child_moved",o,r,n),_m(e,i,"child_changed",t,r,n),_m(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/(e,o.changes,o.viewCache.eventCache.getNode(),null)}let cg,dg;class hg{constructor(){this.views=new Map}}function fg(e,t,n,r){const i=t.source.queryId;if(null!==i){const o=e.views.get(i);return rh(null!=o,"SyncTree gave us an op for an invalid query."),ug(o,t,n,r)}{let i=[];for(const o of e.views.values())i=i.concat(ug(o,t,n,r));return i}}function pg(e,t){let n=null;for(const r of e.views.values())n=n||lg(r,t);return n}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Sm(null),this.pendingWriteTree_={visibleWrites:xm.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function gg(e,t,n,r,i){return function(e,t,n,r,i){rh(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Tm(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?wg(e,new pm({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function yg(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(zm(e.pendingWriteTree_,t)){let t=new Sm(null);return null!=r.snap?t=t.set(tp(),!0):If(r.children,(e=>{t=t.set(new ep(e),!0)})),wg(e,new fm(r.path,t,n))}return[]}function _g(e,t,n){return wg(e,new pm({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function vg(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=pg(n,cp(e,t));if(r)return r}));return qm(r,t,i,n,!0)}function bg(e,t){const n=t._path;let r=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const i=cp(e,n);r=r||pg(t,i)}));let i=e.syncPointTree_.get(n);i?r=r||pg(i,tp()):(i=new hg,e.syncPointTree_=e.syncPointTree_.set(n,i));const o=null!=r,s=o?new gm(r,!0,!1):null;return function(e){return Cm(e.viewCache_)}(function(e,t,n,r,i){const o=t._queryIdentifier,s=e.views.get(o);if(!s){let e=Wm(n,i?r:null),o=!1;e?o=!0:r instanceof Wp?(e=Bm(n,r),o=!1):(e=Wp.EMPTY_NODE,o=!1);const s=vm(new gm(e,o,!1),new gm(r,i,!1));return new ag(t,s)}return s}(i,t,Fm(e.pendingWriteTree_,t._path),o?s.getNode():Wp.EMPTY_NODE,o))}function wg(e,t){return Cg(t,e.syncPointTree_,null,Fm(e.pendingWriteTree_,tp()))}function Cg(e,t,n,r){if(up(e.path))return kg(e,t,n,r);{const i=t.get(tp());null==n&&null!=i&&(n=pg(i,tp()));let o=[];const s=np(e.path),a=e.operationForChild(s),l=t.children.get(s);if(l&&a){const e=n?n.getImmediateChild(s):null,t=Ym(r,s);o=o.concat(Cg(a,l,e,t))}return i&&(o=o.concat(fg(i,e,r,n))),o}}function kg(e,t,n,r){const i=t.get(tp());null==n&&null!=i&&(n=pg(i,tp()));let o=[];return t.children.inorderTraversal(((t,i)=>{const s=n?n.getImmediateChild(t):null,a=Ym(r,t),l=e.operationForChild(t);l&&(o=o.concat(kg(l,i,s,a)))})),i&&(o=o.concat(fg(i,e,r,n))),o}function Eg(e,t){return e.tagToQueryMap.get(t)}function Sg(e){const t=e.indexOf("$");return rh(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ep(e.substr(0,t))}}function xg(e,t,n){const r=e.syncPointTree_.get(t);rh(r,"Missing sync point for query tag that we're tracking");return fg(r,n,Fm(e.pendingWriteTree_,t),null)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Tg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Tg(t)}node(){return this.node_}}class Ig{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=lp(this.path_,e);return new Ig(this.syncTree_,t)}node(){return vg(this.syncTree_,this.path_)}}const Pg=function(e,t,n){return e&&"object"==typeof e?(rh(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ng(e[".sv"],t,n):"object"==typeof e[".sv"]?Rg(e[".sv"],t):void rh(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ng=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:rh(!1,"Unexpected server value: "+e)}},Rg=function(e,t,n){e.hasOwnProperty("increment")||rh(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&rh(!1,"Unexpected increment value: "+r);const i=t.node();if(rh(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return"number"!=typeof o?r:o+r},Og=function(e,t,n){return Dg(e,new Tg(t),n)};function Dg(e,t,n){const r=e.getPriority().val(),i=Pg(r,t.getImmediateChild(".priority"),n);let o;if(e.isLeafNode()){const r=e,o=Pg(r.getValue(),t,n);return o!==r.getValue()||i!==r.getPriority().val()?new Mp(o,Hp(i)):e}{const r=e;return o=r,i!==r.getPriority().val()&&(o=o.updatePriority(new Mp(i))),r.forEachChild(Lp,((e,r)=>{const i=Dg(r,t.getImmediateChild(e),n);i!==r&&(o=o.updateImmediateChild(e,i))})),o}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Mg{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Lg(e,t){let n=t instanceof ep?t:new ep(t),r=e,i=np(n);for(;null!==i;){const e=wh(r.node.children,i)||{children:{},childCount:0};r=new Mg(i,r,e),n=ip(n),i=np(n)}return r}function Ag(e){return e.node.value}function Fg(e,t){e.node.value=t,qg(e)}function zg(e){return e.node.childCount>0}function jg(e,t){If(e.node.children,((n,r)=>{t(new Mg(n,e,r))}))}function Ug(e,t,n,r){n&&!r&&t(e),jg(e,(e=>{Ug(e,t,!0,r)})),n&&r&&t(e)}function $g(e){return new ep(null===e.parent?e.name:$g(e.parent)+"/"+e.name)}function qg(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===Ag(e)&&!zg(e)}(n),i=bh(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,qg(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,qg(e))}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/(e.parent,e.name,e)}const Wg=/[\[\].#$\/\u0000-\u001F\u007F]/,Bg=/[\[\].#$\u0000-\u001F\u007F]/,Hg=function(e){return"string"==typeof e&&0!==e.length&&!Wg.test(e)},Vg=function(e){return"string"==typeof e&&0!==e.length&&!Bg.test(e)},Kg=function(e,t,n){const r=n instanceof ep?new fp(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+mp(r));if("function"==typeof t)throw new Error(e+"contains a function "+mp(r)+" with contents = "+t.toString());if(bf(t))throw new Error(e+"contains "+t.toString()+" "+mp(r));if("string"==typeof t&&t.length>10485760/3&&Ih(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+mp(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(If(t,((t,o)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Hg(t)))throw new Error(e+" contains an invalid key ("+t+") "+mp(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var s,a;a=t,(s=r).parts_.length>0&&(s.byteLength_+=1),s.parts_.push(a),s.byteLength_+=Ih(a),pp(s),Kg(e,o,r),function(e){const t=e.parts_.pop();e.byteLength_-=Ih(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+mp(r)+" in addition to actual children.")}},Qg=function(e,t,n,r){if(!(r&&void 0===n||Vg(n)))throw new Error(Th(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Yg=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Hg(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Vg(e)}(n))throw new Error(Th(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Gg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Xg(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],o=i.getPath();null===n||dp(o,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:o}),n.events.push(i)}n&&e.eventLists_.push(n)}function Jg(e,t,n){Xg(e,n),Zg(e,(e=>hp(e,t)||hp(t,e)))}function Zg(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(ey(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function ey(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();ff&&mf("event: "+n.toString()),Of(r)}}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ty{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Gg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=om(),this.transactionQueueTree_=new Mg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ny(e,t,n){if(e.stats_=Wf(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new rm(e.repoInfo_,((t,n,r,i)=>{oy(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>sy(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_h(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new yp(e.repoInfo_,t,((t,n,r,i)=>{oy(e,t,n,r,i)}),(t=>{sy(e,t)}),(t=>{!function(e,t){If(t,((t,n)=>{ay(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return qf[n]||(qf[n]=t()),qf[n]}(e.repoInfo_,(()=>new um(e.stats_,e.server_))),e.infoData_=new im,e.infoSyncTree_=new mg({startListening:(t,n,r,i)=>{let o=[];const s=e.infoData_.getNode(t._path);return s.isEmpty()||(o=_g(e.infoSyncTree_,t._path,s),setTimeout((()=>{i("ok")}),0)),o},stopListening:()=>{}}),ay(e,"connected",!1),e.serverSyncTree_=new mg({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const o=i(n,r);Jg(e.eventQueue_,t._path,o)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ry(e){const t=e.infoData_.getNode(new ep(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function iy(e){return(t=(t={timestamp:ry(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function oy(e,t,n,r,i){e.dataUpdateCount++;const o=new ep(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let s=[];if(i)if(r){const t=kh(n,(e=>Hp(e)));s=function(e,t,n,r){const i=Eg(e,r);if(i){const r=Sg(i),o=r.path,s=r.queryId,a=cp(o,t),l=Sm.fromObject(n);return xg(e,o,new mm(hm(s),a,l))}return[]}(e.serverSyncTree_,o,t,i)}else{const t=Hp(n);s=function(e,t,n,r){const i=Eg(e,r);if(null!=i){const r=Sg(i),o=r.path,s=r.queryId,a=cp(o,t);return xg(e,o,new pm(hm(s),a,n))}return[]}(e.serverSyncTree_,o,t,i)}else if(r){const t=kh(n,(e=>Hp(e)));s=function(e,t,n){const r=Sm.fromObject(n);return wg(e,new mm({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,o,t)}else{const t=Hp(n);s=_g(e.serverSyncTree_,o,t)}let a=o;s.length>0&&(a=fy(e,o)),Jg(e.eventQueue_,a,s)}function sy(e,t){ay(e,"connected",t),!1===t&&function(e){cy(e,"onDisconnectEvents");const t=iy(e),n=om();am(e.onDisconnect_,tp(),((r,i)=>{const o=function(e,t,n,r){return Dg(t,new Ig(n,e),r)}(r,i,e.serverSyncTree_,t);sm(n,r,o)}));let r=[];am(n,tp(),((t,n)=>{r=r.concat(_g(e.serverSyncTree_,t,n));const i=function(e,t){const n=$g(py(e,t)),r=Lg(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{_y(e,t)})),_y(e,r),Ug(r,(t=>{_y(e,t)})),n}(e,t);fy(e,i)})),e.onDisconnect_=om(),Jg(e.eventQueue_,tp(),r)}(e)}function ay(e,t,n){const r=new ep("/.info/"+t),i=Hp(n);e.infoData_.updateSnapshot(r,i);const o=_g(e.infoSyncTree_,r,i);Jg(e.eventQueue_,r,o)}function ly(e){return e.nextWriteId_++}function uy(e,t){const n=bg(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const r=Hp(n).withIndex(t._queryParams.getIndex()),i=_g(e.serverSyncTree_,t._path,r);var o,s;return o=e.eventQueue_,s=t._path,Xg(o,i),Zg(o,(e=>dp(e,s))),Promise.resolve(r)}),(n=>(cy(e,"get for query "+_h(t)+" failed: "+n),Promise.reject(new Error(n)))))}function cy(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),mf(n,...t)}function dy(e,t,n){return vg(e.serverSyncTree_,t,n)||Wp.EMPTY_NODE}function hy(e,t=e.transactionQueueTree_){if(t||yy(e,t),Ag(t)){const n=my(e,t);rh(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=dy(e,t,r);let o=i;const s=i.hash();for(let u=0;u<n.length;u++){const e=n[u];rh(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=cp(t,e.path);o=o.updateChild(r,e.currentOutputSnapshotRaw)}const a=o.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{cy(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(yg(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();yy(e,Lg(e.transactionQueueTree_,t)),hy(e,e.transactionQueueTree_),Jg(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Of(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{vf("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}fy(e,t)}}),s)}(e,$g(t),n)}else zg(t)&&jg(t,(t=>{hy(e,t)}))}function fy(e,t){const n=py(e,t),r=$g(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const o=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],u=cp(n,l.path);let c,d=!1;if(rh(null!==u,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)d=!0,c=l.abortReason,i=i.concat(yg(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)d=!0,c="maxretry",i=i.concat(yg(e.serverSyncTree_,l.currentWriteId,!0));else{const n=dy(e,l.path,o);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){Kg("transaction failed: Data returned ",r,l.path);let t=Hp(r);"object"==typeof r&&null!=r&&bh(r,".priority")||(t=t.updatePriority(n.getPriority()));const s=l.currentWriteId,a=iy(e),u=Og(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=u,l.currentWriteId=ly(e),o.splice(o.indexOf(s),1),i=i.concat(gg(e.serverSyncTree_,l.path,u,l.currentWriteId,l.applyLocally)),i=i.concat(yg(e.serverSyncTree_,s,!0))}else d=!0,c="nodata",i=i.concat(yg(e.serverSyncTree_,l.currentWriteId,!0))}Jg(e.eventQueue_,n,i),i=[],d&&(t[a].status=2,s=t[a].unwatcher,setTimeout(s,Math.floor(0)),t[a].onComplete&&("nodata"===c?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(c),!1,null)))))}var s;yy(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Of(r[a]);hy(e,e.transactionQueueTree_)}(e,my(e,n),r),r}function py(e,t){let n,r=e.transactionQueueTree_;for(n=np(t);null!==n&&void 0===Ag(r);)r=Lg(r,n),n=np(t=ip(t));return r}function my(e,t){const n=[];return gy(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function gy(e,t,n){const r=Ag(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);jg(t,(t=>{gy(e,t,n)}))}function yy(e,t){const n=Ag(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Fg(t,n.length>0?n:void 0)}jg(t,(t=>{yy(e,t)}))}function _y(e,t){const n=Ag(t);if(n){const r=[];let i=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(rh(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(rh(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(yg(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?Fg(t,void 0):n.length=o+1,Jg(e.eventQueue_,$g(t),i);for(let e=0;e<r.length;e++)Of(r[e])}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const vy=function(e,t){const n=by(e),r=n.namespace;"firebase.com"===n.domain&&_f(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||_f("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&vf("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new zf(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new ep(n.pathString)}},by=function(e){let t="",n="",r="",i="",o="",s=!0,a="https",l=443;if("string"==typeof e){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");-1===c&&(c=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(c,d)),c<d&&(i=function(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}(e.substring(c,d)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):vf(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));u=t.indexOf(":"),u>=0?(s="https"===a||"wss"===a,l=parseInt(t.substring(u+1),10)):u=t.length;const f=t.slice(0,u);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),o=r}"ns"in h&&(o=h.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:s,scheme:a,pathString:i,namespace:o}};
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class wy{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return up(this._path)?null:op(this._path)}get ref(){return new Cy(this._repo,this._path)}get _queryIdentifier(){const e=nm(this._queryParams),t=xf(e);return"{}"===t?"default":t}get _queryObject(){return nm(this._queryParams)}isEqual(e){if(!((e=Nh(e))instanceof wy))return!1;const t=this._repo===e._repo,n=dp(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Cy extends wy{constructor(e,t){super(e,t,new em,!1)}get parent(){const e=ap(this._path);return null===e?null:new Cy(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class ky{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ep(e),n=Sy(this.ref,e);return new ky(this._node.getChild(t),n,Lp)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new ky(n,Sy(this.ref,t),Lp))))}hasChild(e){const t=new ep(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ey(e,t){return(e=Nh(e))._checkNotDeleted("ref"),void 0!==t?Sy(e._root,t):e._root}function Sy(e,t){var n,r,i,o;return null===np((e=Nh(e))._path)?(n="child",r="path",o=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Qg(n,r,i,o)):Qg("child","path",t,!1),new Cy(e._repo,lp(e._path,t))}function xy(e){return uy((e=Nh(e))._repo,e).then((t=>new ky(t,new Cy(e._repo,e._path),e._queryParams.getIndex())))}!function(e){rh(!cg,"__referenceConstructor has already been defined"),cg=e}(Cy),function(e){rh(!dg,"__referenceConstructor has already been defined"),dg=e}(Cy);
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
const Ty={};function Iy(e,t,n,r,i){let o=r||e.options.databaseURL;void 0===o&&(e.options.projectId||_f("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mf("Using default host for project ",e.options.projectId),o=`${e.options.projectId}-default-rtdb.firebaseio.com`);let s,a,l=vy(o,i),u=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(s=!0,o=`http://${a}?ns=${u.namespace}`,l=vy(o,i),u=l.repoInfo):s=!l.repoInfo.secure;const c=i&&s?new Af(Af.OWNER):new Lf(e.name,e.options,t);Yg("Invalid Firebase Database URL",l),up(l.path)||_f("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=Ty[t.name];i||(i={},Ty[t.name]=i);let o=i[e.toURLString()];o&&_f("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return o=new ty(e,false,n,r),i[e.toURLString()]=o,o}(u,e,c,new Mf(e.name,n));return new Py(d,e)}class Py{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ny(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Cy(this._repo,tp())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ty[t];n&&n[e.key]===e||_f(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&_f("Cannot call "+e+" on a deleted database.")}}function Ny(e=Zh(),t){return Yh(e,"database").getImmediate({identifier:t})}
/**
* @license
* Copyright 2021 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/yp.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},yp.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){nf="9.1.3",Qh(new Rh("database",((e,{instanceIdentifier:t})=>Iy(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ef("@firebase/database","0.12.2",e),ef("@firebase/database","0.12.2","esm2017")}();function Ry(e){return Array.prototype.slice.call(e)}function Oy(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function Dy(e,t,n){var r,i=new Promise((function(i,o){Oy(r=e[t].apply(e,n)).then(i,o)}));return i.request=r,i}function My(e,t,n){var r=Dy(e,t,n);return r.then((function(e){if(e)return new Uy(e,r.request)}))}function Ly(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function Ay(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return Dy(this[t],r,arguments)})}))}function Fy(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function zy(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return My(this[t],r,arguments)})}))}function jy(e){this._index=e}function Uy(e,t){this._cursor=e,this._request=t}function $y(e){this._store=e}function qy(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function Wy(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new qy(n)}function By(e){this._db=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ef("firebase","9.1.3","app"),Ly(jy,"_index",["name","keyPath","multiEntry","unique"]),Ay(jy,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),zy(jy,"_index",IDBIndex,["openCursor","openKeyCursor"]),Ly(Uy,"_cursor",["direction","key","primaryKey","value"]),Ay(Uy,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(Uy.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,n),Oy(t._request).then((function(e){if(e)return new Uy(e,t._request)}))}))})})),$y.prototype.createIndex=function(){return new jy(this._store.createIndex.apply(this._store,arguments))},$y.prototype.index=function(){return new jy(this._store.index.apply(this._store,arguments))},Ly($y,"_store",["name","keyPath","indexNames","autoIncrement"]),Ay($y,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),zy($y,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),Fy($y,"_store",IDBObjectStore,["deleteIndex"]),qy.prototype.objectStore=function(){return new $y(this._tx.objectStore.apply(this._tx,arguments))},Ly(qy,"_tx",["objectStoreNames","mode"]),Fy(qy,"_tx",IDBTransaction,["abort"]),Wy.prototype.createObjectStore=function(){return new $y(this._db.createObjectStore.apply(this._db,arguments))},Ly(Wy,"_db",["name","version","objectStoreNames"]),Fy(Wy,"_db",IDBDatabase,["deleteObjectStore","close"]),By.prototype.transaction=function(){return new qy(this._db.transaction.apply(this._db,arguments))},Ly(By,"_db",["name","version","objectStoreNames"]),Fy(By,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[$y,jy].forEach((function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var t=Ry(arguments),n=t[t.length-1],r=this._store||this._index,i=r[e].apply(r,t.slice(0,-1));i.onsuccess=function(){n(i.result)}})}))})),[jy,$y].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})}));const Hy="@firebase/installations",Vy=new mh("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Ky(e){return e instanceof ph&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Yy(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Gy(e,t){const n=(await t.json()).error;return Vy.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Xy({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Jy(e,{refreshToken:t}){const n=Xy(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function Zy(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function e_(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const t_=/^[cdef][\w-]{21}$/;function n_(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return t_.test(t)?t:""}catch(e){return""}}function r_(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Map;function o_(e,t){const n=r_(e);s_(n,t),function(e,t){const n=function(){!a_&&"BroadcastChannel"in self&&(a_=new BroadcastChannel("[Firebase] FID Change"),a_.onmessage=e=>{s_(e.data.key,e.data.fid)});return a_}();n&&n.postMessage({key:e,fid:t});0===i_.size&&a_&&(a_.close(),a_=null)}(n,t)}function s_(e,t){const n=i_.get(e);if(n)for(const r of n)r(t)}let a_=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const l_="firebase-installations-store";let u_=null;function c_(){var e,t,n;return u_||(e=e=>{switch(e.oldVersion){case 0:e.createObjectStore(l_)}},t=Dy(indexedDB,"open",["firebase-installations-database",1]),(n=t.request)&&(n.onupgradeneeded=function(t){e&&e(new Wy(n.result,t.oldVersion,n.transaction))}),u_=t.then((function(e){return new By(e)}))),u_}async function d_(e,t){const n=r_(e),r=(await c_()).transaction(l_,"readwrite"),i=r.objectStore(l_),o=await i.get(n);return await i.put(t,n),await r.complete,o&&o.fid===t.fid||o_(e,t.fid),t}async function h_(e){const t=r_(e),n=(await c_()).transaction(l_,"readwrite");await n.objectStore(l_).delete(t),await n.complete}async function f_(e,t){const n=r_(e),r=(await c_()).transaction(l_,"readwrite"),i=r.objectStore(l_),o=await i.get(n),s=t(o);return void 0===s?await i.delete(n):await i.put(s,n),await r.complete,!s||o&&o.fid===s.fid||o_(e,s.fid),s}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(e){let t;const n=await f_(e,(n=>{const r=function(e){return y_(e||{fid:n_(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Vy.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:async function(e,t){try{return d_(e,await async function(e,{fid:t}){const n=Qy(e),r=Xy(e),i={fid:t,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.5.2"},o={method:"POST",headers:r,body:JSON.stringify(i)},s=await Zy((()=>fetch(n,o)));if(s.ok){const e=await s.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Yy(e.authToken)}}throw await Gy("Create Installation",s)}(e,t))}catch(n){throw Ky(n)&&409===n.customData.serverCode?await h_(e):await d_(e,{fid:t.fid,registrationStatus:0}),n}}(e,n)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:m_(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function m_(e){let t=await g_(e);for(;1===t.registrationStatus;)await e_(100),t=await g_(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await p_(e);return n||t}return t}function g_(e){return f_(e,(e=>{if(!e)throw Vy.create("installation-not-found");return y_(e)}))}function y_(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function __({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${Qy(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),i=Jy(e,n),o=t.getImmediate({optional:!0});o&&i.append("x-firebase-client",o.getPlatformInfoString());const s={installation:{sdkVersion:"w:0.5.2"}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await Zy((()=>fetch(r,a)));if(l.ok){return Yy(await l.json())}throw await Gy("Generate Auth Token",l)}async function v_(e,t=!1){let n;const r=await f_(e.appConfig,(r=>{if(!w_(r))throw Vy.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await b_(e.appConfig);for(;1===n.authToken.requestStatus;)await e_(100),n=await b_(e.appConfig);const r=n.authToken;return 0===r.requestStatus?v_(e,t):r}(e,t),r;{if(!navigator.onLine)throw Vy.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await __(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await d_(e.appConfig,r),n}catch(n){if(!Ky(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await d_(e.appConfig,n)}else await h_(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function b_(e){return f_(e,(e=>{if(!w_(e))throw Vy.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function w_(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function C_(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await p_(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n.appConfig);return(await v_(n,t)).token}function k_(e){return Vy.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=e=>{const t=Yh(e.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await p_(t.appConfig);return r?r.catch(console.error):v_(t).catch(console.error),n.fid}(t),getToken:e=>C_(t,e)}};Qh(new Rh("installations",(e=>{const t=e.getProvider("app").getImmediate();return{app:t,appConfig:function(e){if(!e||!e.options)throw k_("App Configuration");if(!e.name)throw k_("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw k_(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:Yh(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Qh(new Rh("installations-internal",E_,"PRIVATE")),ef(Hy,"0.5.2"),ef(Hy,"0.5.2","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S_="https://www.googletagmanager.com/gtag/js",x_=new Uh("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T_(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function I_(e,t,n,r){return async function(i,o,s){try{"event"===i?await async function(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await T_(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){o=[];break}o.push(i)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){x_.error(o)}}(e,t,n,o,s):"config"===i?await async function(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const e=(await T_(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(a){x_.error(a)}e("config",i,o)}(e,t,n,r,o,s):e("set",o)}catch(a){x_.error(a)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const P_=new mh("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const N_=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function R_(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function O_(e,t=N_,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw P_.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw P_.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new M_;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),D_({appId:r,apiKey:i,measurementId:o},s,a,t)}async function D_(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=N_){const{appId:o,measurementId:s}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(o),r(P_.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(a){if(s)return x_.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:o,measurementId:s};throw a}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:R_(r)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(o,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw P_.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return i.deleteThrottleMetadata(o),t}catch(a){if(!function(e){if(!(e instanceof ph&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(a)){if(i.deleteThrottleMetadata(o),s)return x_.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:o,measurementId:s};throw a}const t=503===Number(a.customData.httpStatus)?Ph(n,i.intervalMillis,30):Ph(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return i.setThrottleMetadata(o,l),x_.debug(`Calling attemptFetch again in ${t} millis`),D_(e,l,r,i)}}class M_{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L_(){if(!fh())return x_.warn(P_.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}catch(e){return x_.warn(P_.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function A_(e,t,n,r,i,o,s){var a;const l=O_(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&x_.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>x_.error(e))),t.push(l);const u=L_().then((e=>e?r.getId():void 0)),[c,d]=await Promise.all([l,u]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(S_))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${S_}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(o,c.measurementId),i("js",new Date);const h=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return h.origin="firebase",h.update=!0,null!=d&&(h.firebase_id=d),i("config",c.measurementId,h),c.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.app=e}_delete(){return delete z_[this.app.options.appId],Promise.resolve()}}let z_={},j_=[];const U_={};let $_,q_,W_=!1;function B_(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=P_.create("invalid-analytics-context",{errorInfo:t});x_.warn(n.message)}}function H_(e,t,n){B_();const r=e.options.appId;if(!r)throw P_.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw P_.create("no-api-key");x_.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=z_[r])throw P_.create("already-exists",{id:r});if(!W_){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}("dataLayer");const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let o=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(o=window[i]),window[i]=I_(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}(z_,j_,U_,"dataLayer","gtag");q_=e,$_=t,W_=!0}z_[r]=A_(e,j_,U_,t,$_,"dataLayer",n);return new F_(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(e=Zh()){const t=Yh(e=Nh(e),"analytics");return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Yh(e,"analytics");if(n.isInitialized()){const e=n.getImmediate();if(Eh(t,n.getOptions()))return e;throw P_.create("already-initialized")}return n.initialize({options:t})}(e)}function K_(e,t,n,r){e=Nh(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(q_,z_[e.app.options.appId],t,n,r).catch((e=>x_.error(e)))}const Q_="@firebase/analytics";Qh(new Rh("analytics",((e,{options:t})=>H_(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Qh(new Rh("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,r)=>K_(t,e,n,r)}}catch(t){throw P_.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),ef(Q_,"0.7.2"),ef(Q_,"0.7.2","esm2017");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Y_=new Map,G_={activated:!1,tokenObservers:[]},X_={initialized:!1,enabled:!1};function J_(e){return Y_.get(e)||G_}function Z_(e,t){Y_.set(e,t)}function ev(){return X_}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv="https://content-firebaseappcheck.googleapis.com/v1beta",nv=3e4,rv=96e4;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iv{constructor(e,t,n,r,i){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=n,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch((()=>{}))}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ch,await(t=this.getNextRun(e),new Promise((e=>{setTimeout(e,t)}))),this.pending.resolve(),await this.pending.promise,this.pending=new ch,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch((()=>{}))}catch(n){this.retryPolicy(n)?this.process(!1).catch((()=>{})):this.stop()}var t;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const e=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),e}}}const ov=new mh("appCheck","AppCheck",{"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error."});
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function sv(){return self.grecaptcha}function av(e){if(!J_(e).activated)throw ov.create("use-before-activation",{appName:e.name})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function lv({url:e,body:t},n){const r={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});i&&(r["X-Firebase-Client"]=i.getPlatformInfoString());const o={method:"POST",body:JSON.stringify(t),headers:r};let s,a;try{s=await fetch(e,o)}catch(d){throw ov.create("fetch-network-error",{originalErrorMessage:d.message})}if(200!==s.status)throw ov.create("fetch-status-error",{httpStatus:s.status});try{a=await s.json()}catch(d){throw ov.create("fetch-parse-error",{originalErrorMessage:d.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw ov.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const u=1e3*Number(l[1]),c=Date.now();return{token:a.attestationToken,expireTimeMillis:c+u,issuedAtTimeMillis:c}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uv="firebase-app-check-store";let cv=null;function dv(){return cv||(cv=new Promise(((e,t)=>{try{const n=indexedDB.open("firebase-app-check-database",1);n.onsuccess=t=>{e(t.target.result)},n.onerror=e=>{var n;t(ov.create("storage-open",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))},n.onupgradeneeded=e=>{const t=e.target.result;switch(e.oldVersion){case 0:t.createObjectStore(uv,{keyPath:"compositeKey"})}}}catch(n){t(ov.create("storage-open",{originalErrorMessage:n.message}))}})),cv)}async function hv(e,t){const n=(await dv()).transaction(uv,"readwrite"),r=n.objectStore(uv).put({compositeKey:e,value:t});return new Promise(((e,t)=>{r.onsuccess=t=>{e()},n.onerror=e=>{var n;t(ov.create("storage-set",{originalErrorMessage:null===(n=e.target.error)||void 0===n?void 0:n.message}))}}))}async function fv(e){const t=(await dv()).transaction(uv,"readonly"),n=t.objectStore(uv).get(e);return new Promise(((e,r)=>{n.onsuccess=t=>{const n=t.target.result;e(n?n.value:void 0)},t.onerror=e=>{var t;r(ov.create("storage-get",{originalErrorMessage:null===(t=e.target.error)||void 0===t?void 0:t.message}))}}))}function pv(e){return`${e.options.appId}-${e.name}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=new Uh("@firebase/app-check");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gv(e){if(fh()){let n;try{n=await function(e){return fv(pv(e))}(e)}catch(t){mv.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return n}}function yv(e,t){return fh()?function(e,t){return hv(pv(e),t)}(e,t).catch((e=>{mv.warn(`Failed to write token to IndexedDB. Error: ${e}`)})):Promise.resolve()}async function _v(){let e;try{e=await fv("debug-token")}catch(n){}if(e)return e;{const e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}));return(t=e,hv("debug-token",t)).catch((e=>mv.warn(`Failed to persist debug token to IndexedDB. Error: ${e}`))),e}var t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(){return ev().enabled}async function bv(){const e=ev();if(e.enabled&&e.token)return e.token.promise;throw Error("\n            Can't get debug token in production mode.\n        ")}function wv(){const e=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(),t=ev();if(t.initialized=!0,"string"!=typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==e.FIREBASE_APPCHECK_DEBUG_TOKEN)return;t.enabled=!0;const n=new ch;t.token=n,"string"==typeof e.FIREBASE_APPCHECK_DEBUG_TOKEN?n.resolve(e.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(_v())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv={error:"UNKNOWN_ERROR"};function kv(e){return sh.encodeString(JSON.stringify(e),!1)}async function Ev(e,t=!1){const n=e.app;av(n);const r=J_(n);let i,o,s=r.token;if(!s){const e=await r.cachedTokenPromise;e&&Iv(e)&&(s=e,Z_(n,Object.assign(Object.assign({},r),{token:s})),Tv(n,{token:s.token}))}if(!t&&s&&Iv(s))return{token:s.token};if(vv()){const t=await lv(function(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${tv}/projects/${n}/apps/${r}:exchangeDebugToken?key=${i}`,body:{debug_token:t}}}(n,await bv()),e.platformLoggerProvider);return await yv(n,t),Z_(n,Object.assign(Object.assign({},r),{token:t})),{token:t.token}}try{s=await r.provider.getToken()}catch(a){mv.error(a),i=a}return s?(o={token:s.token},Z_(n,Object.assign(Object.assign({},r),{token:s})),await yv(n,s)):o=function(e){return{token:kv(Cv),error:e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i),Tv(n,o),o}function Sv(e,t,n,r){const{app:i}=e,o=J_(i),s={next:n,error:r,type:t},a=Object.assign(Object.assign({},o),{tokenObservers:[...o.tokenObservers,s]});if(!a.tokenRefresher){const t=function(e){const{app:t}=e;return new iv((async()=>{let n;if(n=J_(t).token?await Ev(e,!0):await Ev(e),n.error)throw n.error}),(()=>!0),(()=>{const e=J_(t);if(e.token){let t=e.token.issuedAtTimeMillis+.5*(e.token.expireTimeMillis-e.token.issuedAtTimeMillis)+3e5;const n=e.token.expireTimeMillis-3e5;return t=Math.min(t,n),Math.max(0,t-Date.now())}return 0}),nv,rv)}(e);a.tokenRefresher=t}if(!a.tokenRefresher.isRunning()&&o.isTokenAutoRefreshEnabled&&a.tokenRefresher.start(),o.token&&Iv(o.token)){const e=o.token;Promise.resolve().then((()=>n({token:e.token}))).catch((()=>{}))}else null==o.token&&o.cachedTokenPromise.then((e=>{e&&Iv(e)&&n({token:e.token})})).catch((()=>{}));Z_(i,a)}function xv(e,t){const n=J_(e),r=n.tokenObservers.filter((e=>e.next!==t));0===r.length&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),Z_(e,Object.assign(Object.assign({},n),{tokenObservers:r}))}function Tv(e,t){const n=J_(e).tokenObservers;for(const i of n)try{"EXTERNAL"===i.type&&null!=t.error?i.error(t.error):i.next(t)}catch(r){}}function Iv(e){return e.expireTimeMillis-Date.now()>0}class Pv{constructor(e,t){this.app=e,this.platformLoggerProvider=t}_delete(){const{tokenObservers:e}=J_(this.app);for(const t of e)xv(this.app,t.next);return Promise.resolve()}}function Nv(e,t){const n=J_(e),r=new ch;Z_(e,Object.assign(Object.assign({},n),{reCAPTCHAState:{initialized:r}}));const i=`fire_app_check_${e.name}`,o=document.createElement("div");o.id=i,o.style.display="none",document.body.appendChild(o);const s=sv();return s?s.ready((()=>{Rv(e,t,s,i),r.resolve(s)})):function(e){const t=document.createElement("script");t.src="https://www.google.com/recaptcha/api.js",t.onload=e,document.head.appendChild(t)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */((()=>{const n=sv();if(!n)throw new Error("no recaptcha");n.ready((()=>{Rv(e,t,n,i),r.resolve(n)}))})),r.promise}function Rv(e,t,n,r){const i=n.render(r,{sitekey:t,size:"invisible"}),o=J_(e);Z_(e,Object.assign(Object.assign({},o),{reCAPTCHAState:Object.assign(Object.assign({},o.reCAPTCHAState),{widgetId:i})}))}class Ov{constructor(e){this._siteKey=e}async getToken(){if(!this._app||!this._platformLoggerProvider)throw ov.create("use-before-activation",{appName:""});const e=await async function(e){av(e);const t=J_(e).reCAPTCHAState,n=await t.initialized.promise;return new Promise(((t,r)=>{const i=J_(e).reCAPTCHAState;n.ready((()=>{t(n.execute(i.widgetId,{action:"fire_app_check"}))}))}))}(this._app).catch((e=>{throw ov.create("recaptcha-error")}));return lv(function(e,t){const{projectId:n,appId:r,apiKey:i}=e.options;return{url:`${tv}/projects/${n}/apps/${r}:exchangeRecaptchaToken?key=${i}`,body:{recaptcha_token:t}}}(this._app,e),this._platformLoggerProvider)}initialize(e){this._app=e,this._platformLoggerProvider=Yh(e,"platform-logger"),Nv(e,this._siteKey).catch((()=>{}))}isEqual(e){return e instanceof Ov&&this._siteKey===e._siteKey}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dv(e=Zh(),t){const n=Yh(e=Nh(e),"app-check");if(ev().initialized||wv(),vv()&&bv().then((e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`))),n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===t.isTokenAutoRefreshEnabled&&i.provider.isEqual(t.provider))return r;throw ov.create("already-initialized",{appName:e.name})}const r=n.initialize({options:t});return function(e,t,n){const r=J_(e),i=Object.assign(Object.assign({},r),{activated:!0});i.provider=t,i.cachedTokenPromise=gv(e).then((t=>(t&&Iv(t)&&Z_(e,Object.assign(Object.assign({},J_(e)),{token:t})),t))),i.isTokenAutoRefreshEnabled=void 0===n?e.automaticDataCollectionEnabled:n,Z_(e,i),i.provider.initialize(e)}(e,t.provider,t.isTokenAutoRefreshEnabled),r}Qh(new Rh("app-check",(e=>function(e,t){return new Pv(e,t)}(e.getProvider("app").getImmediate(),e.getProvider("platform-logger"))),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("app-check-internal").initialize()}))),Qh(new Rh("app-check-internal",(e=>function(e){return{getToken:t=>Ev(e,t),addTokenListener:t=>Sv(e,"INTERNAL",t),removeTokenListener:t=>xv(e.app,t)}}(e.getProvider("app-check").getImmediate())),"PUBLIC").setInstantiationMode("EXPLICIT")),ef("@firebase/app-check","0.4.2");export{Yd as A,Fd as L,Ed as M,Ov as R,Pd as S,xy as a,e as b,Sy as c,V_ as d,Dv as e,Id as f,Ny as g,Qu as h,Jh as i,Ud as j,F as k,Ey as r,Rd as u};
