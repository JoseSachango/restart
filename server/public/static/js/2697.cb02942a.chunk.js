"use strict";(self.webpackChunkparcolintegrity2=self.webpackChunkparcolintegrity2||[]).push([[2697],{32697:function(a,s,t){t.r(s);var e=t(72791),n=t(61889),l=t(15826),o=t(91579),i=t(56768),r=(t(88880),t(10937)),c=t.n(r),d=t(16871),h=t(77726),g=t(80184);s.default=function(){var a=(0,h.bN)(),s=(0,h.l6)();return e.useEffect((function(){c().getUserInfo("/dashboards/dashboard1").then((function(a){console.log("This is the response from the get request: ".concat(JSON.stringify(a.data.plant.data.values))),console.log("space"),console.log("This is the response from the get request: ".concat(JSON.stringify(a.data.area.data.values))),console.log("end response from get request"),console.log("This is the length of that response: ".concat(a.data.plant.data.values.length)),s.setDatabaseData(a.data),s.setDashboardData(a.data.circuit2.data.values),s.setCurrentPlantName(a.data.plant.data.values[1][2]),console.log("setting data"),a.data.plant.data.values.length<=1&&(s.databaseDataExists(!1),console.log("sss"))}))}),[]),(0,g.jsxs)(g.Fragment,{children:[!a.databaseDataExistsValue&&(0,g.jsx)(d.Fg,{to:"/form-layouts/form-layouts"}),a.databaseDataExistsValue&&(0,g.jsx)(i.Z,{title:"Analytical Dashboard",description:"this is Analytical Dashboard",children:(0,g.jsxs)(n.ZP,{container:!0,spacing:0,children:[(0,g.jsx)(n.ZP,{item:!0,xs:12,sm:4,lg:5,children:(0,g.jsx)(l.zr,{})}),(0,g.jsx)(n.ZP,{item:!0,xs:12,sm:4,lg:3,children:(0,g.jsx)(l.vL,{})}),(0,g.jsx)(n.ZP,{item:!0,xs:12,sm:4,lg:4,children:(0,g.jsx)(l.ML,{})}),(0,g.jsx)(n.ZP,{item:!0,xs:12,lg:8,children:(0,g.jsx)(l.UN,{obj:o.Z})}),(0,g.jsxs)(n.ZP,{item:!0,xs:12,lg:4,children:[(0,g.jsx)(l.ew,{}),(0,g.jsx)(l.SD,{})]})]})})]})}}}]);
//# sourceMappingURL=2697.cb02942a.chunk.js.map