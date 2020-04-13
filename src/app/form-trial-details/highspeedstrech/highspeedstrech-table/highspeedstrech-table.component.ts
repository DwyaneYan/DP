import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NzTreeHigherOrderServiceToken } from 'ng-zorro-antd';
@Component({
  selector: 'app-highspeedstrech-table',
  templateUrl: './highspeedstrech-table.component.html',
  styleUrls: ['./highspeedstrech-table.component.css']
})
export class HighspeedstrechTableComponent implements OnInit {
  public materialId
  trialDataDetail=[]
  trialDataDetails=[{}]
  baseInfo
  one=[]
  two=[]
  three=[]
  mater=[]
  table1=["执行标准","测试机构","试验设备","试验方法","取样方向",]
  table2=["材料牌号","屈服强度Rp(MPa)","抗拉强度Rm(MPa)","断后伸长率A(％)","弹性模量E(MPa)",]
  table3=["formYieldStrength","formTensileStrength","formModulusOfElasticity","formElongation",]
  table4=["拉伸速率","样件编号","样品厚度t/mm(实测值)","标距段宽度w/mm(实测值)","屈服强度(MPa)","抗拉强度(MPa)","断后伸长率(%)","拉伸速度(m/s)"]
  width=["120px","150px","180px","180px","180px","180px","180px","150px"]
  table5=["testTarget","sampleCode","thickness","gaugeDistance","yieldStrength","tensileStrength","elongation","stretchingSpeed"]
  table6=["standard","testOrganization","equipment","testMethod","direction"]
  
  isVisible = false;
  options;
  
  contrastTable(params, des) {
      let data = [];
      let xData = [];
      for (const iterator of this.trialDataDetail) {
        data.push(iterator[params]);
        xData.push(iterator['sampleCode']);    
      }
      this.PlotPicture(data, xData,des);
    }
    handleOk(): void {
      this.isVisible = false;
    }
  
  handleCancel(): void {
      this.isVisible = false;
    }
  public PlotPicture(data, xData, des) {
        this.isVisible = true;
        this.options = {
          title: {
            text: des,
            x: "center",
            y: "top"
          },
          xAxis: {
            type: "category",
            data: xData
          },
          yAxis: {
            type: "value"
          },
          series: [
            {
              data: data,
              type: "line"
            }
          ]
        };
      }
  constructor(  private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetBaseInfo(this.materialId)
  }

  public async GetBaseInfo(p){
    let api = "http://localhost:60001/api/hangang/material/materials?Id=";
    await this.http.get(api+p)
    .toPromise()
    .then((res:any)=>{
      this.baseInfo = res.items
    })
    // console.log(this.baseInfo)
    this.mater.push(
      this.baseInfo[0].name,
    )
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
      for(let a=0;a<this.trialDataDetail.length;a++)
{if(this.trialDataDetail[a].standard==null){
this.two.push(this.trialDataDetail[a])
}
else{this.one.push(this.trialDataDetail[a])}
}
console.log(this.two)
console.log(this.one)

    })  
  
  }
  // public async GetTrialDataDetailss() {
  //   let materialId = this.materialId
  //   let api =`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrains/${materialId}`;
  //   await this.http.get(api)
  //   .toPromise()
  //   .then((res: any) => {
  //     this.trialDataDetails = res
  //     console.log(this.trialDataDetails)
  //   })    
  // }

}
