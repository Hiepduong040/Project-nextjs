"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/admin/managers/exam-management/page",{

/***/ "(app-pages-browser)/./components/ExamsManager/TableExams.tsx":
/*!************************************************!*\
  !*** ./components/ExamsManager/TableExams.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TableExams; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_exam_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/exam.service */ \"(app-pages-browser)/./services/exam.service.ts\");\n\nvar _s = $RefreshSig$();\n\n // Assuming correct path\nfunction TableExams(param) {\n    let { refresh, onEdit } = param;\n    _s();\n    const [exams, setExams] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchExams = async ()=>{\n            try {\n                const response = await (0,_services_exam_service__WEBPACK_IMPORTED_MODULE_2__.getExams)();\n                setExams(response);\n            } catch (error) {\n                console.error(\"Error fetching exams\", error);\n            }\n        };\n        fetchExams();\n    }, [\n        refresh\n    ]);\n    // Handle delete\n    const handleDelete = async (id)=>{\n        try {\n            await (0,_services_exam_service__WEBPACK_IMPORTED_MODULE_2__.deleteExam)(id);\n            alert(\"Exam deleted successfully!\");\n        } catch (error) {\n            console.error(\"Error deleting exam\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-md bg-white p-4 shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mb-4 text-xl\",\n                children: \"Danh s\\xe1ch đề thi\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"min-w-full bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border-b py-2\",\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border-b py-2\",\n                                    children: \"Ti\\xeau đề\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border-b py-2\",\n                                    children: \"M\\xf4 tả\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border-b py-2\",\n                                    children: \"Thời lượng (ph\\xfat)\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border-b py-2\",\n                                    children: \"M\\xe3 m\\xf4n thi\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"border-b py-2\",\n                                    children: \"H\\xe0nh động\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: exams.map((exam)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border-b py-2 text-center\",\n                                        children: exam.id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border-b py-2\",\n                                        children: exam.title\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border-b py-2\",\n                                        children: exam.description\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border-b py-2 text-center\",\n                                        children: exam.duration\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border-b py-2 text-center\",\n                                        children: exam.examSubjectsId\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"border-b py-2 text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"mr-2 rounded bg-blue-500 px-4 py-1 text-white\",\n                                                onClick: ()=>onEdit(exam),\n                                                children: \"Sửa\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                                lineNumber: 61,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                className: \"bg-yellow-500 rounded px-4 py-1 text-white\",\n                                                onClick: ()=>handleDelete(exam.id),\n                                                children: \"X\\xf3a\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, exam.id, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\project-nextjs-exam-online\\\\client\\\\components\\\\ExamsManager\\\\TableExams.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(TableExams, \"GCbYSKXuW7GtZZBxJTxbrB8ezoY=\");\n_c = TableExams;\nvar _c;\n$RefreshReg$(_c, \"TableExams\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRXhhbXNNYW5hZ2VyL1RhYmxlRXhhbXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZ0IsQ0FBQyx3QkFBd0I7QUFRN0UsU0FBU0ssV0FBVyxLQUFvQztRQUFwQyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBbUIsR0FBcEM7O0lBQ2pDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBUyxFQUFFO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1TLGFBQWE7WUFDakIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1QLGdFQUFRQTtnQkFDL0JLLFNBQVNFO1lBQ1gsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBRUFGO0lBQ0YsR0FBRztRQUFDSjtLQUFRO0lBRVosZ0JBQWdCO0lBQ2hCLE1BQU1RLGVBQWUsT0FBT0M7UUFDMUIsSUFBSTtZQUNGLE1BQU1aLGtFQUFVQSxDQUFDWTtZQUNqQkMsTUFBTTtRQUNSLEVBQUUsT0FBT0osT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsdUJBQXVCQTtRQUN2QztJQUNGO0lBRUEscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBZTs7Ozs7OzBCQUM3Qiw4REFBQ0U7Z0JBQU1GLFdBQVU7O2tDQUNmLDhEQUFDRztrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQztvQ0FBR0wsV0FBVTs4Q0FBZ0I7Ozs7Ozs4Q0FDOUIsOERBQUNLO29DQUFHTCxXQUFVOzhDQUFnQjs7Ozs7OzhDQUM5Qiw4REFBQ0s7b0NBQUdMLFdBQVU7OENBQWdCOzs7Ozs7OENBQzlCLDhEQUFDSztvQ0FBR0wsV0FBVTs4Q0FBZ0I7Ozs7Ozs4Q0FDOUIsOERBQUNLO29DQUFHTCxXQUFVOzhDQUFnQjs7Ozs7OzhDQUM5Qiw4REFBQ0s7b0NBQUdMLFdBQVU7OENBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHbEMsOERBQUNNO2tDQUNFaEIsTUFBTWlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0o7O2tEQUNDLDhEQUFDSzt3Q0FBR1QsV0FBVTtrREFBNkJRLEtBQUtYLEVBQUU7Ozs7OztrREFDbEQsOERBQUNZO3dDQUFHVCxXQUFVO2tEQUFpQlEsS0FBS0UsS0FBSzs7Ozs7O2tEQUN6Qyw4REFBQ0Q7d0NBQUdULFdBQVU7a0RBQWlCUSxLQUFLRyxXQUFXOzs7Ozs7a0RBQy9DLDhEQUFDRjt3Q0FBR1QsV0FBVTtrREFBNkJRLEtBQUtJLFFBQVE7Ozs7OztrREFDeEQsOERBQUNIO3dDQUFHVCxXQUFVO2tEQUNYUSxLQUFLSyxjQUFjOzs7Ozs7a0RBRXRCLDhEQUFDSjt3Q0FBR1QsV0FBVTs7MERBQ1osOERBQUNjO2dEQUNDZCxXQUFVO2dEQUNWZSxTQUFTLElBQU0xQixPQUFPbUI7MERBQ3ZCOzs7Ozs7MERBR0QsOERBQUNNO2dEQUNDZCxXQUFVO2dEQUNWZSxTQUFTLElBQU1uQixhQUFhWSxLQUFLWCxFQUFFOzBEQUNwQzs7Ozs7Ozs7Ozs7OzsrQkFsQklXLEtBQUtYLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QjVCO0dBdEV3QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeGFtc01hbmFnZXIvVGFibGVFeGFtcy50c3g/ZTk4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBkZWxldGVFeGFtLCBnZXRFeGFtcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9leGFtLnNlcnZpY2VcIjsgLy8gQXNzdW1pbmcgY29ycmVjdCBwYXRoXHJcbmltcG9ydCB7IEV4YW0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9pbnRlcmZhY2VzXCI7IC8vIFVwZGF0ZSB0aGUgY29ycmVjdCBwYXRoXHJcblxyXG5pbnRlcmZhY2UgVGFibGVFeGFtc1Byb3BzIHtcclxuICByZWZyZXNoOiBib29sZWFuO1xyXG4gIG9uRWRpdDogKGV4YW06IEV4YW0pID0+IHZvaWQ7IC8vIFByb3AgdG8gdHJpZ2dlciBlZGl0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlRXhhbXMoeyByZWZyZXNoLCBvbkVkaXQgfTogVGFibGVFeGFtc1Byb3BzKSB7XHJcbiAgY29uc3QgW2V4YW1zLCBzZXRFeGFtc10gPSB1c2VTdGF0ZTxFeGFtW10+KFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRXhhbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRFeGFtcygpO1xyXG4gICAgICAgIHNldEV4YW1zKHJlc3BvbnNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZXhhbXNcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoRXhhbXMoKTtcclxuICB9LCBbcmVmcmVzaF0pO1xyXG5cclxuICAvLyBIYW5kbGUgZGVsZXRlXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGRlbGV0ZUV4YW0oaWQpO1xyXG4gICAgICBhbGVydChcIkV4YW0gZGVsZXRlZCBzdWNjZXNzZnVsbHkhXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIGV4YW1cIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgYmctd2hpdGUgcC00IHNoYWRvdy1tZFwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCB0ZXh0LXhsXCI+RGFuaCBzw6FjaCDEkeG7gSB0aGk8L2gyPlxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCBiZy13aGl0ZVwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlci1iIHB5LTJcIj5JRDwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXItYiBweS0yXCI+VGnDqnUgxJHhu4E8L3RoPlxyXG4gICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyLWIgcHktMlwiPk3DtCB04bqjPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlci1iIHB5LTJcIj5UaOG7nWkgbMaw4bujbmcgKHBow7p0KTwvdGg+XHJcbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJib3JkZXItYiBweS0yXCI+TcOjIG3DtG4gdGhpPC90aD5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlci1iIHB5LTJcIj5Iw6BuaCDEkeG7mW5nPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7ZXhhbXMubWFwKChleGFtKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2V4YW0uaWR9PlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItYiBweS0yIHRleHQtY2VudGVyXCI+e2V4YW0uaWR9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgcHktMlwiPntleGFtLnRpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImJvcmRlci1iIHB5LTJcIj57ZXhhbS5kZXNjcmlwdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXItYiBweS0yIHRleHQtY2VudGVyXCI+e2V4YW0uZHVyYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgcHktMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAge2V4YW0uZXhhbVN1YmplY3RzSWR9XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYm9yZGVyLWIgcHktMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yIHJvdW5kZWQgYmctYmx1ZS01MDAgcHgtNCBweS0xIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkVkaXQoZXhhbSl9IC8vIFRyaWdnZXIgZWRpdFxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBT4butYVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXllbGxvdy01MDAgcm91bmRlZCBweC00IHB5LTEgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShleGFtLmlkKX0gLy8gVHJpZ2dlciBkZWxldGVcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgWMOzYVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGVsZXRlRXhhbSIsImdldEV4YW1zIiwiVGFibGVFeGFtcyIsInJlZnJlc2giLCJvbkVkaXQiLCJleGFtcyIsInNldEV4YW1zIiwiZmV0Y2hFeGFtcyIsInJlc3BvbnNlIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsImV4YW0iLCJ0ZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdXJhdGlvbiIsImV4YW1TdWJqZWN0c0lkIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ExamsManager/TableExams.tsx\n"));

/***/ })

});