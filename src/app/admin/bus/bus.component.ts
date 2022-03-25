import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BusService } from 'src/app/services/bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  constructor(private dialog: MatDialog, public busservice: BusService) { }

  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog!: TemplateRef<any>
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>

  busValues: any = {}

  updatForm: FormGroup = new FormGroup({
    id: new FormControl(),
    busnumber: new FormControl(),
    busdriver: new FormControl(),
    busteacher: new FormControl(),

  })


  CreateForm: FormGroup = new FormGroup({
    busnumber: new FormControl('', Validators.required),
    busdriver: new FormControl('', Validators.required),
    busteacher: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.busservice.getBusDrivers();
    this.busservice.getBusTeachers();
    this.busservice.getAll();
    
  }


  save() {
    console.log(this.CreateForm.value);
    this.busservice.createBus(this.CreateForm.value);
    window.location.reload();
  }

  openCreatedialog() {
    this.busservice.getDrivers();
    this.busservice.getTeachers();
    this.dialog.open(this.callCreateDialog)

  }

  openDeleteDialog(busId: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.busservice.delete(busId);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");

      }
    })

  }
  openUpdateDialog(id: any, busnum: any, driver: any, teacher: any,) {

    this.busValues = {
      id: id,
      busnumber: busnum,
      busdriver: driver,
      busteacher: teacher,

    }
    this.updatForm.controls['id'].setValue(id);
    this.updatForm.controls['busnumber'].setValue(busnum);
    this.updatForm.controls['busdriver'].setValue(driver);
    this.updatForm.controls['busteacher'].setValue(teacher);
    this.busservice.getDrivers();
    this.busservice.getTeachers();
    this.dialog.open(this.callUpdateDialog)

  }

  updateAboutusEditor() {
    this.busservice.updateBus(this.updatForm.value);
    window.location.reload();

  }

}
