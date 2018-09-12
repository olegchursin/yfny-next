module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_info__ = __webpack_require__("./utils/info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_images__ = __webpack_require__("./utils/images.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome__ = __webpack_require__("@fortawesome/react-fontawesome");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_brands_svg_icons__ = __webpack_require__("@fortawesome/free-brands-svg-icons");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_brands_svg_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__fortawesome_free_brands_svg_icons__);
var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/Footer.jsx";







var styles = {
  footerWrapper: {
    fontFamily: 'Rubik',
    display: 'flex',
    flexDirection: 'column',
    adjustContent: 'center',
    alignItems: 'center',
    color: 'white',
    height: '600px',
    background: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
    padding: '40px 0 10px'
  },
  importantInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20
  },
  rcnyCopyright: {
    marginTop: 40
  },
  rcnyLogo: {
    marginTop: 10,
    width: 100
  },
  socialMediaIcon: {
    margin: '0 10px'
  },
  socialMediaGroup: {
    margin: '20px 0',
    fontSize: '3em'
  },
  socialMediaLink: {
    color: 'white',
    cursor: 'pointer'
  },
  yfnyLogo: {
    margin: 40,
    width: 250
  },
  webDevSection: {
    marginTop: 40
  },
  webDevLink: {
    color: 'white'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.footerWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, __WEBPACK_IMPORTED_MODULE_1__utils_info__["b" /* yfny */].socialMedia.hashtag, "/ ", __WEBPACK_IMPORTED_MODULE_1__utils_info__["b" /* yfny */].socialMedia.nametag), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, __WEBPACK_IMPORTED_MODULE_1__utils_info__["a" /* rcny */].email), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.socialMediaGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: styles.socialMediaLink,
    href: __WEBPACK_IMPORTED_MODULE_1__utils_info__["b" /* yfny */].socialMedia.facebook,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
    style: styles.socialMediaIcon,
    icon: __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_brands_svg_icons__["faFacebookSquare"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: styles.socialMediaLink,
    href: __WEBPACK_IMPORTED_MODULE_1__utils_info__["b" /* yfny */].socialMedia.instagram,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
    style: styles.socialMediaIcon,
    icon: __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_brands_svg_icons__["faInstagram"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: styles.socialMediaLink,
    href: __WEBPACK_IMPORTED_MODULE_1__utils_info__["b" /* yfny */].socialMedia.twitter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
    style: styles.socialMediaIcon,
    icon: __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_brands_svg_icons__["faTwitterSquare"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: styles.yfnyLogo,
    src: __WEBPACK_IMPORTED_MODULE_2__utils_images__["a" /* img */].yfnyLogoWhite.url,
    alt: __WEBPACK_IMPORTED_MODULE_2__utils_images__["a" /* img */].yfnyLogoWhite.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.importantInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, "BY INVITATION ONLY. SEATING IS LIMITED."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, "ADVANCE REGISTRATION REQUIRED."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, "REGISTRATIONS ARE SCREENED.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.rcnyCopyright,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, "\xA9 ", new Date().getFullYear(), "\xA0", __WEBPACK_IMPORTED_MODULE_1__utils_info__["a" /* rcny */].name.toUpperCase()), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: __WEBPACK_IMPORTED_MODULE_1__utils_info__["a" /* rcny */].website,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: styles.rcnyLogo,
    src: __WEBPACK_IMPORTED_MODULE_2__utils_images__["a" /* img */].rcnyLogoWhite.url,
    alt: __WEBPACK_IMPORTED_MODULE_2__utils_images__["a" /* img */].rcnyLogoWhite.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.webDevSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, "web dev //", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: styles.webDevLink,
    target: "_blank",
    href: "http://olegchursin.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, "\xA0oleg chursin")));
});

/***/ }),

/***/ "./components/InnerPageHero.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_styles__ = __webpack_require__("./utils/styles.js");
var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/InnerPageHero.jsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var styles = {
  title: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_1__utils_styles__["b" /* typography */].boldHugeText, {
    color: 'white'
  }),
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30vh',
    width: '100%',
    background: 'linear-gradient(135deg, #08AEEA 0%, #2AF598 100%)'
  }
};

var InnerPageHero = function InnerPageHero(_ref) {
  var title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, title));
};

/* harmony default export */ __webpack_exports__["a"] = (InnerPageHero);

/***/ }),

/***/ "./components/Layout.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_back_top_style_css__ = __webpack_require__("antd/lib/back-top/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_back_top_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_back_top_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_back_top__ = __webpack_require__("antd/lib/back-top");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_back_top___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_back_top__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Navigation__ = __webpack_require__("./components/Navigation.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Footer__ = __webpack_require__("./components/Footer.jsx");


var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/Layout.jsx";




var styles = {
  appContent: {
    flex: 1
  },
  appWrapper: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Rubik:300,400,700",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "/_next/static/style.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: styles.appWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Navigation__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: styles.appContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, children, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_back_top___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })));
});

/***/ }),

/***/ "./components/Navigation.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_affix_style_css__ = __webpack_require__("antd/lib/affix/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_affix_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_affix_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_affix__ = __webpack_require__("antd/lib/affix");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_affix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_affix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css__ = __webpack_require__("antd/lib/dropdown/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_dropdown_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown__ = __webpack_require__("antd/lib/dropdown");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_button_style_css__ = __webpack_require__("antd/lib/button/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_antd_lib_button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_antd_lib_button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_icon_style_css__ = __webpack_require__("antd/lib/icon/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_icon__ = __webpack_require__("antd/lib/icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_menu_style_css__ = __webpack_require__("antd/lib/menu/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_antd_lib_menu_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_antd_lib_menu_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_menu__ = __webpack_require__("antd/lib/menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_styles__ = __webpack_require__("./utils/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_images__ = __webpack_require__("./utils/images.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_RegistrationButton__ = __webpack_require__("./components/RegistrationButton.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_antd_dist_antd_css__ = __webpack_require__("./node_modules/antd/dist/antd.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_antd_dist_antd_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_antd_dist_antd_css__);










var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/Navigation.jsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var styles = {
  registrationButton: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_11__utils_styles__["b" /* typography */].lightSmallText, {
    borderRadius: '50px',
    margin: '0 40px 0 20px'
  }),
  menuButton: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_11__utils_styles__["b" /* typography */].lightSmallText, {
    borderRadius: '50px'
  }),
  menuLink: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_11__utils_styles__["b" /* typography */].lightSmallText),
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
    cursor: 'pointer',
    height: 30,
    marginLeft: 40
  }
};
var menu = __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
  style: styles.menuLink,
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  }
}, "\u0414\u043E\u043C\u0430\u0448\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430"))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
  href: "/program",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
  style: styles.menuLink,
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  }
}, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u0444\u043E\u0440\u0443\u043C\u0430"))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
  href: "/registration",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
  style: styles.menuLink,
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  }
}, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
  href: "/contacts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  }
}, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("a", {
  style: styles.menuLink,
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  }
}, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))));
/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_affix___default.a, {
    offsetTop: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
    style: styles.navigationWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("img", {
    src: __WEBPACK_IMPORTED_MODULE_12__utils_images__["a" /* img */].yfnyLogoMark.url,
    alt: __WEBPACK_IMPORTED_MODULE_12__utils_images__["a" /* img */].yfnyLogoMark.alt,
    style: styles.navLogo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  })), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_dropdown___default.a, {
    overlay: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd_lib_button___default.a, {
    type: "primary",
    ghost: true,
    style: styles.menuButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F", __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_antd_lib_icon___default.a, {
    type: "down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__components_RegistrationButton__["a" /* default */], {
    title: 'Регистрация',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }))));
});

/***/ }),

/***/ "./components/RegistrationButton.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button_style_css__ = __webpack_require__("antd/lib/button/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_button_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_button_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button__ = __webpack_require__("antd/lib/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_styles__ = __webpack_require__("./utils/styles.js");


var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/RegistrationButton.jsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var styles = {
  registrationButton: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4__utils_styles__["b" /* typography */].lightSmallText, {
    borderRadius: '50px',
    margin: '0 40px 0 20px'
  })
};

var RegistrationButton = function RegistrationButton(_ref) {
  var title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: "/registration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
    type: "primary",
    style: styles.registrationButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, title));
};

/* harmony default export */ __webpack_exports__["a"] = (RegistrationButton);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/registration.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_InnerPageHero__ = __webpack_require__("./components/InnerPageHero.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.jsx");
var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/pages/registration.jsx";



var styles = {
  form: {
    padding: '100px 40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_InnerPageHero__["a" /* default */], {
    title: 'Регистрация',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", {
    src: "https://docs.google.com/forms/d/e/1FAIpQLScBieN1X779Ry2iNmavPMZaj_G7kTGt8YC5CzbOObFvzdNQEQ/viewform?embedded=true",
    width: "640",
    height: "1726",
    frameborder: "0",
    marginheight: "0",
    marginwidth: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, "Loading...")));
});

/***/ }),

/***/ "./utils/images.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return img; });
var img = {
  consulateMap: {
    url: 'https://www.russiancenterny.org/wp-content/uploads/2018/09/yfny-map.jpg',
    alt: 'Russian Consulate NYC Map'
  },
  yfny2018: {
    url: 'https://www.russiancenterny.org/wp-content/uploads/2018/09/yfny-2018.svg',
    alt: 'YFNY 2018'
  },
  yfnyLogoFullColor: {
    url: 'https://www.russiancenterny.org/wp-content/uploads/2018/09/yfny-logo.svg',
    alt: 'YFNY Logo'
  },
  yfnyLogoMark: {
    url: 'https://www.russiancenterny.org/wp-content/uploads/2018/09/yfny-logo-sign.svg',
    alt: 'YFNY Logo'
  },
  yfnyLogoWhite: {
    url: 'https://www.russiancenterny.org/wp-content/uploads/2018/09/yfny-logo-white.svg',
    alt: 'YFNY Logo'
  },
  rcnyLogoWhite: {
    url: 'https://www.russiancenterny.org/wp-content/uploads/2017/06/RCNY-logo.svg',
    alt: 'RCNY Logo'
  }
};

/***/ }),

/***/ "./utils/info.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rcny; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return yfny; });
/* unused harmony export consulate */
var rcny = {
  name: 'Russian Center New York',
  abbreviation: 'RCNY',
  website: 'http://russiancenterny.org',
  email: 'hello@russiancenterny.org'
};
var yfny = {
  nameEn: 'Youth Forum New York',
  nameRu: 'Молодежный форум в Нью-Йорке',
  tagline: 'Будущее русско-американской молодежи США',
  abbreviation: 'YFNY',
  about1: 'Приглашаем вас на дискуссию о будущем российской молодежи в США, сохранении росс' + 'ийского исторического наследия и популяризации русской культуры и языка, междуна' + 'родном сотрудничестве и консолидации молодежи.',
  about2: 'На форуме проходят дискуссии на русском языке: пленарные сессии, панельные диску' + 'ссии и презентаций молодежных проектов. Участники форума - это молодежные органи' + 'зации русских американцев, студенты, молодые специалисты и творческая интеллиген' + 'ция. На форуме выступят представители МИД России, Правительства Москвы, Координа' + 'ционного совета организаций российских соотечественников США и других объединени' + 'й соотечественников, проживающих в США, духовенство, влиятельные соотечественник' + 'и и эксперты, ведущие представители русской эмиграции разных волн, а также местн' + 'ых органов власти.',
  website: 'http://yfny.russiaforumny.com',
  socialMedia: {
    hashtag: '#yfny',
    nametag: '@youthforumny',
    facebook: 'https://www.facebook.com/youthforumny',
    twitter: 'https://twitter.com/youthforumny',
    instagram: 'https://www.instagram.com/russiancenter.newyork/'
  }
};
var consulate = {
  nameRu: 'Генеральное консульство России в Нью-Йорке',
  nameEn: 'Consulate-General of Russia in New York City',
  addressEn: '9 East 91 Street, New York, NY 10128',
  about: 'Генеральное консульство России в Нью-Йорке расположено в красивейшем особняке Th' + 'e John Henry Hammond House, построенном в 1903 году стиле позднего ренессанса на' + ' престижной 91 улице Манхэттена. Это пятиэтажное здание, построенное в спиле эпо' + 'хи Возрождения, было спроектировано Каррером и Гастингсом, которые также выполни' + 'ли дизайн Нью-йоркской публичной библиотеки. Этот особняк с деталями итальянског' + 'о палаццо 16 и 18 века считается одним из самых лучших манхэттенских таунхаусов.' + ' Интерьер представляет собой богатую серию комнат в стиле Людовика XVI с изыскан' + 'ными мраморами, резьбой, гобеленами и мебелью.'
};

/***/ }),

/***/ "./utils/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return typography; });
var colors = {
  primary: {
    main: '#09bcd4',
    light: '#b2ebf2',
    dark: '#00838f'
  }
};
var typography = {
  paragraph: {
    fontFamily: 'Rubik',
    fontWeight: 100,
    fontSize: '1.2em'
  },
  lightSmallText: {
    fontFamily: 'Rubik',
    fontWeight: 100
  },
  boldHugeText: {
    fontFamily: 'Rubik',
    fontWeight: 600,
    fontSize: '3em'
  }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/registration.jsx");


/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "antd/lib/affix":
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),

/***/ "antd/lib/affix/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix/style/css");

/***/ }),

/***/ "antd/lib/back-top":
/***/ (function(module, exports) {

module.exports = require("antd/lib/back-top");

/***/ }),

/***/ "antd/lib/back-top/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/back-top/style/css");

/***/ }),

/***/ "antd/lib/button":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/button/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button/style/css");

/***/ }),

/***/ "antd/lib/dropdown":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/dropdown/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown/style/css");

/***/ }),

/***/ "antd/lib/icon":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/icon/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon/style/css");

/***/ }),

/***/ "antd/lib/menu":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/menu/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu/style/css");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=registration.js.map