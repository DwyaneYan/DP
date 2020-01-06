import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-static-tension-picture',
  templateUrl: './static-tension-picture.component.html',
  styleUrls: ['./static-tension-picture.component.css']
})
export class StaticTensionPictureComponent implements OnInit {

  materialId = 'dab512c9-34b4-4c78-8e12-4a6459ed6c23'
  trialDataDetail

  public data=[]

  //echarts绘图
  options:any;

  constructor(
    public http: HttpClient,

  ) { }

  ngOnInit() {
    this.GetTrialDataDetails()
    
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetailStressStrains/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
    })  
    this.PlotPicture(this.trialDataDetail)
  }

  public PlotPicture(data){
    console.log(data)

      data.forEach((val, i) =>{
      this.data.push([val.stress,val.strain]);
    })
    console.log(this.data)
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

