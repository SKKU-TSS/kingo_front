(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{460:function(t,e){},468:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(60),i=n.n(a),o=n(38),s=n(94),j=n(35),u=n(36),l=n(8),b=n(20),d=n(184),h=n.p+"static/media/activeDashboard.1ff20a37.svg",x=n.p+"static/media/dashboard.34c573ce.svg",f=n.p+"static/media/transactions.011c70e3.svg",O=n.p+"static/media/activeTransactions.4b7d4077.svg",p="#8dc73f",g="#003e74",v="#7db6e8",w=n(1);var m=function(){return Object(w.jsx)(b.d,{children:Object(w.jsx)(b.g,{fontSize:"xl",fontWeight:"900",color:g,children:"KingoKoin"})})},y=function(t){var e=t.indexState,n=t.btnIndex,c=t.nav,r=t.icon,a=t.children,i=Object(l.a)(e,2),o=i[0],j=i[1],u=r||[void 0,void 0],h=Object(l.a)(u,2),x=h[0],f=h[1],O={width:"130px",backgroundColor:o===n?g:"#ffffff",borderRadius:"5px"};return Object(w.jsx)(b.e,{onClick:function(){return j(n)},as:s.b,to:c,children:Object(w.jsxs)(b.d,{p:3,spacing:3,style:O,children:[r&&Object(w.jsx)(d.b,{src:o===n?f:x}),Object(w.jsx)(b.g,{fontSize:"sm",fontWeight:"bold",color:o===n?"#ffffff":"#A3AED0",children:a})]})})},k=function(){var t=function(t){var e=Object(l.a)(t,2),n=e[0],c=e[1],r=window.location.pathname.split("/").pop();return"/dashboard"===r?0!==n&&c(0):"my-transaction"===r?1!==n&&c(1):"check-transactions"===r&&2!==n&&c(2),[n,c]}(Object(c.useState)(0)),e=Object(l.a)(t,2),n=e[0],r=e[1];return Object(w.jsxs)(b.h,{spacing:8,p:9,bg:"#ffffff",minW:"200px",children:[Object(w.jsx)(m,{}),Object(w.jsxs)(b.h,{h:"full",justify:"space-between",spacing:5,children:[Object(w.jsxs)(b.h,{children:[Object(w.jsx)(y,{indexState:[n,r],btnIndex:0,nav:"/dashboard",icon:[x,h],children:"\ub300\uc2dc\ubcf4\ub4dc"}),Object(w.jsx)(y,{indexState:[n,r],btnIndex:1,nav:"/my-point",icon:[f,O],children:"Point \ud604\ud669"})]}),Object(w.jsx)(y,{indexState:[n,r],btnIndex:2,nav:"/check-transactions",children:"Transaction"})]})]})},S=n(193),C=n(27),z=n(28),E=n.n(z),_="http://localhost:5000/";var D=function(t,e){E.a.get(_+"api/userinfo",{params:{id:t}}).then((function(t){e(t)}))};var R=function(t){var e=t.children,n=Object(S.a)("(max-width:1195px)"),c=Object(l.a)(n,1)[0],r={justifyContent:"space-between",background:p,width:c?"100%":"96%",height:"204px",borderRadius:"15px"};return Object(w.jsxs)(b.h,{p:5,m:3,style:r,children:[Object(w.jsx)(T,{}),Object(w.jsx)(A,{sumPoint:e})]})},T=function(){return Object(w.jsxs)(b.d,{w:"full",justify:"space-between",children:[Object(w.jsx)(b.g,{color:"white",fontWeight:"700",fontSize:"3xl",children:"\ucd1d \ubcf4\uc720 \ud3ec\uc778\ud2b8"}),Object(w.jsx)(b.a,{})]})},A=function(t){var e=t.sumPoint;return Object(w.jsxs)(b.d,{w:"full",justify:"space-between",children:[Object(w.jsx)(b.a,{}),Object(w.jsxs)(b.g,{color:"white",fontWeight:"700",fontSize:"5xl",children:[e," point"]})]})},P=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],a=Object(C.b)().account;Object(c.useEffect)((function(){var t=!0;return D(a,(function(e){t&&r(function(t,e){return e.concat(t.data[0]._pointA,t.data[0]._pointB,t.data[0]._pointC,t.data[0]._pointD)}(e,n))})),function(){return t=!1}}),[]);var i=function(){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t}();return Object(w.jsx)(R,{children:i})},I=function(){return Object(w.jsxs)(b.h,{spacing:0,p:2,children:[Object(w.jsx)(b.g,{fontSize:"2xl",children:"Balance"}),Object(w.jsx)(b.a,{backgroundColor:"#ff6c0f",borderRadius:"4px",width:"100%",height:"4px"})]})},L=function(t){var e=t.title,n=t.point,r=Object(c.useState)(!1),a=Object(l.a)(r,2),i=a[0],o=a[1],s={width:"100%",justifyContent:"space-between",borderRadius:"10px",backgroundColor:i&&"#ffAc4f",height:"50px"};return Object(w.jsxs)(b.d,{style:s,p:2,onPointerEnter:function(){return o(!0)},onPointerLeave:function(){return o(!1)},children:[Object(w.jsx)(b.g,{fontSize:"lg",children:e}),Object(w.jsx)(b.g,{fontSize:"lg",children:"".concat(n||0,"\ud3ec\uc778\ud2b8")})]})},W=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],a=Object(C.b)().account;Object(c.useEffect)((function(){var t=!0;return D(a,(function(e){t&&r(n.concat(e.data[0]._pointA,e.data[0]._pointB,e.data[0]._pointC,e.data[0]._pointD))})),function(){return t=!1}}),[]);var i=Object(S.a)("(max-width:1195px)"),o={borderRadius:"15px",backgroundColor:"white",height:"355px",width:Object(l.a)(i,1)[0]?"100%":q};return Object(w.jsxs)(b.h,{style:o,p:8,align:"flex-start",m:3,children:[Object(w.jsx)(I,{}),Object(w.jsxs)(b.h,{w:"full",children:[Object(w.jsx)(L,{title:"\uc628\ub77c\uc778 \uba85\ub95c\ub2f9",point:n[0]}),Object(w.jsx)(L,{title:"\ud0b9\uace0\uc778\uacfc\uc758 \ub9cc\ub0a8",point:n[1]}),Object(w.jsx)(L,{title:"\ud574\uc624\ub984\uc81c",point:n[2]}),Object(w.jsx)(L,{title:"\uba58\ud1a0\ub9c1",point:n[3]})]})]})};var H=function(t){var e=t.title,n=t.point,r=Object(c.useState)(!1),a=Object(l.a)(r,2),i=a[0],o=a[1];return Object(w.jsxs)(b.d,{w:"full",justify:"space-between",height:"50px",borderRadius:"10px",p:2,bgColor:i&&v,onPointerEnter:function(){return o(!0)},onPointerLeave:function(){return o(!1)},children:[Object(w.jsx)(b.g,{fontSize:"lg",children:e}),Object(w.jsx)(b.g,{fontSize:"lg",children:n})]})},K=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],a=Object(C.b)().account;Object(c.useEffect)((function(){var t=!0;return D(a,(function(e){t&&r([].concat(e.data[0]._pointA,e.data[0]._pointB,e.data[0]._pointC,e.data[0]._pointD))})),function(){return t=!1}}),[]);var i=Object(S.a)("(max-width:1195px)"),o={borderRadius:"15px",backgroundColor:"white",height:"355px",width:Object(l.a)(i,1)[0]?"100%":q};return Object(w.jsxs)(b.h,{style:o,p:8,align:"flex-start",m:3,children:[Object(w.jsxs)(b.h,{spacing:0,p:2,children:[Object(w.jsx)(b.g,{fontSize:"24px",children:"Pie Chart"}),Object(w.jsx)(b.a,{backgroundColor:g,borderRadius:"4px",width:"100%",height:"4px"})]}),Object(w.jsxs)(b.h,{w:"full",children:[Object(w.jsx)(H,{title:"Service A",point:n[0]}),Object(w.jsx)(H,{title:"Service B",point:n[1]}),Object(w.jsx)(H,{title:"Service C",point:n[2]}),Object(w.jsx)(H,{title:"Service D",point:n[3]})]})]})},M=n(230),B=n(194);var F=function(t){var e=t.account,n=e&&(null===e||void 0===e?void 0:e.substring(0,10))+"..."+(null===e||void 0===e?void 0:e.substring(32,40));return Object(w.jsxs)(b.h,{children:[Object(w.jsx)(b.g,{fontSize:"lg",children:"\ub0b4 \uc9c0\uac11 \uc8fc\uc18c : "}),Object(w.jsx)(M.a,{label:e,children:Object(w.jsx)(b.g,{children:n})})]})},U=function(t){var e=t.account,n="https://baobab.scope.klaytn.com/account/".concat(e,"?tabId=txList");return Object(w.jsx)(B.a,{as:b.e,isExternal:!0,href:n,children:"View on klaytn scope"})},G=function(){var t=Object(S.a)("(max-width:1195px)"),e=Object(l.a)(t,1)[0],n=Object(C.b)().account,c=null===n||void 0===n?void 0:n.substring(2,6),r="#"+(null===n||void 0===n?void 0:n.substring(2,8));console.log(r);var a={borderRadius:"15px",width:e?"100%":q,height:"355px",justifyContent:"center",spacing:"5",backgroundColor:"white"},i={width:"110px",height:"110px",align:"center",justifyContent:"center",borderRadius:"100px",fontFamily:"'Pacifico', cursive",fontSize:"3xl",backgroundColor:r};return Object(w.jsxs)(b.h,{p:10,m:3,spacing:5,style:a,children:[Object(w.jsx)(b.c,{align:"center",fontSize:"3xl",style:i,children:c}),Object(w.jsx)(F,{account:n}),n&&Object(w.jsx)(U,{account:n})]})},Y=function(t){var e=t.name,n=t.value,r=t.date,a=Object(c.useState)(!1),i=Object(l.a)(a,2),o=i[0],s=i[1];return Object(w.jsxs)(b.h,{align:"left",width:"100%",spacing:0,p:2,paddingTop:1,paddingBottom:1,bgColor:o&&"#d2e9b4",borderRadius:"10px",onPointerEnter:function(){return s(!0)},onPointerLeave:function(){return s(!1)},children:[Object(w.jsxs)(b.c,{children:[Object(w.jsx)(b.g,{fontSize:"15px",lineHeight:"25px",fontFamily:"noto-sans kr",m:0,children:e}),Object(w.jsx)(b.f,{}),Object(w.jsx)(b.g,{fontSize:"15px",lineHeight:"25px",fontWeight:"500",maxLine:1,children:"".concat(n,"\ud3ec\uc778\ud2b8")})]}),Object(w.jsx)(b.g,{fontSize:"12px",lineHeight:"25px",color:"#2B2B2B",opacity:.4,children:r})]})},N=function(){Object(C.b)().account;var t=Object(c.useState)([{name:"\uc628\ub77c\uc778 \uba85\ub95c\ub2f9 \uc601\uc0c1 \uc2dc\uccad",value:1050,date:"2022. 07. 13"},{name:"\uc628\ub77c\uc778 \uba85\ub95c\ub2f9 \uac8c\uc2dc\uae00 \uc791\uc131",value:230,date:"2022. 07. 13"},{name:"\uc2e4\ub9ac\ucf58\ubca8\ub9ac \uc878\uc5c5\uc0dd \ud2b9\uac15 \ucc38\uc5ec",value:5600,date:"2022. 07. 13"},{name:"\ud1a0\uc775 \uac15\uc758 \uc774\uc6a9\uad8c",value:-100,date:"2022. 07. 13"}]),e=Object(l.a)(t,2),n=e[0],r=(e[1],Object(S.a)("(max-width:1195px)")),a={borderRadius:"15px",backgroundColor:"white",height:"355px",width:Object(l.a)(r,1)[0]?"100%":q};return Object(w.jsxs)(b.h,{style:a,p:8,align:"flex-start",m:3,spacing:0,children:[Object(w.jsxs)(b.h,{p:2,children:[Object(w.jsx)(b.g,{fontSize:"24px",children:"Recent Transactions"}),Object(w.jsx)(b.a,{backgroundColor:p,borderRadius:"4px",width:"100%",height:"4px"})]}),n.map((function(t){return Object(w.jsx)(Y,{name:t.name,value:t.value,date:t.date})}))]})};var J=function(t){var e=t.children,n=Object(S.a)("(max-width:1070px)"),c={flexGrow:"1",justify:"space-between",p:"5",minW:"350px",w:Object(l.a)(n,1)[0]?"full":"60%"};return Object(w.jsx)(b.c,{wrap:"wrap",style:{width:"full",height:"full",justify:"space-evenly",backgroundColor:"#E5E5E5"},children:Object(w.jsx)(b.c,{wrap:"wrap",style:c,children:e})})},V=function(){return Object(w.jsxs)(J,{children:[Object(w.jsx)(P,{}),Object(w.jsx)(N,{}),Object(w.jsx)(G,{}),Object(w.jsx)(K,{}),Object(w.jsx)(W,{})]})},q="47%",Q=n(62),X=n(5),Z=n.n(X);var $=function(t,e){for(var n,c,r,a,i,o,s=[],j=0;j<e.data.length;j++){var u,l;if((null===(u=e.data[j])||void 0===u?void 0:u._from)===t||(null===(l=e.data[j])||void 0===l?void 0:l._to)===t){var b=e.data[j];s.push((n=b._from,c=b._to,r=b._type,a=b._point,i=b._date,o=b._hash,{from:n,to:c,type:r,value:a,date:i,hash:o}))}}return s};var tt,et,nt,ct,rt=function(t,e){return E.a.get("".concat(_,"api/transaction?who=to&address=").concat(t)).then((function(n){e($(t,n))}))},at=n.p+"static/media/kakaoTalk.846a58ff.png",it=u.a.td(tt||(tt=Object(o.a)(["\n  text-align: center;\n  padding: 5px;\n"]))),ot=u.a.img(et||(et=Object(o.a)(["\n  src: ",";\n  width: 20px;\n  margin-left: 10px;\n"])),(function(t){return t.src})),st=function(t){var e=t.title,n=t.content,c=t.focus;return Object(w.jsx)(it,{children:Object(w.jsx)(b.c,{justifyContent:"center",children:Object(w.jsxs)(b.h,{align:"start",width:"60%",justifyContent:"start",children:[Object(w.jsx)(b.g,{fontSize:"sm",fontFamily:"Poppins",color:c?"white":"#cecece",children:e}),Object(w.jsx)(b.g,{fontSize:"lg",children:n})]})})})},jt=function(t){var e=t.icon,n=t.text;return Object(w.jsx)(it,{children:Object(w.jsxs)(b.d,{justifyContent:"center",children:[Object(w.jsx)(ot,{src:e}),Object(w.jsx)(b.g,{children:n})]})})},ut=function(t){var e=t.link,n=(t.text,t.focus);return Object(w.jsx)(it,{children:Object(w.jsx)(B.a,{colorScheme:"green",size:"md",variant:n?"solid":"outline",as:e,isExternal:!0,children:"Open Hash"})})},lt=function(t){var e=t.transData,n=t.type,r=100/(n?5:6),a=Object(c.useState)(!1),i=Object(l.a)(a,2),o=i[0],s=i[1];return Object(w.jsxs)("tr",{onPointerEnter:function(){return s(!0)},onPointerLeave:function(){return s(!1)},bgColor:o&&v,children:[Object(w.jsx)(jt,{width:r+"%",icon:at,text:"KakaoPay"}),Object(w.jsx)(st,{width:r+"%",title:"Date",content:e.date,focus:o}),"from"!==n&&Object(w.jsx)(st,{width:r+"%",title:"To",content:e.to,focus:o}),"to"!==n&&Object(w.jsx)(st,{width:r+"%",title:"From",content:e.from,focus:o}),Object(w.jsx)(st,{width:r+"%",title:"Amount",content:e.value,focus:o}),Object(w.jsx)(ut,{width:r+"%",link:b.e,text:e.hash,focus:o})]})},bt=u.a.table(nt||(nt=Object(o.a)(["\n  width: 100%;\n  table-layout : fixed;\n"]))),dt=u.a.th(ct||(ct=Object(o.a)(["\n  font-weight: 800;\n  color: ",";\n  text-align: center;\n  border-bottom: 2px solid ",";\n"])),g,g),ht=function(t){for(var e=t.type,n=t.transData,c=[],r=0;r<n.length;r++)c.push(Object(w.jsx)(lt,{transData:n[r],type:e},r));return Object(w.jsx)("tbody",{children:c})},xt=function(t){var e=t.type;return Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)(dt,{children:"\ud50c\ub7ab\ud3fc"}),Object(w.jsx)(dt,{children:"\uc2dc\uac04"}),"from"!==e&&Object(w.jsx)(dt,{children:"TO"}),"to"!==e&&Object(w.jsx)(dt,{children:"FROM"}),Object(w.jsx)(dt,{children:"\uae08\uc561"}),Object(w.jsx)(dt,{children:"HASH"})]})})},ft=function(t){var e=t.type,n=t.transData;return Object(w.jsxs)(bt,{children:[Object(w.jsx)(xt,{type:e}),Object(w.jsx)(ht,{type:e,transData:n})]})};function Ot(t,e,n){var c=[];e(t);for(var r=0;r<t.length;r++)E.a.get("http://localhost:5000/api/result/".concat(t[r].hash)).then((function(t){return c.push(t.data)}));n(c)}function pt(){return(pt=Object(Q.a)(Z.a.mark((function t(e,n,c){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,rt(e,(function(t){Ot(t,n,c)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function gt(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=(e[0],e[1]),r=Object(c.useState)([]),a=Object(l.a)(r,2),i=a[0],o=a[1],s=Object(C.b)().account;return Object(c.useEffect)((function(){!function(t,e,n){pt.apply(this,arguments)}(s,o,n)}),[]),Object(w.jsx)(ft,{transData:i})}var vt=function(t,e){return E.a.get("".concat(_,"api/transaction?who=from&address=").concat(t)).then((function(n){e($(t,n))}))};function wt(t,e,n){var c=[];e(t);for(var r=0;r<t.length;r++)E.a.get("http://localhost:5000/api/result/".concat(t[r].hash)).then((function(t){return c.push(t.data)}));n(c)}function mt(){return(mt=Object(Q.a)(Z.a.mark((function t(e,n,c){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,vt(e,(function(t){wt(t,n,c)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var yt=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=(e[0],e[1]),r=Object(c.useState)([]),a=Object(l.a)(r,2),i=a[0],o=a[1],s=Object(C.b)().account;return Object(c.useEffect)((function(){!function(t,e,n){mt.apply(this,arguments)}(s,o,n),o([{from:"2020",to:"\ud64d\uae38\ub3d9",type:"",value:"1,842",date:"2021. 07. 12",hash:"hashid"}])}),[]),Object(w.jsx)(ft,{type:"to",transData:i})};var kt=function(t,e){return E.a.get("".concat(_,"api/transaction?who=to&address=").concat(t)).then((function(n){e($(t,n))}))};function St(t,e,n){var c=[];e(t);for(var r=0;r<t.length;r++)E.a.get("http://localhost:5000/api/result/".concat(t[r].hash)).then((function(t){return c.push(t.data)}));n(c)}function Ct(){return(Ct=Object(Q.a)(Z.a.mark((function t(e,n,c){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,kt(e,(function(t){St(t,n,c)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function zt(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=(e[0],e[1]),r=Object(c.useState)([]),a=Object(l.a)(r,2),i=a[0],o=a[1],s=Object(C.b)().account;return Object(c.useEffect)((function(){!function(t,e,n){Ct.apply(this,arguments)}(s,o,n)}),[]),Object(w.jsx)(ft,{type:"from",transData:i})}var Et=n(479),_t=n(480),Dt=n(249),Rt=n(250),Tt=n(125),At=n(258);var Pt=function(t,e){E.a.get(_+"api/graph",{params:{id:t}}).then((function(t){e(t)}))};function It(t){return n(129)(t).format("YYYY\ub144 MM\uc6d4 DD\uc77c")}function Lt(){It(new Date);var t=Object(c.useState)([0,1,5,4,0,0]),e=Object(l.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(0),i=Object(l.a)(a,2),o=(i[0],i[1]),s=function(){var t,e=(new Date).getDate(),n=[];for(t=0;t<6;t++){var c=It(new Date((new Date).setDate(e-6+t)));n.push(c)}return n}(),j=Object(C.b)().account;Object(c.useEffect)((function(){Pt(j,(function(t){console.log(t.data);var e=t.data[0];null!==e&&void 0!==e&&(r([e.Day_1,e.Day_2,e.Day_3,e.Day_4,e.Day_5,e.Day_6]),o(e.Today))}))}),[]);var u=function(t,e){var n=[],c=0;for(c=0;c<6;c++)n.push({date:t[c],point:e[c]});return n}(s,n);return Object(w.jsx)(Et.a,{width:"95%",height:210,debounce:1,children:Object(w.jsxs)(_t.a,{data:u,margin:{top:5,right:30,left:15,bottom:2},children:[Object(w.jsx)(Dt.a,{dataKey:"date"}),Object(w.jsx)(Rt.a,{}),Object(w.jsx)(Tt.a,{itemStyle:{fontSize:"5px"},contentStyle:{fontSize:"0px"},wrapperStyle:{padding:0,border:"none"}}),Object(w.jsx)(At.a,{dot:!0,type:"line",dataKey:"point",stroke:"#4318ff"})]})})}var Wt=function(t){var e=t.title,n=t.num,c=t.index,r=t.set;return Object(w.jsx)(B.a,{onClick:function(){return r(n)},size:"xs",backgroundColor:c===n?g:"white",color:c===n?"white":"black",children:e})};var Ht=function(){var t=Object(c.useState)(0),e=Object(l.a)(t,2),n=e[0],r=e[1];return Object(w.jsxs)(b.c,{m:10,flexDirection:"column",w:"full",children:[Object(w.jsx)(b.g,{fontSize:"3xl",fontWeight:"700",children:"My Point \ud604\ud669"}),Object(w.jsx)(b.h,{w:"full",backgroundColor:"white",borderRadius:"5px",p:5,marginBottom:5,marginTop:5,children:Object(w.jsx)(Lt,{})}),Object(w.jsxs)(b.d,{children:[Object(w.jsx)(Wt,{title:"ALL",set:r,index:n,num:0}),Object(w.jsx)(Wt,{title:"\uc0ac\uc6a9\ub0b4\uc5ed",set:r,index:n,num:1}),Object(w.jsx)(Wt,{title:"\ubc1b\uc740\ub0b4\uc5ed",set:r,index:n,num:2})]}),Object(w.jsxs)(b.h,{w:"full",backgroundColor:"white",borderRadius:20,p:5,marginTop:5,children:[0===n&&Object(w.jsx)(gt,{}),1===n&&Object(w.jsx)(yt,{}),2===n&&Object(w.jsx)(zt,{})]})]})};var Kt=function(t,e){E.a.get(_+"api/getHash?address="+t).then((function(t){var n,c=t.data,r=c[0],a=c[1],i=Array.from({length:null===r||void 0===r?void 0:r.length},(function(t,e){return e})),o=[];for(n=0;n<r.length;n++)o.push({hash:r[n],receipt:a[n],index:i[n]});e(o)}))};var Mt,Bt,Ft,Ut,Gt,Yt=function(t,e){E.a.get(_+"api/result/"+t).then((function(t){e(t)}))},Nt=u.a.table(Mt||(Mt=Object(o.a)(["\n  width: 100%;\n"]))),Jt=u.a.td(Bt||(Bt=Object(o.a)(["\n  text-align: center;\n  padding: 5px;\n"]))),Vt=u.a.th(Ft||(Ft=Object(o.a)(["\n  font-weight: 800;\n  color: ",";\n  text-align: center;\n  border-bottom: 2px solid ",";\n"])),g,g);u.a.img(Ut||(Ut=Object(o.a)(["\n  src: ",';\n  width: 20px;\n  alt: "kakao";\n'])),(function(t){return t.src})),u.a.td(Gt||(Gt=Object(o.a)(["\n  color: #aeb4c4;\n  text-align: center;\n"])));function qt(){return(qt=Object(Q.a)(Z.a.mark((function t(e,n){var c,r;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=[],r=0;case 2:if(!(r<e.length)){t.next=8;break}return t.next=5,Yt(e[r].hash,(function(t){c.push(t.data)}));case 5:r++,t.next=2;break;case 8:console.log(c),n(c);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var Qt,Xt,Zt,$t,te,ee=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],r=e[1],a=Object(C.b)().account,i=Object(c.useState)([]),o=Object(l.a)(i,2),s=o[0],j=o[1];return Object(c.useEffect)((function(){Kt(a,(function(t){j(t),function(t,e){qt.apply(this,arguments)}(t,r)}))}),[]),Object(w.jsxs)(Nt,{children:[Object(w.jsx)(ne,{}),Object(w.jsx)(ce,{value:s,hashUrl:n})]})},ne=function(){return Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)(Vt,{children:"id"}),Object(w.jsx)(Vt,{children:"HASH"}),Object(w.jsx)(Vt,{children:"RECEIPT"}),Object(w.jsx)(Vt,{children:" IPFS HASH URL "})]})})},ce=function(t){for(var e=t.value,n=t.hashUrl,c=[],r=0;r<e.length;r++)console.log(e.length),c.push(Object(w.jsx)(re,{value:e[r],hashUrl:n[r]}));return Object(w.jsx)("tbody",{children:c})},re=function(t){var e=t.value,n=t.hashUrl;return Object(w.jsxs)("tr",{children:[Object(w.jsx)(ae,{index:e.index}),Object(w.jsx)(ie,{hash:e.hash}),Object(w.jsx)(oe,{receipt:e.receipt}),Object(w.jsx)(se,{hashUrl:n})]})},ae=function(t){var e=t.index;return Object(w.jsx)(Jt,{children:Object(w.jsx)(b.d,{justifyContent:"center",children:Object(w.jsx)(b.g,{children:e})})})},ie=function(t){var e=t.hash;return Object(w.jsx)(Jt,{children:e})},oe=function(t){var e=t.receipt;return Object(w.jsx)(Jt,{children:Object(w.jsx)(B.a,{size:"xs",as:b.e,isExternal:!0,href:function(t){return"https://baobab.scope.klaytn.com/tx/".concat(t,"?tabId=internalTx")}(e),children:e})})},se=function(t){var e=t.hashUrl;return Object(w.jsx)(Jt,{children:Object(w.jsx)(B.a,{size:"xs",as:b.e,isExternal:!0,href:e,children:e})})};n(129),n(455),n(456),u.a.table(Qt||(Qt=Object(o.a)(["\n  width: 100%;\n"]))),u.a.td(Xt||(Xt=Object(o.a)(["\n  text-align: center;\n  padding: 5px;\n"]))),u.a.th(Zt||(Zt=Object(o.a)(["\n  font-weight: 800;\n  color: #4318ff;\n  text-align: center;\n  border-bottom: 2px solid #4318ff;\n"]))),u.a.img($t||($t=Object(o.a)(["\n  src: ",';\n  width: 20px;\n  alt: "kakao";\n'])),(function(t){return t.src})),u.a.td(te||(te=Object(o.a)(["\n  color: #aeb4c4;\n  text-align: center;\n"])));function je(){return Object(w.jsx)(w.Fragment,{children:function(){var t=Object(c.useState)(59),e=Object(l.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(59),i=Object(l.a)(a,2),o=i[0],s=i[1];Object(c.useEffect)((function(){var t=setInterval((function(){o>0&&s(o-1),0===o&&(0===n?clearInterval(t):(r(n-1),s(59)))}),1e3);return function(){return clearInterval(t)}}),[n,o]);var j;return Object(w.jsxs)(w.Fragment,{children:[n,":",(j=o,j<10?"0".concat(j):j)]})}()})}var ue=function(){return Object(w.jsx)(b.g,{fontSize:"3xl",fontWeight:"700",children:"Transaction \ud604\ud669"})},le=function(t){var e=t.onOpenModal,n=t.modalOn;return Object(w.jsxs)(b.h,{w:"full",backgroundColor:"white",borderRadius:"5px",p:5,marginTop:5,children:[Object(w.jsx)(be,{onOpenModal:e}),n?Object(w.jsx)(ee,{}):"",Object(w.jsx)(ee,{}),Object(w.jsx)(de,{})]})},be=function(t){var e=t.onOpenModal;return Object(w.jsxs)(b.d,{justifyContent:"space-between",w:"full",children:[Object(w.jsx)(b.g,{color:g,fontWeight:700,fontSize:"lg",children:"Latest Transaction"}),Object(w.jsx)(fe,{onClick:e})]})},de=function(){return Object(w.jsxs)(b.h,{style:{width:"50%",backgroundColor:"white",borderRadius:"5px"},p:5,marginTop:5,children:[Object(w.jsx)(he,{}),Object(w.jsx)(xe,{})]})},he=function(){return Object(w.jsx)(b.d,{justifyContent:"center",w:"full",children:Object(w.jsx)(b.g,{color:g,fontWeight:700,fontSize:"2xl",children:"\ub2e4\uc74c Transaction \uae4c\uc9c0"})})},xe=function(){return Object(w.jsx)(b.d,{justifyContent:"center",w:"full",children:Object(w.jsx)(b.g,{color:g,fontWeight:700,fontSize:"9xl",children:Object(w.jsx)(je,{})})})},fe=function(t){var e=t.onClick;return Object(w.jsx)(b.a,{as:"button",backgroundColor:g,color:"white",borderRadius:"3px",width:"60px",fontWeight:"bold",onClick:e,children:"+ More"})},Oe=function(){return Object(w.jsx)(b.h,{w:"full",backgroundColor:"white",borderRadius:"5px",p:5,marginTop:5,children:Object(w.jsxs)(b.d,{justifyContent:"space-between",w:"full",children:[Object(w.jsx)(b.g,{color:g,fontWeight:700,fontSize:"lg",children:"Latest Blocks"}),Object(w.jsx)(fe,{})]})})},pe=function(){var t=Object(c.useState)(!1),e=Object(l.a)(t,2),n=e[0],r=e[1];return Object(w.jsxs)(b.c,{m:10,flexDirection:"column",w:"full",children:[Object(w.jsx)(ue,{}),Object(w.jsx)(Oe,{}),Object(w.jsx)(le,{onOpenModal:function(){r(!n)},modalOn:n})]})},ge=new(n(259).a)({supportedChainIds:[1,3,4,5,42,1001]});var ve=function(){return Object(w.jsx)(b.g,{fontSize:"md",children:"KingoKoin\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4."})},we=function(){return Object(w.jsx)(b.g,{children:"\uc11c\ube44\uc2a4 \uc774\uc6a9\uc744 \uc704\ud574 \uba54\ud0c0\ub9c8\uc2a4\ud06c \ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694."})},me=function(){return Object(w.jsx)(b.e,{color:g,href:"https://metamask.io/",isExternal:!0,children:"\uba54\ud0c0\ub9c8\uc2a4\ud06c \uc124\uce58\ud558\uae30"})},ye=function(t){var e=t.onClick;return Object(w.jsx)(B.a,{colorScheme:"green",variant:"solid",borderRadius:"20px",style:{height:"40px",width:"200px",borderRadius:"20px",color:"white",fontSize:"14px",fontWeight:"bold"},onClick:e,children:"\uc9c0\uac11 \uc5f0\uacb0\ud558\uae30"})},ke=function(){var t=Object(C.b)(),e=t.activate,n=t.active;return console.log(n),Object(w.jsx)(b.h,{w:"full",align:"center",justify:"center",children:Object(w.jsxs)(b.h,{bg:"white",p:10,borderRadius:20,children:[Object(w.jsx)(ve,{}),Object(w.jsx)(we,{}),Object(w.jsx)(me,{}),Object(w.jsx)(ye,{onClick:function(){e(ge)}})]})})};var Se,Ce=function(){return Object(w.jsxs)(b.h,{width:"100%",align:"center",justify:"center",children:[Object(w.jsx)(d.a,{m:"10",width:"300px",height:"75px",src:"https://login.skku.edu/resources/img/main_logo_kor.png"}),Object(w.jsx)(ke,{p:"5"}),Object(w.jsx)(b.e,{as:s.b,to:"/login",children:Object(w.jsx)(b.g,{children:"SKKU Login"})})]})},ze=n(102),Ee=n(226),_e="SKKU_LOGIN",De=n(148),Re=n(486),Te="LOGIN_EMAIL",Ae=function(){return Object(w.jsx)(b.a,{bgImage:"url('".concat("https://www.skku.edu/_res/skku/img/skku_s.png","')"),bgPosition:"center",bgRepeat:"no-repeat",height:"200px",width:"200px",bgSize:"cover"})},Pe=function(t){var e=t.title,n=t.placeholder,r=t.savedText,a=t.setForm,i=(t.onChange,Object(c.useState)(null)),o=Object(l.a)(i,2),s=o[0],j=o[1];Object(c.useEffect)((function(){j(r)}));var u=Object(c.useCallback)((function(t){a(e,t)}),[]);return Object(w.jsxs)(Ee.b,{width:"300px",size:"sm",children:[Object(w.jsx)(Ee.c,{children:e}),Object(w.jsx)(Ee.a,{value:s,placeholder:n,size:"xl",background:"white",onChange:function(t){j(t.target.value),u(t.target.value)}})]})},Ie=function(t){var e=t.onClick;return Object(w.jsx)(B.a,{colorScheme:"teal",onClick:e,fontWeight:"400",children:"\uba54\uc77c \ubcf4\ub0b4\uae30"})},Le=function(){var t=Object(De.b)(),e=Object(c.useState)({id:"",pw:""}),n=Object(l.a)(e,2),r=n[0],a=n[1],i=Object(Re.a)(Te),o=Object(l.a)(i,3),s=o[0],j=o[1],u=(o[2],Object(c.useState)(null)),d=Object(l.a)(u,2),h=d[0],x=d[1];return Object(c.useEffect)((function(){void 0!==s&&x(s.LOGIN_EMAIL)}),[]),Object(w.jsxs)(b.h,{align:"center",justifyContent:"center",width:"100%",spacing:8,children:[Object(w.jsx)(Ae,{}),Object(w.jsx)(Pe,{title:"\uc131\uade0\uc778 \uacc4\uc815",placeholder:"user@skku.edu",savedText:h,setForm:function(t,e){j(Te,e),x(e),a(Object(ze.a)(Object(ze.a)({},r),{},{id:e}))},width:"300px"}),Object(w.jsx)(Ie,{onClick:function(){var e;t((e=r.id,{type:_e,username:e}))}})]})},We=u.a.div(Se||(Se=Object(o.a)(['\n  font-size: 12px;\n  font-family: "Poppins", sans-serif;\n'])));var He=function(){var t=Object(C.b)().active;return Object(c.useEffect)((function(){document.title="Kingo Koin"})),Object(w.jsx)(We,{children:Object(w.jsx)(b.b,{maxW:"full",bg:"#E5E5E5",p:0,children:Object(w.jsx)(b.c,{minH:"100vh",h:"full",children:Object(w.jsxs)(s.a,{children:[t?Object(w.jsx)(j.a,{to:"/dashboard"}):Object(w.jsx)(j.a,{to:"/"}),t?Object(w.jsx)(k,{}):Object(w.jsx)(w.Fragment,{}),Object(w.jsx)(j.b,{exact:!0,path:"/",component:Ce}),Object(w.jsx)(j.b,{exact:!0,path:"/login",component:Le}),Object(w.jsx)(j.b,{exact:!0,path:"/dashboard",component:V}),Object(w.jsx)(j.b,{exact:!0,path:"/my-point",component:Ht}),Object(w.jsx)(j.b,{exact:!0,path:"/check-transactions",component:pe})]})})})})},Ke=n(37),Me=n(484);var Be=function(t){var e=new Me.a(t);return e.pollingInterval=12e3,e},Fe=n(146);var Ue=function(t,e,n){E()({url:"https://login.skku.edu/loginAction",method:"post",headers:{"Access-Control-Allow-Origin":"login.skku.edu","Access-Control-Allow-Methods":"GET, POST, PUT","Access-Control-Allow-Headers":"Content-Type","Content-Type":"text/xml",Origin:"login.skku.edu",Referer:"login.skku.edu","Referrer-Policy":"strict-origin-when-cross-origin",Accept:"*/*"},data:{userid:t}}).then((function(t){e(t)})).catch((function(t){console.log(t),n(t)}))},Ge={type:void 0,account:{}},Ye=function(){var t=Object(Q.a)(Z.a.mark((function t(){var e,n,c=arguments;return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=c.length>0&&void 0!==c[0]?c[0]:Ge,n=c.length>1?c[1]:void 0,t.t0=n.type,t.next=t.t0===_e?5:8;break;case 5:return t.next=7,Ue(n.username,(function(t){return t}),(function(t){return e}));case 7:return t.abrupt("break",9);case 8:return t.abrupt("return",e);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Ne=Ye,Je=Object(Fe.a)({skkuLogin:Ne}),Ve=Object(Fe.b)(Je);i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(C.a,{getLibrary:Be,children:Object(w.jsx)(Ke.a,{children:Object(w.jsx)(De.a,{store:Ve,children:Object(w.jsx)(He,{})})})})}),document.getElementById("root"))}},[[468,1,2]]]);
//# sourceMappingURL=main.a481d057.chunk.js.map