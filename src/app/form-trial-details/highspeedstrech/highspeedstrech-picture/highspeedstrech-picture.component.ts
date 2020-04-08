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
  option1
  option2
  one=[]
  two=[]
  ImgPathOne=[]
  files
  a1
  a2=[]
  filess=[]
  option3
  file=[]
  trialDataDetails
  //echarts绘图
  options:any;
  constructor( private router: Router,
    public http: HttpClient,) { }
  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetail();
    this.GetTrialDataDetails();
  //   this.lazyload();
  // window.onscroll = this.lazyload;
  }
  public async GetTrialDataDetail() {
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
this.file.push(this.one[0].fileString)
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
    })  
  
  }
  fenge(arry,p){
    let arry1=arry.toString().split(p)
    return arry1
  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrains/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res;     
    }) 
    let xData2=[]
    let xData3=[]
    let xData=[]
    let arr2=[]
    arr2=this.classitem(this.trialDataDetails) ;//工程应力应变、真应力应变
    console.log(arr2)  
    console.log(this.trialDataDetail)
    for(let a=0;a<this.one.length;a++){
        arr2[a].sampleCode=this.one[a].sampleCode;
        arr2[a].testTarget=this.one[a].testTarget;
    }
    this.trialDataDetails.map(mapItem => {
      xData.push((mapItem.engineeringStrain * 10000).toFixed(4));
      xData2.push((mapItem.realStrain * 10000).toFixed(4));
      xData3.push((mapItem.realPlasticStrain * 10000).toFixed(4));
      })
   
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
    // this.PlotPicture(arr2, xData,xData2,xData3)
    this.option1=this.classdata('工程应力工程应变','工程应变','工程应力',xData,arr2,"engineeringStrain",'engineeringStress');
    this.option2=this.classdata('真应力真应变','真应变','真应力',xData2,arr2,"realStrain",'realStress');
    this.option3=this.classdata('真塑性应变真应力','真塑性应变','真应力',xData3,arr2,"realPlasticStrain",'realPlasticStress');
  console.log(this.option1)
  }
classdata(name,p1,p2,da,datas,p3,p4){
  let option = {
    width:'550',
    title: {
      text: name
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
        return `  <div style="color: black;">${p1}：${((params[0].axisValueLabel)/10000).toFixed(4)}</div>   
        <div style="color: black;">${p2}：<br/><a style="color: black;">${text}</a></div>  
           `
      }
},
    xAxis: {
      data: da,
      type: "category",
      axisLabel: {
        formatter: function(val) {
          return (val / 10000).toFixed(4);
        }
      }
    },
    yAxis: {},
    series: [],
    legend:{data:[],
      orient:'vertical',
      right:'30',
     top:'30',
    height:"200",
    
 }
  };
  let temp2 = [];
  datas.map(item => {
    temp2 = [];
    item.List.map(i => {
      temp2.push( [(i[p3]*10000).toFixed(4),i[p4]]);
    });
    temp2.sort((a,b)=>{return Number(a[0])-Number(b[0])});
    option.series.push({
      symbolSize: 5,
      data: temp2,
      type: "line",
      name:item.sampleCode+"-"+item.testTarget,
    })
    option.legend.data.push(item.sampleCode+"-"+item.testTarget)
  })
  return option;
}
  classitem(arry1){
    let arry=[]
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
      if (!res) {//如果没找相同highSpeedStrechDataDetailId添加一个新对象
        arry.push({ highSpeedStrechDataDetailId: mapItem.highSpeedStrechDataDetailId, List: [mapItem] })
      }
    } })
    return arry
  }
  // num=document.getElementsByTagName('img').length;
  // img = document.getElementsByTagName("img");
  // n = 0
  // lazyload(){
  //           // 可见区域高度
  //           var seeHeight = document.documentElement.clientHeight;
  //           // 滚动条距离顶部高度
  //           var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  //           for (var i = this.n; i < this.num; i++) {
  //               if (this.img[i].offsetTop < seeHeight + scrollTop) {
  //                   if (this.img[i].getAttribute("src") == "default.jpg") {
  //                       this.img[i].src = this.img[i].getAttribute("data-original");
  //                   }
  //                  this. n = i + 1;
  //               }
  //           }
  //       }
      
}
