"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/managers/courses-management/page",{

/***/ "(app-pages-browser)/./components/CoursesManager/TableCourses.tsx":
/*!****************************************************!*\
  !*** ./components/CoursesManager/TableCourses.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TableCourses; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction TableCourses(param) {\n    let { courses, currentPage, totalPages, onPageChange } = param;\n    const handlePreviousPage = ()=>{\n        if (currentPage > 1) {\n            onPageChange(currentPage - 1);\n        }\n    };\n    const handleNextPage = ()=>{\n        if (currentPage < totalPages) {\n            onPageChange(currentPage + 1);\n        }\n    };\n    const handlePageClick = (page)=>{\n        onPageChange(page);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"divide-gray-200 min-w-full divide-y\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider\",\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider\",\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"text-gray-500 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider\",\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        className: \"divide-gray-200 divide-y bg-white\",\n                        children: courses.map((course)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"whitespace-nowrap px-6 py-4\",\n                                        children: course.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"whitespace-nowrap px-6 py-4\",\n                                        children: course.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"text-gray-500 whitespace-nowrap px-6 py-4 text-sm font-medium\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"mr-4 text-blue-600 hover:text-blue-800\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"text-red-600 hover:text-red-800\",\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, course.id, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handlePreviousPage,\n                        className: \"rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700\",\n                        disabled: currentPage === 1,\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex space-x-2\",\n                        children: Array.from({\n                            length: totalPages\n                        }, (_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handlePageClick(index + 1),\n                                className: \"px-4 py-2 \".concat(currentPage === index + 1 ? \"bg-blue-600 text-white\" : \"bg-white text-blue-600\", \" rounded-md border border-blue-600\"),\n                                children: index + 1\n                            }, index + 1, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNextPage,\n                        className: \"rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700\",\n                        disabled: currentPage === totalPages,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\CoursesManager\\\\TableCourses.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_c = TableCourses;\nvar _c;\n$RefreshReg$(_c, \"TableCourses\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ291cnNlc01hbmFnZXIvVGFibGVDb3Vyc2VzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQVNYLFNBQVNDLGFBQWEsS0FLakI7UUFMaUIsRUFDbkNDLE9BQU8sRUFDUEMsV0FBVyxFQUNYQyxVQUFVLEVBQ1ZDLFlBQVksRUFDTSxHQUxpQjtJQU1uQyxNQUFNQyxxQkFBcUI7UUFDekIsSUFBSUgsY0FBYyxHQUFHO1lBQ25CRSxhQUFhRixjQUFjO1FBQzdCO0lBQ0Y7SUFFQSxNQUFNSSxpQkFBaUI7UUFDckIsSUFBSUosY0FBY0MsWUFBWTtZQUM1QkMsYUFBYUYsY0FBYztRQUM3QjtJQUNGO0lBRUEsTUFBTUssa0JBQWtCLENBQUNDO1FBQ3ZCSixhQUFhSTtJQUNmO0lBRUEscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7Z0JBQU1DLFdBQVU7O2tDQUNmLDhEQUFDQztrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQztvQ0FBR0gsV0FBVTs4Q0FBaUY7Ozs7Ozs4Q0FHL0YsOERBQUNHO29DQUFHSCxXQUFVOzhDQUFpRjs7Ozs7OzhDQUcvRiw4REFBQ0c7b0NBQUdILFdBQVU7OENBQWlGOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FPbkcsOERBQUNJO3dCQUFNSixXQUFVO2tDQUNkVixRQUFRZSxHQUFHLENBQUMsQ0FBQ0MsdUJBQ1osOERBQUNKOztrREFDQyw4REFBQ0s7d0NBQUdQLFdBQVU7a0RBQStCTSxPQUFPRSxLQUFLOzs7Ozs7a0RBQ3pELDhEQUFDRDt3Q0FBR1AsV0FBVTtrREFDWE0sT0FBT0csV0FBVzs7Ozs7O2tEQUVyQiw4REFBQ0Y7d0NBQUdQLFdBQVU7OzBEQUNaLDhEQUFDVTtnREFBT1YsV0FBVTswREFBeUM7Ozs7OzswREFHM0QsOERBQUNVO2dEQUFPVixXQUFVOzBEQUFrQzs7Ozs7Ozs7Ozs7OzsrQkFUL0NNLE9BQU9LLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBa0J4Qiw4REFBQ2I7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDVTt3QkFDQ0UsU0FBU2xCO3dCQUNUTSxXQUFVO3dCQUNWYSxVQUFVdEIsZ0JBQWdCO2tDQUMzQjs7Ozs7O2tDQUdELDhEQUFDTzt3QkFBSUUsV0FBVTtrQ0FDWmMsTUFBTUMsSUFBSSxDQUFDOzRCQUFFQyxRQUFReEI7d0JBQVcsR0FBRyxDQUFDeUIsR0FBR0Msc0JBQ3RDLDhEQUFDUjtnQ0FFQ0UsU0FBUyxJQUFNaEIsZ0JBQWdCc0IsUUFBUTtnQ0FDdkNsQixXQUFXLGFBQTZGLE9BQWhGVCxnQkFBZ0IyQixRQUFRLElBQUksMkJBQTJCLDBCQUF5QjswQ0FFdkdBLFFBQVE7K0JBSkpBLFFBQVE7Ozs7Ozs7Ozs7a0NBUW5CLDhEQUFDUjt3QkFDQ0UsU0FBU2pCO3dCQUNUSyxXQUFVO3dCQUNWYSxVQUFVdEIsZ0JBQWdCQztrQ0FDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0tBekZ3QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3Vyc2VzTWFuYWdlci9UYWJsZUNvdXJzZXMudHN4P2FmMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIFRhYmxlQ291cnNlc1Byb3BzIHtcclxuICBjb3Vyc2VzOiBhbnlbXTtcclxuICBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG4gIHRvdGFsUGFnZXM6IG51bWJlcjtcclxuICBvblBhZ2VDaGFuZ2U6IChwYWdlOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlQ291cnNlcyh7XHJcbiAgY291cnNlcyxcclxuICBjdXJyZW50UGFnZSxcclxuICB0b3RhbFBhZ2VzLFxyXG4gIG9uUGFnZUNoYW5nZSxcclxufTogVGFibGVDb3Vyc2VzUHJvcHMpIHtcclxuICBjb25zdCBoYW5kbGVQcmV2aW91c1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICAgIG9uUGFnZUNoYW5nZShjdXJyZW50UGFnZSAtIDEpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHRQYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRQYWdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICBvblBhZ2VDaGFuZ2UoY3VycmVudFBhZ2UgKyAxKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQYWdlQ2xpY2sgPSAocGFnZTogbnVtYmVyKSA9PiB7XHJcbiAgICBvblBhZ2VDaGFuZ2UocGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJkaXZpZGUtZ3JheS0yMDAgbWluLXctZnVsbCBkaXZpZGUteVwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgcHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxyXG4gICAgICAgICAgICAgIFRpdGxlXHJcbiAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIHB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cclxuICAgICAgICAgICAgICBEZXNjcmlwdGlvblxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XHJcbiAgICAgICAgICAgICAgQWN0aW9uc1xyXG4gICAgICAgICAgICA8L3RoPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cImRpdmlkZS1ncmF5LTIwMCBkaXZpZGUteSBiZy13aGl0ZVwiPlxyXG4gICAgICAgICAge2NvdXJzZXMubWFwKChjb3Vyc2UpID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17Y291cnNlLmlkfT5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtNiBweS00XCI+e2NvdXJzZS50aXRsZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcCBweC02IHB5LTRcIj5cclxuICAgICAgICAgICAgICAgIHtjb3Vyc2UuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB3aGl0ZXNwYWNlLW5vd3JhcCBweC02IHB5LTQgdGV4dC1zbSBmb250LW1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci00IHRleHQtYmx1ZS02MDAgaG92ZXI6dGV4dC1ibHVlLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIGhvdmVyOnRleHQtcmVkLTgwMFwiPlxyXG4gICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldmlvdXNQYWdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBiZy1ibHVlLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlLTcwMFwiXHJcbiAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudFBhZ2UgPT09IDF9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICB7QXJyYXkuZnJvbSh7IGxlbmd0aDogdG90YWxQYWdlcyB9LCAoXywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBhZ2VDbGljayhpbmRleCArIDEpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHB4LTQgcHktMiAke2N1cnJlbnRQYWdlID09PSBpbmRleCArIDEgPyBcImJnLWJsdWUtNjAwIHRleHQtd2hpdGVcIiA6IFwiYmctd2hpdGUgdGV4dC1ibHVlLTYwMFwifSByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItYmx1ZS02MDBgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0UGFnZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctYmx1ZS02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZS03MDBcIlxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSB0b3RhbFBhZ2VzfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE5leHRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlQ291cnNlcyIsImNvdXJzZXMiLCJjdXJyZW50UGFnZSIsInRvdGFsUGFnZXMiLCJvblBhZ2VDaGFuZ2UiLCJoYW5kbGVQcmV2aW91c1BhZ2UiLCJoYW5kbGVOZXh0UGFnZSIsImhhbmRsZVBhZ2VDbGljayIsInBhZ2UiLCJkaXYiLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwiY291cnNlIiwidGQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwiaWQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/CoursesManager/TableCourses.tsx\n"));

/***/ })

});