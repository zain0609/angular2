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
const http_1 = require("@angular/http");
const http_2 = require("@angular/http");
const forms_1 = require("@angular/forms");
const authenticationService_1 = require('../services/authenticationService');
require('rxjs/Rx');
//import { Base64 } from 'js-base64';
let Register = class Register {
    constructor(http, _service) {
        this.http = http;
        this._service = _service;
        this.registerForm = new forms_1.FormGroup({
            land: new forms_1.FormControl(),
            email: new forms_1.FormControl(),
            alder: new forms_1.FormControl(),
            passord: new forms_1.FormControl()
        });
        // _service.loginfn({ email: "test@test.com", passord: "123" }).then((test) => console.log(test));
        //console.log(window.localStorage.getItem('auth_key'));
    }
    whenSubmit() {
        var email = this.registerForm.value.email;
        var pass = this.registerForm.value.passord;
        var land = this.registerForm.value.land;
        var alder = this.registerForm.value.alder;
        var kjonn = "m";
        var json = { email: email, passord: pass, land: land, alder: alder, kjonn: kjonn };
        let body = JSON.stringify(json);
        //var decode = Base64.encode(dec);
        //let dec = headers + "." + json + "." + "bachelor2017";
        //var decode = encodeURI(dec);
        //var token = jwt.sign({ body }, 'bachelor2017');
        // var header = new Headers({'Content-Type': 'application/json', 'x-access-token': 'newuser' });
        var headers = new http_2.Headers();
        headers.append("newUser", "newuser");
        // headers.append('Authorization', 'bachelor2017');
        let options = new http_1.RequestOptions({ headers: headers });
        //var header = new Headers({ 'x-access-token': token });
        return this.http.post("http://www.gruppe18.tk:8080", options)
            .map((res) => res.json())
            .subscribe((res) => console.log(res.json()), err => { console.error(err); });
    }
};
Register = __decorate([
    core_1.Component({
        selector: 'register',
        templateUrl: './app/register/register.component.html',
        styleUrls: ['app/register/register.component.css'],
        providers: [authenticationService_1.AuthService]
    }),
    core_2.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, authenticationService_1.AuthService])
], Register);
exports.Register = Register;
//# sourceMappingURL=register.component.js.map