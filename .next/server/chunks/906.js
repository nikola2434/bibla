exports.id = 906;
exports.ids = [906];
exports.modules = {

/***/ 8764:
/***/ ((module) => {

// Exports
module.exports = {
	"layout": "Auth_layout__nxff2",
	"center": "Auth_center__CgEYJ",
	"Auth": "Auth_Auth__tyNGw",
	"container_auth": "Auth_container_auth__mF6NP",
	"container_heading": "Auth_container_heading__r3IrC",
	"heading": "Auth_heading__57Leu",
	"lock": "Auth_lock__Tr6Y4",
	"buttons": "Auth_buttons__jrEAn"
};


/***/ }),

/***/ 8859:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/nextjs-pages/_next/static/media/lock.35e37a56.png","height":128,"width":128,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+ATWt+gALAf4p8/0CmHDy7Dn+FeoAjfssxxn+/Wj3BQbXAWOn9immCATFneXtES3J2QAIVXsAxv2DAG37Qe9VBvI7AUuq98G1BQU+1tHl+qKp4wYUYcwAPRXE+jfdiwZSNx3CAUWr/PrvAeoFSe+bAOL49QBeLuQAEwftAH6lWwDCEDT7AUOs//r//toFvgEnAFjrAABrISsAGSbiAJiqkP+Mtxj+AUSs/8H8/d0+4AMk+kXSPAZSIQAAKkPE+4qfoAWVxBvFAUSs/ykAAPPE4PmLEif7gwCBKiz/8fc2AXOhTfDQ5Q88AUix/wACAQAo8vLumeXVvTpCBvYBzOMRyNHJEmcACfvVafh+F9CyaL8AAAAASUVORK5CYII="});

/***/ }),

/***/ 4352:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5641);
/* harmony import */ var _useAuthRegister__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7266);
/* harmony import */ var _Auth_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8764);
/* harmony import */ var _Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _public_lock_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8859);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3356);
/* harmony import */ var _Fields_Fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4399);
/* harmony import */ var _Meta_Meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(665);
/* harmony import */ var _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(416);
/* harmony import */ var _hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1888);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Auth = ()=>{
    (0,_useAuthRegister__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { login , register  } = (0,_hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_9__/* .useAppDispatch */ .T)();
    const { isLoading  } = (0,_hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_10__/* .useAppSelector */ .C)((state)=>state.users);
    const { 0: type , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("login");
    const { formState , reset , handleSubmit , register: registerField , setError ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        mode: "onChange"
    });
    const onSubmit = (data)=>{
        if (type === "login") login({
            data,
            setError
        });
        else if (type === "register") register(data);
        reset();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Meta_Meta__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        title: "Auth",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            className: (_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().Auth),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container_auth),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container_heading),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                src: _public_lock_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                alt: "",
                                draggable: false,
                                width: 50,
                                height: 50,
                                priority: true
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().heading),
                                children: "Auth"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Fields_Fields__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                formState: formState,
                                register: registerField
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Auth_module_scss__WEBPACK_IMPORTED_MODULE_11___default().buttons),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        onClick: ()=>setType("login"),
                                        disabled: isLoading,
                                        buttonStyle: 1,
                                        children: "login"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Button_Button__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        onClick: ()=>setType("register"),
                                        disabled: isLoading,
                                        buttonStyle: 2,
                                        children: "register"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Elements_Field_Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5452);


const Fields = ({ formState: { errors  } , register  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Field_Field__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                placeholder: "Email",
                errors: errors.login,
                ...register("login", {
                    required: "This field must be filled",
                    pattern: {
                        value: /.+@.+\..+/i,
                        message: "Please, enter correct email"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Field_Field__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                placeholder: "Parol",
                type: "password",
                errors: errors.password,
                ...register("password", {
                    required: "This field must be filled",
                    minLength: {
                        value: 5,
                        message: "Password must be more than 5 characters"
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fields);


/***/ }),

/***/ 7266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1888);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const useAuthRegister = ()=>{
    const { user  } = (0,_hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_0__/* .useAppSelector */ .C)((state)=>state.users);
    const { query , push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const redirect = query.redirect ? String(query.redirect) : "/";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (user) push(redirect);
    }, [
        user,
        query,
        redirect
    ]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAuthRegister);


/***/ })

};
;