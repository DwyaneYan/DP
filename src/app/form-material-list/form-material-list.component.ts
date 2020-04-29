import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MaterialListService } from './material-list.service'
import * as $ from 'jquery';

@Component({
  selector: 'app-form-material-list',
  templateUrl: './form-material-list.component.html',
  styleUrls: ['./form-material-list.component.css']
})
export class FormMaterialListComponent implements OnChanges, OnInit {
  listOfAllData = [];
  routerLink1
  displayData=[];
  checkList=[];
  public allmaterial=[]
  checkbox = false;
  allChecked = false;
  indeterminate = false;
  disabled=false
  aaaaaa
  @Input() data = [];
  @Input() params ;
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
  constructor(
    private materiallistService: MaterialListService,
    ) { }
  //用于监听data的变化,实现每当新的请求数据发生时,更新材料列表
  ngOnChanges() {
    this.listOfAllData= this.pushdata(this.data)
    this.luyou(this.listOfAllData)
    if(this.checkList.length!=0){
      for (const iterator of this.checkList) {
        this.listOfAllData.map((item)=>{
          if(item.materialId == iterator.materialId){
            item.checked=true;
          }
        });
      }
    }
  }
  //#region 模块 

  ngOnInit(): void {
      this.Allmaterial();
      
  } 
  luyou(listOfAllData){
    listOfAllData.forEach(data=>
      {  this.materiallistService.GetTrials(data.materialId).then((res:any) => {
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
Allmaterial(){
    let params = this.params
    this.materiallistService.AllMaterials(params).then((res: any) => {
    this.allmaterial = res.items;
    this.listOfAllData= this.pushdata(this.allmaterial)
   this.luyou(this.listOfAllData)
  })
      }    
    
  contrasts=[]
  contrastID
  uncheckList
al=[]
dis=[]
temp
  refreshStatus(val,id): void {
  if(val){
    this. temp = this.listOfAllData.filter(value => value.checked); 
    for (const iterator of this.temp) {
      if(JSON.stringify(this.checkList).indexOf(JSON.stringify(iterator))==-1){
        this.checkList.push(iterator)
      }
    }
    console.log(this.checkList.length); 
    if(this.checkList.length>6){
      this.disabled=true
      window.alert("最多7个")
    }
  }else{
    this.checkList = this.checkList.filter(value => {return value.materialId!==id})
  }
  }
  // #endregionf


shanchu(x){
  for(var j=0;j<this.checkList.length;j++){
    if(this.checkList[j].materialId == x){
      this.checkList.splice(j,1); 
      this.disabled=false;
}
for( const vari of this.listOfAllData){
  if(vari.materialId==x){
    vari.checked=false
  }
}
}

}
select(){
  for(var j=0;j<this.checkList.length;j++){     
    this.contrasts[j] =this.checkList[j].materialId 
}
this.contrastID = this.contrasts.toString();
} 
pushdata(arr1){
  let arr2=[]

arr1
.forEach((val) =>{   
arr2.push({
    materialId: val.id,
    name: val.name,
    manufacture: val.manufactoryName,
    thickness: val.model,
    reelNumber:val.reelNumber,
    model:val.strength,
  });

  })
  return arr2
}

}
