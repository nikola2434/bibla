(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{30930:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MyBooks",function(){return c(78406)}])},91135:function(a,b,c){"use strict";c.d(b,{Z:function(){return w}});var d=c(85893),e=c(67294),f=c(87536),g=c(31888),h=c(11163),i=function(){var a=(0,g.C)(function(a){return a.users}).user,b=(0,h.useRouter)(),c=b.query,d=b.push,f=c.redirect?String(c.redirect):"/";(0,e.useEffect)(function(){a&&d(f)},[a,c,f])},j=c(22717),k=c.n(j),l={src:"/_next/data/ZaFzyO_qUp2mm_hSn0lnG/_next/static/media/lock.35e37a56.png",height:128,width:128,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATWt+gALAf4p8/0CmHDy7Dn+FeoAjfssxxn+/Wj3BQbXAWOn9immCATFneXtES3J2QAIVXsAxv2DAG37Qe9VBvI7AUuq98G1BQU+1tHl+qKp4wYUYcwAPRXE+jfdiwZSNx3CAUWr/PrvAeoFSe+bAOL49QBeLuQAEwftAH6lWwDCEDT7AUOs//r//toFvgEnAFjrAABrISsAGSbiAJiqkP+Mtxj+AUSs/8H8/d0+4AMk+kXSPAZSIQAAKkPE+4qfoAWVxBvFAUSs/ykAAPPE4PmLEif7gwCBKiz/8fc2AXOhTfDQ5Q88AUix/wACAQAo8vLumeXVvTpCBvYBzOMRyNHJEmcACfvVafh+F9CyaL8AAAAASUVORK5CYII="},m=c(25675),n=c.n(m),o=c(53356),p=c(26042),q=c(75452),r=function(a){var b=a.formState.errors,c=a.register;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(q.Z,(0,p.Z)({placeholder:"Email",errors:b.login},c("login",{required:"This field must be filled",pattern:{value:/.+@.+\..+/i,message:"Please, enter correct email"}}))),(0,d.jsx)(q.Z,(0,p.Z)({placeholder:"Parol",type:"password",errors:b.password},c("password",{required:"This field must be filled",minLength:{value:5,message:"Password must be more than 5 characters"}})))]})},s=r,t=c(10665),u=c(88506),v=function(){i();var a=(0,u.T)(),b=a.login,c=a.register,h=(0,g.C)(function(a){return a.users}).isLoading,j=(0,e.useState)("login"),m=j[0],p=j[1],q=(0,f.cI)({mode:"onChange"}),r=q.formState,v=q.reset,w=q.handleSubmit,x=q.register,y=q.setError,z=function(a){"login"===m?b({data:a,setError:y}):"register"===m&&c(a),v()};return(0,d.jsx)(t.Z,{title:"Auth",children:(0,d.jsx)("div",{className:k().Auth,children:(0,d.jsxs)("div",{className:k().container_auth,children:[(0,d.jsxs)("div",{className:k().container_heading,children:[(0,d.jsx)(n(),{src:l,alt:"",draggable:!1,width:50,height:50,priority:!0}),(0,d.jsx)("div",{className:k().heading,children:"Auth"})]}),(0,d.jsxs)("form",{onSubmit:w(z),children:[(0,d.jsx)(s,{formState:r,register:x}),(0,d.jsxs)("div",{className:k().buttons,children:[(0,d.jsx)(o.Z,{onClick:function(){return p("login")},disabled:h,buttonStyle:1,children:"login"}),(0,d.jsx)(o.Z,{onClick:function(){return p("register")},disabled:h,buttonStyle:2,children:"register"})]})]})]})})})},w=v},3396:function(a,b,c){"use strict";var d=c(85893),e=c(10151),f=c.n(e),g=c(25935),h=function(a){var b=a.description;return(0,d.jsx)("div",{className:f().description,children:(0,g.ZP)(b)})};b.Z=h},53356:function(a,b,c){"use strict";var d=c(14924),e=c(26042),f=c(69396),g=c(99534),h=c(85893),i=c(66037),j=c.n(i),k=c(94184),l=c.n(k),m=function(a){var b,c=a.children,i=a.buttonStyle,k=(0,g.Z)(a,["children","buttonStyle"]);return(0,h.jsx)("button",(0,f.Z)((0,e.Z)({},k),{className:l()(j().button,(b={},(0,d.Z)(b,j().button_style_1,1===i),(0,d.Z)(b,j().button_style_2,2===i),b)),children:c}))};b.Z=m},75452:function(a,b,c){"use strict";var d=c(14924),e=c(26042),f=c(69396),g=c(99534),h=c(85893),i=c(67294),j=c(18537),k=c.n(j),l=c(94184),m=c.n(l),n=(0,i.forwardRef)(function(a,b){var c=a.placeholder,i=a.type,j=a.errors,l=(0,g.Z)(a,["placeholder","type","errors"]);return(0,h.jsxs)("div",{className:k().field,children:[(0,h.jsx)("div",{className:k().placeholder,children:c}),(0,h.jsx)("input",(0,f.Z)((0,e.Z)({type:void 0===i?"text":i,ref:b},l),{className:m()(k().input,(0,d.Z)({},k().error_input,void 0!==j))})),j&&(0,h.jsx)("div",{className:k().error,children:j.message})]})});n.displayName="Field",b.Z=n},96764:function(a,b,c){"use strict";c.d(b,{Z:function(){return r}});var d=c(14924),e=c(85893),f=c(60273),g=c.n(f),h=c(25675),i=c.n(h),j=c(41664),k=c.n(j),l=c(82185),m=function(a){var b=a.item,c=b.link,d=b.poster,f=b.title,h=b.subtitle,j=a.type;return(0,e.jsx)(k(),{href:"book"===(void 0===j?"book":j)?(0,l.dd)(c):(0,l.M_)(c),children:(0,e.jsxs)("a",{className:g().item,children:[(0,e.jsx)("div",{className:g().poster,children:(0,e.jsx)(i(),{alt:f,src:d,objectFit:"cover",draggable:!1,priority:!0,width:150,height:220,className:g().image})}),(0,e.jsxs)("div",{className:g().content,children:[(0,e.jsx)("div",{className:g().title,children:f}),(0,e.jsx)("div",{className:g().subtitle,children:h})]})]})})},n=m,o=c(94184),p=c.n(o),q=function(a){var b,c=a.gallery,f=a.direction,h=a.type;return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:p()((b={},(0,d.Z)(b,g().gallery,"horizontal"===f),(0,d.Z)(b,g().gallery_vertical,"vertical"===f),b)),children:c.map(function(a){return(0,e.jsx)(n,{item:a,type:h},a.title)})})})},r=q},10209:function(a,b,c){"use strict";c.d(b,{X:function(){return g}});var d=c(85893),e=c(44271),f=c.n(e),g=function(a){var b=a.title;return(0,d.jsx)("h1",{className:f().heading,children:b})}},35384:function(a,b,c){"use strict";var d=c(85893),e=c(44271),f=c.n(e),g=function(a){var b=a.title;return(0,d.jsx)("div",{className:f().subtitle,children:b})};b.Z=g},78406:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return s}});var d=c(85893),e=c(31888),f=c(15989),g=c(91135),h=c(3396),i=c(96764),j=c(10209),k=c(35384),l=c(10665),m=c(59135),n=c(49090),o=c.n(n),p=function(){var a=(0,e.C)(function(a){return a.users}).user,b=(0,f.zY)({search:""},{selectFromResult:function(b){var c=b.isLoading,d=b.data;return{favoriteBooks:null==d?void 0:d.filter(function(b){return null==a?void 0:a.favoriteBooks.includes(b.id)}).map(function(a){return{link:a.id,poster:a.poster,title:a.title,subtitle:a.author}}),isLoading:c}}}),c=b.favoriteBooks,n=b.isLoading;return a?(0,d.jsx)(l.Z,{title:"Recent activity",children:(0,d.jsxs)("div",{className:o().my_books,children:[(0,d.jsx)(j.X,{title:"Recent activity"}),(0,d.jsx)(h.Z,{description:"Here are your favorite books, as well as books you have replied to."}),(0,d.jsx)(k.Z,{title:"My favorite books"}),n?(0,d.jsx)(m.S,{height:200,count:1}):(0,d.jsx)(i.Z,{direction:"vertical",gallery:c||[]})]})}):(0,d.jsx)(g.Z,{})},q=p,r=function(){return(0,d.jsx)(q,{})};r.isOnlyUser=!0;var s=r},22717:function(a){a.exports={layout:"Auth_layout__nxff2",center:"Auth_center__CgEYJ",Auth:"Auth_Auth__tyNGw",container_auth:"Auth_container_auth__mF6NP",container_heading:"Auth_container_heading__r3IrC",heading:"Auth_heading__57Leu",lock:"Auth_lock__Tr6Y4",buttons:"Auth_buttons__jrEAn"}},10151:function(a){a.exports={layout:"Description_layout__ElfFX",center:"Description_center__WNZ4s",description:"Description_description__jlEKP"}},66037:function(a){a.exports={layout:"Button_layout__oyXrp",center:"Button_center__O6fnb",button:"Button_button__9CL5_",button_style_1:"Button_button_style_1__tPBTc",button_style_2:"Button_button_style_2__jlRpp"}},18537:function(a){a.exports={layout:"Field_layout__JicWw",center:"Field_center__3Dnc5",field:"Field_field__G_QmK",error_input:"Field_error_input__ck2ty",placeholder:"Field_placeholder__5ksxg",input:"Field_input__rSzqz",error:"Field_error__4Ornj"}},60273:function(a){a.exports={layout:"Gallery_layout__xXJSR",center:"Gallery_center__ui2Kw",gallery:"Gallery_gallery__d8hAE",gallery_vertical:"Gallery_gallery_vertical__CFu2g",item:"Gallery_item__nAngM",poster:"Gallery_poster__gbvuq",image:"Gallery_image__2vOMK",content:"Gallery_content__0msB2",title:"Gallery_title__ShWdR",subtitle:"Gallery_subtitle__VGr1_"}},44271:function(a){a.exports={layout:"Header_layout__Ts6Zb",center:"Header_center__0lhK_",heading:"Header_heading__ec6KN",subtitle:"Header_subtitle__8dujB"}},49090:function(){}},function(a){a.O(0,[757,935,774,888,179],function(){var b;return a(a.s=30930)}),_N_E=a.O()}])