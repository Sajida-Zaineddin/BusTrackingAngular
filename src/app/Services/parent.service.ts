import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }


  studentAttendence:any =[];
  parentStudents: any = [];

 getParentStudents(name: any) {

  
    this.http.post('https://localhost:44346/api/student/GetParentStudents/', name)
      .subscribe((res: any) => {

        this.parentStudents = res
        console.log(this.parentStudents);
        
        
        
      }, err => {

     })

  }



  getStudentsAttendence(id: any) {

  
    this.http.post('https://localhost:44346/api/student/GetStudentAttendence/', id)
      .subscribe((res: any) => {

        this.studentAttendence = res
        console.log(this.studentAttendence);
        
        
        
      }, err => {

     })

  }


}
