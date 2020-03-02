import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MaterialListService } from './material-list.service'


@Component({
  selector: 'app-form-material-list',
  templateUrl: './form-material-list.component.html',
  styleUrls: ['./form-material-list.component.css']
})
export class FormMaterialListComponent implements OnChanges, OnInit {

  listOfAllData = [];
  displayData=[];
  checkList=[];
  mapOfCheckedId: { [key: string]: boolean } = {};
  public allmaterial=[]
  checkbox = false;
  allChecked = false;
  indeterminate = false;
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
      this.listOfAllData.push({
        materialId: val.id,
        id: i,
        name: val.name,
        manufacture: val.manufactoryName,
        thickness: val.model,
        strength:val.strength,
        typicalPart:val.typicalPartName,
        appVehicle:val.appliedVehicleType,
        date:val.date,
      });
    },
    // console.log(this.listOfAllData)
    )
//     this.selectedData = [];
// this.AllData.forEach(item => {
//  this.selectedData.push(item.id);

  }  


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
    this.listOfAllData.push({
      id: i,
      materialId: val.id,
      name: val.name,
      manufacture: val.manufactoryName,
      thickness: val.model,
      strength:val.strength,
      typicalPart:val.typicalPartName,
      appVehicle:val.appliedVehicleType,
      date:val.date,          
    })})
      }    
      )
  }


  currentPageDataChange($event): void {
    this.displayData = $event;
    this.refreshStatus();
  }
  
  
  refreshStatus(): void {
    const validData = this.displayData.filter(value => !value.disabled);
  this.checkList=this.listOfAllData.filter(value => value.checked)
    const allChecked = validData.length > 0 && validData.every(value => value.checked === true);
    const allUnChecked = validData.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }
  
  checkAll(value: boolean): void {
 this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
      
    }
    );
    this.refreshStatus();
    
  }
  //#endregion

shanchu(x){
  for(var j=0;j<this.checkList.length;j++){
    if(this.checkList[j].materialId == x){
      this.checkList[j].checked = false;
      this.checkList.splice(j,1)
    }
  }
  console.log(this.checkList)
}
}
