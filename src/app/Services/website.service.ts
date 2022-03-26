import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class WebsiteService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }

  display_Image: any;
  data: any = []
  contactId: any = [];
  aboutId: any = [];

  getWebsites() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Website/GetAll/').subscribe((res) => {
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

  getContactId() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Contactus/').subscribe((res) => {
      this.contactId = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })
  }

  getAboutId() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Aboutus/').subscribe((res) => {
      this.aboutId = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })
  }

  createWebsite(data: any) {
    this.spinner.show();
    data.websitelogo = this.display_Image;
    this.http.post('https://localhost:44346/api/Website/Create/', data)
      .subscribe((res: any) => {
        this.spinner.hide();
        this.toastr.success('Saved Successfully :) ')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })
  }

  updateWebsite(body: any) {
    if (this.display_Image != undefined) {
      body.websitelogo = this.display_Image;
    }
    this.http.put('https://localhost:44346/api/Website/Update/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('something error ');
    })
  }

  deleteWebsite(id: number) {
    this.http.delete('https://localhost:44346/api/Website/Delete/'+ id).subscribe((res) => {
      this.toastr.success('Deleted Successfully :) ')
    }, err => {
      this.toastr.error(err.message, err.status);
    })
  }

  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44346/api/Website/UploadImage/', file)
      .subscribe((res: any) => {
        if (res)
          console.log(res);
        this.display_Image = res.websitelogo;
      }, err => {
        this.toastr.error(err.message, err.status);
      })
  }
}
