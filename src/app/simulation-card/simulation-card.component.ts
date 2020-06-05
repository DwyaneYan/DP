import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Injectable } from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-simulation-card',
  templateUrl: './simulation-card.component.html',
  styleUrls: ['./simulation-card.component.css']
})
export class SimulationCardComponent implements OnInit {

  constructor( private router: Router,
    public http: HttpClient,
    private msg: NzMessageService,
    private FormExperimentalItemComponent: FormExperimentalItemComponent
    ) { }
    
  materialId
  maUrl
  
  nzFileList: UploadFile[] = [];
  material=[]
  href
  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.maUrl=`http://localhost:60001/api/hangang/trialdatadetail/MaterialDocumentPut?Id=${this.materialId}`
    this.getmaterial() 
  }
  formDataList = []
returnFalse =false
formData =new FormData();
  customRequestOne= (item: UploadXHRArgs) => {
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
  
          this.msg.success("文件上传成功");
          this.nzFileList=[]
          this.getmaterial() 
          break;
        case 'error':
          this.msg.error('Network error');
          break;
      }
    }
    one
    three=[]
    getmaterial() {
      let api=`http://localhost:60001/api/hangang/material/materials?Id=${this.materialId}`
      this.http.get(api).toPromise()
      .then((res: any) => {
      if(res.items[0].fileKey) {this.one=res.items[0].fileKey.split(";")
        this.one.pop()//this.one得到文件全名
        console.log(this.one)
        let two=[]
        let length=this.one.length
        for(let a=0;a<length;a++){
          let pattern = /\.{1}[a-z]{1,}$/;
          if (pattern.exec(this.one[a]) !== null) {
            two.push(this.one[a].slice(0, pattern.exec(this.one[a]).index));
        } else {
          two.push( this.one[a]);
    
        }

}
//two是文件名
console.log(two)
let z=two.length
let x=this.one.length
 this.material=[]
 this.three=[]
 for(let a=0;a<x;a++)
{
 let d= this.one[a].indexOf("_")
 this.three.push(this.one[a].slice(d+1))
}

for(let a=0;a<z;a++)
{
 let d= two[a].indexOf("_")
 this.material.push(two[a].slice(d+1))
}
//this.material是处理后的文件名

}})
    }


    //根据文件流下载文件
    downloadFile(content,data){
      var a = document.createElement('a')
      var blob = new Blob([content])
      var url = window.URL.createObjectURL(blob)
      a.href = url
      a.download = data
      a.click()
      window.URL.revokeObjectURL(url)
//window.location.href=`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${data}`

    }
    download(p,url) {
     // var url = `http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${data}` // demo图片
      let that=this
      this.ajax(url, function(xhr) {//url是文件流地址
          //var filename = 'xxx' + url.replace(/(.*\.)/, '') // 自定义文件名+后缀
          var filename = p//p参数是文件名,注意加上后缀名

          that.downloadFile(xhr.response, filename)
      }, {
          responseType: 'blob'
      })
  }
  ajax(url, callback, options) {
  //  window.URL = window.URL || window.webkitURL
    var xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    if (options.responseType) {
        xhr.responseType = options.responseType
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr)
        }
    }
    xhr.send()
}

cancel(): void {
  // this.msg.info('click cancel');
}

confirm(a,b): void {
 let  url = `http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${b}` // demo图片
  this.download(a,url)
  // this.msg.info('click confirm');
}
  } 
