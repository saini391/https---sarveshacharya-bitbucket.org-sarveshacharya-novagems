import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  request_url = "http://localhost/sarvesh1/";
  constructor(private http: Http) { }


  LoginUser(email: string, password: string) {

    var url = this.request_url + "loginUser?email=" + email + "&password=" + password;

    var response = this.http.get(url).map(res => res.json());

    return response;

  }

  UserSignup(name:string, username:string, email:string, password:string) {

    var url = this.request_url + "signupUser?name=" + name + "&username=" + username + "&email=" + email + "&password=" + password;
   var response = this.http.get(url).map(res => res.json());

    return response;
  }

  GetAllCompanies(access_token:string) {

    var url = this.request_url + "getAllCompanies?access_token=" + access_token;
   var response = this.http.get(url).map(res => res.json());

    return response;
  }
}
