import { Component, OnInit } from '@angular/core';



import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-homeproduct',
  templateUrl: './homeproduct.page.html',
  styleUrls: ['./homeproduct.page.scss'],
})
export class HomeproductPage implements OnInit {

  products = [];

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
    this.productService.getPro()
    .subscribe(
      res => {
        this.products = res;
      },
        err => console.log(err)
    )
 
  }


  

}