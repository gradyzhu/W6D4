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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class DOMNodeCollection {\n  constructor(arr) {\n    this.arr = arr;\n  }\n\n  html(str) {\n    if (str) {\n      this.arr.forEach(el => {\n        el.innerHTML = str;\n      })\n    } else {\n      return this.arr[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.arr.forEach(el => {\n      el.html = \"\";\n    });\n  }\n\n  append(content) {\n    this.arr.forEach(el => {\n      el.innerHTML += content;\n    })\n  }\n\n  attr(attrName) {\n    this.arr.forEach(el => {\n      el.getAttribute(attrName);\n    })\n  }\n\n  addClass(className) {\n    this.arr.forEach(el => {\n      el.classList.add(className)\n    })\n  }\n\n  removeClass(className) {\n    this.arr.forEach(el => {\n      el.classList.remove(className);\n    })\n  }\n\n  children() {\n    let childArr = [];\n    this.arr.forEach(el => {\n      elChildrenArr = Array.from(el.children);\n      childArr.concat(elChildrenArr)\n    })\n    return new DOMNodeCollection(childArr);\n  }\n\n  parent() {\n    let parentArr = [];\n    this.arr.forEach(el => {\n      if (el.parent instanceof DOMNodeCollection) parentArr.push(el);\n    })\n    return new DOMNodeCollection(parentArr);\n  }\n\n  find(selector) {\n    let selectorList = this.filter(el => (el === selector));\n    let selectorListArr = Array.from(selectorList);\n    return new DOMNodeCollection(selectorListArr);\n  }\n\n  remove() {\n    this.arr.forEach(el => {\n      el.html.remove();\n    })\n  }\n\n\n}\n\nmodule.exports = DOMNodeCollection\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// entry point\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\nwindow.$l = function (arg) {\n\n  if (arg instanceof HTMLElement) {\n    let NodeList = document.querySelectorAll(arg);\n    let NodeListArr = Array.from(NodeList);\n    return new DOMNodeCollection(NodeListArr);\n  } else {\n    let NodeList = document.getElementsByClassName(arg);\n    let NodeListArr = Array.from(NodeList);\n    return new DOMNodeCollection(NodeListArr);\n  }\n \n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });