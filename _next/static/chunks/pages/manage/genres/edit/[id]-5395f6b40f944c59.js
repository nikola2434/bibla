(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[260],{7082:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/genres/edit/[id]",function(){return c(16411)}])},16411:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return G}});var d=c(85893),e=c(10209),f=c(74713),g=c(26042),h=c(87536),i=c(47568),j=c(828),k=c(34051),l=c.n(k),m=c(67294),n=c(11163),o=c(74620),p=c(82185),q=function(a){var b=(0,n.useRouter)(),c=b.push,d=String(b.query.id),e=(0,o.yy)(d,{skip:!d}),f=e.data,g=e.isLoading,h=e.isSuccess;(0,m.useEffect)(function(){f&&(a("title",f.title),a("icons",f.icons),a("link",f.link),a("books",f.books),a("description",f.description),a("books",f.books))},[h]);var k,q=(0,j.Z)((0,o.sy)(),1),r=q[0],s=(k=(0,i.Z)(l().mark(function a(b){return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r({data:b,id:d});case 2:c((0,p.i8)(b.link));case 3:case"end":return a.stop()}},a)})),function(a){return k.apply(this,arguments)});return{isLoading:g,onSubmit:s}},r=c(78517),s=c.n(r),t=c(59135),u=c(75452),v=c(1028),w=c.n(v),x=function(a){var b=a.errors,c=a.register,e=a.generateLink;return(0,d.jsxs)("div",{className:w().fieldLink,children:[(0,d.jsx)(u.Z,(0,g.Z)({placeholder:"Genre link",errors:b},c("link",{required:"This field must be filled!"}))),(0,d.jsx)("div",{onClick:e,className:w().button,children:"Generate"})]})},y=c(97339),z=c(53356),A=c(61320),B=c(38969),C=c(15989),D=function(){var a=(0,h.cI)({mode:"onChange"}),b=a.setValue,c=a.register,e=a.formState.errors,f=a.handleSubmit,i=a.getValues,j=a.control,k=q(b),l=k.isLoading,m=k.onSubmit,n=(0,C.zY)({search:""},{selectFromResult:function(a){var b=a.data,c=a.isLoading;return{options:null==b?void 0:b.map(function(a){return{label:a.title,value:a.id}}),isLoading:c}}}),o=n.options;return n.isLoading,(0,d.jsx)("div",{children:l?(0,d.jsx)(t.S,{count:5}):(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{onSubmit:f(m),children:[(0,d.jsxs)("div",{className:s().genre_edit,children:[(0,d.jsx)("div",{className:s().field,children:(0,d.jsx)(u.Z,(0,g.Z)({type:"text",errors:e.title,placeholder:"Title genre"},c("title",{required:"This field must be filled!"})))}),(0,d.jsx)("div",{className:s().field,children:(0,d.jsx)(x,{register:c,errors:e.link,generateLink:function(){b("link",(0,y.C)(i("title")))}})}),(0,d.jsx)("div",{className:s().field,children:(0,d.jsx)(u.Z,(0,g.Z)({type:"text",errors:e.icons,placeholder:"Icon genre"},c("icons",{required:"This field must be filled!"})))})]}),(0,d.jsx)("div",{className:s().select,children:(0,d.jsx)(h.Qr,{control:j,name:"books",render:function(a){var b=a.field,c=a.fieldState.error;return(0,d.jsx)(B.t,{isMulti:!0,field:b,placeholder:"Books",options:o||[],isLoading:l,errors:c})}})}),(0,d.jsx)("div",{children:(0,d.jsx)(h.Qr,{control:j,name:"description",render:function(a){var b=a.field,c=b.value,e=b.onChange;return(0,d.jsx)(A.L,{value:c,onChange:e,placeholder:"Description of the genre"})}})}),(0,d.jsx)("div",{className:s().update,children:(0,d.jsx)(z.Z,{buttonStyle:2,children:"Update"})})]})})})},E=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(f.w,{}),(0,d.jsx)(e.X,{title:"Genre edit"}),(0,d.jsx)(D,{})]})},F=function(){return(0,d.jsx)(E,{})};F.isOnlyAdmin=!0;var G=F},78517:function(a){a.exports={genre_edit:"GenreEdit_genre_edit__CPb73",field:"GenreEdit_field__Rwmnh",select:"GenreEdit_select__hg7dw",update:"GenreEdit_update__r75L3"}},1028:function(a){a.exports={layout:"FieldLink_layout__DAKpy",center:"FieldLink_center__gT7iP",fieldLink:"FieldLink_fieldLink__q0DVu",button:"FieldLink_button__M_wWq"}}},function(a){a.O(0,[757,638,774,888,179],function(){var b;return a(a.s=7082)}),_N_E=a.O()}])