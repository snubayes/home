"use strict";(self.webpackChunksnubayes=self.webpackChunksnubayes||[]).push([[205],{2311:function(e,t,a){a.d(t,{z:function(){return o},L:function(){return i}});var l=a(7294),n=a(1883),r="style-module--Button--82b1f";let i=function(e){return e.BUTTON="button",e.SUBMIT="submit",e.LINK="link",e}({});function o(e){if(e.type===i.LINK){if(e.url)return e.externalLink?l.createElement("a",{id:e.id,className:r,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):l.createElement(n.Link,{id:e.id,to:e.url,className:r},e.label);throw new Error(`Button should be a ${e.type} but no URL is given!`)}if(e.type===i.BUTTON||e.type===i.SUBMIT){if(!e.onClickHandler)throw new Error(`Button should be a ${e.type} but no onClickHandler is given!`);return l.createElement("button",{id:e.id,className:r,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}},1187:function(e,t,a){a.d(t,{$:function(){return o}});var l=a(7294),n="style-module--ContentWrapper --36dde",r="style-module--Heading--2c002",i="style-module--Section--1d871";function o(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(n).join(" "):n,l.createElement("section",{id:e.anchor,className:i},l.createElement("div",{className:t},e.heading&&l.createElement("h3",{className:r},e.heading),e.children))}},5255:function(e,t,a){a.d(t,{T:function(){return E},w:function(){return k}});var l=a(7294),n=a(1883),r=a(8032),i=function(){return i=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)};var o={skeleton:"styles_skeleton__tyzRD","skeleton-progress":"styles_skeleton-progress__aezri"};function s(e){var t=e.width,a=void 0===t?"100%":t,n=e.height,r=void 0===n?"1em":n,s=e.background,c=void 0===s?"#E9ECEF":s,d=e.radius,u=void 0===d?"4px":d,m=e.circle,g=void 0!==m&&m,f=e.block,y=void 0===f||f,p=e.style,h=void 0===p?{}:p,b=e.as,v=void 0===b?"div":b;return l.createElement(v,{className:o.skeleton,style:i({width:a,height:r,background:c,borderRadius:g?"50%":u,display:y?"block":"inline-block"},h)},"‌")}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var c=a(5400),d="style-module--Banner--de456",u="style-module--Card--52db0",m="style-module--Category--9d65a",g="style-module--DescriptionWrapper--f8686",f="style-module--Details--2677d",y="style-module--Image--3201d",p="style-module--ImageWrapper--bd95c",h="style-module--ReadingTime--aea1c",b="style-module--Title--997b4",v="style-module--inListing--53790";function E(e){const{globalState:t}=(0,c.j1)(),a=t.theme===c.Q2.Dark,i=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),o=l.createElement("article",{className:e.inListing?`${v} ${u}`:u,style:a?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&l.createElement("div",{className:d},e.data.image&&e.data.image.src&&l.createElement(r.G,{className:p,imgClassName:y,objectFit:e.data.image.objectFit||"cover",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),l.createElement("div",{className:g},l.createElement("span",{className:m},l.createElement("u",null,e.data.category)),l.createElement("h4",{className:b},e.data.title),l.createElement("div",{className:f},`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(s=e.data.publishedAt).getMonth()]} ${s.getDate()}, ${s.getFullYear()}`,e.data.readingTime&&l.createElement("span",{className:h},e.data.readingTime))));var s;return i?l.createElement("a",{href:e.data.link,target:"_blank",rel:"noopener noreferrer",title:e.data.title},o):l.createElement(n.Link,{to:e.data.link,title:e.data.title},o)}function k(){const{globalState:e}=(0,c.j1)(),t=e.theme===c.Q2.Dark;return l.createElement("div",{className:u,style:t?{border:"0.125rem solid var(--primary-color)"}:void 0},l.createElement("div",{className:g},l.createElement(s,{style:{height:"1.5rem",marginBottom:".5rem",background:"var(--tertiary-color)"}}),l.createElement(s,{style:{height:"4rem",background:"var(--tertiary-color)"}}),l.createElement(s,{style:{height:".75rem",width:"50%",marginTop:".5rem",background:"var(--tertiary-color)"}})))}},847:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(5785),n=a(7294),r=a(8366),i=a(1187),o=a(7734),s=a(5255),c=a(2311),d=a(3750),u="style-module--Counts--2a027",m="style-module--Filter--28a99",g="style-module--FilterToggle--71a92",f="style-module--Listing--a7b77",y="style-module--LoadMore--37bf0",p="style-module--Option--a4467",h="style-module--Selected--b78c7";function b(e){var t;const a=e.pageContext.articles,[b,v]=n.useState(!1),[E,k]=n.useState(function(e){const t=[],a=[];return e.forEach((e=>{e.categories.forEach((l=>{if(a.includes(l)){const a=t.map((e=>e.label)).indexOf(l);t[a].relatedArticleIds.push(e.id)}else t.push({label:l,selected:!1,relatedArticleIds:[e.id]}),a.push(l)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(a)),[N,w]=n.useState(9);let C=[];const O=-1!==E.map((e=>e.selected)).indexOf(!0);O&&(C=E.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,a)=>a.indexOf(e)===t)));const T=null!==(t=e.pageContext.entityName)&&void 0!==t?t:"Articles";return n.createElement(n.Fragment,null,n.createElement(o.p,{title:`모든 ${T}`,useTitleTemplate:!0}),n.createElement(r.T,null,n.createElement(i.$,{anchor:"articleListing",heading:T},n.createElement("div",{className:m},n.createElement("div",{className:g,role:"button",onClick:()=>{v(!b)}},!O&&n.createElement(d.e7P,{size:"2rem"}),O&&n.createElement(d.ssz,{size:"2rem"})),E.map(((e,t)=>!b&&e.selected||b?n.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,l.Z)(E),a=t.map((e=>e.label)).indexOf(e);t[a].selected=!t[a].selected,k(t)}(e.label),className:[p,!0===e.selected?h:null].join(" ")},e.label,n.createElement("div",{className:u},e.relatedArticleIds.length)):null))),n.createElement("div",{className:f},a.filter((e=>!O||C.includes(e.id))).slice(0,N).map(((e,t)=>n.createElement(s.T,{key:t,showBanner:!0,inListing:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),O&&C.length>N||!O&&a.length>N?n.createElement("div",{className:y},n.createElement(c.z,{type:c.L.BUTTON,label:"Load More",onClickHandler:()=>function(e,t){const a=N+9;(t&&t>=N||!t&&e>=N)&&w(a)}(a.length,O?C.length:void 0)})):null)))}},4405:function(e,t,a){a.d(t,{w_:function(){return c}});var l=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=l.createContext&&l.createContext(n),i=function(){return i=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)},o=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]])}return a};function s(e){return e&&e.map((function(e,t){return l.createElement(e.tag,i({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return l.createElement(d,i({attr:i({},e.attr)},t),s(e.child))}}function d(e){var t=function(t){var a,n=e.attr,r=e.size,s=e.title,c=o(e,["attr","size","title"]),d=r||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),l.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),e.children)};return void 0!==r?l.createElement(r.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=component---src-gatsby-theme-portfolio-minimal-templates-article-listing-index-tsx-1343b55fd8f3a5a9cd99.js.map