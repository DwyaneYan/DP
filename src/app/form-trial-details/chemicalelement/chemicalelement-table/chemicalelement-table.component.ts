import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chemicalelement-table',
  templateUrl: './chemicalelement-table.component.html',
  styleUrls: ['./chemicalelement-table.component.css']
})
export class ChemicalelementTableComponent implements OnInit {
  public materialId
  trialDataDetail=[]
 arry1=[]
 arry2=[]//去重后的元素符号
 arry3=[]
 arry4=[]
 arry5=[]//去重后的样件编号
 arry6=[]


 arr2=[]//样件编号
 arr3=[]//要求值
 ys=[]//元素名称
 bh=[]
 last=[[],[]]
  table=[{
    table:"table1",
    one:["测试机构",'开始检测日期','检测结束日期',"执行标准","试验设备","试验方法"],
    key:["testOrganization","dates","dateEnds","standard","equipment","testMethod"]
  },
  {
  table:"table2",
  one:["样件编号"],
  key:["sampleCode"]
  } ,
]
isVisible =false;
options;

contrastTable(params) {
      let data = [];
      let xData = [];
      console.log(this.arry3);
      console.log(this.arry6);

      this.arry3.forEach((val,i,array) => {
        data.push(val.filter((item)=>{return item.element == params})[0].contentRatio);
        xData.push(this.arry5[i]);
      })
      
      this.PlotPicture(data, xData, params);
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
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/chemicalElementDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      this.trialDataDetail[0].dates= this.trialDataDetail[0].dates.split("T")[0];
      this.trialDataDetail[0].dateEnds= this.trialDataDetail[0].dateEnds.split("T")[0];
      // this.trialDataDetail.forEach(val=>{this.arry1.push(val.element);
      //   this.arry4.push(val.sampleCode);})
      // this.arry2=this.unique1(this.arry1)
      // this.arry5=this.unique1(this.arry4)
      document.getElementsByClassName('tablebox')[0].querySelector('table').style.width = (120+this.arry2.length*90) +"px";
      let groupCode=this.groupBy( this.trialDataDetail,function (item) {
        return [item.name + item.element];
    })

    let groupCode1=this.groupBy( this.trialDataDetail,function (item) {
      return [item.name + item.sampleCode];
  })//按样件编号分组的结果
  console.log(groupCode1)
let length=groupCode.length//groupCode是按元素名称分组的结果
   //let length3=groupCode1.length
    let arr1=[]
//let length4=this.trialDataDetail.length
    for(let a=0;a<length;a++){
      arr1.push(groupCode[a].length);
      this.arr3.push(groupCode[a][0].requirement)
      this.ys.push(groupCode[a][0].element)
    }  
    let length2=this.max (arr1)

    for(let a=0;a<length;a++){
    if(groupCode[a].length==length2){
      for(let b=0;b<length2;b++){
        this.bh.push(groupCode[a][b].sampleCode)
      }
      break
    }
    }
    let length5=this.bh.length

for(let a=0;a<length;a++){
let arrr=[]
for(let d=0;d<arr1[a];d++){
      arrr.push(groupCode[a][d].sampleCode)}
var newArr = [];
    for (var i = 0; i < length5; i++) {
      //我们将arr2中的元素依次放入函数中进行比较，然后接收函数的返回值
      if (this.exist(this.bh[i],arrr )) { //如果返回的值是true，我们将元素放入新的数组中
        newArr[newArr.length] = this.bh[i];
      }


}

let length9=newArr.length
for(let f=0;f<length9;f++){
groupCode[a].push({element:this.ys[a],sampleCode:newArr[f],contentRatio:''})
}
console.log(groupCode[a])
groupCode[a].sort((a,b)=>{
  return this.bh.indexOf(a.sampleCode)-this.bh.indexOf(b.sampleCode);
});
console.log(groupCode[a])

// let length7=groupCode[a].length
// // console.log(this.last)
// for(let d=0;d<length7;d++){
//   this.last[d]=[]
// this.last[d].push(groupCode[a][d])}
}
var after=[]; //新的数组格式
                for(var i=0;i<groupCode.length;i++){
                    var arr=groupCode[i];
                    for(var t=0;t<arr.length;t++){

                      after.push(arr[t]);   
                    }
                }
console.log(after)
let afterlength=after.length
for(let a=0;a<length5;a++){
  this.last[a]=[]
  for(let b=a;b<afterlength;b+=length5){
    this.last[a].push(after[b])

  }
}

      // this.trialDataDetail[0].dates= this.trialDataDetail[0].dates.split("T")[0];
      // this.trialDataDetail[0].dateEnds= this.trialDataDetail[0].dateEnds.split("T")[0];

    })    
  }


  //对象数组按某个属性值分组
  groupBy(array, f) {

    var groups = {};
    array.forEach(function (o) {
        var group = JSON.stringify(f(o));
        groups[group] = groups[group] || [];
        groups[group].push(o);
    });
    return Object.keys(groups).map(function (group) {
        return groups[group];
    });
}

max (arr){ 
  return Math.max.apply({},arr) 
  }
exist(num, arr1) {
    for (var j = 0; j < arr1.length; j++) {
      if (num === arr1[j]) {
        return false; //如果传过来的元素在arr1中能找到相匹配的元素，我们返回fasle
      }
    }
    return true; //如果不能找到相匹配的元素，返回true
  }
}

