"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7676],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||l[f]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6659:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={},c=void 0,u={unversionedId:"commands/rhoas_kafka_update",id:"commands/rhoas_kafka_update",title:"rhoas_kafka_update",description:"rhoas kafka update",source:"@site/docs/commands/rhoas_kafka_update.md",sourceDirName:"commands",slug:"/commands/rhoas_kafka_update",permalink:"/commands/rhoas_kafka_update",editUrl:"https://github.com/redhat-developer/app-services-cli/docs/commands/rhoas_kafka_update.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_kafka_topic_update",permalink:"/commands/rhoas_kafka_topic_update"},next:{title:"rhoas_kafka_use",permalink:"/commands/rhoas_kafka_use"}},p=[{value:"rhoas kafka update",id:"rhoas-kafka-update",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],l={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rhoas-kafka-update"},"rhoas kafka update"),(0,o.kt)("p",null,"Update configuration details of a Kafka instance."),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Update certain configuration details of a Kafka instance."),(0,o.kt)("p",null,'Currently it is possible to update the "owner" field. The new owner\nwill be authorized to manage this instance.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rhoas kafka update [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# update the Kafka instance owner\n$ rhoas kafka update --name=my-kafka --owner=other-user\n\n# update the owner of the current Kafka instance\n$ rhoas kafka update --owner=other-user\n\n# update the reauthentication configuration of the current Kafka instance\n$ rhoas kafka update --reauthentication=true\n\n# update the current Kafka instance in interactive mode\n$ rhoas kafka update\n\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --id string                  Unique ID of the Kafka instance you want to update\n      --name string                Name of the Kafka instance you want to update\n      --owner string               ID of the user you want to set as the owner of this Kafka instance\n      --reauthentication Tribool   Enable connection reauthentication for the Kafka instance\n  -y, --yes                        Skip confirmation of this action \n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka"},"rhoas kafka"),"\t - Create, view, use, and manage your Kafka instances")))}d.isMDXComponent=!0}}]);