(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-feed-feed-module~pages-login-login-module~pages-settings-settings-module~pages-signup-~b2407e33"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/facebookbutton/facebookbutton.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/facebookbutton/facebookbutton.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button text-wrap expand=\"block\" (click)='navigateToHomePage()' color=\"tertiary\"><ion-icon  name=\"logo-facebook\" slot=\"start\"></ion-icon>Entrar com sua conta do Facebook</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"/assets/img/qbLogo.png\"  alt=\"QB logo\" width=\"100px\">\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-button class=\"buttonLogout\" color=\"warning\"  slot=\"end\" (click)=\"logout()\" >\r\n    <ion-icon slot=\"start\"name=\"log-out\"></ion-icon>\r\n    <ion-label >Sair</ion-label>\r\n  </ion-button>\r\n    \r\n\r\n\r\n \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n\r\n  <ion-slide>\r\n      <app-logo></app-logo>\r\n      <h2>Bem Vindo</h2>\r\n    </ion-slide>\r\n\r\n  <ion-slide>\r\n    <h2>Sempre Mais para Você</h2>\r\n    <p> Projeto Modelo</p>\r\n  </ion-slide>\r\n  \r\n  <ion-slide>\r\n    <h2>O futuro a Deus pentence e ao homem lhe cabe alcansa-lo </h2>\r\n    <p> Projeto Modelo</p>\r\n  </ion-slide>\r\n</ion-slides>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button  expand=\"block\" (click)='navigateToLoginPage()' color=\"warning\">Entrar</ion-button>\r\n");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/components/slides/slides.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/components/logo/logo.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _facebookbutton_facebookbutton_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./facebookbutton/facebookbutton.component */ "./src/app/components/facebookbutton/facebookbutton.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/components/logout/logout.component.ts");










let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"], _facebookbutton_facebookbutton_component__WEBPACK_IMPORTED_MODULE_8__["FacebookbuttonComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"], _facebookbutton_facebookbutton_component__WEBPACK_IMPORTED_MODULE_8__["FacebookbuttonComponent"], _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/facebookbutton/facebookbutton.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/facebookbutton/facebookbutton.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  text-justify: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYWNlYm9va2J1dHRvbi9DOlxcVXNlcnNcXFNldHVwXFxpb25pY193b3Jrc3BhY2VcXFJld2FyZEFwcFxccmV3YXJkQXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmYWNlYm9va2J1dHRvblxcZmFjZWJvb2tidXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmFjZWJvb2tidXR0b24vZmFjZWJvb2tidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYWNlYm9va2J1dHRvbi9mYWNlYm9va2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b257XHJcbiAgICB0ZXh0LWp1c3RpZnk6IGF1dG87XHJcbiAgICBcclxufSIsImlvbi1idXR0b24ge1xuICB0ZXh0LWp1c3RpZnk6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/components/facebookbutton/facebookbutton.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/facebookbutton/facebookbutton.component.ts ***!
  \***********************************************************************/
/*! exports provided: FacebookbuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookbuttonComponent", function() { return FacebookbuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FacebookbuttonComponent = class FacebookbuttonComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToHomePage() {
        this.router.navigate(['home/feed']);
    }
};
FacebookbuttonComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FacebookbuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facebookbutton',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./facebookbutton.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/facebookbutton/facebookbutton.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./facebookbutton.component.scss */ "./src/app/components/facebookbutton/facebookbutton.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], FacebookbuttonComponent);



/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nby9sb2dvLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoComponent = class LogoComponent {
    constructor() { }
    ngOnInit() { }
};
LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogoComponent);



/***/ }),

/***/ "./src/app/components/logout/logout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let LogoutComponent = class LogoutComponent {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() { }
    logout() {
        this.auth.logOutFire();
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logout/logout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logout.component.scss */ "./src/app/components/logout/logout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/components/slides/slides.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slides/slides.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  padding: 75px 20px;\n  display: block;\n}\nion-slide h2 {\n  font-size: 36px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvQzpcXFVzZXJzXFxTZXR1cFxcaW9uaWNfd29ya3NwYWNlXFxSZXdhcmRBcHBcXHJld2FyZEFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2xpZGVzXFxzbGlkZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0NKO0FEQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVzL3NsaWRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXtcclxuICAgIHBhZGRpbmc6IDc1cHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59IiwiaW9uLXNsaWRlIHtcbiAgcGFkZGluZzogNzVweCAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1zbGlkZSBoMiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/slides/slides.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slides/slides.component.ts ***!
  \*******************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlidesComponent = class SlidesComponent {
    constructor() {
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() { }
};
SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slides',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slides.component.scss */ "./src/app/components/slides/slides.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlidesComponent);



/***/ }),

/***/ "./src/app/components/start/start.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/start/start.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhcnQvc3RhcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/start/start.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let StartComponent = class StartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToLoginPage() {
        this.router.navigate(['login']);
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.scss */ "./src/app/components/start/start.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StartComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storageservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storageservice.service */ "./src/app/services/storageservice.service.ts");
/* harmony import */ var _config_auth_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../config/auth-constant */ "./src/app/config/auth-constant.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









let AuthService = class AuthService {
    constructor(fireAuth, router, fDb, storage, alert) {
        this.fireAuth = fireAuth;
        this.router = router;
        this.fDb = fDb;
        this.storage = storage;
        this.alert = alert;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]('');
    }
    getUserData() {
        return this.storage.get(_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__["AuthConstant"].AUTH)
            .then(res => {
            this.userData.next(res);
        });
    }
    loginFire(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = this.fireAuth.auth.signInWithEmailAndPassword(email, password)
                .then(res => {
                if (res.user) {
                    this.storage.store(_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__["AuthConstant"].AUTH, res);
                    this.router.navigateByUrl(`/home`);
                    console.log(res);
                }
            })
                .catch(err => this.alert.presentAlert("Erro!", "Usuário não encotrado, Verifique seu email e senha"));
        });
    }
    currentUser() {
        return this.userEmail = this.fireAuth.auth.onAuthStateChanged(user => {
            if (user) {
                console.log(user.email);
                this.userEmail = user.email.toString;
            }
        });
    }
    saveUserData(email) {
        let userObj = {
            creation: new Date().toDateString(),
            logins: 1,
            rewardCount: 0,
            lastLogin: new Date().toLocaleString(),
            id: ''
        };
        this.fDb.collection('User').doc('details').set({
            userName: email,
            creation: userObj.creation,
            logins: userObj.logins,
            rewardCount: userObj.rewardCount,
            lastLogin: userObj.lastLogin
        })
            .then(res => {
            return this.alert.presentToast('Dados', 'Dados salvo');
        });
        return console.log('Dados Firebase');
    }
    registerFire(email, password) {
        this.fireAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
            this.saveUserData(email);
            this.loginFire(email, password)
                .then(res => {
                this.fireAuth.auth.onAuthStateChanged(user => {
                    if (user) {
                        this.userEmail = user.email;
                        this.alert.presentToast("Usuário Registrado", this.userEmail);
                    }
                });
            });
        })
            .catch(err => this.alert.presentAlert("Erro!", err));
    }
    logOutFire() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log("signout");
            this.fireAuth.auth.signOut()
                .then(res => {
                console.log(res);
                this.alert.presentAlert("Obrigado", "Volte Sempre");
                this.storage.removeItem(_config_auth_constant__WEBPACK_IMPORTED_MODULE_6__["AuthConstant"].AUTH).then(res => {
                    this.router.navigateByUrl('');
                    this.userData.next('');
                });
            })
                .then(res => this.router.navigateByUrl(`/home/feed`))
                .catch(err => this.alert.presentAlert('err', err));
        });
    }
};
AuthService.ctorParameters = () => [
    { type: angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
    { type: _storageservice_service__WEBPACK_IMPORTED_MODULE_5__["StorageserviceService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
        _storageservice_service__WEBPACK_IMPORTED_MODULE_5__["StorageserviceService"],
        _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]])
], AuthService);



/***/ })

}]);
//# sourceMappingURL=default~pages-feed-feed-module~pages-login-login-module~pages-settings-settings-module~pages-signup-~b2407e33-es2015.js.map