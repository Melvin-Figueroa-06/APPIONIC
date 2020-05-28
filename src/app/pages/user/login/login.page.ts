import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = {}

  constructor( 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  SignIn(){
    this. authService.SignIn(this.user)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/homeproduct']);
      },
      err => console.log(err)
    )
  }

}
