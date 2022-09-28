exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 1129:
/***/ ((module) => {

// Exports
module.exports = {
	"book_edit": "BookEdit_book_edit__vvTeS",
	"field": "BookEdit_field__ty3a6",
	"image": "BookEdit_image__PUFDm",
	"poster": "BookEdit_poster___ADOw",
	"update": "BookEdit_update__80RCB"
};


/***/ }),

/***/ 4141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ DynamicTextEditor),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5641);
/* harmony import */ var _Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3286);
/* harmony import */ var _useUpdateBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7193);
/* harmony import */ var _BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1129);
/* harmony import */ var _BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Elements_Field_Field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5452);
/* harmony import */ var _Elements_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3356);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _authors_AuthorEditContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8263);
/* harmony import */ var _services_authorsApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9626);
/* harmony import */ var _services_genresApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4620);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _authors_AuthorEditContainer__WEBPACK_IMPORTED_MODULE_7__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_1__, _authors_AuthorEditContainer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const DynamicTextEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\Admin\\Edit\\books\\BookEditContainer.tsx -> " + "../../../Elements/TextEditor/TextEditor"
        ]
    },
    ssr: false
});
const BookEditContainer = ()=>{
    const { register , formState: { errors  } , setValue , handleSubmit , control ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_1__.useForm)({
        mode: "onChange"
    });
    const { onSubmit , isLoading  } = (0,_useUpdateBook__WEBPACK_IMPORTED_MODULE_3__/* .useUpdateBook */ .D)(setValue);
    const { optionsAuthors , isLoading: isLoadingAuthors  } = (0,_services_authorsApi__WEBPACK_IMPORTED_MODULE_8__/* .useGetAllAuthorsQuery */ .ks)({
        search: ""
    }, {
        selectFromResult: ({ data , isLoading  })=>({
                optionsAuthors: data?.map((item)=>({
                        label: item.nameAuthor,
                        value: item.nameAuthor
                    })),
                isLoading
            })
    });
    const { optionsGenres , isLoading: isLoadingGenres  } = (0,_services_genresApi__WEBPACK_IMPORTED_MODULE_9__/* .useGetGenresQuery */ ._)({}, {
        selectFromResult: ({ data , isLoading  })=>({
                optionsGenres: data?.map((item)=>({
                        label: item.title,
                        value: item.title
                    })),
                isLoading
            })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        children: isLoading ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_2__/* .SkeletonLoading */ .S, {
            count: 5,
            height: 48
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10___default().book_edit),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10___default().field),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Field_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "text",
                                    errors: errors.title,
                                    placeholder: "Name of the book",
                                    ...register("title", {
                                        required: "This field must be filled!"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10___default().field),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
                                    control: control,
                                    name: "author",
                                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_authors_AuthorEditContainer__WEBPACK_IMPORTED_MODULE_7__/* .DynamicSelect */ .t, {
                                            isMulti: false,
                                            field: field,
                                            errors: error,
                                            placeholder: "Author",
                                            options: optionsAuthors || [],
                                            isLoading: isLoadingAuthors
                                        })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10___default().field),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
                                    control: control,
                                    name: "genre",
                                    render: ({ field , fieldState: { error  }  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_authors_AuthorEditContainer__WEBPACK_IMPORTED_MODULE_7__/* .DynamicSelect */ .t, {
                                            isMulti: false,
                                            field: field,
                                            errors: error,
                                            placeholder: "Genre",
                                            options: optionsGenres || [],
                                            isLoading: isLoadingGenres
                                        })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10___default().field),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Elements_Field_Field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    type: "text",
                                    errors: errors.poster,
                                    placeholder: "Poster",
                                    ...register("poster", {
                                        required: "This field must be filled!"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: (_BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10___default().field)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_1__.Controller, {
                            control: control,
                            name: "description",
                            render: ({ fieldState: { error  } , field: { value , onChange  } ,  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DynamicTextEditor, {
                                    onChange: onChange,
                                    value: value,
                                    placeholder: "Description",
                                    errors: error
                                })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: (_BookEdit_module_scss__WEBPACK_IMPORTED_MODULE_10___default().update),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookEditContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useUpdateBook)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_booksApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5989);
/* harmony import */ var _config_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2185);




const useUpdateBook = (setValue)=>{
    const { push , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const bookId = String(query.id);
    const { data , isLoading , isSuccess  } = (0,_services_booksApi__WEBPACK_IMPORTED_MODULE_2__/* .useBookByIdQuery */ .n)(bookId, {
        skip: !bookId
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (data) {
            setValue("title", data.title);
            setValue("author", data.author);
            setValue("description", data.description);
            setValue("genre", data.genre);
            setValue("poster", data.poster);
            setValue("rating", data.rating);
        }
    }, [
        isSuccess
    ]);
    const [updateBook] = (0,_services_booksApi__WEBPACK_IMPORTED_MODULE_2__/* .useUpdateBookMutation */ ._n)();
    const onSubmit = async (data)=>{
        await updateBook({
            data,
            id: bookId
        });
        push((0,_config_url_config__WEBPACK_IMPORTED_MODULE_3__/* .getBookUrl */ .dd)(bookId));
    };
    return {
        isLoading,
        onSubmit
    };
};


/***/ })

};
;