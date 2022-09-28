(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1159:
/***/ ((module) => {

// Exports
module.exports = {
	"skeleton": "Skeleton_skeleton__mkxsR"
};


/***/ }),

/***/ 1899:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: Logo

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const public_logo = ({"src":"/nextjs-pages/_next/static/media/logo.15c5f541.png","height":316,"width":934,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAUklEQVR42gUAOQ6AIIz/f8bBH6iDMU7Gxc3BIw4ccggthRrRjWvbD9u5lMKlVhtyiJSAhPTfPDUp2kPz/oCy+DqQJgnzXDk6ZlaeboXaonEASD+eXELjhn6y8wAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./app/components/Logo/Logo.tsx





const Logo = ()=>{
    return /*#__PURE__*/ _jsx(Link, {
        href: "/",
        children: /*#__PURE__*/ _jsx("a", {
            className: style.logo,
            children: /*#__PURE__*/ _jsx(Image, {
                src: logo,
                draggable: false,
                alt: ""
            })
        })
    });
};


/***/ }),

/***/ 1609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export ContainerMenu */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemMenu_AuthMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4768);
/* harmony import */ var _ItemMenu_ItemMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3231);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ItemMenu_AuthMenu__WEBPACK_IMPORTED_MODULE_1__]);
_ItemMenu_AuthMenu__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ContainerMenu = ({ MenuData  })=>{
    const { title , items  } = MenuData;
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: title === "auth" ? /*#__PURE__*/ _jsx("div", {
            className: style.container,
            children: /*#__PURE__*/ _jsx(AuthMenu, {})
        }) : /*#__PURE__*/ _jsxs("div", {
            className: style.container,
            children: [
                /*#__PURE__*/ _jsx("div", {
                    className: style.title_Menu,
                    children: title
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: style.container_items,
                    children: items?.map((item)=>/*#__PURE__*/ _jsx(ItemMenu, {
                            item: item
                        }, item.title))
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4768:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1888);
/* harmony import */ var _ItemAuthMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5113);
/* harmony import */ var _LogoutButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1906);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_LogoutButton__WEBPACK_IMPORTED_MODULE_3__]);
_LogoutButton__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const AuthMenu = ()=>{
    const { user  } = useAppSelector((state)=>state.users);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: style.title_Menu,
                children: "Settings"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: style.container_items,
                children: [
                    user ? /*#__PURE__*/ _jsxs("div", {
                        children: [
                            /*#__PURE__*/ _jsx(ItemAuthMenu, {
                                item: {
                                    icons: "MdSettings",
                                    title: "Profile",
                                    link: `/profile/${user._id}`
                                }
                            }),
                            /*#__PURE__*/ _jsx(LogoutButton, {
                                item: {
                                    icons: "MdLogout",
                                    title: "Logout",
                                    link: "/auth"
                                }
                            })
                        ]
                    }) : /*#__PURE__*/ _jsx(ItemAuthMenu, {
                        item: {
                            icons: "MdLogin",
                            link: "/auth",
                            title: "Login"
                        }
                    }),
                    user?.isAdmin && /*#__PURE__*/ _jsx(ItemAuthMenu, {
                        item: {
                            icons: "MdLock",
                            title: "Admin panel",
                            link: "/manage/statistics"
                        }
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (AuthMenu)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5113:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7597);




const ItemAuthMenu = ({ item  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: style.default,
        children: /*#__PURE__*/ _jsx(Link, {
            href: item.link,
            children: /*#__PURE__*/ _jsxs("a", {
                className: style.item_menu,
                children: [
                    /*#__PURE__*/ _jsx(Icons, {
                        name: item.icons
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: style.title,
                        children: item.title
                    })
                ]
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (ItemAuthMenu)));


/***/ }),

/***/ 3231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export ItemMenu */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7597);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






const ItemMenu = ({ item  })=>{
    const route = useRouter();
    return /*#__PURE__*/ _jsx("div", {
        className: cn({
            [style.active]: route.asPath === item.link
        }, style.default),
        children: /*#__PURE__*/ _jsx(Link, {
            href: item.link,
            children: /*#__PURE__*/ _jsxs("a", {
                className: style.item_menu,
                children: [
                    /*#__PURE__*/ _jsx(Icons, {
                        name: item.icons
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: style.title,
                        children: item.title
                    })
                ]
            })
        })
    });
};


/***/ }),

/***/ 1906:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(416);
/* harmony import */ var _UI_Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7597);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_1__]);
_hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const LogoutButton = ({ item  })=>{
    const { replace  } = useRouter();
    const { logout  } = useAppDispatch();
    const handleLogout = (e)=>{
        e.preventDefault();
        logout();
        replace("/auth");
    };
    return /*#__PURE__*/ _jsx("div", {
        className: style.default,
        children: /*#__PURE__*/ _jsxs("a", {
            onClick: handleLogout,
            className: style.item_menu,
            children: [
                /*#__PURE__*/ _jsx(Icons, {
                    name: item.icons
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: style.title,
                    children: item.title
                })
            ]
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (LogoutButton)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports MenuData, BookGenres */
const MenuData = {
    title: "Menu",
    items: [
        {
            title: "Home",
            link: "/",
            icons: "MdHome"
        },
        {
            title: "My books",
            link: "/MyBooks",
            icons: "MdBook"
        },
        {
            title: "Trending now",
            link: "/trending",
            icons: "MdLocalFireDepartment"
        }, 
    ]
};
const BookGenres = {
    title: "Book genres",
    items: [
        {
            title: "Detective",
            link: "/detective",
            icons: "MdSearch"
        },
        {
            title: "Novel",
            link: "/novel",
            icons: "MdVolunteerActivism"
        },
        {
            title: "Adventure",
            link: "/adventure",
            icons: "MdOutlineHiking"
        },
        {
            title: "Thriller",
            link: "thriller",
            icons: "MdOutlineMoodBad"
        },
        {
            title: "Fantasy",
            link: "/fantasy",
            icons: "MdOutlineAutoFixHigh"
        }, 
    ]
};


/***/ }),

/***/ 9161:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export Navigation */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1899);
/* harmony import */ var _Menu_ContainerMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1609);
/* harmony import */ var _Menu_MenuData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4164);
/* harmony import */ var _services_genresApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4620);
/* harmony import */ var _Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3286);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Menu_ContainerMenu__WEBPACK_IMPORTED_MODULE_2__]);
_Menu_ContainerMenu__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Navigation = ()=>{
    const { data , isLoading  } = useGetGenresQuery({
        limit: 10
    }, {
        selectFromResult: ({ data , isLoading  })=>({
                isLoading: isLoading,
                data: data?.map((genre)=>{
                    return {
                        title: genre.title,
                        link: getGenreUrl(genre.link),
                        icons: genre.icons
                    };
                })
            })
    });
    return /*#__PURE__*/ _jsxs("div", {
        className: style.navigation,
        children: [
            /*#__PURE__*/ _jsx(Logo, {}),
            /*#__PURE__*/ _jsxs("div", {
                className: style.container_menu,
                children: [
                    /*#__PURE__*/ _jsx(ContainerMenu, {
                        MenuData: MenuData
                    }),
                    isLoading ? /*#__PURE__*/ _jsx(SkeletonLoading, {
                        count: 5,
                        height: 20,
                        width: 170
                    }) : /*#__PURE__*/ _jsx(ContainerMenu, {
                        MenuData: {
                            title: "Book genres",
                            items: data || []
                        }
                    }),
                    /*#__PURE__*/ _jsx(ContainerMenu, {
                        MenuData: {
                            title: "auth"
                        }
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9767:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: Sidebar

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./services/booksApi.ts
var booksApi = __webpack_require__(5989);
// EXTERNAL MODULE: ./app/components/Skeleton/Skeleton.tsx
var Skeleton = __webpack_require__(3286);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./app/UI/Icons.tsx
var UI_Icons = __webpack_require__(7597);
// EXTERNAL MODULE: ./config/generateLink.ts
var config_generateLink = __webpack_require__(7339);
;// CONCATENATED MODULE: ./app/components/Sidebar/Search/ContainerSidebar/ItemPopularBook/ItemPopularBook.tsx







const ItemPopularBook_ItemPopularBook = ({ book  })=>{
    return /*#__PURE__*/ _jsx("div", {
        children: /*#__PURE__*/ _jsx(Link, {
            href: getBookUrl(book.id),
            children: /*#__PURE__*/ _jsxs("a", {
                className: style.popular_book,
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: book.poster,
                        width: 60,
                        height: 97,
                        alt: book.title,
                        draggable: false,
                        priority: true,
                        className: style.image
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: style.container_characteristics,
                        children: [
                            /*#__PURE__*/ _jsx("div", {
                                className: style.title,
                                children: book.title
                            }),
                            /*#__PURE__*/ _jsx(Link, {
                                href: "/genre/" + generateLink(book.genre),
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: style.genre,
                                    children: book.genre
                                })
                            }),
                            /*#__PURE__*/ _jsxs("div", {
                                className: style.rating,
                                children: [
                                    /*#__PURE__*/ _jsx("div", {
                                        className: style.star,
                                        children: /*#__PURE__*/ _jsx(Icons, {
                                            name: "MdStarRate"
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx("div", {
                                        children: book.rating
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
/* harmony default export */ const ContainerSidebar_ItemPopularBook_ItemPopularBook = ((/* unused pure expression or super */ null && (ItemPopularBook_ItemPopularBook)));

;// CONCATENATED MODULE: ./app/components/Sidebar/Search/ContainerSidebar/ListPopularBooks/ListPopularBooks.tsx




const ListPopularBooks_ListPopularBooks = ({ title , link , books ,  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: style.heading,
                children: title
            }),
            /*#__PURE__*/ _jsx("div", {
                className: style.list_popular_book,
                children: books.map((book)=>/*#__PURE__*/ _jsx(ItemPopularBook, {
                        book: book
                    }, book.title))
            }),
            /*#__PURE__*/ _jsx("div", {
                className: style.button,
                children: /*#__PURE__*/ _jsx(Link, {
                    href: "/trending",
                    children: /*#__PURE__*/ _jsx("a", {
                        children: "See more"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const ContainerSidebar_ListPopularBooks_ListPopularBooks = ((/* unused pure expression or super */ null && (ListPopularBooks_ListPopularBooks)));

;// CONCATENATED MODULE: ./app/components/Sidebar/Search/ContainerSidebar/ContainerSidebar.tsx




const ContainerSidebar_ContainerSidebar = ()=>{
    const { PopularBooks , isLoading  } = useGetPopularBooksQuery(undefined, {
        selectFromResult: ({ data , isLoading  })=>({
                PopularBooks: data?.slice(0, 4),
                isLoading
            })
    });
    return /*#__PURE__*/ _jsx("div", {
        children: isLoading ? /*#__PURE__*/ _jsx(SkeletonLoading, {
            count: 4,
            height: 40,
            width: 170,
            style: {
                marginLeft: 10
            }
        }) : /*#__PURE__*/ _jsx(ListPopularBooks, {
            books: PopularBooks || [],
            link: "popular",
            title: "Popular now"
        })
    });
};
/* harmony default export */ const Search_ContainerSidebar_ContainerSidebar = ((/* unused pure expression or super */ null && (ContainerSidebar_ContainerSidebar)));

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./hooks/useDebounce.ts
var hooks_useDebounce = __webpack_require__(4841);
;// CONCATENATED MODULE: ./app/components/Sidebar/Search/useSearch.ts



const useSearch_useSearch = ()=>{
    const { 0: searchTerm , 1: setSearchTerm  } = useState("");
    const debouncedSearch = useDebounce(searchTerm, 1000);
    const { data , isSuccess  } = useGetAllBooksQuery({
        search: debouncedSearch
    }, {
        skip: !debouncedSearch
    });
    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }
    return {
        data,
        isSuccess,
        handleSearch,
        debouncedSearch,
        searchTerm
    };
};

// EXTERNAL MODULE: ./app/components/InputSearch/InputSearch.tsx
var InputSearch_InputSearch = __webpack_require__(9158);
;// CONCATENATED MODULE: ./app/components/Sidebar/Search/SearchList/SearchItemList/SearchItemList.tsx





const SearchItemList_SearchItemList = ({ book  })=>{
    return /*#__PURE__*/ _jsx(Link, {
        href: getBookUrl(book.id),
        children: /*#__PURE__*/ _jsxs("a", {
            className: style.container_item,
            children: [
                /*#__PURE__*/ _jsx(Image, {
                    src: book.poster,
                    alt: book.title,
                    objectFit: "cover",
                    width: 50,
                    height: 60,
                    draggable: false,
                    className: style.image
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: style.title,
                    children: book.title
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./app/components/Sidebar/Search/SearchList/SearchList.tsx



const SearchList_SearchList = ({ books  })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: style.list,
        children: books.length ? books.map((book)=>/*#__PURE__*/ _jsx(SearchItemList, {
                book: book
            }, book.title)) : /*#__PURE__*/ _jsx("div", {
            className: style.message,
            children: "Book not found!"
        })
    });
};

;// CONCATENATED MODULE: ./app/components/Sidebar/Search/Search.tsx





const Search_Search = ()=>{
    const { data , handleSearch , isSuccess , searchTerm  } = useSearch();
    return /*#__PURE__*/ _jsxs("div", {
        className: style.search,
        children: [
            /*#__PURE__*/ _jsx(InputSearch, {
                value: searchTerm,
                handleSearch: handleSearch
            }),
            isSuccess && /*#__PURE__*/ _jsx(SearchList, {
                books: data || []
            })
        ]
    });
};

;// CONCATENATED MODULE: ./app/components/Sidebar/Sidebar.tsx




const Sidebar = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: style.sidebar,
        children: [
            /*#__PURE__*/ _jsx(Search, {}),
            /*#__PURE__*/ _jsx(ContainerSidebar, {})
        ]
    });
};


/***/ }),

/***/ 3286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SkeletonLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9012);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Skeleton_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1159);
/* harmony import */ var _Skeleton_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Skeleton_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6593);
/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_2__);




const SkeletonLoading = ({ ...rest })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react_loading_skeleton__WEBPACK_IMPORTED_MODULE_1___default()), {
        ...rest,
        baseColor: "#0957b4",
        highlightColor: "#43acf9",
        className: (_Skeleton_module_scss__WEBPACK_IMPORTED_MODULE_3___default().skeleton)
    });
};


/***/ }),

/***/ 6845:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export Layout */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9161);
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9767);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__]);
_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Layout = ({ children  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: style.layout,
        children: [
            /*#__PURE__*/ _jsx(Navigation, {}),
            /*#__PURE__*/ _jsx("div", {
                className: style.center,
                children: children
            }),
            /*#__PURE__*/ _jsx(Sidebar, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4262:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export AuthProviders */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(416);
/* harmony import */ var _hooks_useAppSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1888);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__]);
([js_cookie__WEBPACK_IMPORTED_MODULE_1__, _hooks_useAppDispatch__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const DynamicAuthProviders = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\app\\components\\providers\\AuthProviders\\AuthProviders.tsx -> " + "./CheckRole"
        ]
    },
    ssr: false
});
const AuthProviders = ({ Component: { isOnlyAdmin , isOnlyUser  } , children ,  })=>{
    const { user  } = useAppSelector((state)=>state.users);
    const { logout  } = useAppDispatch();
    useEffect(()=>{
        const refreshToken = Cookies.get("refreshToken");
        if (!refreshToken && user) logout();
    }, []);
    return !isOnlyAdmin && !isOnlyUser ? /*#__PURE__*/ _jsx(_Fragment, {
        children: children
    }) : /*#__PURE__*/ _jsx(DynamicAuthProviders, {
        Component: {
            isOnlyAdmin,
            isOnlyUser
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HeadProviders_HeadProviders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
;// CONCATENATED MODULE: ./config/constants.tsx
const MainColor = "#43acf9";
const SecondaryColor = "#0957b4";

;// CONCATENATED MODULE: ./app/components/providers/HeadProviders/FiveIcons.tsx

const FiveIcons = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "shortcut icon",
                href: "iconified/iconified/favicon.ico",
                type: "image/x-icon"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "apple-touch-icon",
                href: "iconified/iconified/apple-touch-icon.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "iconified/iconified/apple-touch-icon-57x57.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "iconified/iconified/apple-touch-icon-72x72.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "iconified/iconified/apple-touch-icon-76x76.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "iconified/iconified/apple-touch-icon-114x114.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "iconified/iconified/apple-touch-icon-120x120.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "iconified/iconified/apple-touch-icon-144x144.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "iconified/iconified/apple-touch-icon-152x152.png"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsx)("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "iconified/iconified/apple-touch-icon-180x180.png"
            })
        ]
    });
};
/* harmony default export */ const HeadProviders_FiveIcons = (FiveIcons);

;// CONCATENATED MODULE: ./app/components/providers/HeadProviders/HeadProviders.tsx





const HeadProviders = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsx)((external_nextjs_progressbar_default()), {
                color: SecondaryColor,
                height: 2,
                startPosition: 0.3
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "theme-color",
                        content: "#43acf9"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)("meta", {
                        name: "msapplication-navbutton-color",
                        content: "#43acf9"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsx)(HeadProviders_FiveIcons, {})
                ]
            }),
            children
        ]
    });
};
/* harmony default export */ const HeadProviders_HeadProviders = (HeadProviders);


/***/ }),

/***/ 6995:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ MeinProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6073);
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6845);
/* harmony import */ var _Meta_Meta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(665);
/* harmony import */ var _AuthProviders_AuthProviders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4262);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_store__WEBPACK_IMPORTED_MODULE_3__, _layout_Layout__WEBPACK_IMPORTED_MODULE_4__, _AuthProviders_AuthProviders__WEBPACK_IMPORTED_MODULE_6__]);
([_store_store__WEBPACK_IMPORTED_MODULE_3__, _layout_Layout__WEBPACK_IMPORTED_MODULE_4__, _AuthProviders_AuthProviders__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MeinProvider = ({ children , Component: { isOnlyAdmin , isOnlyUser  } ,  })=>{
    const { 0: showChild , 1: setShowChild  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setShowChild(true);
    }, []);
    if (!showChild) {
        return null;
    }
    if (true) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    } else {}
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ getLocalStorage)
/* harmony export */ });
const getLocalStorage = (name)=>{
    if (typeof localStorage !== "undefined") {
        const ls = localStorage.getItem(name);
        return ls ? JSON.parse(ls) : null;
    }
    return null;
};


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_components_providers_HeadProviders_HeadProviders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2052);
/* harmony import */ var _app_components_providers_MeinProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6995);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_app_components_providers_MeinProvider__WEBPACK_IMPORTED_MODULE_2__]);
_app_components_providers_MeinProvider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_providers_HeadProviders_HeadProviders__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_app_components_providers_MeinProvider__WEBPACK_IMPORTED_MODULE_2__/* .MeinProvider */ .G, {
            Component: Component,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ sliderApi)
/* harmony export */ });
/* unused harmony export useGetSlideQuery */
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8521);
/* harmony import */ var _reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__);


const sliderApi = (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "sliderApi",
    baseQuery: (0,_reduxjs_toolkit_dist_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "http://localhost:3001/sliders"
    }),
    endpoints: (build)=>({
            getSlide: build.query({
                query: ({ limit  })=>({
                        url: "",
                        params: {
                            limit
                        }
                    })
            })
        })
});
const { useGetSlideQuery  } = sliderApi;


/***/ }),

/***/ 6073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export store */
/* harmony import */ var _services_sliderAri__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7773);
/* harmony import */ var _user_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1543);
/* harmony import */ var _services_booksApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5989);
/* harmony import */ var _services_genresApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4620);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_usersApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5328);
/* harmony import */ var _services_authorsApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9626);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user_userSlice__WEBPACK_IMPORTED_MODULE_1__]);
_user_userSlice__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({
    reducer: {
        [_services_genresApi__WEBPACK_IMPORTED_MODULE_3__/* .genresAPI.reducerPath */ .ge.reducerPath]: _services_genresApi__WEBPACK_IMPORTED_MODULE_3__/* .genresAPI.reducer */ .ge.reducer,
        [_services_booksApi__WEBPACK_IMPORTED_MODULE_2__/* .booksApi.reducerPath */ .Hp.reducerPath]: _services_booksApi__WEBPACK_IMPORTED_MODULE_2__/* .booksApi.reducer */ .Hp.reducer,
        [_services_usersApi__WEBPACK_IMPORTED_MODULE_5__/* .usersApi.reducerPath */ .g8.reducerPath]: _services_usersApi__WEBPACK_IMPORTED_MODULE_5__/* .usersApi.reducer */ .g8.reducer,
        [_services_authorsApi__WEBPACK_IMPORTED_MODULE_6__/* .authorsApi.reducerPath */ .Y6.reducerPath]: _services_authorsApi__WEBPACK_IMPORTED_MODULE_6__/* .authorsApi.reducer */ .Y6.reducer,
        [_services_sliderAri__WEBPACK_IMPORTED_MODULE_0__/* .sliderApi.reducerPath */ .s.reducerPath]: _services_sliderAri__WEBPACK_IMPORTED_MODULE_0__/* .sliderApi.reducer */ .s.reducer,
        users: _user_userSlice__WEBPACK_IMPORTED_MODULE_1__/* .userSliceReducer */ .a
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_services_genresApi__WEBPACK_IMPORTED_MODULE_3__/* .genresAPI.middleware */ .ge.middleware)
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1543:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ userSliceReducer)
/* harmony export */ });
/* harmony import */ var _hooks_local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9027);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4238);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_userActions__WEBPACK_IMPORTED_MODULE_1__]);
_userActions__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    user: (0,_hooks_local_storage__WEBPACK_IMPORTED_MODULE_2__/* .getLocalStorage */ .$)("user"),
    isLoading: false
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(_userActions__WEBPACK_IMPORTED_MODULE_1__.login.pending, (state)=>{
            state.isLoading = true;
        }).addCase(_userActions__WEBPACK_IMPORTED_MODULE_1__.login.rejected, (state)=>{
            state.isLoading = false;
            state.user = null;
        }).addCase(_userActions__WEBPACK_IMPORTED_MODULE_1__.login.fulfilled, (state, { payload  })=>{
            state.isLoading = false;
            state.user = payload.user;
        }).addCase(_userActions__WEBPACK_IMPORTED_MODULE_1__.register.pending, (state)=>{
            state.isLoading = true;
        }).addCase(_userActions__WEBPACK_IMPORTED_MODULE_1__.register.rejected, (state)=>{
            state.isLoading = false;
            state.user = null;
        }).addCase(_userActions__WEBPACK_IMPORTED_MODULE_1__.register.fulfilled, (state, { payload  })=>{
            state.isLoading = false;
            state.user = payload.user;
        }).addCase(_userActions__WEBPACK_IMPORTED_MODULE_1__.logout.fulfilled, (state)=>{
            state.user = null;
        }).addCase(_userActions__WEBPACK_IMPORTED_MODULE_1__.getTokens.fulfilled, (state, { payload  })=>{
            state.user = payload.user;
        }).addCase(_userActions__WEBPACK_IMPORTED_MODULE_1__.update.fulfilled, (state, { payload  })=>{
            state.user = payload.user;
        });
    }
});
const userSliceReducer = userSlice.reducer;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 8521:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/dist/query/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/md");

/***/ }),

/***/ 9012:
/***/ ((module) => {

"use strict";
module.exports = require("react-loading-skeleton");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [377,964,952,664,675,759,813,665,989,626,328,950,620,421,339], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();