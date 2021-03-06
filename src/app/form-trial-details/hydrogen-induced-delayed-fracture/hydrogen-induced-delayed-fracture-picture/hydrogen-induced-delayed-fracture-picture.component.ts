import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import {getname,enlarge} from 'src/app/picture'

@Component({
  selector: 'app-hydrogen-induced-delayed-fracture-picture',
  templateUrl: './hydrogen-induced-delayed-fracture-picture.component.html',
  styleUrls: ['./hydrogen-induced-delayed-fracture-picture.component.css']
})
export class HydrogenInducedDelayedFracturePictureComponent implements OnInit {
  public materialId
  trialDataDetail = []
name=[]
  ImgPathOne=[]
  xData=[]
  options
  data=[]
  trialDataDetails = []
  enlarge = enlarge
  constructor( private router: Router,
    public http: HttpClient,
    private ApiService: ApiService,

    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getHydrogenInducedDelayedFractureDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      this.name= getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').afterName
      this.ImgPathOne=getname(this.trialDataDetail[0]?this.trialDataDetail[0].fileString:'').ImgPathOne
    })   
    
       }
  public async GetTrialDataDetailss() {
    await this.ApiService.getHydrogenInducedDelayedFractureDataDetailItems(this.materialId)
    .then((res: any) => {
      this.trialDataDetails = res
    })  
    this.trialDataDetails.map(val=>{
      this.xData.push(val.stress);
this.data.push(val.hour)
      this.xData = [...new Set(this.xData)];
      // this.xData2 = [...new Set(this.xData2)];
      this.xData.sort((a, b) => {
        return Number(a) - Number(b);
      });
});
this.PlotPicture(this.data, this.xData)  
  }

  public PlotPicture(data, xData) {
    this.options = {
      title: {
          text: '恒弯曲加载氢脆实验结果'
           },    
      tooltip: {
      trigger: 'axis',
      // formatter:function (params) { //在此处直接用 formatter 属性
      //   console.log(params)  // 打印数据
      //   let b=[]
      //     params.forEach(val=>{b.push(val.data)})
      //     return `  <div style="color: black;">次应变：${((params[0].axisValueLabel)/1000).toFixed(3)}</div>   
      //     <div style="color: black;">主应变：<a style="color: black;">${b[0]}</a></div>  
      //        `
      //   }
          },
      xAxis: {
        data: xData,
        type: "category",
        name:'弯曲应力(MPA)',
        splitLine: {
          show: true,}
      },
      yAxis: {name:'开裂时间(小时)'},
      series: [{
        data: data,
        symbolSize: 5,
        type: "line",
      }],
      grid: {
        x: 60,
        right:100,
        bottom: 20
      }

    };}
}
