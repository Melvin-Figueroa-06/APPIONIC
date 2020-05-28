import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

user = {}

  constructor( 
    private authService: AuthService,
    private router: Router
   ) { }

  ngOnInit() {
  }

  SignUp(){
    this. authService.signUp(this.user)
    .subscribe(
      res => {
      this.router.navigate(['/login']);
      },
      err => console.log(err)
    )
  }

}

