import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {

  @Input() materialId
  @Input() listTrial:any
  @Input() mater

  //查询表单  用于查该材料做了哪些试验,取出后填充页面左侧实验项目目录树
  public params = {
    Materiald: ''
  }

  // 查询结果  用于存放该材料做了哪些实验项目


  //存放实验项目目录树中要展示的值

  public trialTypeList = [] //试验类型列表,用于标记路由



  constructor(
    private experimentalItem: ExperimentalItemService,
    private route: ActivatedRoute,

  ) { } 

  ngOnInit() {
    // console.log(this.materialId)
    // this.GetTrialItemByMaterialId(this.materialId)
    // this.PutTrialItem()
    // console.log(this.listTrial);
    this.GetTrialItemByMaterialId()
}

  public async GetTrialItemByMaterialId() {    
    await this.experimentalItem.GetTrialItemByMaterialId(this.materialId).then((res: any) => {
      this.listTrial = res;
    })
    this.listTrial.forEach((val) => {
      this.trialTypeList.push( {
        trialType:val.trialType         
    })
  });console.log(this.trialTypeList)

  }
}
