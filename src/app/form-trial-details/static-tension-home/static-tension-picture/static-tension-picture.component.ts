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
  trialDataDetail=[]


  public listOfId = ["16c75e5c-75fd-4a0c-8a3c-ff5957303608","338679ba-3049-42ba-b7e8-c13cec76cdd2","dae51c76-d308-482f-a1f8-178a2c7f1a5f"]  //存放不同序号的id
  public dataList1=[]
  public dataList2=[]
  public dataList3=[]

  //echarts绘图
  options1:any;
  options2:any;
  options3:any;

  constructor(
    public http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    
    this.GetTrialDataDetails();    
    console.log(this.listOfId)
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
    this.PlotPicture(this.trialDataDetail)
    }

    public PlotPicture(data){
      // console.log(data)  
      data.forEach((val, i) =>{
        if(val.staticTensionDataDetailId==this.listOfId[0]){
          this.dataList1.push([val.strain,val.stress])
        }
        else{
          if (val.staticTensionDataDetailId==this.listOfId[1]) {
            this.dataList2.push([val.strain,val.stress])
          } else {
            this.dataList3.push([val.strain,val.stress])
          }
        }
      })

      this.options1 = {
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 20,
            data: this.dataList1,
            type: 'line'
        }]
      };
    
    this.options2 = {
      xAxis: {},
      yAxis: {},
      series: [{
          symbolSize: 20,
          data: this.dataList2,
          type: 'line'
      }]
    };
  
  this.options3 = {
    xAxis: {},
    yAxis: {},
    series: [{
        symbolSize: 20,
        data: this.dataList3,
        type: 'line'
    }]
  };
}

  }

 