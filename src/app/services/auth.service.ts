import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:3000';


  public loginUser(body){

    let url = 'http://localhost:3000/users/register';
    let httpOptions = {}; 
    return this.http.post(url,body, httpOptions).toPromise();
  }
}
