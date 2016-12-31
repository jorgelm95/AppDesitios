import { Injectable } from '@angular/core';
import {AngularFire,AuthProviders,AuthMethods} from 'angularfire2';
import {Router,ActivatedRoute} from '@angular/router';

@Injectable()
export class AuthServiceService {

private isAuth = true;
private authColor='red';
 private user ={}
private userInfo = {
      name: '',
      avatar: '',
      email: '',
      provider: ''
}

  constructor(private af: AngularFire, private router:Router) { 
  }

  chekSesionUser(){
      
     this.af.auth.subscribe(user => 
     {
       if (user){
         this.user = user.auth.providerData[0];
         console.log("usuaro logueado");
         
       }else{
         this.user ={};
         console.log("usuario no logueado");
       }

     }); 
  }

    loginFacebook(){
     this.af.auth.login({
       provider:AuthProviders.Facebook,
       method:AuthMethods.Redirect
     }) 
  }

  loginGoogle(){
    this.af.auth.login({
      provider:AuthProviders.Google,
       method:AuthMethods.Redirect
    })
  }

   _changeState(user: any = null) {
    if(user) {
      this.isAuth = true;
      this.authColor = 'primary';
      this.user = this._getUserInfo(user)
    }
    else {
      this.isAuth = false;
      this.authColor = 'warn';
      this.user = {};
    }
  }

   _getUserInfo(user: any): any {
    if(!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    this.userInfo =
     {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
   console.log(this.userInfo);
   return this.userInfo;
  }

  logout(){
    this.af.auth.logout();
   
  } 

}
