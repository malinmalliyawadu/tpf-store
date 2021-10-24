var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(r,t,a)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a,n=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(a)for(var t of a(r))l.call(r,t)&&c(e,t,r[t]);return e};import{j as i,r as o,g as d,a as m,c as p,u as h,b as u,A as f,i as b,d as g,e as x,R as y,B as N,S as v,f as w,h as A,k as j}from"./vendor.b404d3b7.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const S=i.exports.jsx,I=i.exports.jsxs,k=()=>S("header",{className:"bg-green-900 items-center p-8",children:I("ul",{className:"flex items-center justify-center text-white",children:[S("li",{className:"mr-6",children:S("a",{className:"p-4",href:"/#about",children:"About"})}),S("li",{className:"mr-6",children:S("a",{href:"/#about",children:"Collection"})}),S("li",{className:"mr-6",children:S("a",{href:"/#about",children:"Sales"})}),S("li",{className:"mr-6",children:S("a",{href:"/#about",children:"Stewardship"})}),S("li",{className:"mr-6",children:S("a",{href:"/#about",children:"Contact"})}),S("li",{className:"mr-6",children:S("a",{href:"/#about",children:"Partners"})})]})}),O=e=>e?new Intl.NumberFormat("en-NZ",{style:"currency",currency:"NZD"}).format(e):"",P=async()=>{const e=o(d());try{const a=await m(p(e,"products"));if(a.exists())return console.log(a.val()),a.val().map(((e,a)=>{return s=n({},e),r(s,t({id:a}));var s}));console.log("No data available")}catch(a){console.error(a)}},E=()=>{const{id:e}=h(),[r,t]=u.exports.useState();return u.exports.useEffect((()=>{P().then((e=>e&&t(e[0])))}),[e]),I("div",{className:"container mx-auto p-8",children:[I("a",{href:"/tpf-store/",className:"flex items-center gap-2 hover:text-green-700 hover:underline",children:[S(f,{className:"h-5 w-5 inline "})," Back to gallery"]}),S("h1",{className:"text-6xl mt-4 mb-8",children:null==r?void 0:r.name}),I("div",{className:"flex max-w gap-16",children:[S("img",{className:"",src:"https://picsum.photos/200/300"}),I("div",{children:[S("h2",{className:"text-2xl",children:O(null==r?void 0:r.price)}),I("div",{className:"min-w-max",children:[I("label",{className:"block",children:["Colour:",S("select",{children:S("option",{children:"Select"})})]}),S("button",{className:"my-3 px-5 py-4 bg-gray-800 text-white text-xs font-bold uppercase rounded",children:"Add to Cart"}),I("div",{children:["Quantity: ",null==r?void 0:r.stock]})]})]}),S("div",{children:null==r?void 0:r.description})]})]})},L=({id:e,name:r,description:t,price:a,category:s})=>S("div",{className:"py-6",children:S("a",{href:`/tpf-store/product/${e}`,children:I("div",{className:"flex max-w-md bg-green-50 shadow-lg rounded-lg overflow-hidden",children:[S("div",{className:"w-1/3 bg-cover",style:{backgroundImage:`url('https://picsum.photos/200/300?v=${e}')`}}),I("div",{className:"w-2/3 p-4",children:[S("h1",{className:"text-gray-900 font-bold text-2xl",children:r}),S("p",{className:"mt-2 text-gray-600 text-sm line-clamp-3",children:t}),I("div",{className:"flex item-center justify-between mt-3",children:[S("div",{className:"text-gray-700 font-bold text-xl",children:O(a)}),S("button",{className:"px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded",children:"Add to Cart"})]})]})]})})}),C=()=>{const[e,r]=u.exports.useState();return u.exports.useEffect((()=>{P().then((e=>e&&r(e)))}),[]),I("div",{className:"container mx-auto p-4",children:[S("h1",{className:"text-6xl mt-4 mb-8",children:"Products"}),S("div",{className:"grid grid-cols-3 gap-4 items-center",children:null==e?void 0:e.map((e=>S(L,n({},e),e.id)))})]})},D=b({apiKey:"AIzaSyDkUS3lnSGnfBKIs7ZMdG47DgU1jt6_rTQ",authDomain:"tpf-store.firebaseapp.com",databaseURL:"https://tpf-store-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"tpf-store",storageBucket:"tpf-store.appspot.com",messagingSenderId:"753209864014",appId:"1:753209864014:web:d0353cce0ad103298cf81f",measurementId:"G-EDZ8JV3VX9"});function B(){return I(N,{children:[S(k,{}),I(v,{children:[S(w,{path:"/tpf-store/product/:id",children:S(E,{})}),S(w,{path:"/",children:S(C,{})})]})]})}g(D),d(D),x(D,{provider:new y("6Lesae0cAAAAAOb8mnAQL27a6APCIaAkLr3yE6YT"),isTokenAutoRefreshEnabled:!0});A.render(S(j.StrictMode,{children:S(B,{})}),document.getElementById("root"));
