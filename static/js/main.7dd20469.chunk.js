(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{1:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n={ACTIVE_THREAD_ID:"activeThreadId",THREADS:"threads"},r={LOAD_MESSAGE:"LOAD_MESSAGE",ADD_MESSAGE:"ADD_MESSAGE",DELETE_MESSAGE:"DELETE_MESSAGE",OPEN_THREAD:"OPEN_THREAD"}},17:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(18),r=a.n(n),c=a(16),s={activeThreadId:"1-fca2",threads:[{id:"1-fca2",title:"Buzz Aldrin",messages:[{text:"Twelve minutes to ignition.",timestamp:a.n(c)()(Date.now()),id:r.a.v4()}]},{id:"2-be91",title:"Michael Collins",messages:[]}]}},32:function(e,t,a){"use strict";(function(e){var n=a(3),r=a(4),c=a(6),s=a(5),i=a(7),l=a(0),o=a.n(l),d=a(22),u=a(10),m=a(36),p=a(19),E=a(38),h=a(37),f=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(p.a,{store:E.a},o.a.createElement(d.a,null,o.a.createElement(u.d,null,o.a.createElement(u.b,{path:"/chat",component:h.a}),o.a.createElement(u.a,{to:"/chat"}))))}}]),t}(l.Component);t.a=Object(m.hot)(e)(f)}).call(this,a(28)(e))},37:function(e,t,a){"use strict";var n=a(3),r=a(4),c=a(6),s=a(5),i=a(7),l=a(20),o=a(0),d=a.n(o),u=a(10),m=a(19),p=a(1),E=a(17),h="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",f=function(e){return d.a.createElement("div",{class:"col-md-4 col-xl-3 chat"},d.a.createElement("div",{class:"card mb-sm-3 mb-md-0 contacts_card"},d.a.createElement("div",{class:"card-header"},d.a.createElement("h3",null," Users ")),d.a.createElement("div",{class:"card-body contacts_body"},d.a.createElement("ui",{class:"contacts"},e.tabs.map((function(t,a){return d.a.createElement("li",{key:a,className:t.active?"active":"",onClick:function(){return e.onClick(t.id)}},d.a.createElement("div",{class:"d-flex bd-highlight"},d.a.createElement("div",{class:"img_cont"},d.a.createElement("img",{src:(t.active,h),class:"rounded-circle user_img"}),d.a.createElement("span",{class:"online_icon"})),d.a.createElement("div",{class:"user_info"},d.a.createElement("span",null,t.title),d.a.createElement("p",null,t.title," is ",t.active?"Online":"Offline"))))})))),d.a.createElement("h5",{class:"card-footer"},"Designed By MO")))},v=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement(f,{tabs:this.props.tabs,onClick:this.props.openThread})}}]),t}(o.Component),b=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={value:""},a.onChange=function(e){a.setState({value:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.value,a.props.threadId),a.setState({value:""})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("form",null,d.a.createElement("div",{className:"input-group"},d.a.createElement("div",{className:"input-group-append"},d.a.createElement("span",{className:"input-group-text attach_btn"},d.a.createElement("i",{className:"fas fa-paperclip"}))),d.a.createElement("textarea",{name:"",className:"form-control type_msg",placeholder:"Type your message...",value:this.state.value,onChange:this.onChange}),d.a.createElement("div",{className:"input-group-append"},d.a.createElement("span",{class:"input-group-text send_btn"},d.a.createElement("i",{className:"fas fa-location-arrow",onClick:this.handleSubmit})))))}}]),t}(o.Component),g=a(34),O=a.n(g),_="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg",y=function(e){return d.a.createElement("div",{class:"col-md-8 col-xl-12 chat"},d.a.createElement("div",{class:"card"},d.a.createElement("div",{class:"card-header msg_head"},d.a.createElement("div",{class:"d-flex bd-highlight"},d.a.createElement("div",{class:"img_cont"},d.a.createElement("img",{src:_,class:"rounded-circle user_img"}),d.a.createElement("span",{class:"online_icon"})),d.a.createElement("div",{class:"user_info"},d.a.createElement("span",null,"Chat with ",e.threadId)),d.a.createElement("div",{class:"video_cam"},d.a.createElement("span",null,d.a.createElement("i",{class:"fas fa-video"})),d.a.createElement("span",null,d.a.createElement("i",{class:"fas fa-phone"}))),d.a.createElement("div",{class:"action_menu"}))),d.a.createElement("div",{class:"card-body msg_card_body"},e.messages.map((function(t,a){return d.a.createElement("div",{className:"d-flex justify-content-start mb-4",key:a,onClick:function(){return e.onClick(t.id)}},d.a.createElement("div",{class:"img_cont_msg"},d.a.createElement("img",{src:_,class:"rounded-circle user_img"})),d.a.createElement("div",{class:"msg_cotainer"},t.text,d.a.createElement("span",{class:"msg_time"},d.a.createElement(O.a,{date:t.timestamp}))))}))),d.a.createElement("div",{class:"card-footer"},d.a.createElement(b,{onSubmit:e.onSubmit,threadId:e.threadId}))))},j=function(e){return d.a.createElement("div",null,d.a.createElement(y,{tabs:e.tabs,messages:e.thread.messages,onClick:e.onMessageClick,onSubmit:e.onMessageSubmit,threadId:e.thread.id}))},S=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement(j,{tabs:this.props.tabs,thread:this.props.activeThread,onMessageClick:this.props.deleteMessage,onMessageSubmit:this.props.addMessage})}}]),t}(o.Component),D=(a(51),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("div",{className:"container-fluid h-100"},d.a.createElement("div",{className:"row justify-content-center h-100"},d.a.createElement(v,{tabs:this.props.tabs,openThread:this.props.openThread}),d.a.createElement(S,{tabs:this.props.tabs,activeThread:this.props.activeThread,addMessage:this.props.addMessage,deleteMessage:this.props.deleteMessage}),console.log(this.props.activeThread)))}}]),t}(o.Component));a.d(t,"a",(function(){return M}));var A={loadData:function(e){return{type:p.a.LOAD_MESSAGE,payload:{dataType:e,data:E.a[e]}}},addMessage:function(e,t){return{type:p.a.ADD_MESSAGE,payload:{text:e,threadId:t}}},deleteMessage:function(e){return{type:p.a.DELETE_MESSAGE,payload:{id:e}}},openThread:function(e){return{type:p.a.OPEN_THREAD,payload:{id:e}}}},T=function(e,t){return e.map((function(e){return{title:e.title,active:e.id===t,id:e.id}}))},M=Object(m.b)((function(e){return Object(l.a)({},e)}),A)(function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(u.d,null,d.a.createElement(u.b,{path:"/",render:function(t){return d.a.createElement(D,Object.assign({},e.props,t,{activeThread:(a=e.props.threads,n=e.props.activeThreadId,a.find((function(e){return e.id===n}))),tabs:T(e.props.threads,e.props.activeThreadId)}));var a,n}}),d.a.createElement(u.a,{to:"/"}))}},{key:"componentDidMount",value:function(){this.props.loadData(p.b.ACTIVE_THREAD_I),this.props.loadData(p.b.THREADS)}}]),t}(o.Component))},38:function(e,t,a){"use strict";var n=a(12),r=a(26),c=a(20),s=a(1),i=a(17),l=a(18),o=a.n(l),d=(a(16),Object(n.b)({activeThreadId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1-fca2",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.a.OPEN_THREAD:return t.payload.id;default:return e}},threads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[{id:"1-fca2",title:"Buzz Aldrin",messages:u(void 0,{})},{id:"2-be91",title:"Michael Collins",messages:u(void 0,{})}],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.a.ADD_MESSAGE:case s.a.DELETE_MESSAGE:var a=function(e,t){switch(console.log(e),t.type){case s.a.ADD_MESSAGE:return e.findIndex((function(e){return e.id===t.payload.threadId}));case s.a.DELETE_MESSAGE:return e.findIndex((function(e){return e.messages.find((function(e){return e.id===t.payload.id}))}));default:return e}}(e,t);console.log(t.payload.threadId);var n=e[a],l=Object(c.a)({},n,{messages:u(n.messages,t)});return[].concat(Object(r.a)(e.slice(0,a)),[l],Object(r.a)(e.slice(a+1,e.length)));default:return e||i.a}}}));function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.a.ADD_MESSAGE:var a={text:t.payload.text,timestamp:new Date("1976-04-19T12:59-0500"),id:o.a.v4()};return e.concat(a);case s.a.DELETE_MESSAGE:return e.filter((function(e){return e.id!==t.payload.id}));default:return e}}t.a=Object(n.c)(d)},39:function(e,t,a){e.exports=a(54)},44:function(e,t,a){},51:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),s=a.n(c),i=(a(44),a(32));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.7dd20469.chunk.js.map