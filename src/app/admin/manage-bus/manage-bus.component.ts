import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from 'src/app/Services/home.service';
import { CreateBusComponent } from '../create-bus/create-bus.component';

@Component({
  selector: 'app-manage-bus',
  templateUrl: './manage-bus.component.html',
  styleUrls: ['./manage-bus.component.css']
})
export class ManageBusComponent implements OnInit {
  @ViewChild('callUpdateDialog') callUpdateDialog! :TemplateRef<any>
  @ViewChild('callDeleteDialog') callDeleteDialog! :TemplateRef<any>

  constructor(private dialog:MatDialog , public home:HomeService) { }
  bus:any=[]
  ngOnInit(): void {
    this.home.getAll();
  }
  create(){
    this.dialog.open(CreateBusComponent);
  }

  openUpdateDialog(id1:any,Busnumber1:any,Busdriver1:any,Busteacher1:any){
    console.log(id1);

  this.bus={
    id:id1,
    busnumber:Busnumber1,
    busdriver:Busdriver1,
    busteacher:Busteacher1
  }

  this.updatForm.controls['id'].setValue(id1);
  
  this.dialog.open(this.callUpdateDialog);
  
}
updatForm:FormGroup=new FormGroup({
  id:new FormControl(),
  busnumber:new FormControl(),
  busdriver:new FormControl(),
  busteacher:new FormControl()
})
updateBus(){
  this.home.updateBus(this.updatForm.value);
  window.location.reload();

}
openDeleteDialog(id:number){
  const dialogRef=this.dialog.open(this.callDeleteDialog);
  dialogRef.afterClosed().subscribe((res)=>{
    if(res!==undefined)
    {
      if(res=="yes")
      this.home.delete(id);
      else if(res=="no")
      console.log("Thank you ");
      
    }
  })
}

}
