import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }



  data: any = [];
  teachers: any =[];
  drivers : any = [];

  busTeachers: any =[];
  busDrivers : any = [];

  getAll() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Bus/GetAll/').subscribe((res) => {
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

  
  getDrivers() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/user/GetAllDrivers/').subscribe((res) => {
      this.drivers = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }

  getTeachers() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/user/GetAllTeachers/').subscribe((res) => {
      this.teachers = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }
  
  
  
  createBus(data: any) {
    this.spinner.show();   
    this.http.post('https://localhost:44346/api/Bus/Create/', data)
      .subscribe((res: any) => {

        this.spinner.hide;
        this.toastr.success('Saved Successfully :) ')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })


  }


  delete(id: number) {
    this.http.delete('https://localhost:44346/api/Bus/delete/' + id).subscribe((res) => {
      this.toastr.success('Deleted Successfully :) ')
    }, err => {
      this.toastr.error(err.message, err.status);
    })

  }

  updateBus(body: any) {
   
    this.http.put('https://localhost:44346/api/Bus/Update/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('something error ');
    })

  }


  getBusDrivers() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Bus/GetBusDrivers/').subscribe((res) => {
      this.busDrivers = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }
  

  getBusTeachers() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Bus/GetBusTeachers/').subscribe((res) => {
      this.busTeachers = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }
  

}
