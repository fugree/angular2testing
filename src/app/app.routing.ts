import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component' ;
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component' ;
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component'  ; 

const appRoutes: Routes = [   
  //  { path: '', component: AppComponent, canActivate: [IdentityGuard] },
      { path : '' , redirectTo : "home" , pathMatch : "full"} ,
      { path : 'home' , component : HomeComponent } ,
    //   { path: '', component: AppComponent},
      { path : 'login' , component : LoginComponent } ,
      { path : 'register' , component : RegisterComponent } ,

    // otherwise redirect to home
     { path: '**', component : PagenotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

