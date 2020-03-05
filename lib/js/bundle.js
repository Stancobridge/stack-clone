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

/***/ "./src/stackoverflow/auth/register.js":
/*!********************************************!*\
  !*** ./src/stackoverflow/auth/register.js ***!
  \********************************************/
/*! exports provided: registerUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerUser\", function() { return registerUser; });\n/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase/index */ \"./src/stackoverflow/firebase/index.js\");\n\n\n// initializing register auth\n\n// Demo register\nfunction registerUser(userRegisterDetails) {\n  const { email, password, user_details } = userRegisterDetails;\n\n  Object(_firebase_index__WEBPACK_IMPORTED_MODULE_0__[\"Auth\"])()\n    .createUserWithEmailAndPassword(email, password)\n    .then(userDetails => {\n      createUserProfile(userDetails.user.uid, user_details)\n    })\n    .catch(error => {\n      console.log(error);\n    });\n}\n\n\n\nfunction createUserProfile(user_id, user_details) {\n  console.log('Creating profile', user_id, user_details)\n  Object(_firebase_index__WEBPACK_IMPORTED_MODULE_0__[\"DB\"])().ref(\"user_profile/\" + user_id)\n  .set(user_details)\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhY2tvdmVyZmxvdy9hdXRoL3JlZ2lzdGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0YWNrb3ZlcmZsb3cvYXV0aC9yZWdpc3Rlci5qcz8xZTQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGggfSBmcm9tIFwiLi4vZmlyZWJhc2UvaW5kZXhcIjtcbmltcG9ydCB7IERCIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2luZGV4XCI7XG4vLyBpbml0aWFsaXppbmcgcmVnaXN0ZXIgYXV0aFxuXG4vLyBEZW1vIHJlZ2lzdGVyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKHVzZXJSZWdpc3RlckRldGFpbHMpIHtcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQsIHVzZXJfZGV0YWlscyB9ID0gdXNlclJlZ2lzdGVyRGV0YWlscztcblxuICBBdXRoKClcbiAgICAuY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgICAudGhlbih1c2VyRGV0YWlscyA9PiB7XG4gICAgICBjcmVhdGVVc2VyUHJvZmlsZSh1c2VyRGV0YWlscy51c2VyLnVpZCwgdXNlcl9kZXRhaWxzKVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJQcm9maWxlKHVzZXJfaWQsIHVzZXJfZGV0YWlscykge1xuICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgcHJvZmlsZScsIHVzZXJfaWQsIHVzZXJfZGV0YWlscylcbiAgREIoKS5yZWYoXCJ1c2VyX3Byb2ZpbGUvXCIgKyB1c2VyX2lkKVxuICAuc2V0KHVzZXJfZGV0YWlscylcbn1cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/stackoverflow/auth/register.js\n");

/***/ }),

/***/ "./src/stackoverflow/data/registerdata.js":
/*!************************************************!*\
  !*** ./src/stackoverflow/data/registerdata.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst registerData = {\n  email : \"dfdfgdfhgfhghgfsdsdfa@gmail.com\",\n  password: \"test_password\",\n  user_details: {\n    address: \"NO 7\",\n    first_name : \"Okechukwu\",\n    second_name : \"Okechukwu\",\n    age : 24,\n    country : \"Nigeria\",\n    state : \"Anambra\",\n    zip_code : 342342,\n    dob : \"23/4/1992\",\n    gender : \"Male\"\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (registerData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhY2tvdmVyZmxvdy9kYXRhL3JlZ2lzdGVyZGF0YS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGFja292ZXJmbG93L2RhdGEvcmVnaXN0ZXJkYXRhLmpzPzJkNTYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCByZWdpc3RlckRhdGEgPSB7XG4gIGVtYWlsIDogXCJkZmRmZ2RmaGdmaGdoZ2ZzZHNkZmFAZ21haWwuY29tXCIsXG4gIHBhc3N3b3JkOiBcInRlc3RfcGFzc3dvcmRcIixcbiAgdXNlcl9kZXRhaWxzOiB7XG4gICAgYWRkcmVzczogXCJOTyA3XCIsXG4gICAgZmlyc3RfbmFtZSA6IFwiT2tlY2h1a3d1XCIsXG4gICAgc2Vjb25kX25hbWUgOiBcIk9rZWNodWt3dVwiLFxuICAgIGFnZSA6IDI0LFxuICAgIGNvdW50cnkgOiBcIk5pZ2VyaWFcIixcbiAgICBzdGF0ZSA6IFwiQW5hbWJyYVwiLFxuICAgIHppcF9jb2RlIDogMzQyMzQyLFxuICAgIGRvYiA6IFwiMjMvNC8xOTkyXCIsXG4gICAgZ2VuZGVyIDogXCJNYWxlXCJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAgcmVnaXN0ZXJEYXRhOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/stackoverflow/data/registerdata.js\n");

/***/ }),

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
/*! exports provided: initFirebase, Auth, DB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initFirebase\", function() { return initFirebase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Auth\", function() { return Auth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DB\", function() { return DB; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/stackoverflow/firebase/config.js\");\n\n\n// Function to Initialize firebase\nfunction initFirebase() {\n  firebase.initializeApp(_config__WEBPACK_IMPORTED_MODULE_0__[\"fireBaseConfig\"]);\n}\n\n// Function to Initialize Athentication\nfunction Auth() {\n  return firebase.auth();\n}\n\n// Function to initiliaze Databse\nfunction DB() {\n  return firebase.database();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhY2tvdmVyZmxvdy9maXJlYmFzZS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGFja292ZXJmbG93L2ZpcmViYXNlL2luZGV4LmpzPzBmZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmlyZUJhc2VDb25maWcgfSBmcm9tIFwiLi9jb25maWdcIjtcblxuLy8gRnVuY3Rpb24gdG8gSW5pdGlhbGl6ZSBmaXJlYmFzZVxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGaXJlYmFzZSgpIHtcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlQmFzZUNvbmZpZyk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIEluaXRpYWxpemUgQXRoZW50aWNhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIEF1dGgoKSB7XG4gIHJldHVybiBmaXJlYmFzZS5hdXRoKCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGluaXRpbGlhemUgRGF0YWJzZVxuZXhwb3J0IGZ1bmN0aW9uIERCKCkge1xuICByZXR1cm4gZmlyZWJhc2UuZGF0YWJhc2UoKTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stackoverflow/firebase/index.js\n");

/***/ }),

/***/ "./src/stackoverflow/index.js":
/*!************************************!*\
  !*** ./src/stackoverflow/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase/index */ \"./src/stackoverflow/firebase/index.js\");\n/* harmony import */ var _auth_register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/register */ \"./src/stackoverflow/auth/register.js\");\n/* harmony import */ var _data_registerdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/registerdata */ \"./src/stackoverflow/data/registerdata.js\");\n\n\n// import { demoLogin } from \"./auth/login\"\n\n// Start firebase\n\nObject(_firebase_index__WEBPACK_IMPORTED_MODULE_0__[\"initFirebase\"])()\n\nObject(_auth_register__WEBPACK_IMPORTED_MODULE_1__[\"registerUser\"])(_data_registerdata__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RhY2tvdmVyZmxvdy9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdGFja292ZXJmbG93L2luZGV4LmpzPzRkMWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbml0RmlyZWJhc2V9IGZyb20gXCIuL2ZpcmViYXNlL2luZGV4XCJcbmltcG9ydCB7cmVnaXN0ZXJVc2VyfSBmcm9tIFwiLi9hdXRoL3JlZ2lzdGVyXCJcbi8vIGltcG9ydCB7IGRlbW9Mb2dpbiB9IGZyb20gXCIuL2F1dGgvbG9naW5cIlxuaW1wb3J0IHJlZ2lzdGVyRGF0YSBmcm9tIFwiLi9kYXRhL3JlZ2lzdGVyZGF0YVwiO1xuLy8gU3RhcnQgZmlyZWJhc2VcblxuaW5pdEZpcmViYXNlKClcblxucmVnaXN0ZXJVc2VyKHJlZ2lzdGVyRGF0YSlcblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stackoverflow/index.js\n");

/***/ })

/******/ });