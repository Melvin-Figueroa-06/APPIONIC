import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service'
import { Router } from '@angular/router'
import { PhotoService } from '../../../services/photo.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {

  file: File;
  photoSelected: String | ArrayBuffer;

  product = {}

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  AddPro() {
    this. productService.AddPro(this.product)
    .subscribe(
      res => {
      this.router.navigate(['/homeproduct']);
      },
      err => console.log(err))
      return false;
  }
}
