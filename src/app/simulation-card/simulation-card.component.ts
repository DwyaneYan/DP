import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Injectable } from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';
import { PageContrastComponent } from 'src/app/page-contrast/page-contrast.component';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators ,ValidatorFn,AbstractControl} from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import {button} from 'src/app/picture'

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-simulation-card',
  templateUrl: './simulation-card.component.html',
  styleUrls: ['./simulation-card.component.css']
})
export class SimulationCardComponent implements OnInit {
  button = button
//FormBuilder 服务需要导入并注入该服务，然后才能使用它
  constructor( private router: Router,
    public http: HttpClient,
    private msg: NzMessageService,
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
    private PageContrastComponent: PageContrastComponent,
    private ApiService: ApiService,
    private fb: FormBuilder
    ) { 
      // this.validateForm = this.fb.group({
      //   b: [Number],
      //   email: ['', [Validators.email, Validators.required]],
      //   password: ['', [Validators.required]],
      //   confirm: ['', [this.confirmValidator]],
      //   comment: ['', [Validators.required]]
      // });
      //把 type15 属性设置为一个包含 a 和 b 等字段的表单模型，并且设置表单校验
  //     this.type15 = this.fb.group({
  //       a: [441,[this.validPassWord()]],
  //       b: [383.39],
  //       n: [0.183],
  // c: [0],
  // m: [0.859],
  // tm: [620],
  // tr: [20],
  // cp: [1],
  //     });
    }
    
  materialId
  maUrl
  type15={
  materialId: undefined,
  a: 441,
  b: 383.39,
  n: 0.183,
  c: 0,
  m: 0.859,
  tm: 620,
  tr: 20,
  cp: 1,}
  //默认
  default = {a: 441,
  b: 383.39,
  n: 0.183,
  c: 0,
  m: 0.859,
  tm: 620,
  tr: 20,
  cp: 1,}
  type39 = {
  materialId: undefined,
  r:1.0
  }
  //定义type15属性来存储表单模型。
    // type15: FormGroup;
  
  isVisible = false;
  nzFileList: UploadFile[] = [];
  material=[]
  href
  //自定义验证输入为数字
  // validPassWord(): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} => {
  //       // let result= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]$/.test(control.value);

  //       let result = typeof control.value
  //       console.log(result)
  //       console.log(control.value)

  //       return result == 'number' ? null : {'customValid': {error: '密码格式为字母大小写加数字'}};
  //   }
  // }
  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.maUrl=`/api/hangang/trialdatadetail/MaterialDocumentPut?Id=${this.materialId}`
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
  this.hz=[]
  this.after=[]
  this.three=[]
  this.data=[]
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
    two=[]
    data=[]
    hz=[]
    after=[]
    rea=[]
    getmaterial() {
      let api=`/api/hangang/material/materials?Id=${this.materialId}`
      this.http.get(api).toPromise()
      .then((res: any) => {
      if(res.data[0].fileKey) {this.one=res.data[0].fileKey.split(";")
        this.one.pop()//this.one得到文件全名的数组
 let x=this.one.length
let sc=[] 
//let data=[]
 for(let a=0;a<x;a++)
{
 let d= this.one[a].indexOf("_")//每个文件名字符串中的第一个_出现的位置
 let f=this.one[a].lastIndexOf(".")//每个文件名字符串中的最后一个.出现的位置
 this.three.push(this.one[a].slice(d+1))//this.three是文件名除去_之前的字符
 //console.log(this.one[a])
 let arr1=[]
//sc.push(this.one[a].slice(f+1))
 if(!this.data[this.one[a].slice(f+1)]){
   let arr=[]
  
  // console.log(arr1)
   arr1.push(this.one[a])
   //console.log(arr1)

   arr.push(this.three[a])
   this.rea[this.one[a].slice(f+1)] = arr1
   this.data[this.one[a].slice(f+1)] = arr
 }else{
  this. data[this.one[a].slice(f+1)].push(this.three[a])
  this. rea[this.one[a].slice(f+1)].push(this.one[a])

 }
 this.hz.push(this.one[a].slice(f+1))
}
console.log(this.data)
this.after=this.PageContrastComponent.unique1(this.hz)
console.log(this.rea)
console.log(this.after)
// for(let i=0;i<x;i++)
// {

// }
// for(let a=0;a<z;a++)
// {
//  let d= this.two[a].indexOf("_")
//  this.material.push(this.two[a].slice(d+1))
// }
// //this.material是处理后的文件名

}
})
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
    }
    download(p,url) {
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
 let  url = `/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${b}` // demo图片
  this.download(a,url)
  // this.msg.info('click confirm');
}
showModal(): void {
  this.isVisible = true;
}
handleOk(): void {
  // console.log('Button ok clicked!');
  this.isVisible = false;
}

handleCancel(): void {
  // console.log('Button cancel clicked!');
  this.isVisible = false;
}
//第一个
oneDown(){
     this.ApiService.getCardType12(this.materialId).then((res: any)=>{
      // this.ApiService.outPutK(res).then(res=>{}).catch(err=>{
      //   console.log(err)
      // })
      this.download('Type12.k',`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)
       console.log(res)
     })
}

//第二个下载
twoDown(): void {

 this.type15.materialId = this.materialId
 for(let x in this.type15){
   if(this.type15[x]=='')this.type15[x] = this.default[x]
 }
 console.log(this.type15)
  this.ApiService.getCardType15(this.type15).then((res:any)=>{
    this.download('Type15.k',`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)
    console.log(res)
  })
}
//第三个下载
threeDown(){
  this.ApiService.getCardType24S(this.materialId).then((res:any)=>{
    this.download('Type24静态拉伸.k',`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)

  })
}
//第四个下载
fourDown(){
  this.ApiService.getCardType24H(this.materialId).then((res:any)=>{
    this.download('Type24高速拉伸.k',`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)

  })
}

//下载k文件公共方法
// down(a,b){
//   this.ApiService[a(this.materialId)].then((res:any)=>{
//     this.download(`${b}`,`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)

//   })
// }
//第五个下载
fiveDown(){
  this.type39.materialId= this.materialId;
  // if(this.type39.r== '')this.type39.r = 1.0
  for(let x in this.type39){
    if(this.type39[x] == '')this.type39[x]=1.0
  }
  console.log(this.type39)
  this.ApiService.getCardType39(this.type39).then((res:any)=>{
    this.download(`Type39.k`,`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)    
      })
}
//第六个下载
sixDown(){
  this.ApiService.getCardType81(this.materialId).then((res:any)=>{
    this.download(`Type81.k`,`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)    
      })
}
//第七个下载
sevenDown(){
  this.ApiService.getCardType100(this.materialId).then((res:any)=>{
    this.download(`Type100.k`,`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)    
      })
}
  } 
