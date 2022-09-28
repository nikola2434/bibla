"use strict";
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 9626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Em": () => (/* binding */ useDeleteAuthorsMutation),
/* harmony export */   "NP": () => (/* binding */ useAuthorUpdateMutation),
/* harmony export */   "Y6": () => (/* binding */ authorsApi),
/* harmony export */   "bz": () => (/* binding */ useCreateAuthorMutation),
/* harmony export */   "ks": () => (/* binding */ useGetAllAuthorsQuery),
/* harmony export */   "xc": () => (/* binding */ useAuthorByIdQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8521);
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__);


const authorsApi = (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "authorsApi",
    baseQuery: (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "http://localhost:3001/"
    }),
    endpoints: (build)=>({
            getAllAuthors: build.query({
                query: ({ search , id_ne , page , limit  })=>({
                        url: "author",
                        params: {
                            nameAuthor_like: search,
                            id_ne,
                            _page: page,
                            _limit: limit
                        }
                    })
            }),
            deleteAuthors: build.mutation({
                query: (id)=>({
                        url: `author/${id}`,
                        method: "DELETE"
                    })
            }),
            authorById: build.query({
                query: (id)=>({
                        url: `author/${id}`
                    })
            }),
            authorUpdate: build.mutation({
                query: ({ data , id  })=>({
                        url: `author/${id}`,
                        method: "PUT",
                        body: data
                    })
            }),
            createAuthor: build.mutation({
                query: (data)=>({
                        url: "author",
                        body: data,
                        method: "POST"
                    })
            })
        })
});
const { useDeleteAuthorsMutation , useGetAllAuthorsQuery , useAuthorByIdQuery , useAuthorUpdateMutation , useCreateAuthorMutation ,  } = authorsApi;


/***/ })

};
;