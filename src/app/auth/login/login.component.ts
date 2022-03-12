import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  youremail = localStorage.getItem('email')
  yourPassword = localStorage.getItem('password')

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    rememberMe: new FormControl('')

  })
  constructor() { }

  ngOnInit(): void {
  }
  submit() {

    if (this.registerForm.controls['rememberMe'].value == true) {
      this.checkCheckBoxvalue()
    }

  }

  checkCheckBoxvalue() {

    localStorage.setItem('email', this.registerForm.controls['email'].value)
    localStorage.setItem('password', this.registerForm.controls['password'].value)




  }


}
