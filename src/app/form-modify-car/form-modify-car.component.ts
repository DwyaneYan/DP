import { Component, OnInit ,Input,Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { FormBuilder } from '@angular/forms';
import{FormAddCarComponent} from '../form-add-car/form-add-car.component'
@Component({
  selector: 'app-form-modify-car',
  templateUrl: './form-modify-car.component.html',
  styleUrls: ['./form-modify-car.component.css']
})
export class FormModifyCarComponent implements OnInit {
  @Input() isVisible
  @Input() carId //父组件传来的车型id
  @Input() form
  @Input() mater  //修改车型信息需要材料id
  @Output() private outer=new EventEmitter<string>(); //自定义事件名，点击修改触发，在父组件中监听
  @Output() private outer1=new EventEmitter<string>(); //自定义事件名，点击关闭触发，在父组件中监听
  value = '' //车型名称
  profileForm //修改表单
  maUrl1 = ''//车型图片上传地址
  maUrl2 = ''//车型文件上传地址
  formDataList = []
  returnFalse = false
  formData = new FormData();
  constructor(private fb: FormBuilder,
    public http: HttpClient,
    private msg: NzMessageService,
    private formAddCarComponent:FormAddCarComponent
    ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      jiankuang: [this.form.breif],
      lingjian: [this.form.suppliedPart],
      yaoqiu: [this.form.requirement],
      })
      this.value = this.form.vehicleType
      this.maUrl1=`/api/hangang/trialdatadetail/ApplicationCasePicturePut?Id=${this.carId}`
      this.maUrl2=`/api/hangang/trialdatadetail/ApplicationCaseDocumentPut?Id=${this.carId}`
  }
  
  handleCancel(): void {
    this.isVisible = false;
    this.outer1.emit(this.isVisible)
  }
 
//自定义上传图片
  customRequestOne= (item: UploadXHRArgs) => {
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
                    this.outer.emit() 
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
    //自定义上传文件
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
                      this.msg.success("文件上传成功");
                      this.outer.emit() 
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


    //提交修改车型信息
submitForm(value): void {
  let form={id:this.carId,
    vehicleType:this.value,
    materialId:this.mater,
    breif:value.jiankuang,
    suppliedPart:value.lingjian,
    requirement:value.yaoqiu}
  let api=`/api/hangang/materialTrial/applicationCase`
  this.http.put(api,form).toPromise().then((res: any) => {
    this.msg.info('已修改')
    this.outer.emit()
 })

}
}
