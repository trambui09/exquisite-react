(this["webpackJsonpexquisite-react"]=this["webpackJsonpexquisite-react"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(0),a=t(1),s=t(6),o=t.n(s),c=(t(14),t(15),t(7)),r=t(2),l=(t(16),t(8)),u=(t(17),function(e){var n=Object(a.useState)({adj1:"",noun1:"",adv:"",verb:"",adj2:"",noun2:""}),t=Object(r.a)(n,2),s=t[0],o=t[1],c=function(e){var n=e.target,t=n.name,i=n.value,a=Object(l.a)({},s);a[t]=i,o(a)},u=function(e){return""!==e};return Object(i.jsxs)("div",{className:"PlayerSubmissionForm",children:[Object(i.jsxs)("h3",{children:["Player Submission Form for Player #",e.index]}),Object(i.jsxs)("form",{className:"PlayerSubmissionForm__form",onSubmit:function(n){n.preventDefault(),e.sendSubmission(s),o({adj1:"",noun1:"",adv:"",verb:"",adj2:"",noun2:""})},children:[Object(i.jsxs)("div",{className:"PlayerSubmissionForm__poem-inputs",children:[Object(i.jsx)("p",{children:"The"}),Object(i.jsx)("input",{placeholder:"adjective",type:"text",name:"adj1","data-testid":"adj1",value:s.adj1,onChange:c,className:u(s.adj1)?"PlayerSubmissionFormt__input--valid":"PlayerSubmissionFormt__input--invalid"}),Object(i.jsx)("input",{placeholder:"noun",type:"text",name:"noun1","data-testid":"noun1",value:s.noun1,onChange:c,className:u(s.noun1)?"PlayerSubmissionFormt__input--valid":"PlayerSubmissionFormt__input--invalid"}),Object(i.jsx)("input",{placeholder:"adverb",type:"text",name:"adv","data-testid":"adverb1",value:s.adv,onChange:c,className:u(s.adv)?"PlayerSubmissionFormt__input--valid":"PlayerSubmissionFormt__input--invalid"}),Object(i.jsx)("input",{placeholder:"verb",type:"text",name:"verb","data-testid":"verb1",value:s.verb,onChange:c,className:u(s.verb)?"PlayerSubmissionFormt__input--valid":"PlayerSubmissionFormt__input--invalid"}),Object(i.jsx)("p",{children:"the"}),Object(i.jsx)("input",{placeholder:"adjective",type:"text",name:"adj2","data-testid":"adj2",value:s.adj2,onChange:c,className:u(s.adj2)?"PlayerSubmissionFormt__input--valid":"PlayerSubmissionFormt__input--invalid"}),Object(i.jsx)("input",{placeholder:"noun",type:"text",name:"noun2","data-testid":"noun2",value:s.noun2,onChange:c,className:u(s.noun2)?"PlayerSubmissionFormt__input--valid":"PlayerSubmissionFormt__input--invalid"}),Object(i.jsx)("p",{children:"."})]}),Object(i.jsx)("div",{className:"PlayerSubmissionForm__submit",children:Object(i.jsx)("input",{type:"submit",value:"Submit Line",className:"PlayerSubmissionForm__submit-btn"})})]})]})}),d=(t(18),function(e){var n=function(n){n.preventDefault(),e.revealPoem()},t=e.submissions.map((function(e){return Object(i.jsx)("li",{className:"FinalPoem__poem--listitems",children:e},e)}));return Object(i.jsx)("div",{className:"FinalPoem",children:e.isSubmitted?Object(i.jsxs)("section",{className:"FinalPoem__poem",children:[Object(i.jsx)("h3",{children:"Final Poem"}),Object(i.jsx)("ul",{className:"FinalPoem__poem--list",children:t})]}):Object(i.jsx)("div",{className:"FinalPoem__reveal-btn-container",children:Object(i.jsx)("input",{onClick:n,type:"button",value:"We are finished: Reveal the Poem",className:"FinalPoem__reveal-btn"})})})}),m=(t(19),function(e){return Object(i.jsx)("div",{className:"RecentSubmission",children:function(){if(void 0!==e.submission)return[Object(i.jsx)("h3",{children:"The Most Recent Submission"}),Object(i.jsx)("p",{className:"RecentSubmission__submission",children:e.submission})]}()})}),b=["The",{key:"adj1",placeholder:"adjective"},{key:"noun1",placeholder:"noun"},{key:"adv",placeholder:"adverb"},{key:"verb",placeholder:"verb"},"the",{key:"adj2",placeholder:"adjective"},{key:"noun2",placeholder:"noun"},"."],j=function(){var e=b.map((function(e){return e.key?e.placeholder:e})).join(" "),n=Object(a.useState)(1),t=Object(r.a)(n,2),s=t[0],o=t[1],l=Object(a.useState)([]),j=Object(r.a)(l,2),h=j[0],p=j[1],v=Object(a.useState)(!1),x=Object(r.a)(v,2),O=x[0],_=x[1],y=function(e){var n=b.map((function(n){return"".concat(n.key)in e?e["".concat(n.key)]:n}));o(s+1),p([].concat(Object(c.a)(h),[n.join(" ")]))},f=function(){_(!O)};return Object(i.jsxs)("div",{className:"Game",children:[Object(i.jsx)("h2",{children:"Game"}),Object(i.jsxs)("p",{children:["Each player should take turns filling out and submitting the form below. Each turn should be done individually and ",Object(i.jsx)("em",{children:"in secret!"})," Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem."]}),Object(i.jsx)("p",{children:"Please follow the following format for your poetry submission:"}),Object(i.jsx)("p",{className:"Game__format-example",children:e}),O?Object(i.jsx)(d,{isSubmitted:O,submissions:h,revealPoem:f}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(m,{submission:h[h.length-1]}),Object(i.jsx)(u,{index:s,sendSubmission:y,fields:b}),Object(i.jsx)(d,{isSubmitted:O,submissions:h,revealPoem:f})]})]})},h=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{className:"App__header",children:[Object(i.jsx)("h1",{className:"App__title",children:"Exquisite Corpse"}),Object(i.jsx)("p",{className:"App__intro-text",children:'Exquisite corpse, also known as exquisite cadaver (from the original French term cadavre exquis), is a method by which a collection of words or images is collectively assembled. Each collaborator adds to a composition in sequence, either by following a rule (e.g. "The adjective noun adverb verb the adjective noun." as in "The green duck sweetly sang the dreadful dirge.") or by being allowed to see only the end of what the previous person contributed.'})]}),Object(i.jsx)(j,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(i.jsx)(h,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[20,1,2]]]);
//# sourceMappingURL=main.66077b82.chunk.js.map