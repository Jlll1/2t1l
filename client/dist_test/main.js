/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Test": () => (/* binding */ Test),
/* harmony export */   "AssertionError": () => (/* binding */ AssertionError),
/* harmony export */   "Assert": () => (/* binding */ Assert)
/* harmony export */ });
/* harmony import */ var _example_test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _JoiningRoom_test__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


var Test = /** @class */ (function () {
    function Test() {
    }
    Test.case = function (name, test) {
        try {
            console.log("=== Running ".concat(name, "..."));
            test();
        }
        catch (err) {
            if (err instanceof AssertionError) {
                console.log("=== Test Failed! = ".concat(name, " =\n") +
                    "= ".concat(err.message, "\n") +
                    "===");
            }
            else {
                throw err;
            }
        }
    };
    return Test;
}());

var AssertionError = /** @class */ (function () {
    function AssertionError(message) {
        this.message = message;
    }
    return AssertionError;
}());

var Assert = /** @class */ (function () {
    function Assert() {
    }
    Assert.equal = function (actual, expected) {
        if (expected === actual) {
            return;
        }
        throw new AssertionError("Expected value to be <<".concat(expected, ">>, but got <<").concat(actual, ">>."));
    };
    return Assert;
}());

/* Register Test Classes */
new _example_test__WEBPACK_IMPORTED_MODULE_0__.ExampleTest();
new _JoiningRoom_test__WEBPACK_IMPORTED_MODULE_1__.JoiningRoomTest();


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleTest": () => (/* binding */ ExampleTest)
/* harmony export */ });
/* harmony import */ var _TestRunner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

var ExampleTest = /** @class */ (function () {
    function ExampleTest() {
        _TestRunner__WEBPACK_IMPORTED_MODULE_0__.Test["case"]('pass', function () {
            _TestRunner__WEBPACK_IMPORTED_MODULE_0__.Assert.equal(1 + 1, 2);
        });
        _TestRunner__WEBPACK_IMPORTED_MODULE_0__.Test["case"]("Should fail", function () {
            _TestRunner__WEBPACK_IMPORTED_MODULE_0__.Assert.equal(1 + 1, 3);
        });
    }
    return ExampleTest;
}());



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoiningRoomTest": () => (/* binding */ JoiningRoomTest)
/* harmony export */ });
/* harmony import */ var _src_App_ViewModel_JoinRoomViewModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _TestRunner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


var JoiningRoomTest = /** @class */ (function () {
    function JoiningRoomTest() {
        _TestRunner__WEBPACK_IMPORTED_MODULE_1__.Test["case"]('JoningRoom: When I pass no Id, a new room should be created', function () {
            var sut = new _src_App_ViewModel_JoinRoomViewModel__WEBPACK_IMPORTED_MODULE_0__.JoinRoomViewModel();
        });
    }
    return JoiningRoomTest;
}());



/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoinRoomViewModel": () => (/* binding */ JoinRoomViewModel)
/* harmony export */ });
/* harmony import */ var _Framework_MessageChannel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Messages_JoinRoomRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);


var JoinRoomViewModel = /** @class */ (function () {
    function JoinRoomViewModel() {
        console.log('Hello');
    }
    JoinRoomViewModel.prototype.joinRoom = function (roomId, username) {
        _Framework_MessageChannel__WEBPACK_IMPORTED_MODULE_0__.MessageChannel.send(new _Messages_JoinRoomRequest__WEBPACK_IMPORTED_MODULE_1__.JoinRoomRequest(roomId, username));
    };
    return JoinRoomViewModel;
}());



/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageChannel": () => (/* binding */ MessageChannel)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var MessageChannel = /** @class */ (function () {
    function MessageChannel() {
    }
    MessageChannel.subscribe = function (messageType, handler) {
        var _b;
        var existingHandlers = (_b = MessageChannel.handlers.get(messageType)) !== null && _b !== void 0 ? _b : [];
        MessageChannel.handlers.set(messageType, __spreadArray(__spreadArray([], existingHandlers, true), [handler], false));
    };
    MessageChannel.send = function (message) {
        var _b;
        console.log(message.type, message);
        var handlers = (_b = MessageChannel.handlers.get(message.type)) !== null && _b !== void 0 ? _b : [];
        handlers.forEach(function (h) { return h(message); });
    };
    var _a;
    _a = MessageChannel;
    MessageChannel.ws = new WebSocket("ws://localhost:4444/app");
    MessageChannel.handlers = new Map([
        ['JoinRoomRequest', [(function (message) { _a.ws.send(JSON.stringify(message)); })]]
    ]);
    MessageChannel._ = (function () {
        _a.ws.addEventListener("message", function (ev) {
            var message = JSON.parse(ev.data);
            MessageChannel.send(message);
        });
    })();
    return MessageChannel;
}());



/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JoinRoomRequest": () => (/* binding */ JoinRoomRequest)
/* harmony export */ });
var JoinRoomRequest = /** @class */ (function () {
    function JoinRoomRequest(roomId, username) {
        this.type = 'JoinRoomRequest';
        this.roomId = roomId;
        this.username = username;
    }
    return JoinRoomRequest;
}());



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;