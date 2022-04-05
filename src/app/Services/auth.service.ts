import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,public spinner :NgxSpinnerService, private router: Router ) { }



  submit(registerForm:any ,email:any,password:any) {

    var body ={
      username:email,
      password:password
    }
    const headerDir={
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
    const requestOptions={
      headers:new HttpHeaders(headerDir)
    }
   this.http.post('https://localhost:44346/api/login/login/',body, requestOptions).subscribe
   ((res)=>{
    console.log(typeof(res));
    //res=res.toString()
     
     localStorage.setItem('token', String(res));
      let data:any= jwt_decode(String(res));

      localStorage.setItem('user',JSON.stringify({...data}))
     if(data.role==='Admin'){        
        
        
     this.router.navigate(['admin/content'])
     }
     else if (data.role==='Driver')
     this.router.navigate(['driver/home'])

     else if (data.role==='Parent')
     this.router.navigate(['parent/home'])
     
     localStorage.setItem('name',data.unique_name)
     
   },err=>{
     console.log(err);
     this.router.navigate(['security/login']);
    
   })

  }
}

