(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4570:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 5572:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "ArrowSlide_layout___0oiw",
	"center": "ArrowSlide_center__WMROg",
	"arrow": "ArrowSlide_arrow__W9cyl",
	"next": "ArrowSlide_next__rdirE",
	"back": "ArrowSlide_back__RO_6V"
};


/***/ }),

/***/ 4826:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Slide_layout__EIACs",
	"center": "Slide_center__kA1cS",
	"slide": "Slide_slide__yynoI",
	"poster": "Slide_poster__ENhBE",
	"image": "Slide_image__C41IA",
	"content": "Slide_content__FfeDt",
	"title": "Slide_title__n6OWh",
	"subtitle": "Slide_subtitle__N8Kak",
	"button": "Slide_button__R9Kme"
};


/***/ }),

/***/ 5012:
/***/ ((module) => {

// Exports
module.exports = {
	"slider": "Slider_slider__Lgloe"
};


/***/ }),

/***/ 7597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ Icons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_1__);


const Icons = ({ name  })=>{
    const Icon = react_icons_md__WEBPACK_IMPORTED_MODULE_1__[name];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Icon, {});
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

/***/ 4123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Galeria_Gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _Heading_SubTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5384);
/* harmony import */ var _Slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7156);
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4570);
/* harmony import */ var _Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__]);
_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Home = ({ slides , authors , books  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().home),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                slides: slides || []
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().gallery),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Heading_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        title: "Popular books"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Galeria_Gallery__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        gallery: books,
                        direction: "horizontal"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Heading_SubTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        title: "Popular authors"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Galeria_Gallery__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        gallery: authors,
                        direction: "horizontal",
                        type: "author"
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7597);
/* harmony import */ var _ArrowSlide_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5572);
/* harmony import */ var _ArrowSlide_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ArrowSlide_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const ArrowSlide = ({ direction , changeSlide  })=>{
    const isNext = direction === "next";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        onClick: changeSlide,
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_ArrowSlide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().arrow), {
            [(_ArrowSlide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().next)]: isNext,
            [(_ArrowSlide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().back)]: !isNext
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UI_Icons__WEBPACK_IMPORTED_MODULE_1__/* .Icons */ .P, {
            name: isNext ? "MdKeyboardArrowRight" : "MdKeyboardArrowLeft"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArrowSlide);


/***/ }),

/***/ 5588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slide_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4826);
/* harmony import */ var _Slide_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Slide_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2185);





const Slide = ({ slide  })=>{
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Slide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().slide),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_Slide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().poster),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: slide.poster,
                    alt: slide.title,
                    draggable: false,
                    objectFit: "cover",
                    width: 990,
                    height: 330,
                    priority: true,
                    className: (_Slide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().image)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Slide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_Slide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                        children: slide.title
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_Slide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().subtitle),
                        children: slide.subtitle
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        className: (_Slide_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
                        onClick: ()=>push((0,_config_url_config__WEBPACK_IMPORTED_MODULE_4__/* .getBookUrl */ .dd)(slide.link)),
                        children: "More"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slide);


/***/ }),

/***/ 7156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _ArrowSlide_ArrowSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1843);
/* harmony import */ var _Slide_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5588);
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5012);
/* harmony import */ var _Slider_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Slider_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _useSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3551);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Slider = ({ slides  })=>{
    const { handleChangeSlide , isBack , isNext , currentIndex  } = (0,_useSlider__WEBPACK_IMPORTED_MODULE_4__/* .useSlider */ .o)(slides.length);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (_Slider_module_scss__WEBPACK_IMPORTED_MODULE_5___default().slider),
        children: slides.length && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        initial: {
                            opacity: 0,
                            scale: 0
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            opacity: {
                                duration: 1
                            }
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Slide_Slide__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            slide: slides[currentIndex]
                        })
                    }, slides[currentIndex].title)
                }),
                isNext && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ArrowSlide_ArrowSlide__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    direction: "next",
                    changeSlide: ()=>handleChangeSlide("next")
                }),
                isBack && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ArrowSlide_ArrowSlide__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    direction: "back",
                    changeSlide: ()=>handleChangeSlide("back")
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3551:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useSlider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSlider = (length)=>{
    const { 0: currentIndex , 1: setCurrentIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const isNext = currentIndex + 1 < length;
    const isBack = currentIndex ? currentIndex - 1 < length : false;
    function handleChangeSlide(direction) {
        const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }
    return {
        isNext,
        isBack,
        handleChangeSlide,
        currentIndex
    };
};


/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_Home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4123);
/* harmony import */ var _services_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5813);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_Home_Home__WEBPACK_IMPORTED_MODULE_1__]);
_app_components_Home_Home__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const HomePage = ({ slides , authors , books  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_Home_Home__WEBPACK_IMPORTED_MODULE_1__/* .Home */ .S, {
        slides: slides,
        authors: authors,
        books: books
    });
};
const getStaticProps = async ()=>{
    try {
        const slides = await _services_axios__WEBPACK_IMPORTED_MODULE_2__/* .classicAxios.get */ .lp.get("sliders").then((data)=>{
            return data.data;
        });
        const books = await _services_axios__WEBPACK_IMPORTED_MODULE_2__/* .classicAxios.get */ .lp.get("books").then((data)=>{
            return data.data.filter((item)=>item.poster !== "").map((item)=>{
                return {
                    link: item.id,
                    poster: item.poster,
                    title: item.title,
                    subtitle: item.author
                };
            });
        });
        const authors = await _services_axios__WEBPACK_IMPORTED_MODULE_2__/* .classicAxios.get */ .lp.get("author").then((data)=>{
            return data.data.filter((item)=>item.avatar !== "").map((item)=>{
                return {
                    link: item.id,
                    poster: item.avatar,
                    title: item.nameAuthor
                };
            });
        });
        return {
            props: {
                slides,
                books,
                authors
            },
            revalidate: 10
        };
    } catch (error) {
        return {
            props: {
                slides: [],
                books: [],
                authors: []
            }
        };
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,952,664,675,813,632], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();