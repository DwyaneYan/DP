import { Component, OnInit, Input } from '@angular/core';
// import { NzMessageService } from 'ng-zorro-antd/message';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { Test } from 'src/testData';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { button } from 'src/app/picture'

@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class FormExperimentalItemComponent implements OnInit {
  button = button
  @Input() materialId:string //dispaly组件传过来的材料id
  isVisible = false; //传给添加车型弹框组件的值，
  ids = [] //这条材料所有车型id数组
  carName=[] //查到的应用案例车型名称
  routerLink = [] //菜单栏路由数组
  public trialName = [] //此材料所做的所有试验项目字符串数组
  arr = [] //true false数组
  //菜单栏数组信息
  menu=[{name:"static-tension-home",children:['jtls1','jtls2','jtls3','jtls4'],names:"静态拉伸"},
  {name:"compression",children:['ys1','ys2','ys3','ys4'],names:"压缩"},
  {name:"metallographic",children:['jx1','jx2','jx3','jx4'],names:"金相"},
  {name:"physicalperformance",children:['wlxn1','wlxn2','wlxn3','wlxn4'],names:'物理性能'},
  {name:"chemicalelement",children:['hxcf1','hxcf2','hxcf3','hxcf4'],names:"化学成分"},
  {name:"prohibited-substance",children:['jywz1','jywz2','jywz3','jywz4'],names:'禁用物质'},
  {name:"surface-property",children:['bmxn1','bmxn2','bmxn3','bmxn4'],names:"表面性能"},
  {name:"bake-hardening",children:['hkyh1','hkyh2','hkyh3','hkyh4'],names:"烘烤硬化"},
  {name:"bending",children:['wq1','wq2','wq3','wq4'],names:"弯曲"},
  {name:"fld",children:['fld1','fld2','fld3','fld4'],names:"成型极限FLD"},
  {name:"dent-resistance",children:['kaxn1','kaxn2','kaxn3','kaxn4'],names:"抗凹性能"},
  {name: "flanging-clasp",children:['fbkh1','fbkh2','fbkh3','fbkh4'],names:"翻边扣合性能"},
  {name:"welding",children:['hjxn1','hjxn2','hjxn3','hjxn4'],names:"焊接性能"},
  {name:"cementing",children:['jjxn1','jjxn2','jjxn3','jjxn4'],names:"胶结性能"},
  {name:"painting",children:['tzxn1','tzxn2','tzxn3','tzxn4'],names:"涂装性能"},
  {name:"rebound",children:['htxn1','htxn2','htxn3','htxn4'],names:"回弹性能"},
  {name:"secondary-working-embrittlement",children:['ecjgcx1','ecjgcx2','ecjgcx3','ecjgcx4'],names:"二次加工脆性"},
  {name:"hydrogen-induced-delayed-fracture",children:['qzyckl1','qzyckl2','qzyckl3','qzyckl4'],names:"氢致延迟开裂"},
  {name:"highspeedstrech",children:['gsls1','gsls2','gsls3','gsls4'],names:"高速拉伸" },
  {name:"lowcyclefatigue",children:['dzpl1','dzpl2','dzpl3','dzpl4'],names:"低周疲劳"},
  {name:"highcyclefatigue",children:['gzpl1','gzpl2','gzpl3','gzpl4'],names:"高周疲劳"}]


  constructor(
    public http: HttpClient,
    public ApiService: ApiService,
  ) { } 

  ngOnInit() {
    this.GetTrials()
    this.getCar()
}

 async GetTrials(){
  await this.ApiService.GetTrials(this.materialId).then((res:any) => {
    res.forEach((val) => {
      this.trialName.push(val.name)
    });   
  })
  //字符串数组的includes方法，存在返回true，不存在返回false
this.arr=[this.trialName.includes("静态拉伸"),
this.trialName.includes("压缩"),
this.trialName.includes("金相"),
this.trialName.includes("物理性能"),
this.trialName.includes("化学成分"),
this.trialName.includes("禁用物质"),
this.trialName.includes("表面性能"),
this.trialName.includes("烘烤硬化"),
this.trialName.includes("弯曲"),
this.trialName.includes("成型极限"),
this.trialName.includes("抗凹性能"),
this.trialName.includes("翻边扣合性能"),
this.trialName.includes("焊接性能"),
this.trialName.includes("胶结性能"),
this.trialName.includes("涂装性能"),
this.trialName.includes("回弹性能"),
this.trialName.includes("二次加工脆性"),
this.trialName.includes("氢致延迟开裂"),
this.trialName.includes("高速拉伸"),
this.trialName.includes("低周疲劳"),
this.trialName.includes("高周疲劳")
]
let length = this.menu.length
for(let a=0;a<length;a++){
  this.routerLink[a]=[`/display/${this.materialId}/${this.menu[a].name}`]
  }

}



public async getCar(){
  await this.ApiService.getCar(this.materialId).then((res: any) => {
    this.carName = []
    this.ids = []
   res.forEach(element => {
     this.carName.push(element.vehicleType)
     this.ids.push(element.id)
   });
 })


}
//关闭添加车型弹框
public  getCar1(event){
 this.isVisible = event
}

 //弹出添加车型弹框
show(){
  this.isVisible = true;
}

}
