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
 
    
    this.http.get('https://localhost:44346/api/Websitehome/getall/').subscribe((res) => {
      this.data = res; 
  

    }, err => {
      
      this.toastr.error('Error ')
    })

  }
}
