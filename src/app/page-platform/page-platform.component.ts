import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { UploadXHRArgs,UploadFile,UploadFilter } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormMaterialListComponent } from '../form-material-list/form-material-list.component'
import { HttpHeaders } from '@angular/common/http';
import {button} from 'src/app/picture'
import { UploadChangeParam } from 'ng-zorro-antd/upload';
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
  tojiaoche = this.ApiService.toVIm + `/car-model?carModelId=0e389231-8b77-4f06-8d36-ac72ac67eaca&type=hangang`
  toSUV = this.ApiService.toVIm + `/car-model?carModelId=65593d7a-575a-4515-8a59-9a6a3e143d87&type=hangang`
  toSY = this.ApiService.toVIm + `/car-type?type=hangang`
  button = button
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
  reelNumber:'',type:'',url:''}
  addlist=[]//推荐材料列表
  addid = ''
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
    this.values = [];
    this.addid = ''
    //可选项数据源
    this.ops();
  }
  FileList=[]
  //添加推荐材料弹框确认,添加到推荐表？
 handleOk() {
  //  console.log(this.values[0]);
   //根据材料id添加到推荐表
   if(this.addid){this.ApiService.ADDManufacturers(this.addid).then((res: any) => {
  this.showma(); 
})}
else{
  this.isVisible1 =false; 
  // this.
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
    this.showma();//查询所有推荐材料
  }

ops(){
  this.ApiService.GetManufacturers().then((res: any) => {
    this.listManufacturers = res.items;
    let temp = [];//可选项数据列表
    this.listManufacturers.map(val=>{temp.push({value:val.id,label:val.name})})
    let lengthTemp = temp.length
      this.ApiService.GetMater({}).then((res:any)=>{
        let allMaterials = res.data
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
      })
    
  })

}

uniqueArr(arr1,p) {
  const res = new Map();
  return arr1.filter((a) => !res.has(a[p]) && res.set(a[p], 1)) //对象数组根据属性去重
}

customReq = (item: UploadXHRArgs) => {
  // this.responseData = [];
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
        item.onSuccess!(event.body, item.file!, event);
      }
    },
    err => {
      // 处理失败
      console.log(err)
      item.onError!(err, item.file!);
    }
  )
};
formData =new FormData();
formDataList = []
returnFalse = false
customReqone = (item: UploadXHRArgs) => {
      // 构建一个 FormData 对象，用于存储文件或其他参数
      // tslint:disable-next-line:no-any  
        this.formData.append('input',item.file as any);
        this.formDataList.push(item);    
      // 始终返回一个 `Subscription` 对象，nz-upload 会在适当时机自动取消订阅,只调一次接口，但上传的每个item都会有信息
      return  setTimeout(() => {
        const req = new HttpRequest('POST', item.action!, this.formData, {
          reportProgress: true,
          withCredentials: true
        });
        if(this.returnFalse == false){
          this.http.request(req).subscribe(
      //先返回HttpHeaderResponse，在返回type loaded total，再返回HttpResponse  
            (event: HttpEvent<{}>) => {
                console.log(event, HttpEventType,item)
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
                    console.log(event,item,this.formDataList)
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
      }, 75);
      }
  //获取所有推荐材料
showma(){
 this.ApiService.showMaterials().then((res: any) => {
    this.addlist = res;
    console.log( this.addlist)
    this.addlist.forEach(val=>
      {if(val.fileString){
      val.fileString=val.fileString.slice(0,val.fileString.length-1);
        val.avatarUrl=`/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${val.fileString}` }//推荐材料图片src地址
        else{
          val.avatarUrl=''
        }
      })   
        this.FileList=[]  ;  
        this.isVisible1 =false;  //isVisible1是推荐材料弹框
        this.showi=false; //showi是导入推荐材料图片按钮
        // this.values = [];
});
}
nav(id,val){
        this.getURl(id,val)
}
getURl(id,data){
  //查询这条材料做了哪些试验
  this.ApiService.GetTrials(id).then((res: any) => {
    let trials = res
    let trialName = []
    let  menu=[{name:"static-tension-home",children:['jtls1','jtls2','jtls3','jtls4'],luyou:'static-tension-home',},
    {name:"compression",children:['ys1','ys2','ys3','ys4'],luyou:"compression"},
    {name:"metallographic",children:['jx1','jx2','jx3','jx4'],luyou:"metallographic"},
    {name:"physicalperformance",children:['wlxn1','wlxn2','wlxn3',,'wlxn4'],luyou:"physicalperformance"},
    {name:"chemicalelement",children:['hxcf1','hxcf2','hxcf3','hxcf4'],luyou:'chemicalelement'},
    {name:"prohibited-substance",children:['jywz1','jywz2','jywz3','jywz4'],luyou:'prohibited-substance'},
    {name:"surface-property",children:['bmxn1','bmxn2','bmxn3','bmxn4'],luyou:'surface-property'},
    {name:"bake-hardening",children:['hkyh1','hkyh2','hkyh3','hkyh4'],luyou:'bake-hardening'},
    {name:"bending",children:['wq1','wq2','wq3','wq4'],luyou:'bending'},
    {name:"fld",children:['fld1','fld2','fld3','fld4'],luyou:'fld'},
    {name:"dent-resistance",children:['kaxn1','kaxn2','kaxn3','kaxn4'],luyou:'dent-resistance'},
  {name: "flanging-clasp",children:['fbkh','fbkh2','fbkh3','fbkh4'],luyou:'flanging-clasp'},
  {name:"welding",children:['hjxn1','hjxn2','hjxn3','hjxn4'],luyou:'welding'},
  {name:"cementing",children:['jjxn1','jjxn2','jjxn3','jjxn4'],luyou:'cementing'},
  {name:"painting",children:['tzxn1','tzxn2','tzxn3','tzxn4'],luyou:'painting'},
  {name:"rebound",children:['htxn1','htxn2','htxn3','htxn4'],luyou:'rebound'},
  {name:"secondary-working-embrittlement",children:['ecjgcx1','ecjgcx2','ecjgcx3','ecjgcx4'],luyou:'secondary-working-embrittlement'},
  {name:"hydrogen-induced-delayed-fracture",children:['qzyckl1','qzyckl2','qzyckl3','qzyckl4'],luyou:'hydrogen-induced-delayed-fracture'},
  {name:"highspeedstrech",children:['gsls1','gsls2','gsls3','gsls4'],luyou:'highspeedstrech' },
  {name:"lowcyclefatigue",children:['dzpl1','dzpl2','dzpl3','dzpl4'],luyou:'lowcyclefatigue'},
  {name:"highcyclefatigue",children:['gzpl1','gzpl2','gzpl3','gzpl4'],luyou:'highcyclefatigue'}]
    trials.forEach((val, i, array) => {
      trialName.push(val.name)
    });
    console.log(trialName)//不是按页面顺序
    let arr = [trialName.includes("静态拉伸"),
    trialName.includes("压缩"),
    trialName.includes("金相"),
    trialName.includes("物理性能"),
    trialName.includes("化学成分"),
    trialName.includes("禁用物质"),
    trialName.includes("表面性能"),
    trialName.includes("烘烤硬化"),
    trialName.includes("弯曲"),
    trialName.includes("成型极限"),
    trialName.includes("抗凹性能"),
    trialName.includes("翻边扣合性能"),
    trialName.includes("焊接性能"),
    trialName.includes("胶结性能"),
    trialName.includes("涂装性能"),
    trialName.includes("回弹性能"),
    trialName.includes("二次加工脆性"),
    trialName.includes("氢致延迟开裂"),
    trialName.includes("高速拉伸"),
    trialName.includes("低周疲劳"),
    trialName.includes("高周疲劳")
    ]
    let length = menu.length
    for (let a = 0; a < length; a++) {
      if (arr[a] && this.FormExperimentalItemComponent.button(menu[a].name)) {
        if (this.FormExperimentalItemComponent.button(menu[a].children[0])) { 
          this.router.navigateByUrl(`/display/${id}/${menu[a].luyou}/table`);  
          // data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/table`]
         }
        else if (this.FormExperimentalItemComponent.button(menu[a].children[1])) { 
          this.router.navigateByUrl(`/display/${id}/${menu[a].luyou}/picture`);  
          // data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/picture`] 
        }
        else if (this.FormExperimentalItemComponent.button(menu[a].children[2])) { 
          this.router.navigateByUrl(`/display/${id}/${menu[a].luyou}/report`);  
          // data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/report`] 
        }
        else if (this.FormExperimentalItemComponent.button(menu[a].children[3])){ 
          this.router.navigateByUrl(`/display/${id}/${menu[a].luyou}/typical-part`);  
          // data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/typical-part`] 
        }
        break
      }
    }
  })
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
    
   if(values[0]){
//      if(values[1].indexOf("+") !== -1){
//       values[1] = values[1].replace(/\+/g,encodeURIComponent('+'))
//      }
//      console.log(values[1])
//     this.pat.manufactoryId = values[0];
//  this.pat.name = values[1]; //材料名称中会有+号，加号会被解码为空格,+号用正则替换
//  this.pat.model = values[2];
//  this.pat.reelNumber = values[3];
 this.pat.type = "tszf"
 this.pat.url = `?manufactoryId=${values[0]}&name=${encodeURIComponent(values[1])}&model=${values[2]}&reelNumber=${values[3]}`
 //查询材料
 this.ApiService.GetMater(this.pat).then((res: any) => {
   //有可能查询不到材料？
   console.log(values[1])
   if(res.data.length){
   this.addid=res.data[0].id
       //  console.log(this.addid)
       //  console.log(this.addlist)
       //根据材料id添加推荐材料图片
       this.maUrl=`/api/hangang/MaterialPicturePut?Id=${this.addid}`;     
        this.showi=true
   }
   else{
  this.msg.info('未找到材料')
  this.showi=false;
  this.addid = ''
  this.maUrl = ''
   }
    });
}
else{
  this.showi=false;
  this.addid = ''
  this.maUrl = ''

}

  }
  handleChange(info: UploadChangeParam): void { 
    console.log(info,info.file.response,info.file.status)
    //info能获取到上传接口返回信息，在info.file.response中
    //并且自带的上传成功与否信息在info.file.status中
    switch (info.file.status) {
      // case 'uploading':      
      //   break;
      case 'done':

        this.msg.success(info.file.response.message);
        break;
      case 'error':
        this.msg.error('文件上传失败，请联系管理员');
        break;
    }
  }

//推荐材料上传图片文件改变时触发
//推荐材料只会有一张图片，之后上传的会覆盖之前的
  handleChange1(info: UploadChangeParam): void { 

    switch (info.file.status) {
      case 'done':
        this.msg.success('图片上传成功');//上传成功接口暂无返回信息
        break;
      case 'error':
        this.msg.error('图片上传失败，请联系管理员');
        break;
    }
//  this.showma()
  }

  

}

