import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/app/Services/footer.service';

@Component({
  selector: 'app-manage-footer',
  templateUrl: './manage-footer.component.html',
  styleUrls: ['./manage-footer.component.css']
})
export class ManageFooterComponent implements OnInit {

  constructor(public home:FooterService) { }

  ngOnInit(): void {
  }

}
