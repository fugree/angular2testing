import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule } from '../../node_modules/primeng/components/datatable/datatable' ;
import { CalendarModule } from '../../node_modules/primeng/components/calendar/calendar' ;

// used to create fake backend
import { fakeBackendProvider } from './helpers/fake.backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { UpcomingManualDateComponent } from './components/opcon/upcoming-manual-date/upcoming-manual-date.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app.routing' ;
// import { IdentityGuard } from './guards/identity.guard';
//import { IdentityService } from './services/identity/identity.service';
//import { UserService } from './services/user/user.service';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/register/register.component' ;

@NgModule({
  declarations: [
    AppComponent,
    UpcomingManualDateComponent,    
    LogoComponent, 
    LoginComponent, 
    HomeComponent,
    PagenotfoundComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule , 
    CalendarModule ,
    FormsModule,
    HttpModule ,
    AppRoutingModule
  ],
  providers: [
//    IdentityGuard , 
  //  IdentityService , 
  //  UserService , 
    fakeBackendProvider , 
    MockBackend , 
    MockConnection , 
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
