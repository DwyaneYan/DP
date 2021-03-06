import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-fld-picture',
  templateUrl: './fld-picture.component.html',
  styleUrls: ['./fld-picture.component.css']
})
export class FldPictureComponent implements OnInit {
  public materialId
  xData = []
  data = []
  trialDataDetail
  options
  constructor(private router: Router,
    public http: HttpClient,
    public ApiService: ApiService,
  ) { }

  ngOnInit() {
    this.materialId = this.router
      .routerState.root.firstChild
      .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();

  }
  public async GetTrialDataDetails() {
    await this.ApiService.getFLDDataDetailItems(this.materialId)
      .then((res: any) => {
        this.trialDataDetail = res
      })
    this.trialDataDetail.map(val => {
      this.xData.push((val.secondaryStrain * 1000).toFixed(3));
      this.data.push(val.mainStrain)
    })
    this.PlotPicture(this.data, this.xData)
  }
  public PlotPicture(data, xData) {
    this.options = {
      title: {
        text: 'FLD'
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) { //在此处直接用 formatter 属性
          console.log(params)  // 打印数据
          let b = []
          params.forEach(val => { b.push(val.data) })
          return `  <div style="color: black;">次应变：${((params[0].axisValueLabel) / 1000).toFixed(3)}</div>   
          <div style="color: black;">主应变：<a style="color: black;">${b[0]}</a></div>  
             `
        }
      },
      xAxis: {
        data: xData,
        type: "category",
        axisLabel: {
          formatter: function (val) {
            return (val / 1000).toFixed(4);
          }
        },
        name: "次应变"
      },
      yAxis: { name: '主应变' },
      series: [{
        data: data,
        symbolSize: 5,
        type: "line",
      }],
      grid: {
        x: 60,
        bottom: 20
      }

    };

  }
}
