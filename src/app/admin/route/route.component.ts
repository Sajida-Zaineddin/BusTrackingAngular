import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BusService } from 'src/app/Services/bus.service';
import { RouteService } from 'src/app/Services/route.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  constructor(private dialog: MatDialog,public routeService:RouteService ,public busService:BusService) { }
  @ViewChild('callCreateDialog') callCreateDialog!: TemplateRef<any>
  @ViewChild('callUpdateDialog') callUpdateDialog!: TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog!: TemplateRef<any>

  route: any = {}

  ngOnInit(): void {
    this.routeService.getAll();
  }


  CreateForm :FormGroup =new FormGroup({
    xstart:new FormControl('',Validators.required),
    ystart:new FormControl('',Validators.required),
    xend:new FormControl('',Validators.required),
    yend:new FormControl('',Validators.required),
    busid:new FormControl('',Validators.required),
 
  })

  updatForm: FormGroup = new FormGroup({
    id: new FormControl(),
    xstart:new FormControl('',Validators.required),
    ystart:new FormControl('',Validators.required),
    xend:new FormControl('',Validators.required),
    yend:new FormControl('',Validators.required),
    busid:new FormControl('',Validators.required),
  })

  openCreatedialog() {
    this.dialog.open(this.callCreateDialog)
    this.busService.getAll();
  }

  save(){
    this.routeService.CreateRoute(this.CreateForm.value);
    window.location.reload();

  }
  
  openUpdateDialog(idr: any, xs: any, ys: any, xe: any,ye:any,busnum:any) {

    this.route = {
      id: idr,
      xstart:xs,
      ystart:ys,
      xend:xe,
      yend:ye,
      busid:busnum
    }
    this.busService.getAll();
    this.updatForm.controls['id'].setValue(idr); 
    this.dialog.open(this.callUpdateDialog)
  }

  update(){
    
    this.routeService.updateRoute(this.updatForm.value);
    window.location.reload();
  }

  openDeleteDialog(routeid: any) {
    const dialogRef = this.dialog.open(this.callDeleteDialog);
    dialogRef.afterClosed().subscribe((res) => {
      if (res !== undefined) {
        if (res == "yes") {
          this.routeService.delete(routeid);
          window.location.reload();
        }
        else if (res == "no")
          console.log("Thank you ");
      }
    })
  }
}
