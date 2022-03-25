import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  
  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }
  
  data: any = []
  results: any = [];
  


  getAll() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Role/GetAll').subscribe((res) => {
      this.data = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }


  createRole(data: any) {
    this.spinner.show();

    this.http.post('https://localhost:44346/api/Role/Create/', data)
      .subscribe((res: any) => {

        this.spinner.hide();
        this.toastr.success('Saved Successfully :) ')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })


  }



  delete(id: number) {
    this.http.delete('https://localhost:44346/api/Role/Delete/' + id).subscribe((res) => {
      this.toastr.success('Deleted Successfully :) ')
    }, err => {
      this.toastr.error(err.message, err.status);
    })

  }

  updateRole(body: any) {
   
    this.http.put('https://localhost:44346/api/Role/Update/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('something error ');
    })




  }

  search(obj: any) {

    this.http.get('https://localhost:44346/api/Role/GetById/' + obj)
      .subscribe((res) => {
        console.log(res)
        this.results = [res];
        this.toastr.success('Successfully :) ')
      }, err => {
        this.toastr.error('something error ');
      })

    console.log(this.results);

  }
}
