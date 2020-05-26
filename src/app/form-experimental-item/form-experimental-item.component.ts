import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'
// import { NzMessageService } from 'ng-zorro-antd/message';
// // import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
// import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
// // import { FormGroup, FormControl } from '@angular/forms';
// import { Validators } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {
  @Input() materialId
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
    // private msg: NzMessageService 

  ) { } 

  ngOnInit() {
    this.GetTrials(this.materialId)
    // this.validateForm = this.fb.group({
    //   vehicleType: [null, [Validators.required]],
    // });
    this.getCar()

}

public async GetTrials(materialId){
  await this.experimentalItemService.GetTrials(materialId).then((res:any) => {
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

// handleCancel(): void {
//   this.profileForm.reset();
//   this.isVisible = false;
//   this.button=true
// }


cars=[]
public async getCar(){
  let api=`http://localhost:60001/api/hangang/materialTrial/applicationCaseByMaterialId/${this.materialId}`
  await this.http.get(api)
 .toPromise()
 .then((res: any) => {
   this.cars = res
   for(let a=0;a<this.cars.length;a++){
    this.car[a]=this.cars[a].vehicleType
    this.id[a]=this.cars[a].id

    // this.id=[]
    // this.id.push(this.cars[a].id)
   }
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
// customRequestOne= (item: UploadXHRArgs) => {
//         this.formData.append('photo',item.file as any);
//         this.formDataList.push(item);    
//   console.log(item.action!)
//       // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
//       return  setTimeout(() => {
//         const req = new HttpRequest('PUT', item.action!, this.formData, {
//           reportProgress: true,
//           withCredentials: true
//         });
//         if(this.returnFalse == false){
//           this.http.request(req).subscribe(
//             (event: HttpEvent<{}>) => {
//               if (event.type === HttpEventType.UploadProgress) {
//                 if (event.total! > 0) {
//                   // tslint:disable-next-line:no-any
//                   (event as any).percent = (event.loaded / event.total!) * 100;
//                 }
//                 // 处理上传进度条，必须指定 `percent` 属性来表示进度
//                 for (const item of this.formDataList) {
//                 item.onProgress!(event, item.file!);
//                   
//                 }
//               } else if (event instanceof HttpResponse) {
//                 // 处理成功
//                 this.returnFalse = false;
//                 for (const item of this.formDataList) {
//                   item.onSuccess!(event.body, item.file!, event);
  
//                     
//                   }
//                   this.formData = new FormData();
//                   this.formDataList=[];
//               }
//              },
//             err => {
//               // 处理失败
//               this.returnFalse = false;
//               for (const item of this.formDataList) {
//                 item.onError!(err, item.file!);
//               }
//               this.formData = new FormData();
//               this.formDataList=[];
//             }
//             
//           )
//           this.returnFalse = true;
  
//         }  
//       }, 100);
//       }
//   customRequestTwo= (item: UploadXHRArgs) => {
//           this.formData.append('document',item.file as any);
//           this.formDataList.push(item);    
//     console.log(item.action!)
//         // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
//         return  setTimeout(() => {
//           const req = new HttpRequest('PUT', item.action!, this.formData, {
//             reportProgress: true,
//             withCredentials: true
//           });
//           if(this.returnFalse == false){
//             this.http.request(req).subscribe(
//               (event: HttpEvent<{}>) => {
//                 if (event.type === HttpEventType.UploadProgress) {
//                   if (event.total! > 0) {
//                     // tslint:disable-next-line:no-any
//                     (event as any).percent = (event.loaded / event.total!) * 100;
//                   }
//                   // 处理上传进度条，必须指定 `percent` 属性来表示进度
//                   for (const item of this.formDataList) {
//                   item.onProgress!(event, item.file!);
//                     
//                   }
//                 } else if (event instanceof HttpResponse) {
//                   // 处理成功
//                   this.returnFalse = false;
//                   for (const item of this.formDataList) {
//                     item.onSuccess!(event.body, item.file!, event);
    
//                       
//                     }
//                     this.formData = new FormData();
//                     this.formDataList=[];
//                 }
//                },
//               err => {
//                 // 处理失败
//                 this.returnFalse = false;
//                 for (const item of this.formDataList) {
//                   item.onError!(err, item.file!);
//                 }
//                 this.formData = new FormData();
//                 this.formDataList=[];
//               }
//               
//             )
//             this.returnFalse = true;
    
//           }  
//         }, 100);
//         }
//   handleChange(info: { file: UploadFile }): void { 
//     console.log(info.file)
//     switch (info.file.status) {

//       case 'done':

//         this.msg.success("图片上传成功");
//         break;
//       case 'error':
//         this.msg.error('Network error');
//         break;
//     }
//   }
//   handleChange1(info: { file: UploadFile }): void { 
//     console.log(info.file)
//     switch (info.file.status) {

//       case 'done':

//         this.msg.success("文件上传成功");
//         break;
//       case 'error':
//         this.msg.error('Network error');
//         break;
//     }
//   }
//   submitForm(value): void {

//       let api=`http://localhost:60001/api/hangang/materialTrial/applicationCaseByInput?MaterialId=${this.materialId}&VehicleType=${value.carName}`
//       this.http.get(api).toPromise()
//       .then((res: any) => {
//         if(res.length==0){
   
//     let form={materialId:this.materialId,
//       vehicleType:value.carName,
//       breif:value.jiankuang,
//       suppliedPart:value.lingjian,
//       requirement:value.yaoqiu}
//     let api ='http://localhost:60001/api/hangang/materialTrial/applicationCase';
//     this.http.post(api,form)
// .toPromise()
//  .then((res: any) => {
//   this.id = []
//   this.carid=res
//   this.button=false
//   this.getCar()
//   this.maUrl1=`http://localhost:60001/api/hangang/trialdatadetail/ApplicationCasePicturePut?Id=${this.carid}`
//   this.maUrl2=`http://localhost:60001/api/hangang/trialdatadetail/ApplicationCaseDocumentPut?Id=${this.carid}`
//   this.msg.info('已提交')

//  })}
// else{
//   this.msg.info('车型已存在，请添加其他车型')

// }})
// //  this.profileForm.reset()
//   }
//   resetForm(e: MouseEvent): void {
//     e.preventDefault();
//     this.profileForm.reset();}
//     createBasicMessage(): void {
// if(this.button==true){
//       this.msg.info('请先提交');}
//     }
}
