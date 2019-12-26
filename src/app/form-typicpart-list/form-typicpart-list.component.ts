import { Component, OnInit } from '@angular/core';
import { TypicalpartService } from './typicalpart.service'
interface ItemData {
  id: number;
  name: string;
  code: string;
  car: string;
  remark:string;
  guid:string;
}
@Component({
  selector: 'app-form-typicpart-list',
  templateUrl: './form-typicpart-list.component.html',
  styleUrls: ['./form-typicpart-list.component.css']
})
export class FormTypicpartListComponent implements OnInit {
  dataSet: ItemData[] = [];
  public allpart=[]
  constructor(
    private typicalpartService: TypicalpartService
  ) { }

  ngOnInit() {
    this.Alltypicalpart()
  }
  Alltypicalpart(){
    this.typicalpartService. Alltypicalpart().then((res: any) => {
      this.allpart = res.items;
      this.dataSet = [];
       this.allpart.forEach((val, i, array) =>{
        this.dataSet.push({  
          id: i,   
          name: val.name,
          code: val.code,
          car: val.appliedVehicleType,
          remark:val.remark,
          guid:val.id
        })})
      }    
      )
  }
  AddtypicalpartInfo={
    name:"",
    code:"",
    appliedVehicleType:"",
    remark:"",
  }
  UpdatetypicalpartInfo={
    Id:"",
    Name:"",
    Code:"",
    AppliedVehicleType:"",
    Remark:""
  }
  Addtypicalpart(){
      this.typicalpartService.Addtypicalpart(this.AddtypicalpartInfo);
    }
    Updatetypicalpart(){
      this.typicalpartService.Updatetypicalpart(this.UpdatetypicalpartInfo);
    }
    public async deleteRow(i){
      this.typicalpartService.Deletetypicalpart({id:i});
     }
     Shuaxintypicalpart(){
      this.Alltypicalpart()
      this.AddtypicalpartInfo.name = '',
      this.AddtypicalpartInfo.code= '',
      this.AddtypicalpartInfo.appliedVehicleType = '',
      this.AddtypicalpartInfo.remark = ''
    }
}
