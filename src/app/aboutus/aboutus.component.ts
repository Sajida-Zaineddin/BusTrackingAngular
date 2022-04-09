import { Component, OnInit } from '@angular/core';
import { AboutusPAgeService } from '../Services/aboutus-page.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(public aboutusPageService: AboutusPAgeService) { }

  ngOnInit(): void {
    this.aboutusPageService.getAll();
    this.aboutusPageService.getAllTeachers();
  }

}
