(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{5930:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fade",function(){return t(9265)}])},9265:function(e,n,t){"use strict";t.r(n),t.d(n,{FadeLeft:function(){return c},FadeRight:function(){return u},FadeTop:function(){return s}});var r=t(5893),i=t(7294),a=t(6893),o=t(802);function u(e){var n=e.children,t=e.className,u=(0,i.useRef)(null),c=(0,a.Y)(u,{once:!1,amount:.3});return(0,r.jsx)(o.E.div,{ref:u,initial:{opacity:0},animate:{opacity:c?1:0,x:c?0:50},transition:{duration:.8},className:t,children:n})}function c(e){var n=e.children,t=e.className,u=(0,i.useRef)(null),c=(0,a.Y)(u,{once:!1,amount:.3});return(0,r.jsx)(o.E.div,{ref:u,initial:{opacity:0},animate:{opacity:c?1:0,x:c?0:-50},transition:{duration:.8},className:t,children:n})}function s(e){var n=e.children,t=(0,i.useRef)(null),u=(0,a.Y)(t,{once:!1,amount:.2});return(0,r.jsx)(o.E.div,{ref:t,initial:{opacity:0},animate:{opacity:u?1:0,y:u?0:-50},transition:{duration:.8},children:n})}n.default=u},6893:function(e,n,t){"use strict";t.d(n,{Y:function(){return o}});var r=t(7294),i=t(4799);let a={some:0,all:1};function o(e,{root:n,margin:t,amount:o,once:u=!1}={}){let[c,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{if(!e.current||u&&c)return;let r=()=>(s(!0),u?void 0:()=>s(!1)),f={root:n&&n.current||void 0,margin:t,amount:o};return function(e,n,{root:t,margin:r,amount:o="some"}={}){let u=(0,i.IG)(e),c=new WeakMap,s=e=>{e.forEach(e=>{let t=c.get(e.target);if(e.isIntersecting!==Boolean(t)){if(e.isIntersecting){let r=n(e);"function"==typeof r?c.set(e.target,r):f.unobserve(e.target)}else"function"==typeof t&&(t(e),c.delete(e.target))}})},f=new IntersectionObserver(s,{root:t,rootMargin:r,threshold:"number"==typeof o?o:a[o]});return u.forEach(e=>f.observe(e)),()=>f.disconnect()}(e.current,r,f)},[n,e,t,u,o]),c}}},function(e){e.O(0,[802,774,888,179],function(){return e(e.s=5930)}),_N_E=e.O()}]);