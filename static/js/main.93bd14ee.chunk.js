(this.webpackJsonpjoke=this.webpackJsonpjoke||[]).push([[0],{14:function(e,t,n){e.exports=n(26)},19:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(12),o=n.n(r),c=(n(19),n(10)),u=n(13),s=n(2),i=n(3),m=n(5),d=n(4),p=n(7),h=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={Id:"",Title:"",Status:"Pending"},e.handleIdChange=function(t){console.log(t.target.value),e.setState({Id:t.target.value})},e.handleTitleChange=function(t){console.log(t.target.value),e.setState({Title:t.target.value})},e.handleStatusChange=function(t){console.log(t.target.value),e.setState({Status:t.target.value})},e.handleTodoSubmit=function(t){t.preventDefault(),e.props.onAdd({Id:e.state.Id,Title:e.state.Title,Status:e.state.Status}),e.setState({Id:"",Title:"",Status:"Pending"})},e}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Add Todo"),l.a.createElement("form",{onSubmit:this.handleTodoSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:this.state.Id,onChange:this.handleIdChange,className:"form-control",placeholder:"Enter Id"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{value:this.state.Title,onChange:this.handleTitleChange,className:"form-control",placeholder:"Enter Title"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("select",{value:this.state.Status,className:"form-control",onChange:this.handleStatusChange},l.a.createElement("option",{value:"Done"},"Done"),l.a.createElement("option",{value:"Pending"},"Pending"))),l.a.createElement("button",{className:"form-control btn btn-primary",type:"submit"},"Add Todo")))}}]),n}(a.Component),E=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={todos:[{Id:"1",Title:"Do work well always",Status:"Done"},{Id:"2",Title:"Be strong at all times",Status:"Pending"}]},e.deleteTodos=function(t){var n=e.state.todos.filter((function(e){return e.Id!==t.Id}));e.setState({todos:n})},e.addTodo=function(t){e.setState({todos:[].concat(Object(u.a)(e.state.todos),[t])})},e.editTodos=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.Id===t.Id?Object(c.a)(Object(c.a)({},e),{},{Status:"Done"===e.Status?"Pending":"Done"}):e}))}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h,{onAdd:this.addTodo}),l.a.createElement("p",null,"TODO LISTS BY MATT"),l.a.createElement("table",{className:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Title"),l.a.createElement("th",null,"Status"),l.a.createElement("th",null,"Pending "),l.a.createElement("th",null))),l.a.createElement("tbody",null,this.state.todos.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,t.Id),l.a.createElement("td",null,t.Title),l.a.createElement("td",{style:{color:"Done"===t.Status?"green":"red"}},t.Status),l.a.createElement("td",null,l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.deleteTodos(t)}},l.a.createElement("span",null,l.a.createElement(p.a,{icon:"trash"}))),"|",l.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.editTodos(t)}},l.a.createElement("span",null,l.a.createElement(p.a,{icon:"edit"})))))})))))}}]),n}(a.Component),f=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,"Class Components ")}}]),n}(a.Component),b=function(e){return l.a.createElement("div",null,"Function Components by const()",l.a.createElement("p",null,e.title))},v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"I am a Child Components. "),l.a.createElement("p",null,this.props.title))}}]),n}(a.Component),g=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"I am a Parent Components."),l.a.createElement(v,{title:"I am text from Parent Component"}),l.a.createElement(b,{title:"I am a text from Function Components displayed"}))}}]),n}(a.Component),j=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={colour:"blue",age:10},e.handleButton=function(){console.log("button clicked"),e.setState({colour:"red",age:20})},e}return Object(i.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,this.state.colour),l.a.createElement("p",null,this.state.age),l.a.createElement("button",{type:"button",onClick:this.handleButton},"Click Me"))}}]),n}(a.Component),O=(n(25),n(6)),C=n(8);O.b.add(C.c,C.b,C.a);var S=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"App Components"),l.a.createElement(E,null),l.a.createElement(j,null),l.a.createElement(f,null),l.a.createElement(f,null),l.a.createElement(b,null),l.a.createElement(g,null))};o.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.93bd14ee.chunk.js.map