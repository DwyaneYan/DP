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

public  async getBrief(p){
  // let api =`http://localhost:60001/api/hangang/materialTrial/${p}/applicationCaseById`;
  await this.ApiService.getApplicationCaseById(p)
  .then((res: any) => {
    this.breif = res.breif,
    this.suppliedPart=res.suppliedPart;
this.requirement=res.requirement,
this.photo=res.fileString;
this.file=res.fileKey;
console.log(res)
if(res.fileKey){
let files=this.file.slice(0,this.file.length-1)
console.log(files)
let b=`/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${files}`
     pdf.embed(b, "#pdf1")
}
if(this.photo){
let a=this.photo.split(";")
a.pop();
console.log(a)
let b=this.fenge(a,/[_.]/)
for(let c=1;c<b.length;c+=2){
  this.arr1.push(b[c])
}
for(let d=0;d<a.length;d++){  
   let picture=a[d]
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
