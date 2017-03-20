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
const core_1 = require('@angular/core');
const core_2 = require("@angular/core");
require('rxjs/Rx');
const authenticationService_1 = require('../services/authenticationService');
const router_1 = require('@angular/router');
let Dashboard = class Dashboard {
    constructor(_service, _router) {
        this._service = _service;
        this._router = _router;
        this.localUser = {
            email: '',
            passord: ''
        };
    }
    Submit() {
        this._service.loginfn(this.localUser).then((res) => {
            if (res)
                this._router.navigate(['userWindow']);
            else
                console.log(res);
        });
    }
};
Dashboard = __decorate([
    core_1.Component({
        selector: 'dashboard',
        templateUrl: '/app/dashboard/dashboard.component.html',
        styleUrls: ['/app/dashboard/dashboard.component.css'],
        providers: [authenticationService_1.AuthService]
    }),
    core_2.Injectable(), 
    __metadata('design:paramtypes', [authenticationService_1.AuthService, router_1.Router])
], Dashboard);
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.component.js.map