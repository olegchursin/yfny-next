webpackHotUpdate(7,{

/***/ "./components/ProgramInfo.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__ = __webpack_require__("./node_modules/antd/lib/icon/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_icon_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__ = __webpack_require__("./node_modules/antd/lib/icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_timeline_style_css__ = __webpack_require__("./node_modules/antd/lib/timeline/style/css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_timeline_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_timeline_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline__ = __webpack_require__("./node_modules/antd/lib/timeline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);




var _jsxFileName = "/Users/oc/dev/rcny/yfny-next/components/ProgramInfo.jsx";


var ProgramInfo = function ProgramInfo() {
  return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline___default.a, {
    mode: "alternate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "Create a services site 2015-09-01"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline___default.a.Item, {
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Solve initial network problems 2015-09-01"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline___default.a.Item, {
    dot: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
      type: "clock-circle-o",
      style: {
        fontSize: '16px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline___default.a.Item, {
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "Network problems being solved 2015-09-01"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline___default.a.Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "Create a services site 2015-09-01"), __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_antd_lib_timeline___default.a.Item, {
    dot: __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_antd_lib_icon___default.a, {
      type: "clock-circle-o",
      style: {
        fontSize: '16px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Technical testing 2015-09-01"));
};

/* harmony default export */ __webpack_exports__["a"] = (ProgramInfo);

/***/ }),

/***/ "./node_modules/antd/lib/timeline/Timeline.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/toConsumableArray.js");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _TimelineItem = __webpack_require__("./node_modules/antd/lib/timeline/TimelineItem.js");

var _TimelineItem2 = _interopRequireDefault(_TimelineItem);

var _icon = __webpack_require__("./node_modules/antd/lib/icon/index.js");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Timeline = function (_React$Component) {
    (0, _inherits3['default'])(Timeline, _React$Component);

    function Timeline() {
        (0, _classCallCheck3['default'])(this, Timeline);
        return (0, _possibleConstructorReturn3['default'])(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).apply(this, arguments));
    }

    (0, _createClass3['default'])(Timeline, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                _a$pending = _a.pending,
                pending = _a$pending === undefined ? null : _a$pending,
                pendingDot = _a.pendingDot,
                children = _a.children,
                className = _a.className,
                reverse = _a.reverse,
                mode = _a.mode,
                restProps = __rest(_a, ["prefixCls", "pending", "pendingDot", "children", "className", "reverse", "mode"]);
            var pendingNode = typeof pending === 'boolean' ? null : pending;
            var classString = (0, _classnames2['default'])(prefixCls, (_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-pending', !!pending), (0, _defineProperty3['default'])(_classNames, prefixCls + '-reverse', !!reverse), (0, _defineProperty3['default'])(_classNames, prefixCls + '-' + mode, !!mode), _classNames), className);
            var pendingItem = !!pending ? React.createElement(
                _TimelineItem2['default'],
                { pending: !!pending, dot: pendingDot || React.createElement(_icon2['default'], { type: 'loading' }) },
                pendingNode
            ) : null;
            var timeLineItems = !!reverse ? [pendingItem].concat((0, _toConsumableArray3['default'])(React.Children.toArray(children).reverse())) : [].concat((0, _toConsumableArray3['default'])(React.Children.toArray(children)), [pendingItem]);
            // Remove falsy items
            var truthyItems = timeLineItems.filter(function (item) {
                return !!item;
            });
            var itemsCount = React.Children.count(truthyItems);
            var lastCls = prefixCls + '-item-last';
            var items = React.Children.map(truthyItems, function (ele, idx) {
                return React.cloneElement(ele, {
                    className: (0, _classnames2['default'])([ele.props.className, !reverse && !!pending ? idx === itemsCount - 2 ? lastCls : '' : idx === itemsCount - 1 ? lastCls : '', mode === 'alternate' ? idx % 2 === 0 ? prefixCls + '-item-left' : prefixCls + '-item-right' : mode === 'right' ? prefixCls + '-item-right' : ''])
                });
            });
            return React.createElement(
                'ul',
                (0, _extends3['default'])({}, restProps, { className: classString }),
                items
            );
        }
    }]);
    return Timeline;
}(React.Component);

exports['default'] = Timeline;

Timeline.Item = _TimelineItem2['default'];
Timeline.defaultProps = {
    prefixCls: 'ant-timeline',
    reverse: false,
    mode: ''
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/timeline/TimelineItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/index.js");

var React = _interopRequireWildcard(_react);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var TimelineItem = function (_React$Component) {
    (0, _inherits3['default'])(TimelineItem, _React$Component);

    function TimelineItem() {
        (0, _classCallCheck3['default'])(this, TimelineItem);
        return (0, _possibleConstructorReturn3['default'])(this, (TimelineItem.__proto__ || Object.getPrototypeOf(TimelineItem)).apply(this, arguments));
    }

    (0, _createClass3['default'])(TimelineItem, [{
        key: 'render',
        value: function render() {
            var _classNames, _classNames2;

            var _a = this.props,
                prefixCls = _a.prefixCls,
                className = _a.className,
                _a$color = _a.color,
                color = _a$color === undefined ? '' : _a$color,
                children = _a.children,
                pending = _a.pending,
                dot = _a.dot,
                restProps = __rest(_a, ["prefixCls", "className", "color", "children", "pending", "dot"]);
            var itemClassName = (0, _classnames2['default'])((_classNames = {}, (0, _defineProperty3['default'])(_classNames, prefixCls + '-item', true), (0, _defineProperty3['default'])(_classNames, prefixCls + '-item-pending', pending), _classNames), className);
            var dotClassName = (0, _classnames2['default'])((_classNames2 = {}, (0, _defineProperty3['default'])(_classNames2, prefixCls + '-item-head', true), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-item-head-custom', dot), (0, _defineProperty3['default'])(_classNames2, prefixCls + '-item-head-' + color, true), _classNames2));
            return React.createElement(
                'li',
                (0, _extends3['default'])({}, restProps, { className: itemClassName }),
                React.createElement('div', { className: prefixCls + '-item-tail' }),
                React.createElement(
                    'div',
                    { className: dotClassName, style: { borderColor: /blue|red|green/.test(color) ? undefined : color } },
                    dot
                ),
                React.createElement(
                    'div',
                    { className: prefixCls + '-item-content' },
                    children
                )
            );
        }
    }]);
    return TimelineItem;
}(React.Component);

exports['default'] = TimelineItem;

TimelineItem.defaultProps = {
    prefixCls: 'ant-timeline',
    color: 'blue',
    pending: false
};
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/timeline/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Timeline = __webpack_require__("./node_modules/antd/lib/timeline/Timeline.js");

var _Timeline2 = _interopRequireDefault(_Timeline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Timeline2['default'];
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/timeline/style/css.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./node_modules/antd/lib/style/index.css");

__webpack_require__("./node_modules/antd/lib/timeline/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/timeline/style/index.css":
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1536709545346");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=7.c6970bb7a1cb434d95db.hot-update.js.map