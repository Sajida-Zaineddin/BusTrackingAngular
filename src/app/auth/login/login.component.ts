import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit() {

    if (this.registerForm.controls['rememberMe'].value == true) {
      this.checkCheckBoxvalue()
      console.log(localStorage.getItem('email'));
      console.log(localStorage.getItem('password'));
      
    }  
    
    this.router.navigate(['admin/aboutus'])
    
  }

  checkCheckBoxvalue() {

    localStorage.setItem('email', this.registerForm.controls['email'].value)
    localStorage.setItem('password', this.registerForm.controls['password'].value)

  }

 
}
