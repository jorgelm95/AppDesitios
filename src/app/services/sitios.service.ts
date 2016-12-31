import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import{Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import  'rxjs/add/operator/map';

@Injectable()
export class SitiosService {

 private sitios:any;
  

  constructor(private http:Http) { 
  }


  getSitios(palabraClave){
    
    const key ="AIzaSyC1SOuGmLKxopELUsBRX1xQ0ZsTzUiC8AM";
    const url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=6.231928,-75.601167&radius=5000&types="+palabraClave+"&langaje=en&key="+key+"";
    
    return this.http.get(url).map(
      (response:Response)=> response.json())
  }

  getDeatilSite(placeIdRefenceSite){

    const key ="AIzaSyC1SOuGmLKxopELUsBRX1xQ0ZsTzUiC8AM"
    const URL ="https://maps.googleapis.com/maps/api/place/details/json?placeid="+placeIdRefenceSite+"&key="+key+""

    return this.http.get(URL).map(
    (Response=> Response.json())
    )

  }
  


  getSites(){
    const key ="AIzaSyC1SOuGmLKxopELUsBRX1xQ0ZsTzUiC8AM";
    const url="https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=6.231928,-75.601167&radius=5000&langaje=en&key="+key+"";
    
    return this.http.get(url).map(
      Response => Response.json()
    )

  }
  

}
