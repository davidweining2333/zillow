"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[281],{69902:function(q,b,e){e.d(b,{D:function(){return M}});var t=e(85065),g=e(43241),E=e(50959),m=e(49216),T=e(14224);function M(y,S){var _=(0,m.J)(y),O=(0,E.useRef)(),i=(0,E.useCallback)(function(){O.current&&(clearTimeout(O.current),O.current=null)},[]),r=(0,E.useCallback)((0,g.Z)((0,t.Z)().mark(function o(){var a,s,n,u=arguments;return(0,t.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:for(a=u.length,s=new Array(a),n=0;n<a;n++)s[n]=u[n];if(!(S===0||S===void 0)){h.next=3;break}return h.abrupt("return",_.apply(void 0,s));case 3:return i(),h.abrupt("return",new Promise(function(D){O.current=setTimeout((0,g.Z)((0,t.Z)().mark(function U(){return(0,t.Z)().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:d.next=7;break;case 4:return d.t1=d.sent,(0,d.t0)(d.t1),d.abrupt("return");case 7:return d.t2=D,d.next=10,_.apply(void 0,s);case 10:d.t3=d.sent,(0,d.t2)(d.t3);case 12:case"end":return d.stop()}},U)})),S)}));case 5:case"end":return h.stop()}},o)})),[_,i,S]);return(0,E.useEffect)(function(){return i},[i]),{run:r,cancel:i}}},49216:function(q,b,e){e.d(b,{J:function(){return E}});var t=e(21963),g=e(50959),E=function(T){var M=(0,g.useRef)(null);return M.current=T,(0,g.useCallback)(function(){for(var y,S=arguments.length,_=new Array(S),O=0;O<S;O++)_[O]=arguments[O];return(y=M.current)===null||y===void 0?void 0:y.call.apply(y,[M].concat((0,t.Z)(_)))},[])}},85177:function(q,b,e){e.d(b,{Z:function(){return t}});const t=g=>g?typeof g=="function"?g():g:null},71160:function(q,b,e){e.d(b,{C:function(){return ge}});var t=e(50959),g=e(84875),E=e.n(g),m=e(12682),T=e(12602),M=e(61807),y=e(50344),S=e(53473),_=e(74716),i=t.createContext({}),r=e(21597),o=e(24536),a=e(16342),s=e(81591);const n=l=>{const{antCls:v,componentCls:f,iconCls:c,avatarBg:P,avatarColor:Y,containerSize:Z,containerSizeLG:R,containerSizeSM:F,textFontSize:I,textFontSizeLG:V,textFontSizeSM:re,borderRadius:L,borderRadiusLG:j,borderRadiusSM:X,lineWidth:J,lineType:ee,calc:k}=l,G=(B,Q,W)=>({width:B,height:B,lineHeight:(0,r.bf)(k(B).sub(k(J).mul(2)).equal()),borderRadius:"50%",[`&${f}-square`]:{borderRadius:W},[`${f}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${f}-icon`]:{fontSize:Q,[`> ${c}`]:{margin:0}}});return{[f]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,o.Wf)(l)),{position:"relative",display:"inline-block",overflow:"hidden",color:Y,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:P,border:`${(0,r.bf)(J)} ${ee} transparent`,["&-image"]:{background:"transparent"},[`${v}-image-img`]:{display:"block"}}),G(Z,I,L)),{["&-lg"]:Object.assign({},G(R,V,j)),["&-sm"]:Object.assign({},G(F,re,X)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},u=l=>{const{componentCls:v,groupBorderColor:f,groupOverlapping:c,groupSpace:P}=l;return{[`${v}-group`]:{display:"inline-flex",[`${v}`]:{borderColor:f},["> *:not(:first-child)"]:{marginInlineStart:c}},[`${v}-group-popover`]:{[`${v} + ${v}`]:{marginInlineStart:P}}}},$=l=>{const{controlHeight:v,controlHeightLG:f,controlHeightSM:c,fontSize:P,fontSizeLG:Y,fontSizeXL:Z,fontSizeHeading3:R,marginXS:F,marginXXS:I,colorBorderBg:V}=l;return{containerSize:v,containerSizeLG:f,containerSizeSM:c,textFontSize:Math.round((Y+Z)/2),textFontSizeLG:R,textFontSizeSM:P,groupSpace:I,groupOverlapping:-F,groupBorderColor:V}};var h=(0,a.I$)("Avatar",l=>{const{colorTextLightSolid:v,colorTextPlaceholder:f}=l,c=(0,s.TS)(l,{avatarBg:f,avatarColor:v});return[n(c),u(c)]},$),D=e(10864),U=function(l,v){var f={};for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&v.indexOf(c)<0&&(f[c]=l[c]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var P=0,c=Object.getOwnPropertySymbols(l);P<c.length;P++)v.indexOf(c[P])<0&&Object.prototype.propertyIsEnumerable.call(l,c[P])&&(f[c[P]]=l[c[P]]);return f};const H=(l,v)=>{const[f,c]=t.useState(1),[P,Y]=t.useState(!1),[Z,R]=t.useState(!0),F=t.useRef(null),I=t.useRef(null),V=(0,T.sQ)(v,F),{getPrefixCls:re,avatar:L}=t.useContext(y.E_),j=t.useContext(i),X=()=>{if(!I.current||!F.current)return;const C=I.current.offsetWidth,p=F.current.offsetWidth;if(C!==0&&p!==0){const{gap:z=4}=l;z*2<p&&c(p-z*2<C?(p-z*2)/C:1)}};t.useEffect(()=>{Y(!0)},[]),t.useEffect(()=>{R(!0),c(1)},[l.src]),t.useEffect(X,[l.gap]);const J=()=>{const{onError:C}=l;(C==null?void 0:C())!==!1&&R(!1)},{prefixCls:ee,shape:k,size:G,src:B,srcSet:Q,icon:W,className:te,rootClassName:ae,alt:pe,draggable:Ee,children:ce,crossOrigin:he}=l,se=U(l,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),x=(0,S.Z)(C=>{var p,z;return(z=(p=G!=null?G:j==null?void 0:j.size)!==null&&p!==void 0?p:C)!==null&&z!==void 0?z:"default"}),Ce=Object.keys(typeof x=="object"?x||{}:{}).some(C=>["xs","sm","md","lg","xl","xxl"].includes(C)),fe=(0,_.Z)(Ce),Oe=t.useMemo(()=>{if(typeof x!="object")return{};const C=M.c4.find(z=>fe[z]),p=x[C];return p?{width:p,height:p,lineHeight:`${p}px`,fontSize:p&&(W||ce)?p/2:18}:{}},[fe,x]),N=re("avatar",ee),ve=(0,D.Z)(N),[Pe,ye]=h(N,ve),Se=E()({[`${N}-lg`]:x==="large",[`${N}-sm`]:x==="small"}),me=t.isValidElement(B),_e=k||(j==null?void 0:j.shape)||"circle",Me=E()(N,Se,L==null?void 0:L.className,`${N}-${_e}`,{[`${N}-image`]:me||B&&Z,[`${N}-icon`]:!!W},ve,te,ae,ye),xe=typeof x=="number"?{width:x,height:x,lineHeight:`${x}px`,fontSize:W?x/2:18}:{};let ne;if(typeof B=="string"&&Z)ne=t.createElement("img",{src:B,draggable:Ee,srcSet:Q,onError:J,alt:pe,crossOrigin:he});else if(me)ne=B;else if(W)ne=W;else if(P||f!==1){const C=`scale(${f}) translateX(-50%)`,p={msTransform:C,WebkitTransform:C,transform:C},z=typeof x=="number"?{lineHeight:`${x}px`}:{};ne=t.createElement(m.Z,{onResize:X},t.createElement("span",{className:`${N}-string`,ref:I,style:Object.assign(Object.assign({},z),p)},ce))}else ne=t.createElement("span",{className:`${N}-string`,style:{opacity:0},ref:I},ce);return delete se.onError,delete se.gap,Pe(t.createElement("span",Object.assign({},se,{style:Object.assign(Object.assign(Object.assign(Object.assign({},xe),Oe),L==null?void 0:L.style),se.style),className:Me,ref:V}),ne))};var K=t.forwardRef(H),w=e(13763),A=e(53395),le=e(18911);const oe=l=>{const{size:v,shape:f}=t.useContext(i),c=t.useMemo(()=>({size:l.size||v,shape:l.shape||f}),[l.size,l.shape,v,f]);return t.createElement(i.Provider,{value:c},l.children)};var ie=l=>{const{getPrefixCls:v,direction:f}=t.useContext(y.E_),{prefixCls:c,className:P,rootClassName:Y,style:Z,maxCount:R,maxStyle:F,size:I,shape:V,maxPopoverPlacement:re="top",maxPopoverTrigger:L="hover",children:j}=l,X=v("avatar",c),J=`${X}-group`,ee=(0,D.Z)(X),[k,G]=h(X,ee),B=E()(J,{[`${J}-rtl`]:f==="rtl"},ee,P,Y,G),Q=(0,w.Z)(j).map((te,ae)=>(0,le.Tm)(te,{key:`avatar-key-${ae}`})),W=Q.length;if(R&&R<W){const te=Q.slice(0,R),ae=Q.slice(R,W);return te.push(t.createElement(A.Z,{key:"avatar-popover-key",content:ae,trigger:L,placement:re,overlayClassName:`${J}-popover`},t.createElement(K,{style:F},`+${W-R}`))),k(t.createElement(oe,{shape:V,size:I},t.createElement("div",{className:B,style:Z},te)))}return k(t.createElement(oe,{shape:V,size:I},t.createElement("div",{className:B,style:Z},Q)))};const ue=K;ue.Group=ie;var ge=ue},36304:function(q,b,e){var t=e(84875),g=e.n(t),E=e(78505),m=e(50959),T=e(50344),M=e(85177),y=e(11729),S=function(r,o){var a={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&o.indexOf(s)<0&&(a[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,s=Object.getOwnPropertySymbols(r);n<s.length;n++)o.indexOf(s[n])<0&&Object.prototype.propertyIsEnumerable.call(r,s[n])&&(a[s[n]]=r[s[n]]);return a};const _=(r,o,a)=>{if(!(!o&&!a))return m.createElement(m.Fragment,null,o&&m.createElement("div",{className:`${r}-title`},(0,M.Z)(o)),m.createElement("div",{className:`${r}-inner-content`},(0,M.Z)(a)))},O=r=>{const{hashId:o,prefixCls:a,className:s,style:n,placement:u="top",title:$,content:h,children:D}=r;return m.createElement("div",{className:g()(o,a,`${a}-pure`,`${a}-placement-${u}`,s),style:n},m.createElement("div",{className:`${a}-arrow`}),m.createElement(E.G,Object.assign({},r,{className:o,prefixCls:a}),D||_(a,$,h)))},i=r=>{const{prefixCls:o}=r,a=S(r,["prefixCls"]),{getPrefixCls:s}=m.useContext(T.E_),n=s("popover",o),[u,$]=(0,y.Z)(n);return u(m.createElement(O,Object.assign({},a,{prefixCls:n,hashId:$})))};b.ZP=i},53395:function(q,b,e){var t=e(50959),g=e(84875),E=e.n(g),m=e(85177),T=e(95628),M=e(50344),y=e(46293),S=e(36304),_=e(11729),O=function(o,a){var s={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&a.indexOf(n)<0&&(s[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(o);u<n.length;u++)a.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(o,n[u])&&(s[n[u]]=o[n[u]]);return s};const i=o=>{let{title:a,content:s,prefixCls:n}=o;return t.createElement(t.Fragment,null,a&&t.createElement("div",{className:`${n}-title`},(0,m.Z)(a)),t.createElement("div",{className:`${n}-inner-content`},(0,m.Z)(s)))},r=t.forwardRef((o,a)=>{const{prefixCls:s,title:n,content:u,overlayClassName:$,placement:h="top",trigger:D="hover",mouseEnterDelay:U=.1,mouseLeaveDelay:H=.1,overlayStyle:d={}}=o,K=O(o,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:w}=t.useContext(M.E_),A=w("popover",s),[le,oe]=(0,_.Z)(A),de=w(),ie=E()($,oe);return le(t.createElement(y.Z,Object.assign({placement:h,trigger:D,mouseEnterDelay:U,mouseLeaveDelay:H,overlayStyle:d},K,{prefixCls:A,overlayClassName:ie,ref:a,overlay:n||u?t.createElement(i,{prefixCls:A,title:n,content:u}):null,transitionName:(0,T.m)(de,"zoom-big",K.transitionName),"data-popover-inject":!0})))});r._InternalPanelDoNotUseOrYouWillBeFired=S.ZP,b.Z=r},11729:function(q,b,e){var t=e(24536),g=e(59586),E=e(10534),m=e(59512),T=e(16342),M=e(81591),y=e(9918);const S=i=>{const{componentCls:r,popoverColor:o,titleMinWidth:a,fontWeightStrong:s,innerPadding:n,boxShadowSecondary:u,colorTextHeading:$,borderRadiusLG:h,zIndexPopup:D,titleMarginBottom:U,colorBgElevated:H,popoverBg:d,titleBorderBottom:K,innerContentPadding:w,titlePadding:A}=i;return[{[r]:Object.assign(Object.assign({},(0,t.Wf)(i)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:D,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":H,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${r}-content`]:{position:"relative"},[`${r}-inner`]:{backgroundColor:d,backgroundClip:"padding-box",borderRadius:h,boxShadow:u,padding:n},[`${r}-title`]:{minWidth:a,marginBottom:U,color:$,fontWeight:s,borderBottom:K,padding:A},[`${r}-inner-content`]:{color:o,padding:w}})},(0,E.ZP)(i,"var(--antd-arrow-background-color)"),{[`${r}-pure`]:{position:"relative",maxWidth:"none",margin:i.sizePopupArrow,display:"inline-block",[`${r}-content`]:{display:"inline-block"}}}]},_=i=>{const{componentCls:r}=i;return{[r]:m.i.map(o=>{const a=i[`${o}6`];return{[`&${r}-${o}`]:{"--antd-arrow-background-color":a,[`${r}-inner`]:{backgroundColor:a},[`${r}-arrow`]:{background:"transparent"}}}})}},O=i=>{const{lineWidth:r,controlHeight:o,fontHeight:a,padding:s,wireframe:n,zIndexPopupBase:u,borderRadiusLG:$,marginXS:h,lineType:D,colorSplit:U,paddingSM:H}=i,d=o-a,K=d/2,w=d/2-r,A=s;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:u+30},(0,y.w)(i)),(0,E.wZ)({contentRadius:$,limitVerticalRadius:!0})),{innerPadding:n?0:12,titleMarginBottom:n?0:h,titlePadding:n?`${K}px ${A}px ${w}px`:0,titleBorderBottom:n?`${r}px ${D} ${U}`:"none",innerContentPadding:n?`${H}px ${A}px`:0})};b.Z=(0,T.I$)("Popover",i=>{const{colorBgElevated:r,colorText:o}=i,a=(0,M.TS)(i,{popoverBg:r,popoverColor:o});return[S(a),_(a),(0,g._y)(a,"zoom-big")]},O,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})}}]);
