import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static-tension-picture',
  templateUrl: './static-tension-picture.component.html',
  styleUrls: ['./static-tension-picture.component.css']
})
export class StaticTensionPictureComponent implements OnInit {

  materialId 
  trialDataDetail=[{id:"",
  staticTensionDataDetailId:"",
  stress:"",
  strain:"",
  realStress:"",
  realStrain:"",
  remark:""}]
  trialDataDetails=[{id:"",}]
  trialDataDetailss=[{}]
  public x_data=[]
  public y1=[]
  public y2=[]

  //echarts绘图
  options:any;

  constructor(
    public http: HttpClient,
    private router: Router,

  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetailStressStrains/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
    })  
    let group = this.trialDataDetails.length
    let count=this.trialDataDetail.length/group

    let arr=[]

    for(let i = 0; i < group; i++){for(let j=i*count;j<i*count+count;j++){arr.push(this.trialDataDetail[j])}
  if(i==group-1){for(let j=i*count+count;j<this.trialDataDetail.length;j++){arr.push(this.trialDataDetail[j])}}
  
  console.log()
}
    this.PlotPicture(this.trialDataDetail)
  }

  public PlotPicture(data){
    // console.log(data)

      data.forEach((val, i) =>{
      this.x_data.push(val.strain);
      this.y1.push(val.stress);
    })
    // console.log(this.data)
    // this.options = {
    //   xAxis: {},
    //   yAxis: {},
    //   series: [{
    //       symbolSize: 20,
    //       data: this.data,
    //       type: 'line'
    //   }]
    // };

  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {    
  this.trialDataDetails = res
      console.log(this.trialDataDetails)
    })  

  }

}

