import{_ as B,n as F,m as b,p as E,a as G,h as u,b as s,r as o,o as r,f as p,w as t,e as a,t as f,c as h,F as g,d as C,q as y}from"./index.32d20561.js";var O="assets/dark.ca21ee15.png";const W={setup(){const e=F(!1);return{isLoading:e,load:()=>{e.value||(e.value=!0,setTimeout(()=>{e.value=!1},4e3))}}},data(){return{appName:"expansiontrunk",vehicleData:{ownerID:"",personalInfo:{firstname:"",lastname:"",phone:"",gender:"",birthdate:""},model:"",images:[],plate:"",hash:""},vehicleUpgradeData:{upgradesAvailableForThisVehicle:[],currentSize:0,maxUpgradeSize:0,selectedUpdgrades:[],deselectedUpdgrades:[],billPrice:0},onPayment:!1,onWantToGetVehicle:!1,colorCode:"blue",payColorCode:"blue",readyToPay:!1,showSwiper:!1,commissionPercentage:.2,appMetaData:[]}},methods:{getImage(e){fetch(`https://gta.now.sh/api/vehicles/${e}`).then(i=>i.json()).then(i=>{let d=[];Object.keys(i.images).forEach(c=>{d.push(i.images[c])}),this.vehicleData.images=d,this.showSwiper=!0}).catch(()=>{this.vehicleData.images=[],this.showSwiper=!1})},getCurrentPageMetaData(){this.$root.globalAppMetaData.forEach(e=>{e.name==this.appName&&(this.appMetaData=e)})},seprateSelectedUpgrades(e){let i=[],d=[];this.vehicleUpgradeData.upgradesAvailableForThisVehicle.forEach((n,_)=>{e.findIndex(m=>m==n.size)===-1?d.push({lable:n.lable,size:n.size,price:n.price,serverSideUpgraded:n.upgraded}):i.push({lable:n.lable,size:n.size,price:n.price,serverSideUpgraded:n.upgraded})}),this.vehicleUpgradeData.selectedUpdgrades=i,this.vehicleUpgradeData.deselectedUpdgrades=d,i.length!=0||d.length!=0?this.readyToPay=!0:this.readyToPay=!1},calBillPrice(){let e=this.vehicleUpgradeData.selectedUpdgrades,i=this.vehicleUpgradeData.deselectedUpdgrades,d=0;e.forEach(c=>{c.serverSideUpgraded===!1&&(d+=c.price)}),i.forEach(c=>{c.serverSideUpgraded===!0&&(d+=c.price*this.commissionPercentage)}),this.vehicleUpgradeData.billPrice=d},paymentAndUpgrade(){this.getCurrentPageMetaData(),this.onPayment=!0,this.$root.sendNUICB({type:"upgradeReq",content:{selected:this.vehicleUpgradeData.selectedUpdgrades,deselected:this.vehicleUpgradeData.deselectedUpdgrades,billPrice:this.vehicleData.billPrice,metaData:this.appMetaData,vehicleData:this.vehicleData}},"upgradeReq",e=>{this.onPayment=!1,e==!0&&(this.payColorCode="green",setTimeout(()=>{this.$root.toggle(),b.sheet.close(".demo-sheet-swipe-to-step",!0),this.payColorCode="blue",b.views.main.router.back()},2500))},e=>{this.onPayment=!1,this.payColorCode="red",this.$root.showNotificationCloseOnClick({title:"network error",subtitle:e}),setTimeout(()=>{this.payColorCode="blue",b.sheet.close(".demo-sheet-swipe-to-step",!0)},2500)})},testValue(){let e=b.smartSelect.get(".smart-select").getValue();this.seprateSelectedUpgrades(e),this.calBillPrice()},openIndicator(){const e=this;b.preloader.show()},getDataFromServer(){this.getCurrentPageMetaData(),this.onWantToGetVehicle=!0,this.$root.sendNUICB({type:"openApp",content:{appName:this.appName,metaData:this.appMetaData}},"openApp",e=>{this.onWantToGetVehicle=!1,this.vehicleData={personalInfo:e.vehicleData.personalInfo,ownerID:e.vehicleData.ownerID,model:e.vehicleData.model,plate:e.vehicleData.plate,hash:e.vehicleData.hash},this.vehicleUpgradeData={upgradesAvailableForThisVehicle:e.vehicleUpgradeData.upgradesAvailableForThisVehicle,currentSize:e.vehicleUpgradeData.currentSize,maxUpgradeSize:e.vehicleUpgradeData.maxUpgradeSize}},e=>{this.onWantToGetVehicle=!1,this.$root.showNotificationCloseOnClick({title:"Error",subtitle:e}),this.colorCode="red",setTimeout(()=>{this.colorCode="blue"},2500)})}}},T=e=>(E("data-v-62e7b0f0"),e=e(),G(),e),j=u("Owner infromation"),L=u(" Get nearby vehicle "),R=u("Vehicle Model"),q=["src"],x={label:"Trunk size"},Y=["value","selected"],H=u(" Show Plate "),J=u(" Check bill "),K={class:"sheet-modal-swipe-step"},Q={class:"display-flex padding justify-content-space-between align-items-center"},X=T(()=>s("div",{style:{"font-size":"18px"}},[s("b",null,"Total:")],-1)),Z={style:{"font-size":"22px"}},ee={class:"padding-horizontal padding-bottom"},te=u(" Make Payment "),ae=T(()=>s("div",{class:"margin-top text-align-center"}," Swipe up for more details ",-1)),le=u("Your order:"),se={class:"text-color-green"},oe={class:"text-color-red"},ie={class:"plate"},re=T(()=>s("img",{src:O},null,-1));function de(e,i,d,c,n,_){const z=o("f7-navbar"),m=o("f7-block-title"),v=o("f7-list-input"),D=o("f7-icon"),P=o("f7-list"),w=o("f7-button"),U=o("f7-block"),k=o("f7-col"),N=o("f7-swiper-slide"),$=o("f7-swiper"),S=o("f7-list-item"),V=o("f7-row"),I=o("f7-sheet"),M=o("f7-page-content"),A=o("f7-page");return r(),p(A,null,{default:t(()=>[a(z,{title:"Notifications","back-link":"Back"}),a(V,null,{default:t(()=>[a(k,{width:"40"},{default:t(()=>[a(U,{strong:"",inset:""},{default:t(()=>[a(m,null,{default:t(()=>[j]),_:1}),a(P,{"inline-labels":"","no-hairlines-md":""},{default:t(()=>[a(v,{label:"Name",type:"text",placeholder:"Your name",disabled:"",value:`${e.vehicleData.personalInfo.firstname} ${e.vehicleData.personalInfo.lastname}`},null,8,["value"]),a(v,{label:"Owner ID",type:"tel",placeholder:"Owner ID number",value:e.vehicleData.ownerID},{default:t(()=>[a(D,{icon:"demo-list-icon"})]),_:1},8,["value"]),a(v,{label:"Phone",type:"tel",placeholder:"Owner phone number",value:e.vehicleData.personalInfo.phone},{default:t(()=>[a(D,{icon:"demo-list-icon"})]),_:1},8,["value"]),a(v,{label:"Gender",type:"text",value:e.vehicleData.personalInfo.gender?"Female":"Male",disabled:""},{default:t(()=>[a(D,{icon:"demo-list-icon"})]),_:1},8,["value"]),a(v,{label:"Birthdate",type:"text",value:e.vehicleData.personalInfo.birthdate,disabled:""},{default:t(()=>[a(D,{icon:"demo-list-icon"})]),_:1},8,["value"])]),_:1}),a(w,{fill:"",preloader:"",loading:e.onWantToGetVehicle,color:e.colorCode,onClick:_.getDataFromServer},{default:t(()=>[L]),_:1},8,["loading","color","onClick"])]),_:1})]),_:1}),a(k,{width:"60"},{default:t(()=>[a(m,null,{default:t(()=>[R]),_:1}),a(U,{strong:"",inset:""},{default:t(()=>[s("h2",null,"Model: "+f(e.vehicleData.model),1),e.showSwiper==!0?(r(),p($,{key:0,pagination:"",navigation:"",scrollbar:""},{default:t(()=>[(r(!0),h(g,null,C(e.vehicleData.images,l=>(r(),p(N,{key:l,style:{"justify-content":"center",display:"flex"}},{default:t(()=>[s("img",{src:l,alt:"",srcset:""},null,8,q)]),_:2},1024))),128))]),_:1})):y("",!0)]),_:1}),a(P,{inset:""},{default:t(()=>[a(S,{title:"Upgrades","smart-select":"","smart-select-params":{openIn:"popup",searchbar:!0,searchbarPlaceholder:"Search updgrades"}},{default:t(()=>[s("select",{name:"Weight",multiple:"",onChange:i[0]||(i[0]=(...l)=>_.testValue&&_.testValue(...l))},[s("optgroup",x,[(r(!0),h(g,null,C(e.vehicleUpgradeData.upgradesAvailableForThisVehicle,l=>(r(),h("option",{value:l.size,key:l.lable,selected:l.upgraded},f(l.lable),9,Y))),128))])],32)]),_:1})]),_:1}),a(U,null,{default:t(()=>[a(V,null,{default:t(()=>[a(k,{width:"50"},{default:t(()=>[a(w,{fill:"","sheet-open":".demo-sheet-swipe-to-close",disabled:e.vehicleData.plate===""},{default:t(()=>[H]),_:1},8,["disabled"])]),_:1}),a(k,{width:"50"},{default:t(()=>[a(w,{fill:"","sheet-open":".demo-sheet-swipe-to-step",disabled:e.readyToPay!==!0},{default:t(()=>[J]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e.readyToPay===!0?(r(),p(I,{key:0,class:"demo-sheet-swipe-to-step",style:{height:"auto","--f7-sheet-bg-color":"#fff"},"swipe-to-close":"","swipe-to-step":"",backdrop:"",closeByBackdropClick:""},{default:t(()=>[s("div",K,[s("div",Q,[X,s("div",Z,[s("b",null,"$"+f(e.vehicleUpgradeData.billPrice),1)])]),s("div",ee,[a(w,{large:"",fill:"",preloader:"",onClick:_.paymentAndUpgrade,color:e.payColorCode,loading:e.onPayment,disabled:e.vehicleUpgradeData.billPrice==0},{default:t(()=>[te]),_:1},8,["onClick","color","loading","disabled"]),ae])]),a(m,{medium:"",class:"margin-top"},{default:t(()=>[le]),_:1}),a(P,{"no-hairlines":""},{default:t(()=>[(r(!0),h(g,null,C(e.vehicleUpgradeData.selectedUpdgrades,l=>(r(),h(g,{key:l.lable},[l.serverSideUpgraded!==!0?(r(),p(S,{key:0,title:`+${l.lable}`},{after:t(()=>[s("b",se,"$"+f(l.price),1)]),_:2},1032,["title"])):y("",!0)],64))),128)),(r(!0),h(g,null,C(e.vehicleUpgradeData.deselectedUpdgrades,l=>(r(),h(g,{key:l.lable},[l.serverSideUpgraded===!0?(r(),p(S,{key:0,title:`-${l.lable}`},{after:t(()=>[s("b",oe," $"+f(l.price*e.commissionPercentage),1)]),_:2},1032,["title"])):y("",!0)],64))),128))]),_:1})]),_:1})):y("",!0),e.vehicleData.plate!==""?(r(),p(I,{key:1,class:"demo-sheet-swipe-to-close",style:{height:"auto","--f7-sheet-bg-color":"#fff"},"swipe-to-close":"",backdrop:""},{default:t(()=>[a(M,null,{default:t(()=>[a(U,null,{default:t(()=>[s("div",ie,[re,s("span",null,f(this.vehicleData.plate),1)])]),_:1})]),_:1})]),_:1})):y("",!0)]),_:1})}var ce=B(W,[["render",de],["__scopeId","data-v-62e7b0f0"]]);export{ce as default};
