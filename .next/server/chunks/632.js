exports.id = 632;
exports.ids = [632];
exports.modules = {

/***/ 4602:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Gallery_layout__xXJSR",
	"center": "Gallery_center__ui2Kw",
	"gallery": "Gallery_gallery__d8hAE",
	"gallery_vertical": "Gallery_gallery_vertical__CFu2g",
	"item": "Gallery_item__nAngM",
	"poster": "Gallery_poster__gbvuq",
	"image": "Gallery_image__2vOMK",
	"content": "Gallery_content__0msB2",
	"title": "Gallery_title__ShWdR",
	"subtitle": "Gallery_subtitle__VGr1_"
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

/***/ 6764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Galeria_Gallery)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/Galeria/Gallery.module.scss
var Gallery_module = __webpack_require__(4602);
var Gallery_module_default = /*#__PURE__*/__webpack_require__.n(Gallery_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./config/url.config.ts
var url_config = __webpack_require__(2185);
;// CONCATENATED MODULE: ./app/components/Galeria/ItemGallery.tsx





const ItemGallery = ({ item: { link , poster , title , subtitle  } , type ="book" ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)((link_default()), {
        href: type === "book" ? (0,url_config/* getBookUrl */.dd)(link) : (0,url_config/* getAuthorUrl */.M_)(link),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
            className: (Gallery_module_default()).item,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: (Gallery_module_default()).poster,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsx)((image_default()), {
                        alt: title,
                        src: poster,
                        objectFit: "cover",
                        draggable: false,
                        priority: true,
                        width: 150,
                        height: 220,
                        className: (Gallery_module_default()).image
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Gallery_module_default()).content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: (Gallery_module_default()).title,
                            children: title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                            className: (Gallery_module_default()).subtitle,
                            children: subtitle
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Galeria_ItemGallery = (ItemGallery);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./app/components/Galeria/Gallery.tsx




const Gallery = ({ gallery , direction , type  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
            className: external_classnames_default()({
                [(Gallery_module_default()).gallery]: direction === "horizontal",
                [(Gallery_module_default()).gallery_vertical]: direction === "vertical"
            }),
            children: gallery.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(Galeria_ItemGallery, {
                    item: item,
                    type: type
                }, item.title))
        })
    });
};
/* harmony default export */ const Galeria_Gallery = (Gallery);


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