import { Component, OnInit } from '@angular/core';
import {ApexChartService} from '../../../theme/shared/components/chart/apex-chart/apex-chart.service';
import {ChartDB} from '../../../fack-db/chart-data';

@Component({
  selector: 'app-dash-sales',
  templateUrl: './dash-sales.component.html',
  styleUrls: ['./dash-sales.component.scss']
})
export class DashSalesComponent implements OnInit {

  public chartDB: any;

  constructor(public apexEvent: ApexChartService) {
    this.chartDB = ChartDB;
  }

  ngOnInit() {
  }

}
