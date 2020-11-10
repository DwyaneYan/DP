import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {getname,enlarge,unique1} from 'src/app/picture'

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-highspeedstrech-picture',
  templateUrl: './highspeedstrech-picture.component.html',
  styleUrls: ['./highspeedstrech-picture.component.css']
})
export class HighspeedstrechPictureComponent implements OnInit {
  public materialId
  trialDataDetail
  trialDataDetailss
  three=[]
  four=[]
  public data=[]
  option1
  option2
  one=[]
  two=[]
  ImgPathOne=[]
  option3
  option4
name=[]
  trialDataDetails
  enlarge = enlarge //作为本地变量使用

  //echarts绘图
  options:any;
  constructor( private router: Router,
    public http: HttpClient,

    private ApiService: ApiService,

    ) { }
  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetail();
    this.GetTrialDataDetails();
  //   this.lazyload();
  // window.onscroll = this.lazyload;
  }
  public async GetTrialDataDetail() {
    await this.ApiService.getHighSpeedStrechDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      let length = this.trialDataDetail.length
      for(let a=0;a<length;a++)
{if(this.trialDataDetail[a]&&this.trialDataDetail[a].standard==null){
this.two.push(this.trialDataDetail[a])
}
else{this.one.push(this.trialDataDetail[a])}
}
this.one.map(val=>this.three.push(val.testTarget))
this.four=unique1(this.three)
this.name= getname(this.one[0]?this.one[0].fileString:'').afterName
this.ImgPathOne=getname(this.one[0]?this.one[0].fileString:'').ImgPathOne
    })  
  
  }


  public async GetTrialDataDetails() {
    await this.ApiService.getHighSpeedStrechDataDetailStressStrains(this.materialId)
    .then((res: any) => {
      this.trialDataDetails = res;     
    }) 
    await this.ApiService.getHighSpeedStrechDataDetailStressStrainExtends(this.materialId)
    .then((res: any) => {
      this.trialDataDetailss = res
      console.log(this.trialDataDetailss)
         }) 
         let xData4=[] 
    let xData2=[]
    let xData3=[]
    let xData=[]
    let arr2=[]
    let arr3=[]
    arr2=this.classitem(this.trialDataDetails,"highSpeedStrechDataDetailId") ;//工程应力应变、真应力应变
    arr3=this.classitem(this.trialDataDetailss,'realPlasticTestTarget') ;//延伸到1
    console.log(arr3)
    console.log(arr2)  
//保证顺序正确的情况下，数据插入顺序错位就会发生错误
    // for(let a=0;a<this.one.length;a++){
    //     arr2[a].sampleCode=this.one[a].sampleCode;
    //     arr2[a].testTarget=this.one[a].testTarget;
      
    // }
    
let arr2Length = arr2.length
    for(let a=0;a<this.one.length;a++){

      for(let b = 0;b<arr2Length;b++){
        if(this.one[a].id == arr2[b].highSpeedStrechDataDetailId){
          arr2[b].sampleCode = this.one[a].sampleCode;
          arr2[b].testTarget=this.one[a].testTarget;
        }
      }
  }
  let ids = [];
  this.one.map(val=>ids.push(val.id))
  console.log(ids)
  arr2.sort((prev, next) => {
    return ids.indexOf(prev.highSpeedStrechDataDetailId) - ids.indexOf(next.highSpeedStrechDataDetailId)
  })
   console.log(arr2)
    this.trialDataDetails.map(mapItem => {
      xData.push((mapItem.engineeringStrain * 10000).toFixed(4));
      xData2.push((mapItem.realStrain * 10000).toFixed(4));  
      })
      this.trialDataDetailss.map(mapItem => {
        xData4.push((mapItem.realPlasticStrainExtend * 10000).toFixed(4));
        xData3.push((mapItem.realPlasticStrainHalf * 10000).toFixed(4));
        })
    xData = [...new Set(xData)];
    xData2 = [...new Set(xData2)];
    xData3= [...new Set(xData3)];
    xData4= [...new Set(xData4)];
      xData.sort((a, b) => {
        return Number(a) - Number(b);
      });
    xData2.sort((a, b) => {
      return Number(a) - Number(b);
    }); 
    xData3.sort((a, b) => {
      return Number(a) - Number(b);
    }); 
    xData4.sort((a, b) => {
      return Number(a) - Number(b);
    }); 
    console.log(xData3)
    // this.PlotPicture(arr2, xData,xData2,xData3)
    this.option1=this.classdata('工程应力工程应变','工程应变','工程应力',xData,arr2,"engineeringStrain",'engineeringStress');
    this.option2=this.classdata('真应力真应变','真应变','真应力',xData2,arr2,"realStrain",'realStress');
    this.option3=this.classdata('真塑性应变真应力','真塑性应变','真应力',xData3,arr3,"realPlasticStrainHalf",'realPlasticStressHalf');
    this.option4=this.classdata('真塑性应变真应力延伸到1','真塑性应变','真应力',xData4,arr3,"realPlasticStrainExtend",'realPlasticStressExtend');
  // console.log(this.option4)
  }
classdata(name,p1,p2,da,datas,p3,p4){
  let option = {
    title: {
      text: name
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
    legend: {
      data: [],
      orient: 'horizontal',
      left: '30px',
      top: '40px',
      // height: 200
    },//图例
    grid: {
      // x: 60,
      top:'140px',
      // height:''
      bottom: '50px'
    }//网格线在容器中的位置
  };
  let temp2 = [];
  datas.map(item => {
    temp2 = [];
    item.List.map(i => {
      if(i[p3]!=null){temp2.push( [(i[p3]*10000).toFixed(4),i[p4]]);}
    });
    temp2.sort((a,b)=>{return Number(a[0])-Number(b[0])});
    if(name=="真塑性应变真应力延伸到1" || name=="真塑性应变真应力")
    {
      option.series.push({
        symbolSize: 5,
        data: temp2,
        type: "line",
        name:item.highSpeedStrechDataDetailId,
      })
      option.legend.data.push(item.highSpeedStrechDataDetailId)
    console.log(temp2)

    }else{
    option.series.push({
      symbolSize: 5,
      data: temp2,
      type: "line",
      name:item.sampleCode+"-"+item.testTarget,
    })
    option.legend.data.push(item.sampleCode+"-"+item.testTarget);}
   
  })
  return option;
}
  classitem(arry1,p){
    let arry=[]
    arry1.map(mapItem=>{
    if (arry.length == 0) {
      arry.push({highSpeedStrechDataDetailId: mapItem[p], List: [mapItem] })
    } else {
       let res = arry.some(item=> {//判断相同highSpeedStrechDataDetailId，有就添加到当前项
        if (item.highSpeedStrechDataDetailId == mapItem[p]) {
          item.List.push(mapItem)
          return true
        }
      })
      if (!res) {//如果没找相同highSpeedStrechDataDetailId添加一个新对象
        arry.push({ highSpeedStrechDataDetailId: mapItem[p], List: [mapItem] })
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
