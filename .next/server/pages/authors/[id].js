(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 8826:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 1783:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "DetalisAuthors_layout__KVOPo",
	"center": "DetalisAuthors_center__nBGFo",
	"details_Authors": "DetalisAuthors_details_Authors__JwSvA",
	"image": "DetalisAuthors_image__3gg__",
	"poster": "DetalisAuthors_poster__u6FU8",
	"characteristics": "DetalisAuthors_characteristics__4xnGL",
	"author": "DetalisAuthors_author__GrwW4",
	"characteristic": "DetalisAuthors_characteristic__1zkF_"
};


/***/ }),

/***/ 7964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/nextjs-pages/_next/static/media/turtle.250187cf.png","height":495,"width":519,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAxUlEQVR42mP4////379/geTTx/dfvXwG5zL8A1EgUL9k8eytWyDsf//+MgCpR6/v3713qXPO+rkrd9y5d/7FB5A+hm+ntt/cFDO9pb3Fc1qr98y5fS33N0X/uHKS4f+Ncy9evAxu2Zap1hGnVpAwbf/nV8//3rwIMurh55+7C/qnWtXOtYja3jTn9e//IKN+/Phxa/Gst2Hphx2qTjvUvI1OubVhxZ+/fxn+/v33/+e3V0/ebshu31e74MObT/9+fPv37z8Ai3uXWrTvr3sAAAAASUVORK5CYII="});

/***/ }),

/***/ 209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(494);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const Heading = ({ title  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default().heading),
        children: title
    });
};


/***/ }),

/***/ 5384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(494);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const SubTitle = ({ title  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (_Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default().subtitle),
        children: title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTitle);


/***/ }),

/***/ 5371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/Galeria/Gallery.tsx + 1 modules
var Gallery = __webpack_require__(6764);
// EXTERNAL MODULE: ./app/components/Heading/Heading.tsx
var Heading = __webpack_require__(209);
// EXTERNAL MODULE: ./app/components/Heading/SubTitle.tsx
var SubTitle = __webpack_require__(5384);
// EXTERNAL MODULE: ./app/components/Meta/Meta.tsx
var Meta = __webpack_require__(665);
// EXTERNAL MODULE: ./app/components/Author/Author.module.scss
var Author_module = __webpack_require__(8826);
var Author_module_default = /*#__PURE__*/__webpack_require__.n(Author_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./app/components/Author/DetalisAuthors/DetalisAuthors.module.scss
var DetalisAuthors_module = __webpack_require__(1783);
var DetalisAuthors_module_default = /*#__PURE__*/__webpack_require__.n(DetalisAuthors_module);
// EXTERNAL MODULE: ./public/images/turtle.png
var turtle = __webpack_require__(7964);
;// CONCATENATED MODULE: ./app/components/Author/DetalisAuthors/DetalisAuthors.tsx




const DetailsAuthors = ({ author: { DateOfBirth , avatar , country , nameAuthor  } ,  })=>{
    const now = new Date(DateOfBirth);
    const UKDate = new Intl.DateTimeFormat("en-UK", {
        month: "long",
        day: "2-digit",
        year: "numeric"
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (DetalisAuthors_module_default()).details_Authors,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: (DetalisAuthors_module_default()).image,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                    src: avatar || turtle/* default */.Z,
                    alt: nameAuthor,
                    width: 180,
                    height: 250,
                    draggable: false,
                    unoptimized: true,
                    priority: true,
                    objectFit: "cover",
                    className: (DetalisAuthors_module_default()).poster
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (DetalisAuthors_module_default()).characteristics,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: (DetalisAuthors_module_default()).author,
                        children: nameAuthor
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: (DetalisAuthors_module_default()).characteristic,
                        children: country
                    }),
                    DateOfBirth !== "unknown" && /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: (DetalisAuthors_module_default()).characteristic,
                        children: UKDate.format(now)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const DetalisAuthors = (DetailsAuthors);

;// CONCATENATED MODULE: ./app/components/Author/Author.tsx







const Author = ({ author , booksWritten  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(Meta/* default */.Z, {
        title: author.nameAuthor,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Author_module_default()).author,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(Heading/* Heading */.X, {
                    title: author.nameAuthor
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsx)(DetalisAuthors, {
                    author: author
                }),
                booksWritten.length !== 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(SubTitle/* default */.Z, {
                            title: "Books written"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)(Gallery/* default */.Z, {
                            direction: "horizontal",
                            gallery: booksWritten,
                            type: "book"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Author_Author = (Author);

// EXTERNAL MODULE: ./services/axios.ts
var axios = __webpack_require__(5813);
;// CONCATENATED MODULE: ./pages/authors/[id].tsx



const AuthorPage = ({ author , booksWritten  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(Author_Author, {
        author: author,
        booksWritten: booksWritten
    });
};
/* harmony default export */ const _id_ = (AuthorPage);
const getStaticPaths = async ()=>{
    try {
        const authors = await axios/* axiosAuthorApi.getAuthors */.$x.getAuthors();
        const paths = authors.map((author)=>({
                params: {
                    id: author.id
                }
            }));
        return {
            paths,
            fallback: "blocking"
        };
    } catch (error) {
        return {
            paths: [],
            fallback: false
        };
    }
};
const getStaticProps = async ({ params  })=>{
    const author = await axios/* axiosAuthorApi.getAuthor */.$x.getAuthor(String(params?.id));
    const books = await axios/* axiocBookApi.getBooksId */.H9.getBooksId(author.BooksWritten);
    return {
        props: {
            author: author,
            booksWritten: books.map((book)=>{
                return {
                    link: book.id,
                    poster: book.poster,
                    title: book.title,
                    subtitle: book.author
                };
            })
        },
        revalidate: 10
    };
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,952,664,675,813,665,632], () => (__webpack_exec__(5371)));
module.exports = __webpack_exports__;

})();