import { Component, OnInit, Input, OnChanges } from '@angular/core';

interface ItemData {
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
  

  constructor() { }

  //用于监听data的变化,实现每当新的请求数据发生时,更新材料列表
  ngOnChanges() {
    this.listOfAllData = [];
    console.log(this.data);
    this.data.forEach((val, i, array) =>{
      this.listOfAllData.push({
        id: i,
        name: val.name,
        manufacture: val.manufactoryName,
        thickness: val.model,
        typicalPart:val.typicalPartName,
        appVehicle:'雅阁',
        date:val.date,
      });
    },
    console.log(this.listOfAllData)
    )
    
  }  

//#region 模块 
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.listOfAllData.push({
        id: i,
        name: `DC01`,
        manufacture: `邯钢`,
        thickness: `1.${i}mm`,
        typicalPart:'车门板',
        appVehicle:'雅阁',
        date:"2018-10-12",
      });
    }
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
