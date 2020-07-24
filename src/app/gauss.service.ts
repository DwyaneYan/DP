import { Injectable } from '@angular/core';
import * as math from "mathjs"

@Injectable({
  providedIn: 'root'
})
export class GaussService {

  constructor() { }
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
       //生成置信区间数组
    generaterArray(min,max,step){
      let arr = []
      for(let b=0; ;b++){
        arr.push(min);
        min += step
        if(min>=max)break
      }
      return arr
  }
  //正太曲线横纵坐标
  gauss(data){
     //均值全都保留四位小数
   let mean = Number((data.reduce(this.sum)/data.length).toFixed(4))
   //标准差
   let deviations = data.map(x=>{ return x-mean})
   let stddev = Number(math.sqrt(deviations.map(this.square).reduce(this.sum)/(data.length-1)).toFixed(4))
   //最大值
  //  let max = math.max.apply(null,data)
  //  //最小值
  //  let min = math.min.apply(null,data)
   //置信区间
  //  this.length = data.length
   let xp = this.generaterArray(mean-3*stddev,mean+3*stddev,6*stddev/data.length)
   //正态分布图的横坐标
   let x = xp.map(val=>Number(val.toFixed(4)))
   //正态分布图的纵坐标
   let y = xp.map(val=>this.gaussFunc(val,mean,stddev))
   let xGauss = x.map((val,index)=>{
    return [val,y[index]]
  })
   return {x,y,xGauss}
  }
  //概率分布图的横纵坐标
  hist(data){
     //均值全都保留四位小数
   let mean = Number((data.reduce(this.sum)/data.length).toFixed(4))
   //标准差
   let deviations = data.map(x=>{ return x-mean})
   let stddev = Number(math.sqrt(deviations.map(this.square).reduce(this.sum)/(data.length-1)).toFixed(4))
    let probability = this.generaterArray(mean-3*stddev,mean+3*stddev,6*stddev/data.length)
   let px = probability.map(val=>Number(val.toFixed(4)))
   //求概率
   let lengthPx = px.length
   let arrP = new Array(lengthPx-1)
   //概率分布图的横坐标
   let pxLast = new Array(lengthPx-1)
   let arr = []
   //概率分布图的横纵纵坐标
   let data1 =  new Array(lengthPx-1)
   for(let a=0;a<lengthPx-1;a++){
    for(let b=0;b<data.length;b++){
        if(px[a] <= data[b] && data[b]<= px[a+1]){
         arr.push(data[b])
        }
    }
        arrP[a] = arr.length/data.length
        pxLast[a]= (px[a] + px[a+1])/2
        data1[a]=[ pxLast[a],arrP[a]]
        arr = []
   }
   return {pxLast,arrP,data1}
  }
  //画图
   PlotPicture(data, xData, des,data1,data2,isVisible,options) {
     isVisible.isVisible  = true;
        options.options  = {
          title: {
            text: des,
            x: "center",
            y: "top"
          },
          xAxis: {
            type: "value",
             //data: xData
             scale:true
          },
          yAxis: {
            type: "value"
          },
          series: [
      //正态曲线
            {
              data:data2,
              type: "line",
              smooth:true,
        
            },
    //概率分布条形图
    {
                data: data1,
                type: "bar",
         
              }
          ]
        };
    // console.log(    options)

      }

}
