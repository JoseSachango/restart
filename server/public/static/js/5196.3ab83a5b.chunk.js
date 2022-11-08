"use strict";(self.webpackChunkparcolintegrity2=self.webpackChunkparcolintegrity2||[]).push([[5196],{56768:function(e,o,t){t(72791);var n=t(54270),i=t(80184);o.Z=function(e){var o=e.title,t=e.description,r=e.children;return(0,i.jsxs)("div",{children:[(0,i.jsxs)(n.q,{children:[(0,i.jsx)("title",{children:o}),(0,i.jsx)("meta",{name:"description",content:t})]}),r]})}},69148:function(e,o,t){t(72791);var n=t(61889),i=t(20890),r=t(93517),s=t(50533),a=t(64554),l=t(43504),c=t(98333),d=t(80184);o.Z=function(e){var o=e.subtitle,t=e.items,p=e.title,u=e.children;return(0,d.jsxs)(n.ZP,{container:!0,sx:{p:"15px"},children:[(0,d.jsxs)(n.ZP,{item:!0,xs:12,sm:6,lg:8,children:[(0,d.jsx)(i.Z,{color:"textSecondary",fontWeight:"400",variant:"h4",children:o}),(0,d.jsx)(r.Z,{separator:(0,d.jsx)(c.Z,{fontSize:"small"}),"aria-label":"breadcrumb",children:t?t.map((function(e){return(0,d.jsx)("div",{children:e.to?(0,d.jsx)(s.Z,{underline:"none",color:"inherit",component:l.OL,to:e.to,children:e.title}):(0,d.jsx)(i.Z,{color:"textPrimary",children:e.title})},e.title)})):""}),(0,d.jsx)(i.Z,{fontWeight:"700",variant:"h1",sx:{lineHeight:"1.235"},children:p})]}),(0,d.jsx)(n.ZP,{item:!0,xs:12,sm:6,lg:4,display:"flex",alignItems:"flex-end",children:(0,d.jsx)(a.Z,{sx:{display:{xs:"none",md:"block",lg:"flex"},alignItems:"center",justifyContent:"flex-end",width:"100%"},children:u})})]})}},35196:function(e,o,t){t.r(o),t.d(o,{default:function(){return oe}});var n=t(72791),i=t(57621),r=t(64554),s=t(20890),a=t(87462),l=t(63366),c=t(28182),d=t(14036),p=t(94419),u=t(66934),x=t(31402);var h=n.createContext({}),m=t(21217),Z=t(75878);function f(e){return(0,m.Z)("MuiTimeline",e)}(0,Z.Z)("MuiTimeline",["root","positionLeft","positionRight","positionAlternate"]);var v=t(80184),j=["position","className"],g=(0,u.ZP)("ul",{name:"MuiTimeline",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,t.position&&o["position".concat((0,d.Z)(t.position))]]}})({display:"flex",flexDirection:"column",padding:"6px 16px",flexGrow:1}),y=n.forwardRef((function(e,o){var t=(0,x.Z)({props:e,name:"MuiTimeline"}),n=t.position,i=void 0===n?"right":n,r=t.className,s=(0,l.Z)(t,j),u=(0,a.Z)({},t,{position:i}),m=function(e){var o=e.position,t=e.classes,n={root:["root",o&&"position".concat((0,d.Z)(o))]};return(0,p.Z)(n,f,t)}(u);return(0,v.jsx)(h.Provider,{value:{position:i},children:(0,v.jsx)(g,(0,a.Z)({className:(0,c.Z)(m.root,r),ownerState:u,ref:o},s))})})),w=t(4942),b=t(19103);function C(e){return(0,m.Z)("MuiTimelineContent",e)}var T=(0,Z.Z)("MuiTimelineContent",["root","positionLeft","positionRight","positionAlternate"]);function R(e){return(0,m.Z)("MuiTimelineOppositeContent",e)}var S=(0,Z.Z)("MuiTimelineOppositeContent",["root","positionLeft","positionRight","positionAlternate"]);function M(e){return(0,m.Z)("MuiTimelineItem",e)}(0,Z.Z)("MuiTimelineItem",["root","positionLeft","positionRight","positionAlternate","missingOppositeContent"]);var N=["position","className"],P=(0,u.ZP)("li",{name:"MuiTimelineItem",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o["position".concat((0,d.Z)(t.position))]]}})((function(e){var o,t=e.ownerState;return(0,a.Z)({listStyle:"none",display:"flex",position:"relative",minHeight:70},"left"===t.position&&{flexDirection:"row-reverse"},"alternate"===t.position&&{"&:nth-of-type(even)":(o={flexDirection:"row-reverse"},(0,w.Z)(o,"& .".concat(T.root),{textAlign:"right"}),(0,w.Z)(o,"& .".concat(S.root),{textAlign:"left"}),o)},!t.hasOppositeContent&&{"&:before":{content:'""',flex:1,padding:"6px 16px"}})})),k=n.forwardRef((function(e,o){var t=(0,x.Z)({props:e,name:"MuiTimelineItem"}),i=t.position,r=t.className,s=(0,l.Z)(t,N),u=n.useContext(h).position,m=!1;n.Children.forEach(t.children,(function(e){(0,b.Z)(e,["TimelineOppositeContent"])&&(m=!0)}));var Z=(0,a.Z)({},t,{position:i||u||"right",hasOppositeContent:m}),f=function(e){var o=e.position,t=e.classes,n=e.hasOppositeContent,i={root:["root","position".concat((0,d.Z)(o)),!n&&"missingOppositeContent"]};return(0,p.Z)(i,M,t)}(Z);return(0,v.jsx)(h.Provider,{value:{position:Z.position},children:(0,v.jsx)(P,(0,a.Z)({className:(0,c.Z)(f.root,r),ownerState:Z,ref:o},s))})})),O=["className"],A=(0,u.ZP)(s.Z,{name:"MuiTimelineOppositeContent",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o["position".concat((0,d.Z)(t.position))]]}})((function(e){var o=e.ownerState;return(0,a.Z)({padding:"6px 16px",marginRight:"auto",textAlign:"right",flex:1},"left"===o.position&&{textAlign:"left"})})),D=n.forwardRef((function(e,o){var t=(0,x.Z)({props:e,name:"MuiTimelineOppositeContent"}),i=t.className,r=(0,l.Z)(t,O),s=n.useContext(h).position,u=(0,a.Z)({},t,{position:s||"left"}),m=function(e){var o=e.position,t=e.classes,n={root:["root","position".concat((0,d.Z)(o))]};return(0,p.Z)(n,R,t)}(u);return(0,v.jsx)(A,(0,a.Z)({component:"div",className:(0,c.Z)(m.root,i),ownerState:u,ref:o},r))}));D.muiName="TimelineOppositeContent";var I=D;function B(e){return(0,m.Z)("MuiTimelineSeparator",e)}(0,Z.Z)("MuiTimelineSeparator",["root"]);var L=["className"],G=(0,u.ZP)("div",{name:"MuiTimelineSeparator",slot:"Root",overridesResolver:function(e,o){return o.root}})({display:"flex",flexDirection:"column",flex:0,alignItems:"center"}),W=n.forwardRef((function(e,o){var t=(0,x.Z)({props:e,name:"MuiTimelineSeparator"}),n=t.className,i=(0,l.Z)(t,L),r=t,s=function(e){var o=e.classes;return(0,p.Z)({root:["root"]},B,o)}(r);return(0,v.jsx)(G,(0,a.Z)({className:(0,c.Z)(s.root,n),ownerState:r,ref:o},i))}));function H(e){return(0,m.Z)("MuiTimelineDot",e)}(0,Z.Z)("MuiTimelineDot",["root","filled","outlined","filledGrey","outlinedGrey","filledPrimary","outlinedPrimary","filledSecondary","outlinedSecondary"]);var E=["className","color","variant"],q=(0,u.ZP)("span",{name:"MuiTimelineDot",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o["inherit"!==t.color&&"".concat(t.variant).concat((0,d.Z)(t.color))],o[t.variant]]}})((function(e){var o=e.ownerState,t=e.theme;return(0,a.Z)({display:"flex",alignSelf:"baseline",borderStyle:"solid",borderWidth:2,padding:4,borderRadius:"50%",boxShadow:(t.vars||t).shadows[1],margin:"11.5px 0"},"filled"===o.variant&&(0,a.Z)({borderColor:"transparent"},"inherit"!==o.color&&(0,a.Z)({},"grey"===o.color?{color:(t.vars||t).palette.grey[50],backgroundColor:(t.vars||t).palette.grey[400]}:{color:(t.vars||t).palette[o.color].contrastText,backgroundColor:(t.vars||t).palette[o.color].main})),"outlined"===o.variant&&(0,a.Z)({boxShadow:"none",backgroundColor:"transparent"},"inherit"!==o.color&&(0,a.Z)({},"grey"===o.color?{borderColor:(t.vars||t).palette.grey[400]}:{borderColor:(t.vars||t).palette[o.color].main})))})),z=n.forwardRef((function(e,o){var t=(0,x.Z)({props:e,name:"MuiTimelineDot"}),n=t.className,i=t.color,r=void 0===i?"grey":i,s=t.variant,u=void 0===s?"filled":s,h=(0,l.Z)(t,E),m=(0,a.Z)({},t,{color:r,variant:u}),Z=function(e){var o=e.color,t=e.variant,n=e.classes,i={root:["root",t,"inherit"!==o&&"".concat(t).concat((0,d.Z)(o))]};return(0,p.Z)(i,H,n)}(m);return(0,v.jsx)(q,(0,a.Z)({className:(0,c.Z)(Z.root,n),ownerState:m,ref:o},h))}));function F(e){return(0,m.Z)("MuiTimelineConnector",e)}(0,Z.Z)("MuiTimelineConnector",["root"]);var J=["className"],K=(0,u.ZP)("span",{name:"MuiTimelineConnector",slot:"Root",overridesResolver:function(e,o){return o.root}})((function(e){var o=e.theme;return{width:2,backgroundColor:(o.vars||o).palette.grey[400],flexGrow:1}})),Q=n.forwardRef((function(e,o){var t=(0,x.Z)({props:e,name:"MuiTimelineConnector"}),n=t.className,i=(0,l.Z)(t,J),r=t,s=function(e){var o=e.classes;return(0,p.Z)({root:["root"]},F,o)}(r);return(0,v.jsx)(K,(0,a.Z)({className:(0,c.Z)(s.root,n),ownerState:r,ref:o},i))})),U=["className"],V=(0,u.ZP)(s.Z,{name:"MuiTimelineContent",slot:"Root",overridesResolver:function(e,o){var t=e.ownerState;return[o.root,o["position".concat((0,d.Z)(t.position))]]}})((function(e){var o=e.ownerState;return(0,a.Z)({flex:1,padding:"6px 16px",textAlign:"left"},"left"===o.position&&{textAlign:"right"})})),X=n.forwardRef((function(e,o){var t=(0,x.Z)({props:e,name:"MuiTimelineContent"}),i=t.className,r=(0,l.Z)(t,U),s=n.useContext(h).position,u=(0,a.Z)({},t,{position:s||"right"}),m=function(e){var o=e.position,t=e.classes,n={root:["root","position".concat((0,d.Z)(o))]};return(0,p.Z)(n,C,t)}(u);return(0,v.jsx)(V,(0,a.Z)({component:"div",className:(0,c.Z)(m.root,i),ownerState:u,ref:o},r))})),Y=t(74330),$=t(69148),_=t(56768),ee=[{to:"/",title:"Home"},{title:"Timeline"}],oe=function(){return(0,v.jsxs)(_.Z,{title:"Timeline",description:"this is Timeline page",children:[(0,v.jsx)($.Z,{title:"Timeline",items:ee}),(0,v.jsx)(i.Z,{children:(0,v.jsxs)(y,{position:"alternate",sx:{color:"rgba(0, 0, 0, 0.87)"},children:[(0,v.jsxs)(k,{children:[(0,v.jsx)(I,{sx:{m:"auto 0"},align:"right",variant:"body2",color:"text.secondary",children:"6:30 am"}),(0,v.jsxs)(W,{children:[(0,v.jsx)(z,{color:"info",sx:{p:1,color:"white"},children:(0,v.jsx)(Y.Z,{icon:"clock",width:"22",height:"22"})}),(0,v.jsx)(Q,{})]}),(0,v.jsx)(X,{children:(0,v.jsxs)(r.Z,{sx:{bgcolor:"primary.light",p:2,borderRadius:3},children:[(0,v.jsx)(s.Z,{variant:"h4",component:"span",children:"Wake up"}),(0,v.jsx)(s.Z,{children:"Because you have many things to do"})]})})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(I,{sx:{m:"auto 0"},align:"right",variant:"body2",color:"text.secondary",children:"9:30 am"}),(0,v.jsxs)(W,{children:[(0,v.jsx)(Q,{}),(0,v.jsx)(z,{color:"warning",sx:{p:1},children:(0,v.jsx)(Y.Z,{icon:"slack",width:"22",height:"22"})}),(0,v.jsx)(Q,{})]}),(0,v.jsx)(X,{children:(0,v.jsxs)(r.Z,{sx:{bgcolor:"warning.light",p:2,borderRadius:3},children:[(0,v.jsx)(s.Z,{variant:"h4",component:"span",children:"Eat"}),(0,v.jsx)(s.Z,{children:"Because you need strength"})]})})]}),(0,v.jsxs)(k,{sx:{mb:{xs:"10px",sm:"0"}},children:[(0,v.jsx)(I,{sx:{m:"auto 0"},variant:"body2",color:"text.secondary",children:"10:00 am"}),(0,v.jsxs)(W,{children:[(0,v.jsx)(Q,{}),(0,v.jsx)(z,{color:"success",sx:{p:1},children:(0,v.jsx)(Y.Z,{icon:"airplay",width:"22",height:"22"})}),(0,v.jsx)(Q,{})]}),(0,v.jsx)(X,{children:(0,v.jsxs)(r.Z,{sx:{bgcolor:"success.light",p:2,borderRadius:3},children:[(0,v.jsx)(s.Z,{variant:"h4",component:"span",children:"Code"}),(0,v.jsx)(s.Z,{children:"Because it's awesome!"})]})})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(I,{sx:{m:"auto 0"},align:"right",variant:"body2",color:"text.secondary",children:"12:30 am"}),(0,v.jsxs)(W,{children:[(0,v.jsx)(Q,{}),(0,v.jsx)(z,{color:"error",sx:{p:1},children:(0,v.jsx)(Y.Z,{icon:"moon",width:"22",height:"22"})}),(0,v.jsx)(Q,{})]}),(0,v.jsx)(X,{children:(0,v.jsxs)(r.Z,{sx:{bgcolor:"error.light",p:2,borderRadius:3},children:[(0,v.jsx)(s.Z,{variant:"h4",component:"span",children:"Sleep"}),(0,v.jsx)(s.Z,{children:"Because you need rest"})]})})]}),(0,v.jsxs)(k,{children:[(0,v.jsx)(I,{sx:{m:"auto 0"},align:"right",variant:"body2",color:"text.secondary",children:"12:41 am"}),(0,v.jsxs)(W,{children:[(0,v.jsx)(Q,{}),(0,v.jsx)(z,{color:"secondary",sx:{p:1},children:(0,v.jsx)(Y.Z,{icon:"repeat",width:"22",height:"22"})}),(0,v.jsx)(Q,{})]}),(0,v.jsx)(X,{children:(0,v.jsxs)(r.Z,{sx:{bgcolor:"primary.light",p:2,borderRadius:3},children:[(0,v.jsx)(s.Z,{variant:"h4",component:"span",children:"Repeat"}),(0,v.jsx)(s.Z,{children:"Because this is the life you love!"})]})})]})]})})]})}}}]);
//# sourceMappingURL=5196.3ab83a5b.chunk.js.map