import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';


@Component({
  selector: 'app-create-bus',
  templateUrl: './create-bus.component.html',
  styleUrls: ['./create-bus.component.css']
})
export class CreateBusComponent implements OnInit {
  createForm : FormGroup= new FormGroup({
    busnumber:new FormControl('',Validators.required),
    busdriver:new FormControl(),
    busteacher:new FormControl()

  })

  constructor(private home:HomeService) { }


  ngOnInit(): void {
  }

  save(){
    this.home.createBus(this.createForm.value);
    window.location.reload();
  }
  // Create(){
  //   const obj ={
  //     busnumber:parseInt(this.createForm.value.busnumber),
  //     busdriver:parseInt(this.createForm.value.busdriver),
  //     busteacher:parseInt(this.createForm.value.busteacher),}
  //   this.home.createBus(obj)
  //   ; }

}
