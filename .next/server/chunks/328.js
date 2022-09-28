"use strict";
exports.id = 328;
exports.ids = [328];
exports.modules = {

/***/ 5328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Jx": () => (/* binding */ useGetByIdQuery),
/* harmony export */   "g8": () => (/* binding */ usersApi),
/* harmony export */   "gA": () => (/* binding */ useDeleteUsersMutation),
/* harmony export */   "kD": () => (/* binding */ useUpdateUserMutation),
/* harmony export */   "vn": () => (/* binding */ useGetSearchUsersQuery),
/* harmony export */   "zQ": () => (/* binding */ useGetUsersQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8521);
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__);

const usersApi = (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "usersApi",
    baseQuery: (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "http://localhost:3001/"
    }),
    endpoints: (build)=>({
            getUsers: build.query({
                query: (limit)=>({
                        url: "users",
                        params: {
                            limit
                        }
                    })
            }),
            getSearchUsers: build.query({
                query: ({ search , id_ne , limit , page  })=>({
                        url: "users",
                        params: {
                            q: search,
                            id_ne: id_ne,
                            _imit: limit,
                            _page: page
                        }
                    }),
                transformResponse: (response)=>{
                    const data = response.map((user)=>({
                            ...user.user
                        }));
                    return data;
                }
            }),
            updateUser: build.mutation({
                query: ({ id , user  })=>({
                        url: `users/${id}`,
                        body: user,
                        method: "PUT"
                    })
            }),
            getById: build.query({
                query: (id)=>({
                        url: `users/${id}`
                    })
            }),
            deleteUsers: build.mutation({
                query: (id)=>({
                        url: `users/${id}`,
                        method: "DELETE"
                    })
            })
        })
});
const { useGetUsersQuery , useGetSearchUsersQuery , useDeleteUsersMutation , useUpdateUserMutation , useGetByIdQuery ,  } = usersApi;


/***/ })

};
;