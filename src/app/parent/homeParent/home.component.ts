import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BusService } from 'src/app/Services/bus.service';
import { ParentService } from 'src/app/Services/parent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('Attendence') Attendence!: TemplateRef<any>

  username: any = localStorage.getItem('name')


  xSchoolLoc: any = '32.025984';
  ySchoolLoc: any = '35.853984';

  markers: any = [];
   
  zoom = 12
  center: google.maps.LatLngLiteral = {
    lat: 32.025984,
    lng: 35.853984,
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  constructor(public parentservice: ParentService,private dialog: MatDialog) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });

  }
  ngOnInit(): void {
    this.parentservice.getParentStudents({
      username: this.username
    });
    setTimeout(() => {

      this.addMarkers();
    

    }, 2000);


  }

  addMarkers() {
    for (let i = 0; i < this.parentservice.parentStudents.length; i++) {

      if (this.parentservice.parentStudents[i].xstart == this.xSchoolLoc && this.parentservice.parentStudents[i].ystart == this.ySchoolLoc) {

        if (this.parentservice.parentStudents[i].inbusstatus == 'true') {

          if (this.parentservice.parentStudents[i].xcurrent == 'null' && this.parentservice.parentStudents[i].ycurrent == 'null') {
            this.markers.push({
              position: {
                lat: Number(this.xSchoolLoc),
                lng: Number(this.ySchoolLoc),
              },
              label: {
                color: 'red',
                text: (this.parentservice.parentStudents[i].name + ' in School now '),

              },

              options: { animation: google.maps.Animation.DROP },

            })

          } else {
            this.markers.push({
              position: {
                lat: Number(this.parentservice.parentStudents[i].xcurrent),
                lng: Number(this.parentservice.parentStudents[i].ycurrent),
              },
              label: {
                color: 'black',
                text: (this.parentservice.parentStudents[i].name),

              },

              options: { animation: google.maps.Animation.DROP },

            })
          }

        }


      }
      else {

        if (this.parentservice.parentStudents[i].inbusstatus == 'false') {
          this.markers.push({
            position: {
              lat: Number(this.parentservice.parentStudents[i].xcurrent),
              lng: Number(this.parentservice.parentStudents[i].ycurrent),
            },
            label: {
              color: 'black',
              text: (this.parentservice.parentStudents[i].name),

            },

            options: { animation: google.maps.Animation.DROP },

          })

        }else{
          this.markers.push({
            position: {
              lat: Number(this.parentservice.parentStudents[i].xhome),
              lng: Number(this.parentservice.parentStudents[i].yhome),
            },
            label: {
              color: 'green',
              text: (this.parentservice.parentStudents[i].name),            
          
            },
          
            options: { animation: google.maps.Animation.DROP },
          
          })
        }
      }

    }


  }


  show(id : any){
    this.parentservice.getStudentsAttendence({id:id})
    setTimeout(() => {
      this.dialog.open(this.Attendence)     

    }, 1000);
  
    
    
  }
}


