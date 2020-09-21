webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/PlaylistPage.js":
/*!******************************************!*\
  !*** ./pages/components/PlaylistPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Component; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkButton */ \"./pages/components/LinkButton.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout */ \"./pages/components/Layout.js\");\n\nvar _jsxFileName = \"/Users/jeremie/web/41_caetano_playlist/pages/components/PlaylistPage.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  h1,\\n  h2 {\\n    color: white;\\n\\n    margin-block-start: 0;\\n    margin-block-end: 0;\\n    text-align: center;\\n    max-width: 95%;\\n  }\\n  h1 {\\n    font-family: benton-black;\\n    font-size: 1.2rem;\\n    line-height: 130%;\\n\\n    margin-bottom: 1rem;\\n  }\\n  h2 {\\n    margin-top: 1rem;\\n    font-size: 1rem;\\n    font-family: benton-regular;\\n    margin-bottom: 0.5rem;\\n  }\\n  width: 100%;\\n  height: 100vh;\\n  @media (max-height: 640px) {\\n    height: 100%;\\n    padding-top: 2rem;\\n  }\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  color: white;\\n  .picture-container {\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n  }\\n  .release-picture {\\n    height: 30rem;\\n    width: 30rem;\\n    border: 0.2px solid white;\\n    max-width: 100%;\\n    object-fit: cover;\\n    @media (max-height: 640px) {\\n      height: 18rem;\\n      width: 18rem;\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nfunction Component(props) {\n  var _this = this;\n\n  var buttonProps = [[\"SPOTIFY\", \"/img/spotify.png\", \"https://open.spotify.com/playlist/44maE5rXx5wT9qFntoW88V?si=IAM1lnCSS1yMdeqatbHCyQ\"], [\"APPLE MUSIC\", \"/img/apple.png\", \"https://music.apple.com/ie/playlist/izems-100-best-caetano-veloso-songs/pl.u-KVXBk16s2meyKA\"], // [\n  //   \"BANDCAMP\",\n  //   \"/img/bandcamp-small.png\",\n  //   \"https://buffer.com/resources/facebook-instagram-stories-ads/\",\n  // ],\n  [\"YOUTUBE\", \"/img/youtube-small.png\", \"https://www.youtube.com/playlist?list=PLyQdDVZR1ieZ7DnhWzht-gxYRbRh3jGY5\"] // [\n  //   \"DEEZER\",\n  //   \"/img/deezer-small.png\",\n  //   \"https://www.deezer.com/fr/album/166378242\",\n  // ],\n  ];\n  return __jsx(_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    title: \"iZem's favourite 100 Caetano Veloso Songs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }\n  }, __jsx(Container, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"picture-container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/img/caetanocover.png\",\n    className: \"release-picture\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    className: \"streaming-buttons\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, buttonProps.map(function (buttonProps) {\n    return __jsx(_LinkButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      streamingService: buttonProps[0],\n      streamingServiceLogo: buttonProps[1],\n      streamingServiceLink: buttonProps[2],\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = Component;\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c2 = Container;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Component\");\n$RefreshReg$(_c2, \"Container\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1BsYXlsaXN0UGFnZS5qcz9mMzVhIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwiYnV0dG9uUHJvcHMiLCJtYXAiLCJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQ3ZDLE1BQU1DLFdBQVcsR0FBRyxDQUNsQixDQUNFLFNBREYsRUFFRSxrQkFGRixFQUdFLG9GQUhGLENBRGtCLEVBTWxCLENBQ0UsYUFERixFQUVFLGdCQUZGLEVBR0UsNkZBSEYsQ0FOa0IsRUFXbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0UsU0FERixFQUVFLHdCQUZGLEVBR0UsMEVBSEYsQ0FoQmtCLENBcUJsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJrQixHQUFwQjtBQTRCQSxTQUNFLE1BQUMsK0NBQUQ7QUFBUSxTQUFLLEVBQUUsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLHVCQUFUO0FBQWlDLGFBQVMsRUFBQyxpQkFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFPRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFDRCxXQUFEO0FBQUEsV0FDZixNQUFDLG1EQUFEO0FBQ0Usc0JBQWdCLEVBQUVBLFdBQVcsQ0FBQyxDQUFELENBRC9CO0FBRUUsMEJBQW9CLEVBQUVBLFdBQVcsQ0FBQyxDQUFELENBRm5DO0FBR0UsMEJBQW9CLEVBQUVBLFdBQVcsQ0FBQyxDQUFELENBSG5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEZTtBQUFBLEdBQWhCLENBREgsQ0FQRixDQURGLENBREY7QUFxQkQ7S0FsRHVCRixTO0FBb0R4QixJQUFNSSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7TUFBTUYsUyIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvUGxheWxpc3RQYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gXCIuL0xpbmtCdXR0b25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBvbmVudChwcm9wcykge1xuICBjb25zdCBidXR0b25Qcm9wcyA9IFtcbiAgICBbXG4gICAgICBcIlNQT1RJRllcIixcbiAgICAgIFwiL2ltZy9zcG90aWZ5LnBuZ1wiLFxuICAgICAgXCJodHRwczovL29wZW4uc3BvdGlmeS5jb20vcGxheWxpc3QvNDRtYUU1clh4NXdUOXFGbnRvVzg4Vj9zaT1JQU0xbG5DU1MxeU1kZXFhdGJIQ3lRXCIsXG4gICAgXSxcbiAgICBbXG4gICAgICBcIkFQUExFIE1VU0lDXCIsXG4gICAgICBcIi9pbWcvYXBwbGUucG5nXCIsXG4gICAgICBcImh0dHBzOi8vbXVzaWMuYXBwbGUuY29tL2llL3BsYXlsaXN0L2l6ZW1zLTEwMC1iZXN0LWNhZXRhbm8tdmVsb3NvLXNvbmdzL3BsLnUtS1ZYQmsxNnMybWV5S0FcIixcbiAgICBdLFxuICAgIC8vIFtcbiAgICAvLyAgIFwiQkFORENBTVBcIixcbiAgICAvLyAgIFwiL2ltZy9iYW5kY2FtcC1zbWFsbC5wbmdcIixcbiAgICAvLyAgIFwiaHR0cHM6Ly9idWZmZXIuY29tL3Jlc291cmNlcy9mYWNlYm9vay1pbnN0YWdyYW0tc3Rvcmllcy1hZHMvXCIsXG4gICAgLy8gXSxcbiAgICBbXG4gICAgICBcIllPVVRVQkVcIixcbiAgICAgIFwiL2ltZy95b3V0dWJlLXNtYWxsLnBuZ1wiLFxuICAgICAgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9wbGF5bGlzdD9saXN0PVBMeVFkRFZaUjFpZVo3RG5oV3podC1neFlSYlJoM2pHWTVcIixcbiAgICBdLFxuICAgIC8vIFtcbiAgICAvLyAgIFwiREVFWkVSXCIsXG4gICAgLy8gICBcIi9pbWcvZGVlemVyLXNtYWxsLnBuZ1wiLFxuICAgIC8vICAgXCJodHRwczovL3d3dy5kZWV6ZXIuY29tL2ZyL2FsYnVtLzE2NjM3ODI0MlwiLFxuICAgIC8vIF0sXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPXtcImlaZW0ncyBmYXZvdXJpdGUgMTAwIENhZXRhbm8gVmVsb3NvIFNvbmdzXCJ9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWN0dXJlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9jYWV0YW5vY292ZXIucG5nXCIgY2xhc3NOYW1lPVwicmVsZWFzZS1waWN0dXJlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8aDI+aVplbSdzPC9oMj5cbiAgICAgICAgPGgxPjEwMCBCRVNUIENBRVRBTk8gVkVMT1NPIFNPTkdTPC9oMT4gKi99XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHJlYW1pbmctYnV0dG9uc1wiPlxuICAgICAgICAgIHtidXR0b25Qcm9wcy5tYXAoKGJ1dHRvblByb3BzKSA9PiAoXG4gICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICBzdHJlYW1pbmdTZXJ2aWNlPXtidXR0b25Qcm9wc1swXX1cbiAgICAgICAgICAgICAgc3RyZWFtaW5nU2VydmljZUxvZ289e2J1dHRvblByb3BzWzFdfVxuICAgICAgICAgICAgICBzdHJlYW1pbmdTZXJ2aWNlTGluaz17YnV0dG9uUHJvcHNbMl19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBoMSxcbiAgaDIge1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDk1JTtcbiAgfVxuICBoMSB7XG4gICAgZm9udC1mYW1pbHk6IGJlbnRvbi1ibGFjaztcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcblxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgaDIge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBiZW50b24tcmVndWxhcjtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIEBtZWRpYSAobWF4LWhlaWdodDogNjQwcHgpIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gIH1cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLnBpY3R1cmUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5yZWxlYXNlLXBpY3R1cmUge1xuICAgIGhlaWdodDogMzByZW07XG4gICAgd2lkdGg6IDMwcmVtO1xuICAgIGJvcmRlcjogMC4ycHggc29saWQgd2hpdGU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIEBtZWRpYSAobWF4LWhlaWdodDogNjQwcHgpIHtcbiAgICAgIGhlaWdodDogMThyZW07XG4gICAgICB3aWR0aDogMThyZW07XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/PlaylistPage.js\n");

/***/ })

})