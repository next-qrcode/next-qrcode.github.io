(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5075)}])},5075:function(e,n,a){"use strict";a.r(n);var l=a(5893),s=a(7294),i=a(639),t=a(979),c=a(1219),r=a(3902),x=a(8633),o=a(713),d=a(9496),u=[{value:"image/png",label:"image/png"},{value:"image/jpeg",label:"image/jpeg"},{value:"image/webp",label:"image/webp"},],h=[{value:"L",label:"L"},{value:"M",label:"M"},{value:"Q",label:"Q"},{value:"H",label:"H"},],j=[{value:"canvas",label:"Canvas"},{value:"img",label:"Image"},],g=function(){var e=(0,s.useState)({value:"image/png",label:"image/png"}),n=e[0],a=e[1],g=(0,s.useState)({value:"L",label:"L"}),p=g[0],v=g[1],b=(0,s.useState)({value:"canvas",label:"Canvas"}),m=b[0],f=b[1],C=(0,s.useState)(!1),q=C[0],y=C[1],k=(0,s.useState)("#010599FF"),w=k[0],K=k[1],S=(0,s.useState)(!1),_=S[0],F=S[1],I=(0,s.useState)("#FFBF60FF"),Q=I[0],R=I[1],Y=(0,s.useState)("https://github.com/Bunlong/next-qrcode"),D=Y[0],W=Y[1],z=(0,s.useState)(2),E=z[0],L=z[1],T=(0,s.useState)(5),B=T[0],N=T[1],O=(0,s.useState)(.3),P=O[0],V=O[1],Z=(0,s.useState)(150),M=Z[0],X=Z[1],A=(0,s.useState)(!0),H=A[0],G=A[1],J=(0,d.y)(),U=J.Canvas,$=J.Image,ee=function(){y(!q)},en=function(){y(!1)},ea=function(e){K(e.hex)},el=function(e){a(e)},es=function(e){v(e)},ei=function(e){f(e)},et=function(){F(!_)},ec=function(){F(!1)},er=function(e){R(e.hex)},ex=function(e){"text"===e.target.name&&W(e.target.value)},eo=function(e){G(e.target.checked)},ed=function(e){var n=e.target.name;"margin"===n?L(e.target.value):"quality"===n?V(e.target.value):"scale"===n?N(e.target.value):"width"===n&&X(e.target.value)},eu=Object.assign({width:"100%",padding:"5px",background:"#fff",borderRadius:"5px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},H?{}:{pointerEvents:"none",opacity:.7});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.xu,{bg:"black",px:4,color:"white",children:(0,l.jsxs)(i.kC,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,l.jsx)(i.xu,{children:"next-qrcode"}),(0,l.jsx)(i.kC,{alignItems:"center",children:(0,l.jsx)(i.Kq,{direction:"row",spacing:7,children:(0,l.jsx)(i.xu,{children:(0,l.jsx)("span",{children:(0,l.jsx)("iframe",{src:"https://ghbtns.com/github-btn.html?user=Bunlong&repo=next-qrcode&type=star&count=true",frameBorder:"0",scrolling:"0",width:"80px",height:"20px"})})})})})]})}),(0,l.jsx)(i.W2,{maxW:"container.md",paddingBottom:"50",marginTop:"50",children:(0,l.jsxs)(i.Kq,{spacing:6,children:[(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Render as:"})}),(0,l.jsx)(i.xu,{children:(0,l.jsx)(x.ZP,{value:m,onChange:ei,options:j})})]}),(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Text:"})}),(0,l.jsx)(i.xu,{children:(0,l.jsx)(t.II,{variant:"outline",name:"text",value:D,onChange:ex})})]}),(0,l.jsxs)(i.Kq,{spacing:3,direction:"row",children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Include Options:"})}),(0,l.jsx)(i.xu,{style:{marginTop:"4px"},children:(0,l.jsx)(c.XZ,{defaultChecked:!0,onChange:eo})})]}),(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsxs)("fieldset",{style:{border:"1px solid #ccc",borderRadius:5,padding:20},children:[(0,l.jsx)("legend",{children:"Options"}),(0,l.jsxs)(i.Kq,{spacing:6,children:["canvas"!==m.value&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Type:"})}),(0,l.jsx)(i.xu,{children:(0,l.jsx)(x.ZP,{value:n,onChange:el,options:u,isDisabled:!H})})]}),(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Quality:"})}),(0,l.jsx)(i.xu,{children:(0,l.jsxs)(r.Y2,{defaultValue:P,min:0,max:1,step:.1,name:"quality",value:P,onChange:function(e){return ed({target:{name:"quality",value:e}})},isDisabled:!H,children:[(0,l.jsx)(r.zu,{}),(0,l.jsxs)(r.Fi,{children:[(0,l.jsx)(r.WQ,{}),(0,l.jsx)(r.Y_,{})]})]})})]})]}),(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Level:"})}),(0,l.jsx)(i.xu,{children:(0,l.jsx)(x.ZP,{value:p,onChange:es,options:h,isDisabled:!H})})]}),(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Margin:"})}),(0,l.jsx)(i.xu,{children:(0,l.jsxs)(r.Y2,{defaultValue:E,min:0,name:"margin",value:E,isDisabled:!H,onChange:function(e){return ed({target:{name:"margin",value:e}})},children:[(0,l.jsx)(r.zu,{}),(0,l.jsxs)(r.Fi,{children:[(0,l.jsx)(r.WQ,{}),(0,l.jsx)(r.Y_,{})]})]})})]}),(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Scale:"})}),(0,l.jsx)(i.xu,{children:(0,l.jsxs)(r.Y2,{defaultValue:B,min:0,name:"scale",value:B,isDisabled:!H,onChange:function(e){return ed({target:{name:"scale",value:e}})},children:[(0,l.jsx)(r.zu,{}),(0,l.jsxs)(r.Fi,{children:[(0,l.jsx)(r.WQ,{}),(0,l.jsx)(r.Y_,{})]})]})})]}),(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Width:"})}),(0,l.jsx)(i.xu,{children:(0,l.jsxs)(r.Y2,{defaultValue:M,min:0,name:"width",value:M,isDisabled:!H,onChange:function(e){return ed({target:{name:"width",value:e}})},children:[(0,l.jsx)(r.zu,{}),(0,l.jsxs)(r.Fi,{children:[(0,l.jsx)(r.WQ,{}),(0,l.jsx)(r.Y_,{})]})]})})]}),(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Dark color:"})}),(0,l.jsxs)(i.xu,{children:[(0,l.jsx)("div",{style:eu,onClick:ee,children:(0,l.jsx)("div",{style:{width:"100%",height:"29px",borderRadius:"2px",background:"".concat(w)}})}),q?(0,l.jsxs)("div",{style:{position:"absolute",zIndex:"2"},children:[(0,l.jsx)("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},onClick:en}),(0,l.jsx)(o.xS,{color:w,onChange:ea})]}):null]})]}),(0,l.jsxs)(i.Kq,{spacing:3,children:[(0,l.jsx)(i.xu,{children:(0,l.jsx)("label",{children:"Light color:"})}),(0,l.jsxs)(i.xu,{children:[(0,l.jsx)("div",{style:eu,onClick:et,children:(0,l.jsx)("div",{style:{width:"100%",height:"29px",borderRadius:"2px",backgroundColor:"".concat(Q)}})}),_?(0,l.jsxs)("div",{style:{position:"absolute",zIndex:"2"},children:[(0,l.jsx)("div",{style:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"},onClick:ec}),(0,l.jsx)(o.xS,{color:Q,onChange:er})]}):null]})]})]})]}),(0,l.jsx)(i.Kq,{spacing:3,children:(0,l.jsx)(i.xu,{children:"canvas"===m.value?H?(0,l.jsx)(U,{text:D,options:{level:p.value,margin:E,scale:B,width:M,color:{dark:w,light:Q}}}):(0,l.jsx)(U,{text:D}):H?(0,l.jsx)($,{text:D,options:{type:n.value,quality:P,level:p.value,margin:E,scale:B,width:M,color:{dark:w,light:Q}}}):(0,l.jsx)($,{text:D})})}),(0,l.jsx)(i.Kq,{spacing:3,children:(0,l.jsx)(i.xu,{children:(0,l.jsx)("pre",{children:(0,l.jsx)("code",{style:{backgroundColor:"#eee",border:"1px solid #999",display:"block",padding:"20px",borderRadius:"5px"},children:"import React from 'react';\nimport { useQRCode } from 'next-qrcode';\n\nfunction App() {\n  const { ".concat("canvas"===m.value?"Canvas":"Image"," } = useQRCode();\n\n  return (\n    ").concat("canvas"===m.value?"<Canvas\n      text='".concat(D,"'\n      ").concat(H?"options: {\n        level: '".concat(p.value,"',\n        margin: ").concat(E,",\n        scale: ").concat(B,",\n        width: ").concat(M,",\n        color: {\n          dark: '").concat(w,"',\n          light: '").concat(Q,"',\n        }\n      }"):"","\n    />"):"<Image\n      text='".concat(D,"'\n      ").concat(H?"options: {\n        type: 'image/jpeg',\n        quality: 0.3,\n        level: '".concat(p.value,"',\n        margin: ").concat(E,",\n        scale: ").concat(B,",\n        width: ").concat(M,",\n        color: {\n          dark: '").concat(w,"',\n          light: '").concat(Q,"',\n        }\n      }"):"","\n    />"),"\n  );\n}\n\nexport default App;")})})})})]})]})})]})};n.default=g}},function(e){e.O(0,[430,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);