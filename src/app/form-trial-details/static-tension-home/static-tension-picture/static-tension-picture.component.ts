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
    let xData = [];
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetailStressStrains/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
    }) 
    let arry=[]
    this.trialDataDetail.map(mapItem => {
    xData.push(mapItem.strain * 1000);
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
for(let a=0;a<this.trialDataDetails.length;a++){
  arry[a].sampleCode=this.trialDataDetails[a].sampleCode}
console.log(arry)   
  xData = [...new Set(xData)];
    xData.sort((a, b) => {
      return a - b;
    });
    this.PlotPicture(arry, xData);}

public PlotPicture(data, xData) {
  // data.map(item => {
  //   item.List.sort((a, b) => a.strain - b.strain);
  // });
  this.option = {
    title: {
      text: '工程应力应变'
  },
    xAxis: {
      data: xData,
      type: "category",
      axisLabel: {
        formatter: function(val) {
          return val / 1000;
        }
      }
    },
    yAxis: {},
    series: [],
    legend:{data:[]}
  };
  let temp = [];
  data.map(item => {
    temp = [];
    item.List.map(i => {
      temp.push( ["i.strain*1000",i.stress]);
    });

    this.option.series.push({
      symbolSize: 20,
      data: temp,
      type: "line",
      name:item.sampleCode,
      connectNulls: true
    })
    this.option.legend.data.push(item.sampleCode)
  })
  console.log(this.option.legend);  

}

  }

 