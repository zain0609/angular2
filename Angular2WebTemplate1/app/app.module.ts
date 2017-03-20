import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";


import { AppComponent }   from './app.component';
import { Dashboard } from './dashboard/dashboard.component'
import { Register } from './register/register.component'
import { pincode } from './pincode/pincode.component'
import { Reset } from './reset/reset.component'
import { userWindow } from './userWindow/userWindow.component'






import { routing } from './app.routing';

@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule, ReactiveFormsModule],
    declarations: [AppComponent, Dashboard, Register, pincode, Reset, userWindow],
    bootstrap: [AppComponent]
})

export class AppModule {}