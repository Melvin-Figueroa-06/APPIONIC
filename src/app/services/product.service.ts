import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {  BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../interfaces/Product';


const URL = 'http://localhost:8000/v1.0/api/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = 'http://localhost:8000/v1.0/api'
   

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  AddPro(product){
    return this.http.post<any>(this.URL + '/producto', product);
  }


  getProducts(){
    return this.http.get(URL);
  }

  getProduct(id) {
    return this.http.get('${URL}/${id}');
  }
}

  

