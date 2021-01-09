import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  data: any;
  chartOptions: any;
  constructor() {
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'Top up',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: '#FF6384'
              },
              {
                label: 'FT',
                data: [87, 78, 67, 76, 75, 57, 69],
                fill: false,
                borderColor: '#36A2EB'
            },
              {
                  label: 'QR',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  fill: false,
                  borderColor: '#FFCE56'
              }
          ]
      };
    }

  ngOnInit(): void {}
}
