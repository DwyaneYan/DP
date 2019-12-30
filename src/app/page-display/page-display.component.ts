import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayService } from './display.service'

@Component({
  selector: 'app-page-display',
  templateUrl: './page-display.component.html',
  styleUrls: ['./page-display.component.css']
})
export class PageDisplayComponent implements OnInit {

  //材料id, 在进入展示页面时由材料首页传递进来
  public materialId

  //查询此材料做了哪些试验时使用的改材料的查询参数
  public getTrialParams = {
    Materiald: ''
  }  
  //查询结果  用于存放该材料做了哪些实验项目
  public listTrial:[]

  public pacpList = []    //理化性能
  public processingList = []   //工艺性能






  constructor(    
    private route: ActivatedRoute,
    private displayService: DisplayService,
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
    // console.log(this.materialId);
    this.GetTrialItemByMaterialId(this.materialId)
    this.Thematerial()
    // this.PutTrialItem()    
  }

  public thematerial=[];
  public mater=[]
  ma={
    id:""
  }
 Thematerial(){
  this.ma.id=this.materialId
    this.displayService.Getmaterial(this.ma).then((res: any) => {
      this.thematerial = res.items;
      console.log(this.thematerial)
       this.thematerial.forEach((val, i, array) =>{
        this.mater.push({
          name: val.name,
          manufacture: val.manufactoryName,
          thickness: val.model,
          typicalPart:val.typicalPartName,
          date:val.date,          
        })})
      }   
      )
      console.log(this.mater)
  }

  public async GetTrialItemByMaterialId(materialId) {
    console.log(materialId);
    this.getTrialParams.Materiald = this.materialId;
    await this.displayService.GetTrialItemByMaterialId(this.getTrialParams).then((res: any) => {
      this.listTrial = res;
      console.log(this.listTrial);
    })
  }
}
