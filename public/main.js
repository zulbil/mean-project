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
    { path: 'signup', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], canActivate: [_services_guard_authguard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_services_guard_authguard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
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

module.exports = "<router-outlet></router-outlet>"

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
                if (result.message) {
                    _this.flashMessage.show(result.message, { cssClass: 'alert-danger', timeout: 4000 });
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

module.exports = "<nav class=\"navbar navbar-expand-md custom-navbar fixed-top\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    <img src=\"./../../assets/images/logo-ang.png\" alt=\"Logo\"> Mean Project\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item\" *ngIf=\"authService.isAuthenticated()\">\r\n        <a class=\"nav-link logout\" (click)=\"onLogoutClick()\">Se déconnecter</a>\r\n      </li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.isAuthenticated()\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link logout\" routerLink=\"/profile\">Profile</a>\r\n      </li>\r\n    </ul>\r\n    <!-- <form class=\"form-inline mt-2 mt-md-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form> -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logout {\n  cursor: pointer; }\n\n.custom-navbar {\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n  border-bottom: 1px solid #dee2e6 !important;\n  z-index: 99;\n  background: #fff; }\n\n.custom-navbar .navbar-brand img {\n    width: 40px;\n    vertical-align: middle; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxub2RlXFxOb2RlUHJvamVjdHNcXG1lYW4tcHJvamVjdFxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsZUFBZSxFQUFBOztBQUN6QjtFQUNJLG1EQUE2QztFQUM3QywyQ0FBMkM7RUFDM0MsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUpwQjtJQU1RLFdBQVc7SUFDWCxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3V0IHsgY3Vyc29yOiBwb2ludGVyOyB9XHJcbi5jdXN0b20tbmF2YmFyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjEyNXJlbSAuMjVyZW0gcmdiYSgwLDAsMCwuMDc1KTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7IFxyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLm5hdmJhci1icmFuZCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"

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

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container main-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"central-meta\">\r\n        <div class=\"new-postbox\">\r\n      <figure>\r\n        <img class=\"circle-img\" src=\"../../assets/images/user.jpg\" alt=\"User\">\r\n      </figure>\r\n      <div class=\"newpst-input\">\r\n        <form method=\"post\" [formGroup]=\"postForm\" (ngSubmit)=\"postStatus()\">\r\n          <textarea \r\n            name=\"body\" \r\n            rows=\"2\" \r\n            placeholder=\"write something\" \r\n            formControlName=\"content\"\r\n            required>\r\n          </textarea>\r\n          <div class=\"attachments\">\r\n            <ul>\r\n              <li>\r\n                <i class=\"fa fa-music\"></i>\r\n                <label class=\"fileContainer\">\r\n                  <input type=\"file\" (change)=\"onMusicUpload($event)\" name=\"music\">\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa fa-image\"></i>\r\n                <label class=\"fileContainer\">\r\n                  <input type=\"file\" (change)=\"onImageUpload($event)\" name=\"image\">\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa fa-video-camera\"></i>\r\n                <label class=\"fileContainer\">\r\n                  <input type=\"file\" (change)=\"onVideoUpload($event)\" name=\"video\">\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <i class=\"fa fa-camera\"></i>\r\n                <label class=\"fileContainer\">\r\n                  <input type=\"file\" (change)=\"onFileUpload($event)\" name=\"file\">\r\n                </label>\r\n              </li>\r\n              <li>\r\n                <button type=\"submit\" class=\"btn btn-outline-primary\">Post</button>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </form>\r\n      </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"load-more\">\r\n        <div class=\"central-meta item\" style=\"display: inline-block;\" *ngFor=\"let post of posts.posts\">\r\n            <div class=\"user-post\">\r\n              <div class=\"friend-info\">\r\n                <figure>\r\n                    <img class=\"circle-img\" src=\"../../assets/images/user.jpg\" alt=\"User\">\r\n                </figure>\r\n                <div class=\"friend-name\">\r\n                  <ins><a href=\"time-line.html\" title=\"\">Janice Griffith</a></ins>\r\n                  <span>published: {{ post.created | date:'medium' }}</span>\r\n                </div>\r\n                <div class=\"post-meta\">\r\n                  <div class=\"description\">\r\n                    {{ post.content }}\r\n                  </div>\r\n                  <img *ngIf=\"post.media\" src=\"{{ post.media }}\" alt=\"Post image\">\r\n                  <div class=\"we-video-info\">\r\n                    <ul>\r\n                      <li>\r\n                        <span class=\"like\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"like\" (click)=\"like(post)\">\r\n                          <i class=\"fa fa-heart-o\"></i>\r\n                          <ins>{{ post.likes }}</ins>\r\n                        </span>\r\n                      </li>\r\n                      <li>\r\n                        <span class=\"dislike\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Dislike\" (click)=\"dislike(post)\">\r\n                          <i class=\"fa fa fa-heartbeat\"></i>\r\n                          <ins>{{ post.dislikes }}</ins>\r\n                        </span>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n        <flash-messages></flash-messages>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-top: 100px; }\n\n.central-meta {\n  background: #fdfdfd none repeat scroll 0 0;\n  border: 1px solid #ede9e9;\n  border-radius: 3px;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 25px; }\n\n.central-meta .new-postbox {\n    display: inline-block;\n    width: 100%; }\n\n.central-meta .new-postbox > figure {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: top;\n    width: 10.4%; }\n\n.central-meta .newpst-input {\n    display: inline-block;\n    margin-left: 10px;\n    vertical-align: top;\n    width: 85.5%; }\n\n.central-meta .newpst-input > form {\n    display: inline-block;\n    width: 100%; }\n\n.central-meta .newpst-input textarea {\n    float: left;\n    width: 100%; }\n\n.central-meta textarea {\n    border: 1px solid #eeeeee;\n    border-radius: 6px 6px 0 0;\n    padding: 10px;\n    width: 100%;\n    border-bottom: 0; }\n\n.central-meta .attachments {\n    border: 1px solid #eee;\n    display: block;\n    padding: 10px;\n    text-align: right;\n    border-top: 0;\n    background: #fff; }\n\n.central-meta .attachments > ul {\n    list-style: outside none none;\n    margin-bottom: 0;\n    padding-left: 0; }\n\n.central-meta .attachments li {\n    display: inline-block;\n    margin-left: 5px; }\n\nfigure .circle-img {\n  height: 70px;\n  width: 70px;\n  border-radius: 70px; }\n\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.fileContainer {\n  color: #d8d8d8;\n  font-size: 11px;\n  margin: 0 0 0 5px;\n  position: relative;\n  text-transform: capitalize; }\n\n.attachments .fileContainer [type=\"file\"] {\n  right: 6px;\n  top: -18px;\n  width: 20px; }\n\n.fileContainer [type=file] {\n  cursor: pointer;\n  display: block;\n  filter: alpha(opacity=0);\n  opacity: 0;\n  position: absolute;\n  right: 0px;\n  text-align: right;\n  top: 0;\n  width: 100%;\n  overflow: hidden; }\n\n.central-meta {\n  background: #fdfdfd none repeat scroll 0 0;\n  border: 1px solid #ede9e9;\n  border-radius: 3px;\n  display: inline-block;\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 25px; }\n\n.friend-info {\n  display: inline-block;\n  position: relative;\n  width: 100%; }\n\n.friend-info > figure {\n  display: inline-block;\n  margin-bottom: 0;\n  vertical-align: middle;\n  width: 8%; }\n\nfigure {\n  margin: 0 0 1rem; }\n\n.coment-area {\n  display: inline-block;\n  margin-top: 10px;\n  width: 100%; }\n\n.friend-name {\n  display: inline-block;\n  padding-left: 10px;\n  vertical-align: middle;\n  width: 75%;\n  margin-left: 5%; }\n\n.friend-name > span {\n  color: #999;\n  float: left;\n  font-size: 12px;\n  text-transform: capitalize;\n  width: 100%; }\n\n.post-meta {\n  float: left;\n  margin-top: 15px;\n  width: 100%; }\n\n.post-meta > img {\n  float: left;\n  width: 100%; }\n\n.we-video-info {\n  float: left;\n  padding: 15px 0 10px;\n  width: 100%;\n  position: relative;\n  z-index: 0; }\n\n.we-video-info > ul {\n  width: 100%;\n  line-height: 27px;\n  padding-left: 0;\n  margin-bottom: 0;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start; }\n\n.we-video-info > ul li {\n  display: inline-block;\n  font-size: 13px;\n  margin-right: 40px; }\n\n.we-video-info > ul li span {\n  font-size: 16px;\n  font-weight: 400;\n  margin-right: 3px;\n  position: relative; }\n\n.we-video-info > ul li span ins {\n  font-size: 11px;\n  left: 20px;\n  position: absolute;\n  text-decoration: none;\n  top: -10px; }\n\n.we-video-info > ul li span.like {\n  color: green;\n  cursor: pointer;\n  transition: all 0.2s linear 0s; }\n\n.we-video-info > ul li span.dislike {\n  color: red;\n  cursor: pointer;\n  transition: all 0.2s linear 0s; }\n\n.description {\n  float: left;\n  margin-top: 12px;\n  width: 100%; }\n\n.description > p {\n  margin-bottom: 20px; }\n\n.coment-area {\n  display: inline-block;\n  margin-top: 10px;\n  width: 100%; }\n\n.we-comet {\n  float: left;\n  width: 100%;\n  padding-left: 0;\n  list-style: none; }\n\n.menu {\n  width: 2em;\n  height: 2em;\n  z-index: 2;\n  position: relative; }\n\n.menu .btn {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background: #111;\n  opacity: 0;\n  z-index: -10;\n  cursor: pointer;\n  padding: 0;\n  border: none;\n  font-size: 13px;\n  transition: opacity 1s, z-index 0.3s, -webkit-transform 1s;\n  transition: opacity 1s, z-index 0.3s, transform 1s;\n  transition: opacity 1s, z-index 0.3s, transform 1s, -webkit-transform 1s;\n  -webkit-transform: translateX(0);\n  transform: translateX(0); }\n\n.menu .btn.trigger {\n  opacity: 1;\n  z-index: 100;\n  cursor: pointer;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s; }\n\n.menu .btn.trigger i {\n    color: #fff;\n    vertical-align: middle; }\n\n.menu .btn.trigger:hover {\n    -webkit-transform: scale(1.2);\n    transform: scale(1.2); }\n\n.menu .btn.trigger:hover .fa {\n      color: #f44535; }\n\n.post-comt-box form button {\n  bottom: 2px;\n  position: absolute;\n  right: 0;\n  background: none;\n  border: 1px solid transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvQzpcXG5vZGVcXE5vZGVQcm9qZWN0c1xcbWVhbi1wcm9qZWN0XFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccG9zdHNcXHBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQWdCLGlCQUFpQixFQUFBOztBQUNqQztFQUNJLDBDQUEwQztFQUMxQyx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFQakI7SUFTUSxxQkFBcUI7SUFDckIsV0FBVyxFQUFBOztBQVZuQjtJQWFRLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTs7QUFoQnBCO0lBbUJRLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTs7QUF0QnBCO0lBeUJRLHFCQUFxQjtJQUNyQixXQUFXLEVBQUE7O0FBMUJuQjtJQTZCUSxXQUFXO0lBQ1gsV0FBVyxFQUFBOztBQTlCbkI7SUFpQ1EseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQixFQUFBOztBQXJDeEI7SUF3Q1Esc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0IsRUFBQTs7QUE3Q3hCO0lBZ0RRLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBOztBQWxEdkI7SUFxRFEscUJBQXFCO0lBQ3JCLGdCQUFnQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0kscUJBQXFCO0VBQ3JCLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztFQUNuQyxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUE7O0FBRTlCO0VBQ0ksVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBRWY7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsTUFBTTtFQUNOLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSwwQ0FBMEM7RUFDMUMseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhLEVBQUE7O0FBRWpCO0VBQ0kscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixTQUFTLEVBQUE7O0FBRWI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksV0FBVztFQUNYLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkIsRUFBQTs7QUFFL0I7RUFDSSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUV0QjtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLDhCQUE4QixFQUFBOztBQUVoQztFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsOEJBQThCLEVBQUE7O0FBRWhDO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFFZjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUVwQjtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFFZiwwREFBa0Q7RUFBbEQsa0RBQWtEO0VBQWxELHdFQUFrRDtFQUNsRCxnQ0FBZ0M7RUFFaEMsd0JBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBRWYsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUExQixrREFBMEIsRUFBQTs7QUFMOUI7SUFPTSxXQUFXO0lBQ1gsc0JBQXNCLEVBQUE7O0FBUjVCO0lBV1EsNkJBQTZCO0lBRTdCLHFCQUFxQixFQUFBOztBQWI3QjtNQWNjLGNBQWMsRUFBQTs7QUFHNUI7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEIsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRlbnQgeyBtYXJnaW4tdG9wOiAxMDBweDsgfVxyXG4uY2VudHJhbC1tZXRhIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZGZkZmQgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZGU5ZTk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgLm5ldy1wb3N0Ym94IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubmV3LXBvc3Rib3ggPiBmaWd1cmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgd2lkdGg6IDEwLjQlO1xyXG4gICAgfVxyXG4gICAgLm5ld3BzdC1pbnB1dCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgd2lkdGg6IDg1LjUlO1xyXG4gICAgfVxyXG4gICAgLm5ld3BzdC1pbnB1dCA+IGZvcm0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5uZXdwc3QtaW5wdXQgdGV4dGFyZWEge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmF0dGFjaG1lbnRzIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmF0dGFjaG1lbnRzID4gdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG91dHNpZGUgbm9uZSBub25lO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgfVxyXG4gICAgLmF0dGFjaG1lbnRzIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIH1cclxufVxyXG5maWd1cmUgLmNpcmNsZS1pbWcge1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MHB4O1xyXG59XHJcblxyXG4uZmEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuLmZpbGVDb250YWluZXIge1xyXG4gICAgY29sb3I6ICNkOGQ4ZDg7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBtYXJnaW46IDAgMCAwIDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5hdHRhY2htZW50cyAuZmlsZUNvbnRhaW5lciBbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgcmlnaHQ6IDZweDtcclxuICAgIHRvcDogLTE4cHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG4uZmlsZUNvbnRhaW5lciBbdHlwZT1maWxlXSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmNlbnRyYWwtbWV0YSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmRmZGZkIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlOWU5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG4uZnJpZW5kLWluZm8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZyaWVuZC1pbmZvID4gZmlndXJlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDglO1xyXG59XHJcbmZpZ3VyZSB7XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtO1xyXG59XHJcbi5jb21lbnQtYXJlYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmZyaWVuZC1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5mcmllbmQtbmFtZSA+IHNwYW4ge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBvc3QtbWV0YSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucG9zdC1tZXRhID4gaW1nIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLndlLXZpZGVvLWluZm8ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4ud2UtdmlkZW8taW5mbyA+IHVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLndlLXZpZGVvLWluZm8gPiB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuLndlLXZpZGVvLWluZm8gPiB1bCBsaSBzcGFuIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLndlLXZpZGVvLWluZm8gPiB1bCBsaSBzcGFuIGlucyB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0b3A6IC0xMHB4O1xyXG59XHJcbi53ZS12aWRlby1pbmZvID4gdWwgbGkgc3Bhbi5saWtlIHtcclxuICBjb2xvcjogZ3JlZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhciAwcztcclxufVxyXG4ud2UtdmlkZW8taW5mbyA+IHVsIGxpIHNwYW4uZGlzbGlrZSB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyIDBzO1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGVzY3JpcHRpb24gPiBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmNvbWVudC1hcmVhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ud2UtY29tZXQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuLm1lbnUge1xyXG4gICAgd2lkdGg6IDJlbTtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubWVudSAuYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICMxMTE7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAxcywgei1pbmRleCAwLjNzLCAtd2Via2l0LXRyYW5zZm9ybSAxcztcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMsIHotaW5kZXggMC4zcywgdHJhbnNmb3JtIDFzO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcblxyXG4ubWVudSAuYnRuLnRyaWdnZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzO1xyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgfVxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICAgICAgLmZhIHsgY29sb3I6ICNmNDQ1MzU7IH1cclxuICAgIH1cclxufVxyXG4ucG9zdC1jb210LWJveCBmb3JtIGJ1dHRvbiB7XHJcbiAgYm90dG9tOiAycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);





var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService, flashMessage) {
        this.postService = postService;
        this.flashMessage = flashMessage;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.getPostsList();
        this.formControl();
    };
    PostsComponent.prototype.getPostsList = function () {
        var _this = this;
        this.postService.getPosts().subscribe(function (data) {
            console.log(data);
            _this.posts = data;
        });
    };
    PostsComponent.prototype.like = function (post) {
        post.likes++;
    };
    PostsComponent.prototype.dislike = function (post) {
        post.dislikes++;
    };
    PostsComponent.prototype.onMusicUpload = function (event) {
        console.log(event);
    };
    PostsComponent.prototype.onImageUpload = function (event) {
        console.log(event);
    };
    PostsComponent.prototype.onVideoUpload = function (event) {
        console.log(event);
    };
    PostsComponent.prototype.onFileUpload = function (event) {
        console.log(event);
    };
    PostsComponent.prototype.postStatus = function () {
        if (this.postForm.valid) {
            var newPost = {
                _id: null,
                created: "" + new Date().getTime(),
                updatedAt: null,
                likes: 0,
                dislikes: 0,
                content: this.postForm.value.content,
                media: null,
                _creator: null
            };
            this.postService.createPost(newPost).subscribe(function (result) {
                console.log(result);
            }, function (error) {
                console.log(error);
            });
        }
        else {
            console.log('Form is invalid');
        }
        this.postForm.reset();
    };
    PostsComponent.prototype.formControl = function () {
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8)
            ])
        });
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_post_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
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

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n  <p>Lastname: {{ user.lastname }}</p>\r\n  <p>Firstname: {{ user.firstname }}</p>\r\n  <p>Email: {{ user.email }}</p>\r\n</div>"

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
    AuthService.prototype.logUser = function (userData) {
        return this.http.post(this.baseApiEndpoint + "/login", userData, httpOptions)
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
            _this.flashService.show("" + error.message, { cssClass: 'alert-danger', timeout: 5000 });
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
        if (state.url == '/login' || state.url == '/signup') {
            if (this.authService.isAuthenticated()) {
                this.router.navigate(['/feed']);
                console.log('Authenticated...');
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (this.authService.isAuthenticated()) {
                // this.router.navigate(['/feed']);     
                console.log('Authenticated...');
                return true;
            }
            else {
                this.router.navigate(['/login']);
                console.log('Not authenticated...');
                return false;
            }
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var httpHeaders = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'x-auth': localStorage.getItem('token')
    })
};
var PostService = /** @class */ (function () {
    function PostService(http, flashService) {
        this.http = http;
        this.flashService = flashService;
        this.baseApiEndpoint = 'http://localhost:3000';
    }
    PostService.prototype.getPosts = function () {
        var _this = this;
        return this.http.get(this.baseApiEndpoint + "/feed", httpHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (feed) { return _this.postList = feed.posts; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Fetching post')));
    };
    PostService.prototype.createPost = function (newPost) {
        var _this = this;
        this.postList.push(newPost);
        return this.http.post(this.baseApiEndpoint + "/new/post", newPost, httpHeaders)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (newPost) {
            if (newPost)
                _this.flashService.show('A new post was posted', { cssClass: 'alert-success', timeout: 5000 });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('Creating a new post')));
    };
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    PostService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.flashService.show("" + error.message, { cssClass: 'alert-danger', timeout: 5000 });
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
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