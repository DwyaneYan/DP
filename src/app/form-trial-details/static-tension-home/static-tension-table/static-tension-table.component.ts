import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { GaussService } from 'src/app/gauss.service';

@Component({
  selector: 'app-static-tension-table',
  templateUrl: './static-tension-table.component.html',
  styleUrls: ['./static-tension-table.component.css']
})
export class StaticTensionTableComponent implements OnInit {
  public materialId
  trialDataDetails = []//小批量数据中的性能要求
  public trialDataDetail = []   //存放查到的试验数据详情
  trialDataDetail1=[] //小批量数据
  trialDataDetail2=[] //带头带中带尾数据
  isVisible = false;
  options = {}
table1=['测试机构','开始检测日期','检测结束日期','执行标准','试验设备','试验方法','标距(mm)']
table2=["位置",'方向','试样厚度a(mm)','屈服强度Rp(MPa)','抗拉强度Rm(MPa)','应变硬化指数(n)','断后伸长率A(％)','塑性应变比γ(%)','弹性模量E(MPa)','泊松比μ','最大力Fm(kN)','烘烤硬化值(BH)','180°弯曲试验(弯曲压头直径D)','V型冲击试验温度(℃)','V型冲击试验吸收能量(KV2/J)']
table3=['130px','130px','150px','150px','150px','150px','150px','150px','150px','100px','150px','150px','150px','150px','150px']
table4=["sampleCode",'direction','thickness','yieldStrength','tensileStrength','strainHardening','elongation','plasticStrainRatio','modulusOfElasticity','poissonRatio','maximumForce','bhValue','indenterDiameter','vImpactTemperature','vImpactEnergy']
table5=["testOrganization","dates","dateEnds","standard","equipment","testMethod","gaugeDistance"]
data=["trialDataDetail1","trialDataDetail2"]

  contrastTable(params, des,c) {
        let data = [];
        let xData = [];
        for (const iterator of c) {
          data.push(iterator[params]);
          xData.push(iterator['sampleCode']);    
        }
        let gauss=this.GaussService.gauss(data)
        let hist=this.GaussService.hist(data)
        this.isVisible = true
        this.options = this.GaussService.PlotPicture(des,hist.data1,gauss.xGauss)
  }
  
  constructor(
    public http: HttpClient,
    private route: ActivatedRoute,
    private ApiService: ApiService,
    private GaussService: GaussService,

  ) { 
    //从根路由获取路由参数
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
      })
  }

  ngOnInit() {
    this.GetTrialDataDetails();
    this.GetTrialDataDetail();
  }
  changeisVisible(){
    this.isVisible = false
  }
  public async GetTrialDataDetails() {
    await this.ApiService.getStaticTensionDataDetails(this.materialId)
    .then((res: any) => {    
    this.trialDataDetail = res
    }) 
    if(this.trialDataDetail.length){
        this.trialDataDetail[0].dates = this.ApiService.handleTime(this.trialDataDetail[0].dates)
        this.trialDataDetail[0].dateEnds = this.ApiService.handleTime(this.trialDataDetail[0].dateEnds)
    }
  this.trialDataDetail1=this.trialDataDetail.slice(0,this.trialDataDetail.length-9)
  this.trialDataDetail2=this.trialDataDetail.slice(this.trialDataDetail.length-9)
  }
  
  public async GetTrialDataDetail() {
    await this.ApiService.getStaticTensionDataDetailRequirements(this.materialId)
    .then((res: any) => {    
    this.trialDataDetails = res
    }) 
  }
}
