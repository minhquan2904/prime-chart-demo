import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  data: any;
  chartOptions: any;
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Top Up',
              backgroundColor: '#FF6384',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'QR',
              backgroundColor: '#FFCE56',
              borderColor: '#7CB342',
              data: [28, 48, 40, 19, 86, 27, 90]
          },
          {
            label: 'FT',
            backgroundColor: '#36A2EB',
            borderColor: '#7CB342',
            data: [48, 49, 50, 49, 50, 51, 99]
        }
      ]
    }}

  ngOnInit(): void {
  }

}
