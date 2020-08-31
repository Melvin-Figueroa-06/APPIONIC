import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

user = {}

get name(){
  return this.registrationForm.get('name');
}

get email(){
  return this.registrationForm.get('email');
}

get password(){
  return this.registrationForm.get('password');
}

get age(){
  return this.registrationForm.get('age');
}

get sex(){
  return this.registrationForm.get('sex');
}

public errorMessages = {
  name:[
    { type: 'required', message: 'Name is required'},
    { type: 'maxlength', message: 'Name cant be longer than 100 characters' }
  ],
  email:[
    { type: 'required', message: 'Email is required'},
    { type: 'pattern', message: 'PLease enter a valid email' }
  ],
  password:[
    { type: 'required', message: 'Password is required'},
    { type: 'maxLength', message: 'PLease enter a valid password' }
  ],
  age:[
    { type: 'required', message: 'Age is required'},
    { type: 'maxLenth', message: 'PLease enter a valid email' }
  ],
  sex:[
    { type: 'required', message: 'Text is required'},
    { type: 'maxLength', message: 'PLease enter a valid email' }
  ],
};

registrationForm = this.formBuilder.group({
  name: ['', [Validators.required, 
              Validators.maxLength(100)]],
  email: ['', [Validators.required,
               Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9*-]+.[a-zA-Z]{2,4}$')]],
  password: ['', [Validators.required,
                  Validators.maxLength((8))]],
  age: ['', [Validators.required,
             Validators.maxLength(3)]], //this is for the letters (both uppercase and lowercase) and numbers validation)], 
  sex: ['', [Validators.required,
            Validators.maxLength(1)]]
});

  constructor( 
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
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

