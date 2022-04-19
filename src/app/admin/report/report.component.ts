import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { AdminService } from 'src/app/Services/admin.service';
import { BusService } from 'src/app/Services/bus.service';
import { StudentService } from 'src/app/Services/student.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  date:any =Date();
  constructor(public adminservice: AdminService, public busService:BusService,public studentService: StudentService) { }

  ngOnInit(): void {
    this.adminservice.getAllBusesRoute();
    this.adminservice.getAllStudentsData();
    this.adminservice.getAllDriversData();
    this.adminservice.getAllTeachersData();
    this.busService.getAll();
    this.studentService.GetParentName();

    setTimeout(() => {      
    const barChart = new Chart("barChart", {
      type: 'bar',
      data: {
        labels: ['Students', 'Drivers', 'Teacers', ],
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
  
    const pieChart = new Chart("pieChart", {
      type: 'pie',
      data: {
        labels: ['Parent', 'Children', 'Buses', ],
        datasets: [{
          label: '# of Votes',
          data: [this.studentService.fullName.length, this.adminservice.allStudents.length, this.busService.data.length],
          backgroundColor: [
            'rgba(100, 50, 130, 0.2)',
            'rgba(34, 100, 120, 0.2)',
            'rgba(215, 106, 56, 0.2)',
          ],
          borderColor: [
            'rgba(100, 50, 130, 1)',
            'rgba(34, 100, 120, 1)',
            'rgba(215, 106, 56, 1)',     
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
}


title = 'html-to-pdf-angular-application';
public convetToPDF()
{
var data:any = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 400;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;

const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('new-file.pdf'); // Generated PDF
});
}
}
