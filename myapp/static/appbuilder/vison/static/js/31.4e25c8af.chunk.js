"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[31],{45117:function(e,n,t){t.d(n,{T:function(){return o},C:function(){return a}});var i=t(81899),o=function(){return(0,i.I0)()},a=i.v9},47031:function(e,n,t){t.r(n),t.d(n,{default:function(){return H}});var i=t(50678),o=t(72791),a=t(59332),s=t(35278),l=t(46933),d=t(44647),r=t(49161),c=t(29093),m=t(25698),p=t(61460),u=t(29618),h=t(70927),f=t(52274),x=t(4026),g=t(31776),y=t(18511),v=t(87532),w=t(64011),j=t(45117),b=t(84806),k=t.n(b),S=t(18323),_={sectionStyles:(0,S.y)({marginBottom:16,padding:"0 10px 24px 10px",borderBottom:"1px solid #dadada",selectors:{".subtitle":{marginBottom:20,height:24,lineHeight:"1.1",fontSize:20,fontWeight:"bold",fontFamily:'"Raleway","Helvetica Neue",Helvetica,Arial,sans-serif;'},".expand-button":{color:"#005cd2",marginRight:24,fontSize:14,marginBottom:12}}}),sampleStyles:(0,S.y)({minHeight:186,position:"relative",display:"flex",flexWrap:"wrap"}),sampleHide:(0,S.y)({height:186,overflow:"hidden"}),sampleCardStyle:(0,S.y)({width:200,marginRight:24,marginBottom:24}),cardContainer:(0,S.y)({width:200,height:124,borderRadius:2,display:"flex",flexDirection:"column",cursor:"pointer",backgroundColor:"#fff",border:"1px solid #dadada",selectors:{":hover":{boxShadow:"rgb(0 0 0 / 18%) 0px 6.4px 14.4px 0px, rgb(0 0 0 / 22%) 0px 1.2px 3.6px 0px"}}}),addIconStyles:(0,S.y)({fontSize:38,padding:"42px 0 29px",cursor:"pointer",textAlign:"center",color:"#005cd2"}),sampleImgStyles:(0,S.y)({height:"100%",backgroundRepeat:"no-repeat",backgroundSize:"cover",selectors:{img:{width:"100%",height:"100%"}}}),cardTitleStyles:(0,S.y)({marginTop:16,textAlign:"center",cursor:"pointer",whiteSpace:"nowrap",display:"flex",flexFlow:"column nowrap",width:"auto",height:"auto",textOverflow:"ellipsis"}),videoPlayerStyles:(0,S.y)({backgroundColor:"#000",width:800,height:500})},C=t(80184),N=function(e){var n=(0,j.T)(),t=(0,o.useState)(!1),s=(0,i.Z)(t,2),l=s[0],d=s[1],r=(0,o.useState)(!1),c=(0,i.Z)(r,2),m=c[0],p=c[1],u=(0,o.useState)(""),h=(0,i.Z)(u,2),f=h[0],x=h[1],b=(0,o.useState)(void 0),S=(0,i.Z)(b,2),N=S[0],W=S[1],T=(0,j.C)(w.zr);return(0,o.useEffect)((function(){m&&f&&setTimeout((function(){var e=new(k())({id:"video-player",url:f,width:800,height:500});W(e)}),0),m&&N&&(N.destroy(),W(void 0))}),[m,f]),(0,o.useEffect)((function(){}),[N]),(0,C.jsxs)(a.K,{className:_.sectionStyles,children:[(0,C.jsxs)(a.K,{className:"flex-section",horizontal:!0,horizontalAlign:"space-between",children:[(0,C.jsx)("div",{className:"subtitle",children:e.name}),(0,C.jsx)("div",{className:"expand-button",onClick:function(){d(!l)},children:l?"\u6298\u53e0":"\u66f4\u591a"})]}),(0,C.jsxs)("div",{className:"".concat(_.sampleStyles," ").concat(l?"":_.sampleHide),children:[e.first?(0,C.jsxs)("div",{className:_.sampleCardStyle,onClick:function(){g.Z.pipeline_modelview_add({describe:"new-pipeline-".concat(Date.now()),name:"".concat(T,"-pipeline-").concat(Date.now()),node_selector:"cpu=true,train=true",schedule_type:"once",image_pull_policy:"Always",parallelism:1,project:7}).then((function(e){if(0===(null===e||void 0===e?void 0:e.status)&&"success"===(null===e||void 0===e?void 0:e.message)){var n,t="".concat(window.location.origin).concat(location.pathname,"?pipeline_id=").concat(null===e||void 0===e||null===(n=e.result)||void 0===n?void 0:n.id);window.open("".concat(window.location.origin,"/frontend/showOutLink?url=").concat(encodeURIComponent(t)),"bank")}})).catch((function(e){e.response&&n((0,w.L$)({msg:e.response.data.message}))}))},children:[(0,C.jsx)("div",{className:_.cardContainer,children:(0,C.jsx)(y.J,{iconName:"Add",className:_.addIconStyles})}),(0,C.jsx)("div",{className:_.cardTitleStyles,children:(0,C.jsx)("span",{children:"\u65b0\u5efa\u6d41\u6c34\u7ebf"})})]}):null,e.data.map((function(e,n){return e.img?(0,C.jsxs)("div",{className:_.sampleCardStyle,onClick:function(){!function(e){var n="".concat(window.location.origin).concat(location.pathname,"?pipeline_id=").concat(null===e||void 0===e?void 0:e.id);switch(e.type){case"link":window.open("".concat(window.location.origin,"/frontend/showOutLink?url=").concat(encodeURIComponent(n)),"bank");break;case"outside":window.open(e.url,"_blank");break;case"video":p(!0),x(e.url)}}(e)},children:[(0,C.jsx)("div",{className:_.cardContainer,children:(0,C.jsx)("div",{className:_.sampleImgStyles,children:(0,C.jsx)("img",{src:e.img,alt:e.name})})}),(0,C.jsx)("div",{className:_.cardTitleStyles,children:(0,C.jsx)("span",{children:e.name})})]},n):null}))]}),(0,C.jsx)(v.u,{isOpen:m,onDismiss:function(){return p(!1)},children:(0,C.jsx)("div",{id:"video-player",className:_.videoPlayerStyles})})]})},W=[{name:"\u65b0\u4eba\u5236\u4f5c\u4e00\u4e2apipeline",img:"/static/assets/images/ad/video-cover2-thumb.png",url:"https://docker-76009.sz.gfp.tencent-cloud.com/kubeflow/make_pipeline.mp4",type:"video"},{name:"\u5f00\u53d1\u5b9a\u5236\u4e00\u4e2a\u4efb\u52a1\u6a21\u677f",img:"/static/assets/images/ad/video-cover2-thumb.png",url:"https://docker-76009.sz.gfp.tencent-cloud.com/kubeflow/make_job_template.mp4",type:"video"}],T=t(48636),z={root:{width:"100%",height:"100%",overflow:"hidden"}},K={dropdown:{width:100,marginLeft:10,marginRight:20}},Z=[{key:"10",text:"10"},{key:"25",text:"25"},{key:"50",text:"50"},{key:"100",text:"100"}],H=function(){var e=(0,j.T)(),n=(0,j.C)(T.cJ),t=(0,j.C)(T.td),y=(0,o.useState)([]),v=(0,i.Z)(y,2),w=v[0],b=v[1],k=(0,o.useState)([]),S=(0,i.Z)(k,2),_=S[0],H=S[1],R=(0,o.useState)([]),I=(0,i.Z)(R,2),O=I[0],A=I[1],B=(0,o.useState)(0),D=(0,i.Z)(B,2),L=D[0],M=D[1],E=(0,o.useState)(10),J=(0,i.Z)(E,2),P=J[0],F=J[1],U=(0,o.useState)(!1),V=(0,i.Z)(U,2),G=V[0],$=V[1],q=(0,o.useState)(!1),Q=(0,i.Z)(q,2),X=Q[0],Y=Q[1],ee=[{key:"id",name:"ID",fieldName:"id",minWidth:50,maxWidth:100,data:"number"},{key:"name",name:"\u4efb\u52a1\u6d41",fieldName:"name",minWidth:200,maxWidth:350,data:"string",onRender:function(e){return(0,C.jsx)("span",{style:{textDecoration:"underline",color:"#005ccb",cursor:"pointer"},onClick:function(){ne(e)},dangerouslySetInnerHTML:{__html:e.name}})}},{key:"describe",name:"\u63cf\u8ff0",fieldName:"describe",minWidth:200,maxWidth:300,data:"string"},{key:"changed_on",name:"\u4fee\u6539\u65f6\u95f4",fieldName:"changed_on",minWidth:200,maxWidth:300,data:"string"},{key:"project_id",name:"\u9879\u76ee\u7ec4",minWidth:150,maxWidth:200,onRender:function(e){return(0,C.jsx)("div",{children:O[e.project_id].name})}}],ne=function(e){var n="".concat(window.location.origin).concat(location.pathname,"?pipeline_id=").concat(null===e||void 0===e?void 0:e.id);window.open("".concat(window.location.origin,"/frontend/showOutLink?url=").concat(encodeURIComponent(n)),"bank")};return(0,o.useEffect)((function(){b(W),g.Z.pipeline_modelview_demo().then((function(e){if(0===e.status){var n=e.result.map((function(e){return{id:e.id,name:e.describe,img:JSON.parse(e.parameter).img||"",type:"link"}}));H(n)}})),g.Z.project_all().then((function(n){if(0===n.status){$(!0);var t=[];n.result.data.forEach((function(e){e.id&&(t[e.id]=e)})),console.log("list",t),A(t),e((0,T.JO)())}}))}),[]),(0,o.useEffect)((function(){G&&e((0,T.Jd)({page:L,page_size:P}))}),[P,G,L]),(0,o.useEffect)((function(){t&&Y(t.length<P)}),[t]),(0,C.jsx)(a.K,{className:"home-container",styles:z,children:(0,C.jsxs)(a.K,{as:"main",grow:!0,verticalFill:!0,styles:{root:{padding:"8px 14px",overflow:"scroll"}},children:[(0,C.jsx)(N,{name:"\u5e73\u53f0\u4e3b\u8981\u529f\u80fd",data:_,first:!0}),(0,C.jsx)(N,{name:"\u65b0\u624b\u89c6\u9891",data:w}),(0,C.jsxs)(a.K,{styles:{root:{marginTop:"16px !important",padding:"0 10px 24px"}},children:[(0,C.jsx)(a.K,{className:"flex-section",horizontal:!0,horizontalAlign:"space-between",children:(0,C.jsx)("div",{className:"subtitle",style:{marginBottom:8,height:24,lineHeight:"1.1",fontSize:20,fontWeight:"bold"},children:"\u6d41\u6c34\u7ebf"})}),(0,C.jsxs)(s.o,{"aria-label":"Basic Pivot Example",defaultSelectedKey:"1",children:[(0,C.jsx)(l.M,{headerText:"\u6211\u7684",headerButtonProps:{"data-order":1,"data-title":"My Files Title"},itemKey:"1",children:(0,C.jsx)("div",{children:(0,C.jsx)(d.W,{items:n,columns:ee.concat({key:"action",name:"\u64cd\u4f5c",minWidth:200,maxWidth:300,onRender:function(n){return(0,C.jsx)("div",{children:(0,C.jsx)(r.G,{content:"\u5220\u9664",children:(0,C.jsx)(c.h,{onClick:function(){!function(n){null!==n&&void 0!==n&&n.id&&g.Z.pipeline_modelview_delete(n.id).then((function(n){0===n.status&&e((0,T.JO)())}))}(n)},iconProps:{iconName:"Delete",styles:{root:{color:"red"}}}})})})}}),selectionMode:m.oW.none,setKey:"none",layoutMode:p.Oh.fixedColumns,isHeaderVisible:!0,compact:!0,styles:{headerWrapper:{".ms-DetailsHeader":{paddingTop:0}},contentWrapper:{lineHeight:"32px"}}})})}),(0,C.jsx)(l.M,{headerText:"\u534f\u4f5c",itemKey:"2",children:(0,C.jsxs)("div",{children:[(0,C.jsx)(u.J,{setKey:"none",isHeaderVisible:!0,items:t||[],columns:ee,compact:!!t,selectionMode:m.oW.none,layoutMode:p.Oh.fixedColumns,enableShimmer:!t,detailsListStyles:{headerWrapper:{".ms-DetailsHeader":{paddingTop:0}},contentWrapper:{lineHeight:"32px"}},listProps:{renderedWindowsAhead:0,renderedWindowsBehind:0}}),(0,C.jsxs)(a.K,{horizontal:!0,reversed:!0,verticalAlign:"center",styles:{root:{marginTop:20}},children:[(0,C.jsx)(h.K,{text:"\u4e0b\u4e00\u9875",styles:{root:{marginRight:10}},disabled:X,onClick:function(){!X&&t&&M(L+1)}}),(0,C.jsx)(h.K,{text:"\u4e0a\u4e00\u9875",styles:{root:{marginRight:10}},disabled:0===L,onClick:function(){0!==L&&t&&M(L-1)}}),(0,C.jsx)(f.L,{defaultSelectedKey:"10",placeholder:"\u9009\u62e9\u9875\u6570",options:Z,styles:K,onChange:function(e,n){M(0),(null===n||void 0===n?void 0:n.key)&&F(+n.key)}}),(0,C.jsx)(x.x,{styles:{root:{fontSize:14,fontWeight:600}},children:"\u9009\u62e9\u9875\u6570"})]})]})})]})]})]})})}}}]);