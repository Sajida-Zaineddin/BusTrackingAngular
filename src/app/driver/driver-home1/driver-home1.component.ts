import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver-home1',
  templateUrl: './driver-home1.component.html',
  styleUrls: ['./driver-home1.component.css']
})
export class DriverHome1Component implements OnInit {
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions;
  constructor() { 
    this.options= {
      mapTypeId: 'hybrid',
      zoomControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 8,
    };
    this.center= {
      lat: 15,
      lng: 20,
    }
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  zoomIn() {

    if (this.options.maxZoom != null && this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.options.minZoom != null && this.zoom > this.options.minZoom) this.zoom--
  }

}
