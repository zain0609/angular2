import { Component } from '@angular/core';
import { Injectable, Inject } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import { Headers } from "@angular/http";
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import 'rxjs/Rx';
import { AuthService } from '../services/authenticationService';
import { Router } from '@angular/router';


@Component({
    selector: 'dashboard',
    templateUrl: '/app/dashboard/dashboard.component.html',
    styleUrls: ['/app/dashboard/dashboard.component.css'],
    providers: [AuthService]
})

@Injectable()
export class Dashboard {
    localUser = {
        email: '',
        passord: ''
    }

    constructor(private _service: AuthService, private _router: Router) {

    }
    Submit() {
        this._service.loginfn(this.localUser).then((res) => {
            if (res)
                this._router.navigate(['userWindow']);
            else
                console.log(res);
        })
        
    }
}