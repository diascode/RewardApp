function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-qrcode-qrcode-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qrcode/qrcode.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qrcode/qrcode.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesQrcodeQrcodePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>qrcode</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/qrcode/qrcode-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/qrcode/qrcode-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: QrcodePageRoutingModule */

  /***/
  function srcAppPagesQrcodeQrcodeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrcodePageRoutingModule", function () {
      return QrcodePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _qrcode_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./qrcode.page */
    "./src/app/pages/qrcode/qrcode.page.ts");

    var routes = [{
      path: '',
      component: _qrcode_page__WEBPACK_IMPORTED_MODULE_3__["QrcodePage"]
    }];

    var QrcodePageRoutingModule = function QrcodePageRoutingModule() {
      _classCallCheck(this, QrcodePageRoutingModule);
    };

    QrcodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QrcodePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/qrcode/qrcode.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/qrcode/qrcode.module.ts ***!
    \***********************************************/

  /*! exports provided: QrcodePageModule */

  /***/
  function srcAppPagesQrcodeQrcodeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrcodePageModule", function () {
      return QrcodePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _qrcode_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./qrcode-routing.module */
    "./src/app/pages/qrcode/qrcode-routing.module.ts");
    /* harmony import */


    var _qrcode_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./qrcode.page */
    "./src/app/pages/qrcode/qrcode.page.ts");

    var QrcodePageModule = function QrcodePageModule() {
      _classCallCheck(this, QrcodePageModule);
    };

    QrcodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _qrcode_routing_module__WEBPACK_IMPORTED_MODULE_5__["QrcodePageRoutingModule"]],
      declarations: [_qrcode_page__WEBPACK_IMPORTED_MODULE_6__["QrcodePage"]]
    })], QrcodePageModule);
    /***/
  },

  /***/
  "./src/app/pages/qrcode/qrcode.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/qrcode/qrcode.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesQrcodeQrcodePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3FyY29kZS9xcmNvZGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/qrcode/qrcode.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/qrcode/qrcode.page.ts ***!
    \*********************************************/

  /*! exports provided: QrcodePage */

  /***/
  function srcAppPagesQrcodeQrcodePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QrcodePage", function () {
      return QrcodePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var QrcodePage = /*#__PURE__*/function () {
      function QrcodePage() {
        _classCallCheck(this, QrcodePage);
      }

      _createClass(QrcodePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return QrcodePage;
    }();

    QrcodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-qrcode',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./qrcode.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/qrcode/qrcode.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./qrcode.page.scss */
      "./src/app/pages/qrcode/qrcode.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], QrcodePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-qrcode-qrcode-module-es5.js.map