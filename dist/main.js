/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/page-load */ \"./src/modules/page-load.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\n\ninit()\n\nfunction addEvents(){\n    const homeBtn = document.getElementById('home');\n    homeBtn.addEventListener('click', _modules_home__WEBPACK_IMPORTED_MODULE_1__.default);\n\n    const menuBtn = document.getElementById('menu');\n    menuBtn.addEventListener('click', _modules_menu__WEBPACK_IMPORTED_MODULE_2__.default);\n\n    const contactBtn = document.getElementById('contact');\n    contactBtn.addEventListener('click', _modules_contact__WEBPACK_IMPORTED_MODULE_3__.default)\n\n}\n\nfunction init(){\n    (0,_modules_page_load__WEBPACK_IMPORTED_MODULE_0__.default)()\n    ;(0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)()\n    addEvents()\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction makeContact(name, data){\n    const section = document.createElement('section');\n    section.classList.add('contact');\n\n    const title = document.createElement('h2');\n    title.classList.add('section-title');\n    title.textContent = name;\n    section.appendChild(title);\n\n    data.forEach((d) => {\n        const p = document.createElement('p');\n        p.classList.add('section-description');\n        p.textContent = d;\n        section.appendChild(p);\n    });\n\n    return section\n}\n\nfunction setActiveBtn(id){\n    const activeBtn = document.querySelector('.tab-active');\n    if (activeBtn) activeBtn.classList.remove('active');\n\n    const homeBtn = document.getElementById(id);\n    homeBtn.classList.add('active')\n}\n\nfunction contact(){\n    const content = document.getElementById('tab-info');\n    content.classList.add('flex-lay');\n    content.textContent = '';\n    // setActiveBtn('contact');\n\n    const phone = makeContact('phones', [\n        '123-456-7890'\n    ]);\n    content.appendChild(phone)\n\n    const address = makeContact('address', ['Konoha'])\n    content.appendChild(address)\n\n    setActiveBtn('contact')\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAbout(){\n    const about = document.createElement('section');\n    about.classList.add('section');\n\n    const title = document.createElement('h2');\n    title.classList.add('section-title');\n    title.textContent = 'About us'\n\n    about.appendChild(title);\n\n    const para = document.createElement('p');\n    para.classList.add('section-description');\n    para.textContent = 'Serving the finest ramen in all of Konoha. Come eat at the Hokages favorite spot!Lorem ipsum dolor sitamet consectetur adipisicing elit. Animi in, neque, dignissimosperspiciatis illo deserunt tetur adipisicing elit. Animi in, neque,dignissimos perspiciatis illo deserunt adipisicing elit. Animi in,neque, dignissimos perspiciatis illo deserunt'\n    about.appendChild(para);\n\n    return about;\n}\n\nfunction setActiveBtn(id) {\n    const activeBtn = document.querySelector('.activeTab');\n    if (activeBtn) activeBtn.classList.remove('active')\n\n    const homeBtn = document.getElementById(id);\n    homeBtn.classList.add('active')\n    // homeBtn.classList.add('active')\n}\n\n\nfunction loadHome(){\n    const content = document.getElementById('tab-info');\n    content.classList.add('flex-lay');\n\n    content.textContent = '';\n    const aboutSect = createAbout();\n\n    setActiveBtn('home');\n    \n    content.appendChild(aboutSect)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction foodItems(src, text, price, alt){\n    const food = document.createElement('div');\n    food.classList.add('food');\n    const img = document.createElement('img');\n    img.setAttribute('src', src);\n    img.setAttribute('alt', alt)\n\n    const description = document.createElement('div');\n    description.classList.add('description');\n\n    const name = document.createElement('div');\n    name.textContent = text;\n    description.appendChild(name);\n\n    const foodPrice = document.createElement('div')\n    foodPrice.textContent = price\n    description.appendChild(foodPrice);\n\n    food.appendChild(img);\n    food.appendChild(description);\n\n    return food\n}\n\nfunction setActiveBtn(id){\n    const activeBtn = document.querySelector('.tab-active');\n    if (activeBtn) activeBtn.classList.remove('active');\n\n    const homeBtn = document.getElementById(id);\n    homeBtn.classList.add('active')\n}\n\nfunction menu(){\n    const content = document.getElementById('tab-info');\n    content.classList.add('grid-lay');\n\n    content.textContent = ''\n\n    const items = [\n        foodItems(\n            '/dist/styles/img/tonkotsu.png',\n            'Tonkotsu Ramen',\n            '$6.99',\n            'Tonkotsu Ramen'\n        ),\n        foodItems(\n            '/dist/styles/img/instantramen.png',\n            'Instant Ramen',\n            '$2.99',\n            'Instant ramen'\n        ),\n        foodItems(\n            '/dist/styles/img/shoyu.png',\n            'Shoyu Ramen',\n            '6.99',\n            'Shoyu Ramen'\n        )\n    ];\n\n    items.forEach((food)=> {\n        content.appendChild(food)\n    })\n\n    setActiveBtn('menu')\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/page-load.js":
/*!**********************************!*\
  !*** ./src/modules/page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//load imports here for the home, menu and contact\n\nfunction makeHeader(id, text, src) {\n    const header = document.createElement('header');\n    header.setAttribute('id', id);\n    const logo = document.createElement('h1');\n    logo.textContent = text\n    const img = document.createElement('img');\n    img.setAttribute('src', src)\n    header.appendChild(img)\n    header.appendChild(logo);\n    return header\n}\n\nfunction makeBtn(id, text){\n    const btn = document.createElement('button');\n    btn.setAttribute('id', id);\n    const span = document.createElement('span');\n    span.textContent = text;\n    btn.appendChild(span);\n    btn.classList.add('tab');\n    return btn\n}\n\nfunction makeNav(id){\n    const nav = document.createElement('nav');\n    nav.setAttribute('id', id);\n\n    const homeTab = makeBtn('home', 'home');\n    nav.appendChild(homeTab);\n\n    const menuTab = makeBtn('menu', 'menu');\n    nav.appendChild(menuTab);\n\n    const contactTab = makeBtn('contact', 'contact');\n    nav.appendChild(contactTab);\n\n    return nav;\n}\n\nfunction makeMain(id){\n    const main = document.createElement('main');\n    main.setAttribute('id', id);\n    return main\n}\n\nfunction makeFooter(id, text){\n    const footer = document.createElement('footer');\n    footer.setAttribute('id', id);\n    const h3 = document.createElement('h3');\n    h3.textContent = text;\n    footer.appendChild(h3);\n    return footer\n}\n\nfunction load(){\n    const content = document.getElementById('content');\n    const header = makeHeader('header', 'Ichiraku Ramen', '/dist/styles/img/leaf.png');\n    content.appendChild(header)\n\n    const nav = makeNav('nav');\n    content.appendChild(nav);\n\n    const info = makeMain('tab-info');\n    content.appendChild(info);\n\n    const footer = makeFooter('footer', 'Pride of the Hidden Leaf Village');\n    content.appendChild(footer);\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/page-load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;