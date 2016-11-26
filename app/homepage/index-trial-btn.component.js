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
var IndexTrialButton = (function () {
    function IndexTrialButton() {
        this.text = '';
    }
    IndexTrialButton.prototype.subscribed = function () {
        this.text = 'You are subscribed';
    };
    return IndexTrialButton;
}());
IndexTrialButton = __decorate([
    core_1.Component({
        selector: 'btn',
        template: "<button (click)='subscribed()' type='submit' class='btn btn-warning btn-group-lg'>Try 30 Days Free</button>\n  <h4>{{text}}</h4>",
        styles: ["\n    .center: {\n\n    }"]
    }),
    __metadata("design:paramtypes", [])
], IndexTrialButton);
exports.IndexTrialButton = IndexTrialButton;
//# sourceMappingURL=index-trial-btn.component.js.map