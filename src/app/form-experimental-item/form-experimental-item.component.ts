import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'

@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {

  @Input() materialId

  //查询表单  用于查该材料做了哪些试验,取出后填充页面左侧实验项目目录树
  public params = {
    Materiald: ''
  }

  // 查询结果  用于存放该材料做了哪些实验项目
  public listTrial

  //存放实验项目目录树中要展示的值
  public pacpList = []    //理化性能
  public processingList = []   //工艺性能


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
    this.GetTrialItemByMaterialId(this.materialId)
}



  public async GetTrialItemByMaterialId(materialId) {
    this.params.Materiald = this.materialId;
    await this.experimentalItem.GetTrialItemByMaterialId(this.params).then((res: any) => {
      this.listTrial = res;
    })
    this.listTrial.forEach((val, i) => {
      if (val.parentName == "理化性能") {
        this.pacpList.push(val)
      }
      else {
        this.processingList.push(val)
      }
    })
  }



}
