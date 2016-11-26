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
var core_1 = require('@angular/core');
var contactus_service_1 = require('./contactus.service');
var ContactusComponent = (function () {
    function ContactusComponent(contactusService) {
        this.contactusService = contactusService;
        this.contactPeople = [];
    }
    ContactusComponent.prototype.ngOnInit = function () { this.contactPeople = this.contactusService.getContacts(); };
    ContactusComponent = __decorate([
        core_1.Component({
            selector: 'contactus',
            providers: [contactus_service_1.ContactusService],
            template: "\n\t<h2>Contact Us</h2>\n\t<div *ngFor=\"let person of contactPeople\">\n\t<p>\n\tName: {{person.name}}<br>\n\tEmail: <a href=\"mailto:{{person.email}}\">{{person.email}}</a><br>\n\tPhone: {{person.phone}}<br>\n\t</p>\n\t</div>\n\t",
            styles: [
                "\n\t\tp {\n\t\t\tcolor: #660000;\n\t\t\tfont-family: 'Arial';\n\t\t}\n\t\t"
            ]
        }), 
        __metadata('design:paramtypes', [contactus_service_1.ContactusService])
    ], ContactusComponent);
    return ContactusComponent;
}());
exports.ContactusComponent = ContactusComponent;
//# sourceMappingURL=contactus.component.js.map