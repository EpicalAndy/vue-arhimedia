import{n as w}from"./news-3b5f2ceb.js";import{p as y}from"./posts-5a8c60b8.js";import{d as C,r as o,o as p,c as h,w as t,a as e,b as a,t as i,e as g,f as b,F as I,p as A,g as B,_ as S,h as N,u as V}from"./index-d3098a3e.js";const j=s=>(A("data-v-5713ca45"),s=s(),B(),s),F={style:{height:"20%"}},L=j(()=>a("br",null,null,-1)),D={style:{height:"80%"},class:"card-text"},E=C({__name:"AppContentCarouselComponent",props:["items","title"],setup(s){return(m,v)=>{const _=o("v-card-text"),r=o("v-card-title"),n=o("v-sheet"),c=o("v-carousel-item"),u=o("v-btn"),d=o("v-carousel"),x=o("v-card-item"),k=o("v-card");return p(),h(k,{height:"400"},{default:t(()=>[e(r,null,{default:t(()=>[e(_,null,{default:t(()=>[a("h2",null,i(s.title),1)]),_:1})]),_:1}),e(x,null,{default:t(()=>[e(d,{height:"300"},{prev:t(({props:l})=>[e(u,{color:"blue",icon:"mdi-chevron-left",onClick:l.onClick},null,8,["onClick"])]),next:t(({props:l})=>[e(u,{color:"blue",icon:"mdi-chevron-right",onClick:l.onClick},null,8,["onClick"])]),default:t(()=>[(p(!0),g(I,null,b(s.items,l=>(p(),h(c,null,{default:t(()=>[e(n,{class:"w-50 mx-auto h-auto"},{default:t(()=>[a("div",F,[a("h2",null,i(l.title)+" "+i(),1)]),L,a("div",D,i(l.content),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})}}});const f=S(E,[["__scopeId","data-v-5713ca45"]]),z=C({__name:"AppMainVue",setup(s){const m=N(()=>v(w,5));function v(_,r){const n=_.sort((u,d)=>d.date-u.date),c=r||10;return n.length>c?n.slice(0,c):n}return(_,r)=>{const n=o("v-col"),c=o("v-row");return p(),g("div",null,[e(c,{class:"justify-center mt-16"},{default:t(()=>[e(n,{cols:"8"},{default:t(()=>[e(f,{title:"Статьи",items:V(y)},null,8,["items"])]),_:1})]),_:1}),e(c,{class:"justify-center mt-16"},{default:t(()=>[e(n,{cols:"8"},{default:t(()=>[e(f,{title:"Последние новости",items:m.value},null,8,["items"])]),_:1})]),_:1})])}}});export{z as default};
