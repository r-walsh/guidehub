/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _navBar = __webpack_require__(7);

	var _navBar2 = _interopRequireDefault(_navBar);

	var _welcomeSplash = __webpack_require__(8);

	var _welcomeSplash2 = _interopRequireDefault(_welcomeSplash);

	var _landingPageSearch = __webpack_require__(9);

	var _landingPageSearch2 = _interopRequireDefault(_landingPageSearch);

	var _footer = __webpack_require__(11);

	var _footer2 = _interopRequireDefault(_footer);

	__webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Component imports

	// Style Import for Webpack

	// Creating the Main component

	var Main = function (_React$Component) {
		_inherits(Main, _React$Component);

		function Main() {
			_classCallCheck(this, Main);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
		}

		_createClass(Main, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'div',
						{ id: 'wrapper' },
						React.createElement(_navBar2.default, null),
						React.createElement(_welcomeSplash2.default, null),
						React.createElement(_landingPageSearch2.default, null)
					),
					React.createElement(_footer2.default, null)
				);
			}
		}]);

		return Main;
	}(React.Component);

	;

	// Render the Main component if the element has loaded
	var documentReady = function documentReady() {
		var reactNode = document.getElementById('react-node');

		if (reactNode) {
			ReactDOM.render(React.createElement(Main, null), reactNode);
		}
	};
	documentReady();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavBar = function (_React$Component) {
		_inherits(NavBar, _React$Component);

		function NavBar() {
			_classCallCheck(this, NavBar);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(NavBar).apply(this, arguments));
		}

		_createClass(NavBar, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"nav",
					{ className: "nav-bar" },
					React.createElement("img", { src: "../assets/img/logo.png", className: "logo" }),
					React.createElement(
						"ul",
						{ className: "nav-list" },
						React.createElement(
							"li",
							{ className: "nav-item" },
							React.createElement(
								"a",
								{ href: "/" },
								"Browse"
							)
						),
						React.createElement(
							"li",
							{ className: "nav-item" },
							React.createElement(
								"a",
								{ href: "/" },
								"Login"
							)
						)
					)
				);
			}
		}]);

		return NavBar;
	}(React.Component);

	exports.default = NavBar;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WelcomeSplash = function (_React$Component) {
		_inherits(WelcomeSplash, _React$Component);

		function WelcomeSplash() {
			_classCallCheck(this, WelcomeSplash);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(WelcomeSplash).apply(this, arguments));
		}

		_createClass(WelcomeSplash, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "splash-wrapper" },
					React.createElement(
						"article",
						{ className: "splash-text-box" },
						React.createElement(
							"h1",
							{ className: "splash-header" },
							"Guides",
							React.createElement("br", null),
							"for Programming"
						),
						React.createElement(
							"p",
							{ className: "splash-text" },
							"Step by step guides written by professionals in the industry. These guides are easy to follow, feature code snippets, and are updated regularly to utilize the latest build systems, modules, and more. Want to contribute? Sign up and start writing your own guide!"
						)
					),
					React.createElement(
						"div",
						{ className: "splash-image-box" },
						React.createElement("img", { src: "../assets/img/splash-code-snippet.png" })
					)
				);
			}
		}]);

		return WelcomeSplash;
	}(React.Component);

	exports.default = WelcomeSplash;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _searchBar = __webpack_require__(10);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LandingPageSearch = function (_React$Component) {
		_inherits(LandingPageSearch, _React$Component);

		function LandingPageSearch() {
			_classCallCheck(this, LandingPageSearch);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(LandingPageSearch).apply(this, arguments));
		}

		_createClass(LandingPageSearch, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "landing-page-search" },
					React.createElement(
						"div",
						{ className: "search-text-box" },
						React.createElement(
							"h2",
							null,
							"Search for a guide..."
						),
						React.createElement(
							"p",
							null,
							"We have guides on everything programming related. Check it out."
						)
					),
					React.createElement(
						"button",
						{ className: "home-search" },
						"Search"
					),
					React.createElement(
						"div",
						{ className: "search-bar-wrapper-home" },
						React.createElement(_searchBar2.default, null)
					)
				);
			}
		}]);

		return LandingPageSearch;
	}(React.Component);

	exports.default = LandingPageSearch;
	;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchBar = function (_React$Component) {
		_inherits(SearchBar, _React$Component);

		function SearchBar() {
			_classCallCheck(this, SearchBar);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).apply(this, arguments));
		}

		_createClass(SearchBar, [{
			key: "render",
			value: function render() {
				return React.createElement("input", { className: "search-bar", placeholder: "ex. D3.js tutorial..." });
			}
		}]);

		return SearchBar;
	}(React.Component);

	exports.default = SearchBar;
	;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Footer = function (_React$Component) {
		_inherits(Footer, _React$Component);

		function Footer() {
			_classCallCheck(this, Footer);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
		}

		_createClass(Footer, [{
			key: "render",
			value: function render() {
				return React.createElement("footer", { className: "footer" });
			}
		}]);

		return Footer;
	}(React.Component);

	exports.default = Footer;
	;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./main.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Josefin+Sans:400,400italic,300,700);", ""]);

	// module
	exports.push([module.id, ".html,\nbody {\n  font-family: 'Josefin Sans', sans-serif;\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n  background-color: #282c35;\n}\n#wrapper {\n  min-height: 100%;\n  padding-bottom: 70px;\n}\n.logo {\n  display: inline-block;\n  width: 200px;\n  margin-top: 7px;\n  opacity: .72;\n}\n.nav-bar {\n  height: 65px;\n  background-color: #c1cfff;\n  border-bottom-left-radius: 2px;\n  border-bottom-right-radius: 2px;\n}\n.nav-list {\n  list-style-type: none;\n  display: inline-block;\n  float: right;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n.nav-item {\n  float: right;\n  margin-right: 35px;\n  margin-top: 24px;\n  color: #202022;\n  font-size: 1.15em;\n  font-weight: bold;\n}\n.nav-item a {\n  text-decoration: none;\n}\n.nav-item a:visited {\n  color: #202022;\n}\n.nav-item a:hover {\n  text-decoration: underline;\n}\n.splash-wrapper {\n  width: 85%;\n  height: 100%;\n  margin: 25px auto;\n}\n.splash-text-box {\n  box-sizing: border-box;\n  background-color: #2c3039;\n  height: 350px;\n  width: 48%;\n  border-radius: 6px;\n  display: inline-block;\n  margin-top: 20px;\n  padding: 20px 50px 0 20px;\n}\n.splash-header {\n  color: #dd8fff;\n  font-size: 2.5em;\n  margin: 10px 0 20px 0;\n  padding: 0;\n}\n.splash-text {\n  color: #c5c6ca;\n  font-size: 1.3em;\n  font-weight: bold;\n  line-height: 1.35em;\n  margin: 0;\n  padding: 0;\n}\n.splash-image-box {\n  width: 48%;\n  float: right;\n}\n.splash-image-box img {\n  width: 100%;\n  margin-top: 35px;\n  opacity: .8;\n}\n.landing-page-search {\n  height: 150px;\n  width: 85%;\n  margin: 0 auto;\n  background-color: #c5c6ca;\n  border-radius: 10px;\n  margin-top: 40px;\n}\n.search-text-box {\n  display: inline-block;\n  height: 75%;\n  width: 350px;\n  margin: 37px 0 0 80px;\n}\n.search-text-box h2 {\n  font-size: 1.9em;\n  margin: 0;\n  padding: 0;\n}\n.search-text-box p {\n  font-size: 1.2em;\n  margin: 10px 0;\n  padding: 0;\n}\n.search-bar-wrapper-home {\n  width: 325px;\n  height: 60px;\n  display: inline-block;\n  margin: 45px 50px 0 0;\n  float: right;\n}\n.home-search {\n  font-family: 'Josefin Sans', sans-serif;\n  box-sizing: border-box;\n  float: right;\n  display: inline-block;\n  margin: 45px 50px 0 0;\n  width: 200px;\n  height: 60px;\n  border-radius: 6px;\n  border: 2px solid #282c35;\n  background-color: #4d485d;\n  color: white;\n  font-size: 1.2em;\n  cursor: pointer;\n}\n.home-search:hover {\n  background-color: #c1cfff;\n  color: #282c35;\n}\n.search-bar {\n  box-sizing: border-box;\n  padding: 20px;\n  height: 60px;\n  width: 100%;\n  border: none;\n  border-radius: 5px;\n  font-size: 1.1em;\n  font-family: 'Josefin Sans', sans-serif;\n}\n::-webkit-input-placeholder {\n  /* WebKit, Blink, Edge */\n  font-family: 'Josefin Sans', sans-serif;\n}\n:-moz-placeholder {\n  /* Mozilla Firefox 4 to 18 */\n  font-family: 'Josefin Sans', sans-serif;\n  opacity: 1;\n}\n::-moz-placeholder {\n  /* Mozilla Firefox 19+ */\n  font-family: 'Josefin Sans', sans-serif;\n  opacity: 1;\n}\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  font-family: 'Josefin Sans', sans-serif;\n}\n:placeholder-shown {\n  /* Standard (https://drafts.csswg.org/selectors-4/#placeholder) */\n  font-family: 'Josefin Sans', sans-serif;\n}\n.footer {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  height: 70px;\n  width: 100%;\n  background-color: #202022;\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);