import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  toggle:boolean=true;
  menuItems: any[] | undefined;
  ROUTES: any;
  constructor(private router:Router) { }

  


  ngOnInit() {
    this.menuItems = this.ROUTES.filter((menuItem: any) => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  logout(){

    this.router.navigate(['auth/login']);
    localStorage.clear();

}
editprofile(){
    this.toggle=false;
    this.router.navigate(['teacher/EditProfile']);
  
}
}