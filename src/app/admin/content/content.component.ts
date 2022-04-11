import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { ParentService } from 'src/app/Services/parent.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  username: any = localStorage.getItem('name')
  num=0;

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

  constructor(public adminservice: AdminService) {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });

  }
  ngOnInit(): void {
  this.adminservice.getAllBusesRoute();
  this.adminservice.getAllStudentsData();
  this.adminservice.getAllDriversData();
  this.adminservice.getAllTeachersData();

    setTimeout(() => {
      this.addMarkers();
    }, 1500);   
  }


  addMarkers() {
    for (let i = 0; i < this.adminservice.busesRoute.length; i++) {
      if (this.adminservice.busesRoute[i].xcurrent == 'null' && this.adminservice.busesRoute[i].ycurrent == 'null') {

        if (this.adminservice.busesRoute[i].xstart == this.xSchoolLoc && this.adminservice.busesRoute[i].ystart == this.ySchoolLoc) {
          this.markers.push({
            position: {
              lat: Number(this.adminservice.busesRoute[i].xstart),
              lng: Number(this.adminservice.busesRoute[i].ystart),
            },
            label: {
              color: 'red',
              text: String(this.adminservice.busesRoute[i].busnumber),

            },

            options: { animation: google.maps.Animation.DROP },

          })



        }
        else {

          this.markers.push({
            position: {
              lat: Number(this.adminservice.busesRoute[i].xend),
              lng: Number(this.adminservice.busesRoute[i].yend),
            },
            label: {
              color: 'blue',
              text: String(this.adminservice.busesRoute[i].busnumber),

            },

            options: { animation: google.maps.Animation.DROP },

          })

        }

      } else {

        this.markers.push({
          position: {
            lat: Number(this.adminservice.busesRoute[i].xcurrent),
            lng: Number(this.adminservice.busesRoute[i].ycurrent),
          },
          label: {
            color: 'black',
            text: String(this.adminservice.busesRoute[i].busnumber),

          },

          options: { animation: google.maps.Animation.DROP },

        })
      }



    }


  }
}

