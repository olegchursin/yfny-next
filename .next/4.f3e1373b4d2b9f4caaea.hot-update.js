webpackHotUpdate(4,{

/***/ "./components/HomePageHero.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/HomePageHero.jsx";

var styles = {
  hero: {
    padding: 40,
    height: '50vh',
    background: 'linear-gradient(145deg, #08AEEA 0%, #2AF598 100%)'
  }
};

var HomePageHero = function HomePageHero() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.hero,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Home Page Hero");
};

/* harmony default export */ __webpack_exports__["a"] = (HomePageHero);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HomePageHero__ = __webpack_require__("./components/HomePageHero.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_styles__ = __webpack_require__("./utils/styles.js");
var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/pages/index.js";




var styles = {
  hero: {
    padding: 40,
    height: '50vh',
    background: 'linear-gradient(145deg, #08AEEA 0%, #2AF598 100%)'
  },
  info: {
    height: '100vh'
  },
  wrapper: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_HomePageHero__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.info,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Info")));
});
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.f3e1373b4d2b9f4caaea.hot-update.js.map