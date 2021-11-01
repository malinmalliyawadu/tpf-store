var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(r,t,l)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[t]=l,i=(e,r)=>{for(var t in r||(r={}))n.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))a.call(r,t)&&s(e,t,r[t]);return e};import{j as o,L as c,r as d,g as h,a as m,c as p,u,b,A as f,S as g,I as v,B as x,i as y,d as w,e as N,R as k,f as A,h as j,k as P,l as I,m as O}from"./vendor.871cb311.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const S=o.exports.jsx,E=o.exports.jsxs,z=()=>S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 25 25",children:S("path",{fill:"currentcolor",d:"M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"})}),B=()=>S("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 25 25",children:S("path",{fill:"currentcolor",d:"M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"})}),L=()=>E("header",{className:"flex space bg-green-900 items-center p-2 shadow-2xl border-green-600 border-b-2",children:[S(c,{to:"/store/",children:S("img",{src:"/tpf-store/assets/tpf-logo.637fb823.png",className:"w-20"})}),E("ul",{className:"hidden md:flex text-xl flex-grow gap-14 items-center justify-center text-green-100 font-medium",children:[S("li",{children:S("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"About"})}),S("li",{children:S("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#collection",children:"Collection"})}),S("li",{children:S("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#sales",children:"Sales"})}),S("li",{children:S("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#stewardship",children:"Stewardship"})}),S("li",{children:S("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#contact",children:"Contact"})}),S("li",{children:S("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"Partners"})})]}),E("div",{className:"hidden md:flex gap-4 mr-5 text-2xl text-green-100 items-center",children:[S("a",{className:"hover:text-green-500 h-12 w-12",href:"https://www.facebook.com/thetinyplasticfactory/",target:"_blank",children:S(z,{})}),S("a",{className:"hover:text-green-500 h-12 w-12",href:"https://instagram.com/the.tiny.plastic.factory/",target:"_blank",children:S(B,{})})]})]}),R=e=>e?new Intl.NumberFormat("en-NZ",{style:"currency",currency:"NZD"}).format(e):"",D=async()=>{const e=d(h());try{const l=await m(p(e,"products"));if(l.exists())return l.val().map(((e,l)=>{return n=i({},e),r(n,t({id:l}));var n}));console.log("No data available")}catch(l){console.error(l)}},_=({children:e,size:r="medium",submit:t})=>S("button",{className:"transition inline-block px-5 py-4 bg-gray-800 text-white text-sm font-bold uppercase rounded hover:bg-red-900",type:t?"submit":"button",children:e});const C=({children:e})=>S("h1",{className:"text-6xl mt-4 mb-8 font-serif",children:e}),F=(e,r)=>`/tpf-store/images/products/${e}-${r}.jpg`,M=()=>{const{id:e}=u(),[r,t]=b.exports.useState();b.exports.useEffect((()=>{D().then((r=>{const l=null==r?void 0:r.find((r=>r.id===Number(e)));t(l)}))}),[e]);return E("div",{className:"container mx-auto p-4 md:p-8",children:[E(c,{to:"/tpf-store/",className:"flex items-center gap-2 hover:text-green-700 hover:underline",children:[S(f,{className:"h-5 w-5 inline"})," Back to gallery"]}),E(C,{children:[(null==r?void 0:r.name)||S(g,{}),(null==r?void 0:r.colour)&&S("span",{className:(0===(null==r?void 0:r.id)?"bg-gray-700":"bg-blue-700")+" align-middle ml-5 inline-block py-1 px-2 shadow-md no-underline rounded-full text-white font-sans font-semibold text-xs border-blue btn-primary ",children:null==r?void 0:r.colour})]}),E("div",{className:"flex max-w gap-10 flex-col md:flex-row mb-20",children:[E("div",{className:"max-w-md",children:[S("style",{children:".image-gallery-thumbnail img {\n    width: auto;\n    height: 75px;\n    object-fit: cover;\n  }"}),S(v,{items:(l=(null==r?void 0:r.id)||0,[{original:F(l,0),thumbnail:F(l,0)},{original:F(l,1),thumbnail:F(l,1)},{original:F(l,2),thumbnail:F(l,2)},{original:F(l,3),thumbnail:F(l,3)}]),infinite:!1,showNav:!0,showFullscreenButton:!0,showPlayButton:!1})]}),E("div",{className:"flex gap-5 flex-col",children:[S("h2",{className:"text-4xl",children:R(null==r?void 0:r.price)||S(g,{})}),E("form",{className:"flex gap-5 flex-col min-w-max",method:"POST",action:"https://us-central1-tpf-store.cloudfunctions.net/app/create-checkout-session",children:[E("div",{className:"grid flex-col gap-2",children:[S("input",{name:"stripeId",type:"hidden",value:null==r?void 0:r.stripeId}),E("label",{className:"block font-bold",children:["Quantity",E("select",{name:"quantity",className:"py-1 px-2 ml-2 rounded-md border border-gray-300",children:[S("option",{disabled:!0,children:"Select"}),[...Array(null==r?void 0:r.stock).keys()].map((e=>S("option",{value:e+1,children:e+1})))]})]}),E("label",{className:"block font-bold",children:["Shipping",E("select",{name:"stripeShippingRateId",className:"py-1 px-2 ml-2 rounded-md border border-gray-300",children:[S("option",{disabled:!0,selected:!0,children:"Choose"}),S("option",{value:"shr_1Jqb10DsplRnOeEPlQ7t5fF8",children:"Urban"}),S("option",{value:"shr_1JqbAoDsplRnOeEP24u7MbCZ",children:"Rural"})]})]})]}),S(_,{submit:!0,size:"large",children:"Order"})]})]}),E("div",{children:[S("p",{className:"mb-4",children:(null==r?void 0:r.description1)||S(g,{count:5})}),r&&E("p",{className:"mb-4",children:[S("strong",{children:"Dimensions:"})," ",null==r?void 0:r.length,"mm (in width and length) x ",null==r?void 0:r.height,"mm (height)"]}),r&&E("p",{className:"mb-4",children:[S("strong",{children:"Weight:"})," Approximately ",null==r?void 0:r.weight,"g"]}),S("p",{children:(null==r?void 0:r.description2)||S(g,{count:5})})]})]})]});var l},T=({id:e,name:r,description1:t,price:l,colour:n})=>{const a=F(e||0,0);return S("div",{className:"pb-4",children:S(c,{to:`/tpf-store/product/${e}`,children:E("div",{className:" transform transition-all flex max-w-md bg-gray-50 shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl hover:scale-110",children:[S("div",{className:"w-1/3",children:r?S("div",{className:"bg-cover block h-full bg-center",style:{backgroundImage:`url(${a})`}}):S(g,{height:"100%",style:{display:"block"},enableAnimation:!1})}),E("div",{className:"w-2/3 p-4",children:[S("h1",{className:"text-gray-900 font-bold text-2xl",children:r||S(g,{})}),n&&S("span",{className:(0===e?"bg-gray-700":"bg-blue-700")+" py-1 px-2 shadow-md no-underline rounded-full text-white font-sans font-semibold text-xs border-blue btn-primary ",children:n}),S("p",{className:"mt-2 text-gray-600 text-sm line-clamp-3",children:t||S(g,{count:3})}),E("div",{className:"flex item-center justify-between mt-3",children:[S("div",{className:"text-gray-700 font-bold text-xl",children:R(l)||S(g,{})}),r&&S(_,{children:"View"})]})]})]})})})},q=()=>{const[e,r]=b.exports.useState([{},{}]);return b.exports.useEffect((()=>{D().then((e=>e&&r(e)))}),[]),E("div",{className:"container mx-auto p-4 md:p-8 mb-20",children:[S(C,{children:"The Tiny Plastic Factory Shop"}),S("div",{className:"grid gap-4 items-center md:grid-cols-3",children:null==e?void 0:e.map((e=>S(T,i({},e),e.id)))})]})};const Z=()=>S("footer",{className:"bg-green-600 flex justify-center text-yellow-300 py-3",children:E("a",{href:"https://preciousplastic.com/",target:"_blank",rel:"noopener noreferrer",className:"hover:border-yellow-300 border-b-4 border-transparent mt-1",children:[S("small",{children:"Inspired by Precious Plastic"}),S("img",{src:"https://www.thetinyplasticfactory.co.nz/static/media/precious-plastic.bd9a1d55.png",alt:"Precious Plastic logo",className:"inline h-7 ml-2"})]})}),$=({children:e})=>S("main",{className:"container mx-auto p-4 md:p-8",children:e}),J=()=>S($,{children:E("div",{className:"text-center",children:[S(x,{className:"h-24 w-24 text-green-500 inline-block"}),S(C,{children:"Order placed!"}),S("p",{className:"mb-20 max-w-md m-auto text-gray-700",children:"Nice! Your payment was successful. An email receipt is on its way and we'll get your order out to you in no time!"}),E(c,{to:"/tpf-store/",className:"flex items-center justify-center gap-2 hover:text-green-700 hover:underline",children:[S(f,{className:"h-5 w-5 inline"})," Back to shop"]})]})}),K=y({apiKey:String({}.FIREBASE_API_KEY),authDomain:"tpf-store.firebaseapp.com",databaseURL:"https://tpf-store-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"tpf-store",storageBucket:"tpf-store.appspot.com",messagingSenderId:"753209864014",appId:"1:753209864014:web:d0353cce0ad103298cf81f",measurementId:"G-EDZ8JV3VX9"});function Q(){return S("div",{className:"flex flex-col h-screen justify-between",children:E(A,{children:[S(L,{}),S("main",{className:"mb-auto",children:E(j,{children:[S(P,{path:"/tpf-store/order/success",children:S(J,{})}),S(P,{path:"/tpf-store/product/:id",children:S(M,{})}),S(P,{path:"/",children:S(q,{})})]})}),S(Z,{})]})})}w(K),h(K),N(K,{provider:new k("6Lesae0cAAAAAOb8mnAQL27a6APCIaAkLr3yE6YT"),isTokenAutoRefreshEnabled:!0});I.render(S(O.StrictMode,{children:S(Q,{})}),document.getElementById("root"));