"use strict";(self.webpackChunk_mlflow_mlflow=self.webpackChunk_mlflow_mlflow||[]).push([[960],{56829:function(t,e,r){r.r(e),r.d(e,{ParallelCoordinatesPlot:function(){return p},default:function(){return g}});var n=r(1053),o=r(78465),i=r(98831),l=r(38228),s=r(35901),u=(r(78006),r(51150)),a=r(45159),c=r(8342),h=r(15132);const d=(t,e,r)=>{var n;const o="http://www.w3.org/2000/svg",i=document.createElementNS(o,"g"),l=document.createElementNS(o,"rect"),s=document.createElementNS(o,"text");s.innerHTML=e,s.setAttribute("fill","black"),i.classList.add(t),i.appendChild(l),i.appendChild(s),null===(n=r.parentNode)||void 0===n||n.insertBefore(i,r.nextSibling);const u=s.getBBox();l.setAttribute("x",(u.x-4).toString()),l.setAttribute("y",(u.y-4).toString()),l.setAttribute("width",(u.width+8).toString()),l.setAttribute("height",(u.height+8).toString()),l.setAttribute("fill","white")},f=t=>{const{onHover:e,onUnhover:r,selectedRunUuid:n,data:i,axesRotateThreshold:l,selectedMetrics:a,selectedParams:f,width:p,height:g,closeContextMenu:m}=t,v=(0,o.useRef)(null),b=(0,o.useRef)(),[w,y]=(0,o.useState)("");(0,o.useEffect)((()=>{w?null===e||void 0===e||e(w):null===r||void 0===r||r()}),[w,e,r]);const M=(0,o.useCallback)((()=>!1!==b.current.brushed()?b.current.brushed():b.current.data()),[]);(0,o.useEffect)((()=>{if(!b.current)return;const t=M().filter((t=>[w,n].includes(t.uuid)));t.length?b.current.highlight(t):b.current.unhighlight()}),[w,n,M]);const x=(0,o.useCallback)((t=>{const e=[],r=M();if(0===r.length)return!1;const n=A();if(0===n.length)return!1;const o=E(t,n[0]);if(!o)return!1;const i=o;return n.forEach(((n,o)=>{C(n[i-1],n[i],t,2)&&e.push(r[o])})),[e]}),[M]),S=(0,o.useCallback)((t=>{const e=[];let r=0;const n=v.current;if(!n)return;n.querySelectorAll(".dimension").forEach((function(t){const n=t.getAttribute("transform");if(n){const o=parseFloat(n.split("(")[1].split(")")[0]);e.push(o);const{width:i}=t.getBBox();0===r&&(r=i)}}));const o=[];for(let u=0;u<e.length;u++)o.push(e[u]+r/2);let i=[];const l=x(t);let s="";if(l&&0!==l[0].length)if([i]=l,i.length>1&&(i=[i[1]]),o.some((e=>Math.abs(e-t.offsetX)<10)));else{s=i[0].uuid}y(s)}),[v,x]),A=()=>{const t=b.current.margin();return(b.current.brushed().length?b.current.brushed():b.current.data()).map((e=>b.current.compute_real_centroids(e).map((e=>[e[0]+t.left,e[1]+t.top]))))},E=(t,e)=>{const r=t.offsetX;if(e[0][0]>r)return!1;if(e[e.length-1][0]<r)return!1;for(let n=0;n<e.length;n++)if(e[n][0]>r)return n;return!1},C=(t,e,r,n)=>{const o=r.offsetX,i=r.offsetY,[l,s]=t,[u,a]=e,c=u-l,h=a-s;return Math.abs(h*o-c*i-l*a+u*s)/Math.sqrt(Math.pow(c,2)+Math.pow(h,2))<=n};return(0,o.useEffect)((()=>{if(null!==v){var t,e,r,n,o;const w=f.length+a.length,M=15,x=9,A=p/w*.8,E=p/w*.4,C=a[a.length-1],k=i.map((t=>t[C])),N=Math.min(...k.filter((t=>!isNaN(t)))),T=Math.max(...k.filter((t=>!isNaN(t)))),q=(0,u.cJ)().domain([N,T]).interpolator((t=>{const e=Math.max(0,Math.min(1,t));return`rgb(\n            ${Math.max(0,Math.min(255,Math.round(34.61+e*(1172.33-e*(10793.56-e*(33300.12-e*(38394.49-14825.05*e)))))))},\n            ${Math.max(0,Math.min(255,Math.round(23.31+e*(557.33+e*(1225.33-e*(3574.96-e*(1073.77+707.56*e)))))))},\n            ${Math.max(0,Math.min(255,Math.round(27.2+e*(3211.1-e*(15327.97-e*(27814-e*(22569.18-6838.66*e)))))))}\n          )`})),B=v.current;var h;if(B)null===(h=B.querySelector("#wrapper svg"))||void 0===h||h.remove();B&&B.querySelectorAll("canvas").forEach((t=>t.remove()));const L=()=>{const t=Object.keys(i[0]),e=t.map((t=>i.map((e=>e[t])).filter((t=>null!==t)))).map((t=>t.every((t=>!isNaN(t)&&null!==t))?"number":"string"));return Object.fromEntries(t.map(((r,n)=>[t[n],{type:e[n]}])))};if(b.current=(0,s.Z)()(v.current).width(p).height(g).data(i).dimensions(L()).alpha(.8).alphaOnBrushed(.2).hideAxis(["uuid"]).lineWidth(1).color((t=>t&&C in t&&"null"!==t[C]?q(t[C]):"#f33")).createAxes().render().reorderable().brushMode("1D-axes"),!B)return;b.current.on("brushend",(()=>{b.current.unhighlight(),m()})),null===(t=B.querySelector("#wrapper svg"))||void 0===t||t.addEventListener("mousemove",(function(t){const{offsetX:e,offsetY:r}=t;S({offsetX:e,offsetY:r})})),null===(e=B.querySelector("#wrapper svg"))||void 0===e||e.addEventListener("mouseout",(()=>{y("")})),B.querySelectorAll(".parcoords .label").forEach((t=>{const e=t.innerHTML;w>l&&t.setAttribute("transform","rotate(-30)"),t.setAttribute("y","-20"),t.setAttribute("x","20");t.getBoundingClientRect().width>A&&(t.innerHTML=(0,c.$7)(e,M),e!==t.innerHTML&&d("axis-label-tooltip",e,t))})),B.querySelectorAll(".parcoords .tick text").forEach((t=>{const e=t.innerHTML;t.getBoundingClientRect().width>E&&(t.innerHTML=(0,c.$7)(e,x),e!==t.innerHTML&&d("tick-label-tooltip",e,t))}));const R=Array.from({length:10},((t,e)=>e/9)),H=b.current.svg.append("defs").append("linearGradient").attr("id","mygrad").attr("x2","0%").attr("y1","100%").attr("y2","0%");R.forEach((t=>{H.append("stop").attr("offset",100*t+"%").style("stop-color",q(N+t*(T-N)))}));const _=null===(r=v.current)||void 0===r||null===(n=r.querySelector("svg"))||void 0===n?void 0:n.getBoundingClientRect(),X=null===(o=v.current)||void 0===o?void 0:o.querySelector(".dimension:last-of-type");if(!X)return;const Z=null===X||void 0===X?void 0:X.getBoundingClientRect(),$=null===X||void 0===X?void 0:X.getAttribute("transform");if(!$)return;const P=parseFloat($.split("(")[1].split(")")[0]);if(_){b.current.svg.append("rect").attr("x",P+20).attr("y",0).attr("width",20).attr("height",Z.height-40).style("fill","url(#mygrad)")}}}),[i,p,g,f,a,e,l,S,v,m]),(0,h.tZ)("div",{ref:v,id:"wrapper",style:{width:t.width,height:t.height},className:"parcoords"})},p=t=>{const e=(0,o.useRef)(null),{theme:r}=(0,i.u)(),{layoutHeight:s,layoutWidth:u,setContainerDiv:c}=(0,a.Ih)(),[d,p]=(0,o.useState)(!0),g=(0,o.useRef)();return(0,o.useEffect)((()=>{c(e.current)}),[c]),(0,o.useEffect)((()=>{p(!0),g.current&&clearTimeout(g.current),g.current=setTimeout((()=>{p(!1)}),300)}),[s,u]),(0,h.tZ)("div",{ref:e,css:(0,n.iv)({overflow:"hidden",flex:"1",paddingTop:"20px",fontSize:0,".parcoords":{backgroundColor:"transparent"},".parcoords text.label":{fill:r.colors.textPrimary}},""),children:d?(0,h.tZ)(l.Qck,{}):(0,h.tZ)(f,{...t,width:u,height:s})})};var g=p}}]);