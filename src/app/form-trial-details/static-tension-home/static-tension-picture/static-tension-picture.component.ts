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
  trialDataDetails=[]
  public listOfId = ["16c75e5c-75fd-4a0c-8a3c-ff5957303608","338679ba-3049-42ba-b7e8-c13cec76cdd2","dae51c76-d308-482f-a1f8-178a2c7f1a5f"]  //存放不同序号的id
  public dataList1=[]
  public dataList2=[]
  public dataList3=[]
  //echarts绘图
  option:any;
  constructor(
    public http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetails/${materialId}`;
  this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
    }) 
    this.GetTrialDataDetails();    

  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetailStressStrains/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
    }) 
    console.log(this.trialDataDetails)   
    let arry=[]
    this.trialDataDetail.map(mapItem => {
  if (arry.length == 0) {
    arry.push({ staticTensionDataDetailId: mapItem.staticTensionDataDetailId, List: [mapItem] })
  } else {
     let res = arry.some(item=> {//判断相同staticTensionDataDetailId，有就添加到当前项
      if (item.staticTensionDataDetailId == mapItem.staticTensionDataDetailId) {
        item.List.push(mapItem)
        return true
      }
    })
    if (!res) {//如果没找相同staticTensionDataDetailId添加一个新对象
      arry.push({ staticTensionDataDetailId: mapItem.staticTensionDataDetailId, List: [mapItem] })
    }
  }
}) 
this.PlotPicture(arry[0].List)
    }
   
    public PlotPicture(data){
      data.forEach((val, i) =>{    
          this.dataList1.push([val.strain,val.stress])
        }
        )
      this.option = {
        legend: {
          data: [this.trialDataDetails[0].sampleCode,this.trialDataDetails[1].sampleCode,this.trialDataDetails[2].sampleCode]
      },
        xAxis: {},
        yAxis: {},
        series: [{
            symbolSize: 20,
            data: this.dataList1,
            type: 'line'
        }]
      };

}

  }

 