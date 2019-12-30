import { Component, OnInit, Input } from '@angular/core';
import  { DetailsDataService } from './details-data.service'
@Component({
  selector: 'app-details-data',
  templateUrl: './details-data.component.html',
  styleUrls: ['./details-data.component.css']
})
export class DetailsDataComponent implements OnInit {

  @Input() materialId
  @Input() trialType


  public params = {
    trialType:'',
  }

  //存放查到的试验数据详情
  public trialDataDetail = [] 


  //#region 表格控件

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
  //#endregion
  
  
  constructor(
    private dataDetailsService: DetailsDataService,
  ) { }

  ngOnInit() {
    // console.log(this.materialId,this.trialType)
    this.GetTrialDataDetails()



  }

  public async GetTrialDataDetails() {
    this.params.trialType = this.trialType;
    // console.log(this.params)
    await this.dataDetailsService.GetTrialDataDetails(this.params,this.materialId).then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
    })    
  }

  



}
