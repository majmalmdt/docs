"use strict";(self.webpackChunkappblox_docs=self.webpackChunkappblox_docs||[]).push([[243],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return b}});var l=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,l)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,l,n=function(e,t){if(null==e)return{};var o,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)o=r[l],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=l.createContext({}),s=function(e){var t=l.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(o),b=n,d=m["".concat(p,".").concat(b)]||m[b]||u[b]||r;return o?l.createElement(d,a(a({ref:t},c),{},{components:o})):l.createElement(d,a({ref:t},c))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,a=new Array(r);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<r;s++)a[s]=o[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,o)}m.displayName="MDXCreateElement"},6625:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var l=o(7462),n=o(3366),r=(o(7294),o(3905)),a=["components"],i={sidebar_position:17},p="blox pull",s={unversionedId:"blox-cli/Commands/blox-pull",id:"blox-cli/Commands/blox-pull",title:"blox pull",description:"Pull command is used pull new bloxes into an app.",source:"@site/docs/blox-cli/Commands/blox-pull.md",sourceDirName:"blox-cli/Commands",slug:"/blox-cli/Commands/blox-pull",permalink:"/docs/blox-cli/Commands/blox-pull",editUrl:"https://github.com/Appblox/docs/tree/main/docs/blox-cli/Commands/blox-pull.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"blox sync",permalink:"/docs/blox-cli/Commands/blox-sync"},next:{title:"Blox JS SDK",permalink:"/docs/blox-sdk/blox-js-sdk"}},c={},u=[{value:"Pull a blox",id:"pull-a-blox",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Description",id:"description",level:3},{value:"Details",id:"details",level:3},{value:"Create custom version of a blox",id:"create-custom-version-of-a-blox",level:2},{value:"Synopsis",id:"synopsis-1",level:3},{value:"Details",id:"details-1",level:3}],m={toc:u};function b(e){var t=e.components,o=(0,n.Z)(e,a);return(0,r.kt)("wrapper",(0,l.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blox-pull"},"blox pull"),(0,r.kt)("p",null,"Pull command is used pull new bloxes into an app."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#pull-a-blox"},"Pull a blox")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#create-custom-version-of-a-blox"},"Create custom version of a blox"))),(0,r.kt)("h2",{id:"pull-a-blox"},"Pull a blox"),(0,r.kt)("h3",{id:"synopsis"},"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blox pull blox1\n")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The command will pull the latest code of ",(0,r.kt)("em",{parentName:"p"},"blox1")," to the local directory."),(0,r.kt)("h3",{id:"details"},"Details"),(0,r.kt)("p",null,"Non-appblox type bloxes can only be pulled with ",(0,r.kt)("inlineCode",{parentName:"p"},"blox pull"),".",(0,r.kt)("br",{parentName:"p"}),"\n","For appblox type bloxes, use ",(0,r.kt)("em",{parentName:"p"},"pull-appblox")," command"),(0,r.kt)("h2",{id:"create-custom-version-of-a-blox"},"Create custom version of a blox"),(0,r.kt)("h3",{id:"synopsis-1"},"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blox pull blox1\n")),(0,r.kt)("h3",{id:"details-1"},"Details"),(0,r.kt)("p",null,"If the user wants to customise a blox by cloning the blox code to own repo, the pull command prompts with a question at the start."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Do you wish to create a new blox from blox1\n")),(0,r.kt)("p",null,"The flow is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"blox create")," except in place of a sample template, source code of ",(0,r.kt)("em",{parentName:"p"},"blox1")," will be present."))}b.isMDXComponent=!0}}]);