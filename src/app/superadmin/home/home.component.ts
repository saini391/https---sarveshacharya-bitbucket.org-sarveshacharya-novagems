import { Component, OnInit, } from '@angular/core';

import { ApiService } from '../../services/api.service';
import {Observable} from 'rxjs/Observable';

import {Router} from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public companies : Array<any>;
  constructor(private apiService : ApiService) {
    var access_token = localStorage.getItem('access_token');
      this.apiService.GetAllCompanies(access_token).subscribe(
         data => this.companies = data.result,
        error => alert(error),
            () => console.log(this.companies) //output the json file content
      );

     
   }

replaceBac(url:string)
{
   return url.replace(/\\/g, '');
}
/*
  data => this.companies = data,
        error => alert(error),
            () => console.log(this.companies) //output the json file content
*/
  ngOnInit() {
     $(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
        });
  }

}
