import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor(private http: HttpClient, private spinner: NgxSpinnerService, private toastr: ToastrService) { }
  display_Image:any;
  data: any = []
  results: any = [];
  test:any=[];


  getAll() {
    //show spinner
    this.spinner.show();
    //hite api
    this.http.get('https://localhost:44346/api/Aboutus').subscribe((res) => {
      this.data = res;
          //hide spinner
          this.spinner.hide();
          // res --> show toastr
          this.toastr.success('DAta REtrieved !!');
    },err=>{
     this.spinner.hide();
     this.toastr.error('Error ') 
    })

  }


  createCourse(data:any){
    this.spinner.show();
    
    data.imagepath=this.display_Image;
    this.http.post('https://localhost:44346/api/Aboutus/CreateAboutus/',data)
    .subscribe((res:any)=>{
     
      this.spinner.hide();
      this.toastr.success('Saved Successfully :) ')
    }, err=>{
      this.spinner.hide();
      this.toastr.error(err.message , err.status)
    })


  }

  uploadAttachment(file:FormData)
  {
    this.http.post('https://localhost:44346/api/Aboutus/Upload/',file)
    .subscribe((res:any)=>{
      if(res)
      console.log(res);
      this.display_Image=res.imagepath;
    },err=>{
      this.toastr.error(err.message , err.status);
    })
  }


  delete(id:number){
    this.http.delete('https://localhost:44346/api/Aboutus/delete/'+id).subscribe((res)=>{
      this.toastr.success('Deleted Successfully :) ')
    },err=>{
      this.toastr.error(err.message , err.status);
    })

  }

  updateCourse(body:any){
    if( this.display_Image != undefined ){
      body.imagepath=this.display_Image;
    }
    this.http.put('https://localhost:44346/api/Aboutus/UpdateAboutus/',body).subscribe((res)=>{
      this.toastr.success('Updated Successfully :) ')
    },err=>{
      this.toastr.error('something error ');
    })
    
    

    
  }

  sreachv(obj:any){

    this.http.get('https://localhost:44346/api/Aboutus/GetById/'+obj)
    .subscribe((res)=>{
      console.log(res)
      this.results=[res];
      this.toastr.success('Successfully :) ')
    },err=>{
      this.toastr.error('something error ');
    })

    console.log(this.results);
    
  }

  gettestStatus(){
    this.http.get('https://localhost:44346/api/Testimonial/GetTestimonialStatus')
    .subscribe((res)=>{
      console.log(res)
      this.test=res;
      this.toastr.success('Successfully :) ')
    },err=>{
      this.toastr.error('something error ');
    })

    console.log(this.test);
  }

  gettestimonials(){
    this.http.get('https://localhost:44346/api/Testimonial')
    .subscribe((res)=>{
      console.log(res)
      this.data=res;
      this.toastr.success('Successfully :) ')
    },err=>{
      this.toastr.error('something error ');
    })

    console.log(this.data);
  }

  createTestimonial(data:any){
    this.spinner.show();
    
    data.imagepath=this.display_Image;
    this.http.post('https://localhost:44346/api/Testimonial/CreateTestimonial/',data)
    .subscribe((res:any)=>{
      
      this.spinner.hide();
      this.toastr.success('Saved Successfully :) ')
    }, err=>{
      this.spinner.hide();
      this.toastr.error(err.message , err.status)
    })


  }


  updateTestimonial(body:any){
   
    this.http.put('https://localhost:44346/api/Testimonial/UpdateTestimonial/',body).subscribe((res)=>{
      this.toastr.success('Updated Successfully :) ')
    },err=>{
      this.toastr.error('something error ');
    })
    
    

    
  }

}
