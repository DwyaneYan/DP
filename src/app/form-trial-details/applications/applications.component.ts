import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap} from 'rxjs/operators';
// import { Observable } from 'rxjs/observable';
// import { of } from 'rxjs/observable/of';
// import { Observable} from "rxjs";
import { of } from "rxjs"
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
    private nzMessageService: NzMessageService) { }
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
  let api =`http://localhost:60001/api/hangang/materialTrial/${p}/applicationCaseById`;
  await this.http.get(api)
  .toPromise()
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
let b=`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${files}`
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
  this.ImgPathOne.push(`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${picture}`)
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

confirm(): void {
  this.nzMessageService.info('车型已删除,请刷新');
  this.route.paramMap.pipe(
    switchMap((params: ParamMap) => of(params.get('car'))
    )).subscribe((data) => {
      let api =`http://localhost:60001/api/hangang/materialTrial/${data}/applicationCase`;
      this.http.delete(api)
  .toPromise()
  .then((res: any) => {})
    })
}
getshow(event){
  this.isVisible=event
}
form
public async getform(p){
  let api=`http://localhost:60001/api/hangang/materialTrial/${p}/applicationCaseById`
  await this.http.get(api)
 .toPromise()
 .then((res: any) => {
   this.form = res
console.log(this.form)
 })
}
bianji(){
  this.isVisible=true
 
 
}
}
