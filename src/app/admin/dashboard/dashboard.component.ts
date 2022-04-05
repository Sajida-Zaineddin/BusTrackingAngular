import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contentToggle=true;
  busToggle=true;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  dashboardBus(){
    this.contentToggle=false;
    this.router.navigate(['admin/content'])
  }

  manageBus(){
    this.busToggle=false;
    this.router.navigate(['admin/bus'])
  }

  logout(){
    this.router.navigate(['auth/login']);
    localStorage.clear();
  }
}



