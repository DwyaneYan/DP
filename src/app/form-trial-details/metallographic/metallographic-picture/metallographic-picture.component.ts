import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs } from 'ng-zorro-antd';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-metallographic-picture',
  templateUrl: './metallographic-picture.component.html',
  styleUrls: ['./metallographic-picture.component.css']
})
export class MetallographicPictureComponent implements OnInit {
  public materialId

  trialDataDetail  //存放请求到的试验结果

  ImgPathOne: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingOne?Id="
  ImgPathTwo: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingTwo?Id="
  ImgPathThree: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingThree?Id="
  ImgPathFour: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingFour?Id="
img1: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentPut?Id="

  constructor(
    private router: Router,
    public http: HttpClient,    
    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();

  }

  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/metallographicDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      
    })   
    console.log(this.trialDataDetail[0].id) 
    //拼接出完整的图片URL
    this.ImgPathOne = this.ImgPathOne + this.trialDataDetail[0].id;
    this.ImgPathTwo = this.ImgPathTwo + this.trialDataDetail[0].id;
    this.ImgPathThree = this.ImgPathThree + this.trialDataDetail[0].id;
    this.ImgPathFour = this.ImgPathFour + this.trialDataDetail[0].id;   
   this.img1= this.img1+this.trialDataDetail[0].id
    // console.log(this.ImgPath);
  }
  visible = false;

  open(): void {
    this.visible = true;
  }
  close(): void {
    this.visible = false;
  }

 
  customReqone = (item: UploadXHRArgs) => {

    // 构建一个 FormData 对象，用于存储文件或其他参数
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    formData.append('structurePhoto', item.file as any);
    const req = new HttpRequest('PUT', item.action!, formData, {
      reportProgress: true,
      withCredentials: true
    });
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

  };
  customReqtwo = (item: UploadXHRArgs) => {  
    // 构建一个 FormData 对象，用于存储文件或其他参数
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    formData.append('nonMetallicInclusionLevelPhoto', item.file as any);
    const req = new HttpRequest('PUT', item.action!, formData, {
      reportProgress: true,
      withCredentials: true
    });
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

  };
  customReqthree = (item: UploadXHRArgs) => {
    // 构建一个 FormData 对象，用于存储文件或其他参数
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    formData.append('grainSizePhoto', item.file as any);
    const req = new HttpRequest('PUT', item.action!, formData, {
      reportProgress: true,
      withCredentials: true
    });
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

  };
  customReqfor = (item: UploadXHRArgs) => {   
    // 构建一个 FormData 对象，用于存储文件或其他参数
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    formData.append('depthDecarburizationPhoto', item.file as any);
    const req = new HttpRequest('PUT', item.action!, formData, {
      reportProgress: true,
      withCredentials: true
    });
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

  };
}
