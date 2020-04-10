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
  constructor(
    private materiallistService: MaterialListService,
    ) { }
  //用于监听data的变化,实现每当新的请求数据发生时,更新材料列表
  ngOnChanges() {
    this.listOfAllData= this.pushdata(this.data)
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
Allmaterial(){
    let params = this.params
    this.materiallistService.AllMaterials(params).then((res: any) => {
    this.allmaterial = res.items;
    this.listOfAllData= this.pushdata(this.allmaterial)
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
.forEach((val, i) =>{    
  if(val.maxModel==null){
arr2.push({
    materialId: val.id,
    name: val.name,
    manufacture: val.manufactoryName,
    thickness: val.minModel,
    reelNumber:val.reelNumber,
    typicalPart:val.typicalPartName,
    appVehicle:val.appliedVehicleType,
    date:val.date+'-'+val.dateEnd,
  });}
 else{
   arr2.push({
      materialId: val.id,
      name: val.name,
      manufacture: val.manufactoryName,
      thickness: val.minModel+"-"+val.maxModel,
      strength:val.strength,
      typicalPart:val.typicalPartName,
      appVehicle:val.appliedVehicleType,
      date:val.date+'-'+val.dateEnd,
    });
 }
  })
  return arr2
}

}
