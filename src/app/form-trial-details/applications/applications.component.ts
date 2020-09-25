import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { switchMap} from 'rxjs/operators';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';
import { ApiService } from 'src/app/api.service';
import {button} from 'src/app/picture'
import { of } from "rxjs"
import { SimulationCardComponent } from "src/app/simulation-card/simulation-card.component"
import pdf from 'pdfobject'
import { NzMessageService } from 'ng-zorro-antd/message';
import {getname,enlarge} from 'src/app/picture'


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  button = button
  enlarge = enlarge
  isVisible = false; //修改车型弹框
  isVisibless = false;//导出应用案例弹框
  isVisiblessde = false; //删除车型弹框
  breif = '' //车型简况
  suppliedPart = ''//供货零件名称
  requirement = ''//要求
  form = {}//车型基本信息对象
  ImgPathOne = [] //车型相关图片地址数组
  three = [] //图片名
  materialId = ''//材料id

  case//应用案例详情
  carId = ''//车型id
  arr1=[]
  photo = ''//车型相关的所有图片
  file = ''//车型信息中的文件全名

  constructor( private route: ActivatedRoute,
    private router: Router,
    public http: HttpClient,
    private nzMessageService: NzMessageService,
    private SimulationCardComponent: SimulationCardComponent,
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
    public ApiService: ApiService,
    ) { 
      //从根路由获取路由参数
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
      })
    }
  ngOnInit() {
    //注意这里会组件复用，可以使用 paramMap 可观察对象来检测路由参数在同一个实例中何时发生了变化。
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => of(params.get('car'))
      )).subscribe((data) => {
        //路由参数在同一个实例中发生了变化时执行
        this.carId = data
        this.arr1 =[];
        this.ImgPathOne = []       
        this.getBrief()
      });

  }

//根据车型id获取车型信息
public  async getBrief(){
  await this.ApiService.getApplicationCaseById(this.carId)
  .then((res: any) => {
    this.form = res  //车型信息对象
    this.breif = res.breif,
    this.suppliedPart = res.suppliedPart;
    this.requirement = res.requirement,
    this.photo = res.fileString;//应用案例的图片可以上传多个，不会被覆盖
    this.file = res.fileKey;//应用案例的文件显示，数据库里始终只会存一个文件，修改上传会覆盖原来的
    if(this.file){
      let files=this.file.slice(0,this.file.length-1)
      document.getElementById("pdf1").style.display = 'block'; 
      let b=`/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${files}`
      pdf.embed(b, "#pdf1")  //第一次导入文件会出现[PDFObject] Target element cannot be determined无法预览pdf
    }
    else{
      document.getElementById("pdf1").style.display = 'none'; 
    }
     this.three = getname(this.photo).afterName
    this.ImgPathOne = getname(this.photo).ImgPathOne
  })
}

 confirm(){
  this.nzMessageService.info('车型已删除,请刷新');
  this.route.paramMap.pipe(
    switchMap((params: ParamMap) => of(params.get('car'))
    )).subscribe((data) => {
  this.ApiService. getApplicationCase(data)
  .then((res: any) => {})
    })
}
getshow(event){
  this.isVisible=event
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
      this.ApiService. getApplicationCase(data)
  .then()
    })
    this.nzMessageService.info('车型已删除,请刷新页面');
}

}
