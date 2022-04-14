(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),l=(n(23),n(3)),r=n(6),s=n(5),i=n(1),u=(n(24),n(25),n(0));var o=function(e){var t="card "+e.className;return Object(u.jsx)("div",{className:t,children:e.children})};n(27),n(28);var j=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.toLocaleString("en-US",{year:"numeric"});return Object(u.jsxs)("div",{className:"date-container",children:[Object(u.jsx)("div",{children:t}),Object(u.jsx)("div",{children:a}),Object(u.jsx)("div",{children:n})]})},d=n(46),b=function(e){var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e.amount);return Object(u.jsxs)(o,{className:"expense-item",children:[Object(u.jsx)(j,{date:e.date}),Object(u.jsx)("h2",{children:e.title}),Object(u.jsx)("div",{className:"expense-item__description",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"expense-item__price",children:t}),Object(u.jsx)(d.a,{className:"delete-icon",onClick:function(){e.onDelete(e.id)}})]})})]})},x=(n(32),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{value:e.selectedYear,onChange:function(t){var n=t.target.value;e.onFilter(n)},children:[Object(u.jsx)("option",{value:"-1",children:"All years"}),e.filterOptions.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]})]})})}),O=(n(33),n(34),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),m=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})},v=function(e){var t=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}];return e.expenses.forEach((function(e){var n=e.date.getMonth();t[n].value+=e.amount})),Object(u.jsx)(m,{dataPoints:t})},h=function(e){var t=e.expenses.sort((function(e,t){return e.date<t.date?1:-1})),n=Object(l.a)(new Set(t.map((function(e){return e.date.getFullYear()})))).sort().reverse(),a=Object(i.useState)(-1),c=Object(s.a)(a,2),r=c[0],j=c[1],d=t.filter((function(e){return e.date.getFullYear()===r}));function O(t){e.onDelete(t)}var m=-1===r?t:d;return Object(u.jsx)("div",{children:Object(u.jsxs)(o,{className:"expense-list",children:[Object(u.jsx)(x,{onFilter:function(e){j(parseInt(e))},selectedYear:r,filterOptions:n}),Object(u.jsx)(v,{expenses:m}),t.length<=0&&Object(u.jsx)("p",{className:"placeholder-text",children:"Add expenses to get started."}),m.map((function(e){return Object(u.jsx)(b,{id:e.key,title:e.title,date:e.date,amount:e.amount,onDelete:O},e.key)}))]})})},p=(n(35),n(2)),f=(n(36),function(e){var t=Object(i.useState)({title:"",amount:"",date:""}),n=Object(s.a)(t,2),a=n[0],c=n[1];function l(e){var t=e.target.value,n=e.target.name;c((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(p.a)({},n,t))}))}return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onSaveExpenseItem(a),c({title:"",date:"",amount:""}),e.isFormOpen()},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{value:a.title,name:"title",type:"text",placeholder:"What did you buy?",onChange:l,required:!0})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Amount"}),Object(u.jsx)("input",{value:a.amount,name:"amount",type:"number",placeholder:"How much was it?",min:"0.01",step:"0.01",onChange:l,required:!0})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{value:a.date,name:"date",type:"date",min:"2000-01-01",max:"2022-12-31",onChange:l,required:!0})]})]}),Object(u.jsxs)("div",{className:"new-expense__actions",children:[Object(u.jsx)("button",{onClick:e.isFormOpen,children:"Cancel"}),Object(u.jsx)("button",{type:"submit",children:"Add Expense"})]})]})}),N=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];function l(){c((function(e){return!e}))}return Object(u.jsxs)("div",{className:"new-expense",children:[!a&&Object(u.jsx)("button",{onClick:l,children:"Add New Expense"}),a&&Object(u.jsx)(f,{onSaveExpenseItem:function(t){e.onAddExpense(t)},isFormOpen:l})]})},y=n(8),g=function(){var e=[{title:"Groceries",date:new Date(2021,2,10),amount:96.28,key:Object(y.a)()},{title:"Amazon",date:new Date(2022,1,28),amount:120.4,key:Object(y.a)()},{title:"Microsoft",date:new Date(2022,2,1),amount:59.99,key:Object(y.a)()}],t=Object(i.useState)(e),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(N,{onAddExpense:function(e){var t=Object(r.a)(Object(r.a)({},e),{},{date:new Date("".concat(e.date," ")),amount:parseFloat(e.amount),key:Object(y.a)()});c((function(e){return[t].concat(Object(l.a)(e))}))}}),Object(u.jsx)(h,{expenses:a,onDelete:function(e){c((function(t){return t.filter((function(t){return t.key!==e}))}))}})]})};c.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.368103b4.chunk.js.map