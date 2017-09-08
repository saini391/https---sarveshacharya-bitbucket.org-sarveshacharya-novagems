import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Observable} from 'rxjs/Observable';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  email = "";
  password = "";
  error = "";
   public router: Router;
  
  constructor(private apiService: ApiService) {

    
   }

   UserLogin()
   {
    
           this.apiService.LoginUser(this.email,this.password).subscribe(
        data => {                    
          if(data.message == "Success")
          {
            localStorage.setItem('access_token',data.result.access_token);
              //this.router.navigate(['/home']);
              window.open("/home","_self");
          }
          else
          {
              this.error = "Invalid email and password!";
          }
        }
      );
     
   }

  ngOnInit() {
    
  }

}
