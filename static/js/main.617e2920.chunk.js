(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{27:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a,c,r=n(0),i=n.n(r),o=n(8),u=n.n(o),s=(n(27),n(5)),l=n(40),b=n(3),d={addContact:Object(b.b)("contacts/add",(function(e,t){return{payload:{id:Object(l.a)(),name:e,number:t}}})),deleteContact:Object(b.b)("contacts/delete"),changeFilter:Object(b.b)("contacts/changeFilter")},j=n(1),h=Object(s.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(d.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(j.jsxs)("label",{children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:t,onChange:n})]})})),m=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},O=Object(s.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{filteredContacts:m(n,a)}}),(function(e){return{onDeleteContact:function(t){return e(d.deleteContact(t))}}}))((function(e){var t=e.filteredContacts,n=e.onDeleteContact;return Object(j.jsx)("ul",{children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(j.jsxs)("li",{className:"TodoList__item",children:[Object(j.jsxs)("p",{children:[t," : ",a]}),Object(j.jsx)("button",{onClick:function(){return n(c)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},c)}))})})),f=n(6),p=n(15),C=n(16),g=n(22),v=n(20),x=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(f.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,c=n.number;e.props.onSubmit(a,c),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(C.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name",Object(j.jsx)("input",{value:this.state.name,onChange:this.handleChange,placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:" ",required:!0})]}),Object(j.jsxs)("label",{children:["Number",Object(j.jsx)("input",{value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(j.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(r.Component),y=Object(s.b)(null,(function(e){return{onSubmit:function(t,n){return e(d.addContact(t,n))}}}))(x),k=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(y,{}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(h,{}),Object(j.jsx)(O,{})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},F=n(11),w=n(17),A=n.n(w),L=n(4),N=n(18),z=n.n(N),D=n(21),T=n(2);console.log(d.addContact.type);var P=Object(b.c)((a=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],Object(D.a)(a),a),(c={},Object(f.a)(c,d.addContact,(function(e,t){var n=t.payload;return e.map((function(e){return e.name})).includes(n.name)&&alert("".concat(n.name," is already in contacts")),[n].concat(Object(F.a)(e))})),Object(f.a)(c,d.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),Z=Object(b.c)("",Object(f.a)({},d.changeFilter,(function(e,t){return t.payload}))),q=Object(T.b)({items:P,filter:Z}),B=[].concat(Object(F.a)(Object(b.d)({serializableCheck:{ignoredActions:[L.a,L.f,L.b,L.c,L.d,L.e]}})),[A.a]),E={key:"contacts",storage:z.a,blacklist:["filter"]},I=Object(b.a)({reducer:{contacts:Object(L.g)(E,q)},middleware:B,devTools:!1}),J={store:I,persistor:Object(L.h)(I)},_=n(19);u.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(s.a,{store:J.store,children:Object(j.jsx)(_.a,{loading:null,persistor:J.persistor,children:Object(j.jsx)(k,{})})})}),document.getElementById("root")),S()}},[[38,1,2]]]);
//# sourceMappingURL=main.617e2920.chunk.js.map