import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {  BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);


  private URL = 'http://localhost:8000/v1.0/api'

  constructor(
    private http: HttpClient,
    private router: Router
    ){

  }


  signUp(user){
      return this.http.post<any>(this.URL + '/user', user);
    }



  SignIn(user){
    return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  }