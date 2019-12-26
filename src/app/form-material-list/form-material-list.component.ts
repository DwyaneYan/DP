import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MaterialListService } from './material-list.service'
interface ItemData {
  materialId:any;
  id: number;
  name: string;
  manufacture: string;
  thickness: string;
  typicalPart: string;
  appVehicle:string;
  date:string;
}

@Component({
  selector: 'app-form-material-list',
  templateUrl: './form-material-list.component.html',
  styleUrls: ['./form-material-list.component.css']
})
export class FormMaterialListComponent implements OnChanges, OnInit {


  @Input() data = [];
  

  constructor(private materiallistService: MaterialListService) { }

  //用于监听data的变化,实现每当新的请求数据发生时,更新材料列表
  ngOnChanges() {
    this.listOfAllData = [];
    // console.log(this.data);
    this.data
    .forEach((val, i, array) =>{
      this.listOfAllData.push({
        materialId: val.id,
        id: i,
        name: val.name,
        manufacture: val.manufactoryName,
        thickness: val.model,
        typicalPart:val.typicalPartName,
        appVehicle:'雅阁',
        date:val.date,
      });
    },
    // console.log(this.listOfAllData)
    )
  }  

public allmaterial=[]
//#region 模块 
  ngOnInit(): void {
this.Allmaterial()
  }


  
Allmaterial(){
    this.materiallistService.AllMaterials().then((res: any) => {
      this.allmaterial = res.items;
      this.listOfAllData = [];
       this.allmaterial.forEach((val, i, array) =>{
        this.listOfAllData.push({
          id: i,
          materialId: val.id,
          name: val.name,
          manufacture: val.manufactoryName,
          thickness: val.model,
          typicalPart:val.typicalPartName,
          appVehicle:'雅阁',
          date:val.date,          
        })})
      }    
      )
  }
  


  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: ItemData[] = [];
  listOfAllData: ItemData[] = [];
  mapOfCheckedId: { [key: string]: boolean } = {};

  currentPageDataChange($event: ItemData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }
  //#endregion



}
