import { Component, OnInit } from '@angular/core';
import { FactoryService } from './factory.service'
interface ItemData {
  name: string;
  address: string;
  TelePhone: string;
}
@Component({
  selector: 'app-form-factory-list',
  templateUrl: './form-factory-list.component.html',
  styleUrls: ['./form-factory-list.component.css']
})
export class FormFactoryListComponent implements OnInit {
  dataSet: ItemData[] = [];
  constructor(private factoryService: FactoryService) { }
  
  public allfac=[]
  ngOnInit() {
    this.Allfactory()
  }
Allfactory(){
  this.factoryService.Allfactorys().then((res: any) => {
    this.allfac = res.items;
    this.dataSet = [];
     this.allfac.forEach((val, i, array) =>{
      this.dataSet.push({       
        name: val.name,
        address: val.address,
        TelePhone: val.telePhone,
      })})
    }    
    )
}
Addmanufac={
  name:"",
  address:"",
  telephone:"",
}
Addmanufactory(){
  this.factoryService;
}
}
