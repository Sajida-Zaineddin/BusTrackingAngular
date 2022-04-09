import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }
  data: any = [];
  getAll() {
   
    this.http.get('https://localhost:44346/api/Route/GetRouteWithNameDTO').subscribe((res) => {
      this.data = res;
 
    }, err => {
   
      this.toastr.error('Error ')
    })

  }

  CreateRoute(data: any) {
    this.spinner.show();


    this.http.post('https://localhost:44346/api/Route/Create/', data)
      .subscribe((res: any) => {

        this.spinner.hide();
        this.toastr.success('Saved Successfully :) ')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
  }

  
  updateRoute(body: any) {
 
    this.http.put('https://localhost:44346/api/Route/Update/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('something error ');
    })

  }

  delete(id: number) {
    this.http.delete('https://localhost:44346/api/Route/delete/' + id).subscribe((res) => {
      this.toastr.success('Deleted Successfully :) ')
    }, err => {
  
    })

  }

}
