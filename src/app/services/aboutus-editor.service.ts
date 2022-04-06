import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AboutusEditorService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }


  display_Image: any;
  data: any = []
  abId: any = [];


  getAll() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/AboutusEditor/GetAll/').subscribe((res) => {
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

  getAabouusId() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Aboutus/').subscribe((res) => {
      this.abId = res;
      //hide spinner
      this.spinner.hide();
      // res --> show toastr
      this.toastr.success('Data Retrieved !!');
    }, err => {
      this.spinner.hide();
      this.toastr.error('Error ')
    })

  }

  
  createAboutusEditor(data: any) {
    this.spinner.show();

    data.imagepath = this.display_Image;
    this.http.post('https://localhost:44346/api/AboutusEditor/Create/', data)
      .subscribe((res: any) => {

        this.spinner.hide();
        this.toastr.success('Saved Successfully :) ')
      }, err => {
        this.spinner.hide();
        this.toastr.error(err.message, err.status)
      })


  }

  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:44346/api/AboutusEditor/Upload/', file)
      .subscribe((res: any) => {     
          
        this.display_Image = res.imagepath;
      }, err => {
        this.toastr.error(err.message, err.status);
      })
  }


  delete(id: number) {
    this.http.delete('https://localhost:44346/api/AboutusEditor/delete/' + id).subscribe((res) => {
      this.toastr.success('Deleted Successfully :) ')
    }, err => {
      this.toastr.error(err.message, err.status);
    })

  }

  updateAboutusEditor(body: any) {
    if (this.display_Image != undefined) {
      body.imagepath = this.display_Image;
    }
    this.http.put('https://localhost:44346/api/AboutusEditor/Update/', body).subscribe((res) => {
      this.toastr.success('Updated Successfully :) ')
    }, err => {
      this.toastr.error('something error ');
    })

  }

}
