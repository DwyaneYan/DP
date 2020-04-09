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
  trialDataDetail=[{element:'',
  sampleCode:''}]
 arry1=[]
 arry2=[]//去重后的元素符号
 arry3=[]
 arry4=[]
 arry5=[]//去重后的样件编号
 arry6=[]
  table=[{
    table:"table1",
    one:["测试机构","执行标准","试验设备","试验方法"],
    key:["testOrganization","standard","equipment","testMethod"]
},
{
  table:"table2",
  one:["样件编号"],
  key:["sampleCode"]
},
]
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
console.log(this.trialDataDetail)
      this.trialDataDetail.forEach(val=>{this.arry1.push(val.element);
        this.arry4.push(val.sampleCode);})
      this.arry2=this.unique1(this.arry1)
      this.arry5=this.unique1(this.arry4)
      console.log(this.arry5)
      for(let a=0;a<this.arry5.length;a++){
        this.arry3[a]=[]
      for(let b=a;b<this.trialDataDetail.length;b+=this.arry5.length){       
      this.arry3[a].push(this.trialDataDetail[b]);
      }}
      for(let a = 0;a<this.trialDataDetail.length;a+=this.arry5.length){
this.arry6.push(this.trialDataDetail[a])
      }
    }) 
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
}
