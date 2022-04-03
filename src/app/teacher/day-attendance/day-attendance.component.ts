import { Component, Injectable, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AttendanceService } from 'src/app/Services/attendance.service';
import { BusService } from 'src/app/Services/bus.service';
import { RoundStatusService } from 'src/app/Services/round-status.service';
import { StudentService } from 'src/app/Services/student.service';

import {ChildAttendanceComponent} from '../child-attendance/child-attendance.component';
 
@Component({
  selector: 'app-day-attendance',
  templateUrl: './day-attendance.component.html',
  styleUrls: ['./day-attendance.component.css']
})
export class DayAttendanceComponent implements OnInit {


  constructor()
 { }


  ngOnInit(): void {

  }
}

