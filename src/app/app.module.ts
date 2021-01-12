import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
import * as Chart from 'chart.js';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PolarareaChartComponent } from './polararea-chart/polararea-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    LineChartComponent,
    PolarareaChartComponent,
    RadarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
