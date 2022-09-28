"use strict";
exports.id = 950;
exports.ids = [950];
exports.modules = {

/***/ 3178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ getCookies)
/* harmony export */ });
const getCookies = (len = 14)=>{
    let cookie = "";
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
    for(let i = 0; i < len; i++){
        cookie += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return cookie;
};


/***/ }),

/***/ 9317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getRandomID)
/* harmony export */ });
const getRandomID = ()=>{
    return `f${(+new Date()).toString(16)}`;
};


/***/ }),

/***/ 416:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var _store_user_allAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5001);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_user_allAction__WEBPACK_IMPORTED_MODULE_0__]);
_store_user_allAction__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useAppDispatch = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.bindActionCreators)(_store_user_allAction__WEBPACK_IMPORTED_MODULE_0__/* .allAction */ .K, dispatch), [
        dispatch
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 1715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gy": () => (/* binding */ removeToken),
/* harmony export */   "sd": () => (/* binding */ getNewUser),
/* harmony export */   "xp": () => (/* binding */ saveLocalStage)
/* harmony export */ });
/* unused harmony export saveToken */
/* harmony import */ var _config_getCookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3178);
/* harmony import */ var _config_getId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9317);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_0__]);
js_cookie__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const saveToken = (data)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("accessToken", data.accessToken);
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].set("refreshToken", data.refreshToken);
};
const removeToken = ()=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("accessToken");
    js_cookie__WEBPACK_IMPORTED_MODULE_0__["default"].remove("refreshToken");
};
const saveLocalStage = (data)=>{
    saveToken(data);
    localStorage.setItem("user", JSON.stringify(data.user));
};
const getNewUser = (email, password)=>{
    return {
        user: {
            _id: (0,_config_getId__WEBPACK_IMPORTED_MODULE_1__/* .getRandomID */ .N)(),
            login: email,
            password: password,
            isAdmin: false,
            favoriteBooks: []
        },
        id: (0,_config_getId__WEBPACK_IMPORTED_MODULE_1__/* .getRandomID */ .N)(),
        accessToken: (0,_config_getCookies__WEBPACK_IMPORTED_MODULE_2__/* .getCookies */ .$)(),
        refreshToken: (0,_config_getCookies__WEBPACK_IMPORTED_MODULE_2__/* .getCookies */ .$)()
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5402:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ userApi)
/* harmony export */ });
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5813);
/* harmony import */ var _authHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1715);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_authHelper__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
([_authHelper__WEBPACK_IMPORTED_MODULE_1__, js_cookie__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const userApi = {
    async login (login, setError, password) {
        const response = await _axios__WEBPACK_IMPORTED_MODULE_0__/* .classicAxios.get */ .lp.get(`users?q=${login}`);
        if (response.data.length !== 0) {
            (0,_authHelper__WEBPACK_IMPORTED_MODULE_1__/* .saveLocalStage */ .xp)(response.data[0]);
        }
        return response.data;
    },
    async register (email, password) {
        const newUser = (0,_authHelper__WEBPACK_IMPORTED_MODULE_1__/* .getNewUser */ .sd)(email, password);
        const response = await _axios__WEBPACK_IMPORTED_MODULE_0__/* .classicAxios.post */ .lp.post("users", newUser, {
            headers: (0,_axios__WEBPACK_IMPORTED_MODULE_0__/* .getContentType */ .wg)()
        });
        if (response.data.accessToken) (0,_authHelper__WEBPACK_IMPORTED_MODULE_1__/* .saveLocalStage */ .xp)(response.data);
        return response.data;
    },
    logout () {
        (0,_authHelper__WEBPACK_IMPORTED_MODULE_1__/* .removeToken */ .gy)();
        localStorage.removeItem("user");
    },
    async getNewTokens (id) {
        const refreshToken = js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("refreshToken");
        const user = await _axios__WEBPACK_IMPORTED_MODULE_0__/* .classicAxios.get */ .lp.get(`users/${id}`);
        const response = await _axios__WEBPACK_IMPORTED_MODULE_0__/* .classicAxios.put */ .lp.put(`users/${id}`, {
            ...user,
            refreshToken
        }, {
            headers: (0,_axios__WEBPACK_IMPORTED_MODULE_0__/* .getContentType */ .wg)()
        });
        return response.data;
    },
    async updateUser (id) {
        const user = await _axios__WEBPACK_IMPORTED_MODULE_0__/* .classicAxios.get */ .lp.get(`users/${id}`);
        if (user.data.accessToken) {
            (0,_authHelper__WEBPACK_IMPORTED_MODULE_1__/* .saveLocalStage */ .xp)(user.data);
        }
        return user.data;
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ allAction)
/* harmony export */ });
/* harmony import */ var _userActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4238);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_userActions__WEBPACK_IMPORTED_MODULE_0__]);
_userActions__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const allAction = {
    ..._userActions__WEBPACK_IMPORTED_MODULE_0__
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTokens": () => (/* binding */ getTokens),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _services_auth_userAuthApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5402);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth_userAuthApi__WEBPACK_IMPORTED_MODULE_0__]);
_services_auth_userAuthApi__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* login */ const login = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("auth/login", async ({ setError , data  }, thunkApi)=>{
    try {
        const AuthResponse = await _services_auth_userAuthApi__WEBPACK_IMPORTED_MODULE_0__/* .userApi.login */ .B.login(data.login, setError, data.password);
        if (AuthResponse.length === 0) {
            setError("login", {
                message: "Wrong password or email!"
            });
            setError("password", {
                message: "Wrong password or email!"
            });
            return thunkApi.rejectWithValue("");
        }
        return AuthResponse[0];
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});
/* register */ const register = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("auth/register", async ({ login , password  }, thunkApi)=>{
    try {
        return await _services_auth_userAuthApi__WEBPACK_IMPORTED_MODULE_0__/* .userApi.register */ .B.register(login, password);
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});
/* logout */ const logout = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("auth/logout", async ()=>{
    await _services_auth_userAuthApi__WEBPACK_IMPORTED_MODULE_0__/* .userApi.logout */ .B.logout();
});
/* getTokens */ const getTokens = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("auth/getTokens", async ({ id  }, thunkApi)=>{
    try {
        const response = await _services_auth_userAuthApi__WEBPACK_IMPORTED_MODULE_0__/* .userApi.getNewTokens */ .B.getNewTokens(id);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});
const update = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)("auth/update", async ({ id  }, thunkApi)=>{
    try {
        const response = await _services_auth_userAuthApi__WEBPACK_IMPORTED_MODULE_0__/* .userApi.updateUser */ .B.updateUser(id);
        return response;
    } catch (error) {
        return thunkApi.rejectWithValue(error);
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;