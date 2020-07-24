import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Test } from 'src/testData';
import { ApiService } from 'src/app/api.service';
import * as math from "mathjs"
import { GaussService } from 'src/app/gauss.service';

@Component({
  selector: 'app-static-tension-table',
  templateUrl: './static-tension-table.component.html',
  styleUrls: ['./static-tension-table.component.css']
})
export class StaticTensionTableComponent implements OnInit {
testData=Test
  public materialId
  trialDataDetails
  //存放查到的试验数据详情
  public trialDataDetail = [] 
  trialDataDetail1=[]
  trialDataDetail2=[]
  visible = false;
  length = 0

  //添加数据表单
  public postParams = {
    materialTrialDataId:'',
    standard:'',
    serialNumber:0,
    sampleCode:'',
    length:0,
    width:0,
    thickness:0,
    diameter:0,
    gaugeDistance:0,
    nonProportionalExtendRatio:0,
    yieldStrength:0,
    tensileStrength:0,
    strainHardening:0,
    elongation:0,
    plasticStrainRatio:0,
    modulusOfElasticity:0,
    poissonRatio:0,
    maximumForce:0,
  }
table1=['测试机构','开始检测日期','检测结束日期','执行标准','试验设备','试验方法','标距(mm)']
table2=["位置",'方向','试样厚度a(mm)','屈服强度Rp(MPa)','抗拉强度Rm(MPa)','应变硬化指数(n)','断后伸长率A(％)','塑性应变比γ(%)','弹性模量E(MPa)','泊松比μ','最大力Fm(kN)','烘烤硬化值(BH)','180°弯曲试验(弯曲压头直径D)','V型冲击试验温度(℃)','V型冲击试验吸收能量(KV2/J)']
table3=['130px','130px','150px','150px','150px','150px','150px','150px','150px','100px','150px','150px','150px','150px','150px']
table4=["sampleCode",'direction','thickness','yieldStrength','tensileStrength','strainHardening','elongation','plasticStrainRatio','modulusOfElasticity','poissonRatio','maximumForce','bhValue','indenterDiameter','vImpactTemperature','vImpactEnergy']
table5=["testOrganization","dates","dateEnds","standard","equipment","testMethod","gaugeDistance"]
// isVisible =false;
isVisible = {isVisible :false}
data=["trialDataDetail1","trialDataDetail2"]
options={options:{}};
  //抽屉
  open(): void {
    this.visible = true;
  }
  close(): void {
    this.visible = false;
  }
  contrastTable(params, des,c) {
        let data = [];
        let xData = [];
        for (const iterator of c) {
          data.push(iterator[params]);
          xData.push(iterator['sampleCode']);    
        }
  //   //均值全都保留四位小数
  //  let mean = Number((data.reduce(this.sum)/data.length).toFixed(4))
  //  //标准差
  //  let deviations = data.map(x=>{ return x-mean})
  //  let stddev = Number(math.sqrt(deviations.map(this.square).reduce(this.sum)/(data.length-1)).toFixed(4))
  //  //最大值
  //  let max = math.max.apply(null,data)
  //  //最小值
  //  let min = math.min.apply(null,data)
  //  //置信区间
  //  this.length = data.length
  //  let xp = this.generaterArray(mean-3*stddev,mean+3*stddev,6*stddev/data.length)
  //  //正态分布图的横坐标
  //  let x = xp.map(val=>Number(val.toFixed(4)))
  //  let probability = this.generaterArray(mean-3*stddev,mean+3*stddev,6*stddev/data.length)
  //  let px = probability.map(val=>Number(val.toFixed(4)))
  //  console.log(x.length,px)
  //  //求概率
  //  let lengthPx = px.length
  //  let arrP = new Array(lengthPx-1)
  //  //概率分布图的横坐标
  //  let pxLast = new Array(lengthPx-1)
  //  let arr = []
  //  //概率分布图的横纵坐标
  //  let data1 =  new Array(lengthPx-1)
  //  for(let a=0;a<lengthPx-1;a++){
  //   for(let b=0;b<this.length;b++){
  //       if(px[a] <= data[b] && data[b]<= px[a+1]){
  //        arr.push(data[b])
  //       }
  //   }
  //       arrP[a] = arr.length/this.length
  //       pxLast[a]= (px[a] + px[a+1])/2
  //       data1[a]=[ pxLast[a],arrP[a]]
  //       arr = []
  //  }
  //  let xAll = x.concat(pxLast)
  //  xAll.sort((a, b) => {
  //   return Number(a) - Number(b);
  // });
  //  console.log(arrP,pxLast,data1,xAll)

  // //  console.log( max,min,mean-3*stddev,mean+3*stddev,xp,stddev)
  // //正太分布图的纵坐标
  //  let y = xp.map(val=>this.gaussFunc(val,mean,stddev))
  //  let xGauss = x.map((val,index)=>{
  //    return [val,y[index]]
  //  })
  //  console.log(xp,y,pxLast,arrP)
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
  }
    //生成置信区间数组
    generaterArray(min,max,step){
      //  let len = Math.abs(max - min);
      //  if(len <= 0) return [];
  //    let arr = new Array(a);
  let arr = []
      // let arr = []
      // let length = a
      // let cNum = min;
      // let cIndex = 0;
      for(let b=0; ;b++){
        arr.push(min);
        min += step
        if(min>=max)break
      }
      return arr
      console.log(arr)
      // function addArr(index,val){
      //     if(cNum >= min && cNum <= max){
      //         arr[index] = cNum;
      //         cNum += step;
      //         cIndex++;
      //         addArr(cIndex,cNum)
             
      //     }
      // }
      // addArr(cIndex,cNum);
      // return arr.filter(item => item%step == 0);
  }

    //高斯函数算正太分布的概率密度
    gaussFunc(x,mean,sigma){
     return  math.exp(-((x-mean)**2)/(2*sigma**2))/(sigma*math.sqrt(2*math.pi))

    }
    //求和函数
    sum(x,y){
      return x+y
    }
    //数组中每个元素的平方
    square(x){
      return x*x
    }
  handleOk(): void {
    console.log("Button ok clicked!");
    this.isVisible.isVisible  = false;
  }


    
    handleCancel(): void {
        console.log("Button cancel clicked!");
        this.isVisible.isVisible  = false;
      }
    //   public PlotPicture(data, xData, des,data1,data2) {
    //     this.isVisible = true;
    //     this.options = {
    //       title: {
    //         text: des,
    //         x: "center",
    //         y: "top"
    //       },
    //       xAxis: {
    //         type: "value",
    //          //data: xData
    //          scale:true
    //       },
    //       yAxis: {
    //         type: "value"
    //       },
    //       series: [
    //   //正态曲线
    //         {
    //           data:data2,
    //           type: "line",
    //           smooth:true,
        
    //         },
    // //概率分布条形图
    // {
    //             data: data1,
    //             type: "bar",
         
    //           }
    //       ]
    //     };
    //   }
    
  
  constructor(
    public http: HttpClient,
    private router: Router,
    private ApiService: ApiService,
    private GaussService: GaussService,

  ) { }

  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
      // console.log(this.materialId)
console.log(this.testData[0].data[0])
    this.GetTrialDataDetails();
    this.GetTrialDataDetail();
  }

  public async GetTrialDataDetails() {
    //let materialId = this.materialId
    //let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetails/${materialId}`;
    await this.ApiService.getStaticTensionDataDetails(this.materialId)
    .then((res: any) => {    
    this.trialDataDetail = res
    console.log(this.trialDataDetail)
    }) 
  this.trialDataDetail[0].dates= this.trialDataDetail[0].dates?this.trialDataDetail[0].dates.split("T")[0]:'';
  this.trialDataDetail[0].dateEnds= this.trialDataDetail[0].dateEnds?this.trialDataDetail[0].dateEnds.split("T")[0]:'';
  this.trialDataDetail1=this.trialDataDetail.slice(0,this.trialDataDetail.length-9)
  this.trialDataDetail2=this.trialDataDetail.slice(this.trialDataDetail.length-9)
  }
  
  public async GetTrialDataDetail() {
    // let materialId = this.materialId
    // let api =`http://localhost:60001/api/hangang/materialTrial/staticTensionDataDetailRequirements/${materialId}`;
    await this.ApiService.getStaticTensionDataDetailRequirements(this.materialId)
    .then((res: any) => {    
    this.trialDataDetails = res

    }) 
  }
}
