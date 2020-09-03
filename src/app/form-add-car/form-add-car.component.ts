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
export class FormAddCarComponent implements OnInit,OnChanges {
  @Input() isVisible
  @Input() materialId
  @Output() private outer=new EventEmitter<string>();
  @Output() private outer1=new EventEmitter<string>();
  button=true
  nzFileList=[]
  nzFileList1=[]
  car=[] 
  constructor(private fb: FormBuilder,
    public http: HttpClient,
    private msg: NzMessageService ) { }
  profileForm = this.fb.group({
    carName: ['', Validators.required],
    jiankuang: [''],
    lingjian: [''],
    yaoqiu: [''],
   
  });
  ngOnInit() {

  }
  handleCancel(): void {
  this.profileForm.reset();
  this.isVisible = false;
  this.button=true;
  this.outer1.emit(this.isVisible);
  this.nzFileList = [];
  this.nzFileList1 = [];

}
formData =new FormData();
ngOnChanges(changes: SimpleChanges) {
 
  console.log('ngOnChanges', this.isVisible);
}
formDataList = []
returnFalse =false
  customRequestOne= (item: UploadXHRArgs) => {
    // this.nzFileList=[]
          this.formData.append('photo',item.file as any);
          this.formDataList.push(item);    
    console.log(item.action!)
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
              }
              
            )
            this.returnFalse = true;
    
          }  
        }, 100);
        }
    customRequestTwo= (item: UploadXHRArgs) => {
            this.formData.append('document',item.file as any);
            this.formDataList.push(item);    
      console.log(item.action!)
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
                }
                
              )
              this.returnFalse = true;
      
            }  
          }, 100);
          }
    handleChange(info: { file: UploadFile }): void { 
      console.log(info.file)
      switch (info.file.status) {
  
        case 'done':
  
          this.msg.success("图片上传成功");
          // this.nzFileList=[]
          break;
        case 'error':
          this.msg.error('Network error');
          break;
      }
    }
    handleChange1(info: { file: UploadFile }): void { 
      console.log(info.file)
      switch (info.file.status) {
  
        case 'done':
  
          this.msg.success("文件上传成功");
          // this.nzFileList1=[]
          break;
        case 'error':
          this.msg.error('Network error');
          break;
      }
    }

    carid
    maUrl1
    maUrl2
submitForm(value): void {
  let api=`/api/hangang/materialTrial/applicationCaseByInput?MaterialId=${this.materialId}&VehicleType=${value.carName}`
  this.http.get(api).toPromise()
  .then((res: any) => {
      if(res.length==0){
   
    let form={materialId:this.materialId,
      vehicleType:value.carName,
      breif:value.jiankuang,
      suppliedPart:value.lingjian,
      requirement:value.yaoqiu}
    let api ='/api/hangang/materialTrial/applicationCase';
    this.http.post(api,form)
.toPromise()
 .then((res: any) => {

  this.carid=res
  this.button=false
  // this.getCar()
  this.maUrl1=`/api/hangang/trialdatadetail/ApplicationCasePicturePut?Id=${this.carid}`
  this.maUrl2=`/api/hangang/trialdatadetail/ApplicationCaseDocumentPut?Id=${this.carid}`
  this.msg.info('已提交')
  this.outer.emit(this.carid)
 })}
else{
  this.msg.info('车型已存在，请添加其他车型')

}
})
//  this.profileForm.reset()

}
resetForm(e: MouseEvent): void {
  e.preventDefault();
  this.profileForm.reset();
}
createBasicMessage(): void {
  if(this.button==true){
    this.msg.info('请先提交');
  }
}

//限制上传的图片格式
beforeUpload1 = (file: UploadFile, _fileList: UploadFile[]) => {
  return new Observable((observer: Observer<boolean>) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      this.msg.error('只能上传JPG和PNG');
      observer.complete();
      return;
    }
    observer.next(isJpgOrPng );
    observer.complete();
  });
};
//限制文件上传格式
beforeUpload2 = (file: UploadFile, _fileList: UploadFile[]) => {
 //console.log(file.type)
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
