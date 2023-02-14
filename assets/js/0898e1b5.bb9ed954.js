"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[8875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=a,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<s;o++)c[o]=n[o];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const s={},c="Secret Variables",i={unversionedId:"using-testkube/secrets",id:"using-testkube/secrets",title:"Secret Variables",description:"Testkube now offers many ways to pass secrets to the test and to the executors, here are following types:",source:"@site/docs/using-testkube/secrets.md",sourceDirName:"using-testkube",slug:"/using-testkube/secrets",permalink:"/using-testkube/secrets",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/using-testkube/secrets.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testkube UI",permalink:"/using-testkube/UI"},next:{title:"Test and Test Suite Scheduling",permalink:"/using-testkube/scheduling"}},l={},o=[{value:"Secret Variables",id:"secret-variables-1",level:3},{value:"Secret References",id:"secret-references",level:3},{value:"Secret Environment Variables",id:"secret-environment-variables",level:3}],u={toc:o};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"secret-variables"},"Secret Variables"),(0,a.kt)("p",null,"Testkube now offers many ways to pass secrets to the test and to the executors, here are following types:"),(0,a.kt)("h3",{id:"secret-variables-1"},"Secret Variables"),(0,a.kt)("p",null,"Secret Variables are variables passed during the test/test suite creation or run in a simple form that can be accessed in the test as an environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"--secret-variable <secret-name>=<secret-value>\n")),(0,a.kt)("p",null,"Usage Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'testkube run test my-test --secret-variable api-key="3472bjdvadncaj"\n')),(0,a.kt)("p",null,"and it can be accessed in the test in ways that the executors allow for Postman tests it can be accessed like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'test_api_key = pm.environment.get("api-key")\n')),(0,a.kt)("h3",{id:"secret-references"},"Secret References"),(0,a.kt)("p",null,"If there are secrets that are already in the cluster's Secrets, Testkube allows you to use them and provides the secret name and the key from that secret that will be used in the tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"--secret-variable-reference <secret-name>=<k8s-secret-name>=<secret-key>\n")),(0,a.kt)("p",null,"Let's say that there is this secret already in the cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\ndata:\n  03f9de1e-f90c-4cfa-bb64-2fc55681f1f4: eyJzZWMxIjoicGFzczEifQ==\n  1cc30442-8a94-4147-96b3-25c978817d81: eyJzZWMxIjoiIn0=\n  29e028e8-9fcd-408f-9ca9-babee98db13d: eyJzZWMxIjoicGFzczEifQ==\n  435e41a9-dd9d-46e9-820f-142c15a7ef51: eyJzZWMxIjoiIn0=\n  74c7e5f0-1032-4968-97a8-0b2b7e0b0b23: eyJzZWMxIjoiIn0=\n  962fb637-3458-4c82-a430-64d169b96252: eyJzZWMxIjoicGFzczEifQ==\n  current-secret: OTYyZmI2MzctMzQ1OC00YzgyLWE0MzAtNjRkMTY5Yjk2MjUy\n  sec1: cGFzczE=\nmetadata:\n  name: my-secret\n  namespace: testkube\n  resourceVersion: "3293159"\n  uid: 8516b80b-74ba-48cf-abe6-6c9791f1b08d\ntype: Opaque\n')),(0,a.kt)("p",null,"This secret can be used in the run or create operation as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"testkube run test my-test --secret-variable-reference my-sec1=my-secret=sec1\n")),(0,a.kt)("p",null,"And, in the test, it can be accessed as an environment variable. Here is a Postman example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'test_api_key = pm.environment.get("my-sec1")\n')),(0,a.kt)("h3",{id:"secret-environment-variables"},"Secret Environment Variables"),(0,a.kt)("p",null,"Secret Environment Variables pass environment variables for the executor itself like ",(0,a.kt)("inlineCode",{parentName:"p"},"--env")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"--env")," cannot be used because it contains sensitive information. Instead a k8s secret can be created and passed with ",(0,a.kt)("inlineCode",{parentName:"p"},"--secret-env <secret-key>=<k8s-secret-name>"),"."),(0,a.kt)("p",null,"For example, if the executor needs ",(0,a.kt)("inlineCode",{parentName:"p"},"env-secret")," from the secret,\nit can be passed using ",(0,a.kt)("inlineCode",{parentName:"p"},"--secret-env env-secret=my-env-secret")," and executor will receive it as ",(0,a.kt)("inlineCode",{parentName:"p"},"env-secret"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Secret\ndata:\n  env-secret: cGFzczE=\nmetadata:\n  name: my-env-secret\n  namespace: testkube\ntype: Opaque\n")),(0,a.kt)("p",null,"Note: Postman is expecting to have the JSON object in the secret with the postman env file data json format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    "id": "72a6e5d0-933d-4b64-84df-6de2f441be08",\n    "name": "env name",\n    "values": [\n        {\n            "key": "VAR_NAME",\n            "value": "https://example.com",\n            "enabled": true\n        }\n  ],\n    "_postman_variable_scope": "environment",\n    "_postman_exported_at": "2022-06-06T13:35:46.820Z",\n    "_postman_exported_using": "Postman/9.21.1"\n}\n')))}p.isMDXComponent=!0}}]);