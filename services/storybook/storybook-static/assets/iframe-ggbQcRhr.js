import"../sb-preview/runtime.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="modulepreload",p=function(_,i){return new URL(_,i).href},O={},o=function(i,s,a){let e=Promise.resolve();if(s&&s.length>0){const t=document.getElementsByTagName("link");e=Promise.all(s.map(r=>{if(r=p(r,a),r in O)return;O[r]=!0;const l=r.endsWith(".css"),E=l?'[rel="stylesheet"]':"";if(!!a)for(let c=t.length-1;c>=0;c--){const u=t[c];if(u.href===r&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${E}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":d,l||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),l)return new Promise((c,u)=>{n.addEventListener("load",c),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})}))}return e.then(()=>i()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},{createBrowserChannel:R}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,m=R({page:"preview"});f.setChannel(m);window.__STORYBOOK_ADDONS_CHANNEL__=m;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=m);const P={"./stories/ReactComponents/Layout/Box.stories.tsx":async()=>o(()=>import("./Box.stories-hnaOYPOo.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"./stories/ReactComponents/Layout/Divider.stories.tsx":async()=>o(()=>import("./Divider.stories-tgKvn-X4.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url),"./stories/ReactComponents/Layout/Heading.stories.tsx":async()=>o(()=>import("./Heading.stories-H7EsZfHM.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url),"./stories/ReactComponents/Layout/Text.stories.tsx":async()=>o(()=>import("./Text.stories-Pe2pw8Z6.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url)};async function T(_){return P[_]()}const{composeConfigs:w,PreviewWeb:L,ClientApi:v}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const _=await Promise.all([o(()=>import("./entry-preview-oVjRAT5i.js"),__vite__mapDeps([8,2,3,9]),import.meta.url),o(()=>import("./entry-preview-docs-u6Ota2xO.js"),__vite__mapDeps([10,11,3,12,2]),import.meta.url),o(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([13,14]),import.meta.url),o(()=>import("./preview-ZZVayMnQ.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-OnO0tzRj.js"),__vite__mapDeps([15,12]),import.meta.url),o(()=>import("./preview-FekBEZxm.js"),__vite__mapDeps([16,12]),import.meta.url),o(()=>import("./preview-TkXSQy1x.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([17,12]),import.meta.url),o(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-70qxeh8F.js"),__vite__mapDeps([18,3]),import.meta.url),o(()=>import("./preview-lRiwXDwy.js"),__vite__mapDeps([]),import.meta.url),o(()=>import("./preview-02ZD2LaG.js"),__vite__mapDeps([19,20]),import.meta.url)]);return w(_)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new v({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:T,getProjectAnnotations:I});export{o as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Box.stories-hnaOYPOo.js","./index-xDJyt_6g.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js","./index-Qqw9PNeh.css","./Divider.stories-tgKvn-X4.js","./Heading.stories-H7EsZfHM.js","./Text.stories-Pe2pw8Z6.js","./entry-preview-oVjRAT5i.js","./react-18-0wh8ubQX.js","./entry-preview-docs-u6Ota2xO.js","./_getPrototype-bjD8Yebc.js","./index-PPLHz8o0.js","./preview-VI2eoWmp.js","./index-ogXoivrg.js","./preview-OnO0tzRj.js","./preview-FekBEZxm.js","./preview-u8M_OEO2.js","./preview-70qxeh8F.js","./preview-02ZD2LaG.js","./preview-BOd_8uFq.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
