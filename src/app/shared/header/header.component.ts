import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isLoggedIn :any;
  role:any;

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem('token'); 
    this.role=localStorage.getItem('role')
  }

  logout(){
    localStorage.clear()
  }
}
