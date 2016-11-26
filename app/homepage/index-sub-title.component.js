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
var IndexSubTitleComponent = (function () {
    function IndexSubTitleComponent() {
    }
    return IndexSubTitleComponent;
}());
IndexSubTitleComponent = __decorate([
    core_1.Component({
        selector: 'sub',
        template: "\n      <div class='jumbotron'>\n        <h3 class='bottom'>STAY AHEAD OF CONSENSUS WITH THE EPB ADVISING NEWSLETTER</h3>\n        <h3 class='bottom'> FULL WEEKLY OVERVIEW OF THE US ECONOMY</h3>\n      </div>\n         ",
        styles: ["\n           .bottom {\n            margin-left: auto;\n            margin-right: auto;\n           }"
        ]
    }),
    __metadata("design:paramtypes", [])
], IndexSubTitleComponent);
exports.IndexSubTitleComponent = IndexSubTitleComponent;
//# sourceMappingURL=index-sub-title.component.js.map