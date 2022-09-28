"use strict";
exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 4620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RF": () => (/* binding */ useCreateGenreMutation),
/* harmony export */   "_": () => (/* binding */ useGetGenresQuery),
/* harmony export */   "cM": () => (/* binding */ useDeleteGenreMutation),
/* harmony export */   "ge": () => (/* binding */ genresAPI),
/* harmony export */   "sy": () => (/* binding */ useUpdateGenreMutation),
/* harmony export */   "yy": () => (/* binding */ useGetByIdGenresQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8521);
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__);

const genresAPI = (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "genresAPI",
    baseQuery: (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "http://localhost:3001/bookGenres"
    }),
    endpoints: (build)=>({
            getGenres: build.query({
                query: ({ search ="" , id_ne , page =1 , limit =10  })=>({
                        url: "",
                        params: {
                            title_like: search,
                            id_ne,
                            _limit: limit,
                            _page: page
                        }
                    })
            }),
            getByIdGenres: build.query({
                query: (id)=>({
                        url: `/${id}`
                    })
            }),
            deleteGenre: build.mutation({
                query: (id)=>({
                        url: `/${id}`,
                        method: "DELETE"
                    })
            }),
            updateGenre: build.mutation({
                query: ({ data , id  })=>({
                        url: `/${id}`,
                        method: "PUT",
                        body: data
                    })
            }),
            createGenre: build.mutation({
                query: ({ data  })=>({
                        url: "/",
                        body: data,
                        method: "POST"
                    })
            })
        })
});
const { useGetGenresQuery , useDeleteGenreMutation , useGetByIdGenresQuery , useUpdateGenreMutation , useCreateGenreMutation ,  } = genresAPI;


/***/ })

};
;