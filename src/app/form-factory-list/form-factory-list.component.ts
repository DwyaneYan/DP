import { Component, OnInit } from '@angular/core';
import { FactoryService } from './factory.service'
interface ItemData {
  id: number;
  name: string;
  address: string;
  TelePhone: string;
  remark:string;
  guid:string;
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
        id: i,   
        name: val.name,
        address: val.address,
        TelePhone: val.telePhone,
        remark:val.remark,
        guid:val.id
      })})
    }    
    )
}
Addmanufac={
  name:"",
  address:"",
  telephone:"",
  remark:""
}
Updatemanufac={
  id:"",
  name:"",
  address:"",
  telephone:"",
  remark:""
}
Deletemanufac={
  id:""
}

Addmanufactory(){
  this.factoryService.Addmanufactory(this.Addmanufac);
}
Updatefactory(){
  this.factoryService.Updatefactory(this.Updatemanufac);
}
 deleteRow(i){
 this.factoryService.Deletemanufactory({id:i});
}
Shuaxinfactory(){
  this.Allfactory()
  this.Addmanufac.name = '',
  this.Addmanufac.address = '',
  this.Addmanufac.telephone = '',
  this.Addmanufac.remark = ''
}
}
