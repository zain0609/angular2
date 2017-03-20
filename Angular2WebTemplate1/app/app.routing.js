"use strict";
const router_1 = require('@angular/router');
const dashboard_component_1 = require('./dashboard/dashboard.component');
const register_component_1 = require('./register/register.component');
const pincode_component_1 = require('./pincode/pincode.component');
const reset_component_1 = require('./reset/reset.component');
const userWindow_component_1 = require('./userWindow/userWindow.component');
const appRoutes = [
    { path: ' ', component: dashboard_component_1.Dashboard },
    { path: 'register', component: register_component_1.Register },
    { path: 'pincode', component: pincode_component_1.pincode },
    { path: 'Reset', component: reset_component_1.Reset },
    { path: 'userWindow', component: userWindow_component_1.userWindow },
    { path: ' ', redirectTo: ' /dashboard' },
    { path: '**', component: dashboard_component_1.Dashboard }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map