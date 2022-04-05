import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contentToggle=true;
  roleToggle=true;
  userToggle=true;
  loginToggle=true;
  busToggle=true;
  studentToggle=true;
  attendanceToggle=true;
  aboutToggle=true;
  aboutEditorToggle=true;
  contactToggle=true;
  testimonialToggle=true;
  websiteToggle=true;
  websiteHomeToggle=true;
  footerToggle=true;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  manageContent(){
    this.contentToggle=false;
    this.router.navigate(['admin/content'])
  }

  manageRole(){
    this.roleToggle=false;
    this.router.navigate(['admin/role'])
  }

  manageUser(){
    this.userToggle=false;
    this.router.navigate(['admin/user'])
  }

  manageLogin(){
    this.loginToggle=false;
    this.router.navigate(['admin/loginManage'])
  }

  manageBus(){
    this.busToggle=false;
    this.router.navigate(['admin/bus'])
  }

  manageStudent(){
    this.busToggle=false;
    this.router.navigate(['admin/student'])
  }

  manageAttendance(){
    this.attendanceToggle=false;
    this.router.navigate(['admin/attendance'])
  }

  manageAboutUs(){
    this.aboutToggle=false;
    this.router.navigate(['admin/aboutus'])
  }

  manageAboutUsEditor(){
    this.aboutEditorToggle=false;
    this.router.navigate(['admin/aboutusEditor'])
  }

  manageContactUs(){
    this.contactToggle=false;
    this.router.navigate(['admin/contact'])
  }

  manageTestimonial(){
    this.testimonialToggle=false;
    this.router.navigate(['admin/testimonial'])
  }

  manageWebsite(){
    this.websiteToggle=false;
    this.router.navigate(['admin/website'])
  }
  manageWebsiteHome(){
    this.websiteHomeToggle=false;
    this.router.navigate(['admin/webHome'])
  }
  manageFooter(){
    this.footerToggle=false;
    this.router.navigate(['admin/footer'])
  }

  logout(){
    this.router.navigate(['auth/login']);
    localStorage.clear();
  }
}



