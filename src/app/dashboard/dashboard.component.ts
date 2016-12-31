import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {AngularFire,AuthMethods,AuthProviders} from 'angularfire2'
import {SitiosService} from '../services/sitios.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[SitiosService]
  
})
export class DashboardComponent implements OnInit {

private userinfo ={};

  private listaSitios:any;
  private placesiteId:String;
  private consulta ={
    busqueda:null
  }
  constructor(private af: AngularFire, private appservice: SitiosService) {

   }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if (user)
      {
        this.userinfo = user.auth.providerData[0];
        console.log(this.userinfo);
      }else {
        console.log("usuario no loguado");
      }
    })
  }


  getSitios(){

    this.appservice.getSitios(this.consulta.busqueda).subscribe(
      data=>{this.listaSitios = data.results, console.log(data)},
      error=>{console.log(error)}
    );
  }

  goToDetailSite(placeID){

    this.appservice.getDeatilSite(placeID).subscribe(
      data=>{this.listaSitios = data.results, console.log(data)},
      error=>{console.log(error)}
    );

  }

}
