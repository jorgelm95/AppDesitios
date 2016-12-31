import { Component } from '@angular/core';
import {SitiosService} from '../services/sitios.service';
import {Http,Response} from '@angular/http';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-busqueda-sitios',
  templateUrl: './busqueda-sitios.component.html',
  styleUrls: ['./busqueda-sitios.component.css']
})
export class BusquedaSitiosComponent  {

  private listaSitios:any;
  private placesiteId:String;
  private consulta ={
    busqueda:null
  }
  constructor(private appservice:SitiosService,
  private router:Router) { }

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
