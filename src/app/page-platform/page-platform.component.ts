import { Component, OnInit } from '@angular/core';
import {PlatformService} from './platform.service';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
@Component({
  selector: 'app-page-platform',
  templateUrl: './page-platform.component.html',
  styleUrls: ['./page-platform.component.css']
})
export class PagePlatformComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  theurl="http://localhost:60001/api/hangang/material/autoAdd"
  
 public materials=[
   {
     name:"DC01",
     class:"IF钢",
     fac:"邯钢",
     model:"0.2mm"
   },
   {
    name:"DC02",
    class:"IF钢",
    fac:"邯钢",
    model:"0.2mm"
  },
  {
    name:"DC03",
    class:"IF钢",
    fac:"邯钢",
    model:"0.2mm"
  }
 ]
  showModal(): void {
    this.isVisible = true;
  }
  FileList=[]
 handleOk() {
    this.isVisible = false;
    this.FileList=[]      
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  constructor(private PlatformService:PlatformService,
    public http: HttpClient, ) { }

  ngOnInit() {
  }

  customReqone = (item: UploadXHRArgs) => {
    // 构建一个 FormData 对象，用于存储文件或其他参数
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    formData.append('input', item.file as any); 
    const req = new HttpRequest('POST', item.action!, formData, {
      reportProgress: true,
      withCredentials: true
    });
console.log(item.action!)
    // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
    return this.http.request(req).subscribe(
      (event: HttpEvent<{}>) => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total! > 0) {
            // tslint:disable-next-line:no-any
            (event as any).percent = (event.loaded / event.total!) * 100;
          }
          // 处理上传进度条，必须指定 `percent` 属性来表示进度
          item.onProgress!(event, item.file!);
        } else if (event instanceof HttpResponse) {
          // 处理成功

          item.onSuccess!(event.body, item.file!, event);
        }
       },
      err => {
        // 处理失败
        item.onError!(err, item.file!);
      }
    );
    

    }

  check(value){
    this.theurl +=value
    console.log(this.theurl)//父指令通过绑定到这个属性来监听事件，并通过 $event 对象来访问载荷。
  }

}
