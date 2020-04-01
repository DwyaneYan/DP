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
  options2
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
    let xData2=[]
    this.trialDataDetail.map(mapItem => {
    xData.push((mapItem.strain * 1000).toFixed(4));
    xData2.push((mapItem.realStrain * 1000).toFixed(4));
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
console.log(this.trialDataDetails)    
  xData = [...new Set(xData)];
  xData2 = [...new Set(xData2)];
    xData.sort((a, b) => {
      return Number(a) - Number(b);
    });
    xData2.sort((a, b) => {
      return Number(a) - Number(b);
    });
    this.PlotPicture(arry, xData,xData2);}

public PlotPicture(data, xData,xData2) {
  // data.map(item => {
  //   item.List.sort((a, b) => a.strain - b.strain);
  // });
  this.option = {
    title: {
      text: '工程应力应变'
  },    
  tooltip: {
    trigger: 'axis',
    backgroundColor: "white",
    formatter:function (params) { //在此处直接用 formatter 属性
      console.log(params)  // 打印数据
      let b=[]
      let index = [];
      let colorList = [];
        params.forEach(val=>{b.push((val.data)[1]);index.push(val['seriesName']);colorList.push(val['color'])})
        let  text=""
        for(let c=0;c<b.length;c++){
          text+=index[c] +' '+'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;'+
          'border: solid 1px;border-color:'+colorList[c]+'"></span>'+" : "+ b[c]+ "<br/>"
        }
        return `  <div style="color: black;">应变：${((params[0].axisValueLabel)/1000).toFixed(4)}</div>   
        <div style="color: black;">应力：<br/><a style="color: black;">${text}</a></div>  
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
    series: [],
    legend:{data:[],
      orient:'vertical',
      x: 'right',}
  };
  let temp = [];
  data.map(item => {
    temp = [];
    item.List.map(i => {
      temp.push( [(i.strain*1000).toFixed(4),i.stress]);
    });
    temp.sort((a,b)=>{return Number(a[0])-Number(b[0])});
    this.option.series.push({
      symbolSize: 5,
      data: temp,
      type: "line",
      name:item.sampleCode,

    })
    console.log(temp); 
    this.option.legend.data.push(item.sampleCode)
  })
 
 this. options2 = {
    title: {
      text: '真应力应变'
  },    tooltip: {
    trigger: 'axis',
    backgroundColor: "white",
    formatter:function (params) { //在此处直接用 formatter 属性
      console.log(params)  // 打印数据
      let b=[]
      let index = [];
      let colorList = [];
        params.forEach(val=>{b.push((val.data)[1]);index.push(val['seriesName']);colorList.push(val['color'])})
        let  text=""
        for(let c=0;c<b.length;c++){
          text+=index[c] +' '+'<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;'+
          'border: solid 1px;border-color:'+colorList[c]+'"></span>'+" : "+ b[c]+ "<br/>"
        }
        return `  <div style="color: black;">真应变：${((params[0].axisValueLabel)/1000).toFixed(4)}</div>   
        <div style="color: black;">真应力：<br/><a style="color: black;">${text}</a></div>  
           `
      }
},
    xAxis: {
      data: xData2,
      type: "category",
      axisLabel: {
        formatter: function(val) {
          return (val / 1000).toFixed(4);
        }
      }
    },
    yAxis: {},
    series: [],
    legend:{data:[],
      orient:'vertical',
      x: 'right',}
  };
  let temp2 = [];
  data.map(item => {
    temp2 = [];
    item.List.map(i => {
      temp2.push( [(i.realStrain*1000).toFixed(4),i.realStress]);
    });
    temp2.sort((a,b)=>{return Number(a[0])-Number(b[0])});
    this.options2.series.push({
      symbolSize: 5,
      data: temp2,
      type: "line",
      name:item.sampleCode,
      connectNulls: true
    })
    console.log(temp2); 
    this.options2.legend.data.push(item.sampleCode)
  })
};


  }

 