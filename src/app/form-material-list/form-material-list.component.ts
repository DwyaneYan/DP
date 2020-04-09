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
  @Input() data = [];
  @Input() params ;

  constructor(
    private materiallistService: MaterialListService,
    ) { }

  //用于监听data的变化,实现每当新的请求数据发生时,更新材料列表
  ngOnChanges() {
    this.listOfAllData = [];
    this.data
    .forEach((val, i) =>{    
      if(val.maxModel==null){
      this.listOfAllData.push({
        materialId: val.id,
        id: i,
        name: val.name,
        manufacture: val.manufactoryName,
        thickness: val.minModel,
        strength:val.strength,
        typicalPart:val.typicalPartName,
        appVehicle:val.appliedVehicleType,
        date:val.date,
      });}
     else{
        this.listOfAllData.push({
          materialId: val.id,
          id: i,
          name: val.name,
          manufacture: val.manufactoryName,
          thickness: val.minModel+"-"+val.maxModel,
          strength:val.strength,
          typicalPart:val.typicalPartName,
          appVehicle:val.appliedVehicleType,
          date:val.date,
        });
     }
      })
  
    // console.log(this.listOfAllData)
  }
//     this.selectedData = [];
// this.AllData.forEach(item => {
//  this.selectedData.push(item.id);


//#region 模块 

  ngOnInit(): void {
    this.Allmaterial();
  
  } 
Allmaterial(){
    let params = this.params
    // console.log(params)
    this.materiallistService.AllMaterials(params).then((res: any) => {
    this.allmaterial = res.items;
    // console.log(this.allmaterial)
    this.listOfAllData = [];
    this.allmaterial.forEach((val, i) =>{
      if(val.maxModel==null){
    this.listOfAllData.push({
      id: i,
      materialId: val.id,
      name: val.name,
      manufacture: val.manufactoryName,
      thickness: val.minModel,
      strength:val.strength,
      typicalPart:val.typicalPartName,
      appVehicle:val.appliedVehicleType,
      date:val.date,          
    })}
    else{
      this.listOfAllData.push({
        id: i,
        materialId: val.id,
        name: val.name,
        manufacture: val.manufactoryName,
        thickness: val.minModel+"-"+val.maxModel,
        strength:val.strength,
        typicalPart:val.typicalPartName,
        appVehicle:val.appliedVehicleType,
        date:val.date,          
      })
    }
  })
      }    
      
      )

  }
  
 compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
  currentPageDataChange($event): void {

}
  contrasts=[]
  contrastID
  uncheckList
al=[]
dis=[]
  refreshStatus(val,id): void {
    debugger;
    const validData = this.displayData.filter(value => !value.disabled);
  //   sessionStorage.setItem('list', 'JSON.stringify(this.listOfAllData)');
  //  sessionStorage.getItem('list') = sessionStorage.getItem('list')+','+JSON.stringify(this.listOfAllData);
  //   let arra3=JSON.parse( sessionStorage.getItem('list') )
  if(val){
    this.checkList = this.checkList.concat(this.listOfAllData.filter(value => value.checked)) 
    this.checkList = [...new Set(this.checkList)]; 
    console.log(this.checkList.length); 
    if(this.checkList.length>6){
      this.disabled=true
      window.alert("最多7个")
    }
  }else{
    this.checkList = this.checkList.filter(value => {return value.id!==id})
  }
  
    // const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    // const allUnChecked = validData.every(value => !value.checked);
    // this.allChecked = allChecked;
    // this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }    
    }
    );
    this.refreshStatus(value,'-1');
    
  }
  //#endregion

shanchu(x){
  for(var j=0;j<this.checkList.length;j++){
    if(this.checkList[j].materialId == x){
      this.checkList[j].checked = false;
      this.checkList.splice(j,1); 
      this.disabled=false;
}

}

}
select(){
  for(var j=0;j<this.checkList.length;j++){     
    this.contrasts[j] =this.checkList[j].materialId 
}
console.log(typeof(this.contrasts))
this.contrastID = this.contrasts.toString();
console.log(this.contrasts)


}
}
