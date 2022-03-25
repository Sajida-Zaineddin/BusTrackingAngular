import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactUsService } from 'src/app/Services/contact-us.service';

@Component({
  selector: 'app-manage-contact-us',
  templateUrl: './manage-contact-us.component.html',
  styleUrls: ['./manage-contact-us.component.css']
})
export class ManageContactUsComponent implements OnInit {
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>
  

  constructor(public home: ContactUsService ,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.home.getAll();

  }


  openDeleteDialog(id1: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.home.delete(id1);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");

      }
    })
  }
  
}
