"use strict";(self.webpackChunkappblox_docs=self.webpackChunkappblox_docs||[]).push([[485],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),b=c(n),d=r,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||l;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var c=2;c<l;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},8371:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var o=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],a={sidebar_position:6},s="blox stop",c={unversionedId:"blox-cli/Commands/blox-stop",id:"blox-cli/Commands/blox-stop",title:"blox stop",description:"Blox stop will stop all running ui bloxes and also kill the emulator",source:"@site/docs/blox-cli/Commands/blox-stop.md",sourceDirName:"blox-cli/Commands",slug:"/blox-cli/Commands/blox-stop",permalink:"/docs/blox-cli/Commands/blox-stop",editUrl:"https://github.com/Appblox/docs/tree/main/docs/blox-cli/Commands/blox-stop.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"blox start",permalink:"/docs/blox-cli/Commands/blox-start"},next:{title:"Blox Init",permalink:"/docs/blox-cli/Commands/blox-init"}},p={},u=[{value:"Synopsis",id:"synopsis",level:3},{value:"Details",id:"details",level:3}],b={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"blox-stop"},"blox stop"),(0,l.kt)("p",null,"Blox stop will stop all running ui bloxes and also kill the emulator"),(0,l.kt)("h3",{id:"synopsis"},"Synopsis"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"blox stop\n")),(0,l.kt)("h3",{id:"details"},"Details"),(0,l.kt)("p",null,"Kills all the process id's related to running bloxes."))}d.isMDXComponent=!0}}]);