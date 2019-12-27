import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'

@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {

  @Input() materialId
  @Input() listTrial:any

  //查询表单  用于查该材料做了哪些试验,取出后填充页面左侧实验项目目录树
  public params = {
    Materiald: ''
  }

  //查询结果  用于存放该材料做了哪些实验项目
  // public listTrial = []



  listOfData = [
    {
      key: '1',
      trademark: 'DC01',
      thickness: '1.2mm',
      manufacturer: '邯钢',
      standard: 'GB/288-2010',
      date: '2018.5.12'

    }
  ];

  constructor(
    private experimentalItem: ExperimentalItemService,
  ) { }

  ngOnInit() {
    console.log(this.materialId)
    // this.GetTrialItemByMaterialId(this.materialId)
    // this.PutTrialItem()

    console.log(this.listTrial);


    this.listTrial.forEach((val, i) => {
      console.log(val)
      // console.log(val.parentName)
      if (val.parentName == "理化性能") {
        this.pacpList.push(val)
      }
      else {
        this.processingList.push(val)
      }
    })
  }

  public pacpList = []    //理化性能
  public processingList = []   //工艺性能

  // public async GetTrialItemByMaterialId(materialId) {
  //   console.log(materialId);
  //   this.params.Materiald = this.materialId;
  //   await this.experimentalItem.GetTrialItemByMaterialId(this.params).then((res: any) => {
  //     this.listTrial = res;
  //     console.log(this.listTrial);
  //   })


  public PutTrialItem (){

    // console.log(this.pacpList)
    // console.log(this.processingList)
  }
  
}
