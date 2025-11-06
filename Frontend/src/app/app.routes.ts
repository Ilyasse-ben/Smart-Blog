import { Routes } from '@angular/router';
import { Login } from './login/login';
import { SingUp } from './sing-up/sing-up';

export const routes: Routes = [
    {path:"sing", component:Login},
    {path:"singUp", component:SingUp},
];
