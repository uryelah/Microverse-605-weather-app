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

/***/ "./src/changeUi.js":
/*!*************************!*\
  !*** ./src/changeUi.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherConditions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherConditions */ \"./src/weatherConditions.js\");\n\n\nconst changeUI = (data, system) => {\n  const { weather, name } = data;\n  const {\n    temp, temp_min: tempMin, temp_max: tempMax, pressure, humidity,\n  } = data.main;\n  const { country } = data.sys;\n  const { speed, deg } = data.wind;\n  const { main, description, icon } = weather[0];\n  const bg = _weatherConditions__WEBPACK_IMPORTED_MODULE_0__[\"default\"][data.weather[0].main];\n  const unit = system === 'metric' ? '°C' : '°F';\n\n  const app = document.getElementById('app');\n  const iconElement = document.getElementById('icon');\n  const mainElement = document.getElementById('weather-main');\n  const descriptionElement = document.getElementById('weather-description');\n  const tempElement = document.getElementById('temperature-main');\n  const tempMinMaxElement = document.getElementById('temperature-min-max');\n  const pressureElement = document.getElementById('pressure');\n  const humidityElement = document.getElementById('humidity');\n  const cityElement = document.getElementById('city');\n  const countryElement = document.getElementById('country');\n  const windSpeedElement = document.getElementById('wind-velocity');\n  const windDegElement = document.getElementById('wind-direction');\n\n  iconElement.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;\n  mainElement.innerText = main;\n  descriptionElement.innerText = description;\n  tempElement.innerText = `${Math.round(temp)} ${unit}`;\n  tempMinMaxElement.innerText = `${Math.round(tempMin)}${unit} - ${Math.round(tempMax)}${unit}`;\n  pressureElement.innerText = `${pressure}hPa`;\n  humidityElement.innerText = `${humidity}%`;\n  cityElement.innerText = name;\n  countryElement.innerText = countries[country];\n  windSpeedElement.innerText = `${speed}m/s`;\n  windDegElement.innerText = `${deg}deg`;\n\n  app.style.filter = 'blur(5px) brightness(1.3)';\n  setTimeout(() => {\n    app.style.backgroundImage = `linear-gradient(to top, #ffffff11, #ffffff66), url('${bg}')`;\n    app.style.filter = 'blur(5px) brightness(1)';\n  }, 1000);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeUI);\n\n\n//# sourceURL=webpack:///./src/changeUi.js?");

/***/ }),

/***/ "./src/countryDictionary.js":
/*!**********************************!*\
  !*** ./src/countryDictionary.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst countries = {\n  AF: 'Afghanistan',\n  AL: 'Albania',\n  DZ: 'Algeria',\n  AS: 'American Samoa',\n  AD: 'Andorra',\n  AO: 'Angola',\n  AI: 'Anguilla',\n  AQ: 'Antarctica',\n  AG: 'Antigua and Barbuda',\n  AR: 'Argentina',\n  AM: 'Armenia',\n  AW: 'Aruba',\n  AU: 'Australia',\n  AT: 'Austria',\n  AZ: 'Azerbaijan',\n  BS: 'Bahamas',\n  BH: 'Bahrain',\n  BD: 'Bangladesh',\n  BB: 'Barbados',\n  BY: 'Belarus',\n  BE: 'Belgium',\n  BZ: 'Belize',\n  BJ: 'Benin',\n  BM: 'Bermuda',\n  BT: 'Bhutan',\n  BO: 'Bolivia',\n  BQ: 'Bonaire',\n  BA: 'Bosnia and Herzegovina',\n  BW: 'Botswana',\n  BV: 'Bouvet Island',\n  BR: 'Brazil',\n  IO: 'British Indian Ocean Territory',\n  BN: 'Brunei Darussalam',\n  BG: 'Bulgaria',\n  BF: 'Burkina Faso',\n  BI: 'Burundi',\n  KH: 'Cambodia',\n  CM: 'Cameroon',\n  CA: 'Canada',\n  CV: 'Cape Verde',\n  KY: 'Cayman Islands',\n  CF: 'Central African Republic',\n  TD: 'Chad',\n  CL: 'Chile',\n  CN: 'China',\n  CX: 'Christmas Island',\n  CC: 'Cocos (Keeling) Islands',\n  CO: 'Colombia',\n  KM: 'Comoros',\n  CG: 'Congo',\n  CD: 'Democratic Republic of the Congo',\n  CK: 'Cook Islands',\n  CR: 'Costa Rica',\n  HR: 'Croatia',\n  CU: 'Cuba',\n  CW: 'Curacao',\n  CY: 'Cyprus',\n  CZ: 'Czech Republic',\n  CI: \"Cote d'Ivoire\",\n  DK: 'Denmark',\n  DJ: 'Djibouti',\n  DM: 'Dominica',\n  DO: 'Dominican Republic',\n  EC: 'Ecuador',\n  EG: 'Egypt',\n  SV: 'El Salvador',\n  GQ: 'Equatorial Guinea',\n  ER: 'Eritrea',\n  EE: 'Estonia',\n  ET: 'Ethiopia',\n  FK: 'Falkland Islands (Malvinas)',\n  FO: 'Faroe Islands',\n  FJ: 'Fiji',\n  FI: 'Finland',\n  FR: 'France',\n  GF: 'French Guiana',\n  PF: 'French Polynesia',\n  TF: 'French Southern Territories',\n  GA: 'Gabon',\n  GM: 'Gambia',\n  GE: 'Georgia',\n  DE: 'Germany',\n  GH: 'Ghana',\n  GI: 'Gibraltar',\n  GR: 'Greece',\n  GL: 'Greenland',\n  GD: 'Grenada',\n  GP: 'Guadeloupe',\n  GU: 'Guam',\n  GT: 'Guatemala',\n  GG: 'Guernsey',\n  GN: 'Guinea',\n  GW: 'Guinea-Bissau',\n  GY: 'Guyana',\n  HT: 'Haiti',\n  HM: 'Heard Island and McDonald Islands',\n  VA: 'Holy See (Vatican City State)',\n  HN: 'Honduras',\n  HK: 'Hong Kong',\n  HU: 'Hungary',\n  IS: 'Iceland',\n  IN: 'India',\n  ID: 'Indonesia',\n  IR: 'Iran, Islamic Republic of',\n  IQ: 'Iraq',\n  IE: 'Ireland',\n  IM: 'Isle of Man',\n  IL: 'Israel',\n  IT: 'Italy',\n  JM: 'Jamaica',\n  JP: 'Japan',\n  JE: 'Jersey',\n  JO: 'Jordan',\n  KZ: 'Kazakhstan',\n  KE: 'Kenya',\n  KI: 'Kiribati',\n  KP: \"Korea, Democratic People's Republic of\",\n  KR: 'Korea, Republic of',\n  KW: 'Kuwait',\n  KG: 'Kyrgyzstan',\n  LA: \"Lao People's Democratic Republic\",\n  LV: 'Latvia',\n  LB: 'Lebanon',\n  LS: 'Lesotho',\n  LR: 'Liberia',\n  LY: 'Libya',\n  LI: 'Liechtenstein',\n  LT: 'Lithuania',\n  LU: 'Luxembourg',\n  MO: 'Macao',\n  MK: 'Macedonia, the Former Yugoslav Republic of',\n  MG: 'Madagascar',\n  MW: 'Malawi',\n  MY: 'Malaysia',\n  MV: 'Maldives',\n  ML: 'Mali',\n  MT: 'Malta',\n  MH: 'Marshall Islands',\n  MQ: 'Martinique',\n  MR: 'Mauritania',\n  MU: 'Mauritius',\n  YT: 'Mayotte',\n  MX: 'Mexico',\n  FM: 'Micronesia, Federated States of',\n  MD: 'Moldova, Republic of',\n  MC: 'Monaco',\n  MN: 'Mongolia',\n  ME: 'Montenegro',\n  MS: 'Montserrat',\n  MA: 'Morocco',\n  MZ: 'Mozambique',\n  MM: 'Myanmar',\n  NA: 'Namibia',\n  NR: 'Nauru',\n  NP: 'Nepal',\n  NL: 'Netherlands',\n  NC: 'New Caledonia',\n  NZ: 'New Zealand',\n  NI: 'Nicaragua',\n  NE: 'Niger',\n  NG: 'Nigeria',\n  NU: 'Niue',\n  NF: 'Norfolk Island',\n  MP: 'Northern Mariana Islands',\n  NO: 'Norway',\n  OM: 'Oman',\n  PK: 'Pakistan',\n  PW: 'Palau',\n  PS: 'Palestine, State of',\n  PA: 'Panama',\n  PG: 'Papua New Guinea',\n  PY: 'Paraguay',\n  PE: 'Peru',\n  PH: 'Philippines',\n  PN: 'Pitcairn',\n  PL: 'Poland',\n  PT: 'Portugal',\n  PR: 'Puerto Rico',\n  QA: 'Qatar',\n  RO: 'Romania',\n  RU: 'Russian Federation',\n  RW: 'Rwanda',\n  RE: 'Reunion',\n  BL: 'Saint Barthelemy',\n  SH: 'Saint Helena',\n  KN: 'Saint Kitts and Nevis',\n  LC: 'Saint Lucia',\n  MF: 'Saint Martin (French part)',\n  PM: 'Saint Pierre and Miquelon',\n  VC: 'Saint Vincent and the Grenadines',\n  WS: 'Samoa',\n  SM: 'San Marino',\n  ST: 'Sao Tome and Principe',\n  SA: 'Saudi Arabia',\n  SN: 'Senegal',\n  RS: 'Serbia',\n  SC: 'Seychelles',\n  SL: 'Sierra Leone',\n  SG: 'Singapore',\n  SX: 'Sint Maarten (Dutch part)',\n  SK: 'Slovakia',\n  SI: 'Slovenia',\n  SB: 'Solomon Islands',\n  SO: 'Somalia',\n  ZA: 'South Africa',\n  GS: 'South Georgia and the South Sandwich Islands',\n  SS: 'South Sudan',\n  ES: 'Spain',\n  LK: 'Sri Lanka',\n  SD: 'Sudan',\n  SR: 'Suriname',\n  SJ: 'Svalbard and Jan Mayen',\n  SZ: 'Swaziland',\n  SE: 'Sweden',\n  CH: 'Switzerland',\n  SY: 'Syrian Arab Republic',\n  TW: 'Taiwan',\n  TJ: 'Tajikistan',\n  TZ: 'United Republic of Tanzania',\n  TH: 'Thailand',\n  TL: 'Timor-Leste',\n  TG: 'Togo',\n  TK: 'Tokelau',\n  TO: 'Tonga',\n  TT: 'Trinidad and Tobago',\n  TN: 'Tunisia',\n  TR: 'Turkey',\n  TM: 'Turkmenistan',\n  TC: 'Turks and Caicos Islands',\n  TV: 'Tuvalu',\n  UG: 'Uganda',\n  UA: 'Ukraine',\n  AE: 'United Arab Emirates',\n  GB: 'United Kingdom',\n  US: 'United States',\n  UM: 'United States Minor Outlying Islands',\n  UY: 'Uruguay',\n  UZ: 'Uzbekistan',\n  VU: 'Vanuatu',\n  VE: 'Venezuela',\n  VN: 'Viet Nam',\n  VG: 'British Virgin Islands',\n  VI: 'US Virgin Islands',\n  WF: 'Wallis and Futuna',\n  EH: 'Western Sahara',\n  YE: 'Yemen',\n  ZM: 'Zambia',\n  ZW: 'Zimbabwe',\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (countries);\n\n\n//# sourceURL=webpack:///./src/countryDictionary.js?");

/***/ }),

/***/ "./src/geoCitiesHelper.js":
/*!********************************!*\
  !*** ./src/geoCitiesHelper.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst geoCitiesHelper = () => {\n  // source: https://geobytes.com/free-ajax-cities-jsonp-api/\n  jQuery(() => {\n    jQuery('#f_elem_city').autocomplete({\n      source(request, response) {\n        jQuery.getJSON(\n          `https://secure.geobytes.com/AutoCompleteCity?key=7c756203dbb38590a66e01a5a3e1ad96&callback=?&q=${request.term}`,\n          (data) => {\n            response(data);\n          },\n        );\n      },\n      minLength: 3,\n      select(event, ui) {\n        const selectedObj = ui.item;\n        jQuery('#f_elem_city').val(selectedObj.value);\n        return false;\n      },\n      open() {\n        jQuery(this).removeClass('ui-corner-all').addClass('ui-corner-top');\n      },\n      close() {\n        jQuery(this).removeClass('ui-corner-top').addClass('ui-corner-all');\n      },\n    });\n    jQuery('#f_elem_city').autocomplete('option', 'delay', 100);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (geoCitiesHelper);\n\n\n//# sourceURL=webpack:///./src/geoCitiesHelper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _countryDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./countryDictionary */ \"./src/countryDictionary.js\");\n/* harmony import */ var _geoCitiesHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geoCitiesHelper */ \"./src/geoCitiesHelper.js\");\n/* harmony import */ var _changeUi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeUi */ \"./src/changeUi.js\");\n\n\n\n\nObject(_geoCitiesHelper__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst load = () => {\n  const loader = document.getElementById('loader');\n  const content = document.getElementById('weather');\n\n  loader.classList.toggle('toggle-view');\n  content.classList.toggle('toggle-view');\n};\n\nconst activateTempButton = () => {\n  const tempBtns = document.getElementsByClassName('degres-btn');\n  [...tempBtns].forEach((btn) => {\n    btn.addEventListener('click', () => {\n      [...tempBtns].forEach((b) => {\n        if (b === btn) {\n          b.classList.add('pressed-btn');\n        } else {\n          b.classList.remove('pressed-btn');\n        }\n      });\n    });\n  });\n};\n\nconst loadError = (err) => {\n  const content = document.getElementById('weather');\n  content.innerHTML = '<h2>Error, try again later<h2>';\n  console.log(err);\n  load();\n};\n\nconst getByCity = async (city, options) => {\n  try {\n    const { system } = options;\n    const fe = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${system}&appid=61e5f1d9ba214a56aac3a34d089a26b5`, { mode: 'cors' });\n    const result = await fe.json();\n    return result;\n  } catch (err) {\n    return err;\n  }\n};\n\nwindow.onload = () => {\n  const input = document.getElementById('f_elem_city');\n  activateTempButton();\n\n  input.addEventListener('keydown', async (e) => {\n    if (e.key === 'Enter') {\n      let inputVal = input.value.split(',');\n      const system = document.getElementsByClassName('pressed-btn')[0];\n      inputVal = inputVal.map((inp) => inp.trim());\n\n      const country = Object.keys(_countryDictionary__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).find((key) => {\n        if (_countryDictionary__WEBPACK_IMPORTED_MODULE_0__[\"default\"][key] === inputVal[2]) {\n          return key;\n        }\n      });\n\n      load();\n      const val = `${inputVal[0]}${country ? `,${country.toLowerCase()}` : ''}`;\n\n      try {\n        const data = await getByCity(val, { system: system.dataset.system });\n        Object(_changeUi__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data, system.dataset.system);\n        setTimeout(() => {\n          load();\n        }, 600);\n      } catch (err) {\n        loadError(err);\n      }\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/weatherConditions.js":
/*!**********************************!*\
  !*** ./src/weatherConditions.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst weathers = {\n  Clear: './img/Clear.png',\n  Clouds: './img/Clouds.jpg',\n  Rain: './img/Rain.jpg',\n  Drizzle: './img/Drizzle.jpg',\n  Thunderstorm: './img/Thunderstorm.png',\n  Snow: './img/Snow.png',\n  Mist: './img/Mist.jpg',\n  Smoke: './img/Smoke.jpg',\n  Haze: './img/Haze.jpg',\n  Dust: './img/Dust.jpg',\n  Fog: './img/Fog.jpg',\n  Sand: './img/Sand.jpg',\n  Dust: './img/Dust.jpg',\n  Ash: './img/Ash.jpg',\n  Squall: './img/Squall.jpg',\n  Tornado: './img/Tornado.png',\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (weathers);\n\n\n//# sourceURL=webpack:///./src/weatherConditions.js?");

/***/ })

/******/ });