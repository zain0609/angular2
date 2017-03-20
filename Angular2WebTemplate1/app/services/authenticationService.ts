﻿import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class AuthService {
    isLoggedin: boolean;

    constructor(private http: Http) {

    }

    loginfn(user) {
        this.isLoggedin = false;
        var headers = new Headers();
        var body = JSON.stringify({ email: user.email, passord: user.passord});

        headers.append('Content-Type', 'application / json');

        return new Promise((resolve) => {



            /*this.http.post('http://www.gruppe18.tk:8080/api/authenticate', body, { headers: headers })
                .subscribe((data) => {
                    if (data.json().success) {
                        window.localStorage.setItem('auth_key', data.json().token);
                        this.isLoggedin = true;
                    }
                    resolve(data.json())
                }
            )*/

            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            this.http.post('http://www.gruppe18.tk:8080/api/authenticate',
                JSON.stringify({ email: user.email, passord: user.passord }),
                { headers: headers })
                .map((res: Response) => res.json())
                .subscribe((res) => console.log(res.token));

        })
    }


}