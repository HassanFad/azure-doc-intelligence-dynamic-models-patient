(()=>{"use strict";var e,t,r,a,o,n={},c={};function f(e){var t=c[e];if(void 0!==t)return t.exports;var r=c[e]={exports:{}};return n[e].call(r.exports,r,r.exports,f),r.exports}f.m=n,e=[],f.O=(t,r,a,o)=>{if(!r){var n=1/0;for(i=0;i<e.length;i++){r=e[i][0],a=e[i][1],o=e[i][2];for(var c=!0,d=0;d<r.length;d++)(!1&o||n>=o)&&Object.keys(f.O).every((e=>f.O[e](r[d])))?r.splice(d--,1):(c=!1,o<n&&(n=o));if(c){e.splice(i--,1);var b=a();void 0!==b&&(t=b)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[r,a,o]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);f.r(o);var n={};t=t||[null,r({}),r([]),r(r)];for(var c=2&a&&e;"object"==typeof c&&!~t.indexOf(c);c=r(c))Object.getOwnPropertyNames(c).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(o,n),o},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({24:"7729ca8d",53:"935f2afb",67:"1a39eec1",68:"b6f6be67",73:"2e733727",85:"1f391b9e",101:"8e90f303",109:"8b8750e7",202:"90f70a9d",226:"5e03e2be",264:"5d91b810",414:"393be207",467:"77a3c80c",514:"1be78505",525:"38190d6f",592:"ffd4c37b",613:"4ce5ce3a",639:"08ac6ce0",699:"50c0e6bf",702:"772ec4c3",763:"2229aab8",817:"14eb3368",821:"a42d73d9",899:"7979b756",905:"ef2c1d0c",906:"b5d569b2",907:"a73b8167",918:"17896441"}[e]||e)+"."+{24:"7ae69363",53:"34df48a2",67:"f9d51614",68:"31fc13c2",73:"a1b91095",85:"bbb5cf32",101:"057b753f",109:"5d1f030d",202:"48a694c3",226:"a0e55730",248:"6aae7cc3",264:"aa3bf63b",414:"7343082b",467:"08166bba",514:"b60d0d9b",525:"dfd1729e",592:"b4a4dd8c",613:"fa937aab",639:"0482bf87",699:"1d6bb7e9",702:"50007e98",712:"8cb158cd",763:"05810c50",817:"7c8cdac4",821:"53d8d015",899:"b476ffb2",905:"d2c4cb3f",906:"e8e0f02a",907:"c92af83f",918:"ba637233"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a={},o="docs:",f.l=(e,t,r,n)=>{if(a[e])a[e].push(t);else{var c,d;if(void 0!==r)for(var b=document.getElementsByTagName("script"),i=0;i<b.length;i++){var u=b[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+r){c=u;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",o+r),c.src=e),a[e]=[t];var l=(t,r)=>{c.onerror=c.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),d&&document.head.appendChild(c)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/Contoso-New-Patient-App/",f.gca=function(e){return e={17896441:"918","7729ca8d":"24","935f2afb":"53","1a39eec1":"67",b6f6be67:"68","2e733727":"73","1f391b9e":"85","8e90f303":"101","8b8750e7":"109","90f70a9d":"202","5e03e2be":"226","5d91b810":"264","393be207":"414","77a3c80c":"467","1be78505":"514","38190d6f":"525",ffd4c37b:"592","4ce5ce3a":"613","08ac6ce0":"639","50c0e6bf":"699","772ec4c3":"702","2229aab8":"763","14eb3368":"817",a42d73d9:"821","7979b756":"899",ef2c1d0c:"905",b5d569b2:"906",a73b8167:"907"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var a=f.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=f.p+f.u(t),c=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",c.name="ChunkLoadError",c.type=o,c.request=n,a[1](c)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,n=r[0],c=r[1],d=r[2],b=0;if(n.some((t=>0!==e[t]))){for(a in c)f.o(c,a)&&(f.m[a]=c[a]);if(d)var i=d(f)}for(t&&t(r);b<n.length;b++)o=n[b],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(i)},r=self.webpackChunkdocs=self.webpackChunkdocs||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();