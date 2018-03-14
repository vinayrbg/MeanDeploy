webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_data_service__ = __webpack_require__("./src/app/service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__prod_prod_component__ = __webpack_require__("./src/app/prod/prod.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__prod_prod_component__["a" /* ProdComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot([
                    { path: "", component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
                    { path: "prod", component: __WEBPACK_IMPORTED_MODULE_9__prod_prod_component__["a" /* ProdComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__service_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--div class = \"grid\">\n  <div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">Products list:</div>\n  <div class=\"panel-body\">\n  <table>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Price</th>\n      <th>Quantity</th>\n      <th></th>\n      <th></th>\n      <tr *ngFor = \"let item of products\"> \n        <td>{{item._id}}</td>\n        <td>{{item.name}}</td>\n        <td>{{item.price}}</td>\n        <td>{{item.quantity}}</td>\n        <td (click) = \"deleteProduct(item._id)\"><a href=\"#\">Remove</a></td>\n        <td (click) = \"updateProduct(item._id)\"><a href=\"#\">Edit</a></td>\n      </tr>\n    </table>\n      <button class=\"btn btn-success\" routerLink = \"/prod\">Add Product</button>\n    </div>\n  </div>\n</div-->\n\n<div class=\"container\">\n    <div class=\"col-md-12\">\n     <br/><br/> <h1 style=\"margin-left:100px\">Product List</h1>\n        <table class=\"table table-bordered table-striped table-hover\">\n      <thead>\n        <tr>\n          <th class=\"text-center\">ID</th>\n          <th class=\"text-center\">Name</th>\n          <th class=\"text-center\">Price</th>\n          <th class=\"text-center\">Quantity</th>\n          <th class=\"text-center\">&nbsp;</th>\n          <th class=\"text-center\">&nbsp;</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let product of products\">\n          <td>{{ product._id }}</td>\n          <td>{{ product.name }}</td>\n          <td>{{ product.price }}</td>\n          <td>{{ product.quantity }}</td>\n          <td>\n            <button class=\"btn btn-info\"\n                          (click)=\"showEditProductForm(product)\">\n                         Edit<i class=\"fa fa-edit\"></i>\n                </button>\n            <button class=\"btn btn-danger\"\n                         (click)=\"deleteProduct(product._id)\">Remove\n                         <i class=\"fa fa-minus\"></i>\n              </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  \n    <button class=\"btn btn-success\"\n                 routerLink = \"/prod\" style=\"margin-left:800px\"><i class=\"fa fa-plus\">Add Product</i></button>\n    <br />\n    <br />\n\n    <form *ngIf=\"editProductForm\">\n        <h2>Edit Product Details</h2><br/>\n        <p>ID:        {{editedProduct._id}}</p>\n        <p>Name:      <input type=\"text\"\n                                     name=\"name\"\n                                     [(ngModel)]=\"editedProduct.name\" /></p>\n        <p>Price:     <input type=\"text\" \n                                      name=\"price\" \n                                      [(ngModel)]=\"editedProduct.price\" /></p>\n        <p>Quantity:  <input type=\"text\"\n                                    name=\"quantity\"\n                                    [(ngModel)]=\"editedProduct.quantity\" /></p>\n        <p>\n          <button type=\"button\"\n                       class=\"btn btn-primary\"\n                       (click)=\"updateProduct(editedProduct)\">Submit</button>\n          <button type=\"button\"\n                       class=\"btn btn-warning\"\n                       (click)=\"cancelEdits()\">Cancel</button>\n        </p>\n       </form>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/service/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataServices) {
        this.dataServices = dataServices;
        this.editProductForm = false;
        this.editedProduct = {};
    }
    HomeComponent.prototype.fetchData = function () {
        var _this = this;
        this.dataServices.getProduct().subscribe(function (response) { return _this.products = response; });
    };
    HomeComponent.prototype.deleteProduct = function (id) {
        var response = confirm('are you sure to delete it?');
        if (response) {
            var tasks = this.products;
            this.dataServices.deleteProd(id).subscribe(function (data) {
                console.log();
            });
        }
        this.fetchData();
    };
    HomeComponent.prototype.showEditProductForm = function (product) {
        this.editProductForm = true;
        this.editedProduct = Object(__WEBPACK_IMPORTED_MODULE_2_lodash__["clone"])(product);
    };
    HomeComponent.prototype.cancelEdits = function () {
        this.editedProduct = {};
        this.editProductForm = false;
    };
    HomeComponent.prototype.updateProduct = function (products) {
        var newTask = {
            id: products._id,
            name: products.name,
            price: products.price,
            quantity: products.quantity,
        };
        console.log(newTask);
        this.dataServices.updateProd(newTask)
            .subscribe(function (res) {
            console.log("component" + res);
        });
        this.fetchData();
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.fetchData();
        console.log("Home component");
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/prod/prod.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/prod/prod.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n    <div class=\"container\">\n        <div class=\"col-md-12\">\n            <h3>Please enter the product's details to be added:</h3>\n            <hr>\n                <form id=\"formNewProduct\" name=\"formNewProduct\" #productData =\"ngForm\" (ngSubmit)= \"addNewProduct(productData.value)\">\n                  <table>\n                    <tr><td> <label>Product Name:</label></td><td><input type=\"text\" name=\"name\" id=\"name\" [(ngModel)]=\"pname\"></td></tr>\n                    <tr><td> <label>Product Price:</label></td><td><input type=\"text\" name=\"price\" id=\"price\" [(ngModel)]=\"pprice\"></td></tr>\n                    <tr><td> <label>Product Quantity:</label></td><td><input type=\"text\" name=\"quantity\" id=\"quantity\" [(ngModel)]=\"pqty\"></td></tr><br/>\n                  </table>\n                  <input class=\"btn btn-success\" type=\"submit\" value=\"ADD\">\n                </form>\n                <hr>\n                {{message}}\n                <hr>\n            <br/><a href =\"#\" routerLink =\"/\"> Done go back</a><br/>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/prod/prod.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_data_service__ = __webpack_require__("./src/app/service/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProdComponent = /** @class */ (function () {
    function ProdComponent(dataService) {
        this.dataService = dataService;
        this.confirmationString = "Product has been added successfully";
        this.productObj = {};
        this.products = [];
    }
    ProdComponent.prototype.addNewProduct = function (product) {
        console.log(product.name + " & " + product.price + " & " + product.quantity);
        this.productObj = {
            "name": product.name,
            "price": product.price,
            "quantity": product.quantity
        };
        if (!product.name || !product.price) {
            this.message = "You have not entered the complete details, Please fill all the fields";
        }
        else {
            this.message = "Product successfully added... ";
        }
        this.dataService.addProduct(this.productObj)
            .subscribe(function (product) { console.log(product); });
    };
    //this.products.push(product)
    ProdComponent.prototype.ngOnInit = function () {
        console.log("Product Component");
    };
    ProdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-prod',
            template: __webpack_require__("./src/app/prod/prod.component.html"),
            styles: [__webpack_require__("./src/app/prod/prod.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_data_service__["a" /* DataService */]])
    ], ProdComponent);
    return ProdComponent;
}());



/***/ }),

/***/ "./src/app/service/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getProduct = function () {
        console.log("Services called");
        return this._http.get('/products').map(function (res) { return res.json(); });
    };
    DataService.prototype.addProduct = function (products) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.post('/products', JSON.stringify(products), { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService.prototype.deleteProd = function (id) {
        return this._http.delete("/products/" + id)
            .map(function (res) { return res; });
    };
    DataService.prototype.updateProd = function (products) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this._http.put("/product/" + products.id, JSON.stringify(products), { headers: headers }).map(function (res) { return res.json(); });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map