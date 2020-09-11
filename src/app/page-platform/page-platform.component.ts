import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormMaterialListComponent } from '../form-material-list/form-material-list.component'
import { HttpHeaders } from '@angular/common/http';

import { FormAddCarComponent } from '../form-add-car/form-add-car.component';
import { FormExperimentalItemComponent } from '../form-experimental-item/form-experimental-item.component';

import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import {
  Router,ActivatedRoute,RouterStateSnapshot
} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-page-platform',
  templateUrl: './page-platform.component.html',
  styleUrls: ['./page-platform.component.css']
})
export class PagePlatformComponent implements OnInit {
  tojiaoche = this.ApiService.toVIm + `/car-model?carModelId=1e9d1d3d-d9ad-4e77-b330-f014ce033cad&type=hangang`
  toSUV = this.ApiService.toVIm + `/car-model?carModelId=1e9d1d3d-d9ad-4e77-b330-f014ce033cad&type=hangang`
  toSY = this.ApiService.toVIm + `/car-model?carModelId=1e9d1d3d-d9ad-4e77-b330-f014ce033cad&type=hangang`
  avatarUrl
  maUrl = '';
  isVisible = false;
  isVisible1 = false;
  isOkLoading = false;
  url
  theurl
  nzOptions=[]
   values=[];
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
    this.modal.confirm({
      nzTitle: '是否删除此推荐材料?',
      // nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkText: '确定',
      nzOkType: 'danger',
      nzOnOk: () => {this.ApiService.shanchutj(p).then((res: any) => {
        this.showma()})},
      nzCancelText: '取消',
      nzOnCancel: () => console.log('Cancel')
    });


  }
  showModal(): void {
    this.isVisible = true;

  }
  showModal1(): void {
//添加推荐材料弹框
    this.isVisible1 = true;
    //可选项数据源
    this.ops();
  }
  FileList=[]
  //添加推荐材料弹框确认
 handleOk() {
  //  console.log(this.values[0]);
  this.values = []
   //根据材料id添加到推荐表
   if(this.values[0]){this.ApiService.ADDManufacturers(this.addid).then((res: any) => {
  this.showma(); 
})}
else{
  this.isVisible1 =false; 
}

   
 
  

  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisible1 = false;
    this.showi=false
    this.FileList=[]  ;  
    this.values = []
  }
  constructor(
    private FormMaterialListComponent:FormMaterialListComponent,
//public HttpHeaders:HttpHeaders,
    public http: HttpClient,
    private msg: NzMessageService,
    private FormAddCarComponent: FormAddCarComponent,
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
    private ApiService: ApiService,
    private modal: NzModalService,
    private router: Router,
    private ActivatedRoute:ActivatedRoute,
     ) { }
    d =[]
    e =[]
    f =[]
    g=[]
   

  ngOnInit() {  

  //  if( window.sessionStorage.getItem("fromLogin")&&window.sessionStorage.getItem("fromLogin")=='1'){
  //   location.reload()
  //   window.sessionStorage.removeItem("fromLogin")
  //  }
  console.log(this.router)
//   let httpOptions = {
//       headers: new HttpHeaders({
//         'Authorization': 'Bearer' + ' '+sessionStorage.getItem("token"),
//          //'host':'172.20.10.5:60001'
//       }),
//       param: {}  
//     };

// this.ApiService.getInfo(httpOptions).then((res:any)=>{
//   //if(res.msg!="操作成功"){}
// window.sessionStorage.setItem('permissions',  JSON.stringify(res)); 
// console.log(res)
// })
// this.ApiService.getRouters(httpOptions).then((res:any)=>{
//   window.sessionStorage.setItem('data',  JSON.stringify(res)); 
//      })
    this.showma();


  }

ops(){
  this.ApiService.GetManufacturers().then((res: any) => {
    this.listManufacturers = res.items;
    let temp = [];//可选项数据列表
    this.listManufacturers.map(val=>{temp.push({value:val.id,label:val.name})})
    let lengthTemp = temp.length
      this.ApiService.GetMater().then((res:any)=>{
        let allMaterials = res.items
for(let a= 0;a<lengthTemp;a++){
  temp[a].children = []
  let name = allMaterials.filter(item=>item.manufactoryId == temp[a].value) //牌号数组,牌号会重复
 console.log(name)

   let nameAfter = this.uniqueArr(name,'name') //牌号去重
 let lengthName = nameAfter.length
 console.log(name,nameAfter)
 nameAfter.map(val=>temp[a].children.push({value:val.name,label:val.name}))
  console.log(temp[a].children)
for(let b= 0;b<lengthName;b++){
  temp[a].children[b].children = []
  let model = allMaterials.filter(item=>item.manufactoryId == temp[a].value && item.name == nameAfter[b].name) //型号规格数组，重复
  let modelAfter = this.uniqueArr(model,'model') //型号规格去重
 console.log(model,modelAfter)
  let lengthModel = modelAfter.length
  modelAfter.map(val=>temp[a].children[b].children.push({value:val.model,label:val.model}))
 console.log(temp[a].children[b].children)
  for(let c = 0;c<lengthModel;c++){
    temp[a].children[b].children[c].children = []
    let reelNumber = allMaterials.filter(item=>item.manufactoryId == temp[a].value && item.name == nameAfter[b].name && item.model == modelAfter[c].model) //卷号数组，重复
    let reelNumberAfter = this.uniqueArr(reelNumber,'reelNumber') //卷号去重
 console.log(2111,reelNumber,reelNumberAfter)
 // let lengthreelNumber = reelNumberAfter.length
    reelNumberAfter.map(val=>temp[a].children[b].children[c].children.push({value:val.reelNumber,label:val.reelNumber,isLeaf: true}))
 console.log(temp[a].children[b].children[c])

  }

}

}
this.nzOptions = temp
console.log(temp)
      })
    
  })

}

uniqueArr(arr1,p) {
  const res = new Map();
  return arr1.filter((a) => !res.has(a[p]) && res.set(a[p], 1)) //对象数组根据属性去重
}

fileStatus
responseData
filePath
customReq = (item: UploadXHRArgs) => {
  // debugger;
  console.log(this.maUrl)
  console.log(item)
  console.log(item.action!)
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
  console.log(req)
  
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
      console.log(err)
     // console.log(targetItem)
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
  //item.action 就是接口url
  console.log(item)
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
                    console.log(event)
  //               console.log()    
                  }
                  this.formData = new FormData();
                  this.formDataList=[];
              }
             },
            err => {
              // 处理失败
  //感叹号是非null和非undefined的类型断言,ts的语法
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
  arr=[]
  //获取所有推荐材料
showma(){
 this.ApiService.showMaterials().then((res: any) => {
    this.addlist=res;
    this.addlist.forEach(val=>
      {if(val.fileString){
      val.fileString=val.fileString.slice(0,val.fileString.length-1);
        val.avatarUrl=`/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${val.fileString}` }
        else{
          val.avatarUrl=''
        }
      })
        this.FormMaterialListComponent.luyou(this.addlist,this.arr)     ;
        this.FileList=[]  ;  
        this.isVisible1 =false;  //isVisible1是推荐材料弹框
        this.showi=false; //showi是导入推荐材料图片按钮
        this.values = [];
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


//推荐材料级联选择框值发生变化时触发
  onChanges(values: any): void {
  console.log(values);
   if(values[0]){
    this.pat.manufactoryId = values[0];
 this.pat.name = values[1];
 this.pat.model = values[2];
 this.pat.reelNumber = values[3];
 //查询材料
 this.ApiService.GetMater(this.pat).then((res: any) => {
   this.addid=res.items[0].id
   console.log(this.addid)
      
       //  console.log(this.addid)
       //  console.log(this.addlist)
       //根据材料id添加推荐材料图片
       this.maUrl=`/api/hangang/MaterialPicturePut?Id=${this.addid}`;     


    });
}
// this.values=[]
//上传推荐材料图片
this.showi=true
  }
  handleChange(info: { file: UploadFile }): void { 
    console.log(info)
    //info能获取到上传接口返回信息，在info.file.response中
    //并且自带的上传成功与否信息在info.file.status中
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

//推荐材料上传图片文件改变时触发
//推荐材料只会有一张图片，之后上传的会覆盖之前的
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
//  this.showma()
  }

  

}

