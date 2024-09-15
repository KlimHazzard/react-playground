"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/utils/api */ \"./src/utils/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_utils_api__WEBPACK_IMPORTED_MODULE_1__]);\n_src_utils_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/jing/Documents/Github/neo4j-proj/web-dev/react-playground/src/pages/_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_utils_api__WEBPACK_IMPORTED_MODULE_1__.api.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDc0M7QUFFdEMsTUFBTUMsUUFBaUIsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUM5QyxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakM7QUFFQSxpRUFBZUgsK0NBQUdBLENBQUNJLFFBQVEsQ0FBQ0gsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25lbzRqLWdyYXBoLXZpei8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwVHlwZSB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSBcIkAvc3JjL3V0aWxzL2FwaVwiO1xuXG5jb25zdCBNeUFwcDogQXBwVHlwZSA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhcGkud2l0aFRSUEMoTXlBcHApO1xuIl0sIm5hbWVzIjpbImFwaSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFRSUEMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/next */ \"@trpc/next\");\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_next__WEBPACK_IMPORTED_MODULE_0__, _trpc_client__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_next__WEBPACK_IMPORTED_MODULE_0__, _trpc_client__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst api = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_0__.createTRPCNext)({\n    config () {\n        return {\n            links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_1__.httpBatchLink)({\n                    url: \"/api/trpc\"\n                })\n            ]\n        };\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNDO0FBR3RDLE1BQU1FLE1BQU1GLDBEQUFjQSxDQUFZO0lBQzNDRztRQUNFLE9BQU87WUFDTEMsT0FBTztnQkFDTEgsMkRBQWFBLENBQUM7b0JBQ1pJLEtBQUs7Z0JBQ1A7YUFDRDtRQUNIO0lBQ0Y7QUFDRixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmVvNGotZ3JhcGgtdml6Ly4vc3JjL3V0aWxzL2FwaS50cz9iOTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRSUENOZXh0IH0gZnJvbSBcIkB0cnBjL25leHRcIjtcbmltcG9ydCB7IGh0dHBCYXRjaExpbmsgfSBmcm9tIFwiQHRycGMvY2xpZW50XCI7XG5pbXBvcnQgdHlwZSB7IEFwcFJvdXRlciB9IGZyb20gXCJAL3NyYy9zZXJ2ZXIvYXBpL3Jvb3RcIjtcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGNyZWF0ZVRSUENOZXh0PEFwcFJvdXRlcj4oe1xuICBjb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmtzOiBbXG4gICAgICAgIGh0dHBCYXRjaExpbmsoe1xuICAgICAgICAgIHVybDogXCIvYXBpL3RycGNcIixcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgIH07XG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVUUlBDTmV4dCIsImh0dHBCYXRjaExpbmsiLCJhcGkiLCJjb25maWciLCJsaW5rcyIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/api.ts\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/next":
/*!*****************************!*\
  !*** external "@trpc/next" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("@trpc/next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();