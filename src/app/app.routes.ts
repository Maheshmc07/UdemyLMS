import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { Component } from '@angular/core';
import { MycoursesComponent } from './pages/mycourses/mycourses.component';
import { authguardGuard } from './authguard.guard';


export const routes: Routes = [
{
    path:'',redirectTo:'login',
    pathMatch:'full'

},

{
    path:'login',
    component:LoginComponent
},
{
    path:'Home',
    component:LayoutComponent,
     

  
},
 { path:'Home/Mycourses', component:MycoursesComponent,canActivate: [authguardGuard],}
];
