"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/index/post.js":
/*!**********************************!*\
  !*** ./components/index/post.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _GraphQL_Queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GraphQL/Queries */ \"./components/GraphQL/Queries.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Post() {\n    var _this = this;\n    _s();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_GraphQL_Queries__WEBPACK_IMPORTED_MODULE_1__.LOAD_POSTS).data;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mx-auto px-1 pb-5 max-w-5xl grid grid-cols-1 md:grid-cols-2 text-3xl min-h-full gap-4 place-content-stretch\",\n        children: data.posts.map(function(post) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-5 hover:animate-pulse flex flex-col border-y md:border-x md:border-y-0 p-1 rounded-xl border-pink-300 text-gray-300 w-full w-min-90 mx-auto my-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.coverImage.url,\n                        alt: \"mountains\",\n                        className: \"h-52 rounded-lg rounded-b-none\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dimlaitman/Desktop/React/My projects/nexx.dev/components/index/post.js\",\n                        lineNumber: 12,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex md:h-32 md:overflow-y-scroll\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm px-2\",\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/Users/dimlaitman/Desktop/React/My projects/nexx.dev/components/index/post.js\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/dimlaitman/Desktop/React/My projects/nexx.dev/components/index/post.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dimlaitman/Desktop/React/My projects/nexx.dev/components/index/post.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/dimlaitman/Desktop/React/My projects/nexx.dev/components/index/post.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this));\n};\n_s(Post, \"JtionF1PqWN50DPWu724eJIU2SM=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4L3Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QztBQUNNOztBQUVoQyxRQUFRLENBQUNFLElBQUksR0FBRyxDQUFDOzs7SUFDOUIsR0FBSyxDQUFHQyxJQUFJLEdBQUtILHdEQUFRLENBQUNDLHdEQUFVLEVBQTVCRSxJQUFJO0lBRVosTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBNkc7a0JBQ3pIRixJQUFJLENBQUNHLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7WUFDekIsTUFBTSw2RUFDSEosQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXdKOztnR0FDcEtJLENBQUc7d0JBQ0ZDLEdBQUcsRUFBRUYsSUFBSSxDQUFDRyxVQUFVLENBQUNDLEdBQUc7d0JBQ3hCQyxHQUFHLEVBQUMsQ0FBVzt3QkFDZlIsU0FBUyxFQUFDLENBQWdDOzs7Ozs7Z0dBRTNDRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBbUM7OEdBQy9DUyxDQUFDOzRCQUFDVCxTQUFTLEVBQUMsQ0FBYztzQ0FBRUcsSUFBSSxDQUFDTyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztRQUkvQyxDQUFDOzs7Ozs7QUFHUCxDQUFDO0dBckJ1QmIsSUFBSTs7UUFDVEYsb0RBQVE7OztLQURIRSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXgvcG9zdC5qcz8zNzBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBMT0FEX1BPU1RTIH0gZnJvbSBcIi4uL0dyYXBoUUwvUXVlcmllc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KExPQURfUE9TVFMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHB4LTEgcGItNSBtYXgtdy01eGwgZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiB0ZXh0LTN4bCBtaW4taC1mdWxsIGdhcC00IHBsYWNlLWNvbnRlbnQtc3RyZXRjaFwiPlxuICAgICAge2RhdGEucG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01IGhvdmVyOmFuaW1hdGUtcHVsc2UgZmxleCBmbGV4LWNvbCBib3JkZXIteSBtZDpib3JkZXIteCBtZDpib3JkZXIteS0wIHAtMSByb3VuZGVkLXhsIGJvcmRlci1waW5rLTMwMCB0ZXh0LWdyYXktMzAwIHctZnVsbCB3LW1pbi05MCBteC1hdXRvIG15LWF1dG9cIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LmNvdmVySW1hZ2UudXJsfVxuICAgICAgICAgICAgICBhbHQ9XCJtb3VudGFpbnNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTUyIHJvdW5kZWQtbGcgcm91bmRlZC1iLW5vbmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtZDpoLTMyIG1kOm92ZXJmbG93LXktc2Nyb2xsXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gcHgtMlwiPntwb3N0LnRpdGxlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUXVlcnkiLCJMT0FEX1BPU1RTIiwiUG9zdCIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJwb3N0cyIsIm1hcCIsInBvc3QiLCJpbWciLCJzcmMiLCJjb3ZlckltYWdlIiwidXJsIiwiYWx0IiwicCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index/post.js\n");

/***/ })

});