(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{177:function(e,a,t){},250:function(e,a,t){},251:function(e,a,t){"use strict";t.r(a);var c=t(3),n=t(0),s=t(28),i=t.n(s),r=t(112),o=t(144),l=t(145),d=t(146),m=t(160),j=t(155),u=(t(177),t(69)),b=t(25),p={LOGIN_REQUEST:"LOGIN_REQUEST",LOGIN_COMPLETE:"LOGIN_COMPLETE",GET_ALL_DATA_REQUEST:"GET_ALL_DATA_REQUEST",GET_ALL_DATA_COMPLETE:"GET_ALL_DATA_COMPLETE",RELOAD_PAGE_REQUEST:"RELOAD_PAGE_REQUEST",LOGOUT_REQUEST:"LOGOUT_REQUEST",LOGOUT_COMPLETE:"LOGOUT_COMPLETE"},h="/staticpromotionalwebsite",v="/our-team",O="/contact",x=function(){return{type:p.RELOAD_PAGE_REQUEST}},f=t(22),g=t.n(f),N=t.p+"static/media/mac2.de70cc47.svg",y=t(6),w=t.n(y),E=t(113),k=function(e){var a=e.className,t=e.type,n=e.title,s=e.onClick;return Object(c.jsx)(E.a,{onClick:s,type:t,className:w()("button-ct-wrapper",a),children:n})};k.defaultProps={className:"",type:void 0,title:"",onClick:function(){}};var S=t(55),C=t(258),T=["Our Team","Business","Contact","Document"],L=t(60),P=function(e){var a=Object(n.useState)(e),t=Object(S.a)(a,2),c=t[0],s=t[1];return[c,function(e){return s((function(a){var t=g.a.assign(a,e);return Object(L.a)({},t)}))}]},D=C.a.Item,R=h,A=O,_=v,I=function(e){var a=Object(b.g)(),t=Object(b.h)(),n=P({current:!1}),s=Object(S.a)(n,2),i=s[0],r=s[1],o=i.current;return Object(c.jsxs)("div",{className:"home-header",children:[Object(c.jsx)(E.a,{type:"text",className:"home-header-left",onClick:function(){var e;(null===(e=t.pathname)||void 0===e?void 0:e.includes(R))||a.push(R)},children:Object(c.jsx)("span",{children:"Static Promotional Website"})}),Object(c.jsx)("div",{className:"home-header-right",children:Object(c.jsxs)(C.a,{onClick:function(e){if(e.key!==i.current){switch(e.key){case T[0]:a.push(_);break;case T[1]:break;case T[2]:a.push(A)}r({current:e.key})}},selectedKeys:[o],mode:"horizontal",children:[Object(c.jsx)(D,{children:T[0]},T[0]),Object(c.jsx)(D,{children:T[1]},T[1]),Object(c.jsx)(D,{children:T[2]},T[2]),Object(c.jsx)(D,{children:T[3]},T[3])]})})]})};I.defaultProps={};var M=I,G=function(){Object(b.g)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)(M,{}),Object(c.jsx)("div",{className:"home-pad",children:Object(c.jsx)("div",{className:"home-introduct",children:Object(c.jsx)("img",{src:N,className:"home-introduct-icon",alt:"Mac icon"})})})]})})};G.defaultProps={};var U=G,F=t.p+"static/media/myAvatar.a74f52ab.jpg",B=t.p+"static/media/khanghua.7c1cecc5.jpg",H=t.p+"static/media/leehuuly.a92e6678.jpg",Q=[{icon:B,name:"Khang Hua",dob:"21/10/1998",role:"Back-end developer",skills:"MongoDB, Docker, Kubernetes, Jenkins",exp:"1.5+ years",programming:"Javascript, Python, Go",hobbies:"Music, Books, Game",email:"khanghua1505@gmail.com",phone:"+84 032 692 4848",others:"GraphQL, MySQL"},{icon:F,name:"Truong Thanh Triet",dob:"05/08/1997",role:"Front-end developer",skills:"Graphql, CSS3, HTML5",exp:"1.5+ years",programming:"React, React Native",hobbies:"Guitar, Gym, Game",email:"tttriet1997@gmail.com",phone:"+84 819 541 897",others:"Blender 3D, Figma",isExtra:!0,url:"/my-cv"},{icon:H,name:"L\xea H\u1eefu L\xfd",dob:"30/07/1996",role:"Front-end developer",skills:"CSS, HTML",exp:"2+ years",programming:"ReactJS, React Native",hobbies:"volleyball, badminton",email:"lehuuly1512313@gmail.com",phone:"+84 868 838 871",others:""}],V=t(256),J=function(e){var a=e.className,t=e.data,n=e.isExtra,s=e.onClickExtra,i=t.icon,r=t.name,o=t.dob,l=t.role,d=t.skills,m=t.exp,j=t.programming,u=t.email,b=t.phone,p=t.hobbies,h=t.others;return Object(c.jsx)("div",{className:w()("member-card",a),children:Object(c.jsx)(V.a,{hoverable:!0,extra:n?Object(c.jsx)(E.a,{onClick:s,children:"more"}):void 0,title:Object(c.jsxs)("div",{className:"member-card-title",children:[Object(c.jsx)("img",{src:i,className:"member-card-icon",alt:"Avatar img"}),Object(c.jsx)("div",{className:"member-card-name-dob",children:Object(c.jsx)("span",{children:"".concat(r," - ").concat(o)})})]}),children:Object(c.jsxs)("div",{className:"member-card-content",children:[Object(c.jsxs)("div",{className:"member-card-content-col",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)("span",{children:"Role: ".concat(l)})}),Object(c.jsx)("div",{className:"mt4",children:Object(c.jsx)("span",{children:"Skills: ".concat(d)})})]}),Object(c.jsxs)("div",{className:"member-card-content-col",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)("span",{children:"Work experience: ".concat(m)})}),Object(c.jsx)("div",{className:"mt4",children:Object(c.jsx)("span",{children:"Programming language: ".concat(j)})})]}),Object(c.jsxs)("div",{className:"member-card-content-col",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)("span",{children:"Email: ".concat(u)})}),Object(c.jsx)("div",{className:"mt4",children:Object(c.jsx)("span",{children:"Phone number: ".concat(b)})})]}),Object(c.jsxs)("div",{className:"member-card-content-col",children:[Object(c.jsx)("div",{className:"",children:Object(c.jsx)("span",{children:"Hobbies: ".concat(p)})}),Object(c.jsx)("div",{className:"mt4",children:Object(c.jsx)("span",{children:"Others: ".concat(h)})})]})]})})})};J.defaultProps={data:{},className:"",name:"",isExtra:!1,onClickExtra:function(){}};var K=J,Y=function(e){var a=Object(b.g)();return Object(c.jsxs)("div",{className:"our-team",children:[Object(c.jsx)(M,{}),Object(c.jsx)("div",{className:"our-team-main",children:Object(c.jsx)("div",{className:"our-team-container",children:g.a.map(Q,(function(e,t){return Object(c.jsx)(K,{onClickExtra:function(){(null===e||void 0===e?void 0:e.url)&&a.push(e.url)},className:0!==t?"mt24":"",data:e,isExtra:null===e||void 0===e?void 0:e.isExtra},t)}))})}),Object(c.jsx)("div",{className:"place-holder"})]})},W=t(98),q=t(27),X=t.n(q),Z=t(107),z=t(128),$=t.n(z),ee=t(154),ae=t(257),te="user_ifRDsRNLo5MuDa0rvipwh",ce="template_wjip4nr",ne="service_qd6xb58",se=t(259),ie=t(260),re=t(255),oe=t(149),le=function(e){var a=e.className,t=e.title;return t?Object(c.jsx)("div",{className:w()("input-title-wrapper",a),children:Object(c.jsx)("span",{children:t})}):null};le.defaultProps={className:"",title:""};var de=le,me=t(254),je=t(129),ue=t(36),be=t.n(ue),pe=function(e){var a,t=e.className,n=e.title,s=e.placeholder,i=e.format,r=e.value,o=e.name,l=e.suffixIcon,d=e.type,m=e.disabledDate,j=e.disabled,u=function(a){e.onChange(o,a)};switch(m){case"PAST":a=function(e){return e>be()().endOf("day")};break;case"FUTURE":a=function(e){return e<=be()().endOf("day")}}return Object(c.jsxs)("div",{className:w()("datepicker-ct-wrapper",t),children:[Object(c.jsx)(de,{title:n}),"TIME"===d?Object(c.jsx)(me.a,{disabled:j,getPopupContainer:function(e){return e.parentElement},suffixIcon:l,placeholder:s,onChange:u,format:i,value:"string"===typeof r&&be()(r).isValid()?be()(r):r||void 0,disabledDate:a}):Object(c.jsx)(je.a,{disabled:j,getPopupContainer:function(e){return e.parentElement},suffixIcon:l,placeholder:s,onChange:u,format:i,value:"string"===typeof r&&be()(r).isValid()?be()(r):r||void 0,disabledDate:a})]})};pe.defaultProps={className:void 0,format:"MM/DD/YYYY",title:"",placeholder:"Select date",onChange:function(){},value:void 0,name:"",disabledDate:void 0,suffixIcon:void 0,type:"DATE",disabled:!1};var he=pe,ve=function(e){var a=e.className,t=e.type,n=e.rows,s=e.placeholder,i=e.title,r=e.disabled,o=e.value,l=e.inputClassName,d=e.maxLength,m=e.prefix,j=e.mask,u=e.format,b=e.decimalScale,p=e.name,h=(e.allowedDecimalSeparators,e.allowLeadingZeros,e.thousandSeparator,e.data,e.mode,e.unitValue,e.onChangeUnit,e.disabledDate),v=e.suffix,O=e.autoComplete,x=(e.supName,e.errMes),f=e.errMesClassName,g=e.absSuffix,N=e.allowNegative,y=(e.isValueOutside,e.isSearchable,e.loadOptions,e.options,e.clearOptions,e.onInputChange,function(a){e.onChange(p,a.target.value)});return Object(c.jsxs)("div",{className:w()("input-ct-wrapper",a),children:[Object(c.jsx)(de,{title:i}),"TEXTAREA"===t?Object(c.jsx)(se.a.TextArea,{value:o,disabled:r,placeholder:s,rows:n,onChange:y}):null,"NUMBER"===t?Object(c.jsx)(oe.a,{mask:j,format:u,value:o,className:w()("basic-number-format",l,x?"err-border":""),disabled:r,onValueChange:function(a){var t=a.value;e.onChange(p,t)},placeholder:s,maxLength:d,decimalScale:b,prefix:m,suffix:v,allowNegative:N}):null,"DATE"===t?Object(c.jsx)(he,{name:p,placeholder:s,value:o,onChange:e.onChange,disabledDate:h,suffixIcon:v}):null,"text"===t?Object(c.jsx)(se.a,{className:x?"err-border":"",value:o,disabled:r,placeholder:s,onChange:y,prefix:m,suffix:v}):null,"PASSWORD"===t?Object(c.jsx)(se.a.Password,{value:o,disabled:r,placeholder:s,onChange:y,iconRender:function(e){return e?Object(c.jsx)(ie.a,{}):Object(c.jsx)(re.a,{})},autoComplete:O}):null,x?Object(c.jsx)("div",{className:w()("div-incorrect-mes",f),children:Object(c.jsx)("span",{children:x})}):null,g&&Object(c.jsx)("div",{className:"abs-suffix-ct",children:Object(c.jsx)("span",{children:g})})]})};ve.defaultProps={className:void 0,rows:4,type:"text",title:"",placeholder:"Enter...",onChange:function(){},onChangeUnit:function(){},disabled:!1,value:void 0,inputClassName:"",maxLength:20,allowedDecimalSeparators:void 0,decimalScale:void 0,allowLeadingZeros:!1,thousandSeparator:!1,prefix:void 0,suffix:void 0,mask:void 0,format:void 0,name:"",supName:"",data:[],mode:void 0,unitValue:"",disabledDate:void 0,autoComplete:"",errMes:"",errMesClassName:"",absSuffix:"",allowNegative:!1,isValueOutside:!1,isSearchable:!1,loadOptions:function(){},options:[],clearOptions:function(){},onInputChange:function(){}};var Oe=ve;Object(z.init)(te);var xe=function(e){var a=P({subject:"",email:"",message:"",loading:!1,cooldown:0}),t=Object(S.a)(a,2),s=t[0],i=t[1],r=s.subject,o=s.message,l=s.loading,d=s.email,m=s.cooldown;Object(n.useEffect)((function(){if(m>0){var e=setInterval((function(){i({cooldown:m-1})}),1e3);return function(){return clearInterval(e)}}return function(){}}),[s.cooldown]);var j=function(){var e,a,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success";switch(t){case"success":e="Your mail is successfully sent to us, thank you!",a="We will answer your email as soon as possible. Please wait!";break;case"warning":e="You are in cooldown duration!",a="Please wait for a min!"}ee.a[t]({message:e,description:a})},u=function(){var e=Object(Z.a)(X.a.mark((function e(a){var t,c;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===m){e.next=3;break}return j("warning"),e.abrupt("return");case 3:return console.log({e:a}),t={subject:r,message:o,email:d},console.log({sendingData:t}),e.prev=6,e.next=9,$.a.send(ne,ce,t,te);case 9:c=e.sent,console.log({res:c}),"OK"===(null===c||void 0===c?void 0:c.text)&&(j(),i({cooldown:60})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),console.log("Failed to send email: ",e.t0);case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(a){return e.apply(this,arguments)}}(),b=function(e,a){i(Object(W.a)({},e,a))};return Object(c.jsxs)("div",{className:"contact",children:[Object(c.jsx)(M,{}),Object(c.jsx)("div",{className:"contact-main",children:Object(c.jsxs)(ae.a,{name:"basic",className:"contact-form",initialValues:{remember:!1},onFinish:u,onFinishFailed:function(){return console.log("fail")},children:[Object(c.jsx)(ae.a.Item,{className:"mb0",children:Object(c.jsx)(Oe,{name:"subject",title:"The Subject:",placeholder:"Order a website...",value:r,onChange:b})}),Object(c.jsx)(ae.a.Item,{className:"mb0-mt16",children:Object(c.jsx)(Oe,{name:"email",className:"mt16",title:"Your Email:",placeholder:"ClarkKent@superman.com",value:d,onChange:b})}),Object(c.jsx)(ae.a.Item,{className:"mb0-mt16",children:Object(c.jsx)(Oe,{name:"message",title:"Your Message:",type:"TEXTAREA",onChange:b,value:o,placeholder:"I want to ..."})}),Object(c.jsx)(ae.a.Item,{className:"mb0-mt40",children:Object(c.jsx)(E.a,{disabled:!o,loading:l,type:"primary",block:!0,htmlType:"submit",children:"Send Email"})}),0!==m&&Object(c.jsx)("div",{children:Object(c.jsx)("span",{children:"Please wait for ".concat(m,"s to send another email!")})})]})})]})};xe.defaultProps={};var fe=xe,ge=t(269),Ne=t(270),ye=t(261),we=t(262),Ee=t(263),ke=t(264),Se=t(265),Ce=t(266),Te=t(267),Le=t(268),Pe=t.p+"static/media/react.3050572a.svg",De=t.p+"static/media/figma.9840068e.svg",Re=t.p+"static/media/js.42de09c1.svg",Ae=t.p+"static/media/npm.66674136.svg",_e=t.p+"static/media/python.0b6d9996.svg",Ie=t.p+"static/media/sourcetree.a782f129.svg",Me=t.p+"static/media/vs.04315a89.svg",Ge=t.p+"static/media/css3.03390e7c.svg",Ue=t.p+"static/media/html.b52d43b6.svg",Fe=t.p+"static/media/graphql.e335785b.svg",Be=t.p+"static/media/cardiac.232fdf9a.svg",He=t.p+"static/media/nano.8253c53e.png",Qe=t.p+"static/media/mdm.bea6dc0b.svg",Ve=t.p+"static/media/biocare.ee93e369.svg",Je=["https://www.facebook.com/profile.php?id=100015087697713","https://www.linkedin.com/in/tri%E1%BA%BFt-tr%C6%B0%C6%A1ng-thanh-89a92b161/"],Ke=["Web-App Develop","Technical Research","Team work","Project progressing"],Ye=["Vietnamese","English"],We=[{name:"Impact Technical Resources VN",position:"Software - Front-end developer",duration:"Jan 2020 - Present - 1 year, Hochiminh city",content:["I develop Web-App products by using React/React Native. Experienced with a lean product development process: research, design, coding, test, and iterate."]},{name:"Other",position:"",duration:"",content:["Private tutor at Math and English for secondary student.","Private tour guide for foreigner in Hochiminh city."]}],qe=[{name:"Bachelor of Computer Science in Information Technology",position:"University Of Science - Hochiminh",duration:"2015-2019, Hochiminh city"}],Xe=[{icon:Pe,title:"React"},{icon:Re,title:"JavaScript"},{icon:Ae,title:"Npm"},{icon:Ge,title:"CSS3"},{icon:Ue,title:"HTML5"}],Ze=[{icon:Ie,title:"Sourcetree"},{icon:Me,title:"VisualStudioCode"},{icon:De,title:"Figma"},{icon:_e,title:"Python"},{icon:Fe,title:"Graphql"}],ze=[{name:"Biocare Cardiac",icon:Be,link:"https://alpha.cardiac.bioflux.io"},{name:"Nano Dashboard",icon:He,link:"http://admindashboard.fiot.vn"},{name:"MD Matrix - Telemed",icon:Qe,link:"https://telemed.alpha.bioflux.io"},{name:"Biocare Pain Management",icon:Ve,link:"https://play.google.com/store/apps/details?id=biotricity.bioflux.biocare.android.app"}],$e=function(e){var a=e.className,t=e.title,n=e.icon,s=e.type;return Object(c.jsxs)("div",{className:w()("info-row-wrapper",a),children:[Object(c.jsx)("div",{className:"info-row-icon",children:n}),"LINK"===s?Object(c.jsx)(E.a,{onClick:function(){return window.open(t,"")},type:"link",className:"info-row-title",children:t}):Object(c.jsx)("div",{className:"info-row-title",children:Object(c.jsx)("span",{children:t})})]})};$e.defaultProps={className:"",title:"",icon:"",type:""};var ea=$e,aa=function(){return Object(c.jsxs)("div",{className:"my-cv-left",children:[Object(c.jsxs)("div",{className:"my-cv-header",children:[Object(c.jsx)("img",{src:F,className:"my-cv-avatar",alt:"Avatar img"}),Object(c.jsxs)("div",{className:"my-cv-names",children:[Object(c.jsx)("div",{className:"my-cv-lastname",children:Object(c.jsx)("span",{children:"Truong Thanh"})}),Object(c.jsx)("div",{className:"my-cv-firstname",children:Object(c.jsx)("span",{children:"Triet"})}),Object(c.jsx)("div",{className:"my-cv-role",children:Object(c.jsx)("span",{children:"Web-App developer"})})]})]}),function(){var e=[{icon:Object(c.jsx)(ye.a,{}),title:"tttriet1997@gmail.com"},{icon:Object(c.jsx)(we.a,{}),title:"(+84) 819 541 897"},{icon:Object(c.jsx)(Ee.a,{}),title:"https://aceknight97.github.io/staticpromotionalwebsite",type:"LINK"},{icon:Object(c.jsx)(ke.a,{}),title:"District 7, Hochiminh city"}];return g.a.map(e,(function(e,a){return Object(c.jsx)(ea,{className:0===a?"mt24":"mt16",icon:e.icon,title:e.title,type:null===e||void 0===e?void 0:e.type},a)}))}(),Object(c.jsxs)("div",{className:"my-cv-body",children:[Object(c.jsx)("div",{className:"my-cv-body-title",children:Object(c.jsx)("span",{children:"Industry Knowledge"})}),g.a.map(Ke,(function(e,a){return Object(c.jsxs)("div",{className:"my-cv-body-content",children:[Object(c.jsx)("span",{className:"a-dot",children:"\u25cf"}),Object(c.jsx)("span",{children:e})]},a)}))]}),Object(c.jsxs)("div",{className:"my-cv-body",children:[Object(c.jsx)("div",{className:"my-cv-body-title",children:Object(c.jsx)("span",{children:"Languages"})}),g.a.map(Ye,(function(e,a){return Object(c.jsx)("div",{className:"my-cv-body-content",children:Object(c.jsx)("span",{children:e})},a)}))]}),Object(c.jsxs)("div",{className:"my-cv-body",children:[Object(c.jsx)("div",{className:"my-cv-body-title",children:Object(c.jsx)("span",{children:"Social"})}),g.a.map(Je,(function(e,a){return Object(c.jsx)(E.a,{onClick:function(){return window.open(e,"")},type:"link",className:"my-cv-body-link",children:e},a)}))]}),function(){var e=[{title:"Reading",icon:Object(c.jsx)(Se.a,{})},{title:"Movies",icon:Object(c.jsx)(Ce.a,{})},{title:"Soccer",icon:Object(c.jsx)(Te.a,{})},{title:"Science Research",icon:Object(c.jsx)(Le.a,{})}];return Object(c.jsxs)("div",{className:"my-cv-body",children:[Object(c.jsx)("div",{className:"my-cv-body-title",children:Object(c.jsx)("span",{children:"Hobbies"})}),Object(c.jsx)("div",{className:"my-cv-body-hobbies-wrapper",children:g.a.map(e,(function(e,a){return Object(c.jsxs)("div",{className:"my-cv-hobbies",children:["object"===typeof e.icon?Object(c.jsx)("div",{className:"my-cv-hobbies-icon",children:e.icon}):Object(c.jsx)("img",{src:e.icon,alt:"Hobbies icon",className:"my-cv-hobbies-icon"}),Object(c.jsx)("div",{className:"my-cv-hobbies-title",children:Object(c.jsx)("span",{children:e.title})})]},a)}))})]})}()]})};aa.defaultProps={};var ta=aa,ca=function(e){var a=e.className,t=e.title;return Object(c.jsxs)("div",{className:w()("body-topic-wrapper",a),children:[Object(c.jsx)("div",{className:"summary",children:Object(c.jsx)("span",{children:t.toUpperCase()})}),Object(c.jsx)("div",{className:"border-line"})]})};ca.defaultProps={className:"",title:""};var na=ca,sa=function(e){var a=e.className,t=e.data,n=t.name,s=t.position,i=t.duration,r=t.content;return Object(c.jsxs)("div",{className:a,children:[n&&Object(c.jsx)("div",{className:"cv-exp-company-name",children:Object(c.jsx)("span",{children:n})}),s&&Object(c.jsx)("div",{className:"cv-exp-postion",children:Object(c.jsx)("span",{children:s})}),i&&Object(c.jsx)("div",{className:"cv-exp-duration",children:Object(c.jsx)("span",{children:i})}),0!==(null===r||void 0===r?void 0:r.length)&&g.a.map(r,(function(e,a){return Object(c.jsx)("div",{className:"cv-exp-content",children:Object(c.jsx)("span",{children:e})},a)}))]})};sa.defaultProps={className:"",data:{name:"",position:"",duration:"",content:[]}};var ia=sa,ra=function(e){e.className;var a=e.data,t=a.icon,n=a.name,s=a.link;return Object(c.jsxs)("div",{className:"team-product-wrapper",children:[Object(c.jsx)("div",{className:"team-product-logo",children:Object(c.jsx)("img",{src:t,className:"team-product-icon",alt:"logo"})}),Object(c.jsxs)("div",{className:"team-product-info",children:[Object(c.jsx)("div",{className:"team-product-name",children:Object(c.jsx)("span",{children:n})}),Object(c.jsx)(E.a,{onClick:function(){return window.open(s,"")},type:"link",className:"team-product-link",children:Object(c.jsx)("span",{children:s})})]})]})};ra.defaultProps={className:"",data:{}};var oa=ra,la=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(c.jsx)("div",{className:"my-skills-wrapper",children:g.a.map(e,(function(e,a){return Object(c.jsxs)("div",{className:"my-skills-item",children:[Object(c.jsx)("div",{className:"my-skills-div",children:Object(c.jsx)("img",{src:e.icon,className:"my-skills-icon",alt:"logo"})}),Object(c.jsx)("div",{className:"my-skills-title",children:Object(c.jsx)("span",{children:e.title})})]},a)}))})};return Object(c.jsxs)("div",{className:"my-cv-right",children:[Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(na,{title:"Experience"}),g.a.map(We,(function(e,a){return Object(c.jsx)(ia,{data:e},a)}))]}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(na,{title:"Education",className:"mt24"}),Object(c.jsx)(ia,{data:qe[0]})]}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(na,{title:"My Skills",className:"mt24"}),e(Xe)]}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(na,{title:"Other Skills",className:"mt24"}),e(Ze)]}),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(na,{title:"Team Products",className:"mt24"}),Object(c.jsx)(ia,{data:{name:"Those projects below are my part of the company I've been working for"}}),g.a.map(ze,(function(e,a){return Object(c.jsx)(oa,{data:e},a)}))]})]})};la.defaultProps={};var da=la,ma=function(){return Object(c.jsx)("div",{className:"details-info",children:Object(c.jsx)("span",{children:"DetailsInfo"})})};ma.defaultProps={};var ja=ma,ua=function(){var e=Object(b.g)(),a=P({isShowDetails:!1}),t=Object(S.a)(a,2),n=t[0],s=t[1],i=n.isShowDetails;return Object(c.jsxs)("div",{className:"my-cv-wrapper",children:[Object(c.jsx)("div",{className:"my-cv-main",children:i?Object(c.jsx)(ja,{}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(ta,{}),Object(c.jsx)(da,{})]})}),Object(c.jsx)(E.a,{type:"ghost",className:"back-btn-cv",onClick:function(){i?s({isShowDetails:!1}):e.goBack()},children:Object(c.jsx)(ge.a,{})}),i?null:Object(c.jsx)(E.a,{type:"ghost",className:"details-btn-cv",onClick:function(){s({isShowDetails:!0})},children:Object(c.jsx)(Ne.a,{})})]})};ua.defaultProps={};var ba=ua,pa=function(e){return Object(n.useEffect)((function(){window.onload=function(){e.reloadPageRequest()}}),[]),Object(c.jsx)("main",{className:"div-root",children:Object(c.jsx)(u.a,{children:Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.b,{path:"/staticpromotionalwebsite",name:"Home",component:U}),Object(c.jsx)(b.b,{path:"/our-team",name:"Our team",component:Y}),Object(c.jsx)(b.b,{path:"/my-cv",name:"My CV",component:ba}),Object(c.jsx)(b.b,{path:"/contact",name:"Contact",component:fe}),Object(c.jsx)(b.a,{path:"/",to:{pathname:h}})]})})})};pa.defaultProps={};var ha={reloadPageRequest:x},va=Object(r.b)((function(e){return{isLoading:e.isLoading}}),ha)(pa),Oa=(t(249),t(250),function(e){Object(m.a)(t,e);var a=Object(j.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(c.jsx)(va,{})}}]),t}(n.Component)),xa=t(52),fa=t(158),ga={loading:{},login:{user:{}}},Na=t(79);var ya=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ga.login,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case p.LOGIN_COMPLETE:return a.data;case p.LOGOUT_COMPLETE:return a;default:return e}},wa=Object(xa.c)({login:ya});var Ea=function(e,a){return a.type===p.LOGOUT_REQUEST?(Na.a.logout(),ga):wa(e,a)},ka=t(50),Sa="http://service-cloud-1.appspot.com";"".concat(Sa,"/user/login"),"".concat(Sa,"/user/login"),"".concat(Sa,"/checkin/getall"),"".concat(Sa,"/booking/getall");var Ca=X.a.mark(La),Ta=X.a.mark(Pa);function La(){var e,a,t,c,n;return X.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:e=!0;case 1:if(!e){s.next=14;break}return s.next=4,Object(ka.c)(p.LOGIN_REQUEST);case 4:return a=s.sent,t=a.data,c=t.email,"nhabanh@itrvn.com",(null===(n={isSuccess:!0,user:Object(L.a)({role:"nhabanh@itrvn.com"===c?"MD":"NURSE"},t)})||void 0===n?void 0:n.isSuccess)&&Na.a.login(n),s.next=12,Object(ka.b)({type:p.LOGIN_COMPLETE,data:n});case 12:s.next=1;break;case 14:case"end":return s.stop()}}),Ca)}function Pa(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ka.a)(La);case 2:case"end":return e.stop()}}),Ta)}var Da=X.a.mark(_a),Ra=X.a.mark(Ia),Aa=X.a.mark(Ma);function _a(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),Da)}function Ia(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ka.d)(p.RELOAD_PAGE_REQUEST,_a);case 2:case"end":return e.stop()}}),Ra)}function Ma(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ka.a)(Ia);case 2:case"end":return e.stop()}}),Aa)}var Ga=X.a.mark(Ua);function Ua(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ka.a)(Pa);case 2:return e.next=4,Object(ka.a)(Ma);case 4:case"end":return e.stop()}}),Ga)}var Fa=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(a){return}}(),Ba=function(){var e=Object(fa.a)();return Object(L.a)(Object(L.a)({},Object(xa.e)(Ea,Fa,Object(xa.a)(e))),{},{runSaga:e.run(Ua)})}();o.sessionService.initSessionService(Ba),i.a.render(Object(c.jsx)(r.a,{store:Ba,children:Object(c.jsx)(Oa,{})}),document.getElementById("root"))},79:function(e,a,t){"use strict";(function(e){var t=e.window.localStorage,c={login:function(e){console.log("login data: ",e);var a=e.user,c=e.isSuccess,n=a.username,s=a._id;t.username=n,t.userId=s,t.isSuccess=c,t.role=a.role},setDatalogin:function(e){t.login=JSON.stringify(e)},getDataLogin:function(){return t.login?JSON.parse(t.login):void 0},isSuccess:function(){return t.isSuccess},userId:function(){return t.userId},username:function(){return t.userName},role:function(){return t.role},isMD:function(){return"MD"===t.role},isNurse:function(){return"NURSE"===t.role},logout:function(){t.clear()}};a.a=c}).call(this,t(58))}},[[251,1,2]]]);
//# sourceMappingURL=main.0dfd82d5.chunk.js.map