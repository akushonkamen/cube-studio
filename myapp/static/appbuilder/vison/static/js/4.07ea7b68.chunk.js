"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[4],{60238:function(e,t,n){var a=n(67487),r="http://11.187.53.46:8080/api";t.Z={query_abtests:function(e){return a.Z.post({url:"".concat(r,"/query_abtests"),data:e})},query_edge_factorys:function(e){return a.Z.post({url:"".concat(r,"/query_edge_factorys"),data:e})},delete_edge_factory:function(e){return a.Z.post({url:"".concat(r,"/delete_edge_factory"),data:e})},query_structs:function(e){return a.Z.post({url:"".concat(r,"/query_structs"),data:e})},delete_struct:function(e){return a.Z.post({url:"".concat(r,"/delete_struct"),data:e})},query_associated_nodes:function(e){return a.Z.post({url:"".concat(r,"/query_associated_nodes"),data:e})},mod_struct:function(e){return a.Z.post({url:"".concat(r,"/mod_struct"),data:e})},add_struct:function(e){return a.Z.post({url:"".concat(r,"/add_struct"),data:e})},query_scenes:function(e){return a.Z.post({url:"".concat(r,"/query_scenes"),data:e})},query_associated_graphs:function(e){return a.Z.post({url:"".concat(r,"/query_associated_graphs"),data:e})},add_scene:function(e){return a.Z.post({url:"".concat(r,"/add_scene"),data:e})},mod_scene:function(e){return a.Z.post({url:"".concat(r,"/mod_scene"),data:e})},query_graph_templates:function(e){return a.Z.post({url:"".concat(r,"/query_graph_templates"),data:e})},query_components:function(e){return a.Z.post({url:"".concat(r,"/query_components"),data:e})},delete_component:function(e){return a.Z.post({url:"".concat(r,"/delete_component"),data:e})},query_component_historys:function(e){return a.Z.post({url:"".concat(r,"/query_component_historys"),data:e})},get_scene_names:function(e){return a.Z.post({url:"".concat(r,"/get_scene_names"),data:e})},get_scene_available_graphs:function(e){return a.Z.post({url:"".concat(r,"/get_scene_available_graphs"),data:e})},mod_abtest:function(e){return a.Z.post({url:"".concat(r,"/mod_abtest"),data:e})},add_abtest:function(e){return a.Z.post({url:"".concat(r,"/add_abtest"),data:e})},query_graphs:function(e){return a.Z.post({url:"".concat(r,"/query_graphs"),data:e})},get_graph_template_names:function(e){return a.Z.post({url:"".concat(r,"/get_graph_template_names"),data:e})},batch_query_components:function(e){return a.Z.post({url:"".concat(r,"/batch_query_components"),data:e})},query_graph_historys:function(e){return a.Z.post({url:"".concat(r,"/query_graph_historys"),data:e})},query_template_available_node_factorys:function(e){return a.Z.post({url:"".concat(r,"/query_template_available_node_factorys"),data:e})},get_edge_factory_names:function(e){return a.Z.post({url:"".concat(r,"/get_edge_factory_names"),data:e})},get_node_factory_names:function(e){return a.Z.post({url:"".concat(r,"/get_node_factory_names"),data:e})},query_node_factorys:function(e){return a.Z.post({url:"".concat(r,"/query_node_factorys"),data:e})},mod_graph:function(e){return a.Z.post({url:"".concat(r,"/mod_graph"),data:e})},add_graph:function(e){return a.Z.post({url:"".concat(r,"/add_graph"),data:e})},get_config_prototype:function(e){return a.Z.post({url:"".concat(r,"/get_config_prototype"),data:e})},rollback_graph:function(e){return a.Z.post({url:"".concat(r,"/rollback_graph"),data:e})}}},14004:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(18489),r=n(50678),l=n(72791),s=n(23695),o=n(83099),i=n(47528),c=n(28183),u=n(64564),d=n(618),m=n(48757),p=n(87309),f=n(99154),_=n(44541),y=n(60238),h={type:"",factory_name:"",name:"",status:"",admin:"",time:""},Z=[{type:"select",name:"type",label:"\u7c7b\u578b",options:[{label:"recall",value:"recall"},{label:"sort",value:"sort"},{label:"filter",value:"filter"}]},{type:"input",name:"factory_name",label:"\u5de5\u5382\u540d"},{type:"input",name:"name",label:"\u540d\u79f0"},{type:"select",name:"status",label:"\u72b6\u6001",options:[{value:-1,label:"\u5931\u6548"},{value:0,label:"\u6709\u6548"},{value:1,label:"\u521b\u5efa\u6210\u529f"},{value:2,label:"\u6d4b\u8bd5\u53d1\u5e03"},{value:3,label:"\u6b63\u5f0f\u53d1\u5e03"},{value:4,label:"\u516c\u6709"},{value:5,label:"\u79c1\u6709"}]},{type:"input",name:"admin",label:"\u8d1f\u8d23\u4eba"},{type:"rangePicker",name:"time",label:"\u66f4\u65b0\u65f6\u95f4"}],x=n(17097),b=n(80184);function g(){var e=(0,l.useState)(!1),t=(0,r.Z)(e,2),n=t[0],g=t[1],v=(0,l.useState)([]),j=(0,r.Z)(v,2),k=j[0],C=j[1],q=(0,l.useState)([]),I=(0,r.Z)(q,2),P=I[0],T=I[1],w=(0,l.useState)({}),F=(0,r.Z)(w,2),E=F[0],S=F[1],N=(0,l.useState)(!1),O=(0,r.Z)(N,2),V=O[0],R=O[1],A=(0,l.useState)(!1),z=(0,r.Z)(A,2),D=z[0],Q=z[1],B=(0,l.useState)(!1),L=(0,r.Z)(B,2),G=L[0],J=L[1],K=[{title:"#",render:function(e,t,n){return(0,b.jsx)("a",{children:n+1+""})}},{title:"\u56fe\u540d\u79f0",dataIndex:"graph_name",key:"graph_name"},{title:"\u7248\u672c",dataIndex:"version",key:"version"},{title:"\u56fe\u6a21\u677f",dataIndex:"template_name",key:"template_name"},{title:"\u8d1f\u8d23\u4eba",dataIndex:"admin",key:"admin"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updated_time",key:"updated_time"},{title:"\u4f7f\u7528\u573a\u666f",dataIndex:"scene_name",key:'"scene_name'},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return(0,b.jsx)(o.Z,{size:"middle",children:(0,b.jsx)("span",{style:{color:"#999"},children:" \u67e5\u770b "})})}}],H=[{title:"#",render:function(e,t,n){return(0,b.jsx)("a",{children:n+1+""})}},{title:"\u7c7b\u578b",dataIndex:"type",key:"type"},{title:"\u7248\u672c",dataIndex:"version",key:"version"},{title:"\u5de5\u5382\u540d",dataIndex:"factory_name",key:"factory_name"},{title:"\u540d\u79f0",dataIndex:"name",key:'"name'},{title:"\u72b6\u6001",dataIndex:"status",key:"status",render:function(e){return(0,b.jsx)(i.Z,{color:x.a[e]?x.a[e]:"",children:x.Q[e]?x.Q[e]:""})}},{title:"\u8d1f\u8d23\u4eba",dataIndex:"admin",key:"admin"},{title:"\u63cf\u8ff0",dataIndex:"des",key:"des"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updated_time",key:"updated_time"}],M=[{title:"#",render:function(e,t,n){return(0,b.jsx)("a",{children:n+1+""})}},{title:"\u7c7b\u578b",fType:"select",foptions:[{label:"recall",value:"recall"},{label:"sort",value:"sort"},{label:"filter",value:"filter"}],dataIndex:"type",key:"type"},{title:"\u5de5\u5382\u540d",fType:"input",dataIndex:"factory_name",key:"factory_name"},{title:"\u540d\u79f0",fType:"input",dataIndex:"name",key:'"name'},{title:"\u8f93\u51fa\u7ed3\u6784\u540d",fType:"input",dataIndex:"output_struct",key:"output_struct"},{title:"\u72b6\u6001",fType:"select",foptions:[{value:-1,label:"\u5931\u6548"},{value:0,label:"\u6709\u6548"},{value:1,label:"\u521b\u5efa\u6210\u529f"},{value:2,label:"\u6d4b\u8bd5\u53d1\u5e03"},{value:3,label:"\u6b63\u5f0f\u53d1\u5e03"},{value:4,label:"\u516c\u6709"},{value:5,label:"\u79c1\u6709"}],dataIndex:"status",key:"status",render:function(e){return(0,b.jsx)(i.Z,{color:x.a[e]?x.a[e]:"",children:x.Q[e]?x.Q[e]:""})}},{title:"\u8d1f\u8d23\u4eba",fType:"input",dataIndex:"admin",key:"admin"},{title:"\u66f4\u65b0\u65f6\u95f4",fType:"input",dataIndex:"updated_time",key:"updated_time"},{title:"\u64cd\u4f5c",key:"action",render:function(e,t){return(0,b.jsxs)(o.Z,{size:"middle",children:[(0,b.jsx)("a",{onClick:function(){R(!1),S((0,a.Z)({},t)),g(!0)},children:"\u67e5\u770b"},"view"),(0,b.jsx)("span",{style:{color:"#999",marginTop:"-1px"},children:" | "}),(0,b.jsx)(c.Z,{title:"\u662f\u5426\u5220\u9664?",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onConfirm:function(){!function(e){var t={opr:"delete_component",data:{type:e.type,factory_name:e.factory_name,name:e.name}};y.Z.delete_component(t).then((function(e){console.log(e),0===e.status?s.ZP.success(e.message):s.ZP.error(e.message)}))}(t)},children:(0,b.jsx)("a",{children:"\u5220\u9664"},"del")}),(0,b.jsx)("span",{style:{color:"#999",marginTop:"-1px"},children:" | "}),(0,b.jsx)("a",{onClick:function(){!function(e){J(!0);var t={opr:"query_component_historys",data:{name:e.name,is_public:4===e.status?1:0,graph_name:e.graph_name}};y.Z.query_component_historys(t).then((function(e){console.log(e),0===e.status?(T(e.data.results),Q(!0),s.ZP.success(e.message)):s.ZP.error(e.message)}))}(t)},children:" \u5386\u53f2\u7248\u672c "},"node"),(0,b.jsx)("span",{style:{color:"#999",marginTop:"-1px"},children:" | "}),(0,b.jsxs)("a",{onClick:function(){!function(e){J(!1);var t={opr:"query_associated_graphs",data:{associated_graphs:e.associated_graphs}};y.Z.query_associated_graphs(t).then((function(e){console.log(e),0===e.status?(T(e.data.results),Q(!0),s.ZP.success(e.message)):s.ZP.error(e.message)}))}(t)},children:[" \u5173\u8054\u56fe (",t.associated_graphs&&t.associated_graphs.length?t.associated_graphs.length:0,")"]},"node")]})}}],U=M.filter((function(e){return e.fType})).map((function(e){return{type:e.fType,name:e.dataIndex,label:e.title,options:e.foptions?e.foptions:[]}})),W=function(e){var t=e.admin,n=e.factory_name,a=e.type,r=e.name,l=e.time,o={type:a||"",factory_name:n||"",name:r||"",status:e.status||0,admin:t||"",min_updated_time:l&&l[0]?new Date(l[0]).getTime():0,max_updated_time:l&&l[1]?new Date(l[1]).getTime():0};y.Z.query_components({opr:"query_components",data:o}).then((function(e){0===e.status?(C(e.data.results),s.ZP.success(e.message)):s.ZP.error(e.message)}))};(0,l.useEffect)((function(){W({})}),[]);return(0,b.jsxs)("div",{style:{padding:"30px 40px"},children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(u.Z,{title:"\u67e5\u8be2\u6761\u4ef6",children:(0,b.jsx)(f.Z,{formRolue:Z,form:h,queryList:W})}),(0,b.jsx)(u.Z,{title:"\u67e5\u8be2\u7ed3\u679c",style:{marginTop:"20px"},children:(0,b.jsx)(d.Z,{columns:M,dataSource:k},"scene_name")})]}),(0,b.jsx)(m.Z,{width:900,title:V?V&&E.version?"\u7f16\u8f91":"\u65b0\u589e":"\u67e5\u770b",visible:n,onCancel:function(){g(!1)},footer:[(0,b.jsx)(p.Z,{onClick:function(){g(!1)},children:"\u5173\u95ed"},"back")],children:(0,b.jsx)(_.Z,{formRolue:U,form:E,isadd:V,showEdit:n,submitForm:function(e){var t=(0,a.Z)({},e);E.version?(t.version=E.version+1,y.Z.mod_scene({opr:"mod_scene",data:t}).then((function(e){0===e.status?(W({}),g(!1),s.ZP.success(e.message)):s.ZP.error(e.message)}))):y.Z.add_scene({opr:"add_scene",data:t}).then((function(e){0===e.status?(W({}),g(!1),s.ZP.success(e.message)):s.ZP.error(e.message)}))},resFied:function(){g(!1),W({})}})}),(0,b.jsx)(m.Z,{width:"80%",title:"\u5173\u8054\u56fe",visible:D,onCancel:function(){Q(!1)},footer:[(0,b.jsx)(p.Z,{onClick:function(){Q(!1)},children:"\u5173\u95ed"},"back")],children:(0,b.jsx)(d.Z,{columns:G?H:K,dataSource:P},"struct_name")})]})}},17097:function(e,t,n){n.d(t,{Q:function(){return a},a:function(){return r}});var a={0:"\u6709\u6548","-1":"\u5931\u6548",1:"\u521b\u5efa\u6210\u529f",2:"\u6d4b\u8bd5\u53d1\u5e03",3:"\u6b63\u5f0f\u53d1\u5e03",4:"\u516c\u6709",5:"\u79c1\u6709"},r={0:"green","-1":"#F56C6C",1:"#67C23A",2:"green",3:"#E6A23C",4:"#409EFF",5:"#909399"}},44541:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(50678),r=n(72791),l=n(20135),s=n(58646),o=n(58105),i=n(13295),c=n(73231),u=n(87309),d=n(71939),m=n.n(d),p=n(80184),f=l.Z.TextArea;function _(e){var t=s.Z.useForm(),n=(0,a.Z)(t,1)[0],d=(0,r.useState)({}),_=(0,a.Z)(d,2),y=_[0],h=_[1],Z=(0,r.useRef)(null);(0,r.useEffect)((function(){n.resetFields(),n.setFieldsValue(e.form),e.form.map_config&&h(JSON.parse(JSON.stringify(e.form.map_config))),e.saveFrom&&e.saveFrom.graph_name&&n.setFieldsValue(e.saveFrom)}),[]);return(0,p.jsx)("div",{children:(0,p.jsxs)(s.Z,{name:"basic",labelCol:{span:8},style:{width:"80%"},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(t){e.submitForm(t,e.opName)},onFinishFailed:function(){console.log("\u5931\u8d25")},autoComplete:"off",ref:Z,form:n,children:[e.formRolue.map((function(t){switch(t.type){case"input":return(0,p.jsx)(s.Z.Item,{label:t.label,name:t.name,initialValue:e.form[t.name],rules:[{required:!0,message:"\u8bf7\u8f93\u5165"+t.label}],children:(0,p.jsx)(l.Z,{disabled:!(!e.disableds&&!1!==e.isadd)})},t.name);case"select":return(0,p.jsx)(s.Z.Item,{label:t.label,name:t.name,rules:[{required:!0,message:"\u8bf7\u9009\u62e9"+t.label}],children:(0,p.jsx)(o.Z,{disabled:!(!e.disableds&&!1!==e.isadd),children:t.options?t.options.map((function(e){return(0,p.jsx)(o.Z.Option,{value:e.value,children:e.label},e.value)})):null})},t.name);case"picker":return(0,p.jsx)(s.Z.Item,{label:t.label,name:t.name,rules:[{required:!0,message:"\u8bf7\u9009\u62e9"+t.label}],children:(0,p.jsx)(i.Z,{style:{width:"100%"}})},t.name);case"radio":return(0,p.jsx)(s.Z.Item,{label:t.label,name:t.name,rules:[{required:!0,message:"\u8bf7\u9009\u62e9"+t.label}],children:(0,p.jsx)(c.ZP.Group,{disabled:!(!e.disableds&&!1!==e.isadd),children:t.options?t.options.map((function(e){return(0,p.jsx)(c.ZP,{value:e.value,children:e.label},e.value)})):null})},t.name);case"json":return(0,p.jsx)(s.Z.Item,{label:t.label,name:t.name,children:(0,p.jsx)(m(),{src:y,displayDataTypes:!1,theme:"railscasts",onEdit:function(e){return function(e){return console.log(e),!0}(e)},onAdd:function(e){return function(e){return console.log(e),!0}(e)}})},t.name);case"textArea":return(0,p.jsx)(s.Z.Item,{label:t.label,name:t.name,rules:[{required:!0,message:"\u8bf7\u8f93\u5165"+t.label}],children:(0,p.jsx)(f,{rows:4,disabled:!(!e.disableds&&!1!==e.isadd)})},t.name)}})),(0,p.jsxs)(s.Z.Item,{wrapperCol:{offset:8,span:16},children:[(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[0===e.stepCurrent?(0,p.jsx)(u.Z,{onClick:function(){e.setEditStatus(!1),e.setBaseForm&&e.setBaseForm({})},children:"\u8fd4\u56de"}):null,0===e.stepCurrent?(0,p.jsx)(u.Z,{htmlType:"submit",style:{marginLeft:"20px"},children:"\u4e0b\u4e00\u6b65"}):null]}),e.stepCurrent&&0!==e.stepCurrent?(0,p.jsx)(u.Z,{type:"primary",children:"\u63d0\u4ea4"}):null,e.isadd&&void 0===e.stepCurrent?(0,p.jsx)(u.Z,{htmlType:"submit",type:"primary",disabled:!(!e.disableds&&!1!==e.isadd),children:"\u63d0\u4ea4"}):null]})]})})}},99154:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(72791),r=n(13295),l=n(58646),s=n(66106),o=n(30914),i=n(20135),c=n(58105),u=n(73231),d=n(87309),m=n(80184),p=r.Z.RangePicker;function f(e){var t=(0,a.useRef)(null);(0,a.useEffect)((function(){console.log("\u89e6\u53d1\u4e86",t.current.setFieldsValue(e.form))}),[]);return(0,m.jsx)("div",{children:(0,m.jsx)(l.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(t){e.queryList(t)},onFinishFailed:function(){console.log("\u5931\u8d25")},autoComplete:"off",ref:t,children:(0,m.jsxs)(s.Z,{children:[e.formRolue.map((function(e){switch(e.type){case"input":return(0,m.jsx)(o.Z,{span:6,children:(0,m.jsx)(l.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(i.Z,{})},e.name)});case"select":return(0,m.jsx)(o.Z,{span:6,children:(0,m.jsx)(l.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(c.Z,{children:e.options?e.options.map((function(e){return(0,m.jsx)(c.Z.Option,{value:e.value,children:e.label},e.value)})):null})},e.name)});case"picker":return(0,m.jsx)(o.Z,{span:6,children:(0,m.jsx)(l.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(r.Z,{style:{width:"100%"}})},e.name)});case"radio":return(0,m.jsx)(o.Z,{span:6,children:(0,m.jsx)(l.Z.Item,{label:e.label,name:e.name,children:(0,m.jsxs)(u.ZP.Group,{children:[(0,m.jsx)(u.ZP,{value:1,children:"A"}),e.options?e.options.map((function(e){return(0,m.jsx)(u.ZP,{value:e.value,children:e.label},e.value)})):null]})},e.name)});case"rangePicker":return(0,m.jsx)(o.Z,{span:6,children:(0,m.jsx)(l.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(p,{})},e.name)})}})),(0,m.jsx)(o.Z,{span:6,children:(0,m.jsx)(l.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,m.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"\u67e5\u8be2"})})})]})})})}},28183:function(e,t,n){n.d(t,{Z:function(){return j}});var a=n(87462),r=n(29439),l=n(72791),s=n(81694),o=n.n(s),i=n(75179),c=n(10187),u=n(11354),d=n(64469),m=n(87309),p=n(6417),f=n(93486),_=n(70454),y=n(24886),h=n(61113),Z=n(29464),x=n(41783),b=void 0,g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=l.forwardRef((function(e,t){var n=l.useContext(y.E_).getPrefixCls,s=(0,i.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),c=(0,r.Z)(s,2),v=c[0],j=c[1],k=function(t,n){var a;j(t),null===(a=e.onVisibleChange)||void 0===a||a.call(e,t,n)},C=function(e){k(!1,e)},q=function(t){var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(b,t)},I=function(t){var n;k(!1,t),null===(n=e.onCancel)||void 0===n||n.call(b,t)},P=e.prefixCls,T=e.placement,w=e.children,F=e.overlayClassName,E=g(e,["prefixCls","placement","children","overlayClassName"]),S=n("popover",P),N=n("popconfirm",P),O=o()(N,F),V=l.createElement(f.Z,{componentName:"Popconfirm",defaultLocale:_.Z.Popconfirm},(function(t){return function(t,r){var s,o=e.okButtonProps,i=e.cancelButtonProps,c=e.title,u=e.cancelText,d=e.okText,f=e.okType,_=e.icon;return l.createElement("div",{className:"".concat(t,"-inner-content")},l.createElement("div",{className:"".concat(t,"-message")},_,l.createElement("div",{className:"".concat(t,"-message-title")},(s=c)?"function"===typeof s?s():s:null)),l.createElement("div",{className:"".concat(t,"-buttons")},l.createElement(m.Z,(0,a.Z)({onClick:I,size:"small"},i),u||r.cancelText),l.createElement(x.Z,{buttonProps:(0,a.Z)((0,a.Z)({size:"small"},(0,p.n)(f)),o),actionFn:q,close:C,prefixCls:n("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},d||r.okText)))}(S,t)})),R=n();return l.createElement(d.Z,(0,a.Z)({},E,{prefixCls:S,placement:T,onVisibleChange:function(t){e.disabled||k(t)},visible:v,overlay:V,overlayClassName:O,ref:t,transitionName:(0,Z.m)(R,"zoom-big",e.transitionName)}),(0,h.Tm)(w,{onKeyDown:function(e){var t,n;l.isValidElement(w)&&(null===(n=null===w||void 0===w?void 0:(t=w.props).onKeyDown)||void 0===n||n.call(t,e)),function(e){e.keyCode===u.Z.ESC&&v&&k(!1,e)}(e)}}))}));v.defaultProps={placement:"top",trigger:"click",okType:"primary",icon:l.createElement(c.Z,null),disabled:!1};var j=v}}]);