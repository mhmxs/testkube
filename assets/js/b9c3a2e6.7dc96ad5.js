"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,l=e.originalType,a=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=s,m=d["".concat(a,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),s=(r(67294),r(3905));const l={},o=void 0,i={unversionedId:"cli-reference/testkube_delete_testsuite",id:"cli-reference/testkube_delete_testsuite",title:"testkube_delete_testsuite",description:"testkube delete testsuite",source:"@site/docs/cli-reference/testkube_delete_testsuite.md",sourceDirName:"cli-reference",slug:"/cli-reference/testkube_delete_testsuite",permalink:"/cli-reference/testkube_delete_testsuite",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/cli-reference/testkube_delete_testsuite.md",tags:[],version:"current",frontMatter:{}},a={},u=[{value:"testkube delete testsuite",id:"testkube-delete-testsuite",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"testkube-delete-testsuite"},"testkube delete testsuite"),(0,s.kt)("p",null,"Delete test suite"),(0,s.kt)("h3",{id:"synopsis"},"Synopsis"),(0,s.kt)("p",null,"Delete test suite by name"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"testkube delete testsuite <testSuiteName> [flags]\n")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"      --all             Delete all tests\n  -h, --help            help for testsuite\n  -l, --label strings   label key value pair: --label key1=value1\n")),(0,s.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string      Client used for connecting to testkube API one of proxy|direct (default "proxy")\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth (default true)\n      --verbose            should I show additional debug messages\n')),(0,s.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/cli-reference/testkube_delete"},"testkube delete"),"\t - Delete resources")))}p.isMDXComponent=!0}}]);