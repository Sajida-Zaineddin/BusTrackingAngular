import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  display_Image: any;
  data: any = []
  results: any = [];
  test: any = [];


   gettestStatus() {
    this.http.get('https://localhost:44346/api/Testimonial/GetTestimonialStatus')
      .subscribe((res) => {
        console.log(res)
        this.test = res;
        this.toastr.success('Successfully :) ')
      }, err => {
        this.toastr.error('something error ');
      })

    console.log(this.test);
  }

  gettestimonials() {
    this.http.get('https://localhost:44346/api/Testimonial')
      .subscribe((res) => {
        console.log(res)
        this.data = res;
        this.toastr.success('Successfully :) ')
      }, err => {
        this.toastr.error('something error ');
      })

    console.log(this.data);
  }

  createTestimonial(data: any) {
    this.spinner.show();

    data.imagepath = this.display_Image;
    this.http.post('https://localhost:44346/api/Testimonial/CreateTestimonial/', data)
      .subscribe((res: any) => {

        this.spinner.hide();
        this.toastr.success('Saved Successfully :) ')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })


  }


  updateTestimonial(body: any) {

    this.http.put('https://localhost:44346/api/Testimonial/UpdateTestimonial/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('something error ');
    })




  }

  
  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44346/api/Testimonial/Upload/', file)
      .subscribe((res: any) => {
        if (res)
          console.log(res);
        this.display_Image = res.imagepath;
      }, err => {
        this.toastr.error(err.message, err.status);
      })
  }
}
