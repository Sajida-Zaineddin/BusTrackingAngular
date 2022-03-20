import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  constructor(private router:Router,public home:HomeService) { }

  ngOnInit(): void {
    this.home.getAll();
  }

}
