(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{69253:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/authors/edit/[id]",function(){return c(80526)}])},74713:function(a,b,c){"use strict";c.d(b,{w:function(){return p}});var d=c(85893),e=c(7085),f=c.n(e),g=c(14924),h=c(41664),i=c.n(h),j=c(11163),k=c(94184),l=c.n(k),m=function(a){var b=a.item,c=b.title,e=b.link,h=(0,j.useRouter)().pathname;return(0,d.jsx)(i(),{href:e,children:(0,d.jsx)("a",{className:l()(f().default,(0,g.Z)({},f().active,e===h)),children:c})})},n=c(82185),o=[{title:"Statistics",link:(0,n.A7)("statistics")},{title:"Users",link:(0,n.A7)("users")},{title:"Books",link:(0,n.A7)("books")},{title:"Authors",link:(0,n.A7)("authors")},{title:"Genres",link:(0,n.A7)("genres")},],p=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("nav",{className:f().navigation,children:o.map(function(a){return(0,d.jsx)(m,{item:a},a.title)})})})}},38969:function(a,b,c){"use strict";c.d(b,{t:function(){return z},Z:function(){return B}});var d=c(26042),e=c(85893),f=c(87536),g=c(47568),h=c(828),i=c(34051),j=c.n(i),k=c(82185),l=c(67294),m=c(11163),n=c(49626),o=function(a){var b=(0,m.useRouter)(),c=b.push,d=String(b.query.id),e=(0,n.xc)(d,{skip:!d}),f=e.data,i=e.isSuccess,o=e.isLoading;(0,l.useEffect)(function(){f&&(a("nameAuthor",f.nameAuthor),a("country",f.country),a("avatar",f.avatar),a("DateOfBirth",f.DateOfBirth),a("BooksWritten",f.BooksWritten))},[i]);var p,q=(0,h.Z)((0,n.NP)(),1),r=q[0],s=(p=(0,g.Z)(j().mark(function a(b){return j().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r({data:b,id:d});case 2:c((0,k.M_)(d));case 3:case"end":return a.stop()}},a)})),function(a){return p.apply(this,arguments)});return{onSubmit:s,isLoading:o}},p=c(57455),q=c.n(p),r=c(59135),s=c(75452),t=c(53356),u=c(94184),v=c.n(u),w=c(15989),x=c(5152),y=c.n(x),z=y()(function(){return Promise.all([c.e(477),c.e(841)]).then(c.bind(c,38841))},{loadableGenerated:{webpack:function(){return[38841]}},ssr:!1}),A=function(){var a=(0,f.cI)({mode:"onChange"}),b=a.register,c=a.formState.errors,g=a.setValue,h=a.handleSubmit,i=(a.getValues,a.control),j=o(g),k=j.onSubmit,l=j.isLoading,m=(0,w.zY)({search:""},{selectFromResult:function(a){var b=a.data,c=a.isLoading;return{options:null==b?void 0:b.map(function(a){return{label:a.title,value:a.id}}),isLoading:c}}}),n=m.options,p=m.isLoading;return(0,e.jsx)("div",{children:l?(0,e.jsx)(r.S,{count:5}):(0,e.jsx)("div",{children:(0,e.jsxs)("form",{onSubmit:h(k),children:[(0,e.jsxs)("div",{className:q().author_edit,children:[(0,e.jsx)("div",{className:q().field,children:(0,e.jsx)(s.Z,(0,d.Z)({type:"text",errors:c.nameAuthor,placeholder:"Name Author"},b("nameAuthor",{required:"This field must be filled!"})))}),(0,e.jsx)("div",{className:q().field,children:(0,e.jsx)(s.Z,(0,d.Z)({type:"text",errors:c.country,placeholder:"Country"},b("country",{required:"This field must be filled!"})))}),(0,e.jsx)("div",{className:q().field,children:(0,e.jsx)(s.Z,(0,d.Z)({type:"date",errors:c.DateOfBirth,placeholder:" Date of Birth"},b("DateOfBirth",{required:"This field must be filled!",valueAsDate:!1})))})]}),(0,e.jsxs)("div",{className:q().select,children:[(0,e.jsx)("div",{className:q().react_select,children:(0,e.jsx)(f.Qr,{control:i,name:"BooksWritten",render:function(a){var b=a.field,c=a.fieldState.error;return(0,e.jsx)(z,{field:b,isLoading:p,options:n||[],isMulti:!0,placeholder:"Books written",errors:c})}})}),(0,e.jsx)("div",{className:v()(q().field,q().image),children:(0,e.jsx)(s.Z,(0,d.Z)({type:"text",errors:c.avatar,placeholder:"Avatar"},b("avatar",{required:"This field must be filled!"})))})]}),(0,e.jsx)("div",{className:q().update,children:(0,e.jsx)(t.Z,{buttonStyle:2,children:"Update"})})]})})})},B=A},53356:function(a,b,c){"use strict";var d=c(14924),e=c(26042),f=c(69396),g=c(99534),h=c(85893),i=c(66037),j=c.n(i),k=c(94184),l=c.n(k),m=function(a){var b,c=a.children,i=a.buttonStyle,k=(0,g.Z)(a,["children","buttonStyle"]);return(0,h.jsx)("button",(0,f.Z)((0,e.Z)({},k),{className:l()(j().button,(b={},(0,d.Z)(b,j().button_style_1,1===i),(0,d.Z)(b,j().button_style_2,2===i),b)),children:c}))};b.Z=m},75452:function(a,b,c){"use strict";var d=c(14924),e=c(26042),f=c(69396),g=c(99534),h=c(85893),i=c(67294),j=c(18537),k=c.n(j),l=c(94184),m=c.n(l),n=(0,i.forwardRef)(function(a,b){var c=a.placeholder,i=a.type,j=a.errors,l=(0,g.Z)(a,["placeholder","type","errors"]);return(0,h.jsxs)("div",{className:k().field,children:[(0,h.jsx)("div",{className:k().placeholder,children:c}),(0,h.jsx)("input",(0,f.Z)((0,e.Z)({type:void 0===i?"text":i,ref:b},l),{className:m()(k().input,(0,d.Z)({},k().error_input,void 0!==j))})),j&&(0,h.jsx)("div",{className:k().error,children:j.message})]})});n.displayName="Field",b.Z=n},10209:function(a,b,c){"use strict";c.d(b,{X:function(){return g}});var d=c(85893),e=c(44271),f=c.n(e),g=function(a){var b=a.title;return(0,d.jsx)("h1",{className:f().heading,children:b})}},80526:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return j}});var d=c(85893),e=c(10209),f=c(74713),g=c(38969),h=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(f.w,{}),(0,d.jsx)(e.X,{title:"Edit authors"}),(0,d.jsx)(g.Z,{})]})},i=function(){return(0,d.jsx)(h,{})};i.isOnlyAdmin=!0;var j=i},7085:function(a){a.exports={layout:"AdminNavigation_layout___co16",center:"AdminNavigation_center__wJaOr",navigation:"AdminNavigation_navigation__N43o7",default:"AdminNavigation_default__cdvbW",active:"AdminNavigation_active__Q9rKs"}},57455:function(a){a.exports={author_edit:"AuthorEdit_author_edit__OO49T",field:"AuthorEdit_field__lIT6J",update:"AuthorEdit_update__OGwLl",select:"AuthorEdit_select__n06jK",react_select:"AuthorEdit_react_select__4f5Xf",image:"AuthorEdit_image__vjnYA"}},66037:function(a){a.exports={layout:"Button_layout__oyXrp",center:"Button_center__O6fnb",button:"Button_button__9CL5_",button_style_1:"Button_button_style_1__tPBTc",button_style_2:"Button_button_style_2__jlRpp"}},18537:function(a){a.exports={layout:"Field_layout__JicWw",center:"Field_center__3Dnc5",field:"Field_field__G_QmK",error_input:"Field_error_input__ck2ty",placeholder:"Field_placeholder__5ksxg",input:"Field_input__rSzqz",error:"Field_error__4Ornj"}},44271:function(a){a.exports={layout:"Header_layout__Ts6Zb",center:"Header_center__0lhK_",heading:"Header_heading__ec6KN",subtitle:"Header_subtitle__8dujB"}},20943:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}c.d(b,{Z:function(){return d}})},13375:function(a,b,c){"use strict";function d(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}c.d(b,{Z:function(){return d}})},828:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(13375),e=c(91566);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},91566:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(20943);function e(a,b){if(a){if("string"==typeof a)return(0,d.Z)(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return(0,d.Z)(a,b)}}}},function(a){a.O(0,[757,774,888,179],function(){var b;return a(a.s=69253)}),_N_E=a.O()}])