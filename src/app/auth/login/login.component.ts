import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public youremail: any = localStorage.getItem('email');
  public yourPassword: any = localStorage.getItem('password');

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    rememberMe: new FormControl('')

  })
  constructor(public auth: AuthService) { }



  ngOnInit(): void {
  }
  submit() {

    if (this.registerForm.controls['rememberMe'].value == true) {
      this.checkCheckBoxvalue()

    }
    this.auth.submit(this.registerForm, this.registerForm.controls['email'].value, this.registerForm.controls['password'].value)


  }

  checkCheckBoxvalue() {

    localStorage.setItem('email', this.registerForm.controls['email'].value)
    localStorage.setItem('password', this.registerForm.controls['password'].value)

  }


}
