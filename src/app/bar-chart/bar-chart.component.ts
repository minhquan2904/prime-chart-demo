import { Component, OnInit } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  data: any;
  chartOptions: any;
  constructor() {
    this.chartOptions = {
      scales: {
        yAxes: [{
          id: 'A',
          type: 'linear',
          position: 'left',
          ticks: {
            min: 0
          }
        }, {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            max: 3,
            min: 0
          }
        }]
      }
    };
    Chart.plugins.register(ChartDataLabels);
    this.data = {
      labels: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', 'Q2/2019'],
      datasets: [
          {
              label: 'Tên miền vn',
              backgroundColor: '#36A2EB',
              borderColor: '#36A2EB',
              data: [1998, 2176, 5478, 9037, 14345, 34924, 55872, 75714,
                 99185, 127364, 180332, 232749, 266028, 299153, 348514, 386751, 450454, 465890,463796],
              order: 2,
              yAxisID: 'A',
              datalabels: {
                align: 'end',
                anchor: 'end'
              }
          },
          {
              label: 'Tỷ lệ tăng trưởng',
              backgroundColor: 'transparent',
              borderColor: '#7CB342',
              data: [2.1, 1.8, 2.5, 1.7, 1.6, 2.45, 1.6, 1.4, 1.3, 1.2, 1.5, 1.3, 1.24, 1.2, 1.22, 1.21, 1.25, 1.11, 1.05],
              type: 'line',
              order: 1,
              yAxisID: 'B',
              datalabels: {
                display: false
              }
          }
      ]
    };
  }

  ngOnInit(): void {
  }

}
