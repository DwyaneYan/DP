import { Component, OnInit } from '@angular/core';

interface ItemData {
  id: number;
  name: string;
  manufacture: string;
  thickness: string;
  typicalPart: string;
  appVehicle:string;
}

@Component({
  selector: 'app-form-material-list-fake',
  templateUrl: './form-material-list-fake.component.html',
  styleUrls: ['./form-material-list-fake.component.css']
})
export class FormMaterialListFakeComponent implements OnInit {

  constructor() { }

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

  ngOnInit() {
    this.listOfAllData.push({
      id:2,
      name:`DC01`,
      manufacture:'邯钢',
      thickness:'1.2mm',
      typicalPart:'车门板',
      appVehicle:'雅阁',
    });
  }

}
