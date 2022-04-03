import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

import { BusService } from 'src/app/Services/bus.service';


@Component({
  selector: 'app-driver-home1',
  templateUrl: './driver-home1.component.html',
  styleUrls: ['./driver-home1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DriverHome1Component implements OnInit {
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  waypoints_order: any[] = []
  waypts: google.maps.DirectionsWaypoint[] = [];
  currentLoc: string | google.maps.LatLng | google.maps.Place |
    google.maps.LatLngLiteral | undefined

    setLocation:any={}
  constructor(public busService: BusService,private toastr: ToastrService) {


  }

  ngOnInit(): void {


    this.busService.getBusRouteByUsername();
    this.busService.getBusStudents();

    setTimeout(() => {

      if (this.busService.busRoutesByUsername.xcurrent == 'null' || this.busService.busRoutesByUsername.ycurrent == 'null') {
        console.log('true')
        this.currentLoc = new google.maps.LatLng({ lat: Number(this.busService.busRoutesByUsername.xstart), lng: Number(this.busService.busRoutesByUsername.ystart) })
      }
      else {
        console.log('false')
        this.currentLoc = new google.maps.LatLng({ lat: Number(this.busService.busRoutesByUsername.xcurrent), lng: Number(this.busService.busRoutesByUsername.ycurrent) })
      }
      console.log('busService.busRoutesByUsername:', this.busService.busRoutesByUsername);
      console.log('currentLoc:', this.currentLoc);
      console.log('waypts:', this.waypts);

      this.initMap();


      console.log('waypts:', this.waypts);

    }, 2000);
    setTimeout(() => {

      this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer);
      console.log('waypoints_order:', this.waypoints_order);
    }, 2000);

  }

  test() {
    console.log('routesbyusername', this.busService.busRoutesByUsername);
  }

  initMap(): void {

    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 6,
        center: { lat: 31.971746, lng: 35.840065 },
      }
    );

    for (let i = 0; i < this.busService.busStudents.length; i++) {
      if (this.busService.busStudents[i].inbusstatus == 'true') {
        this.waypts.push({
          location: new google.maps.LatLng({ lat: Number(this.busService.busStudents[i].xhome), lng: Number(this.busService.busStudents[i].yhome) }),
          stopover: true,
        });
      }
    }


    this.directionsRenderer.setMap(map);


  }

  calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer
  ): void {



    if (this.currentLoc != undefined)
      directionsService
        .route({
          origin: this.currentLoc,
          destination: new google.maps.LatLng({ lat: Number(this.busService.busRoutesByUsername.xend), lng: Number(this.busService.busRoutesByUsername.yend) }),
          waypoints: this.waypts,
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((response) => {
          console.log(response)
          directionsRenderer.setDirections(response);

          const route = response.routes[0];
          this.waypoints_order = route.waypoint_order;
          console.log('route', route);
          const summaryPanel = document.getElementById(
            "directions-panel"
          ) as HTMLElement;

          summaryPanel.innerHTML = "";

          // For each route, display summary information.
          for (let i = 0; i < route.legs.length; i++) {
            const routeSegment = i + 1;

            summaryPanel.innerHTML +=
              "<b>Route Segment: " + routeSegment + "</b><br>";
            summaryPanel.innerHTML += route.legs[i].start_address + " to ";
            summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
            summaryPanel.innerHTML += route.legs[i].distance!.text + "<br><br>";
          }
        })
        .catch((e) => window.alert("Directions request failed due to " + e));
  }




  next() {
    if(this.waypoints_order.length<1){
      this.busService.setCurrentBusLocationAfterEnd(
        {
          Username:localStorage.getItem('name'),
        }
        );
      this.busService.changeAllStudentsBusStatus();
      this.toastr.success("logout");
      return;
    }
    this.currentLoc = this.waypts.splice(this.waypoints_order[0], 1)[0].location;
    if (this.currentLoc instanceof google.maps.LatLng) {
      this.busService.changeStudentBusStatus(this.currentLoc.lat().toString())//todo add lng
      this.busService.SetCurrentBusLocation(
        {
          Username:localStorage.getItem('name'),
          Xcurrent:this.currentLoc.lat().toString(),
          Ycurrent:this.currentLoc.lng().toString()
        }
      )
    }
    this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
  }
}
