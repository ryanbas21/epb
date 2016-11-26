"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var IndexComponent = (function () {
    function IndexComponent() {
    }
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: 'in',
        template: "\n<nav class='navbar navbar-inverse'>\n<div class=\"container-fluid\">\n   <a class='navbar-brand' routerLink=\"/index\" routerLinkActive=\"active\">Home</a>\n   <a class='navbar-brand' routerLink=\"/articles\" routerLinkActive=\"inactive\">All Articles</a>\n   <a class='navbar-brand' routerLink=\"/contactus\" routerLinkActive=\"inactive\">Contact Us</a>\n   <a class='navbar-brand' routerLink=\"/disclaimer\" routerLinkActive=\"inactive\">Disclaimer</a>\n</div>\n</nav>\n  <div class='container'>\n    <div style='col-md-4 jumbotron'></div>\n    <div style='col-md-4'>\n      <index></index>\n      <sub></sub>\n      <graph></graph>\n    </div>\n    <div style='col-md-4 jumbotron'>\n</div>\n  </div>\n\n<div class='center-btn'>\n  <btn></btn>\n</div>\n\n  ",
        styles: ["\n    .center-btn {\n      margin-left: auto;\n      margin-right: auto;\n      width: 100px }"
        ]
    }),
    __metadata("design:paramtypes", [])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map