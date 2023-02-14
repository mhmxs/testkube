"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6015],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=a(n),b=o,k=d["".concat(l,".").concat(b)]||d[b]||p[b]||u;return n?r.createElement(k,s(s({ref:t},c),{},{components:n})):r.createElement(k,s({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,s=new Array(u);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var a=2;a<u;a++)s[a]=n[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const u={},s="Testkube Cloud Architecture",i={unversionedId:"testkube-cloud/architecture",id:"testkube-cloud/architecture",title:"Testkube Cloud Architecture",description:"Multiple Testkube Agents",source:"@site/docs/testkube-cloud/architecture.md",sourceDirName:"testkube-cloud",slug:"/testkube-cloud/architecture",permalink:"/testkube-cloud/architecture",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/testkube-cloud/architecture.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing Agent",permalink:"/testkube-cloud/installing-agent"},next:{title:"Creating",permalink:"/using-testkube/tests/tests-creating"}},l={},a=[{value:"Multiple Testkube Agents",id:"multiple-testkube-agents",level:2},{value:"Storing results",id:"storing-results",level:2},{value:"Testkube networking",id:"testkube-networking",level:2}],c={toc:a};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testkube-cloud-architecture"},"Testkube Cloud Architecture"),(0,o.kt)("h2",{id:"multiple-testkube-agents"},"Multiple Testkube Agents"),(0,o.kt)("p",null,"Main Testkube Cloud feature is to have insights into multiple Testkube Cloud Agents.\nYou can look at your Kubernetes clusters from single dashboard and easily switch between different Testkube clusters. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30776/208391158-a42d1f56-950f-48c3-bcfb-2768054b4704.jpeg",alt:"multiple clusters"})),(0,o.kt)("h2",{id:"storing-results"},"Storing results"),(0,o.kt)("p",null,"In Testkube standalone all results are stored in the users cluster, you need to be aware of MinIO and MongoDB.\nTestkube Cloud will make it easy for you, all data are stored in Testkube Cloud infrastructure so you don't need to worry about backups, ."),(0,o.kt)("h2",{id:"testkube-networking"},"Testkube networking"),(0,o.kt)("p",null,"To simplify networking connections Testkube Agent is able to create connection to Testkube Cloud clusters, Agent is registering itself into\nTestkube Cloud and shows as new environment.\nThe main idea of it is to allow Testkube Cloud to send commands which Testkube in Agent mode will manage. Connection is done\nfrom Testkube Agent to Testkube Cloud."),(0,o.kt)("p",null,"Testkube Agent after installing connects to Testkube Cloud, and starts listening for the commands.\nAdditionally Agent is connecting to usual Testkube Cloud REST API."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30776/208391192-6f04ce7a-2c8a-4892-bc01-3a3b04cd3ddc.jpeg",alt:"network"})),(0,o.kt)("p",null,"Testkube Agent is connecting to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.testkube.io")," on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8088")," for HTTPS connection and on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8089")," for GRPC connection."))}p.isMDXComponent=!0}}]);