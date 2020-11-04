import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators ,ValidatorFn,AbstractControl} from '@angular/forms';
// import { Observable, Observer } from 'rxjs';
import { CommonService } from '../common.service'
import {button,unique1} from 'src/app/picture'
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
    private ApiService: ApiService,
    private fb: FormBuilder,
    public commonService: CommonService,
    ) { 
    }
    
  materialId = ''
  maUrl = ''//仿真卡片上传地址
  type15 = {
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
  default = {
    a: 441,
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
  isVisible = false;//下载k文件弹框
  nzFileList: UploadFile[] = [];//上传列表
  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.maUrl=`/api/hangang/trialdatadetail/MaterialDocumentPut?Id=${this.materialId}`
    this.getmaterial() 
  }
  update() {
    this.getmaterial() 
  }

  one = []//文件全名数组
  data = [] //按文件后缀名分类
  after = [] //去重文件后缀名
  rea = []//
  //获取仿真卡片名列表
  getmaterial() {
    let obj = {id:this.materialId}
    this.ApiService.GetMater(obj).then((res: any) => {
        //处理文件名
      this.data = []
      this.after = []
      let hz = []//所有文件后缀名
      let three = []//文件名除去_之前的字符
      if (res.data[0].materialDto.fileKey) {
        this.one = res.data[0].materialDto.fileKey.split(";")
        this.one.pop()//this.one得到文件全名的数组
        let x = this.one.length
        for(let a=0;a<x;a++){
          let d = this.one[a].indexOf("_")//每个文件名字符串中的第一个_出现的位置
          let f = this.one[a].lastIndexOf(".")//每个文件名字符串中的最后一个.出现的位置
          three.push(this.one[a].slice(d+1))//this.three是
          let arr1=[]
          if(!this.data[this.one[a].slice(f+1)]){
            let arr=[]
            arr1.push(this.one[a])
            arr.push(three[a])
            this.rea[this.one[a].slice(f+1)] = arr1
            this.data[this.one[a].slice(f+1)] = arr
          }else{
            this.data[this.one[a].slice(f+1)].push(three[a])
            this.rea[this.one[a].slice(f+1)].push(this.one[a])
          }
          hz.push(this.one[a].slice(f+1))
        }
        this.after = unique1(hz)
      }
      console.log(this.rea)
    })
  }


//     //下载文件
//     downloadFile(content,data){
//       var a = document.createElement('a')
//       var blob = new Blob([content])
//       var url = window.URL.createObjectURL(blob)
//       a.href = url
//       a.download = data
//       a.click()
//       window.URL.revokeObjectURL(url)
//   }
//   //参数p是下载的文件名，url是文件地址
//     download(p,url) {
//       let that = this
//       this.ajax(url, function(xhr) {
//           //var filename = 'xxx' + url.replace(/(.*\.)/, '') // 自定义文件名+后缀
//           var filename = p
//           that.downloadFile(xhr.response, filename)
//       }, {
//           responseType: 'blob'
//       })
//   }
//   ajax(url, callback, options) {
//   //  window.URL = window.URL || window.webkitURL
//     var xhr = new XMLHttpRequest()
//     xhr.open('get', url, true)
//     if (options.responseType) {
//         xhr.responseType = options.responseType
//     }
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             callback(xhr)
//         }
//     }
//     xhr.send()
// }


confirm(a,b): void {
 let url = `/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${b}` // demo图片
  this.commonService.download(a,url)
}
showModal(): void {
  this.isVisible = true;
}
handleOk(): void {
  this.isVisible = false;
}

handleCancel(): void {
  this.isVisible = false;
}
//第一个
oneDown(){
     this.ApiService.getCardType12(this.materialId).then((res: any)=>{
      this.commonService.download('MaterialTemplateType12.k',`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)
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
    this.commonService.download('MaterialTemplateType15.k',`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)
    console.log(res)
  })
}
//第三个下载
threeDown(){
  this.ApiService.getCardType24S(this.materialId).then((res:any)=>{
    this.commonService.download('MaterialTemplateType24静态拉伸.k',`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)

  })
}
//第四个下载
fourDown(){
  this.ApiService.getCardType24H(this.materialId).then((res:any)=>{
    this.commonService.download('MaterialTemplateType24高速拉伸.k',`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)

  })
}

//第五个下载
fiveDown(){
  this.type39.materialId= this.materialId;
  // if(this.type39.r== '')this.type39.r = 1.0
  for(let x in this.type39){
    if(this.type39[x] == '')this.type39[x]=1.0
  }
  console.log(this.type39)
  this.ApiService.getCardType39(this.type39).then((res:any)=>{
    this.commonService.download(`MaterialTemplateType39.k`,`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)    
      })
}
//第六个下载
sixDown(){
  this.ApiService.getCardType81(this.materialId).then((res:any)=>{
    this.commonService.download(`MaterialTemplateType81.k`,`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)    
      })
}
//第七个下载
sevenDown(){
  this.ApiService.getCardType100(this.materialId).then((res:any)=>{
    this.commonService.download(`MaterialTemplateType100.k`,`/api/hangang/trialdatadetail/OutputKfile?documentName=${res.kFileName}`)    
      })
}
  } 
