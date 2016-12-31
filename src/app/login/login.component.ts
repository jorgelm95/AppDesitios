import { Component, OnInit } from '@angular/core';
import{AngularFire,AuthProviders,AuthMethods} from 'angularfire2';
import {ActivatedRoute,Router} from '@angular/router';
import {AuthServiceService} from '../services/auth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    AuthServiceService
  ]
})
export class LoginComponent  implements OnInit{

  private  user={};

  constructor(private af:AngularFire, private router:Router, private authService:AuthServiceService) {

   }

   ngOnInit(){
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
     this.authService.loginFacebook();
     let link = ['/dashboard']
     this.router.navigate(link);
   }

   loginGoogle(){
     this.authService.loginGoogle(); 
     let link = ['/dashboard']
     this.router.navigate(link);
   }
 
   logout(){
     this.authService.logout();
   }

   CheckSesionUser(){
      this.authService.chekSesionUser();
   }

}
