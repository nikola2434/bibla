"use strict";
exports.id = 989;
exports.ids = [989];
exports.modules = {

/***/ 5989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hp": () => (/* binding */ booksApi),
/* harmony export */   "RQ": () => (/* binding */ useCreateBookMutation),
/* harmony export */   "_n": () => (/* binding */ useUpdateBookMutation),
/* harmony export */   "n": () => (/* binding */ useBookByIdQuery),
/* harmony export */   "tJ": () => (/* binding */ useDeleteBookMutation),
/* harmony export */   "zY": () => (/* binding */ useGetAllBooksQuery),
/* harmony export */   "ze": () => (/* binding */ useGetPopularBooksQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8521);
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__);

const booksApi = (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "booksApi",
    baseQuery: (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "http://localhost:3001/"
    }),
    endpoints: (build)=>({
            getAllBooks: build.query({
                query: ({ search , id_ne , limit , page  })=>({
                        url: "books",
                        params: {
                            title_like: search,
                            title_ne: id_ne,
                            _limit: limit,
                            _page: page
                        }
                    })
            }),
            getPopularBooks: build.query({
                query: ()=>({
                        url: "books"
                    }),
                transformResponse: (response)=>{
                    const sortBooks = response.sort((a, b)=>{
                        return b.rating - a.rating;
                    });
                    return sortBooks;
                }
            }),
            deleteBook: build.mutation({
                query: (id)=>({
                        url: `books/${id}`,
                        method: "DELETE"
                    })
            }),
            bookById: build.query({
                query: (id)=>({
                        url: `books/${id}`
                    })
            }),
            updateBook: build.mutation({
                query: ({ data , id  })=>({
                        url: `books/${id}`,
                        method: "PUT",
                        body: data
                    })
            }),
            createBook: build.mutation({
                query: (data)=>({
                        url: `books/`,
                        method: "POST",
                        body: data
                    })
            })
        })
});
const { useGetAllBooksQuery , useGetPopularBooksQuery , useDeleteBookMutation , useUpdateBookMutation , useBookByIdQuery , useCreateBookMutation ,  } = booksApi;


/***/ })

};
;