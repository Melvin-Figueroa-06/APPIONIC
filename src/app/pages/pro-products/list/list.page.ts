import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

photos = [];

  constructor(
    private photoService: PhotoService,
    private router: Router) { }

  ngOnInit() {
    this.photoService.getPhotos()
    .subscribe(
      res =>{
        this.photos = res;
      },
      err => console.log(err)
    )
  }

  selectedCart(id: string){
    this.router.navigate(['/preview', id]);
  }

}
