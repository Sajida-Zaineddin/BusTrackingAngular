import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http: HttpClient) { }



  parentStudents: any = [];

 getParentStudents(name: any) {

  
    this.http.post('https://localhost:44346/api/student/GetParentStudents/', name)
      .subscribe((res: any) => {

        this.parentStudents = res
        
        
      }, err => {

     })

  }
}
