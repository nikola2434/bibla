exports.id = 263;
exports.ids = [263];
exports.modules = {

/***/ 1767:
/***/ ((module) => {

// Exports
module.exports = {
	"author_edit": "AuthorEdit_author_edit__OO49T",
	"field": "AuthorEdit_field__lIT6J",
	"update": "AuthorEdit_update__OGwLl",
	"select": "AuthorEdit_select__n06jK",
	"react_select": "AuthorEdit_react_select__4f5Xf",
	"image": "AuthorEdit_image__vjnYA"
};


/***/ }),

/***/ 8263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "t": () => (/* binding */ DynamicSelect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _useUpdateAuthor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5283);
/* harmony import */ var _AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1767);
/* harmony import */ var _AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3286);
/* harmony import */ var _Elements_Field_Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5452);
/* harmony import */ var _Elements_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3356);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_booksApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5989);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const DynamicSelect = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\Admin\\Edit\\authors\\AuthorEditContainer.tsx -> " + "../../../Elements/Select/Select"
        ]
    },
    ssr: false
});
const AuthorEditContainer = ()=>{
    const { register , formState: { errors  } , setValue , handleSubmit , getValues , control ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        mode: "onChange"
    });
    const { onSubmit , isLoading  } = (0,_useUpdateAuthor__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateAuthor */ .f)(setValue);
    const { options , isLoading: isBooksLoading  } = (0,_services_booksApi__WEBPACK_IMPORTED_MODULE_7__/* .useGetAllBooksQuery */ .zY)({
        search: ""
    }, {
        selectFromResult: ({ data , isLoading  })=>({
                options: data?.map((item)=>({
                        label: item.title,
                        value: item.id
                    })),
                isLoading
            })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_3__/* .SkeletonLoading */ .S, {
            count: 5
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().author_edit),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().field),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Field_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "text",
                                    errors: errors.nameAuthor,
                                    placeholder: "Name Author",
                                    ...register("nameAuthor", {
                                        required: "This field must be filled!"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().field),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Field_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "text",
                                    errors: errors.country,
                                    placeholder: "Country",
                                    ...register("country", {
                                        required: "This field must be filled!"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().field),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Field_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "date",
                                    errors: errors.DateOfBirth,
                                    placeholder: " Date of Birth",
                                    ...register("DateOfBirth", {
                                        required: "This field must be filled!",
                                        valueAsDate: false
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().select),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().react_select),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
                                    control: control,
                                    name: "BooksWritten",
                                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DynamicSelect, {
                                            field: field,
                                            isLoading: isBooksLoading,
                                            options: options || [],
                                            isMulti: true,
                                            placeholder: "Books written",
                                            errors: error
                                        })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_6___default()((_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().field), (_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().image)),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Field_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "text",
                                    errors: errors.avatar,
                                    placeholder: "Avatar",
                                    ...register("avatar", {
                                        required: "This field must be filled!"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_AuthorEdit_module_scss__WEBPACK_IMPORTED_MODULE_9___default().update),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Button_Button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            buttonStyle: 2,
                            children: "Update"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthorEditContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useUpdateAuthor)
/* harmony export */ });
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_authorsApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9626);




const useUpdateAuthor = (setValue)=>{
    const { push , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const AuthorId = String(query.id);
    const { data , isSuccess , isLoading  } = (0,_services_authorsApi__WEBPACK_IMPORTED_MODULE_2__/* .useAuthorByIdQuery */ .xc)(AuthorId, {
        skip: !AuthorId
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (data) {
            setValue("nameAuthor", data.nameAuthor);
            setValue("country", data.country);
            setValue("avatar", data.avatar);
            setValue("DateOfBirth", data.DateOfBirth);
            setValue("BooksWritten", data.BooksWritten);
        }
    }, [
        isSuccess
    ]);
    const [updateAuthor] = (0,_services_authorsApi__WEBPACK_IMPORTED_MODULE_2__/* .useAuthorUpdateMutation */ .NP)();
    const onSubmit = async (data)=>{
        await updateAuthor({
            data,
            id: AuthorId
        });
        push((0,_config_url_config__WEBPACK_IMPORTED_MODULE_3__/* .getAuthorUrl */ .M_)(AuthorId));
    };
    return {
        onSubmit,
        isLoading
    };
};


/***/ })

};
;