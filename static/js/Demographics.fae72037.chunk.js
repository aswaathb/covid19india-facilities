(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[4],{228:function(e,t,a){"use strict";var n=a(0),c=a.n(n),l=a(397),r=a(398),i=a(399),s=a(400),o=a(208);t.a=c.a.memo((function(e){var t=Object(o.a)().t;return c.a.createElement("footer",{className:"fadeInUp",style:{animationDelay:"2s"}},c.a.createElement("h5",null,t("We stand with everyone fighting on the frontlines")),c.a.createElement("div",{className:"link"},c.a.createElement("a",{href:"https://github.com/covid19india",target:"_blank",rel:"noopener noreferrer"},"covid19india")),c.a.createElement("a",{href:"https://github.com/covid19india/covid19india-react",className:"button github",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(l.a,null),c.a.createElement("span",null,t("Open Sourced on GitHub"))),c.a.createElement("a",{className:"button excel",href:"http://patientdb.covid19india.org",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(r.a,null),c.a.createElement("span",null,t("Crowdsourced Patient Database"))),c.a.createElement("a",{href:"https://twitter.com/covid19indiaorg",target:"_blank",rel:"noopener noreferrer",className:"button twitter",style:{justifyContent:"center"}},c.a.createElement(i.a,null),c.a.createElement("span",null,t("View updates on Twitter"))),c.a.createElement("a",{href:"https://bit.ly/covid19crowd",className:"button telegram",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(s.a,null),c.a.createElement("span",null,t("Join Telegram to Collaborate!"))))}))},491:function(e,t,a){"use strict";a.r(t);var n=a(301),c=a(53),l=a(0),r=a.n(l),i=a(484);var s=r.a.memo((function(e){return r.a.createElement("div",{className:"DownloadBlock fadeInUp",style:{animationDelay:"0.5s"}},r.a.createElement("a",{className:"button",target:"_noblank",href:"https://raw.githubusercontent.com/covid19india/api/gh-pages/raw_data.json"},r.a.createElement(i.a,null)," ",r.a.createElement("span",null,"JSON")),r.a.createElement("a",{className:"button",target:"_noblank",href:"https://raw.githubusercontent.com/covid19india/api/gh-pages/csv/latest/raw_data.csv"},r.a.createElement(i.a,null)," ",r.a.createElement("span",null,"CSV")))}),(function(){return!0})),o=a(228),d=a(193);var m=function(e){var t=e.logs,a=e.summary,n=e.setModal,c=e.setPatient,l=e.expand,i=e.applyClass;return r.a.createElement("div",{className:"Patients fadeInUp",style:{animationDelay:"1s"}},Object.keys(t).slice(a?-1:0).map((function(e,s){return"Invalid Date"!==e?r.a.createElement(r.a.Fragment,{key:s},r.a.createElement("h5",{className:"daylabel"},Object(d.a)(new Date(e),"dd MMM, yyyy")," ","("+t[e].length+")"),r.a.createElement("div",{key:s,className:"day ".concat(a?"summary":"")},t[e].slice(a?-40:0).map((function(e,t){return r.a.createElement("div",{key:t,className:i(e),onClick:function(){n(!0),c(e)}},r.a.createElement("h3",null,l?"P".concat(e.patientnumber):""))})))):null})))},u=a(490),E=a(485),h=a(200),p=a(492);var f=function(e){var t=Object(l.useState)(e.patients),a=Object(c.a)(t,2),n=a[0],i=a[1],s=Object(l.useState)(e.patients.slice(-1)),o=Object(c.a)(s,2),d=o[0],f=o[1],y=Object(l.useState)({}),v=Object(c.a)(y,2),b=v[0],g=v[1],N=Object(l.useState)(!1),j=Object(c.a)(N,2),O=j[0],k=j[1];Object(h.a)(O),window.onclick=function(e){var t=document.getElementById("modal");e.target===t&&k(!1)},Object(p.a)("Escape",(function(){k(!1)})),Object(l.useEffect)((function(){i(e.patients)}),[e.patients]);var w=Object(l.useCallback)((function(e){for(var t={},a=0;a<e.length;a++){var n=new Date(Object(u.a)(e[a].dateannounced,"dd/MM/yyyy",new Date));if(n in t){var c=t[n];c.push(e[a]),t[n]=c}else{var l=[];l.push(e[a]),t[n]=l}}g(t)}),[]);return Object(l.useEffect)((function(){n.length&&w(n)}),[w,n]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{logs:b,setModal:k,setPatient:f,expand:e.expand,applyClass:function(t){switch(t){case"genders":return function(t){return"patient-card ".concat("F"===t.gender?"is-femme":"M"===t.gender?"is-male":""," ").concat(e.expand?"":"is-small")};case"transmission":return function(t){return"patient-card ".concat("Local"===t.typeoftransmission?"is-local":"Imported"===t.typeoftransmission?"is-imported":""," ").concat(e.expand?"":"is-small")};case"nationality":return function(t){return"patient-card ".concat("India"===t.nationality?"is-in":"Myanmar"===t.nationality?"is-mm":"Indonesia"===t.nationality?"is-id":"United Kingdom"===t.nationality?"is-uk":"United States of America"===t.nationality?"is-us":"Thailand"===t.nationality?"is-th":"Phillipines"===t.nationality?"is-ph":"Italy"===t.nationality?"is-it":"Canada"===t.nationality?"is-ca":""," ").concat(e.expand?"":"is-small")};case"age":default:return function(t){return"patient-card ".concat(e.expand?"":"is-small")}}}(e.colorMode)}),O&&r.a.createElement("div",{className:"modal",id:"modal"},r.a.createElement("div",{className:"modal-content ".concat(O?"fadeInUp":"fadeOutDown")},r.a.createElement("div",{className:"close-button"},r.a.createElement(E.a,{onClick:function(){k(!1)}})),r.a.createElement("div",{className:"modal-top"},r.a.createElement("h1",null,"#",d.patientnumber)),r.a.createElement("div",{className:"meta"},r.a.createElement("h5",null,"Date Announced"),r.a.createElement("h3",null,d.dateannounced?d.dateannounced:"?"),r.a.createElement("h5",null,"Contracted from"),r.a.createElement("h3",{className:"contracted-from",onClick:function(){!function(e){if(""!==e)try{var t=e.slice(1);n.map((function(e,a){e.patientnumber===t&&f(e)}))}catch(a){console.log(a)}}(d.contractedfromwhichpatientsuspected)}},d.contractedfromwhichpatientsuspected?d.contractedfromwhichpatientsuspected:"?"),r.a.createElement("h5",null,"Detected City"),r.a.createElement("h3",null,d.detectedcity?d.detectedcity:"?"),r.a.createElement("h5",null,"Detected District"),r.a.createElement("h3",null,d.detecteddistrict?d.detecteddistrict:"?"),r.a.createElement("h5",null,"Detected State"),r.a.createElement("h3",null,d.detectedstate?d.detectedstate:"?"),r.a.createElement("h5",null,"Nationality"),r.a.createElement("h3",null,d.nationality?d.nationality:"?"),r.a.createElement("h5",null,"Age"),r.a.createElement("h3",null,d.agebracket?d.agebracket:"?"),r.a.createElement("h5",null,"Gender"),r.a.createElement("h3",null,d.gender?d.gender:"?"),r.a.createElement("h5",null,"State Patient Number"),r.a.createElement("h3",null,d.statepatientnumber?d.statepatientnumber:"?"),r.a.createElement("h5",null,"Type of transmission"),r.a.createElement("h3",null,d.typeoftransmission?d.typeoftransmission:"?")),r.a.createElement("div",{className:"notes"},r.a.createElement("h5",null,"Notes"),r.a.createElement("h3",null,d.notes)),r.a.createElement("h5",null,"Source 1"),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:d.source1,target:"_noblank"},d.source1)),r.a.createElement("h5",null,"Source 2"),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:d.source2,target:"_noblank"},d.source2)),r.a.createElement("h5",null,"Source 3"),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:d.source3,target:"_noblank"},d.source3)))))},y=a(58),v=a(93),b=a.n(v),g=a(184),N=a(486),j=a(414),O=a.n(j),k=a(487),w=a(92),D=a(20),S=a(199);function I(e,t){var a=Object.keys(t);return e.filter((function(e){return a.every((function(a){return!t[a].length||e[a]===t[a]}))}))}t.default=function(e){var t=Object(l.useState)(!1),a=Object(c.a)(t,2),i=a[0],m=a[1],h=Object(l.useState)([]),p=Object(c.a)(h,2),v=p[0],j=p[1],C=Object(l.useState)([]),M=Object(c.a)(C,2),x=M[0],_=M[1],A=Object(D.h)().pathname,U=Object(l.useState)("genders"),P=Object(c.a)(U,2),T=P[0],V=P[1],B=Object(l.useState)(!1),J=Object(c.a)(B,2),F=J[0],G=J[1],L=Object(l.useState)(Object(g.a)(new Date,1)),q=Object(c.a)(L,2),z=q[0],H=q[1],K=Object(S.a)("showReminder",!0),R=Object(c.a)(K,2),W=R[0],Q=R[1],X=Object(l.useState)(!1),Y=Object(c.a)(X,2),Z=Y[0],$=Y[1],ee=Object(l.useState)(!0),te=Object(c.a)(ee,2),ae=te[0],ne=te[1],ce=Object(l.useState)({detectedstate:"",detecteddistrict:"",detectedcity:"",dateannounced:Object(d.a)(Object(g.a)(new Date,1),"dd/MM/yyyy")}),le=Object(c.a)(ce,2),re=le[0],ie=le[1];Object(l.useEffect)((function(){window.scrollTo(0,0)}),[A]);var se=Object(l.useCallback)((function(){var e=Object(u.a)(re.dateannounced,"dd/MM/yyyy",new Date);return Object(N.a)(e,y.o.v1)?1:Object(N.a)(e,y.o.v2)?2:Object(N.a)(e,y.o.v3)?3:Object(N.a)(e,y.o.v4)?4:Object(N.a)(e,y.o.v5)?5:void 0}),[re.dateannounced]);Object(l.useEffect)((function(){try{b.a.get("https://api.covid19india.org/raw_data".concat(se(),".json")).then((function(e){j(e.data.raw_data.reverse()),m(!0)}))}catch(e){console.log(e)}}),[re.dateannounced,se]),Object(l.useEffect)((function(){document.querySelectorAll(".react-date-picker__inputGroup input").forEach((function(e){return e.setAttribute("readOnly",!0)}))}),[]);var oe=function(e,t){ie((function(a){var c=Object(n.a)({},a);if(c[e]=t,"detectedstate"===e){var l=document.getElementById("district"),r=document.getElementById("city");l.style.display=""===t?"none":"inline",r.style.display="none",l.selectedIndex=0,r.selectedIndex=0,c.detecteddistrict="",c.detectedcity=""}else if("detecteddistrict"===e){var i=document.getElementById("city");i.style.display=""===t?"none":"inline",i.selectedIndex=0,c.detectedcity=""}return c}))};function de(e,t){var a=new Set(e.map((function(e){return e[t]})));return a.size>1&&a.add(""),"dateannounced"===t?Array.from(a):Array.from(a).sort()}return Object(l.useEffect)((function(){I(v,re).length>0?(_(I(v,re)),$(!1),ne(!1)):$(!0)}),[v,re]),r.a.createElement("div",{className:"Demographics"},r.a.createElement(w.a,null,r.a.createElement("title",null,"Demographics - covid19india.org"),r.a.createElement("meta",{name:"title",content:"Demographics - covid19india.org"}),r.a.createElement("meta",{name:"description",content:"A demographical overview of the Indian population affected by the coronavirus."})),r.a.createElement("div",{className:"filters fadeInUp",style:{animationDelay:"0.2s"}},r.a.createElement("div",{className:"filters-left"},r.a.createElement("div",{className:"select"},r.a.createElement("select",{style:{animationDelay:"0.3s"},id:"state",onChange:function(e){oe("detectedstate",e.target.value)},defaultValue:re.detectedstate},r.a.createElement("option",{value:"",disabled:!0},"Select State"),de(v,"detectedstate").map((function(e,t){return r.a.createElement("option",{key:t,value:e},""===e?"All":e)})))),r.a.createElement("div",{className:"select"},r.a.createElement("select",{style:{animationDelay:"0.4s",display:"none"},id:"district",onChange:function(e){oe("detecteddistrict",e.target.value)},defaultValue:re.detecteddistrict},r.a.createElement("option",{value:"",disabled:!0},"Select District"),de(I(v,{detectedstate:re.detectedstate}),"detecteddistrict").map((function(e,t){return r.a.createElement("option",{key:t,value:e},""===e?"All":e)})))),r.a.createElement("div",{className:"select"},r.a.createElement("select",{style:{animationDelay:"0.4s",display:"none"},id:"city",onChange:function(e){oe("detectedcity",e.target.value)},defaultValue:re.detectedcity},r.a.createElement("option",{value:"",disabled:!0},"Select City"),de(I(v,{detectedstate:re.detectedstate,detecteddistrict:re.detecteddistrict}),"detectedcity").map((function(e,t){return r.a.createElement("option",{key:t,value:e},""===e?"All":e)})))),r.a.createElement("div",{className:"select"},r.a.createElement("select",{style:{animationDelay:"0.4s",display:"none"},id:"city",onChange:function(e){oe("detectedcity",e.target.value)},defaultValue:re.detectedcity},r.a.createElement("option",{value:"",disabled:!0},"Select City"),de(I(v,{detectedstate:re.detectedstate,detecteddistrict:re.detecteddistrict}),"detectedcity").map((function(e,t){return r.a.createElement("option",{key:t,value:e},""===e?"All":e)})))),r.a.createElement("div",{className:"select"},r.a.createElement(O.a,{value:z,minDate:new Date("30-Jan-2020"),maxDate:Object(g.a)(new Date,1),format:"dd/MM/y",calendarIcon:r.a.createElement(k.a,null),inputProps:onkeydown=function(e){e.preventDefault()},clearIcon:r.a.createElement(E.a,null),onChange:function(e){H(e);var t=e?Object(d.a)(e,"dd/MM/yyyy"):"";oe("dateannounced",t)}}))),r.a.createElement("div",{className:"legend"},"genders"===T&&r.a.createElement("div",{className:"legend-left"},r.a.createElement("div",{className:"circle is-female"}),r.a.createElement("h5",{className:"is-female"},"Female"),r.a.createElement("div",{className:"circle is-male"}),r.a.createElement("h5",{className:"is-male"},"Male"),r.a.createElement("div",{className:"circle"}),r.a.createElement("h5",{className:""},"Unknown")),"transmission"===T&&r.a.createElement("div",{className:"legend-left"},r.a.createElement("div",{className:"circle is-local"}),r.a.createElement("h5",{className:"is-local"},"Local"),r.a.createElement("div",{className:"circle is-imported"}),r.a.createElement("h5",{className:"is-imported"},"Imported"),r.a.createElement("div",{className:"circle"}),r.a.createElement("h5",{className:""},"Unknown")),"nationality"===T&&r.a.createElement("div",{className:"legend-left nationality"},r.a.createElement("div",{className:"circle is-in"}),r.a.createElement("h5",{className:"is-in"},"In"),r.a.createElement("div",{className:"circle is-uk"}),r.a.createElement("h5",{className:"is-uk"},"Uk"),r.a.createElement("div",{className:"circle is-us"}),r.a.createElement("h5",{className:"is-us"},"Us"),r.a.createElement("div",{className:"circle is-th"}),r.a.createElement("h5",{className:"is-thailand"},"Th"),r.a.createElement("div",{className:"circle is-ph"}),r.a.createElement("h5",{className:"is-ph"},"Ph"),r.a.createElement("div",{className:"circle is-it"}),r.a.createElement("h5",{className:"is-it"},"It"),r.a.createElement("div",{className:"circle is-ca"}),r.a.createElement("h5",{className:"is-ca"},"Ca"),r.a.createElement("div",{className:"circle is-id"}),r.a.createElement("h5",{className:"is-id"},"Id"),r.a.createElement("div",{className:"circle is-mm"}),r.a.createElement("h5",{className:"is-mm"},"Mm")),r.a.createElement("div",{className:"select ".concat(T)},r.a.createElement("select",{style:{animationDelay:"0.4s"},onChange:function(e){V(e.target.value)},defaultValue:T},r.a.createElement("option",{value:"genders"},"Genders"),r.a.createElement("option",{value:"transmission"},"Transmission"),r.a.createElement("option",{value:"nationality"},"Nationality"))))),r.a.createElement("div",{className:"header fadeInUp",style:{animationDelay:"0.3s"}},r.a.createElement("div",null,r.a.createElement("h1",null,"Demographics"),r.a.createElement("div",{className:"deep-dive ".concat(Z||0===x.length?"disabled":"")},r.a.createElement("h5",null,"Expand"),r.a.createElement("input",{type:"checkbox",checked:F,disabled:Z||0===x.length,onChange:function(e){G(!F)},className:"switch"}))),r.a.createElement("h6",{className:"disclaimer"},"Some of the data provided might be missing/unknown as the details have not been shared by the state/central governments")),r.a.createElement("div",{className:"reminder fadeInUp",style:{animationDelay:"1s",display:W?"":"none"}},r.a.createElement(E.a,{onClick:function(){Q(!1)}}),r.a.createElement("p",null,"It is important that we do not think of these as just tiny boxes, numbers, or just another part of statistics - among these are our neighbors, our teachers, our healthcare workers, our supermarket vendors, our friends, our co-workers, our children or our grandparents.",r.a.createElement("br",null),r.a.createElement("br",null),"Among these are our people.")),i&&r.a.createElement("div",{className:"patientdb-wrapper"},ae?" ":Z?r.a.createElement("div",{className:"no-result"},r.a.createElement("h5",null,"There were no new cases in",r.a.createElement("span",null,re.detectedcity.length>0?" ".concat(re.detectedcity,", "):"",re.detecteddistrict.length>0?" ".concat(re.detecteddistrict,", "):""," "+re.detectedstate)," ","on ",r.a.createElement("span",null,re.dateannounced,"."))):r.a.createElement(f,{patients:x,colorMode:T,expand:F})),r.a.createElement(s,{patients:v}),r.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=Demographics.fae72037.chunk.js.map