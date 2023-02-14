"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(k,s(s({ref:t},p),{},{components:n})):r.createElement(k,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s="Custom Testkube Executor",u={unversionedId:"test-types/executor-custom",id:"test-types/executor-custom",title:"Custom Testkube Executor",description:"To use a testing framework that is not on the currently supported framework list for Testkube, you can create your custom executor and configure it to run any type of tests that you need. These custom test types can be added to your Testkube installation and/or contributed to our repo. We are very happy to receive executor contributions from our community.",source:"@site/docs/test-types/executor-custom.md",sourceDirName:"test-types",slug:"/test-types/executor-custom",permalink:"/test-types/executor-custom",draft:!1,editUrl:"https://github.com/kubeshop/testkube/docs/docs/test-types/executor-custom.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SoapUI",permalink:"/test-types/executor-soapui"},next:{title:"What is a Container Executor?",permalink:"/test-types/container-executor"}},i={},l=[{value:"<strong>Contribute to the Testkube Project</strong>",id:"contribute-to-the-testkube-project",level:2},{value:"<strong>Creating a Custom Executor</strong>",id:"creating-a-custom-executor",level:2},{value:"<strong>Using <code>testkube-executor-template</code></strong>",id:"using-testkube-executor-template",level:3},{value:"<strong>Deploying a Custom Executor</strong>",id:"deploying-a-custom-executor",level:3},{value:"<strong>Creating a Custom Executor in a Programming Language other than <code>Go</code></strong>",id:"creating-a-custom-executor-in-a-programming-language-other-than-go",level:2},{value:"<strong>Resources</strong>",id:"resources",level:2}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"custom-testkube-executor"},"Custom Testkube Executor"),(0,a.kt)("p",null,"To use a testing framework that is not on the currently supported framework list for Testkube, you can create your custom executor and configure it to run any type of tests that you need. These custom test types can be added to your Testkube installation and/or contributed to our repo. We are very happy to receive executor contributions from our community."),(0,a.kt)("p",null,"An Executor is a wrapper around a testing framework in the form of a Docker container and run as a Kubernetes job. Usually, an executor runs a particular test framework binary inside a container. Additionally, it is registered as an Executor Custom Resource in your Kubernetes cluster with a type handler defined (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"postman/collection"),")."),(0,a.kt)("p",null,"The Testkube API is responsible for running executions and will pass test data to the executor and parse the results from the execution output."),(0,a.kt)("p",null,"To create a new script, a user needs to pass ",(0,a.kt)("inlineCode",{parentName:"p"},"--type"),". The API uses it to pair the test type with the executor (executors have a handled ",(0,a.kt)("inlineCode",{parentName:"p"},"types")," array defined in CRD), and the API will choose which executor to run based on the handled types."),(0,a.kt)("p",null,"The API will pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube.Execution")," OpenAPI based document as the first argument to the binary in the executor's Docker container."),(0,a.kt)("p",null,"The API assumes that the Executor will output JSON data to ",(0,a.kt)("inlineCode",{parentName:"p"},"STDOUT")," and each line is wrapped in ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube.ExecutorOutput")," (as in structured logging)."),(0,a.kt)("h2",{id:"contribute-to-the-testkube-project"},(0,a.kt)("strong",{parentName:"h2"},"Contribute to the Testkube Project")),(0,a.kt)("p",null,"We love to improve Testkube with additional features suggested by our users!"),(0,a.kt)("p",null,"Please visit our ",(0,a.kt)("a",{parentName:"p",href:"/contributing/intro"},"Contribution")," page to see the guidelines for contributing to the Testkube project."),(0,a.kt)("h1",{id:"custom-executors"},"Custom Executors"),(0,a.kt)("h2",{id:"creating-a-custom-executor"},(0,a.kt)("strong",{parentName:"h2"},"Creating a Custom Executor")),(0,a.kt)("p",null,"A custom executor can be created on your own or by using our executor template (in ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," language)."),(0,a.kt)("h3",{id:"using-testkube-executor-template"},(0,a.kt)("strong",{parentName:"h3"},"Using ",(0,a.kt)("inlineCode",{parentName:"strong"},"testkube-executor-template"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"See the implementation example here: <https://github.com/exu/testkube-executor-example>).\n")),(0,a.kt)("p",null,"If you are familiar with the ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," programming language, use our template repository for new executors:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new repository from the template -  ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/testkube-executor-template"},"testkube-executor-template"),"."),(0,a.kt)("li",{parentName:"ol"},"Clone the newly created repo."),(0,a.kt)("li",{parentName:"ol"},"Rename the go module from ",(0,a.kt)("inlineCode",{parentName:"li"},"testkube-executor-template")," to the new name and run ",(0,a.kt)("inlineCode",{parentName:"li"},"go mod tidy"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube"},"Testkube")," provides the components to help implement the new runner.\nA ",(0,a.kt)("inlineCode",{parentName:"p"},"Runner")," is a wrapper around a testing framework binary responsible for running tests and parsing tests results. You are not limited to using Testkube's components for the ",(0,a.kt)("inlineCode",{parentName:"p"},"go")," language. Use any language - just remember about managing input and output."),(0,a.kt)("p",null,"Let's try to create a new test runner that tests if a given URI call is successful (",(0,a.kt)("inlineCode",{parentName:"p"},"status code == 200"),")."),(0,a.kt)("p",null,"To create the new runner, we should implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"testkube.Runner")," interface first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type Runner interface {\n // Run takes Execution data and returns execution result\n Run(execution testkube.Execution) (result testkube.ExecutionResult, err error)\n}\n")),(0,a.kt)("p",null,"As we can see, ",(0,a.kt)("inlineCode",{parentName:"p"},"Execution")," is the input - this object is managed by the Testkube API and will be passed to your executor. The executor will have information about the execution id and content that should be run on top of your runner."),(0,a.kt)("p",null,"An example runner is defined in our template. Using this template will only require implementing the Run method (you can rename ",(0,a.kt)("inlineCode",{parentName:"p"},"ExampleRunner")," to the name that best describes your testing framework)."),(0,a.kt)("p",null,"A runner can get data from different sources. Testkube currently supports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String content (e.g. Postman JSON file)."),(0,a.kt)("li",{parentName:"ul"},"URI - content stored on the webserver."),(0,a.kt)("li",{parentName:"ul"},"Git File - the file stored in the Git repo in the given path."),(0,a.kt)("li",{parentName:"ul"},"Git Dir - the entire git repo or git subdirectory (Testkube does a spatial checkout to limit traffic in the case of monorepos).")),(0,a.kt)("p",null,"All possible test definitions are already created and mounted as Kubernetes ",(0,a.kt)("inlineCode",{parentName:"p"},"Volumes")," before an executor starts its work. You can get the directory path from the ",(0,a.kt)("inlineCode",{parentName:"p"},"RUNNER_DATADIR")," environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// TODO: change to a valid name\n\ntype ExampleRunner struct {\n}\n\nfunc (r *ExampleRunner) Run(execution testkube.Execution) (testkube.ExecutionResult, error) {\n \n  // execution.Content could have git repo data\n  // We are also passing content files/directories as mounted volume in a directory.\n\n  path := os.Getenv("RUNNER_DATADIR")\n\n  // For example, the Cypress test is stored in the Git repo so Testkube will check it out automatically \n  // and allow you to use it easily.\n\n  uri := execution.Content.Data\n  resp, err := http.Get(uri)\n  if err != nil {\n    return result, err\n  }\n  defer resp.Body.Close()\n\n  b, err := io.ReadAll(resp.Body)\n  if err != nil {\n    return result, err\n  }\n\n  // If successful, return success result.\n\n  if resp.StatusCode == 200 {\n    return testkube.ExecutionResult{\n      Status: testkube.ExecutionStatusSuccess,\n      Output: string(b),\n    }, nil\n  }\n\n  // Otherwise, return an error to simplify the example.\n\n  err = fmt.Errorf("invalid status code %d, (uri:%s)", resp.StatusCode, uri)\n  return result.Err(err), nil\n}\n\n')),(0,a.kt)("p",null,"A Runner returns ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutionResult")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"error")," (in the case that the runner can't run the test). ",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutionResult"),"\ncould have different statuses (review the OpenAPI spec for details). In our example, we will focus on ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),"."),(0,a.kt)("p",null,"Additionally, to parse test framework test parts (e.g. different test steps), create a",(0,a.kt)("br",{parentName:"p"}),"\n","map of the particular testing framework and Testkube itself. Those details have been skipped here to simplify the example."),(0,a.kt)("p",null,"If running any testing framework binary, it is a best practice to wrap its output."),(0,a.kt)("p",null,"Here is an example of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-executor-postman/blob/main/pkg/runner/newman/newman.go#L60"},"mapping in the Testkube Postman Executor"),", which is using a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-executor-postman/blob/1b95fd85e5b73e9a243fbff59d5e96c27d0f69c5/pkg/runner/newman/mapper.go#L9"},"Postman to Testkube Mapper"),"."),(0,a.kt)("h3",{id:"deploying-a-custom-executor"},(0,a.kt)("strong",{parentName:"h3"},"Deploying a Custom Executor")),(0,a.kt)("p",null,"The following example will build and deploy your runner into a Kubernetes cluster:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t YOUR_USER/testkube-executor-example:1.0.0 . \ndocker push YOUR_USER/testkube-executor-example:1.0.0\n")),(0,a.kt)("p",null,"When the Docker build completes, register the custom executor using the Testkube cli:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl testkube create executor --image YOUR_USER/testkube-executor-example:1.0.0 --types "example/test" --name example-executor\n')),(0,a.kt)("p",null,"An example Executor custom resource deployed by Testkube would look the following in yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: executor.testkube.io/v1\nkind: Executor\nmetadata:\n  name: example-executor\n  namespace: testkube\nspec:\n  executor_type: job  \n  # 'job' is currently the only type for custom executors\n  image: YOUR_USER/testkube-executor-example:1.0.0 \n  # pass your repository and tag\n  types:\n  - example/test      \n  # your custom type registered (used when creating and running your testkube tests)\n  content_types:\n  - string                               # test content as string \n  - file-uri                             # http based file content\n  - git-file                             # file stored in Git\n  - git-dir                              # entire dir/project stored in Git\n  features: \n  - artifacts                            # executor can have artifacts after test run (e.g. videos, screenshots)\n  - junit-report                         # executor can have junit xml based results\n  meta:\n   iconURI: http://mydomain.com/icon.jpg # URI to executor icon\n   docsURI: http://mydomain.com/docs     # URI to executor docs\n   tooltips:\n    name: please enter executor name     # tooltip for executor fields\n")),(0,a.kt)("p",null,"Finally, create and run your custom tests by passing ",(0,a.kt)("inlineCode",{parentName:"p"},"URI")," as the test content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# create \necho "http://google.pl" | kubectl testkube create test --name example-google-test --type example/test \n# and run it in testkube\nkubectl testkube run test example-google-test\n')),(0,a.kt)("p",null,"This is a very basic example of a custom executor. Please visit our internal projects for more examples and the details on implementation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/testkube-executor-postman/blob/main/pkg/runner/newman/newman.go"},"Postman runner implementation"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/testkube-executor-cypress/blob/main/pkg/runner/cypress.go"},"Cypress runner implementation"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/testkube-executor-curl/blob/main/pkg/runner/runner.go"},"Curl runner implementation"),".")),(0,a.kt)("h2",{id:"creating-a-custom-executor-in-a-programming-language-other-than-go"},(0,a.kt)("strong",{parentName:"h2"},"Creating a Custom Executor in a Programming Language other than ",(0,a.kt)("inlineCode",{parentName:"strong"},"Go"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubeshop/testkube-executor-example-nodejs/blob/main/app.js"},"You can find the fully commented code example here"),"."),(0,a.kt)("p",null,"For Go-based executors, we have prepared many handy functions, such as printing valid outputs or wrappers around calling external processes.\nCurrently, in other languages, you'll need to manage this on your own."),(0,a.kt)("p",null,"Testkube has simplified test content management. We are supporting several different test content types such as string, uri, git-file and git-dir. The entire complexity of checking out or downloading test content is covered by Testkube."),(0,a.kt)("p",null,"Testkube will store its files and directories in a directory defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"RUNNER_DATADIR")," env and will save the test-content file for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"String content (e.g., a postman collection is passed as string content read from a JSON file)."),(0,a.kt)("li",{parentName:"ul"},"URI - Testkube will get the content of the file defined by the uri."),(0,a.kt)("li",{parentName:"ul"},"Git related content - Testkube will checkout the repo content in the current directory.")),(0,a.kt)("p",null,"To be able to proceed with this guide, Testkube should be installed. Review the Testkube ",(0,a.kt)("a",{parentName:"p",href:"/reference/installation"},"installation instructions"),"."),(0,a.kt)("p",null,"We have created a simple NodeJS executor."),(0,a.kt)("p",null,"The executor will get the URI and try to call the HTTP GET method on the passed value, and will return:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"success")," - when the status code is 200."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"failed")," - for any other status code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"use strict";\n\nconst https = require("https");\nconst fs = require("fs");\nconst path = require("path");\n\nconst args = process.argv.slice(2);\nif (args.length == 0) {\n  error("Please pass arguments");\n  process.exit(1);\n}\n\nvar uri;\nif (!process.env.RUNNER_DATADIR) {\n  error("No valid data directory detected");\n  process.exit(1);\n}\n\nconst testContentPath = path.join(process.env.RUNNER_DATADIR, "test-content");\nuri = fs.readFileSync(testContentPath, { encoding: "utf8", flag: "r"});\n\nhttps.get(uri, (res) => {\n    if (res.statusCode == 200) {\n      successResult("Got valid status code: 200 OK");\n    } else {\n      errorResult("Got invalid status code");\n    }\n  })\n  .on("error", (err) => { error("Error: " + err.message); });\n\n\nfunction errorResult(message) {\n  console.log(JSON.stringify({ "type": "result", "result": { "status": "error", "errorMessage": message, }}));\n}\n\nfunction successResult(output) {\n  console.log(JSON.stringify({ "type": "result", "result": { "status": "success", "output": output, }}));\n}\n\n// \'error\' will return the error info not related to the test itself (issues with the executor)\nfunction error(message) {\n  console.log(JSON.stringify({ "type": "error", "content": message, })); \n}\n  \n')),(0,a.kt)("p",null,"The code is ready and working. With the defaults assumed, ",(0,a.kt)("inlineCode",{parentName:"p"},"RUNNER_DATADIR")," will be ",(0,a.kt)("inlineCode",{parentName:"p"},"/data")," and the file will be saved in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/data/test-content")," directory."),(0,a.kt)("p",null,"As we can see, we are pushing JSON output to ",(0,a.kt)("inlineCode",{parentName:"p"},"stdin")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," function that is based on our ",(0,a.kt)("a",{parentName:"p",href:"https://kubeshop.github.io/testkube/openapi/"},"OpenAPI spec - ExecutorOutput"),"."),(0,a.kt)("p",null,"The two basic output types handled here are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For executor failures (non-test related), return ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),"."),(0,a.kt)("li",{parentName:"ul"},"For a test result, return ",(0,a.kt)("inlineCode",{parentName:"li"},"result")," with the test status (success, error).")),(0,a.kt)("p",null,"When the executor code is ready, the next steps are to create:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Docker image (create image and push)."),(0,a.kt)("li",{parentName:"ul"},"A Kubernetes Executor Custom Resource Definition (CRD)."),(0,a.kt)("li",{parentName:"ul"},"The test itself.")),(0,a.kt)("p",null,"We will simplify and use the latest tag for the steps below but a best practice is to use versioning. Currently, Testkube runs the command directly and passes the execution information as an argument."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add the runner binary (we have plans to remove this step in a future release):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'#!/usr/bin/env sh\nnode app.js "$@"\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Add the runner binary into the Dockerfile:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM node:17\n\n# Create app directory\nWORKDIR /usr/src/app\n\n# Bundle app source\nCOPY runner /bin/runner\nRUN chmod +x /bin/runner\nCOPY app.js app.js\n\nEXPOSE 8080\nCMD [ "/bin/runner" ]\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Build and push the docker container (change ",(0,a.kt)("inlineCode",{parentName:"li"},"user/repo")," to your Docker Hub username):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build --platform=linux/amd64 -t USER/testkube-executor-example-nodejs:latest -f Dockerfile .\ndocker push USER/testkube-executor-example-nodejs:latest\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"After the image is in place for Kubernetes to load, create the executor:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl testkube create executor --image kubeshop/testkube-executor-example-nodejs:latest --types "example/test" --name example-nodejs-executor\n')),(0,a.kt)("p",null,"When everything is in place, we can add our Testkube tests."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'echo "https://httpstat.us/200" | kubectl testkube create test --name example-test --type example/test\n')),(0,a.kt)("p",null,"As we can see, we need to pass the test name and test type ",(0,a.kt)("inlineCode",{parentName:"p"},"example/test")," (which we defined in our executor CRD)."),(0,a.kt)("p",null,"Now it's finally time to run our test!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl tests run example-test -f\n\nType          : example/test\nName          : example-test-string\nExecution ID  : 6218ccd2a26fa94ee7a7cfd1\nExecution name: moderately-pleasant-labrador\n\n\nGetting pod logs\nExecution completed Got valid status code: 200 OK\n\n.\nUse the following command to get test execution details:\n$ kubectl testkube get execution 6218ccd2a26fa94ee7a7cfd1\n\n\n\nGot valid status code: 200 OK\nTest execution completed with success in 6.163s \ud83e\udd47\n\nUse the following command to get test execution details:\n$ kubectl testkube get execution 6218ccd2a26fa94ee7a7cfd1\n\n\nWatch the test execution until complete:\n$ kubectl testkube watch execution 6218ccd2a26fa94ee7a7cfd1\n\n\n")),(0,a.kt)("p",null,"Our test completed successfully! Create another test with a different status code and check to see the result."),(0,a.kt)("h2",{id:"resources"},(0,a.kt)("strong",{parentName:"h2"},"Resources")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubeshop.github.io/testkube/openapi/"},"OpenAPI spec details"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/kubeshop/testkube/main/api/v1/testkube.yaml"},"Spec in YAML file"),".")),(0,a.kt)("p",null,"Go-based resources for input and output objects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Input: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/testkube/blob/main/pkg/api/v1/testkube/model_execution.go"},(0,a.kt)("inlineCode",{parentName:"a"},"testkube.Execution"))),(0,a.kt)("li",{parentName:"ul"},"Output line: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubeshop/testkube/blob/main/pkg/api/v1/testkube/model_executor_output.go"},(0,a.kt)("inlineCode",{parentName:"a"},"testkube.ExecutorOutput")))))}c.isMDXComponent=!0}}]);