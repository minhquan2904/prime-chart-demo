import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  data: any;

  chartOptions: any;
  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['Top up', 'FT', 'QR'],
      datasets: [
          {
              data: [30, 30, 40],
              backgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
              ],
              hoverBackgroundColor: [
                  '#FF6384',
                  '#36A2EB',
                  '#FFCE56'
              ]
          }
      ]
  };
    this.chartOptions = {
    title: {
        display: true,
        text: 'Pie chart',
        fontSize: 16
    },
    legend: {
        position: 'bottom'
    }
    };
  }

}
