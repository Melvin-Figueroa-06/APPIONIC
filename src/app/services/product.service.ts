import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {  BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private URL = 'http://localhost:8000/v1.0/api'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  AddPro(product){
    return this.http.post<any>(this.URL + '/producto', product);
  }


  getPro(){
    return this.http.get<any>(this.URL + '/producto');
  }
}

  

