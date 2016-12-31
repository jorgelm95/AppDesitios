import { Component, OnInit } from '@angular/core';
import{SitiosService} from '../services/sitios.service'
import {Http,Response} from '@angular/http';
import {ActivatedRoute,Params} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-site',
  templateUrl: './detail-site.component.html',
  styleUrls: ['./detail-site.component.css'],
  providers:[SitiosService]
})
export class DetailSiteComponent implements OnInit {


  constructor(private sitioService:SitiosService, 
  private route:ActivatedRoute,
  private location:Location) { }

  ngOnInit() {
  this.route.params.forEach((param:Params)=>{ 
    let placeId = param['placeId'];
    this.gedetailSite(placeId);
  })
    
}

gedetailSite(idplaceApiSite){
  this.sitioService.getDeatilSite(idplaceApiSite).subscribe(
    data =>{console.log(data),
    error => console.log(error)  
    }
  )
}

}
