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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// 'use client'\n// import { useState, useEffect } from 'react'\n// import Image from 'next/image'\n// import Link from 'next/link'\n// import { MapPin, Heart, ChevronLeft, ChevronRight } from 'lucide-react'\n// interface Product {\n//   id: number\n//   title: string\n//   category: string\n//   condition: string\n//   location: string\n//   images?: string[]\n// }\n// export default function ProductCard({ product }: { product: Product }) {\n//   const [currentImageIndex, setCurrentImageIndex] = useState(0)\n//   const [isTransitioning, setTransitioning] = useState(false)\n//   const images = product.images && product.images.length > 0\n//     ? product.images\n//     : ['https://picsum.photos/seed/placeholder/200/150']\n//   const nextImage = () => {\n//     if (isTransitioning) return\n//     setTransitioning(true)\n//     setCurrentImageIndex((prevIndex) =>\n//       prevIndex === images.length - 1 ? 0 : prevIndex + 1\n//     )\n//     setTimeout(() => setTransitioning(false), 1000)\n//   }\n//   const prevImage = (e: React.MouseEvent) => {\n//     e.preventDefault()\n//     if (isTransitioning) return\n//     setTransitioning(true)\n//     setCurrentImageIndex((prevIndex) =>\n//       prevIndex === 0 ? images.length - 1 : prevIndex - 1\n//     )\n//     setTimeout(() => setTransitioning(false), 1000)\n//   }\n//   useEffect(() => {\n//     const interval = setInterval(nextImage, 10000)\n//     return () => clearInterval(interval)\n//   }, [])\n//   return (\n//     <div className=\"bg-white rounded-lg shadow-md overflow-hidden border max-w-xs cursor-pointer\">\n//       <Link href={`/product/${product.id}`} className=\"block\">\n//         <div className=\"relative h-36\">\n//           <div className=\"flex overflow-x-auto snap-x snap-mandatory h-full\">\n//             {images.map((image, index) => (\n//               <div key={index} className=\"flex-shrink-0 w-full h-full snap-center\">\n//                 <Image\n//                   src={image}\n//                   alt={`${product.title} - Image ${index + 1}`}\n//                   layout=\"fill\"\n//                   objectFit=\"cover\"\n//                   className={`transition-opacity duration-1000 ease-in-out ${\n//                     index === currentImageIndex ? 'opacity-100' : 'opacity-0'\n//                   }`}\n//                 />\n//               </div>\n//             ))}\n//           </div>\n//           {images.length > 1 && (\n//             <>\n//               <button\n//                 onClick={prevImage}\n//                 className=\"absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-all\"\n//                 aria-label=\"Previous image\"\n//               >\n//                 <ChevronLeft className=\"w-4 h-4 text-gray-800\" />\n//               </button>\n//               <button\n//                 onClick={(e) => { e.preventDefault(); nextImage() }}\n//                 className=\"absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 hover:bg-opacity-75 transition-all\"\n//                 aria-label=\"Next image\"\n//               >\n//                 <ChevronRight className=\"w-4 h-4 text-gray-800\" />\n//               </button>\n//             </>\n//           )}\n//         </div>\n//         <div className=\"p-3\">\n//           <h2 className=\"text-lg font-semibold mb-1 text-[#2D882C]\">{product.title}</h2>\n//           <p className=\"text-xs text-gray-600 mb-1\">{product.category}</p>\n//           <p className=\"text-xs font-medium mb-1\">Condition: {product.condition}</p>\n//           <div className=\"flex items-center text-xs text-gray-600 mb-3\">\n//             <MapPin size={14} className=\"mr-1\" />\n//             {product.location}\n//           </div>\n//         </div>\n//       </Link>\n//       <div className=\"p-3 flex justify-between items-center\">\n//         <button className=\"absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors\">\n// <Heart className=\"h-5 w-5 text-gray-600 hover:text-red-500\" />\n// </button>\n//       </div>\n//     </div>\n//   )\n// }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0Q2FyZC50c3giLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUVmLDhDQUE4QztBQUM5QyxpQ0FBaUM7QUFDakMsK0JBQStCO0FBQy9CLDBFQUEwRTtBQUUxRSxzQkFBc0I7QUFDdEIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixxQkFBcUI7QUFDckIsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFDdEIsSUFBSTtBQUVKLDJFQUEyRTtBQUMzRSxrRUFBa0U7QUFDbEUsZ0VBQWdFO0FBRWhFLCtEQUErRDtBQUMvRCx1QkFBdUI7QUFDdkIsMkRBQTJEO0FBRTNELDhCQUE4QjtBQUM5QixrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLDBDQUEwQztBQUMxQyw0REFBNEQ7QUFDNUQsUUFBUTtBQUNSLHNEQUFzRDtBQUN0RCxNQUFNO0FBRU4saURBQWlEO0FBQ2pELHlCQUF5QjtBQUN6QixrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLDBDQUEwQztBQUMxQyw0REFBNEQ7QUFDNUQsUUFBUTtBQUNSLHNEQUFzRDtBQUN0RCxNQUFNO0FBRU4sc0JBQXNCO0FBQ3RCLHFEQUFxRDtBQUNyRCwyQ0FBMkM7QUFDM0MsV0FBVztBQUVYLGFBQWE7QUFDYixxR0FBcUc7QUFDckcsaUVBQWlFO0FBQ2pFLDBDQUEwQztBQUMxQyxnRkFBZ0Y7QUFDaEYsOENBQThDO0FBQzlDLHNGQUFzRjtBQUN0Rix5QkFBeUI7QUFDekIsZ0NBQWdDO0FBQ2hDLGtFQUFrRTtBQUNsRSxrQ0FBa0M7QUFDbEMsc0NBQXNDO0FBQ3RDLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFDaEYsd0JBQXdCO0FBQ3hCLHFCQUFxQjtBQUNyQix1QkFBdUI7QUFDdkIsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixvQ0FBb0M7QUFDcEMsaUJBQWlCO0FBQ2pCLHdCQUF3QjtBQUN4QixzQ0FBc0M7QUFDdEMsNEpBQTRKO0FBQzVKLDhDQUE4QztBQUM5QyxrQkFBa0I7QUFDbEIsb0VBQW9FO0FBQ3BFLDBCQUEwQjtBQUMxQix3QkFBd0I7QUFDeEIsdUVBQXVFO0FBQ3ZFLDZKQUE2SjtBQUM3SiwwQ0FBMEM7QUFDMUMsa0JBQWtCO0FBQ2xCLHFFQUFxRTtBQUNyRSwwQkFBMEI7QUFDMUIsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsZ0NBQWdDO0FBQ2hDLDJGQUEyRjtBQUMzRiw2RUFBNkU7QUFDN0UsdUZBQXVGO0FBQ3ZGLDJFQUEyRTtBQUMzRSxvREFBb0Q7QUFDcEQsaUNBQWlDO0FBQ2pDLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZ0JBQWdCO0FBQ2hCLGdFQUFnRTtBQUNoRSxvSEFBb0g7QUFDMUcsaUVBQWlFO0FBQ2pFLFlBQVk7QUFDdEIsZUFBZTtBQUNmLGFBQWE7QUFDYixNQUFNO0FBQ04sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvUHJvZHVjdENhcmQudHN4PzFkYzEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gJ3VzZSBjbGllbnQnXG5cbi8vIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuLy8gaW1wb3J0IHsgTWFwUGluLCBIZWFydCwgQ2hldnJvbkxlZnQsIENoZXZyb25SaWdodCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcblxuLy8gaW50ZXJmYWNlIFByb2R1Y3Qge1xuLy8gICBpZDogbnVtYmVyXG4vLyAgIHRpdGxlOiBzdHJpbmdcbi8vICAgY2F0ZWdvcnk6IHN0cmluZ1xuLy8gICBjb25kaXRpb246IHN0cmluZ1xuLy8gICBsb2NhdGlvbjogc3RyaW5nXG4vLyAgIGltYWdlcz86IHN0cmluZ1tdXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHsgcHJvZHVjdCB9OiB7IHByb2R1Y3Q6IFByb2R1Y3QgfSkge1xuLy8gICBjb25zdCBbY3VycmVudEltYWdlSW5kZXgsIHNldEN1cnJlbnRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApXG4vLyAgIGNvbnN0IFtpc1RyYW5zaXRpb25pbmcsIHNldFRyYW5zaXRpb25pbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbi8vICAgY29uc3QgaW1hZ2VzID0gcHJvZHVjdC5pbWFnZXMgJiYgcHJvZHVjdC5pbWFnZXMubGVuZ3RoID4gMFxuLy8gICAgID8gcHJvZHVjdC5pbWFnZXNcbi8vICAgICA6IFsnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcGxhY2Vob2xkZXIvMjAwLzE1MCddXG5cbi8vICAgY29uc3QgbmV4dEltYWdlID0gKCkgPT4ge1xuLy8gICAgIGlmIChpc1RyYW5zaXRpb25pbmcpIHJldHVyblxuLy8gICAgIHNldFRyYW5zaXRpb25pbmcodHJ1ZSlcbi8vICAgICBzZXRDdXJyZW50SW1hZ2VJbmRleCgocHJldkluZGV4KSA9PlxuLy8gICAgICAgcHJldkluZGV4ID09PSBpbWFnZXMubGVuZ3RoIC0gMSA/IDAgOiBwcmV2SW5kZXggKyAxXG4vLyAgICAgKVxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VHJhbnNpdGlvbmluZyhmYWxzZSksIDEwMDApXG4vLyAgIH1cblxuLy8gICBjb25zdCBwcmV2SW1hZ2UgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxuLy8gICAgIGlmIChpc1RyYW5zaXRpb25pbmcpIHJldHVyblxuLy8gICAgIHNldFRyYW5zaXRpb25pbmcodHJ1ZSlcbi8vICAgICBzZXRDdXJyZW50SW1hZ2VJbmRleCgocHJldkluZGV4KSA9PlxuLy8gICAgICAgcHJldkluZGV4ID09PSAwID8gaW1hZ2VzLmxlbmd0aCAtIDEgOiBwcmV2SW5kZXggLSAxXG4vLyAgICAgKVxuLy8gICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0VHJhbnNpdGlvbmluZyhmYWxzZSksIDEwMDApXG4vLyAgIH1cblxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xuLy8gICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwobmV4dEltYWdlLCAxMDAwMClcbi8vICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbi8vICAgfSwgW10pXG5cbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlbiBib3JkZXIgbWF4LXcteHMgY3Vyc29yLXBvaW50ZXJcIj5cbi8vICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0gY2xhc3NOYW1lPVwiYmxvY2tcIj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTM2XCI+XG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG92ZXJmbG93LXgtYXV0byBzbmFwLXggc25hcC1tYW5kYXRvcnkgaC1mdWxsXCI+XG4vLyAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LWZ1bGwgaC1mdWxsIHNuYXAtY2VudGVyXCI+XG4vLyAgICAgICAgICAgICAgICAgPEltYWdlXG4vLyAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuLy8gICAgICAgICAgICAgICAgICAgYWx0PXtgJHtwcm9kdWN0LnRpdGxlfSAtIEltYWdlICR7aW5kZXggKyAxfWB9XG4vLyAgICAgICAgICAgICAgICAgICBsYXlvdXQ9XCJmaWxsXCJcbi8vICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbi8vICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi0xMDAwIGVhc2UtaW4tb3V0ICR7XG4vLyAgICAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBjdXJyZW50SW1hZ2VJbmRleCA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS0wJ1xuLy8gICAgICAgICAgICAgICAgICAgfWB9XG4vLyAgICAgICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICB7aW1hZ2VzLmxlbmd0aCA+IDEgJiYgKFxuLy8gICAgICAgICAgICAgPD5cbi8vICAgICAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3ByZXZJbWFnZX1cbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTIgdG9wLTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTEvMiBiZy13aGl0ZSBiZy1vcGFjaXR5LTUwIHJvdW5kZWQtZnVsbCBwLTEgaG92ZXI6Ymctb3BhY2l0eS03NSB0cmFuc2l0aW9uLWFsbFwiXG4vLyAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIGltYWdlXCJcbi8vICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgIDxDaGV2cm9uTGVmdCBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtZ3JheS04MDBcIiAvPlxuLy8gICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7IGUucHJldmVudERlZmF1bHQoKTsgbmV4dEltYWdlKCkgfX1cbi8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0yIHRvcC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgYmctd2hpdGUgYmctb3BhY2l0eS01MCByb3VuZGVkLWZ1bGwgcC0xIGhvdmVyOmJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1hbGxcIlxuLy8gICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJOZXh0IGltYWdlXCJcbi8vICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgIDxDaGV2cm9uUmlnaHQgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWdyYXktODAwXCIgLz5cbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICA8Lz5cbi8vICAgICAgICAgICApfVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cbi8vICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTEgdGV4dC1bIzJEODgyQ11cIj57cHJvZHVjdC50aXRsZX08L2gyPlxuLy8gICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMCBtYi0xXCI+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9wPlxuLy8gICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gbWItMVwiPkNvbmRpdGlvbjoge3Byb2R1Y3QuY29uZGl0aW9ufTwvcD5cbi8vICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHRleHQteHMgdGV4dC1ncmF5LTYwMCBtYi0zXCI+XG4vLyAgICAgICAgICAgICA8TWFwUGluIHNpemU9ezE0fSBjbGFzc05hbWU9XCJtci0xXCIgLz5cbi8vICAgICAgICAgICAgIHtwcm9kdWN0LmxvY2F0aW9ufVxuLy8gICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvTGluaz5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuLy8gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0yIHJpZ2h0LTIgcC0yIHJvdW5kZWQtZnVsbCBiZy13aGl0ZS84MCBob3ZlcjpiZy13aGl0ZSB0cmFuc2l0aW9uLWNvbG9yc1wiPlxuICAgICAgICAgIC8vIDxIZWFydCBjbGFzc05hbWU9XCJoLTUgdy01IHRleHQtZ3JheS02MDAgaG92ZXI6dGV4dC1yZWQtNTAwXCIgLz5cbiAgICAgICAgICAvLyA8L2J1dHRvbj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICApXG4vLyB9XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/ProductCard.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/layout/ProductGrid.tsx":
/*!***********************************************!*\
  !*** ./src/components/layout/ProductGrid.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductCard */ \"(app-pages-browser)/./src/components/layout/ProductCard.tsx\");\n/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ProductCard__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ProductGrid() {\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // In a real application, you would fetch products from an API\n        // For this example, we'll use mock data\n        const mockProducts = [\n            {\n                id: 1,\n                title: \"Test 1\",\n                category: \"Home & Garden\",\n                condition: \"Used - Good\",\n                location: \"London, SW1A 1AA\",\n                images: [\n                    \"https://picsum.photos/seed/product1a/300/200\",\n                    \"https://picsum.photos/seed/product1b/300/200\",\n                    \"https://picsum.photos/seed/product1c/300/200\"\n                ]\n            },\n            {\n                id: 2,\n                title: \"Test 2\",\n                category: \"Sports & Outdoors\",\n                condition: \"Used - Fair\",\n                location: \"Manchester, M1 1AE\",\n                images: [\n                    \"https://picsum.photos/seed/product1a/300/200\",\n                    \"https://picsum.photos/seed/product1b/300/200\",\n                    \"https://picsum.photos/seed/product1c/300/200\"\n                ]\n            },\n            {\n                id: 3,\n                title: \"Test 3\",\n                category: \"Home & Garden\",\n                condition: \"Used - Mint\",\n                location: \"London, E1 6AE\",\n                images: [\n                    \"https://picsum.photos/seed/product1a/300/200\",\n                    \"https://picsum.photos/seed/product1b/300/200\",\n                    \"https://picsum.photos/seed/product1c/300/200\"\n                ]\n            },\n            {\n                id: 4,\n                title: \"Test 4\",\n                category: \"Home & Garden\",\n                condition: \"Used - Mint\",\n                location: \"London, E1 6AE\",\n                images: [\n                    \"https://picsum.photos/seed/product1a/300/200\",\n                    \"https://picsum.photos/seed/product1b/300/200\",\n                    \"https://picsum.photos/seed/product1c/300/200\"\n                ]\n            },\n            {\n                id: 5,\n                title: \"Test 5\",\n                category: \"Home & Garden\",\n                condition: \"Used - Mint\",\n                location: \"London, E1 6AE\",\n                images: [\n                    \"https://picsum.photos/seed/product1a/300/200\",\n                    \"https://picsum.photos/seed/product1b/300/200\",\n                    \"https://picsum.photos/seed/product1c/300/200\"\n                ]\n            },\n            {\n                id: 6,\n                title: \"Test 6\",\n                category: \"Home & Garden\",\n                condition: \"Used - Mint\",\n                location: \"London, E1 6AE\",\n                images: [\n                    \"https://picsum.photos/seed/product1a/300/200\",\n                    \"https://picsum.photos/seed/product1b/300/200\",\n                    \"https://picsum.photos/seed/product1c/300/200\"\n                ]\n            },\n            {\n                id: 7,\n                title: \"Test 7\",\n                category: \"Home & Garden\",\n                condition: \"Used - Mint\",\n                location: \"London, E1 6AE\",\n                images: [\n                    \"https://picsum.photos/seed/product1a/300/200\",\n                    \"https://picsum.photos/seed/product1b/300/200\",\n                    \"https://picsum.photos/seed/product1c/300/200\"\n                ]\n            },\n            {\n                id: 8,\n                title: \"Test 8\",\n                category: \"Home & Garden\",\n                condition: \"Used - Mint\",\n                location: \"London, E1 6AE\",\n                images: [\n                    \"https://picsum.photos/seed/product1a/300/200\",\n                    \"https://picsum.photos/seed/product1b/300/200\",\n                    \"https://picsum.photos/seed/product1c/300/200\"\n                ]\n            }\n        ];\n        setProducts(mockProducts);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4\",\n        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_ProductCard__WEBPACK_IMPORTED_MODULE_2___default()), {\n                product: product\n            }, product.id, false, {\n                fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductGrid.tsx\",\n                lineNumber: 126,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/lorenzofilippini/Desktop/grabit-ui/src/components/layout/ProductGrid.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, this);\n}\n_s(ProductGrid, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = ProductGrid;\nvar _c;\n$RefreshReg$(_c, \"ProductGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dC9Qcm9kdWN0R3JpZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMkM7QUFDSjtBQVd4QixTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFZLEVBQUU7SUFFdERDLGdEQUFTQSxDQUFDO1FBQ1IsOERBQThEO1FBQzlELHdDQUF3QztRQUN4QyxNQUFNSyxlQUEwQjtZQUM5QjtnQkFDRUMsSUFBSTtnQkFDSkMsT0FBTztnQkFDUEMsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsUUFBUTtvQkFDTjtvQkFDQTtvQkFDQTtpQkFDRDtZQUNIO1lBQ0E7Z0JBQ0VMLElBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLFFBQVE7b0JBQ047b0JBQ0E7b0JBQ0E7aUJBQ0Q7WUFDSDtZQUNBO2dCQUNFTCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxVQUFVO2dCQUNWQyxRQUFRO29CQUNOO29CQUNBO29CQUNBO2lCQUNEO1lBQ0g7WUFDQTtnQkFDRUwsSUFBSTtnQkFDSkMsT0FBTztnQkFDUEMsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsUUFBUTtvQkFDTjtvQkFDQTtvQkFDQTtpQkFDRDtZQUNIO1lBQ0E7Z0JBQ0VMLElBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLFFBQVE7b0JBQ047b0JBQ0E7b0JBQ0E7aUJBQ0Q7WUFDSDtZQUNBO2dCQUNFTCxJQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxVQUFVO2dCQUNWQyxXQUFXO2dCQUNYQyxVQUFVO2dCQUNWQyxRQUFRO29CQUNOO29CQUNBO29CQUNBO2lCQUNEO1lBQ0g7WUFDQTtnQkFDRUwsSUFBSTtnQkFDSkMsT0FBTztnQkFDUEMsVUFBVTtnQkFDVkMsV0FBVztnQkFDWEMsVUFBVTtnQkFDVkMsUUFBUTtvQkFDTjtvQkFDQTtvQkFDQTtpQkFDRDtZQUNIO1lBQ0E7Z0JBQ0VMLElBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFVBQVU7Z0JBQ1ZDLFdBQVc7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLFFBQVE7b0JBQ047b0JBQ0E7b0JBQ0E7aUJBQ0Q7WUFDSDtTQUNEO1FBRURQLFlBQVlDO0lBQ2QsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7a0JBQ1pWLFNBQVNXLEdBQUcsQ0FBQ0MsQ0FBQUEsd0JBQ1osOERBQUNkLHFEQUFXQTtnQkFBa0JjLFNBQVNBO2VBQXJCQSxRQUFRVCxFQUFFOzs7Ozs7Ozs7O0FBSXBDO0dBbkh3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L1Byb2R1Y3RHcmlkLnRzeD9lMzg4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSAnLi9Qcm9kdWN0Q2FyZCdcblxuaW50ZXJmYWNlIFByb2R1Y3Qge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY2F0ZWdvcnk6IHN0cmluZ1xuICBjb25kaXRpb246IHN0cmluZ1xuICBsb2NhdGlvbjogc3RyaW5nXG4gIGltYWdlczogc3RyaW5nW11cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdEdyaWQoKSB7XG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGU8UHJvZHVjdFtdPihbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEluIGEgcmVhbCBhcHBsaWNhdGlvbiwgeW91IHdvdWxkIGZldGNoIHByb2R1Y3RzIGZyb20gYW4gQVBJXG4gICAgLy8gRm9yIHRoaXMgZXhhbXBsZSwgd2UnbGwgdXNlIG1vY2sgZGF0YVxuICAgIGNvbnN0IG1vY2tQcm9kdWN0czogUHJvZHVjdFtdID0gW1xuICAgICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6IFwiVGVzdCAxXCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkhvbWUgJiBHYXJkZW5cIixcbiAgICAgICAgY29uZGl0aW9uOiBcIlVzZWQgLSBHb29kXCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIkxvbmRvbiwgU1cxQSAxQUFcIixcbiAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9wcm9kdWN0MWEvMzAwLzIwMFwiLFxuICAgICAgICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcHJvZHVjdDFiLzMwMC8yMDBcIixcbiAgICAgICAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3Byb2R1Y3QxYy8zMDAvMjAwXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHRpdGxlOiBcIlRlc3QgMlwiLFxuICAgICAgICBjYXRlZ29yeTogXCJTcG9ydHMgJiBPdXRkb29yc1wiLFxuICAgICAgICBjb25kaXRpb246IFwiVXNlZCAtIEZhaXJcIixcbiAgICAgICAgbG9jYXRpb246IFwiTWFuY2hlc3RlciwgTTEgMUFFXCIsXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcHJvZHVjdDFhLzMwMC8yMDBcIixcbiAgICAgICAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3Byb2R1Y3QxYi8zMDAvMjAwXCIsXG4gICAgICAgICAgXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9wcm9kdWN0MWMvMzAwLzIwMFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICB0aXRsZTogXCJUZXN0IDNcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiSG9tZSAmIEdhcmRlblwiLFxuICAgICAgICBjb25kaXRpb246IFwiVXNlZCAtIE1pbnRcIixcbiAgICAgICAgbG9jYXRpb246IFwiTG9uZG9uLCBFMSA2QUVcIixcbiAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9wcm9kdWN0MWEvMzAwLzIwMFwiLFxuICAgICAgICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcHJvZHVjdDFiLzMwMC8yMDBcIixcbiAgICAgICAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3Byb2R1Y3QxYy8zMDAvMjAwXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHRpdGxlOiBcIlRlc3QgNFwiLFxuICAgICAgICBjYXRlZ29yeTogXCJIb21lICYgR2FyZGVuXCIsXG4gICAgICAgIGNvbmRpdGlvbjogXCJVc2VkIC0gTWludFwiLFxuICAgICAgICBsb2NhdGlvbjogXCJMb25kb24sIEUxIDZBRVwiLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3Byb2R1Y3QxYS8zMDAvMjAwXCIsXG4gICAgICAgICAgXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9wcm9kdWN0MWIvMzAwLzIwMFwiLFxuICAgICAgICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcHJvZHVjdDFjLzMwMC8yMDBcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgdGl0bGU6IFwiVGVzdCA1XCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkhvbWUgJiBHYXJkZW5cIixcbiAgICAgICAgY29uZGl0aW9uOiBcIlVzZWQgLSBNaW50XCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIkxvbmRvbiwgRTEgNkFFXCIsXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcHJvZHVjdDFhLzMwMC8yMDBcIixcbiAgICAgICAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3Byb2R1Y3QxYi8zMDAvMjAwXCIsXG4gICAgICAgICAgXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9wcm9kdWN0MWMvMzAwLzIwMFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICB0aXRsZTogXCJUZXN0IDZcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiSG9tZSAmIEdhcmRlblwiLFxuICAgICAgICBjb25kaXRpb246IFwiVXNlZCAtIE1pbnRcIixcbiAgICAgICAgbG9jYXRpb246IFwiTG9uZG9uLCBFMSA2QUVcIixcbiAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9wcm9kdWN0MWEvMzAwLzIwMFwiLFxuICAgICAgICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcHJvZHVjdDFiLzMwMC8yMDBcIixcbiAgICAgICAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3Byb2R1Y3QxYy8zMDAvMjAwXCJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIHRpdGxlOiBcIlRlc3QgN1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJIb21lICYgR2FyZGVuXCIsXG4gICAgICAgIGNvbmRpdGlvbjogXCJVc2VkIC0gTWludFwiLFxuICAgICAgICBsb2NhdGlvbjogXCJMb25kb24sIEUxIDZBRVwiLFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3Byb2R1Y3QxYS8zMDAvMjAwXCIsXG4gICAgICAgICAgXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9wcm9kdWN0MWIvMzAwLzIwMFwiLFxuICAgICAgICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcHJvZHVjdDFjLzMwMC8yMDBcIlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogOCxcbiAgICAgICAgdGl0bGU6IFwiVGVzdCA4XCIsXG4gICAgICAgIGNhdGVnb3J5OiBcIkhvbWUgJiBHYXJkZW5cIixcbiAgICAgICAgY29uZGl0aW9uOiBcIlVzZWQgLSBNaW50XCIsXG4gICAgICAgIGxvY2F0aW9uOiBcIkxvbmRvbiwgRTEgNkFFXCIsXG4gICAgICAgIGltYWdlczogW1xuICAgICAgICAgIFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zL3NlZWQvcHJvZHVjdDFhLzMwMC8yMDBcIixcbiAgICAgICAgICBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy9zZWVkL3Byb2R1Y3QxYi8zMDAvMjAwXCIsXG4gICAgICAgICAgXCJodHRwczovL3BpY3N1bS5waG90b3Mvc2VlZC9wcm9kdWN0MWMvMzAwLzIwMFwiXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuXG4gICAgc2V0UHJvZHVjdHMobW9ja1Byb2R1Y3RzKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyB4bDpncmlkLWNvbHMtNCBnYXAtNFwiPlxuICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2R1Y3RDYXJkIiwiUHJvZHVjdEdyaWQiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwibW9ja1Byb2R1Y3RzIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5IiwiY29uZGl0aW9uIiwibG9jYXRpb24iLCJpbWFnZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layout/ProductGrid.tsx\n"));

/***/ })

});