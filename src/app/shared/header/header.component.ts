import { Component, OnInit } from '@angular/core';
import { WebsiteService } from 'src/app/services/website.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public website:WebsiteService) { }

  isLoggedIn :any;
  role:any;

  ngOnInit(): void {
   
    setTimeout(() => {
      this.website.getWebsites();
    }, 1000);
    this.isLoggedIn = localStorage.getItem('token'); 
    this.role=localStorage.getItem('role')
  }

  logout(){
    localStorage.clear()
  }
}
