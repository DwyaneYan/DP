import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {

  @Input() materialId

  //查询表单  用于查该材料做了哪些试验,取出后填充页面左侧实验项目目录树
  public params={ 
    Materiald:''
  }

  //查询结果  用于存放该材料做了哪些实验项目
  public listExperimentalItem



  listOfData = [
    {
      key: '1',
      trademark: 'DC01',
      thickness: '1.2mm',
      manufacturer: '邯钢',
      standard:'GB/288-2010',
      date:'2018.5.12'

    }
  ];

  constructor(
    private experimentalItem: ExperimentalItemService,
    private route: ActivatedRoute,

  ) { } 

  ngOnInit() {
    // console.log(this.materialId)
    this.GetTrialItemByMaterialId(this.materialId)
    this.experimentalItem.Getmaterial(this.materialId)
  }

  public async GetTrialItemByMaterialId(materialId){
    console.log(materialId);
    this.params.Materiald = this.materialId;
    await this.experimentalItem.GetTrialItemByMaterialId(this.params).then((res:any) =>{
      console.log(res);
      this.listExperimentalItem = res.items;
      console.log(this.listExperimentalItem);
    })
    
  }

}
