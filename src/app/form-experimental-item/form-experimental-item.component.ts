import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'
// import { NzMessageService } from 'ng-zorro-antd/message';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { Test } from 'src/testData';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
//import { FormMaterialListComponent } from '../form-material-list/form-material-list.component'

@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class FormExperimentalItemComponent implements OnInit {
  @Input() materialId
// testData=Test

  // profileForm = this.fb.group({
  //   carName: ['', Validators.required],
  //   jiankuang: [''],
  //   lingjian: [''],
  //   yaoqiu: [''],
   
  // });
  // profileForm:FormGroup
carid//此id
  isVisible = false;
  id=[]//所有id
  car=[] //查到的应用案例车型
  nzCustomRequestOne
  nzCustomRequestTwo
  maUrl1
  maUrl2
  // button=true
  // validateForm!: FormGroup;
  public trials
  public trialName=[]
  // public staticTension
  // public compress
  // public highspeedTension
  // public dizhoupilao
  // public gaozhoupilao
  // public jinxiang
  // public wulixingneng
  // public jinyongwuzhi
  // public biaomianxn
  // public bend
  // public chemical
  // public kangAoxn
  // public ercijiagongcx
  // public fanbiankouhexn
  // public qingzhiyanchikl
  // public hanjiexn
  // public jiaojiexn
  // public tuzhuangxn
  // public FLD
  // public huitanxn
  // public hongkaoyh


  constructor(
    private experimentalItemService: ExperimentalItemService,
    // private fb: FormBuilder,
    public http: HttpClient,
    public ApiService: ApiService,
   //private FormMaterialListComponent:FormMaterialListComponent,

    // private msg: NzMessageService 

  ) { } 
  permissions
  data
  // listOfAllData=[{materialId:this.materialId}]
   arr1=[]
   arr2=[]

   arr3=[]

  menu1=[{name:"static-tension-home",children:['jtls1','jtls2','jtls3','jtls4'],luyou:'static-tension-home',names:"静态拉伸"},
  {name:"compression",children:['ys1','ys2','ys3','ys4'],luyou:"compression",names:"压缩"},
  {name:"metallographic",children:['jx1','jx2','jx3','jx4'],luyou:"metallographic",names:"金相"},
  {name:"physicalperformance",children:['wlxn1','wlxn2','wlxn3','wlxn4'],luyou:"physicalperformance",names:'物理性能'},
  {name:"chemicalelement",children:['hxcf1','hxcf2','hxcf3','hxcf4'],luyou:'chemicalelement',names:"化学成分"},
  {name:"prohibited-substance",children:['jywz1','jywz2','jywz3','jywz4'],luyou:'prohibited-substance',names:'禁用物质'},
  {name:"surface-property",children:['bmxn1','bmxn2','bmxn3','bmxn4'],luyou:'surface-property',names:"表面性能"},
  {name:"bake-hardening",children:['hkyh1','hkyh2','hkyh3','hkyh4'],luyou:'bake-hardening',names:"烘烤硬化"}]
  menu2=[{name:"bending",children:['wq1','wq2','wq3','wq4'],luyou:'bending',names:"弯曲"},
  {name:"fld",children:['fld1','fld2','fld3','fld4'],luyou:'fld',names:"成型极限FLD"},
  {name:"dent-resistance",children:['kaxn1','kaxn2','kaxn3','kaxn4'],luyou:'dent-resistance',names:"抗凹性能"},
{name: "flanging-clasp",children:['fbkh','fbkh2','fbkh3','fbkh4'],luyou:'flanging-clasp',names:"翻边扣合性能"},
{name:"welding",children:['hjxn1','hjxn2','hjxn3','hjxn4'],luyou:'welding',names:"焊接性能"},
{name:"cementing",children:['jjxn1','jjxn2','jjxn3','jjxn4'],luyou:'cementing',names:"胶结性能"},
{name:"painting",children:['tzxn1','tzxn2','tzxn3','tzxn4'],luyou:'painting',names:"涂装性能"},
{name:"rebound",children:['htxn1','htxn2','htxn3','htxn4'],luyou:'rebound',names:"回弹性能"}]
menu3=[{name:"secondary-working-embrittlement",children:['ecjgcx1','ecjgcx2','ecjgcx3','ecjgcx4'],luyou:'secondary-working-embrittlement',names:"二次加工脆性"},
{name:"hydrogen-induced-delayed-fracture",children:['qzyckl1','qzyckl2','qzyckl3','qzyckl4'],luyou:'hydrogen-induced-delayed-fracture',names:"氢致延迟开裂"},
{name:"highspeedstrech",children:['gsls1','gsls2','gsls3','gsls4'],luyou:'highspeedstrech',names:"高速拉伸" },
{name:"lowcyclefatigue",children:['dzpl1','dzpl2','dzpl3','dzpl4'],luyou:'lowcyclefatigue',names:"低周疲劳"},
{name:"highcyclefatigue",children:['gzpl1','gzpl2','gzpl3','gzpl4'],luyou:'highcyclefatigue',names:"高周疲劳"}]
str1=''
  ngOnInit() {
    this.GetTrials(this.materialId)
   // this.FormMaterialListComponent.luyou(this.listOfAllData,this.arr)

    this.getCar()
  
    // this.permissions =JSON.parse(window.sessionStorage.getItem("permissions"))
    // this.data=JSON.parse(window.sessionStorage.getItem("data"))
    // console.log(this.router )
    // let url=location.href
    // let index=url.lastIndexOf('\/')
    // let str = url.substring(0,index);
    // let index1=str.lastIndexOf("\/")
    // this. str1 = str.substring(index1 + 1,str.length);

     console.log(this.button('put'))
}
routerLink1=[]
routerLink2=[]

routerLink3=[]

 async GetTrials(materialId){
  await this.ApiService.GetTrials(materialId).then((res:any) => {
    this.trials = res
  })
this.trials.forEach((val,i,array) => {
  this.trialName.push(val.name)
});
console.log(this.trialName)
// this.staticTension = this.trialName.includes("静态拉伸")
// this.compress = this.trialName.includes("压缩")
// this.highspeedTension = this.trialName.includes("高速拉伸")
// this.dizhoupilao = this.trialName.includes("低周疲劳")
// this.gaozhoupilao = this.trialName.includes("高周疲劳")
// this.jinxiang = this.trialName.includes("金相")
// this.wulixingneng = this.trialName.includes("物理性能")
// this.jinyongwuzhi = this.trialName.includes("禁用物质")
// this.biaomianxn = this.trialName.includes("表面性能")
// this.bend = this.trialName.includes("弯曲")
// this.chemical =  this.trialName.includes("化学成分")
// this.kangAoxn = this.trialName.includes("抗凹性能")
// this.ercijiagongcx = this.trialName.includes("二次加工脆性")
// this.fanbiankouhexn = this.trialName.includes("翻边扣合性能")
// this.qingzhiyanchikl = this.trialName.includes("氢致延迟开裂")
// this.hanjiexn = this.trialName.includes("焊接性能")
// this.jiaojiexn = this.trialName.includes("胶结性能")
// this.tuzhuangxn = this.trialName.includes("涂装性能")
// this.FLD = this.trialName.includes("成型极限")
// this.huitanxn = this.trialName.includes("回弹性能")
// this.hongkaoyh = this.trialName.includes("烘烤硬化")
this.arr1=[this.trialName.includes("静态拉伸"),
this.trialName.includes("压缩"),
this.trialName.includes("金相"),
this.trialName.includes("物理性能"),
this.trialName.includes("化学成分"),
this.trialName.includes("禁用物质"),
this.trialName.includes("表面性能"),
this.trialName.includes("烘烤硬化")]
this.arr2=[this.trialName.includes("弯曲"),
this.trialName.includes("成型极限"),
this.trialName.includes("抗凹性能"),
this.trialName.includes("翻边扣合性能"),
this.trialName.includes("焊接性能"),
this.trialName.includes("胶结性能"),
this.trialName.includes("涂装性能"),
this.trialName.includes("回弹性能")]
this.arr3=[this.trialName.includes("二次加工脆性"),
this.trialName.includes("氢致延迟开裂"),
this.trialName.includes("高速拉伸"),
this.trialName.includes("低周疲劳"),
this.trialName.includes("高周疲劳")
]
console.log(this.arr2)
let length1=this.menu1.length
let length2=this.menu2.length
let length3=this.menu3.length
for(let a=0;a<length1;a++){
  this.routerLink1[a]=[]
    if(this.button(this.menu1[a].children[0])){this.routerLink1[a]=[`/display/${this.materialId}/${this.menu1[a].luyou}/table`]}
else if(this.button(this.menu1[a].children[1])){this.routerLink1[a]=[`/display/${this.materialId}/${this.menu1[a].luyou}/picture`]}
else if(this.button(this.menu1[a].children[2])){this.routerLink1[a]=[`/display/${this.materialId}/${this.menu1[a].luyou}/report`]}
else{this.routerLink1[a]=[`/display/${this.materialId}/${this.menu1[a].luyou}/typical-part`]
  }
}
for(let a=0;a<length2;a++){
  this.routerLink2[a]=[]
    if(this.button(this.menu2[a].children[0])){this.routerLink2[a]=[`/display/${this.materialId}/${this.menu2[a].luyou}/table`]}
else if(this.button(this.menu2[a].children[1])){this.routerLink2[a]=[`/display/${this.materialId}/${this.menu2[a].luyou}/picture`]}
else if(this.button(this.menu2[a].children[2])){this.routerLink2[a]=[`/display/${this.materialId}/${this.menu2[a].luyou}/report`]}
else{this.routerLink2[a]=[`/display/${this.materialId}/${this.menu2[a].luyou}/typical-part`]
  }
}
for(let a=0;a<length3;a++){
  this.routerLink3[a]=[]
    if(this.button(this.menu3[a].children[0])){this.routerLink3[a]=[`/display/${this.materialId}/${this.menu3[a].luyou}/table`]}
else if(this.button(this.menu3[a].children[1])){this.routerLink3[a]=[`/display/${this.materialId}/${this.menu3[a].luyou}/picture`]}
else if(this.button(this.menu3[a].children[2])){this.routerLink3[a]=[`/display/${this.materialId}/${this.menu3[a].luyou}/report`]}
else{this.routerLink3[a]=[`/display/${this.materialId}/${this.menu3[a].luyou}/typical-part`]
  }
}
//onsole.log(this.routerLink)
}


cars=[]
public async getCar(){

  await this.ApiService.getCar(this.materialId).then((res: any) => {
   this.cars = res
   for(let a=0;a<this.cars.length;a++){
    this.car[a]=this.cars[a].vehicleType
    this.id[a]=this.cars[a].id
   }
   console.log( this.car)
   console.log( this.id)

 })


}
public  getCar1(event){
 this.isVisible=event
}
public  getCar2(event){
  // this.id.push(event)
  this.getCar()
 }
show(){this.isVisible = true;}

formData =new FormData();
formDataList = []
returnFalse =false
//权限-试验项目目录
// quanxian(p):Boolean{
//   this.data=JSON.parse(window.sessionStorage.getItem("data"))
//   let length=this.data.data[0].children[1].children.length
//   let arr=[]
//   for(let a=0;a<length;a++){
//     arr.push(this.data.data[0].children[1].children[a].meta.title)
//   }
//   console.log(arr)
//   if(arr.indexOf(`${p}`)==-1){
//     return false
//   }
//   else{
//     return true
//   }
// }
// //权限-应用案例目录，不能单独分配目录
// cases(p):Boolean{
//   this.data=JSON.parse(window.sessionStorage.getItem("data"))
//   // let length=
//   let arr=[this.data.data[0].children[2]?this.data.data[0].children[2].meta.title:""]
//   // for(let a=0;a<length;a++){
//   //   arr.push(this.data.data[0].children[1].children[a].meta.title)
//   // }
//   // console.log(arr)
//   if(arr.indexOf(`${p}`)==-1){
//     return false
//   }
//   else{
//     return true
//   }
// }
// //权限-仿真卡片目录，不能单独分配目录
// card(p):Boolean{
//   this.data=JSON.parse(window.sessionStorage.getItem("data"))
//   // let length=
//   let arr=[this.data.data[0].children[3]?this.data.data[0].children[3].meta.title:""]
//   // for(let a=0;a<length;a++){
//   //   arr.push(this.data.data[0].children[1].children[a].meta.title)
//   // }
//   // console.log(arr)
//   if(arr.indexOf(`${p}`)==-1){
//     return false
//   }
//   else{
//     return true
//   }
// }
// //权限-试验项目菜单
// menu(p):Boolean{
//   this.data=JSON.parse(window.sessionStorage.getItem("data"))
//   console.log(this.data)
//   let length1=this.data.data[0].children[1].children.length
// let arr=[]
// let one

//   for(let a=0;a<length1;a++){
//     if(this.data.data[0].children[1].children[a].children){
//        one=this.data.data[0].children[1].children[a].children.length    
//       for(let b=0;b<one;b++){
//         arr.push(this.data.data[0].children[1].children[a].children[b].meta.title)
//       }}
//   }
// console.log(arr)
//   if(arr.indexOf(`${p}`)==-1){
//     return false
//   }
//   else{
//     return true
//   }
// }
//所有按钮权限
button(p):Boolean{
  this.permissions =JSON.parse(window.sessionStorage.getItem("permissions"))
//console.log(this.permissions)
  if(this.permissions.permissions.indexOf(`${p}`)==-1 && this.permissions.roles.indexOf("admin")==-1){
    return false
  }
  else{
    return true //管理员和不是管理员但是有权限的人
  }

}
}
