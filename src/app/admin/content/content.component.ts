import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { ParentService } from 'src/app/Services/parent.service';
import Chart from 'chart.js/auto'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  username: any = localStorage.getItem('name')
  num = 0;

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

      const barChart = new Chart("barChart", {
        type: 'bar',
        data: {
          labels: ['students', 'Drivers', 'Teacers', ],
         
          datasets: [{
            label: 'Number Of',
            data: [ this.adminservice.allStudents.length, this.adminservice.allDrivers.length, this.adminservice.allTeachers.length],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

    }, 1500);

   

    // const pieChart = new Chart("pieChart", {
    //   type: 'pie',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       y: {
    //         beginAtZero: true
    //       }
    //     }
    //   }
    // });
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

