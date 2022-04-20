"use strict";(self.webpackChunkmapy_cz_react_docs=self.webpackChunkmapy_cz_react_docs||[]).push([[172],{7915:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(7378),o=r(3615),a="smap_3Ndk",i=r(1296),u=function(e){var n=e.children,r=e.width,o=void 0===r?"100%":r,u=e.height,s=void 0===u?"auto":u,c=(0,i.S)(),l=c.map,d=c.id;return t.createElement("div",{style:{width:o,height:s,minHeight:"150px"},id:d,className:a},l&&n)};u.propTypes={children:o.node,height:o.string,width:o.string};var s=(0,t.memo)(u)},1296:function(e,n,r){r.d(n,{Z:function(){return h},S:function(){return v}});var t=r(7378),o=r(3615),a=r(1572),i=r(455),u=r(3996),s=r.n(u),c=function(e){return function(n){var r=(0,t.useState)(!1),o=r[0],i=r[1],u=(0,t.useCallback)((function(e){var n,r;void 0===e&&(e=1),s()(window,"This library is not designed to be run on the server"),null!=(n=window)&&null!=(r=n.SMap)&&r.Suggest?i(!0):e<=a.aG&&setTimeout((function(){return u(!1)}),a.VP)}),[]);return(0,t.useEffect)((function(){if(document.getElementById(a.AT))u();else{var e=document.createElement("script");e.src="https://api.mapy.cz/loader.js",e.id=a.AT,e.async=!0,e.onload=function(){window.Loader.async=!0,window.Loader.load(null,{suggest:!0},u)},document.head.appendChild(e)}}),[u]),o?t.createElement(e,n):t.createElement("div",null,"Loading map...")}},l=function(e,n){return function(r,t,o,a){void 0===o&&(o=17),void 0===a&&(a=!0);var i=n.Coords.fromWGS84(r,t);e.setCenterZoom(i,o,a)}},d=r(4665),p=function(){var e=(0,t.useState)([]),n=e[0],r=e[1],o=(0,t.useCallback)((function(e,n){r((function(r){if(r.some((function(e){return e.type===n})))throw new Error("There can be only one rendered layer of type "+n+" in map");return[].concat(r,[{type:n,data:e}])}))}),[]),a=(0,t.useCallback)((function(e){var r=n.find((function(n){return n.type===e}));return null==r?void 0:r.data}),[n]);return{activeLayers:n,getActiveLayerByType:a,registerActiveLayer:o}},m=function(e,n,r,o,a,i,u){var s=(0,t.useState)(),c=s[0],l=s[1];return(0,t.useEffect)((function(){if(!c&&i){var t=i.Coords.fromWGS84(e.lng,e.lat),s=new i(window.JAK.gel(n),t,u);s.setZoomRange(a,o);var d=r[0],p=r.slice(1);s.addDefaultLayer(d).enable(),p.forEach((function(e){s.addDefaultLayer(e)})),l(s)}}),[e,n,c,r,o,a,i,u]),c},f=(0,t.createContext)(),v=(0,d.V)(f,"MapProvider"),y=function(e){var n=e.center,r=e.children,o=e.id,i=void 0===o?"mapy-cz-map":o,u=e.mapLayers,s=void 0===u?[a.Hi.BASE_NEW]:u,c=e.maxZoom,d=void 0===c?18:c,v=e.minZoom,y=void 0===v?1:v,h=e.zoom,w=void 0===h?5:h,g=(0,t.useMemo)((function(){return window.SMap}),[]),M=m(n,i,s,d,y,g,w),k=p();return t.createElement(f.Provider,{value:Object.assign({},k,{id:i,map:M,mapLayers:s,setMapCenter:l(M,g),SMap:g})},r)};y.propTypes={center:(0,o.shape)(i.Y).isRequired,children:o.node,id:o.string,mapLayers:(0,o.arrayOf)([(0,o.oneOf)(Object.keys(a.Hi))]),maxZoom:o.number,minZoom:o.number,zoom:o.number};var h=c(y)},1002:function(e,n,r){var t=r(7378),o=r(455),a=r(258),i=r(9517),u=function(e){var n=(0,i.S)();return(0,t.useEffect)((function(){var r=(0,a.Z)(e);return null==n||n.addMarker(r),function(){null==n||n.removeMarker(r,!0)}}),[n,e]),null};u.propTypes=o.q,n.Z=u},9517:function(e,n,r){r.d(n,{S:function(){return c}});var t=r(7378),o=r(3615),a=r(4665),i=r(1572),u=r(1296),s=(0,t.createContext)(),c=(0,a.V)(s,"MarkerLayer"),l=function(e){var n=e.children,r=(0,u.S)(),o=r.map,a=r.SMap,c=r.registerActiveLayer,l=(0,t.useRef)();return(0,t.useEffect)((function(){var e=new a.Layer.Marker;return l.current=e,null==o||o.addLayer(e),e.enable(),c(e,i.$N.MARKER),function(){o.removeLayer(l.current)}}),[o,a,c]),t.createElement(s.Provider,{value:l.current},l.current&&n)};l.propTypes={children:o.node},n.Z=l},1601:function(e,n,r){var t=r(3615),o=r(7378),a=r(1296),i=function(e){var n=e.pan,r=void 0===n||n,t=e.zoom,i=void 0===t||t,u=(0,a.S)(),s=u.map,c=u.SMap,l=0;return l|=r&&c.KB_PAN,l|=i&&c.KB_ZOOM,(0,o.useEffect)((function(){var e=new c.Control.Keyboard(l);return s.addControl(e),function(){s.removeControl(e)}}),[s,l,c]),null};i.propTypes={pan:t.bool,zoom:t.bool},n.Z=i},8053:function(e,n,r){var t=r(3615),o=r(7378),a=r(1296),i=function(e){var n=e.pan,r=void 0===n||n,t=e.wheel,i=void 0===t||t,u=e.zoom,s=void 0===u||u,c=e.options,l=(0,a.S)(),d=l.map,p=l.SMap,m=0;return m|=r&&p.MOUSE_PAN,m|=s&&p.MOUSE_ZOOM,m|=i&&p.MOUSE_WHEEL,(0,o.useEffect)((function(){var e=new p.Control.Mouse(m,c);return d.addControl(e),function(){d.removeControl(e)}}),[d,m,p,c]),null};i.propTypes={options:(0,t.shape)({driftSlowdown:t.number,driftTreshold:t.number,idleDelay:t.number,maxDriftSpeed:t.number,minDriftSpeed:t.number,scrollDelay:t.number}),pan:t.bool,wheel:t.bool,zoom:t.bool},n.Z=i},5970:function(e,n,r){var t,o=r(7378),a=r(3615),i=r(1296),u=function(e){var n=e.labels,r=e.showZoomMenu,t=e.sliderHeight,a=void 0===t?16:t,u=e.stepHeight,s=void 0===u?9:u,c=(0,i.S)(),l=c.map,d=c.SMap;return(0,o.useEffect)((function(){var e=new d.Control.Zoom(n,{showZoomMenu:r,sliderHeight:a,step:s});return l.addControl(e),function(){l.removeControl(e)}}),[n,l,r,a,d,s]),null};u.propTypes={labels:(0,a.shape)((t={},t[a.number]=a.string,t)),showZoomMenu:a.bool,sliderHeight:a.number,step:a.number,titles:(0,a.arrayOf)(a.string)},n.Z=u},1572:function(e,n,r){r.d(n,{AT:function(){return t},aG:function(){return o},VP:function(){return a},Hi:function(){return i},nS:function(){return u},b2:function(){return s},GA:function(){return c},$N:function(){return l}});var t="mapy.cz-api-script",o=3,a=300,i={BASE:1,TURIST:2,OPHOTO:3,HYBRID:4,HISTORIC:5,BIKE:6,TRAIL:7,OPHOTO0203:8,OPHOTO0406:9,OBLIQUE:12,SMART_BASE:14,SMART_OPHOTO:15,SMART_TURIST:16,RELIEF:17,TURIST_WINTER:19,SMART_WINTER:20,SUMMER:21,SMART_SUMMER:22,GEOGRAPHY:23,OPHOTO1012:24,HYBRID_SPARSE:25,OPHOTO1415:26,BASE_NEW:27,TURIST_NEW:28},u={FAST:"fast",SHORT:"short",BIKE1:"bike1",BIKE2:"bike2",BIKE3:"bike3",TURIST1:"turist1",TURIST2:"turist2"},s="#f00",c=3,l={CANVAS:"CANVAS",GEOMETRY:"GEOMETRY",HUD:"HUD",IMAGE:"IMAGE",MARKER:"MARKER"}},258:function(e,n,r){var t=r(1244),o=["cardBodyText","cardHeaderText","coords","enableCard","imgSrc","tooltip"];n.Z=function(e){var n=e.cardBodyText,r=e.cardHeaderText,a=e.coords,i=e.enableCard,u=e.imgSrc,s=e.tooltip,c=(0,t.Z)(e,o),l=Object.assign({},u?{url:u}:void 0,s?{title:s}:void 0,c),d=window.SMap.Coords.fromWGS84(a.longitude,a.latitude),p=new window.SMap.Marker(d,!1,Object.keys(l).length>0?l:void 0);if(i){var m=new window.SMap.Card;m.getHeader().innerHTML=r,m.getBody().innerHTML=n,p.decorate(window.SMap.Marker.Feature.Card,m)}return p}},4665:function(e,n,r){r.d(n,{V:function(){return o}});var t=r(7378),o=function(e,n){return function(){var r,o=(0,t.useContext)(e);if(void 0===o)throw new Error(e.displayName+" must be used within "+(null!=n?n:null==e||null==(r=e.Provider)?void 0:r.displayName));return o}}},455:function(e,n,r){r.d(n,{Y:function(){return o},q:function(){return a}});var t=r(3615),o={lng:(0,t.oneOfType)([t.number,t.string]),lat:(0,t.oneOfType)([t.number,t.string])},a={cardBodyText:t.string,cardHeaderText:t.string,coords:(0,t.shape)({lng:t.number,lat:t.number}).isRequired,enableCard:t.bool,imgSrc:t.string,tooltip:t.string}},9089:function(e,n,r){r.d(n,{_y:function(){return o},Om:function(){return a},jS:function(){return i}});var t=function(e,n,r){return 1*(Math.random()*(n-e)+e).toFixed(r)},o=function(e,n){return Array.from(Array(e),(function(e,r){return n?{gps:{longitude:t(-180,180,5),latitude:t(-90,90,5)},title:"Marker "+r}:{longitude:t(-180,180,5),latitude:t(-90,90,5),title:"Marker "+r}}))},a=function(e){var n=e._options;window.alert(n.title+" was clicked!")},i=function(){window.alert("Cluster was clicked!")}},4675:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return y},contentTitle:function(){return h},metadata:function(){return w},toc:function(){return g},default:function(){return k}});var t=r(2685),o=r(1244),a=(r(7378),r(5318)),i=r(1296),u=r(7915),s=r(5970),c=r(1601),l=r(8053),d=r(9517),p=r(1002),m=r(1080),f=r(9089),v=["components"],y={id:"06-interactive-map-with-thousands-of-points-marker"},h="Rendering thousands of points with Marker - do not do this",w={unversionedId:"Examples/06-interactive-map-with-thousands-of-points-marker",id:"Examples/06-interactive-map-with-thousands-of-points-marker",title:"Rendering thousands of points with Marker - do not do this",description:"MapProvider, Marker, MarkerLayer, MouseControl, MultipleMarkers, ZoomControl} from '../../../core/src';",source:"@site/docs/Examples/06-interactive-map-with-thousands-of-points-marker.md",sourceDirName:"Examples",slug:"/Examples/06-interactive-map-with-thousands-of-points-marker",permalink:"/react-mapy-cz/docs/Examples/06-interactive-map-with-thousands-of-points-marker",editUrl:"https://github.com/lundegaard/mapy-cz-react/docs/Examples/06-interactive-map-with-thousands-of-points-marker.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{id:"06-interactive-map-with-thousands-of-points-marker"},sidebar:"docsSidebar",previous:{title:"Rendering thousands of points (MultipleMarkers)",permalink:"/react-mapy-cz/docs/Examples/05-interactive-map-with-thousands-of-points"},next:{title:"Clustered points and signals",permalink:"/react-mapy-cz/docs/Examples/07-interactive-map-with-clusters-and-signals"}},g=[],M={toc:g};function k(e){var n=e.components,r=(0,o.Z)(e,v);return(0,a.kt)("wrapper",(0,t.Z)({},M,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rendering-thousands-of-points-with-marker---do-not-do-this"},"Rendering thousands of points with Marker - do not do this"),(0,a.kt)("p",null,"Interactive map with controls and thousands of markers implemented with Marker component. This example serves as a common pitfall when working wit a large quantity of points.\nIn this example we are rendering only 2 000 points and already you can see the poor performance."),(0,a.kt)("p",null,"Implementation with single Marker component using loop causes extremely slow map render. For best performance use ",(0,a.kt)("a",{parentName:"p",href:"/docs/API/multiple-markers"},"MultipleMarkers"),", or take a look at previous example ",(0,a.kt)("a",{parentName:"p",href:"/docs/Examples/05-interactive-map-with-thousands-of-points"},"Rendering thousands of points")),(0,a.kt)("div",null,(0,a.kt)("section",{className:m.Z.sMap},(0,a.kt)(i.Z,{center:{lng:14.4608576,lat:50.0963478},mdxType:"MapProvider"},(0,a.kt)(u.Z,{mdxType:"Map"},(0,a.kt)(s.Z,{mdxType:"ZoomControl"}),(0,a.kt)(c.Z,{mdxType:"KeyboardControl"}),(0,a.kt)(l.Z,{zoom:!0,pan:!0,wheel:!0,mdxType:"MouseControl"}),(0,a.kt)(d.Z,{mdxType:"MarkerLayer"},(0,f._y)(2e3).map((function(e,n){return(0,a.kt)(p.Z,{key:n,coords:e,mdxType:"Marker"})}))))))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<MapProvider center={{lng:  14.4608576, lat: 50.0963478}} >\n    <Map>\n        <ZoomControl />\n        <KeyboardControl />\n        <MouseControl zoom pan wheel />\n        {generatePoints(2000).map((point, index) => <MarkerLayer key={index} ><Marker coords={point} /> </MarkerLayer>)}\n    </Map>\n</MapProvider>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pitfalls")),(0,a.kt)("br",null),"Implementation with single Marker component using loop causes extremely slow map render. For best performance use MultipleMarkers.")}k.isMDXComponent=!0},5318:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(7378);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?t.createElement(f,i(i({ref:n},l),{},{components:r})):t.createElement(f,i({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var s in n)hasOwnProperty.call(n,s)&&(u[s]=n[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3996:function(e){e.exports=function(e,n,r,t,o,a,i,u){if(!e){var s;if(void 0===n)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,t,o,a,i,u],l=0;(s=new Error(n.replace(/%s/g,(function(){return c[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},1080:function(e,n){n.Z={heroBanner:"heroBanner_1ZBZ",sMap:"sMap_JuFh"}}}]);