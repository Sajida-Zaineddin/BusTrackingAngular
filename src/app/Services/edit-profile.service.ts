import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EditProfileService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }


  dataFromUsers: any = [];  



    
  getUserData(data: any) {
    this.spinner.show();   
    debugger
    this.http.post('https://localhost:44346/api/User/GteUserByUusernameFroEdit/', data)
      .subscribe((res: any) => {
        this.dataFromUsers=res
        this.spinner.hide();
       
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })


  }


  
  updatePassword(body: any) {
   
    this.http.put('https://localhost:44346/api/login/UpdateLoginUserPassword/', body).subscribe((res) => {
     
    }, err => {
      this.toastr.error('something error ');
    })

  }

}
