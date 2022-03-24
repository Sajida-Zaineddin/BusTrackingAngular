import { Component, OnInit } from '@angular/core';
import { AttendanceService } from 'src/app/Services/attendance.service';

@Component({
  selector: 'app-manage-attendance',
  templateUrl: './manage-attendance.component.html',
  styleUrls: ['./manage-attendance.component.css']
})
export class ManageAttendanceComponent implements OnInit {

  constructor(public home:AttendanceService) { }

  ngOnInit(): void {
    this.home.getAll();
  }

}
