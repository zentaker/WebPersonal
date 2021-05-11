import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';

import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';

import { NuevoproyectoComponent } from './pages/nuevoproyecto/nuevoproyecto.component'
import { HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './components/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
  
    HomeComponent,
    UsersComponent,
    LoginComponent,

    DasboardComponent,

    NuevoproyectoComponent,
     RegistroComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
