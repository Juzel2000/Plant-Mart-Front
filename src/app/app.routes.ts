import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];
