import{_ as p,b as t,h as n,r,o as u,f as g,w as s,e as c,t as e,c as _,F as d,d as b}from"./index.32d20561.js";const v={props:{f7route:Object,f7router:Object}},x=t("b",null,"Url:",-1),y=t("b",null,"Path:",-1),B=t("b",null,"Hash:",-1),R=t("b",null,"Params:",-1),C=t("b",null,"Query:",-1),N=t("b",null,"Route:",-1),P=n("Go back via Router API");function V(j,i,l,w,D,F){const h=r("f7-navbar"),f=r("f7-block"),m=r("f7-link"),k=r("f7-page");return u(),g(k,null,{default:s(()=>[c(h,{title:"Dynamic Route","back-link":"Back"}),c(f,{strong:""},{default:s(()=>[t("ul",null,[t("li",null,[x,n(" "+e(l.f7route.url),1)]),t("li",null,[y,n(" "+e(l.f7route.path),1)]),t("li",null,[B,n(" "+e(l.f7route.hash),1)]),t("li",null,[R,t("ul",null,[(u(!0),_(d,null,b(l.f7route.params,(a,o)=>(u(),_("li",{key:o},[t("b",null,e(o)+":",1),n(" "+e(a),1)]))),128))])]),t("li",null,[C,t("ul",null,[(u(!0),_(d,null,b(l.f7route.query,(a,o)=>(u(),_("li",{key:o},[t("b",null,e(o)+":",1),n(" "+e(a),1)]))),128))])]),t("li",null,[N,n(" "+e(l.f7route.route.path),1)])])]),_:1}),c(f,{strong:""},{default:s(()=>[c(m,{onClick:i[0]||(i[0]=a=>l.f7router.back())},{default:s(()=>[P]),_:1})]),_:1})]),_:1})}var q=p(v,[["render",V]]);export{q as default};
