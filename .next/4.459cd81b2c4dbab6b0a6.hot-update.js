webpackHotUpdate(4,{

/***/ "./components/Navigation.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_affix_style_css__ = __webpack_require__("./node_modules/antd/lib/affix/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_affix_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_affix_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_affix__ = __webpack_require__("./node_modules/antd/lib/affix/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_affix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_affix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css__ = __webpack_require__("./node_modules/antd/lib/dropdown/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown__ = __webpack_require__("./node_modules/antd/lib/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_button_style_css__ = __webpack_require__("./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_button__ = __webpack_require__("./node_modules/antd/lib/button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_icon_style_css__ = __webpack_require__("./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_menu_style_css__ = __webpack_require__("./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_menu_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_menu_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_menu__ = __webpack_require__("./node_modules/antd/lib/menu/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_styles__ = __webpack_require__("./utils/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_images__ = __webpack_require__("./utils/images.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_antd_dist_antd_css__ = __webpack_require__("./node_modules/antd/dist/antd.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_antd_dist_antd_css__);










var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/Navigation.jsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var styles = {
  registrationButton: {
    borderRadius: '50px',
    margin: '0 40px 0 20px'
  },
  menuButton: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_11__utils_styles__["b" /* typography */].button, {
    borderRadius: '50px'
  }),
  navigationWrapper: {
    color: __WEBPACK_IMPORTED_MODULE_11__utils_styles__["a" /* colors */].primary.dark,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    width: '100%',
    backgroundColor: 'white',
    top: 0,
    boxShadow: '0px 3px 4px -2px rgba(117,117,117,1)',
    zIndex: 100
  },
  navLogo: {
    height: 30,
    marginLeft: 40
  }
};
var menu = __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  }
}, "\u0414\u043E\u043C\u0430\u0448\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
  href: "/program",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  }
}, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0444\u043E\u0440\u0443\u043C\u0430"))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
  href: "/registration",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  }
}, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
  href: "/projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  }
}, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B"))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
  href: "/contacts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  }
}, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))));
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_affix___default.a, {
    offsetTop: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
    style: styles.navigationWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_12__utils_images__["a" /* img */].yfnyLogoMark.url,
    alt: __WEBPACK_IMPORTED_MODULE_12__utils_images__["a" /* img */].yfnyLogoMark.alt,
    style: styles.navLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown___default.a, {
    overlay: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_button___default.a, {
    type: "primary",
    ghost: true,
    style: styles.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F", __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default.a, {
    type: "down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_button___default.a, {
    type: "primary",
    style: styles.registrationButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"))));
});

/***/ })

})
//# sourceMappingURL=4.459cd81b2c4dbab6b0a6.hot-update.js.map