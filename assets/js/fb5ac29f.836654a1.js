"use strict";(self.webpackChunkmapy_cz_react_docs=self.webpackChunkmapy_cz_react_docs||[]).push([[668],{6460:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(2685),a=r(1244),o=(r(7378),r(5318)),l=["components"],i={id:"clusterer"},c="Clusterer",u={unversionedId:"API/clusterer",id:"API/clusterer",title:"Clusterer",description:"Clusterer groups multiple markers close to each other on a map into a single cluster.",source:"@site/docs/API/clusterer.md",sourceDirName:"API",slug:"/API/clusterer",permalink:"/react-mapy-cz/docs/API/clusterer",editUrl:"https://github.com/lundegaard/mapy-cz-react/docs/API/clusterer.md",tags:[],version:"current",frontMatter:{id:"clusterer"},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/react-mapy-cz/docs/getting-started"},next:{title:"Keyboard control",permalink:"/react-mapy-cz/docs/API/keyboard-control"}},p=[{value:"How to use it",id:"how-to-use-it",children:[],level:2},{value:"Props",id:"props",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"clusterer"},"Clusterer"),(0,o.kt)("p",null,"Clusterer groups multiple markers close to each other on a map into a single cluster.\nClusters are created automatically based on config and map zoom level."),(0,o.kt)("p",null,"Clustering is a functionality added to individual marker layer. That meaning Clusterer component has to be a child of ",(0,o.kt)("a",{parentName:"p",href:"/docs/API/marker-layer"},"MarkerLayer")," component."),(0,o.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { MapProvider, Map, MarkerLayer, Clusterer } from 'mapy-cz-react';\n\n<MapProvider center={{ lat: 50.096406, lng: 14.463071 }} id=\"map-example\">\n    <Map>\n        <MarkerLayer>\n            <Clusterer />\n            ...Some Marker or MultipleMarkers component\n        </MarkerLayer>\n    </Map>\n</MapProvider>;\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"maxDistance"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"100")),(0,o.kt)("td",{parentName:"tr",align:null},"Distance in which point is included into cluster"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<MapProvider\n    center={{ lat: 50.096406, lng: 14.463071 }}\n    id="map-example"\n    zoom={15}\n>\n    <Map>\n        <MarkerLayer>\n            <Clusterer />\n            <Marker coords={{ latitude: 50.096406, longitude: 14.462 }} />\n            <Marker coords={{ latitude: 50.096406, longitude: 14.463 }} />\n            <Marker coords={{ latitude: 50.096406, longitude: 14.464 }} />\n            <Marker coords={{ latitude: 50.096406, longitude: 14.468 }} />\n        </MarkerLayer>\n    </Map>\n</MapProvider>\n')))}d.isMDXComponent=!0},5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);