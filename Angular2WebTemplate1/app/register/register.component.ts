import { Component } from '@angular/core';
import { Injectable, Inject } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import { Headers } from "@angular/http";
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../services/authenticationService';
import 'rxjs/Rx';
import * as jwt from 'jsonwebtoken';
//import { Base64 } from 'js-base64';


@Component({
    selector: 'register',
    templateUrl: './app/register/register.component.html',
    styleUrls: ['app/register/register.component.css'],
    providers: [AuthService]
})

@Injectable()

export class Register {

    registerForm: FormGroup;
    token: string;

    constructor(private http: Http, private _service: AuthService) {
        this.registerForm = new FormGroup({
            land: new FormControl(),
            email: new FormControl(),
            alder: new FormControl(),
            passord: new FormControl()
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
        var headers = new Headers();
        headers.append("newUser", "newuser" );
        // headers.append('Authorization', 'bachelor2017');
        let options = new RequestOptions({ headers: headers });           
        //var header = new Headers({ 'x-access-token': token });
        return this.http.post("http://www.gruppe18.tk:8080", options)
            .map((res: Response) => res.json())
            .subscribe(
            (res) => console.log(res.json()),
                err => {console.error(err)}
            );

    }
}