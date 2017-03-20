import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard } from './dashboard/dashboard.component'
import { Register } from './register/register.component'
import { pincode } from './pincode/pincode.component'
import { Reset } from './reset/reset.component'
import { userWindow } from './userWindow/userWindow.component'




const appRoutes: Routes = [
    { path: ' ', component: Dashboard },

    { path: 'register', component: Register },

    { path: 'pincode', component: pincode },

    { path: 'Reset', component: Reset },

    { path: 'userWindow', component: userWindow },


    { path: ' ', redirectTo: ' /dashboard' },

    { path: '**', component: Dashboard }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);