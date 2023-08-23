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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/databaseStatus.js":
/*!**************************************!*\
  !*** ./components/databaseStatus.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mysql2 */ \"mysql2\");\n/* harmony import */ var mysql2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mysql2__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst DatabaseStatus = ()=>{\n    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Connecting...\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const dbConfig = {\n            host: \"bgdem8kzbkrufvykn5k3-mysql.services.clever-cloud.com\",\n            user: \"uocz3ageer2uwwfg\",\n            password: \"HClxrf6M1x4nBAM8NUSj\",\n            database: \"bgdem8kzbkrufvykn5k3\"\n        };\n        const connection = mysql2__WEBPACK_IMPORTED_MODULE_2___default().createConnection(dbConfig);\n        connection.connect((err)=>{\n            if (err) {\n                setStatus(\"Connection Failed\");\n            } else {\n                setStatus(\"Connected\");\n            }\n            connection.end();\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Database Status:\"\n            }, void 0, false, {\n                fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/components/databaseStatus.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: status\n            }, void 0, false, {\n                fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/components/databaseStatus.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/components/databaseStatus.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DatabaseStatus);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2RhdGFiYXNlU3RhdHVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFtRDtBQUN4QjtBQUUzQixNQUFNSSxjQUFjLEdBQUcsSUFBTTtJQUMzQixNQUFNLEtBQUNDLE1BQU0sTUFBRUMsU0FBUyxNQUFJTCwrQ0FBUSxDQUFDLGVBQWUsQ0FBQztJQUVyREMsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTUssUUFBUSxHQUFHO1lBQ2ZDLElBQUksRUFBRSxzREFBc0Q7WUFDNURDLElBQUksRUFBRSxrQkFBa0I7WUFDeEJDLFFBQVEsRUFBRSxzQkFBc0I7WUFDaENDLFFBQVEsRUFBRSxzQkFBc0I7U0FDakM7UUFFRCxNQUFNQyxVQUFVLEdBQUdULDhEQUFzQixDQUFDSSxRQUFRLENBQUM7UUFFbkRLLFVBQVUsQ0FBQ0UsT0FBTyxDQUFDLENBQUNDLEdBQUcsR0FBSztZQUMxQixJQUFJQSxHQUFHLEVBQUU7Z0JBQ1BULFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ2pDLE9BQU87Z0JBQ0xBLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQ0RNLFVBQVUsQ0FBQ0ksR0FBRyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsa0JBQWdCOzs7Ozt5QkFBSzswQkFDekIsOERBQUNDLEdBQUM7MEJBQUVkLE1BQU07Ozs7O3lCQUFLOzs7Ozs7aUJBQ1gsQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZUQsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXRhYmFzZVN0YXR1cy5qcz9hZWVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMic7XG5cbmNvbnN0IERhdGFiYXNlU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJ0Nvbm5lY3RpbmcuLi4nKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRiQ29uZmlnID0ge1xuICAgICAgaG9zdDogJ2JnZGVtOGt6YmtydWZ2eWtuNWszLW15c3FsLnNlcnZpY2VzLmNsZXZlci1jbG91ZC5jb20nLFxuICAgICAgdXNlcjogJ3VvY3ozYWdlZXIydXd3ZmcnLFxuICAgICAgcGFzc3dvcmQ6ICdIQ2x4cmY2TTF4NG5CQU04TlVTaicsXG4gICAgICBkYXRhYmFzZTogJ2JnZGVtOGt6YmtydWZ2eWtuNWszJyxcbiAgICB9O1xuXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oZGJDb25maWcpO1xuXG4gICAgY29ubmVjdGlvbi5jb25uZWN0KChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgc2V0U3RhdHVzKCdDb25uZWN0aW9uIEZhaWxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0U3RhdHVzKCdDb25uZWN0ZWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbm5lY3Rpb24uZW5kKCk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+RGF0YWJhc2UgU3RhdHVzOjwvaDI+XG4gICAgICA8cD57c3RhdHVzfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFiYXNlU3RhdHVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwibXlzcWwiLCJEYXRhYmFzZVN0YXR1cyIsInN0YXR1cyIsInNldFN0YXR1cyIsImRiQ29uZmlnIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiZXJyIiwiZW5kIiwiZGl2IiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/databaseStatus.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_databaseStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/databaseStatus */ \"./components/databaseStatus.js\");\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Hello world\"\n                    }, void 0, false, {\n                        fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n                        lineNumber: 9,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n                        children: [\n                            \"Welcome to \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org\",\n                                children: \"Next.js!\"\n                            }, void 0, false, {\n                                fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n                                lineNumber: 15,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Database Status Page\"\n                            }, void 0, false, {\n                                fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n                                lineNumber: 18,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_databaseStatus__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n                                lineNumber: 19,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/it/Desktop/NEXTJS_PROJ/nextapp-boilerplate/pages/index.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ2tCO0FBQ1c7QUFFM0MsU0FBU0csSUFBSSxHQUFHO0lBQzdCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUosMEVBQWdCOzswQkFDOUIsOERBQUNELGtEQUFJOztrQ0FDSCw4REFBQ08sT0FBSztrQ0FBQyxhQUFXOzs7Ozs0QkFBUTtrQ0FDMUIsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NEJBQUc7Ozs7OztvQkFDbEM7MEJBRVAsOERBQUNDLE1BQUk7O2tDQUNILDhEQUFDQyxJQUFFO3dCQUFDUCxTQUFTLEVBQUVKLHNFQUFZOzs0QkFBRSxhQUNoQjswQ0FBQSw4REFBQ1ksR0FBQztnQ0FBQ0gsSUFBSSxFQUFDLG9CQUFvQjswQ0FBQyxVQUFROzs7OztvQ0FBSTs7Ozs7OzRCQUNqRDtrQ0FDTCw4REFBQ04sS0FBRzs7MENBQ04sOERBQUNRLElBQUU7MENBQUMsc0JBQW9COzs7OztvQ0FBSzswQ0FDN0IsOERBQUNWLGtFQUFjOzs7O29DQUFHOzs7Ozs7NEJBQ2Q7Ozs7OztvQkFFSTs7Ozs7O1lBQ0osQ0FDUDtBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnO1xuaW1wb3J0IERhdGFiYXNlU3RhdHVzIGZyb20gJy4uL2NvbXBvbmVudHMvZGF0YWJhc2VTdGF0dXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SGVsbG8gd29ybGQ8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFdlbGNvbWUgdG8gPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZ1wiPk5leHQuanMhPC9hPlxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgPGgxPkRhdGFiYXNlIFN0YXR1cyBQYWdlPC9oMT5cbiAgICAgIDxEYXRhYmFzZVN0YXR1cyAvPlxuICAgIDwvZGl2PlxuXG4gICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsIkRhdGFiYXNlU3RhdHVzIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql2");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();