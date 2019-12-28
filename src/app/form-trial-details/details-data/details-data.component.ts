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
