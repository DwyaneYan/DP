import { Component, OnInit ,Input,Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-form-add-car',
  templateUrl: './form-add-car.component.html',
  styleUrls: ['./form-add-car.component.css']
})
export class FormAddCarComponent implements OnInit {
  @Input() isVisible   //父组件（菜单栏组件）传给子组件的值
  @Input() materialId
  @Output() private outer=new EventEmitter<string>();  //自定义事件名，添加新车型后触发，在父组件中监听
  @Output() private outer1=new EventEmitter<string>();  //自定义事件名，点击关闭弹框时触发，在父组件中监听
  submitFail = true
  nzFileList=[]  //上传图片列表
  nzFileList1=[] //上传文件列表
  carid = ''//添加的车型id
  maUrl = ''//图片上传地址
  maUrl1 = '' //文件上传地址 
  formData =new FormData();
  formDataList = []
  returnFalse = false
 //车型表单
  profileForm = this.fb.group({
    vehicleType: ['', Validators.required],
    breif: [''],
    suppliedPart: [''],
    requirement: [''],
  });

  constructor(
    private fb: FormBuilder,
    public http: HttpClient,
    private msg: NzMessageService ) { 

    }
  ngOnInit() {

  }
  //关闭添加车型弹框
  handleCancel(): void {
  this.profileForm.reset();//关闭后重置表单
  this.isVisible = false;  //isVisible由父组件传过来，重新赋值后又传回父组件
  this.outer1.emit(this.isVisible);
  this.nzFileList = [];
  this.nzFileList1 = [];
  this.submitFail = true;
}

//自定义上传图片
    customRequest= (item: UploadXHRArgs) => {
            this.formData.append('photo',item.file as any);
            this.formDataList.push(item);    
          // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
          return  setTimeout(() => {
            const req = new HttpRequest('PUT', item.action!, this.formData, {
              reportProgress: true,
              withCredentials: true
            });
            if(this.returnFalse == false){
              this.http.request(req).subscribe(
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
                    this.returnFalse = false;
                    for (const item of this.formDataList) {
                      item.onSuccess!(event.body, item.file!, event);
                      }
                      this.formData = new FormData();
                      this.formDataList=[];
                      this.msg.success("图片上传成功");
                  }
                 },
                err => {
                  // 处理失败
                  this.returnFalse = false;
                  for (const item of this.formDataList) {
                    item.onError!(err, item.file!);
                  }
                  this.formData = new FormData();
                  this.formDataList=[];
                  this.msg.error('图片上传失败');
                }
                
              )
              this.returnFalse = true;
      
            }  
          }, 100);
          }
  //自定义上传文件
    customRequest1= (item: UploadXHRArgs) => {
            this.formData.append('document',item.file as any);
            this.formDataList.push(item);    
          // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
          return  setTimeout(() => {
            const req = new HttpRequest('PUT', item.action!, this.formData, {
              reportProgress: true,
              withCredentials: true
            });
            if(this.returnFalse == false){
              this.http.request(req).subscribe(
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
                    this.returnFalse = false;
                    for (const item of this.formDataList) {
                      item.onSuccess!(event.body, item.file!, event);
      
                        
                      }
                      this.formData = new FormData();
                      this.formDataList=[];
      this.msg.success("文件上传成功");
                  }
                 },
                err => {
                  // 处理失败
                  this.returnFalse = false;
                  for (const item of this.formDataList) {
                    item.onError!(err, item.file!);
                  }
                  this.formData = new FormData();
                  this.formDataList=[];
      this.msg.error('文件上传失败');

                }
                
              )
              this.returnFalse = true;
      
            }  
          }, 100);
          }
    // handleChange(info: { file: UploadFile }): void { 
    //   console.log(info.file)
    //   switch (info.file.status) {
  
    //     case 'done':
  
    //       this.msg.success("图片上传成功");
    //       // this.nzFileList=[]
    //       break;
    //     case 'error':
    //       this.msg.error('Network error');
    //       break;
    //   }
    // }
    // handleChange1(info: { file: UploadFile }): void { 
    //   console.log(info.file)
    //   switch (info.file.status) {
  
    //     case 'done':
  
    //       this.msg.success("文件上传成功");
    //       // this.nzFileList1=[]
    //       break;
    //     case 'error':
    //       this.msg.error('Network error');
    //       break;
    //   }
    // }


    //提交表单
submitForm(): void {
  for (const i in this.profileForm.controls) {
    this.profileForm.controls[i].markAsDirty();
    this.profileForm.controls[i].updateValueAndValidity();
  }
  if(this.profileForm.valid){
    let api=`/api/hangang/materialTrial/applicationCaseByInput?MaterialId=${this.materialId}&VehicleType=${this.profileForm.value.vehicleType}`
    this.http.get(api).toPromise().then((res: any) => {
    //没有这个车型就添加
      if(res.length==0){
        this.profileForm.value.materialId = this.materialId;
        let api ='/api/hangang/materialTrial/applicationCase';
        this.http.post(api,this.profileForm.value).toPromise().then((res: any) => {
          this.carid = res;
          this.submitFail = false; //先提交车型才能上传图片和文件
          this.maUrl=`/api/hangang/trialdatadetail/ApplicationCasePicturePut?Id=${this.carid}`
          this.maUrl1=`/api/hangang/trialdatadetail/ApplicationCaseDocumentPut?Id=${this.carid}`
          this.msg.info('车型添加成功')
          this.outer.emit()
        })
      }
 //车型存在就不再添加
      else{
        this.msg.info('车型已存在，请添加其他车型')

      }
    })
  }
}
//重置表单
resetForm(e: MouseEvent): void {
  e.preventDefault(); //不这样点击重置也会提交表单
  this.profileForm.reset();
}
// createBasicMessage(): void {
//   if(this.submitFail ==true){
//     this.msg.info('请先提交');
//   }
// }

//限制上传的图片格式
beforeUpload1 = (file: UploadFile) => {
  return new Observable((observer: Observer<boolean>) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.msg.error('只能上传JPG和PNG');
      observer.complete();
      return ;
    }
    observer.next(isJpgOrPng );
    observer.complete();
  });
};
//限制文件上传格式
beforeUpload2 = (file: UploadFile) => {
  return new Observable((observer: Observer<boolean>) => {
    const isJpgOrPng = file.type === 'application/pdf' ;
    if (!isJpgOrPng) {
      this.msg.error('只能上传pdf');
      observer.complete();
      return;
    }
    observer.next(isJpgOrPng );
    observer.complete();
  });
};
}
