import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap} from 'rxjs/operators';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';
import { ApiService } from 'src/app/api.service';

// import { Observable } from 'rxjs/observable';
// import { of } from 'rxjs/observable/of';
// import { Observable} from "rxjs";
import { of } from "rxjs"
import { SimulationCardComponent } from "src/app/simulation-card/simulation-card.component"

import pdf from 'pdfobject'
import { NzMessageService } from 'ng-zorro-antd/message';
//import { FormModifyCarComponent } from 'src/app/form-modify-car/form-modify-car.component';
@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  isVisible = false;
  isVisibless=false//导出应用案例
  isVisiblessde=false
  breif//简况
  arr1=[]
ImgPathOne=[]
  case//应用案例详情
  car//应用案例id
  suppliedPart//零件名称
  requirement//要求
  photo//图片
  file//文件

  constructor( private route: ActivatedRoute,
    private router: Router,
    public http: HttpClient,
    private nzMessageService: NzMessageService,
    private SimulationCardComponent: SimulationCardComponent,
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
    public ApiService: ApiService,

    ) { }
  materialId
  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    // this.car = this.route.snapshot.paramMap.get('car');  
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(params.get('car'))
      )).subscribe((data) => {
        this.getform(data)
        this.car=data
        console.log(this.car)
        this.arr1=[];
        this.ImgPathOne=[]
        this.file=' '
        
        this.getBrief(data)

      });

  }
  getCar(){
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(params.get('car'))
      )).subscribe((data) => {
        // this.car=data
        this.arr1=[];
        this.ImgPathOne=[]
        this.file=' '
        this.getBrief(data)
this.getform(data)
      });
  }
three = [] //图片名
public  async getBrief(p){
  // let api =`http://localhost:60001/api/hangang/materialTrial/${p}/applicationCaseById`;
  await this.ApiService.getApplicationCaseById(p)
  .then((res: any) => {
    this.breif = res.breif,
    this.suppliedPart=res.suppliedPart;
this.requirement=res.requirement,
this.photo=res.fileString;//应用案例的图片可以上传多个，不会被覆盖
this.file=res.fileKey;//应用案例的文件显示，数据库里始终只会存一个文件，修改上传会覆盖原来的
console.log(res)
if(res.fileKey){
let files=this.file.slice(0,this.file.length-1)

let b=`/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${files}`
     pdf.embed(b, "#pdf1")
}
if(this.photo){
let one=this.photo.split(";")
one.pop();//one得到文件全名的数组
let x =one.length;
for(let a=0;a<x;a++){
  let d= one[a].indexOf("_")//每个文件名字符串中的第一个_出现的位置
  let f=one[a].lastIndexOf(".")//每个文件名字符串中的最后一个.出现的位置
  this.three.push(one[a].slice(d+1,f-1))//this.three是文件名除去_之前的字符
}
// let b=this.fenge(a,/[_.]/)
// console.log(b)
// for(let c=1;c<b.length;c+=2){
//   this.arr1.push(b[c]) //arr1是图片的真实名称，上传的图片名中最好不要带_和.这两个字符
// }
for(let d=0;d<x;d++){  
   let picture=one[d]
  this.ImgPathOne.push(`/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${picture}`)
}}

  })
}

fenge(arry,p){
  let arry1=arry.toString().split(p)
  return arry1
}
cancel(): void {
  // this.nzMessageService.info('click cancel');
}

 confirm(){
  this.nzMessageService.info('车型已删除,请刷新');
  this.route.paramMap.pipe(
    switchMap((params: ParamMap) => of(params.get('car'))
    )).subscribe((data) => {
      // let api =`http://localhost:60001/api/hangang/materialTrial/${data}/applicationCase`;
  this.ApiService. getApplicationCase(data)
  .then((res: any) => {})
    })
}
getshow(event){
  this.isVisible=event
}
form
public async getform(p){
  //let api=`http://localhost:60001/api/hangang/materialTrial/${p}/applicationCaseById`
 await this.ApiService.getApplicationCaseById(p)
 .then((res: any) => {
   this.form = res
console.log(this.form)
 })
}
bianji(){
  this.isVisible=true
 
}
showModal() {
  this.isVisibless = true;
}
handleOk(): void {

  this.isVisibless = false;
let url=` /api/hangang/ApplicationCaseExportOne?id=${this.materialId}`
  this.SimulationCardComponent.download("应用案例.xls",url)

}

handleCancel(): void {

  this.isVisibless = false;
}


showModalde(){
  this.isVisiblessde=true
}
handleCancelde(){
  this.isVisiblessde=false
}
handleOkde(){
  this.isVisiblessde=false
  this.route.paramMap.pipe(
    switchMap((params: ParamMap) => of(params.get('car'))
    )).subscribe((data) => {
      //let api =`http://localhost:60001/api/hangang/materialTrial/${data}/applicationCase`;
      this.ApiService. getApplicationCase(data)
  .then()
    })
    this.nzMessageService.info('车型已删除,请刷新页面');
}

}
