/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/fontawesome */ "../node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/solid */ "../node_modules/@fortawesome/fontawesome-free/js/solid.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/regular */ "../node_modules/@fortawesome/fontawesome-free/js/regular.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_regular__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/brands */ "../node_modules/@fortawesome/fontawesome-free/js/brands.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_brands__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_whitelogo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/whitelogo.svg */ "./assets/img/whitelogo.svg");
/* harmony import */ var _img_logo_gradient_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/logo_gradient.svg */ "./assets/img/logo_gradient.svg");
/* harmony import */ var _img_intro_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/intro.jpg */ "./assets/img/intro.jpg");
/* harmony import */ var _img_attractions_vortex_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/attractions/vortex.jpg */ "./assets/img/attractions/vortex.jpg");
/* harmony import */ var _img_attractions_panoramic_wheel_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/attractions/panoramic_wheel.jpg */ "./assets/img/attractions/panoramic_wheel.jpg");
/* harmony import */ var _img_attractions_seashells_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/attractions/seashells.jpg */ "./assets/img/attractions/seashells.jpg");
/* harmony import */ var _img_shapes_smile_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/shapes/smile.svg */ "./assets/img/shapes/smile.svg");
/* harmony import */ var _img_shapes_circle_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/shapes/circle.svg */ "./assets/img/shapes/circle.svg");
/* harmony import */ var _img_shapes_triangle_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/shapes/triangle.svg */ "./assets/img/shapes/triangle.svg");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../scss/main.scss */ "./assets/scss/main.scss");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../index.html */ "./index.html");
/* harmony import */ var _gallery_html__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../gallery.html */ "./gallery.html");
/* harmony import */ var _contacts_html__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../contacts.html */ "./contacts.html");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);




















var options = {
  method: 'GET',
  url: 'https://api.openweathermap.org/data/2.5/weather?lat=54.9628731&lon=,73.3476211}&appid=7c97d5ca7588a4961f644bb93c24ce45',
  params: {
    q: 'Omsk'
  }
};

var App = function App() {
  var weatherText = document.getElementsByClassName('weather__text')[1];
  var hamburgerMenu = document.querySelector('#menu');
  var headerNav = document.querySelector('.nav');
  var weatherContainer = document.querySelector('#weather');

  var getWeather = /*#__PURE__*/function () {
    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(toSet, text) {
      var weather;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              weather = axios__WEBPACK_IMPORTED_MODULE_19___default().request(options).then(function (response) {
                return (response.data.main.temp - 273.15).toFixed(1);
              })["catch"](function (err) {
                return console.log(err);
              });
              _context.next = 3;
              return weather;

            case 3:
              _context.t0 = _context.sent;

              if (!(_context.t0 >= 18)) {
                _context.next = 6;
                break;
              }

              text.innerHTML = 'Сейчас отличная погода для прогулки!';

            case 6:
              _context.next = 8;
              return weather;

            case 8:
              _context.t1 = _context.sent;

              if (!(_context.t1 < 18)) {
                _context.next = 11;
                break;
              }

              text.innerHTML = 'Похоже, придется надеть куртку или ветровку, чтобы выйти на прогулку!';

            case 11:
              toSet.innerHTML = "<div class=\"loader\"></div>";
              _context.next = 14;
              return weather;

            case 14:
              _context.t2 = _context.sent;
              toSet.innerHTML = _context.t2 + '°C';

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getWeather(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  getWeather(weatherContainer, weatherText);

  if (window.innerWidth < 926) {
    var revealNav = function revealNav(event) {
      event.preventDefault();
      headerNav.classList.toggle('nav__reveal');
    };

    hamburgerMenu.style.display = "flex";
    hamburgerMenu.addEventListener('click', function (e) {
      return revealNav(e);
    });
  }
};

document.addEventListener('DOMContentLoaded', App);

/***/ }),

/***/ "./contacts.html":
/*!***********************!*\
  !*** ./contacts.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"./assets/css/style.min.css\">\n</head>\n<body>\n\n    <header class=\"header\">\n        <a href=\"#\" class=\"logo__link\">\n            <img src=\"./assets/img/logo_gradient.svg\" alt=\"beerplace\" class=\"logo__img\">\n        </a>\n\n        <nav class=\"nav\">\n            <ul class=\"nav__list\">\n                <a href=\"#\" class=\"nav__link\">\n                    <li class=\"nav__item\">О нас</li>\n                </a>\n                <a href=\"#\" class=\"nav__link\">\n                    <li class=\"nav__item\">Галерея</li>\n                </a>\n                <a href=\"#\" class=\"nav__link\">\n                    <li class=\"nav__item\">Контакты</li>\n                </a>\n            </ul>\n\n            <input type=\"text\" class=\"search\" placeholder=\"Поиск\">\n        </nav>\n\n        <div id=\"menu\" class=\"hamburger\">\n            <div class=\"hamburger__bar\"></div>\n            <div class=\"hamburger__bar\"></div>\n            <div class=\"hamburger__bar\"></div>\n        </div>\n    </header>\n\n<section class=\"intro\">\n    <div class=\"intro__backimg\"></div>\n    <div class=\"center_view\">\n        <!--            <ul class=\"intro__social-list\">-->\n        <!--                <li class=\"intro__social-item\">-->\n        <!--                    <a href=\"\" class=\"intro__social-link\">-->\n        <!--                        <i class=\"intro__social-icon fa-brands fa-vk\"></i>-->\n        <!--                    </a>-->\n        <!--                </li>-->\n        <!--                <li class=\"intro__social-item\">-->\n        <!--                    <a href=\"\" class=\"intro__social-link\">-->\n        <!--                        <i class=\"intro__social-icon fa-brands fa-instagram\"></i>-->\n        <!--                    </a>-->\n        <!--                </li>-->\n        <!--                <li class=\"intro__social-item\">-->\n        <!--                    <a href=\"\" class=\"intro__social-link\">-->\n        <!--                        <i class=\"intro__social-icon fa-brands fa-vk\"></i>-->\n        <!--                    </a>-->\n        <!--                </li>-->\n        <!--            </ul>-->\n        <div class=\"intro__inner\">\n            <div class=\"intro__left\">\n                <a href=\"#\" class=\"intro__logo\">\n                    <img src=\"./assets/img/whitelogo.svg\" alt=\"beerplace\">\n                </a>\n            </div>\n            <div class=\"intro__right\">\n                <h2 class=\"intro__title\">Парк культуры и отдыха</h2>\n                <h3 class=\"intro__subtitle\">\n                    В Омске\n                </h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n    <main class=\"main\">\n        <section class=\"section\">\n            <div class=\"weather\">\n    <!--                <p id=\"weather\" style=\"color: #000\"></p>-->\n                    <p class=\"weather__text\">\n                        В Омске сейчас\n                    </p>\n                    <p class=\"weather__digit\" id=\"weather\"></p>\n                    <p class=\"weather__text\">\n                    </p>\n                </div>\n        </section>\n        <section class=\"section\">\n            <div class=\"container\">\n                <h4 class=\"section__title\">\n                    Ознакомтесь с <span class=\"text-alternate\">нашими аттракционами</span>\n                </h4>\n\n                <div class=\"attractions\">\n                    <div class=\"attractions__item\">\n                        <div class=\"attractions__img-container\" style=\"background: #BF3F3F\">\n                            <img src=\"./assets/img/smile.svg\" class=\"attractions__under-img\"/>\n                            <img src=\"./assets/img/vortex.jpg\" alt=\"\" class=\"attractions__img\">\n                        </div>\n                        <div class=\"attractions__text\">\n                            <h4 class=\"attractions__title\">\n                                Вихрь\n                            </h4>\n                            <p class=\"attractions__descr\">\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus et magni repellendus rerum sed sit sunt. Exercitationem facilis hic sapiente. A aperiam est itaque labore non recusandae sed totam.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"attractions__item-right\">\n\n                        <div class=\"attractions__text\">\n                            <h4 class=\"attractions__title\">\n                                Колесо обозрения\n                            </h4>\n                            <p class=\"attractions__descr\">\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus et magni repellendus rerum sed sit sunt. Exercitationem facilis hic sapiente. A aperiam est itaque labore non recusandae sed totam.\n                            </p>\n                        </div>\n                        <div class=\"attractions__img-container\" style=\"background: #3FB8BF\">\n                            <img src=\"./assets/img/triangle.svg\" class=\"attractions__under-img-right\"/>\n                            <img src=\"./assets/img/panoramic_wheel.jpg\" alt=\"\" class=\"attractions__img-right\">\n                        </div>\n                    </div>\n                    <div class=\"attractions__item\">\n                        <div class=\"attractions__img-container\" style=\"background:#FFFD8E\">\n                            <img src=\"./assets/img/circle.svg\" class=\"attractions__under-img\"/>\n                            <img src=\"./assets/img/seashells.jpg\" alt=\"\" class=\"attractions__img\">\n                        </div>\n                        <div class=\"attractions__text\">\n                            <h4 class=\"attractions__title\">\n                                Ракушки\n                            </h4>\n                            <p class=\"attractions__descr\">\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus et magni repellendus rerum sed sit sunt. Exercitationem facilis hic sapiente. A aperiam est itaque labore non recusandae sed totam.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <section class=\"section\">\n            <h4 class=\"section__title\">\n                Свяжитесь с <span class=\"text-alternate\">нами</span>\n            </h4>\n            <div class=\"container\">\n                <form action=\"#\" class=\"form\" method=\"post\">\n                    <label class=\"form__label\">\n                        Введите ваше имя\n                        <input class=\"form__control\" type=\"text\" placeholder=\"Имя\">\n                    </label>\n                    <label class=\"form__label\">\n                        Введите ваш email\n                    <input class=\"form__control\" type=\"email\" placeholder=\"email\">\n                    </label>\n                        <label class=\"form__label\">\n                            Ваше сообщение\n                        <textarea class=\"form__control-area\" placeholder=\"Ваше сообщение\" cols=\"30\" rows=\"10\"></textarea>\n                        </label>\n                    <input type=\"submit\" class=\"form__submit\" value=\"Отправить\">\n                </form>\n            </div>\n        </section>\n    </main>\n\n    <footer class=\"footer\">\n\n            <nav class=\"social\">\n                <li class=\"social__item\">\n                    <a href=\"\" class=\"social__link\">\n                        <i class=\"social__ico fa-brands fa-vk\"></i>\n                    </a>\n                </li>\n                <li class=\"social__item\">\n                    <a href=\"\" class=\"social__link\">\n                        <i class=\" social__ico fa-brands fa-instagram-square\"></i>\n                    </a>\n                </li>\n                <li class=\"social__item\">\n                    <a href=\"\" class=\"social__link\">\n                        <i class=\"social__ico fa-brands fa-facebook-square\"></i>\n                    </a>\n                </li>\n            </nav>\n            <hr class=\"footer__split\">\n\n            <div class=\"footer__row\">\n                <div class=\"footer__col\">\n                    <nav class=\"footer-nav\">\n                        <li class=\"footer-nav__item\">\n                            <a href=\"#\" class=\"footer-nav__link\">Главная</a>\n                        </li>\n                        <li class=\"footer-nav__item\">\n                            <a href=\"#\" class=\"footer-nav__link\">Галерея</a>\n                        </li>\n                        <li class=\"footer-nav__item\">\n                            <a href=\"#\" class=\"footer-nav__link\">Контакты</a>\n                        </li>\n                    </nav>\n                </div>\n                <div class=\"footer__col\">\n                    <p class=\"footer-nav__item\"><span class=\"text-alternate\">Адрес:</span> c. Мичурино</p>\n                    <p class=\"footer-nav__item\"><span class=\"text-alternate\">Телефон:</span> 831290312</p>\n                </div>\n            </div>\n    </footer>\n\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./gallery.html":
/*!**********************!*\
  !*** ./gallery.html ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"./assets/css/style.min.css\">\n</head>\n<body>\n\n    <header class=\"header\">\n        <a href=\"#\" class=\"logo__link\">\n            <img src=\"./assets/img/logo_gradient.svg\" alt=\"beerplace\" class=\"logo__img\">\n        </a>\n\n        <nav class=\"nav\">\n            <ul class=\"nav__list\">\n                <a href=\"#\" class=\"nav__link\">\n                    <li class=\"nav__item\">О нас</li>\n                </a>\n                <a href=\"#\" class=\"nav__link\">\n                    <li class=\"nav__item\">Галерея</li>\n                </a>\n                <a href=\"#\" class=\"nav__link\">\n                    <li class=\"nav__item\">Контакты</li>\n                </a>\n            </ul>\n\n            <input type=\"text\" class=\"search\" placeholder=\"Поиск\">\n        </nav>\n\n        <div id=\"menu\" class=\"hamburger\">\n            <div class=\"hamburger__bar\"></div>\n            <div class=\"hamburger__bar\"></div>\n            <div class=\"hamburger__bar\"></div>\n        </div>\n    </header>\n\n<section class=\"intro\">\n    <div class=\"intro__backimg\"></div>\n    <div class=\"center_view\">\n        <!--            <ul class=\"intro__social-list\">-->\n        <!--                <li class=\"intro__social-item\">-->\n        <!--                    <a href=\"\" class=\"intro__social-link\">-->\n        <!--                        <i class=\"intro__social-icon fa-brands fa-vk\"></i>-->\n        <!--                    </a>-->\n        <!--                </li>-->\n        <!--                <li class=\"intro__social-item\">-->\n        <!--                    <a href=\"\" class=\"intro__social-link\">-->\n        <!--                        <i class=\"intro__social-icon fa-brands fa-instagram\"></i>-->\n        <!--                    </a>-->\n        <!--                </li>-->\n        <!--                <li class=\"intro__social-item\">-->\n        <!--                    <a href=\"\" class=\"intro__social-link\">-->\n        <!--                        <i class=\"intro__social-icon fa-brands fa-vk\"></i>-->\n        <!--                    </a>-->\n        <!--                </li>-->\n        <!--            </ul>-->\n        <div class=\"intro__inner\">\n            <div class=\"intro__left\">\n                <a href=\"#\" class=\"intro__logo\">\n                    <img src=\"./assets/img/whitelogo.svg\" alt=\"beerplace\">\n                </a>\n            </div>\n            <div class=\"intro__right\">\n                <h2 class=\"intro__title\">Парк культуры и отдыха</h2>\n                <h3 class=\"intro__subtitle\">\n                    В Омске\n                </h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n    <main class=\"main\">\n        <section class=\"section\">\n            <div class=\"weather\">\n    <!--                <p id=\"weather\" style=\"color: #000\"></p>-->\n                    <p class=\"weather__text\">\n                        В Омске сейчас\n                    </p>\n                    <p class=\"weather__digit\" id=\"weather\"></p>\n                    <p class=\"weather__text\">\n                    </p>\n                </div>\n        </section>\n        <section class=\"section\">\n            <div class=\"container\">\n                <h4 class=\"section__title\">\n                    Ознакомтесь с <span class=\"text-alternate\">нашими аттракционами</span>\n                </h4>\n\n                <div class=\"attractions\">\n                    <div class=\"attractions__item\">\n                        <div class=\"attractions__img-container\" style=\"background: #BF3F3F\">\n                            <img src=\"./assets/img/smile.svg\" class=\"attractions__under-img\"/>\n                            <img src=\"./assets/img/vortex.jpg\" alt=\"\" class=\"attractions__img\">\n                        </div>\n                        <div class=\"attractions__text\">\n                            <h4 class=\"attractions__title\">\n                                Вихрь\n                            </h4>\n                            <p class=\"attractions__descr\">\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus et magni repellendus rerum sed sit sunt. Exercitationem facilis hic sapiente. A aperiam est itaque labore non recusandae sed totam.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"attractions__item-right\">\n\n                        <div class=\"attractions__text\">\n                            <h4 class=\"attractions__title\">\n                                Колесо обозрения\n                            </h4>\n                            <p class=\"attractions__descr\">\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus et magni repellendus rerum sed sit sunt. Exercitationem facilis hic sapiente. A aperiam est itaque labore non recusandae sed totam.\n                            </p>\n                        </div>\n                        <div class=\"attractions__img-container\" style=\"background: #3FB8BF\">\n                            <img src=\"./assets/img/triangle.svg\" class=\"attractions__under-img-right\"/>\n                            <img src=\"./assets/img/panoramic_wheel.jpg\" alt=\"\" class=\"attractions__img-right\">\n                        </div>\n                    </div>\n                    <div class=\"attractions__item\">\n                        <div class=\"attractions__img-container\" style=\"background:#FFFD8E\">\n                            <img src=\"./assets/img/circle.svg\" class=\"attractions__under-img\"/>\n                            <img src=\"./assets/img/seashells.jpg\" alt=\"\" class=\"attractions__img\">\n                        </div>\n                        <div class=\"attractions__text\">\n                            <h4 class=\"attractions__title\">\n                                Ракушки\n                            </h4>\n                            <p class=\"attractions__descr\">\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus et magni repellendus rerum sed sit sunt. Exercitationem facilis hic sapiente. A aperiam est itaque labore non recusandae sed totam.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <section class=\"section\">\n            <h4 class=\"section__title\">\n                Свяжитесь с <span class=\"text-alternate\">нами</span>\n            </h4>\n            <div class=\"container\">\n                <form action=\"#\" class=\"form\" method=\"post\">\n                    <label class=\"form__label\">\n                        Введите ваше имя\n                        <input class=\"form__control\" type=\"text\" placeholder=\"Имя\">\n                    </label>\n                    <label class=\"form__label\">\n                        Введите ваш email\n                    <input class=\"form__control\" type=\"email\" placeholder=\"email\">\n                    </label>\n                        <label class=\"form__label\">\n                            Ваше сообщение\n                        <textarea class=\"form__control-area\" placeholder=\"Ваше сообщение\" cols=\"30\" rows=\"10\"></textarea>\n                        </label>\n                    <input type=\"submit\" class=\"form__submit\" value=\"Отправить\">\n                </form>\n            </div>\n        </section>\n    </main>\n\n    <footer class=\"footer\">\n\n            <nav class=\"social\">\n                <li class=\"social__item\">\n                    <a href=\"\" class=\"social__link\">\n                        <i class=\"social__ico fa-brands fa-vk\"></i>\n                    </a>\n                </li>\n                <li class=\"social__item\">\n                    <a href=\"\" class=\"social__link\">\n                        <i class=\" social__ico fa-brands fa-instagram-square\"></i>\n                    </a>\n                </li>\n                <li class=\"social__item\">\n                    <a href=\"\" class=\"social__link\">\n                        <i class=\"social__ico fa-brands fa-facebook-square\"></i>\n                    </a>\n                </li>\n            </nav>\n            <hr class=\"footer__split\">\n\n            <div class=\"footer__row\">\n                <div class=\"footer__col\">\n                    <nav class=\"footer-nav\">\n                        <li class=\"footer-nav__item\">\n                            <a href=\"#\" class=\"footer-nav__link\">Главная</a>\n                        </li>\n                        <li class=\"footer-nav__item\">\n                            <a href=\"#\" class=\"footer-nav__link\">Галерея</a>\n                        </li>\n                        <li class=\"footer-nav__item\">\n                            <a href=\"#\" class=\"footer-nav__link\">Контакты</a>\n                        </li>\n                    </nav>\n                </div>\n                <div class=\"footer__col\">\n                    <p class=\"footer-nav__item\"><span class=\"text-alternate\">Адрес:</span> c. Мичурино</p>\n                    <p class=\"footer-nav__item\"><span class=\"text-alternate\">Телефон:</span> 831290312</p>\n                </div>\n            </div>\n    </footer>\n\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"./assets/css/style.min.css\">\n</head>\n<body>\n\n    <header class=\"header\">\n        <a href=\"#\" class=\"logo__link\">\n            <img src=\"./assets/img/logo_gradient.svg\" alt=\"beerplace\" class=\"logo__img\">\n        </a>\n\n        <nav class=\"nav\">\n            <ul class=\"nav__list\">\n                <a href=\"./gallery.html\" class=\"nav__link\">\n                    <li class=\"nav__item\">Галерея</li>\n                </a>\n                <a href=\"./contacts.html\" class=\"nav__link\">\n                    <li class=\"nav__item\">Контакты</li>\n                </a>\n            </ul>\n\n            <input type=\"text\" class=\"search\" placeholder=\"Поиск\">\n        </nav>\n\n        <div id=\"menu\" class=\"hamburger\">\n            <div class=\"hamburger__bar\"></div>\n            <div class=\"hamburger__bar\"></div>\n            <div class=\"hamburger__bar\"></div>\n        </div>\n    </header>\n\n<section class=\"intro\">\n    <div class=\"intro__backimg\"></div>\n    <div class=\"center_view\">\n        <!--            <ul class=\"intro__social-list\">-->\n        <!--                <li class=\"intro__social-item\">-->\n        <!--                    <a href=\"\" class=\"intro__social-link\">-->\n        <!--                        <i class=\"intro__social-icon fa-brands fa-vk\"></i>-->\n        <!--                    </a>-->\n        <!--                </li>-->\n        <!--                <li class=\"intro__social-item\">-->\n        <!--                    <a href=\"\" class=\"intro__social-link\">-->\n        <!--                        <i class=\"intro__social-icon fa-brands fa-instagram\"></i>-->\n        <!--                    </a>-->\n        <!--                </li>-->\n        <!--                <li class=\"intro__social-item\">-->\n        <!--                    <a href=\"\" class=\"intro__social-link\">-->\n        <!--                        <i class=\"intro__social-icon fa-brands fa-vk\"></i>-->\n        <!--                    </a>-->\n        <!--                </li>-->\n        <!--            </ul>-->\n        <div class=\"intro__inner\">\n            <div class=\"intro__left\">\n                <a href=\"#\" class=\"intro__logo\">\n                    <img src=\"./assets/img/whitelogo.svg\" alt=\"beerplace\">\n                </a>\n            </div>\n            <div class=\"intro__right\">\n                <h2 class=\"intro__title\">Парк культуры и отдыха</h2>\n                <h3 class=\"intro__subtitle\">\n                    В Омске\n                </h3>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n    <main class=\"main\">\n        <section class=\"section\">\n            <div class=\"weather\">\n    <!--                <p id=\"weather\" style=\"color: #000\"></p>-->\n                    <p class=\"weather__text\">\n                        В Омске сейчас\n                    </p>\n                    <p class=\"weather__digit\" id=\"weather\"></p>\n                    <p class=\"weather__text\">\n                    </p>\n                </div>\n        </section>\n        <section class=\"section\">\n            <div class=\"container\">\n                <h4 class=\"section__title\">\n                    Ознакомтесь с <span class=\"text-alternate\">нашими аттракционами</span>\n                </h4>\n\n                <div class=\"attractions\">\n                    <div class=\"attractions__item\">\n                        <div class=\"attractions__img-container\" style=\"background: #BF3F3F\">\n                            <img src=\"./assets/img/smile.svg\" class=\"attractions__under-img\"/>\n                            <img src=\"./assets/img/vortex.jpg\" alt=\"\" class=\"attractions__img\">\n                        </div>\n                        <div class=\"attractions__text\">\n                            <h4 class=\"attractions__title\">\n                                Вихрь\n                            </h4>\n                            <p class=\"attractions__descr\">\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus et magni repellendus rerum sed sit sunt. Exercitationem facilis hic sapiente. A aperiam est itaque labore non recusandae sed totam.\n                            </p>\n                        </div>\n                    </div>\n                    <div class=\"attractions__item-right\">\n\n                        <div class=\"attractions__text\">\n                            <h4 class=\"attractions__title\">\n                                Колесо обозрения\n                            </h4>\n                            <p class=\"attractions__descr\">\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus et magni repellendus rerum sed sit sunt. Exercitationem facilis hic sapiente. A aperiam est itaque labore non recusandae sed totam.\n                            </p>\n                        </div>\n                        <div class=\"attractions__img-container\" style=\"background: #3FB8BF\">\n                            <img src=\"./assets/img/triangle.svg\" class=\"attractions__under-img-right\"/>\n                            <img src=\"./assets/img/panoramic_wheel.jpg\" alt=\"\" class=\"attractions__img-right\">\n                        </div>\n                    </div>\n                    <div class=\"attractions__item\">\n                        <div class=\"attractions__img-container\" style=\"background:#FFFD8E\">\n                            <img src=\"./assets/img/circle.svg\" class=\"attractions__under-img\"/>\n                            <img src=\"./assets/img/seashells.jpg\" alt=\"\" class=\"attractions__img\">\n                        </div>\n                        <div class=\"attractions__text\">\n                            <h4 class=\"attractions__title\">\n                                Ракушки\n                            </h4>\n                            <p class=\"attractions__descr\">\n                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium doloribus et magni repellendus rerum sed sit sunt. Exercitationem facilis hic sapiente. A aperiam est itaque labore non recusandae sed totam.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <section class=\"section\">\n            <h4 class=\"section__title\">\n                Свяжитесь с <span class=\"text-alternate\">нами</span>\n            </h4>\n            <div class=\"container\">\n                <form action=\"#\" class=\"form\" method=\"post\">\n                    <label class=\"form__label\">\n                        Введите ваше имя\n                        <input class=\"form__control\" type=\"text\" placeholder=\"Имя\">\n                    </label>\n                    <label class=\"form__label\">\n                        Введите ваш email\n                    <input class=\"form__control\" type=\"email\" placeholder=\"email\">\n                    </label>\n                        <label class=\"form__label\">\n                            Ваше сообщение\n                        <textarea class=\"form__control-area\" placeholder=\"Ваше сообщение\" cols=\"30\" rows=\"10\"></textarea>\n                        </label>\n                    <input type=\"submit\" class=\"form__submit\" value=\"Отправить\">\n                </form>\n            </div>\n        </section>\n    </main>\n\n    <footer class=\"footer\">\n\n            <nav class=\"social\">\n                <li class=\"social__item\">\n                    <a href=\"\" class=\"social__link\">\n                        <i class=\"social__ico fa-brands fa-vk\"></i>\n                    </a>\n                </li>\n                <li class=\"social__item\">\n                    <a href=\"\" class=\"social__link\">\n                        <i class=\" social__ico fa-brands fa-instagram-square\"></i>\n                    </a>\n                </li>\n                <li class=\"social__item\">\n                    <a href=\"\" class=\"social__link\">\n                        <i class=\"social__ico fa-brands fa-facebook-square\"></i>\n                    </a>\n                </li>\n            </nav>\n            <hr class=\"footer__split\">\n\n            <div class=\"footer__row\">\n                <div class=\"footer__col\">\n                    <nav class=\"footer-nav\">\n                        <li class=\"footer-nav__item\">\n                            <a href=\"./index.html\" class=\"footer-nav__link\">Главная</a>\n                        </li>\n                        <li class=\"footer-nav__item\">\n                            <a href=\"./gallery.html\" class=\"footer-nav__link\">Галерея</a>\n                        </li>\n                        <li class=\"footer-nav__item\">\n                            <a href=\"./contacts.html\" class=\"footer-nav__link\">Контакты</a>\n                        </li>\n                    </nav>\n                </div>\n                <div class=\"footer__col\">\n                    <p class=\"footer-nav__item\"><span class=\"text-alternate\">Адрес:</span> c. Мичурино</p>\n                    <p class=\"footer-nav__item\"><span class=\"text-alternate\">Телефон:</span> 831290312</p>\n                </div>\n            </div>\n    </footer>\n\n</body>\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/img/attractions/panoramic_wheel.jpg":
/*!****************************************************!*\
  !*** ./assets/img/attractions/panoramic_wheel.jpg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/img/panoramic_wheel.jpg";

/***/ }),

/***/ "./assets/img/attractions/seashells.jpg":
/*!**********************************************!*\
  !*** ./assets/img/attractions/seashells.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/img/seashells.jpg";

/***/ }),

/***/ "./assets/img/attractions/vortex.jpg":
/*!*******************************************!*\
  !*** ./assets/img/attractions/vortex.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/img/vortex.jpg";

/***/ }),

/***/ "./assets/img/intro.jpg":
/*!******************************!*\
  !*** ./assets/img/intro.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/img/intro.jpg";

/***/ }),

/***/ "./assets/img/logo_gradient.svg":
/*!**************************************!*\
  !*** ./assets/img/logo_gradient.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/img/logo_gradient.svg";

/***/ }),

/***/ "./assets/img/shapes/circle.svg":
/*!**************************************!*\
  !*** ./assets/img/shapes/circle.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/img/circle.svg";

/***/ }),

/***/ "./assets/img/shapes/smile.svg":
/*!*************************************!*\
  !*** ./assets/img/shapes/smile.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/img/smile.svg";

/***/ }),

/***/ "./assets/img/shapes/triangle.svg":
/*!****************************************!*\
  !*** ./assets/img/shapes/triangle.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/img/triangle.svg";

/***/ }),

/***/ "./assets/img/whitelogo.svg":
/*!**********************************!*\
  !*** ./assets/img/whitelogo.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "./assets/img/whitelogo.svg";

/***/ })

/******/ 	});
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_runtime_regenerator_index_js-node_modules_fortawesome_fontawesome--b86476"], () => (__webpack_require__("./assets/js/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map