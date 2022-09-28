exports.id = 36;
exports.ids = [36];
exports.modules = {

/***/ 2550:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "AdminNavigation_layout___co16",
	"center": "AdminNavigation_center__wJaOr",
	"navigation": "AdminNavigation_navigation__N43o7",
	"default": "AdminNavigation_default__cdvbW",
	"active": "AdminNavigation_active__Q9rKs"
};


/***/ }),

/***/ 494:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Header_layout__Ts6Zb",
	"center": "Header_center__0lhK_",
	"heading": "Header_heading__ec6KN",
	"subtitle": "Header_subtitle__8dujB"
};


/***/ }),

/***/ 1159:
/***/ ((module) => {

// Exports
module.exports = {
	"skeleton": "Skeleton_skeleton__mkxsR"
};


/***/ }),

/***/ 4713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ AdminNavigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/Admin/AdminNavigation/AdminNavigation.module.scss
var AdminNavigation_module = __webpack_require__(2550);
var AdminNavigation_module_default = /*#__PURE__*/__webpack_require__.n(AdminNavigation_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./app/components/Admin/AdminNavigation/ItemAdminNav.tsx





const ItemAdminNav = ({ item: { title , link  } ,  })=>{
    const { pathname  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
        href: link,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("a", {
            className: external_classnames_default()((AdminNavigation_module_default())["default"], {
                [(AdminNavigation_module_default()).active]: link === pathname
            }),
            children: title
        })
    });
};

// EXTERNAL MODULE: ./config/url.config.ts
var url_config = __webpack_require__(2185);
;// CONCATENATED MODULE: ./app/components/Admin/AdminNavigation/AdminNavigationData.ts

const AdminNavigationData = [
    {
        title: "Statistics",
        link: (0,url_config/* getAdminUrl */.A7)("statistics")
    },
    {
        title: "Users",
        link: (0,url_config/* getAdminUrl */.A7)("users")
    },
    {
        title: "Books",
        link: (0,url_config/* getAdminUrl */.A7)("books")
    },
    {
        title: "Authors",
        link: (0,url_config/* getAdminUrl */.A7)("authors")
    },
    {
        title: "Genres",
        link: (0,url_config/* getAdminUrl */.A7)("genres")
    }, 
];

;// CONCATENATED MODULE: ./app/components/Admin/AdminNavigation/AdminNavigation.tsx




const AdminNavigation = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("nav", {
            className: (AdminNavigation_module_default()).navigation,
            children: AdminNavigationData.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(ItemAdminNav, {
                    item: item
                }, item.title))
        })
    });
};


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

/***/ 3286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SkeletonLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Skeleton_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1159);
/* harmony import */ var _Skeleton_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Skeleton_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6593);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__);




const SkeletonLoading = ({ ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...rest,
        baseColor: "#0957b4",
        highlightColor: "#43acf9",
        className: (_Skeleton_module_scss__WEBPACK_IMPORTED_MODULE_3___default().skeleton)
    });
};


/***/ }),

/***/ 2185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A7": () => (/* binding */ getAdminUrl),
/* harmony export */   "M_": () => (/* binding */ getAuthorUrl),
/* harmony export */   "dd": () => (/* binding */ getBookUrl),
/* harmony export */   "i8": () => (/* binding */ getGenreUrl)
/* harmony export */ });
const getGenreUrl = (slug)=>`/genre/${slug}`;
const getBookUrl = (slug)=>`/book/${slug}`;
const getAdminUrl = (slug)=>`/manage/${slug}`;
const getAuthorUrl = (slug)=>`/authors/${slug}`;


/***/ })

};
;