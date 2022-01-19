"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2289],{3905:function(e,a,t){t.d(a,{Zo:function(){return k},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),l=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},k=function(e){var a=l(e.components);return n.createElement(c.Provider,{value:a},e.children)},f={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=r,u=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return t?n.createElement(u,s(s({ref:a},k),{},{components:t})):n.createElement(u,s({ref:a},k))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8464:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return k},default:function(){return p}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),s=["components"],i={},c=void 0,l={unversionedId:"commands/rhoas_kafka",id:"commands/rhoas_kafka",title:"rhoas_kafka",description:"rhoas kafka",source:"@site/docs/commands/rhoas_kafka.md",sourceDirName:"commands",slug:"/commands/rhoas_kafka",permalink:"/commands/rhoas_kafka",editUrl:"https://github.com/redhat-developer/app-services-cli/docs/commands/rhoas_kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rhoas_completion_zsh",permalink:"/commands/rhoas_completion_zsh"},next:{title:"rhoas_kafka_acl",permalink:"/commands/rhoas_kafka_acl"}},k=[{value:"rhoas kafka",id:"rhoas-kafka",children:[{value:"Synopsis",id:"synopsis",children:[],level:3},{value:"Examples",id:"examples",children:[],level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",children:[],level:3},{value:"SEE ALSO",id:"see-also",children:[],level:3}],level:2}],f={toc:k};function p(e){var a=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"rhoas-kafka"},"rhoas kafka"),(0,o.kt)("p",null,"Create, view, use, and manage your Kafka instances"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Manage and interact with Kafka instances."),(0,o.kt)("p",null,"A Kafka instance includes an Apache Kafka cluster, bootstrap server, and the configurations needed to connect to producer and consumer services."),(0,o.kt)("p",null,"You can create, view, select, and delete Kafka instances."),(0,o.kt)("p",null,"For each Kafka instance, you can manage ACLs, consumer groups, and topics."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Create a Kafka instance\nrhoas kafka create --name my-kafka-instance\n\n# View configuration details of a Kafka instance\nrhoas kafka describe\n\n# List all Kafka instances\nrhoas kafka list\n\n# Create a Kafka topic\nrhoas kafka topic create --name mytopic\n\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -h, --help      Show help for a command\n  -v, --verbose   Enable verbose mode\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas"},"rhoas"),"\t - RHOAS CLI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_acl"},"rhoas kafka acl"),"\t - Manage Kafka ACLs for users and service accounts"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_consumer-group"},"rhoas kafka consumer-group"),"\t - Describe, list, and delete consumer groups for the current Kafka instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_create"},"rhoas kafka create"),"\t - Create a Kafka instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_delete"},"rhoas kafka delete"),"\t - Delete a Kafka instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_describe"},"rhoas kafka describe"),"\t - View configuration details of a Kafka instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_list"},"rhoas kafka list"),"\t - List all Kafka instances"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_topic"},"rhoas kafka topic"),"\t - Create, describe, update, list, and delete topics"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_update"},"rhoas kafka update"),"\t - Update configuration details of a Kafka instance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/commands/rhoas_kafka_use"},"rhoas kafka use"),"\t - Set the current Kafka instance")))}p.isMDXComponent=!0}}]);