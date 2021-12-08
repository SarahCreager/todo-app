(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{166:function(e,t,n){},265:function(e,t){},267:function(e,t){},281:function(e,t){},283:function(e,t){},311:function(e,t){},313:function(e,t){},314:function(e,t){},319:function(e,t){},321:function(e,t){},327:function(e,t){},329:function(e,t){},348:function(e,t){},360:function(e,t){},363:function(e,t){},380:function(e,t,n){},405:function(e,t,n){},406:function(e,t,n){},407:function(e,t,n){},408:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(15),i=n.n(r),s=n(9),o=n(1),u=a.a.createContext();var l=function(e){var t=Object(c.useState)(4),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(!1),l=Object(s.a)(i,2),d=l[0],j=l[1],b={numberOfItems:a,showCompleted:d,setNumberOfItems:function(e){r(e)},setCompleted:function(e){j(e)}};return Object(o.jsx)(u.Provider,{value:b,children:e.children})},d=n(14),j=n.n(d),b=n(21),p=n(63),O=n.n(p),h=n(31),f=n.n(h),m=n(64),x=n.n(m),g=a.a.createContext(),v=Object({NODE_ENV:"production",PUBLIC_URL:"/todo-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_URL:"http://localhost:3003"}).REACT_APP_SECRET||"secretstring",C="http://localhost:3003";var S=function(e){var t=e.children,n=Object(c.useState)(!1),a=Object(s.a)(n,2),r=a[0],i=a[1],u=Object(c.useState)({}),l=Object(s.a)(u,2),d=l[0],p=l[1],h=Object(c.useState)(null),m=Object(s.a)(h,2),S=m[0],y=m[1],w={isLoggedIn:r,user:d,isAuthorized:function(e){var t;return null===d||void 0===d||null===(t=d.capabilities)||void 0===t?void 0:t.includes(e)},login:function(e,t){return I.apply(this,arguments)},token:S,logout:function(){r&&T(!1,null,{})},setLogInState:T,register:function(e,t){return D.apply(this,arguments)}};function I(){return(I=Object(b.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==t&&""!==n||alert("please enter username and password"),e.prev=1,e.next=4,f.a.post("".concat(C,"/signin"),{},{auth:{username:t,password:n}});case 4:c=e.sent,k(x.a.sign(c.data.user,v)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("login error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function k(e){try{T(!0,e,x.a.verify(e,v))}catch(t){T(!1,null,{}),console.log("Error validating token:",t)}}function T(e,t,n){O.a.save("auth",null===n||void 0===n?void 0:n.token),p(n),i(e),y(t)}function D(){return(D=Object(b.a)(j.a.mark((function e(t,n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return""!==t&&""!==n||alert("please enter username and password"),e.prev=1,e.next=4,f.a.post("".concat(C,"/signup"),{username:t,password:n,role:"admin"});case 4:c=e.sent,k(x.a.sign(c.data.user,v)),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=new URLSearchParams(window.location.search),t=O.a.load("auth"),n=e.get("token");O.a.save("auth",n||t||null),k(n)}),[]),Object(o.jsx)(g.Provider,{value:w,children:t})},y=n(183),w=(n(166),n(30));var I=function(){var e=Object(c.useContext)(g),t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),l=u[0],d=u[1];function p(e){var t=e.target,n=t.name,c=t.value;"username"===n&&r(c),"password"===n&&d(c)}function O(){return(O=Object(b.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.login(a,l);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(w.a,{condition:e.isLoggedIn,children:Object(o.jsx)("button",{onClick:e.logout,children:"Log Out"})}),Object(o.jsx)(w.a,{condition:!e.isLoggedIn,children:Object(o.jsxs)("form",{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(o.jsx)("input",{placeholder:"username",name:"username",onChange:p}),Object(o.jsx)("input",{placeholder:"password",name:"password",onChange:p}),Object(o.jsx)("button",{type:"submit",children:"Login"})]})})]})};var k=function(e){var t=Object(c.useContext)(g),n=t.isLoggedIn,a=!e.capability||t.isAuthorized(e.capability),r=n&&a;return Object(o.jsx)(w.a,{condition:r,children:e.children})},T=n(62),D=n(93),E=function(e){var t=Object(c.useState)({}),n=Object(s.a)(t,2),a=n[0],r=n[1];return{handleChange:function(e){e.persist(),r((function(t){return Object(D.a)(Object(D.a)({},t),{},Object(T.a)({},e.target.name,e.target.value))}))},handleSubmit:function(t){t&&t.preventDefault(),e(a)},values:a}},L=n(416),P=n(415),A=n(47);n(380);var _=function(e){return Object(o.jsx)(P.c,{id:"navBar",children:Object(o.jsxs)(P.c.Group,{align:A.a.LEFT,children:[Object(o.jsxs)(P.c.Heading,{id:"heading",children:["To Do List: ",e.incomplete," items pending"]}),Object(o.jsx)(P.c.Divider,{})]})})};n(405);var F=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("h2",{children:"Add To Do Item"}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"To Do Item"}),Object(o.jsx)("input",{onChange:e.handleChange,name:"text",type:"text",placeholder:"Item Details"})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Assigned To"}),Object(o.jsx)("input",{onChange:e.handleChange,name:"assignee",type:"text",placeholder:"Assignee Name"})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Difficulty"}),Object(o.jsx)("input",{onChange:e.handleChange,defaultValue:3,type:"range",min:1,max:5,name:"difficulty"})]}),Object(o.jsx)("label",{children:Object(o.jsx)("button",{type:"submit",children:"Add Item"})})]})})},N=n(24),R=(n(406),function(e){var t=Object(c.useContext)(u);return Object(o.jsxs)(P.b,{id:"todoCard",interactive:!0,elevation:N.a.FOUR,children:[Object(o.jsx)("h5",{children:e.item.text}),Object(o.jsx)("p",{children:Object(o.jsxs)("small",{children:["Assigned to: ",e.item.assignee]})}),Object(o.jsx)("p",{children:Object(o.jsxs)("small",{children:["Difficulty: ",e.item.difficulty]})}),Object(o.jsx)(k,{capability:"update",children:Object(o.jsxs)(P.a,{id:"complete",onClick:function(){e.toggleComplete(e.item.id),!0===e.item.complete&&"false"===t.showCompleted&&e.deleteItem(e.item.id)},children:["Complete: ",e.item.complete.toString()]})}),Object(o.jsx)(k,{capability:"delete",children:Object(o.jsx)(P.a,{id:"delete",onClick:function(){return e.deleteItem(e.item.id)},children:"Delete"})})]},e.item.id)});n(407);var U=function(e){var t=Object(c.useContext)(u),n=Object(c.useState)(1),a=Object(s.a)(n,2),r=a[0],i=a[1];function l(e){"next"!==e.target.id?"prev"!==e.target.id||i(r-1):i(r+1)}var d=r*t.numberOfItems,j=d-t.numberOfItems,b=e.list.slice(j,d);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{id:"cardContainer",children:b.map((function(t){return Object(o.jsx)(R,{item:t,toggleComplete:e.toggleComplete,deleteItem:e.deleteItem},t.id)}))}),Object(o.jsxs)("div",{id:"nextPrevButtons",children:[r>1?Object(o.jsx)("button",{id:"prev",onClick:l,type:"button",children:"Back"}):null,e.list.length>t.numberOfItems?Object(o.jsx)("button",{id:"next",onClick:l,type:"button",children:"Next"}):null]})]})};n(408);var B=function(){var e=Object(c.useContext)(u),t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=JSON.stringify({numberOfItems:e.numberOfItems,showCompleted:e.showCompleted});localStorage.setItem("userPreferences",n),alert("view options saved!")},children:[Object(o.jsx)("h2",{children:"Change Your View"}),Object(o.jsxs)(P.e,{label:"Show Completed Tasks?",onChange:function(t){e.setCompleted(t.target.value),r(t.currentTarget.value)},selectedValue:a,children:[Object(o.jsx)(P.d,{label:"Yes",value:"true"}),Object(o.jsx)(P.d,{label:"No",value:"false"})]}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{children:"Tasks per page"}),Object(o.jsx)("input",{onChange:function(t){e.setNumberOfItems(parseInt(t.target.value))},min:"0",step:"1",name:"tasksPerPage",type:"number"})]}),Object(o.jsx)("label",{children:Object(o.jsx)("button",{type:"submit",children:"Save"})})]})})};var H=function(){var e=Object(c.useContext)(g),t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),l=u[0],d=u[1];function j(e){var t=e.target,n=t.name,c=t.value;"username"===n&&r(c),"password"===n&&d(c)}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(w.a,{condition:!e.isLoggedIn,children:Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.register(a,l)},children:[Object(o.jsx)("input",{placeholder:"username",name:"username",onChange:j}),Object(o.jsx)("input",{placeholder:"password",name:"password",onChange:j}),Object(o.jsx)("button",{children:"SignUp"})]})})})},J="http://localhost:3003";function V(){var e=Object(c.useContext)(u),t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1],i=Object(c.useState)([]),l=Object(s.a)(i,2),d=l[0],p=l[1],O=E((function(e){return x.apply(this,arguments)})),h=O.handleChange,m=O.handleSubmit;function x(){return(x=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id=Object(L.a)(),t.complete=!1,a.includes(t)){e.next=9;break}return e.next=5,f.a.post("".concat(J,"/todo"),{text:t.text,assignee:t.assignee,complete:t.complete,difficulty:t.difficulty});case 5:n=e.sent,r([].concat(Object(y.a)(a),[n.data])),e.next=10;break;case 9:alert("That to-do item already exsists!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(J,"/todo/").concat(t));case 2:n=a.filter((function(e){return e.id!==t})),r(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.map((function(e){return e.id===t&&(e.complete=!e.complete),e})),r(n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(J,"/todo"));case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=a.filter((function(e){return!e.complete})).length;p(e),document.title="To Do List: ".concat(d)}),[a]),Object(c.useEffect)((function(){!function(){C.apply(this,arguments)}();var t=localStorage.getItem("userPreferences");if(t){var n=JSON.parse(t);e.setNumberOfItems(n.numberOfItems),e.setCompleted(n.showCompleted)}}),[]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(I,{}),Object(o.jsx)(H,{}),Object(o.jsx)(k,{capability:"read",children:Object(o.jsx)(_,{incomplete:d})}),Object(o.jsx)(k,{capability:"read",children:Object(o.jsxs)("div",{id:"formContainer",children:[Object(o.jsx)(B,{}),Object(o.jsx)(k,{capability:"create",children:Object(o.jsx)(F,{handleSubmit:m,handleChange:h})})]})}),Object(o.jsx)(k,{capability:"read",children:Object(o.jsx)(U,{list:a,toggleComplete:function(e){return v.apply(this,arguments)},deleteItem:function(e){return g.apply(this,arguments)}})})]})}n(409),n(410);i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(l,{children:Object(o.jsx)(S,{children:Object(o.jsx)(V,{})})})}),document.getElementById("root"))}},[[411,1,2]]]);
//# sourceMappingURL=main.d76a4ed7.chunk.js.map