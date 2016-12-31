import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {AngularFireModule,AuthProviders,AuthMethods} from 'angularfire2';
import {MaterialModule} from '@angular/material';


import { AppComponent } from './app.component';
import {SitiosService} from './services/sitios.service';
import { DetailSiteComponent } from './detail-site/detail-site.component';
import { IndexComponent } from './index/index.component';
import { BusquedaSitiosComponent } from './busqueda-sitios/busqueda-sitios.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component'



const routes=[
{
  path:'',
  component:IndexComponent
},
{
  path:'sitio/:placeId',
  component:DetailSiteComponent
},
{
  path:'buscarSitios',
  component:BusquedaSitiosComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'profile/:user',
  component:UserProfileComponent
},
{
  path:'dashboard',
  component:DashboardComponent
}


]

@NgModule({
  declarations: [
    AppComponent,
    DetailSiteComponent,
    IndexComponent,
    BusquedaSitiosComponent,
    LoginComponent,
    UserProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp({
     apiKey: "AIzaSyAPR4c0uOpHzyLC8cWYH044FCqUCqqjkQo",
    authDomain: "mislugares-95.firebaseapp.com",
    databaseURL: "https://mislugares-95.firebaseio.com",
    storageBucket: "mislugares-95.appspot.com"
   },
   {
      method: AuthMethods.Redirect
   }),
   MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
