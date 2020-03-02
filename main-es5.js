function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_ig_user_ig_user_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/ig-user/ig-user.routes */
    "./src/app/components/ig-user/ig-user.routes.ts");
    /* harmony import */


    var _components_ig_media_ig_media_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/ig-media/ig-media.routes */
    "./src/app/components/ig-media/ig-media.routes.ts");
    /* harmony import */


    var _components_ig_hashtag_ig_hashtag_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/ig-hashtag/ig-hashtag.routes */
    "./src/app/components/ig-hashtag/ig-hashtag.routes.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }].concat(_toConsumableArray(_components_ig_user_ig_user_routes__WEBPACK_IMPORTED_MODULE_3__["igUserRoutes"]), _toConsumableArray(_components_ig_media_ig_media_routes__WEBPACK_IMPORTED_MODULE_4__["igMediaRoutes"]), _toConsumableArray(_components_ig_hashtag_ig_hashtag_routes__WEBPACK_IMPORTED_MODULE_5__["igHashtagRoutes"]));

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'charts6';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 4,
      vars: 0,
      consts: [["name", "modal"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_ig_user_ig_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/ig-user/ig-user.component */
    "./src/app/components/ig-user/ig-user.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _components_home_ig_topsearch_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/home/ig-topsearch.service */
    "./src/app/components/home/ig-topsearch.service.ts");
    /* harmony import */


    var _components_ig_user_ig_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/ig-user/ig-user.service */
    "./src/app/components/ig-user/ig-user.service.ts");
    /* harmony import */


    var _components_ig_media_ig_media_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/ig-media/ig-media.component */
    "./src/app/components/ig-media/ig-media.component.ts");
    /* harmony import */


    var _components_ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/ig-media/ig-media.service */
    "./src/app/components/ig-media/ig-media.service.ts");
    /* harmony import */


    var _components_modal_full_media_full_media_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/modal/full-media/full-media.component */
    "./src/app/components/modal/full-media/full-media.component.ts");
    /* harmony import */


    var _components_modal_full_media_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/modal/full-media/modal.service */
    "./src/app/components/modal/full-media/modal.service.ts");
    /* harmony import */


    var _components_ig_hashtag_ig_hashtag_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/ig-hashtag/ig-hashtag.component */
    "./src/app/components/ig-hashtag/ig-hashtag.component.ts");
    /* harmony import */


    var _components_ig_hashtag_ig_hashtag_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/ig-hashtag/ig-hashtag.service */
    "./src/app/components/ig-hashtag/ig-hashtag.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_components_home_ig_topsearch_service__WEBPACK_IMPORTED_MODULE_11__["IgTopSearchService"], _components_ig_user_ig_user_service__WEBPACK_IMPORTED_MODULE_12__["IgUserService"], _components_ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_14__["IgMediaService"], _components_ig_hashtag_ig_hashtag_service__WEBPACK_IMPORTED_MODULE_18__["IgHashtagService"], _components_modal_full_media_modal_service__WEBPACK_IMPORTED_MODULE_16__["ModalService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_ig_user_ig_user_component__WEBPACK_IMPORTED_MODULE_8__["IgUserComponent"], _components_ig_media_ig_media_component__WEBPACK_IMPORTED_MODULE_13__["IgMediaComponent"], _components_modal_full_media_full_media_component__WEBPACK_IMPORTED_MODULE_15__["FullMediaComponent"], _components_ig_hashtag_ig_hashtag_component__WEBPACK_IMPORTED_MODULE_17__["IgHashtagComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_ig_user_ig_user_component__WEBPACK_IMPORTED_MODULE_8__["IgUserComponent"], _components_ig_media_ig_media_component__WEBPACK_IMPORTED_MODULE_13__["IgMediaComponent"], _components_modal_full_media_full_media_component__WEBPACK_IMPORTED_MODULE_15__["FullMediaComponent"], _components_ig_hashtag_ig_hashtag_component__WEBPACK_IMPORTED_MODULE_17__["IgHashtagComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
          providers: [_components_home_ig_topsearch_service__WEBPACK_IMPORTED_MODULE_11__["IgTopSearchService"], _components_ig_user_ig_user_service__WEBPACK_IMPORTED_MODULE_12__["IgUserService"], _components_ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_14__["IgMediaService"], _components_ig_hashtag_ig_hashtag_service__WEBPACK_IMPORTED_MODULE_18__["IgHashtagService"], _components_modal_full_media_modal_service__WEBPACK_IMPORTED_MODULE_16__["ModalService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_models_ig_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/ig-user-model */
    "./src/app/models/ig-user-model.ts");
    /* harmony import */


    var src_app_models_ig_hashtag_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/ig-hashtag-model */
    "./src/app/models/ig-hashtag-model.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ig_topsearch_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ig-topsearch.service */
    "./src/app/components/home/ig-topsearch.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_small_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "searching...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry, suggestions could not be loaded. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_ng_template_62_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var result_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().result;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", result_r5.profile_pic_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_ng_template_62_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function HomeComponent_ng_template_62_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_template_62_ng_container_2_Template, 2, 1, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_ng_template_62_ng_container_3_Template, 3, 0, "ng-container", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var result_r5 = ctx.result;
        var formatter_r7 = ctx.formatter;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isIgUser(result_r5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isIgHashtag(result_r5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](formatter_r7(result_r5));
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(igTopService, router) {
        var _this = this;

        _classCallCheck(this, HomeComponent);

        this.igTopService = igTopService;
        this.router = router;
        this.searching = false;
        this.searchFailed = false;

        this.search = function (text$) {
          return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            return _this.searching = true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) {
            return term.length < 3 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]) : _this.igTopService.GetIgTopSearch(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
              return _this.searchFailed = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) {
              return x.orderedMixedList;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
              _this.searchFailed = true;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            }));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () {
            return _this.searching = false;
          }));
        };

        this.igObjectFormatter = function (obj) {
          if (obj instanceof src_app_models_ig_user_model__WEBPACK_IMPORTED_MODULE_3__["IgUser"]) {
            return obj.full_name + " (" + obj.username + ")";
          } else if (obj instanceof src_app_models_ig_hashtag_model__WEBPACK_IMPORTED_MODULE_4__["IgHashtag"]) {
            return "#" + obj.name + " (Media count: " + obj.media_count + ")";
          }

          return "?";
        };

        this.igObjectSelectedFormatted = function (obj) {
          if (obj instanceof src_app_models_ig_user_model__WEBPACK_IMPORTED_MODULE_3__["IgUser"]) {
            return obj.full_name + " (" + obj.username + ")";
          } else if (obj instanceof src_app_models_ig_hashtag_model__WEBPACK_IMPORTED_MODULE_4__["IgHashtag"]) {
            return "#" + obj.name;
          }

          return "?";
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isIgUser",
        value: function isIgUser(obj) {
          if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(obj)) return false;
          return obj instanceof src_app_models_ig_user_model__WEBPACK_IMPORTED_MODULE_3__["IgUser"];
        }
      }, {
        key: "isIgHashtag",
        value: function isIgHashtag(obj) {
          if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(obj)) return false;
          return obj instanceof src_app_models_ig_hashtag_model__WEBPACK_IMPORTED_MODULE_4__["IgHashtag"];
        }
      }, {
        key: "isIgModelSelectedValid",
        value: function isIgModelSelectedValid() {
          if (this.isIgUser(this.model) || this.isIgHashtag(this.model)) {
            return !Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.model.id);
          }

          return false;
        }
      }, {
        key: "onSearch",
        value: function onSearch() {
          if (this.isIgUser(this.model)) {
            this.router.navigateByUrl("/" + this.model.username);
          } else if (this.isIgHashtag(this.model)) {
            this.router.navigateByUrl("/hashtag/" + this.model.name);
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ig_topsearch_service__WEBPACK_IMPORTED_MODULE_6__["IgTopSearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 64,
      vars: 12,
      consts: [[1, "masthead", "text-white", "text-center"], [1, "overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-6", "text-left"], [1, "mb-4"], [1, "col-7", "mx-auto"], ["f", "ngForm"], [1, "form-row"], [1, "col-12"], [1, "top-search-dropdown"], [2, "display", "flex"], [1, "mr-2"], [1, "fas", "fa-check-circle", "m-auto", "text-success", "icon-successfull-on-select-item"], [1, "input-group"], ["type", "text", "name", "main-search-input", "placeholder", "Search...", 1, "form-control", 3, "resultTemplate", "ngModel", "ngbTypeahead", "resultFormatter", "inputFormatter", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], [2, "height", "30px"], [4, "ngIf"], ["class", "invalid-feedback", "style", "display:block;", 4, "ngIf"], [1, "features-icons", "bg-light", "text-center"], [1, "col-5"], [1, "features-icons-item", "mx-auto", "mb-5", "mb-lg-0", "mb-lg-3"], [1, "features-icons-icon", "d-flex"], [1, "fas", "fa-user", "fa-3x", "m-auto", "text-primary"], [1, "feature-description", "mb-0"], [1, "fas", "fa-hashtag", "fa-3x", "m-auto", "text-primary"], [1, "row", "justify-content-center", "mt-5"], ["dropdownItemTemplate", ""], [1, "invalid-feedback", 2, "display", "block"], [1, "row"], [1, "col-2", "p-0"], [1, "col-10", "pl-0"], ["width", "40", "height", "40", 3, "src"], [2, "width", "40px", "height", "40px", "font-size", "2rem"], [1, "fas", "fa-hashtag", "fa-fw", "m-auto", "text-primary"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Downloadgram.ltd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Users, Photos, Videos and Hashtags.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.model = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_21_listener($event) {
            return ctx.onSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Go");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_small_24_Template, 2, 0, "small", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_div_25_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View any public profile and download any image/video with a single click!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Hashtags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Need some image? Check for hashtag and download what you like! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "View any public profile and download any image/video with a single click!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Hashtags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Need some image? Check for hashtag and download what you like! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, HomeComponent_ng_template_62_Template, 7, 3, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.isIgModelSelectedValid() ? "visible" : "hidden");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", ctx.searchFailed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resultTemplate", _r3)("ngModel", ctx.model)("ngbTypeahead", ctx.search)("resultFormatter", ctx.igObjectFormatter)("inputFormatter", ctx.igObjectSelectedFormatted);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isIgModelSelectedValid());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searching);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchFailed);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTypeahead"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"]],
      styles: ["header.masthead[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #343a40;\n  background: url('bg-masthead.jpg') no-repeat center center;\n  background-size: cover;\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n}\nheader.masthead[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #212529;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.3;\n}\nheader.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\nsection.features-icons[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\nsection.features-icons[_ngcontent-%COMP%]   .feature-description[_ngcontent-%COMP%] {\n  color: #645555;\n  visibility: visible;\n}\n.icon-successfull-on-select-item[_ngcontent-%COMP%] {\n  vertical-align: -webkit-baseline-middle;\n  font-size: 1.5rem;\n  border-radius: 110px;\n  border: 0px solid;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcaXZhbmxcXE9uZURyaXZlXFxEZXNrdG9wXFxJZ0NvbnRlbnREb3dubG9hZGVyXFxpZy1jb250ZW50LWRvd25sb2FkZXItZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQTtFQUNJLGtCQUFBO0VBQ0EseUJBcEJPO0VBcUJQLDBEQUFBO0VBWEEsc0JBQUE7RUFhQSxpQkFBQTtFQUNBLG9CQUFBO0FDdEJKO0FEdUJJO0VBQ0ksa0JBQUE7RUFDQSx5QkExQkc7RUEyQkgsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNyQlI7QUR1Qkk7RUFDSSxlQUFBO0FDckJSO0FEeUJBO0VBQ0ksZ0JBQUE7QUN0Qko7QUR1Qkk7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNyQlI7QUR5QkE7RUFDSSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDdEJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcclxuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xyXG4kZ3JheS0zMDA6ICNkZWUyZTYgIWRlZmF1bHQ7XHJcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcclxuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xyXG4kZ3JheS02MDA6ICM4NjhlOTYgIWRlZmF1bHQ7XHJcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcclxuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xyXG4kZ3JheS05MDA6ICMyMTI1MjkgIWRlZmF1bHQ7XHJcbiRibGFjazogIzAwMCAhZGVmYXVsdDtcclxuXHJcbi8vIE1peGluc1xyXG4vLyBCYWNrZ3JvdW5kIENvdmVyIE1peGluXHJcbkBtaXhpbiBiYWNrZ3JvdW5kLWNvdmVyIHtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiAgXHJcbiAgLy8gRm9udCBNaXhpbnNcclxuQG1peGluIGJvZHktZm9udCB7XHJcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oZWFkZXIubWFzdGhlYWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktODAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLW1hc3RoZWFkLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgQGluY2x1ZGUgYmFja2dyb3VuZC1jb3ZlcjtcclxuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhyZW07XHJcbiAgICAub3ZlcmxheSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTkwMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC4zO1xyXG4gICAgfVxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxufVxyXG5cclxuc2VjdGlvbi5mZWF0dXJlcy1pY29ucyB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgLmZlYXR1cmUtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGNvbG9yOiAjNjQ1NTU1O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGVcclxuICAgIH1cclxufVxyXG5cclxuLmljb24tc3VjY2Vzc2Z1bGwtb24tc2VsZWN0LWl0ZW0ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMTBweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn0iLCJoZWFkZXIubWFzdGhlYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctbWFzdGhlYWQuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZy10b3A6IDhyZW07XG4gIHBhZGRpbmctYm90dG9tOiA4cmVtO1xufVxuaGVhZGVyLm1hc3RoZWFkIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTI5O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuMztcbn1cbmhlYWRlci5tYXN0aGVhZCBoMSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuc2VjdGlvbi5mZWF0dXJlcy1pY29ucyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5zZWN0aW9uLmZlYXR1cmVzLWljb25zIC5mZWF0dXJlLWRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM2NDU1NTU7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5pY29uLXN1Y2Nlc3NmdWxsLW9uLXNlbGVjdC1pdGVtIHtcbiAgdmVydGljYWwtYWxpZ246IC13ZWJraXQtYmFzZWxpbmUtbWlkZGxlO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTEwcHg7XG4gIGJvcmRlcjogMHB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _ig_topsearch_service__WEBPACK_IMPORTED_MODULE_6__["IgTopSearchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/ig-topsearch.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/home/ig-topsearch.service.ts ***!
    \*********************************************************/

  /*! exports provided: IgTopSearchService */

  /***/
  function srcAppComponentsHomeIgTopsearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgTopSearchService", function () {
      return IgTopSearchService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_models_ig_topsearch_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/ig-topsearch-model */
    "./src/app/models/ig-topsearch-model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var IgTopSearchService =
    /*#__PURE__*/
    function () {
      function IgTopSearchService(http) {
        _classCallCheck(this, IgTopSearchService);

        this.http = http;
        this.URL = "/api/ig-topsearch/";
      }

      _createClass(IgTopSearchService, [{
        key: "GetIgTopSearch",
        value: function GetIgTopSearch(keyword) {
          return this.http.get(this.URL + keyword).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return new src_app_models_ig_topsearch_model__WEBPACK_IMPORTED_MODULE_2__["IgTopSearch"](res);
          }));
        }
      }]);

      return IgTopSearchService;
    }();

    IgTopSearchService.ɵfac = function IgTopSearchService_Factory(t) {
      return new (t || IgTopSearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    IgTopSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IgTopSearchService,
      factory: IgTopSearchService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgTopSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ig-hashtag/ig-hashtag.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/ig-hashtag/ig-hashtag.component.ts ***!
    \***************************************************************/

  /*! exports provided: IgHashtagComponent */

  /***/
  function srcAppComponentsIgHashtagIgHashtagComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgHashtagComponent", function () {
      return IgHashtagComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_full_media_full_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../modal/full-media/full-media.component */
    "./src/app/components/modal/full-media/full-media.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../ig-media/ig-media.service */
    "./src/app/components/ig-media/ig-media.service.ts");
    /* harmony import */


    var _modal_full_media_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../modal/full-media/modal.service */
    "./src/app/components/modal/full-media/modal.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/hashtag/", a1];
    };

    function IgHashtagComponent_a_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var hashtag_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, hashtag_r20));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" #", hashtag_r20, " ");
      }
    }

    function IgHashtagComponent_div_25_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgHashtagComponent_div_25_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgHashtagComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IgHashtagComponent_div_25_div_3_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IgHashtagComponent_div_25_div_4_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgHashtagComponent_div_25_Template_div_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var media_r21 = ctx.$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.openMedia(media_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgHashtagComponent_div_25_Template_div_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var media_r21 = ctx.$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r26.downloadThumbmail(media_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var media_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", "url(" + media_r21.thumbnail_src + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", media_r21.type === "GraphSidecar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", media_r21.type === "GraphVideo");
      }
    }

    var IgHashtagComponent =
    /*#__PURE__*/
    function () {
      function IgHashtagComponent(route, mediaService, modalService) {
        _classCallCheck(this, IgHashtagComponent);

        this.route = route;
        this.mediaService = mediaService;
        this.modalService = modalService;
        this.mediaOpen = false;
      }

      _createClass(IgHashtagComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.data.subscribe(function (data) {
            _this2.igHashtagFull = data.igHashtagFull;
          });
        }
      }, {
        key: "downloadThumbmail",
        value: function downloadThumbmail(media) {
          this.mediaService.GetMediaImageByUrl(media.thumbnail_src);
        }
      }, {
        key: "openMedia",
        value: function openMedia(media) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var fullMedia, modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.mediaOpen) {
                      _context.next = 2;
                      break;
                    }

                    return _context.abrupt("return");

                  case 2:
                    this.mediaOpen = true;
                    _context.next = 5;
                    return this.mediaService.GetIgMediaFullByShortcode(media.shortcode).toPromise();

                  case 5:
                    fullMedia = _context.sent;
                    modal = this.modalService.open(_modal_full_media_full_media_component__WEBPACK_IMPORTED_MODULE_2__["FullMediaComponent"], {
                      centered: true
                    });
                    modal.result.finally(function () {
                      return _this3.mediaOpen = false;
                    });
                    modal.componentInstance.fullMedia = fullMedia;

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return IgHashtagComponent;
    }();

    IgHashtagComponent.ɵfac = function IgHashtagComponent_Factory(t) {
      return new (t || IgHashtagComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_4__["IgMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modal_full_media_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]));
    };

    IgHashtagComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IgHashtagComponent,
      selectors: [["app-ig-hashtag"]],
      decls: 26,
      vars: 5,
      consts: [[1, "container"], [1, "row", "justify-content-center", "m-3"], [1, "col-10"], [1, "row", "mt-4"], [1, "col-3"], ["alt", "Profile Image", 1, "rounded", 3, "src"], [1, "col-9"], [1, "card-group", "mb-1"], [1, "card"], [1, "card-footer", "text-center"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "row"], ["class", "col-4", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "col-4"], [1, "card", "media-card", "mb-4", "shadow-lg"], [1, "bg-size-cover", "h-100"], ["class", "text-right pr-3 pt-2", 4, "ngIf"], [1, "hover-media"], [1, "actions"], [1, "mr-4"], [1, "action-icon", 3, "click"], [1, "fas", "fa-eye", "fa-3x"], [1, "fas", "fa-download", "fa-3x"], [1, "text-right", "pr-3", "pt-2"], [1, "fas", "fa-images", 2, "color", "white"], [1, "fas", "fa-video", 2, "color", "white"]],
      template: function IgHashtagComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Media count");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Related hashtags ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, IgHashtagComponent_a_19_Template, 2, 4, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, IgHashtagComponent_div_25_Template, 13, 4, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.igHashtagFull.profile_pic_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", ctx.igHashtagFull.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.igHashtagFull.media_count, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.igHashtagFull.correlated_hashtags);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.igHashtagFull.related_media);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWctaGFzaHRhZy9pZy1oYXNodGFnLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IgHashtagComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-ig-hashtag',
          templateUrl: './ig-hashtag.component.html',
          styleUrls: ['./ig-hashtag.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_4__["IgMediaService"]
        }, {
          type: _modal_full_media_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ig-hashtag/ig-hashtag.routes.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/ig-hashtag/ig-hashtag.routes.ts ***!
    \************************************************************/

  /*! exports provided: IgHashtagFullResolver, igHashtagRoutes */

  /***/
  function srcAppComponentsIgHashtagIgHashtagRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgHashtagFullResolver", function () {
      return IgHashtagFullResolver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "igHashtagRoutes", function () {
      return igHashtagRoutes;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ig_hashtag_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ig-hashtag.component */
    "./src/app/components/ig-hashtag/ig-hashtag.component.ts");
    /* harmony import */


    var _ig_hashtag_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ig-hashtag.service */
    "./src/app/components/ig-hashtag/ig-hashtag.service.ts");

    var PREFIX = 'hashtag';

    var IgHashtagFullResolver =
    /*#__PURE__*/
    function () {
      function IgHashtagFullResolver(service) {
        _classCallCheck(this, IgHashtagFullResolver);

        this.service = service;
      }

      _createClass(IgHashtagFullResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.service.GetIgHashtagFullByHashtag(route.paramMap.get('hashtag'));
        }
      }]);

      return IgHashtagFullResolver;
    }();

    IgHashtagFullResolver.ɵfac = function IgHashtagFullResolver_Factory(t) {
      return new (t || IgHashtagFullResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ig_hashtag_service__WEBPACK_IMPORTED_MODULE_2__["IgHashtagService"]));
    };

    IgHashtagFullResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IgHashtagFullResolver,
      factory: IgHashtagFullResolver.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgHashtagFullResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ig_hashtag_service__WEBPACK_IMPORTED_MODULE_2__["IgHashtagService"]
        }];
      }, null);
    })();

    var igHashtagRoutes = [{
      path: PREFIX + '/:hashtag',
      component: _ig_hashtag_component__WEBPACK_IMPORTED_MODULE_1__["IgHashtagComponent"],
      resolve: {
        igHashtagFull: IgHashtagFullResolver
      }
    }];
    /***/
  },

  /***/
  "./src/app/components/ig-hashtag/ig-hashtag.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/ig-hashtag/ig-hashtag.service.ts ***!
    \*************************************************************/

  /*! exports provided: IgHashtagService */

  /***/
  function srcAppComponentsIgHashtagIgHashtagServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgHashtagService", function () {
      return IgHashtagService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_models_ig_hashtag_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/ig-hashtag-model */
    "./src/app/models/ig-hashtag-model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var IgHashtagService =
    /*#__PURE__*/
    function () {
      function IgHashtagService(http) {
        _classCallCheck(this, IgHashtagService);

        this.http = http;
        this.URL = "/api/ig-hashtag/";
      }

      _createClass(IgHashtagService, [{
        key: "GetIgHashtagFullByHashtag",
        value: function GetIgHashtagFullByHashtag(hashtag) {
          return this.http.get(this.URL + hashtag).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return Object.assign(new src_app_models_ig_hashtag_model__WEBPACK_IMPORTED_MODULE_2__["IgHashtagFull"](), res);
          }));
        }
      }]);

      return IgHashtagService;
    }();

    IgHashtagService.ɵfac = function IgHashtagService_Factory(t) {
      return new (t || IgHashtagService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    IgHashtagService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IgHashtagService,
      factory: IgHashtagService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgHashtagService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ig-media/ig-media.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/ig-media/ig-media.component.ts ***!
    \***********************************************************/

  /*! exports provided: IgMediaComponent */

  /***/
  function srcAppComponentsIgMediaIgMediaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgMediaComponent", function () {
      return IgMediaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IgMediaComponent =
    /*#__PURE__*/
    function () {
      function IgMediaComponent() {
        _classCallCheck(this, IgMediaComponent);
      }

      _createClass(IgMediaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IgMediaComponent;
    }();

    IgMediaComponent.ɵfac = function IgMediaComponent_Factory(t) {
      return new (t || IgMediaComponent)();
    };

    IgMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IgMediaComponent,
      selectors: [["app-ig-media"]],
      decls: 16,
      vars: 0,
      consts: [["id", "exampleModalCenter", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary"]],
      template: function IgMediaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Modal title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Save changes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWctbWVkaWEvaWctbWVkaWEuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ig-media',
          templateUrl: './ig-media.component.html',
          styleUrls: ['./ig-media.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ig-media/ig-media.routes.ts":
  /*!********************************************************!*\
    !*** ./src/app/components/ig-media/ig-media.routes.ts ***!
    \********************************************************/

  /*! exports provided: IgMediaFullResolver, igMediaRoutes */

  /***/
  function srcAppComponentsIgMediaIgMediaRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgMediaFullResolver", function () {
      return IgMediaFullResolver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "igMediaRoutes", function () {
      return igMediaRoutes;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ig_media_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ig-media.component */
    "./src/app/components/ig-media/ig-media.component.ts");
    /* harmony import */


    var _ig_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ig-media.service */
    "./src/app/components/ig-media/ig-media.service.ts");

    var PREFIX = 'p';

    var IgMediaFullResolver =
    /*#__PURE__*/
    function () {
      function IgMediaFullResolver(service) {
        _classCallCheck(this, IgMediaFullResolver);

        this.service = service;
      }

      _createClass(IgMediaFullResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.service.GetIgMediaFullByShortcode(route.paramMap.get('shortcode'));
        }
      }]);

      return IgMediaFullResolver;
    }();

    IgMediaFullResolver.ɵfac = function IgMediaFullResolver_Factory(t) {
      return new (t || IgMediaFullResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ig_media_service__WEBPACK_IMPORTED_MODULE_2__["IgMediaService"]));
    };

    IgMediaFullResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IgMediaFullResolver,
      factory: IgMediaFullResolver.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgMediaFullResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ig_media_service__WEBPACK_IMPORTED_MODULE_2__["IgMediaService"]
        }];
      }, null);
    })();

    var igMediaRoutes = [{
      path: PREFIX + '/:shortcode',
      component: _ig_media_component__WEBPACK_IMPORTED_MODULE_1__["IgMediaComponent"],
      resolve: {
        igMediaFull: IgMediaFullResolver
      }
    }];
    /***/
  },

  /***/
  "./src/app/components/ig-media/ig-media.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/ig-media/ig-media.service.ts ***!
    \*********************************************************/

  /*! exports provided: IgMediaService */

  /***/
  function srcAppComponentsIgMediaIgMediaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgMediaService", function () {
      return IgMediaService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_models_ig_media_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/ig-media-model */
    "./src/app/models/ig-media-model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var IgMediaService =
    /*#__PURE__*/
    function () {
      function IgMediaService(http) {
        _classCallCheck(this, IgMediaService);

        this.http = http;
        this.URL = "/api/ig-media/";
      }

      _createClass(IgMediaService, [{
        key: "GetIgMediaFullByShortcode",
        value: function GetIgMediaFullByShortcode(shortcode) {
          return this.http.get(this.URL + shortcode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
            return Object.assign(new src_app_models_ig_media_model__WEBPACK_IMPORTED_MODULE_2__["IgMediaFull"](), res);
          }));
        }
      }, {
        key: "GetMediaImageByUrl",
        value: function GetMediaImageByUrl(full_url) {
          var _this4 = this;

          this.http.get(full_url, {
            responseType: 'blob'
          }).subscribe(function (val) {
            var url = URL.createObjectURL(val);

            _this4.downloadUrl(url, 'image.png');

            URL.revokeObjectURL(url);
          });
        }
      }, {
        key: "downloadUrl",
        value: function downloadUrl(url, fileName) {
          var a = document.createElement('a');
          a.href = url;
          a.download = fileName;
          document.body.appendChild(a);
          a.style = 'display: none';
          a.click();
          a.remove();
        }
      }]);

      return IgMediaService;
    }();

    IgMediaService.ɵfac = function IgMediaService_Factory(t) {
      return new (t || IgMediaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    IgMediaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IgMediaService,
      factory: IgMediaService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgMediaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ig-user/ig-user.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/ig-user/ig-user.component.ts ***!
    \*********************************************************/

  /*! exports provided: IgUserComponent */

  /***/
  function srcAppComponentsIgUserIgUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgUserComponent", function () {
      return IgUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_full_media_full_media_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../modal/full-media/full-media.component */
    "./src/app/components/modal/full-media/full-media.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../ig-media/ig-media.service */
    "./src/app/components/ig-media/ig-media.service.ts");
    /* harmony import */


    var _modal_full_media_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../modal/full-media/modal.service */
    "./src/app/components/modal/full-media/modal.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function IgUserComponent_div_35_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgUserComponent_div_35_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function IgUserComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IgUserComponent_div_35_div_3_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IgUserComponent_div_35_div_4_Template, 2, 0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgUserComponent_div_35_Template_div_click_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var media_r12 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r15.openMedia(media_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IgUserComponent_div_35_Template_div_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);

          var media_r12 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.downloadThumbmail(media_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var media_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", "url(" + media_r12.thumbnail_src + ")", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefaultStyleSanitizer"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", media_r12.type === "GraphSidecar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", media_r12.type === "GraphVideo");
      }
    }

    var IgUserComponent =
    /*#__PURE__*/
    function () {
      function IgUserComponent(route, mediaService, modalService) {
        _classCallCheck(this, IgUserComponent);

        this.route = route;
        this.mediaService = mediaService;
        this.modalService = modalService;
        this.mediaOpen = false;
      }

      _createClass(IgUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.data.subscribe(function (data) {
            _this5.igUserFull = data.igUserFull;
          });
        }
      }, {
        key: "downloadThumbmail",
        value: function downloadThumbmail(media) {
          this.mediaService.GetMediaImageByUrl(media.thumbnail_src);
        }
      }, {
        key: "openMedia",
        value: function openMedia(media) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var fullMedia, modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.mediaOpen) {
                      _context2.next = 2;
                      break;
                    }

                    return _context2.abrupt("return");

                  case 2:
                    this.mediaOpen = true;
                    _context2.next = 5;
                    return this.mediaService.GetIgMediaFullByShortcode(media.shortcode).toPromise();

                  case 5:
                    fullMedia = _context2.sent;
                    modal = this.modalService.open(_modal_full_media_full_media_component__WEBPACK_IMPORTED_MODULE_2__["FullMediaComponent"], {
                      centered: true
                    });
                    modal.result.finally(function () {
                      return _this6.mediaOpen = false;
                    });
                    modal.componentInstance.fullMedia = fullMedia;

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return IgUserComponent;
    }();

    IgUserComponent.ɵfac = function IgUserComponent_Factory(t) {
      return new (t || IgUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_4__["IgMediaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_modal_full_media_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]));
    };

    IgUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: IgUserComponent,
      selectors: [["app-ig-user"]],
      decls: 36,
      vars: 8,
      consts: [[1, "container"], [1, "row", "justify-content-center", "m-3"], [1, "col-10"], [1, "row", "mt-4"], [1, "col-3"], ["alt", "Profile Image", 1, "rounded", 3, "src"], [1, "col-9"], [1, "card-group", "mb-1"], [1, "card"], [1, "card-footer", "text-center"], [1, "col-12"], [1, "row"], ["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "card", "media-card", "mb-4", "shadow-lg"], [1, "bg-size-cover", "h-100"], ["class", "text-right pr-3 pt-2", 4, "ngIf"], [1, "hover-media"], [1, "actions"], [1, "mr-4"], [1, "action-icon", 3, "click"], [1, "fas", "fa-eye", "fa-3x"], [1, "fas", "fa-download", "fa-3x"], [1, "text-right", "pr-3", "pt-2"], [1, "fas", "fa-images", 2, "color", "white"], [1, "fas", "fa-video", 2, "color", "white"]],
      template: function IgUserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Follows");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Followed by");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Media count");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, IgUserComponent_div_35_Template, 13, 4, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.igUserFull.profile_pic_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.igUserFull.full_name, " (");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.igUserFull.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.igUserFull.follow_count, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.igUserFull.followed_by_count, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.igUserFull.media_count, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.igUserFull.biography);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.igUserFull.media_list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaWctdXNlci9pZy11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](IgUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-ig-user',
          templateUrl: './ig-user.component.html',
          styleUrls: ['./ig-user.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_4__["IgMediaService"]
        }, {
          type: _modal_full_media_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/ig-user/ig-user.routes.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/ig-user/ig-user.routes.ts ***!
    \******************************************************/

  /*! exports provided: IgUserFullResolver, igUserRoutes */

  /***/
  function srcAppComponentsIgUserIgUserRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgUserFullResolver", function () {
      return IgUserFullResolver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "igUserRoutes", function () {
      return igUserRoutes;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ig_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ig-user.component */
    "./src/app/components/ig-user/ig-user.component.ts");
    /* harmony import */


    var _ig_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ig-user.service */
    "./src/app/components/ig-user/ig-user.service.ts");

    var PREFIX = '';

    var IgUserFullResolver =
    /*#__PURE__*/
    function () {
      function IgUserFullResolver(service) {
        _classCallCheck(this, IgUserFullResolver);

        this.service = service;
      }

      _createClass(IgUserFullResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          return this.service.GetIgUserByUsername(route.paramMap.get('username'));
        }
      }]);

      return IgUserFullResolver;
    }();

    IgUserFullResolver.ɵfac = function IgUserFullResolver_Factory(t) {
      return new (t || IgUserFullResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ig_user_service__WEBPACK_IMPORTED_MODULE_2__["IgUserService"]));
    };

    IgUserFullResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IgUserFullResolver,
      factory: IgUserFullResolver.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgUserFullResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ig_user_service__WEBPACK_IMPORTED_MODULE_2__["IgUserService"]
        }];
      }, null);
    })();

    var igUserRoutes = [{
      path: PREFIX + ':username',
      component: _ig_user_component__WEBPACK_IMPORTED_MODULE_1__["IgUserComponent"],
      resolve: {
        igUserFull: IgUserFullResolver
      }
    }];
    /***/
  },

  /***/
  "./src/app/components/ig-user/ig-user.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/ig-user/ig-user.service.ts ***!
    \*******************************************************/

  /*! exports provided: IgUserService */

  /***/
  function srcAppComponentsIgUserIgUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgUserService", function () {
      return IgUserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_ig_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/ig-user-model */
    "./src/app/models/ig-user-model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var IgUserService =
    /*#__PURE__*/
    function () {
      function IgUserService(http) {
        _classCallCheck(this, IgUserService);

        this.http = http;
        this.URL = "/api/ig-user/";
      }

      _createClass(IgUserService, [{
        key: "GetIgUserByUsername",
        value: function GetIgUserByUsername(username) {
          return this.http.get(this.URL + username).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return Object.assign(new src_app_models_ig_user_model__WEBPACK_IMPORTED_MODULE_1__["IgUserFull"](), res);
          }));
        }
      }]);

      return IgUserService;
    }();

    IgUserService.ɵfac = function IgUserService_Factory(t) {
      return new (t || IgUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    IgUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: IgUserService,
      factory: IgUserService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IgUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/modal/full-media/full-media.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/modal/full-media/full-media.component.ts ***!
    \*********************************************************************/

  /*! exports provided: FullMediaComponent */

  /***/
  function srcAppComponentsModalFullMediaFullMediaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullMediaComponent", function () {
      return FullMediaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_ig_media_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/models/ig-media-model */
    "./src/app/models/ig-media-model.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../ig-media/ig-media.service */
    "./src/app/components/ig-media/ig-media.service.ts");

    var FullMediaComponent =
    /*#__PURE__*/
    function () {
      function FullMediaComponent(activeModal, mediaService) {
        _classCallCheck(this, FullMediaComponent);

        this.activeModal = activeModal;
        this.mediaService = mediaService;
        this.currentImageShowing = 0;
      }

      _createClass(FullMediaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "DownloadCurrentMedia",
        value: function DownloadCurrentMedia() {
          if (this.fullMedia.type !== src_app_models_ig_media_model__WEBPACK_IMPORTED_MODULE_1__["IgMediaType"].GraphVideo) this.mediaService.GetMediaImageByUrl(this.GetCurrentImage());
        }
      }, {
        key: "GetCurrentImage",
        value: function GetCurrentImage() {
          if (this.fullMedia.type === src_app_models_ig_media_model__WEBPACK_IMPORTED_MODULE_1__["IgMediaType"].GraphImage) return this.fullMedia.display_url;else if (this.fullMedia.type === src_app_models_ig_media_model__WEBPACK_IMPORTED_MODULE_1__["IgMediaType"].GraphSidecar) return this.fullMedia.media_list[this.currentImageShowing];
        }
      }, {
        key: "NextImage",
        value: function NextImage() {
          if (this.fullMedia.media_list.length === this.currentImageShowing + 1) {
            this.currentImageShowing = 0;
            return this.fullMedia.media_list[this.currentImageShowing];
          } else {
            this.currentImageShowing++;
            return this.fullMedia.media_list[this.currentImageShowing];
          }
        }
      }, {
        key: "PreviousImage",
        value: function PreviousImage() {
          if (this.currentImageShowing - 1 < 0) {
            this.currentImageShowing = this.fullMedia.media_list.length - 1;
            return this.fullMedia.media_list[this.currentImageShowing];
          } else {
            this.currentImageShowing--;
            return this.fullMedia.media_list[this.currentImageShowing];
          }
        }
      }, {
        key: "Close",
        value: function Close(reason) {
          this.activeModal.close(reason);
        }
      }, {
        key: "Dismiss",
        value: function Dismiss(reason) {
          this.activeModal.dismiss(reason);
        }
      }]);

      return FullMediaComponent;
    }();

    FullMediaComponent.ɵfac = function FullMediaComponent_Factory(t) {
      return new (t || FullMediaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_3__["IgMediaService"]));
    };

    FullMediaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FullMediaComponent,
      selectors: [["app-full-media"]],
      inputs: {
        fullMedia: "fullMedia"
      },
      decls: 8,
      vars: 2,
      consts: [[2, "display", "flex", "height", "100%", "width", "auto"], [1, "media-switch", 3, "click"], [1, "fas", "fa-chevron-left", "fa-3x"], [1, "full-media-bg-image"], [1, "toolbar-media", "mt-4", "ml-4"], [1, "fas", "fa-download", "fa-3x", 3, "click"], [1, "fas", "fa-chevron-right", "fa-3x"]],
      template: function FullMediaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullMediaComponent_Template_div_click_1_listener($event) {
            return ctx.PreviousImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullMediaComponent_Template_i_click_5_listener($event) {
            return ctx.DownloadCurrentMedia();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FullMediaComponent_Template_div_click_6_listener($event) {
            return ctx.NextImage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "url(" + ctx.GetCurrentImage() + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        }
      },
      styles: [".modal-dialog {\n  max-width: 70% !important;\n  width: 70% !important;\n}\n\n.modal-content {\n  display: inline-block;\n  max-height: 80vh !important;\n  height: 90vh !important;\n  background-color: transparent;\n  border: 0px;\n}\n\n.full-media-bg-image {\n  background-size: contain !important;\n  background-repeat: no-repeat !important;\n  background-position: center !important;\n  background-color: #1a1515 !important;\n  width: auto;\n  -webkit-box-flex: 2;\n          flex: 2;\n  height: 100%;\n}\n\n.full-media-bg-image .toolbar-media {\n  color: #ffffffc2;\n}\n\n.full-media-bg-image .toolbar-media > i {\n  cursor: pointer;\n}\n\n.full-media-bg-image .toolbar-media > i:hover {\n  color: white;\n}\n\n.media-switch {\n  cursor: pointer;\n  text-align: center;\n  background-color: black;\n  height: 100%;\n  -webkit-box-flex: 0.2;\n          flex: 0.2;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  color: #4e4949;\n}\n\n.media-switch:hover {\n  color: white;\n}\n\n.media-switch > i {\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9mdWxsLW1lZGlhL0M6XFxVc2Vyc1xcaXZhbmxcXE9uZURyaXZlXFxEZXNrdG9wXFxJZ0NvbnRlbnREb3dubG9hZGVyXFxpZy1jb250ZW50LWRvd25sb2FkZXItZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vZGFsXFxmdWxsLW1lZGlhXFxmdWxsLW1lZGlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vZGFsL2Z1bGwtbWVkaWEvZnVsbC1tZWRpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQ0RKOztBRElBO0VBQ0ksbUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHNDQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdJO0VBQ0ksZ0JBQUE7QUNEUjs7QURHUTtFQUNJLGVBQUE7QUNEWjs7QURHWTtFQUNJLFlBQUE7QUNEaEI7O0FET0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtVQUFBLFNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE1JO0VBQ0ksWUFBQTtBQ0pSOztBRE9JO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC9mdWxsLW1lZGlhL2Z1bGwtbWVkaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3dpdGNoLXdpZHRoOiA3MHB4O1xyXG5cclxuLm1vZGFsLWRpYWxvZ3tcclxuICAgIG1heC13aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1heC1oZWlnaHQ6IDgwdmggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDBweDtcclxufVxyXG5cclxuLmZ1bGwtbWVkaWEtYmctaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYTE1MTUgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZmxleDogMjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAudG9vbGJhci1tZWRpYSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmZjMjtcclxuXHJcbiAgICAgICAgPiBpIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZWRpYS1zd2l0Y2gge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4OiAwLjI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgY29sb3I6ICM0ZTQ5NDk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgID4gaSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIH1cclxufSIsIi5tb2RhbC1kaWFsb2cge1xuICBtYXgtd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXgtaGVpZ2h0OiA4MHZoICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5mdWxsLW1lZGlhLWJnLWltYWdlIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYTE1MTUgIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG4gIGZsZXg6IDI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mdWxsLW1lZGlhLWJnLWltYWdlIC50b29sYmFyLW1lZGlhIHtcbiAgY29sb3I6ICNmZmZmZmZjMjtcbn1cbi5mdWxsLW1lZGlhLWJnLWltYWdlIC50b29sYmFyLW1lZGlhID4gaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mdWxsLW1lZGlhLWJnLWltYWdlIC50b29sYmFyLW1lZGlhID4gaTpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lZGlhLXN3aXRjaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4OiAwLjI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGNvbG9yOiAjNGU0OTQ5O1xufVxuLm1lZGlhLXN3aXRjaDpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5tZWRpYS1zd2l0Y2ggPiBpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullMediaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-full-media',
          templateUrl: './full-media.component.html',
          styleUrls: ['./full-media.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]
        }, {
          type: _ig_media_ig_media_service__WEBPACK_IMPORTED_MODULE_3__["IgMediaService"]
        }];
      }, {
        fullMedia: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/modal/full-media/modal.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/modal/full-media/modal.service.ts ***!
    \**************************************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppComponentsModalFullMediaModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ModalService =
    /*#__PURE__*/
    function () {
      function ModalService(modalService) {
        _classCallCheck(this, ModalService);

        this.modalService = modalService;
      }

      _createClass(ModalService, [{
        key: "open",
        value: function open(content, options) {
          return this.modalService.open(content, options);
        }
      }]);

      return ModalService;
    }();

    ModalService.ɵfac = function ModalService_Factory(t) {
      return new (t || ModalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]));
    };

    ModalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModalService,
      factory: ModalService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 36,
      vars: 0,
      consts: [[1, "footer", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-6", "h-100", "text-center", "text-lg-left", "my-auto"], [1, "list-inline", "mb-2"], [1, "list-inline-item"], ["href", "#"], [1, "text-muted", "small", "mb-4", "mb-lg-0"], [1, "col-lg-6", "h-100", "text-center", "text-lg-right", "my-auto"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "mr-3"], [1, "fas", "fa-facebook", "fa-2x", "fa-fw"], [1, "fas", "fa-twitter-square", "fa-2x", "fa-fw"], [1, "fas", "fa-instagram", "fa-2x", "fa-fw"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u22C5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u22C5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Terms of Use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u22C5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\xA9 Your Website 2019. All Rights Reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer.footer[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFxVc2Vyc1xcaXZhbmxcXE9uZURyaXZlXFxEZXNrdG9wXFxJZ0NvbnRlbnREb3dubG9hZGVyXFxpZy1jb250ZW50LWRvd25sb2FkZXItZnJvbnRlbmQvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3Rlci5mb290ZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcclxufSIsImZvb3Rlci5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 6,
      vars: 0,
      consts: [[1, "navbar", "navbar-light", "bg-light", "static-top"], [1, "container"], ["href", "#", 1, "navbar-brand"], ["href", "#", 1, "btn", "btn-primary"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Downloadgram.ltd");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/ig-hashtag-model.ts":
  /*!********************************************!*\
    !*** ./src/app/models/ig-hashtag-model.ts ***!
    \********************************************/

  /*! exports provided: IgHashtagFull, IgHashtag */

  /***/
  function srcAppModelsIgHashtagModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgHashtagFull", function () {
      return IgHashtagFull;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgHashtag", function () {
      return IgHashtag;
    });
    /* harmony import */


    var _ig_media_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ig-media-model */
    "./src/app/models/ig-media-model.ts");

    var IgHashtagFull = function IgHashtagFull(obj) {
      _classCallCheck(this, IgHashtagFull);

      this.related_media = [];
      this.correlated_hashtags = [];
      Object.assign(this, obj);
      this.related_media = this.related_media.map(function (x) {
        return Object.assign(new _ig_media_model__WEBPACK_IMPORTED_MODULE_0__["IgMedia"](), x);
      });
    };

    var IgHashtag = function IgHashtag() {
      _classCallCheck(this, IgHashtag);
    };
    /***/

  },

  /***/
  "./src/app/models/ig-media-model.ts":
  /*!******************************************!*\
    !*** ./src/app/models/ig-media-model.ts ***!
    \******************************************/

  /*! exports provided: IgMediaFull, IgMedia, IgMediaType */

  /***/
  function srcAppModelsIgMediaModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgMediaFull", function () {
      return IgMediaFull;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgMedia", function () {
      return IgMedia;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgMediaType", function () {
      return IgMediaType;
    });

    var IgMediaFull = function IgMediaFull() {
      _classCallCheck(this, IgMediaFull);

      this.dimensions = {
        width: 0,
        height: 0
      };
      this.media_list = [];
    };

    var IgMedia = function IgMedia() {
      _classCallCheck(this, IgMedia);

      this.dimensions = {
        width: 0,
        height: 0
      };
    };

    var IgMediaType;

    (function (IgMediaType) {
      IgMediaType["GraphSidecar"] = "GraphSidecar";
      IgMediaType["GraphImage"] = "GraphImage";
      IgMediaType["GraphVideo"] = "GraphVideo";
    })(IgMediaType || (IgMediaType = {}));

    ;
    /***/
  },

  /***/
  "./src/app/models/ig-topsearch-model.ts":
  /*!**********************************************!*\
    !*** ./src/app/models/ig-topsearch-model.ts ***!
    \**********************************************/

  /*! exports provided: IgTopSearch */

  /***/
  function srcAppModelsIgTopsearchModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgTopSearch", function () {
      return IgTopSearch;
    });
    /* harmony import */


    var _ig_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./ig-user-model */
    "./src/app/models/ig-user-model.ts");
    /* harmony import */


    var _ig_hashtag_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ig-hashtag-model */
    "./src/app/models/ig-hashtag-model.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);

    var IgTopSearch =
    /*#__PURE__*/
    function () {
      function IgTopSearch(obj) {
        var _this7 = this;

        _classCallCheck(this, IgTopSearch);

        this.users = [];
        this.places = [];
        this.hashtags = [];
        this.orderedMixedList = [];
        Object.assign(this, obj);
        this.users = this.users.map(function (x) {
          return _this7.AddElementConverted(_ig_user_model__WEBPACK_IMPORTED_MODULE_0__["IgUser"], x);
        });
        this.hashtags = this.hashtags.map(function (x) {
          return _this7.AddElementConverted(_ig_hashtag_model__WEBPACK_IMPORTED_MODULE_1__["IgHashtag"], x);
        });
      }

      _createClass(IgTopSearch, [{
        key: "AddElementConverted",
        value: function AddElementConverted(type, obj) {
          var el = Object.assign(new type(), obj);
          this.AddToMixedList(el);
          return el;
        }
      }, {
        key: "AddToMixedList",
        value: function AddToMixedList(element) {
          if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(element) && !Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(element.position)) {
            if (this.orderedMixedList.length === 0) {
              this.orderedMixedList.push(element);
            } else {
              var index = 0;
              var added = false;

              while (index < this.orderedMixedList.length) {
                if (element.position <= this.orderedMixedList[index].position) {
                  this.orderedMixedList.splice(index, 0, element);
                  added = true;
                  break;
                }

                index++;
              }

              if (!added) {
                this.orderedMixedList.push(element);
              }
            }
          }
        }
      }]);

      return IgTopSearch;
    }();
    /***/

  },

  /***/
  "./src/app/models/ig-user-model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/ig-user-model.ts ***!
    \*****************************************/

  /*! exports provided: IgUserFull, IgUser */

  /***/
  function srcAppModelsIgUserModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgUserFull", function () {
      return IgUserFull;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IgUser", function () {
      return IgUser;
    });

    var IgUserFull = function IgUserFull() {
      _classCallCheck(this, IgUserFull);

      this.media_list = [];
    };

    ;

    var IgUser = function IgUser() {
      _classCallCheck(this, IgUser);
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ivanl\OneDrive\Desktop\IgContentDownloader\ig-content-downloader-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map