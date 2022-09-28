exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 7955:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Button_layout__oyXrp",
	"center": "Button_center__O6fnb",
	"button": "Button_button__9CL5_",
	"button_style_1": "Button_button_style_1__tPBTc",
	"button_style_2": "Button_button_style_2__jlRpp"
};


/***/ }),

/***/ 7608:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Field_layout__JicWw",
	"center": "Field_center__3Dnc5",
	"field": "Field_field__G_QmK",
	"error_input": "Field_error_input__ck2ty",
	"placeholder": "Field_placeholder__5ksxg",
	"input": "Field_input__rSzqz",
	"error": "Field_error__4Ornj"
};


/***/ }),

/***/ 3356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7955);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);



const Button = ({ children , buttonStyle , ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
        ...rest,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button), {
            [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_style_1)]: buttonStyle === 1,
            [(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().button_style_2)]: buttonStyle === 2
        }),
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 5452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Field_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7608);
/* harmony import */ var _Field_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Field_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const Field = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ placeholder , type ="text" , errors , ...rest }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Field_module_scss__WEBPACK_IMPORTED_MODULE_3___default().field),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_Field_module_scss__WEBPACK_IMPORTED_MODULE_3___default().placeholder),
                children: placeholder
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                type: type,
                ref: ref,
                ...rest,
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_Field_module_scss__WEBPACK_IMPORTED_MODULE_3___default().input), {
                    [(_Field_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error_input)]: errors !== undefined
                })
            }),
            errors && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_Field_module_scss__WEBPACK_IMPORTED_MODULE_3___default().error),
                children: errors.message
            })
        ]
    });
});
Field.displayName = "Field";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Field);


/***/ })

};
;