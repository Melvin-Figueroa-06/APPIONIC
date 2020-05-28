import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {  BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MiperfilService {

  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);

  private URL = 'http://localhost:8000/v1.0/api'


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  getperfil(){
    return this.http.get<any>(this.URL + '/user');
  }


  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
