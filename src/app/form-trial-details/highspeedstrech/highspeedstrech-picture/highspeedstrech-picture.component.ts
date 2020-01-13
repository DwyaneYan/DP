import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-highspeedstrech-picture',
  templateUrl: './highspeedstrech-picture.component.html',
  styleUrls: ['./highspeedstrech-picture.component.css']
})
export class HighspeedstrechPictureComponent implements OnInit {
  public materialId
  trialDataDetail
  public data=[]
  //echarts绘图
  options:any;
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrains/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
    })  
    this.PlotPicture(this.trialDataDetail)
  }
  public PlotPicture(data){
    // console.log(data)

      data.forEach((val) =>{
      this.data.push([val.engineeringStress,val.engineeringStrain]);
    })
    // console.log(this.data)
    this.options = {
      xAxis: {},
      yAxis: {},
      series: [{
          symbolSize: 20,
          data: this.data,
          type: 'line'
      }]
    };
  }
}
