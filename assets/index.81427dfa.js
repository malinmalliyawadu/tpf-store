var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(r,t,l)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):r[t]=l,a=(e,r)=>{for(var t in r||(r={}))n.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))i.call(r,t)&&s(e,t,r[t]);return e};import{j as o,L as c,r as d,g as m,a as h,c as p,u,b,A as g,S as f,I as v,B as x,i as y,d as w,e as N,R as k,f as A,h as S,k as j,l as I,m as P}from"./vendor.871cb311.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const O=o.exports.jsx,E=o.exports.jsxs,q=()=>O("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 25 25",children:O("path",{fill:"currentcolor",d:"M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"})}),z=()=>O("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",viewBox:"0 0 25 25",children:O("path",{fill:"currentcolor",d:"M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"})}),B=()=>E("header",{className:"flex space bg-green-900 items-center p-2 shadow-2xl border-green-600 border-b-2",children:[O(c,{to:"/store/",children:O("img",{src:"/store/assets/tpf-logo.637fb823.png",className:"w-20"})}),E("ul",{className:"hidden md:flex text-xl flex-grow gap-14 items-center justify-center text-green-100 font-medium",children:[O("li",{children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"About"})}),O("li",{children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#collection",children:"Collection"})}),O("li",{children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#sales",children:"Sales"})}),O("li",{children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#stewardship",children:"Stewardship"})}),O("li",{children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#contact",children:"Contact"})}),O("li",{children:O("a",{className:"transition pb-2 border-transparent border-b-4 hover:border-yellow-300",href:"/#about",children:"Partners"})})]}),E("div",{className:"hidden md:flex gap-4 mr-5 text-2xl text-green-100 items-center",children:[O("a",{className:"hover:text-green-500 h-12 w-12",href:"https://www.facebook.com/thetinyplasticfactory/",target:"_blank",children:O(q,{})}),O("a",{className:"hover:text-green-500 h-12 w-12",href:"https://instagram.com/the.tiny.plastic.factory/",target:"_blank",children:O(z,{})})]})]}),L=e=>e?new Intl.NumberFormat("en-NZ",{style:"currency",currency:"NZD"}).format(e):"",R=async()=>{const e=d(m());try{const l=await h(p(e,"products"));if(l.exists())return l.val().map(((e,l)=>{return n=a({},e),r(n,t({id:l}));var n}));console.log("No data available")}catch(l){console.error(l)}},D=({children:e,size:r="medium",submit:t})=>O("button",{className:`transition px-${"large"===r?"5":"3"} py-${"large"===r?"4":"2"} bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-red-900`,type:t?"submit":"button",children:e});const _=({children:e})=>O("h1",{className:"text-6xl mt-4 mb-8 font-serif",children:e}),$=(e,r)=>new URL({}[`./../../images/products/${e}-${r}.jpg`],window.location).href,C=()=>{const{id:e}=u(),[r,t]=b.exports.useState();b.exports.useEffect((()=>{R().then((r=>{const l=null==r?void 0:r.find((r=>r.id===Number(e)));t(l)}))}),[e]);return E("div",{className:"container mx-auto p-4 md:p-8",children:[E(c,{to:"/store/",className:"flex items-center gap-2 hover:text-green-700 hover:underline",children:[O(g,{className:"h-5 w-5 inline"})," Back to gallery"]}),E(_,{children:[(null==r?void 0:r.name)||O(f,{}),(null==r?void 0:r.colour)&&O("span",{className:(0===(null==r?void 0:r.id)?"bg-gray-700":"bg-blue-700")+" align-middle ml-5 inline-block py-1 px-2 shadow-md no-underline rounded-full text-white font-sans font-semibold text-xs border-blue btn-primary ",children:null==r?void 0:r.colour})]}),E("div",{className:"flex max-w gap-10 flex-col md:flex-row mb-20",children:[E("div",{className:"max-w-md",children:[O("style",{children:".image-gallery-thumbnail img {\n    width: auto;\n    height: 75px;\n    object-fit: cover;\n  }"}),O(v,{items:(l=(null==r?void 0:r.id)||0,[{original:$(l,0),thumbnail:$(l,0)},{original:$(l,1),thumbnail:$(l,1)},{original:$(l,2),thumbnail:$(l,2)},{original:$(l,3),thumbnail:$(l,3)}]),infinite:!1,showNav:!0,showFullscreenButton:!0,showPlayButton:!1})]}),E("div",{className:"flex gap-5 flex-col",children:[O("h2",{className:"text-4xl",children:L(null==r?void 0:r.price)||O(f,{})}),E("form",{className:"flex gap-5 flex-col min-w-max",method:"POST",action:"https://us-central1-tpf-store.cloudfunctions.net/app/create-checkout-session",children:[E("div",{className:"grid flex-col gap-2",children:[O("input",{name:"stripeId",type:"hidden",value:null==r?void 0:r.stripeId}),E("label",{className:"block font-bold",children:["Quantity",E("select",{name:"quantity",className:"py-1 px-2 ml-2 rounded-md border border-gray-300",children:[O("option",{disabled:!0,children:"Select"}),[...Array(null==r?void 0:r.stock).keys()].map((e=>O("option",{value:e+1,children:e+1})))]})]}),E("label",{className:"block font-bold",children:["Shipping",E("select",{name:"stripeShippingRateId",className:"py-1 px-2 ml-2 rounded-md border border-gray-300",children:[O("option",{disabled:!0,selected:!0,children:"Choose"}),O("option",{value:"shr_1Jqb10DsplRnOeEPlQ7t5fF8",children:"Urban"}),O("option",{value:"shr_1JqbAoDsplRnOeEP24u7MbCZ",children:"Rural"})]})]})]}),O(D,{submit:!0,size:"large",children:"Order"})]})]}),E("div",{children:[O("p",{className:"mb-4",children:(null==r?void 0:r.description1)||O(f,{count:5})}),r&&E("p",{className:"mb-4",children:[O("strong",{children:"Dimensions:"})," ",null==r?void 0:r.length,"mm (in width and length) x ",null==r?void 0:r.height,"mm (height)"]}),r&&E("p",{className:"mb-4",children:[O("strong",{children:"Weight:"})," Approximately ",null==r?void 0:r.weight,"g"]}),O("p",{children:(null==r?void 0:r.description2)||O(f,{count:5})})]})]})]});var l},F=({id:e,name:r,description1:t,price:l,colour:n})=>{const i=$(e||0,0);return O("div",{className:"pb-4",children:O(c,{to:`/store/product/${e}`,children:E("div",{className:" transform transition-all flex max-w-md bg-gray-50 shadow-lg rounded-lg overflow-hidden hover:bg-gray-200 hover:shadow-2xl hover:scale-110",children:[O("div",{className:"w-1/3",children:r?O("div",{className:"bg-cover block h-full bg-center",style:{backgroundImage:`url(${i})`}}):O(f,{height:"100%",style:{display:"block"},enableAnimation:!1})}),E("div",{className:"w-2/3 p-4",children:[O("h1",{className:"text-gray-900 font-bold text-2xl",children:r||O(f,{})}),n&&O("span",{className:(0===e?"bg-gray-700":"bg-blue-700")+" py-1 px-2 shadow-md no-underline rounded-full text-white font-sans font-semibold text-xs border-blue btn-primary ",children:n}),O("p",{className:"mt-2 text-gray-600 text-sm line-clamp-3",children:t||O(f,{count:3})}),E("div",{className:"flex item-center justify-between mt-3",children:[O("div",{className:"text-gray-700 font-bold text-xl",children:L(l)||O(f,{})}),r&&O(D,{children:"View"})]})]})]})})})},M=()=>{const[e,r]=b.exports.useState([{},{}]);return b.exports.useEffect((()=>{R().then((e=>e&&r(e)))}),[]),E("div",{className:"container mx-auto p-4 md:p-8",children:[O(_,{children:"The Tiny Plastic Factory Shop"}),O("div",{className:"mb-8 md:mb-12 text-gray-700",children:"Donec ullamcorper ultricies fringilla. Vivamus neque risus, suscipit id convallis non, consectetur eget felis. Nulla hendrerit blandit metus at pellentesque. Nunc molestie felis ut sapien iaculis scelerisque. Suspendisse sapien mauris, tincidunt id dapibus quis, scelerisque sit amet turpis. Vestibulum interdum metus et felis hendrerit viverra. Integer eu magna mattis, volutpat nisl ac, euismod enim. Suspendisse potenti. Aenean finibus lobortis sem, vel convallis quam semper vitae. Suspendisse consectetur magna eget velit bibendum, in mattis arcu malesuada."}),O("div",{className:"grid gap-4 items-center md:grid-cols-3",children:null==e?void 0:e.map((e=>O(F,a({},e),e.id)))})]})};const T=()=>O("footer",{className:"bg-green-600 flex justify-center text-yellow-300 py-3",children:E("a",{href:"https://preciousplastic.com/",target:"_blank",rel:"noopener noreferrer",className:"hover:border-yellow-300 border-b-4 border-transparent mt-1",children:[O("small",{children:"Inspired by Precious Plastic"}),O("img",{src:"https://www.thetinyplasticfactory.co.nz/static/media/precious-plastic.bd9a1d55.png",alt:"Precious Plastic logo",className:"inline h-7 ml-2"})]})}),V=({children:e})=>O("main",{className:"container mx-auto p-4 md:p-8",children:e}),Z=()=>O(V,{children:E("div",{className:"text-center",children:[O(x,{className:"h-24 w-24 text-green-500 inline-block"}),O(_,{children:"Order placed!"}),O("p",{className:"mb-20 max-w-md m-auto text-gray-700",children:"Nice! Your payment was successful. An email receipt is on its way and we'll get your order out to you in no time!"}),E(c,{to:"/store/",className:"flex items-center justify-center gap-2 hover:text-green-700 hover:underline",children:[O(g,{className:"h-5 w-5 inline"})," Back to shop"]})]})}),J=y({apiKey:String({}.FIREBASE_API_KEY),authDomain:"tpf-store.firebaseapp.com",databaseURL:"https://tpf-store-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"tpf-store",storageBucket:"tpf-store.appspot.com",messagingSenderId:"753209864014",appId:"1:753209864014:web:d0353cce0ad103298cf81f",measurementId:"G-EDZ8JV3VX9"});function K(){return O("div",{className:"flex flex-col h-screen justify-between",children:E(A,{children:[O(B,{}),O("main",{className:"mb-auto",children:E(S,{children:[O(j,{path:"/store/order/success",children:O(Z,{})}),O(j,{path:"/store/product/:id",children:O(C,{})}),O(j,{path:"/",children:O(M,{})})]})}),O(T,{})]})})}w(J),m(J),N(J,{provider:new k("6Lesae0cAAAAAOb8mnAQL27a6APCIaAkLr3yE6YT"),isTokenAutoRefreshEnabled:!0});I.render(O(P.StrictMode,{children:O(K,{})}),document.getElementById("root"));
