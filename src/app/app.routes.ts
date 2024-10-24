import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/authguard.service';

export const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "signup",
        component: SignUpComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard]
    }
];
