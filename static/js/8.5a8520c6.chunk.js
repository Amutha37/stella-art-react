(this["webpackJsonpstella-art-react"]=this["webpackJsonpstella-art-react"]||[]).push([[8],{130:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(94),i=n(18),a=n(0);t.default=function(){return Object(a.jsx)(r.Fragment,{children:Object(a.jsx)(s.a,{slideImages:i.f,blueThumb:""})})}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(12);var s=n(17);function i(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},93:function(e,t,n){},94:function(e,t,n){"use strict";var r=n(92),s=n(8),i=n(1),a=n(0);var c=function(e){var t=e.slides,n=e.currentSlide,r=e.status,s=e.PrintQuotes;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"row",children:t.map((function(e,t){return Object(a.jsx)("div",{className:"column",children:Object(a.jsx)("img",{className:"cursor ".concat(r[t]?"current":"demo"),src:e.image,alt:e.name,id:e.id,onClick:n})},t)}))}),s]})};var l=function(e){var t=e.plusSlides;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"prev",value:"-1",onClick:t,children:"\u25c0\ufe0e"}),Object(a.jsx)("button",{className:"next",value:"1",onClick:t,children:"\u25ba"})]})},u=function(e){var t=e.status,n=e.slides,r=e.slideIndex,s=e.plusSlides,i=(e.PrintMessage,e.PrintBlueThumb);return Object(a.jsxs)(a.Fragment,{children:[n.map((function(e,n){return Object(a.jsx)("div",{className:"mySlides",style:t[n]?{display:"block"}:{display:"none"},children:Object(a.jsx)("img",{src:e.image,alt:e.name})},n)})),Object(a.jsx)(l,{plusSlides:s}),Object(a.jsxs)("div",{id:"caption",children:[Object(a.jsx)("div",{id:"caption_left",children:i}),Object(a.jsxs)("div",{id:"caption_right",children:[Object(a.jsxs)("p",{children:[n[r-1].name," "]})," ",Object(a.jsx)("p",{className:"imagesize",children:n[r-1].size})]})]})]})};n(93),t.a=function(e){var t=e.slideImages,n=e.PrintMessage,l=e.PrintQuotes,d=e.blueThumb,o=t.length,j=Object(i.useState)(1),b=Object(s.a)(j,2),m=b[0],f=b[1],O=Object(i.useState)(new Array(o).fill().map((function(e,t){return 0===t}))),h=Object(s.a)(O,2),v=h[0],x=h[1];var p=function(e){var t=Object(r.a)(v);t.fill(!1),t[e-1]=!t[e-1],x(t),f(e)};return Object(a.jsx)("div",{className:"natureContainer",children:Object(a.jsxs)("div",{className:"containernature",children:[Object(a.jsx)(u,{slideIndex:m,slides:t,status:v,plusSlides:function(e){var t=Number(e.target.value),n=m+t;p(n<1?o:n>o?1:n)},PrintMessage:n,PrintBlueThumb:d}),Object(a.jsx)(c,{slides:t,currentSlide:function(e){var t=Number(e.target.id);p(t)},status:v,slideIndex:m,PrintQuotes:l})]})})}}}]);
//# sourceMappingURL=8.5a8520c6.chunk.js.map