import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StudentService } from 'src/app/Services/student.service';


@Component({
  selector: 'app-search-student-name',
  templateUrl: './search-student-name.component.html',
  styleUrls: ['./search-student-name.component.css']
})
export class SearchStudentNameComponent implements OnInit {
  studentName:any;

  constructor(public dialog: MatDialog,public home:StudentService) { }
  ngOnInit(): void {
    this.home.getAll();
  }
}