webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (amount) {
  var options = {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  }; // if its a whole, dollar amount, leave off the .00

  if (amount === 0) options.minimumFractionDigits = 0;
  var formatter = new Intl.NumberFormat('en-US', options);
  return formatter.format(amount);
});

/***/ })

})
//# sourceMappingURL=_app.js.d95d74d0d023b3a38f18.hot-update.js.map