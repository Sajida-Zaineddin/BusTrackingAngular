import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/Services/contact-us.service';

@Component({
  selector: 'app-manage-contact-us',
  templateUrl: './manage-contact-us.component.html',
  styleUrls: ['./manage-contact-us.component.css']
})
export class ManageContactUsComponent implements OnInit {

  constructor(public home: ContactUsService) { }

  ngOnInit(): void {
  }

}
