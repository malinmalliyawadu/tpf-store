var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,n=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&l(e,t,r[t]);if(a)for(var t of a(r))o.call(r,t)&&l(e,t,r[t]);return e};import{j as i,r as c,g as d,a as h,c as m,u as p,b as u,L as b,A as f,I as g,S as y,i as v,d as x,e as N,R as w,M as A,f as j,h as k,k as I,l as S}from"./vendor.210cb023.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const O=i.exports.jsx,P=i.exports.jsxs,L=()=>O("header",{className:"bg-green-900 items-center p-8 shadow-xl border-green-400 border-b-2",children:P("ul",{className:"flex items-center justify-center text-white",children:[O("li",{className:"mr-6",children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"About"})}),O("li",{className:"mr-6",children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"Collection"})}),O("li",{className:"mr-6",children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"Sales"})}),O("li",{className:"mr-6",children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"Stewardship"})}),O("li",{className:"mr-6",children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"Contact"})}),O("li",{className:"mr-6",children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"Partners"})})]})}),E=e=>e?new Intl.NumberFormat("en-NZ",{style:"currency",currency:"NZD"}).format(e):"",B=async()=>{const e=c(d());try{const a=await h(m(e,"products"));if(a.exists())return console.log(a.val()),a.val().map(((e,a)=>{return s=n({},e),r(s,t({id:a}));var s}));console.log("No data available")}catch(a){console.error(a)}},D=({children:e,size:r="medium"})=>O("button",{className:`transition px-${"large"===r?"5":"3"} py-${"large"===r?"4":"2"} bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-red-900`,children:e});const C=[{original:"https://picsum.photos/id/1018/1000/600/",thumbnail:"https://picsum.photos/id/1018/250/150/"},{original:"https://picsum.photos/id/1015/1000/600/",thumbnail:"https://picsum.photos/id/1015/250/150/"},{original:"https://picsum.photos/id/1019/1000/600/",thumbnail:"https://picsum.photos/id/1019/250/150/"}],M=()=>{const{id:e}=p(),[r,t]=u.exports.useState();return u.exports.useEffect((()=>{B().then((e=>e&&t(e[0])))}),[e]),P("div",{className:"container mx-auto p-8",children:[P(b,{to:"/tpf-store/",className:"flex items-center gap-2 hover:text-green-700 hover:underline",children:[O(f,{className:"h-5 w-5 inline "})," Back to gallery"]}),O("h1",{className:"text-6xl mt-4 mb-8 font-serif",children:null==r?void 0:r.name}),P("div",{className:"flex max-w gap-10 flex-col md:flex-row",children:[O(g,{items:C,infinite:!1,showNav:!1,showFullscreenButton:!1,showPlayButton:!1}),P("div",{className:"flex gap-5 flex-col",children:[O("h2",{className:"text-4xl",children:E(null==r?void 0:r.price)}),P("div",{className:"flex gap-5 flex-col min-w-max",children:[P("label",{className:"block",children:["Colour:",O("select",{children:O("option",{children:"Select"})})]}),O(D,{size:"large",children:"Add to Cart"}),P("div",{children:["Quantity: ",null==r?void 0:r.stock]})]})]}),O("div",{children:null==r?void 0:r.description})]})]})},Z=({id:e,name:r,description:t,price:a,category:s})=>O("div",{className:"pb-4",children:O(b,{to:`/tpf-store/product/${e}`,children:P("div",{className:" transform transition-all flex max-w-md bg-gray-50 shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl hover:scale-110",children:[O("div",{className:"w-1/3",children:r?O("div",{className:"bg-cover block h-full",style:{backgroundImage:`url('https://picsum.photos/200/300?v=${e}')`}}):O(y,{height:"100%",style:{display:"block"},enableAnimation:!1})}),P("div",{className:"w-2/3 p-4",children:[O("h1",{className:"text-gray-900 font-bold text-2xl",children:r||O(y,{})}),O("p",{className:"mt-2 text-gray-600 text-sm line-clamp-3",children:t||O(y,{count:3})}),P("div",{className:"flex item-center justify-between mt-3",children:[O("div",{className:"text-gray-700 font-bold text-xl",children:E(a)||O(y,{})}),r&&O(D,{children:"View"})]})]})]})})}),$=()=>{const[e,r]=u.exports.useState([{},{},{}]);return u.exports.useEffect((()=>{B().then((e=>e&&r(e)))}),[]),P("div",{className:"container mx-auto p-4",children:[O("h1",{className:"text-6xl mt-4 mb-8 md:mt-8 md:mb-12 font-serif text-gray-800",children:"Products"}),O("div",{className:"grid gap-4 items-center md:grid-cols-3",children:null==e?void 0:e.map((e=>O(Z,n({},e),e.id)))})]})};const z=v({apiKey:"AIzaSyDkUS3lnSGnfBKIs7ZMdG47DgU1jt6_rTQ",authDomain:"tpf-store.firebaseapp.com",databaseURL:"https://tpf-store-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"tpf-store",storageBucket:"tpf-store.appspot.com",messagingSenderId:"753209864014",appId:"1:753209864014:web:d0353cce0ad103298cf81f",measurementId:"G-EDZ8JV3VX9"});function G(){return P(A,{children:[O(L,{}),P(j,{children:[O(k,{path:"/tpf-store/product/:id",children:O(M,{})}),O(k,{path:"/",children:O($,{})})]})]})}x(z),d(z),N(z,{provider:new w("6Lesae0cAAAAAOb8mnAQL27a6APCIaAkLr3yE6YT"),isTokenAutoRefreshEnabled:!0});I.render(O(S.StrictMode,{children:O(G,{})}),document.getElementById("root"));