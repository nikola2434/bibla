exports.id = 247;
exports.ids = [247];
exports.modules = {

/***/ 1902:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "HeadTableUsers_layout__6Jveq",
	"center": "HeadTableUsers_center__v6dko",
	"head_table": "HeadTableUsers_head_table__osTGe",
	"item_head_table": "HeadTableUsers_item_head_table__Jqavm"
};


/***/ }),

/***/ 164:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "TableItem_layout__ctr_5",
	"center": "TableItem_center__k44dm",
	"item": "TableItem_item__e_bhQ",
	"email": "TableItem_email__xT9_g",
	"isAdmin": "TableItem_isAdmin__9DDgR",
	"buttons": "TableItem_buttons__mEUAp",
	"item_admin": "TableItem_item_admin__dhzYR"
};


/***/ }),

/***/ 6705:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "TableUsers_layout__n63wM",
	"center": "TableUsers_center__m5Zmb",
	"container_items": "TableUsers_container_items__8lkFN",
	"show": "TableUsers_show__fIxT1",
	"error": "TableUsers_error__Qp94f",
	"buttons": "TableUsers_buttons__307Ex"
};


/***/ }),

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

/***/ 4872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ HeadTableUsers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadTableUsers_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1902);
/* harmony import */ var _HeadTableUsers_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HeadTableUsers_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const HeadTableUsers = ({ titles  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: (_HeadTableUsers_module_scss__WEBPACK_IMPORTED_MODULE_1___default().head_table),
        children: titles.map((value)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                className: (_HeadTableUsers_module_scss__WEBPACK_IMPORTED_MODULE_1___default().item_head_table),
                children: value
            }, value))
    });
};


/***/ }),

/***/ 3949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ TableUsers)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./app/components/Elements/Button/Button.tsx
var Button = __webpack_require__(3356);
// EXTERNAL MODULE: ./app/UI/Icons.tsx
var Icons = __webpack_require__(7597);
// EXTERNAL MODULE: ./app/components/Admin/AdminUsers/HeadTableUsers/TableUsers/TableItem/TableItem.module.scss
var TableItem_module = __webpack_require__(164);
var TableItem_module_default = /*#__PURE__*/__webpack_require__.n(TableItem_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./app/components/Admin/AdminUsers/HeadTableUsers/TableUsers/TableItem/TableItem.tsx





const TableItem = ({ characteristics , setIdUserDelete , deleteUsers , refetch , id ,  })=>{
    const handleDeleteUsers = (id)=>{
        deleteUsers(id);
        setIdUserDelete(id);
        refetch(); // Да, тут сделано через кастыль. Но если делать цивильно - через refetch, то запрос возращает data с удаленным элементом. Видимо json-server не обновляется, я хз
    };
    const { push , pathname  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()((TableItem_module_default()).item, {
            [(TableItem_module_default()).item_admin]: characteristics.includes("true")
        }),
        children: [
            characteristics.map((item, index)=>{
                if (item === "true" || item === "false") {
                    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: (TableItem_module_default()).email,
                        children: item === "true" ? "Admin" : "User"
                    });
                } else if (item.match(/null/)) {
                    return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                        className: (TableItem_module_default()).email,
                        children: "Неизвестно"
                    });
                } else if (characteristics.length - 1 === index) {
                    return null;
                } else return /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                    className: (TableItem_module_default()).email,
                    children: item
                });
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TableItem_module_default()).buttons,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                        onClick: ()=>push(`${pathname}/edit/${id}`),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Icons/* Icons */.P, {
                            name: "MdModeEdit"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("button", {
                        onClick: ()=>handleDeleteUsers(id),
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsx)(Icons/* Icons */.P, {
                            name: "MdClose"
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./app/components/Admin/AdminUsers/HeadTableUsers/TableUsers/TableUsers.module.scss
var TableUsers_module = __webpack_require__(6705);
var TableUsers_module_default = /*#__PURE__*/__webpack_require__.n(TableUsers_module);
;// CONCATENATED MODULE: ./app/components/Admin/AdminUsers/HeadTableUsers/TableUsers/TableUsers.tsx




const TableUsers = ({ data , page , deleteUsers , refetch , title , setIdUserDelete , setPage ,  })=>{
    function handleBackPage() {
        setPage(page - 1);
        refetch;
    }
    function handleNextPage() {
        setPage(page + 1);
        refetch();
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            data.length !== 0 ? /*#__PURE__*/ (0,jsx_runtime_.jsx)("div", {
                className: (TableUsers_module_default()).container_items,
                children: data.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsx)(TableItem, {
                        characteristics: [
                            ...item
                        ],
                        setIdUserDelete: setIdUserDelete,
                        deleteUsers: deleteUsers,
                        refetch: refetch,
                        id: item[item.length - 1]
                    }, item[item.length - 1]))
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TableUsers_module_default()).error,
                children: [
                    title,
                    " not found!"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (TableUsers_module_default()).buttons,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(Button/* default */.Z, {
                        buttonStyle: 1,
                        onClick: handleBackPage,
                        disabled: page === 1,
                        children: "back"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(Button/* default */.Z, {
                        buttonStyle: 2,
                        onClick: handleNextPage,
                        disabled: data.length < 10,
                        children: "Next"
                    })
                ]
            })
        ]
    });
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

/***/ 6593:
/***/ (() => {



/***/ })

};
;