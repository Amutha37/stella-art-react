(this["webpackJsonpstella-art-react"]=this["webpackJsonpstella-art-react"]||[]).push([[15],{105:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(101),o=a(102),c=a(8),i=a(103),r=a.n(i),l=a(11),d=(a(105),a(123)),j=a(122),m=a(0),b=function(){var e=Object(n.useState)({}),t=Object(c.a)(e,2),a=t[0],i=t[1],b=Object(n.useState)({}),p=Object(c.a)(b,2),h=p[0],u=p[1],x=Object(n.useState)({}),O=Object(c.a)(x,2),v=O[0],g=O[1],f=Object(n.useState)(!1),N=Object(c.a)(f,2),y=N[0],w=N[1],C=function(e){var t=Object(o.a)({},a);t[e.target.name]=e.target.value,i(t)},S=function(){var e=Object(s.a)(r.a.mark((function e(t){var n,s,o,c,i,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(!0),d.a.sendForm("service_8wvri2s","template_l28p8xt",t.target,"user_A0rfHSP2yohzhMSJ4oDEU").then((function(e){console.log(e)})).catch((function(e){return console.log(e)})),n=new Headers,e.next=6,n.append("Content-Type","application/json");case 6:return s={method:"post",headers:n,redirect:"follow",body:JSON.stringify([[a.fname,a.lname,a.email,a.message,(new Date).toLocaleString()]])},fetch("https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Clients",s).then((function(e){return e.text()})).catch((function(e){return console.log("error",e)})),o=new Headers,e.next=11,o.append("Content-Type","application/json");case 11:return c={method:"post",headers:n,redirect:"follow",body:JSON.stringify([[h.google,h.facebook,h.instagram,h.bluethumb,h.family,h.other,(new Date).toLocaleString()]])},fetch("https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Survey",c).then((function(e){return e.text()})).catch((function(e){return console.log("error",e)})),i=new Headers,e.next=16,i.append("Content-Type","application/json");case 16:l={method:"post",headers:n,redirect:"follow",body:JSON.stringify([[v.Commissions,v.Portrait,v.Classes,v.General,(new Date).toLocaleString()]])},fetch("https://v1.nocodeapi.com/stellak/google_sheets/ibmNMYYgtHKNLrwp?tabId=Enquiries",l).then((function(e){return e.text()})).catch((function(e){return console.log("error",e)})),F();case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){var t=Object(o.a)({},h);t[e.target.value]=1,u(t)},F=function(){a.fname=" ",a.lname=" ",a.email=" ",a.message=" ",h.google="",h.facebook="",h.instagram="",h.bluethumb="",h.family="",h.other="",v.Classes="",v.Portrait="",v.Commissions="",v.General=""};return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"contact-main ",children:[Object(m.jsx)("div",{className:"bg-image"}),Object(m.jsx)("div",{className:"contact-note",children:Object(m.jsx)("p",{children:"Please fell free to contact me for any enquiries or comments and I will get back to you. If you are an SEO website marketer or any other related marketer, please do not bother me as I will not respond."})}),Object(m.jsx)("div",{className:"contact-survey-wrapper",children:Object(m.jsxs)("div",{className:"form-container",children:[Object(m.jsx)("p",{id:"contact-form-title",children:"Contact Form"}),Object(m.jsxs)("form",{className:"input-form",required:!0,onSubmit:S,children:[Object(m.jsxs)("div",{className:"login",children:[Object(m.jsx)("h4",{children:" Enquiry : "}),Object(m.jsx)("div",{id:"select_service",children:Object(m.jsx)(j.a,{options:l.b,onChange:function(e){var t=e.label;console.log(t),g({});var a=Object(o.a)({},v);a[t]=1,g(a)}})}),Object(m.jsx)("input",{name:"fname",type:"text",required:!0,placeholder:"First name",onChange:C,className:"input"}),Object(m.jsx)("input",{name:"lname",type:"text",placeholder:"Last Name",onChange:C,className:"input"})]}),Object(m.jsx)("div",{className:"login",children:Object(m.jsx)("input",{name:"email",type:"email",required:!0,placeholder:"Your Email Address",onChange:C,className:"input"})}),Object(m.jsx)("div",{className:"msg",children:Object(m.jsx)("textarea",{name:"message",required:!0,className:"area",placeholder:"Leave a Message",onChange:C})}),Object(m.jsxs)("div",{className:"survey",children:[Object(m.jsx)("div",{className:"title",children:"How did you find my website?"}),Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsxs)("div",{className:"box",children:[Object(m.jsx)("input",{type:"radio",name:"select",id:"option-1",value:"google",onChange:k}),Object(m.jsx)("input",{type:"radio",name:"select",id:"option-2",value:"facebook",onChange:k}),Object(m.jsx)("input",{type:"radio",name:"select",id:"option-3",value:"instagram",onChange:k}),Object(m.jsx)("input",{type:"radio",name:"select",id:"option-4",value:"bluethumb",onChange:k}),Object(m.jsx)("input",{type:"radio",name:"select",id:"option-5",value:"family",onChange:k}),Object(m.jsx)("input",{type:"radio",name:"select",id:"option-6",value:"other",onChange:k}),Object(m.jsxs)("label",{htmlFor:"option-1",type:"radio",className:"option-1",children:[Object(m.jsx)("div",{className:"dot"}),Object(m.jsx)("div",{className:"text",children:"Google"})]}),Object(m.jsxs)("label",{htmlFor:"option-2",type:"radio",className:"option-2",children:[Object(m.jsx)("div",{className:"dot"}),Object(m.jsx)("div",{className:"text",children:"Facebook"})]}),Object(m.jsxs)("label",{htmlFor:"option-3",type:"radio",className:"option-3",children:[Object(m.jsx)("div",{className:"dot"}),Object(m.jsx)("div",{className:"text",children:"Instagram"})]}),Object(m.jsxs)("label",{htmlFor:"option-4",type:"radio",className:"option-4",children:[Object(m.jsx)("div",{className:"dot"}),Object(m.jsx)("div",{className:"text",children:"Bluethumb"})]}),Object(m.jsxs)("label",{htmlFor:"option-5",type:"radio",className:"option-5",children:[Object(m.jsx)("div",{className:"dot"}),Object(m.jsx)("div",{className:"text",children:"Family/friend"})]}),Object(m.jsxs)("label",{htmlFor:"option-6",type:"radio",className:"option-6",children:[Object(m.jsx)("div",{className:"dot"}),Object(m.jsx)("div",{className:"text",children:"Other"})]})]})})]}),Object(m.jsx)("div",{id:"thank-you-container",children:y?Object(m.jsx)("p",{id:"thank-you",children:" Submited Thank you!"}):Object(m.jsx)("div",{children:Object(m.jsx)("input",{className:"btn",name:"submit",type:"submit",value:"Submit"})})})]})]})})]})})},p=a(19);t.default=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(b,{}),Object(m.jsx)(p.a,{})]})}}}]);
//# sourceMappingURL=15.e6da3b14.chunk.js.map