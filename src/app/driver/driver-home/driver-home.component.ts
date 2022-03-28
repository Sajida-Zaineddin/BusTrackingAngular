import { Component, OnInit,ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DriverHomeComponent implements OnInit {
  markers: any = [];
  zoom = 12
  center: google.maps.LatLngLiteral = {
    lat: 31.980284205053007,
    lng: 35.76829732996917,
  };
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  constructor(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    });
    
  }
  ngOnInit(): void {
    this.addMarkers();
  }
 zoomIn() {
    if (this.options.maxZoom != null && this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.options.minZoom != null && this.zoom > this.options.minZoom) this.zoom--
  }

  addMarkers() {
    //for each x and y in students /// 
    this.markers.push({
      position: {
        lat: this.center.lat ,
        lng: this.center.lng ,
      },
      label: {
        color: 'white',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.DROP },
    })
  }

}
