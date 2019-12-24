import { Component, OnInit } from '@angular/core';
//导入操作数据服务
import { OperateDataService } from '../operate-data.service'
import { Input, TemplateRef } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-page-system-manage',
  templateUrl: './page-system-manage.component.html',
  styleUrls: ['./page-system-manage.component.css']
})
export class PageSystemManageComponent implements OnInit {

//#region 试验Trial
  AddInfo = {
    Name:"",
    TrialType:"",
    ParentId:"",
  }

  DeleteInfo={
    Id:"",
  }

  UpdateInfo={
    Id:"",
    Name:"",
    TrialType:"",
    ParentId:"",
  }

  GetInfo={
    Id:"",
    Name:"",
    TrialType:"",
    ParentId:"",
  }
//#endregion

//#region 厂家
Addmanufac={
  name:"",
  address:"",
  telephone:"",
}

Deletemanufac={
  id:"",
}

Updatefac={
  name:"",
  address:"",
  telephone:"",
}

Getfac={
  id:"",
}
//#endregion

//#region 材料
 Addmateria={
  name:"",
  MaterialType:"",
  ManufactoryId:"",
  model:"",
  strength:"",
  AppliedVehicleType:"",
  TypicalPartId:""
   }
Deletemateria={
  id:"",
}
Updatemateria={
  id:"",
  name:"",
  strength:"",
  date:"",
  appliedVehicleType:"",
}


//#endregion

//#region 典型零部件

AddtypicalpartInfo = {
  Name:"",
  Code:"",
  AppliedVehicleType:"",
  Remark:"",
  api:"http://localhost:60001/api/hangang/typicalPart/typicalPart"
}

DeletetypicalpartInfo={
  Id:"",
  api:"http://localhost:60001/api/hangang/typicalPart/"//服务里面加id
}

UpdatetypicalpartInfo={
  Id:"",
  Name:"",
  Code:"",
  AppliedVehicleType:"",
  Remark:"",
  api:"http://localhost:60001/api/hangang/typicalPart/typicalPart"
}

GettypicalpartInfo={
  // Id:"",
  Name:"",
  Code:"",
  // AppliedVehicleType:"",
  // Remark:"",
  api:"http://localhost:60001/api/hangang/typicalPart/typicalParts"
}
//#endregion

//#region 实验材料
AddmaterialtrialInfo = {
  
  Name :"",
  Code:"",
  Remark :"",
  MaterialId:"",
  TrialId:""
}

DeletematerialtrialInfo={
  Id:"",
}

UpdatematerialtrialInfo={
  Id:"",
  Name :"",
  Code:"",
  Remark :"",
  MaterialId:"",
  TrialId:""
}

GetmaterialtrialInfo={
  Id:"",
  Name:"",

}
//#endregion



constructor(
  private operateDataService: OperateDataService,  //实例化一个操作数据服务
  private modalService: NzModalService,
  ) { }
ngOnInit() {
}


  AddTrial(AddInfo) {

    // console.log(this.AddInfo);
    // return
  
    this.operateDataService.AddTrial(this.AddInfo);
    
  }

  DeleteTrial(DeleteInfo) {
    this.operateDataService.DeleteTrial(this.DeleteInfo);
  }

  UpdateTrial(UpdateInfo) {
    this.operateDataService.UpdateTrial(this.UpdateInfo);
  }
  
  GetTrial(GetInfo) {
    this.operateDataService.GetTrial(this.GetInfo);
  }

  ///////////////////////////////////////
  Addmanufactory(){
    this.operateDataService.Addmanufactory(this.Addmanufac);
  }
  Deletemanufactory(){
    this.operateDataService.Deletemanufactory(this.Deletemanufac);
  }
  Updatefactory(){
    this.operateDataService.Updatefactory(this.Updatefac);
  }
  Getfactory(){
   let res=this.operateDataService.Getfactory(this.Getfac);
    console.log(res)
  }
  Addmaterial(){
    this.operateDataService.Addmaterial(this.Addmateria);
  }
  Deletematerial(){
    this.operateDataService.Deletematerial(this.Deletemateria);
  }
  Updatematerial(){
    this.operateDataService.Updatematerial(this.Updatemateria);
  }
  Getmaterial(){
  let res=  this.operateDataService.Getmaterial(this.Addmateria);
  console.log(res)
  }
  ///////////////////////////////////////////////////
  Addtypicalpart(AddtypicalpartInfo) {

    // console.log(this.AddInfo);
    // return
  
    this.operateDataService.Addtypicalpart(this.AddtypicalpartInfo);
  }

  Deletetypicalpart(DeletetypicalpartInfo) {
    this.operateDataService.Deletetypicalpart(this.DeletetypicalpartInfo);
  }

  Updatetypicalpart(UpdatetypicalpartInfo) {
    this.operateDataService.Updatetypicalpart(this.UpdatetypicalpartInfo);
  }
  
  Gettypicalpart() {
    this.operateDataService.Gettypicalpart(this.GettypicalpartInfo);
  }
  
  Addmaterialtrial() {

    // console.log(this.AddInfo);
    // return
  
    this.operateDataService.Addmaterialtrial(this.AddmaterialtrialInfo);
  }

  Deletematerialtrial() {
    this.operateDataService.Deletematerialtrial(this.DeletematerialtrialInfo);
  }

  Updatematerialtrial() {
    this.operateDataService.Updatematerialtrial(this.UpdatematerialtrialInfo);
  }
  
  Getmaterialtrial() {
    this.operateDataService.Getmaterialtrial(this.GetmaterialtrialInfo);
  }
  
}
