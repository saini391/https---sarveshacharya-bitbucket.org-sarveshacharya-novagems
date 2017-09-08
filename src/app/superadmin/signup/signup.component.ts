import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  fullname = "";
  username = "";
  email = "";
  password = "";
  error = "";

  UserSignup1() {

    this.apiService.UserSignup(this.fullname, this.username, this.email, this.password).subscribe(      
      data => {
        if (data.message == "Success") {
          //this.router.navigate(['/home']);
          window.open("/home", "_self");
        }
        else if(data.message == "Failed")
        {
          this.error = data.message;
        }
        else
        {
          this.error = data.message;
        }
      }
    );
  }

  ngOnInit() {
  }

}
