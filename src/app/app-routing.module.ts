import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { UsersComponent } from './components/users/users.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';

import { NuevoproyectoComponent } from './pages/nuevoproyecto/nuevoproyecto.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UsersComponent },
  {
    path: 'admin', component: AdminComponent , children: [
      { path: 'dashboard', component: DasboardComponent },
      { path: 'nuevo', component: NuevoproyectoComponent }
      
  ] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
