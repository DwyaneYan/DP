import { Component, OnInit, Input, OnChanges ,Output,EventEmitter} from '@angular/core';
import { MaterialListService } from './material-list.service'
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormExperimentalItemComponent } from '../form-experimental-item/form-experimental-item.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { valHooks } from 'jquery';
import {
 
  Router,

} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-form-material-list',
  templateUrl: './form-material-list.component.html',
  styleUrls: ['./form-material-list.component.css']
})
export class FormMaterialListComponent implements OnChanges, OnInit {
  listOfAllData = [];
  routerLink1
  displayData = [];
  checkList = [];
  public allmaterial = [];
  totalCount = 0;//显示数量
  total = 0;//实际数量
  checkbox = false;
  allChecked = false;
  indeterminate = false;
  disabled = false
  aaaaaa
  dataAll = [] //数据库所有材料
  @Input() data = []; //筛选得到的所有材料列表数据
  // @Input() params;
  public trials
  // public trialName = []
  constructor(
    private materiallistService: MaterialListService,
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
    private ApiService: ApiService,
    private modalService: NzModalService,
    private nzMessageService: NzMessageService,
    private Router: Router,

    

  ) { }
  //子组件在渲染的时候，父组件的数据还没有获取到，导致在子组件中依赖这个@Input变量的变量和方法出错,每次筛选后执行
  ngOnChanges() {
    // this.Allmaterial()
    // this.listOfAllData = this.pushdata(this.data)
    // this.luyou(this.listOfAllData, this.arr)
    // if (this.checkList.length != 0) {
    //   for (const iterator of this.checkList) {
    //     this.listOfAllData.map((item) => {
    //       if (item.materialId == iterator.materialId) {
    //         item.checked = true;
    //       }
    //     });
    //   }
    // }
    this.contrasts = []
    console.log(111111111111111)
    this.listOfAllData = this.data //全部材料实际显示的,
    this.totalCount = this.listOfAllData.length; //数据个数
    this.listOfAllData.forEach(val=>{val.checked = false}) //不设置checked属性值是undefined
        this.listOfAllData.forEach(val=>{
          for(let b= 0;b<this.total;b++){
            if(this.dataAll[b].id == val.id){
    val.checked = this.dataAll[b].checked
            }
          }
        })
  }
  //#region 模块 

  ngOnInit(): void {
    // this.Allmaterial();
    this.listOfAllData = this.data //全部材料;
    console.log(11111111111)
    // this.totalCount = this.listOfAllData.length;
   
    // this.
  }
//处理筛选
  screening(){
    this.ApiService.GetMater({}).then((res:any)=>{
      this.dataAll = res.items //所有数据
      this.total = res.totalCount //所有数据数量
      this.dataAll.forEach(val=>{val.checked = false})//全部未选中
      // console.log(this.dataAll)
      

    })
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
          this.Router.navigateByUrl(`/display/${id}/${menu[a].luyou}/table`);  
          // data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/table`]
         }
        else if (this.FormExperimentalItemComponent.button(menu[a].children[1])) { 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].luyou}/picture`);  
          // data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/picture`] 
        }
        else if (this.FormExperimentalItemComponent.button(menu[a].children[2])) { 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].luyou}/report`);  
          // data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/report`] 
        }
        else if (this.FormExperimentalItemComponent.button(menu[a].children[3])){ 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].luyou}/typical-part`);  
          // data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/typical-part`] 
        }
        break
      }
    }
  })
}
  // luyou(listOfAllData, arr) {
  //   listOfAllData.forEach(data => {
  //     this.ApiService.GetTrials(data.materialId).then((res: any) => {
  //       this.trials = res
  //       this.trials.forEach((val, i, array) => {
  //         this.trialName.push(val?val.name:'')
  //       });

  //       arr = [this.trialName.includes("静态拉伸"),
  //       this.trialName.includes("压缩"),
  //       this.trialName.includes("金相"),
  //       this.trialName.includes("物理性能"),
  //       this.trialName.includes("化学成分"),
  //       this.trialName.includes("禁用物质"),
  //       this.trialName.includes("表面性能"),
  //       this.trialName.includes("烘烤硬化"),
  //       this.trialName.includes("弯曲"),
  //       this.trialName.includes("成型极限"),
  //       this.trialName.includes("抗凹性能"),
  //       this.trialName.includes("翻边扣合性能"),
  //       this.trialName.includes("焊接性能"),
  //       this.trialName.includes("胶结性能"),
  //       this.trialName.includes("涂装性能"),
  //       this.trialName.includes("回弹性能"),
  //       this.trialName.includes("二次加工脆性"),
  //       this.trialName.includes("氢致延迟开裂"),
  //       this.trialName.includes("高速拉伸"),
  //       this.trialName.includes("低周疲劳"),
  //       this.trialName.includes("高周疲劳")
  //       ]
       
  //       let length = this.menu.length
  //       for (let a = 0; a < length; a++) {
  //         if (arr[a] && this.FormExperimentalItemComponent.button(this.menu[a].name)) {
  //           if (this.FormExperimentalItemComponent.button(this.menu[a].children[0])) { data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/table`] }
  //           else if (this.FormExperimentalItemComponent.button(this.menu[a].children[1])) { data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/picture`] }
  //           else if (this.FormExperimentalItemComponent.button(this.menu[a].children[2])) { data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/report`] }
  //           else if (this.FormExperimentalItemComponent.button(this.menu[a].children[3])){ data.routerLink1 = [`/display/${data.materialId}/${this.menu[a].luyou}/typical-part`] }
  //           break
  //         }
  //       }



  //       // else if(this.compress&&this.FormExperimentalItemComponent.menu("压缩")){
  //       //   if(this.FormExperimentalItemComponent.button("ys1")){data.routerLink1=[`/display/${data.materialId}/static-tension-home/table`]}
  //       //   else if(this.FormExperimentalItemComponent.button("jtls2")){data.routerLink1=[`/display/${data.materialId}/static-tension-home/picture`]}
  //       //   else if(this.FormExperimentalItemComponent.button("jtls3")){data.routerLink1=[`/display/${data.materialId}/static-tension-home/report`]}
  //       //    else{data.routerLink1=[`/display/${data.materialId}/static-tension-home/typical-part`]}
  //       //   //data.routerLink1=[`/display/${data.materialId}/compression/table`]
  //       //  }
  //       //  else if(this.jinxiang&&this.FormExperimentalItemComponent.menu("金相")){
  //       //   data.routerLink1=[`/display/${data.materialId}/metallographic/table`]
  //       //  }
  //       //  else if(this.wulixingneng&&this.FormExperimentalItemComponent.menu("物理性能")){
  //       //   data.routerLink1=[`/display/${data.materialId}/physicalperformance/table`]
  //       //  }
  //       //  else if(this.chemical&&this.FormExperimentalItemComponent.menu("化学成分")){
  //       //   data.routerLink1=[`/display/${data.materialId}/chemicalelement/table`]
  //       //  }
  //       //  else if(this.jinyongwuzhi&&this.FormExperimentalItemComponent.menu("禁用物质")){
  //       //   data.routerLink1=[`/display/${data.materialId}/prohibited-substance/table`]
  //       //  }
  //       //  else if(this.biaomianxn&&this.FormExperimentalItemComponent.menu("表面性能")){
  //       //   data.routerLink1=[`/display/${data.materialId}/surface-property/table`]
  //       //  }  
  //       //  else if(this.hongkaoyh&&this.FormExperimentalItemComponent.menu("烘烤硬化")){
  //       //   data.routerLink1=[`/display/${data.materialId}/bake-hardening/table`]
  //       //  }
  //       // else if(this.bend&&this.FormExperimentalItemComponent.menu("弯曲")){
  //       //  data.routerLink1=[`/display/${data.materialId}/bending/table`]
  //       // }
  //       // else if(this.FLD&&this.FormExperimentalItemComponent.menu("成型极限FLD")){
  //       //   data.routerLink1=[`/display/${data.materialId}/fld/table`]
  //       //  }
  //       //  else if(this.kangAoxn&&this.FormExperimentalItemComponent.menu("抗凹性能")){
  //       //   data.routerLink1=[`/display/${data.materialId}/dent-resistance/table`]
  //       //  }
  //       //  else if(this.fanbiankouhexn&&this.FormExperimentalItemComponent.menu("翻遍扣合性能")){
  //       //   data.routerLink1=[`/display/${data.materialId}/flanging-clasp/table`]
  //       //  }
  //       //  else if(this.hanjiexn&&this.FormExperimentalItemComponent.menu("焊接性能")){
  //       //   data.routerLink1=[`/display/${data.materialId}/welding/table`]
  //       //  }
  //       //  else if(this.jiaojiexn&&this.FormExperimentalItemComponent.menu("胶结性能")){
  //       //   data.routerLink1=[`/display/${data.materialId}/cementing/table`]
  //       //  }
  //       //  else if(this.tuzhuangxn&&this.FormExperimentalItemComponent.menu("涂装性能")){
  //       //   data.routerLink1=[`/display/${data.materialId}/painting/table`]
  //       //  }
  //       //  else if(this.huitanxn&&this.FormExperimentalItemComponent.menu("回弹性能")){
  //       //   data.routerLink1=[`/display/${data.materialId}/rebound/table`]
  //       //  }
  //       //  else if(this.ercijiagongcx&&this.FormExperimentalItemComponent.menu("二次加工脆性")){
  //       //   data.routerLink1=[`/display/${data.materialId}/secondary-working-embrittlement/table`]
  //       //  }
  //       //  else if(this.qingzhiyanchikl&&this.FormExperimentalItemComponent.menu("氢致延迟开裂")){
  //       //   data.routerLink1=[`/display/${data.materialId}/hydrogen-induced-delayed-fracture/table`]
  //       //  }
  //       // else if(this.highspeedTension&&this.FormExperimentalItemComponent.menu("高速拉伸")){
  //       //  data.routerLink1=[`/display/${data.materialId}/highspeedstrech/table`]
  //       // }
  //       // else if(this.dizhoupilao&&this.FormExperimentalItemComponent.menu("低周疲劳")){
  //       //  data.routerLink1=[`/display/${data.materialId}/lowcyclefatigue/table`]
  //       // }
  //       // else if(this.gaozhoupilao&&this.FormExperimentalItemComponent.menu("高周疲劳")){
  //       //  data.routerLink1=[`/display/${data.materialId}/highcyclefatigue/table`]
  //       // }

  //       this.trialName = []
  //     })

  //   })
  // }
  // arr = []
  // Allmaterial() {
  //   this.ApiService.GetMater(params).then((res: any) => {
  //     console.log("返回结果：" + JSON.stringify(res))
  //     this.allmaterial = res.items;
  //     this.totalCount = res.totalCount;
  //     this.listOfAllData = this.pushdata(this.allmaterial)
  //     this.luyou(this.listOfAllData, this.arr)
  //   })
  // }

  contrasts = []
  contrastID
  // uncheckList
  // al = []
  // dis = []
  // temp
  //选中的回调
  refreshStatus(val,id): void {
    //选中
    if (val) {
      // this.contrasts = []
      // for (const iterator of temp) {
      //   if (JSON.stringify(this.checkList).indexOf(JSON.stringify(iterator)) == -1) {
      //     this.checkList.push(iterator)
      //   }
      // }
      this.dataAll.map(el=>{
        for(let a= 0;a<this.totalCount;a++){
          if(this.listOfAllData[a].id == el.id){
            el.checked = this.listOfAllData[a].checked
          }
        }
          })
          // console.log(this.listOfAllData)
          this.checkList = this.dataAll.filter(value => value.checked);
      if (this.checkList.length > 5) {
        this.disabled = true;
        this.modalService.warning({
          nzTitle: '提示',
          nzContent: '最多选择6条数据！'
        });
      }
    } 
    //取消选中
    else {
      // this.contrasts = []
      this.checkList = this.checkList.filter(value => value.id !== id )
      this.dataAll.forEach(el=>{
        for(let a= 0;a<this.totalCount;a++){
          if(this.listOfAllData[a].id == el.id){
            el.checked = this.listOfAllData[a].checked
          }
        }
          })
         
    }
  }
  // #endregionf


  shanchu(x) {
    for (var j = 0; j < this.checkList.length; j++) {
      if (this.checkList[j].id == x) {
        this.checkList.splice(j, 1);
        this.disabled = false;
      }
      for (const vari of this.listOfAllData) {
        if (vari.id == x) {
          vari.checked = false
        }
      }
      this.dataAll.forEach(val=>{
        if(val.id == x){
            val.checked = false
        }
      })
    }

  }
  select() {
    this.contrasts = []
    this.contrastID = ''
    this.checkList.map(val=>{this.contrasts.push(val.id)})
    this.contrastID = this.contrasts.toString();//直接把整个字符串作为查询参数
    //  console.log(this.contrastID)
  }
  // pushdata(arr1) {
  //   let arr2 = []

  //   arr1
  //     .forEach((val) => {
  //       arr2.push({
  //         materialId: val.id,
  //         name: val.name,
  //         manufacture: val.manufactoryName,
  //         thickness: val.model,
  //         reelNumber: val.reelNumber,
  //         model: val.strength,
  //       });

  //     })
  //   return arr2
  // }
  //对比按钮点击事件
  contrast = true
  delete = true
  title = ''
  compared() {
this.checkbox = !this.checkbox; //表格第一列
this.delete = !this.delete; //删除按钮禁用
this.checkList = [];  //选中的对比材料
this.contrastID = '';
this.disabled = false; //第一列不禁用
this.listOfAllData.map(val=>val.checked = false) //第一列全部取消选中
this.contrasts = [] //选中的id
this.screening()

  }
  //删除材料
  del(){
     this.checkbox = !this.checkbox;
     this.listOfAllData.map(val=>val.checked = false)
     this.contrast = !this.contrast;
     this.checkList = [];
     this.contrasts = []
this.disabled = false
  }
  cancel(): void {
    // this.nzMessageService.info('click cancel');
  }
  @Output() private reGet=new EventEmitter<string>();

  confirm(): void {
    // console.log(this.checkList)
    let ids = []
    this.checkList.map(val=>ids.push(val.id))
    console.log(ids)
    this.ApiService.delMaterials(ids).then((res:any)=>{
      this.nzMessageService.info('删除成功');
      this.reGet.emit();
      this.checkList = []
      // this.Allmaterial()
    })

  }
  getTitle(){
    this.title = `确定删除这${this.checkList.length}条材料？`

  }
}
