"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/models/Base.ts":
/*!****************************!*\
  !*** ./src/models/Base.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   API_ROOT: function() { return /* binding */ API_ROOT; },\n/* harmony export */   Base: function() { return /* binding */ Base; }\n/* harmony export */ });\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/api */ \"./src/utils/api/index.ts\");\n\nconst API_ROOT = \"localhost:8017\";\nclass Base {\n    constructor(apiPrefix = null){\n        var _this = this;\n        this.normalizeQuery = (query)=>{\n            const formatQuery = {};\n            Object.keys(query).forEach((key)=>{\n                if (query[key] !== null && typeof query[key] === \"string\") {\n                    formatQuery[key] = query[key].trim();\n                } else if (query[key] !== null && !Number.isNaN(query[key])) {\n                    formatQuery[key] = query[key];\n                }\n            });\n            return formatQuery;\n        };\n        this.apiGet = function(url) {\n            let query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, signal = arguments.length > 2 ? arguments[2] : void 0;\n            return _utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.get(\"\".concat(_this.apiPrefix).concat(url), {\n                params: _this.normalizeQuery(query),\n                signal\n            });\n        };\n        this.apiGetWithoutPrefix = function(url) {\n            let query = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, signal = arguments.length > 2 ? arguments[2] : void 0;\n            return _utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.get(\"\".concat(_this.apiRoot).concat(url), {\n                params: _this.normalizeQuery(query),\n                signal\n            });\n        };\n        this.apiPost = (url, body, signal)=>_utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.post(\"\".concat(this.apiPrefix).concat(url), body, {\n                signal\n            });\n        this.apiPut = (url, body, signal)=>_utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.put(\"\".concat(this.apiPrefix).concat(url), body, {\n                signal\n            });\n        this.apiPutWithoutPrefix = (url, body, signal)=>_utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.put(\"\".concat(this.apiRoot).concat(url), body, {\n                signal\n            });\n        this.apiPostWithoutPrefix = (url, body, signal)=>_utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.post(\"\".concat(this.apiRoot).concat(url), body, {\n                signal\n            });\n        this.apiDelete = function() {\n            let url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, signal = arguments.length > 1 ? arguments[1] : void 0;\n            return _utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.delete(\"\".concat(_this.apiPrefix).concat(url), {\n                signal\n            });\n        };\n        this.apiDeleteWithoutPrefix = function() {\n            let url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, signal = arguments.length > 1 ? arguments[1] : void 0;\n            return _utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.delete(\"\".concat(_this.apiRoot).concat(url), {\n                signal\n            });\n        };\n        this.apiUploadFile = (url, body, signal)=>_utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.post(\"\".concat(this.apiRoot).concat(url), body, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data\"\n                },\n                signal\n            });\n        this.apiDeleteBody = function() {\n            let url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : \"\", body = arguments.length > 1 ? arguments[1] : void 0, signal = arguments.length > 2 ? arguments[2] : void 0;\n            return _utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfig.delete(\"\".concat(_this.apiPrefix).concat(url), {\n                data: body,\n                signal\n            });\n        };\n        this.apiPostUpload = (url, body)=>_utils_api__WEBPACK_IMPORTED_MODULE_0__.axiosConfigFile.post(\"\".concat(this.apiRoot).concat(url), body, {\n                headers: {\n                    \"Content-Type\": \"multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW\"\n                },\n                responseType: \"blob\"\n            });\n        this.apiRoot = API_ROOT;\n        this.apiPrefix = \"\".concat(API_ROOT, \"/api\").concat(apiPrefix);\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPckIsbURBQVdBLENBQUNrQyxNQUFNLENBQUMsR0FBb0JkLE9BQWpCLE1BQUtaLFNBQVMsRUFBTyxPQUFKWSxNQUFPO2dCQUNuRG1CLE1BQU1aO2dCQUNOTjtZQUNGO1FBQ0Y7YUFFQW1CLGdCQUFnQixDQUFDcEIsS0FBYU8sT0FDNUIxQix1REFBZUEsQ0FBQzJCLElBQUksQ0FBQyxHQUFrQlIsT0FBZixJQUFJLENBQUNLLE9BQU8sRUFBTyxPQUFKTCxNQUFPTyxNQUFNO2dCQUNsRFUsU0FBUztvQkFBRSxnQkFBZ0I7Z0JBQXNFO2dCQUNqR0ksY0FBYztZQUNoQjtRQXREQSxJQUFJLENBQUNoQixPQUFPLEdBQUd2QjtRQUNmLElBQUksQ0FBQ00sU0FBUyxHQUFHLEdBQWtCQSxPQUFmTixVQUFTLFFBQWdCLE9BQVZNO0lBQ3JDO0FBNEZGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2RlbHMvQmFzZS50cz82YThhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF4aW9zQ29uZmlnLCBheGlvc0NvbmZpZ0ZpbGUgfSBmcm9tICdAL3V0aWxzL2FwaSdcblxuZXhwb3J0IGNvbnN0IEFQSV9ST09UID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1JPT1RcblxuZXhwb3J0IGNsYXNzIEJhc2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IGFwaVJvb3Q6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBwcml2YXRlIHJlYWRvbmx5IGFwaVByZWZpeDogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgY29uc3RydWN0b3IoYXBpUHJlZml4OiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuICAgIHRoaXMuYXBpUm9vdCA9IEFQSV9ST09UXG4gICAgdGhpcy5hcGlQcmVmaXggPSBgJHtBUElfUk9PVH0vYXBpJHthcGlQcmVmaXh9YFxuICB9XG5cbiAgbm9ybWFsaXplUXVlcnkgPSAocXVlcnk6IHsgW3g6IHN0cmluZ106IGFueSB9KSA9PiB7XG4gICAgY29uc3QgZm9ybWF0UXVlcnk6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fVxuICAgIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAocXVlcnlba2V5XSAhPT0gbnVsbCAmJiB0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZm9ybWF0UXVlcnlba2V5XSA9IHF1ZXJ5W2tleV0udHJpbSgpXG4gICAgICB9IGVsc2UgaWYgKHF1ZXJ5W2tleV0gIT09IG51bGwgJiYgIU51bWJlci5pc05hTihxdWVyeVtrZXldKSkge1xuICAgICAgICBmb3JtYXRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgICAgfVxuICAgIH0pXG5cbiAgICByZXR1cm4gZm9ybWF0UXVlcnlcbiAgfVxuXG4gIGFwaUdldCA9ICh1cmw6IHN0cmluZywgcXVlcnkgPSB7fSwgc2lnbmFsPzogYW55KSA9PlxuICAgIGF4aW9zQ29uZmlnLmdldChgJHt0aGlzLmFwaVByZWZpeH0ke3VybH1gLCB7IHBhcmFtczogdGhpcy5ub3JtYWxpemVRdWVyeShxdWVyeSksIHNpZ25hbCB9KVxuXG4gIGFwaUdldFdpdGhvdXRQcmVmaXggPSAodXJsOiBzdHJpbmcsIHF1ZXJ5ID0ge30sIHNpZ25hbD86IGFueSkgPT5cbiAgICBheGlvc0NvbmZpZy5nZXQoYCR7dGhpcy5hcGlSb290fSR7dXJsfWAsIHsgcGFyYW1zOiB0aGlzLm5vcm1hbGl6ZVF1ZXJ5KHF1ZXJ5KSwgc2lnbmFsIH0pXG5cbiAgYXBpUG9zdCA9ICh1cmw6IHN0cmluZywgYm9keTogYW55LCBzaWduYWw/OiBhbnkpID0+IGF4aW9zQ29uZmlnLnBvc3QoYCR7dGhpcy5hcGlQcmVmaXh9JHt1cmx9YCwgYm9keSwgeyBzaWduYWwgfSlcblxuICBhcGlQdXQgPSAodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgc2lnbmFsPzogYW55KSA9PiBheGlvc0NvbmZpZy5wdXQoYCR7dGhpcy5hcGlQcmVmaXh9JHt1cmx9YCwgYm9keSwgeyBzaWduYWwgfSlcblxuICBhcGlQdXRXaXRob3V0UHJlZml4ID0gKHVybDogYW55LCBib2R5OiBhbnksIHNpZ25hbD86IGFueSkgPT5cbiAgICBheGlvc0NvbmZpZy5wdXQoYCR7dGhpcy5hcGlSb290fSR7dXJsfWAsIGJvZHksIHsgc2lnbmFsIH0pXG5cbiAgYXBpUG9zdFdpdGhvdXRQcmVmaXggPSAodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgc2lnbmFsPzogYW55KSA9PlxuICAgIGF4aW9zQ29uZmlnLnBvc3QoYCR7dGhpcy5hcGlSb290fSR7dXJsfWAsIGJvZHksIHsgc2lnbmFsIH0pXG5cbiAgYXBpRGVsZXRlID0gKHVybCA9IHt9LCBzaWduYWw/OiBhbnkpID0+IGF4aW9zQ29uZmlnLmRlbGV0ZShgJHt0aGlzLmFwaVByZWZpeH0ke3VybH1gLCB7IHNpZ25hbCB9KVxuXG4gIGFwaURlbGV0ZVdpdGhvdXRQcmVmaXggPSAodXJsID0ge30sIHNpZ25hbD86IGFueSkgPT4gYXhpb3NDb25maWcuZGVsZXRlKGAke3RoaXMuYXBpUm9vdH0ke3VybH1gLCB7IHNpZ25hbCB9KVxuXG4gIGFwaVVwbG9hZEZpbGUgPSAodXJsOiBzdHJpbmcsIGJvZHk6IGFueSwgc2lnbmFsPzogYW55KSA9PlxuICAgIGF4aW9zQ29uZmlnLnBvc3QoYCR7dGhpcy5hcGlSb290fSR7dXJsfWAsIGJvZHksIHtcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9LFxuICAgICAgc2lnbmFsXG4gICAgfSlcblxuICBhcGlEZWxldGVCb2R5ID0gKHVybCA9ICcnLCBib2R5OiBhbnksIHNpZ25hbD86IGFueSkgPT4ge1xuICAgIHJldHVybiBheGlvc0NvbmZpZy5kZWxldGUoYCR7dGhpcy5hcGlQcmVmaXh9JHt1cmx9YCwge1xuICAgICAgZGF0YTogYm9keSxcbiAgICAgIHNpZ25hbFxuICAgIH0pXG4gIH1cblxuICBhcGlQb3N0VXBsb2FkID0gKHVybDogc3RyaW5nLCBib2R5OiBhbnkpID0+XG4gICAgYXhpb3NDb25maWdGaWxlLnBvc3QoYCR7dGhpcy5hcGlSb290fSR7dXJsfWAsIGJvZHksIHtcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5N01BNFlXeGtUclp1MGdXJyB9LFxuICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICB9KVxuXG4gIC8vIGFwaVBvc3RVcGxvYWQgPSAodXJsOiBhbnksIGJvZHk6IGFueSkgPT4gYXhpb3NDb25maWcucG9zdFVwbG9hZEFQSShgJHt0aGlzLmFwaVByZWZpeH0ke3VybH1gLCBib2R5KTtcblxuICAvLyBhcGlEb3dubG9hZCA9ICh1cmwsIHBhcmFtcz8pID0+IGF4aW9zQ29uZmlnLmdldERvd25sb2FkKGAke3RoaXMuYXBpUHJlZml4fSR7dXJsfWAsIHBhcmFtcylcblxuICAvLyBhcGlVcGxvYWQgPSAodXJsLCBib2R5KSA9PiBheGlvc0NvbmZpZy5wb3N0RG93bmxvYWQoYCR7dGhpcy5hcGlQcmVmaXh9JHt1cmx9YCwgYm9keSlcblxuICAvLyBmb3JtYXRSZXNQYWdpbmF0aW9uID0gcmVzID0+IHtcbiAgLy8gICBpZiAocmVzPy5kYXRhPy5jb250ZW50KSB7XG4gIC8vICAgICByZXR1cm4ge1xuICAvLyAgICAgICBjb250ZW50OiByZXMuZGF0YS5jb250ZW50LFxuICAvLyAgICAgICB0b3RhbDogcmVzLmRhdGEudG90YWxFbGVtZW50cyxcbiAgLy8gICAgICAgLi4ub21pdChyZXMsIFsnZGF0YSddKVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gICBpZiAocmVzPy5jb250ZW50KSB7XG4gIC8vICAgICByZXR1cm4ge1xuICAvLyAgICAgICBjb250ZW50OiByZXMuY29udGVudCxcbiAgLy8gICAgICAgdG90YWw6IHJlcy50b3RhbEVsZW1lbnRzXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyAgIGlmIChyZXM/Lmxlbmd0aCA+IDApIHtcbiAgLy8gICAgIHJldHVybiB7XG4gIC8vICAgICAgIGNvbnRlbnQ6IHJlcyxcbiAgLy8gICAgICAgdG90YWw6IHJlcy5sZW5ndGhcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vICAgaWYgKHJlcz8uZGF0YSkge1xuICAvLyAgICAgcmV0dXJuIHtcbiAgLy8gICAgICAgY29udGVudDogcmVzLmRhdGEsXG4gIC8vICAgICAgIHRvdGFsOiByZXMudG90YWxFbGVtZW50c1xuICAvLyAgICAgfVxuICAvLyAgIH1cblxuICAvLyAgIHJldHVybiB7XG4gIC8vICAgICBjb250ZW50OiBbXSxcbiAgLy8gICAgIHRvdGFsOiAwXG4gIC8vICAgfVxuICAvLyB9XG59XG4iXSwibmFtZXMiOlsiYXhpb3NDb25maWciLCJheGlvc0NvbmZpZ0ZpbGUiLCJBUElfUk9PVCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfUk9PVCIsIkJhc2UiLCJjb25zdHJ1Y3RvciIsImFwaVByZWZpeCIsIm5vcm1hbGl6ZVF1ZXJ5IiwicXVlcnkiLCJmb3JtYXRRdWVyeSIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwidHJpbSIsIk51bWJlciIsImlzTmFOIiwiYXBpR2V0IiwidXJsIiwic2lnbmFsIiwiZ2V0IiwicGFyYW1zIiwiYXBpR2V0V2l0aG91dFByZWZpeCIsImFwaVJvb3QiLCJhcGlQb3N0IiwiYm9keSIsInBvc3QiLCJhcGlQdXQiLCJwdXQiLCJhcGlQdXRXaXRob3V0UHJlZml4IiwiYXBpUG9zdFdpdGhvdXRQcmVmaXgiLCJhcGlEZWxldGUiLCJkZWxldGUiLCJhcGlEZWxldGVXaXRob3V0UHJlZml4IiwiYXBpVXBsb2FkRmlsZSIsImhlYWRlcnMiLCJhcGlEZWxldGVCb2R5IiwiZGF0YSIsImFwaVBvc3RVcGxvYWQiLCJyZXNwb25zZVR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/models/Base.ts\n"));

/***/ })

});