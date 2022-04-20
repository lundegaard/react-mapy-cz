"use strict";(self.webpackChunkmapy_cz_react_docs=self.webpackChunkmapy_cz_react_docs||[]).push([[278],{7915:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7378),o=t(3615),i="smap_3Ndk",a=t(1296),u=function(e){var n=e.children,t=e.width,o=void 0===t?"100%":t,u=e.height,c=void 0===u?"auto":u,l=(0,a.S)(),p=l.map,s=l.id;return r.createElement("div",{style:{width:o,height:c,minHeight:"150px"},id:s,className:i},p&&n)};u.propTypes={children:o.node,height:o.string,width:o.string};var c=(0,r.memo)(u)},1296:function(e,n,t){t.d(n,{Z:function(){return h},S:function(){return v}});var r=t(7378),o=t(3615),i=t(1572),a=t(455),u=t(3996),c=t.n(u),l=function(e){return function(n){var t=(0,r.useState)(!1),o=t[0],a=t[1],u=(0,r.useCallback)((function(e){var n,t;void 0===e&&(e=1),c()(window,"This library is not designed to be run on the server"),null!=(n=window)&&null!=(t=n.SMap)&&t.Suggest?a(!0):e<=i.aG&&setTimeout((function(){return u(!1)}),i.VP)}),[]);return(0,r.useEffect)((function(){if(document.getElementById(i.AT))u();else{var e=document.createElement("script");e.src="https://api.mapy.cz/loader.js",e.id=i.AT,e.async=!0,e.onload=function(){window.Loader.async=!0,window.Loader.load(null,{suggest:!0},u)},document.head.appendChild(e)}}),[u]),o?r.createElement(e,n):r.createElement("div",null,"Loading map...")}},p=function(e,n){return function(t,r,o,i){void 0===o&&(o=17),void 0===i&&(i=!0);var a=n.Coords.fromWGS84(t,r);e.setCenterZoom(a,o,i)}},s=t(4665),d=function(){var e=(0,r.useState)([]),n=e[0],t=e[1],o=(0,r.useCallback)((function(e,n){t((function(t){if(t.some((function(e){return e.type===n})))throw new Error("There can be only one rendered layer of type "+n+" in map");return[].concat(t,[{type:n,data:e}])}))}),[]),i=(0,r.useCallback)((function(e){var t=n.find((function(n){return n.type===e}));return null==t?void 0:t.data}),[n]);return{activeLayers:n,getActiveLayerByType:i,registerActiveLayer:o}},m=function(e,n,t,o,i,a,u){var c=(0,r.useState)(),l=c[0],p=c[1];return(0,r.useEffect)((function(){if(!l&&a){var r=a.Coords.fromWGS84(e.lng,e.lat),c=new a(window.JAK.gel(n),r,u);c.setZoomRange(i,o);var s=t[0],d=t.slice(1);c.addDefaultLayer(s).enable(),d.forEach((function(e){c.addDefaultLayer(e)})),p(c)}}),[e,n,l,t,o,i,a,u]),l},f=(0,r.createContext)(),v=(0,s.V)(f,"MapProvider"),y=function(e){var n=e.center,t=e.children,o=e.id,a=void 0===o?"mapy-cz-map":o,u=e.mapLayers,c=void 0===u?[i.Hi.BASE_NEW]:u,l=e.maxZoom,s=void 0===l?18:l,v=e.minZoom,y=void 0===v?1:v,h=e.zoom,b=void 0===h?5:h,E=(0,r.useMemo)((function(){return window.SMap}),[]),w=m(n,a,c,s,y,E,b),T=d();return r.createElement(f.Provider,{value:Object.assign({},T,{id:a,map:w,mapLayers:c,setMapCenter:p(w,E),SMap:E})},t)};y.propTypes={center:(0,o.shape)(a.Y).isRequired,children:o.node,id:o.string,mapLayers:(0,o.arrayOf)([(0,o.oneOf)(Object.keys(i.Hi))]),maxZoom:o.number,minZoom:o.number,zoom:o.number};var h=l(y)},2885:function(e,n,t){var r=t(7378),o=t(3615),i=t(455),a=t(1296),u=function(e){var n=e.redPointer,t=e.coords,o=t.lng,i=t.lat,u=e.showDistance,c=(0,a.S)(),l=c.map,p=c.SMap;return(0,r.useEffect)((function(){var e=new p.Control.Pointer({type:n?p.Control.Pointer.TYPES.RED:p.Control.Pointer.TYPES.BLUE,snapHUDtoScreen:1,showDistance:u});return l.addControl(e),e.setCoords(p.Coords.fromWGS84(o,i)),function(){l.removeControl(e)}}),[i,o,l,n,u,p]),null};u.propTypes={coords:i.Y.isRequired,redPointer:o.bool,showDistance:o.bool},n.Z=u},1601:function(e,n,t){var r=t(3615),o=t(7378),i=t(1296),a=function(e){var n=e.pan,t=void 0===n||n,r=e.zoom,a=void 0===r||r,u=(0,i.S)(),c=u.map,l=u.SMap,p=0;return p|=t&&l.KB_PAN,p|=a&&l.KB_ZOOM,(0,o.useEffect)((function(){var e=new l.Control.Keyboard(p);return c.addControl(e),function(){c.removeControl(e)}}),[c,p,l]),null};a.propTypes={pan:r.bool,zoom:r.bool},n.Z=a},8053:function(e,n,t){var r=t(3615),o=t(7378),i=t(1296),a=function(e){var n=e.pan,t=void 0===n||n,r=e.wheel,a=void 0===r||r,u=e.zoom,c=void 0===u||u,l=e.options,p=(0,i.S)(),s=p.map,d=p.SMap,m=0;return m|=t&&d.MOUSE_PAN,m|=c&&d.MOUSE_ZOOM,m|=a&&d.MOUSE_WHEEL,(0,o.useEffect)((function(){var e=new d.Control.Mouse(m,l);return s.addControl(e),function(){s.removeControl(e)}}),[s,m,d,l]),null};a.propTypes={options:(0,r.shape)({driftSlowdown:r.number,driftTreshold:r.number,idleDelay:r.number,maxDriftSpeed:r.number,minDriftSpeed:r.number,scrollDelay:r.number}),pan:r.bool,wheel:r.bool,zoom:r.bool},n.Z=a},5970:function(e,n,t){var r,o=t(7378),i=t(3615),a=t(1296),u=function(e){var n=e.labels,t=e.showZoomMenu,r=e.sliderHeight,i=void 0===r?16:r,u=e.stepHeight,c=void 0===u?9:u,l=(0,a.S)(),p=l.map,s=l.SMap;return(0,o.useEffect)((function(){var e=new s.Control.Zoom(n,{showZoomMenu:t,sliderHeight:i,step:c});return p.addControl(e),function(){p.removeControl(e)}}),[n,p,t,i,s,c]),null};u.propTypes={labels:(0,i.shape)((r={},r[i.number]=i.string,r)),showZoomMenu:i.bool,sliderHeight:i.number,step:i.number,titles:(0,i.arrayOf)(i.string)},n.Z=u},1572:function(e,n,t){t.d(n,{AT:function(){return r},aG:function(){return o},VP:function(){return i},Hi:function(){return a},nS:function(){return u},b2:function(){return c},GA:function(){return l},$N:function(){return p}});var r="mapy.cz-api-script",o=3,i=300,a={BASE:1,TURIST:2,OPHOTO:3,HYBRID:4,HISTORIC:5,BIKE:6,TRAIL:7,OPHOTO0203:8,OPHOTO0406:9,OBLIQUE:12,SMART_BASE:14,SMART_OPHOTO:15,SMART_TURIST:16,RELIEF:17,TURIST_WINTER:19,SMART_WINTER:20,SUMMER:21,SMART_SUMMER:22,GEOGRAPHY:23,OPHOTO1012:24,HYBRID_SPARSE:25,OPHOTO1415:26,BASE_NEW:27,TURIST_NEW:28},u={FAST:"fast",SHORT:"short",BIKE1:"bike1",BIKE2:"bike2",BIKE3:"bike3",TURIST1:"turist1",TURIST2:"turist2"},c="#f00",l=3,p={CANVAS:"CANVAS",GEOMETRY:"GEOMETRY",HUD:"HUD",IMAGE:"IMAGE",MARKER:"MARKER"}},4665:function(e,n,t){t.d(n,{V:function(){return o}});var r=t(7378),o=function(e,n){return function(){var t,o=(0,r.useContext)(e);if(void 0===o)throw new Error(e.displayName+" must be used within "+(null!=n?n:null==e||null==(t=e.Provider)?void 0:t.displayName));return o}}},455:function(e,n,t){t.d(n,{Y:function(){return o},q:function(){return i}});var r=t(3615),o={lng:(0,r.oneOfType)([r.number,r.string]),lat:(0,r.oneOfType)([r.number,r.string])},i={cardBodyText:r.string,cardHeaderText:r.string,coords:(0,r.shape)({lng:r.number,lat:r.number}).isRequired,enableCard:r.bool,imgSrc:r.string,tooltip:r.string}},8380:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return f},contentTitle:function(){return v},metadata:function(){return y},toc:function(){return h},default:function(){return E}});var r=t(2685),o=t(1244),i=(t(7378),t(5318)),a=t(1296),u=t(7915),c=t(2885),l=t(5970),p=t(1601),s=t(8053),d=t(1080),m=["components"],f={id:"09-interactive-map-with-pointer"},v="Pointer",y={unversionedId:"Examples/09-interactive-map-with-pointer",id:"Examples/09-interactive-map-with-pointer",title:"Pointer",description:"MapProvider,MouseControl, Pointer, PointerTypes, ZoomControl} from '../../../core/src';",source:"@site/docs/Examples/09-interactive-map-with-pointer.md",sourceDirName:"Examples",slug:"/Examples/09-interactive-map-with-pointer",permalink:"/react-mapy-cz/docs/Examples/09-interactive-map-with-pointer",editUrl:"https://github.com/lundegaard/mapy-cz-react/docs/Examples/09-interactive-map-with-pointer.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{id:"09-interactive-map-with-pointer"},sidebar:"docsSidebar",previous:{title:"Map with search",permalink:"/react-mapy-cz/docs/Examples/08-interactive-map-with-search"},next:{title:"Route",permalink:"/react-mapy-cz/docs/Examples/10-interactive-map-with-route"}},h=[],b={toc:h};function E(e){var n=e.components,t=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pointer"},"Pointer"),(0,i.kt)("p",null,"Interactive map with controls and pointer. The pointer shows the direction of the specified location if it is out of the map view."),(0,i.kt)("div",null,(0,i.kt)("section",{className:d.Z.sMap},(0,i.kt)(a.Z,{center:{lng:14.4347124,lat:50.0891652},zoom:16,mdxType:"MapProvider"},(0,i.kt)(u.Z,{mdxType:"Map"},(0,i.kt)(c.Z,{coords:{lng:14.4608576,lat:50.0963478},mdxType:"Pointer"}),(0,i.kt)(l.Z,{mdxType:"ZoomControl"}),(0,i.kt)(p.Z,{mdxType:"KeyboardControl"}),(0,i.kt)(s.Z,{zoom:!0,pan:!0,wheel:!0,mdxType:"MouseControl"}))))),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<MapProvider center={{lng:  14.4347124, lat: 50.0891652}} zoom={16}>\n    <Map>\n        <Pointer coords={{lng: 14.4608576, lat: 50.0963478}} />\n        <ZoomControl />\n        <KeyboardControl />\n        <MouseControl zoom pan wheel />\n    </Map>\n</MapProvider>\n")))}E.isMDXComponent=!0},5318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3996:function(e){e.exports=function(e,n,t,r,o,i,a,u){if(!e){var c;if(void 0===n)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[t,r,o,i,a,u],p=0;(c=new Error(n.replace(/%s/g,(function(){return l[p++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},1080:function(e,n){n.Z={heroBanner:"heroBanner_1ZBZ",sMap:"sMap_JuFh"}}}]);