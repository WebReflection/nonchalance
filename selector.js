const e=!0,t=!1,o="querySelectorAll",r="querySelectorAll",{document:l,Element:n,MutationObserver:s,Set:a,WeakMap:c}=self,d=e=>r in e,{filter:h}=[];let u=new Map,f=[],{parse:i}=(u=>{const f=new c,i=(e,t)=>{let o;if(t)for(let r,l=(e=>e.matches||e.webkitMatchesSelector||e.msMatchesSelector)(e),n=0,{length:s}=w;n<s;n++)l.call(e,r=w[n])&&(f.has(e)||f.set(e,new a),o=f.get(e),o.has(r)||(o.add(r),u.handle(e,t,r)));else f.has(e)&&(o=f.get(e),f.delete(e),o.forEach((o=>{u.handle(e,t,o)})))},p=(e,t=!0)=>{for(let o=0,{length:r}=e;o<r;o++)i(e[o],t)},{query:w}=u,m=u.root||l,S=((r,l=document,n=MutationObserver,s=["*"])=>{const a=(t,l,n,s,c,d)=>{for(const h of t)(d||o in h)&&(c?n.has(h)||(n.add(h),s.delete(h),r(h,c)):s.has(h)||(s.add(h),n.delete(h),r(h,c)),d||a(h[o](l),l,n,s,c,e))},c=new n((o=>{if(s.length){const r=s.join(","),l=new Set,n=new Set;for(const{addedNodes:s,removedNodes:c}of o)a(c,r,l,n,t,t),a(s,r,l,n,e,t)}})),{observe:d}=c;return(c.observe=t=>d.call(c,t,{subtree:e,childList:e}))(l),c})(i,m,s,w),{attachShadow:g}=n.prototype;return g&&(n.prototype.attachShadow=function(e){const t=g.call(this,e);return S.observe(t),t}),w.length&&p(m[r](w)),{drop:e=>{for(let t=0,{length:o}=e;t<o;t++)f.delete(e[t])},flush:()=>{const e=S.takeRecords();for(let t=0,{length:o}=e;t<o;t++)p(h.call(e[t].removedNodes,d),!1),p(h.call(e[t].addedNodes,d),!0)},observer:S,parse:p}})({query:f,document:document,handle(e,t,o){if(t){let t=u.get(o);e instanceof t||new t(e)}}});const p=(e,t)=>{if(u.has(e))throw new TypeError(`Duplicated selector: ${e}`);return u.set(e,t),f.push(e),i(document.querySelectorAll(e)),t};export{p as define};
