import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'
// import { NzMessageService } from 'ng-zorro-antd/message';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { Test } from 'src/testData';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';

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
  public staticTension
  public compress
  public highspeedTension
  public dizhoupilao
  public gaozhoupilao
  public jinxiang
  public wulixingneng
  public jinyongwuzhi
  public biaomianxn
  public bend
  public chemical
  public kangAoxn
  public ercijiagongcx
  public fanbiankouhexn
  public qingzhiyanchikl
  public hanjiexn
  public jiaojiexn
  public tuzhuangxn
  public FLD
  public huitanxn
  public hongkaoyh


  constructor(
    private experimentalItemService: ExperimentalItemService,
    // private fb: FormBuilder,
    public http: HttpClient,
    public ApiService: ApiService,

    // private msg: NzMessageService 

  ) { } 
  permissions
  data
  ngOnInit() {
    this.GetTrials(this.materialId)

    this.getCar()
  
    // this.permissions =JSON.parse(window.sessionStorage.getItem("permissions"))
    // this.data=JSON.parse(window.sessionStorage.getItem("data"))
    console.log(this.permissions )
}

public async GetTrials(materialId){
  await this.ApiService.GetTrials(materialId).then((res:any) => {
    this.trials = res
  })
this.trials.forEach((val,i,array) => {
  this.trialName.push(val.name)
});
this.staticTension = this.trialName.includes("静态拉伸")
this.compress = this.trialName.includes("压缩")
this.highspeedTension = this.trialName.includes("高速拉伸")
this.dizhoupilao = this.trialName.includes("低周疲劳")
this.gaozhoupilao = this.trialName.includes("高周疲劳")
this.jinxiang = this.trialName.includes("金相")
this.wulixingneng = this.trialName.includes("物理性能")
this.jinyongwuzhi = this.trialName.includes("禁用物质")
this.biaomianxn = this.trialName.includes("表面性能")
this.bend = this.trialName.includes("弯曲")
this.chemical =  this.trialName.includes("化学成分")
this.kangAoxn = this.trialName.includes("抗凹性能")
this.ercijiagongcx = this.trialName.includes("二次加工脆性")
this.fanbiankouhexn = this.trialName.includes("翻边扣合性能")
this.qingzhiyanchikl = this.trialName.includes("氢致延迟开裂")
this.hanjiexn = this.trialName.includes("焊接性能")
this.jiaojiexn = this.trialName.includes("胶结性能")
this.tuzhuangxn = this.trialName.includes("涂装性能")
this.FLD = this.trialName.includes("成型极限")
this.huitanxn = this.trialName.includes("回弹性能")
this.hongkaoyh = this.trialName.includes("烘烤硬化")
// console.log(this.bend,this.chemical)
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
//权限目录
quanxian(p):Boolean{
  this.data=JSON.parse(window.sessionStorage.getItem("data"))
  let length=this.data.data[0].children.length
  let arr=[]
  for(let a=0;a<length;a++){
    arr.push(this.data.data[0].children[a].meta.title)
  }
  if(arr.indexOf(`${p}`)==-1){
    return false
  }
  else{
    return true
  }
}
//权限菜单
menu(p):Boolean{
  this.data=JSON.parse(window.sessionStorage.getItem("data"))
  let length1=this.data.data[0].children.length
let arr=[]
let one

  for(let a=0;a<length1;a++){
    if(this.data.data[0].children[a].children){
       one=this.data.data[0].children[a].children.length    
      for(let b=0;b<one;b++){
        arr.push(this.data.data[0].children[a].children[b].meta.title)
      }}
  }

  if(arr.indexOf(`${p}`)==-1){
    return false
  }
  else{
    return true
  }
}
//按钮权限
button(p):Boolean{
  this.permissions =JSON.parse(window.sessionStorage.getItem("permissions"))
console.log(this.permissions)
  if(this.permissions .permissions.indexOf(`${p}`)==-1){
    return false
  }
  else{
    return true
  }

}
}
