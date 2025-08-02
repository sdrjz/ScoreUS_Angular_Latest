(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-innercomponentModule-poscorecard-poscorecard-module"],{

/***/ "+LUq":
/*!******************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/node_modules/tslib/tslib.es6.js ***!
  \******************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "/IoE":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.module.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ɵngcc0 = __webpack_require__(/*! @angular/core */ "fXoL");
var ɵngcc1 = __webpack_require__(/*! ./lightbox-overlay.component */ "YKnz");
var ɵngcc2 = __webpack_require__(/*! ./lightbox.component */ "SrD1");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lightbox_service_1 = __webpack_require__(/*! ./lightbox.service */ "b5fp");
var lightbox_component_1 = __webpack_require__(/*! ./lightbox.component */ "SrD1");
var lightbox_config_service_1 = __webpack_require__(/*! ./lightbox-config.service */ "VlMW");
var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "rhsj");
var lightbox_overlay_component_1 = __webpack_require__(/*! ./lightbox-overlay.component */ "YKnz");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var LightboxModule = /** @class */ (function () {
    function LightboxModule() {
    }
LightboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LightboxModule });
LightboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LightboxModule_Factory(t) { return new (t || LightboxModule)(); }, providers: [
        lightbox_service_1.Lightbox,
        lightbox_config_service_1.LightboxConfig,
        lightbox_event_service_1.LightboxEvent,
        lightbox_event_service_1.LightboxWindowRef
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LightboxModule, { declarations: [ɵngcc1.LightboxOverlayComponent, ɵngcc2.LightboxComponent] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [lightbox_overlay_component_1.LightboxOverlayComponent, lightbox_component_1.LightboxComponent],
                providers: [
                    lightbox_service_1.Lightbox,
                    lightbox_config_service_1.LightboxConfig,
                    lightbox_event_service_1.LightboxEvent,
                    lightbox_event_service_1.LightboxWindowRef
                ],
                entryComponents: [lightbox_overlay_component_1.LightboxOverlayComponent, lightbox_component_1.LightboxComponent]
            }]
    }], function () { return []; }, null); })();
    return LightboxModule;
}());
exports.LightboxModule = LightboxModule;

//# sourceMappingURL=lightbox.module.js.map

/***/ }),

/***/ "/hUj":
/*!********************************************************************************!*\
  !*** ./src/app/general/pomanager-tablechart/pomanager-tablechart.component.ts ***!
  \********************************************************************************/
/*! exports provided: PomanagerTablechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomanagerTablechartComponent", function() { return PomanagerTablechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



const _c0 = ["chart"];
class PomanagerTablechartComponent {
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Net Profit",
                    data: [44, 55, 63, 60]
                },
                {
                    name: "Revenue",
                    data: [76, 101, 87, 91]
                }
            ],
            chart: {
                type: "bar",
                height: 350
            },
            colors: ["#FFCF64", "#E61849"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
            },
            xaxis: {
                categories: [
                    "Buyer",
                    "Buyer",
                    "Buyer",
                    "Buyer"
                ]
            },
            yaxis: {
                title: {
                    text: "$ (thousands)"
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands";
                    }
                }
            }
        };
    }
    ngOnInit() {
    }
}
PomanagerTablechartComponent.ɵfac = function PomanagerTablechartComponent_Factory(t) { return new (t || PomanagerTablechartComponent)(); };
PomanagerTablechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomanagerTablechartComponent, selectors: [["app-pomanager-tablechart"]], viewQuery: function PomanagerTablechartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 11, consts: [[3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "colors"]], template: function PomanagerTablechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb21hbmFnZXItdGFibGVjaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomanagerTablechartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomanager-tablechart',
                templateUrl: './pomanager-tablechart.component.html',
                styleUrls: ['./pomanager-tablechart.component.css']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }] }); })();


/***/ }),

/***/ "1N+D":
/*!**********************************************************************!*\
  !*** ./src/app/general/user-color-zone/user-color-zone.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserColorZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserColorZoneComponent", function() { return UserColorZoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_appService_generalApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/appService/generalApiService */ "jBxN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserColorZoneComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.getPercentage(ctx_r0.vendorColorZoneStats[0][2], ctx_r0.vendorColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r1.getTextColor(ctx_r1.vendorRedPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r1.vendorRedPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.vendorRedPercentageComparison, "%");
} }
function UserColorZoneComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.getPercentage(ctx_r2.vendorColorZoneStats[0][1], ctx_r2.vendorColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r3.getTextColor(ctx_r3.vendorYellowPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r3.vendorYellowPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r3.vendorYellowPercentageComparison, "%");
} }
function UserColorZoneComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.getPercentage(ctx_r4.vendorColorZoneStats[0][0], ctx_r4.vendorColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r5.getTextGreenColor(ctx_r5.vendorGreenPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r5.vendorGreenPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.vendorGreenPercentageComparison, "%");
} }
function UserColorZoneComponent_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r6.getPercentage(ctx_r6.buyerColorZoneStats[0][2], ctx_r6.buyerColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r7.getTextColor(ctx_r7.buyerRedPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r7.buyerRedPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.buyerRedPercentageComparison, "%");
} }
function UserColorZoneComponent_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.getPercentage(ctx_r8.buyerColorZoneStats[0][1], ctx_r8.buyerColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r9.getTextColor(ctx_r9.buyerYellowPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r9.buyerYellowPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r9.buyerYellowPercentageComparison, "%");
} }
function UserColorZoneComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.getPercentage(ctx_r10.buyerColorZoneStats[0][0], ctx_r10.buyerColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r11.getTextGreenColor(ctx_r11.buyerGreenPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r11.buyerGreenPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r11.buyerGreenPercentageComparison, "%");
} }
function UserColorZoneComponent_span_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r12.getPercentage(ctx_r12.commodityColorZoneStats[0][2], ctx_r12.commodityColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r13.getTextColor(ctx_r13.commodityRedPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r13.commodityRedPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r13.commodityRedPercentageComparison, "%");
} }
function UserColorZoneComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r14.getPercentage(ctx_r14.commodityColorZoneStats[0][1], ctx_r14.commodityColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r15.getTextColor(ctx_r15.commodityYellowPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r15.commodityYellowPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r15.commodityYellowPercentageComparison, "%");
} }
function UserColorZoneComponent_span_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r16.getPercentage(ctx_r16.commodityColorZoneStats[0][0], ctx_r16.commodityColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r17.getTextGreenColor(ctx_r17.commodityGreenPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r17.commodityGreenPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r17.commodityGreenPercentageComparison, "%");
} }
function UserColorZoneComponent_span_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r18.getPercentage(ctx_r18.plantColorZoneStats[0][2], ctx_r18.plantColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r19.getTextColor(ctx_r19.plantRedPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r19.plantRedPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r19.plantRedPercentageComparison, "%");
} }
function UserColorZoneComponent_span_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r20.getPercentage(ctx_r20.plantColorZoneStats[0][1], ctx_r20.plantColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r21.getTextColor(ctx_r21.plantYellowPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r21.plantYellowPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r21.plantYellowPercentageComparison, "%");
} }
function UserColorZoneComponent_span_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r22.getPercentage(ctx_r22.plantColorZoneStats[0][0], ctx_r22.plantColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_161_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r23.getTextGreenColor(ctx_r23.plantGreenPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r23.plantGreenPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r23.plantGreenPercentageComparison, "%");
} }
function UserColorZoneComponent_span_179_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r24.getPercentage(ctx_r24.materialColorZoneStats[0][2], ctx_r24.materialColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r25.getTextColor(ctx_r25.materialRedPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r25.materialGreenPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r25.materialRedPercentageComparison, "%");
} }
function UserColorZoneComponent_span_190_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r26.getPercentage(ctx_r26.materialColorZoneStats[0][1], ctx_r26.materialColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_191_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r27.getTextColor(ctx_r27.materialYellowPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r27.materialYellowPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r27.materialYellowPercentageComparison, "%");
} }
function UserColorZoneComponent_span_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r28.getPercentage(ctx_r28.materialColorZoneStats[0][0], ctx_r28.materialColorZoneStats[0][3]), "%");
} }
function UserColorZoneComponent_span_202_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx_r29.getTextGreenColor(ctx_r29.materialGreenPercentageComparison));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("class", ctx_r29.materialGreenPercentageComparison <= 0 ? "red-num" : "co1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r29.materialGreenPercentageComparison, "%");
} }
class UserColorZoneComponent {
    constructor(_apiService, translateService, cdr) {
        this._apiService = _apiService;
        this.translateService = translateService;
        this.cdr = cdr;
    }
    ngOnChanges(changes) {
        if (changes['vendorColorZoneStats']) {
            if (this.vendorColorZoneStats === undefined || this.vendorColorZoneStats === null)
                return;
            this.vendorGreenPercentageComparison = this.getPercentage(this.vendorColorZoneStats[1][0], this.vendorColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.vendorColorZoneStats[0][0], this.vendorColorZoneStats[0][3]) - this.getPercentage(this.vendorColorZoneStats[1][0], this.vendorColorZoneStats[1][3])) / this.getPercentage(this.vendorColorZoneStats[1][0], this.vendorColorZoneStats[1][3]);
            this.vendorGreenPercentageComparison = (this.vendorGreenPercentageComparison * 100).toFixed(2);
            this.vendorYellowPercentageComparison = this.getPercentage(this.vendorColorZoneStats[1][1], this.vendorColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.vendorColorZoneStats[0][1], this.vendorColorZoneStats[0][3]) - this.getPercentage(this.vendorColorZoneStats[1][1], this.vendorColorZoneStats[1][3])) / this.getPercentage(this.vendorColorZoneStats[1][1], this.vendorColorZoneStats[1][3]);
            this.vendorYellowPercentageComparison = (this.vendorYellowPercentageComparison * 100).toFixed(2);
            this.vendorRedPercentageComparison = this.getPercentage(this.vendorColorZoneStats[1][2], this.vendorColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.vendorColorZoneStats[0][2], this.vendorColorZoneStats[0][3]) - this.getPercentage(this.vendorColorZoneStats[1][2], this.vendorColorZoneStats[1][3])) / this.getPercentage(this.vendorColorZoneStats[1][2], this.vendorColorZoneStats[1][3]);
            this.vendorRedPercentageComparison = (this.vendorRedPercentageComparison * 100).toFixed(2);
            this.plantGreenPercentageComparison = this.getPercentage(this.plantColorZoneStats[1][0], this.plantColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.plantColorZoneStats[0][0], this.plantColorZoneStats[0][3]) - this.getPercentage(this.plantColorZoneStats[1][0], this.plantColorZoneStats[1][3])) / this.getPercentage(this.plantColorZoneStats[1][0], this.plantColorZoneStats[1][3]);
            this.plantGreenPercentageComparison = (this.plantGreenPercentageComparison * 100).toFixed(2);
            this.plantYellowPercentageComparison = this.getPercentage(this.plantColorZoneStats[1][1], this.plantColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.plantColorZoneStats[0][1], this.plantColorZoneStats[0][3]) - this.getPercentage(this.plantColorZoneStats[1][1], this.plantColorZoneStats[1][3])) / this.getPercentage(this.plantColorZoneStats[1][1], this.plantColorZoneStats[1][3]);
            this.plantYellowPercentageComparison = (this.plantYellowPercentageComparison * 100).toFixed(2);
            this.plantRedPercentageComparison = this.getPercentage(this.plantColorZoneStats[1][2], this.plantColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.plantColorZoneStats[0][2], this.plantColorZoneStats[0][3]) - this.getPercentage(this.plantColorZoneStats[1][2], this.plantColorZoneStats[1][3])) / this.getPercentage(this.plantColorZoneStats[1][2], this.plantColorZoneStats[1][3]);
            this.plantRedPercentageComparison = (this.plantRedPercentageComparison * 100).toFixed(2);
            this.commodityGreenPercentageComparison = this.getPercentage(this.commodityColorZoneStats[1][0], this.commodityColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.commodityColorZoneStats[0][0], this.commodityColorZoneStats[0][3]) - this.getPercentage(this.commodityColorZoneStats[1][0], this.commodityColorZoneStats[1][3])) / this.getPercentage(this.commodityColorZoneStats[1][0], this.commodityColorZoneStats[1][3]);
            this.commodityGreenPercentageComparison = (this.commodityGreenPercentageComparison * 100).toFixed(2);
            this.commodityYellowPercentageComparison = this.getPercentage(this.commodityColorZoneStats[1][1], this.commodityColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.commodityColorZoneStats[0][1], this.commodityColorZoneStats[0][3]) - this.getPercentage(this.commodityColorZoneStats[1][1], this.commodityColorZoneStats[1][3])) / this.getPercentage(this.commodityColorZoneStats[1][1], this.commodityColorZoneStats[1][3]);
            this.commodityYellowPercentageComparison = (this.commodityYellowPercentageComparison * 100).toFixed(2);
            this.commodityRedPercentageComparison = this.getPercentage(this.commodityColorZoneStats[1][2], this.commodityColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.commodityColorZoneStats[0][2], this.commodityColorZoneStats[0][3]) - this.getPercentage(this.commodityColorZoneStats[1][2], this.commodityColorZoneStats[1][3])) / this.getPercentage(this.commodityColorZoneStats[1][2], this.commodityColorZoneStats[1][3]);
            this.commodityRedPercentageComparison = (this.commodityRedPercentageComparison * 100).toFixed(2);
            this.buyerGreenPercentageComparison = this.getPercentage(this.buyerColorZoneStats[1][0], this.buyerColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.buyerColorZoneStats[0][0], this.buyerColorZoneStats[0][3]) - this.getPercentage(this.buyerColorZoneStats[1][0], this.buyerColorZoneStats[1][3])) / this.getPercentage(this.buyerColorZoneStats[1][0], this.buyerColorZoneStats[1][3]);
            this.buyerGreenPercentageComparison = (this.buyerGreenPercentageComparison * 100).toFixed(2);
            this.buyerYellowPercentageComparison = this.getPercentage(this.buyerColorZoneStats[1][1], this.buyerColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.buyerColorZoneStats[0][1], this.buyerColorZoneStats[0][3]) - this.getPercentage(this.buyerColorZoneStats[1][1], this.buyerColorZoneStats[1][3])) / this.getPercentage(this.buyerColorZoneStats[1][1], this.buyerColorZoneStats[1][3]);
            this.buyerYellowPercentageComparison = (this.buyerYellowPercentageComparison * 100).toFixed(2);
            this.buyerRedPercentageComparison = this.getPercentage(this.buyerColorZoneStats[1][2], this.buyerColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.buyerColorZoneStats[0][2], this.buyerColorZoneStats[0][3]) - this.getPercentage(this.buyerColorZoneStats[1][2], this.buyerColorZoneStats[1][3])) / this.getPercentage(this.buyerColorZoneStats[1][2], this.buyerColorZoneStats[1][3]);
            this.buyerRedPercentageComparison = (this.buyerRedPercentageComparison * 100).toFixed(2);
            this.materialGreenPercentageComparison = this.getPercentage(this.materialColorZoneStats[1][0], this.materialColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.materialColorZoneStats[0][0], this.materialColorZoneStats[0][3]) - this.getPercentage(this.materialColorZoneStats[1][0], this.materialColorZoneStats[1][3])) / this.getPercentage(this.materialColorZoneStats[1][0], this.materialColorZoneStats[1][3]);
            this.materialGreenPercentageComparison = (this.materialGreenPercentageComparison * 100).toFixed(2);
            this.materialYellowPercentageComparison = this.getPercentage(this.materialColorZoneStats[1][1], this.materialColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.materialColorZoneStats[0][1], this.materialColorZoneStats[0][3]) - this.getPercentage(this.materialColorZoneStats[1][1], this.materialColorZoneStats[1][3])) / this.getPercentage(this.materialColorZoneStats[1][1], this.materialColorZoneStats[1][3]);
            this.materialYellowPercentageComparison = (this.materialYellowPercentageComparison * 100).toFixed(2);
            this.materialRedPercentageComparison = this.getPercentage(this.materialColorZoneStats[1][2], this.materialColorZoneStats[1][3]) == 0 ? 0 : (this.getPercentage(this.materialColorZoneStats[0][2], this.materialColorZoneStats[0][3]) - this.getPercentage(this.materialColorZoneStats[1][2], this.materialColorZoneStats[1][3])) / this.getPercentage(this.materialColorZoneStats[1][2], this.materialColorZoneStats[1][3]);
            this.materialRedPercentageComparison = (this.materialRedPercentageComparison * 100).toFixed(2);
            // this.vendorGreenPercentageComparison = this.vendorColorZoneStats[0][0]- this.vendorColorZoneStats[1]?.greenPercentage
            // this.vendorGreenPercentageComparison = this.vendorGreenPercentageComparison.toFixed(2) 
            // this.vendorYellowPercentageComparison = this.vendorColorZoneStats[0]?.yellowPercentage - this.vendorColorZoneStats[1]?.yellowPercentage
            // this.vendorYellowPercentageComparison = this.vendorYellowPercentageComparison.toFixed(2) 
            // this.vendorRedPercentageComparison = this.vendorColorZoneStats[0]?.redPercentage - this.vendorColorZoneStats[1]?.redPercentage
            // this.vendorRedPercentageComparison = this.vendorRedPercentageComparison.toFixed(2) 
            // this.plantGreenPercentageComparison = this.plantColorZoneStats[0]?.greenPercentage - this.plantColorZoneStats[1]?.greenPercentage
            // this.plantGreenPercentageComparison = this.plantGreenPercentageComparison.toFixed(2) 
            // this.plantYellowPercentageComparison = this.plantColorZoneStats[0]?.yellowPercentage - this.plantColorZoneStats[1]?.yellowPercentage
            // this.plantYellowPercentageComparison = this.plantYellowPercentageComparison.toFixed(2) 
            // this.plantRedPercentageComparison = this.plantColorZoneStats[0]?.redPercentage - this.plantColorZoneStats[1]?.redPercentage
            // this.plantRedPercentageComparison = this.plantRedPercentageComparison.toFixed(2) 
            // this.materialGreenPercentageComparison = this.materialColorZoneStats[0]?.greenPercentage - this.materialColorZoneStats[1]?.greenPercentage
            // this.materialGreenPercentageComparison = this.materialGreenPercentageComparison.toFixed(2) 
            // this.materialYellowPercentageComparison = this.materialColorZoneStats[0]?.yellowPercentage - this.materialColorZoneStats[1]?.yellowPercentage
            // this.materialYellowPercentageComparison = this.materialYellowPercentageComparison.toFixed(2) 
            // this.materialRedPercentageComparison = this.materialColorZoneStats[0]?.redPercentage - this.materialColorZoneStats[1]?.redPercentage
            // this.materialRedPercentageComparison = this.materialRedPercentageComparison.toFixed(2) 
            // this.commodityGreenPercentageComparison = this.commodityColorZoneStats[0]?.greenPercentage - this.commodityColorZoneStats[1]?.greenPercentage
            // this.commodityGreenPercentageComparison = this.commodityGreenPercentageComparison.toFixed(2) 
            // this.commodityYellowPercentageComparison = this.commodityColorZoneStats[0]?.yellowPercentage - this.commodityColorZoneStats[1]?.yellowPercentage
            // this.commodityYellowPercentageComparison = this.commodityYellowPercentageComparison.toFixed(2) 
            // this.commodityRedPercentageComparison = this.commodityColorZoneStats[0]?.redPercentage - this.commodityColorZoneStats[1]?.redPercentage
            // this.commodityRedPercentageComparison = this.commodityRedPercentageComparison.toFixed(2) 
            // this.buyerGreenPercentageComparison = this.buyerColorZoneStats[0]?.greenPercentage - this.buyerColorZoneStats[1]?.greenPercentage
            // this.buyerGreenPercentageComparison = this.buyerGreenPercentageComparison.toFixed(2) 
            // this.buyerYellowPercentageComparison = this.buyerColorZoneStats[0]?.yellowPercentage - this.buyerColorZoneStats[1]?.yellowPercentage
            // this.buyerYellowPercentageComparison = this.buyerYellowPercentageComparison.toFixed(2) 
            // this.buyerRedPercentageComparison = this.buyerColorZoneStats[0]?.redPercentage - this.buyerColorZoneStats[1]?.redPercentage
            // this.buyerRedPercentageComparison = this.buyerRedPercentageComparison.toFixed(2) 
            if (this.dateDiff === null || this.dateDiff === undefined)
                return;
            let dateDiff = +this.dateDiff;
            this.sentance = " than last " + Math.round(dateDiff) + " days period";
            // if (dateDiff <= 31) {
            //   this.sentance = " than last " + Math.round(dateDiff) +   " day period";
            // }else if(dateDiff<364){
            //   this.sentance = " than last " + Math.round(dateDiff / 30) + " month period"
            // }
            // else {
            //   this.sentance = " than last " + Math.round(dateDiff / 365) + " year period"
            // }
        }
    }
    getPercentage(neum, deno) {
        return Number.parseFloat(((neum / deno) * 100).toFixed(3));
    }
    ngOnInit() {
        this._apiService.isLanguageSelector$.subscribe((res) => {
            this.translateService.use(res);
            this.cdr.detectChanges();
        });
    }
    // getImage(num :any) {
    //   if (+num > 0) 
    //     return '../../../assets/images/arrow-narrow-up.png' 
    //      else if (+num == 0) 
    //     return '../../../assets/images/yellow2.png'
    //     else if (+num < 0) 
    //     return '../../../assets/images/ic-arrow-narrow-up.svg'
    //   }
    // getTextColor(num :any){
    //   if (+num > 0) 
    //   return 'color:red !important;' 
    //    else if (+num == 0) 
    //   return 'color:#FFCF64 !important;'
    //   else if (+num < 0) 
    //   return 'color:#00D9A6 !important;'
    // }
    getImage(num) {
        if (+num > 0)
            return '../../../assets/images/redup.png';
        else if (+num == 0)
            return '../../../assets/images/yellow2.png';
        else if (+num < 0)
            return '../../../assets/images/greendown.png';
    }
    getTextColor(num) {
        if (+num > 0)
            return 'color:red !important;';
        else if (+num == 0)
            return 'color:#FFCF64 !important;';
        else if (+num < 0)
            return 'color:#00D9A6 !important;';
    }
    getGreenImage(num) {
        if (+num > 0)
            return '../../../assets/images/greenup.png';
        else if (+num == 0)
            return '../../../assets/images/yellow2.png';
        else if (+num < 0)
            return '../../../assets/images/reddown.png';
    }
    getTextGreenColor(num) {
        if (+num > 0)
            return 'color:#00D9A6 !important;';
        else if (+num == 0)
            return 'color:#FFCF64 !important;';
        else if (+num < 0)
            return 'color:red !important;';
    }
}
UserColorZoneComponent.ɵfac = function UserColorZoneComponent_Factory(t) { return new (t || UserColorZoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appService_generalApiService__WEBPACK_IMPORTED_MODULE_1__["GeneralApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
UserColorZoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserColorZoneComponent, selectors: [["app-user-color-zone"]], inputs: { vendorColorZoneStats: "vendorColorZoneStats", commodityColorZoneStats: "commodityColorZoneStats", buyerColorZoneStats: "buyerColorZoneStats", materialColorZoneStats: "materialColorZoneStats", plantColorZoneStats: "plantColorZoneStats", dateDiff: "dateDiff" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 207, vars: 150, consts: [[1, "col-md-12", "color_zone", "img"], [1, "row"], [1, "col-xl-16", "col-sm-6", "mb-4"], [1, "new-use", "vcz-m-grey"], [1, "col-md-12"], ["clss", "red-row", 2, "display", "flex !important", "flex-wrap", "wrap !important"], [1, "col-md-6", "pl-0"], [1, "red-num"], [1, "col-md-6", "pr-0"], ["class", "mr-2", "style", "color: white !important;", 4, "ngIf"], ["style", "margin-left:3px !important;", 3, "style", 4, "ngIf"], ["width", "15px", "alt", "", 2, "margin-left", "2px !important"], [1, "vendor-than", "ml-2", 2, "color", "white !important"], [1, "co-yellow2"], ["width", "15px;", "alt", "", 2, "margin-left", "2px !important"], [1, "co1"], [1, "col-xl-6", "col-sm-6", "mb-4"], [1, "new-use", "vcz-d-grey"], [1, "mr-2", 2, "color", "white !important"], [2, "margin-left", "3px !important"]], template: function UserColorZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserColorZoneComponent_span_15_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserColorZoneComponent_span_16_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserColorZoneComponent_span_26_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserColorZoneComponent_span_27_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, UserColorZoneComponent_span_37_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, UserColorZoneComponent_span_38_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, UserColorZoneComponent_span_56_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, UserColorZoneComponent_span_57_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, UserColorZoneComponent_span_67_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, UserColorZoneComponent_span_68_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, UserColorZoneComponent_span_78_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, UserColorZoneComponent_span_79_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](88, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, UserColorZoneComponent_span_97_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, UserColorZoneComponent_span_98_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](106, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, UserColorZoneComponent_span_108_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](109, UserColorZoneComponent_span_109_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, UserColorZoneComponent_span_119_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, UserColorZoneComponent_span_120_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](129, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](136, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](138, UserColorZoneComponent_span_138_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, UserColorZoneComponent_span_139_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, UserColorZoneComponent_span_149_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, UserColorZoneComponent_span_150_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](154, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](158, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](160, UserColorZoneComponent_span_160_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](161, UserColorZoneComponent_span_161_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](165, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](170, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](177, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, UserColorZoneComponent_span_179_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, UserColorZoneComponent_span_180_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](184, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](188, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](190, UserColorZoneComponent_span_190_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](191, UserColorZoneComponent_span_191_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](195, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](199, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](201, UserColorZoneComponent_span_201_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](202, UserColorZoneComponent_span_202_Template, 2, 4, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](206, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 80, "Vendor Color Zone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 82, "Red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vendorColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vendorRedPercentageComparison < 0 || ctx.vendorRedPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.vendorRedPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 84, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 86, "Yellow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vendorColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vendorYellowPercentageComparison < 0 || ctx.vendorYellowPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.vendorYellowPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 88, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 90, "Green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vendorColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vendorGreenPercentageComparison < 0 || ctx.vendorGreenPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getGreenImage(ctx.vendorGreenPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 92, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 94, "Buyer Color Zone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 96, "Red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buyerColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buyerRedPercentageComparison < 0 || ctx.buyerRedPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.buyerRedPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 98, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 100, "Yellow"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buyerColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buyerYellowPercentageComparison < 0 || ctx.buyerYellowPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.buyerYellowPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](72, 102, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 104, "Green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buyerColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buyerGreenPercentageComparison < 0 || ctx.buyerGreenPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getGreenImage(ctx.buyerGreenPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](83, 106, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](88, 108, "Commodity Color Zone"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](95, 110, "Red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commodityColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commodityRedPercentageComparison < 0 || ctx.commodityRedPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.commodityRedPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](102, 112, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](106, 114, "Yellow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commodityColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commodityYellowPercentageComparison < 0 || ctx.commodityYellowPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.commodityYellowPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](113, 116, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](117, 118, "Green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commodityColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.commodityGreenPercentageComparison < 0 || ctx.commodityGreenPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getGreenImage(ctx.buyerGreenPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](124, 120, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](129, 122, "Plant Color Zone"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](136, 124, "Red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.plantColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.plantRedPercentageComparison < 0 || ctx.plantRedPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.plantRedPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](143, 126, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](147, 128, "Yellow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.plantColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.plantYellowPercentageComparison < 0 || ctx.plantYellowPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.plantYellowPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](154, 130, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](158, 132, "Green"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.plantColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.plantGreenPercentageComparison < 0 || ctx.plantGreenPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getGreenImage(ctx.plantGreenPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](165, 134, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](170, 136, "Material Color Zone"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](177, 138, "Red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.materialColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.materialRedPercentageComparison < 0 || ctx.materialRedPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.materialRedPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](184, 140, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](188, 142, "Yellow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.materialColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.materialYellowPercentageComparison < 0 || ctx.materialYellowPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getImage(ctx.materialYellowPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](195, 144, ctx.sentance));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](199, 146, "Green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.materialColorZoneStats);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.materialGreenPercentageComparison < 0 || ctx.materialGreenPercentageComparison >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("src", ctx.getGreenImage(ctx.materialGreenPercentageComparison), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](206, 148, ctx.sentance));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWNvbG9yLXpvbmUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserColorZoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-color-zone',
                templateUrl: './user-color-zone.component.html',
                styleUrls: ['./user-color-zone.component.css']
            }]
    }], function () { return [{ type: src_app_services_appService_generalApiService__WEBPACK_IMPORTED_MODULE_1__["GeneralApiService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { vendorColorZoneStats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], commodityColorZoneStats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buyerColorZoneStats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], materialColorZoneStats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], plantColorZoneStats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dateDiff: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "66tg":
/*!*************************************************************************************!*\
  !*** ./src/app/bootstrap/datepicker/datepicker-range/datepicker-range.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DatepickerRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerRangeComponent", function() { return DatepickerRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function DatepickerRangeComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DatepickerRangeComponent_ng_template_5_Template_span_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const date_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hoveredDate = date_r3; })("mouseleave", function DatepickerRangeComponent_ng_template_5_Template_span_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hoveredDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r3 = ctx.$implicit;
    const focused_r4 = ctx.focused;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r4)("range", ctx_r2.isRange(date_r3))("faded", ctx_r2.isHovered(date_r3) || ctx_r2.isInside(date_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r3.day, " ");
} }
class DatepickerRangeComponent {
    constructor(calendar) {
        this.hoveredDate = null;
        this.toDate = null;
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
    }
    isHovered(date) {
        return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
    }
    ngOnInit() {
    }
}
DatepickerRangeComponent.ɵfac = function DatepickerRangeComponent_Factory(t) { return new (t || DatepickerRangeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"])); };
DatepickerRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatepickerRangeComponent, selectors: [["app-datepicker-range"]], decls: 14, vars: 8, consts: [[1, "calendar-responsive"], ["outsideDays", "hidden", 3, "displayMonths", "dayTemplate", "dateSelect"], ["dp", ""], ["t", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"]], template: function DatepickerRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Example of the range selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ngb-datepicker", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function DatepickerRangeComponent_Template_ngb_datepicker_dateSelect_3_listener($event) { return ctx.onDateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatepickerRangeComponent_ng_template_5_Template, 2, 7, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayMonths", 2)("dayTemplate", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("From: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, ctx.fromDate), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("To: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 6, ctx.toDate), " ");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepicker"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"]], styles: [".custom-day[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      padding: 0.185rem 0.25rem;\r\n      display: inline-block;\r\n      height: 2rem;\r\n      width: 2rem;\r\n    }\r\n    .custom-day.focused[_ngcontent-%COMP%] {\r\n      background-color: #e6e6e6;\r\n    }\r\n    .custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n      background-color: rgb(2, 117, 216);\r\n      color: white;\r\n    }\r\n    .custom-day.faded[_ngcontent-%COMP%] {\r\n      background-color: rgba(2, 117, 216, 0.5);\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtNQUNNLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIscUJBQXFCO01BQ3JCLFlBQVk7TUFDWixXQUFXO0lBQ2I7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0Usa0NBQWtDO01BQ2xDLFlBQVk7SUFDZDtJQUNBO01BQ0Usd0NBQXdDO0lBQzFDIiwiZmlsZSI6ImRhdGVwaWNrZXItcmFuZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20tZGF5IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWRheS5mb2N1c2VkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICAgIH1cclxuICAgIC5jdXN0b20tZGF5LnJhbmdlLCAuY3VzdG9tLWRheTpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyLCAxMTcsIDIxNik7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIC5jdXN0b20tZGF5LmZhZGVkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyLCAxMTcsIDIxNiwgMC41KTtcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatepickerRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-datepicker-range',
                templateUrl: './datepicker-range.component.html',
                styleUrls: ['./datepicker-range.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }]; }, null); })();


/***/ }),

/***/ "6fCw":
/*!****************************************************************************************!*\
  !*** ./src/app/general/trendlines-buyer-execute/trendlines-buyer-execute.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TrendlinesBuyerExecuteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendlinesBuyerExecuteComponent", function() { return TrendlinesBuyerExecuteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");







function TrendlinesBuyerExecuteComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectreport_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", selectreport_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selectreport_r1.value, " ");
} }
class TrendlinesBuyerExecuteComponent {
    constructor() {
        this.selected = [''];
        this.selectreports = [
            { value: 'John Weever', viewValue: 'John Weever' },
            { value: 'Jeremy Toms', viewValue: 'Jeremy Toms' },
            { value: 'Mark Lo', viewValue: 'Mark Lo' },
        ];
    }
    ngOnInit() {
    }
}
TrendlinesBuyerExecuteComponent.ɵfac = function TrendlinesBuyerExecuteComponent_Factory(t) { return new (t || TrendlinesBuyerExecuteComponent)(); };
TrendlinesBuyerExecuteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendlinesBuyerExecuteComponent, selectors: [["app-trendlines-buyer-execute"]], inputs: { openpotreuser: "openpotreuser" }, decls: 36, vars: 3, consts: [[1, "card", "p-4", 2, "padding-bottom", "6px!important", "padding-top", "0px!important"], [1, "row"], [1, "col-md-3", "pt-4"], [1, "d-flex"], [1, "vendor-per", "pt-2"], [1, "form-control", "plant-select"], ["value", ""], ["appearance", "fill", 1, ""], ["placeholder", "Multiple Selection", "multiple", "", 1, "analysis-multi", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-4", "pt-2"], [1, "range", "pl-3", "pr-4"], [1, "sliderValue"], [1, "field"], [1, "value", "left"], ["type", "range", "min", "0", "max", "30", "value", "0", "steps", "1"], [1, "value", "right"], [1, "col-md-2", "ml-auto", "pt-4"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", 2, "border-radius", "50px", "width", "100%", "white-space", "nowrap"], [3, "value"]], template: function TrendlinesBuyerExecuteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Plant:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Open PO Expeditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Open PO Trendlines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TrendlinesBuyerExecuteComponent_Template_mat_select_valueChange_19_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TrendlinesBuyerExecuteComponent_mat_option_20_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "0 Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "30 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Execute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.openpotreuser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectreports);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]], styles: [".range[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 80px;\r\n    border-radius: 10px;\r\n    padding: 0 65px 0 10px;\r\n}\r\n.range[_ngcontent-%COMP%]   .sliderValue[_ngcontent-%COMP%]{\r\n     position: relative;\r\n     width: 100%;     \r\n}\r\n.range[_ngcontent-%COMP%]   .sliderValue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n     position: absolute;\r\n     height: 45px;\r\n     width: 45px;\r\n     \r\n     color: #7E7F81;\r\n     font-weight: bold;\r\n     text-align: center;\r\n     top: 62px;\r\n     transform: translateX(-50%) scale(0);\r\n     transform-origin: bottom;\r\n     transition: transform 0.3s ease-in-out;\r\n     line-height: 21px;\r\n     z-index: 2;          \r\n}\r\n.range[_ngcontent-%COMP%]   .sliderValue[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{\r\n    transform: translateX(-50%) scale(1);\r\n}\r\n.range[_ngcontent-%COMP%]   .sliderValue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after{\r\n    position: absolute;\r\n    content: \"\";\r\n     height: 20px;\r\n     width: 42px;\r\n     background: #fff;\r\n     transform: translateX(-50%);\r\n     border: 0px solid #fff;\r\n     z-index: -1; \r\n     left: 21px;\r\n     box-shadow: 0px 0px 6px #00000040;\r\n}\r\n.range[_ngcontent-%COMP%]   .sliderValue[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before{\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 0;\r\n    height: 0;\r\n    border-left: 6px solid transparent;\r\n    border-right: 6px solid transparent;\r\n    border-bottom: 6px solid #fff;\r\n    transform: translateX(-50%);\r\n    top: -6px;\r\n    right: 6px;\r\n    box-shadow: 0px 6px 12px #1522320D;\r\n}\r\n.range[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n}\r\n.range[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    font-size: 13px;\r\n    font-weight: 400;\r\n    color: #7E7F81;\r\n}\r\n.range[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .value.left[_ngcontent-%COMP%]{\r\n    left: -15px;\r\n    top: 0px;\r\n}\r\n.range[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .value.right[_ngcontent-%COMP%]{\r\n    right: -23px;\r\n    top: 0px;\r\n}\r\n.range[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    -webkit-appearance: none;\r\n    height: 11px;\r\n    width: 100%;\r\n    background: #D6D6D6;\r\n    border-radius: 5px;\r\n    outline: none;\r\n    border: none;\r\n}\r\n.range[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-slider-thumb{\r\n    -webkit-appearance: none; \r\n    height: 25px;\r\n    width: 10px;\r\n    background: #fff;\r\n    border:0px solid #EC1C24;\r\n    box-shadow: 0px 0px 6px #00000040;\r\n    border-radius: 7px;\r\n    cursor: pointer;  \r\n}\r\n.range[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-range-progress, [_ngcontent-%COMP%]::-moz-range-progress{\r\n    background: #EC1C24;    \r\n}\r\n@media  screen and (max-width: 1366px) {  \r\n.range[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 80px;\r\n    border-radius: 10px;\r\n    padding: 0 69px 0 13px;\r\n  }\r\n  \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kbGluZXMtYnV5ZXItZXhlY3V0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCO0FBQ0E7S0FDSyxrQkFBa0I7S0FDbEIsV0FBVztBQUNoQjtBQUNBO0tBQ0ssa0JBQWtCO0tBQ2xCLFlBQVk7S0FDWixXQUFXO0tBQ1gseUJBQXlCO0tBQ3pCLGNBQWM7S0FDZCxpQkFBaUI7S0FDakIsa0JBQWtCO0tBQ2xCLFNBQVM7S0FDVCxvQ0FBb0M7S0FDcEMsd0JBQXdCO0tBQ3hCLHNDQUFzQztLQUN0QyxpQkFBaUI7S0FDakIsVUFBVTtBQUNmO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0tBQ1YsWUFBWTtLQUNaLFdBQVc7S0FDWCxnQkFBZ0I7S0FDaEIsMkJBQTJCO0tBQzNCLHNCQUFzQjtLQUN0QixXQUFXO0tBQ1gsVUFBVTtLQUNWLGlDQUFpQztBQUN0QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0FBQ1o7QUFDQTtJQUNJLFlBQVk7SUFDWixRQUFRO0FBQ1o7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztFQUVBIiwiZmlsZSI6InRyZW5kbGluZXMtYnV5ZXItZXhlY3V0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhbmdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDAgNjVweCAwIDEwcHg7XHJcbn1cclxuLnJhbmdlIC5zbGlkZXJWYWx1ZXtcclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgd2lkdGg6IDEwMCU7ICAgICBcclxufVxyXG4ucmFuZ2UgLnNsaWRlclZhbHVlIHNwYW57XHJcbiAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgIGhlaWdodDogNDVweDtcclxuICAgICB3aWR0aDogNDVweDtcclxuICAgICAvKiBiYWNrZ3JvdW5kOiAjNjY0YWZmOyAqL1xyXG4gICAgIGNvbG9yOiAjN0U3RjgxO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICB0b3A6IDYycHg7XHJcbiAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDApO1xyXG4gICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbTtcclxuICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxuICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICB6LWluZGV4OiAyOyAgICAgICAgICBcclxufVxyXG4ucmFuZ2UgLnNsaWRlclZhbHVlIHNwYW4uc2hvd3tcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxKTtcclxufVxyXG4ucmFuZ2UgLnNsaWRlclZhbHVlIHNwYW46OmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgd2lkdGg6IDQycHg7XHJcbiAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZjtcclxuICAgICB6LWluZGV4OiAtMTsgXHJcbiAgICAgbGVmdDogMjFweDtcclxuICAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjMDAwMDAwNDA7XHJcbn0gICBcclxuLnJhbmdlIC5zbGlkZXJWYWx1ZSBzcGFuOjpiZWZvcmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgI2ZmZjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRvcDogLTZweDtcclxuICAgIHJpZ2h0OiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNnB4IDEycHggIzE1MjIzMjBEO1xyXG59IFxyXG4ucmFuZ2UgLmZpZWxkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnJhbmdlIC5maWVsZCAudmFsdWV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgY29sb3I6ICM3RTdGODE7XHJcbn1cclxuLnJhbmdlIC5maWVsZCAudmFsdWUubGVmdHtcclxuICAgIGxlZnQ6IC0xNXB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbn0gXHJcbi5yYW5nZSAuZmllbGQgLnZhbHVlLnJpZ2h0e1xyXG4gICAgcmlnaHQ6IC0yM3B4O1xyXG4gICAgdG9wOiAwcHg7XHJcbn1cclxuLnJhbmdlIC5maWVsZCBpbnB1dHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGhlaWdodDogMTFweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI0Q2RDZENjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLnJhbmdlIC5maWVsZCBpbnB1dDo6LXdlYmtpdC1zbGlkZXItdGh1bWJ7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOjBweCBzb2xpZCAjRUMxQzI0O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggIzAwMDAwMDQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgXHJcbn1cclxuLnJhbmdlIC5maWVsZCBpbnB1dDo6LXdlYmtpdC1yYW5nZS1wcm9ncmVzcywgOjotbW96LXJhbmdlLXByb2dyZXNze1xyXG4gICAgYmFja2dyb3VuZDogI0VDMUMyNDsgICAgXHJcbn1cclxuXHJcbkBtZWRpYSAgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHsgIFxyXG4ucmFuZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMCA2OXB4IDAgMTNweDtcclxuICB9XHJcbiAgXHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendlinesBuyerExecuteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trendlines-buyer-execute',
                templateUrl: './trendlines-buyer-execute.component.html',
                styleUrls: ['./trendlines-buyer-execute.component.css']
            }]
    }], function () { return []; }, { openpotreuser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6iGQ":
/*!*******************************************************************************!*\
  !*** ./src/app/elements/profile/user-statistics/user-statistics.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatisticsComponent", function() { return UserStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function UserStatisticsComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Send Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserStatisticsComponent_ng_template_25_Template_button_click_3_listener() { const modal_r2 = ctx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserStatisticsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    open(content) {
        this.modalService.open(content);
    }
}
UserStatisticsComponent.ɵfac = function UserStatisticsComponent_Factory(t) { return new (t || UserStatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
UserStatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserStatisticsComponent, selectors: [["app-user-statistics"]], decls: 27, vars: 0, consts: [[1, "card"], [1, "card-body"], [1, "profile-statistics"], [1, "text-center"], [1, "row"], [1, "col"], [1, "m-b-0"], [1, "mt-4"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "mb-1", "mr-1"], ["href", "javascript:void(0);", 1, "btn", "btn-primary", "mb-1", 3, "click"], ["sendMessageModal", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "comment-form"], [1, "col-lg-6"], [1, "form-group"], [1, "text-black", "font-w600"], [1, "required"], ["type", "text", "value", "Author", "name", "Author", "placeholder", "Author", 1, "form-control"], ["type", "text", "value", "Email", "placeholder", "Email", "name", "Email", 1, "form-control"], [1, "col-lg-12"], ["rows", "8", "name", "comment", "placeholder", "Comment", 1, "form-control"], [1, "form-group", "mb-0"], ["type", "submit", "value", "Post Comment", "name", "submit", 1, "submit", "btn", "btn-primary"]], template: function UserStatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "140");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Place Stay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "45");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserStatisticsComponent_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Send Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserStatisticsComponent_ng_template_25_Template, 31, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserStatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-statistics',
                templateUrl: './user-statistics.component.html',
                styleUrls: ['./user-statistics.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "8lO1":
/*!************************************************************************!*\
  !*** ./src/app/innercomponentModule/poscorecard/poscorecard.module.ts ***!
  \************************************************************************/
/*! exports provided: HttpLoaderFactory, PoscorecardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoscorecardModule", function() { return PoscorecardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_aboutscoreus_aboutscoreus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/aboutscoreus/aboutscoreus.component */ "tdLh");
/* harmony import */ var src_app_ackdneededorderseporthistory_ackdneededorderseporthistory_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ackdneededorderseporthistory/ackdneededorderseporthistory.component */ "0g7G");
/* harmony import */ var src_app_apps_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/apps/profile/profile.component */ "bf1G");
/* harmony import */ var src_app_bootstrap_cards_cards_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/bootstrap/cards/cards.component */ "cJeh");
/* harmony import */ var src_app_bootstrap_datepicker_datepicker_basic_datepicker_basic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/bootstrap/datepicker/datepicker-basic/datepicker-basic.component */ "ossZ");
/* harmony import */ var src_app_bootstrap_datepicker_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/bootstrap/datepicker/datepicker-range/datepicker-range.component */ "66tg");
/* harmony import */ var src_app_bootstrap_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/bootstrap/grid/grid.component */ "QzD2");
/* harmony import */ var src_app_bootstrap_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/bootstrap/list-group/list-group.component */ "vKzj");
/* harmony import */ var src_app_bootstrap_media_object_media_object_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/bootstrap/media-object/media-object.component */ "c6UI");
/* harmony import */ var src_app_buyersreporthistory_buyersreporthistory_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/buyersreporthistory/buyersreporthistory.component */ "DOZW");
/* harmony import */ var src_app_charts_apex_line_basic_line_chart_basic_line_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/charts/apex/line/basic-line-chart/basic-line-chart.component */ "c9on");
/* harmony import */ var src_app_commoditiesreporthistory_commoditiesreporthistory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/commoditiesreporthistory/commoditiesreporthistory.component */ "gz2Y");
/* harmony import */ var src_app_datalog_datalog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/datalog/datalog.component */ "TwM9");
/* harmony import */ var src_app_elements_profile_interest_interest_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/elements/profile/interest/interest.component */ "o+j7");
/* harmony import */ var src_app_elements_profile_user_statistics_user_statistics_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/elements/profile/user-statistics/user-statistics.component */ "6iGQ");
/* harmony import */ var src_app_futurepastduereporthistory_futurepastduereporthistory_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/futurepastduereporthistory/futurepastduereporthistory.component */ "bX9f");
/* harmony import */ var src_app_general_activeusers_activeusers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/general/activeusers/activeusers.component */ "td0O");
/* harmony import */ var src_app_general_analysis_buyer_execute_analysis_buyer_execute_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/general/analysis-buyer-execute/analysis-buyer-execute.component */ "Erd0");
/* harmony import */ var src_app_general_analysis_buyer_table_analysis_buyer_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/general/analysis-buyer-table/analysis-buyer-table.component */ "G9mj");
/* harmony import */ var src_app_general_app_datahistorytable_app_datahistorytable_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/general/app-datahistorytable/app-datahistorytable.component */ "KKz+");
/* harmony import */ var src_app_general_billing_billing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/general/billing/billing.component */ "xbl6");
/* harmony import */ var src_app_general_buyer_scorecard_table_buyer_scorecard_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/general/buyer-scorecard-table/buyer-scorecard-table.component */ "EjQg");
/* harmony import */ var src_app_general_cancelplan_dialog_cancelplan_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/general/cancelplan-dialog/cancelplan-dialog.component */ "nbxs");
/* harmony import */ var src_app_general_commodity_scorecard_table_commodity_scorecard_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/general/commodity-scorecard-table/commodity-scorecard-table.component */ "gbHi");
/* harmony import */ var src_app_general_current_open_po_status_tablegraph_dialog_current_open_po_status_tablegraph_dialog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/general/current-open-po-status-tablegraph-dialog/current-open-po-status-tablegraph-dialog.component */ "8uyI");
/* harmony import */ var src_app_general_current_open_po_status_tablegraph_current_open_po_status_tablegraph_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/general/current-open-po-status-tablegraph/current-open-po-status-tablegraph.component */ "r29j");
/* harmony import */ var src_app_general_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/general/datatable/datatable.component */ "nA6c");
/* harmony import */ var src_app_general_datatablewithpagination_datatablewithpagination_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! src/app/general/datatablewithpagination/datatablewithpagination.component */ "yalS");
/* harmony import */ var src_app_general_execute_buyer_execute_buyer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/general/execute-buyer/execute-buyer.component */ "rNkR");
/* harmony import */ var src_app_general_execute_commodity_execute_commodity_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/general/execute-commodity/execute-commodity.component */ "U2wo");
/* harmony import */ var src_app_general_execute_material_execute_material_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/general/execute-material/execute-material.component */ "y81F");
/* harmony import */ var src_app_general_execute_plant_execute_plant_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/general/execute-plant/execute-plant.component */ "LaP4");
/* harmony import */ var src_app_general_execute_execute_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/general/execute/execute.component */ "v9LR");
/* harmony import */ var src_app_general_filter_by_dropdown_two_filter_by_dropdown_two_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! src/app/general/filter-by-dropdown-two/filter-by-dropdown-two.component */ "o9Jc");
/* harmony import */ var src_app_general_general_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/general/general.component */ "epYd");
/* harmony import */ var src_app_general_generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! src/app/general/generic-dialog/generic-dialog.component */ "nr+7");
/* harmony import */ var src_app_general_graphlargetc_graphlargetc_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! src/app/general/graphlargetc/graphlargetc.component */ "L5xG");
/* harmony import */ var src_app_general_mapout_vendor_filed_mapout_vendor_filed_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! src/app/general/mapout-vendor-filed/mapout-vendor-filed.component */ "/RG9");
/* harmony import */ var src_app_general_mapout_vendor_map_mapout_vendor_map_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/app/general/mapout-vendor-map/mapout-vendor-map.component */ "GyXu");
/* harmony import */ var src_app_general_material_scorecard_table_material_scorecard_table_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! src/app/general/material-scorecard-table/material-scorecard-table.component */ "gxga");
/* harmony import */ var src_app_general_myplan_myplan_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! src/app/general/myplan/myplan.component */ "UiRS");
/* harmony import */ var src_app_general_okdialogcomponent_okdialogcomponent_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! src/app/general/okdialogcomponent/okdialogcomponent.component */ "06I3");
/* harmony import */ var src_app_general_paymentpaynow_dialog_paymentpaynow_dialog_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! src/app/general/paymentpaynow-dialog/paymentpaynow-dialog.component */ "Jr1t");
/* harmony import */ var src_app_general_plant_scorecard_table_plant_scorecard_table_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! src/app/general/plant-scorecard-table/plant-scorecard-table.component */ "AMNr");
/* harmony import */ var src_app_general_po_newuserreg_po_newuserreg_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! src/app/general/po-newuserreg/po-newuserreg.component */ "c6T8");
/* harmony import */ var src_app_general_po_product_cat_po_product_cat_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! src/app/general/po-product-cat/po-product-cat.component */ "r/KT");
/* harmony import */ var src_app_general_po_vendor_average_performance_po_vendor_average_performance_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! src/app/general/po-vendor-average-performance/po-vendor-average-performance.component */ "Akq8");
/* harmony import */ var src_app_general_po_vendor_manager_po_vendor_manager_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! src/app/general/po-vendor-manager/po-vendor-manager.component */ "3EsP");
/* harmony import */ var src_app_general_pomanager_piechart_pomanager_piechart_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! src/app/general/pomanager-piechart/pomanager-piechart.component */ "iIKw");
/* harmony import */ var src_app_general_pomanager_tablechart_two_pomanager_tablechart_two_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! src/app/general/pomanager-tablechart-two/pomanager-tablechart-two.component */ "qWqM");
/* harmony import */ var src_app_general_pomanager_tablechart_pomanager_tablechart_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! src/app/general/pomanager-tablechart/pomanager-tablechart.component */ "/hUj");
/* harmony import */ var src_app_general_pomanager_vendor_deliveryoption_pomanager_vendor_deliveryoption_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! src/app/general/pomanager-vendor-deliveryoption/pomanager-vendor-deliveryoption.component */ "A4lP");
/* harmony import */ var src_app_general_pomanager_vendor_history_pomanager_vendor_history_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! src/app/general/pomanager-vendor-history/pomanager-vendor-history.component */ "f+C7");
/* harmony import */ var src_app_general_pomanager_vendor_search_pomanager_vendor_search_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! src/app/general/pomanager-vendor-search/pomanager-vendor-search.component */ "Q68g");
/* harmony import */ var src_app_general_pomanagerusercounts_pomanagerusercounts_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! src/app/general/pomanagerusercounts/pomanagerusercounts.component */ "RGxx");
/* harmony import */ var src_app_general_pomanageruserreg_pomanageruserreg_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! src/app/general/pomanageruserreg/pomanageruserreg.component */ "GQzR");
/* harmony import */ var src_app_general_popupchart_popupchart_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! src/app/general/popupchart/popupchart.component */ "/VEB");
/* harmony import */ var src_app_general_popuptable_popuptable_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! src/app/general/popuptable/popuptable.component */ "2IqR");
/* harmony import */ var src_app_general_postatus_filterby_dropdown_postatus_filterby_dropdown_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! src/app/general/postatus-filterby-dropdown/postatus-filterby-dropdown.component */ "7T5O");
/* harmony import */ var src_app_general_referafriend_dialog_referafriend_dialog_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! src/app/general/referafriend-dialog/referafriend-dialog.component */ "EVRw");
/* harmony import */ var src_app_general_referral_referral_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! src/app/general/referral/referral.component */ "cvL2");
/* harmony import */ var src_app_general_registrations_dashboard_registrations_dashboard_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! src/app/general/registrations-dashboard/registrations-dashboard.component */ "EIl5");
/* harmony import */ var src_app_general_report_ltadetail_ltadetail_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! src/app/general/report/ltadetail/ltadetail.component */ "++TE");
/* harmony import */ var src_app_general_reporthistorydetail_reporthistorydetail_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! src/app/general/reporthistorydetail/reporthistorydetail.component */ "uLfh");
/* harmony import */ var src_app_general_sendreportdialog_sendreportdialog_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! src/app/general/sendreportdialog/sendreportdialog.component */ "fi3O");
/* harmony import */ var src_app_general_subsription_payment_inviteuser_subsription_payment_inviteuser_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! src/app/general/subsription-payment-inviteuser/subsription-payment-inviteuser.component */ "mNxT");
/* harmony import */ var src_app_general_successfully_dialog_successfully_dialog_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! src/app/general/successfully-dialog/successfully-dialog.component */ "PrfL");
/* harmony import */ var src_app_general_superregboxes_superregboxes_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! src/app/general/superregboxes/superregboxes.component */ "so5p");
/* harmony import */ var src_app_general_targetpopup_targetpopup_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! src/app/general/targetpopup/targetpopup.component */ "RDmc");
/* harmony import */ var src_app_general_totalline_dashboard_totalline_dashboard_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! src/app/general/totalline-dashboard/totalline-dashboard.component */ "qnR0");
/* harmony import */ var src_app_general_totalscore_graph_totalscore_graph_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! src/app/general/totalscore-graph/totalscore-graph.component */ "Otge");
/* harmony import */ var src_app_general_totalscore_totalscore_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! src/app/general/totalscore/totalscore.component */ "bMeE");
/* harmony import */ var src_app_general_trendlines_buyer_execute_trendlines_buyer_execute_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! src/app/general/trendlines-buyer-execute/trendlines-buyer-execute.component */ "6fCw");
/* harmony import */ var src_app_general_trendlines_buyer_useradmin_table_trendlines_buyer_useradmin_table_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! src/app/general/trendlines-buyer-useradmin-table/trendlines-buyer-useradmin-table.component */ "IN5A");
/* harmony import */ var src_app_general_trendlines_pomanager_buyer_trendlines_pomanager_buyer_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! src/app/general/trendlines-pomanager-buyer/trendlines-pomanager-buyer.component */ "9AxS");
/* harmony import */ var src_app_general_trendlines_pomanager_vendor_trendlines_pomanager_vendor_component__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! src/app/general/trendlines-pomanager-vendor/trendlines-pomanager-vendor.component */ "X3QW");
/* harmony import */ var src_app_general_twoline_basic_line_chart_twoline_basic_line_chart_component__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! src/app/general/twoline-basic-line-chart/twoline-basic-line-chart.component */ "MBe/");
/* harmony import */ var src_app_general_upgradesubscription_dialog_upgradesubscription_dialog_component__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! src/app/general/upgradesubscription-dialog/upgradesubscription-dialog.component */ "/LWC");
/* harmony import */ var src_app_general_upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! src/app/general/upload-dialog/upload-dialog.component */ "k8gg");
/* harmony import */ var src_app_general_user_color_zone_user_color_zone_component__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! src/app/general/user-color-zone/user-color-zone.component */ "1N+D");
/* harmony import */ var src_app_general_userdialogout_userdialogout_component__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! src/app/general/userdialogout/userdialogout.component */ "BZIh");
/* harmony import */ var src_app_general_vendor_color_zone_vendor_color_zone_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! src/app/general/vendor-color-zone/vendor-color-zone.component */ "5mZo");
/* harmony import */ var src_app_general_vendor_scorecard_table_vendor_scorecard_table_component__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! src/app/general/vendor-scorecard-table/vendor-scorecard-table.component */ "+rm+");
/* harmony import */ var src_app_general_vendor_total_score_vendor_total_score_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! src/app/general/vendor-total-score/vendor-total-score.component */ "B3UE");
/* harmony import */ var src_app_general_vendorexecutive_vendorexecutive_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! src/app/general/vendorexecutive/vendorexecutive.component */ "SAyA");
/* harmony import */ var src_app_general_vendorscorecard_boxes_vendorscorecard_boxes_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! src/app/general/vendorscorecard-boxes/vendorscorecard-boxes.component */ "7Sv8");
/* harmony import */ var src_app_general_vendortotal_coregraph_dialog_vendortotal_coregraph_dialog_component__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! src/app/general/vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component */ "fb2g");
/* harmony import */ var src_app_howtouse_howtouse_component__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! src/app/howtouse/howtouse.component */ "V/R0");
/* harmony import */ var src_app_importdata_importdata_component__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! src/app/importdata/importdata.component */ "QtHJ");
/* harmony import */ var src_app_inviteuser_inviteuser_component__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! src/app/inviteuser/inviteuser.component */ "0bK/");
/* harmony import */ var src_app_kpi_parameter_setting_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! src/app/kpi-parameter-setting/delivery/delivery.component */ "oDHS");
/* harmony import */ var src_app_kpi_parameter_setting_kpi_parameter_setting_component__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! src/app/kpi-parameter-setting/kpi-parameter-setting.component */ "cDrP");
/* harmony import */ var src_app_kpi_parameter_setting_linechart_option_linechart_option_component__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! src/app/kpi-parameter-setting/linechart-option/linechart-option.component */ "LRL0");
/* harmony import */ var src_app_kpi_parameter_setting_lta_parameter_lta_parameter_component__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! src/app/kpi-parameter-setting/lta-parameter/lta-parameter.component */ "uEnE");
/* harmony import */ var src_app_kpi_parameter_setting_metrics_weight_metrics_weight_component__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! src/app/kpi-parameter-setting/metrics-weight/metrics-weight.component */ "zHiX");
/* harmony import */ var src_app_kpi_parameter_setting_ncr_parameter_ncr_parameter_component__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! src/app/kpi-parameter-setting/ncr-parameter/ncr-parameter.component */ "tLk8");
/* harmony import */ var src_app_kpi_parameter_setting_otd_parameter_otd_parameter_component__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! src/app/kpi-parameter-setting/otd-parameter/otd-parameter.component */ "JumG");
/* harmony import */ var src_app_kpi_parameter_setting_ppv_parameter_ppv_parameter_component__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! src/app/kpi-parameter-setting/ppv-parameter/ppv-parameter.component */ "pVKp");
/* harmony import */ var src_app_kpi_parameter_setting_product_cat_product_cat_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! src/app/kpi-parameter-setting/product-cat/product-cat.component */ "foe2");
/* harmony import */ var src_app_kpiparameter_kpiparameter_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! src/app/kpiparameter/kpiparameter.component */ "02gW");
/* harmony import */ var src_app_kpiparametersetting_kpiparametersetting_component__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! src/app/kpiparametersetting/kpiparametersetting.component */ "OR1m");
/* harmony import */ var src_app_maindashboard_filterby_dropdown_filterby_dropdown_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! src/app/maindashboard/filterby-dropdown/filterby-dropdown.component */ "Q59B");
/* harmony import */ var src_app_maindashboard_maindashboard_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! src/app/maindashboard/maindashboard.component */ "gNCE");
/* harmony import */ var src_app_maindashboard_newuserreg_newuserreg_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! src/app/maindashboard/newuserreg/newuserreg.component */ "lRF0");
/* harmony import */ var src_app_maindashboard_totalrevenue_totalrevenue_component__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! src/app/maindashboard/totalrevenue/totalrevenue.component */ "X33d");
/* harmony import */ var src_app_maindashboard_year_month_sign_up_year_month_sign_up_component__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! src/app/maindashboard/year-month-sign-up/year-month-sign-up.component */ "yvun");
/* harmony import */ var src_app_manageusers_manageusers_component__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! src/app/manageusers/manageusers.component */ "777r");
/* harmony import */ var src_app_mapout_vendor_mapout_vendor_component__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! src/app/mapout-vendor/mapout-vendor.component */ "Kosj");
/* harmony import */ var src_app_materialsreporthistory_materialsreporthistory_component__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! src/app/materialsreporthistory/materialsreporthistory.component */ "IQpD");
/* harmony import */ var src_app_openordersreporthistory_openordersreporthistory_component__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! src/app/openordersreporthistory/openordersreporthistory.component */ "b75u");
/* harmony import */ var src_app_openpoexpeditor_openpoexpeditor_component__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! src/app/openpoexpeditor/openpoexpeditor.component */ "+0SL");
/* harmony import */ var src_app_openpostatus_openpostatus_component__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! src/app/openpostatus/openpostatus.component */ "Vkmt");
/* harmony import */ var src_app_openpotrendlinesuseradmin_openpotrendlinesuseradmin_component__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! src/app/openpotrendlinesuseradmin/openpotrendlinesuseradmin.component */ "10xS");
/* harmony import */ var src_app_packageupgrade_packageupgrade_component__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! src/app/packageupgrade/packageupgrade.component */ "K3V0");
/* harmony import */ var src_app_pastdueordersreporthistory_pastdueordersreporthistory_component__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! src/app/pastdueordersreporthistory/pastdueordersreporthistory.component */ "pylE");
/* harmony import */ var src_app_payment_payment_component__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! src/app/payment/payment.component */ "DI59");
/* harmony import */ var src_app_plantsreporthistory_plantsreporthistory_component__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! src/app/plantsreporthistory/plantsreporthistory.component */ "aRhb");
/* harmony import */ var src_app_poreporthistory_poreporthistory_component__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! src/app/poreporthistory/poreporthistory.component */ "SnPo");
/* harmony import */ var src_app_pouserdashboard_pouserdashboard_component__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! src/app/pouserdashboard/pouserdashboard.component */ "6/0V");
/* harmony import */ var src_app_raw_data_setting_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! src/app/raw-data-setting/buyer/buyer.component */ "56Br");
/* harmony import */ var src_app_raw_data_setting_non_conformance_report_non_conformance_report_component__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! src/app/raw-data-setting/non-conformance-report/non-conformance-report.component */ "Pshg");
/* harmony import */ var src_app_raw_data_setting_plant_plant_component__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! src/app/raw-data-setting/plant/plant.component */ "6Ltd");
/* harmony import */ var src_app_raw_data_setting_po_history_info_po_history_info_component__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! src/app/raw-data-setting/po-history-info/po-history-info.component */ "jVpY");
/* harmony import */ var src_app_raw_data_setting_po_open_order_report_po_open_order_report_component__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! src/app/raw-data-setting/po-open-order-report/po-open-order-report.component */ "vBeG");
/* harmony import */ var src_app_raw_data_setting_raw_data_setting_component__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! src/app/raw-data-setting/raw-data-setting.component */ "dsQw");
/* harmony import */ var src_app_raw_data_setting_vendor_commodity_vendor_commodity_component__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! src/app/raw-data-setting/vendor-commodity/vendor-commodity.component */ "zq+o");
/* harmony import */ var src_app_referafriend_referafriend_component__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! src/app/referafriend/referafriend.component */ "LgLl");
/* harmony import */ var src_app_referralmanagement_referralmanagement_component__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! src/app/referralmanagement/referralmanagement.component */ "HO4d");
/* harmony import */ var src_app_reporthistory_reporthistory_component__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! src/app/reporthistory/reporthistory.component */ "9Iqe");
/* harmony import */ var src_app_scoreus_buyer_scorecard_scoreus_buyer_scorecard_component__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! src/app/scoreus-buyer-scorecard/scoreus-buyer-scorecard.component */ "Uars");
/* harmony import */ var src_app_scoreus_commodity_scorecard_scoreus_commodity_scorecard_component__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! src/app/scoreus-commodity-scorecard/scoreus-commodity-scorecard.component */ "UM2+");
/* harmony import */ var src_app_scoreus_material_scorecard_scoreus_material_scorecard_component__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! src/app/scoreus-material-scorecard/scoreus-material-scorecard.component */ "skhd");
/* harmony import */ var src_app_scoreus_plant_scorecard_scoreus_plant_scorecard_component__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! src/app/scoreus-plant-scorecard/scoreus-plant-scorecard.component */ "ZVUp");
/* harmony import */ var src_app_subscriptionpayment_subscriptionpayment_component__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! src/app/subscriptionpayment/subscriptionpayment.component */ "JCTp");
/* harmony import */ var src_app_superadmincompletedashboard_superadmincompletedashboard_component__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! src/app/superadmincompletedashboard/superadmincompletedashboard.component */ "nGi8");
/* harmony import */ var src_app_superadmindashboard_superadmindashboard_component__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! src/app/superadmindashboard/superadmindashboard.component */ "FLtF");
/* harmony import */ var src_app_superadminpo_dashboard_superadminpo_dashboard_component__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! src/app/superadminpo-dashboard/superadminpo-dashboard.component */ "zWJ0");
/* harmony import */ var src_app_superadminscorecarddashboard_superadminscorecarddashboard_component__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! src/app/superadminscorecarddashboard/superadminscorecarddashboard.component */ "cPJ6");
/* harmony import */ var src_app_target_settings_scoreus_target_score_buyer_scoreus_target_score_buyer_component__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! src/app/target-settings/scoreus-target-score-buyer/scoreus-target-score-buyer.component */ "FoNa");
/* harmony import */ var src_app_target_settings_scoreus_target_score_commodity_scoreus_target_score_commodity_component__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! src/app/target-settings/scoreus-target-score-commodity/scoreus-target-score-commodity.component */ "Xyqm");
/* harmony import */ var src_app_target_settings_scoreus_target_score_materials_scoreus_target_score_materials_component__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! src/app/target-settings/scoreus-target-score-materials/scoreus-target-score-materials.component */ "Mzb1");
/* harmony import */ var src_app_target_settings_scoreus_target_score_plant_scoreus_target_score_plant_component__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! src/app/target-settings/scoreus-target-score-plant/scoreus-target-score-plant.component */ "uM+z");
/* harmony import */ var src_app_target_settings_scoreus_target_score_vendor_scoreus_target_score_vendor_component__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! src/app/target-settings/scoreus-target-score-vendor/scoreus-target-score-vendor.component */ "yAc9");
/* harmony import */ var src_app_target_settings_target_settings_component__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! src/app/target-settings/target-settings.component */ "kW+/");
/* harmony import */ var src_app_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! src/app/userdetail/userdetail.component */ "EOSk");
/* harmony import */ var src_app_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! src/app/userprofile/userprofile.component */ "bZcC");
/* harmony import */ var src_app_vendor_score_component_vendor_score_component_component__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! src/app/vendor-score-component/vendor-score-component.component */ "+0Pr");
/* harmony import */ var src_app_vendor_scorecard_vendor_scorecard_component__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! src/app/vendor-scorecard/vendor-scorecard.component */ "yUuy");
/* harmony import */ var src_app_vendorsreporthistory_vendorsreporthistory_component__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! src/app/vendorsreporthistory/vendorsreporthistory.component */ "IuW0");
/* harmony import */ var src_app_vnedortable_vnedortable_component__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! src/app/vnedortable/vnedortable.component */ "sv7i");
/* harmony import */ var src_invitevendorbyuser_invitevendorbyuser_component__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! src/invitevendorbyuser/invitevendorbyuser.component */ "Lbyv");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! src/app/modules/shared/shared.module */ "FpXt");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var src_app_modules_dashboard_routing_routing_module__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! src/app/modules/dashboard/routing/routing.module */ "82rS");
/* harmony import */ var src_app_admin_admin_component__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! src/app/admin/admin.component */ "TRGY");
/* harmony import */ var src_app_elements_footer_footer_component__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! src/app/elements/footer/footer.component */ "x819");
/* harmony import */ var src_app_elements_header_header_component__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! src/app/elements/header/header.component */ "mZn5");
/* harmony import */ var src_app_elements_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! src/app/elements/nav-header/nav-header.component */ "z6+Y");
/* harmony import */ var src_app_elements_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! src/app/elements/navigation/navigation.component */ "4omd");
/* harmony import */ var src_app_charts_apex_bar_bar_component__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! src/app/charts/apex/bar/bar.component */ "AOT+");
/* harmony import */ var src_app_general_podatatable_podatatable_component__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! src/app/general/podatatable/podatatable.component */ "4jMM");
/* harmony import */ var src_app_openpoexpeditor_openpoexpeditor_email_template_openpoexpeditor_email_template_component__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! src/app/openpoexpeditor/openpoexpeditor-email-template/openpoexpeditor-email-template.component */ "IUHQ");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! ng-multiselect-dropdown */ "Egam");
/* harmony import */ var src_app_general_trendlines_pomanager_buyer_trendlines_pomanager_linechart_trendlines_pomanager_linechart_component__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! src/app/general/trendlines-pomanager-buyer/trendlines-pomanager-linechart/trendlines-pomanager-linechart.component */ "Y5v/");
/* harmony import */ var src_app_general_trendlines_pomanager_average_linechart_trendlines_pomanager_average_linechart_component__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! src/app/general/trendlines-pomanager-average-linechart/trendlines-pomanager-average-linechart.component */ "OSAb");
/* harmony import */ var src_app_openpoanalysis_openpoanalysis_component__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! src/app/openpoanalysis/openpoanalysis.component */ "SVHK");
/* harmony import */ var src_app_openpoanalysis_openpoanalysis_buyer_openpoanalysis_buyer_component__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! src/app/openpoanalysis/openpoanalysis-buyer/openpoanalysis-buyer.component */ "TCSo");
/* harmony import */ var src_app_openpoanalysis_openpoanalysis_vendor_openpoanalysis_vendor_component__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! src/app/openpoanalysis/openpoanalysis-vendor/openpoanalysis-vendor.component */ "w76x");
/* harmony import */ var src_app_openpoanalysis_openpoanalysis_piechart_openpoanalysis_piechart_component__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! src/app/openpoanalysis/openpoanalysis-piechart/openpoanalysis-piechart.component */ "Lyfg");
/* harmony import */ var src_app_openpoanalysis_openpoanalysis_barchart_openpoanalysis_barchart_component__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! src/app/openpoanalysis/openpoanalysis-barchart/openpoanalysis-barchart.component */ "3HVL");
/* harmony import */ var src_app_general_po_kpiparam_po_kpiparam_component__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! src/app/general/po-kpiparam/po-kpiparam.component */ "X0PE");
/* harmony import */ var src_app_pouserdashboard_pouserdashboard_linechart_pouserdashboard_linechart_component__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! src/app/pouserdashboard/pouserdashboard-linechart/pouserdashboard-linechart.component */ "IJb2");
/* harmony import */ var src_app_leadtimecheckhistory_leadtimecheckhistory_component__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! src/app/leadtimecheckhistory/leadtimecheckhistory.component */ "/mMH");
/* harmony import */ var src_app_superadminsetting_superadminsetting_component__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! src/app/superadminsetting/superadminsetting.component */ "5QbL");


















































// import { PomanagerByopenpoComponent } from 'src/app/general/pomanager-byopenpo_back/pomanager-byopenpo.component';






// import { PomanagerbuyerComponent } from 'src/app/general/pomanagerbuyer/pomanagerbuyer.component';


// import { PomanagervendorComponent } from 'src/app/general/pomanagervendor/pomanagervendor.component';






















































// import { OpenpoanalysisComponent } from 'src/app/openpoanalysis/openpoanalysis.component';


// import { OpenpotrendlinesComponent } from 'src/app/openpotrendlines/openpotrendlines.component';







































































function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_160__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    // return new TranslateHttpLoader(http)
}
class PoscorecardModule {
}
PoscorecardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PoscorecardModule });
PoscorecardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PoscorecardModule_Factory(t) { return new (t || PoscorecardModule)(); }, imports: [[
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_154__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_154__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    // useFactory:(createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_153__["HttpClient"]],
                },
            }),
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // RoutingModule,
            src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_159__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_156__["NgbModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_158__["ChartsModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_157__["NgApexchartsModule"],
            // PerfectScrollbarModule,
            src_app_modules_dashboard_routing_routing_module__WEBPACK_IMPORTED_MODULE_161__["RoutingModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_155__["GoogleMapsModule"],
            // NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
            // NgxMaskModule.forRoot(),
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_170__["NgMultiSelectDropDownModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PoscorecardModule, { declarations: [src_app_admin_admin_component__WEBPACK_IMPORTED_MODULE_162__["AdminComponent"],
        src_app_elements_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_165__["NavHeaderComponent"],
        src_app_elements_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_166__["NavigationComponent"],
        src_app_elements_header_header_component__WEBPACK_IMPORTED_MODULE_164__["HeaderComponent"],
        src_app_elements_footer_footer_component__WEBPACK_IMPORTED_MODULE_163__["FooterComponent"],
        src_app_apps_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        src_app_elements_profile_user_statistics_user_statistics_component__WEBPACK_IMPORTED_MODULE_16__["UserStatisticsComponent"],
        src_app_elements_profile_interest_interest_component__WEBPACK_IMPORTED_MODULE_15__["InterestComponent"],
        src_app_bootstrap_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_9__["ListGroupComponent"],
        src_app_bootstrap_datepicker_datepicker_basic_datepicker_basic_component__WEBPACK_IMPORTED_MODULE_6__["DatepickerBasicComponent"],
        src_app_bootstrap_datepicker_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_7__["DatepickerRangeComponent"],
        src_app_bootstrap_media_object_media_object_component__WEBPACK_IMPORTED_MODULE_10__["MediaObjectComponent"],
        //NgbdSortableHeader,
        src_invitevendorbyuser_invitevendorbyuser_component__WEBPACK_IMPORTED_MODULE_152__["InvitevendorbyuserComponent"],
        src_app_bootstrap_cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"],
        src_app_bootstrap_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"],
        src_app_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_146__["UserdetailComponent"],
        src_app_manageusers_manageusers_component__WEBPACK_IMPORTED_MODULE_108__["ManageusersComponent"],
        src_app_referralmanagement_referralmanagement_component__WEBPACK_IMPORTED_MODULE_129__["ReferralmanagementComponent"],
        src_app_maindashboard_maindashboard_component__WEBPACK_IMPORTED_MODULE_104__["MaindashboardComponent"],
        src_app_maindashboard_newuserreg_newuserreg_component__WEBPACK_IMPORTED_MODULE_105__["NewuserregComponent"],
        src_app_maindashboard_filterby_dropdown_filterby_dropdown_component__WEBPACK_IMPORTED_MODULE_103__["FilterbyDropdownComponent"],
        src_app_maindashboard_totalrevenue_totalrevenue_component__WEBPACK_IMPORTED_MODULE_106__["TotalrevenueComponent"],
        src_app_maindashboard_year_month_sign_up_year_month_sign_up_component__WEBPACK_IMPORTED_MODULE_107__["YearMonthSignUpComponent"],
        src_app_general_general_component__WEBPACK_IMPORTED_MODULE_36__["GeneralComponent"],
        src_app_general_totalscore_totalscore_component__WEBPACK_IMPORTED_MODULE_73__["TotalscoreComponent"],
        src_app_general_totalscore_graph_totalscore_graph_component__WEBPACK_IMPORTED_MODULE_72__["TotalscoreGraphComponent"],
        src_app_general_registrations_dashboard_registrations_dashboard_component__WEBPACK_IMPORTED_MODULE_63__["RegistrationsDashboardComponent"],
        src_app_general_user_color_zone_user_color_zone_component__WEBPACK_IMPORTED_MODULE_81__["UserColorZoneComponent"],
        src_app_general_totalline_dashboard_totalline_dashboard_component__WEBPACK_IMPORTED_MODULE_71__["TotallineDashboardComponent"],
        src_app_aboutscoreus_aboutscoreus_component__WEBPACK_IMPORTED_MODULE_2__["AboutscoreusComponent"],
        src_app_inviteuser_inviteuser_component__WEBPACK_IMPORTED_MODULE_91__["InviteuserComponent"],
        src_app_datalog_datalog_component__WEBPACK_IMPORTED_MODULE_14__["DatalogComponent"],
        src_app_target_settings_target_settings_component__WEBPACK_IMPORTED_MODULE_145__["TargetSettingsComponent"],
        src_app_target_settings_scoreus_target_score_vendor_scoreus_target_score_vendor_component__WEBPACK_IMPORTED_MODULE_144__["ScoreusTargetScoreVendorComponent"],
        src_app_target_settings_scoreus_target_score_buyer_scoreus_target_score_buyer_component__WEBPACK_IMPORTED_MODULE_140__["ScoreusTargetScoreBuyerComponent"],
        src_app_target_settings_scoreus_target_score_commodity_scoreus_target_score_commodity_component__WEBPACK_IMPORTED_MODULE_141__["ScoreusTargetScoreCommodityComponent"],
        src_app_target_settings_scoreus_target_score_plant_scoreus_target_score_plant_component__WEBPACK_IMPORTED_MODULE_143__["ScoreusTargetScorePlantComponent"],
        src_app_raw_data_setting_raw_data_setting_component__WEBPACK_IMPORTED_MODULE_126__["RawDataSettingComponent"],
        src_app_raw_data_setting_po_history_info_po_history_info_component__WEBPACK_IMPORTED_MODULE_124__["PoHistoryInfoComponent"],
        src_app_raw_data_setting_po_open_order_report_po_open_order_report_component__WEBPACK_IMPORTED_MODULE_125__["PoOpenOrderReportComponent"],
        src_app_raw_data_setting_non_conformance_report_non_conformance_report_component__WEBPACK_IMPORTED_MODULE_122__["NonConformanceReportComponent"],
        src_app_raw_data_setting_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_121__["BuyerComponent"],
        src_app_raw_data_setting_vendor_commodity_vendor_commodity_component__WEBPACK_IMPORTED_MODULE_127__["VendorCommodityComponent"],
        src_app_kpi_parameter_setting_kpi_parameter_setting_component__WEBPACK_IMPORTED_MODULE_93__["KpiParameterSettingComponent"],
        src_app_kpi_parameter_setting_otd_parameter_otd_parameter_component__WEBPACK_IMPORTED_MODULE_98__["OtdParameterComponent"],
        src_app_kpi_parameter_setting_ncr_parameter_ncr_parameter_component__WEBPACK_IMPORTED_MODULE_97__["NcrParameterComponent"],
        src_app_kpi_parameter_setting_ppv_parameter_ppv_parameter_component__WEBPACK_IMPORTED_MODULE_99__["PpvParameterComponent"],
        src_app_kpi_parameter_setting_lta_parameter_lta_parameter_component__WEBPACK_IMPORTED_MODULE_95__["LtaParameterComponent"],
        src_app_kpi_parameter_setting_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_92__["DeliveryComponent"],
        src_app_kpi_parameter_setting_linechart_option_linechart_option_component__WEBPACK_IMPORTED_MODULE_94__["LinechartOptionComponent"],
        src_app_kpi_parameter_setting_metrics_weight_metrics_weight_component__WEBPACK_IMPORTED_MODULE_96__["MetricsWeightComponent"],
        src_app_kpi_parameter_setting_product_cat_product_cat_component__WEBPACK_IMPORTED_MODULE_100__["ProductCatComponent"],
        src_app_vendor_scorecard_vendor_scorecard_component__WEBPACK_IMPORTED_MODULE_149__["VendorScorecardComponent"],
        src_app_general_filter_by_dropdown_two_filter_by_dropdown_two_component__WEBPACK_IMPORTED_MODULE_35__["FilterByDropdownTwoComponent"],
        src_app_general_vendorscorecard_boxes_vendorscorecard_boxes_component__WEBPACK_IMPORTED_MODULE_87__["VendorscorecardBoxesComponent"],
        src_app_general_vendor_color_zone_vendor_color_zone_component__WEBPACK_IMPORTED_MODULE_83__["VendorColorZoneComponent"],
        src_app_general_vendor_total_score_vendor_total_score_component__WEBPACK_IMPORTED_MODULE_85__["VendorTotalScoreComponent"],
        src_app_general_execute_execute_component__WEBPACK_IMPORTED_MODULE_34__["ExecuteComponent"],
        src_app_general_vendor_scorecard_table_vendor_scorecard_table_component__WEBPACK_IMPORTED_MODULE_84__["VendorScorecardTableComponent"],
        src_app_scoreus_buyer_scorecard_scoreus_buyer_scorecard_component__WEBPACK_IMPORTED_MODULE_131__["ScoreusBuyerScorecardComponent"],
        src_app_scoreus_commodity_scorecard_scoreus_commodity_scorecard_component__WEBPACK_IMPORTED_MODULE_132__["ScoreusCommodityScorecardComponent"],
        src_app_scoreus_plant_scorecard_scoreus_plant_scorecard_component__WEBPACK_IMPORTED_MODULE_134__["ScoreusPlantScorecardComponent"],
        src_app_scoreus_material_scorecard_scoreus_material_scorecard_component__WEBPACK_IMPORTED_MODULE_133__["ScoreusMaterialScorecardComponent"],
        src_app_mapout_vendor_mapout_vendor_component__WEBPACK_IMPORTED_MODULE_109__["MapoutVendorComponent"],
        src_app_general_mapout_vendor_filed_mapout_vendor_filed_component__WEBPACK_IMPORTED_MODULE_39__["MapoutVendorFiledComponent"],
        src_app_general_mapout_vendor_map_mapout_vendor_map_component__WEBPACK_IMPORTED_MODULE_40__["MapoutVendorMapComponent"],
        src_app_general_execute_buyer_execute_buyer_component__WEBPACK_IMPORTED_MODULE_30__["ExecuteBuyerComponent"],
        src_app_general_execute_commodity_execute_commodity_component__WEBPACK_IMPORTED_MODULE_31__["ExecuteCommodityComponent"],
        src_app_general_execute_plant_execute_plant_component__WEBPACK_IMPORTED_MODULE_33__["ExecutePlantComponent"],
        src_app_general_execute_material_execute_material_component__WEBPACK_IMPORTED_MODULE_32__["ExecuteMaterialComponent"],
        src_app_general_userdialogout_userdialogout_component__WEBPACK_IMPORTED_MODULE_82__["UserdialogoutComponent"],
        src_app_raw_data_setting_plant_plant_component__WEBPACK_IMPORTED_MODULE_123__["PlantComponent"],
        src_app_general_sendreportdialog_sendreportdialog_component__WEBPACK_IMPORTED_MODULE_66__["SendreportdialogComponent"],
        src_app_general_vendortotal_coregraph_dialog_vendortotal_coregraph_dialog_component__WEBPACK_IMPORTED_MODULE_88__["VendortotalCoregraphDialogComponent"],
        src_app_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_147__["UserprofileComponent"],
        src_app_general_upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_80__["UploadDialogComponent"],
        src_app_charts_apex_line_basic_line_chart_basic_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["BasicLineChartComponent"],
        src_app_general_twoline_basic_line_chart_twoline_basic_line_chart_component__WEBPACK_IMPORTED_MODULE_78__["TwolineBasicLineChartComponent"],
        src_app_kpiparametersetting_kpiparametersetting_component__WEBPACK_IMPORTED_MODULE_102__["KpiparametersettingComponent"],
        src_app_kpiparameter_kpiparameter_component__WEBPACK_IMPORTED_MODULE_101__["KpiparameterComponent"],
        src_app_target_settings_scoreus_target_score_materials_scoreus_target_score_materials_component__WEBPACK_IMPORTED_MODULE_142__["ScoreusTargetScoreMaterialsComponent"],
        src_app_subscriptionpayment_subscriptionpayment_component__WEBPACK_IMPORTED_MODULE_135__["SubscriptionpaymentComponent"],
        src_app_general_activeusers_activeusers_component__WEBPACK_IMPORTED_MODULE_18__["ActiveusersComponent"],
        src_app_general_referral_referral_component__WEBPACK_IMPORTED_MODULE_62__["ReferralComponent"],
        src_app_general_billing_billing_component__WEBPACK_IMPORTED_MODULE_22__["BillingComponent"],
        src_app_general_myplan_myplan_component__WEBPACK_IMPORTED_MODULE_42__["MyplanComponent"],
        src_app_referafriend_referafriend_component__WEBPACK_IMPORTED_MODULE_128__["ReferafriendComponent"],
        src_app_general_referafriend_dialog_referafriend_dialog_component__WEBPACK_IMPORTED_MODULE_61__["ReferafriendDialogComponent"],
        src_app_general_subsription_payment_inviteuser_subsription_payment_inviteuser_component__WEBPACK_IMPORTED_MODULE_67__["SubsriptionPaymentInviteuserComponent"],
        src_app_general_cancelplan_dialog_cancelplan_dialog_component__WEBPACK_IMPORTED_MODULE_24__["CancelplanDialogComponent"],
        src_app_packageupgrade_packageupgrade_component__WEBPACK_IMPORTED_MODULE_115__["PackageupgradeComponent"],
        src_app_importdata_importdata_component__WEBPACK_IMPORTED_MODULE_90__["ImportdataComponent"],
        src_app_reporthistory_reporthistory_component__WEBPACK_IMPORTED_MODULE_130__["ReporthistoryComponent"],
        src_app_general_successfully_dialog_successfully_dialog_component__WEBPACK_IMPORTED_MODULE_68__["SuccessfullyDialogComponent"],
        src_app_payment_payment_component__WEBPACK_IMPORTED_MODULE_117__["PaymentComponent"],
        src_app_general_upgradesubscription_dialog_upgradesubscription_dialog_component__WEBPACK_IMPORTED_MODULE_79__["UpgradesubscriptionDialogComponent"],
        src_app_general_graphlargetc_graphlargetc_component__WEBPACK_IMPORTED_MODULE_38__["GraphlargetcComponent"],
        src_app_howtouse_howtouse_component__WEBPACK_IMPORTED_MODULE_89__["HowtouseComponent"],
        src_app_general_reporthistorydetail_reporthistorydetail_component__WEBPACK_IMPORTED_MODULE_65__["ReporthistorydetailComponent"],
        src_app_buyersreporthistory_buyersreporthistory_component__WEBPACK_IMPORTED_MODULE_11__["BuyersreporthistoryComponent"],
        src_app_commoditiesreporthistory_commoditiesreporthistory_component__WEBPACK_IMPORTED_MODULE_13__["CommoditiesreporthistoryComponent"],
        src_app_plantsreporthistory_plantsreporthistory_component__WEBPACK_IMPORTED_MODULE_118__["PlantsreporthistoryComponent"],
        src_app_vendorsreporthistory_vendorsreporthistory_component__WEBPACK_IMPORTED_MODULE_150__["VendorsreporthistoryComponent"],
        src_app_materialsreporthistory_materialsreporthistory_component__WEBPACK_IMPORTED_MODULE_110__["MaterialsreporthistoryComponent"],
        src_app_openordersreporthistory_openordersreporthistory_component__WEBPACK_IMPORTED_MODULE_111__["OpenordersreporthistoryComponent"],
        src_app_pastdueordersreporthistory_pastdueordersreporthistory_component__WEBPACK_IMPORTED_MODULE_116__["PastdueordersreporthistoryComponent"],
        src_app_ackdneededorderseporthistory_ackdneededorderseporthistory_component__WEBPACK_IMPORTED_MODULE_3__["AckdneededorderseporthistoryComponent"],
        src_app_futurepastduereporthistory_futurepastduereporthistory_component__WEBPACK_IMPORTED_MODULE_17__["FuturepastduereporthistoryComponent"],
        src_app_general_paymentpaynow_dialog_paymentpaynow_dialog_component__WEBPACK_IMPORTED_MODULE_44__["PaymentpaynowDialogComponent"],
        src_app_general_generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_37__["GenericDialogComponent"],
        src_app_superadmindashboard_superadmindashboard_component__WEBPACK_IMPORTED_MODULE_137__["SuperadmindashboardComponent"],
        src_app_general_superregboxes_superregboxes_component__WEBPACK_IMPORTED_MODULE_69__["SuperregboxesComponent"],
        src_app_openpostatus_openpostatus_component__WEBPACK_IMPORTED_MODULE_113__["OpenpostatusComponent"],
        src_app_general_postatus_filterby_dropdown_postatus_filterby_dropdown_component__WEBPACK_IMPORTED_MODULE_60__["PostatusFilterbyDropdownComponent"],
        src_app_general_po_newuserreg_po_newuserreg_component__WEBPACK_IMPORTED_MODULE_46__["PoNewuserregComponent"],
        src_app_general_po_vendor_manager_po_vendor_manager_component__WEBPACK_IMPORTED_MODULE_49__["PoVendorManagerComponent"],
        src_app_general_po_vendor_average_performance_po_vendor_average_performance_component__WEBPACK_IMPORTED_MODULE_48__["PoVendorAveragePerformanceComponent"],
        src_app_general_current_open_po_status_tablegraph_current_open_po_status_tablegraph_component__WEBPACK_IMPORTED_MODULE_27__["CurrentOpenPoStatusTablegraphComponent"],
        src_app_general_current_open_po_status_tablegraph_dialog_current_open_po_status_tablegraph_dialog_component__WEBPACK_IMPORTED_MODULE_26__["CurrentOpenPoStatusTablegraphDialogComponent"],
        // OpenpotrendlinesComponent,
        src_app_openpoexpeditor_openpoexpeditor_component__WEBPACK_IMPORTED_MODULE_112__["OpenpoexpeditorComponent"],
        src_app_general_pomanager_vendor_deliveryoption_pomanager_vendor_deliveryoption_component__WEBPACK_IMPORTED_MODULE_53__["PomanagerVendorDeliveryoptionComponent"],
        src_app_general_pomanager_vendor_search_pomanager_vendor_search_component__WEBPACK_IMPORTED_MODULE_55__["PomanagerVendorSearchComponent"],
        src_app_general_pomanager_vendor_history_pomanager_vendor_history_component__WEBPACK_IMPORTED_MODULE_54__["PomanagerVendorHistoryComponent"],
        // PomanagerByopenpoComponent,
        src_app_pouserdashboard_pouserdashboard_component__WEBPACK_IMPORTED_MODULE_120__["PouserdashboardComponent"],
        src_app_general_pomanageruserreg_pomanageruserreg_component__WEBPACK_IMPORTED_MODULE_57__["PomanageruserregComponent"],
        src_app_general_pomanagerusercounts_pomanagerusercounts_component__WEBPACK_IMPORTED_MODULE_56__["PomanagerusercountsComponent"],
        // OpenpoanalysisComponent,
        // PomanagerbuyerComponent,
        // PomanagervendorComponent,
        src_app_general_analysis_buyer_execute_analysis_buyer_execute_component__WEBPACK_IMPORTED_MODULE_19__["AnalysisBuyerExecuteComponent"],
        src_app_general_analysis_buyer_table_analysis_buyer_table_component__WEBPACK_IMPORTED_MODULE_20__["AnalysisBuyerTableComponent"],
        src_app_poreporthistory_poreporthistory_component__WEBPACK_IMPORTED_MODULE_119__["PoreporthistoryComponent"],
        src_app_general_po_product_cat_po_product_cat_component__WEBPACK_IMPORTED_MODULE_47__["PoProductCatComponent"],
        src_app_general_pomanager_piechart_pomanager_piechart_component__WEBPACK_IMPORTED_MODULE_50__["PomanagerPiechartComponent"],
        src_app_general_pomanager_tablechart_pomanager_tablechart_component__WEBPACK_IMPORTED_MODULE_52__["PomanagerTablechartComponent"],
        src_app_general_pomanager_tablechart_two_pomanager_tablechart_two_component__WEBPACK_IMPORTED_MODULE_51__["PomanagerTablechartTwoComponent"],
        src_app_openpotrendlinesuseradmin_openpotrendlinesuseradmin_component__WEBPACK_IMPORTED_MODULE_114__["OpenpotrendlinesuseradminComponent"],
        src_app_general_trendlines_pomanager_buyer_trendlines_pomanager_buyer_component__WEBPACK_IMPORTED_MODULE_76__["TrendlinesPomanagerBuyerComponent"],
        src_app_general_trendlines_pomanager_vendor_trendlines_pomanager_vendor_component__WEBPACK_IMPORTED_MODULE_77__["TrendlinesPomanagerVendorComponent"],
        src_app_general_trendlines_buyer_execute_trendlines_buyer_execute_component__WEBPACK_IMPORTED_MODULE_74__["TrendlinesBuyerExecuteComponent"],
        src_app_general_trendlines_buyer_useradmin_table_trendlines_buyer_useradmin_table_component__WEBPACK_IMPORTED_MODULE_75__["TrendlinesBuyerUseradminTableComponent"],
        src_app_general_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_28__["DatatableComponent"],
        src_app_general_popuptable_popuptable_component__WEBPACK_IMPORTED_MODULE_59__["PopuptableComponent"],
        src_app_general_datatablewithpagination_datatablewithpagination_component__WEBPACK_IMPORTED_MODULE_29__["DatatablewithpaginationComponent"],
        src_app_general_popupchart_popupchart_component__WEBPACK_IMPORTED_MODULE_58__["PopupchartComponent"],
        src_app_general_report_ltadetail_ltadetail_component__WEBPACK_IMPORTED_MODULE_64__["LtadetailComponent"],
        src_app_general_okdialogcomponent_okdialogcomponent_component__WEBPACK_IMPORTED_MODULE_43__["OkdialogcomponentComponent"],
        src_app_general_commodity_scorecard_table_commodity_scorecard_table_component__WEBPACK_IMPORTED_MODULE_25__["CommodityScorecardTableComponent"],
        src_app_general_buyer_scorecard_table_buyer_scorecard_table_component__WEBPACK_IMPORTED_MODULE_23__["BuyerScorecardTableComponent"],
        src_app_general_material_scorecard_table_material_scorecard_table_component__WEBPACK_IMPORTED_MODULE_41__["MaterialScorecardTableComponent"],
        src_app_general_plant_scorecard_table_plant_scorecard_table_component__WEBPACK_IMPORTED_MODULE_45__["PlantScorecardTableComponent"],
        src_app_general_app_datahistorytable_app_datahistorytable_component__WEBPACK_IMPORTED_MODULE_21__["AppDatahistorytableComponent"],
        src_app_general_targetpopup_targetpopup_component__WEBPACK_IMPORTED_MODULE_70__["TargetpopupComponent"],
        src_app_superadminpo_dashboard_superadminpo_dashboard_component__WEBPACK_IMPORTED_MODULE_138__["SuperadminpoDashboardComponent"],
        src_app_superadminscorecarddashboard_superadminscorecarddashboard_component__WEBPACK_IMPORTED_MODULE_139__["SuperadminscorecarddashboardComponent"],
        src_app_superadmincompletedashboard_superadmincompletedashboard_component__WEBPACK_IMPORTED_MODULE_136__["SuperadmincompletedashboardComponent"],
        src_app_vendor_score_component_vendor_score_component_component__WEBPACK_IMPORTED_MODULE_148__["VendorScoreComponentComponent"],
        src_app_general_vendorexecutive_vendorexecutive_component__WEBPACK_IMPORTED_MODULE_86__["VendorexecutiveComponent"],
        src_app_vnedortable_vnedortable_component__WEBPACK_IMPORTED_MODULE_151__["VnedortableComponent"],
        src_app_charts_apex_bar_bar_component__WEBPACK_IMPORTED_MODULE_167__["BarComponent"],
        src_app_general_podatatable_podatatable_component__WEBPACK_IMPORTED_MODULE_168__["PodatatableComponent"],
        src_app_openpoexpeditor_openpoexpeditor_email_template_openpoexpeditor_email_template_component__WEBPACK_IMPORTED_MODULE_169__["OpenpoexpeditorEmailTemplateComponent"],
        src_app_general_trendlines_pomanager_buyer_trendlines_pomanager_linechart_trendlines_pomanager_linechart_component__WEBPACK_IMPORTED_MODULE_171__["TrendlinesPomanagerLinechartComponent"],
        src_app_general_trendlines_pomanager_average_linechart_trendlines_pomanager_average_linechart_component__WEBPACK_IMPORTED_MODULE_172__["TrendlinesPomanagerAverageLinechartComponent"],
        src_app_openpoanalysis_openpoanalysis_component__WEBPACK_IMPORTED_MODULE_173__["OpenpoanalysisComponent"],
        src_app_openpoanalysis_openpoanalysis_buyer_openpoanalysis_buyer_component__WEBPACK_IMPORTED_MODULE_174__["OpenpoanalysisBuyerComponent"],
        src_app_openpoanalysis_openpoanalysis_vendor_openpoanalysis_vendor_component__WEBPACK_IMPORTED_MODULE_175__["OpenpoanalysisVendorComponent"],
        src_app_openpoanalysis_openpoanalysis_piechart_openpoanalysis_piechart_component__WEBPACK_IMPORTED_MODULE_176__["OpenpoanalysisPiechartComponent"],
        src_app_openpoanalysis_openpoanalysis_barchart_openpoanalysis_barchart_component__WEBPACK_IMPORTED_MODULE_177__["OpenpoanalysisBarchartComponent"],
        src_app_general_po_kpiparam_po_kpiparam_component__WEBPACK_IMPORTED_MODULE_178__["PoKpiparamComponent"],
        src_app_pouserdashboard_pouserdashboard_linechart_pouserdashboard_linechart_component__WEBPACK_IMPORTED_MODULE_179__["PouserdashboardLinechartComponent"],
        src_app_leadtimecheckhistory_leadtimecheckhistory_component__WEBPACK_IMPORTED_MODULE_180__["LeadtimecheckhistoryComponent"],
        src_app_superadminsetting_superadminsetting_component__WEBPACK_IMPORTED_MODULE_181__["SuperadminsettingComponent"]
        // LeadtimecheckComponent,
        // PastdueordershistoryComponent,
        // OpenordersComponent,
        // AckNeededOrdersComponent,
    ], imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_154__["TranslateModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        // RoutingModule,
        src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_159__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_156__["NgbModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_158__["ChartsModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_157__["NgApexchartsModule"],
        // PerfectScrollbarModule,
        src_app_modules_dashboard_routing_routing_module__WEBPACK_IMPORTED_MODULE_161__["RoutingModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_155__["GoogleMapsModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_170__["NgMultiSelectDropDownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoscorecardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    src_app_admin_admin_component__WEBPACK_IMPORTED_MODULE_162__["AdminComponent"],
                    src_app_elements_nav_header_nav_header_component__WEBPACK_IMPORTED_MODULE_165__["NavHeaderComponent"],
                    src_app_elements_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_166__["NavigationComponent"],
                    src_app_elements_header_header_component__WEBPACK_IMPORTED_MODULE_164__["HeaderComponent"],
                    src_app_elements_footer_footer_component__WEBPACK_IMPORTED_MODULE_163__["FooterComponent"],
                    src_app_apps_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
                    src_app_elements_profile_user_statistics_user_statistics_component__WEBPACK_IMPORTED_MODULE_16__["UserStatisticsComponent"],
                    src_app_elements_profile_interest_interest_component__WEBPACK_IMPORTED_MODULE_15__["InterestComponent"],
                    src_app_bootstrap_list_group_list_group_component__WEBPACK_IMPORTED_MODULE_9__["ListGroupComponent"],
                    src_app_bootstrap_datepicker_datepicker_basic_datepicker_basic_component__WEBPACK_IMPORTED_MODULE_6__["DatepickerBasicComponent"],
                    src_app_bootstrap_datepicker_datepicker_range_datepicker_range_component__WEBPACK_IMPORTED_MODULE_7__["DatepickerRangeComponent"],
                    src_app_bootstrap_media_object_media_object_component__WEBPACK_IMPORTED_MODULE_10__["MediaObjectComponent"],
                    //NgbdSortableHeader,
                    src_invitevendorbyuser_invitevendorbyuser_component__WEBPACK_IMPORTED_MODULE_152__["InvitevendorbyuserComponent"],
                    src_app_bootstrap_cards_cards_component__WEBPACK_IMPORTED_MODULE_5__["CardsComponent"],
                    src_app_bootstrap_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__["GridComponent"],
                    src_app_userdetail_userdetail_component__WEBPACK_IMPORTED_MODULE_146__["UserdetailComponent"],
                    src_app_manageusers_manageusers_component__WEBPACK_IMPORTED_MODULE_108__["ManageusersComponent"],
                    src_app_referralmanagement_referralmanagement_component__WEBPACK_IMPORTED_MODULE_129__["ReferralmanagementComponent"],
                    src_app_maindashboard_maindashboard_component__WEBPACK_IMPORTED_MODULE_104__["MaindashboardComponent"],
                    src_app_maindashboard_newuserreg_newuserreg_component__WEBPACK_IMPORTED_MODULE_105__["NewuserregComponent"],
                    src_app_maindashboard_filterby_dropdown_filterby_dropdown_component__WEBPACK_IMPORTED_MODULE_103__["FilterbyDropdownComponent"],
                    src_app_maindashboard_totalrevenue_totalrevenue_component__WEBPACK_IMPORTED_MODULE_106__["TotalrevenueComponent"],
                    src_app_maindashboard_year_month_sign_up_year_month_sign_up_component__WEBPACK_IMPORTED_MODULE_107__["YearMonthSignUpComponent"],
                    src_app_general_general_component__WEBPACK_IMPORTED_MODULE_36__["GeneralComponent"],
                    src_app_general_totalscore_totalscore_component__WEBPACK_IMPORTED_MODULE_73__["TotalscoreComponent"],
                    src_app_general_totalscore_graph_totalscore_graph_component__WEBPACK_IMPORTED_MODULE_72__["TotalscoreGraphComponent"],
                    src_app_general_registrations_dashboard_registrations_dashboard_component__WEBPACK_IMPORTED_MODULE_63__["RegistrationsDashboardComponent"],
                    src_app_general_user_color_zone_user_color_zone_component__WEBPACK_IMPORTED_MODULE_81__["UserColorZoneComponent"],
                    src_app_general_totalline_dashboard_totalline_dashboard_component__WEBPACK_IMPORTED_MODULE_71__["TotallineDashboardComponent"],
                    src_app_aboutscoreus_aboutscoreus_component__WEBPACK_IMPORTED_MODULE_2__["AboutscoreusComponent"],
                    src_app_inviteuser_inviteuser_component__WEBPACK_IMPORTED_MODULE_91__["InviteuserComponent"],
                    src_app_datalog_datalog_component__WEBPACK_IMPORTED_MODULE_14__["DatalogComponent"],
                    src_app_target_settings_target_settings_component__WEBPACK_IMPORTED_MODULE_145__["TargetSettingsComponent"],
                    src_app_target_settings_scoreus_target_score_vendor_scoreus_target_score_vendor_component__WEBPACK_IMPORTED_MODULE_144__["ScoreusTargetScoreVendorComponent"],
                    src_app_target_settings_scoreus_target_score_buyer_scoreus_target_score_buyer_component__WEBPACK_IMPORTED_MODULE_140__["ScoreusTargetScoreBuyerComponent"],
                    src_app_target_settings_scoreus_target_score_commodity_scoreus_target_score_commodity_component__WEBPACK_IMPORTED_MODULE_141__["ScoreusTargetScoreCommodityComponent"],
                    src_app_target_settings_scoreus_target_score_plant_scoreus_target_score_plant_component__WEBPACK_IMPORTED_MODULE_143__["ScoreusTargetScorePlantComponent"],
                    src_app_raw_data_setting_raw_data_setting_component__WEBPACK_IMPORTED_MODULE_126__["RawDataSettingComponent"],
                    src_app_raw_data_setting_po_history_info_po_history_info_component__WEBPACK_IMPORTED_MODULE_124__["PoHistoryInfoComponent"],
                    src_app_raw_data_setting_po_open_order_report_po_open_order_report_component__WEBPACK_IMPORTED_MODULE_125__["PoOpenOrderReportComponent"],
                    src_app_raw_data_setting_non_conformance_report_non_conformance_report_component__WEBPACK_IMPORTED_MODULE_122__["NonConformanceReportComponent"],
                    src_app_raw_data_setting_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_121__["BuyerComponent"],
                    src_app_raw_data_setting_vendor_commodity_vendor_commodity_component__WEBPACK_IMPORTED_MODULE_127__["VendorCommodityComponent"],
                    src_app_kpi_parameter_setting_kpi_parameter_setting_component__WEBPACK_IMPORTED_MODULE_93__["KpiParameterSettingComponent"],
                    src_app_kpi_parameter_setting_otd_parameter_otd_parameter_component__WEBPACK_IMPORTED_MODULE_98__["OtdParameterComponent"],
                    src_app_kpi_parameter_setting_ncr_parameter_ncr_parameter_component__WEBPACK_IMPORTED_MODULE_97__["NcrParameterComponent"],
                    src_app_kpi_parameter_setting_ppv_parameter_ppv_parameter_component__WEBPACK_IMPORTED_MODULE_99__["PpvParameterComponent"],
                    src_app_kpi_parameter_setting_lta_parameter_lta_parameter_component__WEBPACK_IMPORTED_MODULE_95__["LtaParameterComponent"],
                    src_app_kpi_parameter_setting_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_92__["DeliveryComponent"],
                    src_app_kpi_parameter_setting_linechart_option_linechart_option_component__WEBPACK_IMPORTED_MODULE_94__["LinechartOptionComponent"],
                    src_app_kpi_parameter_setting_metrics_weight_metrics_weight_component__WEBPACK_IMPORTED_MODULE_96__["MetricsWeightComponent"],
                    src_app_kpi_parameter_setting_product_cat_product_cat_component__WEBPACK_IMPORTED_MODULE_100__["ProductCatComponent"],
                    src_app_vendor_scorecard_vendor_scorecard_component__WEBPACK_IMPORTED_MODULE_149__["VendorScorecardComponent"],
                    src_app_general_filter_by_dropdown_two_filter_by_dropdown_two_component__WEBPACK_IMPORTED_MODULE_35__["FilterByDropdownTwoComponent"],
                    src_app_general_vendorscorecard_boxes_vendorscorecard_boxes_component__WEBPACK_IMPORTED_MODULE_87__["VendorscorecardBoxesComponent"],
                    src_app_general_vendor_color_zone_vendor_color_zone_component__WEBPACK_IMPORTED_MODULE_83__["VendorColorZoneComponent"],
                    src_app_general_vendor_total_score_vendor_total_score_component__WEBPACK_IMPORTED_MODULE_85__["VendorTotalScoreComponent"],
                    src_app_general_execute_execute_component__WEBPACK_IMPORTED_MODULE_34__["ExecuteComponent"],
                    src_app_general_vendor_scorecard_table_vendor_scorecard_table_component__WEBPACK_IMPORTED_MODULE_84__["VendorScorecardTableComponent"],
                    src_app_scoreus_buyer_scorecard_scoreus_buyer_scorecard_component__WEBPACK_IMPORTED_MODULE_131__["ScoreusBuyerScorecardComponent"],
                    src_app_scoreus_commodity_scorecard_scoreus_commodity_scorecard_component__WEBPACK_IMPORTED_MODULE_132__["ScoreusCommodityScorecardComponent"],
                    src_app_scoreus_plant_scorecard_scoreus_plant_scorecard_component__WEBPACK_IMPORTED_MODULE_134__["ScoreusPlantScorecardComponent"],
                    src_app_scoreus_material_scorecard_scoreus_material_scorecard_component__WEBPACK_IMPORTED_MODULE_133__["ScoreusMaterialScorecardComponent"],
                    src_app_mapout_vendor_mapout_vendor_component__WEBPACK_IMPORTED_MODULE_109__["MapoutVendorComponent"],
                    src_app_general_mapout_vendor_filed_mapout_vendor_filed_component__WEBPACK_IMPORTED_MODULE_39__["MapoutVendorFiledComponent"],
                    src_app_general_mapout_vendor_map_mapout_vendor_map_component__WEBPACK_IMPORTED_MODULE_40__["MapoutVendorMapComponent"],
                    src_app_general_execute_buyer_execute_buyer_component__WEBPACK_IMPORTED_MODULE_30__["ExecuteBuyerComponent"],
                    src_app_general_execute_commodity_execute_commodity_component__WEBPACK_IMPORTED_MODULE_31__["ExecuteCommodityComponent"],
                    src_app_general_execute_plant_execute_plant_component__WEBPACK_IMPORTED_MODULE_33__["ExecutePlantComponent"],
                    src_app_general_execute_material_execute_material_component__WEBPACK_IMPORTED_MODULE_32__["ExecuteMaterialComponent"],
                    src_app_general_userdialogout_userdialogout_component__WEBPACK_IMPORTED_MODULE_82__["UserdialogoutComponent"],
                    src_app_raw_data_setting_plant_plant_component__WEBPACK_IMPORTED_MODULE_123__["PlantComponent"],
                    src_app_general_sendreportdialog_sendreportdialog_component__WEBPACK_IMPORTED_MODULE_66__["SendreportdialogComponent"],
                    src_app_general_vendortotal_coregraph_dialog_vendortotal_coregraph_dialog_component__WEBPACK_IMPORTED_MODULE_88__["VendortotalCoregraphDialogComponent"],
                    src_app_userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_147__["UserprofileComponent"],
                    src_app_general_upload_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_80__["UploadDialogComponent"],
                    src_app_charts_apex_line_basic_line_chart_basic_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["BasicLineChartComponent"],
                    src_app_general_twoline_basic_line_chart_twoline_basic_line_chart_component__WEBPACK_IMPORTED_MODULE_78__["TwolineBasicLineChartComponent"],
                    src_app_kpiparametersetting_kpiparametersetting_component__WEBPACK_IMPORTED_MODULE_102__["KpiparametersettingComponent"],
                    src_app_kpiparameter_kpiparameter_component__WEBPACK_IMPORTED_MODULE_101__["KpiparameterComponent"],
                    src_app_target_settings_scoreus_target_score_materials_scoreus_target_score_materials_component__WEBPACK_IMPORTED_MODULE_142__["ScoreusTargetScoreMaterialsComponent"],
                    src_app_subscriptionpayment_subscriptionpayment_component__WEBPACK_IMPORTED_MODULE_135__["SubscriptionpaymentComponent"],
                    src_app_general_activeusers_activeusers_component__WEBPACK_IMPORTED_MODULE_18__["ActiveusersComponent"],
                    src_app_general_referral_referral_component__WEBPACK_IMPORTED_MODULE_62__["ReferralComponent"],
                    src_app_general_billing_billing_component__WEBPACK_IMPORTED_MODULE_22__["BillingComponent"],
                    src_app_general_myplan_myplan_component__WEBPACK_IMPORTED_MODULE_42__["MyplanComponent"],
                    src_app_referafriend_referafriend_component__WEBPACK_IMPORTED_MODULE_128__["ReferafriendComponent"],
                    src_app_general_referafriend_dialog_referafriend_dialog_component__WEBPACK_IMPORTED_MODULE_61__["ReferafriendDialogComponent"],
                    src_app_general_subsription_payment_inviteuser_subsription_payment_inviteuser_component__WEBPACK_IMPORTED_MODULE_67__["SubsriptionPaymentInviteuserComponent"],
                    src_app_general_cancelplan_dialog_cancelplan_dialog_component__WEBPACK_IMPORTED_MODULE_24__["CancelplanDialogComponent"],
                    src_app_packageupgrade_packageupgrade_component__WEBPACK_IMPORTED_MODULE_115__["PackageupgradeComponent"],
                    src_app_importdata_importdata_component__WEBPACK_IMPORTED_MODULE_90__["ImportdataComponent"],
                    src_app_reporthistory_reporthistory_component__WEBPACK_IMPORTED_MODULE_130__["ReporthistoryComponent"],
                    src_app_general_successfully_dialog_successfully_dialog_component__WEBPACK_IMPORTED_MODULE_68__["SuccessfullyDialogComponent"],
                    src_app_payment_payment_component__WEBPACK_IMPORTED_MODULE_117__["PaymentComponent"],
                    src_app_general_upgradesubscription_dialog_upgradesubscription_dialog_component__WEBPACK_IMPORTED_MODULE_79__["UpgradesubscriptionDialogComponent"],
                    src_app_general_graphlargetc_graphlargetc_component__WEBPACK_IMPORTED_MODULE_38__["GraphlargetcComponent"],
                    src_app_howtouse_howtouse_component__WEBPACK_IMPORTED_MODULE_89__["HowtouseComponent"],
                    src_app_general_reporthistorydetail_reporthistorydetail_component__WEBPACK_IMPORTED_MODULE_65__["ReporthistorydetailComponent"],
                    src_app_buyersreporthistory_buyersreporthistory_component__WEBPACK_IMPORTED_MODULE_11__["BuyersreporthistoryComponent"],
                    src_app_commoditiesreporthistory_commoditiesreporthistory_component__WEBPACK_IMPORTED_MODULE_13__["CommoditiesreporthistoryComponent"],
                    src_app_plantsreporthistory_plantsreporthistory_component__WEBPACK_IMPORTED_MODULE_118__["PlantsreporthistoryComponent"],
                    src_app_vendorsreporthistory_vendorsreporthistory_component__WEBPACK_IMPORTED_MODULE_150__["VendorsreporthistoryComponent"],
                    src_app_materialsreporthistory_materialsreporthistory_component__WEBPACK_IMPORTED_MODULE_110__["MaterialsreporthistoryComponent"],
                    src_app_openordersreporthistory_openordersreporthistory_component__WEBPACK_IMPORTED_MODULE_111__["OpenordersreporthistoryComponent"],
                    src_app_pastdueordersreporthistory_pastdueordersreporthistory_component__WEBPACK_IMPORTED_MODULE_116__["PastdueordersreporthistoryComponent"],
                    src_app_ackdneededorderseporthistory_ackdneededorderseporthistory_component__WEBPACK_IMPORTED_MODULE_3__["AckdneededorderseporthistoryComponent"],
                    src_app_futurepastduereporthistory_futurepastduereporthistory_component__WEBPACK_IMPORTED_MODULE_17__["FuturepastduereporthistoryComponent"],
                    src_app_general_paymentpaynow_dialog_paymentpaynow_dialog_component__WEBPACK_IMPORTED_MODULE_44__["PaymentpaynowDialogComponent"],
                    src_app_general_generic_dialog_generic_dialog_component__WEBPACK_IMPORTED_MODULE_37__["GenericDialogComponent"],
                    src_app_superadmindashboard_superadmindashboard_component__WEBPACK_IMPORTED_MODULE_137__["SuperadmindashboardComponent"],
                    src_app_general_superregboxes_superregboxes_component__WEBPACK_IMPORTED_MODULE_69__["SuperregboxesComponent"],
                    src_app_openpostatus_openpostatus_component__WEBPACK_IMPORTED_MODULE_113__["OpenpostatusComponent"],
                    src_app_general_postatus_filterby_dropdown_postatus_filterby_dropdown_component__WEBPACK_IMPORTED_MODULE_60__["PostatusFilterbyDropdownComponent"],
                    src_app_general_po_newuserreg_po_newuserreg_component__WEBPACK_IMPORTED_MODULE_46__["PoNewuserregComponent"],
                    src_app_general_po_vendor_manager_po_vendor_manager_component__WEBPACK_IMPORTED_MODULE_49__["PoVendorManagerComponent"],
                    src_app_general_po_vendor_average_performance_po_vendor_average_performance_component__WEBPACK_IMPORTED_MODULE_48__["PoVendorAveragePerformanceComponent"],
                    src_app_general_current_open_po_status_tablegraph_current_open_po_status_tablegraph_component__WEBPACK_IMPORTED_MODULE_27__["CurrentOpenPoStatusTablegraphComponent"],
                    src_app_general_current_open_po_status_tablegraph_dialog_current_open_po_status_tablegraph_dialog_component__WEBPACK_IMPORTED_MODULE_26__["CurrentOpenPoStatusTablegraphDialogComponent"],
                    // OpenpotrendlinesComponent,
                    src_app_openpoexpeditor_openpoexpeditor_component__WEBPACK_IMPORTED_MODULE_112__["OpenpoexpeditorComponent"],
                    src_app_general_pomanager_vendor_deliveryoption_pomanager_vendor_deliveryoption_component__WEBPACK_IMPORTED_MODULE_53__["PomanagerVendorDeliveryoptionComponent"],
                    src_app_general_pomanager_vendor_search_pomanager_vendor_search_component__WEBPACK_IMPORTED_MODULE_55__["PomanagerVendorSearchComponent"],
                    src_app_general_pomanager_vendor_history_pomanager_vendor_history_component__WEBPACK_IMPORTED_MODULE_54__["PomanagerVendorHistoryComponent"],
                    // PomanagerByopenpoComponent,
                    src_app_pouserdashboard_pouserdashboard_component__WEBPACK_IMPORTED_MODULE_120__["PouserdashboardComponent"],
                    src_app_general_pomanageruserreg_pomanageruserreg_component__WEBPACK_IMPORTED_MODULE_57__["PomanageruserregComponent"],
                    src_app_general_pomanagerusercounts_pomanagerusercounts_component__WEBPACK_IMPORTED_MODULE_56__["PomanagerusercountsComponent"],
                    // OpenpoanalysisComponent,
                    // PomanagerbuyerComponent,
                    // PomanagervendorComponent,
                    src_app_general_analysis_buyer_execute_analysis_buyer_execute_component__WEBPACK_IMPORTED_MODULE_19__["AnalysisBuyerExecuteComponent"],
                    src_app_general_analysis_buyer_table_analysis_buyer_table_component__WEBPACK_IMPORTED_MODULE_20__["AnalysisBuyerTableComponent"],
                    src_app_poreporthistory_poreporthistory_component__WEBPACK_IMPORTED_MODULE_119__["PoreporthistoryComponent"],
                    src_app_general_po_product_cat_po_product_cat_component__WEBPACK_IMPORTED_MODULE_47__["PoProductCatComponent"],
                    src_app_general_pomanager_piechart_pomanager_piechart_component__WEBPACK_IMPORTED_MODULE_50__["PomanagerPiechartComponent"],
                    src_app_general_pomanager_tablechart_pomanager_tablechart_component__WEBPACK_IMPORTED_MODULE_52__["PomanagerTablechartComponent"],
                    src_app_general_pomanager_tablechart_two_pomanager_tablechart_two_component__WEBPACK_IMPORTED_MODULE_51__["PomanagerTablechartTwoComponent"],
                    src_app_openpotrendlinesuseradmin_openpotrendlinesuseradmin_component__WEBPACK_IMPORTED_MODULE_114__["OpenpotrendlinesuseradminComponent"],
                    src_app_general_trendlines_pomanager_buyer_trendlines_pomanager_buyer_component__WEBPACK_IMPORTED_MODULE_76__["TrendlinesPomanagerBuyerComponent"],
                    src_app_general_trendlines_pomanager_vendor_trendlines_pomanager_vendor_component__WEBPACK_IMPORTED_MODULE_77__["TrendlinesPomanagerVendorComponent"],
                    src_app_general_trendlines_buyer_execute_trendlines_buyer_execute_component__WEBPACK_IMPORTED_MODULE_74__["TrendlinesBuyerExecuteComponent"],
                    src_app_general_trendlines_buyer_useradmin_table_trendlines_buyer_useradmin_table_component__WEBPACK_IMPORTED_MODULE_75__["TrendlinesBuyerUseradminTableComponent"],
                    src_app_general_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_28__["DatatableComponent"],
                    src_app_general_popuptable_popuptable_component__WEBPACK_IMPORTED_MODULE_59__["PopuptableComponent"],
                    src_app_general_datatablewithpagination_datatablewithpagination_component__WEBPACK_IMPORTED_MODULE_29__["DatatablewithpaginationComponent"],
                    src_app_general_popupchart_popupchart_component__WEBPACK_IMPORTED_MODULE_58__["PopupchartComponent"],
                    src_app_general_report_ltadetail_ltadetail_component__WEBPACK_IMPORTED_MODULE_64__["LtadetailComponent"],
                    src_app_general_okdialogcomponent_okdialogcomponent_component__WEBPACK_IMPORTED_MODULE_43__["OkdialogcomponentComponent"],
                    src_app_general_commodity_scorecard_table_commodity_scorecard_table_component__WEBPACK_IMPORTED_MODULE_25__["CommodityScorecardTableComponent"],
                    src_app_general_buyer_scorecard_table_buyer_scorecard_table_component__WEBPACK_IMPORTED_MODULE_23__["BuyerScorecardTableComponent"],
                    src_app_general_material_scorecard_table_material_scorecard_table_component__WEBPACK_IMPORTED_MODULE_41__["MaterialScorecardTableComponent"],
                    src_app_general_plant_scorecard_table_plant_scorecard_table_component__WEBPACK_IMPORTED_MODULE_45__["PlantScorecardTableComponent"],
                    src_app_general_app_datahistorytable_app_datahistorytable_component__WEBPACK_IMPORTED_MODULE_21__["AppDatahistorytableComponent"],
                    src_app_general_targetpopup_targetpopup_component__WEBPACK_IMPORTED_MODULE_70__["TargetpopupComponent"],
                    src_app_superadminpo_dashboard_superadminpo_dashboard_component__WEBPACK_IMPORTED_MODULE_138__["SuperadminpoDashboardComponent"],
                    src_app_superadminscorecarddashboard_superadminscorecarddashboard_component__WEBPACK_IMPORTED_MODULE_139__["SuperadminscorecarddashboardComponent"],
                    src_app_superadmincompletedashboard_superadmincompletedashboard_component__WEBPACK_IMPORTED_MODULE_136__["SuperadmincompletedashboardComponent"],
                    src_app_vendor_score_component_vendor_score_component_component__WEBPACK_IMPORTED_MODULE_148__["VendorScoreComponentComponent"],
                    src_app_general_vendorexecutive_vendorexecutive_component__WEBPACK_IMPORTED_MODULE_86__["VendorexecutiveComponent"],
                    src_app_vnedortable_vnedortable_component__WEBPACK_IMPORTED_MODULE_151__["VnedortableComponent"],
                    src_app_charts_apex_bar_bar_component__WEBPACK_IMPORTED_MODULE_167__["BarComponent"],
                    src_app_general_podatatable_podatatable_component__WEBPACK_IMPORTED_MODULE_168__["PodatatableComponent"],
                    src_app_openpoexpeditor_openpoexpeditor_email_template_openpoexpeditor_email_template_component__WEBPACK_IMPORTED_MODULE_169__["OpenpoexpeditorEmailTemplateComponent"],
                    src_app_general_trendlines_pomanager_buyer_trendlines_pomanager_linechart_trendlines_pomanager_linechart_component__WEBPACK_IMPORTED_MODULE_171__["TrendlinesPomanagerLinechartComponent"],
                    src_app_general_trendlines_pomanager_average_linechart_trendlines_pomanager_average_linechart_component__WEBPACK_IMPORTED_MODULE_172__["TrendlinesPomanagerAverageLinechartComponent"],
                    src_app_openpoanalysis_openpoanalysis_component__WEBPACK_IMPORTED_MODULE_173__["OpenpoanalysisComponent"],
                    src_app_openpoanalysis_openpoanalysis_buyer_openpoanalysis_buyer_component__WEBPACK_IMPORTED_MODULE_174__["OpenpoanalysisBuyerComponent"],
                    src_app_openpoanalysis_openpoanalysis_vendor_openpoanalysis_vendor_component__WEBPACK_IMPORTED_MODULE_175__["OpenpoanalysisVendorComponent"],
                    src_app_openpoanalysis_openpoanalysis_piechart_openpoanalysis_piechart_component__WEBPACK_IMPORTED_MODULE_176__["OpenpoanalysisPiechartComponent"],
                    src_app_openpoanalysis_openpoanalysis_barchart_openpoanalysis_barchart_component__WEBPACK_IMPORTED_MODULE_177__["OpenpoanalysisBarchartComponent"],
                    src_app_general_po_kpiparam_po_kpiparam_component__WEBPACK_IMPORTED_MODULE_178__["PoKpiparamComponent"],
                    src_app_pouserdashboard_pouserdashboard_linechart_pouserdashboard_linechart_component__WEBPACK_IMPORTED_MODULE_179__["PouserdashboardLinechartComponent"],
                    src_app_leadtimecheckhistory_leadtimecheckhistory_component__WEBPACK_IMPORTED_MODULE_180__["LeadtimecheckhistoryComponent"],
                    src_app_superadminsetting_superadminsetting_component__WEBPACK_IMPORTED_MODULE_181__["SuperadminsettingComponent"]
                    // LeadtimecheckComponent,
                    // PastdueordershistoryComponent,
                    // OpenordersComponent,
                    // AckNeededOrdersComponent,
                ],
                imports: [
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_154__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_154__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            // useFactory:(createTranslateLoader),
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_153__["HttpClient"]],
                        },
                    }),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    // RoutingModule,
                    src_app_modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_159__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_156__["NgbModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_158__["ChartsModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_157__["NgApexchartsModule"],
                    // PerfectScrollbarModule,
                    src_app_modules_dashboard_routing_routing_module__WEBPACK_IMPORTED_MODULE_161__["RoutingModule"],
                    _angular_google_maps__WEBPACK_IMPORTED_MODULE_155__["GoogleMapsModule"],
                    // NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
                    // NgxMaskModule.forRoot(),
                    ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_170__["NgMultiSelectDropDownModule"].forRoot()
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "A4lP":
/*!******************************************************************************************************!*\
  !*** ./src/app/general/pomanager-vendor-deliveryoption/pomanager-vendor-deliveryoption.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: PomanagerVendorDeliveryoptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomanagerVendorDeliveryoptionComponent", function() { return PomanagerVendorDeliveryoptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/radio */ "QibW");



class PomanagerVendorDeliveryoptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
PomanagerVendorDeliveryoptionComponent.ɵfac = function PomanagerVendorDeliveryoptionComponent_Factory(t) { return new (t || PomanagerVendorDeliveryoptionComponent)(); };
PomanagerVendorDeliveryoptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomanagerVendorDeliveryoptionComponent, selectors: [["app-pomanager-vendor-deliveryoption"]], decls: 30, vars: 0, consts: [[1, "row"], [1, "col-xl-5", "col-lg-5", "col-md-5", "col-sm-12", "col-6", "deliver-nav", "ml-auto"], [1, "card", "card-body", "px-0", "pt-0", "pb-2"], [1, "row", "mt-4"], [1, "col-md-5"], [1, "mb-0", "pl-4", "pt-0"], [1, "col-md-7", "pr-4"], [1, "form-group", "otd-para", "pr-2", "mb-0"], ["type", "text", "placeholder", "08/1/2021", "disabled", "", 1, "form-control"], [1, "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-6", "deliver-nav"], [1, "card", "card-body", "px-3", "pt-3", "pb-3", "mb-0"], [1, "mb-0"], ["aria-label", "Select an option", 1, "rad-io", "d-flex", "pb-3"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], [1, "form-group", "row", "mb-3"], [1, "col-sm-6", "otd-para", "pl-3", "pr-2"], ["type", "text", "placeholder", "50", "readonly", "", 1, "form-control", 2, "width", "50px", "text-align", "center", "margin-left", "10px"], [1, "col-sm-6", "col-form-label", "larec", "pt-0", 2, "color", "#7E7F81", "font-size", "13px"], ["value", "5"]], template: function PomanagerVendorDeliveryoptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Open PO up to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Report Option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-radio-group", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-radio-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "All Open Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ack Needed Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-radio-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Past Due Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-radio-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Future Past Due Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-radio-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lead Time Check Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_1__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_1__["MatRadioButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb21hbmFnZXItdmVuZG9yLWRlbGl2ZXJ5b3B0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomanagerVendorDeliveryoptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomanager-vendor-deliveryoption',
                templateUrl: './pomanager-vendor-deliveryoption.component.html',
                styleUrls: ['./pomanager-vendor-deliveryoption.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Egam":
/*!***********************************************************************************************!*\
  !*** ./node_modules/ng-multiselect-dropdown/__ivy_ngcc__/fesm2015/ng-multiselect-dropdown.js ***!
  \***********************************************************************************************/
/*! exports provided: MultiSelectComponent, NgMultiSelectDropDownModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function() { return MultiSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMultiSelectDropDownModule", function() { return NgMultiSelectDropDownModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DROPDOWN_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ListFilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ClickOutsideDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "+LUq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["optionTemplate"];
const _c1 = ["selectedTemplate"];
function MultiSelectComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0._placeholder);
} }
function MultiSelectComponent_div_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r7.text, " ");
} }
const _c2 = function (a0, a1, a2) { return { $implicit: a0, option: a1, id: a2 }; };
function MultiSelectComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MultiSelectComponent_div_4_ng_template_1_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](3, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_div_4_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r7 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onItemClick($event, item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const k_r8 = ctx.index;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", k_r8 > ctx_r1._settings.itemsShowLimit - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.selectedTemplateRef || _r9)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c2, item_r7, item_r7.text, item_r7.id));
} }
function MultiSelectComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r2.itemShowRemaining(), "");
} }
function MultiSelectComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_10_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.toggleSelectAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r3.isAllItemsSelected())("disabled", ctx_r3.disabled || ctx_r3.isLimitSelectionReached());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](!ctx_r3.isAllItemsSelected() ? ctx_r3._settings.selectAllText : ctx_r3._settings.unSelectAllText);
} }
function MultiSelectComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.filter.text = $event; })("ngModelChange", function MultiSelectComponent_li_11_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.onFilterTextChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readOnly", ctx_r4.disabled)("placeholder", ctx_r4._settings.searchPlaceholderText)("ngModel", ctx_r4.filter.text);
} }
const _c3 = function (a0) { return { "selected": a0 }; };
const _c4 = function (a0) { return { "color": a0 }; };
function MultiSelectComponent_li_13_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c3, ctx_r22.isSelected(item_r19)))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c4, ctx_r22.disabled || ctx_r22.isLimitSelectionReached() && !ctx_r22.isSelected(item_r19) || item_r19.isDisabled ? "#cccccc" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.text);
} }
const _c5 = function (a0, a1, a2, a3) { return { $implicit: a0, option: a1, id: a2, isSelected: a3 }; };
function MultiSelectComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_li_13_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const item_r19 = ctx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.onItemClick($event, item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MultiSelectComponent_li_13_ng_template_2_Template, 2, 7, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](4, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r5.isSelected(item_r19))("disabled", ctx_r5.disabled || ctx_r5.isLimitSelectionReached() && !ctx_r5.isSelected(item_r19) || item_r19.isDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", item_r19.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.optionTemplateRef || _r21)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](5, _c5, item_r19, item_r19.text, item_r19.id, ctx_r5.isSelected(item_r19)));
} }
function MultiSelectComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6._settings.noDataAvailablePlaceholderText);
} }
class ListItem {
    constructor(source) {
        if (typeof source === 'string' || typeof source === 'number') {
            this.id = this.text = source;
            this.isDisabled = false;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
            this.isDisabled = source.isDisabled;
        }
    }
}

let ListFilterPipe = class ListFilterPipe {
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item) => this.applyFilter(item, filter));
    }
    applyFilter(item, filter) {
        if (typeof item.text === 'string' && typeof filter.text === 'string') {
            return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
        }
        else {
            return !(filter.text && item.text && item.text.toString().toLowerCase().indexOf(filter.text.toString().toLowerCase()) === -1);
        }
    }
};
ListFilterPipe.ɵfac = function ListFilterPipe_Factory(t) { return new (t || ListFilterPipe)(); };
ListFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "multiSelectFilter", type: ListFilterPipe, pure: false });

const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MultiSelectComponent),
    multi: true,
};
const noop = () => { };
const ɵ0 = noop;
let MultiSelectComponent = class MultiSelectComponent {
    constructor(cdr, listFilterPipe) {
        this.cdr = cdr;
        this.listFilterPipe = listFilterPipe;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = true;
        this._placeholder = "Select";
        this._sourceDataType = null; // to keep note of the source data type. could be array of string/number/object
        this._sourceDataFields = []; // store source data fields names
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: "id",
            textField: "text",
            disabledField: "isDisabled",
            enableCheckAll: true,
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: "Search",
            noDataAvailablePlaceholderText: "No data available",
            closeDropDownOnSelection: false,
            showSelectedItemsAtTop: false,
            defaultOpen: false,
            allowRemoteDataSearch: false,
        };
        this.disabled = false;
        this.onFilterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDropDownClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeSelectAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    set placeholder(value) {
        if (value) {
            this._placeholder = value;
        }
        else {
            this._placeholder = "Select";
        }
    }
    set settings(value) {
        if (value) {
            this._settings = Object.assign(this.defaultSettings, value);
        }
        else {
            this._settings = Object.assign(this.defaultSettings);
        }
    }
    set data(value) {
        if (!value) {
            this._data = [];
        }
        else {
            const firstItem = value[0];
            this._sourceDataType = typeof firstItem;
            this._sourceDataFields = this.getFields(firstItem);
            this._data = value.map((item) => typeof item === "string" || typeof item === "number"
                ? new ListItem(item)
                : new ListItem({
                    id: item[this._settings.idField],
                    text: item[this._settings.textField],
                    isDisabled: item[this._settings.disabledField],
                }));
        }
    }
    onFilterTextChange($event) {
        this.onFilterChange.emit($event);
    }
    onItemClick($event, item) {
        if (this.disabled || item.isDisabled) {
            return false;
        }
        const found = this.isSelected(item);
        const allowAdd = this._settings.limitSelection === -1 ||
            (this._settings.limitSelection > 0 &&
                this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection &&
            this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    }
    writeValue(value) {
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        const firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === "string" || typeof firstItem === "number"
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField],
                                    isDisabled: firstItem[this._settings.disabledField],
                                }),
                        ];
                    }
                }
                catch (e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                const _data = value.map((item) => typeof item === "string" || typeof item === "number"
                    ? new ListItem(item)
                    : new ListItem({
                        id: item[this._settings.idField],
                        text: item[this._settings.textField],
                        isDisabled: item[this._settings.disabledField],
                    }));
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    }
    // From ControlValueAccessor interface
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    // From ControlValueAccessor interface
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    // Set touched on blur
    onTouched() {
        this.closeDropdown();
        this.onTouchedCallback();
    }
    trackByFn(index, item) {
        return item.id;
    }
    isSelected(clickedItem) {
        let found = false;
        this.selectedItems.forEach((item) => {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    }
    isLimitSelectionReached() {
        return this._settings.limitSelection === this.selectedItems.length;
    }
    isAllItemsSelected() {
        // get disabld item count
        let filteredItems = this.listFilterPipe.transform(this._data, this.filter);
        const itemDisabledCount = filteredItems.filter((item) => item.isDisabled)
            .length;
        // take disabled items into consideration when checking
        if ((!this.data || this.data.length === 0) &&
            this._settings.allowRemoteDataSearch) {
            return false;
        }
        return (filteredItems.length === this.selectedItems.length + itemDisabledCount);
    }
    showButton() {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    }
    itemShowRemaining() {
        return this.selectedItems.length - this._settings.itemsShowLimit;
    }
    addSelected(item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    }
    removeSelected(itemSel) {
        this.selectedItems.forEach((item) => {
            if (itemSel.id === item.id) {
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    }
    emittedValue(val) {
        const selected = [];
        if (Array.isArray(val)) {
            val.map((item) => {
                selected.push(this.objectify(item));
            });
        }
        else {
            if (val) {
                return this.objectify(val);
            }
        }
        return selected;
    }
    objectify(val) {
        if (this._sourceDataType === "object") {
            const obj = {};
            obj[this._settings.idField] = val.id;
            obj[this._settings.textField] = val.text;
            if (this._sourceDataFields.includes(this._settings.disabledField)) {
                obj[this._settings.disabledField] = val.isDisabled;
            }
            return obj;
        }
        if (this._sourceDataType === "number") {
            return Number(val.id);
        }
        else {
            return val.text;
        }
    }
    toggleDropdown(evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this._settings.defaultOpen = !this._settings.defaultOpen;
        if (!this._settings.defaultOpen) {
            this.onDropDownClose.emit();
        }
    }
    closeDropdown() {
        this._settings.defaultOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = "";
        }
        this.onDropDownClose.emit();
    }
    toggleSelectAll() {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            // filter out disabled item first before slicing
            this.selectedItems = this.listFilterPipe
                .transform(this._data, this.filter)
                .filter((item) => !item.isDisabled)
                .slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    }
    getFields(inputData) {
        const fields = [];
        if (typeof inputData !== "object") {
            return fields;
        }
        // tslint:disable-next-line:forin
        for (const prop in inputData) {
            fields.push(prop);
        }
        return fields;
    }
};
MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) { return new (t || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ListFilterPipe)); };
MultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MultiSelectComponent, selectors: [["ng-multiselect-dropdown"]], contentQueries: function MultiSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.optionTemplateRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.selectedTemplateRef = _t.first);
    } }, hostBindings: function MultiSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_blur_HostBindingHandler() { return ctx.onTouched(); });
    } }, inputs: { disabled: "disabled", placeholder: "placeholder", settings: "settings", data: "data" }, outputs: { onFilterChange: "onFilterChange", onDropDownClose: "onDropDownClose", onSelect: "onSelect", onDeSelect: "onDeSelect", onSelectAll: "onSelectAll", onDeSelectAll: "onDeSelectAll" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DROPDOWN_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 17, consts: [["tabindex", "0", 1, "multiselect-dropdown", 3, "blur", "clickOutside"], ["tabindex", "-1", 1, "dropdown-btn", 3, "click"], [4, "ngIf"], ["class", "selected-item", 3, "hidden", 4, "ngFor", "ngForOf", "ngForTrackBy"], [2, "float", "right !important", "padding-right", "4px"], ["style", "padding-right: 6px;", 4, "ngIf"], [3, "ngClass"], [1, "dropdown-list", 3, "hidden"], [1, "item1"], ["class", "multiselect-item-checkbox", "style", "border-bottom: 1px solid #ccc;padding:10px", 3, "click", 4, "ngIf"], ["class", "filter-textbox", 4, "ngIf"], [1, "item2"], ["class", "multiselect-item-checkbox", 3, "click", 4, "ngFor", "ngForOf"], ["class", "no-data", 4, "ngIf"], [1, "selected-item", 3, "hidden"], ["defaultSelection", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [2, "padding-top", "2px", "padding-left", "2px", "color", "white", 3, "click"], [2, "padding-right", "6px"], [1, "multiselect-item-checkbox", 2, "border-bottom", "1px solid #ccc", "padding", "10px", 3, "click"], ["type", "checkbox", "aria-label", "multiselect-select-all", 3, "checked", "disabled"], [1, "filter-textbox"], ["type", "text", "aria-label", "multiselect-search", 3, "readOnly", "placeholder", "ngModel", "ngModelChange"], [1, "multiselect-item-checkbox", 3, "click"], ["type", "checkbox", 3, "checked", "disabled"], ["defaultOption", ""], [3, "ngClass", "ngStyle"], [1, "no-data"]], template: function MultiSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MultiSelectComponent_Template_div_blur_0_listener() { return ctx.onTouched(); })("clickOutside", function MultiSelectComponent_Template_div_clickOutside_0_listener() { return ctx.closeDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MultiSelectComponent_Template_span_click_2_listener($event) { return ctx.toggleDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MultiSelectComponent_span_3_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MultiSelectComponent_div_4_Template, 6, 7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, MultiSelectComponent_span_6_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MultiSelectComponent_li_10_Template, 4, 3, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MultiSelectComponent_li_11_Template, 2, 3, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MultiSelectComponent_li_13_Template, 5, 10, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "multiSelectFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, MultiSelectComponent_li_15_Template, 3, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedItems)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.itemShowRemaining() > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx._settings.defaultOpen ? "dropdown-up" : "dropdown-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx._settings.defaultOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && !ctx._settings.singleSelection && ctx._settings.enableCheckAll && ctx._settings.limitSelection === -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx._data.length > 0 || ctx._settings.allowRemoteDataSearch) && ctx._settings.allowSearchFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("max-height", ctx._settings.maxHeight + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 14, ctx._data, ctx.filter));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._data.length == 0 && !ctx._settings.allowRemoteDataSearch);
    } }, directives: function () { return [ClickOutsideDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"]]; }, pipes: function () { return [ListFilterPipe]; }, styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item a:hover{color:green}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:15px 15px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox:hover{background:#eceeef}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"], encapsulation: 2, changeDetection: 0 });
MultiSelectComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ListFilterPipe }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MultiSelectComponent.prototype, "placeholder", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MultiSelectComponent.prototype, "disabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MultiSelectComponent.prototype, "settings", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MultiSelectComponent.prototype, "data", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])("optionTemplate", { static: false })
], MultiSelectComponent.prototype, "optionTemplateRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])("selectedTemplate", { static: false })
], MultiSelectComponent.prototype, "selectedTemplateRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onFilterChange")
], MultiSelectComponent.prototype, "onFilterChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDropDownClose")
], MultiSelectComponent.prototype, "onDropDownClose", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelect")
], MultiSelectComponent.prototype, "onSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelect")
], MultiSelectComponent.prototype, "onDeSelect", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onSelectAll")
], MultiSelectComponent.prototype, "onSelectAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("onDeSelectAll")
], MultiSelectComponent.prototype, "onDeSelectAll", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("blur")
], MultiSelectComponent.prototype, "onTouched", null);

let ClickOutsideDirective = class ClickOutsideDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
};
ClickOutsideDirective.ɵfac = function ClickOutsideDirective_Factory(t) { return new (t || ClickOutsideDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ClickOutsideDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ClickOutsideDirective, selectors: [["", "clickOutside", ""]], hostBindings: function ClickOutsideDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClickOutsideDirective_click_HostBindingHandler($event) { return ctx.onClick($event, $event.target); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } }, outputs: { clickOutside: "clickOutside" } });
ClickOutsideDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ClickOutsideDirective.prototype, "clickOutside", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target'])
], ClickOutsideDirective.prototype, "onClick", null);

var NgMultiSelectDropDownModule_1;
let NgMultiSelectDropDownModule = NgMultiSelectDropDownModule_1 = class NgMultiSelectDropDownModule {
    static forRoot() {
        return {
            ngModule: NgMultiSelectDropDownModule_1
        };
    }
};
NgMultiSelectDropDownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgMultiSelectDropDownModule });
NgMultiSelectDropDownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function NgMultiSelectDropDownModule_Factory(t) { return new (t || NgMultiSelectDropDownModule)(); }, providers: [ListFilterPipe], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ListFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'multiSelectFilter',
                pure: false
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MultiSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: "ng-multiselect-dropdown",
                template: "<div tabindex=\"0\" (blur)=\"onTouched()\" class=\"multiselect-dropdown\" (clickOutside)=\"closeDropdown()\">\n  <div [class.disabled]=\"disabled\">\n    <span tabindex=\"-1\" class=\"dropdown-btn\" (click)=\"toggleDropdown($event)\">\n      <span *ngIf=\"selectedItems.length == 0\">{{_placeholder}}</span>\n      <div class=\"selected-item\" *ngFor=\"let item of selectedItems;trackBy: trackByFn;let k = index\" [hidden]=\"k > _settings.itemsShowLimit-1\">\n        <ng-template #defaultSelection>\n          {{item.text}}\n        </ng-template>\n        <ng-container [ngTemplateOutlet]=\"selectedTemplateRef || defaultSelection\" [ngTemplateOutletContext]=\"{ $implicit:item, option: item.text, id: item.id }\">\n        </ng-container>\n        <a style=\"padding-top:2px;padding-left:2px;color:white\" (click)=\"onItemClick($event,item)\">x</a>\n      </div>\n      <span style=\"float:right !important;padding-right:4px\">\n        <span style=\"padding-right: 6px;\" *ngIf=\"itemShowRemaining()>0\">+{{itemShowRemaining()}}</span>\n        <span [ngClass]=\"_settings.defaultOpen ? 'dropdown-up' : 'dropdown-down'\"></span>\n      </span>\n    </span>\n  </div>\n  <div class=\"dropdown-list\" [hidden]=\"!_settings.defaultOpen\">\n    <ul class=\"item1\">\n      <li (click)=\"toggleSelectAll()\" *ngIf=\"(_data.length > 0 || _settings.allowRemoteDataSearch) && !_settings.singleSelection && _settings.enableCheckAll && _settings.limitSelection===-1\" class=\"multiselect-item-checkbox\" style=\"border-bottom: 1px solid #ccc;padding:10px\">\n        <input type=\"checkbox\" aria-label=\"multiselect-select-all\" [checked]=\"isAllItemsSelected()\" [disabled]=\"disabled || isLimitSelectionReached()\" />\n        <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>\n      </li>\n      <li class=\"filter-textbox\" *ngIf=\"(_data.length>0 || _settings.allowRemoteDataSearch) && _settings.allowSearchFilter\">\n        <input type=\"text\" aria-label=\"multiselect-search\" [readOnly]=\"disabled\" [placeholder]=\"_settings.searchPlaceholderText\" [(ngModel)]=\"filter.text\" (ngModelChange)=\"onFilterTextChange($event)\">\n      </li>\n    </ul>\n    <ul class=\"item2\" [style.maxHeight]=\"_settings.maxHeight+'px'\">\n      <li *ngFor=\"let item of _data | multiSelectFilter:filter; let i = index;\" (click)=\"onItemClick($event,item)\" class=\"multiselect-item-checkbox\">\n          <input type=\"checkbox\" [attr.aria-label]=\"item.text\" [checked]=\"isSelected(item)\" [disabled]=\"disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled\" />\n          <ng-template #defaultOption>\n            <div [ngClass]=\"{ 'selected': isSelected(item)}\" [ngStyle]=\"{ 'color': disabled || (isLimitSelectionReached() && !isSelected(item)) || item.isDisabled ? '#cccccc': ''}\">{{item.text}}</div>\n          </ng-template>\n          <ng-container [ngTemplateOutlet]=\"optionTemplateRef || defaultOption\" [ngTemplateOutletContext]=\"{ $implicit:item, option: item.text, id: item.id, isSelected: isSelected(item) }\">\n          </ng-container>\n      </li>\n      <li class='no-data' *ngIf=\"_data.length == 0 && !_settings.allowRemoteDataSearch\">\n        <h5>{{_settings.noDataAvailablePlaceholderText}}</h5>\n      </li>\n    </ul>\n  </div>\n</div>\n",
                providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                styles: [".multiselect-dropdown{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item a:hover{color:green}.multiselect-dropdown .dropdown-btn .selected-item:hover{box-shadow:15px 15px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox:hover{background:#eceeef}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{box-sizing:content-box;content:\"\";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:.4s}.multiselect-item-checkbox input[type=checkbox]+div:after{box-sizing:content-box;content:\"\";position:absolute;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:\"\";transition:transform .2s ease-out;transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{box-shadow:0 0 0 2px #337ab7}}"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ListFilterPipe }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onFilterChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onFilterChange"]
        }], onDropDownClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDropDownClose"]
        }], onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onSelect"]
        }], onDeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDeSelect"]
        }], onSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onSelectAll"]
        }], onDeSelectAll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ["onDeSelectAll"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], settings: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], 
    // Set touched on blur
    onTouched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ["blur"]
        }], optionTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: ["optionTemplate", { static: false }]
        }], selectedTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
            args: ["selectedTemplate", { static: false }]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ClickOutsideDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[clickOutside]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { clickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['document:click', ['$event', '$event.target']]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgMultiSelectDropDownModule, { declarations: function () { return [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]; }, exports: function () { return [MultiSelectComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgMultiSelectDropDownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
                declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
                providers: [ListFilterPipe],
                exports: [MultiSelectComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-multiselect-dropdown.js.map

/***/ }),

/***/ "Erd0":
/*!************************************************************************************!*\
  !*** ./src/app/general/analysis-buyer-execute/analysis-buyer-execute.component.ts ***!
  \************************************************************************************/
/*! exports provided: AnalysisBuyerExecuteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisBuyerExecuteComponent", function() { return AnalysisBuyerExecuteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");







function AnalysisBuyerExecuteComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selectreport_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", selectreport_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selectreport_r1.value, " ");
} }
class AnalysisBuyerExecuteComponent {
    constructor() {
        this.selected = [''];
        this.selectreports = [
            { value: 'John Weever', viewValue: 'John Weever' },
            { value: 'Jeremy Toms', viewValue: 'Jeremy Toms' },
            { value: 'Mark Lo', viewValue: 'Mark Lo' },
        ];
    }
    ngOnInit() {
    }
}
AnalysisBuyerExecuteComponent.ɵfac = function AnalysisBuyerExecuteComponent_Factory(t) { return new (t || AnalysisBuyerExecuteComponent)(); };
AnalysisBuyerExecuteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalysisBuyerExecuteComponent, selectors: [["app-analysis-buyer-execute"]], decls: 25, vars: 2, consts: [[1, "card", "p-4", 2, "padding-bottom", "6px!important", "padding-top", "35px!important"], [1, "row"], [1, "col-md-4"], [1, "d-flex"], [1, "vendor-per", "pt-2"], [1, "form-control", "plant-select"], ["value", ""], ["appearance", "fill", 1, ""], ["placeholder", "Select Report", "multiple", "", 1, "analysis-multi", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-md-2", "ml-auto"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", 2, "border-radius", "50px", "width", "100%", "white-space", "nowrap"], [3, "value"]], template: function AnalysisBuyerExecuteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Plant:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Open PO Expeditor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Open PO Trendlines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Buyer:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function AnalysisBuyerExecuteComponent_Template_mat_select_valueChange_19_listener($event) { return ctx.selected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AnalysisBuyerExecuteComponent_mat_option_20_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Execute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectreports);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXNpcy1idXllci1leGVjdXRlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalysisBuyerExecuteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analysis-buyer-execute',
                templateUrl: './analysis-buyer-execute.component.html',
                styleUrls: ['./analysis-buyer-execute.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "G9mj":
/*!********************************************************************************!*\
  !*** ./src/app/general/analysis-buyer-table/analysis-buyer-table.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnalysisBuyerTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisBuyerTableComponent", function() { return AnalysisBuyerTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sendreportdialog_sendreportdialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sendreportdialog/sendreportdialog.component */ "fi3O");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_general_pomanager_piechart_pomanager_piechart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/general/pomanager-piechart/pomanager-piechart.component */ "iIKw");
/* harmony import */ var src_app_general_pomanager_tablechart_pomanager_tablechart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/general/pomanager-tablechart/pomanager-tablechart.component */ "/hUj");
/* harmony import */ var src_app_general_pomanager_tablechart_two_pomanager_tablechart_two_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/general/pomanager-tablechart-two/pomanager-tablechart-two.component */ "qWqM");









function AnalysisBuyerTableComponent_tr_117_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnalysisBuyerTableComponent_tr_117_Template_input_ngModelChange_3_listener($event) { const item_r2 = ctx.$implicit; return item_r2.isSelected = $event; })("change", function AnalysisBuyerTableComponent_tr_117_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r2 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.check(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "list_name", item_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r2.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.value, " ");
} }
function AnalysisBuyerTableComponent_ng_container_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Buyer Open PO Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-pomanager-piechart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Buyer Open PO Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-pomanager-piechart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Buyer PastDue PO Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-pomanager-piechart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Buyer PastDue PO Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-pomanager-piechart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Buyer Ack'd Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "app-pomanager-piechart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Buyer Ack'd Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "app-pomanager-piechart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Buyer Future Due PO Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "app-pomanager-piechart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Buyer Future Due PO Line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "app-pomanager-piechart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Open PO%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "app-pomanager-tablechart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "PastDue PO%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "app-pomanager-tablechart-two");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Ack'd Order%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "app-pomanager-tablechart-two");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Future PastDue%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "app-pomanager-tablechart-two");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class AnalysisBuyerTableComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.show = false;
        this.buttonName = 'View Chart';
        this.title = '';
        this.masterSelected = false;
        this.checklist = [
            { id: 0, value: '', isSelected: false },
            { id: 1, value: '', isSelected: true },
            { id: 2, value: '', isSelected: false },
            { id: 3, value: '', isSelected: false },
            { id: 4, value: '', isSelected: false },
            { id: 5, value: '', isSelected: false },
            { id: 6, value: '', isSelected: false },
            { id: 8, value: '', isSelected: false },
            { id: 9, value: '', isSelected: false },
            { id: 10, value: '', isSelected: false },
            { id: 11, value: '', isSelected: false },
            { id: 12, value: '', isSelected: false },
            { id: 13, value: '', isSelected: false },
            { id: 14, value: '', isSelected: false },
            { id: 15, value: '', isSelected: false },
            { id: 16, value: '', isSelected: false },
            { id: 17, value: '', isSelected: false },
            { id: 18, value: '', isSelected: false },
            { id: 19, value: '', isSelected: false },
            { id: 20, value: '', isSelected: false },
        ];
        // this.getCheckedItemList();
    }
    openDialog() {
        this.dialog.open(_sendreportdialog_sendreportdialog_component__WEBPACK_IMPORTED_MODULE_1__["SendreportdialogComponent"]);
    }
    // The master checkbox will check/ uncheck all items
    checkUncheckAll() {
        for (var i = 0; i < this.checklist.length; i++) {
            this.checklist[i].isSelected = this.masterSelected;
        }
        this.getCheckedItemList();
    }
    // Check All Checkbox Checked
    isAllSelected() {
        this.masterSelected = this.checklist.every(function (item) {
            return item.isSelected == true;
        });
        this.getCheckedItemList();
    }
    check(id) {
        return this.checklist[id].isSelected = true;
    }
    // Get List of Checked Items
    getCheckedItemList() {
        this.checkedList = [];
        for (var i = 0; i < this.checklist.length; i++) {
            if (this.checklist[i].isSelected)
                this.checkedList.push(this.checklist[i]);
        }
        this.checkedList = JSON.stringify(this.checkedList);
    }
    ngOnInit() {
    }
    //View Chart Button
    toggle() {
        this.show = !this.show;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide Chart";
        else
            this.buttonName = "View Chart";
    }
}
AnalysisBuyerTableComponent.ɵfac = function AnalysisBuyerTableComponent_Factory(t) { return new (t || AnalysisBuyerTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
AnalysisBuyerTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalysisBuyerTableComponent, selectors: [["app-analysis-buyer-table"]], inputs: { analysissubtitle: "analysissubtitle" }, decls: 126, vars: 8, consts: [[1, "row"], [1, "col-lg-12"], [1, "profile", "card", "card-body", "px-3", "pt-3", "pb-0"], [1, "col-md-4"], [1, "profile-head"], [1, "profile-name", "px-3", "pt-2"], [1, "mb-0", "pro-name", "uer-font"], [1, "pro-form", "pt-4"], [1, "col-xl-12", "col-lg-12", "pr-4", "vendorscorecard-table2", "vendor-second-t-sectable"], ["datatable", "", 1, "row-border", "hover", "tab-top-0", "pl-2", 2, "height", "104px"], [1, "ven-score-first-tab2", "font-color-z"], [1, "ven-score-first-tabl", "font-color-z"], [1, "ven-score-first-tab2"], [1, "ven-score-first-tabl"], ["id", "style-2", 1, "col-xl-12", "col-lg-12", "pl-0", "pr-4", "vendorscorecard-table", "vendor-second-t"], ["datatable", "", 1, "row-border", "hover", "tab-top-0", "pl-0"], [1, "ex-whi", 2, "width", "200px", "padding", "0px", "padding-right", "0px !important"], [1, "list-group-item", 2, "padding-left", "45px"], ["type", "checkbox", "name", "list_name", "value", "m1", 3, "ngModel", "ngModelChange", "change"], [2, "padding-left", "15px"], [1, "ex-whi"], [1, "ex-whi", 2, "text-align", "left"], [4, "ngFor", "ngForOf"], [1, "row", "pb-2", "mt-2"], [1, "col-lg-12", "col-md-12"], [1, "row", "justify-content-end"], [1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5"], ["id", "bt", 1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5", 3, "click"], [4, "ngIf"], [2, "text-align", "left", "padding-left", "44px"], ["type", "checkbox", 3, "ngModel", "name", "value", "ngModelChange", "change"], [1, "col-xl-6", "col-md-6"], [1, "card"], [1, "d-block", "text-center", "pt-4", "mt-1"], [1, "card-title"], [1, "text-center", "mb-0"], [1, "pie-chat-bulit"], [1, "card-body"]], template: function AnalysisBuyerTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Total Open Order Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Avg. Open Order Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Total Open Order Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Avg. PastDue Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total PastDue Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Total PastDue Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Avg.Open Order Lines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Avg.Ack Needed Order Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Ack Needed Order Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Avg.Ack Needed Order Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ack Needed Order Line ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Avg.Future Past Due Order Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Future PastDue Order Value%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Future PastDue Order Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Future PastDue Order Line%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Sample Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AnalysisBuyerTableComponent_Template_input_ngModelChange_86_listener($event) { return ctx.masterSelected = $event; })("change", function AnalysisBuyerTableComponent_Template_input_change_86_listener() { return ctx.checkUncheckAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Open PO Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Open PO Value%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Open PO Lines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Open PO Lines%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "PastDue Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "PastDue Value%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Buyer Pastdue Lines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "PastDue Line%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Ack'd Need Order Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Ack'd Need Order Value%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Ack'd Need Order line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Ack'd Need Order line%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, AnalysisBuyerTableComponent_tr_117_Template, 33, 4, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnalysisBuyerTableComponent_Template_a_click_123_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, AnalysisBuyerTableComponent_ng_container_125_Template, 199, 0, "ng-container", 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.analysissubtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.analysissubtitle, " Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.analysissubtitle, " Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.analysissubtitle, " Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.checklist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], src_app_general_pomanager_piechart_pomanager_piechart_component__WEBPACK_IMPORTED_MODULE_5__["PomanagerPiechartComponent"], src_app_general_pomanager_tablechart_pomanager_tablechart_component__WEBPACK_IMPORTED_MODULE_6__["PomanagerTablechartComponent"], src_app_general_pomanager_tablechart_two_pomanager_tablechart_two_component__WEBPACK_IMPORTED_MODULE_7__["PomanagerTablechartTwoComponent"]], styles: ["div#DataTables_Table_1_filter[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.list-group-item[_ngcontent-%COMP%] {\r\n    border: 0px solid #d7dae3;\r\n}\r\n.ex-whi[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n}\r\n.vendorscorecard-table[_ngcontent-%COMP%]{\r\n    \r\n    \r\n    margin-bottom: 30px;\r\n}\r\n.vendorscorecard-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{\r\n    border-spacing: 0;\r\n}\r\n.vendorscorecard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n    border:0px solid #000;\r\n    padding:5px 15px;\r\n    \r\n    position:sticky;\r\n    top:0;\r\n}\r\n.vendorscorecard-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    \r\n    padding:10px;\r\n    \r\n}\r\n.vendorscorecard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), .vendorscorecard-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\r\n    position:sticky;\r\n    left:0px;\r\n}\r\n.vendorscorecard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .vendorscorecard-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\r\n    position:sticky;\r\n    left:75px;\r\n}\r\n.vendorscorecard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), .vendorscorecard-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\r\n    position:sticky;\r\n    left:185px;\r\n}\r\n.vendorscorecard-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1), .vendorscorecard-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2), .vendorscorecard-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\r\n    background:#fff !important;\r\n}\r\n.vendorscorecard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1), .vendorscorecard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .vendorscorecard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3) {\r\n    z-index: 2;\r\n}\r\n.tab-top-0[_ngcontent-%COMP%]{\r\n    margin-top: 0px !important;\r\n    padding-top: 0px !important;\r\n}\r\n\r\n.vendorscorecard-table2[_ngcontent-%COMP%]{\r\n    margin-bottom: 30px;\r\n}\r\n.vendorscorecard-table2[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{\r\n    border-spacing: 0;\r\n}\r\n.vendorscorecard-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\r\n    \r\n    padding:10px;\r\n}\r\n.vendorscorecard-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {    \r\n    width: 200px !important;\r\n    min-width:200px !important;\r\n    position:sticky;\r\n    left:-10px;\r\n}\r\n.vendorscorecard-table2[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1) {\r\n    background:#fff !important;\r\n}\r\n.vendorscorecard-table2[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(1) {\r\n    z-index: 2;\r\n}\r\n.example-additional-selection[_ngcontent-%COMP%] {\r\n    opacity: 0.75;\r\n    font-size: 0.75em;\r\n  }\r\n.font-color-z[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    color: #000;\r\n  }\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:after {\r\n    border: 1px solid #7E7F81 !important;\r\n    width: 15px !important;\r\n    height: 15px !important;\r\n}\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%]:checked:after {\r\n    font-size: 10px !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5c2lzLWJ1eWVyLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDOztvQ0FFZ0M7SUFDaEMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEI7aUNBQzZCO0lBQzdCLGVBQWU7SUFDZixLQUFLO0FBQ1Q7QUFDQTtJQUNJLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1o7aUNBQzZCO0FBQ2pDO0FBQ0E7O0lBRUksZUFBZTtJQUNmLFFBQVE7QUFDWjtBQUNBOztJQUVJLGVBQWU7SUFDZixTQUFTO0FBQ2I7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsVUFBVTtBQUNkO0FBQ0E7OztJQUdJLDBCQUEwQjtBQUM5QjtBQUNBOzs7SUFHSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7QUFDL0I7QUFHQSxlQUFlO0FBR2Y7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFDQTtJQUNFLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoiYW5hbHlzaXMtYnV5ZXItdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiNEYXRhVGFibGVzX1RhYmxlXzFfZmlsdGVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbSB7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZDdkYWUzO1xyXG59XHJcbi5leC13aGkge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4udmVuZG9yc2NvcmVjYXJkLXRhYmxle1xyXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjgwcHgpOyAqL1xyXG4gICAgLyogd2lkdGg6IGNhbGMoMTAwdncgLSAwcHgpO1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgIGJvcmRlci1ib3R0b206ICMwMDAgc29saWQgMHB4OyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4udmVuZG9yc2NvcmVjYXJkLXRhYmxlIHRhYmxle1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuLnZlbmRvcnNjb3JlY2FyZC10YWJsZSB0aHtcclxuICAgIGJvcmRlcjowcHggc29saWQgIzAwMDtcclxuICAgIHBhZGRpbmc6NXB4IDE1cHg7XHJcbiAgICAvKiB3aWR0aDoxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOjEwMHB4ICFpbXBvcnRhbnQ7ICovXHJcbiAgICBwb3NpdGlvbjpzdGlja3k7XHJcbiAgICB0b3A6MDtcclxufVxyXG4udmVuZG9yc2NvcmVjYXJkLXRhYmxlIHRke1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0Q2REFFMzsgKi9cclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIC8qIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOjEwMHB4ICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuLnZlbmRvcnNjb3JlY2FyZC10YWJsZSB0aDpudGgtY2hpbGQoMSksXHJcbi52ZW5kb3JzY29yZWNhcmQtdGFibGUgdGQ6bnRoLWNoaWxkKDEpIHtcclxuICAgIHBvc2l0aW9uOnN0aWNreTtcclxuICAgIGxlZnQ6MHB4O1xyXG59XHJcbi52ZW5kb3JzY29yZWNhcmQtdGFibGUgdGg6bnRoLWNoaWxkKDIpLFxyXG4udmVuZG9yc2NvcmVjYXJkLXRhYmxlIHRkOm50aC1jaGlsZCgyKSB7XHJcbiAgICBwb3NpdGlvbjpzdGlja3k7XHJcbiAgICBsZWZ0Ojc1cHg7XHJcbn1cclxuLnZlbmRvcnNjb3JlY2FyZC10YWJsZSB0aDpudGgtY2hpbGQoMyksXHJcbi52ZW5kb3JzY29yZWNhcmQtdGFibGUgdGQ6bnRoLWNoaWxkKDMpIHtcclxuICAgIHBvc2l0aW9uOnN0aWNreTtcclxuICAgIGxlZnQ6MTg1cHg7XHJcbn1cclxuLnZlbmRvcnNjb3JlY2FyZC10YWJsZSB0ZDpudGgtY2hpbGQoMSksXHJcbi52ZW5kb3JzY29yZWNhcmQtdGFibGUgdGQ6bnRoLWNoaWxkKDIpLFxyXG4udmVuZG9yc2NvcmVjYXJkLXRhYmxlIHRkOm50aC1jaGlsZCgzKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmYgIWltcG9ydGFudDtcclxufVxyXG4udmVuZG9yc2NvcmVjYXJkLXRhYmxlIHRoOm50aC1jaGlsZCgxKSxcclxuLnZlbmRvcnNjb3JlY2FyZC10YWJsZSB0aDpudGgtY2hpbGQoMiksXHJcbi52ZW5kb3JzY29yZWNhcmQtdGFibGUgdGg6bnRoLWNoaWxkKDMpIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLnRhYi10b3AtMHtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLyogMm5kIFRhYmxlICAqL1xyXG5cclxuXHJcbi52ZW5kb3JzY29yZWNhcmQtdGFibGUye1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4udmVuZG9yc2NvcmVjYXJkLXRhYmxlMiB0YWJsZXtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcbi52ZW5kb3JzY29yZWNhcmQtdGFibGUyIHRke1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbToxcHggc29saWQgI0Q2REFFMzsgKi9cclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG4udmVuZG9yc2NvcmVjYXJkLXRhYmxlMiB0ZDpudGgtY2hpbGQoMSkgeyAgICBcclxuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOjIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwb3NpdGlvbjpzdGlja3k7XHJcbiAgICBsZWZ0Oi0xMHB4O1xyXG59XHJcblxyXG4udmVuZG9yc2NvcmVjYXJkLXRhYmxlMiB0ZDpudGgtY2hpbGQoMSkge1xyXG4gICAgYmFja2dyb3VuZDojZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLnZlbmRvcnNjb3JlY2FyZC10YWJsZTIgdGg6bnRoLWNoaWxkKDEpIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmV4YW1wbGUtYWRkaXRpb25hbC1zZWxlY3Rpb24ge1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gIH1cclxuICAuZm9udC1jb2xvci16e1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdFN0Y4MSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQ6YWZ0ZXIge1xyXG4gICAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4gIFxyXG4gIFxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalysisBuyerTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analysis-buyer-table',
                templateUrl: './analysis-buyer-table.component.html',
                styleUrls: ['./analysis-buyer-table.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { analysissubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "GQzR":
/*!************************************************************************!*\
  !*** ./src/app/general/pomanageruserreg/pomanageruserreg.component.ts ***!
  \************************************************************************/
/*! exports provided: PomanageruserregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomanageruserregComponent", function() { return PomanageruserregComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PomanageruserregComponent {
    constructor() { }
    ngOnInit() {
    }
}
PomanageruserregComponent.ɵfac = function PomanageruserregComponent_Factory(t) { return new (t || PomanageruserregComponent)(); };
PomanageruserregComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomanageruserregComponent, selectors: [["app-pomanageruserreg"]], decls: 66, vars: 0, consts: [[1, "row"], [1, "col-xl-3", "col-sm-6", "mb-4"], [1, "new-use"], [1, "pb-4", "mb-3"], [1, "pl-3"], [1, "new-use-red-b"], [1, "align-items-center"], ["src", "../assets/images/newuser.png", "alt", ""], [1, "new-use", "active-user"], [1, "new-use-red-b", "active-user-box"], ["src", "../assets/images/activeuser.png", "alt", ""], ["src", "../assets/images/ppv.png", "alt", ""], [1, "pb-0", "mb-0"], [1, "form-group", "row", "mb-1"], [1, "col-sm-3", "otd-para", "pl-1", "pr-2", "pb-1"], ["type", "text", "placeholder", "14", 1, "form-control", 2, "width", "50px", "text-align", "center", "margin-left", "10px"], [1, "col-sm-6", "col-form-label", "larec", "pt-0", 2, "color", "#fff", "font-size", "13px", "font-weight", "400"], ["src", "../assets/images/materialregistrations-icon.png", "alt", ""]], template: function PomanageruserregComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Total Open PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "20 Lines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "$30,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Total Pastdue PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "40 Lines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "$40,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Total Ack'd Needed PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "20 Lines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "$30,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Total Future Pastdue PO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "40 Lines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "$40,000 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "45%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb21hbmFnZXJ1c2VycmVnLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomanageruserregComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomanageruserreg',
                templateUrl: './pomanageruserreg.component.html',
                styleUrls: ['./pomanageruserreg.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IN5A":
/*!********************************************************************************************************!*\
  !*** ./src/app/general/trendlines-buyer-useradmin-table/trendlines-buyer-useradmin-table.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: TrendlinesBuyerUseradminTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendlinesBuyerUseradminTableComponent", function() { return TrendlinesBuyerUseradminTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vendortotal_coregraph_dialog_vendortotal_coregraph_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vendortotal-coregraph-dialog/vendortotal-coregraph-dialog.component */ "fb2g");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_general_totalscore_graph_totalscore_graph_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/general/totalscore-graph/totalscore-graph.component */ "Otge");






function TrendlinesBuyerUseradminTableComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Average Daily PO Lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buyer Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "05 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "07 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendlinesBuyerUseradminTableComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_ng_template_4_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-totalscore-graph", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.openpotreuser, "OpenPOLine");
} }
function TrendlinesBuyerUseradminTableComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Average Daily Past Due PO Lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buyer Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "05 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "07 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendlinesBuyerUseradminTableComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_ng_template_17_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-totalscore-graph", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.openpotreuser, "PastPOLine");
} }
function TrendlinesBuyerUseradminTableComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Average Daily Ack'd Needed PO Lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buyer Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "05 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "07 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendlinesBuyerUseradminTableComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_ng_template_30_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-totalscore-graph", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.openpotreuser, "Ack'dNeededLines");
} }
function TrendlinesBuyerUseradminTableComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Average Daily Future (Self-Defined) Past PO Lines");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buyer Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "05 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "07 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendlinesBuyerUseradminTableComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_ng_template_43_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-totalscore-graph", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.openpotreuser, "FuturePastLines");
} }
function TrendlinesBuyerUseradminTableComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Average Daily PO Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buyer Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "05 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "07 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendlinesBuyerUseradminTableComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_ng_template_56_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-totalscore-graph", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.openpotreuser, "OpenPOValue");
} }
function TrendlinesBuyerUseradminTableComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Average Daily Future (Self-Defined) Past PO Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buyer Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "05 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "07 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendlinesBuyerUseradminTableComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_ng_template_69_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-totalscore-graph", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.openpotreuser, "PastDueValue ");
} }
function TrendlinesBuyerUseradminTableComponent_div_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Average Daily Past Due Pro Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buyer Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "05 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "07 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendlinesBuyerUseradminTableComponent_ng_template_82_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_ng_template_82_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-totalscore-graph", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r20.openpotreuser, "Ack'sNeededValue");
} }
function TrendlinesBuyerUseradminTableComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Average Daily Ack'd Needed PO Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Buyer Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "01 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "03 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "05 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "07 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "09 Days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Sample Data Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrendlinesBuyerUseradminTableComponent_ng_template_95_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_ng_template_95_Template_span_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Buyer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-totalscore-graph", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.openpotreuser, "FuturePastValue");
} }
class TrendlinesBuyerUseradminTableComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.show = false;
        this.show2 = false;
        this.show3 = false;
        this.show4 = false;
        this.show5 = false;
        this.show6 = false;
        this.show7 = false;
        this.show8 = false;
        this.buttonName = 'View Data';
        this.buttonName2 = 'View Data';
        this.buttonName3 = 'View Data';
        this.buttonName4 = 'View Data';
        this.buttonName5 = 'View Data';
        this.buttonName6 = 'View Data';
        this.buttonName7 = 'View Data';
        this.buttonName8 = 'View Data';
    }
    openDialog() {
        this.dialog.open(_vendortotal_coregraph_dialog_vendortotal_coregraph_dialog_component__WEBPACK_IMPORTED_MODULE_1__["VendortotalCoregraphDialogComponent"]);
    }
    ngOnInit() {
    }
    //View Chart Button
    toggle() {
        this.show = !this.show;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "View Graph";
        else
            this.buttonName = "View Data";
    }
    toggle2() {
        this.show2 = !this.show2;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show2)
            this.buttonName2 = "View Graph";
        else
            this.buttonName2 = "View Data";
    }
    toggle3() {
        this.show3 = !this.show3;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show3)
            this.buttonName3 = "View Graph";
        else
            this.buttonName3 = "View Data";
    }
    toggle4() {
        this.show4 = !this.show4;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show4)
            this.buttonName4 = "View Graph";
        else
            this.buttonName4 = "View Data";
    }
    toggle5() {
        this.show5 = !this.show5;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show5)
            this.buttonName5 = "View Graph";
        else
            this.buttonName5 = "View Data";
    }
    toggle6() {
        this.show6 = !this.show6;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show6)
            this.buttonName6 = "View Graph";
        else
            this.buttonName6 = "View Data";
    }
    toggle7() {
        this.show7 = !this.show7;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show7)
            this.buttonName7 = "View Graph";
        else
            this.buttonName7 = "View Data";
    }
    toggle8() {
        this.show8 = !this.show8;
        //CHANGE THE NAME OF THE BUTTON.
        if (this.show8)
            this.buttonName8 = "View Graph";
        else
            this.buttonName8 = "View Data";
    }
}
TrendlinesBuyerUseradminTableComponent.ɵfac = function TrendlinesBuyerUseradminTableComponent_Factory(t) { return new (t || TrendlinesBuyerUseradminTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
TrendlinesBuyerUseradminTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendlinesBuyerUseradminTableComponent, selectors: [["app-trendlines-buyer-useradmin-table"]], inputs: { openpotreuser: "openpotreuser", analysissubtitle: "analysissubtitle" }, decls: 104, vars: 24, consts: [[1, "row"], [1, "col-lg-12"], [1, "profile", "card", "card-body", "px-3", "pt-3", "pb-0"], ["class", "pro-form pt-4", 4, "ngIf", "ngIfElse"], ["dvchart", ""], [1, "row", "pb-2", "mt-2"], [1, "col-lg-12", "col-md-12"], [1, "row", "justify-content-end"], [1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5"], ["id", "bt", 1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5", 3, "click"], ["dvchart2", ""], ["id", "bt2", 1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5", 3, "click"], ["dvchart3", ""], ["dvchart4", ""], ["id", "bt4", 1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5", 3, "click"], ["dvchart5", ""], ["id", "bt5", 1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5", 3, "click"], ["dvchart6", ""], ["id", "bt6", 1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5", 3, "click"], ["dvchart7", ""], ["id", "bt7", 1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5", 3, "click"], ["dvchart8", ""], ["id", "bt8", 1, "btn", "btn-primary", "mr-2", "mb-3", "ven-re-btn-ran", "pl-5", "pr-5", 3, "click"], [1, "pro-form", "pt-4"], [1, "col-md-12"], [1, "profile-head"], [1, "profile-name", "px-3", "pt-2"], [1, "mb-0", "pro-name", "uer-font"], ["id", "style-2", 1, "col-xl-12", "col-lg-12", "pl-0", "pr-4", "vendorscorecard-table", "vendor-second-t", "tre-sh"], ["datatable", "", 1, "row-border", "hover", "tab-top-0", "pl-0"], [1, "ex-whi", 2, "text-align", "left"], [1, "ex-whi"], [2, "text-align", "left"], [1, "row", "mt-4"], [1, "text-center", "pt-3", "pb-3", 2, "font-size", "17px", "color", "#131523", "font-weight", "600"], ["mat-button", "", 1, "pr-3", 2, "float", "right", "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-expand"], [1, "text-center", "mb-0"], [1, "total-red-new-ven"], [1, "total-red-new-ven", "po-status"], [1, "text-center"]], template: function TrendlinesBuyerUseradminTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrendlinesBuyerUseradminTableComponent_div_3_Template, 162, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TrendlinesBuyerUseradminTableComponent_ng_template_4_Template, 20, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_Template_a_click_11_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TrendlinesBuyerUseradminTableComponent_div_16_Template, 162, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TrendlinesBuyerUseradminTableComponent_ng_template_17_Template, 20, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_Template_a_click_24_listener() { return ctx.toggle2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TrendlinesBuyerUseradminTableComponent_div_29_Template, 162, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TrendlinesBuyerUseradminTableComponent_ng_template_30_Template, 20, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_Template_a_click_37_listener() { return ctx.toggle3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TrendlinesBuyerUseradminTableComponent_div_42_Template, 162, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TrendlinesBuyerUseradminTableComponent_ng_template_43_Template, 20, 1, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_Template_a_click_50_listener() { return ctx.toggle4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TrendlinesBuyerUseradminTableComponent_div_55_Template, 162, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TrendlinesBuyerUseradminTableComponent_ng_template_56_Template, 20, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_Template_a_click_63_listener() { return ctx.toggle5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, TrendlinesBuyerUseradminTableComponent_div_68_Template, 162, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, TrendlinesBuyerUseradminTableComponent_ng_template_69_Template, 20, 1, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_Template_a_click_76_listener() { return ctx.toggle6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, TrendlinesBuyerUseradminTableComponent_div_81_Template, 162, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, TrendlinesBuyerUseradminTableComponent_ng_template_82_Template, 20, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_Template_a_click_89_listener() { return ctx.toggle7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, TrendlinesBuyerUseradminTableComponent_div_94_Template, 162, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](95, TrendlinesBuyerUseradminTableComponent_ng_template_95_Template, 20, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Download Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrendlinesBuyerUseradminTableComponent_Template_a_click_102_listener() { return ctx.toggle8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);
        const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83);
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show2)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show3)("ngIfElse", _r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show4)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show5)("ngIfElse", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show6)("ngIfElse", _r16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show7)("ngIfElse", _r19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show8)("ngIfElse", _r22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName8);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], src_app_general_totalscore_graph_totalscore_graph_component__WEBPACK_IMPORTED_MODULE_4__["TotalscoreGraphComponent"]], styles: [".list-group-item[_ngcontent-%COMP%] {\r\n    border: 0px solid #d7dae3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZW5kbGluZXMtYnV5ZXItdXNlcmFkbWluLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoidHJlbmRsaW5lcy1idXllci11c2VyYWRtaW4tdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2Q3ZGFlMztcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendlinesBuyerUseradminTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trendlines-buyer-useradmin-table',
                templateUrl: './trendlines-buyer-useradmin-table.component.html',
                styleUrls: ['./trendlines-buyer-useradmin-table.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { openpotreuser: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], analysissubtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "IUHQ":
/*!************************************************************************************************************!*\
  !*** ./src/app/openpoexpeditor/openpoexpeditor-email-template/openpoexpeditor-email-template.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: OpenpoexpeditorEmailTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenpoexpeditorEmailTemplateComponent", function() { return OpenpoexpeditorEmailTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_api_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.endpoints */ "gzUh");
/* harmony import */ var src_app_services_appService_generalApiService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/appService/generalApiService */ "jBxN");
/* harmony import */ var src_app_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/notification.service */ "S36L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








class OpenpoexpeditorEmailTemplateComponent {
    // private _notificationService: any;
    constructor(data, _apiService, dialogRef, _notificationService) {
        this.data = data;
        this._apiService = _apiService;
        this.dialogRef = dialogRef;
        this._notificationService = _notificationService;
    }
    ngOnInit() {
        this.params = this.data;
    }
    submit() {
        this._apiService.post(src_app_api_endpoints__WEBPACK_IMPORTED_MODULE_2__["api"].OpenPOExpeditorSentEmail, this.params)
            .subscribe((res) => {
            this._apiService.isCompareLoader$.next(false);
            this._notificationService.push("Email Sent Successfully.", 1);
            this.dialogRef.close({ status: 'mailSend' });
        }, (error) => {
            this._apiService.isCompareLoader$.next(false);
        });
    }
    close() {
        this.dialogRef.close(null);
    }
    onInput(event) {
        this.params.body = event.target.innerHTML;
    }
}
OpenpoexpeditorEmailTemplateComponent.ɵfac = function OpenpoexpeditorEmailTemplateComponent_Factory(t) { return new (t || OpenpoexpeditorEmailTemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appService_generalApiService__WEBPACK_IMPORTED_MODULE_3__["GeneralApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"])); };
OpenpoexpeditorEmailTemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OpenpoexpeditorEmailTemplateComponent, selectors: [["app-openpoexpeditor-email-template"]], decls: 19, vars: 2, consts: [["mat-dialog-title", ""], ["aria-hidden", "true", 1, "fa", "fa-times", "fa-lg", 2, "color", "#BC1A20", "float", "right", 3, "click"], [1, "wizard-Signup-dialog", 2, "width", "815px"], ["mat-dialog-content", "", 2, "display", "initial"], [1, ""], [1, "col-md-12", "text-left", "pl-0", "pr-0"], [1, "report-dia"], ["name", "message", "placeholder", "Enter subject for mail", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "text-left", "mt-3", "pl-0", "pr-0"], ["contenteditable", "true", 3, "innerHTML", "input"], ["mat-dialog-actions", "", 1, "d-flex"], [1, "profi-btn-yes", "cancel-btn", 2, "width", "40%", "margin", "0px auto", 3, "click"], [1, "profi-btn-yes", 2, "color", "#fff", "width", "40%", "margin", "0px auto", 3, "click"]], template: function OpenpoexpeditorEmailTemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Send Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpenpoexpeditorEmailTemplateComponent_Template_i_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OpenpoexpeditorEmailTemplateComponent_Template_input_ngModelChange_9_listener($event) { return ctx.params.subject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OpenpoexpeditorEmailTemplateComponent_Template_div_input_13_listener($event) { return ctx.onInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpenpoexpeditorEmailTemplateComponent_Template_button_click_15_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OpenpoexpeditorEmailTemplateComponent_Template_button_click_17_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.params.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.params.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVucG9leHBlZGl0b3ItZW1haWwtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OpenpoexpeditorEmailTemplateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-openpoexpeditor-email-template',
                templateUrl: './openpoexpeditor-email-template.component.html',
                styleUrls: ['./openpoexpeditor-email-template.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_services_appService_generalApiService__WEBPACK_IMPORTED_MODULE_3__["GeneralApiService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: src_app_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }]; }, null); })();


/***/ }),

/***/ "L5xG":
/*!****************************************************************!*\
  !*** ./src/app/general/graphlargetc/graphlargetc.component.ts ***!
  \****************************************************************/
/*! exports provided: GraphlargetcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphlargetcComponent", function() { return GraphlargetcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



const _c0 = ["chart"];
class GraphlargetcComponent {
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "sea green",
                    data: [10, 20, 40, 60, 80, 100]
                },
                {
                    name: "purple",
                    data: [0, 41, 51, 49, 72, 90]
                },
                {
                    name: "red",
                    data: [0, 25, 58, 69, 70, 95]
                },
                {
                    name: "yellow",
                    data: [0, 22, 50, 60, 80, 95]
                },
                {
                    name: "light green",
                    data: [0, 24, 55, 59, 78, 96]
                }
            ],
            chart: {
                //width: "100% !important",
                width: "100%",
                height: 550,
                type: "line",
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "straight",
                width: [2, 2, 2],
                colors: ["#A7FF34", "#8B00DA", "#FF3465", "#FFCF64", "#00D9A6"],
            },
            title: {
                text: "",
                align: "left"
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"],
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ]
            },
            yaxis: [
                {
                    seriesName: "Revenue",
                    opposite: false,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#FEB019"
                    },
                    title: {
                        text: "Revenue (thousand crores)",
                        style: {
                            color: "#FEB019"
                        }
                    }
                }
            ],
        };
    }
    ngOnInit() {
    }
}
GraphlargetcComponent.ɵfac = function GraphlargetcComponent_Factory(t) { return new (t || GraphlargetcComponent)(); };
GraphlargetcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraphlargetcComponent, selectors: [["app-graphlargetc"]], viewQuery: function GraphlargetcComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 8, consts: [[3, "series", "chart", "xaxis", "yaxis", "dataLabels", "grid", "stroke", "title"]], template: function GraphlargetcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke)("title", ctx.chartOptions.title);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaGxhcmdldGMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraphlargetcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-graphlargetc',
                templateUrl: './graphlargetc.component.html',
                styleUrls: ['./graphlargetc.component.css']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }] }); })();


/***/ }),

/***/ "OR1m":
/*!**********************************************************************!*\
  !*** ./src/app/kpiparametersetting/kpiparametersetting.component.ts ***!
  \**********************************************************************/
/*! exports provided: KpiparametersettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KpiparametersettingComponent", function() { return KpiparametersettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class KpiparametersettingComponent {
    constructor() { }
    ngOnInit() {
    }
}
KpiparametersettingComponent.ɵfac = function KpiparametersettingComponent_Factory(t) { return new (t || KpiparametersettingComponent)(); };
KpiparametersettingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KpiparametersettingComponent, selectors: [["app-kpiparametersetting"]], decls: 2, vars: 0, template: function KpiparametersettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "kpiparametersetting works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrcGlwYXJhbWV0ZXJzZXR0aW5nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KpiparametersettingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kpiparametersetting',
                templateUrl: './kpiparametersetting.component.html',
                styleUrls: ['./kpiparametersetting.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OSAb":
/*!********************************************************************************************************************!*\
  !*** ./src/app/general/trendlines-pomanager-average-linechart/trendlines-pomanager-average-linechart.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: TrendlinesPomanagerAverageLinechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrendlinesPomanagerAverageLinechartComponent", function() { return TrendlinesPomanagerAverageLinechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_appService_generalApiService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/appService/generalApiService */ "jBxN");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");





const _c0 = ["chart"];
class TrendlinesPomanagerAverageLinechartComponent {
    constructor(_apiService, translateService, cdr) {
        this._apiService = _apiService;
        this.translateService = translateService;
        this.cdr = cdr;
        this.series = [];
        this.categories = [];
        this.randomColors = [];
        this.strokeWidth = [];
        this.charDataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes['executeData']) {
            if (this.executeData === undefined || this.executeData === null)
                return;
            let seriesData = [];
            this.series = [];
            this.randomColors = [];
            this.categories = [];
            this.strokeWidth = [];
            this.executeData.forEach(item => {
                seriesData.push(item.avarage);
                this.categories.push(item.days);
                // let seriesData1 = {
                //     name: item.days,
                //     data: [item.avarage]
                // };
                // seriesData.push(seriesData1);
            });
            let seriesData1 = {
                name: 'Avg',
                data: seriesData
            };
            this.series.push(seriesData1);
            this.loadChart();
        }
    }
    ngOnInit() {
        this.loadChart();
    }
    loadChart() {
        this.chartOptions = {
            series: this.series,
            // [
            //     {
            //       name: "sea green",
            //       data: [10, 20, 40, 60, 80, 100]
            //     },
            //     {
            //       name: "purple",
            //       data: [0, 41, 51, 49, 72, 90]
            //     },
            //     {
            //       name: "red",
            //       data: [0, 25, 58, 69, 70, 95]
            //     },
            //     {
            //       name: "yellow",
            //       data: [0, 22, 50, 60, 80, 95]
            //     },
            //     {
            //       name: "light green",
            //       data: [0, 24, 55, 59, 78, 96]
            //     }
            //   ],
            chart: {
                width: "100%",
                height: 350,
                type: "line",
                zoom: {
                    enabled: false
                }
            },
            colors: this.randomColors,
            markers: {
                size: 10,
                colors: this.randomColors // Customize the bullet color here
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
            },
            stroke: {
                curve: "straight",
                width: [3],
                colors: ["#d81b22"],
            },
            title: {
                text: "",
                align: "left"
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"],
                    opacity: 0.5
                }
            },
            xaxis: {
                categories: this.categories,
            },
            yaxis: [
                {
                    seriesName: "Revenue",
                    opposite: false,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#FEB019"
                    },
                    title: {
                        text: "Average Line Chart",
                        style: {
                            color: "#FEB019"
                        }
                    }
                }
            ],
        };
        this.cdr.detectChanges();
    }
    getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}
TrendlinesPomanagerAverageLinechartComponent.ɵfac = function TrendlinesPomanagerAverageLinechartComponent_Factory(t) { return new (t || TrendlinesPomanagerAverageLinechartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_appService_generalApiService__WEBPACK_IMPORTED_MODULE_1__["GeneralApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
TrendlinesPomanagerAverageLinechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrendlinesPomanagerAverageLinechartComponent, selectors: [["app-trendlines-pomanager-average-linechart"]], viewQuery: function TrendlinesPomanagerAverageLinechartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, inputs: { executeData: "executeData" }, outputs: { charDataEmitter: "charDataEmitter" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 10, consts: [[3, "series", "legend", "chart", "xaxis", "yaxis", "dataLabels", "grid", "stroke", "colors", "title"]], template: function TrendlinesPomanagerAverageLinechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("legend", ctx.chartOptions.legend)("chart", ctx.chartOptions.chart)("xaxis", ctx.chartOptions.xaxis)("yaxis", ctx.chartOptions.yaxis)("dataLabels", ctx.chartOptions.dataLabels)("grid", ctx.chartOptions.grid)("stroke", ctx.chartOptions.stroke)("colors", ctx.chartOptions.colors)("title", ctx.chartOptions.title);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmVuZGxpbmVzLXBvbWFuYWdlci1hdmVyYWdlLWxpbmVjaGFydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrendlinesPomanagerAverageLinechartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trendlines-pomanager-average-linechart',
                templateUrl: './trendlines-pomanager-average-linechart.component.html',
                styleUrls: ['./trendlines-pomanager-average-linechart.component.css']
            }]
    }], function () { return [{ type: src_app_services_appService_generalApiService__WEBPACK_IMPORTED_MODULE_1__["GeneralApiService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }], executeData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], charDataEmitter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "PrfL":
/*!******************************************************************************!*\
  !*** ./src/app/general/successfully-dialog/successfully-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: SuccessfullyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessfullyDialogComponent", function() { return SuccessfullyDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");



class SuccessfullyDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuccessfullyDialogComponent.ɵfac = function SuccessfullyDialogComponent_Factory(t) { return new (t || SuccessfullyDialogComponent)(); };
SuccessfullyDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessfullyDialogComponent, selectors: [["app-successfully-dialog"]], decls: 8, vars: 0, consts: [[2, "display", "table !important"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-dialog-close", "", 1, "profi-btn-yes", "mt-4", 2, "width", "auto", "color", "#fff", "margin", "0px auto"]], template: function SuccessfullyDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Report Sent Successfully");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your report has been sent successfully ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzZnVsbHktZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessfullyDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-successfully-dialog',
                templateUrl: './successfully-dialog.component.html',
                styleUrls: ['./successfully-dialog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Q59B":
/*!********************************************************************************!*\
  !*** ./src/app/maindashboard/filterby-dropdown/filterby-dropdown.component.ts ***!
  \********************************************************************************/
/*! exports provided: FilterbyDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterbyDropdownComponent", function() { return FilterbyDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class FilterbyDropdownComponent {
    constructor() { }
    ngOnInit() {
    }
}
FilterbyDropdownComponent.ɵfac = function FilterbyDropdownComponent_Factory(t) { return new (t || FilterbyDropdownComponent)(); };
FilterbyDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterbyDropdownComponent, selectors: [["app-filterby-dropdown"]], decls: 14, vars: 0, consts: [[1, "row"], [1, "col-md-3", "mb-3"], [1, "col-md-4", "ml-auto"], [1, "d-flex", "mb-3"], [1, "filter-text"], [1, "red-btn"], ["value", "", "selected", "selected"], ["value", "30"], ["value", "/"]], template: function FilterbyDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Filter by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "30 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Current Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXJieS1kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterbyDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filterby-dropdown',
                templateUrl: './filterby-dropdown.component.html',
                styleUrls: ['./filterby-dropdown.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Q68g":
/*!**************************************************************************************!*\
  !*** ./src/app/general/pomanager-vendor-search/pomanager-vendor-search.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PomanagerVendorSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomanagerVendorSearchComponent", function() { return PomanagerVendorSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PomanagerVendorSearchComponent {
    constructor() {
        this.seasons = ['Buyer', 'Vendor', 'Part Number'];
    }
    ngOnInit() {
    }
}
PomanagerVendorSearchComponent.ɵfac = function PomanagerVendorSearchComponent_Factory(t) { return new (t || PomanagerVendorSearchComponent)(); };
PomanagerVendorSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomanagerVendorSearchComponent, selectors: [["app-pomanager-vendor-search"]], decls: 0, vars: 0, template: function PomanagerVendorSearchComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb21hbmFnZXItdmVuZG9yLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomanagerVendorSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomanager-vendor-search',
                templateUrl: './pomanager-vendor-search.component.html',
                styleUrls: ['./pomanager-vendor-search.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QzD2":
/*!**************************************************!*\
  !*** ./src/app/bootstrap/grid/grid.component.ts ***!
  \**************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GridComponent {
    constructor() { }
    ngOnInit() {
    }
}
GridComponent.ɵfac = function GridComponent_Factory(t) { return new (t || GridComponent)(); };
GridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridComponent, selectors: [["app-grid"]], decls: 198, vars: 0, consts: [[1, "content-body"], [1, "container-fluid"], [1, "row", "page-titles", "mx-0"], [1, "col-sm-6", "p-md-0"], [1, "welcome-text"], [1, "mb-0"], [1, "col-sm-6", "p-md-0", "justify-content-sm-end", "mt-2", "mt-sm-0", "d-flex"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "table-responsive"], [1, "table", "table-bordered", "table-striped"], [1, "text-center", "text-dark"], [1, "text-muted"], ["scope", "row", 1, "text-nowrap", "text-dark"], ["colspan", "5"], [1, "grid-col", "mb-4"], [1, "col-xl-11"], [1, "col-xl-1"], [1, "col-xl-10"], [1, "col-xl-2"], [1, "col-xl-9"], [1, "col-xl-3"], [1, "col-xl-8"], [1, "col-xl-4"], [1, "col-xl-7"], [1, "col-xl-5"], [1, "col-xl-6"]], template: function GridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi, welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your business dashboard template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Grid options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "While Bootstrap u ses or for defining most sizes,are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the font size. See how aspects of the Bootstrap grid system work across multiple devices with a handy table.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Extra small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "<576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u2265576px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u2265768px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u2265992px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Extra large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u22651200px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Max container width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "None (auto)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "540px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "720px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "960px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "1140px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Class prefix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, ".col-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, ".col-sm-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, ".col-md-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ".col-lg-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, ".col-xl-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "# of columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Gutter width");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "24px (12px on each side of a column)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Nestable");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Column ordering");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Grid Column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Using a single set of grid classes, you can create a default grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns in any");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, ".Col-lg-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, ".Col-lg-11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, ".Col-lg-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, ".Col-lg-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, ".Col-lg-02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, ".Col-lg-09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, ".Col-lg-03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, ".Col-lg-08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, ".Col-lg-04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, ".Col-lg-07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, ".Col-lg-05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, ".Col-lg-06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, ".Col-lg-06");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, ".Col-lg-05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, ".Col-lg-07");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, ".Col-lg-04");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, ".Col-lg-08");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, ".Col-lg-03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, ".Col-lg-09");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, ".Col-lg-02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, ".Col-lg-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, ".Col-lg-01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, ".Col-lg-11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmlkLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './grid.component.html',
                styleUrls: ['./grid.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RGxx":
/*!******************************************************************************!*\
  !*** ./src/app/general/pomanagerusercounts/pomanagerusercounts.component.ts ***!
  \******************************************************************************/
/*! exports provided: PomanagerusercountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomanagerusercountsComponent", function() { return PomanagerusercountsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PomanagerusercountsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PomanagerusercountsComponent.ɵfac = function PomanagerusercountsComponent_Factory(t) { return new (t || PomanagerusercountsComponent)(); };
PomanagerusercountsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomanagerusercountsComponent, selectors: [["app-pomanagerusercounts"]], decls: 61, vars: 0, consts: [[1, "row"], [1, "col-xl-3", "col-sm-6", "mb-4"], [1, "new-use"], ["src", "../assets/images/ic-arrow-narrow-up.svg", "alt", ""], [1, "new-use-red-b"], [1, "align-items-center"], ["src", "../assets/images/newuser.png", "alt", ""], [1, "new-use", "active-user"], [1, "red-num"], ["src", "../assets/images/arrow-narrow-up.png", "alt", ""], [1, "new-use-red-b", "active-user-box"], ["src", "../assets/images/activeuser.png", "alt", ""], ["src", "../assets/images/ppv.png", "alt", ""], ["src", "../assets/images/materialregistrations-icon.png", "alt", ""]], template: function PomanagerusercountsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Plant Counts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "2.3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "than last year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vendor Counts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "550");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1.2% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "than last year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Buyer Counts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2.3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "than last year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Material Counts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "2.3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "than last year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb21hbmFnZXJ1c2VyY291bnRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomanagerusercountsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomanagerusercounts',
                templateUrl: './pomanagerusercounts.component.html',
                styleUrls: ['./pomanagerusercounts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SrD1":
/*!**********************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.component.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ɵngcc0 = __webpack_require__(/*! @angular/core */ "fXoL");
var ɵngcc1 = __webpack_require__(/*! ./lightbox-event.service */ "rhsj");
var ɵngcc2 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");

var _c0 = ["outerContainer"];
var _c1 = ["container"];
var _c2 = ["leftArrow"];
var _c3 = ["rightArrow"];
var _c4 = ["navArrow"];
var _c5 = ["dataContainer"];
var _c6 = ["image"];
var _c7 = ["caption"];
var _c8 = ["number"];
var _c9 = ["lb-content", ""];
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "rhsj");
var LightboxComponent = /** @class */ (function () {
    function LightboxComponent(_elemRef, _rendererRef, _lightboxEvent, _lightboxElem, _lightboxWindowRef, _sanitizer, _documentRef) {
        var _this = this;
        this._elemRef = _elemRef;
        this._rendererRef = _rendererRef;
        this._lightboxEvent = _lightboxEvent;
        this._lightboxElem = _lightboxElem;
        this._lightboxWindowRef = _lightboxWindowRef;
        this._sanitizer = _sanitizer;
        this._documentRef = _documentRef;
        // initialize data
        this.options = this.options || {};
        this.album = this.album || [];
        this.currentImageIndex = this.currentImageIndex || 0;
        this._windowRef = this._lightboxWindowRef.nativeWindow;
        // control the interactive of the directive
        this.ui = {
            // control the appear of the reloader
            // false: image has loaded completely and ready to be shown
            // true: image is still loading
            showReloader: true,
            // control the appear of the nav arrow
            // the arrowNav is the parent of both left and right arrow
            // in some cases, the parent shows but the child does not show
            showLeftArrow: false,
            showRightArrow: false,
            showArrowNav: false,
            // control the appear of the zoom and rotate buttons
            showZoomButton: false,
            showRotateButton: false,
            // control whether to show the
            // page number or not
            showPageNumber: false,
            showCaption: false,
            classList: 'lightbox animation fadeIn'
        };
        this.content = {
            pageNumber: ''
        };
        this._event = {};
        this._lightboxElem = this._elemRef;
        this._event.subscription = this._lightboxEvent.lightboxEvent$
            .subscribe(function (event) { return _this._onReceivedEvent(event); });
        this.rotate = 0;
    }
    LightboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.album.forEach(function (album) {
            if (album.caption) {
                album.caption = _this._sanitizer.sanitize(core_1.SecurityContext.HTML, album.caption);
            }
        });
    };
    LightboxComponent.prototype.ngAfterViewInit = function () {
        // need to init css value here, after the view ready
        // actually these values are always 0
        this._cssValue = {
            containerTopPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-top')),
            containerRightPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-right')),
            containerBottomPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-bottom')),
            containerLeftPadding: Math.round(this._getCssStyleValue(this._containerElem, 'padding-left')),
            imageBorderWidthTop: Math.round(this._getCssStyleValue(this._imageElem, 'border-top-width')),
            imageBorderWidthBottom: Math.round(this._getCssStyleValue(this._imageElem, 'border-bottom-width')),
            imageBorderWidthLeft: Math.round(this._getCssStyleValue(this._imageElem, 'border-left-width')),
            imageBorderWidthRight: Math.round(this._getCssStyleValue(this._imageElem, 'border-right-width'))
        };
        if (this._validateInputData()) {
            this._prepareComponent();
            this._registerImageLoadingEvent();
        }
    };
    LightboxComponent.prototype.ngOnDestroy = function () {
        if (!this.options.disableKeyboardNav) {
            // unbind keyboard event
            this._disableKeyboardNav();
        }
        this._event.subscription.unsubscribe();
    };
    LightboxComponent.prototype.close = function ($event) {
        $event.stopPropagation();
        if ($event.target.classList.contains('lightbox') ||
            $event.target.classList.contains('lb-loader') ||
            $event.target.classList.contains('lb-close')) {
            this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE, data: null });
        }
    };
    LightboxComponent.prototype.control = function ($event) {
        $event.stopPropagation();
        var height;
        var width;
        if ($event.target.classList.contains('lb-turnLeft')) {
            this.rotate = this.rotate - 90;
            this._rotateContainer();
            this._calcTransformPoint();
            document.getElementById('image').style.transform = "rotate(" + this.rotate + "deg)";
            document.getElementById('image').style.webkitTransform = "rotate(" + this.rotate + "deg)";
            this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.ROTATE_LEFT, data: null });
        }
        else if ($event.target.classList.contains('lb-turnRight')) {
            this.rotate = this.rotate + 90;
            this._rotateContainer();
            this._calcTransformPoint();
            document.getElementById('image').style.transform = "rotate(" + this.rotate + "deg)";
            document.getElementById('image').style.webkitTransform = "rotate(" + this.rotate + "deg)";
            this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.ROTATE_RIGHT, data: null });
        }
        else if ($event.target.classList.contains('lb-zoomOut')) {
            height = parseInt(document.getElementById('outerContainer').style.height, 10) / 1.5;
            width = parseInt(document.getElementById('outerContainer').style.width, 10) / 1.5;
            document.getElementById('outerContainer').style.height = height + 'px';
            document.getElementById('outerContainer').style.width = width + 'px';
            height = parseInt(document.getElementById('image').style.height, 10) / 1.5;
            width = parseInt(document.getElementById('image').style.width, 10) / 1.5;
            document.getElementById('image').style.height = height + 'px';
            document.getElementById('image').style.width = width + 'px';
            this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.ZOOM_OUT, data: null });
        }
        else if ($event.target.classList.contains('lb-zoomIn')) {
            height = parseInt(document.getElementById('outerContainer').style.height, 10) * 1.5;
            width = parseInt(document.getElementById('outerContainer').style.width, 10) * 1.5;
            document.getElementById('outerContainer').style.height = height + 'px';
            document.getElementById('outerContainer').style.width = width + 'px';
            height = parseInt(document.getElementById('image').style.height, 10) * 1.5;
            width = parseInt(document.getElementById('image').style.width, 10) * 1.5;
            document.getElementById('image').style.height = height + 'px';
            document.getElementById('image').style.width = width + 'px';
            this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.ZOOM_IN, data: null });
        }
    };
    LightboxComponent.prototype._rotateContainer = function () {
        var temp = this.rotate;
        if (temp < 0) {
            temp *= -1;
        }
        if (temp / 90 % 4 === 1 || temp / 90 % 4 === 3) {
            document.getElementById('outerContainer').style.height = document.getElementById('image').style.width;
            document.getElementById('outerContainer').style.width = document.getElementById('image').style.height;
            document.getElementById('container').style.height = document.getElementById('image').style.width;
            document.getElementById('container').style.width = document.getElementById('image').style.height;
        }
        else {
            document.getElementById('outerContainer').style.height = document.getElementById('image').style.height;
            document.getElementById('outerContainer').style.width = document.getElementById('image').style.width;
            document.getElementById('container').style.height = document.getElementById('image').style.width;
            document.getElementById('container').style.width = document.getElementById('image').style.height;
        }
    };
    LightboxComponent.prototype._resetImage = function () {
        this.rotate = 0;
        document.getElementById('image').style.transform = "rotate(" + this.rotate + "deg)";
        document.getElementById('image').style.webkitTransform = "rotate(" + this.rotate + "deg)";
    };
    LightboxComponent.prototype._calcTransformPoint = function () {
        var height = parseInt(document.getElementById('image').style.height, 10);
        var width = parseInt(document.getElementById('image').style.width, 10);
        var temp = this.rotate % 360;
        if (temp < 0) {
            temp = 360 + temp;
        }
        if (temp === 90) {
            document.getElementById('image').style.transformOrigin = (height / 2) + 'px ' + (height / 2) + 'px';
        }
        else if (temp === 180) {
            document.getElementById('image').style.transformOrigin = (width / 2) + 'px ' + (height / 2) + 'px';
        }
        else if (temp === 270) {
            document.getElementById('image').style.transformOrigin = (width / 2) + 'px ' + (width / 2) + 'px';
        }
    };
    LightboxComponent.prototype.nextImage = function () {
        if (this.album.length === 1) {
            return;
        }
        else if (this.currentImageIndex === this.album.length - 1) {
            this._changeImage(0);
        }
        else {
            this._changeImage(this.currentImageIndex + 1);
        }
    };
    LightboxComponent.prototype.prevImage = function () {
        if (this.album.length === 1) {
            return;
        }
        else if (this.currentImageIndex === 0 && this.album.length > 1) {
            this._changeImage(this.album.length - 1);
        }
        else {
            this._changeImage(this.currentImageIndex - 1);
        }
    };
    LightboxComponent.prototype._validateInputData = function () {
        if (this.album &&
            this.album instanceof Array &&
            this.album.length > 0) {
            for (var i = 0; i < this.album.length; i++) {
                // check whether each _nside
                // album has src data or not
                if (this.album[i].src) {
                    continue;
                }
                throw new Error('One of the album data does not have source data');
            }
        }
        else {
            throw new Error('No album data or album data is not correct in type');
        }
        // to prevent data understand as string
        // convert it to number
        if (isNaN(this.currentImageIndex)) {
            throw new Error('Current image index is not a number');
        }
        else {
            this.currentImageIndex = Number(this.currentImageIndex);
        }
        return true;
    };
    LightboxComponent.prototype._registerImageLoadingEvent = function () {
        var _this = this;
        var preloader = new Image();
        preloader.onload = function () {
            _this._onLoadImageSuccess();
        };
        var src = this.album[this.currentImageIndex].src;
        preloader.src = this._sanitizer.sanitize(core_1.SecurityContext.URL, src);
    };
    /**
     * Fire when the image is loaded
     */
    LightboxComponent.prototype._onLoadImageSuccess = function () {
        if (!this.options.disableKeyboardNav) {
            // unbind keyboard event during transition
            this._disableKeyboardNav();
        }
        var imageHeight;
        var imageWidth;
        var maxImageHeight;
        var maxImageWidth;
        var windowHeight;
        var windowWidth;
        var naturalImageWidth;
        var naturalImageHeight;
        // set default width and height of image to be its natural
        imageWidth = naturalImageWidth = this._imageElem.nativeElement.naturalWidth;
        imageHeight = naturalImageHeight = this._imageElem.nativeElement.naturalHeight;
        if (this.options.fitImageInViewPort) {
            windowWidth = this._windowRef.innerWidth;
            windowHeight = this._windowRef.innerHeight;
            maxImageWidth = windowWidth - this._cssValue.containerLeftPadding -
                this._cssValue.containerRightPadding - this._cssValue.imageBorderWidthLeft -
                this._cssValue.imageBorderWidthRight - 20;
            maxImageHeight = windowHeight - this._cssValue.containerTopPadding -
                this._cssValue.containerTopPadding - this._cssValue.imageBorderWidthTop -
                this._cssValue.imageBorderWidthBottom - 120;
            if (naturalImageWidth > maxImageWidth || naturalImageHeight > maxImageHeight) {
                if ((naturalImageWidth / maxImageWidth) > (naturalImageHeight / maxImageHeight)) {
                    imageWidth = maxImageWidth;
                    imageHeight = Math.round(naturalImageHeight / (naturalImageWidth / imageWidth));
                }
                else {
                    imageHeight = maxImageHeight;
                    imageWidth = Math.round(naturalImageWidth / (naturalImageHeight / imageHeight));
                }
            }
            this._rendererRef.setStyle(this._imageElem.nativeElement, 'width', imageWidth + "px");
            this._rendererRef.setStyle(this._imageElem.nativeElement, 'height', imageHeight + "px");
        }
        this._sizeContainer(imageWidth, imageHeight);
        if (this.options.centerVertically) {
            this._centerVertically(imageWidth, imageHeight);
        }
    };
    LightboxComponent.prototype._centerVertically = function (imageWidth, imageHeight) {
        var scrollOffset = this._documentRef.documentElement.scrollTop;
        var windowHeight = this._windowRef.innerHeight;
        var viewOffset = windowHeight / 2 - imageHeight / 2;
        var topDistance = scrollOffset + viewOffset;
        this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'top', topDistance + "px");
    };
    LightboxComponent.prototype._sizeContainer = function (imageWidth, imageHeight) {
        var _this = this;
        var oldWidth = this._outerContainerElem.nativeElement.offsetWidth;
        var oldHeight = this._outerContainerElem.nativeElement.offsetHeight;
        var newWidth = imageWidth + this._cssValue.containerRightPadding + this._cssValue.containerLeftPadding +
            this._cssValue.imageBorderWidthLeft + this._cssValue.imageBorderWidthRight;
        var newHeight = imageHeight + this._cssValue.containerTopPadding + this._cssValue.containerBottomPadding +
            this._cssValue.imageBorderWidthTop + this._cssValue.imageBorderWidthBottom;
        // make sure that distances are large enough for transitionend event to be fired, at least 5px.
        if (Math.abs(oldWidth - newWidth) + Math.abs(oldHeight - newHeight) > 5) {
            this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'width', newWidth + "px");
            this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'height', newHeight + "px");
            // bind resize event to outer container
            // use enableTransition to prevent infinite loader
            if (this.options.enableTransition) {
                this._event.transitions = [];
                ['transitionend', 'webkitTransitionEnd', 'oTransitionEnd', 'MSTransitionEnd'].forEach(function (eventName) {
                    _this._event.transitions.push(_this._rendererRef.listen(_this._outerContainerElem.nativeElement, eventName, function (event) {
                        if (event.target === event.currentTarget) {
                            _this._postResize(newWidth, newHeight);
                        }
                    }));
                });
            }
            else {
                this._postResize(newWidth, newHeight);
            }
        }
        else {
            this._postResize(newWidth, newHeight);
        }
    };
    LightboxComponent.prototype._postResize = function (newWidth, newHeight) {
        // unbind resize event
        if (Array.isArray(this._event.transitions)) {
            this._event.transitions.forEach(function (eventHandler) {
                eventHandler();
            });
            this._event.transitions = [];
        }
        this._rendererRef.setStyle(this._dataContainerElem.nativeElement, 'width', newWidth + "px");
        this._showImage();
    };
    LightboxComponent.prototype._showImage = function () {
        this.ui.showReloader = false;
        this._updateNav();
        this._updateDetails();
        if (!this.options.disableKeyboardNav) {
            this._enableKeyboardNav();
        }
    };
    LightboxComponent.prototype._prepareComponent = function () {
        var _this = this;
        // add css3 animation
        this._addCssAnimation();
        // position the image according to user's option
        this._positionLightBox();
        // update controls visibility on next view generation
        setTimeout(function () {
            _this.ui.showZoomButton = _this.options.showZoom;
            _this.ui.showRotateButton = _this.options.showRotate;
        }, 0);
    };
    LightboxComponent.prototype._positionLightBox = function () {
        // @see https://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
        var top = (this._windowRef.pageYOffset || this._documentRef.documentElement.scrollTop) +
            this.options.positionFromTop;
        var left = this._windowRef.pageXOffset || this._documentRef.documentElement.scrollLeft;
        if (!this.options.centerVertically) {
            this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'top', top + "px");
        }
        this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'left', left + "px");
        this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'display', 'block');
        // disable scrolling of the page while open
        if (this.options.disableScrolling) {
            this._rendererRef.addClass(this._documentRef.documentElement, 'lb-disable-scrolling');
        }
    };
    /**
     * addCssAnimation add css3 classes for animate lightbox
     */
    LightboxComponent.prototype._addCssAnimation = function () {
        var resizeDuration = this.options.resizeDuration;
        var fadeDuration = this.options.fadeDuration;
        this._rendererRef.setStyle(this._lightboxElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._lightboxElem.nativeElement, 'animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._outerContainerElem.nativeElement, '-webkit-transition-duration', resizeDuration + "s");
        this._rendererRef.setStyle(this._outerContainerElem.nativeElement, 'transition-duration', resizeDuration + "s");
        this._rendererRef.setStyle(this._dataContainerElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._dataContainerElem.nativeElement, 'animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._imageElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._imageElem.nativeElement, 'animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._captionElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._captionElem.nativeElement, 'animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._numberElem.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._numberElem.nativeElement, 'animation-duration', fadeDuration + "s");
    };
    LightboxComponent.prototype._end = function () {
        var _this = this;
        this.ui.classList = 'lightbox animation fadeOut';
        if (this.options.disableScrolling) {
            this._rendererRef.removeClass(this._documentRef.documentElement, 'lb-disable-scrolling');
        }
        setTimeout(function () {
            _this.cmpRef.destroy();
        }, this.options.fadeDuration * 1000);
    };
    LightboxComponent.prototype._updateDetails = function () {
        // update the caption
        if (typeof this.album[this.currentImageIndex].caption !== 'undefined' &&
            this.album[this.currentImageIndex].caption !== '') {
            this.ui.showCaption = true;
        }
        // update the page number if user choose to do so
        // does not perform numbering the page if the
        // array length in album <= 1
        if (this.album.length > 1 && this.options.showImageNumberLabel) {
            this.ui.showPageNumber = true;
            this.content.pageNumber = this._albumLabel();
        }
    };
    LightboxComponent.prototype._albumLabel = function () {
        // due to {this.currentImageIndex} is set from 0 to {this.album.length} - 1
        return this.options.albumLabel.replace(/%1/g, Number(this.currentImageIndex + 1)).replace(/%2/g, this.album.length);
    };
    LightboxComponent.prototype._changeImage = function (newIndex) {
        this._resetImage();
        this.currentImageIndex = newIndex;
        this._hideImage();
        this._registerImageLoadingEvent();
        this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CHANGE_PAGE, data: newIndex });
    };
    LightboxComponent.prototype._hideImage = function () {
        this.ui.showReloader = true;
        this.ui.showArrowNav = false;
        this.ui.showLeftArrow = false;
        this.ui.showRightArrow = false;
        this.ui.showPageNumber = false;
        this.ui.showCaption = false;
    };
    LightboxComponent.prototype._updateNav = function () {
        var alwaysShowNav = false;
        // check to see the browser support touch event
        try {
            this._documentRef.createEvent('TouchEvent');
            alwaysShowNav = (this.options.alwaysShowNavOnTouchDevices) ? true : false;
        }
        catch (e) {
            // noop
        }
        // initially show the arrow nav
        // which is the parent of both left and right nav
        this._showArrowNav();
        if (this.album.length > 1) {
            if (this.options.wrapAround) {
                if (alwaysShowNav) {
                    // alternatives this.$lightbox.find('.lb-prev, .lb-next').css('opacity', '1');
                    this._rendererRef.setStyle(this._leftArrowElem.nativeElement, 'opacity', '1');
                    this._rendererRef.setStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
                }
                // alternatives this.$lightbox.find('.lb-prev, .lb-next').show();
                this._showLeftArrowNav();
                this._showRightArrowNav();
            }
            else {
                if (this.currentImageIndex > 0) {
                    // alternatives this.$lightbox.find('.lb-prev').show();
                    this._showLeftArrowNav();
                    if (alwaysShowNav) {
                        // alternatives this.$lightbox.find('.lb-prev').css('opacity', '1');
                        this._rendererRef.setStyle(this._leftArrowElem.nativeElement, 'opacity', '1');
                    }
                }
                if (this.currentImageIndex < this.album.length - 1) {
                    // alternatives this.$lightbox.find('.lb-next').show();
                    this._showRightArrowNav();
                    if (alwaysShowNav) {
                        // alternatives this.$lightbox.find('.lb-next').css('opacity', '1');
                        this._rendererRef.setStyle(this._rightArrowElem.nativeElement, 'opacity', '1');
                    }
                }
            }
        }
    };
    LightboxComponent.prototype._showLeftArrowNav = function () {
        this.ui.showLeftArrow = true;
    };
    LightboxComponent.prototype._showRightArrowNav = function () {
        this.ui.showRightArrow = true;
    };
    LightboxComponent.prototype._showArrowNav = function () {
        this.ui.showArrowNav = (this.album.length !== 1);
    };
    LightboxComponent.prototype._enableKeyboardNav = function () {
        var _this = this;
        this._event.keyup = this._rendererRef.listen('document', 'keyup', function (event) {
            _this._keyboardAction(event);
        });
    };
    LightboxComponent.prototype._disableKeyboardNav = function () {
        if (this._event.keyup) {
            this._event.keyup();
        }
    };
    LightboxComponent.prototype._keyboardAction = function ($event) {
        var KEYCODE_ESC = 27;
        var KEYCODE_LEFTARROW = 37;
        var KEYCODE_RIGHTARROW = 39;
        var keycode = $event.keyCode;
        var key = String.fromCharCode(keycode).toLowerCase();
        if (keycode === KEYCODE_ESC || key.match(/x|o|c/)) {
            this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE, data: null });
        }
        else if (key === 'p' || keycode === KEYCODE_LEFTARROW) {
            if (this.currentImageIndex !== 0) {
                this._changeImage(this.currentImageIndex - 1);
            }
            else if (this.options.wrapAround && this.album.length > 1) {
                this._changeImage(this.album.length - 1);
            }
        }
        else if (key === 'n' || keycode === KEYCODE_RIGHTARROW) {
            if (this.currentImageIndex !== this.album.length - 1) {
                this._changeImage(this.currentImageIndex + 1);
            }
            else if (this.options.wrapAround && this.album.length > 1) {
                this._changeImage(0);
            }
        }
    };
    LightboxComponent.prototype._getCssStyleValue = function (elem, propertyName) {
        return parseFloat(this._windowRef
            .getComputedStyle(elem.nativeElement, null)
            .getPropertyValue(propertyName));
    };
    LightboxComponent.prototype._onReceivedEvent = function (event) {
        switch (event.id) {
            case lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE:
                this._end();
                break;
            default:
                break;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], LightboxComponent.prototype, "album", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], LightboxComponent.prototype, "currentImageIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LightboxComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LightboxComponent.prototype, "cmpRef", void 0);
    __decorate([
        core_1.ViewChild('outerContainer', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_outerContainerElem", void 0);
    __decorate([
        core_1.ViewChild('container', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_containerElem", void 0);
    __decorate([
        core_1.ViewChild('leftArrow', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_leftArrowElem", void 0);
    __decorate([
        core_1.ViewChild('rightArrow', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_rightArrowElem", void 0);
    __decorate([
        core_1.ViewChild('navArrow', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_navArrowElem", void 0);
    __decorate([
        core_1.ViewChild('dataContainer', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_dataContainerElem", void 0);
    __decorate([
        core_1.ViewChild('image', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_imageElem", void 0);
    __decorate([
        core_1.ViewChild('caption', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_captionElem", void 0);
    __decorate([
        core_1.ViewChild('number', { static: false }),
        __metadata("design:type", core_1.ElementRef)
    ], LightboxComponent.prototype, "_numberElem", void 0);
    LightboxComponent = __decorate([ __param(6, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2,
            lightbox_event_service_1.LightboxEvent,
            core_1.ElementRef,
            lightbox_event_service_1.LightboxWindowRef,
            platform_browser_1.DomSanitizer,
            Document])
    ], LightboxComponent);
LightboxComponent.ɵfac = function LightboxComponent_Factory(t) { return new (t || LightboxComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LightboxEvent), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LightboxWindowRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc2.DomSanitizer), ɵngcc0.ɵɵdirectiveInject(common_1.DOCUMENT)); };
LightboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LightboxComponent, selectors: [["", "lb-content", ""]], viewQuery: function LightboxComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, true);
        ɵngcc0.ɵɵviewQuery(_c1, true);
        ɵngcc0.ɵɵviewQuery(_c2, true);
        ɵngcc0.ɵɵviewQuery(_c3, true);
        ɵngcc0.ɵɵviewQuery(_c4, true);
        ɵngcc0.ɵɵviewQuery(_c5, true);
        ɵngcc0.ɵɵviewQuery(_c6, true);
        ɵngcc0.ɵɵviewQuery(_c7, true);
        ɵngcc0.ɵɵviewQuery(_c8, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._outerContainerElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._containerElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._leftArrowElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._rightArrowElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._navArrowElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._dataContainerElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._imageElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._captionElem = _t.first);
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx._numberElem = _t.first);
    } }, hostVars: 2, hostBindings: function LightboxComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_click_HostBindingHandler($event) { return ctx.close($event); });
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.ui.classList);
    } }, inputs: { options: "options", album: "album", currentImageIndex: "currentImageIndex", cmpRef: "cmpRef" }, attrs: _c9, decls: 32, vars: 13, consts: [["id", "outerContainer", 1, "lb-outerContainer", "transition"], ["outerContainer", ""], ["id", "container", 1, "lb-container"], ["container", ""], ["id", "image", 1, "lb-image", "animation", "fadeIn", 3, "src", "hidden"], ["image", ""], [1, "lb-nav", 3, "hidden"], ["navArrow", ""], [1, "lb-prev", 3, "hidden", "click"], ["leftArrow", ""], [1, "lb-next", 3, "hidden", "click"], ["rightArrow", ""], [1, "lb-loader", 3, "hidden", "click"], [1, "lb-cancel"], [1, "lb-dataContainer", 3, "hidden"], ["dataContainer", ""], [1, "lb-data"], [1, "lb-details"], [1, "lb-caption", "animation", "fadeIn", 3, "hidden", "innerHtml"], ["caption", ""], [1, "lb-number", "animation", "fadeIn", 3, "hidden"], ["number", ""], [1, "lb-controlContainer"], [1, "lb-closeContainer"], [1, "lb-close", 3, "click"], [1, "lb-turnContainer", 3, "hidden"], [1, "lb-turnLeft", 3, "click"], [1, "lb-turnRight", 3, "click"], [1, "lb-zoomContainer", 3, "hidden"], [1, "lb-zoomOut", 3, "click"], [1, "lb-zoomIn", 3, "click"]], template: function LightboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0, 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2, 3);
        ɵngcc0.ɵɵelement(4, "img", 4, 5);
        ɵngcc0.ɵɵelementStart(6, "div", 6, 7);
        ɵngcc0.ɵɵelementStart(8, "a", 8, 9);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_8_listener() { return ctx.prevImage(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(10, "a", 10, 11);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_10_listener() { return ctx.nextImage(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(12, "div", 12);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_div_click_12_listener($event) { return ctx.close($event); });
        ɵngcc0.ɵɵelement(13, "a", 13);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(14, "div", 14, 15);
        ɵngcc0.ɵɵelementStart(16, "div", 16);
        ɵngcc0.ɵɵelementStart(17, "div", 17);
        ɵngcc0.ɵɵelement(18, "span", 18, 19);
        ɵngcc0.ɵɵelementStart(20, "span", 20, 21);
        ɵngcc0.ɵɵtext(22);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(23, "div", 22);
        ɵngcc0.ɵɵelementStart(24, "div", 23);
        ɵngcc0.ɵɵelementStart(25, "a", 24);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_25_listener($event) { return ctx.close($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(26, "div", 25);
        ɵngcc0.ɵɵelementStart(27, "a", 26);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_27_listener($event) { return ctx.control($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(28, "a", 27);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_28_listener($event) { return ctx.control($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(29, "div", 28);
        ɵngcc0.ɵɵelementStart(30, "a", 29);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_30_listener($event) { return ctx.control($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(31, "a", 30);
        ɵngcc0.ɵɵlistener("click", function LightboxComponent_Template_a_click_31_listener($event) { return ctx.control($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("src", ctx.album[ctx.currentImageIndex].src, ɵngcc0.ɵɵsanitizeUrl)("hidden", ctx.ui.showReloader);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showArrowNav);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showLeftArrow);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showRightArrow);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showReloader);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", ctx.ui.showReloader);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showCaption)("innerHtml", ctx.album[ctx.currentImageIndex].caption, ɵngcc0.ɵɵsanitizeHtml);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showPageNumber);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.content.pageNumber);
        ɵngcc0.ɵɵadvance(4);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showRotateButton);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("hidden", !ctx.ui.showZoomButton);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxComponent, [{
        type: core_1.Component,
        args: [{
                template: "\n    <div class=\"lb-outerContainer transition\" #outerContainer id=\"outerContainer\">\n      <div class=\"lb-container\" #container id=\"container\">\n        <img class=\"lb-image\"\n             id=\"image\"\n             [src]=\"album[currentImageIndex].src\"\n             class=\"lb-image animation fadeIn\"\n             [hidden]=\"ui.showReloader\"\n             #image>\n        <div class=\"lb-nav\" [hidden]=\"!ui.showArrowNav\" #navArrow>\n          <a class=\"lb-prev\" [hidden]=\"!ui.showLeftArrow\" (click)=\"prevImage()\" #leftArrow></a>\n          <a class=\"lb-next\" [hidden]=\"!ui.showRightArrow\" (click)=\"nextImage()\" #rightArrow></a>\n        </div>\n        <div class=\"lb-loader\" [hidden]=\"!ui.showReloader\" (click)=\"close($event)\">\n          <a class=\"lb-cancel\"></a>\n        </div>\n      </div>\n    </div>\n    <div class=\"lb-dataContainer\" [hidden]=\"ui.showReloader\" #dataContainer>\n      <div class=\"lb-data\">\n        <div class=\"lb-details\">\n          <span class=\"lb-caption animation fadeIn\" [hidden]=\"!ui.showCaption\" [innerHtml]=\"album[currentImageIndex].caption\" #caption>\n          </span>\n          <span class=\"lb-number animation fadeIn\" [hidden]=\"!ui.showPageNumber\" #number>{{ content.pageNumber }}</span>\n        </div>\n        <div class=\"lb-controlContainer\">\n          <div class=\"lb-closeContainer\">\n            <a class=\"lb-close\" (click)=\"close($event)\"></a>\n          </div>\n          <div class=\"lb-turnContainer\" [hidden]=\"!ui.showRotateButton\">\n            <a class=\"lb-turnLeft\" (click)=\"control($event)\"></a>\n            <a class=\"lb-turnRight\" (click)=\"control($event)\"></a>\n          </div>\n          <div class=\"lb-zoomContainer\" [hidden]=\"!ui.showZoomButton\">\n            <a class=\"lb-zoomOut\" (click)=\"control($event)\"></a>\n            <a class=\"lb-zoomIn\" (click)=\"control($event)\"></a>\n          </div>\n        </div>\n      </div>\n    </div>",
                selector: '[lb-content]',
                host: {
                    '(click)': 'close($event)',
                    '[class]': 'ui.classList'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.LightboxEvent }, { type: ɵngcc0.ElementRef }, { type: ɵngcc1.LightboxWindowRef }, { type: ɵngcc2.DomSanitizer }, { type: Document, decorators: [{
                type: core_1.Inject,
                args: [common_1.DOCUMENT]
            }] }]; }, { options: [{
            type: core_1.Input
        }], album: [{
            type: core_1.Input
        }], currentImageIndex: [{
            type: core_1.Input
        }], cmpRef: [{
            type: core_1.Input
        }], _outerContainerElem: [{
            type: core_1.ViewChild,
            args: ['outerContainer', { static: false }]
        }], _containerElem: [{
            type: core_1.ViewChild,
            args: ['container', { static: false }]
        }], _leftArrowElem: [{
            type: core_1.ViewChild,
            args: ['leftArrow', { static: false }]
        }], _rightArrowElem: [{
            type: core_1.ViewChild,
            args: ['rightArrow', { static: false }]
        }], _navArrowElem: [{
            type: core_1.ViewChild,
            args: ['navArrow', { static: false }]
        }], _dataContainerElem: [{
            type: core_1.ViewChild,
            args: ['dataContainer', { static: false }]
        }], _imageElem: [{
            type: core_1.ViewChild,
            args: ['image', { static: false }]
        }], _captionElem: [{
            type: core_1.ViewChild,
            args: ['caption', { static: false }]
        }], _numberElem: [{
            type: core_1.ViewChild,
            args: ['number', { static: false }]
        }] }); })();
    return LightboxComponent;
}());
exports.LightboxComponent = LightboxComponent;

//# sourceMappingURL=lightbox.component.js.map

/***/ }),

/***/ "VlMW":
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-config.service.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ɵngcc0 = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var LightboxConfig = /** @class */ (function () {
    function LightboxConfig() {
        this.fadeDuration = 0.7;
        this.resizeDuration = 0.5;
        this.fitImageInViewPort = true;
        this.positionFromTop = 20;
        this.showImageNumberLabel = false;
        this.alwaysShowNavOnTouchDevices = false;
        this.wrapAround = false;
        this.disableKeyboardNav = false;
        this.disableScrolling = false;
        this.centerVertically = false;
        this.enableTransition = true;
        this.albumLabel = 'Image %1 of %2';
        this.showZoom = false;
        this.showRotate = false;
        this.containerElementResolver = function (documentRef) { return documentRef.querySelector('body'); };
    }
    LightboxConfig = __decorate([ __metadata("design:paramtypes", [])
    ], LightboxConfig);
LightboxConfig.ɵfac = function LightboxConfig_Factory(t) { return new (t || LightboxConfig)(); };
LightboxConfig.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: LightboxConfig, factory: function (t) { return LightboxConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxConfig, [{
        type: core_1.Injectable
    }], function () { return []; }, null); })();
    return LightboxConfig;
}());
exports.LightboxConfig = LightboxConfig;

//# sourceMappingURL=lightbox-config.service.js.map

/***/ }),

/***/ "X33d":
/*!**********************************************************************!*\
  !*** ./src/app/maindashboard/totalrevenue/totalrevenue.component.ts ***!
  \**********************************************************************/
/*! exports provided: TotalrevenueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalrevenueComponent", function() { return TotalrevenueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class TotalrevenueComponent {
    constructor() { }
    ngOnInit() {
    }
}
TotalrevenueComponent.ɵfac = function TotalrevenueComponent_Factory(t) { return new (t || TotalrevenueComponent)(); };
TotalrevenueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotalrevenueComponent, selectors: [["app-totalrevenue"]], decls: 11, vars: 3, consts: [[1, "total-reven"], ["src", "../assets/images/ic-arrow-narrow-up.svg", "alt", ""]], template: function TotalrevenueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "$2,253,258");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2.3% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "than last year");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "Total Revenue"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3RhbHJldmVudWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TotalrevenueComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-totalrevenue',
                templateUrl: './totalrevenue.component.html',
                styleUrls: ['./totalrevenue.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YKnz":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-overlay.component.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ɵngcc0 = __webpack_require__(/*! @angular/core */ "fXoL");
var ɵngcc1 = __webpack_require__(/*! ./lightbox-event.service */ "rhsj");

var _c0 = ["lb-overlay", ""];
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "rhsj");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var LightboxOverlayComponent = /** @class */ (function () {
    function LightboxOverlayComponent(_elemRef, _rendererRef, _lightboxEvent, _documentRef) {
        var _this = this;
        this._elemRef = _elemRef;
        this._rendererRef = _rendererRef;
        this._lightboxEvent = _lightboxEvent;
        this._documentRef = _documentRef;
        this.classList = 'lightboxOverlay animation fadeInOverlay';
        this._subscription = this._lightboxEvent.lightboxEvent$.subscribe(function (event) { return _this._onReceivedEvent(event); });
    }
    LightboxOverlayComponent.prototype.close = function () {
        // broadcast to itself and all others subscriber including the components
        this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE, data: null });
    };
    LightboxOverlayComponent.prototype.ngAfterViewInit = function () {
        var fadeDuration = this.options.fadeDuration;
        this._rendererRef.setStyle(this._elemRef.nativeElement, '-webkit-animation-duration', fadeDuration + "s");
        this._rendererRef.setStyle(this._elemRef.nativeElement, 'animation-duration', fadeDuration + "s");
        this._sizeOverlay();
    };
    LightboxOverlayComponent.prototype.onResize = function () {
        this._sizeOverlay();
    };
    LightboxOverlayComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    LightboxOverlayComponent.prototype._sizeOverlay = function () {
        var width = this._getOverlayWidth();
        var height = this._getOverlayHeight();
        this._rendererRef.setStyle(this._elemRef.nativeElement, 'width', width + "px");
        this._rendererRef.setStyle(this._elemRef.nativeElement, 'height', height + "px");
    };
    LightboxOverlayComponent.prototype._onReceivedEvent = function (event) {
        switch (event.id) {
            case lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE:
                this._end();
                break;
            default:
                break;
        }
    };
    LightboxOverlayComponent.prototype._end = function () {
        var _this = this;
        this.classList = 'lightboxOverlay animation fadeOutOverlay';
        // queue self destruction after the animation has finished
        // FIXME: not sure if there is any way better than this
        setTimeout(function () {
            _this.cmpRef.destroy();
        }, this.options.fadeDuration * 1000);
    };
    LightboxOverlayComponent.prototype._getOverlayWidth = function () {
        return Math.max(this._documentRef.body.scrollWidth, this._documentRef.body.offsetWidth, this._documentRef.documentElement.clientWidth, this._documentRef.documentElement.scrollWidth, this._documentRef.documentElement.offsetWidth);
    };
    LightboxOverlayComponent.prototype._getOverlayHeight = function () {
        return Math.max(this._documentRef.body.scrollHeight, this._documentRef.body.offsetHeight, this._documentRef.documentElement.clientHeight, this._documentRef.documentElement.scrollHeight, this._documentRef.documentElement.offsetHeight);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LightboxOverlayComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LightboxOverlayComponent.prototype, "cmpRef", void 0);
    __decorate([
        core_1.HostListener('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LightboxOverlayComponent.prototype, "close", null);
    __decorate([
        core_1.HostListener('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LightboxOverlayComponent.prototype, "onResize", null);
    LightboxOverlayComponent = __decorate([ __param(3, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer2,
            lightbox_event_service_1.LightboxEvent,
            Document])
    ], LightboxOverlayComponent);
LightboxOverlayComponent.ɵfac = function LightboxOverlayComponent_Factory(t) { return new (t || LightboxOverlayComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.LightboxEvent), ɵngcc0.ɵɵdirectiveInject(common_1.DOCUMENT)); };
LightboxOverlayComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LightboxOverlayComponent, selectors: [["", "lb-overlay", ""]], hostVars: 2, hostBindings: function LightboxOverlayComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function LightboxOverlayComponent_click_HostBindingHandler() { return ctx.close(); })("resize", function LightboxOverlayComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, ɵngcc0.ɵɵresolveWindow);
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.classList);
    } }, inputs: { options: "options", cmpRef: "cmpRef" }, attrs: _c0, decls: 0, vars: 0, template: function LightboxOverlayComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxOverlayComponent, [{
        type: core_1.Component,
        args: [{
                selector: '[lb-overlay]',
                template: '',
                host: {
                    '[class]': 'classList'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }, { type: ɵngcc1.LightboxEvent }, { type: Document, decorators: [{
                type: core_1.Inject,
                args: [common_1.DOCUMENT]
            }] }]; }, { close: [{
            type: core_1.HostListener,
            args: ['click']
        }], onResize: [{
            type: core_1.HostListener,
            args: ['window:resize']
        }], options: [{
            type: core_1.Input
        }], cmpRef: [{
            type: core_1.Input
        }] }); })();
    return LightboxOverlayComponent;
}());
exports.LightboxOverlayComponent = LightboxOverlayComponent;

//# sourceMappingURL=lightbox-overlay.component.js.map

/***/ }),

/***/ "b5fp":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox.service.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ɵngcc0 = __webpack_require__(/*! @angular/core */ "fXoL");
var ɵngcc1 = __webpack_require__(/*! ./lightbox-config.service */ "VlMW");
var ɵngcc2 = __webpack_require__(/*! ./lightbox-event.service */ "rhsj");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
var lightbox_component_1 = __webpack_require__(/*! ./lightbox.component */ "SrD1");
var lightbox_config_service_1 = __webpack_require__(/*! ./lightbox-config.service */ "VlMW");
var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "rhsj");
var lightbox_overlay_component_1 = __webpack_require__(/*! ./lightbox-overlay.component */ "YKnz");
var common_1 = __webpack_require__(/*! @angular/common */ "ofXK");
var Lightbox = /** @class */ (function () {
    function Lightbox(_componentFactoryResolver, _injector, _applicationRef, _lightboxConfig, _lightboxEvent, _documentRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
        this._applicationRef = _applicationRef;
        this._lightboxConfig = _lightboxConfig;
        this._lightboxEvent = _lightboxEvent;
        this._documentRef = _documentRef;
    }
    Lightbox.prototype.open = function (album, curIndex, options) {
        var _this = this;
        if (curIndex === void 0) { curIndex = 0; }
        if (options === void 0) { options = {}; }
        var overlayComponentRef = this._createComponent(lightbox_overlay_component_1.LightboxOverlayComponent);
        var componentRef = this._createComponent(lightbox_component_1.LightboxComponent);
        var newOptions = {};
        // broadcast open event
        this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.OPEN });
        Object.assign(newOptions, this._lightboxConfig, options);
        // attach input to lightbox
        componentRef.instance.album = album;
        componentRef.instance.currentImageIndex = curIndex;
        componentRef.instance.options = newOptions;
        componentRef.instance.cmpRef = componentRef;
        // attach input to overlay
        overlayComponentRef.instance.options = newOptions;
        overlayComponentRef.instance.cmpRef = overlayComponentRef;
        // FIXME: not sure why last event is broadcasted (which is CLOSED) and make
        // lightbox can not be opened the second time.
        // Need to timeout so that the OPEN event is set before component is initialized
        setTimeout(function () {
            _this._applicationRef.attachView(overlayComponentRef.hostView);
            _this._applicationRef.attachView(componentRef.hostView);
            overlayComponentRef.onDestroy(function () {
                _this._applicationRef.detachView(overlayComponentRef.hostView);
            });
            componentRef.onDestroy(function () {
                _this._applicationRef.detachView(componentRef.hostView);
            });
            var containerElement = newOptions.containerElementResolver(_this._documentRef);
            containerElement.appendChild(overlayComponentRef.location.nativeElement);
            containerElement.appendChild(componentRef.location.nativeElement);
        });
    };
    Lightbox.prototype.close = function () {
        if (this._lightboxEvent) {
            this._lightboxEvent.broadcastLightboxEvent({ id: lightbox_event_service_1.LIGHTBOX_EVENT.CLOSE });
        }
    };
    Lightbox.prototype._createComponent = function (ComponentClass) {
        var factory = this._componentFactoryResolver.resolveComponentFactory(ComponentClass);
        var component = factory.create(this._injector);
        return component;
    };
    Lightbox = __decorate([ __param(5, core_1.Inject(common_1.DOCUMENT)),
        __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
            core_1.Injector,
            core_1.ApplicationRef,
            lightbox_config_service_1.LightboxConfig,
            lightbox_event_service_1.LightboxEvent,
            Document])
    ], Lightbox);
Lightbox.ɵfac = function Lightbox_Factory(t) { return new (t || Lightbox)(ɵngcc0.ɵɵinject(ɵngcc0.ComponentFactoryResolver), ɵngcc0.ɵɵinject(ɵngcc0.Injector), ɵngcc0.ɵɵinject(ɵngcc0.ApplicationRef), ɵngcc0.ɵɵinject(ɵngcc1.LightboxConfig), ɵngcc0.ɵɵinject(ɵngcc2.LightboxEvent), ɵngcc0.ɵɵinject(common_1.DOCUMENT)); };
Lightbox.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: Lightbox, factory: function (t) { return Lightbox.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Lightbox, [{
        type: core_1.Injectable
    }], function () { return [{ type: ɵngcc0.ComponentFactoryResolver }, { type: ɵngcc0.Injector }, { type: ɵngcc0.ApplicationRef }, { type: ɵngcc1.LightboxConfig }, { type: ɵngcc2.LightboxEvent }, { type: Document, decorators: [{
                type: core_1.Inject,
                args: [common_1.DOCUMENT]
            }] }]; }, null); })();
    return Lightbox;
}());
exports.Lightbox = Lightbox;

//# sourceMappingURL=lightbox.service.js.map

/***/ }),

/***/ "c6UI":
/*!******************************************************************!*\
  !*** ./src/app/bootstrap/media-object/media-object.component.ts ***!
  \******************************************************************/
/*! exports provided: MediaObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaObjectComponent", function() { return MediaObjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MediaObjectComponent {
    constructor() { }
    ngOnInit() {
    }
}
MediaObjectComponent.ɵfac = function MediaObjectComponent_Factory(t) { return new (t || MediaObjectComponent)(); };
MediaObjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MediaObjectComponent, selectors: [["app-media-object"]], decls: 155, vars: 0, consts: [[1, "content-body"], [1, "container-fluid"], [1, "row", "page-titles", "mx-0"], [1, "col-sm-6", "p-md-0"], [1, "welcome-text"], [1, "mb-0"], [1, "col-sm-6", "p-md-0", "justify-content-sm-end", "mt-2", "mt-sm-0", "d-flex"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6", "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "bootstrap-media"], [1, "media"], ["width", "60", "src", "assets/images/avatar/1.jpg", "alt", "DexignZone", 1, "mr-3", "img-fluid"], [1, "media-body"], [1, "mt-0"], [1, "media", "mt-4"], ["width", "60", "src", "assets/images/avatar/7.jpg", "alt", "DexignZone", 1, "mr-3", "img-fluid"], ["width", "60", "src", "assets/images/avatar/2.jpg", "alt", "DexignZone", 1, "mr-3"], ["href", "#", 1, "pr-3"], ["width", "60", "src", "assets/images/avatar/3.jpg", "alt", "DexignZone", 1, ""], ["width", "60", "src", "assets/images/avatar/4.jpg", "alt", "DexignZone", 1, "align-self-start", "mr-3"], ["width", "60", "src", "assets/images/avatar/5.jpg", "alt", "DexignZone", 1, "align-self-center", "mr-3"], ["width", "60", "src", "assets/images/avatar/6.jpg", "alt", "DexignZone", 1, "align-self-end", "mr-3"], ["width", "60", "src", "assets/images/avatar/7.jpg", "alt", "DexignZone", 1, "ml-3"], [1, "col-lg-12"], [1, "list-unstyled"], ["width", "60", "src", "assets/images/avatar/8.jpg", "alt", "DexignZone", 1, "mr-3"], [1, "media", "my-4"], ["width", "60", "src", "assets/images/avatar/1.jpg", "alt", "DexignZone", 1, "mr-3"]], template: function MediaObjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi, welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your business dashboard template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Media Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Media Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Nesting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Media heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Align Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Top-aligned media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Align Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Center-aligned media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Align Bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Bottom-aligned media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Media object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Media list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "List-based media object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "List-based media object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "List-based media object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZWRpYS1vYmplY3QuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaObjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-media-object',
                templateUrl: './media-object.component.html',
                styleUrls: ['./media-object.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cJeh":
/*!****************************************************!*\
  !*** ./src/app/bootstrap/cards/cards.component.ts ***!
  \****************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 217, vars: 0, consts: [[1, "content-body"], [1, "container-fluid"], [1, "row", "page-titles", "mx-0"], [1, "col-sm-6", "p-md-0"], [1, "welcome-text"], [1, "mb-0"], [1, "col-sm-6", "p-md-0", "justify-content-sm-end", "mt-2", "mt-sm-0", "d-flex"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-6"], [1, "card"], [1, "card-header", "border-0", "pb-0"], [1, "card-title"], [1, "card-body"], [1, "card-text"], [1, "card-footer", "border-0", "pt-0"], [1, "card-text", "d-inline"], ["href", "javascript:void(0)", 1, "card-link", "float-right"], [1, "card-header"], [1, "card-footer", "d-sm-flex", "justify-content-between", "align-items-center"], [1, "card-footer-link", "mb-4", "mb-sm-0"], [1, "card-text", "text-dark", "d-inline"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "card", "text-center"], [1, "card-footer"], [1, "card-text", "text-dark"], [1, "card-body", "custom-tab-1"], [1, "nav", "nav-tabs", "card-body-tabs", "mb-3"], [1, "nav-item"], ["href", "javascript:void(0)", 1, "nav-link", "active"], ["href", "javascript:void(0)", 1, "nav-link"], ["href", "javascript:void(0)", 1, "nav-link", "disabled"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "btn-card"], [1, "card", "text-white", "bg-primary"], [1, "card-title", "text-white"], [1, "card-body", "mb-0"], ["href", "javascript:void(0)", 1, "btn", "bg-white", "text-primary", "btn-card"], [1, "card-footer", "bg-transparent", "border-0", "text-white"], [1, "card", "text-white", "bg-secondary"], ["href", "javascript:void(0)", 1, "btn", "bg-white", "text-secondary", "btn-card"], [1, "card", "text-white", "bg-success"], ["href", "javascript:void(0)", 1, "btn", "bg-white", "text-success", "btn-card"], [1, "card", "text-white", "bg-danger"], ["href", "javascript:void(0)", 1, "btn", "bg-white", "text-danger", "btn-card"], [1, "card", "text-white", "bg-warning"], ["href", "javascript:void(0)", 1, "btn", "bg-white", "text-warning", "btn-card"], [1, "card", "text-white", "bg-info"], ["href", "javascript:void(0)", 1, "btn", "bg-white", "text-info", "btn-card"], [1, "card", "bg-light"], ["href", "javascript:void(0)", 1, "btn", "btn-dark", "btn-card"], [1, "card-footer", "bg-transparent", "border-0"], [1, "card", "text-white", "bg-dark"], ["href", "javascript:void(0)", 1, "btn", "btn-light", "btn-card", "text-dark"], [1, "card", "mb-3"], ["src", "assets/images/card/1.png", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], ["src", "assets/images/card/2.png", "alt", "Card image cap", 1, "card-img-top", "img-fluid"], ["src", "assets/images/card/3.png", "alt", "Card image cap", 1, "card-img-bottom", "img-fluid"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi, welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your business dashboard template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Card footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Card link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "This is a wider card with supporting text and below as a natural lead-in to the additional content. This content is a little ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " bit longer. Some quick example text to build the bulk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Card Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "This is a wider card with supporting text and below as a natural lead-in to the additional content. This content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Last updateed 3 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Special title treatment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "With supporting text below as a natural lead-in to additional content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Primary card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Last updateed 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Secondary card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Last updateed 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Success card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Last updateed 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Danger card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Last updateed 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Warning card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Last updateed 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Info card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Last updateed 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Light card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Last updateed 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Dark card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Last updateed 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Last updated 3 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "He lay on his armour-like back, and if he lifted his head a little ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Card footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Card link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Card title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "This is a wider card with supporting text and below as a natural lead-in to the additional content. This content is a little");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Card footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Card link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cards',
                templateUrl: './cards.component.html',
                styleUrls: ['./cards.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "epYd":
/*!**********************************************!*\
  !*** ./src/app/general/general.component.ts ***!
  \**********************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GeneralComponent {
    constructor() { }
    ngOnInit() {
    }
}
GeneralComponent.ɵfac = function GeneralComponent_Factory(t) { return new (t || GeneralComponent)(); };
GeneralComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralComponent, selectors: [["app-general"]], decls: 2, vars: 0, template: function GeneralComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "general works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general',
                templateUrl: './general.component.html',
                styleUrls: ['./general.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "f+C7":
/*!****************************************************************************************!*\
  !*** ./src/app/general/pomanager-vendor-history/pomanager-vendor-history.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PomanagerVendorHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomanagerVendorHistoryComponent", function() { return PomanagerVendorHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sendreportdialog_sendreportdialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sendreportdialog/sendreportdialog.component */ "fi3O");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function PomanagerVendorHistoryComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PomanagerVendorHistoryComponent_tr_49_Template_input_ngModelChange_3_listener($event) { const item_r1 = ctx.$implicit; return item_r1.isSelected = $event; })("change", function PomanagerVendorHistoryComponent_tr_49_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.check(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sample Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "list_name", item_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r1.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.value, " ");
} }
class PomanagerVendorHistoryComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.selected = [''];
        this.selectreports = [
            { value: 'Vendor ScoreCard', viewValue: 'Vendor ScoreCard' },
            { value: 'Buyer ScoreCard', viewValue: 'Buyer ScoreCard' },
            { value: 'Commodity ScoreCard', viewValue: 'Commodity ScoreCard' },
            { value: 'Plant ScoreCard', viewValue: 'Plant ScoreCard' },
            { value: 'Material ScoreCard', viewValue: 'Material ScoreCard' },
            { value: 'Mapout ScoreCard', viewValue: 'Mapout ScoreCard' },
            { value: 'Total Score Line', viewValue: 'Total Score Line' },
            { value: 'OTD Detail Report', viewValue: 'OTD Detail Report' },
            { value: 'NCR Detail Report', viewValue: 'NCR Detail Report' },
            { value: 'PPV Detail Report', viewValue: 'PPV Detail Report' },
            { value: 'LTA Detail Report', viewValue: 'LTA Detail Report' },
            { value: 'Summary Report', viewValue: 'Summary Report' },
            { value: 'Color Zone Pie', viewValue: 'Color Zone Pie' },
            { value: 'OTD% and Score Line', viewValue: 'OTD% and Score Line' },
            { value: 'NCR% and Score Line', viewValue: 'NCR% and Score Line' },
            { value: 'PPV% and Score Line', viewValue: 'PPV% and Score Line' },
            { value: 'LTA% and Score Line', viewValue: 'LTA% and Score Line' },
            { value: 'Total Score Data', viewValue: 'Total Score Data' },
        ];
        this.title = 'Compare';
        this.masterSelected = false;
        this.checklist = [
            { id: 0, value: '', isSelected: false },
            { id: 1, value: '', isSelected: true },
            { id: 2, value: '', isSelected: false },
            { id: 3, value: '', isSelected: false },
            { id: 4, value: '', isSelected: false },
            { id: 5, value: '', isSelected: false },
            { id: 6, value: '', isSelected: false },
            { id: 8, value: '', isSelected: false },
            { id: 9, value: '', isSelected: false },
            { id: 10, value: '', isSelected: false },
            { id: 11, value: '', isSelected: false },
            { id: 12, value: '', isSelected: false },
            { id: 13, value: '', isSelected: false },
            { id: 14, value: '', isSelected: false },
            { id: 15, value: '', isSelected: false },
            { id: 16, value: '', isSelected: false },
            { id: 17, value: '', isSelected: false },
            { id: 18, value: '', isSelected: false },
            { id: 19, value: '', isSelected: false },
            { id: 20, value: '', isSelected: false },
        ];
        // this.getCheckedItemList();
    }
    openDialog() {
        this.dialog.open(_sendreportdialog_sendreportdialog_component__WEBPACK_IMPORTED_MODULE_1__["SendreportdialogComponent"]);
    }
    // The master checkbox will check/ uncheck all items
    checkUncheckAll() {
        for (var i = 0; i < this.checklist.length; i++) {
            this.checklist[i].isSelected = this.masterSelected;
        }
        this.getCheckedItemList();
    }
    // Check All Checkbox Checked
    isAllSelected() {
        this.masterSelected = this.checklist.every(function (item) {
            return item.isSelected == true;
        });
        this.getCheckedItemList();
    }
    check(id) {
        return this.checklist[id].isSelected = true;
    }
    // Get List of Checked Items
    getCheckedItemList() {
        this.checkedList = [];
        for (var i = 0; i < this.checklist.length; i++) {
            if (this.checklist[i].isSelected)
                this.checkedList.push(this.checklist[i]);
        }
        this.checkedList = JSON.stringify(this.checkedList);
    }
    ngOnInit() {
    }
}
PomanagerVendorHistoryComponent.ɵfac = function PomanagerVendorHistoryComponent_Factory(t) { return new (t || PomanagerVendorHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
PomanagerVendorHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomanagerVendorHistoryComponent, selectors: [["app-pomanager-vendor-history"]], inputs: { subtitle: "subtitle" }, decls: 106, vars: 2, consts: [[1, "row"], [1, "col-lg-12"], [1, "profile", "card", "card-body", "px-3", "pt-3", "pb-0"], [1, "profile-head"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "col-12"], [1, "profile-name", "px-3", "pt-2"], [1, "mb-0", "pro-name", "uer-font", "pb-0"], [1, "col-xl-6", "col-lg-6", "col-md-6", "col-sm-12", "col-12", "deliver-nav", "ml-auto"], [1, "px-0", "pb-3"], [1, "col-md-3"], [1, "pb-0", "pt-3"], [1, "grey-bg", "mt-1"], [1, "mb-0", "grey-h2", "pt-3", "text-center"], [1, "pro-form"], ["id", "style-2", 1, "col-xl-12", "col-lg-12", "pl-0", "pr-4", "vendorscorecard-table"], ["datatable", "", 1, "row-border", "hover", "tab-top-0", "pl-0"], [1, "ex-whi", 2, "width", "200px", "padding", "0px", "padding-right", "0px !important"], [1, "list-group-item", 2, "border", "0px", "padding-left", "39px"], ["type", "checkbox", "name", "list_name", "value", "m1", 3, "ngModel", "ngModelChange", "change"], [2, "padding-left", "15px"], [1, "ex-whi"], [1, "ex-whi", 2, "text-align", "left"], [4, "ngFor", "ngForOf"], [1, "col-md-3", "pr-0"], [1, "d-flex"], [1, "vendor-per", "pt-2", "pr-2"], [1, "form-control", "plant-select", "w-50"], ["value", ""], [1, "col-md-4"], [1, "vendor-per", "pt-2"], [1, "col-md-3", "pl-0", "pr-0"], [1, "vendor-per", "pt-2", "pl-0"], [1, "col-md-2", "ml-auto"], [1, "form-group", "mt-1"], ["type", "submit", 1, "btn", "btn-primary", 2, "border-radius", "50px", "width", "100%", "border", "0px", "white-space", "nowrap"], [2, "text-align", "left", "padding-left", "44px"], ["type", "checkbox", 3, "ngModel", "name", "value", "ngModelChange", "change"]], template: function PomanagerVendorHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PO Report Section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "PO Lines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "PO Spend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "$40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PomanagerVendorHistoryComponent_Template_input_ngModelChange_34_listener($event) { return ctx.masterSelected = $event; })("change", function PomanagerVendorHistoryComponent_Template_input_change_34_listener() { return ctx.checkUncheckAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Vendor Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Vendor Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "All Order Line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Buyer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PomanagerVendorHistoryComponent_tr_49_Template, 17, 4, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Report Sending Option:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Select One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Plant Buyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Buyer OTD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Buyer NCR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Buyer PPV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Buyer LTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Send Report to:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Select One");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Plant Buyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Buyer OTD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Buyer NCR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Buyer PPV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Buyer LTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Receiving Buffer Days:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Plant Buyer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Buyer OTD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Buyer NCR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Buyer PPV");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Buyer LTA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Send Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.checklist);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb21hbmFnZXItdmVuZG9yLWhpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomanagerVendorHistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomanager-vendor-history',
                templateUrl: './pomanager-vendor-history.component.html',
                styleUrls: ['./pomanager-vendor-history.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, { subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "iIKw":
/*!****************************************************************************!*\
  !*** ./src/app/general/pomanager-piechart/pomanager-piechart.component.ts ***!
  \****************************************************************************/
/*! exports provided: PomanagerPiechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomanagerPiechartComponent", function() { return PomanagerPiechartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



const _c0 = ["chart"];
class PomanagerPiechartComponent {
    constructor() {
        this.chartOptions = {
            series: [25, 85, 13, 35],
            chart: {
                width: 377,
                type: "pie"
            },
            labels: ["Team A", "Team B", "Team C", "Team D"],
            colors: ["#2FBF34", "#E61849", "#FFCF64", "#16E2C6"],
            responsive: [
                {
                    breakpoint: 575,
                    options: {
                        chart: {
                            width: 300
                        },
                        legend: {
                            position: "bottom",
                            show: true,
                        },
                        dataLabels: {
                            enabled: false,
                        },
                    }
                }
            ]
        };
    }
    ngOnInit() {
    }
}
PomanagerPiechartComponent.ɵfac = function PomanagerPiechartComponent_Factory(t) { return new (t || PomanagerPiechartComponent)(); };
PomanagerPiechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomanagerPiechartComponent, selectors: [["app-pomanager-piechart"]], viewQuery: function PomanagerPiechartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 6, consts: [[3, "series", "chart", "labels", "responsive", "legend", "colors"]], template: function PomanagerPiechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("labels", ctx.chartOptions.labels)("responsive", ctx.chartOptions.responsive)("legend", ctx.chartOptions.legend)("colors", ctx.chartOptions.colors);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb21hbmFnZXItcGllY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomanagerPiechartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomanager-piechart',
                templateUrl: './pomanager-piechart.component.html',
                styleUrls: ['./pomanager-piechart.component.css']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }] }); })();


/***/ }),

/***/ "k8gg":
/*!******************************************************************!*\
  !*** ./src/app/general/upload-dialog/upload-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadDialogComponent", function() { return UploadDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class UploadDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
UploadDialogComponent.ɵfac = function UploadDialogComponent_Factory(t) { return new (t || UploadDialogComponent)(); };
UploadDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadDialogComponent, selectors: [["app-upload-dialog"]], decls: 3, vars: 0, consts: [[2, "width", "400px"], ["type", "submit", 1, "btn", "btn-primary", "profi-btn", "mb-5", "mt-5", "pro-btn", 2, "height", "57px"]], template: function UploadDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upload from Computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-dialog',
                templateUrl: './upload-dialog.component.html',
                styleUrls: ['./upload-dialog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m3o8":
/*!*********************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lightbox_service_1 = __webpack_require__(/*! ./lightbox.service */ "b5fp");
exports.Lightbox = lightbox_service_1.Lightbox;
var lightbox_config_service_1 = __webpack_require__(/*! ./lightbox-config.service */ "VlMW");
exports.LightboxConfig = lightbox_config_service_1.LightboxConfig;
var lightbox_event_service_1 = __webpack_require__(/*! ./lightbox-event.service */ "rhsj");
exports.LightboxEvent = lightbox_event_service_1.LightboxEvent;
exports.LIGHTBOX_EVENT = lightbox_event_service_1.LIGHTBOX_EVENT;
var lightbox_module_1 = __webpack_require__(/*! ./lightbox.module */ "/IoE");
exports.LightboxModule = lightbox_module_1.LightboxModule;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "nbxs":
/*!**************************************************************************!*\
  !*** ./src/app/general/cancelplan-dialog/cancelplan-dialog.component.ts ***!
  \**************************************************************************/
/*! exports provided: CancelplanDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelplanDialogComponent", function() { return CancelplanDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");



class CancelplanDialogComponent {
    constructor() { }
    ngOnInit() {
    }
}
CancelplanDialogComponent.ɵfac = function CancelplanDialogComponent_Factory(t) { return new (t || CancelplanDialogComponent)(); };
CancelplanDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CancelplanDialogComponent, selectors: [["app-cancelplan-dialog"]], decls: 10, vars: 0, consts: [[2, "width", "505px"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], [1, "profi-btn-yes", "mt-4", "mb-4", "mr-3", 2, "width", "auto", "color", "#fff", "margin", "0px auto"], [1, "profi-btn-no", "mt-4", "mb-4", "pl-5", "pr-5", "ml-3", 2, "width", "auto", "margin", "0px auto"]], template: function CancelplanDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subscription Cancelled!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Your subscription to plan x has been cancelled. You may contact support for a refund. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW5jZWxwbGFuLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CancelplanDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cancelplan-dialog',
                templateUrl: './cancelplan-dialog.component.html',
                styleUrls: ['./cancelplan-dialog.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nr+7":
/*!********************************************************************!*\
  !*** ./src/app/general/generic-dialog/generic-dialog.component.ts ***!
  \********************************************************************/
/*! exports provided: GenericDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericDialogComponent", function() { return GenericDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function (a0) { return [a0]; };
class GenericDialogComponent {
    constructor() {
        this.title = 'Your Title Here';
        this.message = 'Your Message Here';
    }
    ngOnInit() {
    }
}
GenericDialogComponent.ɵfac = function GenericDialogComponent_Factory(t) { return new (t || GenericDialogComponent)(); };
GenericDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenericDialogComponent, selectors: [["app-generic-dialog"]], inputs: { title: "title" }, decls: 9, vars: 5, consts: [[2, "width", "505px", "padding-left", "10px", "padding-right", "10px"], ["mat-dialog-title", "", 1, "mb-0"], ["mat-dialog-content", "", 2, "display", "initial"], [1, "mb-0"], ["mat-dialog-actions", "", 1, "text-center"], ["mat-dialog-close", "", 1, "profi-btn-yes", 2, "width", "auto", "color", "#fff", "margin", "0px auto", 3, "routerLink"]], template: function GenericDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ok ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "../" + ctx.redirectURL));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmljLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generic-dialog',
                templateUrl: './generic-dialog.component.html',
                styleUrls: ['./generic-dialog.component.css']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "o+j7":
/*!*****************************************************************!*\
  !*** ./src/app/elements/profile/interest/interest.component.ts ***!
  \*****************************************************************/
/*! exports provided: InterestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterestComponent", function() { return InterestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function InterestComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InterestComponent_a_6_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const key_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.open(ctx_r3.galleryCol1, key_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class InterestComponent {
    constructor(_lightboxConfig, _lightbox) {
        this._lightboxConfig = _lightboxConfig;
        this._lightbox = _lightbox;
        this.galleryCol1 = [
            {
                src: "assets/images/profile/2.jpg",
                caption: "Image Caption 1",
                thumb: "assets/images/profile/2.jpg",
            },
            {
                src: "assets/images/profile/3.jpg",
                caption: "Image Caption 2",
                thumb: "assets/images/profile/3.jpg",
            },
            {
                src: "assets/images/profile/4.jpg",
                caption: "Image Caption 3",
                thumb: "assets/images/profile/4.jpg",
            },
            {
                src: "assets/images/profile/3.jpg",
                caption: "Image Caption 4",
                thumb: "assets/images/profile/3.jpg",
            },
            {
                src: "assets/images/profile/4.jpg",
                caption: "Image Caption 5",
                thumb: "assets/images/profile/4.jpg",
            },
            {
                src: "assets/images/profile/2.jpg",
                caption: "Image Caption 6",
                thumb: "assets/images/profile/2.jpg",
            }
        ];
    }
    open(_albumsArray, index) {
        this._lightbox.open(_albumsArray, index, { showZoom: false, showImageNumberLabel: true, alwaysShowNavOnTouchDevices: true, fitImageInViewPort: true, disableScrolling: true, centerVertically: true });
    }
    close() {
        this._lightbox.close();
    }
    ngOnInit() {
    }
}
InterestComponent.ɵfac = function InterestComponent_Factory(t) { return new (t || InterestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"])); };
InterestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterestComponent, selectors: [["app-interest"]], decls: 7, vars: 1, consts: [[1, "card"], [1, "card-body"], [1, "profile-interest"], [1, "text-primary", "d-inline"], [1, "row", "mt-4", "sp4"], ["class", "mb-1 col-lg-4 col-xl-4 col-sm-4 col-6", "href", "javascript:void(0);", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0);", 1, "mb-1", "col-lg-4", "col-xl-4", "col-sm-4", "col-6"], ["alt", "", 1, "img-fluid", 3, "src", "click"]], template: function InterestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InterestComponent_a_6_Template, 2, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.galleryCol1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnRlcmVzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interest',
                templateUrl: './interest.component.html',
                styleUrls: ['./interest.component.css']
            }]
    }], function () { return [{ type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["LightboxConfig"] }, { type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"] }]; }, null); })();


/***/ }),

/***/ "ossZ":
/*!*************************************************************************************!*\
  !*** ./src/app/bootstrap/datepicker/datepicker-basic/datepicker-basic.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DatepickerBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerBasicComponent", function() { return DatepickerBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class DatepickerBasicComponent {
    constructor(calendar) {
        this.calendar = calendar;
    }
    selectToday() {
        this.model = this.calendar.getToday();
    }
    ngOnInit() {
    }
}
DatepickerBasicComponent.ɵfac = function DatepickerBasicComponent_Factory(t) { return new (t || DatepickerBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"])); };
DatepickerBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatepickerBasicComponent, selectors: [["app-datepicker-basic"]], decls: 17, vars: 6, consts: [[3, "ngModel", "ngModelChange", "navigate"], ["dp", ""], [1, "btn", "btn-sm", "btn-outline-primary", "mr-2", "mb-1", 3, "click"]], template: function DatepickerBasicComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Simple datepicker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngb-datepicker", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerBasicComponent_Template_ngb_datepicker_ngModelChange_2_listener($event) { return ctx.model = $event; })("navigate", function DatepickerBasicComponent_Template_ngb_datepicker_navigate_2_listener($event) { return ctx.date = $event.next; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerBasicComponent_Template_button_click_5_listener() { return ctx.selectToday(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerBasicComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.navigateTo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "To current month");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerBasicComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.navigateTo({ year: 2021, month: 12 }); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "To December 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Month: ", ctx.date.month, ".", ctx.date.year, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 4, ctx.model), "");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRlcGlja2VyLWJhc2ljLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatepickerBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-datepicker-basic',
                templateUrl: './datepicker-basic.component.html',
                styleUrls: ['./datepicker-basic.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }]; }, null); })();


/***/ }),

/***/ "qWqM":
/*!****************************************************************************************!*\
  !*** ./src/app/general/pomanager-tablechart-two/pomanager-tablechart-two.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PomanagerTablechartTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PomanagerTablechartTwoComponent", function() { return PomanagerTablechartTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



const _c0 = ["chart"];
class PomanagerTablechartTwoComponent {
    constructor() {
        this.chartOptions = {
            series: [
                {
                    name: "Net Profit",
                    data: [44, 55, 63, 60]
                },
                {
                    name: "Revenue",
                    data: [76, 101, 87, 91]
                }
            ],
            chart: {
                type: "bar",
                height: 350
            },
            colors: ["#34B5FF", "#16E2C6"],
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "55%",
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ["transparent"]
            },
            xaxis: {
                categories: [
                    "Buyer",
                    "Buyer",
                    "Buyer",
                    "Buyer"
                ]
            },
            yaxis: {
                title: {
                    text: "$ (thousands)"
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands";
                    }
                }
            }
        };
    }
    ngOnInit() {
    }
}
PomanagerTablechartTwoComponent.ɵfac = function PomanagerTablechartTwoComponent_Factory(t) { return new (t || PomanagerTablechartTwoComponent)(); };
PomanagerTablechartTwoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PomanagerTablechartTwoComponent, selectors: [["app-pomanager-tablechart-two"]], viewQuery: function PomanagerTablechartTwoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 1, vars: 11, consts: [[3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "legend", "fill", "stroke", "tooltip", "xaxis", "colors"]], template: function PomanagerTablechartTwoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("legend", ctx.chartOptions.legend)("fill", ctx.chartOptions.fill)("stroke", ctx.chartOptions.stroke)("tooltip", ctx.chartOptions.tooltip)("xaxis", ctx.chartOptions.xaxis)("colors", ctx.chartOptions.colors);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb21hbmFnZXItdGFibGVjaGFydC10d28uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PomanagerTablechartTwoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pomanager-tablechart-two',
                templateUrl: './pomanager-tablechart-two.component.html',
                styleUrls: ['./pomanager-tablechart-two.component.css']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }] }); })();


/***/ }),

/***/ "rhsj":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-lightbox/__ivy_ngcc__/lightbox-event.service.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ɵngcc0 = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "qCKp");
var core_1 = __webpack_require__(/*! @angular/core */ "fXoL");
exports.LIGHTBOX_EVENT = {
    CHANGE_PAGE: 1,
    CLOSE: 2,
    OPEN: 3,
    ZOOM_IN: 4,
    ZOOM_OUT: 5,
    ROTATE_LEFT: 6,
    ROTATE_RIGHT: 7
};
var LightboxEvent = /** @class */ (function () {
    function LightboxEvent() {
        this._lightboxEventSource = new rxjs_1.Subject();
        this.lightboxEvent$ = this._lightboxEventSource.asObservable();
    }
    LightboxEvent.prototype.broadcastLightboxEvent = function (event) {
        this._lightboxEventSource.next(event);
    };
    LightboxEvent = __decorate([ __metadata("design:paramtypes", [])
    ], LightboxEvent);
LightboxEvent.ɵfac = function LightboxEvent_Factory(t) { return new (t || LightboxEvent)(); };
LightboxEvent.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: LightboxEvent, factory: function (t) { return LightboxEvent.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxEvent, [{
        type: core_1.Injectable
    }], function () { return []; }, null); })();
    return LightboxEvent;
}());
exports.LightboxEvent = LightboxEvent;
function getWindow() {
    return window;
}
var LightboxWindowRef = /** @class */ (function () {
    function LightboxWindowRef() {
    }
    Object.defineProperty(LightboxWindowRef.prototype, "nativeWindow", {
        get: function () {
            return getWindow();
        },
        enumerable: true,
        configurable: true
    });
LightboxWindowRef.ɵfac = function LightboxWindowRef_Factory(t) { return new (t || LightboxWindowRef)(); };
LightboxWindowRef.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: LightboxWindowRef, factory: function (t) { return LightboxWindowRef.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LightboxWindowRef, [{
        type: core_1.Injectable
    }], function () { return []; }, null); })();
    return LightboxWindowRef;
}());
exports.LightboxWindowRef = LightboxWindowRef;

//# sourceMappingURL=lightbox-event.service.js.map

/***/ }),

/***/ "uLfh":
/*!******************************************************************************!*\
  !*** ./src/app/general/reporthistorydetail/reporthistorydetail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReporthistorydetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporthistorydetailComponent", function() { return ReporthistorydetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReporthistorydetailComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReporthistorydetailComponent.ɵfac = function ReporthistorydetailComponent_Factory(t) { return new (t || ReporthistorydetailComponent)(); };
ReporthistorydetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReporthistorydetailComponent, selectors: [["app-reporthistorydetail"]], inputs: { subtitle: "subtitle" }, decls: 159, vars: 1, consts: [[1, "row"], [1, "col-lg-12"], [1, "profile", "card", "card-body", "px-3", "pt-3", "pb-0"], [1, "profile-head"], [1, "profile-name", "px-3", "pt-2"], [1, "mb-0", "pro-name", "uer-font"], [1, "pro-form", "pt-4"], [1, "col-xl-12", "col-lg-12", "pl-4", "pr-4", "manage-u", "pohistory-entrie"], ["datatable", "", 1, "row-border", "hover"], [1, "downlo-text"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-download", "ml-3", "mb-1"], ["d", "M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"], ["d", "M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"]], template: function ReporthistorydetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Time of Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Recipient's Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "21/02/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "14:00 EST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "21/02/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "14:00 EST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "21/02/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "14:00 EST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "21/02/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "14:00 EST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "21/02/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "14:00 EST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "21/02/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "14:00 EST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "21/02/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "14:00 EST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "21/02/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "14:00 EST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "21/02/2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "14:00 EST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Lorem Ipsum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Download ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
    } }, styles: [".manage-u[_ngcontent-%COMP%]   table.dataTable[_ngcontent-%COMP%] {\r\n    display: inline-table;\r\n    overflow-y: scroll !important;\r\n}\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: left !important;\r\n}\r\ntable.dataTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    text-align: left !important;\r\n}\r\ntable.dataTable[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]:not(.sorting_disabled), table.dataTable[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]:not(.sorting_disabled) {\r\n    padding-left: 12px !important;\r\n}\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_asc_disabled[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   .sorting_desc_disabled[_ngcontent-%COMP%] {\r\n    background-position: right center !important;\r\n}\r\ntable.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.dataTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 10px 18px;\r\n    border-bottom: 0px solid #111;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydGhpc3RvcnlkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJyZXBvcnRoaXN0b3J5ZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuYWdlLXUgdGFibGUuZGF0YVRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbCAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0aCwgdGFibGUuZGF0YVRhYmxlIHRoZWFkIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxufVxyXG50YWJsZS5kYXRhVGFibGUgdGJvZHkgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlLmRhdGFUYWJsZT50aGVhZD50cj50aDpub3QoLnNvcnRpbmdfZGlzYWJsZWQpLCB0YWJsZS5kYXRhVGFibGU+dGhlYWQ+dHI+dGQ6bm90KC5zb3J0aW5nX2Rpc2FibGVkKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEycHggIWltcG9ydGFudDtcclxufVxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmcsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2MsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkLCB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG50YWJsZS5kYXRhVGFibGUgdGhlYWQgdGgsIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgIzExMTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReporthistorydetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reporthistorydetail',
                templateUrl: './reporthistorydetail.component.html',
                styleUrls: ['./reporthistorydetail.component.css']
            }]
    }], function () { return []; }, { subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vKzj":
/*!**************************************************************!*\
  !*** ./src/app/bootstrap/list-group/list-group.component.ts ***!
  \**************************************************************/
/*! exports provided: ListGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupComponent", function() { return ListGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class ListGroupComponent {
    constructor() {
        this.isCollapsed = false;
    }
    ngOnInit() {
    }
}
ListGroupComponent.ɵfac = function ListGroupComponent_Factory(t) { return new (t || ListGroupComponent)(); };
ListGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListGroupComponent, selectors: [["app-list-group"]], decls: 214, vars: 2, consts: [[1, "content-body"], [1, "container-fluid"], [1, "row", "page-titles", "mx-0"], [1, "col-sm-6", "p-md-0"], [1, "welcome-text"], [1, "mb-0"], [1, "col-sm-6", "p-md-0", "justify-content-sm-end", "mt-2", "mt-sm-0", "d-flex"], [1, "breadcrumb"], [1, "breadcrumb-item"], ["href", "javascript:void(0)"], [1, "breadcrumb-item", "active"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "basic-list-group"], [1, "list-group"], [1, "list-group-item"], [1, "list-group-item", "active"], [1, "list-group-item", "disabled"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "active"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "disabled"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge", "badge-primary", "badge-pill", "text-white"], [1, "col-xl-6"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start", "active"], [1, "d-flex", "w-100", "justify-content-between"], [1, "mb-3", "text-white"], [1, "mb-1"], ["href", "javascript:void(0);", 1, "list-group-item", "list-group-item-action", "flex-column", "align-items-start"], [1, "mb-3"], [1, "text-muted"], [1, "list-group-item", "list-group-item-primary"], [1, "list-group-item", "list-group-item-secondary"], [1, "list-group-item", "list-group-item-success"], [1, "list-group-item", "list-group-item-danger"], [1, "list-group-item", "list-group-item-warning"], [1, "list-group-item", "list-group-item-info"], [1, "list-group-item", "list-group-item-light"], [1, "list-group-item", "list-group-item-dark"], [1, "col-lg-12"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-outline-primary", 3, "click"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"]], template: function ListGroupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Hi, welcome back!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Your business dashboard template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "List Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Basic List Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cras justo odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Morbi leo risus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Porta ac consectetur ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Vestibulum at eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "List Active items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cras justo odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Morbi leo risus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Porta ac consectetur ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Vestibulum at eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "List Disabled items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Cras justo odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Morbi leo risus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Porta ac consectetur ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Vestibulum at eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Links and buttons items");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Cras justo odio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Morbi leo risus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Porta ac consectetur ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Vestibulum at eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Flush");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Cras justo odio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Morbi leo risus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Porta ac consectetur ac");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Vestibulum at eros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "With badges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Cras justo odio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Dapibus ac facilisis in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Cras justo odio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Morbi leo risus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Morbi leo risus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Custom content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "List group item heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "3 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Donec id elit non mi porta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "List group item heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "3 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Donec id elit non mi porta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "List group item heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "3 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "small", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Donec id elit non mi porta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Contextual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Dapibus ac facilisis in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "This is a primary list group item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "This is a secondary list group item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "This is a success list group item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "This is a danger list group item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "This is a warning list group item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "This is a info list group item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "This is a light list group item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "This is a dark list group item ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListGroupComponent_Template_button_click_208_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](211); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Toggle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 46, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function ListGroupComponent_Template_div_ngbCollapseChange_210_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "You can collapse this card by clicking Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCollapse"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWdyb3VwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-group',
                templateUrl: './list-group.component.html',
                styleUrls: ['./list-group.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=app-innercomponentModule-poscorecard-poscorecard-module.js.map