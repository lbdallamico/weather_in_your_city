(this.webpackJsonpconsultatempo=this.webpackJsonpconsultatempo||[]).push([[0],{10:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),i=c.n(s),r=c(2),o=c(0);var d=function(){var e=1,t=2,c=3,n=4,s="Pesquisar",i="Pesquisando ...",d=Object(a.useState)(""),l=Object(r.a)(d,2),j=l[0],b=l[1],u=Object(a.useState)(null),m=Object(r.a)(u,2),h=m[0],O=m[1],x=Object(a.useState)(e),p=Object(r.a)(x,2),v=p[0],f=p[1],g=function(){fetch("".concat("http://api.weatherapi.com/v1/","current.json?key=").concat("e751ea9cf5bc4fcbbb3225428211810","&q=").concat(j,"&lang=pt")).then((function(e){if(200===e.status)return b(""),f(c),e.json();400===e.status?(f(n),alert("Cidade n\xe3o encontrada")):401===e.status&&(f(n),alert("Acesso a API desativada"))})).then((function(e){O(e)}))};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-4",children:Object(o.jsx)("a",{className:"navbar-brand",href:"#search",children:"Tempo na sua cidade"})})}),Object(o.jsxs)("main",{className:"container",id:"search",children:[Object(o.jsxs)("div",{className:"jumbotron",children:[Object(o.jsx)("h1",{children:"Verique agora a previs\xe3o do tempo na sua cidade!"}),Object(o.jsx)("p",{className:"lead",children:"Digite da sua cidade no campo abaixo o nome da sua cidade em seguida clique em pesquisar."}),Object(o.jsx)("div",{className:"row mb-4",children:Object(o.jsx)("div",{class:"col-md-6",children:Object(o.jsx)("input",{type:"text",class:"form-control",value:j,onChange:function(e){return b(e.target.value)}})})}),Object(o.jsx)("button",{className:"btn btn-lg btn-primary",onClick:function(){f(t),g()},children:v===t?i:s}),h?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"mt-4 d-flex align-items-center",children:[Object(o.jsx)("div",{className:"col-sm-1",children:Object(o.jsx)("img",{src:"".concat(h.current.condition.icon),alt:"Weather Icon"})}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("h2",{children:["Clima em ",h.location.name," - ",h.location.region," - ",h.location.country]}),Object(o.jsxs)("h5",{children:["Latitude: ",h.location.lat,", Longitude: ",h.location.lon]}),Object(o.jsxs)("h3",{children:["Hoje o dia est\xe1: ",h.current.condition.text]}),Object(o.jsxs)("p",{className:"lead",children:["Temperatura: ",h.current.temp_c," / ",h.current.temp_f," \u2103"]}),Object(o.jsxs)("p",{children:["\xdaltima atualiza\xe7\xe3o em ",h.current.last_updated]}),Object(o.jsxs)("p",{children:["Umidade relativa: ",h.current.humidity,"%"]}),Object(o.jsxs)("p",{children:["Velocidade do vento: ",h.current.wind_kph," km/h"]})]})]})}):null]}),Object(o.jsx)("div",{children:Object(o.jsx)("footer",{children:"Desenvolvido por Lucas Dallamico"})})]})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.36e6ae68.chunk.js.map