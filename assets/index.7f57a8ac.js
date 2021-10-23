var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(r,t,s)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s;import{j as i,u as a,r as l,A as n,B as o,S as d,R as m,a as h,b as p}from"./vendor.6d5efaa9.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const f=i.exports.jsx,u=i.exports.jsxs,y=()=>f("header",{className:"bg-green-900 items-center p-8",children:u("ul",{className:"flex items-center justify-center text-white",children:[f("li",{className:"mr-6",children:f("a",{className:"p-4",href:"/#about",children:"About"})}),f("li",{className:"mr-6",children:f("a",{href:"/#about",children:"Collection"})}),f("li",{className:"mr-6",children:f("a",{href:"/#about",children:"Sales"})}),f("li",{className:"mr-6",children:f("a",{href:"/#about",children:"Stewardship"})}),f("li",{className:"mr-6",children:f("a",{href:"/#about",children:"Contact"})}),f("li",{className:"mr-6",children:f("a",{href:"/#about",children:"Partners"})})]})}),b=e=>e?new Intl.NumberFormat("en-NZ",{style:"currency",currency:"NZD"}).format(e):"",g=()=>{const{id:e}=a(),[r,t]=l.exports.useState();return l.exports.useEffect((()=>{t({id:0,name:"test",description:"fsdjhfjks",category:"fdsf",price:10,stock:1})}),[e]),u("div",{className:"container mx-auto p-8",children:[u("a",{href:"/tpf-store/",className:"flex items-center gap-2 hover:text-green-700 hover:underline",children:[f(n,{className:"h-5 w-5 inline "})," Back to gallery"]}),f("h1",{className:"text-6xl mt-4 mb-8",children:null==r?void 0:r.name}),u("div",{className:"flex max-w gap-16",children:[f("img",{className:"",src:"https://picsum.photos/200/300"}),u("div",{children:[f("h2",{className:"text-2xl",children:b(null==r?void 0:r.price)}),u("div",{className:"",children:[u("label",{className:"block",children:["Colour:",f("select",{children:f("option",{children:"Select"})})]}),f("button",{className:"my-3 px-5 py-4 bg-gray-800 text-white text-xs font-bold uppercase rounded",children:"Add to Cart"}),u("div",{children:["Quantity: ",null==r?void 0:r.stock]})]})]}),f("div",{children:null==r?void 0:r.description})]})]})},x=({id:e,name:r,description:t,price:s,category:c})=>f("div",{className:"py-6",children:f("a",{href:`/tpf-store/product/${e}`,children:u("div",{className:"flex max-w-md bg-blue-100 shadow-lg rounded-lg overflow-hidden",children:[f("div",{className:"w-1/3 bg-cover",style:{backgroundImage:`url('https://picsum.photos/200/300?v=${e}')`}}),u("div",{className:"w-2/3 p-4",children:[f("h1",{className:"text-gray-900 font-bold text-2xl",children:r}),f("p",{className:"mt-2 text-gray-600 text-sm",children:t}),u("div",{className:"flex item-center justify-between mt-3",children:[f("div",{className:"text-gray-700 font-bold text-xl",children:b(s)}),f("button",{className:"px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded",children:"Add to Cart"})]})]})]})})}),N=()=>u("div",{className:"container mx-auto p-4",children:[f("h1",{className:"text-6xl mt-4 mb-8",children:"Products"}),f("div",{className:"grid grid-cols-3 gap-4 items-center",children:[{id:0,name:"test",description:"fsdjhfjks",category:"fdsf",price:10,stock:1},{id:1,name:"test",description:"fsdjhfjks",category:"fdsf",price:10,stock:1},{id:2,name:"test",description:"fsdjhfjks",category:"fdsf",price:10,stock:1},{id:3,name:"test",description:"fsdjhfjks",category:"fdsf",price:10,stock:1}].map((e=>f(x,((e,i)=>{for(var a in i||(i={}))t.call(i,a)&&c(e,a,i[a]);if(r)for(var a of r(i))s.call(i,a)&&c(e,a,i[a]);return e})({},e))))})]});function v(){return u(o,{children:[f(y,{}),u(d,{children:[f(m,{path:"/tpf-store/product/:id",children:f(g,{})}),f(m,{path:"/",children:f(N,{})})]})]})}h.render(f(p.StrictMode,{children:f(v,{})}),document.getElementById("root"));
