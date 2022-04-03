import { Component, OnInit } from '@angular/core';
import { BusService } from 'src/app/Services/bus.service';
import { ParentService } from 'src/app/Services/parent.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


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

  constructor(public parentservice: ParentService) {
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
      console.log('s', this.parentservice.parentStudents);

    }, 1500);


  }


  // zoomIn() {
  //   if (this.options.maxZoom != null && this.zoom < this.options.maxZoom) this.zoom++
  // }

  // zoomOut() {
  //   if (this.options.minZoom != null && this.zoom > this.options.minZoom) this.zoom--
  // }

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
}


