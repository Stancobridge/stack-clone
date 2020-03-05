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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/stackoverflow/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/stackoverflow/firebase/config.js":
/*!**********************************************!*\
  !*** ./src/stackoverflow/firebase/config.js ***!
  \**********************************************/
/*! exports provided: fireBaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fireBaseConfig\", function() { return fireBaseConfig; });\n/**\n * Configure fireBase\n */\n\nconst fireBaseConfig = {\n  apiKey: \"AIzaSyB8gDXRw67_TVzQdhagUCjPUprDv340gLU\",\n  authDomain: \"stack-overflow-clone-b8304.firebaseapp.com\",\n  databaseURL: \"https://stack-overflow-clone-b8304.firebaseio.com\",\n  projectId: \"stack-overflow-clone-b8304\",\n  storageBucket: \"stack-overflow-clone-b8304.appspot.com\",\n  messagingSenderId: \"184525638673\",\n  appId: \"1:184525638673:web:b5f7ecb5dcf1e3dd2af5b0\",\n  measurementId: \"G-3DNGYS1SJ6\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhY2tvdmVyZmxvdy9maXJlYmFzZS9jb25maWcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RhY2tvdmVyZmxvdy9maXJlYmFzZS9jb25maWcuanM/NWFhNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbmZpZ3VyZSBmaXJlQmFzZVxuICovXG5cbmV4cG9ydCBjb25zdCBmaXJlQmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUI4Z0RYUnc2N19UVnpRZGhhZ1VDalBVcHJEdjM0MGdMVVwiLFxuICBhdXRoRG9tYWluOiBcInN0YWNrLW92ZXJmbG93LWNsb25lLWI4MzA0LmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3N0YWNrLW92ZXJmbG93LWNsb25lLWI4MzA0LmZpcmViYXNlaW8uY29tXCIsXG4gIHByb2plY3RJZDogXCJzdGFjay1vdmVyZmxvdy1jbG9uZS1iODMwNFwiLFxuICBzdG9yYWdlQnVja2V0OiBcInN0YWNrLW92ZXJmbG93LWNsb25lLWI4MzA0LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjE4NDUyNTYzODY3M1wiLFxuICBhcHBJZDogXCIxOjE4NDUyNTYzODY3Mzp3ZWI6YjVmN2VjYjVkY2YxZTNkZDJhZjViMFwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctM0ROR1lTMVNKNlwiXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/stackoverflow/firebase/config.js\n");

/***/ }),

/***/ "./src/stackoverflow/firebase/index.js":
/*!*********************************************!*\
  !*** ./src/stackoverflow/firebase/index.js ***!
  \*********************************************/
/*! exports provided: initFirebase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initFirebase\", function() { return initFirebase; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/stackoverflow/firebase/config.js\");\n\n\n// Function to Initialize firebase\nfunction initFirebase() {\n\n  firebase.initializeApp(_config__WEBPACK_IMPORTED_MODULE_0__[\"fireBaseConfig\"]);\n\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhY2tvdmVyZmxvdy9maXJlYmFzZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGFja292ZXJmbG93L2ZpcmViYXNlL2luZGV4LmpzPzBmZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZUJhc2VDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuLy8gRnVuY3Rpb24gdG8gSW5pdGlhbGl6ZSBmaXJlYmFzZVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGaXJlYmFzZSgpIHtcblxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGZpcmVCYXNlQ29uZmlnKTtcblxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stackoverflow/firebase/index.js\n");

/***/ }),

/***/ "./src/stackoverflow/index.js":
/*!************************************!*\
  !*** ./src/stackoverflow/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase/index */ \"./src/stackoverflow/firebase/index.js\");\n\n\n// Start firebase\nObject(_firebase_index__WEBPACK_IMPORTED_MODULE_0__[\"initFirebase\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhY2tvdmVyZmxvdy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGFja292ZXJmbG93L2luZGV4LmpzPzRkMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbml0RmlyZWJhc2V9IGZyb20gXCIuL2ZpcmViYXNlL2luZGV4XCJcblxuLy8gU3RhcnQgZmlyZWJhc2VcbmluaXRGaXJlYmFzZSgpIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/stackoverflow/index.js\n");

/***/ })

/******/ });