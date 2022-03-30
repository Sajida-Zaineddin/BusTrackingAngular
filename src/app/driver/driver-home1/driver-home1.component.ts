import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
  currentLoc: string|google.maps.LatLng|google.maps.Place|
  google.maps.LatLngLiteral | undefined = "Sweileh, Amman";

  constructor(){
  
    
  
    
  }
  CreateForm: FormGroup = new FormGroup({
    checkboxArray: new FormControl('', )
  })

 
  ngOnInit(): void {
   this.initMap();
   this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer);
  }

  calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService ,
    directionsRenderer: google.maps.DirectionsRenderer
  ): void {
    
  
    
   

  console.log(this.waypts)
  if(this.currentLoc != undefined)
    directionsService
      .route({
        origin: this.currentLoc,
        destination: "Amman, Jordan",
        waypoints: this.waypts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        console.log(response)
        directionsRenderer.setDirections(response);
  
        const route = response.routes[0];
        this.waypoints_order = route.waypoint_order; 
        console.log('route',route);
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
      .catch((e) => window.alert("Directions request failed due to " + status));
  }


  initMap(): void {
   
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 6,
        center: { lat: 31.971746, lng: 35.840065 },
      }
    );
    this.waypts.push({
      location: new google.maps.LatLng({ lat: 31.971746, lng: 35.840065 }),
      stopover: true,
    });
    this.waypts.push({
      location: "Mahis",
      stopover: true,
    });
    this.directionsRenderer.setMap(map);
  
    
  }

  next(){
    console.log("NEXT");
    this.currentLoc = this.waypts.splice(this.waypoints_order[0],1)[0].location
    this.calculateAndDisplayRoute(this.directionsService,this.directionsRenderer)
  }
}
