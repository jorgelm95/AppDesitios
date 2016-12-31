import { Component } from '@angular/core';
import {SitiosService} from './services/sitios.service';
import {Http,Response} from '@angular/http';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SitiosService]
})
export class AppComponent{

constructor(){

}


}
