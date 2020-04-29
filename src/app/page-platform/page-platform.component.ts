import { Component, OnInit } from '@angular/core';
import {PlatformService} from './platform.service';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MaterialListService } from '../form-material-list/material-list.service'
// import { Observable, Observer } from 'rxjs';
// import { UploadChangeParam } from 'ng-zorro-antd/upload';
// import * as $ from 'jquery';
@Component({
  selector: 'app-page-platform',
  templateUrl: './page-platform.component.html',
  styleUrls: ['./page-platform.component.css']
})
export class PagePlatformComponent implements OnInit {
  avatarUrl
  maUrl
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
  showi=false
  showcan=false
  // canceltj(){
  //   this.showcan = true;
  // }
  shanchutj(p){
this.PlatformService.shanchutj(p).then((res: any) => {
  this.showma()})

  }
  showModal(): void {
    this.isVisible = true;

  }
  showModal1(): void {

    this.isVisible1 = true;
    this.op();
  }
  FileList=[]
 handleOk() {
    this.isVisible = false;
    this.FileList=[]  ;  
this.isVisible1 =false;
this.showi=false
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisible1 = false;
  }
  constructor(private PlatformService:PlatformService,
    private MaterialListService:MaterialListService,
    public http: HttpClient,
    private msg: NzMessageService ) { }
    d =[]
    e =[]
    f =[]
    g=[]
  ngOnInit() {  

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
                 this.f[j][a][b]=this.unique1(this.f[j][a][b]);
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
  console.log(this.addlist)
  
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
  )
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
        this.luyou(this.addlist)     
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
           this.addlist.map(val=>{ val.fileString=val.fileString.slice(0,val.fileString.length-1);;
            val.avatarUrl=`http://localhost:60001/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${val.fileString}`})        
           this.luyou(this.addlist)       
          this.maUrl=`http://localhost:60001/api/hangang/MaterialPicturePut?Id=${this.addid}`;     
       });
      })

    })
this.values=[]
this.showi=true
  }
  handleChange(info: { file: UploadFile }): void { 
    console.log(info.file)
    switch (info.file.status) {
      // case 'uploading':      
      //   break;
      case 'done':
        // Get this url from response in real world.
        // this.getBase64(info.input!.originFileObj!, (img: string) => {
        //   this.loading = false;
        //   this.avatarUrl = img;
        // });
        // window.alert("文件上传成功")
        this.msg.success("文件上传成功");
        break;
      case 'error':
        this.msg.error('Network error');
        break;
    }
  }
  handleChange1(info: { file: UploadFile }): void { 
    switch (info.file.status) {
      // case 'uploading':      
      //   break;
      case 'done':
        // Get this url from response in real world.
        // this.getBase64(info.input!.originFileObj!, (img: string) => {
        //   this.loading = false;
        //   this.avatarUrl = img;
        // });
        // window.alert("图片上传成功，请刷新页面")
        this.msg.success("图片上传成功");
        break;
      case 'error':
        this.msg.error('Network error');
        break;
    }
 this.showma()
  }
  // handleChange1(info: UploadChangeParam): void {
  //   if (info.file.status !== 'uploading') {
  //     console.log(info.file, info.fileList);
  //   }
  //   if (info.file.status == 'done') {
  //     this.msg.success(`${info.file.name} file uploaded successfully`);
  //   } else if (info.file.status == 'error') {
  //     this.msg.error(`${info.file.name} file upload failed.`);
  //   }
  // }
  public trials
  public trialName=[]
  public staticTension
  public compress
  public highspeedTension
  public dizhoupilao
  public gaozhoupilao
  public jinxiang
  public wulixingneng
  public jinyongwuzhi
  public biaomianxn
  public bend
  public chemical
  public kangAoxn
  public ercijiagongcx
  public fanbiankouhexn
  public qingzhiyanchikl
  public hanjiexn
  public jiaojiexn
  public tuzhuangxn
  public FLD
  public huitanxn
  public hongkaoyh
  luyou(listOfAllData){
    listOfAllData.forEach(data=>
      {  this.MaterialListService.GetTrials(data.materialId).then((res:any) => {
        this.trials = res
        this.trials.forEach((val,i,array) => {
          this.trialName.push(val.name)
        });
    this.staticTension = this.trialName.includes("静态拉伸")
    this.compress = this.trialName.includes("压缩")
    this.highspeedTension = this.trialName.includes("高速拉伸")
    this.dizhoupilao = this.trialName.includes("低周疲劳")
    this.gaozhoupilao = this.trialName.includes("高周疲劳")
    this.jinxiang = this.trialName.includes("金相")
    this.wulixingneng = this.trialName.includes("物理性能")
    this.jinyongwuzhi = this.trialName.includes("禁用物质")
    this.biaomianxn = this.trialName.includes("表面性能")
    this.bend = this.trialName.includes("弯曲")
    this.chemical =  this.trialName.includes("化学成分")
    this.kangAoxn = this.trialName.includes("抗凹性能")
    this.ercijiagongcx = this.trialName.includes("二次加工脆性")
    this.fanbiankouhexn = this.trialName.includes("翻边扣合性能")
    this.qingzhiyanchikl = this.trialName.includes("氢致延迟开裂")
    this.hanjiexn = this.trialName.includes("焊接性能")
    this.jiaojiexn = this.trialName.includes("胶结性能")
    this.tuzhuangxn = this.trialName.includes("涂装性能")
    this.FLD = this.trialName.includes("成型极限")
    this.huitanxn = this.trialName.includes("回弹性能")
    this.hongkaoyh = this.trialName.includes("烘烤硬化")
    if(this.staticTension){
      data.routerLink1=[`/display/${data.materialId}/static-tension-home/table`]}
      else if(this.bend){
       data.routerLink1=[`/display/${data.materialId}/bending/table`]
      }
      else if(this.compress){
       data.routerLink1=[`/display/${data.materialId}/compression/table`]
      }
      else if(this.highspeedTension){
       data.routerLink1=[`/display/${data.materialId}/highspeedstrech/table`]
      }
      else if(this.dizhoupilao){
       data.routerLink1=[`/display/${data.materialId}/lowcyclefatigue/table`]
      }
      else if(this.gaozhoupilao){
       data.routerLink1=[`/display/${data.materialId}/highcyclefatigue/table`]
      }
      else if(this.jinxiang){
       data.routerLink1=[`/display/${data.materialId}/metallographic/table`]
      }
      else if(this.wulixingneng){
       data.routerLink1=[`/display/${data.materialId}/physicalperformance/table`]
      }
      else if(this.chemical){
       data.routerLink1=[`/display/${data.materialId}/chemicalelement/table`]
      }
      else if(this.jinyongwuzhi){
       data.routerLink1=[`/display/${data.materialId}/prohibited-substance/table`]
      }
      else if(this.biaomianxn){
       data.routerLink1=[`/display/${data.materialId}/surface-property/table`]
      }  
      else if(this.kangAoxn){
       data.routerLink1=[`/display/${data.materialId}/dent-resistance/table`]
      }
      else if(this.ercijiagongcx){
       data.routerLink1=[`/display/${data.materialId}/secondary-working-embrittlement/table`]
      }
      else if(this.fanbiankouhexn){
       data.routerLink1=[`/display/${data.materialId}/flanging-clasp/table`]
      }
      else if(this.qingzhiyanchikl){
       data.routerLink1=[`/display/${data.materialId}/hydrogen-induced-delayed-fracture/table`]
      }
      else if(this.hanjiexn){
       data.routerLink1=[`/display/${data.materialId}/welding/table`]
      }
      else if(this.jiaojiexn){
       data.routerLink1=[`/display/${data.materialId}/cementing/table`]
      }
      else if(this.tuzhuangxn){
       data.routerLink1=[`/display/${data.materialId}/painting/table`]
      }
      else if(this.FLD){
       data.routerLink1=[`/display/${data.materialId}/fld/table`]
      }
      else if(this.huitanxn){
       data.routerLink1=[`/display/${data.materialId}/rebound/table`]
      }
      else {
       data.routerLink1=[`/display/${data.materialId}/bake-hardening/table`]
      } 
      this.trialName=[]
      })
      
       })
  }

}
