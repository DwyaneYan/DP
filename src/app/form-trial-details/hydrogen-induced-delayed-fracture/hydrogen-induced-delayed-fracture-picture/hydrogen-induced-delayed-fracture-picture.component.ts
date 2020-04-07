import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hydrogen-induced-delayed-fracture-picture',
  templateUrl: './hydrogen-induced-delayed-fracture-picture.component.html',
  styleUrls: ['./hydrogen-induced-delayed-fracture-picture.component.css']
})
export class HydrogenInducedDelayedFracturePictureComponent implements OnInit {
  public materialId
  trialDataDetail
  file=[]
  files
  filess=[]
  a1=[]
  a2=[]
  ImgPathOne=[]
  xData=[]
  options
  data=[]
  trialDataDetails
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/hydrogenInducedDelayedFractureDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })   
    this.file.push(this.trialDataDetail[0].fileString)
    this.files=this.fenge(this.file,";")
            for(let a=0;a<(this.files.length-1);a++){
    this.filess.push(this.files[a])
        }
        this.a1=this.fenge(this.filess,/[_.]/)
        for(let a=1;a<this.a1.length;a+=2){
    this.a2.push(this.a1[a])
        }
        for(let a=0;a<this.filess.length;a++){
          let picture=this.filess[a]
          this.ImgPathOne.push(`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${picture}`)
        }
       }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/hydrogenInducedDelayedFractureDataDetailItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetail)
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
  fenge(arry,p){
    let arry1=arry.toString().split(p)
    return arry1
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

    };}
}
