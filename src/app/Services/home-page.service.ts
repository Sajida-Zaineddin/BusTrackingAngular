import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  data: any = [];


  getAll() {
    //show spinner
    this.spinner.show();
    
    this.http.get('https://localhost:44346/api/Websitehome/getall/').subscribe((res) => {
      this.data = res;
  
      this.spinner.hide();
  

    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }
}
