import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoAppComponent } from './components/todo-app/todo-app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', component: TodoAppComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

export const appRoutingModule = RouterModule.forRoot(routes);
