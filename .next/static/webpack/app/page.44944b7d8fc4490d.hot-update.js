"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/layout/ProductCard.tsx":
/*!***********************************************!*\
  !*** ./src/components/layout/ProductCard.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _barrel_optimize_names_Heart_MapPin_lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Heart,MapPin!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/map-pin.js\");\n/* harmony import */ var _barrel_optimize_names_Heart_MapPin_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Heart,MapPin!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/heart.js\");\n\n\n\n\nfunction ProductCard(param) {\n    let { product } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-md overflow-hidden border max-w-xs cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/product/\".concat(product.id),\n                className: \"block\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: product.image,\n                        alt: product.title,\n                        width: 200,\n                        height: 150,\n                        className: \"w-full h-36 object-cover\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-lg font-semibold mb-1 text-[#2D882C]\",\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-gray-600 mb-1\",\n                                children: product.category\n                            }, void 0, false, {\n                                fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs font-medium mb-1\",\n                                children: [\n                                    \"Condition: \",\n                                    product.condition\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center text-xs text-gray-600 mb-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Heart_MapPin_lucide_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        size: 14,\n                                        className: \"mr-1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, this),\n                                    product.location\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-3 flex justify-between items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"nav-button text-white bg-[#2E882C]\",\n                    title: \"Add to Saved Items\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Heart_MapPin_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        className: \"h-4 w-4 hover:fill-[#FF5A5F]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductCard.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QjtBQUNGO0FBQ2tCO0FBVy9CLFNBQVNJLFlBQVksS0FBaUM7UUFBakMsRUFBRUMsT0FBTyxFQUF3QixHQUFqQztJQUNsQyxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNOLGlEQUFJQTtnQkFBQ08sTUFBTSxZQUF1QixPQUFYSCxRQUFRSSxFQUFFO2dCQUFJRixXQUFVOztrQ0FDOUMsOERBQUNQLGtEQUFLQTt3QkFDSlUsS0FBS0wsUUFBUU0sS0FBSzt3QkFDbEJDLEtBQUtQLFFBQVFRLEtBQUs7d0JBQ2xCQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSUixXQUFVOzs7Ozs7a0NBRVosOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1M7Z0NBQUdULFdBQVU7MENBQTZDRixRQUFRUSxLQUFLOzs7Ozs7MENBQ3hFLDhEQUFDSTtnQ0FBRVYsV0FBVTswQ0FBOEJGLFFBQVFhLFFBQVE7Ozs7OzswQ0FDM0QsOERBQUNEO2dDQUFFVixXQUFVOztvQ0FBMkI7b0NBQVlGLFFBQVFjLFNBQVM7Ozs7Ozs7MENBQ3JFLDhEQUFDYjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNMLHdGQUFNQTt3Q0FBQ2tCLE1BQU07d0NBQUliLFdBQVU7Ozs7OztvQ0FDM0JGLFFBQVFnQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl2Qiw4REFBQ2Y7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNlO29CQUFPZixXQUFVO29CQUFxQ00sT0FBTTs4QkFDM0QsNEVBQUNWLHdGQUFLQTt3QkFBQ0ksV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtLQTVCd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0Q2FyZC50c3g/MWRjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IE1hcFBpbiwgSGVhcnQsICB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcblxuaW50ZXJmYWNlIFByb2R1Y3Qge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBjb25kaXRpb246IHN0cmluZ1xuICBsb2NhdGlvbjogc3RyaW5nXG4gIGltYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoeyBwcm9kdWN0IH06IHsgcHJvZHVjdDogUHJvZHVjdCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1tZCBvdmVyZmxvdy1oaWRkZW4gYm9yZGVyIG1heC13LXhzIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9IGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cbiAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICBoZWlnaHQ9ezE1MH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zNiBvYmplY3QtY292ZXJcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtM1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWItMSB0ZXh0LVsjMkQ4ODJDXVwiPntwcm9kdWN0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwIG1iLTFcIj57cHJvZHVjdC5jYXRlZ29yeX08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LW1lZGl1bSBtYi0xXCI+Q29uZGl0aW9uOiB7cHJvZHVjdC5jb25kaXRpb259PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyB0ZXh0LWdyYXktNjAwIG1iLTNcIj5cbiAgICAgICAgICAgIDxNYXBQaW4gc2l6ZT17MTR9IGNsYXNzTmFtZT1cIm1yLTFcIiAvPlxuICAgICAgICAgICAge3Byb2R1Y3QubG9jYXRpb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2LWJ1dHRvbiB0ZXh0LXdoaXRlIGJnLVsjMkU4ODJDXVwiIHRpdGxlPVwiQWRkIHRvIFNhdmVkIEl0ZW1zXCI+XG4gICAgICAgICAgPEhlYXJ0IGNsYXNzTmFtZT1cImgtNCB3LTQgaG92ZXI6ZmlsbC1bI0ZGNUE1Rl1cIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59O1xuXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJMaW5rIiwiTWFwUGluIiwiSGVhcnQiLCJQcm9kdWN0Q2FyZCIsInByb2R1Y3QiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiaWQiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJoMiIsInAiLCJjYXRlZ29yeSIsImNvbmRpdGlvbiIsInNpemUiLCJsb2NhdGlvbiIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/ProductCard.tsx\n"));

/***/ })

});