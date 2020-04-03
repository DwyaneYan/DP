import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-fld-picture',
  templateUrl: './fld-picture.component.html',
  styleUrls: ['./fld-picture.component.css']
})
export class FldPictureComponent implements OnInit {
  public materialId
  xData=[]
  data=[]
  trialDataDetail
  options
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {  this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();

  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/fLDDataDetailItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
    })  
    this.trialDataDetail.map(val=>{this.xData.push((val.secondaryStrain* 1000).toFixed(3));
    this.data.push(val.mainStrain)})
   this.PlotPicture(this.data, this.xData)
  }
  public PlotPicture(data, xData) {
    this.options = {
      title: {
          text: 'FLD'
           },    
      tooltip: {
      trigger: 'axis',
      formatter:function (params) { //在此处直接用 formatter 属性
        console.log(params)  // 打印数据
        let b=[]
          params.forEach(val=>{b.push(val.data)})
          return `  <div style="color: black;">次应变：${((params[0].axisValueLabel)/1000).toFixed(3)}</div>   
          <div style="color: black;">主应变：<a style="color: black;">${b[0]}</a></div>  
             `
        }
          },
      xAxis: {
        data: xData,
        type: "category",
        axisLabel: {
          formatter: function(val) {
            return (val / 1000).toFixed(4);
          }
        }
      },
      yAxis: {},
      series: [{
        data: data,
        symbolSize: 5,
        type: "line",
      }],

    };
    // let temp = [];
    // data.map(item => {
    //   temp = [];
    //   item.List.map(i => {
    //     temp.push( [(i.strain*1000).toFixed(4),i.stress]);
    //   });
    //   temp.sort((a,b)=>{return Number(a[0])-Number(b[0])});
    //   this.option.series.push({
    //     symbolSize: 5,
    //     data: temp,
    //     type: "line",
    //     name:item.sampleCode,
  
    //   })
    //   console.log(temp); 
    //   this.option.legend.data.push(item.sampleCode)
    // })
  }
}
