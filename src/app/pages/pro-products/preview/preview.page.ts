import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoService } from '../../../services/photo.service'

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  id: string;

  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(params =>{
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
    })
  }

}
