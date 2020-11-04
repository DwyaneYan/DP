import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd/message';
import { button, menu} from 'src/app/picture'//是js不是ts服务
import { UploadChangeParam } from 'ng-zorro-antd/upload';
// import { FormExperimentalItemComponent } from '../form-experimental-item/form-experimental-item.component';
import { CommonService } from '../common.service'

import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
// import {
//   Router,ActivatedRoute,RouterStateSnapshot
// } from "@angular/router";
// @Injectable({
//   providedIn: 'root'
// })
@Component({
  selector: 'app-page-platform',
  templateUrl: './page-platform.component.html',
  styleUrls: ['./page-platform.component.css']
})
export class PagePlatformComponent implements OnInit {
  tojiaoche = this.ApiService.toVIm + `/car-model?carModelId=0e389231-8b77-4f06-8d36-ac72ac67eaca&type=hangang`
  toSUV = this.ApiService.toVIm + `/car-model?carModelId=65593d7a-575a-4515-8a59-9a6a3e143d87&type=hangang`
  toSY = this.ApiService.toVIm + `/car-type?type=hangang`
  button = button//组件模板才能获取到
  avatarUrl
  maUrl = '';
  isVisible = false;
  isVisible1 = false;
  isOkLoading = false;
  url
  theurl
  nzOptions = []
  values = []; //级联选中数据
  listManufacturers
  listMa = [];
  list = [];
  li = [];
  pa = []
  limo = [];
  th = [];
  pas = [];
  listMath = [];
  lit = [];
  two = [];
  pat = {
    manufactoryId: "",
    name:"",
    model:null,
    reelNumber: '',
    type: '',
    url: ''
  }
  addlist=[]//推荐材料列表
  addid = ''
  showi=false
  showcan=false

  shanchutj(p){
    this.modal.confirm({
      nzTitle: '是否删除此推荐材料?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {this.ApiService.shanchutj(p).then((res: any) => {
        this.showma()})},
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });


  }
  //导入数据弹框
  showModal(): void {
    this.isVisible = true;
  }
  //添加推荐材料弹框
   showModal1() {
    this.isVisible1 = true;
    this.values = [];
    this.addid = ''
    //可选项数据源
    this.commonService.ops(this.ApiService).then((res: any) => {
      // console.log(res)
      this.nzOptions = res
    });
  }
  FileList = [] //上传列表
  //添加推荐材料弹框确认,添加到推荐表
 handleOk() {
   //根据材料id添加到推荐表
  if (this.addid) {
    this.ApiService.ADDManufacturers(this.addid).then((res: any) => {
      this.showma(); 
    })
  }
  else{
    this.isVisible1 = false; 
  }
  }
//关闭弹框
  handleCancel(): void {
    this.isVisible = false;
    this.isVisible1 = false;
    this.showi = false
    this.FileList = []  ;  
    this.values = []
  }
  constructor(
    public http: HttpClient,
    private msg: NzMessageService,
    public commonService: CommonService,
    private ApiService: ApiService,
    private modal: NzModalService,
    // public Router: Router,

     ) { }

   

  ngOnInit() {  
    this.showma();//查询所有推荐材料
  }

// ops(){
//   this.ApiService.GetManufacturers().then((res: any) => {
//     this.listManufacturers = res.items;
//     let temp = [];//可选项数据列表
//     this.listManufacturers.map(val=>{temp.push({value:val.id,label:val.name})})
//     let lengthTemp = temp.length
//     this.ApiService.GetMater({}).then((res:any)=>{
//       let allMaterials = res.data
//       for(let a= 0;a<lengthTemp;a++){
//         temp[a].children = []
//         let name = allMaterials.filter(item=>item.materialDto.manufactoryId == temp[a].value) //牌号数组,牌号会重复
//         let nameAfter = this.uniqueArr(name,'name') //牌号去重
//         let lengthName = nameAfter.length
//         nameAfter.map(val=>temp[a].children.push({value:val.materialDto.name,label:val.materialDto.name}))
//         for(let b= 0;b<lengthName;b++){
//           temp[a].children[b].children = []
//           let model = allMaterials.filter(item=>item.materialDto.manufactoryId == temp[a].value && item.materialDto.name == nameAfter[b].materialDto.name) //型号规格数组，重复
//           let modelAfter = this.uniqueArr(model,'model') //型号规格去重
//           let lengthModel = modelAfter.length
//           modelAfter.map(val=>temp[a].children[b].children.push({value:val.materialDto.model,label:val.materialDto.model}))
//           for(let c = 0;c<lengthModel;c++){
//             temp[a].children[b].children[c].children = []
//             let reelNumber = allMaterials.filter(item=>item.materialDto.manufactoryId == temp[a].value && item.materialDto.name == nameAfter[b].materialDto.name && item.materialDto.model == modelAfter[c].materialDto.model) //卷号数组，重复
//             let reelNumberAfter = this.uniqueArr(reelNumber,'reelNumber') //卷号去重
//             reelNumberAfter.map(val=>temp[a].children[b].children[c].children.push({value:val.materialDto.reelNumber,label:val.materialDto.reelNumber,isLeaf: true}))
//           }
//         }

//       }
//       this.nzOptions = temp
//     })   
//   })

// }

//   uniqueArr(arr1,p) {
//     const res = new Map();
//     return arr1.filter((a) => !res.has(a['materialDto'][p]) && res.set(a['materialDto'][p], 1)) //对象数组根据属性去重
//   }

formData = new FormData();
formDataList = []
returnFalse = false
customReq = (item: UploadXHRArgs) => {
      // 构建一个 FormData 对象，用于存储文件或其他参数
      // tslint:disable-next-line:no-any  
      this.formData.append('input',item.file as any);
      this.formDataList.push(item);   
      // console.log(11111111111111) 
      // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅,只调一次接口，但上传的每个item都会有信息
      return setTimeout(() => {
            //导入数据是post,上传文件图片是put
            const req = new HttpRequest('POST', item.action!, this.formData, {
              reportProgress: true,
              withCredentials: true
            });
            if(this.returnFalse == false){
              this.http.request(req).subscribe(
                //先返回HttpHeaderResponse，在返回type loaded total，再返回HttpResponse  
                (event: HttpEvent<{}>) => {
                  if (event.type === HttpEventType.UploadProgress) {
                    if (event.total! > 0) {
                      // tslint:disable-next-line:no-any
                      (event as any).percent = (event.loaded / event.total!) * 100;
                    }
                    // 处理上传进度条，必须指定 `percent` 属性来表示进度
                    for (const item of this.formDataList) {
                      item.onProgress!(event, item.file!);                  
                    }
                  } else if (event instanceof HttpResponse) {
                    // 处理成功
                    for (const item of this.formDataList) {
                      item.onSuccess!(event.body, item.file!, event); 
                    }
                    this.returnFalse = false;
                    this.formData = new FormData();
                    this.formDataList = [];
                  }
                 },
                err => {
                  // 处理失败
                //感叹号是非null和非undefined的类型断言,ts的语法                 
                  for (const item of this.formDataList) {
                    item.onError!(err, item.file!);
                  }
                  this.returnFalse = false;
                  this.formData = new FormData();
                  this.formDataList = [];
                }
                
              )
              this.returnFalse = true; 
            }  
          }, 75);
  }
  //获取所有推荐材料
showma(){
  this.ApiService.showMaterials().then((res: any) => {
    this.addlist = res;
    this.addlist.forEach(val => {
      if (val.fileString) {
        val.fileString=val.fileString.slice(0,val.fileString.length-1);
        val.avatarUrl = `/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${val.fileString}`//推荐材料图片地址
      }
      else{
        val.avatarUrl=''
      }
    })   
    this.isVisible1 = false;  //isVisible1是推荐材料弹框
    this.showi=false; //showi是导入推荐材料图片按钮
  });
}

//推荐材料级联选择框值发生变化时触发
  onChanges(values: any): void {  
    if (values[0]) {
     //材料名称中含有特殊字符，作为查询参数时要进行url编码
      this.pat.type = "tszf"
      this.pat.url = `?manufactoryId=${values[0]}&name=${encodeURIComponent(values[1])}&model=${values[2]}&reelNumber=${values[3]}`
      //查询材料
      this.ApiService.GetMater(this.pat).then((res: any) => {
        //有可能查询不到材料？
        if(res.data.length){
          this.addid = res.data[0].materialDto.id
            //根据材料id添加推荐材料图片
          this.maUrl = `/api/hangang/MaterialPicturePut?Id=${this.addid}`;     
          this.showi = true
        }
        else{
          this.msg.info('未找到材料')
          this.showi=false;
          this.addid = ''
          this.maUrl = ''
        }
      });
    }
    else{
      this.showi = false;
      this.addid = ''
      this.maUrl = ''
    }

  }
  handleChange(info: UploadChangeParam): void { 
    console.log(info)
    //info能获取到上传接口返回信息，在info.file.response中
    switch (info.file.status) {
      case 'done':
        this.msg.success(info.file.response.message);
        break;
      case 'error':
        this.msg.error('文件夹上传失败，请稍后再试');
        break;
    }
  }
}

