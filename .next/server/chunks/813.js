"use strict";
exports.id = 813;
exports.ids = [813];
exports.modules = {

/***/ 5813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$x": () => (/* binding */ axiosAuthorApi),
/* harmony export */   "EM": () => (/* binding */ PopularBooksApi),
/* harmony export */   "H9": () => (/* binding */ axiocBookApi),
/* harmony export */   "Xn": () => (/* binding */ axiosGenreApi),
/* harmony export */   "hy": () => (/* binding */ axiosUserApi),
/* harmony export */   "lp": () => (/* binding */ classicAxios),
/* harmony export */   "wg": () => (/* binding */ getContentType)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const classicAxios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "http://localhost:3001/"
});
const getContentType = ()=>{
    return {
        "Content-Type": "application/json"
    };
};
const PopularBooksApi = {
    async getPopularBooks () {
        return classicAxios.get("trending").then((response)=>{
            return {
                description: response.data.description,
                PopularBooks: response.data.PopularBooks
            };
        });
    }
};
const axiocBookApi = {
    async getBooksId (id) {
        return classicAxios.get("books").then((response)=>response.data.filter((book)=>id.includes(book.id)));
    },
    async getBook (id) {
        return classicAxios.get(`books/${id}`).then((response)=>response.data);
    },
    async getBooks () {
        return classicAxios.get(`books`).then((response)=>response.data);
    }
};
const axiosGenreApi = {
    async getGenre (slug) {
        return classicAxios.get(`bookGenres?q=${slug}`).then((response)=>response.data[0]);
    },
    async getGenres () {
        return classicAxios.get("bookGenres").then((response)=>response.data);
    }
};
const axiosUserApi = {
    async getByIdUser (id) {
        return classicAxios.get(`users/${id}`).then((response)=>response.data);
    }
};
const axiosAuthorApi = {
    async getAuthor (id) {
        return classicAxios.get(`author/${id}`).then((response)=>response.data);
    },
    async getAuthors () {
        return classicAxios.get("author").then((response)=>response.data);
    },
    async getAuthorByTitle (title) {
        return classicAxios.get(`author?q=${title}`).then((response)=>response.data[0]);
    }
};


/***/ })

};
;