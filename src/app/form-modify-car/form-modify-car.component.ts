import { Component, OnInit ,Input,Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormAddCarComponent } from '../form-add-car/form-add-car.component';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { of } from "rxjs";
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form-modify-car',
  templateUrl: './form-modify-car.component.html',
  styleUrls: ['./form-modify-car.component.css']
})
export class FormModifyCarComponent implements OnInit {
  @Input() isVisible
  @Input() car
  @Input() form
  @Output() private outer=new EventEmitter<string>();
  @Output() private outer1=new EventEmitter<string>();

 value=''
  constructor(private fb: FormBuilder,
    public http: HttpClient,
    private msg: NzMessageService,
    private formAddCarComponent: FormAddCarComponent,
    ) { }

  ngOnInit() {
   console.log(this.formAddCarComponent.beforeUpload1)
    this.profileForm = this.fb.group({
      // carName: ['', Validators.required],
      jiankuang: [this.form.breif],
      lingjian: [this.form.suppliedPart],
      yaoqiu: [this.form.requirement],
      
      })
      this.value=this.form.vehicleType
      this.maUrl1=`http://localhost:60001/api/hangang/trialdatadetail/ApplicationCasePicturePut?Id=${this.car}`
      this.maUrl2=`http://localhost:60001/api/hangang/trialdatadetail/ApplicationCaseDocumentPut?Id=${this.car}`
    // this.getCar()
console.log(this.form)
    // let observable = of(this.car);
    // observable.subscribe({ next: num =>     this.getCar() });
  }



    profileForm 
  handleCancel(): void {
    this.isVisible = false;
    this.outer1.emit(this.isVisible)
    // this.outer1.emit(this.isVisible)
  }
 
  formDataList = []
returnFalse =false
formData =new FormData();
  customRequestOne= (item: UploadXHRArgs) => {
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
          this.outer.emit() 
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
          this.outer.emit() 
          break;
        case 'error':
          this.msg.error('Network error');
          break;
      }
    }
    id=[]
    carid
    maUrl1
    maUrl2
submitForm(value): void {
  let form={id:this.car,
    vehicleType:this.value,
    breif:value.jiankuang,
    suppliedPart:value.lingjian,
    requirement:value.yaoqiu}
  let api=`http://localhost:60001/api/hangang/materialTrial/applicationCase`
  this.http.put(api,form).toPromise()
  .then((res: any) => {
  // this.button=false
  // this.getCar()

  this.msg.info('已修改')
  this.outer.emit()
 })

//  this.profileForm.reset()

}
}
