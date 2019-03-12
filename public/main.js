(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_guard_authguard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/guard/authguard.service */ "./src/app/services/guard/authguard.service.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");








var routes = [
    { path: '', redirectTo: '/feed', pathMatch: 'full' },
    { path: 'signup', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"], canActivate: [_services_guard_authguard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'feed', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"], canActivate: [_services_guard_authguard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!-- <app-navbar></app-navbar>\r\n<section class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n          <div class=\"col-lg-3\"></div>\r\n          <div class=\"col-lg-6\">\r\n            <app-posts></app-posts>\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-top: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXG5vZGVcXE5vZGVQcm9qZWN0c1xcbWVhbi1wcm9qZWN0XFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mean-project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _services_validate_validate_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/validate/validate.service */ "./src/app/services/validate/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_guard_authguard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/guard/authguard.service */ "./src/app/services/guard/authguard.service.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_6__["PostsComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_13__["FlashMessagesModule"].forRoot()
            ],
            providers: [
                _services_validate_validate_service__WEBPACK_IMPORTED_MODULE_12__["ValidateService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"],
                _services_guard_authguard_service__WEBPACK_IMPORTED_MODULE_15__["AuthGuardService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authenticate-container\">\r\n    <div class=\"bg-content\">\r\n      <div class=\"logo\">\r\n        <img src=\"../../assets/images/logo-ang.png\" width=\"50\" alt=\"Logo Mean Project\"> Mean Project\r\n      </div>\r\n    </div>\r\n    <div class=\"form-content\">\r\n      <div class=\"auth-form\">\r\n          <h3>Login</h3> <br>\r\n          <form (ngSubmit)=\"onLogin()\" [formGroup]=\"loginForm\">\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Email address</label>\r\n                <input\r\n                  type=\"email\"\r\n                  class=\"form-control\"\r\n                  id=\"email\"\r\n                  name=\"email\"\r\n                  formControlName=\"email\"\r\n                  placeholder=\"Email\"\r\n                  required\r\n                >\r\n                <div class=\"invalid-feedback\" *ngIf=\"!loginForm.get('email').valid && loginForm.get('email').touched\">\r\n                  Please enter a valid email.\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Password</label>\r\n                <input\r\n                  type=\"password\"\r\n                  class=\"form-control\"\r\n                  id=\"password\"\r\n                  placeholder=\"Password\"\r\n                  formControlName=\"password\"\r\n                  required\r\n                >\r\n                <div class=\"invalid-feedback\" *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">\r\n                  Please enter a valid password, no special character is allow only alphanumeric.\r\n                </div>\r\n              </div>\r\n              <button type=\"submit\" class=\"btn btn-base\">Submit</button>\r\n              <div class=\"account\">\r\n                <a routerLink=\"/signup\">Don't have an account ?</a>\r\n              </div>\r\n          </form> <br>\r\n          <flash-messages></flash-messages>\r\n      </div>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, flashMessage, router) {
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.isValid = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formControlInit();
    };
    /* Login action  */
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        if (this.loginForm.valid) {
            var user = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password
            };
            this.authService.logUser(user).subscribe(function (result) {
                if (result.success) {
                    _this.authService.storeUserData(result.token, result.data);
                    _this.flashMessage.show('Login Success', { cssClass: 'alert-success', timeout: 4000 });
                    _this.router.navigate(['/feed']);
                }
            });
        }
        else {
            this.flashMessage.show('Please provide valid information', { cssClass: 'alert-danger', timeout: 2000 });
        }
        this.loginForm.reset();
    };
    /*  Init Form Validation */
    LoginComponent.prototype.formControlInit = function () {
        // tslint:disable-next-line:max-line-length
        var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(emailPattern)
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)
            ])
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\">Fixed navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\" *ngIf=\"authService.isAuthenticated()\">\r\n        <a class=\"nav-link logout\" (click)=\"onLogoutClick()\">Se déconnecter</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.isAuthenticated()\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link logout\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n    </ul>\r\n    <!-- <form class=\"form-inline mt-2 mt-md-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form> -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxub2RlXFxOb2RlUHJvamVjdHNcXG1lYW4tcHJvamVjdFxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvdXQgeyBjdXJzb3I6IHBvaW50ZXI7IH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_guard_authguard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/guard/authguard.service */ "./src/app/services/guard/authguard.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, authGard, flashMessage, router) {
        this.authService = authService;
        this.authGard = authGard;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        // this.flashMessage.show('You are logout', {cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_guard_authguard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container main-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-10\">\r\n      <div class=\"central-meta\">\r\n        <div class=\"new-postbox\">\r\n      <figure>\r\n        <img class=\"circle-img\" src=\"../../assets/images/user.jpg\" alt=\"User\">\r\n      </figure>\r\n      <div class=\"newpst-input\">\r\n        <form method=\"post\">\r\n          <textarea rows=\"2\" placeholder=\"write something\"></textarea>\r\n          <div class=\"attachments\">\r\n            <ul>\r\n              <li>\r\n                <i class=\"fa fa-music\"></i>\r\n                <label class=\"fileContainer\">\r\n                  <input type=\"file\">\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa fa-image\"></i>\r\n                <label class=\"fileContainer\">\r\n                  <input type=\"file\">\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa fa-video-camera\"></i>\r\n                <label class=\"fileContainer\">\r\n                  <input type=\"file\">\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa fa-camera\"></i>\r\n                <label class=\"fileContainer\">\r\n                  <input type=\"file\">\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <button type=\"submit\" class=\"btn btn-outline-primary\">Post</button>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </form>\r\n      </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"load-more\">\r\n        <div class=\"central-meta item\" style=\"display: inline-block;\" *ngFor=\"let post of posts\">\r\n            <div class=\"user-post\">\r\n              <div class=\"friend-info\">\r\n                <figure>\r\n                    <img class=\"circle-img\" src=\"../../assets/images/user.jpg\" alt=\"User\">\r\n                </figure>\r\n                <div class=\"friend-name\">\r\n                  <ins><a href=\"time-line.html\" title=\"\">Janice Griffith</a></ins>\r\n                  <span>published: {{ post.published_at }}</span>\r\n                </div>\r\n                <div class=\"post-meta\">\r\n                  <img src=\"{{ post.media }}\" alt=\"Post image\">\r\n                  <div class=\"we-video-info\">\r\n                    <ul>\r\n                      <li>\r\n                        <span class=\"views\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Views\">\r\n                          <i class=\"fa fa-eye\"></i>\r\n                          <ins>{{ post.views }}</ins>\r\n                        </span>\r\n                      </li>\r\n                      <li>\r\n                        <span class=\"comment\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Comments\">\r\n                          <i class=\"fa fa-comments-o\"></i>\r\n                          <ins>{{ post.comments }}</ins>\r\n                        </span>\r\n                      </li>\r\n                      <li>\r\n                        <span class=\"like\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"like\" (click)=\"like(post)\">\r\n                          <i class=\"fa fa-heart-o\"></i>\r\n                          <ins>{{ post.likes }}</ins>\r\n                        </span>\r\n                      </li>\r\n                      <li>\r\n                        <span class=\"dislike\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Dislike\" (click)=\"dislike(post)\">\r\n                          <i class=\"fa fa fa-heartbeat\"></i>\r\n                          <ins>{{ post.dislikes }}</ins>\r\n                        </span>\r\n                      </li>\r\n                      <li class=\"social-media\">\r\n                        <div class=\"menu\">\r\n                          <div class=\"btn trigger\"><i class=\"fa fa-share-alt\"></i></div>\r\n                          <div class=\"rotater\">\r\n                          <div class=\"btn btn-icon\"><a href=\"#\" title=\"\"><i class=\"fa fa-html5\"></i></a></div>\r\n                          </div>\r\n                          <div class=\"rotater\">\r\n                          <div class=\"btn btn-icon\"><a href=\"#\" title=\"\"><i class=\"fa fa-facebook\"></i></a></div>\r\n                          </div>\r\n                          <div class=\"rotater\">\r\n                          <div class=\"btn btn-icon\"><a href=\"#\" title=\"\"><i class=\"fa fa-google-plus\"></i></a></div>\r\n                          </div>\r\n                          <div class=\"rotater\">\r\n                          <div class=\"btn btn-icon\"><a href=\"#\" title=\"\"><i class=\"fa fa-twitter\"></i></a></div>\r\n                          </div>\r\n                          <div class=\"rotater\">\r\n                          <div class=\"btn btn-icon\"><a href=\"#\" title=\"\"><i class=\"fa fa-css3\"></i></a></div>\r\n                          </div>\r\n                          <div class=\"rotater\">\r\n                          <div class=\"btn btn-icon\"><a href=\"#\" title=\"\"><i class=\"fa fa-instagram\"></i></a>\r\n                          </div>\r\n                          </div>\r\n                          <div class=\"rotater\">\r\n                          <div class=\"btn btn-icon\"><a href=\"#\" title=\"\"><i class=\"fa fa-dribbble\"></i></a>\r\n                          </div>\r\n                          </div>\r\n                          <div class=\"rotater\">\r\n                          <div class=\"btn btn-icon\"><a href=\"#\" title=\"\"><i class=\"fa fa-pinterest\"></i></a>\r\n                          </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                  <div class=\"description\">\r\n                    <p>\r\n                      {{myPost.body}}\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"coment-area\">\r\n                <ul class=\"we-comet\">\r\n                  <!-- <li>\r\n                    <div class=\"comet-avatar\">\r\n                      <img src=\"images/resources/comet-1.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"we-comment\">\r\n                      <div class=\"coment-head\">\r\n                        <h5><a href=\"time-line.html\" title=\"\">Jason borne</a></h5>\r\n                        <span>1 year ago</span>\r\n                        <a class=\"we-reply\" href=\"#\" title=\"Reply\"><i class=\"fa fa-reply\"></i></a>\r\n                      </div>\r\n                      <p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>\r\n                    </div>\r\n                    <ul>\r\n                      <li>\r\n                        <div class=\"comet-avatar\">\r\n                          <img src=\"images/resources/comet-2.jpg\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"we-comment\">\r\n                          <div class=\"coment-head\">\r\n                            <h5><a href=\"time-line.html\" title=\"\">alexendra dadrio</a></h5>\r\n                            <span>1 month ago</span>\r\n                            <a class=\"we-reply\" href=\"#\" title=\"Reply\"><i class=\"fa fa-reply\"></i></a>\r\n                          </div>\r\n                          <p>yes, really very awesome car i see the features of this car in the official website of <a href=\"#\" title=\"\">#Mercedes-Benz</a> and really impressed :-)</p>\r\n                        </div>\r\n                      </li>\r\n                      <li>\r\n                        <div class=\"comet-avatar\">\r\n                          <img src=\"images/resources/comet-3.jpg\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"we-comment\">\r\n                          <div class=\"coment-head\">\r\n                            <h5><a href=\"time-line.html\" title=\"\">Olivia</a></h5>\r\n                            <span>16 days ago</span>\r\n                            <a class=\"we-reply\" href=\"#\" title=\"Reply\"><i class=\"fa fa-reply\"></i></a>\r\n                          </div>\r\n                          <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>\r\n                        </div>\r\n                      </li>\r\n                    </ul>\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"comet-avatar\">\r\n                      <img src=\"images/resources/comet-1.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"we-comment\">\r\n                      <div class=\"coment-head\">\r\n                        <h5><a href=\"time-line.html\" title=\"\">Donald Trump</a></h5>\r\n                        <span>1 week ago</span>\r\n                        <a class=\"we-reply\" href=\"#\" title=\"Reply\"><i class=\"fa fa-reply\"></i></a>\r\n                      </div>\r\n                      <p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel\r\n                        <i class=\"em em-smiley\"></i>\r\n                      </p>\r\n                    </div>\r\n                  </li>\r\n                  <li>\r\n                    <a href=\"#\" title=\"\" class=\"showmore underline\">more comments</a>\r\n                  </li> -->\r\n                  <li class=\"post-comment\">\r\n                    <div class=\"comet-avatar\">\r\n                      <img src=\"images/resources/comet-1.jpg\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"post-comt-box\">\r\n                      <form method=\"post\">\r\n                        <textarea placeholder=\"Post your comment\"></textarea>\r\n                        <div class=\"add-smiles\">\r\n                          <span class=\"em em-expressionless\" title=\"add icon\"></span>\r\n                        </div>\r\n                        <div class=\"smiles-bunch\">\r\n                          <i class=\"em em---1\"></i>\r\n                          <i class=\"em em-smiley\"></i>\r\n                          <i class=\"em em-anguished\"></i>\r\n                          <i class=\"em em-laughing\"></i>\r\n                          <i class=\"em em-angry\"></i>\r\n                          <i class=\"em em-astonished\"></i>\r\n                          <i class=\"em em-blush\"></i>\r\n                          <i class=\"em em-disappointed\"></i>\r\n                          <i class=\"em em-worried\"></i>\r\n                          <i class=\"em em-kissing_heart\"></i>\r\n                          <i class=\"em em-rage\"></i>\r\n                          <i class=\"em em-stuck_out_tongue\"></i>\r\n                        </div>\r\n                        <button type=\"submit\"></button>\r\n                      </form>\r\n                    </div>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-top: 100px; }\n\n.central-meta {\n  background: #fdfdfd none repeat scroll 0 0;\n  border: 1px solid #ede9e9;\n  border-radius: 3px;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 25px; }\n\n.central-meta .new-postbox {\n    display: inline-block;\n    width: 100%; }\n\n.central-meta .new-postbox > figure {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: top;\n    width: 10.4%; }\n\n.central-meta .newpst-input {\n    display: inline-block;\n    margin-left: 10px;\n    vertical-align: top;\n    width: 85.5%; }\n\n.central-meta .newpst-input > form {\n    display: inline-block;\n    width: 100%; }\n\n.central-meta .newpst-input textarea {\n    float: left;\n    width: 100%; }\n\n.central-meta textarea {\n    border: 1px solid #eeeeee;\n    border-radius: 6px 6px 0 0;\n    padding: 10px;\n    width: 100%;\n    border-bottom: 0; }\n\n.central-meta .attachments {\n    border: 1px solid #eee;\n    display: block;\n    padding: 10px;\n    text-align: right;\n    border-top: 0;\n    background: #fff; }\n\n.central-meta .attachments > ul {\n    list-style: outside none none;\n    margin-bottom: 0;\n    padding-left: 0; }\n\n.central-meta .attachments li {\n    display: inline-block;\n    margin-left: 5px; }\n\nfigure .circle-img {\n  height: 70px;\n  width: 70px;\n  border-radius: 70px; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.fileContainer {\n  color: #d8d8d8;\n  font-size: 11px;\n  margin: 0 0 0 5px;\n  position: relative;\n  text-transform: capitalize; }\n\n.attachments .fileContainer [type=\"file\"] {\n  right: 6px;\n  top: -18px;\n  width: 20px; }\n\n.fileContainer [type=file] {\n  cursor: pointer;\n  display: block;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  position: absolute;\n  right: 0px;\n  text-align: right;\n  top: 0;\n  width: 100%;\n  overflow: hidden; }\n\n.central-meta {\n  background: #fdfdfd none repeat scroll 0 0;\n  border: 1px solid #ede9e9;\n  border-radius: 3px;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 25px; }\n\n.friend-info {\n  display: inline-block;\n  position: relative;\n  width: 100%; }\n\n.friend-info > figure {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  width: 8%; }\n\nfigure {\n  margin: 0 0 1rem; }\n\n.coment-area {\n  display: inline-block;\n  margin-top: 10px;\n  width: 100%; }\n\n.friend-name {\n  display: inline-block;\n  padding-left: 10px;\n  vertical-align: middle;\n  width: 90%; }\n\n.friend-name > span {\n  color: #999;\n  float: left;\n  font-size: 12px;\n  text-transform: capitalize;\n  width: 100%; }\n\n.post-meta {\n  float: left;\n  margin-top: 15px;\n  width: 100%; }\n\n.post-meta > img {\n  float: left;\n  width: 100%; }\n\n.we-video-info {\n  float: left;\n  padding: 15px 0 10px;\n  width: 100%;\n  position: relative;\n  z-index: 0; }\n\n.we-video-info > ul {\n  width: 100%;\n  line-height: 27px;\n  padding-left: 0;\n  margin-bottom: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start; }\n\n.we-video-info > ul li {\n  display: inline-block;\n  font-size: 13px;\n  margin-right: 40px; }\n\n.we-video-info > ul li span {\n  font-size: 16px;\n  font-weight: 400;\n  margin-right: 3px;\n  position: relative; }\n\n.we-video-info > ul li span ins {\n  font-size: 11px;\n  left: 20px;\n  position: absolute;\n  text-decoration: none;\n  top: -10px; }\n\n.we-video-info > ul li span.like {\n  color: green;\n  cursor: pointer;\n  transition: all 0.2s linear 0s; }\n\n.we-video-info > ul li span.dislike {\n  color: red;\n  cursor: pointer;\n  transition: all 0.2s linear 0s; }\n\n.description {\n  float: left;\n  margin-top: 12px;\n  width: 100%; }\n\n.description > p {\n  margin-bottom: 20px; }\n\n.coment-area {\n  display: inline-block;\n  margin-top: 10px;\n  width: 100%; }\n\n.we-comet {\n  float: left;\n  width: 100%;\n  padding-left: 0;\n  list-style: none; }\n\n.menu {\n  width: 2em;\n  height: 2em;\n  z-index: 2;\n  position: relative; }\n\n.menu .btn {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #111;\n  opacity: 0;\n  z-index: -10;\n  cursor: pointer;\n  padding: 0;\n  border: none;\n  font-size: 13px;\n  transition: opacity 1s, z-index 0.3s, -webkit-transform 1s;\n  transition: opacity 1s, z-index 0.3s, transform 1s;\n  transition: opacity 1s, z-index 0.3s, transform 1s, -webkit-transform 1s;\n  -webkit-transform: translateX(0);\n  transform: translateX(0); }\n\n.menu .btn.trigger {\n  opacity: 1;\n  z-index: 100;\n  cursor: pointer;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s; }\n\n.menu .btn.trigger i {\n    color: #fff;\n    vertical-align: middle; }\n\n.menu .btn.trigger:hover {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); }\n\n.menu .btn.trigger:hover .fa {\n      color: #f44535; }\n\n.post-comt-box form button {\n  bottom: 2px;\n  position: absolute;\n  right: 0;\n  background: none;\n  border: 1px solid transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvQzpcXG5vZGVcXE5vZGVQcm9qZWN0c1xcbWVhbi1wcm9qZWN0XFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccG9zdHNcXHBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLGlCQUFpQixFQUFBOztBQUNqQztFQUNJLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFQakI7SUFTUSxxQkFBcUI7SUFDckIsV0FBVyxFQUFBOztBQVZuQjtJQWFRLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTs7QUFoQnBCO0lBbUJRLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTs7QUF0QnBCO0lBeUJRLHFCQUFxQjtJQUNyQixXQUFXLEVBQUE7O0FBMUJuQjtJQTZCUSxXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQTlCbkI7SUFpQ1EseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQXJDeEI7SUF3Q1Esc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTs7QUE3Q3hCO0lBZ0RRLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQWxEdkI7SUFxRFEscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kscUJBQXFCO0VBQ3JCLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBRWY7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsTUFBTTtFQUNOLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSwwQ0FBMEM7RUFDMUMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBRWpCO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixTQUFTLEVBQUE7O0FBRWI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTs7QUFFZDtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUVkO0VBQ0ksV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0kscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsVUFBVSxFQUFBOztBQUVaO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZiw4QkFBOEIsRUFBQTs7QUFFaEM7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQUVoQztFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0kscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBRWYsMERBQWtEO0VBQWxELGtEQUFrRDtFQUFsRCx3RUFBa0Q7RUFDbEQsZ0NBQWdDO0VBRWhDLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUVmLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFBMUIsa0RBQTBCLEVBQUE7O0FBTDlCO0lBT00sV0FBVztJQUNYLHNCQUFzQixFQUFBOztBQVI1QjtJQVdRLDZCQUE2QjtJQUU3QixxQkFBcUIsRUFBQTs7QUFiN0I7TUFjYyxjQUFjLEVBQUE7O0FBRzVCO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHsgbWFyZ2luLXRvcDogMTAwcHg7IH1cclxuLmNlbnRyYWwtbWV0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlOWU5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIC5uZXctcG9zdGJveCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm5ldy1wb3N0Ym94ID4gZmlndXJlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHdpZHRoOiAxMC40JTtcclxuICAgIH1cclxuICAgIC5uZXdwc3QtaW5wdXQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIHdpZHRoOiA4NS41JTtcclxuICAgIH1cclxuICAgIC5uZXdwc3QtaW5wdXQgPiBmb3JtIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubmV3cHN0LWlucHV0IHRleHRhcmVhIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5hdHRhY2htZW50cyB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIH1cclxuICAgIC5hdHRhY2htZW50cyA+IHVsIHtcclxuICAgICAgICBsaXN0LXN0eWxlOiBvdXRzaWRlIG5vbmUgbm9uZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIC5hdHRhY2htZW50cyBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbn1cclxuZmlndXJlIC5jaXJjbGUtaW1nIHtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzBweDtcclxufVxyXG5cclxuLmZhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDE0cHgvMSBGb250QXdlc29tZTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59XHJcbi5maWxlQ29udGFpbmVyIHtcclxuICAgIGNvbG9yOiAjZDhkOGQ4O1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMCA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4uYXR0YWNobWVudHMgLmZpbGVDb250YWluZXIgW3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIHJpZ2h0OiA2cHg7XHJcbiAgICB0b3A6IC0xOHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuLmZpbGVDb250YWluZXIgW3R5cGU9ZmlsZV0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jZW50cmFsLW1ldGEge1xyXG4gICAgYmFja2dyb3VuZDogI2ZkZmRmZCBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkZTllOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuLmZyaWVuZC1pbmZvIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mcmllbmQtaW5mbyA+IGZpZ3VyZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA4JTtcclxufVxyXG5maWd1cmUge1xyXG4gICAgbWFyZ2luOiAwIDAgMXJlbTtcclxufVxyXG4uY29tZW50LWFyZWEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5mcmllbmQtbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4uZnJpZW5kLW5hbWUgPiBzcGFuIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wb3N0LW1ldGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBvc3QtbWV0YSA+IGltZyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi53ZS12aWRlby1pbmZvIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweCAwIDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuLndlLXZpZGVvLWluZm8gPiB1bCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcbi53ZS12aWRlby1pbmZvID4gdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcbi53ZS12aWRlby1pbmZvID4gdWwgbGkgc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi53ZS12aWRlby1pbmZvID4gdWwgbGkgc3BhbiBpbnMge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdG9wOiAtMTBweDtcclxufVxyXG4ud2UtdmlkZW8taW5mbyA+IHVsIGxpIHNwYW4ubGlrZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXIgMHM7XHJcbn1cclxuLndlLXZpZGVvLWluZm8gPiB1bCBsaSBzcGFuLmRpc2xpa2Uge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhciAwcztcclxufVxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRlc2NyaXB0aW9uID4gcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jb21lbnQtYXJlYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLndlLWNvbWV0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5tZW51IHtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm1lbnUgLmJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMsIHotaW5kZXggMC4zcywgLXdlYmtpdC10cmFuc2Zvcm0gMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzLCB6LWluZGV4IDAuM3MsIHRyYW5zZm9ybSAxcztcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLm1lbnUgLmJ0bi50cmlnZ2VyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgICAgIC5mYSB7IGNvbG9yOiAjZjQ0NTM1OyB9XHJcbiAgICB9XHJcbn1cclxuLnBvc3QtY29tdC1ib3ggZm9ybSBidXR0b24ge1xyXG4gIGJvdHRvbTogMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/post/post.service */ "./src/app/services/post/post.service.ts");



var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService) {
        this.postService = postService;
        this.myPost = {
            id: 1,
            published_at: Date(),
            title: "My firtst post",
            likes: 150,
            dislikes: 50,
            comments: 10,
            views: 25,
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
            media: "../../assets/images/claims.jpg"
        };
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.getPostsList();
    };
    PostsComponent.prototype.getPostsList = function () {
        var _this = this;
        this.postService
            .getPosts()
            .subscribe(function (data) {
            _this.posts = data;
        });
    };
    PostsComponent.prototype.like = function (post) {
        post.likes++;
    };
    PostsComponent.prototype.dislike = function (post) {
        post.dislikes++;
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n  {{ user }}\r\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
    };
    ProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.authService.getUserProfile()
            .subscribe(function (data) {
            _this.user = data;
        }, function (err) { return console.log(err); });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"authenticate-container\">\r\n  <div class=\"bg-content\">\r\n    <div class=\"logo\">\r\n      <img src=\"../../assets/images/logo-ang.png\" width=\"50\" alt=\"Logo Mean Project\"> Mean Project\r\n    </div>\r\n  </div>\r\n  <div class=\"form-content\">\r\n    <div class=\"auth-form\">\r\n        <h3>Signup</h3> <br>\r\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"onSubmit()\">\r\n            <div class=\"form-group\">\r\n                <label for=\"firstname\">Firstname</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"firstname\"\r\n                  placeholder=\"Firstname\"\r\n                  required\r\n                >\r\n                <div class=\"invalid-feedback\" *ngIf=\"!signupForm.get('firstname').valid && signupForm.get('firstname').touched\">\r\n                  Please enter a firstname.\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"lastname\">Lastname</label>\r\n                <input\r\n                  type=\"text\"\r\n                  class=\"form-control\"\r\n                  formControlName=\"lastname\"\r\n                  placeholder=\"Lastname\"\r\n                  required\r\n                >\r\n                <div class=\"invalid-feedback\" *ngIf=\"!signupForm.get('lastname').valid && signupForm.get('lastname').touched\">\r\n                  Please enter a lastname.\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Username</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                formControlName=\"username\"\r\n                placeholder=\"Username\"\r\n                required\r\n              >\r\n              <div class=\"invalid-feedback\" *ngIf=\"!signupForm.get('username').valid && signupForm.get('username').touched\">\r\n                Please enter a username.\r\n              </div>\r\n          </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email address</label>\r\n              <input\r\n                type=\"email\"\r\n                class=\"form-control\"\r\n                formControlName=\"email\"\r\n                placeholder=\"Email\"\r\n                required\r\n                email\r\n              >\r\n              <div class=\"invalid-feedback\" *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\r\n                Please enter a valid email.\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input\r\n                type=\"password\"\r\n                class=\"form-control\"\r\n                formControlName=\"password\"\r\n                placeholder=\"Password\"\r\n                required\r\n                >\r\n                <div class=\"invalid-feedback\" *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\">\r\n                  Please enter a valid password.\r\n                </div>\r\n            </div>\r\n            <button\r\n              type=\"submit\" class=\"btn btn-base\">Submit</button>\r\n            <div class=\"account\">\r\n              <a routerLink=\"/login\">Already have an account ?</a>\r\n            </div>\r\n        </form> <br>\r\n        <flash-messages></flash-messages>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.scss":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/validate/validate.service */ "./src/app/services/validate/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_flashMessagesService, _authService, validate) {
        this._flashMessagesService = _flashMessagesService;
        this._authService = _authService;
        this.validate = validate;
        this.user = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: ''
        };
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.formControlInit();
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.user.firstname = this.signupForm.value.firstname;
        this.user.lastname = this.signupForm.value.lastname;
        this.user.username = this.signupForm.value.username;
        this.user.email = this.signupForm.value.email;
        this.user.password = this.signupForm.value.password;
        // Register User
        if (this.signupForm.valid && this.validate.validateRegister(this.user)) {
            this._authService.registerUser(this.user).subscribe(function (user) {
                if (user) {
                    _this._flashMessagesService.show('You are now registered and you can log in', { cssClass: 'alert-success', timeout: 2000 });
                }
            });
            this.signupForm.reset();
        }
        else {
            this._flashMessagesService.show('Please provide valid information', { cssClass: 'alert-danger', timeout: 2000 });
        }
    };
    RegisterComponent.prototype.formControlInit = function () {
        // tslint:disable-next-line:max-line-length
        var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var passwordPattern = /^[a-z0-9]+$/;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'firstname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')
            ]),
            'lastname': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*')
            ]),
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(emailPattern)
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(passwordPattern)
            ])
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_validate_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/server/mock-posts.ts":
/*!**************************************!*\
  !*** ./src/app/server/mock-posts.ts ***!
  \**************************************/
/*! exports provided: POSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTS", function() { return POSTS; });
var POSTS = [
    {
        id: 1,
        published_at: Date(),
        title: "My firtst post",
        likes: 150,
        dislikes: 50,
        comments: 10,
        views: 25,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
        media: "../../assets/images/claims.jpg"
    },
    {
        id: 2,
        published_at: Date(),
        title: "My firtst post",
        likes: 150,
        dislikes: 50,
        comments: 10,
        views: 25,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
        media: "../../assets/images/guillermo-alvarez.jpg"
    },
    {
        id: 3,
        published_at: Date(),
        title: "My firtst post",
        likes: 150,
        dislikes: 50,
        comments: 10,
        views: 25,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
        media: "../../assets/images/lalo-hernandez.jpg"
    },
    {
        id: 1,
        published_at: Date(),
        title: "My firtst post",
        likes: 150,
        dislikes: 10,
        comments: 10,
        views: 25,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
        media: "../../assets/images/neil-iris.jpg"
    }
];


/***/ }),

/***/ "./src/app/services/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, flashService) {
        this.http = http;
        this.flashService = flashService;
        this.baseApiEndpoint = 'http://localhost:3000';
    }
    /*** Add a new user */
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.baseApiEndpoint + "/signup", user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newUser) { return console.log(newUser); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Register User')));
    };
    /** Log User */
    AuthService.prototype.logUser = function (user) {
        return this.http.post(this.baseApiEndpoint + "/login", user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Login User')));
    };
    /** Store User data on client */
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    /** Logout User */
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    /** Check if the user is authenticated */
    AuthService.prototype.isAuthenticated = function () {
        return localStorage.getItem('token') != null;
    };
    /** Profile */
    AuthService.prototype.getUserProfile = function () {
        var httpHeaders = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'x-auth': localStorage.getItem('token')
            })
        };
        return this.http.get(this.baseApiEndpoint + "/profile", httpHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log(data); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('User Profile')));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    AuthService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.flashService.show(operation + " failed: " + error.message, { cssClass: 'alert-danger', timeout: 5000 });
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/guard/authguard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/guard/authguard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../auth/auth.service */ "./src/app/services/auth/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated()) {
            // this.router.navigate(['/feed']);       
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/post/post.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/post/post.service.ts ***!
  \***********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_mock_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../server/mock-posts */ "./src/app/server/mock-posts.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PostService = /** @class */ (function () {
    function PostService() {
    }
    PostService.prototype.getPosts = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_server_mock_posts__WEBPACK_IMPORTED_MODULE_2__["POSTS"]);
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/validate/validate.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/validate/validate.service.ts ***!
  \*******************************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.username == null ||
            user.firstname == null ||
            user.lastname == null ||
            user.email == null ||
            user.password == null) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\node\NodeProjects\mean-project\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map