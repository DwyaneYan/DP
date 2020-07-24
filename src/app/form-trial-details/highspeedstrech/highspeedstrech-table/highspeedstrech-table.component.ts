import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NzTreeHigherOrderServiceToken } from 'ng-zorro-antd';
import { ApiService } from 'src/app/api.service';
import { GaussService } from 'src/app/gauss.service';

@Component({
  selector: 'app-highspeedstrech-table',
  templateUrl: './highspeedstrech-table.component.html',
  styleUrls: ['./highspeedstrech-table.component.css']
})
export class HighspeedstrechTableComponent implements OnInit {
  public materialId
  trialDataDetail=[]
  baseInfo
  trialDataDetailss=[]
  one=[]
  two=[]
  three=[]
  mater=[]
  table1=["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法","取样方向",]
  table2=["材料牌号","屈服强度Rp(MPa)","抗拉强度Rm(MPa)","断后伸长率A(％)","弹性模量E(MPa)","杨氏模量(MPa)","泊松比"]
  table3=["formYieldStrength","formTensileStrength","formModulusOfElasticity","formElongation","youngModulu","poissonRatio"]
  table4=["拉伸速率","样件编号","样品厚度t/mm(实测值)","标距段宽度w/mm(实测值)","屈服强度(MPa)","抗拉强度(MPa)","断后伸长率(%)","拉伸速度(m/s)"]
  width=["120px","150px","180px","180px","180px","180px","180px","150px"]
  table5=["testTarget","sampleCode","thickness","gaugeDistance","yieldStrength","tensileStrength","elongation","stretchingSpeed"]
  table6=["testOrganization","dates","dateEnds","standard","equipment","testMethod","direction"]
  
  // isVisible = false;
  // options;
  options={options:{}};
isVisible = {isVisible :false}
  contrastTable(params, des,one) {
      let data = [];
  console.log(data)
      let xData = [];
      for (const iterator of one) {
        data.push(iterator[params]);
        xData.push(iterator['sampleCode']);    
      }
  let gauss=this.GaussService.gauss(data)
  let hist=this.GaussService.hist(data)
  let xAll = (gauss.x).concat(hist.pxLast)
   xAll.sort((a, b) => {
    return Number(a) - Number(b);
  });
  console.log(gauss,hist)
  // this.PlotPicture(gauss.y,xAll,des,hist.data1,gauss.xGauss);
  this.GaussService.PlotPicture(gauss.y,xAll,des,hist.data1,gauss.xGauss,this.isVisible,this.options)
  console.log(this.isVisible.isVisible,this.options.options )
  //
  //     this.PlotPicture(data, xData,des);
    }
    handleOk(): void {
      this.isVisible.isVisible  = false;
    }
  
  handleCancel(): void {
      this.isVisible.isVisible  = false;
    }
  // public PlotPicture(data, xData, des) {
  //       this.isVisible = true;
  //       this.options = {
  //         title: {
  //           text: des,
  //           x: "center",
  //           y: "top"
  //         },
  //         xAxis: {
  //           type: "category",
  //           data: xData
  //         },
  //         yAxis: {
  //           type: "value"
  //         },
  //         series: [
  //           {
  //             data: data,
  //             type: "line"
  //           }
  //         ]
  //       };
  //     }
  constructor(  private router: Router,
    public http: HttpClient,
    private ApiService: ApiService,
    private GaussService: GaussService,

    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetBaseInfo(this.materialId);
    this.GetTrialDataDetailss()
  }

  public async GetBaseInfo(p){
    let param={id:`${p}`}
    // let api = "http://localhost:60001/api/hangang/material/materials?Id=";
    await this.ApiService.GetMater(param)
    .then((res:any)=>{
      this.baseInfo = res.items
    })
    // console.log(this.baseInfo)
    this.mater.push(
      this.baseInfo[0].name,
    )
  }
  public async GetTrialDataDetails() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetails/${materialId}`;
    await this.ApiService.getHighSpeedStrechDataDetails(this.materialId)
    .then((res: any) => {
      this.trialDataDetail = res
      for(let a=0;a<this.trialDataDetail.length;a++)
{if(this.trialDataDetail[a].standard==null){
this.two.push(this.trialDataDetail[a])
}
else{this.one.push(this.trialDataDetail[a])}
}
this.one[0].dates= this.one[0].dates.split("T")[0];
this.one[0].dateEnds= this.one[0].dateEnds.split("T")[0];
console.log(this.one[0])
    })  
  
  }
  speeds=[]
  strainData=[]
  stress=[]
  nzWidthConfig4=[]
  nzScroll4={}
  nzScrolls={}
  public async GetTrialDataDetailss() {
    // let materialId = this.materialId
    // let api1=`http://localhost:60001/api/hangang/materialTrial/highSpeedStrechDataDetailStressStrainExtends/${materialId}`;
    await this.ApiService.getHighSpeedStrechDataDetailStressStrainExtends(this.materialId)
    .then((res: any) => {
      this.trialDataDetailss = res
      let speed=[]
         this.trialDataDetailss.map(val=>speed.push(val.realPlasticTestTarget))        
         this.speeds=this.unique1(speed)
         for(let c=1;c<this.speeds.length+1;c++){
          this.nzWidthConfig4[0]='130px'
          this.nzWidthConfig4[c]='110px'
         }
         this.nzScrolls={y:'700px',x:(this.speeds.length*110+130) +"px"}
        //  let ele=document.getElementsByClassName('tablebox')[0] as HTMLElement
        //  ele.style.width = (this.speeds.length*110+130) +"px";
        
         let arr3=[]
         let strain=[]
         arr3=this.classitem(this.trialDataDetailss,'realPlasticTestTarget') ;//延伸到1 
         arr3[0].List.map(val=>strain.push(val.realPlasticStrainHalf))       
         console.log(strain) 
         this.strainData=this.notempty(strain)
       for(let b=0;b<this.strainData.length;b++){
       this.stress[b]=[]
       for(let a=b;a<this.trialDataDetailss.length;a+=this.trialDataDetailss.length/arr3.length){
        this.stress[b].push(this.trialDataDetailss[a].realPlasticStressHalf)
       }
        }
         })
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
unique1(array) {
  var n = []; //一个新的临时数组
  //遍历当前数组
  for (var i = 0; i < array.length; i++) {
    //如果当前数组的第i已经保存进了临时数组，那么跳过，
    //否则把当前项push到临时数组里面
    if (n.indexOf(array[i]) == -1) n.push(array[i]);
  }
  return n;
}
notempty(a) {
  var arr = [];
  a.map(function(val, index) {
      //过滤规则为，不为空串、不为null、不为undefined，也可自行修改
      if (val !== "" && val != undefined) {
          arr.push(val);
      }
  });
  return arr;
}
}
