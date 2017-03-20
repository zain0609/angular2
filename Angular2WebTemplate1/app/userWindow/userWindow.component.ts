import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: '../app/userWindow/userWindow.component.html'
})

export class userWindow {
    constructor(private _router: Router) {

    }

    logout() {
        window.localStorage.removeItem('auth_key');
        this._router.navigate(['Login']);
    }
}