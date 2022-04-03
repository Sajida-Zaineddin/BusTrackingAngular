import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  busesRoute:any = [];
  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }



  getAllBusesRoute() {   
    this.http.get('https://localhost:44346/api/route/GetAll').subscribe((res) => {
      this.busesRoute = res;   
    }, err => {    
      this.toastr.error('Error ')
    })
  }


}
