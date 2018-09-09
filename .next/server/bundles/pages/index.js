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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/DateCallToAction.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/DateCallToAction.jsx";

var styles = {
  ctaWrapper: {
    width: '100%',
    height: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(270deg, #FEE140 0%, #FA709A 100%)'
  },
  text: {
    color: 'white',
    fontFamily: 'Rubik',
    fontWeight: 600,
    fontSize: '3em'
  }
};

var DateCallToAction = function DateCallToAction() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.ctaWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "30 \u043D\u043E\u044F\u0431\u0440\u044F 2018"));
};

/* harmony default export */ __webpack_exports__["a"] = (DateCallToAction);

/***/ }),

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
    minHeight: '70vh',
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
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_1__utils_info__["b" /* yfny */].socialMedia.hashtag, "/ ", __WEBPACK_IMPORTED_MODULE_1__utils_info__["b" /* yfny */].socialMedia.nametag), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_1__utils_info__["a" /* rcny */].email), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.socialMediaGroup,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
    style: styles.socialMediaIcon,
    icon: __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_brands_svg_icons__["faFacebookSquare"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
    style: styles.socialMediaIcon,
    icon: __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_brands_svg_icons__["faInstagram"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__fortawesome_react_fontawesome__["FontAwesomeIcon"], {
    style: styles.socialMediaIcon,
    icon: __WEBPACK_IMPORTED_MODULE_4__fortawesome_free_brands_svg_icons__["faTwitterSquare"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: styles.yfnyLogo,
    src: __WEBPACK_IMPORTED_MODULE_2__utils_images__["a" /* img */].yfnyLogoWhite.url,
    alt: __WEBPACK_IMPORTED_MODULE_2__utils_images__["a" /* img */].yfnyLogoWhite.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.importantInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    }
  }, "BY INVITATION ONLY. SEATING IS LIMITED."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    }
  }, "ADVANCE REGISTRATION REQUIRED."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, "REGISTRATIONS ARE SCREENED.")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.rcnyCopyright,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, "\xA9 ", new Date().getFullYear(), "\xA0", __WEBPACK_IMPORTED_MODULE_1__utils_info__["a" /* rcny */].name.toUpperCase()), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: styles.rcnyLogo,
    src: __WEBPACK_IMPORTED_MODULE_2__utils_images__["a" /* img */].rcnyLogoWhite.url,
    alt: __WEBPACK_IMPORTED_MODULE_2__utils_images__["a" /* img */].rcnyLogoWhite.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.webDevSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, "web dev //", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: styles.webDevLink,
    target: "_blank",
    href: "http://olegchursin.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, "\xA0oleg chursin")));
});

/***/ }),

/***/ "./components/HomePageConsulate.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_divider_style_css__ = __webpack_require__("antd/lib/divider/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_divider_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_divider_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_divider__ = __webpack_require__("antd/lib/divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_styles__ = __webpack_require__("./utils/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_images__ = __webpack_require__("./utils/images.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RegistrationButton__ = __webpack_require__("./components/RegistrationButton.jsx");


var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/HomePageConsulate.jsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var styles = {
  cta: {
    margin: '40px 0'
  },
  divider: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__utils_styles__["b" /* typography */].paragraph, {
    fontSize: '1.5em',
    fontWeight: 400
  }),
  consulateMap: {
    maxWidth: '60%',
    margin: '20px 0 40px'
  },
  consulateSectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
    minHeight: '90vh',
    fontFamily: 'Rubik'
  },
  paragraph: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__utils_styles__["b" /* typography */].paragraph)
};

var HomePageConsulate = function HomePageConsulate() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: styles.consulateSectionWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "\u041C\u041E\u041B\u041E\u0414\u0415\u0416\u041D\u042B\u0419 \u0424\u041E\u0420\u0423\u041C \u0412 \u041D\u042C\u042E-\u0419\u041E\u0420\u041A\u0415"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "\u0411\u0443\u0434\u0443\u0449\u0435\u0435 \u0440\u0443\u0441\u0441\u043A\u043E-\u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0441\u043A\u043E\u0439 \u043C\u043E\u043B\u043E\u0434\u0435\u0436\u0438 \u0421\u0428\u0410"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default.a, {
    style: styles.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "\u041C\u0435\u0441\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    style: styles.paragraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    href: "https://newyork.mid.ru//",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0441\u0442\u0432\u043E \u0420\u043E\u0441\u0441\u0438\u0438 \u0432 \u041D\u044C\u044E-\u0419\u043E\u0440\u043A\u0435")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    style: styles.paragraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, "Consulate-General of Russia in New York City: 9 E 91Street, New York, NY 10128"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
    style: styles.consulateMap,
    src: __WEBPACK_IMPORTED_MODULE_4__utils_images__["a" /* img */].consulateMap.url,
    alt: __WEBPACK_IMPORTED_MODULE_4__utils_images__["a" /* img */].consulateMap.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    style: styles.paragraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0441\u0442\u0432\u043E \u0420\u043E\u0441\u0441\u0438\u0438 \u0432 \u041D\u044C\u044E-\u0419\u043E\u0440\u043A\u0435 \u0440\u0430\u0441\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043E \u0432 \u043A\u0440\u0430\u0441\u0438\u0432\u0435\u0439\u0448\u0435\u043C \u043E\u0441\u043E\u0431\u043D\u044F\u043A\u0435 The John Henry Hammond House, \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u043C \u0432 1903 \u0433\u043E\u0434\u0443 \u0441\u0442\u0438\u043B\u0435 \u043F\u043E\u0437\u0434\u043D\u0435\u0433\u043E \u0440\u0435\u043D\u0435\u0441\u0441\u0430\u043D\u0441\u0430 \u043D\u0430 \u043F\u0440\u0435\u0441\u0442\u0438\u0436\u043D\u043E\u0439 91 \u0443\u043B\u0438\u0446\u0435 \u041C\u0430\u043D\u0445\u044D\u0442\u0442\u0435\u043D\u0430. \u042D\u0442\u043E \u043F\u044F\u0442\u0438\u044D\u0442\u0430\u0436\u043D\u043E\u0435 \u0437\u0434\u0430\u043D\u0438\u0435, \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u043E\u0435 \u0432 \u0441\u043F\u0438\u043B\u0435 \u044D\u043F\u043E\u0445\u0438 \u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F, \u0431\u044B\u043B\u043E \u0441\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u041A\u0430\u0440\u0440\u0435\u0440\u043E\u043C \u0438 \u0413\u0430\u0441\u0442\u0438\u043D\u0433\u0441\u043E\u043C, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u0430\u043A\u0436\u0435 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043B\u0438 \u0434\u0438\u0437\u0430\u0439\u043D \u041D\u044C\u044E-\u0439\u043E\u0440\u043A\u0441\u043A\u043E\u0439 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438. \u042D\u0442\u043E\u0442 \u043E\u0441\u043E\u0431\u043D\u044F\u043A \u0441 \u0434\u0435\u0442\u0430\u043B\u044F\u043C\u0438 \u0438\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u043E\u0433\u043E \u043F\u0430\u043B\u0430\u0446\u0446\u043E 16 \u0438 18 \u0432\u0435\u043A\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u0438\u043C \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u043B\u0443\u0447\u0448\u0438\u0445 \u043C\u0430\u043D\u0445\u044D\u0442\u0442\u0435\u043D\u0441\u043A\u0438\u0445 \u0442\u0430\u0443\u043D\u0445\u0430\u0443\u0441\u043E\u0432. \u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043E\u0431\u043E\u0439 \u0431\u043E\u0433\u0430\u0442\u0443\u044E \u0441\u0435\u0440\u0438\u044E \u043A\u043E\u043C\u043D\u0430\u0442 \u0432 \u0441\u0442\u0438\u043B\u0435 \u041B\u044E\u0434\u043E\u0432\u0438\u043A\u0430 XVI \u0441 \u0438\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u044B\u043C\u0438 \u043C\u0440\u0430\u043C\u043E\u0440\u0430\u043C\u0438, \u0440\u0435\u0437\u044C\u0431\u043E\u0439, \u0433\u043E\u0431\u0435\u043B\u0435\u043D\u0430\u043C\u0438 \u0438 \u043C\u0435\u0431\u0435\u043B\u044C\u044E."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: styles.cta,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RegistrationButton__["a" /* default */], {
    title: 'Зарегистрироваться',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (HomePageConsulate);

/***/ }),

/***/ "./components/HomePageHero.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_images__ = __webpack_require__("./utils/images.js");
var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/HomePageHero.jsx";


var styles = {
  hero: {
    padding: 40,
    height: '60vh',
    background: 'linear-gradient(145deg, #08AEEA 0%, #2AF598 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  heroImage: {
    width: 300
  }
};

var HomePageHero = function HomePageHero() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: styles.hero,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    style: styles.heroImage,
    src: __WEBPACK_IMPORTED_MODULE_1__utils_images__["a" /* img */].yfny2018.url,
    alt: __WEBPACK_IMPORTED_MODULE_1__utils_images__["a" /* img */].yfny2018.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (HomePageHero);

/***/ }),

/***/ "./components/HomePageInfo.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_divider_style_css__ = __webpack_require__("antd/lib/divider/style/css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_divider_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_divider_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_divider__ = __webpack_require__("antd/lib/divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_info__ = __webpack_require__("./utils/info.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_styles__ = __webpack_require__("./utils/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RegistrationButton__ = __webpack_require__("./components/RegistrationButton.jsx");


var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/HomePageInfo.jsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var styles = {
  about: {
    marginTop: 20
  },
  divider: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4__utils_styles__["b" /* typography */].paragraph, {
    fontSize: '1.5em',
    fontWeight: 400
  }),
  infoSectionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40,
    minHeight: '90vh',
    fontFamily: 'Rubik'
  },
  organizers: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40px 0'
  },
  paragraph: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_4__utils_styles__["b" /* typography */].paragraph)
};

var HomePageInfo = function HomePageInfo() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: styles.infoSectionWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "\u041C\u041E\u041B\u041E\u0414\u0415\u0416\u041D\u042B\u0419 \u0424\u041E\u0420\u0423\u041C \u0412 \u041D\u042C\u042E-\u0419\u041E\u0420\u041A\u0415"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default.a, {
    style: styles.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "\u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    style: styles.paragraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "\u041F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u0435\u043C \u0432\u0430\u0441 \u043D\u0430 \u0434\u0438\u0441\u043A\u0443\u0441\u0441\u0438\u044E \u043E \u0431\u0443\u0434\u0443\u0449\u0435\u043C \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0439 \u043C\u043E\u043B\u043E\u0434\u0435\u0436\u0438 \u0432 \u0421\u0428\u0410, \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u0438\u0441\u0442\u043E\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u043D\u0430\u0441\u043B\u0435\u0434\u0438\u044F \u0438 \u043F\u043E\u043F\u0443\u043B\u044F\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u044B \u0438 \u044F\u0437\u044B\u043A\u0430, \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0435 \u0438 \u043A\u043E\u043D\u0441\u043E\u043B\u0438\u0434\u0430\u0446\u0438\u0438 \u043C\u043E\u043B\u043E\u0434\u0435\u0436\u0438."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    style: styles.paragraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, "\u041D\u0430 \u0444\u043E\u0440\u0443\u043C\u0435 \u043F\u0440\u043E\u0445\u043E\u0434\u044F\u0442 \u0434\u0438\u0441\u043A\u0443\u0441\u0441\u0438\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u044F\u0437\u044B\u043A\u0435: \u043F\u043B\u0435\u043D\u0430\u0440\u043D\u044B\u0435 \u0441\u0435\u0441\u0441\u0438\u0438, \u043F\u0430\u043D\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u0438\u0441\u043A\u0443\u0441\u0441\u0438\u0438 \u0438 \u043F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0439 \u043C\u043E\u043B\u043E\u0434\u0435\u0436\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432. \u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0444\u043E\u0440\u0443\u043C\u0430 - \u044D\u0442\u043E \u043C\u043E\u043B\u043E\u0434\u0435\u0436\u043D\u044B\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0443\u0441\u0441\u043A\u0438\u0445 \u0430\u043C\u0435\u0440\u0438\u043A\u0430\u043D\u0446\u0435\u0432, \u0441\u0442\u0443\u0434\u0435\u043D\u0442\u044B, \u043C\u043E\u043B\u043E\u0434\u044B\u0435 \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B \u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u0430\u044F \u0438\u043D\u0442\u0435\u043B\u043B\u0438\u0433\u0435\u043D\u0446\u0438\u044F. \u041D\u0430 \u0444\u043E\u0440\u0443\u043C\u0435 \u0432\u044B\u0441\u0442\u0443\u043F\u044F\u0442 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u041C\u0418\u0414 \u0420\u043E\u0441\u0441\u0438\u0438, \u041F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u041C\u043E\u0441\u043A\u0432\u044B, \u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E \u0441\u043E\u0432\u0435\u0442\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0439 \u0440\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u0438\u0445 \u0441\u043E\u043E\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u0421\u0428\u0410 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043E\u0431\u044A\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u0439 \u0441\u043E\u043E\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u043E\u0432, \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u044E\u0449\u0438\u0445 \u0432 \u0421\u0428\u0410, \u0434\u0443\u0445\u043E\u0432\u0435\u043D\u0441\u0442\u0432\u043E, \u0432\u043B\u0438\u044F\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0441\u043E\u043E\u0442\u0435\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u0438\u043A\u0438 \u0438 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B, \u0432\u0435\u0434\u0443\u0449\u0438\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u044D\u043C\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0440\u0430\u0437\u043D\u044B\u0445 \u0432\u043E\u043B\u043D, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043C\u0435\u0441\u0442\u043D\u044B\u0445 \u043E\u0440\u0433\u0430\u043D\u043E\u0432 \u0432\u043B\u0430\u0441\u0442\u0438."), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    style: styles.organizers,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_divider___default.a, {
    style: styles.divider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, "\u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u044B"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }, "\u0424\u043E\u0440\u0443\u043C \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    style: styles.paragraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    href: __WEBPACK_IMPORTED_MODULE_3__utils_info__["a" /* rcny */].website,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, "\u0420\u0443\u0441\u0441\u043A\u0438\u043C \u0446\u0435\u043D\u0442\u0440\u043E\u043C \u0432 \u041D\u044C\u044E-\u0419\u043E\u0440\u043A\u0435 (Russian Center NY)")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, "\u043F\u043E\u0434 \u044D\u0433\u0438\u0434\u043E\u0439"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("p", {
    style: styles.paragraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    href: "https://washington.mid.ru/en/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "\u041F\u043E\u0441\u043E\u043B\u044C\u0441\u0442\u0432\u0430"), "\xA0\u0438\xA0", __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("a", {
    href: "https://newyork.mid.ru//",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u0424 \u0432 \u041D\u044C\u044E-\u0419\u043E\u0440\u043A\u0435"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__RegistrationButton__["a" /* default */], {
    title: 'Зарегистрироваться',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (HomePageInfo);

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
  href: "/presentations",
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
}, "\u041F\u0440\u0435\u0437\u0435\u043D\u0442\u0430\u0446\u0438\u0438"))), __WEBPACK_IMPORTED_MODULE_10_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_antd_lib_menu___default.a.Item, {
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_styles__ = __webpack_require__("./utils/styles.js");


var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/RegistrationButton.jsx";


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var styles = {
  registrationButton: _objectSpread({}, __WEBPACK_IMPORTED_MODULE_3__utils_styles__["b" /* typography */].lightSmallText, {
    borderRadius: '50px',
    margin: '0 40px 0 20px'
  })
};

var RegistrationButton = function RegistrationButton(_ref) {
  var title = _ref.title;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_button___default.a, {
    type: "primary",
    style: styles.registrationButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, title);
};

/* harmony default export */ __webpack_exports__["a"] = (RegistrationButton);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__("./components/Layout.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_HomePageHero__ = __webpack_require__("./components/HomePageHero.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_HomePageInfo__ = __webpack_require__("./components/HomePageInfo.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_DateCallToAction__ = __webpack_require__("./components/DateCallToAction.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_HomePageConsulate__ = __webpack_require__("./components/HomePageConsulate.jsx");
var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/pages/index.js";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_HomePageHero__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_HomePageInfo__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_DateCallToAction__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_HomePageConsulate__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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

/***/ "antd/lib/divider":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ "antd/lib/divider/style/css":
/***/ (function(module, exports) {

module.exports = require("antd/lib/divider/style/css");

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
//# sourceMappingURL=index.js.map