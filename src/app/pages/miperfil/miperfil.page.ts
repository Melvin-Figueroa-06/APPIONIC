import { Component, OnInit } from '@angular/core';

import { MiperfilService } from '../../services/miperfil.service';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {

  miperfils = [];

  constructor(private miperfilsService: MiperfilService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  
  }

  Miperffil(){
    this. miperfilsService.getperfil()
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        
      },
      err => console.log(err)
    )
  }

  
}
