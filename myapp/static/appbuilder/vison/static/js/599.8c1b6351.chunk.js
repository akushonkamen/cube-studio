"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[599],{60238:function(e,n,a){var t=a(67487),s="http://11.187.53.46:8080/api";n.Z={query_abtests:function(e){return t.Z.post({url:"".concat(s,"/query_abtests"),data:e})},query_edge_factorys:function(e){return t.Z.post({url:"".concat(s,"/query_edge_factorys"),data:e})},delete_edge_factory:function(e){return t.Z.post({url:"".concat(s,"/delete_edge_factory"),data:e})},query_structs:function(e){return t.Z.post({url:"".concat(s,"/query_structs"),data:e})},delete_struct:function(e){return t.Z.post({url:"".concat(s,"/delete_struct"),data:e})},query_associated_nodes:function(e){return t.Z.post({url:"".concat(s,"/query_associated_nodes"),data:e})},mod_struct:function(e){return t.Z.post({url:"".concat(s,"/mod_struct"),data:e})},add_struct:function(e){return t.Z.post({url:"".concat(s,"/add_struct"),data:e})},query_scenes:function(e){return t.Z.post({url:"".concat(s,"/query_scenes"),data:e})},query_associated_graphs:function(e){return t.Z.post({url:"".concat(s,"/query_associated_graphs"),data:e})},add_scene:function(e){return t.Z.post({url:"".concat(s,"/add_scene"),data:e})},mod_scene:function(e){return t.Z.post({url:"".concat(s,"/mod_scene"),data:e})},query_graph_templates:function(e){return t.Z.post({url:"".concat(s,"/query_graph_templates"),data:e})},query_components:function(e){return t.Z.post({url:"".concat(s,"/query_components"),data:e})},delete_component:function(e){return t.Z.post({url:"".concat(s,"/delete_component"),data:e})},query_component_historys:function(e){return t.Z.post({url:"".concat(s,"/query_component_historys"),data:e})},get_scene_names:function(e){return t.Z.post({url:"".concat(s,"/get_scene_names"),data:e})},get_scene_available_graphs:function(e){return t.Z.post({url:"".concat(s,"/get_scene_available_graphs"),data:e})},mod_abtest:function(e){return t.Z.post({url:"".concat(s,"/mod_abtest"),data:e})},add_abtest:function(e){return t.Z.post({url:"".concat(s,"/add_abtest"),data:e})},query_graphs:function(e){return t.Z.post({url:"".concat(s,"/query_graphs"),data:e})},get_graph_template_names:function(e){return t.Z.post({url:"".concat(s,"/get_graph_template_names"),data:e})},batch_query_components:function(e){return t.Z.post({url:"".concat(s,"/batch_query_components"),data:e})},query_graph_historys:function(e){return t.Z.post({url:"".concat(s,"/query_graph_historys"),data:e})},query_template_available_node_factorys:function(e){return t.Z.post({url:"".concat(s,"/query_template_available_node_factorys"),data:e})},get_edge_factory_names:function(e){return t.Z.post({url:"".concat(s,"/get_edge_factory_names"),data:e})},get_node_factory_names:function(e){return t.Z.post({url:"".concat(s,"/get_node_factory_names"),data:e})},query_node_factorys:function(e){return t.Z.post({url:"".concat(s,"/query_node_factorys"),data:e})},mod_graph:function(e){return t.Z.post({url:"".concat(s,"/mod_graph"),data:e})},add_graph:function(e){return t.Z.post({url:"".concat(s,"/add_graph"),data:e})},get_config_prototype:function(e){return t.Z.post({url:"".concat(s,"/get_config_prototype"),data:e})},rollback_graph:function(e){return t.Z.post({url:"".concat(s,"/rollback_graph"),data:e})}}},22599:function(e,n,a){a.r(n),a.d(n,{default:function(){return A}});var t=a(18489),s=a(50678),r=a(72791),i=a(23695),c=a(83099),l=a(47528),d=a(64564),o=a(87309),u=a(618),m=a(48757),_=a(99154),p=a(58105),h=a(20135),f=a(58646),Z=a(66106),g=a(30914),x=a(79286),b=a(60238),y=a(80184),j=(p.Z.Option,h.Z.TextArea);function v(e){var n=f.Z.useForm(),a=(0,s.Z)(n,1)[0],t=(0,r.useState)([]),c=(0,s.Z)(t,2),l=c[0],d=c[1];(0,r.useEffect)((function(){e.form.scene_name&&e.scene_nameChange(e.form.scene_name),a.resetFields(),a.setFieldsValue(e.form)}),[e.form]);return(0,y.jsxs)(f.Z,{form:a,name:"dynamic_form_nest_item",className:"abtset-form",labelAlign:"left",labelCol:{span:5},onFinish:function(n){var a={abtest_name:n.abtest_name,bussiness_id:n.bussiness_id,channel_id:n.channel_id,module_id:n.module_id,scene_name:n.scene_name,client_version:n.client_version,status:1,admin:n.admin,des:n.des,config:n.config?JSON.stringify(n.config):[],associated_graphs:n.config?JSON.stringify(n.config.map((function(e){return{graph_name:e.graph_name,version:e.version}}))):[]};e.form.version?(a.version=e.form.version+1,b.Z.mod_abtest({opr:"mod_abtest",data:a}).then((function(n){console.log(n),0===n.status?(i.ZP.success(n.message),e.resFied()):i.ZP.error(n.message)}))):(a.version=1,b.Z.add_abtest({opr:"add_abtest",data:a}).then((function(n){0===n.status?(i.ZP.success(n.message),e.resFied()):i.ZP.error(n.message)})))},autoComplete:"off",children:[(0,y.jsxs)(Z.Z,{gutter:10,children:[(0,y.jsx)(g.Z,{span:13,children:(0,y.jsx)(f.Z.Item,{name:"abtest_name",label:"ABTest\u540d",rules:[{required:!0,message:"\u8bf7\u8f93\u5165ABTest\u540d"}],children:(0,y.jsx)(h.Z,{disabled:!1===e.isadd})})}),(0,y.jsx)(g.Z,{span:13,children:(0,y.jsx)(f.Z.Item,{name:"bussiness_id",label:"\u4e1a\u52a1id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4e1a\u52a1id"}],children:(0,y.jsx)(h.Z,{disabled:!1===e.isadd})})}),(0,y.jsx)(g.Z,{span:13,children:(0,y.jsx)(f.Z.Item,{name:"channel_id",label:"\u9891\u9053id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9891\u9053id"}],children:(0,y.jsx)(h.Z,{disabled:!1===e.isadd})})}),(0,y.jsx)(g.Z,{span:13,children:(0,y.jsx)(f.Z.Item,{name:"module_id",label:"\u6a21\u5757id",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u6a21\u5757id"}],children:(0,y.jsx)(h.Z,{disabled:!1===e.isadd})})}),(0,y.jsx)(g.Z,{span:13,children:(0,y.jsx)(f.Z.Item,{name:"client_version",label:"\u5ba2\u6237\u7aef\u7248\u672c",children:(0,y.jsx)(h.Z,{disabled:!1===e.isadd})})}),(0,y.jsx)(g.Z,{span:13,children:(0,y.jsx)(f.Z.Item,{name:"scene_name",label:"\u573a\u666f",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d1f\u8d23\u4eba"}],children:(0,y.jsx)(p.Z,{disabled:!1===e.isadd,onChange:function(n){var t=a.getFieldValue("config");console.log(t),t.forEach((function(e){e.graph_name="",e.version=""})),a.setFieldsValue({config:t}),e.scene_nameChange(n)},children:e.sceneArr.map((function(e,n){return(0,y.jsx)(p.Z.Option,{value:e,children:e},n)}))})})}),(0,y.jsx)(g.Z,{span:13,children:(0,y.jsx)(f.Z.Item,{name:"admin",label:"\u8d1f\u8d23\u4eba",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8d1f\u8d23\u4eba"}],children:(0,y.jsx)(h.Z,{disabled:!1===e.isadd})})}),(0,y.jsxs)(g.Z,{span:24,children:[(0,y.jsxs)(Z.Z,{style:{width:"100%"},children:[(0,y.jsx)(g.Z,{span:4,children:(0,y.jsx)("div",{className:"config-title",children:"\u53c2\u6570\u540d"})}),(0,y.jsx)(g.Z,{span:4,children:(0,y.jsx)("div",{className:"config-title",children:"\u53c2\u6570\u503c"})}),(0,y.jsx)(g.Z,{span:4,children:(0,y.jsx)("div",{className:"config-title",children:"\u53ec\u56de\u56fe\u540d"})}),(0,y.jsx)(g.Z,{span:4,children:(0,y.jsx)("div",{className:"config-title",children:"\u7248\u672c"})})]}),(0,y.jsx)(f.Z.List,{name:"config",children:function(n,t){var s=t.add,r=t.remove;return(0,y.jsxs)(y.Fragment,{children:[n.map((function(n,t){return(0,y.jsxs)(Z.Z,{style:{width:"100%"},children:[(0,y.jsx)(g.Z,{span:4,children:(0,y.jsx)(f.Z.Item,{className:"config-item",name:[n.name,"param_name"],rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53c2\u6570\u540d"}],children:(0,y.jsx)(h.Z,{placeholder:"\u8bf7\u8f93\u5165",disabled:!1===e.isadd})})}),(0,y.jsx)(g.Z,{span:4,children:(0,y.jsx)(f.Z.Item,{className:"config-item",name:[n.name,"param_value"],rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u53c2\u6570\u503c"}],children:(0,y.jsx)(h.Z,{disabled:!1===e.isadd,placeholder:"\u8bf7\u8f93\u5165"})})}),(0,y.jsx)(g.Z,{span:4,children:(0,y.jsx)(f.Z.Item,{className:"config-item",name:[n.name,"graph_name"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u53ec\u56de\u56fe\u540d"}],children:(0,y.jsx)(p.Z,{placeholder:"\u8bf7\u9009\u62e9",disabled:!1===e.isadd,onChange:function(){var n;console.log(a.getFieldValue("config"),t),n=a.getFieldValue("config")[t].graph_name,e.chartArr.arr&&d(e.chartArr.arr[n])},children:e.chartArr&&e.chartArr.graphArr.map((function(e){return(0,y.jsx)(p.Z.Option,{value:e,children:e},e)}))})})}),(0,y.jsx)(g.Z,{span:4,children:(0,y.jsx)(f.Z.Item,{className:"config-item",name:[n.name,"version"],rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7248\u672c"}],children:(0,y.jsx)(p.Z,{placeholder:"\u8bf7\u9009\u62e9",disabled:!1===e.isadd,children:l?l.map((function(e){return(0,y.jsx)(p.Z.Option,{value:e,children:e},e)})):null})})}),(0,y.jsx)(g.Z,{span:4,children:(0,y.jsx)(f.Z.Item,{className:"config-item",children:(0,y.jsx)(o.Z,{disabled:!1===e.isadd,style:{marginLeft:"10px"},onClick:function(){r(n.name)},children:"\u5220\u9664"})})})]},n.key)})),(0,y.jsx)(f.Z.Item,{children:(0,y.jsx)(o.Z,{disabled:!1===e.isadd,style:{margin:"10px 0px",width:"66.7%"},type:"dashed",onClick:function(){return s()},block:!0,icon:(0,y.jsx)(x.Z,{}),children:"\u589e\u52a0"})})]})}})]}),(0,y.jsx)(g.Z,{span:13,children:(0,y.jsx)(f.Z.Item,{name:"des",label:"\u63cf\u8ff0",children:(0,y.jsx)(j,{disabled:!1===e.isadd,rows:4})})})]}),e.isadd?(0,y.jsx)(f.Z.Item,{children:(0,y.jsx)(o.Z,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})}):null]})}var q={abtest_name:"",bussiness_id:"",channel_id:"",module_id:"",client_version:"",admin:"",status:"",scene_name:"",time:""},k=[{type:"input",name:"abtest_name",label:"ABTest\u540d"},{type:"input",name:"bussiness_id",label:"\u4e1a\u52a1id"},{type:"input",name:"channel_id",label:"\u9891\u9053id"},{type:"input",name:"module_id",label:"\u6a21\u5757id"},{type:"input",name:"client_version",label:"\u5ba2\u6237\u7aef\u7248\u672c"},{type:"input",name:"admin",label:"\u8d1f\u8d23\u4eba"},{type:"select",name:"status",label:"\u72b6\u6001",options:[{value:-1,label:"\u5931\u6548"},{value:0,label:"\u6709\u6548"},{value:1,label:"\u521b\u5efa\u6210\u529f"},{value:2,label:"\u6d4b\u8bd5\u53d1\u5e03"},{value:3,label:"\u6b63\u5f0f\u53d1\u5e03"},{value:4,label:"\u516c\u6709"},{value:5,label:"\u79c1\u6709"}]},{type:"input",name:"scene_name",label:"\u573a\u666f"},{type:"rangePicker",name:"time",label:"\u66f4\u65b0\u65f6\u95f4"}],I=a(17097),C=a(79271);function A(){var e=(0,r.useState)(!1),n=(0,s.Z)(e,2),a=n[0],p=n[1],h=(0,r.useState)([]),f=(0,s.Z)(h,2),Z=f[0],g=f[1],x=(0,r.useState)([]),j=(0,s.Z)(x,2),A=j[0],T=j[1],P=(0,r.useState)([]),F=(0,s.Z)(P,2),w=F[0],S=F[1],N=(0,r.useState)({graphArr:[],arr:[]}),O=(0,s.Z)(N,2),E=O[0],V=O[1],R=(0,r.useState)({}),B=(0,s.Z)(R,2),J=B[0],L=B[1],Q=(0,r.useState)(!1),z=(0,s.Z)(Q,2),D=z[0],G=z[1],H=(0,r.useState)(!1),K=(0,s.Z)(H,2),M=K[0],U=K[1],W=(0,C.k6)(),X=[{title:"#",render:function(e,n,a){return(0,y.jsx)("a",{children:a+1+""})}},{title:"\u56fe\u540d\u79f0",dataIndex:"graph_name",key:"graph_name"},{title:"\u7248\u672c",dataIndex:"version",key:"version"},{title:"\u56fe\u6a21\u677f",dataIndex:"template_name",key:"template_name"},{title:"\u8d1f\u8d23\u4eba",dataIndex:"admin",key:"admin"},{title:"\u63cf\u8ff0",dataIndex:"des",key:"des"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updated_time",key:"updated_time"},{title:"\u4f7f\u7528\u573a\u666f",dataIndex:"scene_name",key:'"scene_name'},{title:"\u64cd\u4f5c",key:"action",render:function(e,n){return(0,y.jsx)(c.Z,{size:"middle",children:(0,y.jsx)("a",{onClick:function(){W.push({pathname:"/HeterogeneousPlatform/componentsAdmin/chartAdmin",state:(0,t.Z)({},n)})},children:"\u67e5\u770b"},"view")})}}],Y=[{title:"#",render:function(e,n,a){return(0,y.jsx)("a",{children:a+1+""})}},{title:"ABTest\u540d",fType:"input",dataIndex:"abtest_name",key:"abtest_name"},{title:"\u4e1a\u52a1id",fType:"input",dataIndex:"bussiness_id",key:"bussiness_id"},{title:"\u9891\u9053id",fType:"input",dataIndex:"channel_id",key:'"channel_id'},{title:"\u6a21\u5757id",fType:"textArea",dataIndex:"module_id",key:"module_id"},{title:"\u5ba2\u6237\u7aef\u7248\u672c",fType:"textArea",dataIndex:"client_version",key:"client_version"},{title:"\u8d1f\u8d23\u4eba",fType:"textArea",dataIndex:"admin",key:"admin"},{title:"\u72b6\u6001",fType:"textArea",dataIndex:"status",key:"status",render:function(e){return(0,y.jsx)(l.Z,{color:I.a[e]?I.a[e]:"",children:I.Q[e]?I.Q[e]:""})}},{title:"\u573a\u666f",fType:"textArea",dataIndex:"scene_name",key:"scene_name"},{title:"\u66f4\u65b0\u65f6\u95f4",dataIndex:"updated_time",key:"updated_time"},{title:"\u64cd\u4f5c",key:"action",render:function(e,n){return(0,y.jsxs)(c.Z,{size:"middle",children:[(0,y.jsx)("a",{onClick:function(){console.log(n);var e=[];if(n.config){var a=JSON.parse(n.config);for(var s in a)e.push({param_name:a[s].param_name,param_value:a[s].param_value,graph_name:a[s].graph_name,version:a[s].version})}var r=(0,t.Z)((0,t.Z)({abtest_name:n.abtest_name,bussiness_id:n.bussiness_id,channel_id:n.channel_id,module_id:n.module_id,client_version:n.client_version,status:n.status,admin:n.admin},n),{},{config:e});G(!1),L(r),p(!0)},children:"\u67e5\u770b"},"view"),(0,y.jsx)("span",{style:{color:"#999",marginTop:"-1px"},children:" | "}),(0,y.jsx)("a",{onClick:function(){var e=[];if(n.config){var a=JSON.parse(n.config);for(var s in a)e.push({param_name:a[s].param_name,param_value:a[s].param_value,graph_name:a[s].graph_name,version:a[s].version})}var r=(0,t.Z)((0,t.Z)({abtest_name:n.abtest_name,bussiness_id:n.bussiness_id,channel_id:n.channel_id,module_id:n.module_id,client_version:n.client_version,status:n.status,admin:n.admin,version:n.version},n),{},{config:e});console.log(n),G(!0),L(r),p(!0)},children:"\u7f16\u8f91"},"edit"),(0,y.jsx)("span",{style:{color:"#999",marginTop:"-1px"},children:" | "}),(0,y.jsx)("a",{onClick:function(){!function(e){var n={opr:"query_associated_graphs",data:{associated_graphs:e.associated_graphs}};b.Z.query_associated_graphs(n).then((function(e){console.log(e),0===e.status?(T(e.data.results),U(!0),i.ZP.success(e.message)):i.ZP.error(e.message)}))}(n)},children:" \u5173\u8054\u56fe "},"node")]})}}],$=Y.filter((function(e){return e.fType})).map((function(e){return{type:e.fType,name:e.dataIndex,label:e.title}})),ee=function(e){console.log(e);var n=e.admin,a=e.abtest_name,t=e.channel_id,s=e.time,r=e.bussiness_id,c=e.module_id,l=e.client_version,d=e.scene_name,o={abtest_name:a||"",bussiness_id:r||"",channel_id:t||"",module_id:c||"",client_version:l||"",status:status||0,scene_name:d||"",admin:n||"",min_updated_time:s&&s[0]?new Date(s[0]).getTime():0,max_updated_time:s&&s[1]?new Date(s[1]).getTime():0};b.Z.query_abtests({opr:"query_abtests",data:o}).then((function(e){0===e.status?(g(e.data.results),i.ZP.success(e.message)):i.ZP.error(e.message)}))};(0,r.useEffect)((function(){ee({}),b.Z.get_scene_names({opr:"get_scene_names"}).then((function(e){0===e.status?S(e.data.scene_names):i.ZP.error(e.message)}))}),[]);return(0,y.jsxs)("div",{style:{padding:"30px 40px"},children:[(0,y.jsxs)("div",{children:[(0,y.jsx)(d.Z,{title:"\u67e5\u8be2\u6761\u4ef6",children:(0,y.jsx)(_.Z,{formRolue:k,form:q,queryList:ee})}),(0,y.jsx)(d.Z,{title:"\u67e5\u8be2\u7ed3\u679c",extra:(0,y.jsx)(o.Z,{type:"primary",onClick:function(){return G(!0),L({name:""}),void p(!0)},children:"\u65b0\u589e"}),style:{marginTop:"20px"},children:(0,y.jsx)(u.Z,{columns:Y,dataSource:Z},"bussiness_id")})]}),(0,y.jsx)(m.Z,{width:900,title:D?D&&J.version?"\u7f16\u8f91":"\u65b0\u589e":"\u67e5\u770b",afterClose:function(){L({})},visible:a,onCancel:function(){p(!1)},footer:[(0,y.jsx)(o.Z,{onClick:function(){p(!1)},children:"\u5173\u95ed"},"back")],children:(0,y.jsx)(v,{scene_nameChange:function(e){b.Z.get_scene_available_graphs({opr:"get_scene_available_graphs",data:{scene_name:e}}).then((function(e){if(0===e.status){var n={graphArr:Object.keys(e.data.results),arr:e.data.results};V(n)}else V({graphArr:[],arr:[]}),i.ZP.error(e.message)}))},formRolue:$,form:J,chartArr:E,isadd:D,showEdit:a,sceneArr:w,submitForm:function(e){var n=(0,t.Z)({},e);void 0!==J.version?(n.version=J.version+1,b.Z.mod_scene({opr:"mod_scene",data:n}).then((function(e){0===e.status?(ee({}),p(!1),i.ZP.success(e.message)):i.ZP.error(e.message)}))):b.Z.add_scene({opr:"add_scene",data:n}).then((function(e){0===e.status?(ee({}),p(!1),i.ZP.success(e.message)):i.ZP.error(e.message)}))},resFied:function(){p(!1),ee({})}})}),(0,y.jsx)(m.Z,{width:"60%",title:"\u5173\u8054\u56fe",visible:M,onCancel:function(){U(!1)},footer:[(0,y.jsx)(o.Z,{onClick:function(){U(!1)},children:"\u5173\u95ed"},"back")],children:(0,y.jsx)(u.Z,{columns:X,dataSource:A},"struct_name")})]})}},17097:function(e,n,a){a.d(n,{Q:function(){return t},a:function(){return s}});var t={0:"\u6709\u6548","-1":"\u5931\u6548",1:"\u521b\u5efa\u6210\u529f",2:"\u6d4b\u8bd5\u53d1\u5e03",3:"\u6b63\u5f0f\u53d1\u5e03",4:"\u516c\u6709",5:"\u79c1\u6709"},s={0:"green","-1":"#F56C6C",1:"#67C23A",2:"green",3:"#E6A23C",4:"#409EFF",5:"#909399"}},99154:function(e,n,a){a.d(n,{Z:function(){return p}});var t=a(72791),s=a(13295),r=a(58646),i=a(66106),c=a(30914),l=a(20135),d=a(58105),o=a(73231),u=a(87309),m=a(80184),_=s.Z.RangePicker;function p(e){var n=(0,t.useRef)(null);(0,t.useEffect)((function(){console.log("\u89e6\u53d1\u4e86",n.current.setFieldsValue(e.form))}),[]);return(0,m.jsx)("div",{children:(0,m.jsx)(r.Z,{name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!0},onFinish:function(n){e.queryList(n)},onFinishFailed:function(){console.log("\u5931\u8d25")},autoComplete:"off",ref:n,children:(0,m.jsxs)(i.Z,{children:[e.formRolue.map((function(e){switch(e.type){case"input":return(0,m.jsx)(c.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(l.Z,{})},e.name)});case"select":return(0,m.jsx)(c.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(d.Z,{children:e.options?e.options.map((function(e){return(0,m.jsx)(d.Z.Option,{value:e.value,children:e.label},e.value)})):null})},e.name)});case"picker":return(0,m.jsx)(c.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(s.Z,{style:{width:"100%"}})},e.name)});case"radio":return(0,m.jsx)(c.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsxs)(o.ZP.Group,{children:[(0,m.jsx)(o.ZP,{value:1,children:"A"}),e.options?e.options.map((function(e){return(0,m.jsx)(o.ZP,{value:e.value,children:e.label},e.value)})):null]})},e.name)});case"rangePicker":return(0,m.jsx)(c.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{label:e.label,name:e.name,children:(0,m.jsx)(_,{})},e.name)})}})),(0,m.jsx)(c.Z,{span:6,children:(0,m.jsx)(r.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,m.jsx)(u.Z,{type:"primary",htmlType:"submit",children:"\u67e5\u8be2"})})})]})})})}}}]);