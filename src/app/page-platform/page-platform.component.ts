import { Component, OnInit } from '@angular/core';
import {PlatformService} from './platform.service';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, Observer } from 'rxjs';
import * as $ from 'jquery';
@Component({
  selector: 'app-page-platform',
  templateUrl: './page-platform.component.html',
  styleUrls: ['./page-platform.component.css']
})
export class PagePlatformComponent implements OnInit {
  avatarUrl
  maUrl
  loading = false;
  isVisible = false;
  isVisible1 = false;
  isOkLoading = false;
  url
  theurl
  nzOptions=[]
  values: any[] | null = null;
  listManufacturers
  listMa = [];
  list = [];
  li = [];
  pa = []
  limo = [];
  th = [];
pas=[]
  listMath = [];
  lit = [];
  two = [];
  pat={manufactoryId:"",
  name:"",
  model:2,
  reelNumber:''}
  addlist=[]
  addid
  showModal(): void {
    this.isVisible = true;

  }
  showModal1(): void {

    this.isVisible1 = true;
  }
  FileList=[]
 handleOk() {
    this.isVisible = false;
    this.FileList=[]  ;  
this.isVisible1 =false;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisible1 = false;
  }
  constructor(private PlatformService:PlatformService,
    public http: HttpClient,
    private msg: NzMessageService ) { }
    d =[]
    e =[]
    f =[]
    g=[]
  ngOnInit() {  
    this.op();
    this.showma();
  }
op(){
  this.PlatformService.GetManufacturers().then((res: any) => {
    this.listManufacturers = res.items;
    let temp = [];
    for (let j = 0; j < this.listManufacturers.length; j++) {
    temp[j] = {
        value: this.listManufacturers[j].id,
        label: this.listManufacturers[j].name
      };
      this.listMa[j] = [];
      this.list[j] = [];
      this.li[j] = [];//每个厂家的牌号
      this.pa[j] = { manufactoryId: "" };
      this.pa[j].manufactoryId = this.listManufacturers[j].id;
      this.PlatformService.GetMater(this.pa[j]).then((res: any) => {
        this.listMa[j] = res.items;
        this.listMa[j].forEach(val => this.list[j].push(val.name));
        this.li[j] = this.unique1(this.list[j]);//每个厂家的牌号
        this.th[j] = [];
        this.listMath[j] = [];
        this.lit[j] = [];
        this.pas[j] = [];
        this.limo[j] = [];//每个牌号的型号规格
        this.d[j]=[]
        this.e[j]=[]
        this.f[j]=[]
        this.g[j]=[] 
        for (let a = 0; a < this.li[j].length; a++) {
          this.two[j] = [];
          this.listMath[j][a] = [];
          this.lit[j][a] = [];
          this.limo[j][a] = [];//每个牌号的型号规格
          this.d[j][a]=[]
        this.e[j][a]=[]
        this.f[j][a]=[]
        this.g[j][a]=[]
          this.pas[j][a] = { manufactoryId: "", Name: "" };
          this.pas[j][a].manufactoryId = this.listManufacturers[j].id;
          this.pas[j][a].Name = this.li[j][a];
          this.PlatformService.GetMater(this.pas[j][a]).then(
            (res: any) => {
              this.listMath[j][a] = res.items;             
              this.listMath[j][a].forEach(val =>{
               this.lit[j][a].push(val.model)}
              );
              this.limo[j][a] = this.unique1(this.lit[j][a]);   //每个牌号的型号规格         
             this.th[j][a] = [];
              for (let b = 0; b < this.limo[j][a].length; b++) {
                this.f[j][a][b]=[]
                this.e[j][a][b]=[]
                this.g[j][a][b]=[]
                this.d[j][a][b]={ manufactoryId: "", Name: "" ,model:2};
                this.d[j][a][b].manufactoryId = this.listManufacturers[j].id;
                this.d[j][a][b].Name = this.li[j][a];
                this.d[j][a][b].model = this.limo[j][a][b];
              this.PlatformService.GetMater(this.d[j][a][b]).then((res: any) => {
                this.e[j][a][b] = res.items;
                this.e[j][a][b].forEach(val =>{
                  this.f[j][a][b].push(val.reelNumber)}
                 );
for(let x=0;x<this.f[j][a][b].length;x++){
  this.g[j][a][b][x]={
    value: this.f[j][a][b][x],
    label: this.f[j][a][b][x],
    isLeaf: true
  };
}
this.th[j][a][b] = {
  value: this.limo[j][a][b],
  label: this.limo[j][a][b],
  children:this.g[j][a][b] ,
};

              this.two[j][a] = {
                value: this.li[j][a],
                label: this.li[j][a],
                children: this.th[j][a]
              };
              this.nzOptions[j].children = this.two[j];
            })
            }
            }
          );
        }
      });
    }
    this.nzOptions = temp;
   console.log( this.nzOptions)
  });
}
fileStatus
responseData
filePath
customReq = (item: UploadXHRArgs) => {
  this.fileStatus = false;
  this.responseData = [];
  // 构建一个 FormData 对象，用于存储文件或其他参数
  const formData = new FormData();
  // tslint:disable-next-line:no-any
  formData.append('Photo', item.file as any);
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
        this.fileStatus = true;
        this.responseData = event.body;
        this.filePath = this.responseData.data;
        item.onSuccess!(event.body, item.file!, event);
      }
    },
    err => {
      // 处理失败
      item.onError!(err, item.file!);
    }
  );
};
formData =new FormData();
formDataList = []
returnFalse =false
customReqone = (item: UploadXHRArgs) => {
      // 构建一个 FormData 对象，用于存储文件或其他参数
      // tslint:disable-next-line:no-any   
        this.formData.append('input',item.file as any);
        this.formDataList.push(item);    
  console.log(item.action!)
      // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅
      return  setTimeout(() => {
        const req = new HttpRequest('POST', item.action!, this.formData, {
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
  
showma(){
 this.PlatformService.showMaterials().then((res: any) => {
    this.addlist=res;
    this.addlist.forEach(val=>
      {
      val.fileString=val.fileString.slice(0,val.fileString.length-1);
        val.avatarUrl=`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${val.fileString}` })
      console.log(this.addlist)
});
}

    unique1(array) {
      var n = []; //一个新的临时数组
      //遍历当前数组
      for (var i = 0; i < array.length; i++) {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (n.indexOf(array[i]) == -1) n.push(array[i]);
      }
      return n;
    }
  // check(value){
  //   this.theurl="http://localhost:60001/api/hangang/material/autoAdd"+value
  //   console.log(this.theurl)//父指令通过绑定到这个属性来监听事件，并通过 $event 对象来访问载荷。
  // }


  onChanges(values: any): void {
    this.pat.manufactoryId = values[0];
    this.pat.name = values[1];
    this.pat.model = values[2];
    this.pat.reelNumber = values[3];
    this.PlatformService.GetMater(this.pat).then((res: any) => {
      this.addid=res.items[0].id
      this.PlatformService.ADDManufacturers(this.addid).then((res: any) => {
        this.PlatformService.showMaterials().then((res: any) => {
           this.addlist=res;        
          this.maUrl=`http://localhost:60001/api/hangang/MaterialPicturePut?Id=${this.addid}`;     
       });
      })

    })
this.values=[]
  }


  // handleChange(info: { Photo: UploadFile }): void {
  //           //    this.addlist.forEach(val=>
  //           // val.url=`http://localhost:60001/api/hangang/MaterialPicturePut?Id=${val.materialId}`)    
  //   // this.avatarUrl=1
  //   this.PlatformService.showMaterials().then((res: any) => {
  //     this.addlist=res;
  //     this.addlist.forEach(val=>{
  //       val.fileString=val.fileString.slice(0,val.fileString.length-1);
  //       val.avatarUrl=`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${val.fileString}` }) ;
  //       // console.log(this.addlist)
  // });
    // }
  

}
