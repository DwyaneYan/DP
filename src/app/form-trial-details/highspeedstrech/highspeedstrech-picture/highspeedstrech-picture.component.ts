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
  option2
  option3
  trialDataDetails
  //echarts绘图
  options:any;
  constructor( private router: Router,
    public http: HttpClient,) { }
  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetails/${materialId}`;
  this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
    }) 
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrains/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res;     
    }) 
    let arry=[]
    let xData2=[]
    let xData3=[]
    let xData
    let arry1=[]
    let arr1=[]
    let arr2=[]
    for(let index=0;index<this.trialDataDetail.length;index++){
      if(this.trialDataDetail[index].realPlasticStrain!=null){
        arry1.push(this.trialDataDetail[index])
      }
    }
    this.classitem(arr1,arry1)//真属性应变真应力
    arry1.map(val=>xData3.push((val.realPlasticStrain * 1000).toFixed(4)))
    this.trialDataDetail.map(mapItem => {
    xData.push((mapItem.engineeringStrain * 1000).toFixed(4));
    xData2.push((mapItem.realStrain * 1000).toFixed(4));})

    this.classitem(arr2,this.trialDataDetail) //工程应力应变、真应力应变
for(let a=0;a<this.trialDataDetails.length;a++){
  arr2[a].sampleCode=this.trialDataDetails[a].sampleCode;
  arr2[a].testTarget=this.trialDataDetails[a].testTarget;
  arr1[a].sampleCode=this.trialDataDetails[a].sampleCode;
  arr1[a].testTarget=this.trialDataDetails[a].testTarget}
console.log(arry)  
console.log(this.trialDataDetails)    
  xData = [...new Set(xData)];
  xData2 = [...new Set(xData2)];
  xData3= [...new Set(xData3)];
    xData.sort((a, b) => {
      return Number(a) - Number(b);
    });
    xData2.sort((a, b) => {
      return Number(a) - Number(b);
    }); 
    xData3.sort((a, b) => {
      return Number(a) - Number(b);
    }); 
    this.PlotPicture(arr2, xData,xData2,arr1,xData3)
  }

  public PlotPicture(data, xData,xData2,data1,xData3) {
    // data.map(item => {
    //   item.List.sort((a, b) => a.strain - b.strain);
    // });
    this.options = {
      title: {
        text: '工程应力工程应变'
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
      this.options.series.push({
        symbolSize: 5,
        data: temp,
        type: "line",
        name:item.sampleCode+"-"+item.testTarget,
  
      })
      console.log(temp); 
      this.options.legend.data.push(item.sampleCode+"-"+item.testTarget)
    })
   
   this. option2 = {
      title: {
        text: '真应力真应变'
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
      this.option2.series.push({
        symbolSize: 5,
        data: temp2,
        type: "line",
        name:item.sampleCode+"-"+item.testTarget,
      })
      console.log(temp2); 
      this.option2.legend.data.push(item.sampleCode+"-"+item.testTarget)
    })
    this. option3 = {
      title: {
        text: '真塑性应变真应力'
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
          return `  <div style="color: black;">真塑性应变：${((params[0].axisValueLabel)/1000).toFixed(4)}</div>   
          <div style="color: black;">真应力：<br/><a style="color: black;">${text}</a></div>  
             `
        }
  },
      xAxis: {
        data: xData3,
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
    let temp3 = [];
    data1.map(item => {
      temp3 = [];
      item.List.map(i => {
        temp3.push( [(i.realPlasticStrain*1000).toFixed(4),i.realPlasticStress]);
      });
      temp3.sort((a,b)=>{return Number(a[0])-Number(b[0])});
      this.option3.series.push({
        symbolSize: 5,
        data: temp3,
        type: "line",
        name:item.testTarget,
      })
      console.log(temp2); 
      this.option3.legend.data.push(item.testTarget)
    })
  };
  classitem(arry,arry1){
    arry1.map(mapItem=>{
    if (arry.length == 0) {
      arry.push({ highSpeedStrechDataDetailId: mapItem.highSpeedStrechDataDetailId, List: [mapItem] })
    } else {
       let res = arry.some(item=> {//判断相同highSpeedStrechDataDetailId，有就添加到当前项
        if (item.highSpeedStrechDataDetailId == mapItem.highSpeedStrechDataDetailId) {
          item.List.push(mapItem)
          return true
        }
      })
      if (!res) {//如果没找相同staticTensionDataDetailId添加一个新对象
        arry.push({ staticTensionDataDetailId: mapItem.staticTensionDataDetailId, List: [mapItem] })
      }
    } })
  }
}
