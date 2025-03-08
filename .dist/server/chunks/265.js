"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 9265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FadeLeft": () => (/* binding */ FadeLeft),
/* harmony export */   "FadeRight": () => (/* binding */ FadeRight),
/* harmony export */   "FadeTop": () => (/* binding */ FadeTop),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function FadeRight({ children , className  }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(ref, {
        once: false,
        amount: 0.3
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        ref: ref,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 50
        },
        transition: {
            duration: 0.8
        },
        className: className,
        children: children
    });
}
function FadeLeft({ children , className  }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(ref, {
        once: false,
        amount: 0.3
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        ref: ref,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -50
        },
        transition: {
            duration: 0.8
        },
        className: className,
        children: children
    });
}
function FadeTop({ children  }) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const isInView = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useInView)(ref, {
        once: false,
        amount: 0.2
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        ref: ref,
        initial: {
            opacity: 0
        },
        animate: {
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : -50
        },
        transition: {
            duration: 0.8
        },
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeRight);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;