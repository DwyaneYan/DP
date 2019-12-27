import { Component, OnInit } from '@angular/core';
import { MateriaService } from './materia.service'
interface ItemData {
  id: number;
  name: string;
  code: string;
  model: string;
  strength:string;
  guid:string;
  materialtype:number;
  date:string;
  car:string;
  remark:string;
  typicalpartid:string;
  manufactoryid:string; 
}
@Component({
  selector: 'app-form-materia-list',
  templateUrl: './form-materia-list.component.html',
  styleUrls: ['./form-materia-list.component.css']
})

export class FormMateriaListComponent implements OnInit {

  constructor(private MateriaService: MateriaService) { }
  dataSet: ItemData[] = [];
  public allfac=[]
  ngOnInit() {
    this.Allmaterial()
  }

  Allmaterial(){
    this.MateriaService.Allmaterials().then((res: any) => {
      this.allfac = res.items;
      this.dataSet = [];
       this.allfac.forEach((val, i, array) =>{
        this.dataSet.push({  
          id: i,   
          name: val.name,
  code: val.code,
  model:val.model,
  strength:val.strength,
  guid:val.id,
  materialtype:val.materialType,
  date:val.date,
  car:val.appliedVehicleType,
  remark:val.remark,
  typicalpartid:val.typicalPartId,
  manufactoryid:val.manufactoryId 
        })})
      }    
      );
      
  }
  Addmaterial={
    name:"",
    code:"",
    model:"",
    strength:"",
    type:"",
    date:"",
    appliedVehicleType:"",
    reamrk:"",
    typicalpartid:"",
    manufactoryid:""
  }
  Addmaterials(){
    this.MateriaService.Addmaterial(this. Addmaterial);
  }
  Updatematerial={
    Id:"",
    name:"",
    code:"",
    model:"",
    strength:"",
    type:"",
    date:"",
    appliedVehicleType:"",
    reamrk:"",
    typicalpartid:"",
    manufactoryid:""
  }
  Updatematerials(){
    this.MateriaService.Updatematerial(this.Updatematerial);
  }
  Shuaxinmaterial(){
    this.Allmaterial()
  }

  deleteRow(i){

 this.MateriaService.Deletematerial({id:i});

  }

}
