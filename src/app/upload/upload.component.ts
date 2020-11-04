import { Component, OnInit,Input,Output,EventEmitter, } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UploadXHRArgs,UploadFile } from 'ng-zorro-antd';
import {button} from 'src/app/picture'
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @Input() url   //地址
  @Input() buttonName
  @Input() type //文件还是图片
  @Input() permission //权限字符
  // @Input() 
  @Input() hz //上传前限制格式
  @Input() error //格式错误提醒
  @Input() disabled //上传按钮是否禁用
  @Output() private outer = new EventEmitter<string>(); 
  button = button
  nzFileList = []//上传列表
  constructor(
    public http: HttpClient,
    private msg: NzMessageService,
  ) { }

  ngOnInit() {
  }
  customRequest = (item: UploadXHRArgs) => {
    // Create a FormData here to store files and other parameters
    const formData: FormData = new FormData();
    formData.append(this.type, item.file as any);
    //设置请求
    const req = new HttpRequest('PUT', item.action!, formData, {
              reportProgress: true,//进度条
      //         withCredentials: true
            });  
        // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
        return  this.http.request(req).subscribe(
              (event: HttpEvent<{}>) => {
                if (event.type === HttpEventType.UploadProgress) {
                  if (event.total! > 0) {
                    // tslint:disable-next-line:no-any
                    (event as any).percent = (event.loaded / event.total!) * 100;
                  }
                   item.onProgress!(event, item.file!);
                } else if (event instanceof HttpResponse) {
                  // 处理成功
                  item.onSuccess!(event.body, item.file!, event); 
                  this.nzFileList=[]                                
                  this.msg.success('文件上传成功');
                  this.outer.emit()
                }
               },
              err => {
                // 处理失败
                item.onError!(err, item.file!);
                // this.nzFileList=[]
                this.msg.success('文件上传失败');
              }
              
            ) 
       
  }
  //限制上传格式
beforeUpload = (file: UploadFile) => {
  return new Observable((observer: Observer<boolean>) => {
    let isJpgOrPng = true
    if (this.hz) {
      isJpgOrPng = this.hz[1] ? file.type === this.hz[0] || file.type === this.hz[1] : file.type === this.hz[0]
    }
    if (!isJpgOrPng) {
      this.msg.error(this.error);
      observer.complete();
      return ;
    }
    observer.next(isJpgOrPng );
    observer.complete();
  });
};
}
