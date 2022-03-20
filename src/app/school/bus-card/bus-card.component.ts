import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-bus-card',
  templateUrl: './bus-card.component.html',
  styleUrls: ['./bus-card.component.css']
})
export class BusCardComponent implements OnInit {

  @Input() id   :number|undefined
  @Input() busnumber  :number|undefined
  @Input() busdriver  :number|undefined
  @Input() busteacher  :number|undefined
  
  constructor(private router:Router,public home:HomeService) { }

  ngOnInit(): void {
  }

}
