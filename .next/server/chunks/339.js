"use strict";
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 7339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ generateLink)
/* harmony export */ });
const ru = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    є: "e",
    ё: "e",
    ж: "j",
    з: "z",
    и: "i",
    ї: "yi",
    й: "i",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ы: "y",
    э: "e",
    ю: "u",
    я: "ya",
    ъ: "",
    ь: ""
};
function rusToLatin(str) {
    return Array.from(str).reduce((acc, letter)=>{
        const lowLetter = letter.toLowerCase();
        const en = ru[lowLetter] ?? letter;
        const enNormalized = lowLetter === letter ? en : en.toUpperCase();
        return acc + enNormalized;
    }, "");
}
const generateLink = (str)=>{
    let url = str.replace(/[\s]+/gi, "");
    url = rusToLatin(url);
    url = url.replace(/[^0-9a-z_\-]+/gi, "-").replace("---", "").replace("--", "").replace("-", "").toLowerCase();
    return url;
};


/***/ })

};
;