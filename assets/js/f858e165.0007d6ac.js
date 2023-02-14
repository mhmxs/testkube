"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),g=o,d=c["".concat(i,".").concat(g)]||c[g]||m[g]||s;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},78073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const s={},a="JMeter",l={unversionedId:"test-types/executor-jmeter",id:"test-types/executor-jmeter",title:"JMeter",description:"The Apache JMeter\u2122 application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions.",source:"@site/docs/test-types/executor-jmeter.md",sourceDirName:"test-types",slug:"/test-types/executor-jmeter",permalink:"/test-types/executor-jmeter",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/test-types/executor-jmeter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gradle",permalink:"/test-types/executor-gradle"},next:{title:"K6",permalink:"/test-types/executor-k6"}},i={},p=[{value:"What can I do with it?",id:"what-can-i-do-with-it",level:2},{value:"<strong>Running a JMeter Test</strong>",id:"running-a-jmeter-test",level:2},{value:"<strong>Using Files as Input</strong>",id:"using-files-as-input",level:3},{value:"<strong>Using Additional JMeter Arguments in Your Tests</strong>",id:"using-additional-jmeter-arguments-in-your-tests",level:3},{value:"<strong>JMeter Test Results</strong>",id:"jmeter-test-results",level:3}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"jmeter"},"JMeter"),(0,o.kt)("p",null,"The Apache JMeter\u2122 application is open source software, a 100% pure Java application designed to load test functional behavior and measure performance. It was originally designed for testing Web Applications but has since expanded to other test functions."),(0,o.kt)("h2",{id:"what-can-i-do-with-it"},"What can I do with it?"),(0,o.kt)("p",null,"Apache JMeter may be used to test performance both on static and dynamic resources and Web dynamic applications.\nIt can be used to simulate a heavy load on a server, group of servers, network or object to test its strength or to analyze overall performance under different load types."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://jmeter.apache.org/"},"JMeter")," "),(0,o.kt)("h2",{id:"running-a-jmeter-test"},(0,o.kt)("strong",{parentName:"h2"},"Running a JMeter Test")),(0,o.kt)("p",null,"JMeter is integral part of Testkube. The Testkube JMeter executor is installed by default during the Testkube installation. To run a JMeter test in Testkube you need to create a Test. "),(0,o.kt)("h3",{id:"using-files-as-input"},(0,o.kt)("strong",{parentName:"h3"},"Using Files as Input")),(0,o.kt)("p",null,"Let's save our JMeter test in file e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"test.jmx"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.5">\n  <hashTree>\n    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Kubeshop site" enabled="true">\n      <stringProp name="TestPlan.comments">Kubeshop site simple perf test</stringProp>\n      <boolProp name="TestPlan.functional_mode">false</boolProp>\n      <boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>\n      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>\n      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n        <collectionProp name="Arguments.arguments">\n          <elementProp name="PATH" elementType="Argument">\n            <stringProp name="Argument.name">PATH</stringProp>\n            <stringProp name="Argument.value">/pricing</stringProp>\n            <stringProp name="Argument.metadata">=</stringProp>\n          </elementProp>\n        </collectionProp>\n      </elementProp>\n      <stringProp name="TestPlan.user_define_classpath"></stringProp>\n    </TestPlan>\n    <hashTree>\n      <ThreadGroup guiclass="ThreadGroupGui" testclass="ThreadGroup" testname="Thread Group" enabled="true">\n        <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>\n        <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">\n          <boolProp name="LoopController.continue_forever">false</boolProp>\n          <stringProp name="LoopController.loops">1</stringProp>\n        </elementProp>\n        <stringProp name="ThreadGroup.num_threads">1</stringProp>\n        <stringProp name="ThreadGroup.ramp_time">1</stringProp>\n        <boolProp name="ThreadGroup.scheduler">false</boolProp>\n        <stringProp name="ThreadGroup.duration"></stringProp>\n        <stringProp name="ThreadGroup.delay"></stringProp>\n        <boolProp name="ThreadGroup.same_user_on_next_iteration">true</boolProp>\n      </ThreadGroup>\n      <hashTree>\n        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="HTTP Request" enabled="true">\n          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">\n            <collectionProp name="Arguments.arguments">\n              <elementProp name="PATH" elementType="HTTPArgument">\n                <boolProp name="HTTPArgument.always_encode">false</boolProp>\n                <stringProp name="Argument.value">$PATH</stringProp>\n                <stringProp name="Argument.metadata">=</stringProp>\n                <boolProp name="HTTPArgument.use_equals">true</boolProp>\n                <stringProp name="Argument.name">PATH</stringProp>\n              </elementProp>\n            </collectionProp>\n          </elementProp>\n          <stringProp name="HTTPSampler.domain">testkube.io</stringProp>\n          <stringProp name="HTTPSampler.port">80</stringProp>\n          <stringProp name="HTTPSampler.protocol">https</stringProp>\n          <stringProp name="HTTPSampler.contentEncoding"></stringProp>\n          <stringProp name="HTTPSampler.path">https://testkube.io</stringProp>\n          <stringProp name="HTTPSampler.method">GET</stringProp>\n          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>\n          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>\n          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>\n          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>\n          <stringProp name="HTTPSampler.embedded_url_re"></stringProp>\n          <stringProp name="HTTPSampler.connect_timeout"></stringProp>\n          <stringProp name="HTTPSampler.response_timeout"></stringProp>\n        </HTTPSamplerProxy>\n        <hashTree>\n          <ResponseAssertion guiclass="AssertionGui" testclass="ResponseAssertion" testname="Response Assertion" enabled="true">\n            <collectionProp name="Asserion.test_strings">\n              <stringProp name="-1081444641">Testkube</stringProp>\n            </collectionProp>\n            <stringProp name="Assertion.custom_message"></stringProp>\n            <stringProp name="Assertion.test_field">Assertion.response_data</stringProp>\n            <boolProp name="Assertion.assume_success">false</boolProp>\n            <intProp name="Assertion.test_type">16</intProp>\n          </ResponseAssertion>\n          <hashTree/>\n        </hashTree>\n      </hashTree>\n    </hashTree>\n  </hashTree>\n</jmeterTestPlan>\n\n')),(0,o.kt)("p",null,"The Testkube JMeter executor accepts a test file as an input."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube create test --file test.jmx --name jmeter-test --type jmeter/test\n")),(0,o.kt)("p",null,"You don't need to pass a type here, Testkube will autodetect it. "),(0,o.kt)("p",null,"To run the test, pass the previously created test name: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl testkube run test -f jmeter-test\n")),(0,o.kt)("p",null,"You can also create a Test based on a Git repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# create test from this Git repository\nkubectl testkube create test --test-content-type git-file --git-uri https://github.com/kubeshop/testkube-executor-jmeter.git --git-branch main --git-path examples/kubeshop.jmx --type jmeter/test --name jmeter-test-from-git\n")),(0,o.kt)("p",null,"Testkube will clone the repository and create a Testkube Test Custom Resource in your cluster automatically on each test run. "),(0,o.kt)("h3",{id:"using-additional-jmeter-arguments-in-your-tests"},(0,o.kt)("strong",{parentName:"h3"},"Using Additional JMeter Arguments in Your Tests")),(0,o.kt)("p",null,"You can also pass additional arguments to the ",(0,o.kt)("inlineCode",{parentName:"p"},"jmeter")," binary thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"--args")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl testkube run test -f jmeter-test --args '-LsutHost=https://staging.kubeshop.com -LsomeParam=someValue'\n")),(0,o.kt)("h3",{id:"jmeter-test-results"},(0,o.kt)("strong",{parentName:"h3"},"JMeter Test Results")),(0,o.kt)("p",null,"A JMeter test will be successful in Testkube when all checks and thresholds are successful. In the case of an error, the test will have ",(0,o.kt)("inlineCode",{parentName:"p"},"failed")," status,\nJMeter executor is configured to store the ",(0,o.kt)("inlineCode",{parentName:"p"},"report.jtl"),' file after the test run. You can get the file from the "Artifacts" tab in the execution results in Testkube UI,\nor download it with the ',(0,o.kt)("inlineCode",{parentName:"p"},"testkube get artifacts EXECUTION_ID")," command."))}m.isMDXComponent=!0}}]);